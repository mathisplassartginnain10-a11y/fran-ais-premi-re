/* intro-sim.js — Simulateur d'introduction (page Commentaire) */

let _introSimLiveTimer = null;
let _introSimProbIdx = 0;
let _introSimOllamaAbort = null;
let _introSimOllamaGenId = 0;
function introSimOllamaEnabled() {
  const cb = el('intro-sim-ollama');
  if (cb) return cb.checked;
  return typeof ollamaCommentIsEnabled === 'function' && ollamaCommentIsEnabled();
}

function introSimWantsFullCommentary(passage) {
  const fullMode = el('intro-sim-fullmode');
  const excerptOnly = typeof introSimIsExcerptText === 'function' && introSimIsExcerptText(passage || '');
  return fullMode ? (fullMode.checked || excerptOnly) : excerptOnly;
}

function introSimInitOllamaUi() {
  const cb = el('intro-sim-ollama');
  if (cb && !cb.dataset.ready) {
    cb.dataset.ready = '1';
    const cfg = typeof ollamaCommentLoadCfg === 'function' ? ollamaCommentLoadCfg() : { enabled: false };
    cb.checked = cfg.enabled === true;
    cb.addEventListener('change', () => {
      if (typeof ollamaCommentSaveCfg === 'function') ollamaCommentSaveCfg({ enabled: cb.checked });
      introSimUpdateOllamaStatus();
      if (cb.checked && typeof ollamaCommentEnsureReady === 'function') {
        ollamaCommentEnsureReady({ onStatus: (msg) => {
          const status = el('intro-sim-ollama-status');
          if (status) status.textContent = msg;
        } }).then(() => introSimUpdateOllamaStatus()).catch(() => introSimUpdateOllamaStatus());
      }
    });
  }
  introSimUpdateOllamaStatus();
}

function introSimUpdateOllamaStatus() {
  const status = el('intro-sim-ollama-status');
  if (!status || typeof ollamaCommentCheck !== 'function') return;
  if (!introSimOllamaEnabled()) {
    status.textContent = 'Optionnel — coche pour rédiger via Ollama (qwen3:14b)';
    status.classList.remove('ok', 'err');
    return;
  }
  status.textContent = 'Connexion Ollama…';
  status.classList.remove('ok', 'err');
  ollamaCommentCheck(false).then(async ok => {
    const cfg = typeof ollamaCommentLoadCfg === 'function' ? ollamaCommentLoadCfg() : { model: 'bac-qwen3-14b' };
    if (!ok) {
      status.textContent = '○ Ollama indisponible — lance start.ps1';
      status.classList.toggle('err', true);
      return;
    }
    let gpuLabel = '';
    if (typeof ollamaCommentFetchGpuStatus === 'function' && typeof ollamaCommentDetectMode === 'function') {
      const mode = await ollamaCommentDetectMode(false);
      const gpu = await ollamaCommentFetchGpuStatus(ollamaCommentResolveBase(mode));
      if (gpu?.isFullGpu) gpuLabel = ' · VRAM';
      else if (gpu?.processor) gpuLabel = ` · ⚠ ${gpu.processor}`;
    }
    status.textContent = `● ${cfg.model}${gpuLabel} · prêt`;
    status.classList.toggle('ok', true);
    status.classList.toggle('err', !!gpuLabel && gpuLabel.includes('⚠'));
  });
}

function introSimSetOllamaPanel(visible, streamingText) {
  const panel = el('intro-sim-ollama-panel');
  const stream = el('intro-sim-ollama-stream');
  if (!panel) return;
  panel.hidden = !visible;
  if (stream && streamingText != null) stream.textContent = streamingText;
}

function introSimAbortOllama() {
  if (_introSimOllamaAbort) {
    _introSimOllamaAbort.abort();
    _introSimOllamaAbort = null;
  }
}

async function introSimRequestOllamaCommentary(entry, passage, score, showOpts) {
  if (!entry || !introSimOllamaEnabled() || !introSimWantsFullCommentary(passage)) return;
  if (typeof ollamaCommentGenerate !== 'function') return;

  introSimAbortOllama();
  const genId = ++_introSimOllamaGenId;
  _introSimOllamaAbort = new AbortController();

  const cfg = typeof ollamaCommentLoadCfg === 'function' ? ollamaCommentLoadCfg() : { model: 'qwen3:14b' };
  introSimSetOllamaPanel(true, `Préparation d'Ollama (${cfg.model})…`);

  try {
    const comm = await ollamaCommentGenerate(entry, {
      ...introSimOpts(),
      passageRaw: passage,
      signal: _introSimOllamaAbort.signal,
      onStatus: (msg) => {
        if (genId !== _introSimOllamaGenId) return;
        introSimSetOllamaPanel(true, msg);
      },
      onChunk: (text) => {
        if (genId !== _introSimOllamaGenId) return;
        introSimSetOllamaPanel(true, text);
      },
    });
    if (genId !== _introSimOllamaGenId) return;
    entry.commentaire = comm;
    entry.fullComment = comm.full;
    introSimSetOllamaPanel(false);
    introSimShowResult(entry, score, showOpts || { persist: true });
    if (typeof playSound === 'function') playSound('ok');
  } catch (e) {
    if (e.name === 'AbortError' || genId !== _introSimOllamaGenId) return;
    introSimSetOllamaPanel(false);

    const fbOpts = { ...introSimOpts(), passageRaw: passage, userExcerpt: passage };
    if (typeof introSimBuildFullCommentary === 'function') {
      const comm = introSimBuildFullCommentary(entry, fbOpts);
      if (comm?.full) {
        entry.commentaire = comm;
        entry.fullComment = comm.full;
        introSimShowResult(entry, score, showOpts || { persist: true });
      }
    }

    const wrap = el('intro-sim-matches');
    if (wrap) {
      const old = wrap.querySelector('.intro-sim-ollama-warn');
      if (old) old.remove();
      const p = document.createElement('p');
      p.className = 'intro-sim-warn intro-sim-ollama-warn';
      p.innerHTML = `Ollama indisponible (<strong>${introSimEsc(e.message)}</strong>) — commentaire modèle utilisé. Lance <code>start.ps1</code> ou <code>ollama serve</code>.`;
      wrap.prepend(p);
    }
  } finally {
    if (genId === _introSimOllamaGenId) _introSimOllamaAbort = null;
  }
}

const INTRO_SIM_RECENT_KEY = 'bac_intro_sim_recent';
const INTRO_SIM_RECENT_MAX = 8;
const INTRO_SIM_FAV_MAX = 50;

function introSimFavKey(fields, full) {
  return [fields?.auteur, fields?.oeuvre, fields?.passage, fields?.theme, (full || '').slice(0, 160)]
    .join('|').toLowerCase();
}

function introSimFavSaveText(entry) {
  return entry?.fullComment || entry?.full || '';
}

function introSimFavIntroText(entry) {
  if (entry?.temps) return Object.values(entry.temps).join('\n\n');
  return entry?.full || '';
}

function introSimCanFav(entry) {
  return !!(entry?.full || entry?.fullComment || entry?.temps);
}

