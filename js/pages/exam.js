/* ══════════════════════════════════════════
   MODE EXAMEN
   ══════════════════════════════════════════ */
const EXAM_STATE = {
  running: false,
  questions: [],
  answers: {},
  timeLeft: 0,
  totalTime: 0,
  interval: null,
  matiere: 'both', // 'both' | 'proc' | 'gram'
  count: 20
};
const EXAM_PRESETS = [
  { label:'10 questions · 5 min', count:10, time:300 },
  { label:'20 questions · 10 min', count:20, time:600 },
  { label:'30 questions · 15 min', count:30, time:900 },
  { label:'50 questions · 25 min', count:50, time:1500 },
  { label:'100 questions · 45 min', count:100, time:2700 },
];
let _examPreset = 1;
let _examMat = 'both';

function renderExam() {
  const active = document.querySelector('.matiere.on');
  let cont = el('exam-cont');
  if (active?.id === 'm-gram') cont = el('gram-exam-cont');
  else if (active?.id === 'm-vocab') cont = el('vocab-exam-cont');
  if (!cont) return;
  if (!EXAM_STATE.running) renderExamSetup(cont);
  else renderExamQuiz(cont);
}

function renderExamSetup(cont) {
  const preset = EXAM_PRESETS[_examPreset];
  const procPool = typeof PROC_QCM !== 'undefined' ? PROC_QCM.length : 0;
  const gramPool = typeof GRAM_QCM !== 'undefined' ? GRAM_QCM.length : 0;
  const vocabPool = typeof VOCAB_QCM !== 'undefined' ? VOCAB_QCM.length : 0;
  const poolSize = _examMat === 'both'
    ? procPool + gramPool + vocabPool
    : _examMat === 'proc' ? procPool
    : _examMat === 'gram' ? gramPool
    : _examMat === 'vocab' ? vocabPool
    : procPool + gramPool + vocabPool;
  let gProb = null;
  try {
    gProb = typeof computeGlobalReadiness === 'function' ? computeGlobalReadiness().prob : null;
  } catch (e) {
    console.error('renderExamSetup gProb', e);
  }
  const weakPreview = gProb?.statCatalog?.analysis?.weaknesses?.slice(0, 3) || [];
  const weakListHtml = weakPreview.length
    ? `<div class="exam-prob-weak"><span style="font-size:10px;color:var(--tx3)">Priorités : </span>${weakPreview.map(w =>
        `<span class="exam-prob-weak-tag">${w.icon} ${w.name.length > 22 ? w.name.slice(0, 20) + '…' : w.name} (${w.prob}%)</span>`
      ).join('')}</div>`
    : '';
  const probPreview = gProb && getSetting('probShowExamPreview') !== false ? `
    <div class="exam-prob-preview">
      <div class="exam-prob-preview-head">Probabilité d'admis avant cet examen</div>
      <div class="exam-prob-preview-main" style="color:${gProb.color}">${gProb.pct}% · ${gProb.label}</div>
      <div class="exam-prob-preview-sub">Fourchette ${gProb.band} · confiance ${gProb.confidence.pct}%</div>
      <div class="exam-prob-mentions">
        ${['pass','ab','b','tb'].map(k => {
          const x = gProb.mentions[k];
          return `<span>${x.threshold}/20 : <b>${x.pct}%</b></span>`;
        }).join('')}
      </div>
      ${weakListHtml}
    </div>` : '';
  cont.innerHTML = `
    <div class="exam-setup">
      <h3>Mode Examen</h3>
      <p>Questions mélangées (programme · ${typeof PROC_DATA !== 'undefined' ? PROC_DATA.length : 20} procédés courants) avec chronomètre global.</p>
      ${probPreview}
      <p class="exam-pool-info">Banque disponible : <strong>${procPool}</strong> QCM littérature · <strong>${gramPool}</strong> QCM grammaire · <strong>${vocabPool}</strong> QCM vocabulaire${poolSize < preset.count ? ` · max ${poolSize} questions pour cette matière` : ''}</p>
      <div style="margin-bottom:.8rem">
        <div style="font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--tx3);margin-bottom:.5rem">Nombre de questions &amp; durée</div>
        <div class="exam-opts" id="exam-preset-opts">
          ${EXAM_PRESETS.map((p, i) =>
            `<button class="exam-opt-btn${i === _examPreset ? ' on' : ''}" onclick="_setExamPreset(${i})">${p.label}</button>`
          ).join('')}
        </div>
      </div>
      <div style="margin-bottom:1.2rem">
        <div style="font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--tx3);margin-bottom:.5rem">Matière</div>
        <div class="exam-opts">
          <button class="exam-opt-btn${_examMat === 'proc' ? ' on' : ''}" onclick="_setExamMat('proc')">📖 Littérature</button>
          <button class="exam-opt-btn${_examMat === 'gram' ? ' on' : ''}" onclick="_setExamMat('gram')">✍️ Grammaire</button>
          <button class="exam-opt-btn${_examMat === 'vocab' ? ' on' : ''}" onclick="_setExamMat('vocab')">📚 Vocabulaire</button>
          <button class="exam-opt-btn${_examMat === 'both' ? ' on' : ''}" onclick="_setExamMat('both')">🎓 Toutes</button>
        </div>
      </div>
      <button class="pbtn" style="font-size:13.5px;padding:10px 28px" onclick="startExam()">▶ Démarrer l'examen</button>
    </div>`;
}

