/* ══════════════════════════════════════════
   QCM — Engine générique (2 matières)
   ══════════════════════════════════════════ */
const QCM_STATE = {
  proc: { cat:'Toutes', answers:{}, shuffled:[], currentIdx:0, data:PROC_QCM, cats:PROC_QCM_CATS, stKey:'bac_proc_stats', prefix:'p', timer:false },
  gram: { cat:'Toutes', answers:{}, shuffled:[], currentIdx:0, data:GRAM_QCM, cats:GRAM_QCM_CATS, stKey:'bac_gram_stats', prefix:'g', timer:false },
  vocab: { cat:'Toutes', answers:{}, shuffled:[], currentIdx:0, data:typeof VOCAB_QCM !== 'undefined' ? VOCAB_QCM : [], cats:typeof VOCAB_QCM_CATS !== 'undefined' ? VOCAB_QCM_CATS : ['Toutes'], stKey:'bac_vocab_stats', prefix:'v', timer:false }
};
const _reviseState = { proc: false, gram: false, vocab: false };

let _timerInterval = null;
const TIMER_SEC = 30;

function toggleTimer(m) {
  QCM_STATE[m].timer = !QCM_STATE[m].timer;
  const btn = el(QCM_STATE[m].prefix + 'timer-btn');
  if (btn) btn.classList.toggle('on', QCM_STATE[m].timer);
  mixQ(m);
}

function clearTimerInterval() {
  if (_timerInterval) { clearInterval(_timerInterval); _timerInterval = null; }
  if (typeof BacSounds !== 'undefined') BacSounds.resetQcmTimerTick();
}

function startTimer(m, qi) {
  clearTimerInterval();
  if (!QCM_STATE[m].timer) return;
  let remaining = getSetting('timerDuration') || TIMER_SEC;
  if (typeof BacSounds !== 'undefined') BacSounds.resetQcmTimerTick();
  _updateTimerUI(m, qi, remaining);
  _timerInterval = setInterval(() => {
    remaining--;
      if (remaining <= 0) {
      clearTimerInterval();
      if (typeof playSound === 'function') playSound('timeout');
      if (!QCM_STATE[m].answers.hasOwnProperty(qi)) ansQ(m, qi, -1);
    } else {
      if (typeof BacSounds !== 'undefined') BacSounds.qcmTimerTick(remaining);
      _updateTimerUI(m, qi, remaining);
    }
  }, 1000);
}

function _updateTimerUI(m, qi, remaining) {
  const card = el(`${m}qc${qi}`);
  if (!card) return;
  const dur  = getSetting('timerDuration');
  const bar  = card.querySelector('.timer-fill');
  const lbl  = card.querySelector('.timer-lbl');
  if (bar) { bar.style.width = (remaining / dur * 100) + '%'; bar.classList.toggle('danger', remaining <= Math.min(8, dur * 0.25)); }
  if (lbl) lbl.textContent = `⏱ ${remaining}s`;
}

function resetQ(m) {
  clearTimerInterval();
  QCM_STATE[m].answers = {};
  QCM_STATE[m].currentIdx = 0;
  if (getSetting('qcmShuffleOnReset')) mixQ(m);
  else renderQ(m);
}

function setQcmSession(n, btn) {
  _settings.qcmSessionSize = n;
  saveSettings();
  document.querySelectorAll('#p-session-chips .chip, #g-session-chips .chip').forEach(b => b.classList.remove('on'));
  if (btn) {
    const chips = btn.closest('.chips');
    const idx = chips ? [...chips.querySelectorAll('.chip')].indexOf(btn) : -1;
    ['p-session-chips', 'g-session-chips', 'v-session-chips'].forEach(id => {
      const c = el(id);
      if (c && idx >= 0) c.querySelectorAll('.chip')[idx]?.classList.add('on');
    });
  }
  mixQ('proc');
  mixQ('gram');
  mixQ('vocab');
}

