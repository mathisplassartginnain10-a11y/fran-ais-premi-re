/* ══════════════════════════════════════════
   FLASHCARD MODE (Procédés)
   ══════════════════════════════════════════ */
let carteState = { items: [], idx: 0, flipped: false, scores: {}, cat: 'Tout' };
let _autoFlipTO = null;
function _clearAutoFlip() { if (_autoFlipTO) { clearTimeout(_autoFlipTO); _autoFlipTO = null; } }

function initCarteChips() {
  const f = el('carte-chips');
  if (!f || f.dataset.init) return;
  f.dataset.init = '1';
  PROC_CATS.forEach(c => {
    const b = document.createElement('button');
    b.className = 'chip' + (c === 'Tout' ? ' on' : '');
    b.textContent = c;
    b.onclick = () => {
      carteState.cat = c;
      document.querySelectorAll('#carte-chips .chip').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      carteShuffle();
    };
    f.appendChild(b);
  });
}

function initCartes() {
  initCarteChips();
  if (!carteState.items.length) carteShuffle();
  else renderCarte();
}

function carteShuffle() {
  _clearAutoFlip();
  const filtered = carteState.cat === 'Tout'
    ? [...PROC_DATA]
    : PROC_DATA.filter(d => d.cat === carteState.cat);
  carteState.items = shuf(filtered);
  carteState.idx = 0;
  carteState.flipped = false;
  carteState.scores = {};
  if (!filtered.length) {
    const cont = el('carte-cont');
    if (cont) cont.innerHTML = '<div class="no-data">Aucune carte pour cette catégorie.</div>';
    if (el('carte-prog')) el('carte-prog').textContent = '0 / 0';
    const pbar = el('carte-pbar');
    if (pbar) pbar.style.width = '0%';
    return;
  }
  renderCarte();
}

function carteReset() {
  _clearAutoFlip();
  carteState.idx = 0;
  carteState.flipped = false;
  carteState.scores = {};
  renderCarte();
}

function carteFlip() {
  _clearAutoFlip();
  carteState.flipped = !carteState.flipped;
  const inner = document.getElementById('carte-inner');
  if (inner) inner.classList.toggle('flipped', carteState.flipped);
  // Quand retournée manuellement, mettre à jour les boutons nav
  if (carteState.flipped) {
    if (typeof playSound === 'function') playSound('flip');
    _showCarteAnswerBtns();
  }
}

function _showCarteAnswerBtns() {
  const cont = el('carte-cont');
  if (!cont) return;
  const navCenter = cont.querySelector('.carte-nav > div');
  if (navCenter) navCenter.innerHTML = `
    <button class="carte-btn ng-btn" onclick="carteAnswer(false)">✗ À revoir</button>
    <button class="carte-btn ok-btn" onclick="carteAnswer(true)">✓ Je sais</button>`;
}

function carteAnswer(ok) {
  _clearAutoFlip();
  if (typeof playFeedback === 'function') playFeedback(ok, false);
  carteState.scores[carteState.idx] = ok;
  if (carteState.idx < carteState.items.length - 1) {
    carteState.idx++;
    carteState.flipped = false;
    renderCarte();
  } else {
    renderCarteDone();
  }
}

function carteNext() {
  _clearAutoFlip();
  if (carteState.idx < carteState.items.length - 1) {
    carteState.idx++;
    carteState.flipped = false;
    renderCarte();
  }
}

function cartePrev() {
  _clearAutoFlip();
  if (carteState.idx > 0) {
    carteState.idx--;
    carteState.flipped = false;
    renderCarte();
  }
}

