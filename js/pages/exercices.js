/* ══════════════════════════════════════════

   EXERCICES — Engine (réponses écrites)

   ══════════════════════════════════════════ */

const EXO_STATE = { cat:'Toutes', diff:0, shuffled:[], answers:{}, userTexts:{} };



function exoNorm(s) {

  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    .replace(/\[[^\]]*\]/g, '')

    .replace(/[^a-z0-9\s]/g, ' ')

    .replace(/\s+/g, ' ').trim();

}



function exoEsc(s) {

  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

}



function exoExpected(e) {

  if (e.answer) return String(e.answer);

  if (e.opts && e.ans != null && e.opts[e.ans] != null) return String(e.opts[e.ans]);

  return '';

}



function exoVariants(text) {

  const raw = String(text || '').trim();

  if (!raw) return [];

  const out = new Set([raw]);

  const letter = raw.match(/^([AB])\s*[—–-]/i);

  if (letter) out.add(letter[1]);

  raw.split(/\s*[—–]\s*/).forEach(p => { if (p.trim()) out.add(p.trim()); });

  out.add(raw.replace(/\s*\([^)]*\)\s*$/, '').trim());

  out.add(raw.split('(')[0].trim());

  const yn = raw.match(/^(oui|non)\b/i);

  if (yn) out.add(yn[1]);

  return [...out].filter(Boolean);

}



function exoMatchNorms(u, norms) {

  if (!u) return false;

  if (norms.has(u)) return true;

  if (/^[ab]$/.test(u) && norms.has(u)) return true;

  for (const n of norms) {

    if (!n) continue;

    if (u === n) return true;

    if (n.length >= 4 && u.length >= 4 && (u.includes(n) || n.includes(u))) return true;

    if (u.length >= 4 && n.startsWith(u + ' ')) return true;

    if (n.length >= 4 && u.startsWith(n + ' ')) return true;

  }

  return false;

}



function exoKeywordMatch(u, expectedNorm) {

  if (expectedNorm.length < 35) return false;

  const stop = new Set(['dans', 'avec', 'pour', 'plus', 'cette', 'comme', 'etre', 'tous', 'tout', 'une', 'des', 'les', 'par', 'que', 'est', 'son', 'aux', 'sur', 'sans', 'sont', 'peut', 'elle', 'leur', 'meme', 'aussi', 'tout', 'tous']);

  const words = expectedNorm.split(' ').filter(w => w.length > 4 && !stop.has(w));

  if (words.length < 3) return false;

  const hits = words.filter(w => u.includes(w)).length;

  return hits / words.length >= 0.45;

}



function exoCheckAnswer(e, input) {

  const u = exoNorm(input);

  if (!u || u.length < 2) return false;

  const expected = exoExpected(e);

  const norms = new Set();

  exoVariants(expected).forEach(v => {

    const n = exoNorm(v);

    if (n) norms.add(n);

    const words = n.split(' ').filter(w => w.length > 2);

    if (words.length === 1) norms.add(words[0]);

    if (words.length >= 2 && words[0].length <= 14) norms.add(words.slice(0, 2).join(' '));

  });

  if (exoMatchNorms(u, norms)) return true;

  return exoKeywordMatch(u, exoNorm(expected));

}



function exoUsesLongInput(e) {

  return exoExpected(e).length > 72;

}



function initExoFilters() {

  const fc = el('exo-cats');

  if (!fc || fc.dataset.init) return;

  fc.dataset.init = '1';

  EXO_CATS.forEach((c, i) => {

    const key = i === 0 ? 'Toutes' : c;

    const b = document.createElement('button');

    b.className = 'chip' + (key === EXO_STATE.cat ? ' on' : '');

    b.textContent = c;

    b.onclick = () => {

      EXO_STATE.cat = key;

      document.querySelectorAll('#exo-cats .chip').forEach(x => x.classList.remove('on'));

      b.classList.add('on');

      mixExo();

    };

    fc.appendChild(b);

  });

  const fd = el('exo-diffs');

  if (!fd) return;

  EXO_DIFFS.forEach((d, i) => {

    const b = document.createElement('button');

    b.className = 'chip' + (i === EXO_STATE.diff ? ' on' : '');

    b.textContent = d;

    b.onclick = () => {

      EXO_STATE.diff = i;

      document.querySelectorAll('#exo-diffs .chip').forEach(x => x.classList.remove('on'));

      b.classList.add('on');

      mixExo();

    };

    fd.appendChild(b);

  });

}



