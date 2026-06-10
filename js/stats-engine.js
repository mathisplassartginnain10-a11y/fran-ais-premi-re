/* stats-engine.js — Analytique & indice de préparation QCM · v20260610 */

const BAC_PASS_THRESHOLD = 10; /* 10/20 ≈ 50% QCM — seuil minimal */
const BAC_GOOD_THRESHOLD = 12; /* 12/20 ≈ 60% — mention AB */
const BAC_EXCELLENT = 14;      /* 14/20 ≈ 70% — mention B */

function _statQKey(q) {
  if (typeof qKey === 'function') return qKey(q);
  return (q?.q || '').slice(0, 60);
}

function loadExamHistory() {
  try { return JSON.parse(localStorage.getItem('bac_exam_history') || '[]'); }
  catch (e) { return []; }
}

function saveExamHistory(arr) {
  try {
    localStorage.setItem('bac_exam_history', JSON.stringify(arr.slice(-40)));
  } catch (e) {}
}

function recordExamResult(ok, tot, mat, timeUsed, timeout) {
  const pct = tot ? Math.round(ok / tot * 100) : 0;
  const h = loadExamHistory();
  h.push({
    date: new Date().toLocaleDateString('fr-FR'),
    ts: Date.now(),
    ok, tot, pct,
    mat: mat || 'both',
    timeUsed: timeUsed || 0,
    timeout: !!timeout,
  });
  saveExamHistory(h);
}

function loadExoStats() {
  try { return JSON.parse(localStorage.getItem('bac_exo_stats') || '{}'); }
  catch (e) { return {}; }
}

function loadGtextStats() {
  try { return JSON.parse(localStorage.getItem('bac_gtext_stats') || '{}'); }
  catch (e) { return {}; }
}

function computeGtextAvgPct() {
  const st = loadGtextStats();
  const keys = Object.keys(st);
  if (!keys.length) return null;
  let sum = 0, n = 0;
  keys.forEach(k => {
    if (st[k].note != null) { sum += st[k].note / 20 * 100; n++; }
    else if (st[k].pct != null) { sum += st[k].pct; n++; }
  });
  return n ? Math.round(sum / n) : null;
}

function _weightedExamPct(exams) {
  if (!exams || !exams.length) return null;
  const recent = exams.slice(-8);
  let wSum = 0, wTot = 0;
  recent.forEach((e, i) => {
    const w = i + 1;
    wSum += e.pct * w;
    wTot += w;
  });
  return Math.round(wSum / wTot);
}

function _examTrendDelta(exams) {
  if (!exams || exams.length < 4) return 0;
  const half = Math.floor(exams.length / 2);
  const old = exams.slice(-half * 2, -half);
  const recent = exams.slice(-half);
  const avg = arr => arr.length ? arr.reduce((a, e) => a + e.pct, 0) / arr.length : 0;
  return Math.round(avg(recent) - avg(old));
}

function _examTimeoutRate(exams) {
  if (!exams || !exams.length) return 0;
  return exams.filter(e => e.timeout).length / exams.length;
}

/** Confiance statistique dans l'estimation (volume de données) */
function _estimateConfidence(ctx) {
  let pts = 0;
  const sessions = ctx.sessions || 0;
  const exams = ctx.examCount || 0;
  const cov = ctx.coveragePct ?? 0;
  const qAttempts = ctx.qAttempts ?? 0;
  if (sessions >= 20) pts += 30;
  else if (sessions >= 10) pts += 22;
  else if (sessions >= 5) pts += 14;
  else if (sessions >= 2) pts += 6;
  if (qAttempts >= 80) pts += 15;
  else if (qAttempts >= 30) pts += 10;
  else if (qAttempts >= 10) pts += 5;
  if (exams >= 5) pts += 28;
  else if (exams >= 3) pts += 20;
  else if (exams >= 1) pts += 10;
  if (cov >= 50) pts += 15;
  else if (cov >= 30) pts += 10;
  else if (cov >= 15) pts += 5;
  if (ctx.gtextAvg != null) pts += 7;
  if (ctx.exoPct != null) pts += 5;
  pts = Math.min(100, pts);
  let level, label;
  if (pts >= 72) { level = 'high'; label = 'Élevée — estimation fiable'; }
  else if (pts >= 42) { level = 'mid'; label = 'Moyenne — continue à t\'entraîner'; }
  else { level = 'low'; label = 'Faible — peu de données, fourchette large'; }
  return { pct: pts, level, label };
}

/** Paramètres affichage stats + modèle grands textes (legacy prob*) */
function getProbSettings() {
  const g = typeof getSetting === 'function' ? getSetting : () => undefined;
  const mode = g('probMode') || 'realistic';
  const modeMul = mode === 'prudent' ? 0.93 : mode === 'ambitious' ? 1.07 : 1;
  const steepRaw = g('probSteepness');
  const steepness = steepRaw != null ? steepRaw / 1000 : 0.088;
  return {
    mode,
    modeMul,
    priorAdmis: g('probPriorAdmis') ?? 40,
    priorGtext: g('probPriorGtext') ?? 38,
    shrinkK: g('probShrinkK') ?? 8,
    shrinkKGtext: g('probShrinkKGtext') ?? 4,
    steepness: steepness * (mode === 'prudent' ? 0.92 : mode === 'ambitious' ? 1.08 : 1),
    compositeQcmShare: (g('probCompositeQcm') ?? 62) / 100,
    showHub: g('probShowHub') !== false,
    showCatalogGrid: g('probShowCatalogGrid') !== false,
    showExamPreview: g('probShowExamPreview') !== false,
    showGtextPanel: g('probShowGtextPanel') !== false,
  };
}

const MASTERY_GLOBAL_WEIGHTS = { proc: 0.48, gram: 0.37, vocab: 0.15 };

function getMasteryQualitative(index, hasData) {
  if (!hasData || index == null) {
    return { label: 'Non testé', color: 'var(--tx3)', level: 'none' };
  }
  if (index < 40) return { label: 'À renforcer', color: 'var(--er)', level: 'low' };
  if (index < 60) return { label: 'En progrès', color: 'var(--amber)', level: 'mid' };
  if (index < 80) return { label: 'Solide', color: 'var(--green)', level: 'good' };
  return { label: 'Maîtrisé', color: 'var(--ok)', level: 'high' };
}

/**
 * Indice de préparation par matière (0–100).
 * 1. Par catégorie QCM : maitrise = ok/total (%) si total >= 1, sinon null (non testée).
 * 2. Moyenne pondérée des maitrise des catégories testées (poids = nb réponses par catégorie).
 * 3. Facteur couverture = max(0,5 ; catégories testées / catégories totales).
 *    Indice = round(moyennePondérée × facteurCouverture).
 */
function computeMasteryIndex(m) {
  const cfg = STAT_CONFIG[m];
  if (!cfg) {
    return {
      index: 0, rawWeighted: 0, coverageFactor: 0.5,
      catCoverage: { tested: 0, total: 0 },
      hasData: false, label: 'Non testé', color: 'var(--tx3)', level: 'none',
    };
  }
  const mastery = computeCatMastery(m);
  const totalCats = cfg.cats.length;
  let weightSum = 0;
  let weightedSum = 0;
  let tested = 0;

  cfg.cats.forEach(c => {
    const x = mastery[c];
    if (x.tot >= 1 && x.pct != null) {
      weightedSum += x.pct * x.tot;
      weightSum += x.tot;
      tested++;
    }
  });

  const coverageFactor = totalCats ? Math.max(0.5, tested / totalCats) : 0.5;
  const rawWeighted = weightSum > 0 ? Math.round(weightedSum / weightSum) : 0;
  const index = weightSum > 0 ? Math.round(rawWeighted * coverageFactor) : 0;
  const hasData = tested > 0;
  const qual = getMasteryQualitative(index, hasData);

  return {
    index,
    rawWeighted,
    coverageFactor,
    catCoverage: { tested, total: totalCats },
    hasData,
    ...qual,
  };
}

/** Indice global : moyenne pondérée Lit. 48 % + Gram. 37 % + Voc. 15 % (0 si matière non testée). */
function computeGlobalMastery() {
  const proc = computeMasteryIndex('proc');
  const gram = computeMasteryIndex('gram');
  const vocab = STAT_CONFIG.vocab ? computeMasteryIndex('vocab') : null;

  const procIdx = proc.hasData ? proc.index : 0;
  const gramIdx = gram.hasData ? gram.index : 0;
  const vocabIdx = vocab?.hasData ? vocab.index : 0;
  const index = Math.round(
    procIdx * MASTERY_GLOBAL_WEIGHTS.proc
    + gramIdx * MASTERY_GLOBAL_WEIGHTS.gram
    + vocabIdx * MASTERY_GLOBAL_WEIGHTS.vocab
  );

  let testedCats = 0;
  let totalCats = 0;
  [proc, gram, vocab].forEach(mi => {
    if (!mi) return;
    testedCats += mi.catCoverage.tested;
    totalCats += mi.catCoverage.total;
  });

  const hasData = proc.hasData || gram.hasData || (vocab?.hasData ?? false);
  const qual = getMasteryQualitative(index, hasData);

  return {
    index,
    proc,
    gram,
    vocab,
    catCoverage: { tested: testedCats, total: totalCats },
    hasData,
    ...qual,
  };
}

/** Catégories testées les plus faibles (tri par maitrise croissante). */
function getWeakestCategories(n = 5) {
  const rows = [];
  ['proc', 'gram', 'vocab'].forEach(m => {
    if (!STAT_CONFIG[m]) return;
    const mastery = computeCatMastery(m);
    const matLabel = m === 'proc' ? 'Litt.' : m === 'gram' ? 'Gram.' : 'Voc.';
    const icon = m === 'proc' ? '📖' : m === 'gram' ? '✍️' : '📝';
    STAT_CONFIG[m].cats.forEach(c => {
      const x = mastery[c];
      if (x.tot >= 1 && x.pct != null) {
        rows.push({
          m,
          cat: c,
          pct: x.pct,
          tot: x.tot,
          ok: x.ok,
          icon,
          matLabel,
          name: c,
          action: `openQcmCat('${m}','${c.replace(/'/g, "\\'")}')`,
        });
      }
    });
  });
  return rows.sort((a, b) => a.pct - b.pct || a.tot - b.tot).slice(0, n);
}