function renderCarte() {
  const cont = el('carte-cont');
  if (!cont || !carteState.items.length) return;
  const d = carteState.items[carteState.idx];
  const tot = carteState.items.length;
  const idx = carteState.idx;
  const ok = Object.values(carteState.scores).filter(Boolean).length;
  const ng = Object.values(carteState.scores).filter(v => v === false).length;

  el('carte-prog').textContent = `${idx + 1} / ${tot}`;
  const pbar = el('carte-pbar');
  if (pbar) pbar.style.width = Math.round((idx / tot) * 100) + '%';

  cont.innerHTML = `
    <div class="carte-prog-row">
      <span>Carte ${idx + 1} / ${tot}</span>
      <span class="carte-score-pill">✓ <span class="ok-c">${ok}</span> · ✗ <span class="ng-c">${ng}</span></span>
    </div>
    <div class="carte-wrap">
      <div class="carte-inner${carteState.flipped ? ' flipped' : ''}" onclick="carteFlip()" id="carte-inner">
        <div class="carte-face">
          <div class="carte-face-label">Procédé · ${d.sub}</div>
          <div class="carte-name">${d.name}</div>
          ${getSetting('showCatCard') ? `<div class="carte-cat">${d.cat}</div>` : ''}
          <div class="carte-hint" id="carte-hint-txt">Cliquer pour révéler · Espace</div>
        </div>
        <div class="carte-back">
          <div class="carte-face-label">Définition &amp; exemple</div>
          <div class="carte-def">${d.def}</div>
          <div class="carte-ex">${d.ex}</div>
          <div class="carte-effet">${d.effet}</div>
        </div>
      </div>
    </div>
    <div class="carte-nav">
      <button class="carte-btn" onclick="cartePrev()" ${idx === 0 ? 'disabled' : ''}>← Préc.</button>
      <div style="display:flex;gap:7px">
        ${carteState.flipped
          ? `<button class="carte-btn ng-btn" onclick="carteAnswer(false)">✗ À revoir</button>
             <button class="carte-btn ok-btn" onclick="carteAnswer(true)">✓ Je sais</button>`
          : `<button class="carte-btn" onclick="carteFlip()">Voir la réponse</button>`}
      </div>
      <button class="carte-btn" onclick="carteNext()" ${idx === tot - 1 ? 'disabled' : ''}>Suiv. →</button>
    </div>`;

  // Auto-flip
  _clearAutoFlip();
  if (!carteState.flipped) {
    const af = getSetting('autoFlip');
    if (af > 0) {
      const hint = el('carte-hint-txt');
      if (hint) hint.textContent = `Retournement auto dans ${af}s · ou cliquer`;
      _autoFlipTO = setTimeout(() => {
        carteState.flipped = true;
        const inner = document.getElementById('carte-inner');
        if (inner) inner.classList.add('flipped');
        if (typeof playSound === 'function') playSound('flip');
        _showCarteAnswerBtns();
      }, af * 1000);
    }
  }
}

function renderCarteDone() {
  const cont = el('carte-cont');
  if (!cont) return;
  const ok = Object.values(carteState.scores).filter(Boolean).length;
  const tot = carteState.items.length;
  const pct = Math.round(ok / tot * 100);
  if (typeof playSound === 'function') {
    if (pct >= 70) playSound('complete');
    else if (pct >= 45) playSound('partial');
  }
  if (typeof recordCarteSession === 'function') {
    recordCarteSession('proc', carteState.cat, ok, tot);
    scheduleDashboardUpdate();
  }
  cont.innerHTML = `
    <div class="carte-done-box">
      <h3 style="font-family:'Playfair Display',serif;font-size:1.4rem;margin-bottom:.4rem">Session terminée !</h3>
      <div class="rgrade">${ok} / ${tot}</div>
      <p style="color:var(--tx2);font-size:13px;margin-bottom:1.4rem">${pct}% de cartes maîtrisées</p>
      <div class="btnrow">
        <button class="pbtn" onclick="carteShuffle()">Nouveau mélange</button>
        <button class="sbtn" onclick="carteReset()">Recommencer</button>
      </div>
    </div>`;
}

/* ══════════════════════════════════════════
   FLASHCARDS GRAMMAIRE
   ══════════════════════════════════════════ */
let gCarteState = { items: [], idx: 0, flipped: false, scores: {}, cat: 'Tous' };

function initGramCarteChips() {
  const f = el('gcarte-chips');
  if (!f || f.dataset.init) return;
  f.dataset.init = '1';
  GRAM_CATS.forEach(c => {
    const b = document.createElement('button');
    b.className = 'chip' + (c === 'Tous' ? ' on' : '');
    b.textContent = c;
    b.onclick = () => {
      gCarteState.cat = c;
      document.querySelectorAll('#gcarte-chips .chip').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      gCarteShuffle();
    };
    f.appendChild(b);
  });
}

function initGramCartes() {
  initGramCarteChips();
  if (!gCarteState.items.length) gCarteShuffle();
  else renderGramCarte();
}

