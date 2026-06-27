/* oral.js — 16 lectures linéaires (épreuve orale) · hub · filtres · fiches */

const ORAL_STATE = { search: '', filter: 'all', author: '', activeId: null, tab: 'corrigé' };

function oralAllTexts() {
  return typeof oralGetAllTexts === 'function' ? oralGetAllTexts()
    : (typeof ORAL_TEXTS !== 'undefined' ? ORAL_TEXTS : []);
}

function oralNorm(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ' ')
    .replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function oralEsc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function oralParas(text) {
  return (text || '').split(/\n\n+/).filter(Boolean)
    .map(p => `<p>${oralEsc(p)}</p>`).join('');
}

function oralLinesHtml(lines) {
  if (!lines?.length) return '';
  return lines.map(ln => {
    const t = (ln || '').trim();
    if (!t) return '';
    if (/^→\s/.test(t)) return `<p class="oral-arrow">${oralEsc(t)}</p>`;
    if (/^«/.test(t)) return `<p class="oral-cite">${oralEsc(t)}</p>`;
    if (/^(Arguments|Connecteurs|Procédés|Interprétation)$/i.test(t)) {
      return `<p class="oral-table-hd">${oralEsc(t)}</p>`;
    }
    return `<p>${oralEsc(t)}</p>`;
  }).join('');
}

function oralPassageKind(t) {
  const p = t?.passage;
  if (p?.rows?.some(r => r.type === 'speaker')) return 'theatre';
  if (p?.rows?.some(r => r.type === 'title')) return 'poetry';
  if (p?.lines?.some(l => /^[–—-]\s|^«/.test((l.text || '').trim()))) return 'dialogue';
  return 'prose';
}

function oralPassageLineCount(t) {
  if (t?.lineCount) return t.lineCount;
  const p = t?.passage;
  if (p?.lines?.length) return p.lines.length;
  if (p?.rows?.length) return p.rows.filter(r => r.type === 'line').length;
  return 0;
}

function oralPassageExcerpt(t, maxLen = 168) {
  const p = t?.passage;
  let parts = [];
  if (p?.lines?.length) parts = p.lines.map(l => (l.text || '').trim()).filter(Boolean);
  else if (p?.rows?.length) parts = p.rows.filter(r => r.type === 'line').map(r => (r.text || '').trim());
  else if (t?.texte) return t.texte.length <= maxLen ? t.texte : `${t.texte.slice(0, maxLen - 1).trim()}…`;
  if (!parts.length) return '';
  let out = '';
  for (const part of parts) {
    const next = out ? `${out} ${part}` : part;
    if (next.length > maxLen) break;
    out = next;
  }
  if (!out && parts[0]) out = parts[0].length > maxLen ? `${parts[0].slice(0, maxLen - 1)}…` : parts[0];
  else if (out.length < (parts.join(' ').length)) out += '…';
  return out;
}

function oralPassageLineClass(text) {
  const t = (text || '').trim();
  if (/^[–—-]\s/.test(t)) return 'oral-texte-dialogue oral-texte-has-dash';
  if (/^«/.test(t)) return 'oral-texte-quote';
  return '';
}

function oralRenderPassageContent(t, interactive, limit) {
  const p = t.passage;
  let lineCount = 0;

  function lineHtml(n, text) {
    lineCount += 1;
    if (limit && lineCount > limit) return '';
    const lineCls = ['oral-texte-line', oralPassageLineClass(text)].filter(Boolean).join(' ');
    const clickCls = interactive ? `${lineCls} oral-passage-click` : lineCls;
    const attrs = interactive
      ? ` class="${clickCls}" role="button" tabindex="0" onclick="oralExoPickLine(this)" onkeydown="if(event.key==='Enter')oralExoPickLine(this)"`
      : ` class="${clickCls}"`;
    return `<div${attrs} data-text="${oralEsc(text).replace(/"/g, '&quot;')}"><span class="oral-texte-num">${n}</span><span class="oral-texte-words">${oralEsc(text)}</span></div>`;
  }

  if (p?.rows?.length) {
    return p.rows.map(r => {
      if (r.type === 'speaker') return `<p class="oral-texte-speaker">${oralEsc(r.text)}</p>`;
      if (r.type === 'title') return `<p class="oral-texte-stanza-title">${oralEsc(r.text)}</p>`;
      if (r.type === 'line') return lineHtml(r.n, r.text);
      return '';
    }).filter(Boolean).join('');
  }

  if (p?.lines?.length) {
    return p.lines.map(l => lineHtml(l.n, l.text)).filter(Boolean).join('');
  }

  if (t.texte) {
    const paras = t.texte.split(/\n\n+/).filter(Boolean);
    const slice = limit ? paras.slice(0, 1) : paras;
    return slice.map(para => `<p class="oral-texte-para">${oralEsc(para)}</p>`).join('');
  }
  return '<p class="oral-muted">Passage non disponible.</p>';
}

