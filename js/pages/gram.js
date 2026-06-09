/* ══════════════════════════════════════════
   GRAMMAIRE — Cours
   ══════════════════════════════════════════ */
let gCat = 'Tous';
const gOpen = new Set();
let _gramSearchIdx = null;

function buildGramSearchIndex() {
  if (_gramSearchIdx || typeof GRAM_COURS === 'undefined') return;
  _gramSearchIdx = GRAM_COURS.map(d =>
    [d.name, d.def, d.content || '', d.cat, d.cours].join(' ').toLowerCase()
  );
}

function initGChips() {
  const f = el('gchips');
  if (!f) return;
  GRAM_CATS.forEach(c => {
    const b = document.createElement('button');
    b.className = 'chip' + (c === gCat ? ' on' : '');
    b.textContent = c;
    b.onclick = () => {
      gCat = c;
      document.querySelectorAll('#gchips .chip').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      renderGram();
    };
    f.appendChild(b);
  });
}

function renderGram() {
  buildGramSearchIndex();
  const q = (el('gsrch')?.value || '').toLowerCase().trim();
  const g = el('ggrid');
  if (!g) return;
  const favs = loadFavs();
  const items = [];
  GRAM_COURS.forEach((d, i) => {
    if (gCat !== 'Tous' && d.cat !== gCat) return;
    if (q && !_gramSearchIdx[i].includes(q)) return;
    items.push(d);
  });
  el('gcbar').textContent = `${items.length} fiche${items.length !== 1 ? 's' : ''}`;
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
      const open = gOpen.has(d.name);
      const isFav = favs.gram.includes(d.name);
      const safeN = d.name.replace(/'/g, "\\'");
      const card = document.createElement('div');
      card.className = `card c-${d.col}${open ? ' open' : ''}`;
      card.dataset.name = d.name;
      card.innerHTML = `
        <div class="ctop">
          <span class="badge">${d.cours}</span>
          <div style="display:flex;align-items:center;gap:6px">
            <button class="fav-btn${isFav ? ' on' : ''}" title="Ajouter aux favoris"
              onclick="event.stopPropagation();toggleFavCard('gram','${safeN}')">★</button>
            <span class="ticon">+</span>
          </div>
        </div>
        <div class="cname">${d.name}</div>
        <div class="cdef">${d.def}</div>
        <div class="cexp"><div class="cdiv"></div>${d.content}</div>`;
      card.onclick = (e) => {
        if (e.target.closest('.fav-btn')) return;
        card.classList.toggle('open');
        if (card.classList.contains('open')) gOpen.add(d.name);
        else gOpen.delete(d.name);
      };
      grid.appendChild(card);
    });
    frag.appendChild(grid);
  });
  g.innerHTML = '';
  g.appendChild(frag);
}

function initGramSearch() {
  const inp = el('gsrch');
  if (!inp || inp.dataset.init) return;
  inp.dataset.init = '1';
  inp.addEventListener('input', debounce(renderGram));
}

