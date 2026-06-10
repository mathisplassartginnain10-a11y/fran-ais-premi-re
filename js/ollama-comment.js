/* ollama-comment.js — Commentaire composé via Ollama (local) */

const OLLAMA_COMMENT_STORAGE = 'bac_ollama_comment_cfg';

const OLLAMA_COMMENT_DEFAULTS = {
  enabled: false,
  baseUrl: 'http://127.0.0.1:11434',
  model: 'bac-qwen3-14b',
  fallbackModel: 'qwen3:14b',
  numCtx: 8192,
  minWords: 1500,
};

const OLLAMA_COMMENT_TEXTE_MIN = 80;
const OLLAMA_COMMENT_TEXTE_GENERAL = 200;
const OLLAMA_COMMENT_SECTION_WORDS = { part: [500, 650], conclusion: [200, 300] };
const OLLAMA_COMMENT_TOTAL_WORDS = [1500, 2000];
const OLLAMA_COMMENT_CITE_MATCH_RATIO = 0.7;
const OLLAMA_TRANSITIONS = ['par ailleurs', 'en outre', 'de plus', 'de surcroît', 'en effet', 'ainsi'];
/** Fin de section : prochain titre ### ou fin du document (évite $ multiligne = corps vide). */
const OLLAMA_SECTION_END = '(?=^###\\s*(?:Partie\\s*[IVX\\d]+\\s*[—–\\-]|Conclusion\\b)|(?![\\s\\S]))';
const OLLAMA_SECTION_SPLIT_RE = new RegExp(`^(###\\s*(?:Partie\\s*[IVX\\d]+|Conclusion)[^\\n]*)\\n([\\s\\S]*?)${OLLAMA_SECTION_END}`, 'gm');
const OLLAMA_PART_BODY_RE = new RegExp(`###\\s*Partie\\s*([IVX\\d]+)\\s*[—–\\-]\\s*([^\\n]+)\\n([\\s\\S]*?)(?=###\\s*Partie\\s*[IVX\\d]+\\s*[—–\\-]|###\\s*Conclusion\\b|(?![\\s\\S]))`, 'gi');

let _ollamaPingCache = { ok: null, at: 0 };
let _ollamaMode = null;

function ollamaCommentSleep(ms, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException('Aborted', 'AbortError'));
      return;
    }
    const t = setTimeout(resolve, ms);
    signal?.addEventListener('abort', () => {
      clearTimeout(t);
      reject(new DOMException('Aborted', 'AbortError'));
    }, { once: true });
  });
}

async function ollamaCommentDetectMode(force) {
  if (_ollamaMode && !force) return _ollamaMode;
  const cfg = ollamaCommentLoadCfg();
  const directBase = cfg.baseUrl.replace(/\/$/, '');

  if (typeof location !== 'undefined' && location.protocol !== 'file:') {
    try {
      const r = await fetch('/api/config', { signal: AbortSignal.timeout(2500) });
      if (r.ok) {
        const j = await r.json();
        if (j.ollamaProxy) {
          _ollamaMode = {
            type: 'proxy',
            base: `${location.origin}${j.ollamaProxy}`,
            ensureUrl: j.ensureUrl || '/api/ollama/ensure',
            releaseUrl: j.releaseUrl || '/api/ollama/release',
          };
          return _ollamaMode;
        }
      }
    } catch (e) { /* pas le serveur local */ }
  }

  _ollamaMode = { type: 'direct', base: directBase, ensureUrl: null, releaseUrl: null };
  return _ollamaMode;
}

function ollamaCommentResolveBase(mode) {
  return (mode || _ollamaMode)?.base || ollamaCommentLoadCfg().baseUrl.replace(/\/$/, '');
}

async function ollamaCommentPingBase(base, timeoutMs) {
  try {
    const r = await fetch(`${base}/api/tags`, { signal: AbortSignal.timeout(timeoutMs || 4500) });
    return r.ok;
  } catch (e) {
    return false;
  }
}

async function ollamaCommentCallEnsure(onStatus, signal, forceRestart) {
  const mode = await ollamaCommentDetectMode(true);
  if (mode.type !== 'proxy' || !mode.ensureUrl) return null;
  const paths = forceRestart
    ? [`${mode.ensureUrl}?restart=1`, '/api/launch?restart=1']
    : [mode.ensureUrl, '/api/launch'];
  for (const path of paths) {
    try {
      onStatus?.(forceRestart ? 'Arrêt Ollama + relance VRAM…' : 'Vérification VRAM…');
      const r = await fetch(path, {
        method: 'POST',
        signal: signal || AbortSignal.timeout(660000),
      });
      if (r.status === 404) continue;
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok && j.gpu === true) return j;
      if (forceRestart && r.ok && j.ok && j.gpu !== true) continue;
    } catch (e) { /* essai suivant */ }
  }
  return null;
}

/** Démarre / attend Ollama avant une requête IA */
async function ollamaCommentEnsureReady(opts) {
  opts = opts || {};
  const onStatus = opts.onStatus;
  const signal = opts.signal;
  _ollamaPingCache = { ok: null, at: 0 };

  const mode = await ollamaCommentDetectMode(true);

  if (mode.type === 'proxy' && mode.ensureUrl) {
    let j = await ollamaCommentCallEnsure(onStatus, signal, true);
    if (!j) j = await ollamaCommentCallEnsure(onStatus, signal, true);
    if (!j || j.gpu !== true) {
      throw new Error((j && j.error) || 'VRAM NVIDIA indisponible — clique ⚡ Démarrer tout');
    }
    const vram = j.vramMb != null ? ` · ${j.vramMb} MiB` : '';
    onStatus?.(`● ${j.processor || '100% GPU'}${vram} · ${j.model || 'bac-qwen3-14b'}`);
    return mode;
  }

  onStatus?.('Connexion à Ollama…');
  for (let i = 0; i < 24; i++) {
    if (await ollamaCommentPingBase(mode.base, 4000)) {
      onStatus?.('Ollama connecté');
      return mode;
    }
    onStatus?.(`En attente d'Ollama… (${i + 1}/24)`);
    await ollamaCommentSleep(1500, signal);
  }

  const hint = typeof location !== 'undefined' && location.protocol === 'file:'
    ? ' Ouvre UNIQUEMENT via start.ps1 (http://127.0.0.1:8765) — sinon Ollama charge en RAM.'
    : (typeof location !== 'undefined' && location.port !== '8765'
      ? ' Utilise start.ps1 pour forcer la VRAM CUDA.'
      : ' Lance ollama serve ou double-clique start.ps1.');
  throw new Error(`Ollama ne répond pas.${hint}`);
}