function oralRenderPassageBlock(t, interactive, mode) {
  if (!t) return '<p class="oral-muted">Passage non disponible.</p>';
  const m = mode || (interactive ? 'full' : 'full');
  const kind = oralPassageKind(t);
  const total = oralPassageLineCount(t);
  const limit = m === 'compact' ? 9 : m === 'card' ? 4 : 0;
  const content = oralRenderPassageContent(t, interactive && m !== 'card', limit);
  const truncated = limit && total > limit;

  if (m === 'card') {
    const ex = oralPassageExcerpt(t, 150);
    if (!ex) return '';
    return `<blockquote class="oral-card-excerpt"><span class="oral-card-excerpt-mark">«</span>${oralEsc(ex)}<span class="oral-card-excerpt-mark">»</span></blockquote>`;
  }

  const frameCls = [
    'oral-texte-frame',
    `oral-texte-${kind}`,
    interactive ? 'oral-texte-interactive' : '',
    m === 'compact' ? 'oral-texte-compact' : '',
    truncated ? 'oral-texte-truncated' : '',
  ].filter(Boolean).join(' ');

  const moreBtn = truncated && t.id
    ? `<button type="button" class="oral-texte-more sbtn sec" onclick="openOralText('${t.id}','passage')">Lire le texte intégral · ${total} lignes →</button>`
    : '';

  return `
    <article class="${frameCls}">
      <header class="oral-texte-head">
        <div class="oral-texte-ornament" aria-hidden="true">❧</div>
        <p class="oral-texte-author">${oralEsc(t.auteur)}</p>
        <p class="oral-texte-work"><em>${oralEsc(t.oeuvre)}</em></p>
        <h4 class="oral-texte-title">${oralEsc(t.titre)}</h4>
        ${total ? `<span class="oral-texte-meta">${total} ligne${total > 1 ? 's' : ''} · LL n°${t.num}</span>` : ''}
      </header>
      <div class="oral-texte-scroll">
        <div class="oral-texte-body">${content}</div>
        ${truncated ? '<div class="oral-texte-fade" aria-hidden="true"></div>' : ''}
      </div>
      ${interactive ? '<p class="oral-texte-hint">Clique une ligne pour la citer dans ton analyse</p>' : ''}
      ${moreBtn}
    </article>`;
}

function oralHasDraft(id) {
  try { return !!localStorage.getItem(`oral_exo_draft_${id}`); } catch (e) { return false; }
}

function oralUniqueAuthors() {
  if (typeof ORAL_TEXTS === 'undefined') return [];
  const seen = new Set();
  return oralAllTexts().map(t => t.auteur).filter(a => {
    if (seen.has(a)) return false;
    seen.add(a);
    return true;
  });
}

function initOralFilters() {
  const srch = el('oral-search');
  if (srch && !srch.dataset.ready) {
    srch.dataset.ready = '1';
    srch.addEventListener('input', debounce(() => {
      ORAL_STATE.search = srch.value;
      renderOralList();
    }, 160));
  }
  const hero = el('oral-count-hero');
  if (hero && typeof ORAL_TEXTS !== 'undefined') {
    const modN = typeof oralModifiedCount === 'function' ? oralModifiedCount() : 0;
    hero.textContent = `${ORAL_TEXTS.length} lectures linéaires · passages complets · exercice procédés 30 min${modN ? ` · ${modN} personnalisée${modN > 1 ? 's' : ''}` : ''}`;
  }
  renderOralFilterChips();
}

