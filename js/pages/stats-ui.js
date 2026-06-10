/* ══════════════════════════════════════════
   STATS — Engine générique
   ══════════════════════════════════════════ */
const STAT_CONFIG = {
  proc: {
    stKey:'bac_proc_stats', prefix:'p',
    cats:["Analyse de phrase","Figures de style","Procédés narratifs","Procédés poétiques","Registres & tonalités","Syntaxe & lexique","Méthode commentaire","Dissertation","Connecteurs & Style"],
    colors:{"Analyse de phrase":"var(--gold2)","Figures de style":"var(--purple)","Procédés narratifs":"var(--green)","Procédés poétiques":"var(--coral)","Registres & tonalités":"var(--blue)","Syntaxe & lexique":"var(--amber)","Méthode commentaire":"var(--teal)","Dissertation":"var(--pink)","Connecteurs & Style":"var(--gray)"}
  },
  gram: {
    stKey:'bac_gram_stats', prefix:'g',
    cats:["Analyse de phrase","Les Propositions","Les Propositions (suite)","La Négation","Les Modes","La Voix"],
    colors:{"Analyse de phrase":"var(--gold2)","Les Propositions":"var(--purple)","Les Propositions (suite)":"var(--teal)","La Négation":"var(--coral)","Les Modes":"var(--blue)","La Voix":"var(--amber)"}
  },
  vocab: {
    stKey:'bac_vocab_stats', prefix:'v',
    cats:["Analyser & décrire","Jugement & argumentation","Interprétation","Mise en évidence","Bien rédiger","Narration & description","Formules d'analyse","Connecteurs & devoir","Commentaire & dissertation","Poésie & énonciation"],
    colors:{"Analyser & décrire":"var(--purple)","Jugement & argumentation":"var(--blue)","Interprétation":"var(--teal)","Mise en évidence":"var(--coral)","Bien rédiger":"var(--amber)","Narration & description":"var(--green)","Formules d'analyse":"var(--pink)","Connecteurs & devoir":"var(--gray)","Commentaire & dissertation":"var(--gold2)","Poésie & énonciation":"var(--purple)"}
  }
};

function clearSt(m) {
  if (!confirm('Réinitialiser les statistiques ' + matiereLabel(m) + ' ?')) return;
  localStorage.removeItem(STAT_CONFIG[m].stKey);
  invalidateStCache(STAT_CONFIG[m].stKey);
  renderStats(m);
  scheduleDashboardUpdate();
}

function computeStreak(sessions) {
  if (!sessions.length) return 0;
  const dates = [...new Set(sessions.map(s => s.date))].sort().reverse();
  const today = new Date().toLocaleDateString('fr-FR');
  const yesterday = new Date(Date.now() - 86400000).toLocaleDateString('fr-FR');
  if (dates[0] !== today && dates[0] !== yesterday) return 0;
  let streak = 1;
  for (let i = 1; i < dates.length; i++) {
    const [d1, m1, y1] = dates[i-1].split('/').map(Number);
    const [d2, m2, y2] = dates[i].split('/').map(Number);
    const diff = (new Date(y1, m1-1, d1) - new Date(y2, m2-1, d2)) / 86400000;
    if (diff === 1) streak++;
    else break;
  }
  return streak;
}

function openQcmCat(m, cat) {
  navTab(m, 'p-qcm');
  const s = QCM_STATE[m];
  s.cat = cat;
  document.querySelectorAll(`#${s.prefix}qcats .chip`).forEach((b, i) => {
    b.classList.toggle('on', s.cats[i] === cat);
  });
  mixQ(m);
}

function openExamMode(m) {
  navTab(m, 'p-exam');
}