function gCarteShuffle() {
  _clearAutoFlip();
  const filtered = gCarteState.cat === 'Tous'
    ? [...GRAM_COURS]
    : GRAM_COURS.filter(d => d.cat === gCarteState.cat);
  gCarteState.items = shuf(filtered);
  gCarteState.idx = 0;
  gCarteState.flipped = false;
  gCarteState.scores = {};
  renderGramCarte();
}

function gCarteReset() {
  gCarteState.idx = 0;
  gCarteState.flipped = false;
  gCarteState.scores = {};
  renderGramCarte();
}

function gCarteFlip() {
  gCarteState.flipped = !gCarteState.flipped;
  const inner = document.getElementById('gcarte-inner');
  if (inner) inner.classList.toggle('flipped', gCarteState.flipped);
  if (gCarteState.flipped) {
    if (typeof playSound === 'function') playSound('flip');
    _showGramCarteAnswerBtns();
  }
}

function _showGramCarteAnswerBtns() {
  const nav = document.querySelector('#gcarte-cont .carte-nav');
  if (!nav) return;
  nav.innerHTML = `
    <button class="carte-btn" onclick="gCartePrev()" ${gCarteState.idx === 0 ? 'disabled' : ''}>← Préc.</button>
    <div style="display:flex;gap:7px">
      <button class="carte-btn ng-btn" onclick="gCarteAnswer(false)">✗ À revoir</button>
      <button class="carte-btn ok-btn" onclick="gCarteAnswer(true)">✓ Je sais</button>
    </div>
    <button class="carte-btn" onclick="gCarteNext()" ${gCarteState.idx >= gCarteState.items.length - 1 ? 'disabled' : ''}>Suiv. →</button>`;
}

function gCarteAnswer(ok) {
  if (typeof playFeedback === 'function') playFeedback(ok, false);
  gCarteState.scores[gCarteState.idx] = ok;
  if (gCarteState.idx >= gCarteState.items.length - 1) renderGramCarteDone();
  else gCarteNext();
}

function gCarteNext() {
  if (gCarteState.idx < gCarteState.items.length - 1) {
    gCarteState.idx++;
    gCarteState.flipped = false;
    renderGramCarte();
  }
}

function gCartePrev() {
  if (gCarteState.idx > 0) {
    gCarteState.idx--;
    gCarteState.flipped = false;
    renderGramCarte();
  }
}

function renderGramCarte() {
  const cont = el('gcarte-cont');
  if (!cont || !gCarteState.items.length) return;
  const d = gCarteState.items[gCarteState.idx];
  const tot = gCarteState.items.length;
  const idx = gCarteState.idx;
  const ok = Object.values(gCarteState.scores).filter(Boolean).length;
  const ng = Object.values(gCarteState.scores).filter(v => v === false).length;
  el('gcarte-prog').textContent = `${idx + 1} / ${tot}`;
  const pbar = el('gcarte-pbar');
  if (pbar) pbar.style.width = Math.round((idx / tot) * 100) + '%';
  cont.innerHTML = `
    <div class="carte-prog-row">
      <span>Carte ${idx + 1} / ${tot}</span>
      <span class="carte-score-pill">✓ <span class="ok-c">${ok}</span> · ✗ <span class="ng-c">${ng}</span></span>
    </div>
    <div class="carte-wrap">
      <div class="carte-inner${gCarteState.flipped ? ' flipped' : ''}" onclick="gCarteFlip()" id="gcarte-inner">
        <div class="carte-face">
          <div class="carte-face-label">${d.cours} · ${d.cat}</div>
          <div class="carte-name">${d.name}</div>
          <div class="carte-hint" id="gcarte-hint">Cliquer pour révéler · Espace</div>
        </div>
        <div class="carte-back">
          <div class="carte-face-label">Définition & cours</div>
          <div class="carte-def">${d.def}</div>
          <div class="carte-ex gram-carte-content">${d.content || ''}</div>
        </div>
      </div>
    </div>
    <div class="carte-nav">
      <button class="carte-btn" onclick="gCartePrev()" ${idx === 0 ? 'disabled' : ''}>← Préc.</button>
      <div style="display:flex;gap:7px">
        ${gCarteState.flipped
          ? `<button class="carte-btn ng-btn" onclick="gCarteAnswer(false)">✗ À revoir</button>
             <button class="carte-btn ok-btn" onclick="gCarteAnswer(true)">✓ Je sais</button>`
          : `<button class="carte-btn" onclick="gCarteFlip()">Voir la réponse</button>`}
      </div>
      <button class="carte-btn" onclick="gCarteNext()" ${idx === tot - 1 ? 'disabled' : ''}>Suiv. →</button>
    </div>`;
}