function renderOralFilterChips() {
  const box = el('oral-filters');
  if (!box || typeof ORAL_TEXTS === 'undefined') return;

  const stats = typeof oralExoLoadStats === 'function' ? oralExoLoadStats() : {};
  const texts = oralAllTexts();
  const done = texts.filter(t => stats[t.id]?.note != null).length;
  const todo = texts.length - done;
  const authors = oralUniqueAuthors();

  const chips = [
    { id: 'all', label: `Tous (${texts.length})` },
    { id: 'todo', label: `À faire (${todo})` },
    { id: 'done', label: `Faits (${done})` },
  ];

  box.innerHTML = `
    <div class="oral-filter-row">
      ${chips.map(c => `<button type="button" class="chip${ORAL_STATE.filter === c.id ? ' on' : ''}" onclick="oralSetFilter('${c.id}')">${c.label}</button>`).join('')}
    </div>
    ${authors.length > 1 ? `<div class="oral-filter-row oral-filter-authors">
      <button type="button" class="chip sec${!ORAL_STATE.author ? ' on' : ''}" onclick="oralSetAuthorIdx(-1)">Tous auteurs</button>
      ${authors.map((a, i) => `<button type="button" class="chip sec${ORAL_STATE.author === a ? ' on' : ''}" onclick="oralSetAuthorIdx(${i})">${oralEsc(a.split(' ').pop() || a)}</button>`).join('')}
    </div>` : ''}`;
}

function oralSetFilter(f) {
  ORAL_STATE.filter = f;
  renderOralFilterChips();
  renderOralList();
}

function oralSetAuthorIdx(i) {
  const authors = oralUniqueAuthors();
  ORAL_STATE.author = i >= 0 && i < authors.length ? authors[i] : '';
  renderOralFilterChips();
  renderOralList();
}

function getFilteredOralTexts() {
  if (typeof ORAL_TEXTS === 'undefined') return [];
  const stats = typeof oralExoLoadStats === 'function' ? oralExoLoadStats() : {};
  let items = oralAllTexts().slice();

  if (ORAL_STATE.filter === 'todo') items = items.filter(t => stats[t.id]?.note == null);
  else if (ORAL_STATE.filter === 'done') items = items.filter(t => stats[t.id]?.note != null);

  if (ORAL_STATE.author) items = items.filter(t => t.auteur === ORAL_STATE.author);

  const q = oralNorm(ORAL_STATE.search);
  if (q) {
    items = items.filter(t => oralNorm([t.auteur, t.oeuvre, t.titre, t.problematique].join(' ')).includes(q));
  }
  return items;
}