/** Catégories QCM non encore testées (total = 0). */
function getUntestedCategories() {
  const rows = [];
  ['proc', 'gram', 'vocab'].forEach(m => {
    if (!STAT_CONFIG[m]) return;
    const mastery = computeCatMastery(m);
    const matLabel = m === 'proc' ? 'Litt.' : m === 'gram' ? 'Gram.' : 'Voc.';
    STAT_CONFIG[m].cats.forEach(c => {
      const x = mastery[c];
      if (x.tot < 1) {
        rows.push({
          m,
          cat: c,
          matLabel,
          bankSize: x.bankSize,
          action: `openQcmCat('${m}','${c.replace(/'/g, "\\'")}')`,
        });
      }
    });
  });
  return rows;
}

function _probWeightForSignal() { return 5; } /* legacy stub — modèle QCM supprimé */

/**
 * Proba calibrée (grands textes uniquement) — shrinkage bayésien + logistique.
 */
function _probFromPerformance(pct, n, opts = {}) {
  if (pct == null) return null;
  const ps = getProbSettings();
  const threshold = opts.threshold ?? 50;
  const prior = opts.prior ?? ps.priorAdmis;
  const shrinkK = opts.shrinkK ?? ps.shrinkK;
  const steepness = opts.steepness ?? ps.steepness;
  const est = Math.round(_shrinkEstimate(pct, n, prior, shrinkK) * ps.modeMul);
  let prob = _logisticProb(est, threshold, steepness);
  const cap = opts.maxCap ?? 90;
  if ((n || 0) < 5) prob = Math.min(prob, 72, cap);
  else if ((n || 0) < 2) prob = Math.min(prob, 62, cap);
  else if ((n || 0) < 1) prob = Math.min(prob, 48, cap);
  else prob = Math.min(prob, cap);
  return prob;
}

/** Rétrécissement bayésien (grands textes) */
function _shrinkEstimate(observed, n, prior, k) {
  if (observed == null) return prior;
  const nk = Math.max(0, n || 0);
  if (nk === 0) return prior;
  return Math.round((observed * nk + prior * k) / (nk + k));
}

function _probFromNote20(note, n) {
  if (note == null) return null;
  const ps = getProbSettings();
  return _probFromPerformance(Math.round(note / 20 * 100), n, {
    prior: ps.priorGtext, shrinkK: ps.shrinkKGtext, steepness: ps.steepness,
  });
}

function _probBand(center, confidence, opts = {}) {
  if (center == null) return { lo: null, hi: null, text: '—' };
  const extra = opts.extraSpread ?? 0;
  const spread = (confidence.level === 'high' ? 10 : confidence.level === 'mid' ? 18 : 28) + extra;
  const lo = Math.max(3, center - spread);
  const hi = Math.min(95, center + spread);
  return { lo, hi, text: `${lo}–${hi}%` };
}

/** Courbe logistique : probabilité d'atteindre un seuil de score (0–100) */
function _logisticProb(score, midpoint, steepness) {
  const x = steepness * (score - midpoint);
  const p = 100 / (1 + Math.exp(-x));
  return Math.max(3, Math.min(94, Math.round(p)));
}

function _probBandLegacy(center, confidence) {
  return _probBand(center, confidence);
}

function _probMaxCap(confidence) {
  const ps = getProbSettings();
  if (confidence.level === 'high') return ps.maxCapHigh;
  if (confidence.level === 'mid') return ps.maxCapMid;
  return ps.maxCapLow;
}

function computeGtextCoverage() {
  const total = typeof getAllGtexts === 'function'
    ? getAllGtexts().length
    : (typeof GRANDS_TEXTES !== 'undefined' ? GRANDS_TEXTES.length : 0);
  if (!total) return null;
  const st = loadGtextStats();
  const done = Object.keys(st).filter(k => st[k].note != null).length;
  return Math.round(done / total * 100);
}

function computeChallengePct() {
  if (typeof computeChallengeStats !== 'function') return null;
  const ch = computeChallengeStats();
  return ch.total ? ch.pct : null;
}

function computeExoPct() {
  const exoSt = loadExoStats();
  const ids = Object.keys(exoSt);
  if (!ids.length) return null;
  let ok = 0, tot = 0;
  ids.forEach(id => { ok += exoSt[id].ok || 0; tot += exoSt[id].total || 0; });
  return tot ? Math.round(ok / tot * 100) : null;
}

function computeGtextDetailStats() {
  const st = loadGtextStats();
  const keys = Object.keys(st).filter(k => st[k].note != null);
  if (!keys.length) return null;
  let noteSum = 0, procSum = 0, citeSum = 0, interpSum = 0, nBreak = 0;
  keys.forEach(k => {
    const x = st[k];
    noteSum += x.note;
    if (x.procPts != null) {
      procSum += x.procPts;
      citeSum += x.citePts || 0;
      interpSum += x.interpPts || 0;
      nBreak++;
    }
  });
  const n = keys.length;
  const maxProc = 2.5, maxCite = 1.25, maxInterp = 1.25;
  return {
    count: n,
    avgNote: Math.round(noteSum / n * 10) / 10,
    avgNotePct: Math.round(noteSum / n / 20 * 100),
    avgProc: nBreak ? Math.round(procSum / nBreak * 100) / 100 : null,
    avgCite: nBreak ? Math.round(citeSum / nBreak * 100) / 100 : null,
    avgInterp: nBreak ? Math.round(interpSum / nBreak * 100) / 100 : null,
    procPct: nBreak ? Math.round(procSum / nBreak / maxProc * 100) : null,
    citePct: nBreak ? Math.round(citeSum / nBreak / maxCite * 100) : null,
    interpPct: nBreak ? Math.round(interpSum / nBreak / maxInterp * 100) : null,
    coveragePct: computeGtextCoverage(),
  };
}

function safeSessionAggregate(m) {
  try { return computeSessionAggregate(m); }
  catch (e) { console.error('computeSessionAggregate', m, e); return null; }
}

function computeSessionAggregate(m) {
  const st = loadSt(STAT_CONFIG[m].stKey);
  const sessions = st.sessions || [];
  if (!sessions.length) return null;
  const totalQ = sessions.reduce((a, s) => a + s.tot, 0);
  const totalOk = sessions.reduce((a, s) => a + s.ok, 0);
  const avgPct = totalQ ? Math.round(totalOk / totalQ * 100) : 0;
  const best = sessions.reduce((b, s) => {
    const v = s.tot ? Math.round(s.ok / s.tot * 100) : 0;
    return v > b ? v : b;
  }, 0);
  const last = sessions[sessions.length - 1];
  const lastPct = last && last.tot ? Math.round(last.ok / last.tot * 100) : null;
  const qdata = st.qdata || {};
  const tracked = Object.keys(qdata).length;
  let hardErr = 0, hardN = 0;
  Object.values(qdata).forEach(d => {
    if (d.total >= 2) {
      hardErr += Math.round((1 - d.ok / d.total) * 100);
      hardN++;
    }
  });
  return {
    sessions: sessions.length,
    avgPct,
    ok: totalOk,
    tot: totalQ,
    best,
    lastPct,
    tracked,
    hardAvgErr: hardN ? Math.round(hardErr / hardN) : null,
    hardScore: hardN ? Math.max(0, 100 - Math.round(hardErr / hardN)) : null,
    hardN,
  };
}

function computePhraseQcmStats() {
  const cats = ['Analyse de phrase'];
  let ok = 0, tot = 0, attempted = 0, bank = 0;
  ['proc', 'gram'].forEach(m => {
    const st = loadSt(STAT_CONFIG[m].stKey);
    const qdata = st.qdata || {};
    QCM_STATE[m].data.filter(q => cats.includes(q.cat)).forEach(q => {
      bank++;
      const d = qdata[_statQKey(q)];
      if (d && d.total > 0) {
        ok += d.ok;
        tot += d.total;
        attempted++;
      }
    });
  });
  return {
    pct: tot >= 3 ? Math.round(ok / tot * 100) : null,
    coverage: bank ? Math.round(attempted / bank * 100) : 0,
    attempted,
    bank,
  };
}

function computeMethodQcmStats() {
  const targets = ['Méthode commentaire', 'Dissertation', 'Commentaire & dissertation'];
  let ok = 0, tot = 0, attempted = 0, bank = 0;
  ['proc', 'vocab'].forEach(m => {
    const st = loadSt(STAT_CONFIG[m].stKey);
    const qdata = st.qdata || {};
    QCM_STATE[m].data.filter(q => targets.includes(q.cat)).forEach(q => {
      bank++;
      const d = qdata[_statQKey(q)];
      if (d && d.total > 0) {
        ok += d.ok;
        tot += d.total;
        attempted++;
      }
    });
  });
  return {
    pct: tot >= 2 ? Math.round(ok / tot * 100) : null,
    coverage: bank ? Math.round(attempted / bank * 100) : 0,
    attempted,
    bank,
  };
}

function computeFavorisQcmStats() {
  if (typeof loadFavs !== 'function') return null;
  const favs = loadFavs();
  let ok = 0, tot = 0, count = 0;
  ['proc', 'gram', 'vocab'].forEach(m => {
    const key = m === 'proc' ? 'qproc' : m === 'vocab' ? 'qvocab' : 'qgram';
    const list = favs[key] || [];
    const qdata = loadSt(STAT_CONFIG[m].stKey).qdata || {};
    list.forEach(qText => {
      const d = qdata[qText];
      if (d && d.total > 0) {
        ok += d.ok;
        tot += d.total;
        count++;
      }
    });
  });
  return {
    count: (favs.qproc || []).length + (favs.qgram || []).length + (favs.qvocab || []).length,
    tracked: count,
    pct: tot >= 2 ? Math.round(ok / tot * 100) : null,
  };
}

function computeExamStatsByMat(matFilter) {
  const exams = loadExamHistory().filter(e => {
    if (matFilter === 'proc') return e.mat === 'proc' || e.mat === 'both';
    if (matFilter === 'gram') return e.mat === 'gram' || e.mat === 'both';
    if (matFilter === 'vocab') return true;
    return true;
  });
  return {
    count: exams.length,
    avg: _weightedExamPct(exams),
    trend: _examTrendDelta(exams),
    timeoutRate: _examTimeoutRate(exams),
    last: exams.length ? exams[exams.length - 1] : null,
    history: exams.slice(-12),
  };
}

