/* ══════════════════════════════════════════
   SUIVI DU TEMPS — par activité
   ══════════════════════════════════════════ */
const TIME_STORAGE_KEY = 'bac_time_stats';

const TIME_ACTIVITIES = [
  { id: 'qcm',       icon: '✏️', label: 'QCM' },
  { id: 'exam',      icon: '🏆', label: 'Examens blancs' },
  { id: 'cartes',    icon: '🃏', label: 'Flashcards' },
  { id: 'exo',       icon: '🔍', label: 'Exercices' },
  { id: 'gtext',     icon: '📜', label: 'Grands textes' },
  { id: 'challenge', icon: '🎯', label: 'Défi express' },
  { id: 'learn',     icon: '📖', label: 'Fiches & cours' },
  { id: 'favoris',   icon: '⭐', label: 'Favoris' },
];

const TIME_PAGE_MAP = {
  'p-qcm': 'qcm',
  'p-exam': 'exam',
  'p-cartes': 'cartes',
  'p-gcartes': 'cartes',
  'p-vcartes': 'cartes',
  'p-exo': 'exo',
  'p-gtextes': 'gtext',
  'p-fiche': 'learn',
  'p-meth': 'learn',
  'p-sim': 'learn',
  'p-dissert': 'learn',
  'p-corpus': 'learn',
  'p-auteurs': 'learn',
  'p-periodes': 'learn',
  'p-cours': 'learn',
};

let _timeCurrent = null;
let _timeStartedAt = null;
let _timeActive = true;
let _timePaused = false;
let _timeFlushTimer = null;
let _timeLiveTimer = null;

function _todayKey() {
  return new Date().toLocaleDateString('fr-FR');
}

function loadTimeStats() {
  try {
    const raw = JSON.parse(localStorage.getItem(TIME_STORAGE_KEY) || '{}');
    const byActivity = {};
    TIME_ACTIVITIES.forEach(a => { byActivity[a.id] = raw.byActivity?.[a.id] || 0; });
    let today;
    if (raw.today?.date === _todayKey()) {
      today = { date: raw.today.date, byActivity: {} };
      TIME_ACTIVITIES.forEach(a => {
        today.byActivity[a.id] = raw.today.byActivity?.[a.id] || 0;
      });
    } else {
      today = {
        date: _todayKey(),
        byActivity: Object.fromEntries(TIME_ACTIVITIES.map(a => [a.id, 0])),
      };
    }
    return { byActivity, today };
  } catch (e) {
    const empty = Object.fromEntries(TIME_ACTIVITIES.map(a => [a.id, 0]));
    return { byActivity: { ...empty }, today: { date: _todayKey(), byActivity: { ...empty } } };
  }
}

function saveTimeStats(st) {
  try { localStorage.setItem(TIME_STORAGE_KEY, JSON.stringify(st)); } catch (e) {}
}

function getTimeTotal(byActivity) {
  return TIME_ACTIVITIES.reduce((sum, a) => sum + (byActivity[a.id] || 0), 0);
}

function formatDuration(sec) {
  sec = Math.max(0, Math.floor(sec || 0));
  if (sec >= 3600) {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    return m ? `${h} h ${m} min` : `${h} h`;
  }
  if (sec >= 60) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return s ? `${m} min ${s} s` : `${m} min`;
  }
  return `${sec} s`;
}

function formatDurationShort(sec) {
  sec = Math.max(0, Math.floor(sec || 0));
  if (sec >= 3600) return `${Math.floor(sec / 3600)}h${String(Math.floor((sec % 3600) / 60)).padStart(2, '0')}`;
  if (sec >= 60) return `${Math.floor(sec / 60)}m${String(sec % 60).padStart(2, '0')}`;
  return `${sec}s`;
}

function addTimeActivitySeconds(activityId, sec) {
  if (!activityId || sec <= 0) return;
  const st = loadTimeStats();
  st.byActivity[activityId] = (st.byActivity[activityId] || 0) + sec;
  if (st.today.date !== _todayKey()) {
    st.today = { date: _todayKey(), byActivity: Object.fromEntries(TIME_ACTIVITIES.map(a => [a.id, 0])) };
  }
  st.today.byActivity[activityId] = (st.today.byActivity[activityId] || 0) + sec;
  saveTimeStats(st);
  if (typeof scheduleDashboardUpdate === 'function') scheduleDashboardUpdate();
}