async function ollamaCommentReleaseGpu(opts) {
  opts = opts || {};
  const onStatus = opts.onStatus;
  const stop = opts.stop !== false;
  onStatus?.('Arrêt Ollama · libération VRAM…');
  _ollamaPingCache = { ok: null, at: 0 };

  const mode = await ollamaCommentDetectMode(false);
  if (mode.type === 'proxy' && mode.releaseUrl) {
    try {
      const q = stop ? '?stop=1' : '?stop=0';
      const r = await fetch(`${mode.releaseUrl}${q}`, {
        method: 'POST',
        signal: opts.signal || AbortSignal.timeout(45000),
      });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) {
        const vram = j.vramMb != null ? ` · ${j.vramMb} MiB VRAM` : '';
        onStatus?.(j.stopped ? `Ollama arrêté${vram} — PC libéré` : `Modèle déchargé${vram}`);
        return j;
      }
    } catch (e) { /* fallback direct */ }
  }

  const base = ollamaCommentResolveBase(mode);
  if (await ollamaCommentPingBase(base, 2500)) {
    await ollamaCommentUnloadAll(base);
  }
  onStatus?.('Modèle déchargé · VRAM libérée');
  return { ok: true, released: true };
}

async function ollamaCommentUnloadAll(base) {
  try {
    const r = await fetch(`${base}/api/ps`, { signal: AbortSignal.timeout(4000) });
    if (!r.ok) return;
    const j = await r.json();
    for (const m of j.models || []) {
      await ollamaCommentUnloadModel(base, m.name);
    }
  } catch (e) { /* ignore */ }
  await ollamaCommentUnloadModel(base, OLLAMA_COMMENT_DEFAULTS.fallbackModel);
  await ollamaCommentUnloadModel(base, OLLAMA_COMMENT_DEFAULTS.model);
}

async function ollamaCommentUnloadModel(base, modelName) {
  if (!modelName) return;
  try {
    await fetch(`${base}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: modelName,
        keep_alive: 0,
        messages: [{ role: 'user', content: '.' }],
        stream: false,
      }),
      signal: AbortSignal.timeout(8000),
    });
  } catch (e) { /* ignore */ }
}

async function ollamaCommentWarmModel(mode, cfg, signal, onStatus, opts) {
  opts = opts || {};
  if (mode.type === 'proxy') {
    let j = await ollamaCommentCallEnsure(onStatus, signal, false);
    if (!j || j.gpu !== true) {
      onStatus?.('Correction VRAM automatique…');
      j = await ollamaCommentCallEnsure(onStatus, signal, true);
    }
    if (!j || j.gpu !== true) {
      throw new Error((j && j.error) || 'VRAM NVIDIA indisponible après redémarrage auto');
    }
    const vram = j.vramMb != null ? ` · ${j.vramMb} MiB` : '';
    onStatus?.(`VRAM OK · ${j.processor || '100% GPU'}${vram} · génération…`);
    return;
  }

  const base = ollamaCommentResolveBase(mode);
  const model = ollamaCommentResolveModel(cfg);
  onStatus?.(`Chargement GPU · ${model}…`);
  const body = ollamaCommentRequestBody({ ...cfg, model }, {
    messages: [{ role: 'user', content: 'OK' }],
    stream: false,
    options: { num_predict: 1, num_thread: 2 },
  });
  const r = await fetch(`${base}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal,
  });
  if (!r.ok) {
    const err = await r.text().catch(() => '');
    throw new Error(`Chargement GPU échoué (${r.status})${err ? ': ' + err.slice(0, 80) : ''}`);
  }
  const gpu = await ollamaCommentFetchGpuStatus(base);
  if (gpu && !gpu.isFullGpu) {
    if (opts.allowCpu) {
      onStatus?.(`⚠ ${gpu.processor || 'CPU/RAM'} — poursuite (mode test CPU autorisé)`);
    } else {
      throw new Error(`Modèle hors VRAM (${gpu.processor || 'CPU/RAM'}) — utilise le bouton ⚡`);
    }
  } else if (gpu) {
    onStatus?.(`VRAM OK · ${gpu.processor} · génération…`);
  }
}

function ollamaCommentLoadCfg() {
  const stored = typeof safeLocalGet === 'function'
    ? safeLocalGet(OLLAMA_COMMENT_STORAGE, {})
    : {};
  return { ...OLLAMA_COMMENT_DEFAULTS, ...stored };
}

function ollamaCommentResolveModel(cfg) {
  return cfg.model || OLLAMA_COMMENT_DEFAULTS.model;
}

/** Options API : priorité GPU (VRAM) plutôt que RAM système */
function ollamaCommentGpuOptions(cfg, extra) {
  cfg = cfg || ollamaCommentLoadCfg();
  return {
    num_ctx: cfg.numCtx || 8192,
    num_gpu: 999,
    num_thread: 2,
    num_batch: 384,
    temperature: 0.68,
    num_predict: extra?.num_predict ?? 5800,
    ...(extra || {}),
  };
}

/** Options dédiées à la génération du commentaire complet (longue rédaction) */
function ollamaCommentGenerateOptions(cfg) {
  return ollamaCommentGpuOptions(cfg, {
    num_predict: 7200,
    temperature: 0.55,
    top_p: 0.86,
    repeat_penalty: 1.18,
  });
}