function mixExo() {

  let items = getAlignedExercises().filter(e => {

    const catOk  = EXO_STATE.cat === 'Toutes' || e.cat === EXO_STATE.cat;

    const diffOk = EXO_STATE.diff === 0 || e.diff === EXO_STATE.diff;

    return catOk && diffOk;

  });

  if (_reviseExo) {

    try {

      const st = JSON.parse(localStorage.getItem('bac_exo_stats') || '{}');

      const thresh = getSetting('reviseThresh');

      const weak = items.filter(e => {

        const d = st[e.id];

        return !d || d.total === 0 || (d.ok / d.total) < thresh;

      });

      if (weak.length) items = weak;

    } catch (e) {}

  }

  EXO_STATE.shuffled = shuf(items);

  EXO_STATE.answers  = {};

  EXO_STATE.userTexts = {};

  renderExo();

}



function resetExo() {

  EXO_STATE.answers = {};

  EXO_STATE.userTexts = {};

  if (getSetting('exoShuffleOnReset')) mixExo();

  else renderExo();

}



function _updateExoProg() {

  const tot  = EXO_STATE.shuffled.length;

  const done = Object.keys(EXO_STATE.answers).length;

  const ok   = Object.values(EXO_STATE.answers).filter(v => v === true).length;

  if (el('eqsc'))   el('eqsc').textContent   = ok;

  if (el('eqtot'))  el('eqtot').textContent  = tot;

  if (el('eqbar'))  el('eqbar').style.width  = (tot ? Math.round(done/tot*100) : 0) + '%';

  if (el('eqprog')) el('eqprog').textContent =

    `${done} / ${tot} exercice${done!==1?'s':''} répondu${done!==1?'s':''}`;

}



function renderExo() {

  const cont = el('exo-cont');

  if (!cont) return;

  cont.innerHTML = '';

  _updateExoProg();

  const STARS = ['','★','★★','★★★'];

  const favs = loadFavs();



  if (!EXO_STATE.shuffled.length) {

    cont.innerHTML = '<div class="nores">Aucun exercice pour ces filtres.</div>';

    return;

  }



  const frag = document.createDocumentFragment();

  EXO_STATE.shuffled.forEach((e, qi) => {

    const done    = EXO_STATE.answers.hasOwnProperty(qi);

    const correct = EXO_STATE.answers[qi] === true;

    const isFav   = (favs.qproc || []).includes('EXO:' + e.id);

    const div     = document.createElement('div');

    div.className = 'exo-card qcard' + (done ? ' done' : '');

    div.id = `exoqc${qi}`;



    const textBlock = e.text

      ? `<div class="exo-text">${e.text.replace(/\n/g,'<br>')}</div>`

      : '';



    const long = exoUsesLongInput(e);

    const userVal = exoEsc(EXO_STATE.userTexts[qi] || '');

    const inputCls = 'exo-input' + (done ? (correct ? ' ok' : ' ng') : '');

    const inputTag = long

      ? `<textarea class="${inputCls}" id="exoin${qi}" rows="3" placeholder="Rédigez votre réponse…" ${done ? 'disabled' : ''}>${userVal}</textarea>`

      : `<input type="text" class="${inputCls}" id="exoin${qi}" placeholder="Procédé, terme, connecteur…" value="${userVal}" ${done ? 'disabled' : ''} autocomplete="off" spellcheck="false">`;



    const expected = exoExpected(e);

    const answerReveal = done && !correct

      ? `<div class="exo-correct">Réponse attendue : <strong>${exoEsc(expected)}</strong></div>`

      : '';



    const optsHtml = (!done && !long && e.opts && e.opts.length === 4)
      ? `<div class="exo-opts">${e.opts.map((o, oi) =>
          `<button type="button" class="chip exo-opt" onclick="pickExoOpt(${qi},${oi})">${exoEsc(o)}</button>`
        ).join('')}</div>`
      : '';

    div.innerHTML = `

      <div class="exo-header">

        <div class="exo-num">Exercice ${qi+1} / ${EXO_STATE.shuffled.length} · ${e.cat}</div>

        <div class="exo-meta">

          <span class="diff-star">${STARS[e.diff]}</span>

          ${e.oeuvre ? `<span class="exo-oeuvre">${e.oeuvre}</span>` : ''}
          ${typeof introSimParseOeuvreRef === 'function' && introSimParseOeuvreRef(e.oeuvre) ? `<button type="button" class="sbtn sec exo-intro-btn" onclick="introSimOpenFromExo(${e.id})" title="Commentaire complet si modèle GT disponible">📝 Commentaire</button>` : ''}

          <button class="exo-fav${isFav?' on':''}" onclick="toggleExoFav(${e.id})" title="Favori">★</button>

        </div>

      </div>

      ${textBlock}

      <div class="exo-q">${e.q}</div>

      ${optsHtml}

      <div class="exo-answer-row">

        ${inputTag}

        <button class="pbtn exo-submit" ${done ? 'disabled' : ''} onclick="submitExo(${qi})">Valider</button>

      </div>

      ${answerReveal}

      <div class="qexpl${done?' show':''}">${e.expl}</div>`;

    frag.appendChild(div);



    if (!done) {

      const field = div.querySelector('.exo-input');

      if (field) {

        field.addEventListener('keydown', ev => {

          if (ev.key === 'Enter' && !long && !ev.shiftKey) {

            ev.preventDefault();

            submitExo(qi);

          }

        });

      }

    }

  });

  cont.appendChild(frag);



  if (EXO_STATE.shuffled.length > 0 &&

      Object.keys(EXO_STATE.answers).length === EXO_STATE.shuffled.length) {

    const ok  = Object.values(EXO_STATE.answers).filter(v => v === true).length;

    const pct = Math.round(ok / EXO_STATE.shuffled.length * 100);

    const msg = pct>=90?'Excellent ! 🎉':pct>=70?'Très bien !':pct>=50?'Bien, continue.':'Révise et recommence !';

    const r = document.createElement('div');

    r.className = 'rbox';

    r.innerHTML = `

      <h3>Exercices terminés</h3>

      <div class="rgrade">${ok} / ${EXO_STATE.shuffled.length}</div>

      <p>${pct}% — ${msg}</p>

      <div class="btnrow">

        <button class="pbtn" onclick="mixExo()">Nouveau mélange</button>

        <button class="sbtn" onclick="resetExo()">Recommencer</button>

      </div>`;

    cont.appendChild(r);

    if (typeof getSetting === 'function' && getSetting('confettiOn') && pct >= getSetting('confettiThr'))

      launchConfetti();

    if (typeof playSound === 'function') {
      if (pct >= 60) playSound('complete');
      else if (pct >= 40) playSound('partial');
    }

    setTimeout(() => r.scrollIntoView({behavior:'smooth',block:'nearest'}), 200);

  }

}



