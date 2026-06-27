/* oral-textes.js — 16 passages intégraux (lecture linéaire · épreuve orale) */

const ORAL_LL_STATE = { search: '', mode: 'passage', scrollTo: null };

function oralLlFilterItems() {
  const texts = typeof oralGetAllTexts === 'function' ? oralGetAllTexts()
    : (typeof ORAL_TEXTS !== 'undefined' ? ORAL_TEXTS : []);
  const q = typeof oralNorm === 'function' ? oralNorm(ORAL_LL_STATE.search) : ORAL_LL_STATE.search.toLowerCase();
  return texts.filter(t => {
    if (!q) return true;
    return [t.auteur, t.oeuvre, t.titre, String(t.num)].some(s =>
      (typeof oralNorm === 'function' ? oralNorm(s) : String(s).toLowerCase()).includes(q),
    );
  });
}

function oralLlHasPassage(t) {
  return !!(t.passage?.lines?.length || t.passage?.rows?.length || (t.texte && t.texte.length > 40));
}

function oralLlRenderSection(t) {
  const hasPassage = oralLlHasPassage(t);
  const passageHtml = hasPassage && typeof oralRenderPassageBlock === 'function'
    ? oralRenderPassageBlock(t, false, 'full')
    : `<div class="oral-texte-frame oral-texte-prose"><div class="oral-texte-body">${typeof oralParas === 'function' ? oralParas(t.texte) : `<p>${typeof oralEsc === 'function' ? oralEsc(t.texte) : t.texte}</p>`}</div></div>`;
  const lines = typeof oralPassageLineCount === 'function' ? oralPassageLineCount(t) : (t.lineCount || 0);
  const metaHtml = ORAL_LL_STATE.mode === 'full' ? `
    <div class="oral-ll-meta">
      ${t.introduction ? `<div class="oral-ll-intro">${typeof oralParas === 'function' ? oralParas(t.introduction) : ''}</div>` : ''}
      ${t.problematique ? `<p class="oral-ll-prob"><strong>Problématique</strong> — ${typeof oralEsc === 'function' ? oralEsc(t.problematique) : t.problematique}</p>` : ''}
      ${t.plan?.length ? `<ol class="oral-plan oral-ll-plan">${t.plan.map((p, i) => `<li><strong>M${i + 1}</strong> ${typeof oralEsc === 'function' ? oralEsc(p) : p}</li>`).join('')}</ol>` : ''}
    </div>` : '';

  return `
    <article id="oral-ll-${t.id}" class="oral-ll-article" data-id="${t.id}">
      <header class="oral-ll-article-head">
        <span class="oral-ll-num">LL n°${t.num}</span>
        <h2>${typeof oralEsc === 'function' ? oralEsc(t.auteur) : t.auteur} — <em>${typeof oralEsc === 'function' ? oralEsc(t.titre) : t.titre}</em></h2>
        <p class="oral-ll-oeuvre">${typeof oralEsc === 'function' ? oralEsc(t.oeuvre) : t.oeuvre}${lines ? ` · ${lines} lignes` : ''}${t.attenduCount || t.attendus?.length ? ` · ${t.attenduCount || t.attendus.length} procédés` : ''}</p>
        <div class="oral-ll-article-actions">
          <button type="button" class="sbtn sec" onclick="openOralFicheFromPassages('${t.id}','passage')">Fiche · corrigé</button>
          <button type="button" class="sbtn sec" onclick="oralEditFromPassages('${t.id}')">✏️ Éditer (onglet Oral)</button>
          ${hasPassage ? `<button type="button" class="sbtn sec" onclick="oralExoStart('${t.id}')">▶ Exercice 30 min</button>` : ''}
        </div>
      </header>
      ${metaHtml}
      <div class="oral-ll-passage">${passageHtml}</div>
    </article>`;
}

