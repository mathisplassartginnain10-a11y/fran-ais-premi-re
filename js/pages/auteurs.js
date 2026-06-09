/* auteurs.js — Fiches principaux auteurs */
const AUTEURS_STATE = { genre: '', search: '' };
const AUTEURS_OPEN = new Set();
let _auteursClickBound = false;

function auteursNorm(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ' ')
    .replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function auteursMatchGenre(a, genreId) {
  if (!genreId) return true;
  const g = AUTEURS_GENRES.find(x => x.id === genreId);
  return g && g.test ? g.test(a.genre) : true;
}

function getFilteredAuteurs() {
  const q = auteursNorm(AUTEURS_STATE.search);
  return AUTEURS_DATA.filter(a => {
    if (!auteursMatchGenre(a, AUTEURS_STATE.genre)) return false;
    if (!q) return true;
    const blob = auteursNorm([a.nom, a.genre, a.dates, a.mouvement, a.oeuvres, a.note, a.dev, ...(a.intro || [])].join(' '));
    return blob.includes(q);
  });
}

function initAuteursHandlers() {
  if (_auteursClickBound) return;
  _auteursClickBound = true;

  document.addEventListener('click', e => {
    const card = e.target.closest('.auteur-card[data-auteur-id]');
    if (!card || e.target.closest('button, a, input, textarea, select, label')) return;
    toggleAuteurCard(card.getAttribute('data-auteur-id'), card);
  });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.auteur-card[data-auteur-id]');
    if (!card) return;
    e.preventDefault();
    toggleAuteurCard(card.getAttribute('data-auteur-id'), card);
  });
}

function toggleAuteurCard(id, cardEl) {
  if (!id) return;
  const card = cardEl || document.querySelector(`.auteur-card[data-auteur-id="${CSS.escape(id)}"]`);
  if (!card) return;
  const open = card.classList.toggle('open');
  card.setAttribute('aria-expanded', open ? 'true' : 'false');
  if (open) AUTEURS_OPEN.add(id);
  else AUTEURS_OPEN.delete(id);
}

