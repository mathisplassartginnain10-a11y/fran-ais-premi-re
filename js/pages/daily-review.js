/* daily-review.js — Révision du jour (QCM ciblé sur points faibles) */
const DAILY_REVIEW_KEY = 'bac_daily_review';
const DAILY_TARGET = 12;

function dailyReviewTodayISO() {
  return new Date().toISOString().slice(0, 10);
}

function loadDailyReviewState() {
  return safeLocalGet(DAILY_REVIEW_KEY, { date: '', done: false, score: { ok: 0, tot: 0 } });
}

function saveDailyReviewState(st) {
  safeLocalSet(DAILY_REVIEW_KEY, st);
}

function isDailyReviewDoneToday() {
  const st = loadDailyReviewState();
  return st.date === dailyReviewTodayISO() && st.done;
}

function _dailyQRatio(qdata, q) {
  const d = qdata[qKey(q)];
  if (!d || d.total === 0) return -1;
  return d.ok / d.total;
}

function _dailyCollectCatScores(m) {
  const s = QCM_STATE[m];
  if (!s) return [];
  return s.cats.filter(c => c !== 'Toutes').map(cat => ({
    matiere: m,
    cat,
    pct: _getCatPct(m, cat),
  })).filter(x => x.pct !== null);
}

function buildDailyReview() {
  const allScores = [
    ..._dailyCollectCatScores('proc'),
    ..._dailyCollectCatScores('gram'),
  ];
  let pool = [];

  if (!allScores.length) {
    const procCats = QCM_STATE.proc.cats.filter(c => c !== 'Toutes');
    const gramCats = QCM_STATE.gram.cats.filter(c => c !== 'Toutes');
    const allCats = [
      ...procCats.map(c => ({ m: 'proc', cat: c, src: 'Litt.' })),
      ...gramCats.map(c => ({ m: 'gram', cat: c, src: 'Gram.' })),
    ];
    const perCat = Math.max(1, Math.ceil(DAILY_TARGET / Math.max(1, allCats.length)));
    allCats.forEach(({ m, cat, src }) => {
      const qs = QCM_STATE[m].data.filter(q => q.cat === cat);
      shufSample(qs, perCat).forEach(q => {
        pool.push({ ...q, _dailyMat: m, _dailySrc: src });
      });
    });
  } else {
    allScores.sort((a, b) => a.pct - b.pct);
    const weakCats = allScores.slice(0, Math.min(3, allScores.length));
    const perCat = Math.ceil(DAILY_TARGET / weakCats.length);
    weakCats.forEach(({ matiere, cat }) => {
      const s = QCM_STATE[matiere];
      const st = loadSt(s.stKey);
      const qdata = st.qdata || {};
      const catQs = s.data.filter(q => q.cat === cat).slice();
      catQs.sort((a, b) => _dailyQRatio(qdata, a) - _dailyQRatio(qdata, b));
      catQs.slice(0, perCat).forEach(q => {
        pool.push({
          ...q,
          _dailyMat: matiere,
          _dailySrc: matiere === 'proc' ? 'Litt.' : 'Gram.',
        });
      });
    });
  }

  pool = shuf(pool).slice(0, DAILY_TARGET);
  return pool.map(q => shuffleQcmOptions(q));
}

function updateDailyReviewBadge() {
  const btn = el('daily-review-nav');
  const hero = el('daily-review-hero');
  const done = isDailyReviewDoneToday();
  const st = loadDailyReviewState();
  const badge = done
    ? `fait aujourd'hui ✅${st.score?.tot ? ` · ${st.score.ok}/${st.score.tot}` : ''}`
    : 'à faire';
  if (btn) {
    btn.title = `Révision du jour — ${badge}`;
    const lbl = btn.querySelector('.daily-nav-badge');
    if (lbl) lbl.textContent = done ? '✅' : '📅';
  }
  if (hero) {
    hero.style.display = '';
    hero.innerHTML = `
      <div class="daily-head">
        <span class="daily-lbl">📅 Révision du jour</span>
        <span class="daily-done${done ? '' : ' daily-pending'}">${badge}</span>
      </div>
      <p class="daily-review-desc">${done
        ? 'Bravo ! Reviens demain pour une nouvelle session ciblée sur tes points faibles.'
        : 'Mini-quiz (~12 questions) sur tes catégories les moins maîtrisées en Littérature et Grammaire.'}</p>
      <button type="button" class="pbtn" onclick="openDailyReview()">${done ? '↺ Refaire la session' : '▶ Commencer'}</button>`;
  }
}

function renderDailyReviewIntro() {
  const intro = el('daily-review-intro');
  if (!intro) return;
  const done = isDailyReviewDoneToday();
  const st = loadDailyReviewState();
  const weak = [
    ..._dailyCollectCatScores('proc'),
    ..._dailyCollectCatScores('gram'),
  ].sort((a, b) => a.pct - b.pct).slice(0, 3);
  const focusHtml = weak.length
    ? `<p class="daily-review-focus">Catégories ciblées : ${weak.map(w =>
        `<strong>${w.matiere === 'proc' ? 'Litt.' : 'Gram.'} · ${w.cat}</strong> (${w.pct}%)`
      ).join(' · ')}</p>`
    : '<p class="daily-review-focus">Première session : échantillon équilibré toutes catégories.</p>';
  intro.innerHTML = `
    <p class="hero-sub">${done ? `Session du jour terminée (${st.score?.ok || 0}/${st.score?.tot || 0}).` : 'Session personnalisée selon tes statistiques QCM.'}</p>
    ${focusHtml}
    <div class="btnrow" style="margin-top:1rem">
      <button type="button" class="pbtn" onclick="startDailyReview()">${done ? '↺ Nouvelle session' : '▶ Lancer la révision'}</button>
    </div>`;
}

function startDailyReview() {
  const s = QCM_STATE.daily;
  s.shuffled = buildDailyReview();
  s.answers = {};
  s.currentIdx = 0;
  _qcmStreak.daily = 0;
  renderQ('daily');
  el('daily-qcont')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function openDailyReview() {
  if (typeof switchMatiere === 'function') switchMatiere('proc');
  const tab = el('stab-daily');
  if (typeof switchPg === 'function') switchPg('proc', 'p-daily', tab);
  renderDailyReviewIntro();
  const s = QCM_STATE.daily;
  if (!s.shuffled.length) startDailyReview();
  else renderQ('daily');
}

function dailyReviewOnComplete(ok, tot) {
  saveDailyReviewState({ date: dailyReviewTodayISO(), done: true, score: { ok, tot } });
  updateDailyReviewBadge();
  renderDailyReviewIntro();
  const pct = tot ? Math.round(ok / tot * 100) : 0;
  if (getSetting('confettiOn') && pct >= getSetting('confettiThr') && typeof launchConfetti === 'function') {
    launchConfetti();
  }
  if (typeof playSound === 'function') {
    if (pct >= getSetting('confettiThr')) playSound('levelup');
    else if (pct >= 60) playSound('complete');
    else if (pct >= 40) playSound('partial');
  }
  if (typeof updateStreakNav === 'function') updateStreakNav();
  if (typeof scheduleDashboardUpdate === 'function') scheduleDashboardUpdate();
}

function initDailyReview() {
  if (!QCM_STATE.daily) return;
  updateDailyReviewBadge();
  renderDailyReviewIntro();
}