function syncSessionChips() {
  const sizes = [10, 20, 30, 50, 100, 0];
  const cur = getSetting('qcmSessionSize');
  const idx = Math.max(0, sizes.indexOf(cur));
  ['p-session-chips', 'g-session-chips', 'v-session-chips'].forEach(id => {
    const c = el(id);
    if (!c) return;
    c.querySelectorAll('.chip').forEach((b, i) => b.classList.toggle('on', i === idx));
  });
}

function toggleQcmFocus(m) {
  _settings.qcmFocusMode = !_settings.qcmFocusMode;
  saveSettings();
  applyUiPreferences(false);
  renderQ(m);
}

function _buildQcard(m, q, qi) {
  const s = QCM_STATE[m];
  const done  = s.answers.hasOwnProperty(qi);
  const favs  = loadFavs();
  const favKey = m === 'proc' ? 'qproc' : m === 'vocab' ? 'qvocab' : 'qgram';
  const isFav = favs[favKey].includes(q.q);
  const showFav = getSetting('qcmShowFavBtn');
  const showCorpus = getSetting('qcmShowCorpusLink') && q.ref;
  const opts = q.opts.map((o, oi) => {
    let cls = 'opt';
    if (done) {
      if (oi === q.ans) cls += ' ok';
      else if (oi === s.answers[qi]) cls += ' ng';
      else cls += ' dim';
    }
    const kb = !done ? `<span class="kbhint">${oi + 1}</span>` : '';
    return `<button class="${cls}" ${done ? 'disabled' : ''} onclick="ansQ('${m}',${qi},${oi})">${kb}${o}</button>`;
  }).join('');
  const timerDur = getSetting('timerDuration');
  const timerHtml = s.timer && !done
    ? `<div class="timer-bar active"><div class="timer-fill" style="width:100%"></div></div>
       <div class="timer-lbl active">⏱ ${timerDur}s</div>` : '';
  const feedbackHtml = done
    ? `<div class="qfeedback ${s.answers[qi] ? 'ok' : 'ng'}">${s.answers[qi] ? '✓ Bonne réponse !' : '✗ Mauvaise réponse'}</div>`
    : '';
  return `
    <div class="qnum">
      <span>Q${qi + 1} / ${s.shuffled.length} · ${q.cat}</span>
      ${showFav ? `<button class="qfav-btn${isFav ? ' on' : ''}" onclick="toggleFavQ('${m}',${qi})" title="Favori">★</button>` : ''}
    </div>
    ${timerHtml}
    <div class="qtxt">${q.q}</div>
    <div class="opts">${opts}</div>
    ${feedbackHtml}
    <div class="qexpl${done ? ' show' : ''}">${q.expl}${showCorpus ? `<div class="corpus-ref-row"><button type="button" class="corpus-inline-btn" onclick="openCorpusRef('${q.ref}')">📖 Voir ${q.ref} dans le Corpus</button></div>` : ''}</div>`;
}

function _updateQFocusNav(m, qi) {
  const s = QCM_STATE[m];
  const cont = el(s.prefix + 'qcont');
  const nav = cont && cont.querySelector('.qfocus-nav');
  if (!nav || !getSetting('qcmFocusMode')) return;
  const answered = s.answers.hasOwnProperty(qi);
  const isLast = qi >= s.shuffled.length - 1;
  const nextBtn = answered
    ? (isLast
      ? `<button class="pbtn qfocus-next" onclick="renderQ('${m}')">Voir le bilan →</button>`
      : `<button class="pbtn qfocus-next" onclick="qNav('${m}',1)">Suivant →</button>`)
    : `<button class="sbtn qfocus-next" disabled title="Choisis d'abord une réponse">Suivant →</button>`;
  nav.innerHTML = `
    <button class="sbtn" onclick="qNav('${m}',-1)" ${qi === 0 ? 'disabled' : ''}>← Préc.</button>
    <span class="qfocus-lbl">${qi + 1} / ${s.shuffled.length}</span>
    ${nextBtn}`;
}

