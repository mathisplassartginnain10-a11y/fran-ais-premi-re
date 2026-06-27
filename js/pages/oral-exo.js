/* oral-exo.js — Simulation oral complète · timer 30 min · IPCI · comparaison corrigé */

const ORAL_EXO_STATE = {
  activeId: null,
  entries: [],
  phase: 'idle',
  timerEnd: null,
  timerIv: null,
  timerPaused: false,
  pausedRemaining: null,
  compareView: 'table',
  lastResult: null,
};

const ORAL_EXO_CFG = {
  maxEntries: 32,
  get timerSec() {
    return typeof ORAL_EXO_TIMER_SEC !== 'undefined' ? ORAL_EXO_TIMER_SEC : 1800;
  },
};

function oralExoDraftKey(id) { return `oral_exo_draft_${id}`; }
function oralExoHistKey(id) { return `oral_exo_hist_${id}`; }

function oralExoLoadDraft(id) {
  try {
    const raw = localStorage.getItem(oralExoDraftKey(id));
    if (!raw) return { entries: [], timerEnd: null, timerPaused: false, pausedRemaining: null };
    return JSON.parse(raw);
  } catch (e) { return { entries: [], timerEnd: null, timerPaused: false, pausedRemaining: null }; }
}

function oralExoSaveDraft(id, data) {
  try { localStorage.setItem(oralExoDraftKey(id), JSON.stringify(data)); } catch (e) {}
}

function oralExoClearDraft(id) {
  try { localStorage.removeItem(oralExoDraftKey(id)); } catch (e) {}
}

function oralExoLoadStats() {
  try { return JSON.parse(localStorage.getItem('bac_oral_exo_stats') || '{}'); }
  catch (e) { return {}; }
}

function oralExoLoadHistory(id) {
  try { return JSON.parse(localStorage.getItem(oralExoHistKey(id)) || '[]'); }
  catch (e) { return []; }
}

function oralExoPushHistory(id, record) {
  try {
    const hist = oralExoLoadHistory(id);
    hist.unshift(record);
    localStorage.setItem(oralExoHistKey(id), JSON.stringify(hist.slice(0, 12)));
  } catch (e) {}
}

function oralExoSaveStat(id, est, extra) {
  try {
    const st = oralExoLoadStats();
    const prev = st[id];
    st[id] = {
      note: est.note,
      mention: est.mention,
      scorePct: est.scorePct,
      covered: est.covered,
      targetCount: est.targetCount,
      procPts: est.procPts,
      citePts: est.citePts,
      interpPts: est.interpPts,
      attempts: (prev?.attempts || 0) + 1,
      bestNote: prev?.bestNote != null ? Math.max(prev.bestNote, est.note) : est.note,
      date: Date.now(),
      ...extra,
    };
    localStorage.setItem('bac_oral_exo_stats', JSON.stringify(st));
  } catch (e) {}
}

function oralExoComputeGlobalStats() {
  if (typeof ORAL_TEXTS === 'undefined') return null;
  const st = oralExoLoadStats();
  const texts = typeof oralGetAllTexts === 'function' ? oralGetAllTexts() : ORAL_TEXTS;
  const ids = texts.map(t => t.id);
  const done = ids.filter(id => st[id]?.note != null);
  const notes = done.map(id => st[id].note);
  const avg = notes.length ? Math.round(notes.reduce((a, b) => a + b, 0) / notes.length * 10) / 10 : null;
  const best = notes.length ? Math.max(...notes) : null;
  const totalAtt = texts.reduce((s, t) => s + (t.attenduCount || t.attendus?.length || 0), 0);
  const drafts = ids.filter(id => {
    try { return !!localStorage.getItem(oralExoDraftKey(id)); } catch (e) { return false; }
  }).length;
  return { done: done.length, total: ids.length, avg, best, totalAtt, drafts };
}

function oralWithMaxEntries(fn) {
  if (typeof GTEXT_GRADE_CFG === 'undefined') return fn();
  const prev = GTEXT_GRADE_CFG.maxEntries;
  GTEXT_GRADE_CFG.maxEntries = ORAL_EXO_CFG.maxEntries;
  try { return fn(); } finally { GTEXT_GRADE_CFG.maxEntries = prev; }
}

