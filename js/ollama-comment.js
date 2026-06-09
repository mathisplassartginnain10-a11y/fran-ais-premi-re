/* ollama-comment.js — Commentaire composé via Ollama (local) */

const OLLAMA_COMMENT_STORAGE = 'bac_ollama_comment_cfg';

const OLLAMA_COMMENT_DEFAULTS = {
  enabled: false,
  baseUrl: 'http://127.0.0.1:11434',
  model: 'bac-qwen3-14b',
  fallbackModel: 'qwen3:14b',
  numCtx: 8192,
  minWords: 2200,
};

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
          };
          return _ollamaMode;
        }
      }
    } catch (e) { /* pas le serveur local */ }
  }

  _ollamaMode = { type: 'direct', base: directBase, ensureUrl: null };
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

async function ollamaCommentWarmModel(mode, cfg, signal, onStatus) {
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
    throw new Error(`Modèle hors VRAM (${gpu.processor || 'CPU/RAM'}) — utilise le bouton ⚡`);
  }
  if (gpu) {
    onStatus?.(`VRAM OK · ${gpu.processor} · génération…`);
  }
}

function ollamaCommentLoadCfg() {
  try {
    return { ...OLLAMA_COMMENT_DEFAULTS, ...JSON.parse(localStorage.getItem(OLLAMA_COMMENT_STORAGE) || '{}') };
  } catch (e) {
    return { ...OLLAMA_COMMENT_DEFAULTS };
  }
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
    num_predict: 7800,
    temperature: 0.74,
    top_p: 0.92,
    repeat_penalty: 1.14,
  });
}

