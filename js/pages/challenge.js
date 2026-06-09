function getChallengePool() {
  if (!_dailyPool) {
    _dailyPool = [
      ...(typeof PROC_QCM !== 'undefined' ? PROC_QCM.map(q => ({ ...q, src: 'Littérature' })) : []),
      ...(typeof GRAM_QCM !== 'undefined' ? GRAM_QCM.map(q => ({ ...q, src: 'Grammaire' })) : []),
      ...(typeof VOCAB_QCM !== 'undefined' ? VOCAB_QCM.map(q => ({ ...q, src: 'Vocabulaire' })) : []),
    ];
  }
  return _dailyPool;
}

function getChallengeSlot(now = Date.now()) {
  const startMs = Math.floor(now / CHALLENGE_INTERVAL_MS) * CHALLENGE_INTERVAL_MS;
  const endMs = startMs + CHALLENGE_INTERVAL_MS;
  return {
    id: startMs,
    startMs,
    endMs,
    remainingSec: Math.max(0, Math.ceil((endMs - now) / 1000)),
  };
}

function formatChallengeCountdown(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

function challengeSlotKey(slotId) {
  return 'bac_challenge_' + slotId;
}

function getChallengeSlotResult(slotId) {
  return localStorage.getItem(challengeSlotKey(slotId));
}

function loadChallengeStats() {
  try {
    return JSON.parse(localStorage.getItem('bac_challenge_stats') || '{"history":[],"totals":{"ok":0,"fail":0}}');
  } catch (e) {
    return { history: [], totals: { ok: 0, fail: 0 } };
  }
}

function saveChallengeStats(st) {
  try { localStorage.setItem('bac_challenge_stats', JSON.stringify(st)); } catch (e) {}
}

function recordChallengeAnswer(ok, q, slotId) {
  if (getChallengeSlotResult(slotId)) return;
  localStorage.setItem(challengeSlotKey(slotId), ok ? 'ok' : 'fail');
  const st = loadChallengeStats();
  st.totals = st.totals || { ok: 0, fail: 0 };
  if (ok) st.totals.ok++;
  else st.totals.fail++;
  st.history = st.history || [];
  st.history.push({
    slotId,
    date: new Date().toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }),
    ok,
    src: q.src,
    q: q.q.slice(0, 90),
  });
  if (st.history.length > 60) st.history = st.history.slice(-60);
  saveChallengeStats(st);
}

function computeChallengeStats() {
  const st = loadChallengeStats();
  const totals = st.totals || { ok: 0, fail: 0 };
  const total = totals.ok + totals.fail;
  const pct = total ? Math.round(totals.ok / total * 100) : null;
  let streak = 0;
  const hist = st.history || [];
  for (let i = hist.length - 1; i >= 0; i--) {
    if (hist[i].ok) streak++;
    else break;
  }
  const slot = getChallengeSlot();
  return {
    ok: totals.ok,
    fail: totals.fail,
    total,
    pct,
    streak,
    slot,
    currentResult: getChallengeSlotResult(slot.id),
    history: hist.slice(-20).reverse(),
  };
}

function getPeriodicChallenge() {
  const pool = getChallengePool();
  if (!pool.length) return null;
  const slot = getChallengeSlot();
  const idx = Math.floor(seededRandom(slot.id) * pool.length);
  return shuffleQcmOptions({ ...pool[idx], slotId: slot.id }, slot.id + 17);
}

function getDailyChallenge() {
  return getPeriodicChallenge();
}

function updateChallengeCountdown() {
  const cd = el('challenge-countdown');
  if (!cd) return;
  const slot = getChallengeSlot();
  const result = getChallengeSlotResult(slot.id);
  if (result) {
    cd.textContent = `Prochain défi dans ${formatChallengeCountdown(slot.remainingSec)}`;
  } else {
    cd.textContent = `Expire dans ${formatChallengeCountdown(slot.remainingSec)}`;
  }
}

function initChallengeTimer() {
  if (_challengeTimer) clearInterval(_challengeTimer);
  _challengeSlotId = getChallengeSlot().id;
  _challengeTimer = setInterval(() => {
    updateChallengeCountdown();
    const slot = getChallengeSlot();
    if (slot.id !== _challengeSlotId) {
      _challengeSlotId = slot.id;
      renderDailyChallenge();
      ['proc', 'gram', 'vocab'].forEach(m => {
        const pg = el(m === 'proc' ? 'proc-p-stat' : 'gram-p-stat');
        if (pg && pg.classList.contains('on')) renderStats(m);
      });
    }
  }, 1000);
}

