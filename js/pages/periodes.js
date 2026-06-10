/* periodes.js — Mouvements littéraires par genre (XVIIe s. →) */
const PERIODES_STATE = { genre: 'roman', search: '' };

function periodesNorm(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ' ')
    .replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function periodeSearchBlob(p) {
  const o = p.oeuvre || {};
  return periodesNorm([
    p.mouvement, p.periode, o.titre, o.auteur, o.annee, ...(p.auteurs || []),
  ].join(' '));
}

function getFilteredPeriodes() {
  const genre = PERIODES_STATE.genre;
  const items = (typeof PERIODES_DATA !== 'undefined' && PERIODES_DATA[genre]) ? PERIODES_DATA[genre] : [];
  const q = periodesNorm(PERIODES_STATE.search);
  if (!q) return items;
  return items.filter(p => periodeSearchBlob(p).includes(q));
}

function initPeriodesFilters() {
  const chips = el('periodes-genre-chips');
  if (!chips || chips.dataset.ready) return;
  chips.dataset.ready = '1';
  chips.innerHTML = PERIODES_GENRES.map(g => {
    const n = PERIODES_DATA[g.id]?.length || 0;
    const on = g.id === PERIODES_STATE.genre ? ' on' : '';
    return `<button class="chip${on}" data-genre="${g.id}" onclick="setPeriodesGenre('${g.id}',this)">${g.icon} ${g.label} (${n})</button>`;
  }).join('');

  const srch = el('periodes-search');
  if (srch && !srch.dataset.ready) {
    srch.dataset.ready = '1';
    srch.addEventListener('input', debounce(() => {
      PERIODES_STATE.search = srch.value;
      renderPeriodesList();
    }, 180));
  }

  const hero = el('periodes-count-hero');
  if (hero && typeof PERIODES_DATA !== 'undefined') {
    const total = PERIODES_GENRES.reduce((s, g) => s + (PERIODES_DATA[g.id]?.length || 0), 0);
    hero.textContent = `${total} mouvements · À partir du XVIIe siècle · Roman · Théâtre · Poésie`;
  }
}

function setPeriodesGenre(id, btn) {
  PERIODES_STATE.genre = id;
  document.querySelectorAll('#periodes-genre-chips .chip').forEach(c => c.classList.remove('on'));
  if (btn) btn.classList.add('on');
  renderPeriodesList();
}

function periodeOeuvreHtml(p) {
  const o = p.oeuvre || {};
  if (!o.titre) return '<span class="periode-muted">—</span>';
  const meta = [o.auteur, o.annee].filter(Boolean).join(' · ');
  return `<div class="periode-oeuvre">
    <strong class="periode-oeuvre-titre">${escHtmlPeriode(o.titre)}</strong>
    ${meta ? `<span class="periode-oeuvre-meta">${escHtmlPeriode(meta)}</span>` : ''}
  </div>`;
}

function periodeAuteursHtml(auteurs) {
  if (!auteurs?.length) return '<span class="periode-muted">—</span>';
  return `<ul class="periode-auteurs-list">${auteurs.map(a =>
    `<li>${escHtmlPeriode(a)}</li>`
  ).join('')}</ul>`;
}

function periodeTableHtml(items) {
  const rows = items.map((p, i) => `<tr class="periode-tr${i % 2 ? ' alt' : ''}">
    <td class="periode-td-mouv">
      <span class="periode-mouv-name">${escHtmlPeriode(p.mouvement)}</span>
    </td>
    <td class="periode-td-per">
      <span class="periode-per-badge">${escHtmlPeriode(p.periode)}</span>
    </td>
    <td class="periode-td-oeuvre">${periodeOeuvreHtml(p)}</td>
    <td class="periode-td-aut">${periodeAuteursHtml(p.auteurs)}</td>
  </tr>`).join('');

  return `<div class="periodes-table-wrap">
    <table class="periodes-table">
      <thead>
        <tr>
          <th>Mouvement</th>
          <th>Période</th>
          <th>Première œuvre</th>
          <th>Grands auteurs</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`;
}

function renderPeriodesList() {
  initPeriodesFilters();
  const list = el('periodes-list');
  const summary = el('periodes-summary');
  if (!list || typeof PERIODES_DATA === 'undefined') return;

  const genre = PERIODES_GENRES.find(g => g.id === PERIODES_STATE.genre);
  const items = getFilteredPeriodes();

  if (summary) {
    summary.textContent = `${items.length} mouvement${items.length > 1 ? 's' : ''} · ${genre?.icon || ''} ${genre?.label || ''}`;
  }

  if (!items.length) {
    list.innerHTML = '<p class="periodes-empty">Aucun mouvement ne correspond à ta recherche.</p>';
    return;
  }

  list.innerHTML = periodeTableHtml(items);
}

function escHtmlPeriode(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