function renderOralLlToc(items) {
  const toc = el('oral-ll-toc');
  if (!toc) return;
  toc.innerHTML = `
    <nav class="oral-ll-toc-inner" aria-label="Sommaire des 16 passages">
      <p class="oral-ll-toc-title">Sommaire · ${items.length}/${typeof ORAL_TEXTS !== 'undefined' ? ORAL_TEXTS.length : 16}</p>
      <ol class="oral-ll-toc-list">
        ${items.map(t => {
          const name = (t.auteur.split(' ').pop() || t.auteur).slice(0, 22);
          return `<li><a href="#oral-ll-${t.id}" class="oral-ll-toc-link" onclick="oralLlScrollTo('${t.id}');return false"><span class="oral-ll-toc-n">n°${t.num}</span> ${typeof oralEsc === 'function' ? oralEsc(name) : name}</a></li>`;
        }).join('')}
      </ol>
    </nav>`;
}

function oralLlScrollTo(id) {
  const node = document.getElementById('oral-ll-' + id);
  if (node) {
    node.classList.add('oral-ll-highlight');
    node.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => node.classList.remove('oral-ll-highlight'), 1800);
  }
  document.querySelectorAll('.oral-ll-toc-link').forEach(a => {
    a.classList.toggle('on', a.getAttribute('href') === '#oral-ll-' + id);
  });
}

function renderOralLlTextes() {
  const cont = el('oral-ll-textes-cont');
  const hero = el('oral-ll-count-hero');
  if (!cont || typeof ORAL_TEXTS === 'undefined') return;
  const items = oralLlFilterItems();
  if (hero) {
    hero.textContent = `${ORAL_TEXTS.length} passages intégraux · épreuve orale · textes source numérotés ligne par ligne`;
  }
  const summary = el('oral-ll-summary');
  if (summary) {
    summary.textContent = items.length === ORAL_TEXTS.length
      ? `${items.length} textes affichés en entier`
      : `${items.length} / ${ORAL_TEXTS.length} textes`;
  }
  renderOralLlToc(items);
  cont.innerHTML = items.length
    ? items.map(oralLlRenderSection).join('')
    : '<p class="oral-muted">Aucun texte ne correspond à la recherche.</p>';
  if (ORAL_LL_STATE.scrollTo) {
    const id = ORAL_LL_STATE.scrollTo;
    ORAL_LL_STATE.scrollTo = null;
    requestAnimationFrame(() => oralLlScrollTo(id));
  }
}

function oralLlSetMode(mode) {
  ORAL_LL_STATE.mode = mode;
  document.querySelectorAll('[data-oral-ll-mode]').forEach(btn => {
    btn.classList.toggle('on', btn.dataset.oralLlMode === mode);
  });
  renderOralLlTextes();
}

function initOralLlTextes() {
  const search = el('oral-ll-search');
  if (search && !search.dataset.bound) {
    search.dataset.bound = '1';
    search.addEventListener('input', () => {
      ORAL_LL_STATE.search = search.value.trim();
      renderOralLlTextes();
    });
  }
  renderOralLlTextes();
}

function openOralPassages(scrollToId) {
  ORAL_LL_STATE.scrollTo = scrollToId || null;
  if (typeof navTab === 'function') navTab('proc', 'p-ll-textes');
  else if (typeof switchPg === 'function') {
    let btn = null;
    document.querySelectorAll('#snav-proc .stab').forEach(b => {
      if ((b.getAttribute('onclick') || '').includes("'p-ll-textes'")) btn = b;
    });
    if (btn) switchPg('proc', 'p-ll-textes', btn);
  }
  setTimeout(() => {
    if (scrollToId) oralLlScrollTo(scrollToId);
    else renderOralLlTextes();
  }, 120);
}

function openOralFicheFromPassages(id, tab) {
  if (typeof navTab === 'function') navTab('proc', 'p-oral');
  setTimeout(() => {
    if (typeof openOralText === 'function') openOralText(id, tab || 'passage');
  }, 120);
}

if (typeof window !== 'undefined') {
  window.initOralLlTextes = initOralLlTextes;
  window.renderOralLlTextes = renderOralLlTextes;
  window.oralLlScrollTo = oralLlScrollTo;
  window.oralLlSetMode = oralLlSetMode;
  window.openOralPassages = openOralPassages;
  window.openOralFicheFromPassages = openOralFicheFromPassages;
}