function renderGramCarteDone() {
  const cont = el('gcarte-cont');
  if (!cont) return;
  const ok = Object.values(gCarteState.scores).filter(Boolean).length;
  const tot = gCarteState.items.length;
  const pct = Math.round(ok / tot * 100);
  if (typeof playSound === 'function') {
    if (pct >= 70) playSound('complete');
    else if (pct >= 45) playSound('partial');
  }
  if (typeof recordCarteSession === 'function') {
    recordCarteSession('gram', gCarteState.cat, ok, tot);
    scheduleDashboardUpdate();
  }
  cont.innerHTML = `
    <div class="carte-done-box">
      <h3 style="font-family:'Playfair Display',serif;font-size:1.4rem;margin-bottom:.4rem">Session terminée !</h3>
      <div class="rgrade">${ok} / ${tot}</div>
      <p style="color:var(--tx2);font-size:13px;margin-bottom:1.4rem">${pct}% de fiches maîtrisées</p>
      <div class="btnrow">
        <button class="pbtn" onclick="gCarteShuffle()">Nouveau mélange</button>
        <button class="sbtn" onclick="gCarteReset()">Recommencer</button>
      </div>
    </div>`;
}

/* ══════════════════════════════════════════
   FLASHCARDS — Vocabulaire
   ══════════════════════════════════════════ */
let vCarteState = { items: [], idx: 0, flipped: false, scores: {}, cat: 'Tous' };

function initVocabCarteChips() {
  const f = el('vcarte-chips');
  if (!f || f.dataset.init || typeof VOCAB_CATS === 'undefined') return;
  f.dataset.init = '1';
  VOCAB_CATS.forEach(c => {
    const b = document.createElement('button');
    b.className = 'chip' + (c === 'Tous' ? ' on' : '');
    b.textContent = c;
    b.onclick = () => {
      vCarteState.cat = c;
      document.querySelectorAll('#vcarte-chips .chip').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      vCarteShuffle();
    };
    f.appendChild(b);
  });
}

function initVocabCartes() {
  initVocabCarteChips();
  if (!vCarteState.items.length) vCarteShuffle();
  else renderVocabCarte();
}

function vCarteShuffle() {
  _clearAutoFlip();
  const filtered = vCarteState.cat === 'Tous'
    ? [...VOCAB_COURS]
    : VOCAB_COURS.filter(d => d.cat === vCarteState.cat);
  vCarteState.items = shuf(filtered);
  vCarteState.idx = 0;
  vCarteState.flipped = false;
  vCarteState.scores = {};
  renderVocabCarte();
}

function vCarteReset() {
  vCarteState.idx = 0;
  vCarteState.flipped = false;
  vCarteState.scores = {};
  renderVocabCarte();
}

function vCarteFlip() {
  vCarteState.flipped = !vCarteState.flipped;
  const inner = document.getElementById('vcarte-inner');
  if (inner) inner.classList.toggle('flipped', vCarteState.flipped);
  if (vCarteState.flipped) {
    if (typeof playSound === 'function') playSound('flip');
    _showVocabCarteAnswerBtns();
  }
}

function _showVocabCarteAnswerBtns() {
  const nav = document.querySelector('#vcarte-cont .carte-nav');
  if (!nav) return;
  nav.innerHTML = `
    <button class="carte-btn" onclick="vCartePrev()" ${vCarteState.idx === 0 ? 'disabled' : ''}>← Préc.</button>
    <div style="display:flex;gap:7px">
      <button class="carte-btn ng-btn" onclick="vCarteAnswer(false)">✗ À revoir</button>
      <button class="carte-btn ok-btn" onclick="vCarteAnswer(true)">✓ Je sais</button>
    </div>
    <button class="carte-btn" onclick="vCarteNext()" ${vCarteState.idx >= vCarteState.items.length - 1 ? 'disabled' : ''}>Suiv. →</button>`;
}