function introSimIsFav(entry, fields) {
  if (!introSimCanFav(entry)) return false;
  const key = introSimFavKey(fields || introSimFields(), introSimFavSaveText(entry));
  return introSimGetFavIntros().some(i => i.key === key);
}

function introSimUpdateFavBtn() {
  const btn = el('intro-sim-fav-btn');
  const btnComm = el('intro-sim-fav-comm-btn');
  const entry = window._introSimCurrent;
  const on = introSimIsFav(entry, introSimFields());
  const hasComm = !!(entry?.fullComment || entry?.commentaire?.full);
  [btn, btnComm].forEach(b => {
    if (!b) return;
    b.classList.toggle('on', on);
    b.disabled = !introSimCanFav(entry);
  });
  if (btn) {
    btn.textContent = on ? '★ Enregistrée' : (hasComm ? '☆ Enregistrer tout' : '☆ Enregistrer');
    btn.title = on ? 'Retirer des favoris' : (hasComm ? 'Enregistrer intro + commentaire' : 'Enregistrer dans mes favoris');
  }
  if (btnComm) {
    btnComm.textContent = on ? '★ Commentaire enregistré' : '☆ Enregistrer le commentaire';
    btnComm.hidden = !hasComm;
    btnComm.title = on ? 'Retirer des favoris' : 'Enregistrer le commentaire complet (IA ou modèle)';
  }
}

function introSimToggleFav() {
  const entry = window._introSimCurrent;
  if (!introSimCanFav(entry)) return;
  const fields = introSimFields();
  if (typeof loadFavs !== 'function' || typeof saveFavs !== 'function') return;
  const f = loadFavs();
  if (!f.intros) f.intros = [];
  const saveText = introSimFavSaveText(entry);
  const introOnly = introSimFavIntroText(entry);
  const key = introSimFavKey(fields, saveText);
  const idx = f.intros.findIndex(i => i.key === key);
  if (idx >= 0) {
    f.intros.splice(idx, 1);
    saveFavs(f);
    introSimUpdateFavBtn();
    if (typeof renderFavs === 'function') renderFavs();
    return;
  }
  f.intros.unshift({
    id: 'IF-' + Date.now().toString(36),
    key,
    savedAt: new Date().toISOString(),
    fields: { ...fields },
    entryId: entry.id,
    auteurNom: entry.auteurNom || fields.auteur,
    titre: entry.titre || '',
    oeuvre: entry.oeuvre || fields.oeuvre,
    genre: entry.genre || '',
    prob: entry.prob || 0,
    gtextId: entry.gtextId || null,
    full: saveText || introOnly,
    fullComment: entry.fullComment || null,
    introOnly,
    commentaire: entry.commentaire ? { ...entry.commentaire } : null,
    fromOllama: !!(entry.commentaire?.fromOllama || entry.fullComment),
    temps: entry.temps ? { ...entry.temps } : {},
  });
  if (f.intros.length > INTRO_SIM_FAV_MAX) f.intros.length = INTRO_SIM_FAV_MAX;
  saveFavs(f);
  introSimUpdateFavBtn();
  if (typeof renderFavs === 'function') renderFavs();
  if (typeof playSound === 'function') playSound('ok');
}

function introSimRemoveFavById(id) {
  if (typeof loadFavs !== 'function') return;
  const f = loadFavs();
  if (!f.intros?.length) return;
  f.intros = f.intros.filter(i => i.id !== id);
  saveFavs(f);
  introSimUpdateFavBtn();
  if (typeof renderFavs === 'function') renderFavs();
}

function introSimGetFavIntros() {
  return typeof loadFavs === 'function' ? (loadFavs().intros || []) : [];
}

function introSimCopyFavById(id, mode) {
  const item = introSimGetFavIntros().find(i => i.id === id);
  if (!item) return;
  const txt = mode === 'intro'
    ? (item.introOnly || (item.temps ? Object.values(item.temps).join('\n\n') : ''))
    : (item.fullComment || item.full || '');
  if (!txt) return;
  navigator.clipboard.writeText(txt).then(() => {
    if (typeof playSound === 'function') playSound('ok');
  }).catch(() => {});
}