function renderOralHub() {
  const hub = el('oral-hub');
  if (!hub || typeof ORAL_TEXTS === 'undefined') return;

  const g = typeof oralExoComputeGlobalStats === 'function' ? oralExoComputeGlobalStats() : null;
  const stats = typeof oralExoLoadStats === 'function' ? oralExoLoadStats() : {};
  const pctDone = g ? Math.round(g.done / g.total * 100) : 0;

  const probGlobal = g?.avg != null && typeof _probFromNote20 === 'function'
    ? _probFromNote20(g.avg, Math.max(g.done, 1))
    : null;

  const texts = oralAllTexts();
  const nextTodo = texts.find(t => stats[t.id]?.note == null);
  const drafts = texts.filter(t => oralHasDraft(t.id));
  const modN = typeof oralModifiedCount === 'function' ? oralModifiedCount() : 0;
  const ext = typeof computeOralExtendedStats === 'function' ? computeOralExtendedStats() : null;

  const ipciHtml = ext?.ipci ? `
    <div class="oral-hub-ipci">
      <span class="oral-hub-ipci-title">IPCI global · ${ext.weakAxis ? `Priorité ${ext.weakAxis.icon} ${ext.weakAxis.label}` : ''}</span>
      <div class="oral-hub-ipci-grid">
        <div class="oral-hub-ipci-item"><span>P</span><strong>${ext.ipci.proc}%</strong></div>
        <div class="oral-hub-ipci-item"><span>C</span><strong>${ext.ipci.cite}%</strong></div>
        <div class="oral-hub-ipci-item"><span>I</span><strong>${ext.ipci.interp}%</strong></div>
      </div>
    </div>` : '';

  const recentHtml = ext?.recent?.length ? `
    <div class="oral-hub-recent">
      <span class="oral-hub-label">Dernières simulations</span>
      ${ext.recent.map(r => `<span class="oral-hub-recent-item">LL n°${r.num} · ${r.note}/20</span>`).join('')}
    </div>` : '';

  const tableHtml = typeof ORAL_TEXTS !== 'undefined' ? `
    <details class="oral-hub-table-wrap">
      <summary class="oral-hub-table-summary">Tableau des 16 LL · notes & progression</summary>
      <div class="oral-hub-table-scroll">
        <table class="oral-hub-table">
          <thead><tr><th>LL</th><th>Auteur</th><th>Note</th><th>Proc.</th><th>P(≥10)</th><th></th></tr></thead>
          <tbody>${texts.map(tx => {
            const s = stats[tx.id];
            const prob = s?.note != null && typeof _probFromNote20 === 'function'
              ? _probFromNote20(s.note, s.attempts || 1) : '—';
            const cov = s?.covered != null ? `${s.covered}/${s.targetCount}` : '—';
            return `<tr>
              <td>n°${tx.num}</td>
              <td>${oralEsc(tx.auteur.split(' ').pop() || tx.auteur)}</td>
              <td>${s?.note != null ? `<strong>${s.note}/20</strong>` : '—'}</td>
              <td>${cov}</td>
              <td>${prob !== '—' ? prob + '%' : '—'}</td>
              <td><button type="button" class="sbtn sec" style="font-size:10px;padding:2px 8px" onclick="openOralText('${tx.id}')">→</button></td>
            </tr>`;
          }).join('')}</tbody>
        </table>
      </div>
    </details>` : '';

  hub.innerHTML = `
    <div class="oral-hub-grid">
      <div class="oral-hub-card">
        <span class="oral-hub-label">Parcours oral</span>
        <strong class="oral-hub-value">${g?.done ?? 0}<span>/${g?.total ?? 16}</span></strong>
        <div class="oral-hub-bar"><span style="width:${pctDone}%"></span></div>
        <span class="oral-hub-sub">${pctDone}% des LL simulées${ext?.todoCount != null ? ` · ${ext.todoCount} restantes` : ''}</span>
      </div>
      <div class="oral-hub-card">
        <span class="oral-hub-label">Moyenne /20</span>
        <strong class="oral-hub-value oral-hub-note">${g?.avg ?? '—'}</strong>
        <span class="oral-hub-sub">${g?.best != null ? `Meilleure : ${g.best}/20` : 'Aucune note encore'}</span>
      </div>
      <div class="oral-hub-card">
        <span class="oral-hub-label">P(≥10) globale</span>
        <strong class="oral-hub-value">${probGlobal != null ? `${probGlobal}%` : '—'}</strong>
        <span class="oral-hub-sub">${g?.totalAtt ?? 0} procédés au corrigé total</span>
      </div>
      <div class="oral-hub-card oral-hub-action">
        ${nextTodo ? `<button type="button" class="pbtn" onclick="oralExoStart('${nextTodo.id}')">▶ Prochaine LL n°${nextTodo.num}</button>` : '<span class="oral-hub-done">✓ Parcours complet</span>'}
        ${drafts.length ? `<button type="button" class="sbtn sec" onclick="oralExoStart('${drafts[0].id}')">⏸ Reprendre brouillon · LL n°${drafts[0].num}</button>` : ''}
        <button type="button" class="sbtn sec" onclick="oralQcmFocus()">QCM oral (60)</button>
        <button type="button" class="sbtn sec" onclick="openOralPassages()">📖 Passages intégraux</button>
        <button type="button" class="sbtn sec" onclick="openOralText('${nextTodo?.id || texts[0]?.id || 'LL-01'}','edition')">✏️ Éditer une LL</button>
        ${modN ? `<button type="button" class="sbtn sec" onclick="oralExportOverridesFile()">⬇ Export LL (${modN})</button>` : ''}
      </div>
    </div>
    ${ipciHtml}
    <p class="oral-hub-edit-hint">Chaque LL est entièrement modifiable dans l'onglet <strong>✏️ Édition</strong> (passage, corrigé, procédés IPCI…).</p>
    ${recentHtml}
    ${tableHtml}`;
  hub.hidden = false;
}