function flushTime() {
  if (_timePaused || !_timeActive || !_timeCurrent || !_timeStartedAt) return;
  const sec = Math.floor((Date.now() - _timeStartedAt) / 1000);
  if (sec > 0) addTimeActivitySeconds(_timeCurrent, sec);
  _timeStartedAt = Date.now();
}

function _isDailyChallengeActive() {
  if (typeof getSetting === 'function' && !getSetting('showDailyChallenge')) return false;
  const box = el('daily-challenge');
  if (!box || box.style.display === 'none') return false;
  if (typeof getPeriodicChallenge !== 'function' || typeof getChallengeSlotResult !== 'function') return false;
  const q = getPeriodicChallenge();
  if (!q) return false;
  return !getChallengeSlotResult(q.slotId);
}

function pageToActivity(matiere, page) {
  if (matiere === 'fav') return 'favoris';
  if (page === 'p-stat') return null;
  if (matiere === 'proc' && page === 'p-fiche' && _isDailyChallengeActive()) return 'challenge';
  return TIME_PAGE_MAP[page] || 'learn';
}

function syncTimeTrackerFromDom() {
  if (_timePaused) return;
  const fav = el('m-fav');
  if (fav && fav.classList.contains('on')) {
    setTimeActivity('favoris');
    return;
  }
  ['proc', 'gram', 'vocab'].some(m => {
    const mat = el('m-' + m);
    if (!mat || !mat.classList.contains('on')) return false;
    const pg = mat.querySelector('.pg.on');
    if (!pg) return false;
    const page = pg.id.replace(m + '-', '');
    setTimeActivity(pageToActivity(m, page));
    return true;
  });
}

function setTimeActivity(activityId) {
  if (_timePaused) return;
  if (activityId === _timeCurrent && _timeStartedAt) return;
  flushTime();
  _timeCurrent = activityId;
  _timeStartedAt = activityId ? Date.now() : null;
}

function timeTrackPage(matiere, page) {
  setTimeActivity(pageToActivity(matiere, page));
}

function timeTrackMatiere(matiere) {
  if (matiere === 'fav') {
    setTimeActivity('favoris');
    return;
  }
  const mat = el('m-' + matiere);
  const pg = mat?.querySelector('.pg.on');
  if (pg) {
    const page = pg.id.replace(matiere + '-', '');
    setTimeActivity(pageToActivity(matiere, page));
  } else {
    setTimeActivity('learn');
  }
}

function pauseTimeTracker() {
  flushTime();
  _timePaused = true;
  _timeCurrent = null;
  _timeStartedAt = null;
}

function resumeTimeTracker() {
  _timePaused = false;
  syncTimeTrackerFromDom();
}

function getCurrentSessionSeconds() {
  if (_timePaused || !_timeActive || !_timeCurrent || !_timeStartedAt) return 0;
  return Math.floor((Date.now() - _timeStartedAt) / 1000);
}

function getTimeStatsView() {
  const st = loadTimeStats();
  const total = getTimeTotal(st.byActivity);
  const todayTotal = getTimeTotal(st.today.byActivity);
  const sessionSec = getCurrentSessionSeconds();
  const current = _timeCurrent && !_timePaused && _timeActive
    ? TIME_ACTIVITIES.find(a => a.id === _timeCurrent)
    : null;
  return {
    ...st,
    total,
    todayTotal,
    sessionSec,
    current,
    rows: TIME_ACTIVITIES.map(a => ({
      ...a,
      sec: st.byActivity[a.id] || 0,
      todaySec: st.today.byActivity[a.id] || 0,
      pct: total ? Math.round((st.byActivity[a.id] || 0) / total * 100) : 0,
    })).filter(r => r.sec > 0 || r.todaySec > 0),
  };
}