function introSimOpenFromFav(id) {
  const item = introSimGetFavIntros().find(i => i.id === id);
  if (!item) return;
  introSimNavigate();
  setTimeout(() => {
    initIntroSim();
    if (item.fields) introSimSetFields(item.fields);
    introSimShowSavedFav(item);
    el('intro-sim')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 120);
}

function introSimShowSavedFav(item) {
  const introOnly = item.introOnly
    || (item.temps ? Object.values(item.temps).join('\n\n') : '');
  const fullComment = item.fullComment
    || (item.full && item.full !== introOnly ? item.full : null);
  const entry = {
    id: item.entryId || 'FAV',
    auteurNom: item.auteurNom,
    auteur: item.fields?.auteur,
    titre: item.titre,
    oeuvre: item.oeuvre,
    genre: item.genre,
    prob: item.prob,
    gtextId: item.gtextId,
    temps: item.temps || {},
    full: introOnly,
    fullComment,
    commentaire: item.commentaire || null,
    contexte: '',
    fallback: false,
    indexOnly: !item.gtextId,
    procedesCles: [],
    authorTips: [],
  };
  if (!entry.commentaire && !entry.fullComment
    && item.fields && typeof introSimAttachCommentary === 'function') {
    introSimAttachCommentary(entry, {
      userExcerpt: item.fields.passage,
      passageRaw: item.fields.passage,
      fullCommentary: true,
    });
  }
  window._introSimCurrent = entry;
  introSimShowResult(entry, null, { persist: false });
}

const INTRO_SIM_EXAMPLES = [
  { auteur: 'Verlaine', oeuvre: 'Poèmes saturniens', passage: 'Chanson d\'automne' },
  { auteur: 'Racine', oeuvre: 'Phèdre', passage: 'monologue' },
  { auteur: 'Hugo', oeuvre: 'Les Misérables', passage: 'Gavroche' },
  { auteur: 'Corneille', oeuvre: 'Le Cid', passage: 'Chimène' },
  { auteur: 'Baudelaire', oeuvre: 'Les Fleurs du mal', passage: 'Correspondances' },
  { auteur: 'Lamartine', oeuvre: 'Méditations poétiques', passage: 'Le Lac' },
  { auteur: 'Molière', oeuvre: 'Tartuffe', passage: '' },
  { auteur: 'Camus', oeuvre: 'L\'Étranger', passage: '' },
  { auteur: 'Rimbaud', oeuvre: 'Le Bateau ivre', passage: '' },
  { auteur: 'La Fontaine', oeuvre: 'Fables', passage: 'La Cigale et la Fourmi' },
  { auteur: 'Voltaire', oeuvre: 'Candide', passage: '' },
  { auteur: 'Rostand', oeuvre: 'Cyrano de Bergerac', passage: 'tirade du nez' },
  { auteur: 'Du Bellay', oeuvre: 'Les Regrets', passage: 'Heureux qui' },
  { auteur: 'Zola', oeuvre: 'Germinal', passage: 'la mine' },
  { auteur: 'Maupassant', oeuvre: 'La Parure', passage: '' },
  { auteur: 'Apollinaire', oeuvre: 'Alcools', passage: 'Mirabeau' },
  { auteur: 'Prévert', oeuvre: 'Paroles', passage: 'Barbara' },
  { auteur: 'Hugo', oeuvre: 'Les Contemplations', passage: 'Demain dès l\'aube' },
  { auteur: 'Anouilh', oeuvre: 'Antigone', passage: '' },
  { auteur: 'Valéry', oeuvre: 'Le Cimetière marin', passage: '' },
  { auteur: 'Senghor', oeuvre: 'Poésie', passage: 'Femme noire' },
  { auteur: 'Beckett', oeuvre: 'En attendant Godot', passage: '' },
  { auteur: 'Césaire', oeuvre: 'Cahier d\'un retour au pays natal', passage: '' },
];

/** GT iconiques — première … dernière phrase + corrigé IPCI pour démo commentaire complet */
const INTRO_SIM_GT_DEMOS = [
  'GT-001', 'GT-002', 'GT-003', 'GT-004', 'GT-006', 'GT-007', 'GT-008', 'GT-009',
  'GT-010', 'GT-011', 'GT-012', 'GT-013', 'GT-014', 'GT-015', 'GT-016', 'GT-017',
  'GT-019', 'GT-020', 'GT-021', 'GT-022', 'GT-024', 'GT-025', 'GT-026', 'GT-027',
  'GT-028', 'GT-030', 'GT-031', 'GT-032', 'GT-034', 'GT-035', 'GT-036', 'GT-038',
  'GT-042', 'GT-045', 'GT-050', 'GT-068', 'GT-076', 'GT-084', 'GT-092', 'GT-097',
  'GT-107', 'GT-108', 'GT-123', 'GT-176', 'GT-196',
  'GT-005', 'GT-023', 'GT-029', 'GT-040', 'GT-041', 'GT-047', 'GT-052', 'GT-056',
  'GT-059', 'GT-077', 'GT-080', 'GT-082', 'GT-083', 'GT-087', 'GT-089', 'GT-091',
  'GT-101', 'GT-106', 'GT-121', 'GT-180', 'GT-195', 'GT-255', 'GT-261', 'GT-269', 'GT-275',
  'GT-033', 'GT-037', 'GT-039', 'GT-046', 'GT-048', 'GT-049', 'GT-054', 'GT-057', 'GT-058',
  'GT-062', 'GT-064', 'GT-066', 'GT-069', 'GT-070', 'GT-072', 'GT-074', 'GT-075', 'GT-081',
  'GT-086', 'GT-090', 'GT-093', 'GT-094', 'GT-099', 'GT-102', 'GT-103', 'GT-104', 'GT-117',
  'GT-120', 'GT-128', 'GT-262', 'GT-268', 'GT-283',
  'GT-043', 'GT-044', 'GT-051', 'GT-053', 'GT-061', 'GT-063', 'GT-067', 'GT-073',
  'GT-085', 'GT-088', 'GT-105', 'GT-111', 'GT-112', 'GT-124', 'GT-125', 'GT-142',
  'GT-214', 'GT-252', 'GT-273', 'GT-274', 'GT-276', 'GT-284',
  'GT-531', 'GT-595', 'GT-644', 'GT-721',
  'GT-587', 'GT-657', 'GT-715', 'GT-729',
  'GT-055', 'GT-116', 'GT-122', 'GT-138', 'GT-144',
  'GT-065', 'GT-095', 'GT-096', 'GT-109', 'GT-127', 'GT-134', 'GT-141', 'GT-143', 'GT-145', 'GT-148',
  'GT-265', 'GT-266', 'GT-267', 'GT-270', 'GT-271', 'GT-272',
  'GT-263', 'GT-264', 'GT-277', 'GT-278', 'GT-279', 'GT-280', 'GT-281', 'GT-282', 'GT-285',
  'GT-060', 'GT-115', 'GT-119', 'GT-181', 'GT-184',
];
const INTRO_SIM_GT_DEMO_SET = new Set(INTRO_SIM_GT_DEMOS);
const INTRO_SIM_GT_DEMO_INITIAL = 18;
const INTRO_SIM_GT_GENRES = [
  { id: 'all', label: 'Tous' },
  { id: 'poesie', label: 'Poésie', match: /po[eé]sie/i },
  { id: 'theatre', label: 'Théâtre', match: /th[eé][âa]tre|com[eé]die|trag[eé]die/i },
  { id: 'roman', label: 'Roman', match: /roman|r[eé]cit|nouvelle|conte/i },
  { id: 'fable', label: 'Fable', match: /fable/i },
  { id: 'idees', label: 'Idées', match: /id[eé]es|essai|pamphlet|lettre|discours/i },
];
let _introSimGtExpanded = false;
let _introSimGtGenre = 'all';
let _introSimGtSearch = '';

function introSimIsGtDemo(id) {
  return INTRO_SIM_GT_DEMO_SET.has(id);
}

function introSimNormAuthorLabel(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

/** Meilleur GT modèle pour un auteur (fiche auteurs, etc.) */
function introSimFindGtDemoForAuthor(auteurNom) {
  const fam = introSimNormAuthorLabel(auteurNom).split(/\s+/).pop();
  if (!fam || fam.length < 3) return null;
  const hits = INTRO_SIM_GT_DEMOS.map(id => (typeof gtextGetById === 'function' ? gtextGetById(id) : null))
    .filter(t => {
      if (!t?.id) return false;
      const ta = introSimNormAuthorLabel(t.auteur);
      const tf = ta.split(/\s+/).pop();
      return ta.includes(fam) || tf === fam || fam.includes(tf);
    });
  if (!hits.length) return null;
  hits.sort((a, b) => {
    const na = parseInt(a.id.slice(3), 10);
    const nb = parseInt(b.id.slice(3), 10);
    if (na <= 260 && nb > 260) return -1;
    if (nb <= 260 && na > 260) return 1;
    return (b.attendus?.length || 0) - (a.attendus?.length || 0);
  });
  return hits[0].id;
}

function introSimOpenFromAuteurFull(nom, oeuvresStr) {
  const gtId = introSimFindGtDemoForAuthor(nom);
  if (gtId) {
    introSimOpenFromGtext(gtId);
    return;
  }
  introSimOpenFromAuteur(nom, oeuvresStr);
}

/** GT modèle le plus proche (auteur + œuvre + titre passage) */
function introSimFindGtDemoMatch(auteur, oeuvre, passage) {
  const fam = introSimNormAuthorLabel(auteur).split(/\s+/).pop();
  const norm = typeof introSimNorm === 'function' ? introSimNorm : introSimNormAuthorLabel;
  const o = norm(oeuvre || '');
  const p = norm(passage || '');
  if (!fam && !o && !p) return null;
  let bestId = null;
  let bestScore = 0;
  INTRO_SIM_GT_DEMOS.forEach(id => {
    const t = typeof gtextGetById === 'function' ? gtextGetById(id) : null;
    if (!t) return;
    let score = 0;
    const ta = introSimNormAuthorLabel(t.auteur);
    const tf = ta.split(/\s+/).pop();
    if (fam && (ta.includes(fam) || tf === fam)) score += 42;
    const to = norm(String(t.oeuvre || '').replace(/\(\d{4}\)/, ''));
    const tt = norm(t.titre || '');
    if (o.length >= 3) {
      const ow = o.split(' ').filter(w => w.length >= 4);
      const hits = ow.filter(w => to.includes(w) || tt.includes(w)).length;
      score += Math.min(38, hits * 12);
      if (to.includes(o.slice(0, Math.min(14, o.length))) || o.includes(to.slice(0, 14))) score += 28;
    }
    if (p.length >= 3) {
      const pw = p.split(' ').filter(w => w.length >= 4);
      const hits = pw.filter(w => tt.includes(w) || to.includes(w)).length;
      score += Math.min(32, hits * 10);
      if (tt.includes(p.slice(0, Math.min(12, p.length))) || p.includes(tt.slice(0, 12))) score += 24;
    }
    if (score > bestScore && score >= 52) {
      bestScore = score;
      bestId = id;
    }
  });
  return bestId;
}

function introSimUpdateGtDemoLabel() {
  const opt = document.querySelector('#intro-sim-gt-wrap .intro-sim-opt');
  if (opt) opt.textContent = `(${INTRO_SIM_GT_DEMOS.length} modèles · commentaire complet · corrigé GT)`;
}

function introSimUpdateMeta() {
  const meta = el('intro-sim-meta');
  if (!meta) return;
  const gtN = typeof getAllGtexts === 'function' ? getAllGtexts().length : 732;
  const st = typeof bacPassagesLoadStatus === 'function' ? bacPassagesLoadStatus() : null;
  if (st && st.loaded < st.total) {
    meta.textContent = `Chargement banque bac… ${st.loaded}/${st.total} · ${gtN} grands textes analysables`;
    return;
  }
  const n = typeof introSimCount === 'function' ? introSimCount() : 10000;
  meta.textContent = n + ' passages probables indexés · ' + gtN + ' grands textes · ' + INTRO_SIM_GT_DEMOS.length + ' modèles de commentaire complet';
}

function introSimRenderTopBac() {
  const wrap = el('intro-sim-top-wrap');
  const cont = el('intro-sim-top');
  if (!wrap || !cont || typeof introSimTopEntries !== 'function') return;
  if (wrap.dataset.loading) return;
  const top = introSimTopEntries(10, 92);
  if (!top.length) { wrap.hidden = true; return; }
  wrap.hidden = false;
  cont.innerHTML = top.map(e => {
    const oe = (e.oeuvre || '').replace(/\(\d{4}\)/, '').trim();
    return `<button type="button" class="chip intro-sim-ex-chip intro-sim-top-chip" onclick="introSimQuick(${JSON.stringify(e.auteurNom || e.auteur)},${JSON.stringify(oe)},${JSON.stringify(e.titre || '')})" title="Probabilité ~${e.prob || '?'}%">${introSimEsc(e.auteurNom || e.auteur)} · ${introSimEsc((e.titre || oe).slice(0, 28))}</button>`;
  }).join('');
}

function introSimGtDemoIdsFiltered() {
  let ids = _introSimGtGenre === 'all' ? INTRO_SIM_GT_DEMOS : INTRO_SIM_GT_DEMOS.filter(id => {
    const f = INTRO_SIM_GT_GENRES.find(x => x.id === _introSimGtGenre);
    const t = typeof gtextGetById === 'function' ? gtextGetById(id) : null;
    return t && f?.match?.test(t.genre || '');
  });
  const q = typeof introSimNorm === 'function'
    ? introSimNorm(_introSimGtSearch)
    : introSimNormAuthorLabel(_introSimGtSearch);
  if (q.length >= 2) {
    ids = ids.filter(id => {
      const t = typeof gtextGetById === 'function' ? gtextGetById(id) : null;
      if (!t) return false;
      const hay = typeof introSimNorm === 'function'
        ? introSimNorm([t.auteur, t.titre, t.oeuvre, t.genre, id].join(' '))
        : introSimNormAuthorLabel([t.auteur, t.titre, t.oeuvre, t.genre, id].join(' '));
      return hay.includes(q);
    });
  }
  return ids;
}

function introSimOnGtSearchInput() {
  _introSimGtSearch = el('intro-sim-gt-search')?.value.trim() || '';
  _introSimGtExpanded = _introSimGtSearch.length >= 2;
  introSimRenderGtDemos();
}

function introSimRenderGtGenreFilters() {
  const cont = el('intro-sim-gt-genres');
  if (!cont) return;
  cont.innerHTML = INTRO_SIM_GT_GENRES.map(g => {
    const n = g.id === 'all'
      ? INTRO_SIM_GT_DEMOS.length
      : INTRO_SIM_GT_DEMOS.filter(id => {
          const t = typeof gtextGetById === 'function' ? gtextGetById(id) : null;
          return t && g.match?.test(t.genre || '');
        }).length;
    if (g.id !== 'all' && !n) return '';
    const on = _introSimGtGenre === g.id ? ' on' : '';
    return `<button type="button" class="chip intro-sim-gt-genre${on}" onclick="introSimSetGtGenre('${g.id}')">${introSimEsc(g.label)}${g.id === 'all' ? '' : ` (${n})`}</button>`;
  }).filter(Boolean).join('');
}

function introSimSetGtGenre(id) {
  _introSimGtGenre = id || 'all';
  _introSimGtExpanded = false;
  introSimRenderGtGenreFilters();
  introSimRenderGtDemos();
}

function introSimClearGtSearch() {
  _introSimGtSearch = '';
  const inp = el('intro-sim-gt-search');
  if (inp) inp.value = '';
  _introSimGtExpanded = false;
  introSimRenderGtDemos();
}

function introSimRenderGtDemos() {
  const wrap = el('intro-sim-gt-wrap');
  const cont = el('intro-sim-gt');
  if (!wrap || !cont) return;
  const ids = introSimGtDemoIdsFiltered();
  if (!ids.length) {
    const msg = _introSimGtSearch
      ? `Aucun modèle pour « ${introSimEsc(_introSimGtSearch)} » — essaie un autre mot ou « Tous ».`
      : 'Aucun modèle dans ce genre — choisis « Tous ».';
    cont.innerHTML = `<p class="intro-sim-hint">${msg}</p>`;
    wrap.hidden = false;
    return;
  }
  const autoExpand = _introSimGtSearch.length >= 2;
  const showAll = _introSimGtExpanded || autoExpand;
  const slice = showAll ? ids : ids.slice(0, INTRO_SIM_GT_DEMO_INITIAL);
  const chips = [];
  slice.forEach(id => {
    const t = typeof gtextGetById === 'function' ? gtextGetById(id) : null;
    if (!t?.texte) return;
    const label = `${t.auteur} · ${(t.titre || t.oeuvre || id).replace(/\(\d{4}\)/, '').trim()}`;
    chips.push(`<button type="button" class="chip intro-sim-ex-chip intro-sim-gt-chip" onclick="introSimOpenFromGtext('${introSimEscAttr(id)}')" title="Texte intégral · commentaire complet (${id})">${introSimEsc(label.slice(0, 42))}${label.length > 42 ? '…' : ''}</button>`);
  });
  if (ids.length > INTRO_SIM_GT_DEMO_INITIAL && !autoExpand) {
    const rest = ids.length - INTRO_SIM_GT_DEMO_INITIAL;
    chips.push(`<button type="button" class="chip intro-sim-ex-chip intro-sim-gt-more" onclick="introSimToggleGtDemos()" title="Commentaires complets avec corrigé GT">${showAll ? '− Réduire' : `+ ${rest} autres textes`}</button>`);
  }
  if (!chips.length) { wrap.hidden = true; return; }
  wrap.hidden = false;
  cont.innerHTML = chips.join('');
}

function introSimToggleGtDemos() {
  _introSimGtExpanded = !_introSimGtExpanded;
  introSimRenderGtDemos();
}

/** Premiers ids GT pour aperçu (page Grands textes, etc.) */
function introSimGtDemoPreviewIds(n) {
  return INTRO_SIM_GT_DEMOS.slice(0, Math.max(1, n || 4));
}

function introSimRandomGtDemo() {
  const pool = introSimGtDemoIdsFiltered().filter(id => {
    const t = typeof gtextGetById === 'function' ? gtextGetById(id) : null;
    return t?.texte;
  });
  if (!pool.length) {
    alert('Aucun texte modèle disponible pour ce filtre.');
    return;
  }
  introSimOpenFromGtext(pool[Math.floor(Math.random() * pool.length)]);
}

function initIntroSim() {
  introSimUpdateMeta();
  const bindForm = () => {
    const quick = el('intro-sim-quick');
    if (quick && !quick.dataset.ready) {
      quick.dataset.ready = '1';
      quick.innerHTML = INTRO_SIM_EXAMPLES.map(ex =>
        `<button type="button" class="chip intro-sim-ex-chip" onclick="introSimQuick(${JSON.stringify(ex.auteur)},${JSON.stringify(ex.oeuvre)},${JSON.stringify(ex.passage)})">${introSimEsc(ex.auteur)} · ${introSimEsc(ex.oeuvre.split('(')[0].trim())}</button>`
      ).join('');
    }
    const au = el('intro-sim-auteur');
    const oe = el('intro-sim-oeuvre');
    const pa = el('intro-sim-passage');
    if (au && !au.dataset.ready) {
      au.dataset.ready = '1';
      au.addEventListener('input', () => { introSimUpdateSuggest('auteur'); introSimScheduleLive(); });
    }
    if (oe && !oe.dataset.ready) {
      oe.dataset.ready = '1';
      oe.addEventListener('input', () => { introSimUpdateSuggest('oeuvre'); introSimScheduleLive(); });
    }
    if (pa && !pa.dataset.ready) {
      pa.dataset.ready = '1';
      pa.addEventListener('input', () => {
        if (typeof introSimIsExcerptText !== 'function' || !introSimIsExcerptText(pa.value)) {
          introSimUpdateSuggest('passage');
        }
        introSimScheduleLive();
      });
    }
    ['intro-sim-auteur', 'intro-sim-oeuvre', 'intro-sim-theme'].forEach(id => {
      const inp = el(id);
      if (inp && !inp.dataset.enter) {
        inp.dataset.enter = '1';
        inp.addEventListener('keydown', e => {
          if (e.key === 'Enter') { e.preventDefault(); introSimGenerate(); }
        });
      }
    });
    const paEnter = el('intro-sim-passage');
    if (paEnter && !paEnter.dataset.enter) {
      paEnter.dataset.enter = '1';
      paEnter.addEventListener('keydown', e => {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          introSimGenerate();
        }
      });
    }
    const theme = el('intro-sim-theme');
    if (theme && !theme.dataset.live) {
      theme.dataset.live = '1';
      theme.addEventListener('input', introSimScheduleLive);
    }
    introSimRenderRecent();
    introSimRenderTopBac();
    introSimRenderGtGenreFilters();
    introSimRenderGtDemos();
    introSimUpdateGtDemoLabel();
    introSimInitOllamaUi();
    introSimApplyQuery();
    const gtSearch = el('intro-sim-gt-search');
    if (gtSearch && !gtSearch.dataset.ready) {
      gtSearch.dataset.ready = '1';
      gtSearch.addEventListener('input', introSimOnGtSearchInput);
      gtSearch.addEventListener('keydown', e => {
        if (e.key === 'Escape') { e.preventDefault(); introSimClearGtSearch(); }
      });
    }
  };

  if (typeof ensureBacPassagesLoaded === 'function') {
    const st = typeof bacPassagesLoadStatus === 'function' ? bacPassagesLoadStatus() : null;
    if (st && st.loaded < st.total) {
      const wrap = el('intro-sim-top-wrap');
      if (wrap) { wrap.hidden = false; wrap.dataset.loading = '1'; }
      ensureBacPassagesLoaded((n, tot) => {
        introSimUpdateMeta();
      }).then(() => {
        if (typeof introSimResetIndex === 'function') introSimResetIndex();
        if (wrap) delete wrap.dataset.loading;
        introSimUpdateMeta();
        bindForm();
      }).catch(() => {
        introSimUpdateMeta();
        bindForm();
      });
      if (!el('intro-sim-auteur')?.dataset.ready) bindForm();
      return;
    }
  }
  bindForm();
}

function introSimFields() {
  return {
    auteur: el('intro-sim-auteur')?.value.trim() || '',
    oeuvre: el('intro-sim-oeuvre')?.value.trim() || '',
    passage: el('intro-sim-passage')?.value.trim() || '',
    theme: el('intro-sim-theme')?.value.trim() || '',
  };
}

function introSimSetFields({ auteur, oeuvre, passage, theme }) {
  if (el('intro-sim-auteur') && auteur != null) el('intro-sim-auteur').value = auteur;
  if (el('intro-sim-oeuvre') && oeuvre != null) el('intro-sim-oeuvre').value = oeuvre;
  if (el('intro-sim-passage') && passage != null) el('intro-sim-passage').value = passage;
  if (el('intro-sim-theme') && theme != null) el('intro-sim-theme').value = theme;
}

function introSimNavigate() {
  switchMatiere('proc');
  const btn = document.querySelector('#snav-proc .stab[onclick*="p-meth"]');
  if (btn) switchPg('proc', 'p-meth', btn);
  setTimeout(() => el('intro-sim')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 160);
}

function introSimLoadRecent() {
  try { return JSON.parse(localStorage.getItem(INTRO_SIM_RECENT_KEY) || '[]'); }
  catch (e) { return []; }
}

function introSimSaveRecent(fields) {
  if (!fields?.auteur && !fields?.oeuvre) return;
  const key = [fields.auteur, fields.oeuvre, fields.passage].map(s => (s || '').toLowerCase()).join('|');
  let list = introSimLoadRecent().filter(r => r.key !== key);
  list.unshift({ ...fields, key, ts: Date.now() });
  list = list.slice(0, INTRO_SIM_RECENT_MAX);
  try { localStorage.setItem(INTRO_SIM_RECENT_KEY, JSON.stringify(list)); } catch (e) {}
  introSimRenderRecent();
}

function introSimPassageLabel(passage) {
  const p = (passage || '').trim();
  if (!p) return '';
  if (typeof introSimIsExcerptText === 'function' && introSimIsExcerptText(p)) {
    const line = p.split('\n').map(l => l.trim()).find(l => l.length > 8) || p;
    return line.length > 42 ? line.slice(0, 39) + '…' : line;
  }
  return p;
}

function introSimRenderRecent() {
  const wrap = el('intro-sim-recent-wrap');
  const cont = el('intro-sim-recent');
  if (!wrap || !cont) return;
  const list = introSimLoadRecent();
  if (!list.length) {
    wrap.hidden = true;
    return;
  }
  wrap.hidden = false;
  cont.innerHTML = list.map(r => {
    const sub = (r.oeuvre || introSimPassageLabel(r.passage) || '…').split('(')[0].trim();
    return `<button type="button" class="chip intro-sim-ex-chip" onclick="introSimQuick(${JSON.stringify(r.auteur)},${JSON.stringify(r.oeuvre)},${JSON.stringify(r.passage || '')})">${introSimEsc(r.auteur)} · ${introSimEsc(sub)}</button>`;
  }).join('');
}

function introSimPushQuery(fields) {
  if (!fields || typeof history.replaceState !== 'function') return;
  try {
    const u = new URL(location.href);
    ['intro_a', 'intro_o', 'intro_p', 'intro_t'].forEach(k => u.searchParams.delete(k));
    if (fields.auteur) u.searchParams.set('intro_a', fields.auteur);
    if (fields.oeuvre) u.searchParams.set('intro_o', fields.oeuvre);
    if (fields.passage && fields.passage.length <= 400) u.searchParams.set('intro_p', fields.passage);
    if (fields.theme) u.searchParams.set('intro_t', fields.theme);
    history.replaceState(null, '', u.pathname + u.search + u.hash);
  } catch (e) {}
}

function introSimApplyQuery() {
  const sp = new URLSearchParams(location.search);
  const auteur = sp.get('intro_a') || '';
  const oeuvre = sp.get('intro_o') || '';
  if (!auteur && !oeuvre) return;
  const au = el('intro-sim-auteur');
  if (!au || au.dataset.queryDone) return;
  au.dataset.queryDone = '1';
  introSimSetFields({
    auteur,
    oeuvre,
    passage: sp.get('intro_p') || '',
    theme: sp.get('intro_t') || '',
  });
  setTimeout(introSimGenerate, 60);
}

function introSimShareLink() {
  const f = introSimFields();
  introSimPushQuery(f);
  const url = location.href;
  const done = () => { if (typeof playSound === 'function') playSound('ok'); };
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(url).then(done).catch(() => {});
  }
}