/** Ouvre la page Auteurs et déplie une fiche (depuis le corpus ou ailleurs). */
function openAuteurCard(id) {
  if (!id) return;
  switchMatiere('proc');
  const btn = document.querySelector('#snav-proc .stab[onclick*="p-auteurs"]');
  if (btn) switchPg('proc', 'p-auteurs', btn);
  AUTEURS_OPEN.add(id);
  setTimeout(() => {
    renderAuteursList();
    const card = document.querySelector(`.auteur-card[data-auteur-id="${CSS.escape(id)}"]`);
    if (card) {
      card.classList.add('open');
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 120);
}

function initAuteursFilters() {
  initAuteursHandlers();
  const chips = el('auteurs-genre-chips');
  if (!chips || chips.dataset.ready) return;
  chips.dataset.ready = '1';
  chips.innerHTML = AUTEURS_GENRES.map(g => {
    const n = g.id ? AUTEURS_DATA.filter(a => auteursMatchGenre(a, g.id)).length : AUTEURS_DATA.length;
    return `<button class="chip${!g.id ? ' on' : ''}" data-genre="${g.id}" onclick="setAuteursGenre('${g.id}',this)">${g.label}${g.id ? ' (' + n + ')' : ''}</button>`;
  }).join('');
  const srch = el('auteurs-search');
  if (srch && !srch.dataset.ready) {
    srch.dataset.ready = '1';
    srch.addEventListener('input', debounce(() => {
      AUTEURS_STATE.search = srch.value;
      renderAuteursList();
    }, 180));
  }
}

function setAuteursGenre(id, btn) {
  AUTEURS_STATE.genre = id;
  document.querySelectorAll('#auteurs-genre-chips .chip').forEach(c => c.classList.remove('on'));
  if (btn) btn.classList.add('on');
  renderAuteursList();
}

function auteursIntroHtml(a) {
  if (!a.intro?.length) return '';
  const items = a.intro.map(line => `<li>${escHtml(line)}</li>`).join('');
  return `<div class="auteur-intro"><strong>Pour l'introduction (5 temps)</strong><p class="auteur-intro-hint">Repères essentiels — surtout le 2<sup>e</sup> temps (auteur + œuvre) et l'amorce historique.</p><ul class="auteur-intro-list">${items}</ul></div>`;
}

function auteursBodyHtml(a) {
  const intro = auteursIntroHtml(a);
  const mouv = a.mouvement ? `<p class="auteur-mouv"><strong>Mouvement :</strong> ${escHtml(a.mouvement)}</p>` : '';
  const oeuvres = a.oeuvres ? `<p class="auteur-oeuvres"><strong>Œuvres principales :</strong> ${escHtml(a.oeuvres)}</p>` : '';
  const dev = a.dev ? `<div class="auteur-dev"><strong>Développement :</strong><p>${escHtml(a.dev)}</p></div>` : '';
  const note = a.note ? `<p class="auteur-note">${escHtml(a.note)}</p>` : '';
  const empty = !a.mouvement && !a.oeuvres && !a.note && !a.dev && !a.intro?.length
    ? '<p class="auteur-empty-detail">Pas d\'autres détails dans la fiche source — genre et dates ci-dessus.</p>'
    : '';
  const corpusId = 'AU-' + a.id.toUpperCase();
  const corpusBtn = typeof openCorpusRef === 'function'
    ? `<button type="button" class="corpus-inline-btn auteur-corpus-btn" onclick="event.stopPropagation();openCorpusRef('${corpusId}')">📖 Voir ${corpusId} dans le Corpus</button>`
    : '';
  const simBtn = typeof introSimOpenFromAuteur === 'function'
    ? `<button type="button" class="sbtn sec auteur-intro-sim-btn" onclick="event.stopPropagation();introSimOpenFromAuteur(${JSON.stringify(a.nom)}, ${JSON.stringify(a.oeuvres || '')})">📝 Simuler une intro</button>`
    : '';
  const actions = [simBtn, corpusBtn].filter(Boolean).join('');
  return `<div class="auteur-body-inner">${intro}${mouv}${oeuvres}${dev}${note}${empty}${actions ? `<div class="auteur-corpus-row">${actions}</div>` : ''}</div>`;
}

function renderAuteursList() {
  initAuteursFilters();
  const list = el('auteurs-list');
  const summary = el('auteurs-summary');
  if (!list || typeof AUTEURS_DATA === 'undefined') return;
  const items = getFilteredAuteurs();
  if (summary) summary.textContent = `${items.length} auteur${items.length > 1 ? 's' : ''} affiché${items.length > 1 ? 's' : ''}`;
  if (!items.length) {
    list.innerHTML = '<p class="auteurs-empty">Aucun auteur ne correspond à ta recherche.</p>';
    return;
  }
  list.innerHTML = items.map(a => {
    const meta = [a.genre, a.dates].filter(Boolean).join(' · ');
    const open = AUTEURS_OPEN.has(a.id);
    const hint = open ? 'Cliquer pour replier' : 'Cliquer pour voir mouvement, œuvres et développement';
    return `<article class="auteur-card${open ? ' open' : ''}" id="auteur-${escHtml(a.id)}" data-auteur-id="${escHtml(a.id)}" role="button" tabindex="0" aria-expanded="${open ? 'true' : 'false'}" title="${hint}">
      <div class="auteur-card-top">
        <div class="auteur-card-head">
          <h3 class="auteur-nom">${escHtml(a.nom)}</h3>
          <span class="auteur-ticon" aria-hidden="true">+</span>
        </div>
        <p class="auteur-meta">${escHtml(meta) || '—'}</p>
      </div>
      <div class="auteur-body">${auteursBodyHtml(a)}</div>
    </article>`;
  }).join('');
}

function escHtml(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