function vCarteAnswer(ok) {
  if (typeof playFeedback === 'function') playFeedback(ok, false);
  vCarteState.scores[vCarteState.idx] = ok;
  if (vCarteState.idx >= vCarteState.items.length - 1) renderVocabCarteDone();
  else vCarteNext();
}

function vCarteNext() {
  if (vCarteState.idx < vCarteState.items.length - 1) {
    vCarteState.idx++;
    vCarteState.flipped = false;
    renderVocabCarte();
  }
}

function vCartePrev() {
  if (vCarteState.idx > 0) {
    vCarteState.idx--;
    vCarteState.flipped = false;
    renderVocabCarte();
  }
}

function renderVocabCarte() {
  const cont = el('vcarte-cont');
  if (!cont || !vCarteState.items.length) return;
  const d = vCarteState.items[vCarteState.idx];
  const tot = vCarteState.items.length;
  const idx = vCarteState.idx;
  const ok = Object.values(vCarteState.scores).filter(Boolean).length;
  const ng = Object.values(vCarteState.scores).filter(v => v === false).length;
  el('vcarte-prog').textContent = `${idx + 1} / ${tot}`;
  const pbar = el('vcarte-pbar');
  if (pbar) pbar.style.width = Math.round((idx / tot) * 100) + '%';
  cont.innerHTML = `
    <div class="carte-prog-row">
      <span>Carte ${idx + 1} / ${tot}</span>
      <span class="carte-score-pill">✓ <span class="ok-c">${ok}</span> · ✗ <span class="ng-c">${ng}</span></span>
    </div>
    <div class="carte-wrap">
      <div class="carte-inner${vCarteState.flipped ? ' flipped' : ''}" onclick="vCarteFlip()" id="vcarte-inner">
        <div class="carte-face">
          <div class="carte-face-label">${d.cours} · ${d.cat}</div>
          <div class="carte-name">${d.name}</div>
          <div class="carte-hint">Cliquer pour révéler · Espace</div>
        </div>
        <div class="carte-back">
          <div class="carte-face-label">Définition & exemples</div>
          <div class="carte-def">${d.def}</div>
          <div class="carte-ex gram-carte-content">${d.content || ''}</div>
        </div>
      </div>
    </div>
    <div class="carte-nav">
      <button class="carte-btn" onclick="vCartePrev()" ${idx === 0 ? 'disabled' : ''}>← Préc.</button>
      <div style="display:flex;gap:7px">
        ${vCarteState.flipped
          ? `<button class="carte-btn ng-btn" onclick="vCarteAnswer(false)">✗ À revoir</button>
             <button class="carte-btn ok-btn" onclick="vCarteAnswer(true)">✓ Je sais</button>`
          : `<button class="carte-btn" onclick="vCarteFlip()">Voir la réponse</button>`}
      </div>
      <button class="carte-btn" onclick="vCarteNext()" ${idx === tot - 1 ? 'disabled' : ''}>Suiv. →</button>
    </div>`;
}

function renderVocabCarteDone() {
  const cont = el('vcarte-cont');
  if (!cont) return;
  const ok = Object.values(vCarteState.scores).filter(Boolean).length;
  const tot = vCarteState.items.length;
  const pct = Math.round(ok / tot * 100);
  if (typeof playSound === 'function') {
    if (pct >= 70) playSound('complete');
    else if (pct >= 45) playSound('partial');
  }
  if (typeof recordCarteSession === 'function') {
    recordCarteSession('vocab', vCarteState.cat, ok, tot);
    scheduleDashboardUpdate();
  }
  cont.innerHTML = `
    <div class="carte-done-box">
      <h3 style="font-family:'Playfair Display',serif;font-size:1.4rem;margin-bottom:.4rem">Session terminée !</h3>
      <div class="rgrade">${ok} / ${tot}</div>
      <p style="color:var(--tx2);font-size:13px;margin-bottom:1.4rem">${pct}% de fiches maîtrisées</p>
      <div class="btnrow">
        <button class="pbtn" onclick="vCarteShuffle()">Nouveau mélange</button>
        <button class="sbtn" onclick="vCarteReset()">Recommencer</button>
      </div>
    </div>`;
}