function _setExamPreset(i) {
  _examPreset = i;
  applySetting('examPresetDefault', i);
  renderExam();
}
function _setExamMat(m) {
  _examMat = m;
  applySetting('examMatDefault', m);
  renderExam();
}

function startExam() {
  const preset = EXAM_PRESETS[_examPreset];
  let pool = [];
  if (_examMat === 'both' || _examMat === 'proc') pool = pool.concat(PROC_QCM.map(q => ({ ...q, src:'Littérature' })));
  if (_examMat === 'both' || _examMat === 'gram') pool = pool.concat(GRAM_QCM.map(q => ({ ...q, src:'Grammaire' })));
  if (_examMat === 'both' || _examMat === 'vocab') pool = pool.concat((typeof VOCAB_QCM !== 'undefined' ? VOCAB_QCM : []).map(q => ({ ...q, src:'Vocabulaire' })));
  if (!pool.length) { alert('Aucune question disponible pour cette matière.'); return; }
  const count = Math.min(preset.count, pool.length);
  EXAM_STATE.questions = shuf(pool).slice(0, count).map(q => shuffleQcmOptions(q));
  EXAM_STATE.answers = {};
  EXAM_STATE.timeLeft = preset.time;
  EXAM_STATE.totalTime = preset.time;
  EXAM_STATE.running = true;
  if (EXAM_STATE.interval) clearInterval(EXAM_STATE.interval);
  EXAM_STATE.interval = setInterval(() => {
    EXAM_STATE.timeLeft--;
    _updateExamTimer();
    if (typeof BacSounds !== 'undefined') BacSounds.examTimerTick(EXAM_STATE.timeLeft);
    if (EXAM_STATE.timeLeft <= 0) finishExam(true);
  }, 1000);
  if (typeof BacSounds !== 'undefined') BacSounds.resetExamTimerTick();
  renderExam();
}

function _updateExamTimer() {
  const timerEl = el('exam-timer');
  const gfill = el('exam-gfill');
  if (!timerEl) return;
  const m = Math.floor(EXAM_STATE.timeLeft / 60);
  const s = EXAM_STATE.timeLeft % 60;
  timerEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  timerEl.classList.toggle('danger', EXAM_STATE.timeLeft < 60);
  if (gfill) {
    const pct = EXAM_STATE.timeLeft / EXAM_STATE.totalTime * 100;
    gfill.style.width = pct + '%';
    gfill.classList.toggle('danger', EXAM_STATE.timeLeft < 60);
  }
}