function ollamaCommentPolishOptions(cfg) {
  return ollamaCommentGpuOptions(cfg, {
    num_predict: 7200,
    temperature: 0.32,
    top_p: 0.82,
    repeat_penalty: 1.22,
  });
}

function ollamaCommentRequestBody(cfg, payload) {
  payload = payload || {};
  const useGenerate = payload._fullCommentary;
  delete payload._fullCommentary;
  return {
    model: ollamaCommentResolveModel(cfg),
    keep_alive: '10m',
    think: false,
    ...payload,
    options: useGenerate
      ? ollamaCommentGenerateOptions(cfg)
      : ollamaCommentGpuOptions(cfg, payload.options),
  };
}

async function ollamaCommentFetchGpuStatus(base) {
  const mode = await ollamaCommentDetectMode(false);
  if (mode.type === 'proxy') {
    try {
      const r = await fetch('/api/ollama/gpu', { signal: AbortSignal.timeout(10000) });
      if (r.ok) {
        const j = await r.json();
        return {
          name: j.model,
          processor: j.processor || '',
          size: j.size,
          vramMb: j.vramMb,
          isFullGpu: j.gpu === true,
        };
      }
      const r2 = await fetch('/api/ollama/ensure', { signal: AbortSignal.timeout(10000) });
      if (r2.ok) {
        const j2 = await r2.json();
        return {
          name: j2.model,
          processor: j2.processor || '',
          size: j2.size,
          vramMb: j2.vramMb,
          isFullGpu: j2.gpu === true,
        };
      }
    } catch (e) { /* fallback */ }
  }
  try {
    const r = await fetch(`${base}/api/ps`, { signal: AbortSignal.timeout(4000) });
    if (!r.ok) return null;
    const j = await r.json();
    const row = (j.models || []).find(m => m.name?.includes('bac-qwen3-14b')) || (j.models || [])[0];
    if (!row) return null;
    return {
      name: row.name,
      processor: row.processor || '',
      size: row.size,
      isFullGpu: /100%\s*GPU/i.test(row.processor || ''),
    };
  } catch (e) {
    return null;
  }
}

function ollamaCommentGpuStatusLabel(st) {
  if (!st) return '';
  if (st.isFullGpu) {
    const vram = st.vramMb != null ? ` · ${st.vramMb} MiB VRAM` : ' (VRAM NVIDIA)';
    return ` · ${st.processor || '100% GPU'}${vram}`;
  }
  return ` · ⚠ ${st.processor || 'CPU/RAM'} — relance start.ps1`;
}

function ollamaCommentSaveCfg(partial) {
  const cfg = { ...ollamaCommentLoadCfg(), ...partial };
  try { localStorage.setItem(OLLAMA_COMMENT_STORAGE, JSON.stringify(cfg)); } catch (e) {}
  return cfg;
}

function ollamaCommentIsEnabled() {
  return ollamaCommentLoadCfg().enabled === true;
}

async function ollamaCommentCheck(force) {
  const now = Date.now();
  if (!force && _ollamaPingCache.ok !== null && now - _ollamaPingCache.at < 12000) {
    return _ollamaPingCache.ok;
  }
  const mode = await ollamaCommentDetectMode(false);
  const base = ollamaCommentResolveBase(mode);
  try {
    const ok = await ollamaCommentPingBase(base, 4500);
    _ollamaPingCache = { ok, at: now };
    return ok;
  } catch (e) {
    _ollamaPingCache = { ok: false, at: now, err: e.message };
    return false;
  }
}