function ollamaCommentRequestBody(cfg, payload) {
  payload = payload || {};
  const useGenerate = payload._fullCommentary;
  delete payload._fullCommentary;
  return {
    model: ollamaCommentResolveModel(cfg),
    keep_alive: '60m',
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

function ollamaCommentSystemPrompt() {
  return `Tu es un élève de Première très bon en français, en pleine épreuve du bac : tu rédiges un commentaire COMPLET (intro 5 temps + 3 parties + conclusion), comme une vraie copie manuscrite de 40 minutes — pas un texte généré par IA.

PRIORITÉ ABSOLUE — voix humaine :
- Écris comme un lycéen excellent : phrases parfois courtes, parfois longues ; rythme naturel, pas mécanique.
- Intègre la méthode IPCI dans la prose (idée → procédé → citation → interprétation) sans étiqueter « procédé : », « interprétation : ».
- Varie les débuts de paragraphe : « L'image de… », « Dès le premier vers… », « En employant… », « On assiste ici à… », « Ce choix… », etc. Ne commence jamais trois paragraphes consécutifs pareil.
- Connecteurs avec parcimonie : alterne (ainsi, dès lors, par là, de ce fait, c'est pourquoi, en définitive…) ; n'en abuse pas.
- Évite absolument le style « assistant IA » ou corrigé robotique.

Formules INTERDITES (typiques IA — ne jamais utiliser) :
« Il convient de noter », « Il est important de souligner », « En outre » en chaîne, « Par ailleurs » répété, « Cela permet à l'auteur de », « Cela contribue à », « met en lumière » à chaque phrase, « témoigne de », « il s'agit de », « on peut ainsi constater que », « dans un premier temps… dans un second temps… dans un troisième temps » en boucle, « En conclusion, nous pouvons affirmer que », « l'auteur parvient à susciter chez le lecteur », « riche de sens », « d'une grande force expressive », « de manière significative », « il est primordial de », « force est de constater », « cet extrait nous invite à réfléchir ».

Préfère plutôt :
- Formulations directes et concrètes liées AU passage précis.
- Verbes précis : suggère, affirme, contraste, souligne, révèle, heurte, brouille, ancre, déplace…
- Analyses ancrées dans le texte, pas des généralités vagues sur « la littérature ».

Introduction (5 temps obligatoires) :
1. Amorce : accroche sur l'époque, le genre ou un thème littéraire — sans nommer l'auteur ni l'œuvre.
2. Auteur et œuvre : biographie brève, titre, genre, dates — ton naturel de lycéen, pas encyclopédique.
3. Extrait : situation du passage, thème, registre.
4. Problématique : « nous nous demanderons comment… » ou « en quoi… » — une seule question claire.
5. Plan : annonce fluide des 3 axes thématiques (jamais chronologiques).

Méthode IPCI (obligatoire, mais rédigée naturellement) :
Chaque analyse = idée interprétative + procédé nommé + citation exacte « entre guillemets » (v. n ou l. n) + effet sur le sens et le lecteur — le tout en prose continue.

Développement :
- 3 parties thématiques alignées sur le plan.
- Chaque partie : ouverture qui reprend l'axe + 4 à 6 paragraphes d'analyse.
- Transitions I→II et II→III : 2-3 phrases qui enchaînent vraiment, pas une formule toute faite.
- Conclusion : bilan des 3 axes (1 paragraphe) + ouverture vers une autre œuvre ou un auteur (1 paragraphe).

Style :
- Registre soutenu mais vivant ; vocabulaire analytique précis sans jargon vide.
- Zéro liste à puces, zéro méta (« je vais montrer », « dans cette partie »).
- Citations courtes et fréquentes ; couvre tout le passage.
- Volume : 2 200 à 2 800 mots. Développe sans remplissage creux.

Format OBLIGATOIRE (titres seuls — le corps reste une vraie rédaction) :

### Introduction

#### Amorce
[paragraphe]

#### Auteur et œuvre
[paragraphe]

#### Extrait
[paragraphe]

#### Problématique
[paragraphe]

#### Plan
[paragraphe]

### Partie I — [titre court et interprétatif]
[texte développé, style copie d'élève]

### Partie II — [titre court et interprétatif]
[texte développé, style copie d'élève]

### Partie III — [titre court et interprétatif]
[texte développé, style copie d'élève]

### Conclusion
[bilan + ouverture]`;
}

function ollamaCommentBuildUserPrompt(ctx) {
  const lines = [];
  lines.push(`Auteur : ${ctx.auteurNom}`);
  lines.push(`Œuvre : ${ctx.oeuvre}`);
  if (ctx.titre) lines.push(`Passage / titre : ${ctx.titre}`);
  if (ctx.genre) lines.push(`Genre : ${ctx.genre}`);
  if (ctx.theme) lines.push(`Thème : ${ctx.theme}`);
  if (ctx.registre) lines.push(`Registre : ${ctx.registre}`);
  if (ctx.procedesCles?.length) {
    lines.push(`Procédés repérables : ${ctx.procedesCles.join(', ')}`);
  }
  if (ctx.plan?.length) {
    lines.push('Axes suggérés pour le plan (3 parties thématiques) :');
    ctx.plan.forEach((a, i) => lines.push(`  ${i + 1}. ${a}`));
  }
  if (ctx.attendus?.length) {
    lines.push('\nCorrigé type (s\'en inspirer : procédés, citations, effets — sans copier mot pour mot) :');
    ctx.attendus.slice(0, 22).forEach(a => {
      const p = a.procede || '';
      const c = a.citation || '';
      const i = typeof introSimCleanInterp === 'function'
        ? introSimCleanInterp(a.interpretation)
        : (a.interpretation || '');
      lines.push(`- ${p}${c ? ` · ${c}` : ''}${i ? ` → ${i}` : ''}`);
    });
  }
  if (ctx.introHint) {
    lines.push(`\n--- Repère intro type (inspiration uniquement — réécris entièrement en 5 temps) ---\n${ctx.introHint}`);
  }
  lines.push(`\n--- PASSAGE À COMMENTER ---\n${ctx.texte || '(extrait partiel — analyse à partir des repères et du contexte)'}`);
  lines.push(`
Consignes finales :
- Rédige comme une VRAIE copie de bac : naturel, fluide, jamais robotique ni « corrigé IA ».
- Commentaire complet (intro 5 temps + 3 parties + conclusion), niveau 18-20/20.
- Minimum ${ctx.minWords || 2200} mots ; analyses IPCI intégrées dans des phrases, pas en listes.
- Varie le vocabulaire et les tournures ; reste concret et ancré dans le passage.
- Respecte les titres ### Introduction (#### Amorce, #### Auteur et œuvre, etc.), ### Partie I / II / III et ### Conclusion.`);
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
    introHint: entry.temps ? Object.values(entry.temps).join('\n\n') : '',
    texte: texte.trim(),
    minWords: ollamaCommentLoadCfg().minWords || 2200,
  };
}

function ollamaCommentParseIntro(text, entry) {
  const fallbackIntro = entry.temps ? Object.values(entry.temps).join('\n\n') : '';
  const introMatch = text.match(/###\s*Introduction\s*\n([\s\S]*?)(?=###\s*Partie\s*[IVX\d]|###\s*Conclusion|$)/i);
  if (!introMatch) return { intro: fallbackIntro, temps: null };

  const introBlock = introMatch[1].trim();
  const sections = [
    ['amorce', /####\s*Amorce\s*\n([\s\S]*?)(?=####|$)/i],
    ['auteur', /####\s*Auteur[^#\n]*\n([\s\S]*?)(?=####|$)/i],
    ['extrait', /####\s*Extrait\s*\n([\s\S]*?)(?=####|$)/i],
    ['problematique', /####\s*Probl[eé]matique\s*\n([\s\S]*?)(?=####|$)/i],
    ['plan', /####\s*Plan\s*\n([\s\S]*?)(?=####|$)/i],
  ];
  const temps = { ...(entry.temps || {}) };
  let found = 0;
  sections.forEach(([key, re]) => {
    const m = introBlock.match(re);
    if (m?.[1]?.trim()) {
      temps[key] = m[1].trim();
      found++;
    }
  });
  if (found >= 3) {
    const intro = ['amorce', 'auteur', 'extrait', 'problematique', 'plan']
      .map(k => temps[k])
      .filter(Boolean)
      .join('\n\n');
    return { intro, temps };
  }

  const paras = introBlock
    .replace(/####[^\n]+\n/g, '')
    .split(/\n\n+/)
    .map(p => p.trim())
    .filter(Boolean);
  const keys = ['amorce', 'auteur', 'extrait', 'problematique', 'plan'];
  keys.forEach((k, i) => { if (paras[i]) temps[k] = paras[i]; });
  if (paras.length >= 3) {
    return {
      intro: keys.map(k => temps[k]).filter(Boolean).join('\n\n'),
      temps,
    };
  }
  return { intro: introBlock || fallbackIntro, temps: null };
}

function ollamaCommentStripThinking(text) {
  return String(text || '')
    .replace(/[\s\S]*?<\/think>/gi, '')
    .replace(/^[\s\S]*?<\/think>\s*/i, '')
    .trim();
}

function ollamaCommentParseResponse(raw, entry, passageText) {
  const text = ollamaCommentStripThinking(raw);
  const { intro, temps } = ollamaCommentParseIntro(text, entry);
  const parts = [];
  const partRe = /###\s*Partie\s*([IVX\d]+)\s*[—–\-]\s*([^\n]+)\n([\s\S]*?)(?=###\s*Partie\s*[IVX\d]|###\s*Conclusion|$)/gi;
  let m;
  while ((m = partRe.exec(text)) !== null) {
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
  const cm = text.match(/###\s*Conclusion\s*\n([\s\S]*)/i);
  if (cm) conclusion = cm[1].trim();

  if (!parts.length && text) {
    parts.push({ id: 'part1', label: 'Développement', text, transition: '', ipcCount: 0 });
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
  };
}

async function ollamaCommentGenerate(entry, opts) {
  opts = opts || {};
  const cfg = ollamaCommentLoadCfg();

  const mode = await ollamaCommentEnsureReady({
    signal: opts.signal,
    onStatus: opts.onStatus,
  });
  await ollamaCommentWarmModel(mode, cfg, opts.signal, opts.onStatus);

  const ctx = ollamaCommentGatherContext(entry, opts);
  const base = ollamaCommentResolveBase(mode);

  const r = await fetch(`${base}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ollamaCommentRequestBody(cfg, {
      _fullCommentary: true,
      messages: [
        { role: 'system', content: ollamaCommentSystemPrompt() },
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
          if (typeof opts.onChunk === 'function') opts.onChunk(full);
        }
      } catch (e) { /* ligne JSON partielle */ }
    }
  }

  if (!full.trim()) throw new Error('Le modèle n\'a renvoyé aucun texte.');
  return ollamaCommentParseResponse(full, entry, ctx.texte);
}