function ansExam(qi, oi) {
  if (EXAM_STATE.answers.hasOwnProperty(qi)) return;
  const correct = oi === EXAM_STATE.questions[qi].ans;
  EXAM_STATE.answers[qi] = oi;
  if (typeof playSound === 'function') playSound(correct ? 'correct' : 'wrong');

  const div = el(`examqc${qi}`);
  if (div) {
    div.classList.add('done');
    div.querySelectorAll('.opt').forEach((btn, i) => {
      btn.disabled = true;
      btn.classList.remove('ok','ng','dim');
      if (i === EXAM_STATE.questions[qi].ans) btn.classList.add('ok');
      else if (i === oi) btn.classList.add('ng');
      else btn.classList.add('dim');
    });
    div.querySelector('.qexpl').classList.add('show');
    if (typeof playSound === 'function') {
      setTimeout(() => playSound('reveal'), getSetting('reduceMotion') ? 0 : 220);
    }
  }

  const done = Object.keys(EXAM_STATE.answers).length;
  const tot = EXAM_STATE.questions.length;
  const okCount = Object.entries(EXAM_STATE.answers).filter(([qi2, oi2]) => oi2 === EXAM_STATE.questions[qi2].ans).length;

  const prog = el('exam-prog');
  if (prog) prog.textContent = `${done} / ${tot} · ✓ ${okCount}`;

  if (done === tot) finishExam(false);
}

function finishExam(timeout) {
  if (EXAM_STATE.interval) { clearInterval(EXAM_STATE.interval); EXAM_STATE.interval = null; }
  if (typeof BacSounds !== 'undefined') BacSounds.resetExamTimerTick();
  EXAM_STATE.running = false;
  const tot = EXAM_STATE.questions.length;
  const ok = Object.entries(EXAM_STATE.answers).filter(([qi, oi]) => oi === EXAM_STATE.questions[qi].ans).length;
  const pct = tot ? Math.round(ok / tot * 100) : 0;
  const timeUsed = EXAM_STATE.totalTime - EXAM_STATE.timeLeft;
  if (typeof recordExamResult === 'function') {
    recordExamResult(ok, tot, _examMat, timeUsed, timeout);
  }
  if (getSetting('confettiOn') && pct >= getSetting('confettiThr')) launchConfetti();
  const examNote = Math.round(pct / 100 * 20 * 10) / 10;
  if (typeof playSound === 'function') {
    if (timeout) playSound('timeout');
    else if (typeof playGradeSound === 'function') playGradeSound(examNote);
    else if (pct >= 60) playSound('complete');
    else if (pct >= 40) playSound('partial');
  }
  scheduleDashboardUpdate();
  updateStreakNav();

  const active = document.querySelector('.matiere.on');
  const curMat = active?.id === 'm-gram' ? 'gram' : active?.id === 'm-vocab' ? 'vocab' : 'proc';
  const cont = curMat === 'gram' ? el('gram-exam-cont') : curMat === 'vocab' ? el('vocab-exam-cont') : el('exam-cont');
  if (!cont) return;
  const mu = Math.floor(timeUsed / 60), su = timeUsed % 60;
  const gReady = typeof computeGlobalReadiness === 'function' ? computeGlobalReadiness() : null;
  const probNote = gReady ? gReady.prob : (typeof computeReadiness === 'function' ? computeReadiness(curMat).prob : null);
  const probDelta = probNote && gReady?.prob?.pct != null
    ? (pct >= 60 ? ` · Cet examen renforce ton profil` : pct >= 50 ? ` · Résultat dans la moyenne` : ` · Cible les priorités du centre probabilités`)
    : '';
  const weakAfter = probNote?.statCatalog?.analysis?.weaknesses?.slice(0, 2).map(w => w.name).join(', ') || '';
  const msg = pct >= 90 ? 'Excellent ! Prêt(e) pour le bac 🎉' : pct >= 75 ? 'Très bon résultat !' : pct >= 60 ? 'Bien, encore un effort.' : 'Continue à réviser !';

  const probDetail = probNote ? `
    <div class="exam-result-prob">
      <div class="exam-result-prob-head" style="color:${probNote.color}">${probNote.pct}% · ${probNote.label}</div>
      <div class="exam-result-prob-grid">
        <span>Admis ≥10 : <b>${probNote.mentions.pass.pct}%</b></span>
        <span>AB ≥12 : <b>${probNote.mentions.ab.pct}%</b></span>
        <span>B ≥14 : <b>${probNote.mentions.b.pct}%</b></span>
        <span>TB ≥16 : <b>${probNote.mentions.tb.pct}%</b></span>
      </div>
      <div class="exam-result-prob-note">Note estimée au bac : <strong>${probNote.gradeEst.noteLow}–${probNote.gradeEst.noteHigh}/20</strong> · fourchette admis ${probNote.band}${probDelta}</div>
      ${weakAfter ? `<div class="exam-result-prob-note" style="margin-top:4px">À renforcer : ${weakAfter}</div>` : ''}
      <p class="rd-advice" style="margin-top:.5rem">${probNote.advice}</p>
    </div>` : '';

  cont.innerHTML = `
    <div class="rbox" style="max-width:560px;margin:0 auto">
      <h3>${timeout ? '⏱ Temps écoulé !' : 'Examen terminé !'}</h3>
      <div class="rgrade">${ok} / ${tot}</div>
      <p>${pct}% · équivalent ~${examNote}/20 · ${msg}</p>
      ${probDetail}
      <p style="font-size:11.5px;color:var(--tx3);margin-top:-.5rem;margin-bottom:1.2rem">Temps : ${mu}min ${String(su).padStart(2,'0')}s · Enregistré dans les stats</p>
      <div class="btnrow">
        <button class="pbtn" onclick="startExam()">▶ Nouvel examen</button>
        <button class="sbtn" onclick="EXAM_STATE.running=false;renderExam()">⚙ Configurer</button>
        <button class="sbtn" onclick="navTab('${curMat}','p-stat')">📊 Stats</button>
      </div>
    </div>`;
}