function renderOralList() {
  initOralFilters();
  renderOralHub();

  const list = el('oral-list');
  const detail = el('oral-detail');
  if (!list || typeof ORAL_TEXTS === 'undefined') return;

  const items = getFilteredOralTexts();
  if (detail) detail.hidden = true;
  list.hidden = false;

  if (!items.length) {
    list.innerHTML = '<p class="oral-empty">Aucune lecture linéaire ne correspond à tes filtres.</p>';
    return;
  }

  const stats = typeof oralExoLoadStats === 'function' ? oralExoLoadStats() : {};
  list.innerHTML = items.map(t => {
    const st = stats[t.id];
    const attenduN = t.attenduCount || t.attendus?.length || 0;
    const movN = t.attendusByMouvement?.length || 0;
    const hasPassage = !!(t.texte && t.texte.length > 40);
    const draft = oralHasDraft(t.id);
    const coveredPct = st?.covered != null && st?.targetCount
      ? Math.round(st.covered / st.targetCount * 100)
      : null;

    let statusCls = 'oral-card-todo';
    let statusLabel = 'À simuler';
    if (st?.note != null) {
      statusCls = st.note >= 10 ? 'oral-card-ok' : 'oral-card-low';
      statusLabel = `${st.note}/20 · ${st.mention || ''}`;
    } else if (draft) {
      statusCls = 'oral-card-draft';
      statusLabel = 'Brouillon en cours';
    }

    const prob = st?.note != null && typeof _probFromNote20 === 'function'
      ? _probFromNote20(st.note, st.attempts || 1)
      : null;
    const modTag = typeof oralIsModified === 'function' && oralIsModified(t.id)
      ? '<span class="oral-modified-tag">modifié</span>' : '';

    return `
    <button type="button" class="oral-card ${statusCls}" onclick="openOralText('${t.id}')">
      <div class="oral-card-top">
        <span class="oral-card-num">LL n°${t.num}</span>
        ${modTag}
        <span class="oral-card-status">${oralEsc(statusLabel)}</span>
      </div>
      <strong class="oral-card-title">${oralEsc(t.auteur)} — ${oralEsc(t.titre)}</strong>
      <span class="oral-card-meta">${oralEsc(t.oeuvre)} · ${attenduN} procédés${movN ? ` · ${movN} mouv.` : ''}${t.lineCount ? ` · ${t.lineCount} lignes` : ''}</span>
      ${hasPassage ? oralRenderPassageBlock(t, false, 'card') : ''}
      ${coveredPct != null ? `<div class="oral-card-progress"><span style="width:${coveredPct}%"></span></div><span class="oral-card-cov">${st.covered}/${st.targetCount} proc. repérés (${coveredPct}%)</span>` : ''}
      <span class="oral-card-prob">${oralEsc(t.problematique)}</span>
      <div class="oral-card-foot">
        <button type="button" class="oral-card-edit-btn" onclick="event.stopPropagation();openOralText('${t.id}','edition')" title="Modifier tout">✏️</button>
        ${hasPassage ? `<span class="oral-card-tag">Exercice 30 min</span>` : ''}
        ${prob != null ? `<span class="oral-card-prob-tag">P(≥10) ${prob}%</span>` : ''}
        ${st?.bestNote != null && st.bestNote !== st.note ? `<span class="oral-card-best">Record ${st.bestNote}</span>` : ''}
      </div>
    </button>`;
  }).join('');
}