function pickExoOpt(qi, oi) {

  const e = EXO_STATE.shuffled[qi];

  if (!e || EXO_STATE.answers.hasOwnProperty(qi)) return;

  const val = e.opts && e.opts[oi] != null ? String(e.opts[oi]) : '';

  EXO_STATE.userTexts[qi] = val;

  const field = el('exoin' + qi);

  if (field) field.value = val;

  submitExo(qi);

}



function submitExo(qi) {

  if (EXO_STATE.answers.hasOwnProperty(qi)) return;

  const div = el(`exoqc${qi}`);

  const input = div?.querySelector('.exo-input');

  const val = input?.value?.trim();

  if (!val) {

    input?.focus();

    input?.classList.add('exo-input-empty');

    setTimeout(() => input?.classList.remove('exo-input-empty'), 600);

    return;

  }



  const e = EXO_STATE.shuffled[qi];

  const correct = exoCheckAnswer(e, val);
  // exoCheckAnswer ne distingue pas « presque bon » (keyword match) vs exact : pas de playPartial ici.

  EXO_STATE.userTexts[qi] = val;

  EXO_STATE.answers[qi] = correct;



  if (typeof playSound === 'function') {
    if (correct) playSound('correct');
    else playSound('wrong');
    setTimeout(() => playSound('reveal'), getSetting('reduceMotion') ? 0 : 220);
  }

  try {

    const st = JSON.parse(localStorage.getItem('bac_exo_stats') || '{}');

    if (!st[e.id]) st[e.id] = { ok: 0, total: 0 };

    st[e.id].total++;

    if (correct) st[e.id].ok++;

    localStorage.setItem('bac_exo_stats', JSON.stringify(st));

  } catch (err) {}



  renderExo();

  if (Object.keys(EXO_STATE.answers).length === EXO_STATE.shuffled.length)

    setTimeout(() => renderExo(), 320);

}



function toggleExoFav(id) {

  const f   = loadFavs();

  const key = 'EXO:' + id;

  if (!f.qproc) f.qproc = [];

  const idx = f.qproc.indexOf(key);

  if (idx > -1) f.qproc.splice(idx, 1); else f.qproc.push(key);

  saveFavs(f);

  if (typeof playSound === 'function') playSound(idx > -1 ? 'remove' : 'add');

  EXO_STATE.shuffled.forEach((e, qi) => {

    if (e.id !== id) return;

    const btn = document.querySelector(`#exoqc${qi} .exo-fav`);

    if (btn) btn.classList.toggle('on', f.qproc.includes(key));

  });

}



