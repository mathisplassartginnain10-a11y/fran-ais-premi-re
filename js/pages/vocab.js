/* vocab.js — Fiches vocabulaire d'analyse */
let vCat = 'Tous';
const vOpen = new Set();
let _vocabSearchIdx = null;

function buildVocabSearchIndex() {
  if (_vocabSearchIdx || typeof VOCAB_COURS === 'undefined') return;
  _vocabSearchIdx = VOCAB_COURS.map(d =>
    [d.name, d.def, d.content || '', d.cat, d.cours].join(' ').toLowerCase()
  );
}

function initVChips() {
  const f = el('vchips');
  if (!f || typeof VOCAB_CATS === 'undefined') return;
  if (f.dataset.init) return;
  f.dataset.init = '1';
  VOCAB_CATS.forEach(c => {
    const b = document.createElement('button');
    b.className = 'chip' + (c === vCat ? ' on' : '');
    b.textContent = c;
    b.onclick = () => {
      vCat = c;
      document.querySelectorAll('#vchips .chip').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      renderVocab();
    };
    f.appendChild(b);
  });
}

function renderVocab() {
  buildVocabSearchIndex();
  const q = (el('vsrch')?.value || '').toLowerCase().trim();
  const g = el('vgrid');
  if (!g || typeof VOCAB_COURS === 'undefined') return;
  const favs = loadFavs();
  const items = [];
  VOCAB_COURS.forEach((d, i) => {
    if (vCat !== 'Tous' && d.cat !== vCat) return;
    if (q && !_vocabSearchIdx[i].includes(q)) return;
    items.push(d);
  });
  const cbar = el('vcbar');
  if (cbar) cbar.textContent = `${items.length} fiche${items.length !== 1 ? 's' : ''}`;
  if (!items.length) { g.innerHTML = '<div class="nores">Aucun résultat.</div>'; return; }

  const groups = {};
  items.forEach(d => { if (!groups[d.cours]) groups[d.cours] = []; groups[d.cours].push(d); });

  const frag = document.createDocumentFragment();
  Object.entries(groups).forEach(([cn, arr]) => {
    const sh = document.createElement('div');
    sh.className = 'sh';
    sh.innerHTML = `${cn} — <em>${arr[0].cat}</em>`;
    frag.appendChild(sh);
    const grid = document.createElement('div');
    grid.className = 'cgrid';
    arr.forEach(d => {
      const open = vOpen.has(d.name);
      const isFav = favs.vocab.includes(d.name);
      const safeN = d.name.replace(/'/g, "\\'");
      const card = document.createElement('div');
      card.className = `card c-${d.col}${open ? ' open' : ''}`;
      card.dataset.name = d.name;
      card.innerHTML = `
        <div class="ctop">
          <span class="badge">${d.cours}</span>
          <div style="display:flex;align-items:center;gap:6px">
            <button class="fav-btn${isFav ? ' on' : ''}" title="Ajouter aux favoris"
              onclick="event.stopPropagation();toggleFavCard('vocab','${safeN}')">★</button>
            <span class="ticon">+</span>
          </div>
        </div>
        <div class="cname">${d.name}</div>
        <div class="cdef">${d.def}</div>
        <div class="cexp"><div class="cdiv"></div>${d.content}</div>`;
      card.onclick = (e) => {
        if (e.target.closest('.fav-btn')) return;
        card.classList.toggle('open');
        if (card.classList.contains('open')) vOpen.add(d.name);
        else vOpen.delete(d.name);
      };
      grid.appendChild(card);
    });
    frag.appendChild(grid);
  });
  g.innerHTML = '';
  g.appendChild(frag);
}

function initVocabSearch() {
  const inp = el('vsrch');
  if (!inp || inp.dataset.init) return;
  inp.dataset.init = '1';
  inp.addEventListener('input', debounce(renderVocab));
}
