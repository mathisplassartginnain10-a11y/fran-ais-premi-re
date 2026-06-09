/* stats-engine.js — Analytique & probabilité de réussite · v20260607 */

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

/** Paramètres du modèle de probabilité (lus depuis bac_settings) */
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
    shrinkKExam: g('probShrinkKExam') ?? 2,
    shrinkKGtext: g('probShrinkKGtext') ?? 4,
    steepness: steepness * (mode === 'prudent' ? 0.92 : mode === 'ambitious' ? 1.08 : 1),
    weightExam: g('probWeightExam') ?? 36,
    weightQcm: g('probWeightQcm') ?? 30,
    weightGtext: g('probWeightGtext') ?? 22,
    weightExo: g('probWeightExo') ?? 6,
    weightChallenge: g('probWeightChallenge') ?? 3,
    weightCartes: g('probWeightCartes') ?? 3,
    minQcmAttempts: g('probMinQcmAttempts') ?? 3,
    minCatAttempts: g('probMinCatAttempts') ?? 3,
    minExoAttempts: g('probMinExoAttempts') ?? 5,
    minChallenge: g('probMinChallenge') ?? 3,
    minCarteCards: g('probMinCarteCards') ?? 8,
    maxCapHigh: Math.round((g('probMaxCapHigh') ?? 90) * modeMul),
    maxCapMid: Math.round((g('probMaxCapMid') ?? 82) * modeMul),
    maxCapLow: Math.round((g('probMaxCapLow') ?? 74) * modeMul),
    capN5: g('probCapN5') ?? 72,
    capN2: g('probCapN2') ?? 62,
    capN1: g('probCapN1') ?? 48,
    bandSpreadExtra: g('probBandSpread') ?? 0,
    bandSpreadInsufficient: g('probBandInsufficient') ?? 12,
    penaltyNoExam: g('probPenaltyNoExam') ?? 5,
    penaltyLowCov12: g('probPenaltyLowCov12') ?? 10,
    penaltyLowCov25: g('probPenaltyLowCov25') ?? 5,
    penaltyTimeoutHigh: g('probPenaltyTimeoutHigh') ?? 6,
    penaltyTimeoutMid: g('probPenaltyTimeoutMid') ?? 3,
    penaltyWeak4: g('probPenaltyWeak4') ?? 6,
    penaltyWeak2: g('probPenaltyWeak2') ?? 3,
    compositeQcmShare: (g('probCompositeQcm') ?? 62) / 100,
    includeChallenge: g('probIncludeChallenge') !== false,
    includeCartes: g('probIncludeCartes') !== false,
    includeExo: g('probIncludeExo') !== false,
    applyPenalties: g('probApplyPenalties') !== false,
    showHub: g('probShowHub') !== false,
    showIndicators: g('probShowIndicators') !== false,
    showInsufficient: g('probShowInsufficient') === true,
    showExamPreview: g('probShowExamPreview') !== false,
    showGtextPanel: g('probShowGtextPanel') !== false,
    showCatalogGrid: g('probShowCatalogGrid') !== false,
  };
}

function _probWeightForSignal(id, ps, qcm, gtextDetail, examCount) {
  let w = {
    exam: ps.weightExam,
    qcm: ps.weightQcm,
    gtext: ps.weightGtext,
    exo: ps.weightExo,
    challenge: ps.weightChallenge,
    cartes: ps.weightCartes,
  }[id] ?? 5;
  if (id === 'qcm') {
    if (qcm.n >= 40) w *= 1.12;
    else if (qcm.n >= 15) w *= 1;
    else w *= 0.78;
  }
  if (id === 'exam') {
    if (examCount >= 4) w *= 1.15;
    else if (examCount >= 2) w *= 1;
    else w *= 0.72;
  }
  if (id === 'gtext' && gtextDetail) {
    if (gtextDetail.count >= 4) w *= 1.18;
    else if (gtextDetail.count >= 2) w *= 1;
    else w *= 0.75;
  }
  return w;
}

/** Rétrécissement bayésien : évite les probas extrêmes avec peu de n */
function _shrinkEstimate(observed, n, prior, k) {
  if (observed == null) return prior;
  const nk = Math.max(0, n || 0);
  if (nk === 0) return prior;
  return Math.round((observed * nk + prior * k) / (nk + k));
}

/**
 * Proba admis calibrée sur une perf. mesurée (% bonnes réponses ou note/20 convertie).
 * Seuil 50 ≈ 10/20 · courbe modérée · plafond si n faible.
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
  const cap = opts.maxCap ?? (ps.mode === 'prudent' ? ps.maxCapMid : ps.maxCapHigh);
  if ((n || 0) < 5) prob = Math.min(prob, ps.capN5, cap);
  else if ((n || 0) < 2) prob = Math.min(prob, ps.capN2, cap);
  else if ((n || 0) < 1) prob = Math.min(prob, ps.capN1, cap);
  else prob = Math.min(prob, cap);
  return prob;
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
  const ps = getProbSettings();
  const extra = (opts.extraSpread ?? 0) + ps.bandSpreadExtra;
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

function analyzeStatCatalog(catalog) {
  if (!catalog?.lines?.length) return null;
  const measurable = catalog.lines.filter(l => !l.indicatorOnly && l.prob != null);
  const lines = measurable.length ? measurable : catalog.lines.filter(l => !l.indicatorOnly);
  const byProb = [...lines].sort((a, b) => (a.prob ?? 0) - (b.prob ?? 0));
  const strengths = [...lines].filter(l => l.prob != null).sort((a, b) => b.prob - a.prob).slice(0, 5);
  const weaknesses = byProb.filter(l => l.prob != null && l.prob < 55 && l.n > 0).slice(0, 7);
  const avgProb = measurable.length
    ? Math.round(measurable.reduce((a, l) => a + l.prob, 0) / measurable.length)
    : null;
  const medianProb = byProb.filter(l => l.prob != null)[Math.floor(byProb.filter(l => l.prob != null).length / 2)]?.prob ?? null;
  const byGroup = {};
  Object.entries(catalog.groups || {}).forEach(([gk, arr]) => {
    const m = arr.filter(l => l.prob != null);
    if (!m.length) return;
    byGroup[gk] = Math.round(m.reduce((a, l) => a + l.prob, 0) / m.length);
  });
  const critical = measurable.filter(l => l.prob < 38 && l.n >= 3).length;
  return { strengths, weaknesses, avgProb, medianProb, byGroup, critical, total: catalog.lines.length, measurable: measurable.length };
}

function computeProbSimulations(catalog) {
  if (!catalog?.lines?.length) return [];
  return catalog.lines
    .filter(l => !l.indicatorOnly && l.prob != null && l.score < 62 && l.n >= 3)
    .sort((a, b) => a.prob - b.prob)
    .slice(0, 10)
    .map(l => {
      const target = Math.min(100, l.score + 18);
      const projected = _probFromPerformance(target, Math.max(l.n, 5), { shrinkK: 6 });
      const delta = projected != null && l.prob != null ? projected - l.prob : 0;
      return {
        name: l.name, icon: l.icon, current: l.prob, projected, delta,
        action: l.action,
        detail: `Score ${l.score}% → ~${target}%`,
      };
    })
    .filter(s => s.delta >= 4)
    .slice(0, 6);
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
    pct: tot >= 3 ? Math.round(ok / tot * 100) : null,
    ok, tot,
    n: tot,
    sessions,
  };
}

/**
 * Agrège toutes les stats récupérables (localStorage) avec fiabilité.
 * Seules les métriques de performance alimentent la proba globale.
 */
function collectRecoverableStats(ctx) {
  const ps = getProbSettings();
  const qcm = computeGlobalQcmPerformance();
  const exoDetail = computeExoDetailStats();
  const gtextDetail = computeGtextDetailStats();
  const challengeStats = typeof computeChallengeStats === 'function' ? computeChallengeStats() : { total: 0, ok: 0, fail: 0 };
  const carteStats = computeCarteStats();
  const examHist = loadExamHistory();
  const globalCov = computeGlobalQuestionCoverage();

  const performance = [];

  if (qcm.pct != null && qcm.n >= ps.minQcmAttempts) {
    performance.push({
      id: 'qcm-global', label: 'QCM (sessions)', icon: '📝',
      pct: qcm.pct, n: qcm.n, sessions: qcm.sessions,
      weight: _probWeightForSignal('qcm', ps, qcm, gtextDetail, ctx.examCount),
      source: 'bac_*_stats.sessions',
    });
  }

  if (ctx.examAvg != null && ctx.examCount >= 1) {
    performance.push({
      id: 'exam', label: 'Examens blancs', icon: '🏆',
      pct: ctx.examAvg, n: ctx.examCount,
      weight: _probWeightForSignal('exam', ps, qcm, gtextDetail, ctx.examCount),
      source: 'bac_exam_history',
    });
  }

  if (ctx.gtextAvg != null && gtextDetail?.count >= 1) {
    performance.push({
      id: 'gtext', label: 'Grands textes', icon: '📜',
      pct: ctx.gtextAvg, n: gtextDetail.count,
      note20: gtextDetail.avgNote,
      weight: _probWeightForSignal('gtext', ps, qcm, gtextDetail, ctx.examCount),
      source: 'bac_gtext_stats',
    });
  }

  if (ps.includeExo && exoDetail?.pct != null && exoDetail.tot >= ps.minExoAttempts) {
    performance.push({
      id: 'exo', label: 'Exercices repérage', icon: '🔍',
      pct: exoDetail.pct, n: exoDetail.tot,
      weight: _probWeightForSignal('exo', ps, qcm, gtextDetail, ctx.examCount),
      source: 'bac_exo_stats',
    });
  }

  if (ps.includeChallenge && challengeStats.total >= ps.minChallenge && challengeStats.pct != null) {
    performance.push({
      id: 'challenge', label: 'Défis 10 min', icon: '🎯',
      pct: challengeStats.pct, n: challengeStats.total,
      weight: _probWeightForSignal('challenge', ps, qcm, gtextDetail, ctx.examCount),
      source: 'bac_challenge_stats',
    });
  }

  if (ps.includeCartes && carteStats.global.pct != null && carteStats.global.sessions >= 2) {
    const carteN = ['proc', 'gram', 'vocab'].reduce((a, k) => a + (carteStats[k]?.tot || 0), 0);
    if (carteN >= ps.minCarteCards) {
      performance.push({
        id: 'cartes', label: 'Flashcards', icon: '🃏',
        pct: carteStats.global.pct, n: carteN,
        weight: _probWeightForSignal('cartes', ps, qcm, gtextDetail, ctx.examCount),
        source: 'bac_carte_stats',
      });
    }
  }

  const indicators = [];
  if (ps.showIndicators) {
    indicators.push({
      id: 'coverage', label: 'Couverture QCM', pct: globalCov.pct, n: globalCov.attempted,
      source: 'bac_*_stats.qdata',
    });
    indicators.push({
      id: 'regularity', label: 'Sessions / 14 j.', pct: Math.min(100, (ctx.sessions14 || 0) * 12),
      n: ctx.sessions14 || 0, source: 'bac_*_stats.sessions.ts',
    });
  }

  const wSum = performance.reduce((a, s) => a + s.weight, 0);
  let blended = null;
  if (performance.length && wSum > 0) {
    blended = 0;
    performance.forEach(s => {
      const w = s.weight / wSum;
      const shrinkK = s.id === 'exam' ? ps.shrinkKExam : s.id === 'gtext' ? ps.shrinkKGtext : ps.shrinkK;
      const prior = s.id === 'gtext' ? ps.priorGtext : ps.priorAdmis;
      blended += _shrinkEstimate(s.pct, s.n, prior, shrinkK) * w;
    });
    blended = Math.round(blended * ps.modeMul);
  }

  return {
    performance,
    indicators,
    blended,
    qcm,
    exoDetail,
    gtextDetail,
    examCount: examHist.length,
    hasData: performance.length > 0,
    settings: ps,
  };
}