function renderDailyChallenge() {
  const box = el('daily-challenge');
  if (!box) return;
  if (!getSetting('showDailyChallenge')) { box.style.display = 'none'; return; }
  const q = getPeriodicChallenge();
  if (!q) { box.style.display = 'none'; return; }
  const slot = getChallengeSlot();
  const result = getChallengeSlotResult(q.slotId);
  const done = !!result;
  const slotStart = new Date(slot.startMs).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  box.style.display = '';
  box.innerHTML = `
    <div class="daily-head">
      <span class="daily-lbl">🎯 Défi express · ${q.src} · créneau ${slotStart}</span>
      ${done ? `<span class="daily-done ${result === 'ok' ? '' : 'daily-fail'}">${result === 'ok' ? '✓ Réussi' : '✗ Raté'}</span>` : ''}
    </div>
    <div class="daily-meta">
      <span>Nouveau défi toutes les <strong>10 min</strong></span>
      <span class="challenge-countdown" id="challenge-countdown"></span>
    </div>
    <div class="daily-q">${q.q}</div>
    <div class="daily-opts" id="daily-opts">
      ${q.opts.map((o, i) =>
        `<button class="opt" ${done ? 'disabled' : ''} onclick="ansDaily(${i})">${o}</button>`
      ).join('')}
    </div>
    <div class="qexpl${done ? ' show' : ''}" id="daily-expl">${q.expl}</div>`;
  updateChallengeCountdown();
}

function renderChallengeStats(m) {
  const p = STAT_CONFIG[m].prefix;
  const box = el(p + 'challenge');
  if (!box) return;
  const ch = computeChallengeStats();
  if (!ch.total && !ch.currentResult) {
    box.innerHTML = '<div class="no-data">Aucun défi express joué. Réponds au défi sur la page d\'accueil Littérature (toutes les 10 min).</div>';
    return;
  }
  const slot = ch.slot;
  const curLabel = ch.currentResult === 'ok' ? '✓ Réussi ce créneau'
    : ch.currentResult === 'fail' ? '✗ Raté ce créneau'
    : '⏳ En cours — réponds avant la fin du créneau';
  const curCls = ch.currentResult === 'ok' ? 'hi' : ch.currentResult === 'fail' ? 'lo' : 'mid';
  box.innerHTML = `
    <div class="ch-stats-head">
      <div class="ch-stat"><span class="ch-stat-v">${ch.total}</span><span class="ch-stat-l">Défis joués</span></div>
      <div class="ch-stat"><span class="ch-stat-v">${ch.pct !== null ? ch.pct + '%' : '—'}</span><span class="ch-stat-l">Réussite</span></div>
      <div class="ch-stat"><span class="ch-stat-v">${ch.ok}</span><span class="ch-stat-l">Réussis</span></div>
      <div class="ch-stat"><span class="ch-stat-v">${ch.streak > 0 ? '🔥 ' + ch.streak : ch.fail}</span><span class="ch-stat-l">${ch.streak > 0 ? 'Série' : 'Ratés'}</span></div>
    </div>
    <div class="ch-current hscore ${curCls}">${curLabel} · expire dans ${formatChallengeCountdown(slot.remainingSec)}</div>
    ${ch.history.length ? `<div class="ch-history">${ch.history.map(h =>
      `<div class="hrow">
        <span class="hdate">${h.date}</span>
        <span class="hcat">${h.src}</span>
        <span class="hscore ${h.ok ? 'hi' : 'lo'}">${h.ok ? '✓' : '✗'} · ${h.q.slice(0, 48)}${h.q.length > 48 ? '…' : ''}</span>
      </div>`
    ).join('')}</div>` : ''}`;
}

function ansDaily(oi) {
  const q = getPeriodicChallenge();
  if (!q || getChallengeSlotResult(q.slotId)) return;
  const ok = oi === q.ans;
  recordChallengeAnswer(ok, q, q.slotId);
  if (typeof playSound === 'function') {
    if (ok) {
      const ch = typeof computeChallengeStats === 'function' ? computeChallengeStats() : null;
      if (ch && ch.streak >= 2) playSound('streak');
      else playSound('correct');
    } else playSound('wrong');
  }
  document.querySelectorAll('#daily-opts .opt').forEach((btn, i) => {
    btn.disabled = true;
    btn.classList.remove('ok', 'ng', 'dim');
    if (i === q.ans) btn.classList.add('ok');
    else if (i === oi) btn.classList.add('ng');
    else btn.classList.add('dim');
  });
  const expl = el('daily-expl');
  if (expl) expl.classList.add('show');
  if (ok && getSetting('confettiOn')) launchConfetti();
  renderDailyChallenge();
  updateStreakNav();
  if (typeof syncTimeTrackerFromDom === 'function') syncTimeTrackerFromDom();
  ['proc', 'gram', 'vocab'].forEach(m => {
    const pg = el(m === 'proc' ? 'proc-p-stat' : 'gram-p-stat');
    if (pg && pg.classList.contains('on')) renderStats(m);
  });
}
