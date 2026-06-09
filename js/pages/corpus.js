/* ══════════════════════════════════════════
   CORPUS — Document de référence maître
   ══════════════════════════════════════════ */
let _corpusFilter = 'Toutes';
let _corpusSearchTimer = null;

function openCorpusPage() {
  switchMatiere('proc');
  const btn = document.querySelector('#snav-proc .stab[data-corpus]');
  if (btn) switchPg('proc', 'p-corpus', btn);
}

function openCorpusRef(id) {
  switchMatiere('proc');
  const btn = document.querySelector('#snav-proc .stab[data-corpus]');
  if (btn) switchPg('proc', 'p-corpus', btn);
  setTimeout(() => {
    const srch = el('corpus-srch');
    if (srch) srch.value = id;
    renderCorpus();
    const target = document.getElementById('corpus-' + id);
    if (target) {
      target.classList.add('corpus-highlight');
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => target.classList.remove('corpus-highlight'), 3500);
    }
  }, 100);
}

function openCorpusCat(cat) {
  openCorpusPage();
  setTimeout(() => {
    _corpusFilter = cat || 'Toutes';
    const fc = el('corpus-chips');
    if (fc) {
      fc.querySelectorAll('.chip').forEach(x => {
        x.classList.toggle('on', x.textContent === _corpusFilter);
      });
    }
    const srch = el('corpus-srch');
    if (srch) srch.value = '';
    renderCorpus();
  }, 100);
}

function debounceCorpusSearch() {
  clearTimeout(_corpusSearchTimer);
  _corpusSearchTimer = setTimeout(renderCorpus, getSetting('searchDebounce') || 180);
}

function printGeneralProcedes() {
  const fiche = document.getElementById('corpus-GENERAL_PROCEDES');
  if (!fiche) {
    openCorpusRef('GENERAL_PROCEDES');
    setTimeout(printGeneralProcedes, 450);
    return;
  }
  document.body.classList.add('print-gpf');
  window.print();
  window.addEventListener('afterprint', () => document.body.classList.remove('print-gpf'), { once: true });
}

function initCorpusFilters() {
  const fc = el('corpus-chips');
  if (!fc || fc.dataset.init || typeof CORPUS_DOC === 'undefined') return;
  fc.dataset.init = '1';
  const cats = ['Toutes', ...new Set(CORPUS_DOC.map(e => e.cat).filter(Boolean))].sort((a, b) => {
    if (a === 'Toutes') return -1;
    if (b === 'Toutes') return 1;
    return a.localeCompare(b, 'fr');
  });
  cats.forEach(c => {
    const b = document.createElement('button');
    b.className = 'chip' + (c === _corpusFilter ? ' on' : '');
    b.textContent = c;
    b.onclick = () => {
      _corpusFilter = c;
      fc.querySelectorAll('.chip').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      renderCorpus();
    };
    fc.appendChild(b);
  });
}

function renderCorpus(append) {
  const cont = el('corpus-cont');
  const meta = el('corpus-meta');
  if (!cont || typeof CORPUS_DOC === 'undefined') return;
  const q = (el('corpus-srch')?.value || '').trim().toLowerCase();
  const cacheKey = _corpusFilter + '|' + q;
  if (!append || cacheKey !== _corpusCacheKey) {
    _corpusCacheKey = cacheKey;
    _corpusVisibleCount = 60;
    let items = CORPUS_DOC;
    if (_corpusFilter !== 'Toutes') items = items.filter(i => i.cat === _corpusFilter);
    if (q) items = items.filter(i => i.id.toLowerCase().includes(q) || (i.search || '').toLowerCase().includes(q));
    _corpusFilteredItems = items;
  } else {
    _corpusVisibleCount += 60;
  }
  const items = _corpusFilteredItems;
  if (meta) {
    meta.innerHTML = `<strong>${items.length}</strong> entrée(s) · affichées <strong>${Math.min(_corpusVisibleCount, items.length)}</strong> / ${CORPUS_DOC.length}`;
  }
  const typeLbl = { procede:'Procédé', grammaire:'Grammaire', phrase:'Phrase analysée', exercice:'Exercice', methode:'Méthode', auteur:'Auteur', fiche:'Fiche imprimable' };
  const slice = items.slice(0, _corpusVisibleCount);
  const html = slice.map(entry => {
    const titre = entry.titre || entry.reponse || entry.id;
    if (entry.id === 'GENERAL_PROCEDES') {
      return `<article class="corpus-entry corpus-entry-gpf" id="corpus-GENERAL_PROCEDES">
      <div class="corpus-entry-head">
        <span class="corpus-id">${entry.id}</span>
        <span class="corpus-cat">${entry.cat || '—'}</span>
        <span class="corpus-type">${typeLbl.fiche}</span>
      </div>
      <h3 class="corpus-title">${titre}</h3>
      <div class="gpf-toolbar no-print">
        <button type="button" class="sbtn" onclick="printGeneralProcedes()">🖨 Imprimer GENERAL_PROCEDES</button>
      </div>
      ${entry.analyse}
    </article>`;
    }
    return `<article class="corpus-entry" id="corpus-${entry.id}">
      <div class="corpus-entry-head">
        <span class="corpus-id">${entry.id}</span>
        <span class="corpus-cat">${entry.cat || '—'}</span>
        <span class="corpus-type">${typeLbl[entry.type] || entry.type}</span>
      </div>
      <h3 class="corpus-title">${titre}</h3>
      ${entry.auteur ? `<div class="corpus-auteur">${entry.auteur}</div>` : ''}
      ${entry.phrase ? `<blockquote class="corpus-phrase">${entry.phrase}</blockquote>` : ''}
      <div class="corpus-reponse"><span>Réponse / notion clé</span><strong>${entry.reponse}</strong></div>
      ${entry.effet ? `<div class="corpus-effet"><span>Effet</span>${entry.effet}</div>` : ''}
      <div class="corpus-analyse">${entry.analyse}</div>
    </article>`;
  }).join('');
  const moreBtn = items.length > _corpusVisibleCount
    ? `<div class="corpus-more-wrap"><button class="sbtn" onclick="renderCorpus(true)">Afficher plus (${items.length - _corpusVisibleCount} restantes)</button></div>`
    : '';
  cont.innerHTML = (html || '<div class="no-data">Aucune entrée ne correspond à ta recherche.</div>') + moreBtn;
}