function renderStats(m) {
  const cfg      = STAT_CONFIG[m];
  const st       = loadSt(cfg.stKey);
  const sessions = st.sessions || [];
  const qdata    = st.qdata    || {};
  const p        = cfg.prefix;

  let readiness = null;
  try {
    if (typeof computeReadiness === 'function') {
      const r = computeReadiness(m);
      if (getSetting('showReadinessStats')) renderReadinessHero(m, r);
      else { const elR = el(p + 'readiness'); if (elR) elR.innerHTML = ''; }
      if (typeof renderExamProbabilityPanel === 'function') renderExamProbabilityPanel(m);
      if (getSetting('showStatsAdvanced')) {
        renderFactors(m, r);
        renderMasteryGrid(m, r);
        renderRecommend(m, r);
        renderExamHistoryPanel(m, r);
        readiness = r;
      } else {
        ['factors', 'mastery', 'recommend', 'exams'].forEach(id => {
          const box = el(p + id);
          if (box) box.innerHTML = '';
        });
        if (getSetting('showReadinessStats')) readiness = r;
      }
    }
  } catch (e) {
    console.error('renderStats readiness', e);
    const elR = el(p + 'readiness');
    if (elR) elR.innerHTML = '<div class="no-data">Indicateurs avancés indisponibles — recharge la page (Ctrl+F5).</div>';
  }

  const totalQ  = sessions.reduce((a, s) => a + s.tot, 0);
  const totalOk = sessions.reduce((a, s) => a + s.ok,  0);
  const avgPct  = totalQ ? Math.round(totalOk / totalQ * 100) : 0;
  const best    = sessions.reduce((b, s) => { const v = s.tot ? Math.round(s.ok/s.tot*100) : 0; return v > b ? v : b; }, 0);
  const lastSes = sessions.length ? sessions[sessions.length-1] : null;
  const lastPct = lastSes ? Math.round(lastSes.ok / lastSes.tot * 100) : null;
  const streak  = computeStreak(sessions);
  const cov     = readiness ? readiness.coverage : computeCoverage(m);

  const kpiData = [
    { val: readiness ? readiness.score + '/100' : '—', lbl: 'Indice préparation' },
    { val: readiness ? `${readiness.mastery?.catCoverage?.tested ?? 0}/${readiness.mastery?.catCoverage?.total ?? '?'}` : '—', lbl: 'Couverture catégories' },
    { val: cov.attempted + '/' + cov.total, lbl: 'Questions vues' },
    { val: avgPct + '%', lbl: 'Score moyen sessions' },
    { val: best + '%', lbl: 'Meilleur score' },
    { val: lastPct !== null ? lastPct + '%' : '—', lbl: 'Dernière session' },
    { val: Object.keys(qdata).length, lbl: 'Questions tracées' },
    { val: sessions.length, lbl: 'Sessions jouées' },
  ];
  let kpiHtml = kpiData.map(k =>
    `<div class="kpi"><div class="kpi-v">${k.val}</div><div class="kpi-l">${k.lbl}</div></div>`
  ).join('');
  if (getSetting('streakOn') && streak > 0) {
    kpiHtml += `<div class="kpi"><div class="kpi-v"><span class="streak-badge">🔥 ${streak}j</span></div><div class="kpi-l">Série quotidienne</div></div>`;
  }
  const ch = computeChallengeStats();
  if (ch.total > 0) {
    kpiHtml += `<div class="kpi"><div class="kpi-v">${ch.pct}%</div><div class="kpi-l">Défis 10 min (${ch.total})</div></div>`;
  }
  if (typeof getTimeStatsView === 'function') {
    const tv = getTimeStatsView();
    const tSec = tv.total + (tv.current ? tv.sessionSec : 0);
    if (tSec > 0) {
      kpiHtml += `<div class="kpi"><div class="kpi-v">${typeof formatDurationShort === 'function' ? formatDurationShort(tSec) : tSec + 's'}</div><div class="kpi-l">Temps total</div></div>`;
    }
  }
  const kpisEl = el(p + 'kpis');
  if (kpisEl) kpisEl.innerHTML = kpiHtml;

  if (typeof renderTimeStats === 'function') renderTimeStats(p + 'time');

  renderChallengeStats(m);

  const mastery = readiness ? (readiness.masteryByCat || computeCatMastery(m)) : computeCatMastery(m);
  const radarEl = el(p + 'radar');
  if (radarEl) radarEl.innerHTML = cfg.cats.map(t => {
    const x   = mastery[t];
    const barW = x.pct != null ? x.pct : 0;
    const barOp = x.tot >= 1 ? 1 : 0.25;
    const sn  = t.length > 24 ? t.slice(0, 22) + '…' : t;
    const lbl = x.pct !== null ? x.pct + '%' : (x.tot >= 1 ? Math.round(x.ok / x.tot * 100) + '%' : '—');
    const extra = x.tot < 1 ? ' · à découvrir' : '';
    return `<div class="rrow">
      <div class="rtop"><span class="rname">${sn}</span><span class="rpct">${lbl}${extra}</span></div>
      <div class="rtrack"><div class="rfill" style="width:${barW}%;opacity:${barOp};background:${cfg.colors[t] || 'var(--gold)'}"></div></div>
    </div>`;
  }).join('') || '<div class="no-data">Pas encore de données.</div>';

  // Timeline
  const tl = el(p + 'tl');
  if (tl) {
    tl.innerHTML = '';
    const recent = sessions.slice(-14);
    if (!recent.length) { tl.innerHTML = '<div class="no-data" style="width:100%">Pas encore de données.</div>'; }
    else recent.forEach(s => {
      const pct = s.tot ? Math.round(s.ok / s.tot * 100) : 0;
      const h   = Math.max(4, Math.round(pct / 100 * 55));
      const col = pct >= 75 ? 'var(--ok)' : pct >= 50 ? 'var(--amber)' : 'var(--er)';
      const w   = document.createElement('div');
      w.className = 'tb-w';
      w.innerHTML = `<div class="tb" style="height:${h}px;background:${col}" title="${pct}%"></div><div class="tbl">${pct}%</div>`;
      tl.appendChild(w);
    });
  }

  // Hard questions (top 12, min 2 attempts)
  const hard = Object.values(qdata)
    .filter(d => d.total >= 2)
    .map(d => ({ ...d, err: Math.round((1 - d.ok / d.total) * 100), pct: Math.round(d.ok / d.total * 100) }))
    .sort((a, b) => b.err - a.err).slice(0, 12);
  const hardEl = el(p + 'hard');
  if (hardEl) hardEl.innerHTML = hard.length
    ? hard.map(d =>
        `<div class="hrow">
          <span style="flex:1;color:var(--tx2);font-size:11px;line-height:1.4">${d.q.slice(0, 72)}${d.q.length > 72 ? '…' : ''}</span>
          <span class="hscore ${d.err >= 60 ? 'lo' : d.err >= 30 ? 'mid' : 'hi'}" style="flex-shrink:0;margin-left:6px">${d.pct}% · ${d.total}×</span>
        </div>`).join('')
    : '<div class="no-data">Réponds à plus de questions (min. 2 tentatives par question).</div>';

  // History
  const histEl = el(p + 'hist');
  if (histEl) histEl.innerHTML = sessions.length
    ? [...sessions].reverse().slice(0, 15).map(s => {
        const pct = s.tot ? Math.round(s.ok / s.tot * 100) : 0;
        const cat = (!s.cat || s.cat === 'Toutes') ? 'Toutes catégories' : s.cat;
        return `<div class="hrow">
          <span class="hdate">${s.date}</span>
          <span class="hcat">${cat}</span>
          <span class="hscore ${pct >= 75 ? 'hi' : pct >= 50 ? 'mid' : 'lo'}">${s.ok}/${s.tot} · ${pct}%</span>
        </div>`;
      }).join('')
    : '<div class="no-data">Aucune session enregistrée.</div>';
}