function introSimOpts() {
  const theme = el('intro-sim-theme')?.value.trim();
  const passage = el('intro-sim-passage')?.value.trim() || '';
  const fullMode = el('intro-sim-fullmode');
  const excerpt = typeof introSimIsExcerptText === 'function' && introSimIsExcerptText(passage);
  const fullCommentary = fullMode ? (fullMode.checked || excerpt) : excerpt;
  const opts = { fullCommentary };
  if (theme) opts.themeOverride = theme.charAt(0).toLowerCase() + theme.slice(1);
  return opts;
}

function introSimScheduleLive() {
  clearTimeout(_introSimLiveTimer);
  _introSimLiveTimer = setTimeout(introSimLivePreview, 450);
}

function introSimLivePreview() {
  const auteur = el('intro-sim-auteur')?.value.trim() || '';
  const oeuvre = el('intro-sim-oeuvre')?.value.trim() || '';
  const passage = el('intro-sim-passage')?.value.trim() || '';
  const excerptOnly = typeof introSimIsExcerptText === 'function' && introSimIsExcerptText(passage);
  if (!auteur && !oeuvre && !excerptOnly) return;
  const matches = introSimSearch(auteur, oeuvre, passage, introSimOpts());
  if (matches.length) introSimRenderMatches(matches, auteur, oeuvre, passage, true);
}