/** Proba admis réaliste à partir des signaux mesurés uniquement */
function _computeRealisticPassProb(ctx, confidence) {
  const ps = getProbSettings();
  const rec = collectRecoverableStats(ctx);
  const adjustments = [];

  if (!rec.hasData) {
    return {
      passPct: null,
      blended: null,
      rec,
      adjustments: [{ text: 'Aucune perf. mesurée (QCM, examen ou texte)', delta: 0 }],
      insufficient: true,
    };
  }

  let blended = rec.blended;

  if (ps.applyPenalties) {
    if (!ctx.examCount && rec.qcm.sessions < 4) {
      blended -= ps.penaltyNoExam;
      adjustments.push({ text: 'Pas d\'examen blanc', delta: -ps.penaltyNoExam });
    }

    if (ctx.timeoutRate >= 0.25) {
      blended -= ps.penaltyTimeoutHigh;
      adjustments.push({ text: 'Timeouts fréquents', delta: -ps.penaltyTimeoutHigh });
    } else if (ctx.timeoutRate >= 0.15) {
      blended -= ps.penaltyTimeoutMid;
      adjustments.push({ text: 'Quelques timeouts', delta: -ps.penaltyTimeoutMid });
    }

    if (ctx.weakCount >= 4) { blended -= ps.penaltyWeak4; adjustments.push({ text: `${ctx.weakCount} catégories faibles`, delta: -ps.penaltyWeak4 }); }
    else if (ctx.weakCount >= 2) { blended -= ps.penaltyWeak2; adjustments.push({ text: `${ctx.weakCount} catégories faibles`, delta: -ps.penaltyWeak2 }); }
  }

  blended = Math.max(8, Math.min(90, Math.round(blended)));

  const effectiveN = rec.performance.reduce((a, s) => a + s.n * (s.weight / rec.performance.reduce((x, y) => x + y.weight, 0)), 0);
  let passPct = _probFromPerformance(blended, Math.round(effectiveN), { shrinkK: Math.max(3, ps.shrinkK - 2) });
  passPct = passPct != null ? Math.min(passPct, _probMaxCap(confidence)) : null;

  return { passPct, blended, rec, adjustments, insufficient: false, effectiveN: Math.round(effectiveN) };
}

function buildCategoryHeatmapData() {
  const ps = getProbSettings();
  const rows = [];
  ['proc', 'gram', 'vocab'].forEach(m => {
    if (!STAT_CONFIG[m]) return;
    const mastery = computeCatMastery(m);
    const matLabel = m === 'proc' ? 'Lit.' : m === 'gram' ? 'Gram.' : 'Voc.';
    STAT_CONFIG[m].cats.forEach(c => {
      const x = mastery[c];
      if (x.pct == null || x.tot < ps.minCatAttempts) return;
      rows.push({
        m, matLabel, cat: c,
        score: x.pct,
        prob: _probFromPerformance(x.pct, x.tot, { shrinkK: ps.shrinkK }),
        pct: x.pct,
        coverage: x.coverage,
        level: x.level,
        n: x.tot,
        action: `openQcmCat('${m}','${c.replace(/'/g, "\\'")}')`,
      });
    });
  });
  return rows.sort((a, b) => a.prob - b.prob);
}

/** Ligne du catalogue probabilités par stat */
function _statProbLine(id, group, name, icon, score, detail, opts = {}) {
  const ps = getProbSettings();
  const metricType = opts.metricType || 'performance';
  const n = opts.n ?? 0;
  const minN = opts.minN ?? (
    metricType === 'exam' ? 1
      : metricType === 'gtext' ? 1
        : metricType === 'performance' ? ps.minCatAttempts
          : 0
  );

  if (score == null && !opts.allowNull) return null;

  const s = score != null ? Math.max(0, Math.min(100, Math.round(score))) : null;

  if (metricType === 'indicator' || metricType === 'coverage' || metricType === 'activity') {
    if (s == null) return null;
    return {
      id, group, name, icon,
      score: s,
      detail: detail || '—',
      prob: null,
      probLabel: 'Indicateur',
      indicatorOnly: true,
      insufficient: false,
      band: '—',
      n,
      confidence: 'low',
      trend: opts.trend ?? null,
      action: opts.action ?? null,
      status: s >= 68 ? 'ok' : s >= 48 ? 'mid' : 'lo',
      weight: opts.weight ?? 1,
      metricType,
    };
  }

  if (metricType === 'performance' && n < minN) {
    if (!opts.showLowN && !ps.showInsufficient) return null;
    return {
      id, group, name, icon,
      score: s ?? 0,
      detail: `${detail || '—'} · n=${n} (min. ${minN})`,
      prob: null,
      probLabel: 'n insuffisant',
      insufficient: true,
      band: '—',
      n,
      confidence: 'low',
      trend: opts.trend ?? null,
      action: opts.action ?? null,
      status: 'lo',
      weight: opts.weight ?? 1,
      metricType,
    };
  }

  if (s == null) return null;

  let prob, probAB, probB;
  if (opts.note20 != null) {
    prob = _probFromNote20(opts.note20, n);
    probAB = _probFromPerformance(Math.round(opts.note20 / 20 * 100), n, { threshold: 58, shrinkK: ps.shrinkKGtext, prior: ps.priorGtext });
    probB = _probFromPerformance(Math.round(opts.note20 / 20 * 100), n, { threshold: 68, shrinkK: ps.shrinkKGtext, prior: ps.priorGtext });
  } else if (metricType === 'exam') {
    prob = _probFromPerformance(s, n, { prior: ps.priorAdmis + 2, shrinkK: ps.shrinkKExam, steepness: ps.steepness });
    probAB = _probFromPerformance(s, n, { threshold: 58, shrinkK: ps.shrinkKExam, steepness: ps.steepness * 0.97 });
    probB = _probFromPerformance(s, n, { threshold: 68, shrinkK: ps.shrinkKExam, steepness: ps.steepness * 0.94 });
  } else if (metricType === 'gtext') {
    prob = _probFromPerformance(s, n, { prior: ps.priorGtext, shrinkK: ps.shrinkKGtext, steepness: ps.steepness });
    probAB = _probFromPerformance(s, n, { threshold: 58, shrinkK: ps.shrinkKGtext, prior: ps.priorGtext });
    probB = _probFromPerformance(s, n, { threshold: 68, shrinkK: ps.shrinkKGtext, prior: ps.priorGtext });
  } else {
    prob = _probFromPerformance(s, n, { shrinkK: ps.shrinkK, steepness: ps.steepness });
    probAB = opts.withMentions ? _probFromPerformance(s, n, { threshold: 58, shrinkK: ps.shrinkK }) : null;
    probB = opts.withMentions ? _probFromPerformance(s, n, { threshold: 68, shrinkK: ps.shrinkK }) : null;
  }

  const confLevel = n >= 20 ? 'high' : n >= 8 ? 'mid' : 'low';
  const band = prob != null ? _probBand(prob, { level: confLevel }, { extraSpread: n < 5 ? 8 : 0 }) : { text: '—' };

  return {
    id, group, name, icon,
    score: s,
    detail: detail || '—',
    prob,
    probLabel: prob != null ? null : 'n.d.',
    band: band.text,
    probAB: opts.withMentions ? probAB : null,
    probB: opts.withMentions ? probB : null,
    n,
    confidence: confLevel,
    insufficient: false,
    indicatorOnly: false,
    trend: opts.trend ?? null,
    action: opts.action ?? null,
    status: s >= 68 ? 'ok' : s >= 48 ? 'mid' : 'lo',
    weight: opts.weight ?? 1,
    metricType,
    source: opts.source ?? null,
  };
}

const STAT_PROB_GROUPS = {
  composite: 'Score Bac composite',
  qcm: 'QCM & maîtrise',
  exam: 'Examens blancs',
  ecrit: 'Écrit — grands textes',
  methode: 'Méthodes & entraînement',
  cartes: 'Flashcards',
  assidu: 'Assiduité & régularité',
  equilibre: 'Équilibre & profil',
  categories: 'Probabilités par catégorie',
  vigilance: 'Points de vigilance',
  evolution: 'Évolution & tendances',
};

/**
 * Catalogue exhaustif : une probabilité de réussite par dimension statistique
 */