function loadCarteStats() {
  try {
    return JSON.parse(localStorage.getItem('bac_carte_stats') || '{"sessions":[],"totals":{"proc":{"ok":0,"tot":0},"gram":{"ok":0,"tot":0},"vocab":{"ok":0,"tot":0}}}');
  } catch (e) {
    return { sessions: [], totals: { proc: { ok: 0, tot: 0 }, gram: { ok: 0, tot: 0 }, vocab: { ok: 0, tot: 0 } } };
  }
}

function recordCarteSession(type, cat, ok, tot) {
  try {
    const st = loadCarteStats();
    st.sessions.push({
      date: new Date().toLocaleDateString('fr-FR'),
      ts: Date.now(),
      type: type || 'proc',
      cat: cat || 'Tout',
      ok, tot,
      pct: tot ? Math.round(ok / tot * 100) : 0,
    });
    if (st.sessions.length > 100) st.sessions = st.sessions.slice(-100);
    const key = type === 'gram' ? 'gram' : type === 'vocab' ? 'vocab' : 'proc';
    if (!st.totals[key]) st.totals[key] = { ok: 0, tot: 0 };
    st.totals[key].ok += ok;
    st.totals[key].tot += tot;
    localStorage.setItem('bac_carte_stats', JSON.stringify(st));
  } catch (e) {}
}

function computeCarteStats() {
  const st = loadCarteStats();
  const out = { sessions: st.sessions || [] };
  ['proc', 'gram', 'vocab'].forEach(k => {
    const t = st.totals?.[k] || { ok: 0, tot: 0 };
    out[k] = {
      pct: t.tot ? Math.round(t.ok / t.tot * 100) : null,
      ok: t.ok, tot: t.tot,
      sessionCount: (st.sessions || []).filter(s => (s.type || 'proc') === k).length,
    };
  });
  const allOk = ['proc', 'gram', 'vocab'].reduce((a, k) => a + (out[k].ok || 0), 0);
  const allTot = ['proc', 'gram', 'vocab'].reduce((a, k) => a + (out[k].tot || 0), 0);
  out.global = {
    pct: allTot ? Math.round(allOk / allTot * 100) : null,
    sessions: (st.sessions || []).length,
  };
  const recentSess = (st.sessions || []).slice(-7).map(s => ({ ok: s.ok, tot: s.tot }));
  out.recent7 = _weightedRecentSessions(recentSess, 7);
  return out;
}

function computeExoDetailStats() {
  const exoSt = loadExoStats();
  const ids = Object.keys(exoSt);
  if (!ids.length) return null;
  let ok = 0, tot = 0;
  const byType = {};
  ids.forEach(id => {
    const x = exoSt[id];
    const type = x.type || x.label || id.split('-')[0] || 'Autre';
    if (!byType[type]) byType[type] = { ok: 0, total: 0 };
    byType[type].ok += x.ok || 0;
    byType[type].total += x.total || 0;
    ok += x.ok || 0;
    tot += x.total || 0;
  });
  Object.keys(byType).forEach(k => {
    byType[k].pct = byType[k].total ? Math.round(byType[k].ok / byType[k].total * 100) : null;
  });
  return { pct: tot ? Math.round(ok / tot * 100) : null, count: ids.length, byType, ok, tot };
}

function computeGtextTrend() {
  const st = loadGtextStats();
  const entries = Object.entries(st)
    .filter(([, x]) => x.note != null && x.date)
    .sort((a, b) => (a[1].date || 0) - (b[1].date || 0));
  if (entries.length < 2) return null;
  const half = Math.floor(entries.length / 2);
  const old = entries.slice(0, half);
  const recent = entries.slice(half);
  const avg = arr => arr.reduce((s, [, x]) => s + x.note, 0) / arr.length;
  const oldAvg = avg(old);
  const recentAvg = avg(recent);
  const delta = Math.round((recentAvg - oldAvg) * 10) / 10;
  return {
    count: entries.length,
    oldAvg: Math.round(oldAvg * 10) / 10,
    recentAvg: Math.round(recentAvg * 10) / 10,
    delta,
    dir: delta >= 0.5 ? 'up' : delta <= -0.5 ? 'down' : 'neutral',
    last3: entries.slice(-3).map(([, x]) => x.note),
  };
}

/** Stats IPCI d'une entrée bac_gtext_stats */
function _gtextEntryIPCI(x) {
  const maxP = 2.5, maxC = 1.25, maxI = 1.25;
  return {
    procPct: x.procPts != null ? Math.round(x.procPts / maxP * 100) : null,
    citePct: x.citePts != null ? Math.round(x.citePts / maxC * 100) : null,
    interpPct: x.interpPts != null ? Math.round(x.interpPts / maxI * 100) : null,
  };
}

/** Probabilités mentions à partir d'une note /20 */
function computeGtextMentionProbs(note20, n) {
  const ps = getProbSettings();
  const pct = Math.round(note20 / 20 * 100);
  const effN = Math.max(1, n || 1);
  const pass = _probFromNote20(note20, effN);
  const ab = _probFromPerformance(pct, effN, { threshold: 58, shrinkK: ps.shrinkKGtext, prior: ps.priorGtext });
  const b = _probFromPerformance(pct, effN, { threshold: 68, shrinkK: ps.shrinkKGtext, prior: ps.priorGtext });
  const tb = _probFromPerformance(pct, effN, { threshold: 78, shrinkK: ps.shrinkKGtext, prior: ps.priorGtext });
  const conf = effN >= 5 ? 'high' : effN >= 2 ? 'mid' : 'low';
  const band = _probBand(pass, { level: conf }, { extraSpread: effN < 3 ? 10 : 4 });
  return { pass, ab, b, tb, band, pct, conf };
}