function oralExoFormatTimer(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function oralExoStopTimer() {
  if (ORAL_EXO_STATE.timerIv) {
    clearInterval(ORAL_EXO_STATE.timerIv);
    ORAL_EXO_STATE.timerIv = null;
  }
}

function oralExoTimerRemaining() {
  if (ORAL_EXO_STATE.timerPaused && ORAL_EXO_STATE.pausedRemaining != null) {
    return ORAL_EXO_STATE.pausedRemaining;
  }
  if (!ORAL_EXO_STATE.timerEnd) return ORAL_EXO_CFG.timerSec;
  return Math.max(0, Math.ceil((ORAL_EXO_STATE.timerEnd - Date.now()) / 1000));
}

function oralExoUpdateTimerUi() {
  const box = el('oral-exo-timer');
  if (!box) return;
  const rem = oralExoTimerRemaining();
  box.textContent = (ORAL_EXO_STATE.timerPaused ? '⏸ ' : '') + oralExoFormatTimer(rem);
  box.classList.toggle('oral-exo-timer-warn', !ORAL_EXO_STATE.timerPaused && rem > 0 && rem <= 300);
  box.classList.toggle('oral-exo-timer-done', rem <= 0);
  box.classList.toggle('oral-exo-timer-paused', ORAL_EXO_STATE.timerPaused);
}

function oralExoStartTimer(id) {
  oralExoStopTimer();
  const draft = oralExoLoadDraft(id);
  if (draft.timerPaused && draft.pausedRemaining != null) {
    ORAL_EXO_STATE.timerPaused = true;
    ORAL_EXO_STATE.pausedRemaining = draft.pausedRemaining;
    ORAL_EXO_STATE.timerEnd = null;
  } else if (draft.timerEnd && draft.timerEnd > Date.now()) {
    ORAL_EXO_STATE.timerEnd = draft.timerEnd;
    ORAL_EXO_STATE.timerPaused = false;
    ORAL_EXO_STATE.pausedRemaining = null;
  } else {
    ORAL_EXO_STATE.timerEnd = Date.now() + ORAL_EXO_CFG.timerSec * 1000;
    ORAL_EXO_STATE.timerPaused = false;
    ORAL_EXO_STATE.pausedRemaining = null;
  }
  oralExoUpdateTimerUi();
  ORAL_EXO_STATE.timerIv = setInterval(() => {
    if (ORAL_EXO_STATE.timerPaused) return;
    oralExoUpdateTimerUi();
    if (oralExoTimerRemaining() <= 0) {
      oralExoStopTimer();
      if (ORAL_EXO_STATE.phase === 'work') oralExoSubmit(true);
    }
  }, 1000);
}

function oralExoTogglePause() {
  if (ORAL_EXO_STATE.phase !== 'work') return;
  if (ORAL_EXO_STATE.timerPaused) {
    ORAL_EXO_STATE.timerEnd = Date.now() + (ORAL_EXO_STATE.pausedRemaining || 0) * 1000;
    ORAL_EXO_STATE.timerPaused = false;
    ORAL_EXO_STATE.pausedRemaining = null;
  } else {
    ORAL_EXO_STATE.pausedRemaining = oralExoTimerRemaining();
    ORAL_EXO_STATE.timerPaused = true;
  }
  oralExoPersistDraft();
  oralExoUpdateTimerUi();
}

function oralExoPersistDraft() {
  const id = ORAL_EXO_STATE.activeId;
  if (!id) return;
  oralExoSaveDraft(id, {
    entries: ORAL_EXO_STATE.entries,
    timerEnd: ORAL_EXO_STATE.timerEnd,
    timerPaused: ORAL_EXO_STATE.timerPaused,
    pausedRemaining: ORAL_EXO_STATE.pausedRemaining,
  });
}

function oralExoPickLine(node) {
  const cite = el('oral-exo-cite');
  if (!cite || !node) return;
  const txt = node.dataset.text || node.querySelector('.oral-texte-words')?.textContent || node.textContent || '';
  const trimmed = txt.trim();
  if (!trimmed) return;
  cite.value = trimmed.length > 120 ? `${trimmed.slice(0, 117)}…` : trimmed;
  cite.focus();
  node.classList.add('oral-texte-line-picked');
  setTimeout(() => node.classList.remove('oral-texte-line-picked'), 900);
  const num = node.querySelector('.oral-texte-num')?.textContent || node.querySelector('.oral-passage-num')?.textContent?.replace('L.', '') || '?';
  if (typeof toast === 'function') toast(`Citation · L.${num}`);
}

function oralExoValidate(entries, attendus, texte) {
  if (typeof gtextValidateUserEntries !== 'function') return [];
  return oralWithMaxEntries(() => gtextValidateUserEntries(entries, attendus, texte));
}

function oralExoScoreAll(t) {
  if (!t?.attendus?.length || !ORAL_EXO_STATE.entries.length) return [];
  return oralExoValidate(ORAL_EXO_STATE.entries, t.attendus, t.texte);
}

function oralExoLiveScore(proc, cite, interp, attendus, texte) {
  if (!(proc || '').trim() || typeof gtextValidateUserEntries !== 'function') return null;
  const rows = oralWithMaxEntries(() => gtextValidateUserEntries(
    [{ procede: proc, citation: cite || '', interpretation: interp || '' }],
    attendus,
    texte,
  ));
  return rows[0] || null;
}

function oralExoRenderScoredEntry(r, i) {
  if (typeof gtextRenderWorkEntry === 'function') {
    return gtextRenderWorkEntry(r, i).replace(/gtextRemoveEntry/g, 'oralExoRemoveEntry');
  }
  return `<article class="oral-exo-entry"><strong>${i + 1}. ${oralEsc(r.entry.procede)}</strong></article>`;
}

function oralExoEstimate(scored, attendus) {
  if (typeof gtextEstimateGrade !== 'function') {
    return { note: 0, mention: '—', scorePct: 0, totalPts: 0, maxPts: 1, covered: 0, targetCount: 1, procPts: 0, citePts: 0, interpPts: 0, full: 0, partial: 0, entryCount: scored.length, countedCount: 0, avgInterp: 0 };
  }
  return oralWithMaxEntries(() => gtextEstimateGrade(scored, attendus));
}

function oralExoScoreByMouvement(scored, t) {
  const groups = t.attendusByMouvement || [];
  if (!groups.length) return [];
  const byAtt = new Map();
  scored.forEach(r => {
    if (r.attenduIdx != null && r.attenduIdx >= 0 && r.procOk) {
      const cur = byAtt.get(r.attenduIdx);
      if (!cur || r.points > cur.points) byAtt.set(r.attenduIdx, r);
    }
  });
  return groups.map(g => {
    const total = g.items.length;
    let found = 0;
    let pts = 0;
    g.items.forEach((item) => {
      const globalIdx = t.attendus.indexOf(item);
      const u = byAtt.get(globalIdx);
      if (u?.procOk) found += 1;
      if (u) pts += u.points;
    });
    const pct = total ? Math.round(found / total * 100) : 0;
    return { title: g.title, total, found, pts: Math.round(pts * 100) / 100, pct };
  });
}

function oralExoRenderProbPanel(est, scored, t) {
  const gc = typeof gtextGradeClass === 'function' ? gtextGradeClass(est.note) : (est.note >= 10 ? 'mid' : 'lo');
  const mentions = typeof computeGtextMentionProbs === 'function'
    ? computeGtextMentionProbs(est.note, oralExoLoadHistory(t.id).length || 1)
    : null;
  const probPass = typeof _probFromNote20 === 'function' ? _probFromNote20(est.note, oralExoLoadHistory(t.id).length || 1) : null;
  const ps = typeof getProbSettings === 'function' ? getProbSettings() : { shrinkKGtext: 4 };
  const global = oralExoComputeGlobalStats();
  const st = oralExoLoadStats()[t.id];

  const ipci = [
    { l: 'Procédés P', pts: est.procPts, max: Math.round(est.targetCount * 0.5 * 100) / 100, prob: _probFromPerformance?.(Math.round(est.procPts / Math.max(est.targetCount * 0.5, 0.1) * 100), 1, { shrinkK: ps.shrinkKGtext }) },
    { l: 'Citations C', pts: est.citePts, max: Math.round(est.targetCount * 0.25 * 100) / 100, prob: _probFromPerformance?.(Math.round(est.citePts / Math.max(est.targetCount * 0.25, 0.1) * 100), 1, { shrinkK: ps.shrinkKGtext }) },
    { l: 'Interpr. I', pts: est.interpPts, max: Math.round(est.targetCount * 0.25 * 100) / 100, prob: _probFromPerformance?.(Math.round(est.interpPts / Math.max(est.targetCount * 0.25, 0.1) * 100), 1, { shrinkK: ps.shrinkKGtext }) },
  ].map(x => {
    const pct = x.max > 0 ? Math.round(x.pts / x.max * 100) : 0;
    const cls = pct >= 68 ? 'hi' : pct >= 45 ? 'mid' : 'lo';
    return `<div class="gtext-prob-item oral-exo-ipci-${cls}">
      <span>${x.l}</span>
      <strong>${x.prob ?? '—'}${x.prob != null ? '%' : ''}</strong>
      <span>${x.pts}/${x.max} · ${pct}%</span>
    </div>`;
  }).join('');

  const mentionRows = mentions ? [
    { l: 'Admis ≥10/20', v: mentions.pass },
    { l: 'Assez Bien ≥12', v: mentions.ab },
    { l: 'Bien ≥14', v: mentions.b },
    { l: 'Très Bien ≥16', v: mentions.tb },
  ].map(r => {
    const cls = r.v >= 70 ? 'hi' : r.v >= 45 ? 'mid' : 'lo';
    return `<div class="gtext-prob-mention-row"><span>${r.l}</span><strong class="hscore ${cls}">${r.v}%</strong></div>`;
  }).join('') : '';

  const movScores = oralExoScoreByMouvement(scored, t);
  const movHtml = movScores.length ? `
    <div class="oral-exo-mov-scores">
      <div class="oral-exo-mov-title">Par mouvement du corrigé</div>
      ${movScores.map(m => `
        <div class="oral-exo-mov-row">
          <span class="oral-exo-mov-label">${oralEsc(m.title)}</span>
          <span class="oral-exo-mov-bar-wrap"><span class="oral-exo-mov-bar" style="width:${m.pct}%"></span></span>
          <span class="oral-exo-mov-pct">${m.found}/${m.total}</span>
        </div>`).join('')}
    </div>` : '';

  const blockers = [];
  if (est.procPts < est.targetCount * 0.35) blockers.push('Repère davantage de procédés du corrigé');
  if (est.citePts < est.targetCount * 0.15) blockers.push('Cite les mots exacts du passage (clic sur une ligne)');
  if (est.interpPts < est.targetCount * 0.15) blockers.push('Développe l\'effet : registre, sens, lecteur');
  if (est.full < est.covered) blockers.push(`${est.covered - est.full} analyse(s) incomplète(s) (P+C+I)`);

  return `
    <div class="gtext-prob-panel gtext-prob-panel-full oral-exo-prob-panel">
      <div class="gtext-prob-head">Résultat simulation oral · IPCI</div>
      <div class="gtext-prob-main">
        <div class="gtext-prob-main-note ${gc}">${est.note}<span>/20</span></div>
        <div class="gtext-prob-main-meta">
          <strong>${oralEsc(est.mention)}</strong>
          <span>P(≥10) ${probPass ?? '—'}${probPass != null ? '%' : ''} · ${est.covered}/${est.targetCount} proc. corrigé · ${est.entryCount} saisies</span>
          ${st?.bestNote != null && st.bestNote !== est.note ? `<span>Record perso : ${st.bestNote}/20</span>` : ''}
          ${global ? `<span>Parcours : ${global.done}/${global.total} textes · moy. ${global.avg ?? '—'}/20</span>` : ''}
        </div>
      </div>
      <div class="gtext-prob-grid">${ipci}</div>
      ${mentionRows ? `<div class="gtext-prob-mentions-wrap">${mentionRows}</div>` : ''}
      ${movHtml}
      ${blockers.length ? `<ul class="gtext-prob-blockers">${blockers.slice(0, 4).map(b => `<li>${oralEsc(b)}</li>`).join('')}</ul>` : ''}
    </div>`;
}

function oralAttIndex(attendus, item) {
  if (!item || !attendus?.length) return -1;
  const i = attendus.indexOf(item);
  if (i >= 0) return i;
  return attendus.findIndex(a =>
    a.procede === item.procede && a.citation === item.citation && a.mouvement === item.mouvement,
  );
}

function oralExoRenderTracker(t, scored) {
  const attendus = t.attendus || [];
  if (!attendus.length) return '';
  const foundIdx = new Set(scored.filter(r => r.procOk && r.attenduIdx != null && r.attenduIdx >= 0).map(r => r.attenduIdx));
  const groups = t.attendusByMouvement?.length
    ? t.attendusByMouvement
    : [{ title: 'Analyse', items: attendus }];

  const movHtml = groups.map(g => {
    const items = g.items.map(it => ({ att: it, idx: oralAttIndex(attendus, it) }));
    const found = items.filter(x => x.idx >= 0 && foundIdx.has(x.idx)).length;
    const pct = items.length ? Math.round(found / items.length * 100) : 0;
    const chips = items.filter(x => x.idx >= 0 && foundIdx.has(x.idx)).map(x => {
      const r = scored.find(s => s.attenduIdx === x.idx && s.procOk);
      const cls = r?.valid ? 'ok' : 'partial';
      return `<span class="oral-track-chip oral-track-${cls}" title="${oralEsc(x.att.procede)}">${oralEsc(x.att.procede.length > 28 ? x.att.procede.slice(0, 26) + '…' : x.att.procede)}</span>`;
    }).join('');
    return `<div class="oral-track-mov">
      <div class="oral-track-mov-head"><span>${oralEsc(g.title)}</span><strong>${found}/${items.length}</strong></div>
      <div class="oral-track-bar"><span style="width:${pct}%"></span></div>
      ${chips ? `<div class="oral-track-chips">${chips}</div>` : '<span class="oral-muted oral-track-empty">Aucun procédé repéré dans ce mouvement</span>'}
    </div>`;
  }).join('');

  const remain = attendus.length - foundIdx.size;
  return `
    <section class="oral-block oral-block-tracker">
      <h3>Repérage · ${foundIdx.size}/${attendus.length} procédés du corrigé</h3>
      <p class="gtext-hint">${remain > 0 ? `${remain} procédé${remain > 1 ? 's' : ''} non repéré${remain > 1 ? 's' : ''} — liste complète après validation.` : 'Tu as couvert tous les procédés du corrigé !'}</p>
      <div class="oral-track-grid">${movHtml}</div>
    </section>`;
}

function oralExoRenderLiveGrade(t, scored) {
  if (!scored.length || typeof gtextEstimateGrade !== 'function') return '';
  const est = oralWithMaxEntries(() => gtextEstimateGrade(scored, t.attendus));
  const gc = typeof gtextGradeClass === 'function' ? gtextGradeClass(est.note) : 'mid';
  const prob = typeof _probFromNote20 === 'function'
    ? _probFromNote20(est.note, Math.max(ORAL_EXO_STATE.entries.length, 1))
    : null;
  return `
    <div class="oral-exo-live-grade ${gc}">
      <span class="oral-exo-live-label">Note provisoire</span>
      <strong class="oral-exo-live-note">${est.note}<span>/20</span></strong>
      <span class="oral-exo-live-meta">${oralEsc(est.mention)} · ${est.covered}/${est.targetCount} proc. · P ${est.procPts} C ${est.citePts} I ${est.interpPts}${prob != null ? ` · P(≥10) ${prob}%` : ''}</span>
    </div>`;
}

function oralExoHighlightCitedLines() {
  document.querySelectorAll('.oral-texte-line.oral-texte-cited').forEach(n => n.classList.remove('oral-texte-cited'));
  const cite = el('oral-exo-cite')?.value?.trim();
  if (!cite) return;
  const norm = typeof gtextNorm === 'function' ? gtextNorm(cite) : cite.toLowerCase();
  const words = norm.split(' ').filter(w => w.length >= 4);
  if (!words.length) return;
  document.querySelectorAll('.oral-texte-line[data-text]').forEach(line => {
    const txt = typeof gtextNorm === 'function' ? gtextNorm(line.dataset.text || '') : (line.dataset.text || '').toLowerCase();
    const hits = words.filter(w => txt.includes(w)).length;
    if (hits >= 1 && (words.length === 1 || hits >= 2)) line.classList.add('oral-texte-cited');
  });
}

function oralExoApplyPassageHighlights(scored) {
  document.querySelectorAll('.oral-texte-line.oral-texte-found').forEach(n => n.classList.remove('oral-texte-found'));
  if (!scored?.length || typeof gtextNorm !== 'function') return;
  scored.filter(r => r.citeOk || r.procOk).forEach(r => {
    const cite = r.entry?.citation;
    if (!cite?.trim()) return;
    const words = gtextNorm(cite).split(' ').filter(w => w.length >= 4);
    if (!words.length) return;
    document.querySelectorAll('.oral-texte-line[data-text]').forEach(line => {
      const txt = gtextNorm(line.dataset.text || '');
      const hits = words.filter(w => txt.includes(w)).length;
      if (hits >= 1 && (words.length === 1 || hits >= 2)) line.classList.add('oral-texte-found');
    });
  });
}

function oralExoCompareMaps(scored, attendus) {
  const byAtt = new Map();
  scored.forEach(r => {
    if (r.attenduIdx != null && r.attenduIdx >= 0 && r.procOk) {
      const cur = byAtt.get(r.attenduIdx);
      if (!cur || r.points > cur.points) byAtt.set(r.attenduIdx, r);
    }
  });
  return { byAtt };
}

function oralExoCompareGroups(scored, attendus, t) {
  const { byAtt } = oralExoCompareMaps(scored, attendus);
  const groups = t?.attendusByMouvement?.length
    ? t.attendusByMouvement.map(g => ({
      title: g.title,
      items: g.items.map(it => ({ att: it, idx: oralAttIndex(attendus, it) })),
    }))
    : [{ title: 'Analyse', items: (attendus || []).map((att, idx) => ({ att, idx })) }];
  return { byAtt, groups };
}

function oralExoRowMeta(itemOrIdx, attendus, byAtt) {
  const item = itemOrIdx?.att ?? itemOrIdx;
  const i = itemOrIdx?.idx != null && itemOrIdx.idx >= 0 ? itemOrIdx.idx : oralAttIndex(attendus, item);
  const u = byAtt.get(i);
  const cls = u?.valid ? 'ok' : u?.procOk ? 'partial' : 'miss';
  const stat = u?.valid ? '✓ Complet' : u?.procOk ? '○ Partiel' : '— Manqué';
  const pts = u && typeof gtextScoreBreakdownHtml === 'function' ? gtextScoreBreakdownHtml(u) : '';
  return { i, u, cls, stat, pts };
}

function oralExoCompareTable(scored, attendus, t) {
  const { byAtt, groups } = oralExoCompareGroups(scored, attendus, t);

  let html = '';
  groups.forEach(grp => {
    const rows = grp.items.map(wrap => {
      const item = wrap.att ?? wrap;
      const { u, cls, stat, pts } = oralExoRowMeta(wrap, attendus, byAtt);
      return `<tr class="oral-cmp-row oral-cmp-${cls}">
        <td data-label="Statut">${stat}${pts ? `<div class="oral-cmp-pts">${pts}</div>` : ''}</td>
        <td data-label="Procédé (corrigé)"><strong>${oralEsc(item.procede)}</strong></td>
        <td data-label="Citation (corrigé)"><cite>${oralEsc(item.citation)}</cite></td>
        <td data-label="Interprétation (corrigé)" class="oral-cmp-model">${oralEsc(item.interpretation)}</td>
        <td data-label="Ton procédé">${u ? oralEsc(u.entry.procede) : '<span class="oral-muted">—</span>'}</td>
        <td data-label="Ta citation">${u?.entry?.citation ? oralEsc(u.entry.citation) : '<span class="oral-muted">—</span>'}</td>
        <td data-label="Ton interprétation">${u && typeof gtextGetInterpText === 'function' ? oralEsc(gtextGetInterpText(u.entry)) : '<span class="oral-muted">—</span>'}</td>
      </tr>`;
    }).join('');

    html += `
      <details class="oral-cmp-mouvement" open>
        <summary>${oralEsc(grp.title)} <span class="oral-cmp-mov-count">${grp.items.length} procédé${grp.items.length > 1 ? 's' : ''}</span></summary>
        <div class="oral-cmp-wrap">
          <table class="oral-cmp-table">
            <thead><tr>
              <th>Statut</th><th>Procédé corrigé</th><th>Citation</th><th>Interprétation modèle</th>
              <th>Ton procédé</th><th>Ta citation</th><th>Ton interprétation</th>
            </tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </details>`;
  });

  const extra = scored.filter(r => r.attenduIdx == null || r.attenduIdx < 0 || !r.procOk);
  if (extra.length) {
    html += `<details class="oral-cmp-mouvement"><summary>Tes propositions hors corrigé <span class="oral-cmp-mov-count">${extra.length}</span></summary>
      <div class="oral-cmp-wrap"><table class="oral-cmp-table"><tbody>
      ${extra.map(r => `<tr class="oral-cmp-row oral-cmp-extra">
        <td data-label="Statut">${r.procOk ? 'Extra validé' : 'Non retenu'}</td>
        <td colspan="3"><span class="oral-muted">—</span></td>
        <td data-label="Ton procédé"><strong>${oralEsc(r.entry.procede)}</strong></td>
        <td data-label="Ta citation">${r.entry.citation ? oralEsc(r.entry.citation) : '—'}</td>
        <td data-label="Ton interprétation">${oralEsc(typeof gtextGetInterpText === 'function' ? gtextGetInterpText(r.entry) : r.entry.interpretation || '')}</td>
      </tr>`).join('')}
      </tbody></table></div></details>`;
  }

  return html;
}

function oralExoCompareCards(scored, attendus, t) {
  const { byAtt, groups } = oralExoCompareGroups(scored, attendus, t);

  let html = '';
  groups.forEach(grp => {
    const cards = grp.items.map(wrap => {
      const item = wrap.att ?? wrap;
      const { u, cls, stat, pts } = oralExoRowMeta(wrap, attendus, byAtt);
      const userInterp = u && typeof gtextGetInterpText === 'function' ? gtextGetInterpText(u.entry) : '';
      return `<article class="oral-cmp-card oral-cmp-${cls}">
        <header class="oral-cmp-card-head"><span class="oral-cmp-card-stat">${stat}</span>${pts ? `<span class="oral-cmp-pts">${pts}</span>` : ''}</header>
        <div class="oral-cmp-card-cols">
          <div class="oral-cmp-card-col oral-cmp-card-model">
            <span class="oral-cmp-card-label">Corrigé</span>
            <strong>${oralEsc(item.procede)}</strong>
            <cite>« ${oralEsc(item.citation)} »</cite>
            <p>${oralEsc(item.interpretation)}</p>
          </div>
          <div class="oral-cmp-card-col oral-cmp-card-you">
            <span class="oral-cmp-card-label">Toi</span>
            ${u ? `<strong>${oralEsc(u.entry.procede)}</strong>
            ${u.entry.citation ? `<cite>« ${oralEsc(u.entry.citation)} »</cite>` : '<cite class="oral-muted">Citation manquante</cite>'}
            <p>${userInterp ? oralEsc(userInterp) : '<span class="oral-muted">—</span>'}</p>` : '<p class="oral-muted">Procédé non repéré</p>'}
          </div>
        </div>
      </article>`;
    }).join('');

    html += `<details class="oral-cmp-mouvement" open>
      <summary>${oralEsc(grp.title)} <span class="oral-cmp-mov-count">${grp.items.length} procédé${grp.items.length > 1 ? 's' : ''}</span></summary>
      <div class="oral-cmp-cards">${cards}</div>
    </details>`;
  });

  const extra = scored.filter(r => r.attenduIdx == null || r.attenduIdx < 0 || !r.procOk);
  if (extra.length) {
    html += `<details class="oral-cmp-mouvement"><summary>Propositions hors corrigé <span class="oral-cmp-mov-count">${extra.length}</span></summary>
      <div class="oral-cmp-cards">${extra.map(r => `<article class="oral-cmp-card oral-cmp-extra">
        <header class="oral-cmp-card-head"><span class="oral-cmp-card-stat">${r.procOk ? 'Extra' : 'Non retenu'}</span></header>
        <div class="oral-cmp-card-col"><strong>${oralEsc(r.entry.procede)}</strong>
        ${r.entry.citation ? `<cite>« ${oralEsc(r.entry.citation)} »</cite>` : ''}
        <p>${oralEsc(typeof gtextGetInterpText === 'function' ? gtextGetInterpText(r.entry) : r.entry.interpretation || '')}</p></div>
      </article>`).join('')}</div></details>`;
  }

  return html;
}

function oralExoRenderCompare(scored, attendus, t) {
  const view = ORAL_EXO_STATE.compareView;
  const body = view === 'cards'
    ? oralExoCompareCards(scored, attendus, t)
    : oralExoCompareTable(scored, attendus, t);
  return `
    <div class="oral-cmp-toolbar">
      <h3 class="oral-cmp-title">Comparaison détaillée · toi vs corrigé</h3>
      <div class="oral-cmp-view-toggle">
        <button type="button" class="chip${view === 'table' ? ' on' : ''}" onclick="oralExoSetCompareView('table')">Tableau</button>
        <button type="button" class="chip${view === 'cards' ? ' on' : ''}" onclick="oralExoSetCompareView('cards')">Cartes</button>
      </div>
    </div>
    <div id="oral-cmp-body">${body}</div>`;
}

function oralExoSetCompareView(view) {
  ORAL_EXO_STATE.compareView = view;
  const r = ORAL_EXO_STATE.lastResult;
  const box = el('oral-cmp-body');
  const toolbar = document.querySelector('.oral-cmp-view-toggle');
  if (toolbar) {
    toolbar.querySelectorAll('.chip').forEach(b => {
      b.classList.toggle('on', b.textContent.trim().toLowerCase() === (view === 'cards' ? 'cartes' : 'tableau'));
    });
  }
  if (r && box) {
    box.innerHTML = view === 'cards'
      ? oralExoCompareCards(r.scored, r.attendus, r.t)
      : oralExoCompareTable(r.scored, r.attendus, r.t);
  }
}

function oralExoBindCoach(t) {
  const proc = el('oral-exo-proc');
  const cite = el('oral-exo-cite');
  const interp = el('oral-exo-interp');
  const coach = el('oral-exo-coach');
  if (!proc || !interp || !coach) return;

  const update = () => {
    let html = typeof gtextRenderInterpCoach === 'function'
      ? gtextRenderInterpCoach(proc.value, interp.value, cite?.value || '', t.attendus, t.texte)
      : '';
    const live = oralExoLiveScore(proc.value, cite?.value, interp.value, t.attendus, t.texte);
    if (live?.matched && live.entry?.procede !== live.matched.procede && (live.procScore ?? 0) >= 0.55) {
      html += `<p class="oral-exo-match-hint">Corrigé attendu : <strong>${oralEsc(live.matched.procede)}</strong>${live.matched.mouvement ? ` · ${oralEsc(live.matched.mouvement)}` : ''}</p>`;
    }
    if (live && !live.procOk && (live.citeScore ?? 0) >= 0.55) {
      html += `<p class="oral-exo-match-hint warn">Citation OK — précise le nom du procédé pour valider P.</p>`;
    }
    coach.innerHTML = html;
    oralExoHighlightCitedLines();
  };
  if (!proc.dataset.coachBound) {
    proc.dataset.coachBound = '1';
    proc.addEventListener('input', update);
    interp.addEventListener('input', update);
    if (cite) cite.addEventListener('input', update);
  }
  update();
}

function oralExoRenderExamContext(t) {
  const plan = (t.plan || []).map((p, i) =>
    `<li><strong>M${i + 1} :</strong> ${oralEsc(p)}</li>`,
  ).join('');
  return `
    <section class="oral-exo-context">
      <p class="oral-exo-context-label">Problématique (aide à l'analyse — pas le corrigé)</p>
      <p class="oral-exo-context-prob">${oralEsc(t.problematique)}</p>
      ${plan ? `<ol class="oral-exo-context-plan">${plan}</ol>` : ''}
      <p class="oral-exo-context-hint">${t.attenduCount || t.attendus?.length || 0} procédés au corrigé · ${t.lineCount || t.passage?.lines?.length || '?'} lignes · clique une ligne pour citer</p>
    </section>`;
}

function oralExoStart(id, forceNew) {
  const t = typeof getOralTextById === 'function' ? getOralTextById(id) : null;
  if (!t) return;
  if (!t.texte || t.texte.length < 20) {
    alert('Passage littéraire indisponible pour ce texte.');
    return;
  }
  if (!Array.isArray(t.attendus) || !t.attendus.length) {
    alert('Corrigé procédés indisponible pour ce texte.');
    return;
  }

  ORAL_EXO_STATE.activeId = id;
  ORAL_EXO_STATE.phase = 'work';
  const draft = forceNew ? { entries: [] } : oralExoLoadDraft(id);
  ORAL_EXO_STATE.entries = forceNew ? [] : (Array.isArray(draft.entries) ? draft.entries : []);

  if (forceNew) {
    ORAL_EXO_STATE.timerEnd = Date.now() + ORAL_EXO_CFG.timerSec * 1000;
    ORAL_EXO_STATE.timerPaused = false;
    ORAL_EXO_STATE.pausedRemaining = null;
  }

  const list = el('oral-list');
  const hub = el('oral-hub');
  const detail = el('oral-detail');
  if (list) list.hidden = true;
  if (hub) hub.hidden = true;
  if (detail) detail.hidden = false;

  if (!forceNew) oralExoStartTimer(id);
  else {
    oralExoStopTimer();
    oralExoStartTimer(id);
  }
  oralExoRenderWork();
  detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (typeof playSound === 'function') playSound('open');
}

function oralExoBindFormKeys() {
  const proc = el('oral-exo-proc');
  const interp = el('oral-exo-interp');
  if (interp && !interp.dataset.bound) {
    interp.dataset.bound = '1';
    interp.addEventListener('keydown', e => {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); oralExoAddEntry(); }
    });
  }
  if (proc && !proc.dataset.bound) {
    proc.dataset.bound = '1';
  }
}