function ollamaCommentNormForMatch(s) {
  return String(s || '')
    .normalize('NFD').replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[«»""''„]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function ollamaCommentCitationInText(citation, texte) {
  const c = ollamaCommentNormForMatch(citation);
  const t = ollamaCommentNormForMatch(texte);
  if (!c || !t) return false;
  if (t.includes(c)) return true;
  if (c.length > 24) {
    const chunk = c.slice(0, Math.max(12, Math.floor(c.length * 0.6)));
    return chunk.length >= 8 && t.includes(chunk);
  }
  return false;
}

function ollamaCommentWordCount(text) {
  return String(text || '').trim().split(/\s+/).filter(Boolean).length;
}

function ollamaCommentCheckTexte(ctx) {
  const texte = String(ctx?.texte || '').trim();
  const len = texte.length;
  if (!len) {
    return {
      ok: false,
      mode: 'blocked',
      message: 'Passage vide : colle un extrait d\'au moins quelques lignes avant de générer le commentaire IA.',
    };
  }
  if (len < OLLAMA_COMMENT_TEXTE_MIN) {
    return {
      ok: false,
      mode: 'blocked',
      message: `Passage trop court (${len} caractères) — minimum ~${OLLAMA_COMMENT_TEXTE_MIN} pour ancrer les citations.`,
    };
  }
  if (len < OLLAMA_COMMENT_TEXTE_GENERAL) {
    return {
      ok: true,
      mode: 'general',
      message: '',
      warning: 'Extrait court : analyse généraliste sans citations inventées.',
    };
  }
  return { ok: true, mode: 'full', message: '' };
}

function ollamaCommentSystemPrompt(extraNote) {
  const base = `Tu es un élève de Première très bon en français, en pleine épreuve du bac.
Tu rédiges UNIQUEMENT le développement (3 parties) et la conclusion.
L'introduction en 5 temps est DÉJÀ FOURNIE — ne la réécris pas, ne la reformule pas, ne l'inclus pas.

RÈGLES STRUCTURELLES (vérifiables — respecte-les à la lettre) :
1. Commence IMMÉDIATEMENT par « ### Partie I — … ». Aucun texte avant (pas de « Voici… », pas de note).
2. Termine par « ### Conclusion » puis son texte. Aucun texte après la conclusion.
3. Exactement 4 sections, dans cet ordre, titres exacts :
   ### Partie I — [titre court]
   ### Partie II — [titre court]
   ### Partie III — [titre court]
   ### Conclusion
4. Jamais de section « ### Introduction ».
5. Chaque partie : 4 à 5 paragraphes séparés par une ligne vide.
6. Longueur cible : ~500-650 mots par partie, ~200-300 mots pour la conclusion (total ~1500-2000 mots).
7. Chaque partie : au moins 2 citations entre « guillemets français » + procédé nommé + effet concret.
8. Chaque phrase : ≤ 25 mots, sujet concret + verbe + idée claire. Pas de nominalisation en -tion/-isme en début de phrase sans sujet avant.

ANCRAGE TEXTUEL (priorité absolue) :
- Toute citation entre « » doit être un extrait EXACT du PASSAGE À COMMENTER fourni dans le message utilisateur.
- Interdit d'inventer des vers/lignes « de mémoire » sur l'œuvre entière si absentes du passage.
- Si le passage ne permet pas 3 axes d'analyse, signale-le en UNE phrase dans la Partie I puis analyse prudemment ce qui est présent — sans fausses citations.

MÉTHODE IPCI (en prose fluide, sans étiqueter « IPCI ») :
Idée + procédé nommé + citation « … » (v. n ou l. n si numéroté) + interprétation concrète.

PLAN :
- 3 parties THÉMATIQUES (jamais chronologiques), alignées sur les axes annoncés dans l'intro fournie.
- Transitions I→II et II→III : 2 phrases d'enchaînement en fin de partie.
- Conclusion : bilan des 3 axes (1 paragraphe) + ouverture vers une autre œuvre (1 paragraphe).

STYLE :
- Registre soutenu mais lisible ; connecteurs avec parcimonie (max 2 fois la même expression de transition).
- Débuts de phrase variés ; pas de listes à puces ; pas de méta (« je vais montrer », « dans cette partie »).
- Phrases grammaticalement correctes : accords, conjugaison, articles. Si une tournure sonne bizarre, simplifier.

ÉVITER (règle générale, pas liste exhaustive) :
- Abstractions vagues, calques anglais, phrases creuses sans ancrage dans le texte.
- Enchaînements « permet de / vise à / témoigne de / met en lumière » sans sujet concret ni effet précis.

Exemple BON : « L'assonance en [ɔ̃] (« sanglots longs », v. 1) imite la plainte du violon et renforce la tristesse. »
Exemple MAUVAIS : « L'auteur déploie une dynamique textuelle qui témoigne d'une prise de conscience existentielle. »`;
  return extraNote ? `${base}\n\nCORRECTION DEMANDÉE (régénération) :\n${extraNote}` : base;
}

function ollamaCommentPolishSystemPrompt() {
  return `Tu es correcteur de copies de bac de français (Première).
On te soumet UNE section d'un commentaire (Partie I, II, III ou Conclusion).

ÉTAPE MENTALE (ne pas écrire) : repère d'abord les erreurs de grammaire, accords, contresens et formulations absurdes.

MISSION : corriger UNIQUEMENT
- grammaire, conjugaison, accords, syntaxe ;
- phrases absurdes ou qui « ne veulent rien dire » ;
- lourdeurs oratoires et formules creuses.

INTERDIT :
- changer le plan ou le sens des analyses ;
- supprimer ou inventer des citations ;
- réintroduire une introduction ;
- ajouter un préambule ou un commentaire méta.

Conserve EXACTEMENT la ligne de titre ### … en tête de ta réponse.
Renvoie UNIQUEMENT le titre + le texte corrigé de cette section.`;
}

function ollamaCommentBuildUserPrompt(ctx) {
  const lines = [];
  const mode = ctx.analysisMode || 'full';

  lines.push('=== PASSAGE À COMMENTER (source UNIQUE des citations entre « ») ===');
  lines.push(ctx.texte);
  lines.push('');

  if (ctx.attendus?.length) {
    lines.push('=== CITATIONS / PROCÉDÉS REPÉRABLES (s\'en inspirer — ne pas copier mot pour mot) ===');
    ctx.attendus.slice(0, 22).forEach(a => {
      const p = a.procede || '';
      const c = a.citation || '';
      const i = typeof introSimCleanInterp === 'function'
        ? introSimCleanInterp(a.interpretation)
        : (a.interpretation || '');
      lines.push(`- ${p}${c ? ` · ${c}` : ''}${i ? ` → ${i}` : ''}`);
    });
    lines.push('');
  }

  if (ctx.procedesCles?.length) {
    lines.push(`Procédés repérables : ${ctx.procedesCles.join(', ')}`);
  }

  lines.push('=== CONTEXTE ŒUVRE ===');
  lines.push(`Auteur : ${ctx.auteurNom}`);
  lines.push(`Œuvre : ${ctx.oeuvre}`);
  if (ctx.titre) lines.push(`Passage / titre : ${ctx.titre}`);
  if (ctx.genre) lines.push(`Genre : ${ctx.genre}`);
  if (ctx.theme) lines.push(`Thème : ${ctx.theme}`);
  if (ctx.registre) lines.push(`Registre : ${ctx.registre}`);

  if (ctx.plan?.length) {
    lines.push('\nAxes annoncés dans l\'intro (respecter dans les 3 parties) :');
    ctx.plan.forEach((a, i) => lines.push(`  ${i + 1}. ${a}`));
  }

  if (ctx.intro) {
    lines.push(`\n--- INTRODUCTION DÉJÀ RÉDIGÉE (ne pas réécrire — ne pas inclure) ---\n${ctx.intro}`);
  }

  const partTarget = `${OLLAMA_COMMENT_SECTION_WORDS.part[0]}-${OLLAMA_COMMENT_SECTION_WORDS.part[1]}`;
  const conclTarget = `${OLLAMA_COMMENT_SECTION_WORDS.conclusion[0]}-${OLLAMA_COMMENT_SECTION_WORDS.conclusion[1]}`;

  lines.push(`
=== CONSIGNES FINALES ===
- Rédige comme une VRAIE copie de bac : phrases correctes et intelligibles.
- UNIQUEMENT ### Partie I / II / III + ### Conclusion — aucune introduction.
- Longueur : ~${partTarget} mots par partie, ~${conclTarget} mots pour la conclusion (total ~${OLLAMA_COMMENT_TOTAL_WORDS[0]}-${OLLAMA_COMMENT_TOTAL_WORDS[1]} mots).
- Chaque citation « … » doit être copiée EXACTEMENT depuis le PASSAGE À COMMENTER ci-dessus.`);

  if (mode === 'general') {
    lines.push(`- MODE EXTRAIT COURT : analyse prudente, peu de citations longues ; n'invente AUCUNE citation absente du passage.`);
  }

  lines.push('- Commence directement par ### Partie I — … sans aucun texte avant.');
  return lines.join('\n');
}

function ollamaCommentGatherContext(entry, opts) {
  opts = opts || {};
  const passageRaw = (opts.passageRaw || opts.userExcerpt || '').trim();
  let texte = '';
  if (passageRaw && typeof introSimIsExcerptText === 'function' && introSimIsExcerptText(passageRaw)) {
    texte = passageRaw;
  }
  if (!texte && entry.gtextId && typeof introSimGetRawText === 'function') {
    texte = introSimGetRawText(entry.gtextId)?.texte || '';
  }
  if (!texte && passageRaw) texte = passageRaw;

  const genreKind = entry.genreKind
    || (typeof introSimGenreKind === 'function' ? introSimGenreKind(entry.genre) : 'default');
  const planSrc = typeof INTRO_SIM_PLAN !== 'undefined' ? INTRO_SIM_PLAN : {};
  const plan = (planSrc[genreKind] || planSrc.default || []).slice(0, 3);
  const attendus = typeof introSimResolveAttendus === 'function'
    ? introSimResolveAttendus(entry, texte)
    : [];

  return {
    auteurNom: entry.auteurNom || entry.auteur || 'Auteur',
    oeuvre: (entry.oeuvre || '').replace(/\(\d{4}\)/, '').trim(),
    titre: entry.titre || '',
    genre: entry.genre || '',
    theme: entry.theme || '',
    registre: entry.registre || '',
    procedesCles: entry.procedesCles || [],
    plan,
    attendus,
    intro: entry.temps ? Object.values(entry.temps).join('\n\n') : '',
    texte: texte.trim(),
    minWords: ollamaCommentLoadCfg().minWords || 1800,
    analysisMode: 'full',
  };
}

function ollamaCommentTemplateIntro(entry) {
  const intro = entry.temps ? Object.values(entry.temps).join('\n\n') : '';
  return {
    intro,
    temps: entry.temps ? { ...entry.temps } : null,
  };
}

function ollamaCommentStripIntroSection(text) {
  return String(text || '')
    .replace(/###\s*Introduction[\s\S]*?(?=###\s*Partie\s*[IVX\d]|###\s*Conclusion|$)/i, '')
    .trim();
}

function ollamaCommentStripPreamble(text) {
  let s = String(text || '').trim();
  s = s.replace(/^[\s\S]*?(?=###\s*Partie\s*I\b)/i, '');
  s = s.replace(
    /^(?:\*\*[^*]+\*\*\s*:?\s*|(?:voici|bien\s+s[ûu]r[,]?\s*voici|d['']accord[,]?\s*voici)[^\n]*\n)+/i,
    ''
  );
  return s.trim();
}

function ollamaCommentStripThinking(text) {
  let s = String(text || '');
  s = s.replace(/<think[\s\S]*?<\/think>/gi, '');
  s = s.replace(/<redacted_thinking[\s\S]*?<\/redacted_thinking>/gi, '');
  s = s.replace(/<redacted_thinking[\s\S]*/gi, '');
  s = s.replace(/[\s\S]*?<\/think>/gi, '');
  s = s.replace(/^[\s\S]*?<\/think>\s*/i, '');
  return s.trim();
}

function ollamaCommentCleanupRaw(raw) {
  return ollamaCommentSanitizeFrench(
    ollamaCommentStripIntroSection(
      ollamaCommentStripPreamble(
        ollamaCommentStripThinking(raw)
      )
    )
  );
}

function ollamaCommentExtractSectionStats(bodyText) {
  const sections = [];
  const re = new RegExp(OLLAMA_SECTION_SPLIT_RE.source, 'gm');
  let m;
  while ((m = re.exec(bodyText)) !== null) {
    sections.push({ heading: m[1].trim(), body: m[2].trim(), words: ollamaCommentWordCount(m[2]) });
  }
  return sections;
}

function ollamaCommentValidateOutput(bodyText, ctx) {
  const text = ollamaCommentStripIntroSection(ollamaCommentStripPreamble(String(bodyText || '')));
  const blocking = [];
  const warnings = [];

  if (/###\s*Introduction\b/i.test(text)) {
    blocking.push('Section « ### Introduction » interdite encore présente.');
  }

  const headingRe = /^###\s*(Partie\s*(I{1,3}|[123])|Conclusion)\b/gim;
  const headings = [...text.matchAll(headingRe)].map(m => ({
    label: m[1].replace(/\s+/g, ' ').trim(),
    index: m.index,
  }));

  const expected = ['Partie I', 'Partie II', 'Partie III', 'Conclusion'];
  const normalized = headings.map(h => h.label.replace(/\s+/g, ' '));
  const dup = normalized.filter((h, i) => normalized.indexOf(h) !== i);
  if (dup.length) blocking.push(`Sections dupliquées : ${[...new Set(dup)].join(', ')}.`);

  expected.forEach((exp) => {
    if (!normalized.some(h => h.toLowerCase().startsWith(exp.toLowerCase()))) {
      blocking.push(`Section manquante : ### ${exp}.`);
    }
  });

  const orderIdx = expected.map(exp => normalized.findIndex(h => h.toLowerCase().startsWith(exp.toLowerCase())));
  if (orderIdx.some(i => i < 0) || orderIdx.join(',') !== [...orderIdx].sort((a, b) => a - b).join(',')) {
    blocking.push('Ordre des sections incorrect (attendu : Partie I → II → III → Conclusion).');
  }

  if (!/^###\s*Partie\s*I\b/m.test(text)) {
    blocking.push('Le texte ne commence pas par ### Partie I.');
  }

  const preamble = String(bodyText || '').replace(text, '').trim();
  if (preamble.length > 40 && /voici|développement|commentaire/i.test(preamble)) {
    warnings.push('Préambule méta détecté avant Partie I (nettoyé automatiquement).');
  }

  const cites = [...text.matchAll(/«([^»]+)»/g)].map(m => m[1].trim()).filter(Boolean);
  let matched = 0;
  cites.forEach(c => {
    if (ollamaCommentCitationInText(c, ctx?.texte)) matched++;
  });
  const ratio = cites.length ? matched / cites.length : 1;
  if (cites.length >= 2 && ratio < OLLAMA_COMMENT_CITE_MATCH_RATIO) {
    warnings.push(`${Math.round(ratio * 100)}% des citations (${matched}/${cites.length}) repérées dans l'extrait fourni — vérifie les guillemets.`);
  }

  const totalWords = ollamaCommentWordCount(text);
  const sectionStats = ollamaCommentExtractSectionStats(text);
  const minTotalBlock = ctx?.allowCpu ? 350 : OLLAMA_COMMENT_TOTAL_WORDS[0] - 400;
  const minSectionBlock = ctx?.allowCpu ? 25 : 40;
  if (totalWords < minTotalBlock) {
    blocking.push(`Longueur globale insuffisante (~${totalWords} mots, minimum ~${ctx?.allowCpu ? 350 : OLLAMA_COMMENT_TOTAL_WORDS[0]}).`);
  } else if (totalWords < OLLAMA_COMMENT_TOTAL_WORDS[0] - 200) {
    warnings.push(`Longueur globale faible (~${totalWords} mots, cible ${OLLAMA_COMMENT_TOTAL_WORDS[0]}-${OLLAMA_COMMENT_TOTAL_WORDS[1]}).`);
  } else if (totalWords > OLLAMA_COMMENT_TOTAL_WORDS[1] + 400) {
    warnings.push(`Longueur globale élevée (~${totalWords} mots).`);
  }

  sectionStats.forEach(sec => {
    const isConcl = /^###\s*Conclusion/i.test(sec.heading);
    const range = isConcl ? OLLAMA_COMMENT_SECTION_WORDS.conclusion : OLLAMA_COMMENT_SECTION_WORDS.part;
    if (sec.words < range[0] - 120) {
      if (sec.words < minSectionBlock) {
        blocking.push(`${sec.heading.replace(/^###\s*/, '')} : section vide ou trop courte (~${sec.words} mots).`);
      } else {
        warnings.push(`${sec.heading.replace(/^###\s*/, '')} : ~${sec.words} mots (cible ${range[0]}-${range[1]}).`);
      }
    }
  });

  const retryParts = blocking.length
    ? blocking.map(b => `- ${b}`).join('\n')
    : '';

  return {
    ok: blocking.length === 0,
    blocking,
    warnings,
    citeStats: { total: cites.length, matched, ratio },
    wordCount: totalWords,
    retryMessage: retryParts
      ? `La précédente réponse était invalide :\n${retryParts}\nRecommence ENTIÈREMENT en respectant le format exact (### Partie I / II / III / Conclusion), sans préambule ni introduction.`
      : '',
  };
}

function ollamaCommentDedupeTransitions(text) {
  let s = String(text || '');
  OLLAMA_TRANSITIONS.forEach(conn => {
    const re = new RegExp(`\\b${conn}\\b`, 'gi');
    let n = 0;
    s = s.replace(re, (match) => {
      n += 1;
      return n <= 2 ? match : '';
    });
  });
  return s.replace(/  +/g, ' ').replace(/\n{3,}/g, '\n\n');
}

/** Nettoyage local des tournures creuses fréquentes (LLM) + anti-répétitions */
function ollamaCommentSanitizeFrench(text) {
  let s = String(text || '');
  const replacements = [
    // Nominalisations creuses
    [/\b(?:la |une )?dynamique textuelle\b/gi, 'l\'organisation du texte'],
    [/\b(?:la |une )?dimension existentielle\b/gi, 'l\'expérience vécue'],
    [/\b(?:la |une )?dimension symbolique\b/gi, 'le sens figuré'],
    [/\b(?:la |une )?dimension poétique\b/gi, 'l\'effet poétique'],
    [/\b(?:une )?stratégie rhétorique\b/gi, 'un choix d\'écriture'],
    [/\b(?:une )?construction discursive\b/gi, 'l\'organisation du discours'],
    [/\b(?:une )?visée argumentative\b/gi, 'l\'argument'],
    [/\b(?:une )?problématisation\b/gi, 'la question posée'],
    [/\b(?:une )?mise en abyme\b/gi, 'un renvoi au texte'],
    // Verbes passe-partout
    [/\bmet en lumière\b/gi, 'montre'],
    [/\bmettent en lumière\b/gi, 'montrent'],
    [/\bmettre en lumière\b/gi, 'montrer'],
    [/\b(?:permet|permettent) de (?:mettre en évidence|souligner|montrer)\b/gi, 'montre'],
    [/\b(?:permet|permettent) (?:à l'auteur|au poète|à l'auteure) de\b/gi, 'l\'auteur peut'],
    [/\b(?:vise|visent) à (?:montrer|souligner|mettre en évidence)\b/gi, 'montre'],
    [/\btémoigne(?:nt)? de\b/gi, 'traduit'],
    [/\b(?:souligne|soulignent) (?:l'importance|la portée) de\b/gi, 'insiste sur'],
    [/\b(?:illustre|illustrent) (?:parfaitement|clairement)\b/gi, 'montre'],
    [/\b(?:contribue|contribuent) à (?:créer|renforcer|instaurer)\b/gi, 'crée'],
    [/\b(?:instaure|instaurent) (?:une|un)\b/gi, 'crée'],
    // Formules creuses / méta
    [/\bIl convient de noter que\b/gi, ''],
    [/\bIl est important de souligner que\b/gi, ''],
    [/\bIl est intéressant de noter que\b/gi, ''],
    [/\bOn peut ainsi constater que\b/gi, ''],
    [/\bForce est de constater que\b/gi, ''],
    [/\bIl apparaît clairement que\b/gi, ''],
    [/\bCet extrait nous invite à réfléchir sur\b/gi, 'Le passage interroge'],
    [/\b(?:Ce|Cet) passage (?:nous )?invite à\b/gi, 'Le passage pousse à'],
    [/\b(?:l'auteur|l'auteure|le poète|la poète) parvient à susciter chez le lecteur\b/gi, 'le lecteur ressent'],
    [/\b(?:l'auteur|l'auteure) parvient à (?:créer|instaurer|produire)\b/gi, 'l\'auteur crée'],
    [/\b(?:on|nous) (?:peut|pouvons) (?:ainsi )?constater que\b/gi, ''],
    [/\b(?:on|nous) (?:peut|pouvons) remarquer que\b/gi, ''],
    [/\b(?:on|nous) (?:peut|pouvons) observer que\b/gi, ''],
    [/\bCela permet à l'auteur de\b/gi, 'L\'auteur peut ainsi'],
    [/\b(?:cela|ce choix) (?:permet|contribue) de\b/gi, 'ce choix'],
    // Adjectifs vides
    [/\briche de sens\b/gi, 'significatif'],
    [/\b(?:très )?profond(?:e|s)?(?:ment)?\b/gi, ''],
    [/\b(?:très )?fort(?:e|s)?(?:ment)?\b/gi, ''],
    [/\b(?:particulièrement|extrêmement) (?:riche|profond|fort)\b/gi, ''],
    [/\b(?:une )?prise de conscience narrativement ancrée\b/gi, 'une prise de conscience'],
    [/\b(?:un )?registre (?:particulièrement )?(?:riche|profond)\b/gi, 'un registre marqué'],
    // Calques / lourdeurs
    [/\b(?:au niveau|du point de vue) (?:de la|du) (?:dimension|dynamique)\b/gi, 'dans'],
    [/\b(?:de manière|d'une manière) (?:significative|profonde|forte)\b/gi, ''],
    [/\b(?:en termes de)\b/gi, 'pour'],
    [/\b(?:dans le but de)\b/gi, 'pour'],
    [/\b(?:afin de) (?:mettre en évidence|souligner)\b/gi, 'pour montrer'],
    // Espaces
    [/[ \t]{2,}/g, ' '],
    [/\n{3,}/g, '\n\n'],
    [/\.\s+\./g, '.'],
    [/\s+([,.;:!?])/g, '$1'],
  ];
  replacements.forEach(([re, rep]) => { s = s.replace(re, rep); });
  s = ollamaCommentDedupeTransitions(s);
  return s.trim();
}

async function ollamaCommentReadChatStream(r, onChunk) {
  if (!r.body) throw new Error('Réponse Ollama vide.');
  const reader = r.body.getReader();
  const dec = new TextDecoder();
  let buf = '';
  let full = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += dec.decode(value, { stream: true });
    const lines = buf.split('\n');
    buf = lines.pop() || '';
    for (const line of lines) {
      if (!line.trim()) continue;
      try {
        const j = JSON.parse(line);
        const chunk = j.message?.content || '';
        if (chunk) {
          full += chunk;
          if (typeof onChunk === 'function') onChunk(full);
        }
      } catch (e) { /* ligne JSON partielle */ }
    }
  }
  return full;
}

function ollamaCommentSplitForPolish(bodyText) {
  const text = String(bodyText || '').trim();
  const re = new RegExp(OLLAMA_SECTION_SPLIT_RE.source, 'gm');
  const sections = [];
  let m;
  while ((m = re.exec(text)) !== null) {
    sections.push({ heading: m[1].trim(), body: m[2].trim() });
  }
  return sections;
}

async function ollamaCommentPolishOneSection(heading, body, cfg, base, opts) {
  if (!body?.trim()) return { heading, body };
  const userContent = `${heading}\n${body}`;
  const r = await fetch(`${base}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ollamaCommentRequestBody(cfg, {
      messages: [
        { role: 'system', content: ollamaCommentPolishSystemPrompt() },
        { role: 'user', content: userContent },
      ],
      stream: false,
      options: ollamaCommentPolishOptions(cfg),
    })),
    signal: opts.signal,
  });
  if (!r.ok) return { heading, body };
  const j = await r.json();
  let polished = ollamaCommentCleanupRaw(j.message?.content || '');
  if (!polished.trim() || polished.length < body.length * 0.35) return { heading, body };
  const hm = polished.match(/^(###\s*(?:Partie\s*[IVX]+|Conclusion)[^\n]*)\n([\s\S]*)$/i);
  if (hm) return { heading: hm[1].trim(), body: hm[2].trim() };
  return { heading, body: polished.replace(/^###[^\n]+\n?/i, '').trim() || body };
}

async function ollamaCommentPolishDraft(draft, cfg, base, opts) {
  opts = opts || {};
  if (!draft?.trim()) return draft;

  const sections = ollamaCommentSplitForPolish(draft);
  const avgWords = sections.length
    ? sections.reduce((n, s) => n + ollamaCommentWordCount(s.body), 0) / sections.length
    : 0;
  if (sections.length >= 3 && avgWords >= 80) {
    opts.onStatus?.('Relecture linguistique (4 sections en parallèle)…');
    try {
      const polished = await Promise.all(
        sections.map(sec => ollamaCommentPolishOneSection(sec.heading, sec.body, cfg, base, opts))
      );
      const merged = polished.map(s => `${s.heading}\n${s.body}`).join('\n\n');
      if (/###\s*Partie\s/i.test(merged)) {
        return ollamaCommentSanitizeFrench(merged);
      }
    } catch (e) { /* fallback bloc unique */ }
  }

  opts.onStatus?.('Relecture linguistique…');
  const r = await fetch(`${base}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ollamaCommentRequestBody(cfg, {
      messages: [
        { role: 'system', content: ollamaCommentPolishSystemPrompt() },
        { role: 'user', content: draft },
      ],
      stream: false,
      options: ollamaCommentPolishOptions(cfg),
    })),
    signal: opts.signal,
  });
  if (!r.ok) {
    const errText = await r.text().catch(() => '');
    throw new Error(`Relecture échouée (${r.status})${errText ? ' — ' + errText.slice(0, 80) : ''}`);
  }
  const j = await r.json();
  const polished = ollamaCommentCleanupRaw(j.message?.content || '');
  if (!polished.trim() || polished.length < draft.length * 0.45) return draft;
  if (!/###\s*Partie\s/i.test(polished)) return draft;
  return ollamaCommentSanitizeFrench(polished);
}

async function ollamaCommentFetchDraft(ctx, cfg, base, opts, retryNote) {
  const r = await fetch(`${base}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ollamaCommentRequestBody(cfg, {
      _fullCommentary: true,
      messages: [
        { role: 'system', content: ollamaCommentSystemPrompt(retryNote) },
        { role: 'user', content: ollamaCommentBuildUserPrompt(ctx) },
      ],
      stream: true,
    })),
    signal: opts.signal,
  });

  if (!r.ok) {
    const errText = await r.text().catch(() => '');
    throw new Error(`HTTP ${r.status}${errText ? ' — ' + errText.slice(0, 100) : ''}`);
  }

  const full = await ollamaCommentReadChatStream(r, opts.onChunk);
  if (!full.trim()) throw new Error('Le modèle n\'a renvoyé aucun texte.');
  return ollamaCommentCleanupRaw(full);
}

function ollamaCommentParseResponse(raw, entry, passageText, validation) {
  const text = ollamaCommentCleanupRaw(raw);
  const { intro, temps } = ollamaCommentTemplateIntro(entry);
  const bodyText = ollamaCommentStripIntroSection(text);
  const parts = [];
  const partRe = OLLAMA_PART_BODY_RE;
  let m;
  while ((m = partRe.exec(bodyText)) !== null) {
    const body = m[3].trim();
    if (!body) continue;
    const citeCount = (body.match(/«[^»]+»/g) || []).length;
    parts.push({
      id: `part${parts.length + 1}`,
      label: `Partie ${m[1]} — ${m[2].trim()}`,
      text: body,
      transition: '',
      ipcCount: Math.max(citeCount, (body.match(/\bIPCI\b/gi) || []).length, Math.ceil(body.split(/\n\n+/).length)),
    });
  }

  let conclusion = '';
  const cm = bodyText.match(/###\s*Conclusion\s*\n([\s\S]*)/i);
  if (cm) conclusion = cm[1].trim();

  if (!parts.length && bodyText) {
    parts.push({ id: 'part1', label: 'Développement', text: bodyText, transition: '', ipcCount: 0 });
  }

  const fullBlocks = [intro];
  parts.forEach(p => fullBlocks.push(p.text));
  if (conclusion) fullBlocks.push(conclusion);

  return {
    intro,
    temps,
    parts,
    conclusion,
    full: fullBlocks.join('\n\n'),
    ipcCount: parts.reduce((n, p) => n + (p.ipcCount || 0), 0),
    lineCount: typeof introSimTextLines === 'function' ? introSimTextLines(passageText || '').length : 0,
    fromCorpus: false,
    fromOllama: true,
    model: ollamaCommentResolveModel(ollamaCommentLoadCfg()),
    validation: validation || null,
  };
}

async function ollamaCommentGenerate(entry, opts) {
  opts = opts || {};
  const cfg = ollamaCommentLoadCfg();

  try {
    const mode = await ollamaCommentEnsureReady({
      signal: opts.signal,
      onStatus: opts.onStatus,
    });
    await ollamaCommentWarmModel(mode, cfg, opts.signal, opts.onStatus, opts);

    const ctx = ollamaCommentGatherContext(entry, opts);
    const texteCheck = ollamaCommentCheckTexte(ctx);
    if (!texteCheck.ok) throw new Error(texteCheck.message);
    ctx.analysisMode = texteCheck.mode;
    if (texteCheck.warning) opts.onStatus?.(texteCheck.warning);
    ctx.allowCpu = opts.allowCpu === true;

    const base = ollamaCommentResolveBase(mode);

    let full = await ollamaCommentFetchDraft(ctx, cfg, base, opts, '');
    let validation = ollamaCommentValidateOutput(full, ctx);

    if (!validation.ok && !opts._retried && validation.retryMessage) {
      opts.onStatus?.('Format invalide — nouvelle tentative…');
      full = await ollamaCommentFetchDraft(ctx, cfg, base, { ...opts, _retried: true }, validation.retryMessage);
      validation = ollamaCommentValidateOutput(full, ctx);
      if (!validation.ok) {
        throw new Error(`Format du commentaire invalide après 2 tentatives : ${validation.blocking.join(' ')}`);
      }
    } else if (!validation.ok) {
      throw new Error(`Format du commentaire invalide : ${validation.blocking.join(' ')}`);
    }

    if (opts.polish !== false) {
      try {
        const polished = await ollamaCommentPolishDraft(full, cfg, base, {
          signal: opts.signal,
          onStatus: opts.onStatus,
        });
        if (polished?.trim()) {
          full = polished;
          validation = ollamaCommentValidateOutput(full, ctx);
          if (typeof opts.onChunk === 'function') opts.onChunk(full);
        }
      } catch (e) {
        /* brouillon initial conservé si la relecture échoue */
      }
    }

    full = ollamaCommentSanitizeFrench(full);
    return ollamaCommentParseResponse(full, entry, ctx.texte, validation);
  } finally {
    if (opts.keepLoaded !== true) {
      try {
        await ollamaCommentReleaseGpu({
          onStatus: opts.onStatus,
          signal: opts.signal,
          stop: opts.stopOllama !== false,
        });
      } catch (e) { /* ignore */ }
    }
  }
}