function renderTimeStats(containerId) {
  const box = el(containerId);
  if (!box) return;
  const v = getTimeStatsView();
  const rows = TIME_ACTIVITIES.map(a => {
    const sec = v.byActivity[a.id] || 0;
    const todaySec = v.today.byActivity[a.id] || 0;
    const live = v.current?.id === a.id ? v.sessionSec : 0;
    const totalSec = sec + live;
    const pct = v.total + (v.current ? v.sessionSec : 0)
      ? Math.round(totalSec / (v.total + (v.current ? v.sessionSec : 0)) * 100)
      : 0;
    return { ...a, sec, todaySec, live, totalSec, pct };
  });
  const displayTotal = v.total + (v.current ? v.sessionSec : 0);
  const displayToday = v.todayTotal + (v.current ? v.sessionSec : 0);
  const hasData = displayTotal > 0;
  const liveHtml = v.current && v.sessionSec > 0
    ? `<div class="time-live">${v.current.icon} En cours · ${v.current.label} · ${formatDuration(v.sessionSec)}</div>`
    : '';

  box.innerHTML = `
    <div class="time-stats">
      <div class="time-stats-head">
        <div class="time-stat-main">
          <div class="time-stat-val">${formatDuration(displayTotal)}</div>
          <div class="time-stat-lbl">Temps total</div>
        </div>
        <div class="time-stat-side">
          <div class="time-stat-val time-stat-val-sm">${formatDuration(displayToday)}</div>
          <div class="time-stat-lbl">Aujourd'hui</div>
        </div>
      </div>
      ${liveHtml}
      ${hasData ? rows.filter(r => r.totalSec > 0 || r.todaySec > 0).map(r => `
        <div class="time-row">
          <div class="time-row-top">
            <span class="time-row-name">${r.icon} ${r.label}</span>
            <span class="time-row-val">${formatDuration(r.totalSec)}${(r.todaySec || (v.current?.id === r.id && v.sessionSec)) ? `<span class="time-row-today"> · ${formatDurationShort(r.todaySec + (v.current?.id === r.id ? v.sessionSec : 0))} j.</span>` : ''}</span>
          </div>
          <div class="time-track"><div class="time-fill" style="width:${Math.max(r.pct, r.totalSec ? 4 : 0)}%"></div></div>
        </div>`).join('') : '<div class="no-data">Le temps passé sur chaque activité s\'affiche ici dès que tu navigues dans l\'app (onglet actif, fenêtre visible).</div>'}
      <p class="time-note">Mesure automatique · pause si l'onglet est en arrière-plan · les pages Stats ne comptent pas.</p>
    </div>`;
}

function renderTimeStatsCompact() {
  const v = getTimeStatsView();
  const displayTotal = v.total + (v.current ? v.sessionSec : 0);
  const top = TIME_ACTIVITIES
    .map(a => ({ ...a, sec: (v.byActivity[a.id] || 0) + (v.current?.id === a.id ? v.sessionSec : 0) }))
    .filter(r => r.sec > 0)
    .sort((a, b) => b.sec - a.sec)
    .slice(0, 4);
  if (!displayTotal) return '';
  const chips = top.map(r =>
    `<span class="bac-time-chip">${r.icon} ${formatDurationShort(r.sec)}</span>`
  ).join('');
  return `<div class="bac-time-compact"><span class="bac-time-compact-lbl">⏱ ${formatDuration(displayTotal)}</span>${chips ? `<span class="bac-time-compact-chips">${chips}</span>` : ''}</div>`;
}

function refreshOpenTimeStatsPanels() {
  ['ptime', 'gtime', 'vtime'].forEach(id => {
    const box = el(id);
    if (box && box.closest('.pg')?.classList.contains('on')) renderTimeStats(id);
  });
}

function initTimeTracker() {
  if (_timeFlushTimer) clearInterval(_timeFlushTimer);
  if (_timeLiveTimer) clearInterval(_timeLiveTimer);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      flushTime();
      _timeActive = false;
    } else {
      _timeActive = true;
      if (_timeCurrent && !_timePaused) _timeStartedAt = Date.now();
    }
  });

  window.addEventListener('beforeunload', flushTime);
  window.addEventListener('pagehide', flushTime);

  _timeFlushTimer = setInterval(() => {
    flushTime();
  }, 15000);

  _timeLiveTimer = setInterval(refreshOpenTimeStatsPanels, 1000);

  syncTimeTrackerFromDom();
}