function oralExoRenderWork() {
  const t = typeof getOralTextById === 'function' ? getOralTextById(ORAL_EXO_STATE.activeId) : null;
  const detail = el('oral-detail');
  if (!t || !detail) return;

  const minChars = typeof gtextGetMinChars === 'function' ? gtextGetMinChars() : 15;
  const maxN = ORAL_EXO_CFG.maxEntries;
  const atMax = ORAL_EXO_STATE.entries.length >= maxN;
  const procOpts = typeof gtextProcOptions === 'function' ? gtextProcOptions() : '';
  const target = typeof gtextGradeTarget === 'function'
    ? oralWithMaxEntries(() => gtextGradeTarget(t.attendus))
    : (t.attendus?.length || 0);
  const scored = oralExoScoreAll(t);
  const procOkN = scored.filter(r => r.procOk).length;
  const fullN = scored.filter(r => r.valid).length;
  const pct = Math.min(100, Math.round(procOkN / Math.max(target, 1) * 100));

  const entriesHtml = scored.length
    ? scored.map((r, i) => oralExoRenderScoredEntry(r, i)).join('')
    : `<p class="gtext-hint">Repère <strong>tous</strong> les procédés possibles (objectif : ${target} du corrigé, max ${maxN} saisies). Chaque analyse est <strong>corrigée en direct</strong> (P/C/I).</p>`;

  detail.innerHTML = `
    <div class="oral-exo-panel">
      <div class="oral-detail-toolbar oral-exo-toolbar">
        <button type="button" class="sbtn sec" onclick="oralExoQuit()">← Quitter</button>
        <button type="button" class="sbtn sec" onclick="oralExoTogglePause()">${ORAL_EXO_STATE.timerPaused ? '▶ Reprendre' : '⏸ Pause'}</button>
        <div id="oral-exo-timer" class="oral-exo-timer" title="30 minutes · épreuve orale simulée">30:00</div>
      </div>
      <header class="oral-detail-head">
        <p class="oral-detail-eyebrow">Simulation oral · LL n°${t.num}</p>
        <h2>${oralEsc(t.auteur)} — <em>${oralEsc(t.titre)}</em></h2>
        <p class="oral-detail-oeuvre">${oralEsc(t.oeuvre)}</p>
      </header>
      ${oralExoRenderExamContext(t)}
      ${scored.length ? oralExoRenderLiveGrade(t, scored) : ''}
      <div class="oral-exo-progress">
        <div class="oral-exo-progress-bar" style="width:${pct}%"></div>
        <span>${procOkN} procédé${procOkN !== 1 ? 's' : ''} validé${procOkN !== 1 ? 's' : ''} · ${fullN} complet${fullN !== 1 ? 's' : ''} (P+C+I) · ${ORAL_EXO_STATE.entries.length}/${maxN} saisies</span>
      </div>
      <section class="oral-block oral-block-passage">
        <h3>Passage · clique une ligne pour la citer</h3>
        ${typeof oralRenderPassageBlock === 'function' ? oralRenderPassageBlock(t, true, 'full') : ''}
      </section>
      ${oralExoRenderTracker(t, scored)}
      <div class="gtext-form-title">Tes analyses · correction IPCI en direct · ${ORAL_EXO_STATE.entries.length} / ${maxN}</div>
      <div class="oral-exo-entries oral-exo-entries-scored">${entriesHtml}</div>
      <div class="gtext-form oral-exo-form">
        <div>
          <label for="oral-exo-proc">Procédé repéré</label>
          <input type="text" id="oral-exo-proc" list="oral-exo-proc-list" placeholder="Figure, registre, procédé narratif…" autocomplete="off">
          <datalist id="oral-exo-proc-list">${procOpts}</datalist>
        </div>
        <div>
          <label for="oral-exo-cite">Citation (extrait du texte)</label>
          <input type="text" id="oral-exo-cite" placeholder="Clique une ligne ou recopie « … »">
        </div>
        <div>
          <label for="oral-exo-interp">Interprétation (effet IPCI)</label>
          <textarea id="oral-exo-interp" rows="4" placeholder="Procédé → citation → interprétation : effet sur le sens, le registre, le lecteur… (${minChars} car. min.) · Ctrl+Entrée pour ajouter"></textarea>
        </div>
      </div>
      <div id="oral-exo-coach" class="gtext-coach oral-exo-coach"></div>
      <div class="gtext-actions">
        <button type="button" class="sbtn" onclick="oralExoAddEntry()" ${atMax ? 'disabled' : ''}>+ Ajouter cette analyse</button>
        <button type="button" class="pbtn" onclick="oralExoSubmit(false)" ${ORAL_EXO_STATE.entries.length ? '' : 'disabled'}>Terminer · comparer au corrigé</button>
      </div>
      <p class="gtext-hint oral-exo-barème">Barème IPCI : 0,5 procédé + 0,25 citation + 0,25 interprétation · note /20 fictive + probabilité d'admission après correction.</p>
    </div>`;

  oralExoUpdateTimerUi();
  oralExoBindFormKeys();
  oralExoBindCoach(t);
  oralExoApplyPassageHighlights(scored);
}