function buildStatProbabilityCatalog(ctx, readinessBundle) {
  const ps = getProbSettings();
  const lines = [];
  const push = (...args) => {
    const opts = args[6] || {};
    const mt = opts.metricType || 'performance';
    if (!ps.showIndicators && (mt === 'indicator' || mt === 'activity' || mt === 'coverage')) return;
    const line = _statProbLine(...args);
    if (line) lines.push(line);
  };

  const exoPct = ctx.exoPct ?? computeExoPct();
  const gtextDetail = computeGtextDetailStats();
  const challengePct = ctx.challengePct ?? computeChallengePct();
  const challengeStats = typeof computeChallengeStats === 'function' ? computeChallengeStats() : { total: 0, streak: 0 };
  const phraseStats = computePhraseQcmStats();
  const methodStats = computeMethodQcmStats();
  const favStats = computeFavorisQcmStats();
  const examAll = computeExamStatsByMat('all');
  const examProc = computeExamStatsByMat('proc');
  const examGram = computeExamStatsByMat('gram');
  const carteStats = computeCarteStats();
  const exoDetail = computeExoDetailStats();
  const gtextTrend = computeGtextTrend();
  const globalCov = computeGlobalQuestionCoverage();
  const weekly = computeWeeklyActivity();
  const bacComposite = computeBacComposite();
  const favCards = computeFavorisCardStats();

  if (ctx.mode === 'global') {
    const proc = readinessBundle?.proc || _quickReadinessSlice('proc');
    const gram = readinessBundle?.gram || _quickReadinessSlice('gram');
    const vocab = readinessBundle?.vocab || _quickReadinessSlice('vocab');
    const qcmGlobal = computeGlobalQcmPerformance();
    const rec = collectRecoverableStats(ctx);

    rec.performance.forEach(sig => {
      push(`rec-${sig.id}`, 'qcm', `${sig.icon} ${sig.label} (signal global)`, sig.icon, sig.pct,
        `${sig.pct}% · n=${sig.n} · poids modèle ${Math.round(sig.weight * 100)}%`,
        { n: sig.n, metricType: sig.id === 'exam' ? 'exam' : sig.id === 'gtext' ? 'gtext' : 'performance',
          note20: sig.note20, source: sig.source, withMentions: sig.id === 'exam' || sig.id === 'gtext' });
    });

    if (bacComposite.composite != null) {
      push('bac-composite', 'composite', 'Score Bac composite (QCM + écrit)', '🎓', bacComposite.composite,
        `QCM ${bacComposite.qcmScore ?? '—'}% · Écrit ${bacComposite.ecritScore ?? '—'}% → ~${bacComposite.noteEst}/20`,
        { n: (qcmGlobal.n || 0) + (gtextDetail?.count || 0) * 5, metricType: 'performance', withMentions: true, source: 'composite mesuré' });
    }

    push('glob-cov', 'qcm', 'Couverture globale banque QCM', '🗂', globalCov.pct,
      `${globalCov.attempted}/${globalCov.total} questions vues`, { n: globalCov.attempted, metricType: 'coverage', source: 'bac_*_stats.qdata' });

    [['proc', proc, '📖 Littérature'], ['gram', gram, '✍️ Grammaire'], ['vocab', vocab, '📝 Vocabulaire']].forEach(([m, r, label]) => {
      if (!r) return;
      const agg = safeSessionAggregate(m);
      const trendLabel = r.trend?.label || 'Stable';
      const matKey = STAT_CONFIG[m].stKey;
      if (r.hasActivity || (agg && agg.sessions >= 1)) {
        push(`${m}-mastery`, 'qcm', `${label} — maîtrise catégories`, '📊', r.masteryAvg,
          `${r.masteryAvg}% · ${r.weakCats.length} cat. faible(s) (jouées)`,
          { n: agg?.tracked || r.sessions, minN: 3, metricType: 'performance', source: matKey + '.qdata', action: `openQcmCat('${m}','Toutes')` });
      }
      push(`${m}-cov`, 'qcm', `${label} — couverture`, '📚', r.coverage.pct,
        `${r.coverage.attempted}/${r.coverage.total} questions vues`,
        { n: r.coverage.attempted, metricType: 'coverage', source: matKey });
      if (r.recent7 != null && r.sessions >= 3) {
        push(`${m}-recent`, 'qcm', `${label} — forme récente`, '📈', r.recent7,
          trendLabel, { n: Math.min(7, r.sessions), metricType: 'performance', minN: 3, source: matKey + '.sessions', trend: r.trend?.dir });
      }
      if (agg && agg.sessions >= 1) {
        push(`${m}-avg`, 'qcm', `${label} — moy. sessions`, '🎲', agg.avgPct,
          `${agg.sessions} session(s) · ${agg.ok}/${agg.tot} bonnes réponses · record ${agg.best}%`,
          { n: agg.tot || agg.sessions, minN: 5, metricType: 'performance', source: matKey + '.sessions' });
        if (agg.lastPct != null) {
          push(`${m}-last`, 'qcm', `${label} — dernière session`, '⏱', agg.lastPct,
            `Dernier score ${agg.lastPct}%`, { n: 1, metricType: 'performance', showLowN: true, source: matKey + '.sessions' });
        }
        if (agg.hardScore != null && agg.hardN >= 3) {
          push(`${m}-hard`, 'vigilance', `${label} — questions difficiles`, '⚠', agg.hardScore,
            `Erreur moy. ${100 - agg.hardScore}% sur ${agg.hardN} Q`, { n: agg.hardN, metricType: 'performance', minN: 3 });
        }
      }
    });

    if (examAll.count > 0 && examAll.avg != null) {
      push('exam-all', 'exam', 'Examens blancs (tous)', '🏆', examAll.avg,
        `Moy. pondérée ${examAll.avg}% · ${examAll.count} examen(s)${examAll.trend ? ` · tendance ${examAll.trend > 0 ? '+' : ''}${examAll.trend}%` : ''}`,
        { n: examAll.count, metricType: 'exam', withMentions: true, source: 'bac_exam_history', action: "openExamMode('proc')" });
    }
    if (examAll.last) {
      push('exam-last', 'exam', 'Dernier examen blanc', '🕐', examAll.last.pct,
        `${examAll.last.ok}/${examAll.last.tot} · ${examAll.last.pct}% · ${examAll.last.date}`,
        { n: 1, metricType: 'exam', showLowN: true, source: 'bac_exam_history' });
    }
    if (examAll.timeoutRate > 0 && examAll.count >= 2) {
      push('exam-time', 'exam', 'Gestion du temps examen', '⏱', Math.max(0, 100 - Math.round(examAll.timeoutRate * 120)),
        `${Math.round(examAll.timeoutRate * 100)}% d'examens avec timeout`, { n: examAll.count, metricType: 'indicator' });
    }

    if (gtextDetail) {
      push('gtext-note', 'ecrit', 'Commentaire — note moyenne', '📜', gtextDetail.avgNotePct,
        `${gtextDetail.avgNote}/20 · ${gtextDetail.count} texte(s)`, {
          n: gtextDetail.count, metricType: 'gtext', note20: gtextDetail.avgNote, withMentions: true, source: 'bac_gtext_stats',
        });
      push('gtext-cov', 'ecrit', 'Commentaire — couverture corpus', '📚', gtextDetail.coveragePct ?? 0,
        `${gtextDetail.coveragePct ?? 0}% du corpus`, { n: gtextDetail.count, metricType: 'coverage', source: 'bac_gtext_stats' });
      if (gtextDetail.procPct != null && gtextDetail.count >= 1) {
        push('gtext-proc', 'ecrit', 'Repérage procédés (P)', '🔍', gtextDetail.procPct,
          `Moy. ${gtextDetail.avgProc}/2,5 pts`, { n: gtextDetail.count, metricType: 'gtext', source: 'bac_gtext_stats' });
        push('gtext-cite', 'ecrit', 'Citations (C)', '💬', gtextDetail.citePct,
          `Moy. ${gtextDetail.avgCite}/1,25 pts`, { n: gtextDetail.count, metricType: 'gtext', source: 'bac_gtext_stats' });
        push('gtext-interp', 'ecrit', 'Interprétations (I)', '💡', gtextDetail.interpPct,
          `Moy. ${gtextDetail.avgInterp}/1,25 pts`, { n: gtextDetail.count, metricType: 'gtext', source: 'bac_gtext_stats' });
      }
      if (gtextTrend && gtextTrend.count >= 2) {
        push('gtext-trend', 'evolution', 'Progression commentaires', '📈', gtextDetail.avgNotePct,
          `${gtextTrend.oldAvg}/20 → ${gtextTrend.recentAvg}/20 (${gtextTrend.delta >= 0 ? '+' : ''}${gtextTrend.delta})`,
          { n: gtextTrend.count, metricType: 'gtext', note20: gtextDetail.avgNote, trend: gtextTrend.dir, source: 'bac_gtext_stats' });
      }
      const gext = typeof computeGtextExtendedStats === 'function' ? computeGtextExtendedStats() : null;
      if (gext?.hasData && gext.ipci) {
        push('gtext-ipci-p', 'ecrit', 'IPCI — procédés (agrégé)', '🔍', gext.ipci.proc,
          `Moy. ${gext.ipci.proc}% · P admis signal ${gext.ipci.procProb}%`, { n: gext.ipci.n, metricType: 'gtext', source: 'bac_gtext_stats' });
        push('gtext-ipci-c', 'ecrit', 'IPCI — citations (agrégé)', '💬', gext.ipci.cite,
          `Moy. ${gext.ipci.cite}% · signal ${gext.ipci.citeProb}%`, { n: gext.ipci.n, metricType: 'gtext', source: 'bac_gtext_stats' });
        push('gtext-ipci-i', 'ecrit', 'IPCI — interprétations (agrégé)', '💡', gext.ipci.interp,
          `Moy. ${gext.ipci.interp}% · signal ${gext.ipci.interpProb}%`, { n: gext.ipci.n, metricType: 'gtext', source: 'bac_gtext_stats' });
        if (gext.weakAxis) {
          push('gtext-weak-axis', 'vigilance', `Axe faible commentaire · ${gext.weakAxis.label}`, gext.weakAxis.icon, gext.weakAxis.pct,
            `Priorité IPCI · proba signal ${gext.weakAxis.prob}%`, { n: gext.done, metricType: 'gtext', source: 'bac_gtext_stats' });
        }
        Object.entries(gext.byGenre).slice(0, 4).forEach(([genre, b]) => {
          if (b.n < 1) return;
          push(`gtext-genre-${genre.slice(0, 8)}`, 'ecrit', `Genre · ${genre}`, '📂', Math.round(b.avgNote / 20 * 100),
            `${b.n} texte(s) · ${b.avgNote}/20 · P ${b.avgProc ?? '—'}% C ${b.avgCite ?? '—'}%`, { n: b.n, metricType: 'gtext', note20: b.avgNote, source: 'bac_gtext_stats' });
        });
      }
    }

    if (ps.includeExo && exoPct != null && exoDetail && exoDetail.tot >= ps.minExoAttempts) {
      push('exo', 'methode', 'Exercices de repérage', '🔍', exoPct,
        `${exoPct}% · ${exoDetail.ok}/${exoDetail.tot} bonnes réponses`, { n: exoDetail.tot, metricType: 'performance', source: 'bac_exo_stats' });
    }
    if (ps.includeChallenge && challengePct != null && challengeStats.total >= ps.minChallenge) {
      push('defi', 'methode', 'Défis express (10 min)', '🎯', challengePct,
        `${challengePct}% · ${challengeStats.ok}/${challengeStats.total}`, { n: challengeStats.total, metricType: 'performance', source: 'bac_challenge_stats' });
    }
    if (phraseStats.pct != null && phraseStats.attempted >= 2) {
      push('phrase', 'methode', 'Analyse de phrase (Lit.+Gram.)', '📐', phraseStats.pct,
        `${phraseStats.pct}% · ${phraseStats.attempted} Q vues`, { n: phraseStats.attempted, metricType: 'performance', minN: 3 });
    }
    if (methodStats.pct != null && methodStats.attempted >= 2) {
      push('method-qcm', 'methode', 'Méthode commentaire & dissert. (QCM)', '📋', methodStats.pct,
        `${methodStats.pct}% · ${methodStats.attempted} Q vues`, { n: methodStats.attempted, metricType: 'performance', minN: 2 });
    }
    if (favStats && favStats.pct != null && favStats.tracked >= 2) {
      push('favoris', 'methode', 'Questions favorites (QCM)', '⭐', favStats.pct,
        `${favStats.count} favori(s) · ${favStats.tracked} tracée(s) · ${favStats.pct}%`,
        { n: favStats.tracked, metricType: 'performance', source: 'bac_favs + qdata' });
    }
    if (favCards) {
      push('favoris-cards', 'methode', 'Fiches favoris (volume)', '★', Math.min(100, favCards.total * 5),
        `${favCards.total} fiche(s) marquée(s)`, { n: favCards.total, metricType: 'indicator', source: 'bac_favs' });
    }

    if (ps.includeCartes && carteStats.global.pct != null && carteStats.global.sessions >= 2) {
      const carteN = ['proc', 'gram', 'vocab'].reduce((a, k) => a + (carteStats[k]?.tot || 0), 0);
      if (carteN >= ps.minCarteCards) {
        push('cartes-global', 'cartes', 'Flashcards — global', '🃏', carteStats.global.pct,
          `${carteStats.global.pct}% · ${carteN} cartes évaluées`, { n: carteN, metricType: 'performance', source: 'bac_carte_stats' });
      }
    }

    push('streak', 'assidu', 'Série quotidienne', '🔥', Math.min(100, (ctx.streak || 0) * 14),
      `${ctx.streak || 0} jour(s) consécutif(s)`, { n: ctx.streak || 0, metricType: 'activity', source: 'bac_*_stats.sessions' });
    push('sess14', 'assidu', 'Sessions (14 derniers jours)', '📅', Math.min(100, (ctx.sessions14 || 0) * 12),
      `${ctx.sessions14 || 0} session(s) sur 14 jours`, { n: ctx.sessions14 || 0, metricType: 'activity', source: 'bac_*_stats.sessions.ts' });

    const bal = _balanceScore(proc.score, gram.score);
    push('balance-lit-gram', 'equilibre', 'Équilibre Lit. / Gram.', '⚖️', bal,
      `Écart ${Math.abs(proc.score - gram.score)} pts`, { n: proc.sessions + gram.sessions, metricType: 'indicator' });

    const weakTotal = proc.weakCats.length + gram.weakCats.length + (vocab?.weakCats?.length ?? 0);
    if (weakTotal > 0) {
      push('weak-cats', 'vigilance', 'Catégories sous 50%', '⚠', Math.max(8, 100 - weakTotal * 12),
        `${weakTotal} catégorie(s) mesurée(s) sous 50 %`, { n: weakTotal, metricType: 'indicator' });
    }

    ['proc', 'gram', 'vocab'].forEach(m => {
      const r = m === 'proc' ? proc : m === 'gram' ? gram : vocab;
      if (!r) return;
      const matShort = m === 'proc' ? 'Lit.' : m === 'gram' ? 'Gram.' : 'Voc.';
      STAT_CONFIG[m].cats.forEach(c => {
        const x = r.mastery[c];
        if (x.pct == null) return;
        push(`cat-${m}-${c.slice(0, 12)}`, 'categories', `${matShort} · ${c.length > 22 ? c.slice(0, 20) + '…' : c}`,
          '🏷', x.pct, `${x.pct}% · ${x.attempted}/${x.bankSize} Q · n=${x.tot}`,
          { n: x.tot, minN: ps.minCatAttempts, metricType: 'performance', source: STAT_CONFIG[m].stKey + '.qdata',
            action: `openQcmCat('${m}','${c.replace(/'/g, "\\'")}')` });
      });
    });
  } else {
    const m = ctx.mode;
    const r = readinessBundle?.local || _quickReadinessSlice(m);
    const agg = safeSessionAggregate(m);
    const examMat = computeExamStatsByMat(m);

    push(`${m}-readiness`, 'qcm', `Indice ${ctx.matLabel}`, '🎯', ctx.readinessScore ?? ctx.masteryAvg,
      `${ctx.masteryAvg}% maîtrise (catégories jouées)`, { n: ctx.sessions, withMentions: true });

    if (ctx.sessions > 0 || ctx.coveragePct > 0) {
      push(`${m}-mastery`, 'qcm', 'Maîtrise par catégorie', '📊', ctx.masteryAvg,
        `${ctx.weakCount} catégorie(s) faible(s) parmi celles jouées`, { n: ctx.sessions, action: `openQcmCat('${m}','Toutes')` });
    }
    push(`${m}-cov`, 'qcm', 'Couverture programme', '📚', ctx.coveragePct,
      `${ctx.coveragePct}% du QCM ${ctx.matLabel} vu (info)`, { n: ctx.coveragePct, metricType: 'coverage', source: STAT_CONFIG[m].stKey + '.qdata' });
    push(`${m}-recent`, 'qcm', 'Forme récente (7 sess.)', '📈', ctx.recent7,
      ctx.trendDir === 'up' ? 'En progression' : ctx.trendDir === 'down' ? 'En baisse' : 'Stable',
      { n: Math.min(7, ctx.sessions), trend: ctx.trendDir });

    if (agg) {
      push(`${m}-avg`, 'qcm', 'Moyenne sessions', '🎲', agg.avgPct,
        `${agg.sessions} sess. · record ${agg.best}%`, { n: agg.sessions });
      push(`${m}-tracked`, 'qcm', 'Questions tracées', '🗂', Math.min(100, Math.round(agg.tracked / Math.max(1, QCM_STATE[m].data.length) * 100)),
        `${agg.tracked} questions avec historique`, { n: agg.tracked, midpoint: 40, steepness: 0.08 });
      if (agg.hardScore != null) {
        push(`${m}-hard`, 'vigilance', 'Maîtrise des Q difficiles', '⚠', agg.hardScore,
          `Taux d'erreur moy. ${100 - agg.hardScore}%`, { n: agg.hardN });
      }
    }

    const ex = _examFactorScore(examMat.avg, examMat.trend, examMat.timeoutRate, examMat.count);
    if (examMat.count > 0 && examMat.avg != null) {
      push(`${m}-exam`, 'exam', 'Examens blancs', '🏆', ex.score, ex.detail,
        { n: examMat.count, withMentions: true, action: `openExamMode('${m}')` });
    }

    if (gtextDetail && m === 'proc') {
      push('gtext-note', 'ecrit', 'Grands textes — note', '📜', gtextDetail.avgNotePct,
        `${gtextDetail.avgNote}/20`, { n: gtextDetail.count, midpoint: 50 });
    }
    if (m === 'proc' && phraseStats.pct != null) {
      push('phrase', 'methode', 'Analyse de phrase', '📐', phraseStats.pct,
        `${phraseStats.pct}%`, { n: phraseStats.attempted });
    }
    if ((m === 'proc' || m === 'vocab') && methodStats.pct != null) {
      push('method', 'methode', 'Méthode / dissertation (QCM)', '📋', methodStats.pct,
        `${methodStats.pct}%`, { n: methodStats.attempted });
    }
    if (exoPct != null && m === 'proc') {
      push('exo', 'methode', 'Exercices repérage', '🔍', exoPct, `${exoPct}%`, { n: Object.keys(loadExoStats()).length });
    }

    push(`${m}-streak`, 'assidu', 'Série & régularité', '🔥', _regularityScore(ctx.streak, ctx.sessions14),
      `${ctx.streak} j. · ${ctx.sessions14} sess./14 j.`, { n: ctx.sessions14 });

    const carteK = m === 'proc' ? 'proc' : m === 'gram' ? 'gram' : 'vocab';
    if (carteStats[carteK]?.pct != null) {
      push(`${m}-cartes`, 'cartes', 'Flashcards', '🃏', carteStats[carteK].pct,
        `${carteStats[carteK].pct}% · ${carteStats[carteK].sessionCount} sess.`, { n: carteStats[carteK].tot });
    }

    if (r && r.mastery) {
      STAT_CONFIG[m].cats.forEach(c => {
        const x = r.mastery[c];
        if (x.pct == null || x.tot < 2) return;
        push(`cat-${c.slice(0, 14)}`, 'categories', c.length > 26 ? c.slice(0, 24) + '…' : c,
          '🏷', x.pct, `${x.pct}% · ${x.attempted} Q · n=${x.tot}`,
          { n: x.tot, action: `openQcmCat('${m}','${c.replace(/'/g, "\\'")}')` });
      });
    }
  }

  const groups = {};
  Object.keys(STAT_PROB_GROUPS).forEach(gk => {
    groups[gk] = lines.filter(l => l.group === gk);
  });

  const result = { lines, groups, total: lines.length };
  result.measurable = lines.filter(l => l.prob != null && !l.indicatorOnly).length;
  result.analysis = analyzeStatCatalog(result);
  result.simulations = computeProbSimulations(result);
  if (ctx.mode === 'global') result.heatmap = buildCategoryHeatmapData();
  return result;
}

