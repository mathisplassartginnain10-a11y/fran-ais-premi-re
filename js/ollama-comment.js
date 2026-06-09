/* ollama-comment.js — Commentaire composé via Ollama (local) */

const OLLAMA_COMMENT_STORAGE = 'bac_ollama_comment_cfg';

const OLLAMA_COMMENT_DEFAULTS = {
  enabled: false,
  baseUrl: 'http://127.0.0.1:11434',
  model: 'bac-qwen3-14b',
  fallbackModel: 'qwen3:14b',
  numCtx: 8192,
  minWords: 1800,
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

/** Démarre / attend Ollama avant une requête IA */
async function ollamaCommentEnsureReady(opts) {
  opts = opts || {};
  const onStatus = opts.onStatus;
  const signal = opts.signal;
  _ollamaPingCache = { ok: null, at: 0 };

  const mode = await ollamaCommentDetectMode(true);

  if (mode.type === 'proxy' && mode.ensureUrl) {
    onStatus?.('Démarrage Ollama CUDA (VRAM)…');
    const r = await fetch(mode.ensureUrl, { signal });
    let j = await r.json().catch(() => ({}));
    if (!r.ok || !j.ok) {
      onStatus?.('Relance GPU forcée…');
      const r2 = await fetch(`${mode.ensureUrl}?restart=1`, { signal });
      j = await r2.json().catch(() => ({}));
      if (!r2.ok || !j.ok) {
        throw new Error(j.error || 'Ollama GPU indisponible — lance start.ps1');
      }
    }
    if (j.gpu === false) {
      throw new Error(j.error || 'Modèle chargé en RAM — relance start.ps1 (CUDA/VRAM)');
    }
    onStatus?.(j.processor ? `● ${j.processor} · ${j.model || 'bac-qwen3-14b'}` : 'Ollama GPU prêt');
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
    ? ' Ouvre l\'app via start.ps1 (serveur local + Ollama auto).'
    : ' Lance ollama serve ou double-clique start.ps1.';
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
  const base = ollamaCommentResolveBase(mode);
  const model = ollamaCommentResolveModel(cfg);
  onStatus?.('Vidage RAM · chargement VRAM uniquement…');
  await ollamaCommentUnloadAll(base);
  onStatus?.(`Chargement GPU · ${model} (ctx ${cfg.numCtx || 8192})…`);
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
    throw new Error(`Modèle sur ${gpu.processor} (RAM/CPU) — ferme Ollama du tray et relance start.ps1`);
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
    num_predict: 5800,
    repeat_penalty: 1.08,
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
  try {
    const r = await fetch(`${base}/api/ps`, { signal: AbortSignal.timeout(4000) });
    if (!r.ok) return null;
    const j = await r.json();
    const row = (j.models || [])[0];
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
  if (st.isFullGpu) return ` · ${st.processor} (VRAM)`;
  return ` · ⚠ ${st.processor || 'CPU/RAM'} — relance via start.ps1`;
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
  return `Tu es un correcteur du baccalauréat de français (Première), auteur de corrigés modèles 18-20/20.
Tu rédiges UNIQUEMENT le développement et la conclusion (l'introduction en 5 temps est déjà fournie — ne la réécris pas).

Niveau attendu : COPIE PARFAITE, très développée, comme un candidat excellent (40 min de rédaction condensées en prose aboutie).

Méthode IPCI (obligatoire à chaque analyse) :
Idée interprétative → Procédé nommé précisément → Citation exacte entre « guillemets » avec renvoi (v. n ou l. n) → Interprétation approfondie de l'effet sur le sens et sur le lecteur.

Structure :
- 3 parties THÉMATIQUES (jamais chronologiques), annoncées dans l'intro fournie.
- Chaque partie : phrase d'ouverture qui reprend l'axe + 4 à 6 paragraphes d'analyse IPCI minimum.
- Chaque paragraphe = une analyse IPCI complète (ne regroupe pas plusieurs procédés sans les analyser).
- Fin de la partie I et II : transition rédigée vers la partie suivante (2-3 phrases).
- Conclusion : bilan synthétique des 3 axes (1 paragraphe) + ouverture pertinente vers une autre œuvre, un auteur ou un mouvement (1 paragraphe).

Style :
- Registre soutenu, syntaxe variée, connecteurs logiques (dès lors, ainsi, par ailleurs, en outre, dès lors, c'est ainsi que…).
- Vocabulaire analytique précis (registre, tonalité, visée, énonciation, focalisation, etc.).
- Zéro paraphrase, zéro liste à puces, zéro méta-commentaire (« je vais montrer que… »).
- Multiplie les citations courtes mais nombreuses ; couvre tout le passage.

Volume impératif : 1 800 à 2 500 mots pour les 3 parties + conclusion. Ne sois JAMAIS concis : creuse, approfondis, enchaîne les analyses.

Format OBLIGATOIRE :

### Partie I — [titre court et interprétatif]
[texte très développé]

### Partie II — [titre court et interprétatif]
[texte très développé]

### Partie III — [titre court et interprétatif]
[texte très développé]

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
    lines.push('Axes annoncés dans l\'intro :');
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
  lines.push(`\n--- INTRODUCTION DÉJÀ RÉDIGÉE (ne pas réécrire) ---\n${ctx.intro}`);
  lines.push(`\n--- PASSAGE À COMMENTER ---\n${ctx.texte || '(extrait partiel — analyse à partir des repères et du contexte)'}`);
  lines.push(`
Consignes finales :
- Rédige un commentaire EXEMPLAIRE et TRÈS LONG, niveau 18-20/20 au bac.
- Minimum ${ctx.minWords || 1800} mots pour les 3 parties + conclusion.
- Au moins 4 analyses IPCI complètes par partie ; cite abondamment le texte.
- Respecte strictement les titres ### Partie I / II / III et ### Conclusion.`);
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
  };
}

function ollamaCommentStripThinking(text) {
  return String(text || '')
    .replace(/[\s\S]*?<\/think>/gi, '')
    .replace(/^[\s\S]*?<\/think>\s*/i, '')
    .trim();
}

function ollamaCommentParseResponse(raw, entry, passageText) {
  const intro = entry.temps ? Object.values(entry.temps).join('\n\n') : '';
  const text = ollamaCommentStripThinking(raw);
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