function oralExoAddEntry() {
  const proc = el('oral-exo-proc');
  const cite = el('oral-exo-cite');
  const interp = el('oral-exo-interp');
  if (!proc || !interp) return;
  const t = typeof getOralTextById === 'function' ? getOralTextById(ORAL_EXO_STATE.activeId) : null;
  const procede = proc.value.trim();
  const citation = cite?.value?.trim() || '';
  const interpretation = interp.value.trim();
  const minChars = typeof gtextGetMinChars === 'function' ? gtextGetMinChars() : 15;

  if (!procede) { proc.focus(); return; }
  if (!citation) {
    cite?.focus();
    if (typeof toast === 'function') toast('Citation obligatoire — clique une ligne du passage');
    return;
  }
  if (!interpretation || interpretation.length < minChars) {
    interp.focus();
    if (typeof toast === 'function') toast(`Interprétation trop courte (${minChars} car. min.)`);
    return;
  }
  if (ORAL_EXO_STATE.entries.length >= ORAL_EXO_CFG.maxEntries) return;

  let live = null;
  if (t?.attendus?.length) {
    live = oralExoLiveScore(procede, citation, interpretation, t.attendus, t.texte);
    if (live && !live.procOk && (live.matchScore ?? live.procScore ?? 0) < 0.45 && (live.citeScore ?? 0) < 0.45) {
      if (!confirm('Procédé et citation peu reconnus dans le corrigé. Ajouter quand même ?')) return;
    } else if (live && live.procOk && !live.citeOk && typeof toast === 'function') {
      toast('Citation à affiner — vérifie les mots exacts du passage');
    }
  }

  ORAL_EXO_STATE.entries.push({ procede, citation, interpretation });
  oralExoPersistDraft();
  oralExoRenderWork();
  proc.value = '';
  if (cite) cite.value = '';
  interp.value = '';
  proc.focus();
  if (typeof playSound === 'function') playSound(live?.valid ? 'success' : 'click');
}