/** Analyse approfondie grands textes — corpus, genres, IPCI, probas */
function computeGtextExtendedStats() {
  const st = loadGtextStats();
  const all = typeof getAllGtexts === 'function' ? getAllGtexts() : [];
  const totalCorpus = all.length;
  const keys = Object.keys(st).filter(k => st[k].note != null);
  const detail = computeGtextDetailStats();
  const trend = computeGtextTrend();
  const ps = getProbSettings();

  if (!keys.length) {
    return {
      hasData: false,
      detail: null,
      totalCorpus,
      done: 0,
      coveragePct: 0,
      todoCount: totalCorpus,
      prob: null,
      mentions: null,
      ipci: null,
      texts: [],
      byGenre: {},
      byDiff: {},
      timeline: [],
      weakAxis: null,
      strongAxis: null,
      best: null,
      worst: null,
      recommendations: [],
      simulations: [],
    };
  }

  const texts = keys.map(id => {
    const x = st[id];
    const meta = all.find(t => t.id === id) || {};
    const ipci = _gtextEntryIPCI(x);
    const n = 1;
    const mentions = computeGtextMentionProbs(x.note, n);
    return {
      id,
      titre: meta.titre || id,
      auteur: meta.auteur || '',
      genre: x.genre || meta.genre || 'Autre',
      diff: x.diff ?? meta.diff ?? 2,
      date: x.date || 0,
      note: x.note,
      mention: x.mention,
      procPts: x.procPts,
      citePts: x.citePts,
      interpPts: x.interpPts,
      full: x.full,
      partial: x.partial,
      entryCount: x.entryCount,
      ...ipci,
      probPass: mentions.pass,
      probBand: mentions.band.text,
    };
  }).sort((a, b) => (b.date || 0) - (a.date || 0));

  const byGenre = {};
  const byDiff = { 1: { n: 0, noteSum: 0 }, 2: { n: 0, noteSum: 0 }, 3: { n: 0, noteSum: 0 } };
  let procSum = 0, citeSum = 0, interpSum = 0, ipciN = 0;

  texts.forEach(t => {
    const g = t.genre || 'Autre';
    if (!byGenre[g]) byGenre[g] = { n: 0, noteSum: 0, procSum: 0, citeSum: 0, interpSum: 0, ipciN: 0 };
    byGenre[g].n++;
    byGenre[g].noteSum += t.note;
    if (t.procPct != null) {
      byGenre[g].procSum += t.procPct;
      byGenre[g].citeSum += t.citePct || 0;
      byGenre[g].interpSum += t.interpPct || 0;
      byGenre[g].ipciN++;
      procSum += t.procPct;
      citeSum += t.citePct || 0;
      interpSum += t.interpPct || 0;
      ipciN++;
    }
    const d = Math.min(3, Math.max(1, t.diff || 2));
    byDiff[d].n++;
    byDiff[d].noteSum += t.note;
  });

  Object.keys(byGenre).forEach(g => {
    const b = byGenre[g];
    b.avgNote = Math.round(b.noteSum / b.n * 10) / 10;
    b.avgProc = b.ipciN ? Math.round(b.procSum / b.ipciN) : null;
    b.avgCite = b.ipciN ? Math.round(b.citeSum / b.ipciN) : null;
    b.avgInterp = b.ipciN ? Math.round(b.interpSum / b.ipciN) : null;
    b.probPass = _probFromNote20(b.avgNote, b.n);
  });
  [1, 2, 3].forEach(d => {
    const b = byDiff[d];
    b.avgNote = b.n ? Math.round(b.noteSum / b.n * 10) / 10 : null;
    b.probPass = b.avgNote != null ? _probFromNote20(b.avgNote, b.n) : null;
  });

  const ipci = ipciN ? {
    proc: Math.round(procSum / ipciN),
    cite: Math.round(citeSum / ipciN),
    interp: Math.round(interpSum / ipciN),
    n: ipciN,
    procProb: _probFromPerformance(Math.round(procSum / ipciN), ipciN, { shrinkK: ps.shrinkKGtext, prior: ps.priorGtext }),
    citeProb: _probFromPerformance(Math.round(citeSum / ipciN), ipciN, { shrinkK: ps.shrinkKGtext, prior: ps.priorGtext }),
    interpProb: _probFromPerformance(Math.round(interpSum / ipciN), ipciN, { shrinkK: ps.shrinkKGtext, prior: ps.priorGtext }),
  } : null;

  const axes = ipci ? [
    { id: 'proc', label: 'Procédés (P)', pct: ipci.proc, prob: ipci.procProb, icon: '🔍' },
    { id: 'cite', label: 'Citations (C)', pct: ipci.cite, prob: ipci.citeProb, icon: '💬' },
    { id: 'interp', label: 'Interprétations (I)', pct: ipci.interp, prob: ipci.interpProb, icon: '💡' },
  ].sort((a, b) => a.pct - b.pct) : [];
  const weakAxis = axes[0] || null;
  const strongAxis = axes.length ? axes[axes.length - 1] : null;

  const n = keys.length;
  const mentions = detail ? computeGtextMentionProbs(detail.avgNote, n) : null;
  const bac = computeBacComposite();

  const doneIds = new Set(keys);
  const todo = all.filter(t => !doneIds.has(t.id));
  const recommendations = [];

  if (weakAxis && weakAxis.pct < 55) {
    recommendations.push({
      icon: weakAxis.icon,
      text: `Renforcer ${weakAxis.label.split(' ')[0]} (${weakAxis.pct}% en moy.)`,
      gain: `+${Math.min(12, Math.round((60 - weakAxis.pct) / 4))} pts proba écrit`,
      action: null,
    });
  }
  if (detail && detail.coveragePct != null && detail.coveragePct < 40) {
    const next = todo.slice(0, 1)[0];
    recommendations.push({
      icon: '📚',
      text: `Couverture ${detail.coveragePct}% — fais ${Math.min(3, todo.length)} texte(s) de plus`,
      gain: '+5 à +10 pts proba Bac',
      action: next ? `startGtext(${JSON.stringify(next.id)})` : null,
      textId: next?.id || null,
    });
  }
  todo.slice(0, 5).forEach(t => {
    const genreWeak = byGenre[t.genre] && byGenre[t.genre].avgNote != null && byGenre[t.genre].avgNote < 10;
    if (recommendations.length >= 5) return;
    recommendations.push({
      icon: genreWeak ? '⚠' : '📜',
      text: `${(t.titre || t.id || 'Texte').slice(0, 32)}${(t.titre || '').length > 32 ? '…' : ''} · ${t.genre || 'Autre'}`,
      gain: genreWeak ? 'Genre à consolider' : 'À découvrir',
      action: `startGtext(${JSON.stringify(t.id)})`,
      textId: t.id,
    });
  });

  const simulations = [];
  if (detail && detail.avgNote < 14) {
    simulations.push({ name: 'Moy. commentaire → 12/20', delta: Math.round((12 - detail.avgNote) * 3), icon: '📈' });
  }
  if (ipci && ipci.proc < 60) {
    simulations.push({ name: 'Procédés (P) → 70%', delta: 4, icon: '🔍' });
  }
  if (ipci && ipci.interp < 55) {
    simulations.push({ name: 'Interprétations (I) → 65%', delta: 5, icon: '💡' });
  }
  if (detail && detail.coveragePct < 50) {
    simulations.push({ name: '5 textes de plus dans le corpus', delta: 8, icon: '📚' });
  }

  const recommendedIds = [];
  recommendations.forEach(r => {
    if (!r.action || !r.action.startsWith('startGtext')) return;
    const m = r.action.match(/startGtext\((['"])(.+?)\1\)/);
    if (m) recommendedIds.push(m[2]);
  });

  const pickNextGtext = () => {
    if (!todo.length) return null;
    const scored = todo.map(t => {
      let score = 0;
      const g = byGenre[t.genre];
      if (g?.avgNote != null && g.avgNote < 10) score += 28;
      else if (!g?.n) score += 14;
      if (weakAxis && weakAxis.pct < 55) {
        if (weakAxis.id === 'proc' && /Poésie|Théâtre/.test(t.genre || '')) score += 8;
        if (weakAxis.id === 'cite' && /Roman|Nouvelle/.test(t.genre || '')) score += 8;
        if (weakAxis.id === 'interp') score += 6;
      }
      if (detail?.avgNote != null && detail.avgNote < 10 && (t.diff || 2) <= 2) score += 10;
      if (recommendedIds.includes(t.id)) score += 20;
      return { t, score };
    });
    scored.sort((a, b) => b.score - a.score || (a.t.diff || 2) - (b.t.diff || 2));
    return scored[0]?.t || todo[0];
  };

  return {
    hasData: true,
    detail,
    trend,
    totalCorpus,
    done: keys.length,
    coveragePct: detail?.coveragePct ?? 0,
    todoCount: todo.length,
    prob: mentions?.pass ?? null,
    probBand: mentions?.band?.text ?? '—',
    mentions,
    ipci,
    weakAxis,
    strongAxis,
    texts,
    byGenre,
    byDiff,
    timeline: texts.slice(0, 12).reverse(),
    best: texts.reduce((b, t) => (!b || t.note > b.note) ? t : b, null),
    worst: texts.reduce((w, t) => (!w || t.note < w.note) ? t : w, null),
    last: texts[0] || null,
    recommendations: recommendations.slice(0, 6),
    recommendedIds,
    nextText: pickNextGtext(),
    simulations: simulations.slice(0, 4),
    bacComposite: bac,
    confidence: n >= 5 ? 'high' : n >= 2 ? 'mid' : 'low',
  };
}

function computeGlobalQuestionCoverage() {
  let attempted = 0, total = 0;
  ['proc', 'gram', 'vocab'].forEach(m => {
    if (!STAT_CONFIG[m]) return;
    const c = computeCoverage(m);
    attempted += c.attempted;
    total += c.total;
  });
  return { attempted, total, pct: total ? Math.round(attempted / total * 100) : 0 };
}

function computeWeeklyActivity() {
  const cutoff = Date.now() - 28 * 86400000;
  const weeks = [0, 0, 0, 0];
  ['proc', 'gram', 'vocab'].forEach(m => {
    if (!STAT_CONFIG[m]) return;
    (loadSt(STAT_CONFIG[m].stKey).sessions || []).forEach(s => {
      const ts = s.ts || 0;
      if (ts < cutoff) return;
      const w = Math.min(3, Math.floor((Date.now() - ts) / (7 * 86400000)));
      weeks[3 - w]++;
    });
  });
  const total28 = weeks.reduce((a, b) => a + b, 0);
  return { weeks, total28, avgWeek: Math.round(total28 / 4 * 10) / 10 };
}

function computeGlobalQcmPerformance() {
  let ok = 0, tot = 0, sessions = 0;
  ['proc', 'gram', 'vocab'].forEach(m => {
    if (!STAT_CONFIG[m]) return;
    const st = loadSt(STAT_CONFIG[m].stKey);
    (st.sessions || []).forEach(s => {
      ok += s.ok || 0;
      tot += s.tot || 0;
    });
    sessions += (st.sessions || []).length;
  });
  return {
    pct: tot >= 1 ? Math.round(ok / tot * 100) : null,
    ok, tot, n: tot, sessions,
  };
}

function computeBacComposite() {
  const ps = getProbSettings();
  const qcm = computeGlobalQcmPerformance();
  const gd = computeGtextDetailStats();
  const qcmScore = qcm.pct;
  const ecritScore = gd ? gd.avgNotePct : null;
  if (qcmScore == null && ecritScore == null) {
    return { qcmScore: null, ecritScore: null, composite: null, noteEst: null, probPass: null, probAB: null, probB: null, insufficient: true };
  }
  const qShare = ps.compositeQcmShare;
  const eShare = 1 - qShare;
  const q = qcmScore ?? ps.priorAdmis;
  const e = ecritScore ?? ps.priorAdmis;
  const composite = qcmScore != null && ecritScore != null
    ? Math.round(q * qShare + e * eShare)
    : Math.round(qcmScore != null ? q : e);
  const nEff = (qcm.n || 0) + (gd?.count || 0) * 5;
  return {
    qcmScore: qcmScore ?? null,
    ecritScore: ecritScore ?? null,
    composite,
    noteEst: Math.round(composite / 100 * 20 * 10) / 10,
    probPass: _probFromPerformance(composite, nEff, { shrinkK: ps.shrinkK }),
    probAB: _probFromPerformance(composite, nEff, { threshold: 58, shrinkK: ps.shrinkK }),
    probB: _probFromPerformance(composite, nEff, { threshold: 68, shrinkK: ps.shrinkK }),
    insufficient: qcmScore == null && ecritScore == null,
  };
}

function computeFavorisCardStats() {
  if (typeof loadFavs !== 'function') return null;
  const favs = loadFavs();
  const procCount = (favs.proc || []).length;
  const gramCount = (favs.gram || []).length;
  const vocabCount = (favs.vocab || []).length;
  const total = procCount + gramCount + vocabCount;
  if (!total) return null;
  return { total, procCount, gramCount, vocabCount };
}

const MASTERY_GROUP_LABELS = { proc: 'Littérature', gram: 'Grammaire', vocab: 'Vocabulaire' };

function buildMasteryCatalog() {
  const lines = [];
  const groups = { proc: [], gram: [], vocab: [] };
  ['proc', 'gram', 'vocab'].forEach(m => {
    if (!STAT_CONFIG[m]) return;
    const mastery = computeCatMastery(m);
    const matLabel = MASTERY_GROUP_LABELS[m] || m;
    const icon = m === 'proc' ? '📖' : m === 'gram' ? '✍️' : '📝';
    STAT_CONFIG[m].cats.forEach(c => {
      const x = mastery[c];
      const tested = x.tot >= 1;
      const esc = c.replace(/'/g, "\\'");
      const line = {
        id: `${m}-${c.slice(0, 20)}`,
        group: m,
        name: c,
        mat: m,
        matLabel,
        icon,
        score: tested ? x.pct : null,
        tested,
        ok: x.ok,
        tot: x.tot,
        attempted: x.attempted,
        bankSize: x.bankSize,
        action: `openQcmCat('${m}','${esc}')`,
        status: !tested ? 'na' : x.pct >= 80 ? 'ok' : x.pct >= 60 ? 'mid' : 'lo',
        detail: tested
          ? `${x.ok}/${x.tot} bonnes réponses · ${x.attempted}/${x.bankSize} Q vues`
          : `${x.bankSize} Q · à découvrir`,
      };
      lines.push(line);
      groups[m].push(line);
    });
  });
  const analysis = analyzeMasteryCatalog({ lines, groups, total: lines.length });
  return { lines, groups, total: lines.length, tested: lines.filter(l => l.tested).length, analysis };
}

function analyzeMasteryCatalog(catalog) {
  if (!catalog?.lines?.length) return null;
  const testedLines = catalog.lines.filter(l => l.tested && l.score != null);
  const byScore = [...testedLines].sort((a, b) => a.score - b.score);
  const strengths = [...testedLines].sort((a, b) => b.score - a.score).slice(0, 5);
  const weaknesses = byScore.filter(l => l.score < 60).slice(0, 7);
  const untested = catalog.lines.filter(l => !l.tested);
  const byGroup = {};
  Object.entries(catalog.groups || {}).forEach(([gk, arr]) => {
    const m = arr.filter(l => l.tested && l.score != null);
    if (!m.length) return;
    byGroup[gk] = Math.round(m.reduce((a, l) => a + l.score, 0) / m.length);
  });
  const medianScore = byScore.length
    ? byScore[Math.floor(byScore.length / 2)].score
    : null;
  return {
    strengths,
    weaknesses,
    untested,
    byGroup,
    medianScore,
    tested: testedLines.length,
    total: catalog.lines.length,
  };
}

function buildMasteryHeatmapData() {
  const catalog = buildMasteryCatalog();
  return catalog.lines
    .filter(l => l.tested)
    .map(l => ({
      m: l.mat,
      matLabel: l.matLabel === 'Littérature' ? 'Lit.' : l.matLabel === 'Grammaire' ? 'Gram.' : 'Voc.',
      cat: l.name,
      score: l.score,
      pct: l.score,
      tot: l.tot,
      action: l.action,
    }))
    .sort((a, b) => a.score - b.score);
}

function _renderMasteryCard(it) {
  const cls = it.status === 'ok' ? 'hi' : it.status === 'mid' ? 'mid' : it.status === 'na' ? '' : 'lo';
  const scoreTxt = it.tested ? `${it.score}%` : 'À découvrir';
  const barW = it.tested ? it.score : 0;
  const barColor = it.tested
    ? (it.status === 'ok' ? 'var(--ok)' : it.status === 'mid' ? 'var(--amber)' : 'var(--er)')
    : 'var(--tx3)';
  return `<div class="sp-card sp-${it.status}" data-group="${it.group}" data-score="${it.score ?? -1}" data-name="${it.name.toLowerCase()}">
    <div class="sp-card-top">
      <span class="sp-icon">${it.icon}</span>
      <span class="sp-name">${it.name.length > 28 ? it.name.slice(0, 26) + '…' : it.name}</span>
      <span class="sp-prob hscore ${cls}">${scoreTxt}</span>
    </div>
    <div class="rtrack sp-track"><div class="rfill" style="width:${barW}%;background:${barColor};opacity:${it.tested ? 1 : 0.3}"></div></div>
    <div class="sp-detail">${it.detail}</div>
    ${it.action ? `<button class="sbtn sp-action" ${htmlOnclickAttr(it.action)}>→ Travailler</button>` : ''}
  </div>`;
}

function renderMasteryGridHtml(catalog, opts = {}) {
  if (!catalog?.lines?.length) {
    return '<div class="sp-empty no-data">Joue des QCM par catégorie pour alimenter l\'indice de préparation.</div>';
  }
  const groupOrder = opts.groupOrder || ['proc', 'gram', 'vocab'];
  let html = '';
  groupOrder.forEach(gk => {
    const items = catalog.groups[gk];
    if (!items?.length) return;
    html += `<div class="sp-group" data-sp-group="${gk}"><div class="sp-group-title">${MASTERY_GROUP_LABELS[gk] || gk} <span class="sp-group-n">${items.length}</span></div><div class="sp-grid">`;
    items.forEach(it => { html += _renderMasteryCard(it); });
    html += '</div></div>';
  });
  return html;
}

function initMasteryHubControls() {
  const hub = el('stat-prob-hub');
  if (!hub || hub.dataset.init) return;
  hub.dataset.init = '1';
  const search = el('sph-search');
  const sortSel = el('sph-sort');
  const filterSel = el('sph-filter');
  const apply = () => {
    const q = (search?.value || '').toLowerCase().trim();
    const sort = sortSel?.value || 'score-asc';
    const filt = filterSel?.value || 'all';
    hub.querySelectorAll('.sp-card').forEach(c => {
      const name = c.dataset.name || '';
      const grp = c.dataset.group || '';
      c.style.display = (!q || name.includes(q)) && (filt === 'all' || grp === filt) ? '' : 'none';
    });
    hub.querySelectorAll('.sp-group').forEach(g => {
      g.style.display = [...g.querySelectorAll('.sp-card')].some(c => c.style.display !== 'none') ? '' : 'none';
    });
    if (sort === 'score-asc' || sort === 'score-desc') {
      hub.querySelectorAll('.sp-grid').forEach(grid => {
        const items = [...grid.querySelectorAll('.sp-card')].filter(c => c.style.display !== 'none');
        items.sort((a, b) => {
          const sa = parseInt(a.dataset.score, 10);
          const sb = parseInt(b.dataset.score, 10);
          return sort === 'score-asc' ? sa - sb : sb - sa;
        });
        items.forEach(c => grid.appendChild(c));
      });
    }
  };
  search?.addEventListener('input', apply);
  sortSel?.addEventListener('change', apply);
  filterSel?.addEventListener('change', apply);
}

function renderStatProbabilityHub() {
  const box = el('stat-prob-hub');
  if (!box) return;
  const ps = getProbSettings();
  if (!ps.showHub) { box.innerHTML = ''; return; }

  const g = computeGlobalReadiness();
  const catalog = g.masteryCatalog || buildMasteryCatalog();
  if (!catalog.lines.length) {
    box.innerHTML = '<div class="sph-empty no-data">Entraîne-toi (QCM par catégorie) pour générer le centre de préparation.</div>';
    return;
  }

  const analysis = catalog.analysis || analyzeMasteryCatalog(catalog);
  const heatmap = buildMasteryHeatmapData();
  const exams = loadExamHistory().slice(-10);
  const gm = g.mastery || computeGlobalMastery();

  const groupOpts = Object.entries(MASTERY_GROUP_LABELS)
    .map(([k, v]) => `<option value="${k}">${v}</option>`).join('');

  const strengthHtml = analysis.strengths.slice(0, 4).map(s =>
    `<div class="sph-pill sph-pill-ok">${s.icon} ${s.name.length > 26 ? s.name.slice(0, 24) + '…' : s.name} <b>${s.score}%</b></div>`
  ).join('');

  const weakHtml = analysis.weaknesses.slice(0, 5).map(w =>
    `<div class="sph-pill sph-pill-lo">${w.icon} ${w.name.length > 28 ? w.name.slice(0, 26) + '…' : w.name} <b>${w.score}%</b>${w.action ? `<button class="sbtn" style="font-size:9px;padding:2px 6px;margin-left:4px" ${htmlOnclickAttr(w.action)}>→</button>` : ''}</div>`
  ).join('');

  const untestedHtml = analysis.untested.slice(0, 6).map(u =>
    `<div class="sph-pill">${u.matLabel} · ${u.name.length > 22 ? u.name.slice(0, 20) + '…' : u.name} <span style="color:var(--tx3)">à découvrir</span>${u.action ? `<button class="sbtn" style="font-size:9px;padding:2px 6px;margin-left:4px" ${htmlOnclickAttr(u.action)}>→</button>` : ''}</div>`
  ).join('');

  const heatHtml = heatmap.slice(0, 24).map(h => {
    const cls = h.score >= 80 ? 'hi' : h.score >= 60 ? 'mid' : 'lo';
    const sn = h.cat.length > 18 ? h.cat.slice(0, 16) + '…' : h.cat;
    return `<div class="sph-heat sph-heat-${cls}" title="${h.cat} · ${h.score}% · ${h.tot} rép." ${htmlOnclickAttr(h.action)}>
      <span class="sph-heat-m">${h.matLabel}</span>
      <span class="sph-heat-c">${sn}</span>
      <span class="sph-heat-p">${h.score}%</span>
    </div>`;
  }).join('');

  const examTl = exams.length ? exams.map(e => {
    const cls = e.pct >= 75 ? 'hi' : e.pct >= 50 ? 'mid' : 'lo';
    const w = Math.max(12, Math.round(e.pct / 100 * 100));
    return `<div class="sph-exam-bar" title="${e.date} · ${e.pct}%"><div class="sph-exam-fill ${cls}" style="width:${w}%"></div><span>${e.pct}%</span></div>`;
  }).join('') : '<div class="no-data">Aucun examen enregistré.</div>';

  const groupAvgHtml = analysis.byGroup ? Object.entries(analysis.byGroup).map(([k, v]) =>
    `<div class="sph-gavg"><span>${MASTERY_GROUP_LABELS[k] || k}</span><span class="hscore ${v >= 80 ? 'hi' : v >= 60 ? 'mid' : 'lo'}">${v}%</span></div>`
  ).join('') : '';

  box.innerHTML = `
    <div class="sph-wrap">
      <div class="sph-header">
        <div>
          <h2 class="sph-title">Centre de <em>préparation</em></h2>
          <p class="sph-sub">${analysis.tested} catégories testées / ${analysis.total} · indice médian ${analysis.medianScore != null ? analysis.medianScore + '%' : '—'} · formule : moyenne pondérée × couverture</p>
        </div>
        <div class="sph-bac-composite">
          <div class="sph-bac-label">Indice global</div>
          <div class="sph-bac-val" style="color:${gm.color}">${gm.index}<span>/100</span></div>
          <div class="sph-bac-probs">Couverture ${gm.catCoverage.tested}/${gm.catCoverage.total} catégories · ${gm.label}</div>
        </div>
      </div>
      <div class="sph-summary-grid">
        <div class="sph-summary-box sph-box-ok">
          <div class="sph-box-title">✓ Points forts</div>
          <div class="sph-pills">${strengthHtml || '<span class="no-data">—</span>'}</div>
        </div>
        <div class="sph-summary-box sph-box-lo">
          <div class="sph-box-title">⚠ Leviers prioritaires</div>
          <div class="sph-pills">${weakHtml || '<span class="no-data">Aucune faiblesse majeure.</span>'}</div>
        </div>
        <div class="sph-summary-box">
          <div class="sph-box-title">📊 Moy. par matière</div>
          <div class="sph-gavg-grid">${groupAvgHtml}</div>
        </div>
      </div>
      ${untestedHtml ? `<div class="sph-section-title">Catégories à découvrir</div><div class="sph-pills">${untestedHtml}</div>` : ''}
      <div class="sph-row">
        <div class="sph-col">
          <div class="sph-section-title">Historique examens blancs (scores réels)</div>
          <div class="sph-exam-timeline">${examTl}</div>
        </div>
      </div>
      <div class="sph-section-title">Carte — maîtrise par catégorie QCM</div>
      <div class="sph-heatmap">${heatHtml || '<div class="no-data">Joue des QCM par catégorie.</div>'}</div>
      ${ps.showCatalogGrid ? `<div class="sph-toolbar">
        <input type="search" id="sph-search" class="sph-search" placeholder="Rechercher une catégorie…" />
        <select id="sph-filter" class="sph-select"><option value="all">Toutes les matières</option>${groupOpts}</select>
        <select id="sph-sort" class="sph-select">
          <option value="score-asc">Score ↑ (faibles d'abord)</option>
          <option value="score-desc">Score ↓ (forts d'abord)</option>
          <option value="default">Ordre par matière</option>
        </select>
      </div>
      ${renderMasteryGridHtml(catalog, { compact: true })}` : `<p class="sph-sub" style="margin-top:.75rem;color:var(--tx3)">Grille détaillée masquée — active « Catalogue complet » dans Paramètres.</p>`}
    </div>`;

  delete box.dataset.init;
  if (ps.showCatalogGrid) initMasteryHubControls();
}

function _sessionsLast14Days(sessions) {
  if (!sessions || !sessions.length) return 0;
  const cutoff = Date.now() - 14 * 86400000;
  return sessions.filter(s => (s.ts || 0) >= cutoff).length;
}

function _examFactorScore(examAvg, examTrend, timeoutRate, examCount) {
  if (examAvg == null || !examCount) return { score: 0, detail: 'Aucun examen blanc enregistré' };
  let score = examAvg;
  if (examTrend >= 8) score += 6;
  else if (examTrend >= 4) score += 3;
  else if (examTrend <= -8) score -= 8;
  else if (examTrend <= -4) score -= 4;
  if (timeoutRate >= 0.35) score -= 14;
  else if (timeoutRate >= 0.2) score -= 8;
  else if (timeoutRate >= 0.1) score -= 3;
  score = Math.max(0, Math.min(100, Math.round(score)));
  const trendTxt = examTrend ? ` · tendance ${examTrend > 0 ? '+' : ''}${examTrend}%` : '';
  const toTxt = timeoutRate >= 0.15 ? ` · timeouts ${Math.round(timeoutRate * 100)}%` : '';
  return { score, detail: `Moy. ${examAvg}% · ${examCount} exam.${trendTxt}${toTxt}` };
}

function _gtextFactorScore(gtextAvg, gtextCov) {
  if (gtextAvg == null) return { score: null, detail: 'Aucun grand texte corrigé' };
  const note = Math.round(gtextAvg / 100 * 20 * 10) / 10;
  const covTxt = gtextCov != null ? ` · ${gtextCov}% du corpus vu (info)` : '';
  return { score: gtextAvg, detail: `Moy. ${note}/20${covTxt}` };
}

function _regularityScore(streak, sessions14) {
  const streakPts = Math.min(55, (streak || 0) * 11);
  const freqPts = Math.min(45, (sessions14 || 0) * 9);
  return Math.min(100, Math.round(streakPts + freqPts));
}

function _balanceScore(procScore, gramScore) {
  const gap = Math.abs((procScore || 0) - (gramScore || 0));
  return Math.max(0, Math.min(100, Math.round(100 - gap * 2.2)));
}

/** Sessions sur les 14 derniers jours */
function _weightedRecentSessions(sessions, n) {
  const recent = sessions.slice(-n);
  if (!recent.length) return null;
  let wSum = 0, wTot = 0;
  recent.forEach((s, i) => {
    const w = i + 1;
    const pct = s.tot ? s.ok / s.tot : 0;
    wSum += pct * w;
    wTot += w;
  });
  return wTot ? Math.round(wSum / wTot * 100) : 0;
}

function _sessionTrend(sessions) {
  if (sessions.length < 4) return { dir: 'neutral', delta: 0, label: 'Pas assez de sessions' };
  const half = Math.floor(sessions.length / 2);
  const old = sessions.slice(-half * 2, -half);
  const recent = sessions.slice(-half);
  const avg = arr => {
    const t = arr.reduce((a, s) => a + s.tot, 0);
    const o = arr.reduce((a, s) => a + s.ok, 0);
    return t ? o / t * 100 : 0;
  };
  const delta = Math.round(avg(recent) - avg(old));
  if (delta >= 5) return { dir: 'up', delta, label: `+${delta}% vs sessions précédentes` };
  if (delta <= -5) return { dir: 'down', delta, label: `${delta}% vs sessions précédentes` };
  return { dir: 'neutral', delta, label: 'Stable récemment' };
}

function computeCatMastery(m) {
  const cfg = STAT_CONFIG[m];
  const st = loadSt(cfg.stKey);
  const qdata = st.qdata || {};
  const bank = QCM_STATE[m].data;
  const out = {};

  cfg.cats.forEach(c => {
    out[c] = { ok: 0, tot: 0, attempted: 0, bankSize: 0, pct: null, coverage: 0, level: 'none' };
  });

  bank.forEach(q => {
    if (!out[q.cat]) return;
    out[q.cat].bankSize++;
    const d = qdata[_statQKey(q)];
    if (d && d.total > 0) {
      out[q.cat].ok += d.ok;
      out[q.cat].tot += d.total;
      out[q.cat].attempted++;
    }
  });

  cfg.cats.forEach(c => {
    const x = out[c];
    x.coverage = x.bankSize ? Math.round(x.attempted / x.bankSize * 100) : 0;
    x.pct = x.tot >= 1 ? Math.round(x.ok / x.tot * 100) : null;
    if (x.pct === null) x.level = x.attempted > 0 ? 'partial' : 'none';
    else if (x.pct >= 80) x.level = 'excellent';
    else if (x.pct >= 65) x.level = 'good';
    else if (x.pct >= 50) x.level = 'weak';
    else x.level = 'critical';
  });

  return out;
}

/** Moyenne de performance sur les catégories réellement jouées (hors non commencées) */
function computeMasteryAvg(mastery, cfg, recent7) {
  const withPct = cfg.cats.filter(c => mastery[c]?.pct != null);
  if (withPct.length) {
    return Math.round(withPct.reduce((a, c) => a + mastery[c].pct, 0) / withPct.length);
  }
  let ok = 0, tot = 0;
  cfg.cats.forEach(c => {
    if ((mastery[c]?.tot || 0) > 0) {
      ok += mastery[c].ok;
      tot += mastery[c].tot;
    }
  });
  if (tot > 0) return Math.round(ok / tot * 100);
  return recent7 ?? null;
}

function buildMasteryBreakdownFactors(mi) {
  if (!mi.hasData) {
    return [
      { name: 'Maîtrise brute (catégories testées)', weight: 50, value: 0, contrib: 0, note: 'Aucune catégorie testée' },
      { name: 'Facteur couverture', weight: 50, value: 0, contrib: 0, note: '0 catégorie testée' },
    ];
  }
  const covPct = Math.round(mi.coverageFactor * 100);
  return [
    {
      name: 'Maîtrise brute (moy. pondérée)',
      weight: 50,
      value: mi.rawWeighted,
      contrib: mi.rawWeighted,
      note: `${mi.catCoverage.tested}/${mi.catCoverage.total} catégories · poids = nb réponses`,
    },
    {
      name: 'Facteur couverture',
      weight: 50,
      value: covPct,
      contrib: covPct,
      note: `× ${mi.coverageFactor.toFixed(2)} (min 0,5) → indice ${mi.index}/100`,
    },
  ];
}

function _masteryAdvice(m, mi, weakCats, untestedCount) {
  if (!mi.hasData) return 'Joue une session QCM dans 2–3 catégories différentes pour activer l\'indice.';
  if (weakCats.length) {
    const w = weakCats.slice(0, 2).map(c => `« ${c} »`).join(', ');
    return `Priorité : renforcer ${w} (${mi.catCoverage.tested}/${mi.catCoverage.total} catégories testées).`;
  }
  if (untestedCount > 0) return `Bon niveau sur les catégories jouées — explore encore ${untestedCount} catégorie(s) non testée(s).`;
  return 'Couverture complète — maintiens la régularité avec des sessions ciblées.';
}

function computeReadinessScoreParts() {
  return { score: 0, factors: [] };
}

function computeCoverage(m) {
  const st = loadSt(STAT_CONFIG[m].stKey);
  const qdata = st.qdata || {};
  const bank = QCM_STATE[m].data;
  let attempted = 0;
  bank.forEach(q => {
    const d = qdata[_statQKey(q)];
    if (d && d.total > 0) attempted++;
  });
  return {
    attempted,
    total: bank.length,
    pct: bank.length ? Math.round(attempted / bank.length * 100) : 0,
  };
}

function computeReadiness(m) {
  try {
    return _computeReadinessCore(m);
  } catch (e) {
    console.error('computeReadiness', m, e);
    return _emptyReadinessSlice(m);
  }
}

function _emptyReadinessSlice(m) {
  const cfg = STAT_CONFIG[m];
  const mastery = {};
  (cfg?.cats || []).forEach(c => {
    mastery[c] = { pct: null, level: 'none', attempted: 0, bankSize: 0, tot: 0, ok: 0 };
  });
  const mi = { index: 0, rawWeighted: 0, coverageFactor: 0.5, catCoverage: { tested: 0, total: cfg?.cats?.length || 0 }, hasData: false, label: 'Non testé', color: 'var(--tx3)' };
  return {
    score: 0,
    mastery: mi,
    masteryAvg: 0,
    coverage: { pct: 0, attempted: 0, total: 0 },
    trend: { dir: 'neutral', label: 'Stable' },
    recent7: null,
    examAvg: null,
    exams: [],
    masteryByCat: mastery,
    weakCats: [],
    excellentCats: [],
    factors: buildMasteryBreakdownFactors(mi),
    advice: _masteryAdvice(m, mi, [], cfg?.cats?.length || 0),
    sessions: 0,
    gtextAvg: null,
    exoPct: null,
    examTrend: null,
    hasActivity: false,
  };
}

function _computeReadinessCore(m) {
  const cfg = STAT_CONFIG[m];
  const st = loadSt(cfg.stKey);
  const sessions = st.sessions || [];
  const masteryByCat = computeCatMastery(m);
  const coverage = computeCoverage(m);
  const trend = _sessionTrend(sessions);
  const recent7 = _weightedRecentSessions(sessions, 7);
  const exams = loadExamHistory().filter(e => {
    if (m === 'proc') return e.mat === 'proc' || e.mat === 'both';
    if (m === 'gram') return e.mat === 'gram' || e.mat === 'both';
    return true;
  });
  const lastExams = exams.slice(-5);
  const examAvg = _weightedExamPct(exams);
  const mi = computeMasteryIndex(m);
  const masteryAvg = mi.rawWeighted;
  const weakCats = cfg.cats.filter(c => masteryByCat[c].level === 'critical' || masteryByCat[c].level === 'weak');
  const excellentCats = cfg.cats.filter(c => masteryByCat[c].level === 'excellent' || masteryByCat[c].level === 'good');
  const untestedCount = cfg.cats.length - mi.catCoverage.tested;
  const factors = buildMasteryBreakdownFactors(mi);
  const gtextAvg = computeGtextAvgPct();
  const exoPct = computeExoPct();
  const examTrend = _examTrendDelta(exams);

  return {
    score: mi.index,
    mastery: mi,
    masteryAvg: masteryAvg ?? 0,
    coverage,
    trend,
    recent7,
    examAvg,
    exams: lastExams,
    masteryByCat,
    weakCats,
    excellentCats,
    factors,
    advice: _masteryAdvice(m, mi, weakCats, untestedCount),
    sessions: sessions.length,
    gtextAvg,
    exoPct,
    examTrend,
    hasActivity: sessions.length > 0 || coverage.attempted > 0,
  };
}

function computeGlobalReadiness() {
  try {
    return _computeGlobalReadinessCore();
  } catch (e) {
    console.error('computeGlobalReadiness', e);
    return _emptyGlobalReadiness();
  }
}

function _emptyGlobalReadiness() {
  const slice = (m) => _emptyReadinessSlice(m);
  const gm = computeGlobalMastery();
  const catalog = buildMasteryCatalog();
  return {
    proc: slice('proc'),
    gram: slice('gram'),
    vocab: STAT_CONFIG.vocab ? slice('vocab') : null,
    globalScore: 0,
    mastery: gm,
    masteryCatalog: catalog,
    exoPct: null,
    gtextAvg: null,
    lastExam: null,
    examAvg: null,
    examCount: 0,
    advice: 'Joue une session QCM pour activer les stats.',
  };
}

function _computeGlobalReadinessCore() {
  const proc = computeReadiness('proc');
  const gram = computeReadiness('gram');
  const vocab = STAT_CONFIG.vocab ? computeReadiness('vocab') : null;
  const exoPct = computeExoPct();
  const gm = computeGlobalMastery();
  const globalScore = gm.index;
  const examHist = loadExamHistory();
  const examAvg = _weightedExamPct(examHist);
  const gtextAvg = computeGtextAvgPct();
  const catalog = buildMasteryCatalog();
  const weak = getWeakestCategories(5);
  let advice = gm.hasData
    ? `Indice ${globalScore}/100 · ${gm.label} · couverture ${gm.catCoverage.tested}/${gm.catCoverage.total} catégories.`
    : 'Joue des QCM dans plusieurs catégories pour calculer ton indice.';
  if (weak.length) advice += ` Priorité : ${weak.slice(0, 2).map(w => w.cat).join(', ')}.`;

  return {
    proc,
    gram,
    vocab,
    globalScore,
    mastery: gm,
    masteryCatalog: catalog,
    exoPct,
    gtextAvg,
    lastExam: examHist.length ? examHist[examHist.length - 1] : null,
    examAvg,
    examCount: examHist.length,
    advice,
    weakCategories: weak,
  };
}

function renderReadinessHero(m, r) {
  const p = STAT_CONFIG[m].prefix;
  const elR = el(p + 'readiness');
  if (!elR) return;

  const mi = r.mastery || computeMasteryIndex(m);
  const trendIcon = r.trend.dir === 'up' ? '📈' : r.trend.dir === 'down' ? '📉' : '➡️';
  const circ = 2 * Math.PI * 54;
  const off = circ - (r.score / 100) * circ;

  elR.innerHTML = `
    <div class="rd-card">
      <div class="rd-left">
        <div class="rd-eyebrow">Indice de préparation · ${m === 'proc' ? 'Littérature' : m === 'gram' ? 'Grammaire' : 'Vocabulaire'}</div>
        <div class="rd-score-row">
          <div class="rd-gauge">
            <svg viewBox="0 0 120 120" class="rd-ring">
              <circle cx="60" cy="60" r="54" class="rd-ring-bg"/>
              <circle cx="60" cy="60" r="54" class="rd-ring-fill" style="stroke:${mi.color};stroke-dasharray:${circ};stroke-dashoffset:${off}"/>
            </svg>
            <div class="rd-gauge-val">${r.score}<span>/100</span></div>
          </div>
          <div class="rd-main">
            <div class="rd-prob" style="color:${mi.color}">${mi.label}</div>
            <div class="rd-prob-band rd-coverage">Couverture : <strong>${mi.catCoverage.tested}/${mi.catCoverage.total}</strong> catégories testées · maîtrise brute ${mi.rawWeighted}% × ${mi.coverageFactor.toFixed(2)}</div>
            <p class="rd-advice">${r.advice || ''}</p>
          </div>
        </div>
      </div>
      <div class="rd-metrics">
        <div class="rd-m"><span class="rd-mv">${r.masteryAvg}%</span><span class="rd-ml">Maîtrise brute</span></div>
        <div class="rd-m"><span class="rd-mv">${mi.catCoverage.tested}/${mi.catCoverage.total}</span><span class="rd-ml">Catégories</span></div>
        <div class="rd-m"><span class="rd-mv">${r.coverage.attempted}/${r.coverage.total}</span><span class="rd-ml">Questions vues</span></div>
        <div class="rd-m"><span class="rd-mv">${r.recent7 ?? '—'}${r.recent7 !== null ? '%' : ''}</span><span class="rd-ml">Forme récente</span></div>
        <div class="rd-m"><span class="rd-mv">${r.examAvg !== null ? r.examAvg + '%' : '—'}</span><span class="rd-ml">Examens blancs</span></div>
        <div class="rd-m"><span class="rd-mv">${trendIcon}</span><span class="rd-ml">${r.trend.label}</span></div>
      </div>
    </div>`;
}

function renderFactors(m, r) {
  const p = STAT_CONFIG[m].prefix;
  const box = el(p + 'factors');
  if (!box) return;
  box.innerHTML = `
    ${r.factors.map(f => `
      <div class="factor-row">
        <div class="factor-top">
          <span class="factor-name">${f.name}</span>
          <span class="factor-val">${f.value}%</span>
        </div>
        <div class="rtrack"><div class="rfill" style="width:${Math.min(100, f.value)}%;background:var(--gold)"></div></div>
        ${f.note ? `<div class="factor-note">${f.note}</div>` : ''}
      </div>`).join('')}
    ${r.weakCats.length ? `<div class="factor-penalty">⚠ ${r.weakCats.length} catégorie(s) sous 65 % — voir leviers prioritaires</div>` : ''}`;
}

function renderMasteryGrid(m, r) {
  const cfg = STAT_CONFIG[m];
  const p = cfg.prefix;
  const box = el(p + 'mastery');
  if (!box) return;
  const mastery = r.masteryByCat || computeCatMastery(m);

  box.innerHTML = cfg.cats.map(c => {
    const x = mastery[c];
    if (!x) return '';
    const pct = x.pct !== null ? x.pct + '%' : (x.tot >= 1 ? Math.round(x.ok / x.tot * 100) + '%' : '—');
    const untested = x.tot < 1;
    const badge = untested ? '<span class="mastery-prob" style="color:var(--tx3)">à découvrir</span>' : '';
    const lvl = { excellent:'ex', good:'ok', weak:'mid', critical:'lo', partial:'mid', none:'na' }[x.level];
    const barW = x.pct != null ? x.pct : 0;
    const barOp = untested ? 0.25 : 1;
    return `<div class="mastery-row">
      <div class="mastery-top">
        <span class="mastery-name">${c.length > 28 ? c.slice(0, 26) + '…' : c}</span>
        <span class="mastery-pct hscore ${untested ? 'na' : lvl}">${pct}</span>
        ${badge}
      </div>
      <div class="mastery-sub">${untested ? `${x.bankSize} Q disponibles · non testé` : `${x.ok}/${x.tot} bonnes · ${x.attempted}/${x.bankSize} Q vues`}</div>
      <div class="rtrack"><div class="rfill" style="width:${barW}%;opacity:${barOp};background:${cfg.colors[c] || 'var(--gold)'}"></div></div>
    </div>`;
  }).join('');
}

function renderRecommend(m, r) {
  const p = STAT_CONFIG[m].prefix;
  const box = el(p + 'recommend');
  if (!box) return;

  const items = [];
  r.weakCats.slice(0, 4).forEach(c => {
    const esc = c.replace(/'/g, "\\'");
    const x = (r.masteryByCat || {})[c];
    items.push({
      pri: 'high',
      text: `Renforcer « ${c} » (${x?.pct ?? '?'}%)`,
      action: `openQcmCat('${m}','${esc}')`,
    });
  });
  const mi = r.mastery;
  if (mi && mi.catCoverage.tested < mi.catCoverage.total) {
    items.push({
      pri: 'med',
      text: `${mi.catCoverage.total - mi.catCoverage.tested} catégorie(s) non testée(s) — explore-les pour monter l'indice`,
      action: `openQcmCat('${m}','Toutes')`,
    });
  }
  if (r.examAvg === null) {
    items.push({ pri: 'med', text: 'Passe un examen blanc pour suivre ta progression', action: `openExamMode('${m}')` });
  }
  if (!items.length) items.push({ pri: 'ok', text: 'Excellent équilibre — maintiens la régularité', action: null });

  box.innerHTML = items.map(it => `
    <div class="rec-item rec-${it.pri}">
      <span>${it.text}</span>
      ${it.action ? `<button class="sbtn" style="font-size:10px;margin-top:6px" ${htmlOnclickAttr(it.action)}>→ Réviser</button>` : ''}
    </div>`).join('');
}

function renderExamHistoryPanel(m, r) {
  const p = STAT_CONFIG[m].prefix;
  const box = el(p + 'exams');
  if (!box) return;

  if (!r.exams.length) {
    box.innerHTML = '<div class="no-data">Aucun examen blanc enregistré. Lance le mode 🏆 Examen.</div>';
    return;
  }

  box.innerHTML = [...r.exams].reverse().map(e => {
    const cls = e.pct >= 75 ? 'hi' : e.pct >= 50 ? 'mid' : 'lo';
    const mat = e.mat === 'both' ? 'Mixte' : e.mat === 'proc' ? 'Litt.' : e.mat === 'vocab' ? 'Voc.' : 'Gram.';
    const time = e.timeUsed ? `${Math.floor(e.timeUsed / 60)}m${String(e.timeUsed % 60).padStart(2, '0')}s` : '—';
    return `<div class="hrow">
      <span class="hdate">${e.date}</span>
      <span class="hcat">${mat}${e.timeout ? ' ⏱' : ''}</span>
      <span class="hscore ${cls}">${e.ok}/${e.tot} · ${e.pct}%</span>
      <span style="font-size:10px;color:var(--tx3)">${time}</span>
    </div>`;
  }).join('');
}

function _examStatsSummary(m) {
  const exams = m === 'global'
    ? loadExamHistory()
    : computeExamStatsByMat(m === 'vocab' ? 'all' : m).history;
  if (!exams.length) return null;
  const last = exams[exams.length - 1];
  const prev = exams.length > 1 ? exams[exams.length - 2] : null;
  const best = exams.reduce((b, e) => Math.max(b, e.pct), 0);
  const avg = Math.round(exams.reduce((a, e) => a + e.pct, 0) / exams.length);
  return {
    last,
    prev,
    best,
    avg,
    count: exams.length,
    deltaPrev: prev != null ? last.pct - prev.pct : null,
    deltaAvg: last.pct - avg,
  };
}

function renderExamProbabilityPanel(m) {
  const boxId = m === 'global' ? 'gexamprob-global' : STAT_CONFIG[m].prefix + 'examprob';
  const box = el(boxId);
  if (!box) return;

  const stats = _examStatsSummary(m);
  if (!stats) {
    box.innerHTML = `<div class="ep-panel"><div class="ep-title">Examens blancs</div><div class="no-data">Aucun examen enregistré. Lance le mode 🏆 Examen pour suivre tes scores réels.</div></div>`;
    return;
  }

  const { last, best, avg, count, deltaPrev, deltaAvg } = stats;
  const deltaPrevTxt = deltaPrev != null
    ? (deltaPrev >= 0 ? `+${deltaPrev}` : `${deltaPrev}`) + ' pts vs session précédente'
    : 'Première session enregistrée';
  const deltaAvgTxt = deltaAvg >= 0 ? `+${deltaAvg} pts vs ta moyenne (${avg}%)` : `${deltaAvg} pts vs ta moyenne (${avg}%)`;
  const cls = last.pct >= 75 ? 'hi' : last.pct >= 50 ? 'mid' : 'lo';
  const weak = m === 'global' ? getWeakestCategories(4) : getWeakestCategories(4).filter(w => w.m === m);
  const weakHtml = weak.length
    ? `<div class="ep-scenarios">${weak.map(w =>
        `<div class="ep-scenario"><span>${w.icon} ${w.cat} · ${w.pct}% (${w.ok}/${w.tot})</span><button class="sbtn" style="font-size:9px" ${htmlOnclickAttr(w.action)}>→</button></div>`
      ).join('')}</div>`
    : '<div class="ep-scenario ep-scenario-ok">Aucune catégorie faible identifiée.</div>';

  box.innerHTML = `
    <div class="ep-panel">
      <div class="ep-head">
        <div>
          <div class="ep-title">Examens blancs — scores réels</div>
          <div class="ep-sub">${count} session(s) · moyenne ${avg}% · meilleure ${best}% · pas de prédiction, uniquement tes résultats enregistrés</div>
        </div>
      </div>
      <div class="ep-hero">
        <div class="ep-main-pct hscore ${cls}">${last.pct}<span>%</span></div>
        <div class="ep-main-info">
          <div class="ep-main-label">Dernière session · ${last.ok}/${last.tot} bonnes réponses</div>
          <div class="ep-main-band">${deltaPrevTxt} · ${deltaAvgTxt}</div>
          <div class="ep-main-band">Meilleure session : <strong>${best}%</strong></div>
        </div>
      </div>
      <div class="ep-section-title">Leviers prioritaires (catégories QCM les plus faibles)</div>
      ${weakHtml}
    </div>`;
}

function renderGlobalDashboard() {
  const box = el('bac-dashboard');
  if (!box) return;
  try {
    _renderGlobalDashboardCore(box);
  } catch (e) {
    console.error('renderGlobalDashboard', e);
    box.innerHTML = '<div class="bac-dash"><p class="rd-advice">Tableau de bord indisponible — recharge avec Ctrl+F5.</p></div>';
  }
}

function _renderGlobalDashboardCore(box) {
  const g = computeGlobalReadiness();
  const gm = g.mastery || computeGlobalMastery();
  const circ = 2 * Math.PI * 62;
  const off = circ - (g.globalScore / 100) * circ;

  box.innerHTML = `
    <div class="bac-dash">
      <div class="bac-dash-head">
        <div class="bac-dash-head-text">
          <h2>${typeof getSetting === 'function' && getSetting('profileEmoji') ? getSetting('profileEmoji') + ' ' : ''}Tableau de bord <em>Bac</em>${typeof getSetting === 'function' && getSetting('userName') ? ` · ${getSetting('userName')}` : ''}</h2>
          <p>${typeof getSetting === 'function' && getSetting('profileGoal') ? getSetting('profileGoal') + ' · ' : ''}Indice global · Littérature 48 % + Grammaire 37 % + Vocabulaire 15 % · moyenne pondérée QCM × couverture catégories</p>
        </div>
        <button type="button" class="sbtn bac-dash-reset" onclick="resetStats()" title="Réinitialiser QCM, examens, textes, exercices…">🔄 Reset stats</button>
      </div>
      <div class="bac-dash-body">
        <div class="bac-dash-gauge">
          <svg viewBox="0 0 140 140"><circle cx="70" cy="70" r="62" class="rd-ring-bg"/><circle cx="70" cy="70" r="62" class="rd-ring-fill" style="stroke:${gm.color};stroke-dasharray:${circ};stroke-dashoffset:${off}"/></svg>
          <div class="bac-dash-val">${g.globalScore}</div>
        </div>
        <div class="bac-dash-info">
          <div class="rd-prob" style="color:${gm.color};font-size:1.3rem">${gm.label} · ${g.globalScore}/100</div>
          <div class="rd-prob-band rd-coverage">Couverture : <strong>${gm.catCoverage.tested}/${gm.catCoverage.total}</strong> catégories testées</div>
          <div class="bac-split">
            <span>📖 Litt. <b>${g.proc.score}</b>/100 · ${g.proc.mastery?.catCoverage?.tested ?? 0}/${g.proc.mastery?.catCoverage?.total ?? '?'} cat.</span>
            <span>✍️ Gram. <b>${g.gram.score}</b>/100 · ${g.gram.mastery?.catCoverage?.tested ?? 0}/${g.gram.mastery?.catCoverage?.total ?? '?'} cat.</span>
            ${g.vocab ? `<span>📝 Voc. <b>${g.vocab.score}</b>/100 · ${g.vocab.mastery?.catCoverage?.tested ?? 0}/${g.vocab.mastery?.catCoverage?.total ?? '?'} cat.</span>` : ''}
            ${g.exoPct !== null ? `<span>🔍 Exos <b>${g.exoPct}%</b></span>` : ''}
            ${g.gtextAvg !== null ? `<span>📜 Textes <b>${Math.round(g.gtextAvg)}%</b> moy.</span>` : ''}
            <span>🏆 Examens <b>${g.examCount}</b>${g.examAvg != null ? ` · moy. ${g.examAvg}%` : ''}</span>
          </div>
          <p class="rd-advice">${g.advice || ''}</p>
          ${typeof renderTimeStatsCompact === 'function' ? renderTimeStatsCompact() : ''}
        </div>
      </div>
    </div>`;

  renderExamProbabilityPanel('global');
  renderStatProbabilityHub();

  const navBadge = el('readiness-nav');
  if (navBadge) {
    if (typeof getSetting === 'function' && !getSetting('showNavReadiness')) {
      navBadge.style.display = 'none';
    } else {
      navBadge.textContent = `${g.globalScore}`;
      navBadge.title = `Indice préparation ${g.globalScore}/100 · ${gm.label} · couverture ${gm.catCoverage.tested}/${gm.catCoverage.total}`;
      navBadge.style.display = '';
      navBadge.style.borderColor = gm.color;
      navBadge.style.color = gm.color;
    }
  }

  if (typeof getSetting === 'function' && !getSetting('showBacDashboard')) {
    box.style.display = 'none';
    const gep = el('gexamprob-global');
    if (gep) gep.style.display = 'none';
    const sph = el('stat-prob-hub');
    if (sph) sph.style.display = 'none';
  } else {
    box.style.display = '';
    const gep = el('gexamprob-global');
    if (gep) gep.style.display = '';
    const sph = el('stat-prob-hub');
    if (sph) sph.style.display = '';
  }
}

function renderAdvancedStats(m) {
  const r = computeReadiness(m);
  renderReadinessHero(m, r);
  renderExamProbabilityPanel(m);
  renderFactors(m, r);
  renderMasteryGrid(m, r);
  renderRecommend(m, r);
  renderExamHistoryPanel(m, r);
  return r;
}