function _finishQcard(m, qi, oi) {
  const s = QCM_STATE[m];
  const div = el(`${m}qc${qi}`);
  if (!div) return;
  const correct = oi === s.shuffled[qi].ans;
  div.classList.add('done');
  div.querySelectorAll('.timer-bar, .timer-lbl').forEach(x => x.style.display = 'none');
  div.querySelectorAll('.opt').forEach((btn, i) => {
    btn.disabled = true;
    btn.classList.remove('ok', 'ng', 'dim');
    if (i === s.shuffled[qi].ans) btn.classList.add('ok');
    else if (i === oi) btn.classList.add('ng');
    else btn.classList.add('dim');
  });
  let fb = div.querySelector('.qfeedback');
  if (!fb) {
    fb = document.createElement('div');
    const optsEl = div.querySelector('.opts');
    if (optsEl) optsEl.insertAdjacentElement('afterend', fb);
  }
  fb.className = 'qfeedback ' + (correct ? 'ok' : 'ng');
  fb.textContent = correct ? '✓ Bonne réponse !' : '✗ Mauvaise réponse';
  const explEl = div.querySelector('.qexpl');
  if (explEl) explEl.classList.add('show');
  div.querySelectorAll('.sbtn').forEach(b => { if (b.textContent.includes('explication')) b.remove(); });
  if (getSetting('qcmFocusMode')) _updateQFocusNav(m, qi);
}

function updateQProg(m) {
  const s = QCM_STATE[m];
  const tot  = s.shuffled.length;
  const done = Object.keys(s.answers).length;
  const ok   = Object.values(s.answers).filter(v => v === true).length;
  const sc = el(s.prefix + 'qsc');
  const qt = el(s.prefix + 'qtot');
  const bar = el(s.prefix + 'qbar');
  const prog = el(s.prefix + 'qprog');
  if (sc) sc.textContent = ok;
  if (qt) qt.textContent = tot;
  if (bar) bar.style.width = (tot ? Math.round(done / tot * 100) : 0) + '%';
  if (prog) prog.textContent = `${done} / ${tot} question${done !== 1 ? 's' : ''} répondue${done !== 1 ? 's' : ''}`;
}

function _paintQFocus(m, skipTimer) {
  const s = QCM_STATE[m];
  const cont = el(s.prefix + 'qcont');
  if (!cont || !s.shuffled.length) return;
  if (s.currentIdx >= s.shuffled.length) s.currentIdx = 0;
  while (s.currentIdx < s.shuffled.length && s.answers.hasOwnProperty(s.currentIdx)) s.currentIdx++;
  if (s.currentIdx >= s.shuffled.length) s.currentIdx = Math.max(0, s.shuffled.length - 1);
  const qi = s.currentIdx;
  cont.replaceChildren();
  const div = document.createElement('div');
  div.className = 'qcard qcard-focus' + (s.answers.hasOwnProperty(qi) ? ' done' : '');
  div.id = `${m}qc${qi}`;
  div.innerHTML = _buildQcard(m, s.shuffled[qi], qi);
  cont.appendChild(div);
  const nav = document.createElement('div');
  nav.className = 'qfocus-nav';
  cont.appendChild(nav);
  _updateQFocusNav(m, qi);
  if (!skipTimer && s.timer && !s.answers.hasOwnProperty(qi)) setTimeout(() => startTimer(m, qi), 60);
}