function oralExoRemoveEntry(i) {
  ORAL_EXO_STATE.entries.splice(i, 1);
  oralExoPersistDraft();
  oralExoRenderWork();
}

function oralExoSubmit(auto) {
  const t = typeof getOralTextById === 'function' ? getOralTextById(ORAL_EXO_STATE.activeId) : null;
  const detail = el('oral-detail');
  if (!t || !detail || !ORAL_EXO_STATE.entries.length) return;

  oralExoStopTimer();
  ORAL_EXO_STATE.phase = 'result';

  const scored = oralExoValidate(ORAL_EXO_STATE.entries, t.attendus, t.texte);
  const est = oralExoEstimate(scored, t.attendus);
  const elapsed = ORAL_EXO_CFG.timerSec - oralExoTimerRemaining();

  oralExoPushHistory(t.id, {
    date: Date.now(),
    note: est.note,
    mention: est.mention,
    covered: est.covered,
    targetCount: est.targetCount,
    entryCount: est.entryCount,
    auto,
    elapsedSec: elapsed,
  });
  oralExoSaveStat(t.id, est, { lastElapsed: elapsed, autoSubmit: auto });
  oralExoClearDraft(t.id);

  ORAL_EXO_STATE.lastResult = { scored, attendus: t.attendus, t, est };

  if (typeof playGradeSound === 'function') playGradeSound(est.note);

  const msg = typeof gtextResultMessage === 'function' ? gtextResultMessage(est) : '';
  const breakdown = typeof gtextFormatGradeBreakdown === 'function' ? gtextFormatGradeBreakdown(est) : '';
  const hist = oralExoLoadHistory(t.id);
  const nextText = (typeof oralGetAllTexts === 'function' ? oralGetAllTexts() : ORAL_TEXTS)
    ?.find(x => !oralExoLoadStats()[x.id]?.note && x.id !== t.id);
    : null;

  detail.innerHTML = `
    <div class="oral-exo-panel oral-exo-result">
      <div class="oral-detail-toolbar">
        <button type="button" class="sbtn sec" onclick="openOralText('${t.id}')">📖 Corrigé complet LL</button>
        <button type="button" class="sbtn sec" onclick="renderOralList()">← Liste des 16</button>
      </div>
      <header class="oral-detail-head">
        <p class="oral-detail-eyebrow">Résultat · LL n°${t.num}${auto ? ' · temps écoulé' : ''} · ${oralExoFormatTimer(elapsed)} utilisées</p>
        <h2>${oralEsc(t.auteur)} — <em>${oralEsc(t.titre)}</em></h2>
      </header>
      ${oralExoRenderProbPanel(est, scored, t)}
      <p class="gtext-hint" style="text-align:center;margin:.5rem 0 1rem">${oralEsc(msg)} · ${oralEsc(breakdown)}</p>
      ${oralExoRenderCompare(scored, t.attendus, t)}
      ${hist.length > 1 ? `<p class="gtext-hint oral-exo-hist">Historique : ${hist.slice(0, 5).map(h => `${h.note}/20`).join(' · ')}</p>` : ''}
      <section class="oral-block oral-block-passage">
        <h3>Passage corrigé</h3>
        ${typeof oralRenderPassageBlock === 'function' ? oralRenderPassageBlock(t, false, 'full') : ''}
      </section>
      <div class="gtext-actions oral-exo-result-actions">
        <button type="button" class="pbtn" onclick="oralExoStart('${t.id}', true)">↺ Refaire (timer neuf)</button>
        ${nextText ? `<button type="button" class="sbtn" onclick="oralExoStart('${nextText.id}')">Texte suivant : LL n°${nextText.num} →</button>` : ''}
        <button type="button" class="sbtn sec" onclick="oralQcmFocus()">QCM oral</button>
      </div>
    </div>`;

  detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (typeof renderOralHub === 'function') renderOralHub();
  if (typeof scheduleDashboardUpdate === 'function') scheduleDashboardUpdate();
}