function openOralText(id, tab) {
  if (typeof oralExoStopTimer === 'function') oralExoStopTimer();
  const t = typeof getOralTextById === 'function' ? getOralTextById(id) : oralAllTexts().find(x => x.id === id);
  if (!t) return;
  ORAL_STATE.activeId = id;
  ORAL_STATE.tab = tab || 'corrigé';

  const list = el('oral-list');
  const hub = el('oral-hub');
  const detail = el('oral-detail');
  if (list) list.hidden = true;
  if (hub) hub.hidden = true;
  if (!detail) return;
  detail.hidden = false;

  const hasPassage = !!(t.texte && t.texte.length > 40) || t.passage?.lines?.length;

  if (ORAL_STATE.tab === 'edition') {
    if (typeof oralRenderEditionDetail === 'function') {
      oralRenderEditionDetail(t, id);
      return;
    }
  }
  if (typeof ORAL_EDIT_STATE !== 'undefined') ORAL_EDIT_STATE.activeId = null;

  const planHtml = (t.plan || []).map((p, i) =>
    `<li><strong>${i + 1}${i === 0 ? 'er' : 'e'} mouvement :</strong> ${oralEsc(p)}</li>`,
  ).join('');

  const sectionsHtml = (t.sections || []).map(sec => `
    <details class="oral-section" open>
      <summary>${oralEsc(sec.title)}</summary>
      <div class="oral-section-body">${oralLinesHtml(sec.lines)}</div>
    </details>
  `).join('');

  const passageCompact = hasPassage && typeof oralRenderPassageBlock === 'function'
    ? oralRenderPassageBlock(t, false, 'compact')
    : '';
  const passageFull = hasPassage && typeof oralRenderPassageBlock === 'function'
    ? oralRenderPassageBlock(t, false, 'full')
    : '<p class="oral-muted">Passage indisponible.</p>';

  const stats = typeof oralExoLoadStats === 'function' ? oralExoLoadStats() : {};
  const st = stats[t.id];
  const hist = typeof oralExoLoadHistory === 'function' ? oralExoLoadHistory(t.id) : [];
  const draft = oralHasDraft(t.id);

  const statsBanner = st?.note != null ? `
    <div class="oral-detail-stats">
      <span class="oral-detail-stat-note">${st.note}/20</span>
      <span>${oralEsc(st.mention || '')} · ${st.covered}/${st.targetCount} proc. · P(≥10) ${typeof _probFromNote20 === 'function' ? _probFromNote20(st.note, st.attempts || 1) : '—'}%</span>
      ${hist.length > 1 ? `<span class="oral-detail-hist">Tentatives : ${hist.slice(0, 6).map(h => h.note).join(' · ')}</span>` : ''}
    </div>` : draft ? `<p class="oral-detail-draft">⏸ Brouillon en cours — reprends l'exercice pour continuer le timer.</p>` : '';

  const movSummary = (t.attendusByMouvement || []).map(g =>
    `<li><strong>${oralEsc(g.title)}</strong> — ${g.items.length} procédé${g.items.length > 1 ? 's' : ''}</li>`,
  ).join('');

  const tabCorrigé = ORAL_STATE.tab === 'corrigé';
  const tabPassage = ORAL_STATE.tab === 'passage';
  const mainTabs = typeof oralRenderMainTabs === 'function'
    ? oralRenderMainTabs(id, t, ORAL_STATE.tab, hasPassage)
    : `<div class="oral-tabs">
      <button type="button" class="chip${tabCorrigé ? ' on' : ''}" onclick="openOralText('${t.id}','corrigé')">Corrigé</button>
      ${hasPassage ? `<button type="button" class="chip${tabPassage ? ' on' : ''}" onclick="openOralText('${t.id}','passage')">Passage</button>` : ''}
      <button type="button" class="chip oral-tab-edit" onclick="openOralText('${t.id}','edition')">✏️ Édition</button>
    </div>`;

  detail.innerHTML = `
    <div class="oral-detail-toolbar">
      <button type="button" class="sbtn sec" onclick="renderOralList()">← Liste des 16 textes</button>
      ${hasPassage ? `<button type="button" class="sbtn pbtn oral-exo-start-btn" onclick="oralExoStart('${t.id}')">${draft ? '⏸ Reprendre' : '▶ Exercice · 30 min'}</button>` : ''}
      ${hasPassage && st?.note != null ? `<button type="button" class="sbtn sec" onclick="oralExoStart('${t.id}', true)">↺ Refaire</button>` : ''}
      <button type="button" class="sbtn sec" onclick="oralQcmFocus()">✏️ QCM</button>
    </div>
    ${statsBanner}
    ${mainTabs}
    <header class="oral-detail-head">
      <p class="oral-detail-eyebrow">Lecture linéaire n°${t.num}</p>
      <h2>${oralEsc(t.auteur)} — <em>${oralEsc(t.titre)}</em></h2>
      <p class="oral-detail-oeuvre">${oralEsc(t.oeuvre)} · ${t.attenduCount || t.attendus?.length || 0} procédés corrigés${t.lineCount ? ` · ${t.lineCount} lignes` : ''}${t._modified ? ' · <span class="oral-modified-tag">personnalisé</span>' : ''}</p>
    </header>
    ${tabPassage ? `
    <section class="oral-block oral-block-passage oral-block-passage-full">
      <h3>Texte intégral</h3>
      ${passageFull}
      <div class="gtext-actions" style="margin-top:1rem">
        <button type="button" class="pbtn" onclick="oralExoStart('${t.id}')">${draft ? '⏸ Reprendre l\'exercice' : '▶ Lancer l\'exercice (30 min)'}</button>
      </div>
    </section>` : `
    ${hasPassage ? `<section class="oral-block oral-block-passage oral-block-passage-hero">
      <h3>Passage · texte source</h3>
      ${passageCompact}
    </section>` : ''}
    <section class="oral-block">
      <h3>Introduction</h3>
      ${oralParas(t.introduction)}
    </section>
    <section class="oral-block oral-block-prob">
      <h3>Problématique</h3>
      <p>${oralEsc(t.problematique)}</p>
    </section>
    ${planHtml ? `<section class="oral-block"><h3>Plan</h3><ol class="oral-plan">${planHtml}</ol></section>` : ''}
    ${movSummary ? `<section class="oral-block"><h3>Mouvements du corrigé</h3><ul class="oral-plan">${movSummary}</ul></section>` : ''}
    <section class="oral-block">
      <h3>Développement</h3>
      ${sectionsHtml || '<p class="oral-muted">—</p>'}
    </section>
    ${t.conclusion ? `<section class="oral-block"><h3>Conclusion</h3>${oralParas(t.conclusion)}</section>` : ''}
    ${t.ouverture ? `<section class="oral-block oral-block-ouv"><h3>Ouverture</h3>${oralParas(t.ouverture)}</section>` : ''}
    ${hasPassage ? `<div class="gtext-actions oral-detail-exo-cta"><button type="button" class="pbtn" onclick="oralExoStart('${t.id}')">${draft ? '⏸ Reprendre · brouillon' : `▶ Exercice procédés · 30 min · ${t.attenduCount || t.attendus?.length || 0} attendus`}</button></div>` : ''}`}
  `;
  detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function oralQcmFocus() {
  if (typeof openQcmCat === 'function') {
    openQcmCat('proc', 'Lecture linéaire (oral)');
  } else if (typeof navTab === 'function') {
    navTab('proc', 'p-qcm');
    if (QCM_STATE?.proc) {
      QCM_STATE.proc.cat = 'Lecture linéaire (oral)';
      mixQ('proc');
    }
  }
  if (typeof toast === 'function') toast('QCM · filtre « Lecture linéaire (oral) »');
}

function initOral() {
  renderOralList();
}

if (typeof window !== 'undefined') {
  window.renderOralList = renderOralList;
  window.renderOralHub = renderOralHub;
  window.openOralText = openOralText;
  window.oralSetFilter = oralSetFilter;
  window.oralSetAuthorIdx = oralSetAuthorIdx;
  window.oralQcmFocus = oralQcmFocus;
  window.initOral = initOral;
  window.oralRenderPassageBlock = oralRenderPassageBlock;
  window.oralPassageExcerpt = oralPassageExcerpt;
}