function introSimQuick(auteur, oeuvre, passage, theme) {
  introSimSetFields({ auteur, oeuvre, passage: passage || '', theme: theme || '' });
  introSimGenerate();
}

function introSimRandom() {
  const pick = () => {
    const entry = typeof introSimRandomEntry === 'function' ? introSimRandomEntry(85) : null;
    if (!entry) {
      alert('Aucun passage trouvé (banque en cours de chargement ?). Réessaie dans quelques secondes.');
      return;
    }
    const oeuvre = (entry.oeuvre || '').replace(/\(\d{4}\)/, '').trim();
    introSimQuick(entry.auteurNom || entry.auteur, oeuvre, entry.titre || '');
  };
  if (typeof ensureBacPassagesLoaded === 'function') {
    const st = typeof bacPassagesLoadStatus === 'function' ? bacPassagesLoadStatus() : null;
    if (st && st.loaded < st.total) {
      introSimUpdateMeta();
      ensureBacPassagesLoaded().then(() => {
        if (typeof introSimResetIndex === 'function') introSimResetIndex();
        introSimUpdateMeta();
        pick();
      });
      return;
    }
  }
  pick();
}

function introSimOpenFromGtext(id) {
  const t = typeof gtextGetById === 'function' ? gtextGetById(id) : introSimGetRawText(id);
  if (!t) return;
  introSimNavigate();
  setTimeout(() => {
    initIntroSim();
    introSimSetFields({
      auteur: t.auteur,
      oeuvre: t.oeuvre.replace(/\(\d{4}\)/, '').trim(),
      passage: typeof introSimPassageFirstLast === 'function'
        ? introSimPassageFirstLast(t.texte || '') || t.titre || ''
        : (t.texte || t.titre || ''),
    });
    const fm = el('intro-sim-fullmode');
    if (fm) fm.checked = !!(t.texte && t.texte.length > 80);
    introSimGenerate();
    el('intro-sim')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 120);
}

function introSimOpenFromExo(exoId) {
  if (typeof EXERCICES === 'undefined' || typeof introSimParseOeuvreRef !== 'function') return;
  const ex = EXERCICES.find(e => e.id === exoId);
  const parsed = ex?.oeuvre ? introSimParseOeuvreRef(ex.oeuvre) : null;
  if (!parsed) return;
  const gtId = typeof introSimFindGtDemoMatch === 'function'
    ? introSimFindGtDemoMatch(parsed.auteur, parsed.oeuvre, parsed.passage)
    : null;
  if (gtId) {
    introSimOpenFromGtext(gtId);
    return;
  }
  introSimNavigate();
  setTimeout(() => {
    initIntroSim();
    introSimQuick(parsed.auteur, parsed.oeuvre, parsed.passage);
    el('intro-sim')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 120);
}

function introSimOpenFromAuteur(nom, oeuvresStr) {
  if (!nom) return;
  const oeuvre = typeof introSimFirstOeuvreFromList === 'function'
    ? introSimFirstOeuvreFromList(oeuvresStr)
    : (oeuvresStr || '').split(/[·;,]/)[0].trim();
  introSimNavigate();
  setTimeout(() => {
    initIntroSim();
    introSimQuick(nom, oeuvre, '');
    el('intro-sim')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 120);
}

function introSimUpdateSuggest(field) {
  if (field === 'passage') {
    const pa = el('intro-sim-passage');
    if (pa && typeof introSimIsExcerptText === 'function' && introSimIsExcerptText(pa.value)) return;
  }
  const inp = el(field === 'auteur' ? 'intro-sim-auteur' : field === 'oeuvre' ? 'intro-sim-oeuvre' : 'intro-sim-passage');
  const dl = el(field === 'auteur' ? 'intro-sim-auteur-list' : field === 'oeuvre' ? 'intro-sim-oeuvre-list' : null);
  if (!inp || !dl || typeof introSimSuggest !== 'function') return;
  const items = introSimSuggest(inp.value, field === 'passage' ? 'titre' : field);
  dl.innerHTML = items.map(v => `<option value="${introSimEscAttr(v)}">`).join('');
}

function introSimEsc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function introSimEscAttr(s) {
  return introSimEsc(s).replace(/"/g, '&quot;');
}

function introSimRenderMatches(matches, auteur, oeuvre, passage, silent) {
  const wrap = el('intro-sim-matches');
  if (!wrap) return;
  if (!matches.length) {
    wrap.innerHTML = `<p class="intro-sim-warn">Aucun passage indexé ne correspond. Essaie le <strong>nom de famille</strong>, un mot de l'œuvre, ou <strong>colle l'extrait</strong> dans le champ passage. Si l'auteur est dans tes fiches, une intro générique sera quand même proposée.</p>`;
    el('intro-sim-result').innerHTML = '';
    return;
  }
  const top = matches.slice(0, 10);
  const fbNote = top[0].entry.fallback ? ' <span class="intro-sim-fb">(intro générique — auteur reconnu, passage non indexé)</span>' : '';
  wrap.innerHTML = `<p class="intro-sim-match-lbl">${matches.length} résultat${matches.length > 1 ? 's' : ''}${fbNote}${silent ? ' · aperçu' : ' — clique pour changer de passage :'}</p><div class="intro-sim-match-chips">${top.map((m, i) => {
    const probTag = m.entry.prob ? `<span class="intro-sim-prob">~${m.entry.prob}%</span>` : '';
    return `<button type="button" class="chip intro-sim-match-chip${i === 0 ? ' on' : ''}" onclick="introSimPickMatch(${i})">${introSimEsc(m.entry.id)} · ${introSimEsc(m.entry.titre || m.entry.oeuvre)} <span class="intro-sim-score">${introSimScorePct(m.score)}%</span>${probTag}</button>`;
  }).join('')}</div>`;
  window._introSimMatches = top;
  _introSimProbIdx = 0;
  introSimShowResult(top[0].entry, top[0].score, { persist: !silent });
  if (!silent && introSimOllamaEnabled() && introSimWantsFullCommentary(passage)) {
    introSimRequestOllamaCommentary(top[0].entry, passage, top[0].score, { persist: true });
  }
}

function introSimPickMatch(idx) {
  const m = window._introSimMatches?.[idx];
  if (!m) return;
  document.querySelectorAll('.intro-sim-match-chip').forEach((c, i) => c.classList.toggle('on', i === idx));
  _introSimProbIdx = 0;
  introSimShowResult(m.entry, m.score, { persist: true });
  const passage = el('intro-sim-passage')?.value.trim() || '';
  if (introSimOllamaEnabled() && introSimWantsFullCommentary(passage)) {
    introSimRequestOllamaCommentary(m.entry, passage, m.score, { persist: true });
  }
}

function introSimShowResult(entry, score, showOpts) {
  showOpts = showOpts || {};
  const out = el('intro-sim-result');
  if (!out || !entry) return;
  const labels = ['① Amorce', '② Auteur & œuvre', '③ Extrait', '④ Problématique', '⑤ Plan'];
  const keys = ['amorce', 'auteur', 'extrait', 'problematique', 'plan'];

  const procedesHtml = entry.procedesCles?.length
    ? `<div class="intro-sim-proc"><strong>Procédés repérables dans ce passage</strong><div class="intro-sim-proc-chips">${entry.procedesCles.map(p => `<span class="intro-sim-proc-chip">${introSimEsc(p)}</span>`).join('')}</div></div>`
    : '';

  const tipsHtml = entry.authorTips?.length
    ? `<div class="intro-sim-tips"><strong>Repères auteur (intro)</strong><ul>${entry.authorTips.map(t => `<li>${introSimEsc(t)}</li>`).join('')}</ul></div>`
    : '';

  const probAlt = entry.problematiqueAlt?.[_introSimProbIdx % (entry.problematiqueAlt.length || 1)];
  const probText = _introSimProbIdx === 0
    ? entry.temps.problematique
    : `À travers l'étude de ce passage, nous nous demanderons ${probAlt}`;

  const blocks = keys.map((k, i) => {
    const txt = k === 'problematique' ? probText : entry.temps[k];
    return `<div class="intro-sim-temps"><div class="intro-sim-temps-head"><span class="intro-sim-temps-lbl">${labels[i]}</span><button type="button" class="intro-sim-copy-one" onclick="introSimCopySection('${k}')" title="Copier">📋</button></div><p id="intro-sim-${k}">${introSimEsc(txt)}</p></div>`;
  }).join('');

  const checklist = keys.map((k, i) =>
    `<span class="intro-sim-check-item"><span class="intro-sim-check-n">${i + 1}</span>${labels[i].replace(/^[①②③④⑤]\s*/, '')}</span>`
  ).join('');

  const actions = [];
  const relatedGt = (!entry.gtextId && typeof introSimFindRelatedGtext === 'function')
    ? introSimFindRelatedGtext(entry) : null;
  if (entry.indexOnly && !entry.gtextId) {
    actions.push(`<span class="intro-sim-index-tag">Index bac — pas d'analyse IPC complète</span>`);
  }
  if (entry.gtextId && typeof startGtext === 'function') {
    actions.push(`<button type="button" class="sbtn sec" onclick="startGtext('${introSimEscAttr(entry.gtextId)}')">📖 Analyser ${introSimEsc(entry.gtextId)}</button>`);
  } else if (relatedGt && typeof startGtext === 'function') {
    actions.push(`<button type="button" class="sbtn sec" onclick="startGtext('${introSimEscAttr(relatedGt.id)}')" title="Texte proche (même auteur/œuvre)">📖 Texte proche · ${introSimEsc(relatedGt.id)}</button>`);
  }
  if (entry.problematiqueAlt?.length > 1) {
    actions.push(`<button type="button" class="sbtn sec" onclick="introSimRotateProb()">↻ Autre problématique</button>`);
  }
  actions.push(`<button type="button" class="sbtn sec intro-sim-fav-btn" id="intro-sim-fav-btn" onclick="introSimToggleFav()">☆ Enregistrer</button>`);
  actions.push(`<button type="button" class="sbtn sec" onclick="introSimCopyFull()">📋 Copier ${entry.fullComment ? 'le commentaire complet' : 'l\'intro'}</button>`);
  if (entry.fullComment) {
    actions.push(`<button type="button" class="sbtn sec" onclick="introSimCopyIntroOnly()">📋 Copier l'intro seule</button>`);
  }
  actions.push(`<button type="button" class="sbtn sec" onclick="introSimShareLink()">🔗 Lien partageable</button>`);
  actions.push(`<button type="button" class="sbtn sec" onclick="window.print()">🖨 Imprimer</button>`);

  const comm = entry.commentaire;
  const commHtml = comm?.full ? `
    <div class="intro-sim-comm">
      <div class="intro-sim-comm-head">
        <strong>Commentaire rédigé</strong>
        <span class="intro-sim-comm-meta">${comm.parts?.length || 3} partie(s) · ${comm.ipcCount || 0} analyse(s) IPCI${comm.lineCount ? ` · ${comm.lineCount} vers/lignes couverts` : ''}${comm.fromOllama ? ` · IA locale (${introSimEsc(comm.model || 'Ollama')})` : ''}${comm.fromCorpus ? ' · corrigé GT' : ''}</span>
        <button type="button" class="sbtn sec intro-sim-fav-btn intro-sim-fav-comm-btn" id="intro-sim-fav-comm-btn" onclick="introSimToggleFav()">☆ Enregistrer le commentaire</button>
      </div>
      ${(comm.parts || []).map(p => `
        <div class="intro-sim-comm-part">
          <div class="intro-sim-comm-part-lbl">${introSimEsc(p.label)}</div>
          <p>${introSimEsc(p.text)}</p>
          ${p.transition ? `<p class="intro-sim-comm-trans">${introSimEsc(p.transition)}</p>` : ''}
        </div>`).join('')}
      <div class="intro-sim-comm-part intro-sim-comm-concl">
        <div class="intro-sim-comm-part-lbl">Conclusion</div>
        <p>${introSimEsc(comm.conclusion)}</p>
      </div>
    </div>` : '';

  out.innerHTML = `
    <div class="intro-sim-result-head">
      <span class="intro-sim-badge">${introSimEsc(entry.id)}</span>
      <strong>${introSimEsc(entry.auteurNom)}</strong> · ${introSimEsc(entry.titre || entry.oeuvre)}
      ${entry.genre ? `<span class="intro-sim-genre">${introSimEsc(entry.genre)}</span>` : ''}
      ${entry.prob ? `<span class="intro-sim-prob-badge" title="Probabilité estimée au bac">~${entry.prob}% bac</span>` : ''}
      ${score ? `<span class="intro-sim-conf">Correspondance ${introSimScorePct(score)}%</span>` : ''}
    </div>
    ${entry.fallback ? '<p class="intro-sim-fb-banner">Intro générique à partir de la fiche auteur — complète avec ton extrait d\'examen.</p>' : ''}
    <div class="intro-sim-checklist" aria-label="Structure en 5 temps">${checklist}</div>
    ${entry.contexte ? `<p class="intro-sim-ctx">${introSimEsc(entry.contexte)}</p>` : ''}
    ${procedesHtml}
    ${tipsHtml}
    <div class="intro-sim-temps-wrap">${blocks}</div>
    <div class="intro-sim-actions">${actions.join('')}</div>
    <div class="intro-sim-full">
      <div class="intro-sim-full-lbl">${entry.fullComment ? 'Introduction (5 temps)' : 'Introduction complète'}</div>
      <div class="intro-sim-full-text" id="intro-sim-full-text">${keys.map(k => `<p>${introSimEsc(k === 'problematique' ? probText : entry.temps[k])}</p>`).join('')}</div>
    </div>
    ${commHtml}
    <div class="intro-sim-full" ${entry.fullComment ? '' : 'style="display:none"'} id="intro-sim-full-comment-wrap">
      <div class="intro-sim-full-lbl">Commentaire complet (texte continu)</div>
      <div class="intro-sim-full-text" id="intro-sim-full-comment-text">${entry.fullComment ? introSimEsc(entry.fullComment).split('\n\n').map(p => `<p>${p}</p>`).join('') : ''}</div>
    </div>`;

  window._introSimCurrent = { ...entry, temps: { ...entry.temps, problematique: probText } };
  window._introSimCurrent.full = keys.map(k => window._introSimCurrent.temps[k]).join('\n\n');
  if (entry.fullComment) window._introSimCurrent.fullComment = entry.fullComment;
  if (entry.commentaire) window._introSimCurrent.commentaire = entry.commentaire;
  if (showOpts.persist) {
    introSimSaveRecent(introSimFields());
    introSimPushQuery(introSimFields());
  }
  introSimUpdateFavBtn();
}

function introSimRotateProb() {
  const entry = window._introSimCurrent;
  if (!entry?.problematiqueAlt?.length) return;
  _introSimProbIdx = (_introSimProbIdx + 1) % entry.problematiqueAlt.length;
  introSimShowResult(entry, null);
}

function introSimGenerate() {
  introSimAbortOllama();
  const run = () => {
    if (typeof introSimSearch !== 'function') {
      alert('Banque de commentaires non chargée.');
      return;
    }
    const auteur = el('intro-sim-auteur')?.value.trim() || '';
    const oeuvre = el('intro-sim-oeuvre')?.value.trim() || '';
    const passage = el('intro-sim-passage')?.value.trim() || '';
    const excerptOnly = typeof introSimIsExcerptText === 'function' && introSimIsExcerptText(passage);
    if (!auteur && !oeuvre && !excerptOnly) {
      alert('Renseigne au moins l\'auteur, l\'œuvre, ou colle la première et la dernière phrase du passage (avec … entre les deux).');
      return;
    }
    const matches = introSimSearch(auteur, oeuvre, passage, introSimOpts());
    introSimRenderMatches(matches, auteur, oeuvre, passage, false);
    el('intro-sim-result')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };
  if (typeof ensureBacPassagesLoaded === 'function') {
    const st = typeof bacPassagesLoadStatus === 'function' ? bacPassagesLoadStatus() : null;
    if (st && st.loaded < st.total) {
      introSimUpdateMeta();
      ensureBacPassagesLoaded().then(() => {
        if (typeof introSimResetIndex === 'function') introSimResetIndex();
        introSimUpdateMeta();
        run();
      });
      return;
    }
  }
  run();
}

function introSimCopySection(key) {
  const entry = window._introSimCurrent;
  const txt = entry?.temps?.[key];
  if (!txt) return;
  navigator.clipboard.writeText(txt).catch(() => {});
  if (typeof playSound === 'function') playSound('ok');
}

function introSimCopyFull() {
  const entry = window._introSimCurrent;
  const txt = entry?.fullComment || entry?.full;
  if (!txt) return;
  navigator.clipboard.writeText(txt).then(() => {
    if (typeof playSound === 'function') playSound('ok');
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = txt;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  });
}

function introSimCopyIntroOnly() {
  const entry = window._introSimCurrent;
  if (!entry?.full) return;
  navigator.clipboard.writeText(entry.full).catch(() => {});
  if (typeof playSound === 'function') playSound('ok');
}