function oralExoQuit() {
  if (ORAL_EXO_STATE.entries.length && ORAL_EXO_STATE.phase === 'work') {
    if (!confirm('Quitter l\'exercice ? Brouillon + timer conservés.')) return;
    oralExoPersistDraft();
  }
  oralExoStopTimer();
  ORAL_EXO_STATE.phase = 'idle';
  const hub = el('oral-hub');
  if (hub) hub.hidden = false;
  if (ORAL_EXO_STATE.activeId) openOralText(ORAL_EXO_STATE.activeId);
  else renderOralList();
}

if (typeof window !== 'undefined') {
  window.oralExoStart = oralExoStart;
  window.oralExoAddEntry = oralExoAddEntry;
  window.oralExoRemoveEntry = oralExoRemoveEntry;
  window.oralExoSubmit = oralExoSubmit;
  window.oralExoQuit = oralExoQuit;
  window.oralExoTogglePause = oralExoTogglePause;
  window.oralExoPickLine = oralExoPickLine;
  window.oralExoSetCompareView = oralExoSetCompareView;
  window.oralExoStopTimer = oralExoStopTimer;
  window.oralExoLoadStats = oralExoLoadStats;
  window.oralExoLoadHistory = oralExoLoadHistory;
  window.oralExoComputeGlobalStats = oralExoComputeGlobalStats;
}