function renderQ(m) {
  clearTimerInterval();
  const s    = QCM_STATE[m];
  const cont = el(s.prefix + 'qcont');
  if (!cont) return;
  cont.innerHTML = '';
  updateQProg(m);

  if (!s.shuffled.length) {
    cont.innerHTML = '<div class="nores">Aucune question dans cette catégorie.</div>';
    return;
  }

  if (getSetting('qcmFocusMode')) {
    _paintQFocus(m, true);
  } else {
    s.shuffled.forEach((q, qi) => {
      const div = document.createElement('div');
      div.className = 'qcard' + (s.answers.hasOwnProperty(qi) ? ' done' : '');
      div.id = `${m}qc${qi}`;
      div.innerHTML = _buildQcard(m, q, qi);
      cont.appendChild(div);
    });
    if (s.timer) {
      const first = s.shuffled.findIndex((_, qi) => !s.answers.hasOwnProperty(qi));
      if (first > -1) setTimeout(() => startTimer(m, first), 60);
    }
  }

  const doneCount = Object.keys(s.answers).length;
  if (doneCount === s.shuffled.length && s.shuffled.length > 0) {
    const ok  = Object.values(s.answers).filter(v => v === true).length;
    const pct = Math.round(ok / s.shuffled.length * 100);
    const msg = pct >= 90 ? 'Excellent ! 🎉' : pct >= 75 ? 'Très bon travail !' : pct >= 60 ? 'Bien, encore un effort.' : 'Continue à réviser !';
    const r = document.createElement('div');
    r.className = 'rbox';
    r.innerHTML = `
      <h3>Session terminée</h3>
      <div class="rgrade">${ok} / ${s.shuffled.length}</div>
      <p>${pct}% de bonnes réponses — ${msg}</p>
      <div class="btnrow">
        <button class="pbtn" onclick="mixQ('${m}')">Nouveau mélange</button>
        <button class="sbtn" onclick="resetQ('${m}')">Recommencer</button>
      </div>`;
    cont.appendChild(r);
    recordSession(m, ok, s.shuffled.length, s.cat);
    setTimeout(() => r.scrollIntoView({ behavior:'smooth', block:'nearest' }), 200);
  }
}

function qNav(m, delta) {
  const s = QCM_STATE[m];
  clearTimerInterval();
  if (delta > 0 && getSetting('qcmFocusMode') && !s.answers.hasOwnProperty(s.currentIdx)) return;
  s.currentIdx = Math.max(0, Math.min(s.shuffled.length - 1, s.currentIdx + delta));
  renderQ(m);
}

function ansQ(m, qi, oi) {
  clearTimerInterval();
  const s = QCM_STATE[m];
  if (s.answers.hasOwnProperty(qi)) return;
  const correct = oi === s.shuffled[qi].ans;
  s.answers[qi] = correct;
  if (typeof playSound === 'function' && oi >= 0) playSound(correct ? 'correct' : 'wrong');

  const st  = loadSt(s.stKey);
  const key = qKey(s.shuffled[qi]);
  if (!st.qdata[key]) st.qdata[key] = { ok: 0, total: 0, q: s.shuffled[qi].q.slice(0, 80) };
  st.qdata[key].total++;
  if (correct) st.qdata[key].ok++;
  saveSt(s.stKey, st);

  _finishQcard(m, qi, oi);
  updateQProg(m);

  if (getSetting('qcmAutoAdvance')) {
    if (getSetting('qcmFocusMode')) {
      const next = s.shuffled.findIndex((_, nqi) => nqi > qi && !s.answers.hasOwnProperty(nqi));
      if (next > -1) {
        s.currentIdx = next;
        const delay = getSetting('reduceMotion') ? 0 : 280;
        setTimeout(() => _paintQFocus(m), delay);
        return;
      }
    } else if (s.timer) {
      const next = s.shuffled.findIndex((_, nqi) => nqi > qi && !s.answers.hasOwnProperty(nqi));
      if (next > -1) setTimeout(() => startTimer(m, next), 350);
    }
  }

  if (Object.keys(s.answers).length === s.shuffled.length && !getSetting('qcmFocusMode')) {
    setTimeout(() => renderQ(m), getSetting('reduceMotion') ? 0 : 320);
  }
}

/* ══════════════════════════════════════════
   RÉVISION CIBLÉE
   ══════════════════════════════════════════ */

function toggleRevise(m) {
  _reviseState[m] = !_reviseState[m];
  const btn = el(QCM_STATE[m].prefix + 'revise-btn');
  if (btn) btn.classList.toggle('on', _reviseState[m]);
  mixQ(m);
}