function _renderSpCard(it) {
  const cls = it.status === 'ok' ? 'hi' : it.status === 'mid' ? 'mid' : 'lo';
  const trend = it.trend === 'up' ? ' ↑' : it.trend === 'down' ? ' ↓' : '';
  const probTxt = it.indicatorOnly ? 'Indic.' : it.insufficient ? 'n.d.' : (it.prob != null ? `${it.prob}%` : '—');
  const barW = it.prob != null ? it.prob : it.score;
  const barColor = it.indicatorOnly ? 'var(--tx3)' : (it.status === 'ok' ? 'var(--ok)' : it.status === 'mid' ? 'var(--amber)' : 'var(--er)');
  return `<div class="sp-card sp-${it.status}${it.indicatorOnly ? ' sp-indicator' : ''}" data-group="${it.group}" data-prob="${it.prob ?? 0}" data-name="${it.name.toLowerCase()}">
    <div class="sp-card-top">
      <span class="sp-icon">${it.icon}</span>
      <span class="sp-name">${it.name}${trend}</span>
      <span class="sp-prob hscore ${it.indicatorOnly ? '' : cls}">${probTxt}</span>
    </div>
    <div class="rtrack sp-track"><div class="rfill" style="width:${barW}%;background:${barColor}"></div></div>
    <div class="sp-meta"><span>Score ${it.score}%</span>${it.prob != null ? `<span>Fourchette ${it.band}</span>` : ''}${it.n ? `<span>n=${it.n}</span>` : ''}${it.source ? `<span class="sp-src" title="${it.source}">📂</span>` : ''}</div>
    <div class="sp-detail">${it.detail}</div>
    ${it.action ? `<button class="sbtn sp-action" ${htmlOnclickAttr(it.action)}>→ Travailler</button>` : ''}
  </div>`;
}

function renderStatProbabilityGridHtml(catalog, opts = {}) {
  if (!catalog || !catalog.lines.length) {
    return '<div class="sp-empty no-data">Joue des QCM et des examens pour alimenter les probabilités par stat.</div>';
  }

  const groupOrder = opts.groupOrder || Object.keys(STAT_PROB_GROUPS);
  const compact = opts.compact;
  let html = compact ? '' : '<div class="sp-panel"><div class="sp-head"><div class="sp-title">Probabilités par statistique</div>';
  if (!compact) html += `<div class="sp-sub">${catalog.total} dimensions · proba uniquement si n suffisant · rétrécissement bayésien si peu de données</div></div>`;

  groupOrder.forEach(gk => {
    const items = catalog.groups[gk];
    if (!items || !items.length) return;
    html += `<div class="sp-group" data-sp-group="${gk}"><div class="sp-group-title">${STAT_PROB_GROUPS[gk]} <span class="sp-group-n">${items.length}</span></div>`;
    html += '<div class="sp-grid">';
    items.forEach(it => { html += _renderSpCard(it); });
    html += '</div></div>';
  });

  if (!compact) html += '</div>';
  return html;
}