function renderExamQuiz(cont) {
  const tot = EXAM_STATE.questions.length;
  const done = Object.keys(EXAM_STATE.answers).length;
  const okC = Object.entries(EXAM_STATE.answers).filter(([qi, oi]) => oi === EXAM_STATE.questions[qi].ans).length;
  const m = Math.floor(EXAM_STATE.timeLeft / 60);
  const s = EXAM_STATE.timeLeft % 60;

  let html = `
    <div class="exam-hero">
      <div class="exam-timer${EXAM_STATE.timeLeft < 60 ? ' danger' : ''}" id="exam-timer">${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}</div>
      <div class="exam-status" id="exam-prog">${done} / ${tot} · ✓ ${okC}</div>
      <div class="exam-gbar"><div class="exam-gfill${EXAM_STATE.timeLeft < 60 ? ' danger' : ''}" id="exam-gfill" style="width:${EXAM_STATE.timeLeft / EXAM_STATE.totalTime * 100}%"></div></div>
    </div>`;

  EXAM_STATE.questions.forEach((q, qi) => {
    const ans_done = EXAM_STATE.answers.hasOwnProperty(qi);
    const opts = q.opts.map((o, oi) => {
      let cls = 'opt';
      if (ans_done) {
        if (oi === q.ans) cls += ' ok';
        else if (oi === EXAM_STATE.answers[qi]) cls += ' ng';
        else cls += ' dim';
      }
      const kb = !ans_done ? `<span class="kbhint">${oi + 1}</span>` : '';
      return `<button class="${cls}" ${ans_done ? 'disabled' : ''} onclick="ansExam(${qi},${oi})">${kb}${o}</button>`;
    }).join('');
    html += `
      <div class="qcard${ans_done ? ' done' : ''}" id="examqc${qi}">
        <div class="qnum"><span>Q${qi + 1} · ${q.src} · ${q.cat}</span></div>
        <div class="qtxt">${q.q}</div>
        <div class="opts">${opts}</div>
        <div class="qexpl${ans_done ? ' show' : ''}">${q.expl}</div>
      </div>`;
  });
  cont.innerHTML = html;
}