/* Redéfinition finale de mixQ avec révision ciblée */
function mixQ(m) {
  clearTimerInterval();
  const s = QCM_STATE[m];
  let pool = s.data.filter(q => s.cat === 'Toutes' || q.cat === s.cat);
  if (_reviseState[m]) {
    const st = loadSt(s.stKey);
    const qdata = st.qdata || {};
    const thresh = getSetting('reviseThresh');
    const weak = pool.filter(q => {
      const d = qdata[qKey(q)];
      return !d || d.total === 0 || (d.ok / d.total) < thresh;
    });
    if (weak.length > 0) pool = weak;
  }
  const limit = getSetting('qcmSessionSize');
  const picked = limit > 0 ? shufSample(pool, limit) : shuf(pool);
  s.shuffled = picked.map(q => shuffleQcmOptions(q));
  s.answers = {};
  s.currentIdx = 0;
  renderQ(m);
}

/* ══════════════════════════════════════════
   CHIPS AVEC PROGRESSION
   ══════════════════════════════════════════ */
function _getCatPct(m, cat) {
  const s = QCM_STATE[m];
  const st = loadSt(s.stKey);
  const qdata = st.qdata || {};
  const relevant = s.data.filter(q => q.cat === cat);
  if (!relevant.length) return null;
  let ok = 0, tot = 0;
  relevant.forEach(q => {
    const d = qdata[qKey(q)];
    if (d && d.total > 0) { ok += d.ok; tot += d.total; }
  });
  return tot > 0 ? Math.round(ok / tot * 100) : null;
}

function initQcmCats(m) {
  const s = QCM_STATE[m];
  const f = el(s.prefix + 'qcats');
  if (!f || f.dataset.init) return;
  f.dataset.init = '1';
  s.cats.forEach(c => {
    const b = document.createElement('button');
    b.className = 'chip' + (c === s.cat ? ' on' : '');
    const showProg = getSetting('showCatProg');
    const pct = (c !== 'Toutes' && showProg) ? _getCatPct(m, c) : null;
    const pctHtml = pct !== null ? `<span class="chip-pct">${pct}%</span>` : '';
    b.innerHTML = c + pctHtml;
    b.onclick = () => {
      s.cat = c;
      document.querySelectorAll(`#${s.prefix}qcats .chip`).forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      mixQ(m);
    };
    f.appendChild(b);
  });
}

function refreshQcmCatProgress(m) {
  const s = QCM_STATE[m];
  const f = el(s.prefix + 'qcats');
  if (!f || !getSetting('showCatProg')) return;
  f.querySelectorAll('.chip').forEach((b, i) => {
    const c = s.cats[i];
    if (!c || c === 'Toutes') return;
    const pct = _getCatPct(m, c);
    let span = b.querySelector('.chip-pct');
    if (pct !== null) {
      if (!span) { span = document.createElement('span'); span.className = 'chip-pct'; b.appendChild(span); }
      span.textContent = pct + '%';
    } else if (span) span.remove();
  });
}

let _reviseExo = false;
function toggleReviseExo() {
  _reviseExo = !_reviseExo;
  const btn = el('exorevise-btn');
  if (btn) btn.classList.toggle('on', _reviseExo);
  mixExo();
}
function recordSession(m, ok, tot, cat) {
  const pct = tot ? Math.round(ok / tot * 100) : 0;
  if (getSetting('confettiOn') && pct >= getSetting('confettiThr')) launchConfetti();
  if (typeof playSound === 'function') {
    if (pct >= getSetting('confettiThr')) playSound('levelup');
    else if (pct >= 60) playSound('complete');
    else if (pct >= 40) playSound('partial');
  }
  const s  = QCM_STATE[m];
  const st = loadSt(s.stKey);
  st.sessions.push({ date: new Date().toLocaleDateString('fr-FR'), ok, tot, cat, ts: Date.now() });
  if (st.sessions.length > 50) st.sessions = st.sessions.slice(-50);
  saveSt(s.stKey, st);
  updateStreakNav();
  refreshQcmCatProgress(m);
  scheduleDashboardUpdate();
}

