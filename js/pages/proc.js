/* ══════════════════════════════════════════
   PROCÉDÉS — Fiches
   ══════════════════════════════════════════ */
let pCat = 'Tout';
const pOpen = new Set();
let _procSearchIdx = null;

/** Conseil + formule IPCI adaptés au procédé (source : data-proc-howto.js). */
function procGetInterpGuide(d) {
  return procGetInterpGuideData(d.name, d.cat);
}

function buildProcSearchIndex() {
  if (_procSearchIdx || typeof PROC_DATA === 'undefined') return;
  _procSearchIdx = PROC_DATA.map(d =>
    [d.name, d.def, d.ex, d.sub, d.effet, d.cat].join(' ').toLowerCase()
  );
}

function initPChips() {
  const f = el('pchips');
  if (!f) return;
  PROC_CATS.forEach(c => {
    const b = document.createElement('button');
    b.className = 'chip' + (c === pCat ? ' on' : '');
    b.textContent = c;
    b.onclick = () => {
      pCat = c;
      document.querySelectorAll('#pchips .chip').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      renderProc();
    };
    f.appendChild(b);
  });
}

function renderProc() {
  buildProcSearchIndex();
  const q = (el('psrch')?.value || '').toLowerCase().trim();
  const g = el('pgrid');
  if (!g) return;
  const favs = loadFavs();
  const items = [];
  PROC_DATA.forEach((d, i) => {
    if (pCat !== 'Tout' && d.cat !== pCat) return;
    if (q && !_procSearchIdx[i].includes(q)) return;
    items.push(d);
  });
  el('pcbar').textContent = `${items.length} procédé${items.length !== 1 ? 's' : ''}`;
  if (!items.length) { g.innerHTML = '<div class="nores">Aucun résultat.</div>'; return; }
  const frag = document.createDocumentFragment();
  items.forEach(d => {
    const open = pOpen.has(d.name);
    const isFav = favs.proc.includes(d.name);
    const safeN = d.name.replace(/'/g, "\\'");
    const guide = procGetInterpGuide(d);
    const howto = typeof procRenderHowto === 'function' ? procRenderHowto(d.name) : '';
    const card = document.createElement('div');
    card.className = `card c-${d.col}${open ? ' open' : ''}`;
    card.dataset.name = d.name;
    card.innerHTML = `
      <div class="ctop">
        <span class="badge">${d.sub}</span>
        <div style="display:flex;align-items:center;gap:6px">
          <button class="fav-btn${isFav ? ' on' : ''}" title="Ajouter aux favoris"
            onclick="event.stopPropagation();toggleFavCard('proc','${safeN}')">★</button>
          <span class="ticon">+</span>
        </div>
      </div>
      <div class="cname">${d.name}</div>
      <div class="cdef">${d.def}</div>
      <div class="cexp">
        <div class="cdiv"></div>
        <div class="elabel">Exemple</div>
        <div class="etxt">${d.ex}</div>
        <div class="eflabel">Effet produit</div>
        <div class="eftxt">${d.effet}</div>
        ${howto}
        <div class="eflabel">Comment l'interpréter au bac</div>
        <div class="eftxt proc-interp-tip">${guide.tip}</div>
        <div class="proc-interp-formula">${guide.formula}</div>
        <div class="proc-interp-ipci">IPCI : <strong>I</strong> idée → <strong>P</strong>rocédé → <strong>C</strong>itation → <strong>I</strong>nterprétation (effet + sens)</div>
      </div>`;
    card.onclick = (e) => {
      if (e.target.closest('.fav-btn')) return;
      card.classList.toggle('open');
      if (card.classList.contains('open')) pOpen.add(d.name);
      else pOpen.delete(d.name);
    };
    frag.appendChild(card);
  });
  g.innerHTML = '';
  g.appendChild(frag);
}

function initProcSearch() {
  const inp = el('psrch');
  if (!inp || inp.dataset.init) return;
  inp.dataset.init = '1';
  inp.addEventListener('input', debounce(renderProc));
}