function initStatProbHubControls() {
  const hub = el('stat-prob-hub');
  if (!hub || hub.dataset.init) return;
  hub.dataset.init = '1';

  const search = el('sph-search');
  const sortSel = el('sph-sort');
  const filterSel = el('sph-filter');

  const apply = () => {
    const q = (search?.value || '').toLowerCase().trim();
    const sort = sortSel?.value || 'prob-asc';
    const filt = filterSel?.value || 'all';
    const cards = [...hub.querySelectorAll('.sp-card')];
    cards.forEach(c => {
      const name = c.dataset.name || '';
      const grp = c.dataset.group || '';
      const matchQ = !q || name.includes(q);
      const matchG = filt === 'all' || grp === filt;
      c.style.display = matchQ && matchG ? '' : 'none';
    });
    hub.querySelectorAll('.sp-group').forEach(g => {
      const visible = [...g.querySelectorAll('.sp-card')].some(c => c.style.display !== 'none');
      g.style.display = visible ? '' : 'none';
    });
    if (sort === 'prob-asc' || sort === 'prob-desc') {
      hub.querySelectorAll('.sp-grid').forEach(grid => {
        const items = [...grid.querySelectorAll('.sp-card')].filter(c => c.style.display !== 'none');
        items.sort((a, b) => {
          const pa = parseInt(a.dataset.prob, 10);
          const pb = parseInt(b.dataset.prob, 10);
          return sort === 'prob-asc' ? pa - pb : pb - pa;
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
  if (!ps.showHub) {
    box.innerHTML = '';
    return;
  }

  const g = computeGlobalReadiness();
  const catalog = g.prob?.statCatalog;
  if (!catalog?.lines?.length) {
    box.innerHTML = '<div class="sph-empty no-data">Entraîne-toi (QCM, examens, grands textes) pour générer le centre de probabilités.</div>';
    return;
  }

  const analysis = catalog.analysis || analyzeStatCatalog(catalog);
  const sims = catalog.simulations || computeProbSimulations(catalog);
  const heatmap = catalog.heatmap || buildCategoryHeatmapData();
  const bac = computeBacComposite();
  const exams = loadExamHistory().slice(-10);

  const groupOpts = Object.entries(STAT_PROB_GROUPS)
    .map(([k, v]) => `<option value="${k}">${v}</option>`).join('');

  const strengthHtml = analysis.strengths.slice(0, 4).map(s =>
    `<div class="sph-pill sph-pill-ok">${s.icon} ${s.name} <b>${s.prob}%</b></div>`
  ).join('');

  const weakHtml = analysis.weaknesses.slice(0, 5).map(w =>
    `<div class="sph-pill sph-pill-lo">${w.icon} ${w.name.length > 28 ? w.name.slice(0, 26) + '…' : w.name} <b>${w.prob}%</b>${w.action ? `<button class="sbtn" style="font-size:9px;padding:2px 6px;margin-left:4px" ${htmlOnclickAttr(w.action)}>→</button>` : ''}</div>`
  ).join('');

  const simHtml = sims.length ? sims.map(s =>
    `<div class="sph-sim"><span>${s.icon} ${s.name}</span><span class="sph-sim-delta">+${s.delta}%</span><span class="sph-sim-proj">${s.current}% → ${s.projected}%</span>${s.action ? `<button class="sbtn" style="font-size:9px" ${htmlOnclickAttr(s.action)}>Agir</button>` : ''}</div>`
  ).join('') : '<div class="no-data">Profil déjà solide sur les leviers principaux.</div>';

  const heatHtml = heatmap.slice(0, 24).map(h => {
    const cls = h.prob >= 68 ? 'hi' : h.prob >= 45 ? 'mid' : 'lo';
    const sn = h.cat.length > 18 ? h.cat.slice(0, 16) + '…' : h.cat;
    return `<div class="sph-heat sph-heat-${cls}" title="${h.cat} · ${h.pct ?? h.coverage + '% couv.'}" ${htmlOnclickAttr(h.action)}>
      <span class="sph-heat-m">${h.matLabel}</span>
      <span class="sph-heat-c">${sn}</span>
      <span class="sph-heat-p">${h.prob}%</span>
    </div>`;
  }).join('');

  const examTl = exams.length ? exams.map(e => {
    const cls = e.pct >= 75 ? 'hi' : e.pct >= 50 ? 'mid' : 'lo';
    const w = Math.max(12, Math.round(e.pct / 100 * 100));
    return `<div class="sph-exam-bar" title="${e.date} · ${e.pct}%"><div class="sph-exam-fill ${cls}" style="width:${w}%"></div><span>${e.pct}%</span></div>`;
  }).join('') : '<div class="no-data">Aucun examen enregistré.</div>';

  const groupAvgHtml = analysis.byGroup ? Object.entries(analysis.byGroup).map(([k, v]) =>
    `<div class="sph-gavg"><span>${STAT_PROB_GROUPS[k] || k}</span><span class="hscore ${v >= 65 ? 'hi' : v >= 45 ? 'mid' : 'lo'}">${v}%</span></div>`
  ).join('') : '';

  box.innerHTML = `
    <div class="sph-wrap">
      <div class="sph-header">
        <div>
          <h2 class="sph-title">Centre de <em>probabilités</em></h2>
          <p class="sph-sub">${catalog.measurable ?? catalog.analysis?.measurable ?? 0} stats mesurées · proba médiane ${analysis.medianProb != null ? analysis.medianProb + '%' : '—'}${analysis.critical ? ` · <span style="color:var(--coral)">${analysis.critical} critique(s)</span>` : ''} · modèle calibré sur tes données réelles</p>
        </div>
        <div class="sph-bac-composite">
          <div class="sph-bac-label">Score Bac composite</div>
          <div class="sph-bac-val" style="color:${g.prob.color}">${bac.noteEst}<span>/20</span></div>
          <div class="sph-bac-probs">Admis ${bac.probPass}% · AB ${bac.probAB}% · B ${bac.probB}%</div>
        </div>
      </div>

      <div class="sph-summary-grid">
        <div class="sph-summary-box sph-box-ok">
          <div class="sph-box-title">✓ Points forts</div>
          <div class="sph-pills">${strengthHtml || '<span class="no-data">—</span>'}</div>
        </div>
        <div class="sph-summary-box sph-box-lo">
          <div class="sph-box-title">⚠ Priorités</div>
          <div class="sph-pills">${weakHtml || '<span class="no-data">Aucune faiblesse majeure.</span>'}</div>
        </div>
        <div class="sph-summary-box">
          <div class="sph-box-title">📊 Moy. par domaine</div>
          <div class="sph-gavg-grid">${groupAvgHtml}</div>
        </div>
      </div>

      <div class="sph-row">
        <div class="sph-col">
          <div class="sph-section-title">Simulations — impact si tu progresses</div>
          <div class="sph-sims">${simHtml}</div>
        </div>
        <div class="sph-col">
          <div class="sph-section-title">Historique examens blancs</div>
          <div class="sph-exam-timeline">${examTl}</div>
        </div>
      </div>

      <div class="sph-section-title">Carte thermique — probabilité par catégorie QCM</div>
      <div class="sph-heatmap">${heatHtml || '<div class="no-data">Joue des QCM par catégorie.</div>'}</div>

      ${ps.showCatalogGrid ? `<div class="sph-toolbar">
        <input type="search" id="sph-search" class="sph-search" placeholder="Rechercher une stat…" />
        <select id="sph-filter" class="sph-select"><option value="all">Tous les domaines</option>${groupOpts}</select>
        <select id="sph-sort" class="sph-select">
          <option value="prob-asc">Proba ↑ (faibles d'abord)</option>
          <option value="prob-desc">Proba ↓ (forts d'abord)</option>
          <option value="default">Ordre par domaine</option>
        </select>
      </div>

      ${renderStatProbabilityGridHtml(catalog, { compact: true })}` : `<p class="sph-sub" style="margin-top:.75rem;color:var(--tx3)">Grille détaillée masquée — active « Catalogue complet » dans Paramètres → Probabilités.</p>`}
    </div>`;

  delete box.dataset.init;
  if (ps.showCatalogGrid) initStatProbHubControls();
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

/** Construit le contexte enrichi pour le modèle multi-facteurs */
/** Extrait rapide des stats sans recalculer estimateExamProbability (évite récursion) */
function _quickReadinessSlice(m) {
  const cfg = STAT_CONFIG[m];
  if (!cfg) return null;
  const st = loadSt(cfg.stKey);
  const sessions = st.sessions || [];
  const mastery = computeCatMastery(m);
  const coverage = computeCoverage(m);
  const recent7 = _weightedRecentSessions(sessions, 7);
  const masteryAvg = computeMasteryAvg(mastery, cfg, recent7);
  const weakCats = cfg.cats.filter(c => mastery[c].level === 'critical' || mastery[c].level === 'weak');
  const trend = _sessionTrend(sessions);
  const hasActivity = sessions.length > 0 || coverage.attempted > 0;
  const { score, factors } = computeReadinessScoreParts({
    masteryAvg,
    recent7,
    examAvg: null,
    streak: computeStreak(sessions),
    weakCats,
    hasActivity,
  });
  return {
    masteryAvg: masteryAvg ?? 0,
    coverage,
    recent7,
    weakCats,
    score,
    factors,
    sessions: sessions.length,
    mastery,
    trend,
    trendDir: trend.dir,
    hasActivity,
  };
}

function buildProbContext(opts) {
  const mode = opts.mode || 'global';
  const proc = opts.proc || null;
  const gram = opts.gram || null;
  const examHist = loadExamHistory();
  const gtextCov = opts.gtextCov ?? computeGtextCoverage();
  const challengePct = opts.challengePct ?? computeChallengePct();
  const challengeStats = typeof computeChallengeStats === 'function' ? computeChallengeStats() : { total: 0 };

  if (mode === 'global') {
    const procSt = loadSt(STAT_CONFIG.proc.stKey);
    const gramSt = loadSt(STAT_CONFIG.gram.stKey);
    const vocabSt = STAT_CONFIG.vocab ? loadSt(STAT_CONFIG.vocab.stKey) : { sessions: [] };
    const sessions14 = _sessionsLast14Days([...(procSt.sessions || []), ...(gramSt.sessions || []), ...(vocabSt.sessions || [])]);
    const vocabR = opts.vocab || _quickReadinessSlice('vocab');
    const gtextDetail = computeGtextDetailStats();
    return {
      mode: 'global',
      procMastery: proc?.masteryAvg ?? 0,
      gramMastery: gram?.masteryAvg ?? 0,
      vocabMastery: vocabR?.masteryAvg ?? 0,
      procCoverage: proc?.coverage?.pct ?? 0,
      gramCoverage: gram?.coverage?.pct ?? 0,
      vocabCoverage: vocabR?.coverage?.pct ?? 0,
      procHasData: !!(proc?.sessions || proc?.coverage?.attempted),
      gramHasData: !!(gram?.sessions || gram?.coverage?.attempted),
      vocabHasData: !!(vocabR?.sessions || vocabR?.coverage?.attempted),
      procRecent: proc?.recent7 ?? proc?.masteryAvg ?? 0,
      gramRecent: gram?.recent7 ?? gram?.masteryAvg ?? 0,
      vocabRecent: vocabR?.recent7 ?? vocabR?.masteryAvg ?? 0,
      procScore: proc?.score ?? 0,
      gramScore: gram?.score ?? 0,
      vocabScore: vocabR?.score ?? 0,
      weakCount: (proc?.weakCats?.length ?? 0) + (gram?.weakCats?.length ?? 0) + (vocabR?.weakCats?.length ?? 0),
      examAvg: opts.examAvg ?? _weightedExamPct(examHist),
      examTrend: opts.examTrend ?? _examTrendDelta(examHist),
      timeoutRate: opts.timeoutRate ?? _examTimeoutRate(examHist),
      examCount: opts.examCount ?? examHist.length,
      gtextAvg: opts.gtextAvg ?? computeGtextAvgPct(),
      gtextDetail,
      gtextCov,
      exoPct: opts.exoPct ?? computeExoPct(),
      challengePct,
      challengeTotal: challengeStats.total || 0,
      streak: typeof getGlobalStreak === 'function' ? getGlobalStreak() : 0,
      sessions14,
      sessions: (proc?.sessions ?? 0) + (gram?.sessions ?? 0) + (vocabR?.sessions ?? 0),
      trendDir: opts.trendDir ?? 'neutral',
      readinessScore: opts.readinessScore ?? null,
      vocab: vocabR,
    };
  }

  return {
    mode,
    matLabel: mode === 'proc' ? 'Littérature' : mode === 'gram' ? 'Grammaire' : 'Vocabulaire',
    masteryAvg: opts.masteryAvg ?? 0,
    coveragePct: opts.coveragePct ?? 0,
    recent7: opts.recent7 ?? opts.masteryAvg ?? 0,
    weakCount: opts.weakCount ?? 0,
    examAvg: opts.examAvg,
    examTrend: opts.examTrend ?? 0,
    timeoutRate: opts.timeoutRate ?? 0,
    examCount: opts.examCount ?? 0,
    gtextAvg: opts.gtextAvg ?? computeGtextAvgPct(),
    gtextCov,
    exoPct: opts.exoPct,
    challengePct,
    challengeTotal: challengeStats.total || 0,
    streak: computeStreak(loadSt(STAT_CONFIG[mode].stKey).sessions || []),
    sessions14: _sessionsLast14Days(loadSt(STAT_CONFIG[mode].stKey).sessions || []),
    sessions: opts.sessions ?? 0,
    trendDir: opts.trendDir ?? 'neutral',
    readinessScore: opts.readinessScore ?? 0,
  };
}

/** Scores 0–100 par facteur + contribution pondérée (poids = % du modèle) */
function computeProbFactors(ctx) {
  const factors = [];
  const push = (id, name, weight, score, detail, group, icon) => {
    const s = Math.max(0, Math.min(100, Math.round(score ?? 0)));
    factors.push({
      id, name, weight, score: s,
      contrib: Math.round(s * weight / 100),
      detail: detail || '—',
      group: group || 'pilliers',
      icon: icon || '',
      status: s >= 68 ? 'ok' : s >= 48 ? 'mid' : 'lo',
      impact: s >= 68 ? '+' : s >= 48 ? '~' : '−',
    });
  };
  const pushIf = (id, name, weight, score, detail, group, icon) => {
    if (score == null) return;
    push(id, name, weight, score, detail, group, icon);
  };

  if (ctx.mode === 'global') {
    if (ctx.procHasData) {
      push('proc', 'Maîtrise littérature', 14, ctx.procMastery,
        `${ctx.procMastery}% · ${ctx.procCoverage}% du programme vu (info)`, 'pilliers', '📖');
    }
    if (ctx.gramHasData) {
      push('gram', 'Maîtrise grammaire', 12, ctx.gramMastery,
        `${ctx.gramMastery}% · ${ctx.gramCoverage}% du programme vu (info)`, 'pilliers', '✍️');
    }
    if (ctx.vocabHasData) {
      push('vocab', 'Maîtrise vocabulaire', 8, ctx.vocabMastery,
        `${ctx.vocabMastery}% · ${ctx.vocabCoverage}% du programme vu (info)`, 'pilliers', '📝');
    }
    const recentParts = [];
    if (ctx.procHasData) recentParts.push(ctx.procRecent);
    if (ctx.gramHasData) recentParts.push(ctx.gramRecent);
    if (ctx.vocabHasData && ctx.vocabRecent != null) recentParts.push(ctx.vocabRecent);
    if (recentParts.length) {
      push('recent', 'Forme récente', 8,
        Math.round(recentParts.reduce((a, b) => a + b, 0) / recentParts.length),
        `Moy. sessions récentes (${recentParts.length} matière${recentParts.length > 1 ? 's' : ''} jouée${recentParts.length > 1 ? 's' : ''})`, 'pilliers', '📈');
    }

    if (ctx.examCount > 0 && ctx.examAvg != null) {
      const ex = _examFactorScore(ctx.examAvg, ctx.examTrend, ctx.timeoutRate, ctx.examCount);
      push('exam', 'Examens blancs', 16, ex.score, ex.detail, 'pilliers', '🏆');
    }

    const gt = _gtextFactorScore(ctx.gtextAvg, ctx.gtextCov);
    pushIf('gtext', 'Grands textes (commentaire)', 8, gt.score, gt.detail, 'methodes', '📜');

    if (ctx.gtextDetail) {
      const gd = ctx.gtextDetail;
      pushIf('gtext-p', 'Procédés commentaire (P)', 4, gd.procPct,
        gd.procPct != null ? `Moy. ${gd.avgProc}/2,5 pts · ${gd.count} texte(s)` : null, 'methodes', '🔍');
      pushIf('gtext-c', 'Citations commentaire (C)', 3, gd.citePct,
        gd.citePct != null ? `Moy. ${gd.avgCite}/1,25 pts` : null, 'methodes', '💬');
      pushIf('gtext-i', 'Interprétations (I)', 3, gd.interpPct,
        gd.interpPct != null ? `Moy. ${gd.avgInterp}/1,25 pts` : null, 'methodes', '💡');
    }

    const phrase = computePhraseQcmStats();
    if (phrase.pct != null) {
      push('phrase', 'Analyse de phrase', 4, phrase.pct,
        `${phrase.pct}% · ${phrase.attempted} Q jouées`, 'methodes', '📐');
    }

    pushIf('exo', 'Exercices de repérage', 5, ctx.exoPct,
      ctx.exoPct != null ? `${ctx.exoPct}% de bonnes réponses` : null, 'methodes', '🔍');

    if ((ctx.streak || 0) > 0 || (ctx.sessions14 || 0) > 0) {
      push('reg', 'Régularité & assiduité', 5,
        _regularityScore(ctx.streak, ctx.sessions14),
        `${ctx.streak} j. de série · ${ctx.sessions14} session(s) / 14 j.`, 'modulateurs', '🔥');
    }

    if (ctx.procHasData && ctx.gramHasData) {
      const bal = _balanceScore(ctx.procScore, ctx.gramScore);
      const gap = Math.abs(ctx.procScore - ctx.gramScore);
      push('bal', 'Équilibre Lit. / Gram.', 4, bal,
        gap <= 10 ? 'Profil équilibré entre les deux matières' : `Écart de ${gap} pts — renforce la matière faible`, 'modulateurs', '⚖️');
    }

    pushIf('defi', 'Défis express (10 min)', 4, ctx.challengePct,
      ctx.challengePct != null ? `${ctx.challengePct}% de réussite aux défis` : null, 'modulateurs', '🎯');
  } else {
    if (ctx.masteryAvg != null && ctx.sessions > 0) {
      push('master', `Maîtrise ${ctx.matLabel}`, 52, ctx.masteryAvg,
        `${ctx.masteryAvg}% en moyenne (catégories jouées)`, 'pilliers', '📊');
    }
    if (ctx.recent7 != null && ctx.sessions > 0) {
      push('recent', 'Forme récente (7 sess.)', 30, ctx.recent7,
        `${ctx.recent7}% sur les sessions récentes`, 'pilliers', '📈');
    }

    if (ctx.examCount > 0 && ctx.examAvg != null) {
      const ex = _examFactorScore(ctx.examAvg, ctx.examTrend, ctx.timeoutRate, ctx.examCount);
      push('exam', 'Examens blancs', 18, ex.score, ex.detail, 'pilliers', '🏆');
    }

    if ((ctx.streak || 0) > 0 || (ctx.sessions14 || 0) > 0) {
      push('reg', 'Régularité', 7, _regularityScore(ctx.streak, ctx.sessions14),
        `${ctx.streak} j. · ${ctx.sessions14} sess./14 j.`, 'modulateurs', '🔥');
    }
  }

  return factors;
}

function _applyProbAdjustments(score, ctx, factors) {
  let adj = 0;
  const adjustments = [];

  if (ctx.weakCount >= 4) { adj -= 10; adjustments.push({ text: `${ctx.weakCount} catégories critiques`, delta: -10 }); }
  else if (ctx.weakCount >= 2) { adj -= 5; adjustments.push({ text: `${ctx.weakCount} catégories faibles`, delta: -5 }); }

  if (ctx.trendDir === 'down') { adj -= 3; adjustments.push({ text: 'Tendance sessions en baisse', delta: -3 }); }
  else if (ctx.trendDir === 'up') { adj += 2; adjustments.push({ text: 'Progression récente', delta: +2 }); }

  if (ctx.mode === 'global' && ctx.examCount === 0 && (ctx.sessions || 0) >= 3) {
    adj -= 4; adjustments.push({ text: 'Aucun examen blanc (incertitude)', delta: -4 });
  }

  const weakFactors = factors.filter(f => f.score < 40 && f.weight >= 10);
  if (weakFactors.length >= 2) {
    adj -= 4;
    adjustments.push({ text: `${weakFactors.length} piliers sous 40%`, delta: -4 });
  }

  return { score: Math.max(5, Math.min(98, Math.round(score + adj))), adjustments };
}

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
    x.pct = x.tot >= 3 ? Math.round(x.ok / x.tot * 100) : (x.tot > 0 ? Math.round(x.ok / x.tot * 100) : null);
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

function computeReadinessScoreParts({ masteryAvg, recent7, examAvg, streak, weakCats, hasActivity }) {
  if (!hasActivity) {
    return {
      score: 0,
      factors: [
        { name: 'Maîtrise (catégories jouées)', weight: 44, value: 0, contrib: 0 },
        { name: 'Forme récente (7 sessions)', weight: 30, value: 0, contrib: 0 },
        { name: 'Examens blancs', weight: 18, value: 0, contrib: 0, note: 'Aucune activité enregistrée' },
        { name: 'Régularité (série)', weight: 8, value: 0, contrib: 0, note: '0 jour(s)' },
      ],
    };
  }
  const perfBase = masteryAvg ?? recent7 ?? 0;
  const rec = recent7 ?? masteryAvg ?? perfBase;
  let score = 0;
  const factors = [];

  const wM = (masteryAvg ?? rec) * 0.44;
  score += wM;
  factors.push({ name: 'Maîtrise (catégories jouées)', weight: 44, value: masteryAvg ?? rec, contrib: Math.round(wM) });

  const wR = rec * 0.3;
  score += wR;
  factors.push({ name: 'Forme récente (7 sessions)', weight: 30, value: rec, contrib: Math.round(wR) });

  if (examAvg != null) {
    const wE = examAvg * 0.18;
    score += wE;
    factors.push({ name: 'Examens blancs', weight: 18, value: examAvg, contrib: Math.round(wE) });
  } else {
    factors.push({ name: 'Examens blancs', weight: 18, value: 0, contrib: 0, note: 'Aucun examen enregistré' });
  }

  const streakBonus = Math.min(8, (streak || 0) * 1.5);
  score += streakBonus;
  factors.push({ name: 'Régularité (série)', weight: 8, value: streak || 0, contrib: Math.round(streakBonus), note: `${streak || 0} jour(s)` });

  score = Math.max(0, Math.min(100, Math.round(score - Math.min(25, (weakCats?.length || 0) * 5))));
  return { score, factors };
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
  const emptyProb = _emptyProbFallback();
  const cfg = STAT_CONFIG[m];
  const mastery = {};
  (cfg?.cats || []).forEach(c => {
    mastery[c] = { pct: null, level: 'unknown', attempted: 0, bankSize: 0, tot: 0 };
  });
  return {
    score: 0, masteryAvg: 0, coverage: { pct: 0, attempted: 0, total: 0 },
    trend: { dir: 'neutral', label: 'Stable' }, recent7: null, examAvg: null, exams: [],
    mastery, weakCats: [], excellentCats: [], factors: [], prob: emptyProb,
    grade: { note: 10, mention: '—' }, sessions: 0, gtextAvg: null, exoPct: null, examTrend: null,
  };
}

function _computeReadinessCore(m) {
  const cfg = STAT_CONFIG[m];
  const st = loadSt(cfg.stKey);
  const sessions = st.sessions || [];
  const mastery = computeCatMastery(m);
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

  const masteryAvg = computeMasteryAvg(mastery, cfg, recent7);
  const weakCats = cfg.cats.filter(c => mastery[c].level === 'critical' || mastery[c].level === 'weak');
  const excellentCats = cfg.cats.filter(c => mastery[c].level === 'excellent' || mastery[c].level === 'good');
  const streak = computeStreak(sessions);
  const hasActivity = sessions.length > 0 || coverage.attempted > 0;
  const { score, factors } = computeReadinessScoreParts({
    masteryAvg,
    recent7,
    examAvg,
    streak,
    weakCats,
    hasActivity,
  });

  const gtextAvg = computeGtextAvgPct();
  const exoPct = computeExoPct();

  const examTrend = _examTrendDelta(exams);
  const timeoutRate = _examTimeoutRate(exams);

  const prob = estimateExamProbability(buildProbContext({
    mode: m,
    masteryAvg,
    coveragePct: coverage.pct,
    recent7: recent7 ?? masteryAvg,
    weakCount: weakCats.length,
    examAvg,
    examTrend,
    timeoutRate,
    examCount: exams.length,
    gtextAvg,
    exoPct,
    trendDir: trend.dir,
    sessions: sessions.length,
    readinessScore: score,
  }));
  const grade = scoreToBacGrade(score);

  return {
    score,
    masteryAvg: masteryAvg ?? 0,
    coverage,
    trend,
    recent7,
    examAvg,
    exams: lastExams,
    mastery,
    weakCats,
    excellentCats,
    factors,
    prob,
    grade,
    sessions: sessions.length,
    gtextAvg,
    exoPct,
    examTrend,
    hasActivity,
  };
}

/**
 * Probabilité de réussite — modèle pondéré multi-facteurs (10 piliers globaux)
 */
function estimateExamProbability(ctx) {
  if (typeof ctx === 'object' && ctx.mode == null && ctx.readinessScore != null) {
    ctx = buildProbContext({ mode: 'global', ...ctx });
  } else if (typeof ctx === 'object' && ctx.mode == null) {
    ctx = buildProbContext({ mode: 'global', ...ctx });
  }

  const factors = computeProbFactors(ctx);
  let score = factors.reduce((a, f) => a + f.contrib, 0);
  const { score: scoreAdj, adjustments } = _applyProbAdjustments(score, ctx, factors);
  score = scoreAdj;

  const confidence = _estimateConfidence({
    sessions: ctx.sessions,
    examCount: ctx.examCount,
    qAttempts: computeGlobalQcmPerformance().n,
    coveragePct: ctx.mode === 'global'
      ? Math.round(((ctx.procCoverage ?? 0) + (ctx.gramCoverage ?? 0) + (ctx.vocabCoverage ?? 0)) / 3)
      : ctx.coveragePct,
    gtextAvg: ctx.gtextAvg,
    exoPct: ctx.exoPct,
  });

  const realistic = _computeRealisticPassProb(ctx, confidence);
  const allAdjustments = [...adjustments, ...(realistic.adjustments || [])];

  const abilityScore = realistic.blended ?? score;
  let passPct = realistic.passPct;
  const dataInsufficient = realistic.insufficient || passPct == null;
  const effN = realistic.effectiveN || 0;

  const ps = getProbSettings();
  if (dataInsufficient) {
    passPct = ps.priorAdmis;
  }

  const abPct = _probFromPerformance(abilityScore, effN, { threshold: 58, shrinkK: ps.shrinkKExam, steepness: ps.steepness }) ?? Math.max(5, passPct - 12);
  const bPct = _probFromPerformance(abilityScore, effN, { threshold: 68, shrinkK: ps.shrinkKExam, steepness: ps.steepness * 0.95 }) ?? Math.max(3, passPct - 22);
  const tbPct = _probFromPerformance(abilityScore, effN, { threshold: 78, shrinkK: ps.shrinkKExam, steepness: ps.steepness * 0.9 }) ?? Math.max(2, passPct - 32);

  const passBand = _probBand(passPct, confidence, { extraSpread: dataInsufficient ? ps.bandSpreadInsufficient : (effN < 8 ? 6 : 0) });
  const gradeNote = Math.round(abilityScore / 100 * 20 * 10) / 10;
  const gradeSpread = confidence.level === 'high' ? 1.5 : confidence.level === 'mid' ? 2.5 : 4;

  let label, color, advice;
  const weakPillars = factors.filter(f => f.group === 'pilliers' && f.score < 50);
  if (dataInsufficient) {
    label = 'Données insuffisantes'; color = 'var(--tx3)';
    advice = 'Joue au moins une session QCM (10+ questions) ou un examen blanc pour obtenir une probabilité fiable.';
  } else if (passPct >= 78) {
    label = 'Très probable'; color = 'var(--ok)';
    advice = 'Profil solide sur tes performances mesurées. Consolide par 2 examens blancs en conditions réelles.';
  } else if (passPct >= 62) {
    label = 'Probable'; color = 'var(--green)';
    advice = weakPillars.length
      ? `Bon niveau — renforce : ${weakPillars.slice(0, 2).map(f => f.name.toLowerCase()).join(', ')}.`
      : 'Bon équilibre. Cible tes catégories les plus faibles en révision ciblée.';
  } else if (passPct >= 48) {
    label = 'En progression'; color = 'var(--amber)';
    advice = 'Des bases mesurées. Priorité : examens blancs + catégories QCM sous 50 % + 2 grands textes.';
  } else if (passPct >= 32) {
    label = 'Incertain'; color = 'var(--coral)';
    advice = 'Performances en dessous du seuil. QCM ciblé 20 min/jour + 1 examen blanc cette semaine.';
  } else {
    label = 'À risque'; color = 'var(--er)';
    advice = 'Peu de marge sur tes scores actuels. Reprends les procédés essentiels et vise 60 %+ en QCM.';
  }

  const drivers = factors
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 8)
    .map(f => ({
      name: `${f.icon} ${f.name}`,
      impact: f.impact,
      positive: f.status === 'ok',
      detail: `${f.score}% · ${f.detail} · poids ${f.weight}%`,
      weight: f.weight,
      score: f.score,
    }));

  const blockers = [];
  if (ctx.examCount === 0) blockers.push({ text: 'Aucun examen blanc — probabilité peu fiable', action: 'openExamMode(\'proc\')' });
  if (ctx.mode === 'global') {
    if (ctx.procHasData && ctx.gramHasData && Math.abs(ctx.procScore - ctx.gramScore) > 18) {
      blockers.push({ text: 'Déséquilibre marqué Lit./Gram.', action: null });
    }
  }
  if (ctx.weakCount >= 2) blockers.push({ text: `${ctx.weakCount} catégories jouées sous 50 %`, action: null });
  if (ctx.timeoutRate >= 0.25) blockers.push({ text: 'Timeouts fréquents — travaille le rythme', action: null });

  const scenarios = [];
  factors.filter(f => f.score < 55 && f.weight >= 8).slice(0, 3).forEach(f => {
    const gain = Math.round((65 - f.score) * f.weight / 200);
    if (gain >= 2) scenarios.push({ text: `Remonter « ${f.name} » vers 65%`, gain: `+${gain} à +${gain + 4} pts proba` });
  });
  if (ctx.examCount < 3) scenarios.push({ text: 'Réaliser 3 examens blancs (20 q. min.)', gain: '+8 à +14 pts proba' });
  if (!scenarios.length) scenarios.push({ text: 'Profil équilibré — maintiens la régularité', gain: 'Stable' });

  const groups = {
    pilliers: factors.filter(f => f.group === 'pilliers'),
    methodes: factors.filter(f => f.group === 'methodes'),
    modulateurs: factors.filter(f => f.group === 'modulateurs'),
  };

  const readinessBundle = ctx.mode === 'global'
    ? {
        proc: ctx.procBundle || _quickReadinessSlice('proc'),
        gram: ctx.gramBundle || _quickReadinessSlice('gram'),
        vocab: ctx.vocab || _quickReadinessSlice('vocab'),
      }
    : { local: _quickReadinessSlice(ctx.mode) };

  const statCatalog = buildStatProbabilityCatalog(ctx, readinessBundle);

  return {
    pct: passPct,
    band: passBand.text,
    bandLow: passBand.lo,
    bandHigh: passBand.hi,
    label,
    color,
    advice,
    confidence,
    dataInsufficient,
    recoverable: realistic.rec,
    scoreAdjusted: abilityScore,
    scoreRaw: factors.reduce((a, f) => a + f.contrib, 0),
    factors,
    factorGroups: groups,
    adjustments: allAdjustments,
    mentions: {
      pass: { pct: passPct, band: passBand.text, label: 'Admis (≥ 10/20)', threshold: 10 },
      ab: { pct: abPct, band: _probBand(abPct, confidence).text, label: 'Assez Bien (≥ 12/20)', threshold: 12 },
      b: { pct: bPct, band: _probBand(bPct, confidence).text, label: 'Bien (≥ 14/20)', threshold: 14 },
      tb: { pct: tbPct, band: _probBand(tbPct, confidence).text, label: 'Très Bien (≥ 16/20)', threshold: 16 },
    },
    gradeEst: {
      note: gradeNote,
      noteLow: Math.max(0, Math.round((gradeNote - gradeSpread) * 10) / 10),
      noteHigh: Math.min(20, Math.round((gradeNote + gradeSpread) * 10) / 10),
      mention: scoreToBacGrade(abilityScore).mention,
    },
    drivers,
    blockers,
    scenarios,
    statCatalog,
  };
}

function scoreToBacGrade(score) {
  const note = Math.round(score / 100 * 20 * 10) / 10;
  let mention = '—';
  if (note >= 16) mention = 'Très Bien';
  else if (note >= 14) mention = 'Bien';
  else if (note >= 12) mention = 'Assez Bien';
  else if (note >= 10) mention = 'Admis';
  else mention = 'Non admis (estim.)';
  return { note, mention };
}

function computeGlobalReadiness() {
  try {
    return _computeGlobalReadinessCore();
  } catch (e) {
    console.error('computeGlobalReadiness', e);
    return _emptyGlobalReadiness();
  }
}

function _emptyProbFallback() {
  const band = { text: '—', lo: 35, hi: 45 };
  const mk = (pct, threshold, label) => ({ pct, band: band.text, label, threshold });
  return {
    pct: 40, band: '—', label: 'Données insuffisantes', color: 'var(--tx3)',
    confidence: { label: 'faible', pct: 20, level: 'low' },
    dataInsufficient: true,
    gradeEst: { note: 10, noteLow: 8, noteHigh: 12, mention: '—' },
    statCatalog: { lines: [], groups: {}, total: 0 },
    factors: [], advice: 'Joue une session QCM pour activer les stats.',
    mentions: {
      pass: mk(40, 10, 'Admis (≥ 10/20)'),
      ab: mk(25, 12, 'Assez Bien (≥ 12/20)'),
      b: mk(12, 14, 'Bien (≥ 14/20)'),
      tb: mk(5, 16, 'Très Bien (≥ 16/20)'),
    },
  };
}
function _emptyGlobalReadiness() {
  const emptyProb = _emptyProbFallback();
  const slice = (m) => ({
    score: 0, masteryAvg: 0, coverage: { pct: 0, attempted: 0, total: 0 },
    recent7: null, sessions: 0, weakCats: [], trend: { dir: 'neutral', label: 'Stable' },
    prob: emptyProb, mastery: {},
  });
  return { proc: slice('proc'), gram: slice('gram'), vocab: slice('vocab'), globalScore: 0, exoPct: null, gtextAvg: null, lastExam: null, examAvg: null, prob: emptyProb, examCount: 0 };
}

function _computeGlobalReadinessCore() {
  const proc = computeReadiness('proc');
  const gram = computeReadiness('gram');
  const vocab = STAT_CONFIG.vocab ? computeReadiness('vocab') : null;
  const exoPct = computeExoPct();

  const globalScore = Math.round(proc.score * 0.48 + gram.score * 0.37 + (vocab?.score ?? proc.score) * 0.15);
  const examHist = loadExamHistory();
  const examAvg = _weightedExamPct(examHist);
  const gtextAvg = computeGtextAvgPct();
  const probCtx = buildProbContext({
    mode: 'global',
    proc, gram,
    procBundle: proc,
    gramBundle: gram,
    vocab: vocab || _quickReadinessSlice('vocab'),
    examAvg,
    exoPct,
    gtextAvg,
    readinessScore: globalScore,
    trendDir: proc.trend.dir === 'down' || gram.trend.dir === 'down' ? 'down'
      : proc.trend.dir === 'up' && gram.trend.dir === 'up' ? 'up' : 'neutral',
  });
  const prob = estimateExamProbability(probCtx);

  return {
    proc, gram, vocab, globalScore, exoPct, gtextAvg,
    lastExam: examHist.length ? examHist[examHist.length - 1] : null,
    examAvg, prob, examCount: examHist.length,
  };
}

function renderReadinessHero(m, r) {
  const p = STAT_CONFIG[m].prefix;
  const elR = el(p + 'readiness');
  if (!elR) return;

  const trendIcon = r.trend.dir === 'up' ? '📈' : r.trend.dir === 'down' ? '📉' : '➡️';
  const circ = 2 * Math.PI * 54;
  const off = circ - (r.score / 100) * circ;

  const topFactors = (r.prob.factors || []).slice().sort((a, b) => b.weight - a.weight).slice(0, 4);
  const miniFactors = topFactors.length
    ? `<div class="rd-mini-factors">${topFactors.map(f =>
        `<div class="rd-mf"><span class="rd-mf-l">${f.icon} ${f.name}</span><span class="rd-mf-v">${f.score}%</span><div class="rtrack" style="height:3px;margin-top:3px"><div class="rfill" style="width:${f.score}%;background:${f.status === 'ok' ? 'var(--ok)' : f.status === 'mid' ? 'var(--amber)' : 'var(--er)'}"></div></div></div>`
      ).join('')}</div>`
    : '';

  elR.innerHTML = `
    <div class="rd-card">
      <div class="rd-left">
        <div class="rd-eyebrow">Indice de préparation · ${m === 'proc' ? 'Littérature' : m === 'gram' ? 'Grammaire' : 'Vocabulaire'}</div>
        <div class="rd-score-row">
          <div class="rd-gauge">
            <svg viewBox="0 0 120 120" class="rd-ring">
              <circle cx="60" cy="60" r="54" class="rd-ring-bg"/>
              <circle cx="60" cy="60" r="54" class="rd-ring-fill" style="stroke:${r.prob.color};stroke-dasharray:${circ};stroke-dashoffset:${off}"/>
            </svg>
            <div class="rd-gauge-val">${r.score}<span>/100</span></div>
          </div>
          <div class="rd-main">
            <div class="rd-prob" style="color:${r.prob.color}">${r.prob.pct}% · ${r.prob.label}</div>
            <div class="rd-prob-band">Probabilité d'<strong>admis (≥ 10/20)</strong> : fourchette <strong>${r.prob.band}</strong></div>
            <div class="rd-grade">Note estimée : <strong>${r.prob.gradeEst.noteLow}–${r.prob.gradeEst.noteHigh}/20</strong> · ${r.prob.gradeEst.mention}</div>
            <div class="rd-conf">Confiance : ${r.prob.confidence.label}${r.prob.dataInsufficient ? ' · <span style="color:var(--coral)">peu de données mesurées</span>' : ''}${r.prob.scoreAdjusted != null ? ` · indice ${r.prob.scoreAdjusted}/100` : ''}</div>
            <p class="rd-advice">${r.prob.advice}</p>
          </div>
        </div>
      </div>
      ${miniFactors}
      <div class="rd-metrics">
        <div class="rd-m"><span class="rd-mv">${r.masteryAvg}%</span><span class="rd-ml">Maîtrise</span></div>
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
          <span class="factor-name">${f.name} <span class="factor-w">(${f.weight}%)</span></span>
          <span class="factor-val">${f.value}${f.name.includes('série') ? ' j' : '%'} → +${f.contrib}</span>
        </div>
        <div class="rtrack"><div class="rfill" style="width:${Math.min(100, f.contrib / f.weight * 100)}%;background:var(--gold)"></div></div>
        ${f.note ? `<div class="factor-note">${f.note}</div>` : ''}
      </div>`).join('')}
    ${r.weakCats.length ? `<div class="factor-penalty">⚠ Malus −${Math.min(25, r.weakCats.length * 5)} pts · ${r.weakCats.length} catégorie(s) faible(s)</div>` : ''}`;
}

function renderMasteryGrid(m, r) {
  const cfg = STAT_CONFIG[m];
  const p = cfg.prefix;
  const box = el(p + 'mastery');
  if (!box) return;

  box.innerHTML = cfg.cats.map(c => {
    const x = r.mastery[c];
    const pct = x.pct !== null ? x.pct + '%' : (x.attempted > 0 ? '…' : '—');
    const prob = x.pct !== null && x.tot >= 3 ? _probFromPerformance(x.pct, x.tot, { shrinkK: 6 }) : null;
    const probLbl = prob != null ? `<span class="mastery-prob hscore ${prob >= 65 ? 'hi' : prob >= 45 ? 'mid' : 'lo'}" title="P(réussite catégorie)">${prob}%</span>` : '';
    const lvl = { excellent:'ex', good:'ok', weak:'mid', critical:'lo', partial:'mid', none:'na' }[x.level];
    const barW = x.pct != null ? x.pct : 0;
    const barOp = x.attempted > 0 ? 1 : 0.25;
    return `<div class="mastery-row">
      <div class="mastery-top">
        <span class="mastery-name">${c.length > 28 ? c.slice(0, 26) + '…' : c}</span>
        <span class="mastery-pct hscore ${lvl}">${pct}</span>
        ${probLbl}
      </div>
      <div class="mastery-sub">${x.attempted}/${x.bankSize} questions vues${x.attempted ? '' : ' · non commencé'}</div>
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
    items.push({
      pri: 'high',
      text: `Renforcer « ${c} » (${r.mastery[c].pct ?? '?'}%)`,
      action: `openQcmCat('${m}','${esc}')`,
    });
  });
  if (r.coverage.attempted < 15 && r.coverage.total > 0) {
    items.push({ pri: 'med', text: `${r.coverage.attempted} question(s) jouée(s) — continue pour affiner les stats`, action: `openQcmCat('${m}','Toutes')` });
  }
  if (r.examAvg === null) {
    items.push({ pri: 'med', text: 'Passe un examen blanc pour affiner la probabilité', action: `openExamMode('${m}')` });
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
    const mat = e.mat === 'both' ? 'Mixte' : e.mat === 'proc' ? 'Litt.' : 'Gram.';
    const time = e.timeUsed ? `${Math.floor(e.timeUsed / 60)}m${String(e.timeUsed % 60).padStart(2, '0')}s` : '—';
    return `<div class="hrow">
      <span class="hdate">${e.date}</span>
      <span class="hcat">${mat}${e.timeout ? ' ⏱' : ''}</span>
      <span class="hscore ${cls}">${e.ok}/${e.tot} · ${e.pct}%</span>
      <span style="font-size:10px;color:var(--tx3)">${time}</span>
    </div>`;
  }).join('');
}

function renderExamProbabilityPanel(m, prob) {
  const boxId = m === 'global' ? 'gexamprob-global' : STAT_CONFIG[m].prefix + 'examprob';
  const box = el(boxId);
  if (!box || !prob) return;

  const confCls = prob.confidence.level === 'high' ? 'ep-conf-hi' : prob.confidence.level === 'mid' ? 'ep-conf-mid' : 'ep-conf-lo';
  const mentionRows = ['pass', 'ab', 'b', 'tb'].map(k => {
    const mn = prob.mentions[k];
    const barW = mn.pct;
    const cls = mn.pct >= 70 ? 'hi' : mn.pct >= 45 ? 'mid' : 'lo';
    return `<div class="ep-mention-row">
      <div class="ep-mention-top">
        <span class="ep-mention-label">${mn.label}</span>
        <span class="ep-mention-pct hscore ${cls}">${mn.pct}%</span>
      </div>
      <div class="rtrack ep-mention-track"><div class="rfill" style="width:${barW}%;background:${prob.color}"></div></div>
      <div class="ep-mention-band">Fourchette : ${mn.band}</div>
    </div>`;
  }).join('');

  const renderFactorRow = f => `
    <div class="ep-factor-row ep-factor-${f.status}">
      <div class="ep-factor-top">
        <span class="ep-factor-name">${f.icon} ${f.name} <span class="ep-factor-w">${f.weight}%</span></span>
        <span class="ep-factor-score hscore ${f.status === 'ok' ? 'hi' : f.status === 'mid' ? 'mid' : 'lo'}">${f.score}% → +${f.contrib}</span>
      </div>
      <div class="rtrack ep-factor-track"><div class="rfill" style="width:${f.score}%;background:${f.status === 'ok' ? 'var(--ok)' : f.status === 'mid' ? 'var(--amber)' : 'var(--er)'}"></div></div>
      <div class="ep-factor-detail">${f.detail}</div>
    </div>`;

  const groupTitles = { pilliers: 'Piliers de préparation', methodes: 'Méthodes & écrit', modulateurs: 'Modulateurs' };
  let factorsHtml = '';
  if (prob.factorGroups) {
    ['pilliers', 'methodes', 'modulateurs'].forEach(gk => {
      const list = prob.factorGroups[gk];
      if (!list || !list.length) return;
      factorsHtml += `<div class="ep-factor-group"><div class="ep-section-title">${groupTitles[gk]}</div>${list.map(renderFactorRow).join('')}</div>`;
    });
  } else if (prob.factors) {
    factorsHtml = prob.factors.map(renderFactorRow).join('');
  }

  const adjHtml = prob.adjustments && prob.adjustments.length
    ? `<div class="ep-adjust">${prob.adjustments.map(a =>
        `<span class="ep-adj-item">${a.delta > 0 ? '+' : ''}${a.delta} · ${a.text}</span>`
      ).join('')}</div>`
    : '';

  const scoreBreakHtml = prob.scoreRaw != null
    ? `<div class="ep-score-break">Indice facteurs : <strong>${prob.scoreRaw}/100</strong>${adjHtml ? ' · ajustements' : ''} → score effectif <strong>${prob.scoreAdjusted}/100</strong></div>${adjHtml}`
    : '';

  const blockersHtml = prob.blockers.length
    ? `<div class="ep-blockers">${prob.blockers.map(b =>
        `<div class="ep-blocker">${b.text}${b.action ? ` <button class="sbtn" style="font-size:10px;margin-left:6px" ${htmlOnclickAttr(b.action)}>Agir</button>` : ''}</div>`
      ).join('')}</div>`
    : '';

  const scenariosHtml = prob.scenarios.length
    ? `<div class="ep-scenarios">${prob.scenarios.map(s =>
        `<div class="ep-scenario"><span>${s.text}</span><span class="ep-scenario-gain">${s.gain}</span></div>`
      ).join('')}</div>`
    : '';

  const statGridHtml = prob.statCatalog && getProbSettings().showCatalogGrid
    ? renderStatProbabilityGridHtml(prob.statCatalog)
    : '';

  box.innerHTML = `
    <div class="ep-panel">
      <div class="ep-head">
        <div>
          <div class="ep-title">Probabilité de réussite à l'examen</div>
          <div class="ep-sub">Proba admis calibrée sur QCM · examens · textes · exos (données localStorage) · pas de score inventé</div>
        </div>
        <div class="ep-conf ${confCls}" title="Fiabilité selon le volume de données">${prob.confidence.pct}% confiance</div>
      </div>
      <div class="ep-hero">
        <div class="ep-main-pct" style="color:${prob.color}">${prob.pct}<span>%</span></div>
        <div class="ep-main-info">
          <div class="ep-main-label">${prob.label} · admis ≥ 10/20</div>
          <div class="ep-main-band">Fourchette <strong>${prob.band}</strong> · note estimée <strong>${prob.gradeEst.noteLow}–${prob.gradeEst.noteHigh}/20</strong> (${prob.gradeEst.mention})</div>
          ${scoreBreakHtml}
          <p class="rd-advice">${prob.advice}</p>
        </div>
      </div>
      <div class="ep-grid ep-grid-wide">
        <div class="ep-col">
          <div class="ep-section-title">Probabilités par mention</div>
          ${mentionRows}
        </div>
        <div class="ep-col ep-col-factors">
          <div class="ep-section-title">Décomposition par facteur (poids × score)</div>
          ${factorsHtml || '<div class="no-data">Pas assez de données.</div>'}
          ${blockersHtml}
          <div class="ep-section-title" style="margin-top:1rem">Leviers prioritaires</div>
          ${scenariosHtml || '<div class="ep-scenario ep-scenario-ok">Profil équilibré.</div>'}
        </div>
      </div>
      ${statGridHtml}
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
  const circ = 2 * Math.PI * 62;
  const off = circ - (g.globalScore / 100) * circ;

  box.innerHTML = `
    <div class="bac-dash">
      <div class="bac-dash-head">
        <div class="bac-dash-head-text">
          <h2>${typeof getSetting === 'function' && getSetting('profileEmoji') ? getSetting('profileEmoji') + ' ' : ''}Tableau de bord <em>Bac</em>${typeof getSetting === 'function' && getSetting('userName') ? ` · ${getSetting('userName')}` : ''}</h2>
          <p>${typeof getSetting === 'function' && getSetting('profileGoal') ? getSetting('profileGoal') + ' · ' : ''}Indice global Littérature (48 %) + Grammaire (37 %) + Vocabulaire (15 %) · probabilités calibrées sur tes données</p>
        </div>
        <button type="button" class="sbtn bac-dash-reset" onclick="resetStats()" title="Réinitialiser QCM, examens, textes, exercices…">🔄 Reset stats</button>
      </div>
      <div class="bac-dash-body">
        <div class="bac-dash-gauge">
          <svg viewBox="0 0 140 140"><circle cx="70" cy="70" r="62" class="rd-ring-bg"/><circle cx="70" cy="70" r="62" class="rd-ring-fill" style="stroke:${g.prob.color};stroke-dasharray:${circ};stroke-dashoffset:${off}"/></svg>
          <div class="bac-dash-val">${g.globalScore}</div>
        </div>
        <div class="bac-dash-info">
          <div class="rd-prob" style="color:${g.prob.color};font-size:1.3rem">${g.prob.pct}% · ${g.prob.label}</div>
          <div class="rd-prob-band">Admis (≥ 10/20) : fourchette <strong>${g.prob.band}</strong></div>
          <div class="rd-grade">Note estimée : <strong>${g.prob.gradeEst.noteLow}–${g.prob.gradeEst.noteHigh}/20</strong> · ${g.prob.gradeEst.mention}</div>
          <div class="rd-conf">Confiance : ${g.prob.confidence.label}${g.prob.dataInsufficient ? ' · peu de données mesurées' : ''}${g.prob.recoverable?.performance?.length ? ` · ${g.prob.recoverable.performance.length} signal(aux) réel(s)` : ''}</div>
          <div class="bac-split">
            <span>📖 Litt. <b>${g.proc.score}</b>/100</span>
            <span>✍️ Gram. <b>${g.gram.score}</b>/100</span>
            ${g.vocab ? `<span>📝 Voc. <b>${g.vocab.score}</b>/100</span>` : ''}
            ${g.exoPct !== null ? `<span>🔍 Exos <b>${g.exoPct}%</b></span>` : ''}
            ${g.gtextAvg !== null ? `<span>📜 Textes <b>${Math.round(g.gtextAvg / 100 * 20 * 10) / 10}/20</b></span>` : ''}
            <span>🏆 Examens <b>${g.examCount}</b>${g.examAvg != null ? ` · moy. ${g.examAvg}%` : ''}</span>
            ${g.prob.statCatalog ? `<span>📊 Stats <b>${g.prob.statCatalog.total}</b> dims.</span>` : ''}
          </div>
          <p class="rd-advice">${g.prob.advice}</p>
          ${typeof renderTimeStatsCompact === 'function' ? renderTimeStatsCompact() : ''}
        </div>
      </div>
    </div>`;

  renderExamProbabilityPanel('global', g.prob);
  renderStatProbabilityHub();

  const navBadge = el('readiness-nav');
  if (navBadge) {
    if (typeof getSetting === 'function' && !getSetting('showNavReadiness')) {
      navBadge.style.display = 'none';
    } else {
      navBadge.textContent = `${g.prob.pct}%`;
      navBadge.title = `Proba admis : ${g.prob.band} · ${g.prob.label}`;
      navBadge.style.display = '';
      navBadge.style.borderColor = g.prob.color;
      navBadge.style.color = g.prob.color;
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
  renderExamProbabilityPanel(m, r.prob);
  renderFactors(m, r);
  renderMasteryGrid(m, r);
  renderRecommend(m, r);
  renderExamHistoryPanel(m, r);
  return r;
}
