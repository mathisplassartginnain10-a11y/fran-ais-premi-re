/* intro-sim.js — Simulateur d'introduction (page Commentaire) */

let _introSimLiveTimer = null;
let _introSimProbIdx = 0;
const INTRO_SIM_RECENT_KEY = 'bac_intro_sim_recent';
const INTRO_SIM_RECENT_MAX = 8;
const INTRO_SIM_FAV_MAX = 50;

function introSimFavKey(fields, full) {
  return [fields?.auteur, fields?.oeuvre, fields?.passage, fields?.theme, (full || '').slice(0, 160)]
    .join('|').toLowerCase();
}

function introSimGetFavIntros() {
  return typeof loadFavs === 'function' ? (loadFavs().intros || []) : [];
}

function introSimIsFav(entry, fields) {
  if (!entry?.full) return false;
  const key = introSimFavKey(fields || introSimFields(), entry.full);
  return introSimGetFavIntros().some(i => i.key === key);
}

function introSimUpdateFavBtn() {
  const btn = el('intro-sim-fav-btn');
  if (!btn) return;
  const on = introSimIsFav(window._introSimCurrent, introSimFields());
  btn.classList.toggle('on', on);
  btn.textContent = on ? '★ Enregistrée' : '☆ Enregistrer';
  btn.title = on ? 'Retirer des favoris' : 'Enregistrer dans mes favoris';
}

function introSimToggleFav() {
  const entry = window._introSimCurrent;
  if (!entry?.full) return;
  const fields = introSimFields();
  if (typeof loadFavs !== 'function' || typeof saveFavs !== 'function') return;
  const f = loadFavs();
  if (!f.intros) f.intros = [];
  const key = introSimFavKey(fields, entry.full);
  const idx = f.intros.findIndex(i => i.key === key);
  if (idx >= 0) {
    f.intros.splice(idx, 1);
    saveFavs(f);
    introSimUpdateFavBtn();
    if (typeof renderFavs === 'function') renderFavs();
    return;
  }
  f.intros.unshift({
    id: 'IF-' + Date.now().toString(36),
    key,
    savedAt: new Date().toISOString(),
    fields: { ...fields },
    entryId: entry.id,
    auteurNom: entry.auteurNom || fields.auteur,
    titre: entry.titre || '',
    oeuvre: entry.oeuvre || fields.oeuvre,
    genre: entry.genre || '',
    prob: entry.prob || 0,
    gtextId: entry.gtextId || null,
    full: entry.full,
    temps: { ...entry.temps },
  });
  if (f.intros.length > INTRO_SIM_FAV_MAX) f.intros.length = INTRO_SIM_FAV_MAX;
  saveFavs(f);
  introSimUpdateFavBtn();
  if (typeof renderFavs === 'function') renderFavs();
  if (typeof playSound === 'function') playSound('ok');
}

function introSimRemoveFavById(id) {
  if (typeof loadFavs !== 'function') return;
  const f = loadFavs();
  if (!f.intros?.length) return;
  f.intros = f.intros.filter(i => i.id !== id);
  saveFavs(f);
  introSimUpdateFavBtn();
  if (typeof renderFavs === 'function') renderFavs();
}

function introSimCopyFavById(id) {
  const item = introSimGetFavIntros().find(i => i.id === id);
  if (!item?.full) return;
  navigator.clipboard.writeText(item.full).then(() => {
    if (typeof playSound === 'function') playSound('ok');
  }).catch(() => {});
}

function introSimOpenFromFav(id) {
  const item = introSimGetFavIntros().find(i => i.id === id);
  if (!item) return;
  introSimNavigate();
  setTimeout(() => {
    initIntroSim();
    if (item.fields) introSimSetFields(item.fields);
    introSimShowSavedFav(item);
    el('intro-sim')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 120);
}

function introSimShowSavedFav(item) {
  const entry = {
    id: item.entryId || 'FAV',
    auteurNom: item.auteurNom,
    auteur: item.fields?.auteur,
    titre: item.titre,
    oeuvre: item.oeuvre,
    genre: item.genre,
    prob: item.prob,
    gtextId: item.gtextId,
    temps: item.temps,
    full: item.full,
    contexte: '',
    fallback: false,
    indexOnly: !item.gtextId,
    procedesCles: [],
    authorTips: [],
  };
  window._introSimCurrent = entry;
  introSimShowResult(entry, null, { persist: false });
}

const INTRO_SIM_EXAMPLES = [
  { auteur: 'Verlaine', oeuvre: 'Poèmes saturniens', passage: 'Chanson d\'automne' },
  { auteur: 'Racine', oeuvre: 'Phèdre', passage: 'monologue' },
  { auteur: 'Hugo', oeuvre: 'Les Misérables', passage: 'Gavroche' },
  { auteur: 'Corneille', oeuvre: 'Le Cid', passage: 'Chimène' },
  { auteur: 'Baudelaire', oeuvre: 'Les Fleurs du mal', passage: 'Correspondances' },
  { auteur: 'Voltaire', oeuvre: 'Candide', passage: '' },
];

function introSimUpdateMeta() {
  const meta = el('intro-sim-meta');
  if (!meta) return;
  const gtN = typeof getAllGtexts === 'function' ? getAllGtexts().length : 732;
  const st = typeof bacPassagesLoadStatus === 'function' ? bacPassagesLoadStatus() : null;
  if (st && st.loaded < st.total) {
    meta.textContent = `Chargement banque bac… ${st.loaded}/${st.total} · ${gtN} grands textes analysables`;
    return;
  }
  const n = typeof introSimCount === 'function' ? introSimCount() : 10000;
  meta.textContent = n + ' passages probables indexés · ' + gtN + ' grands textes analysables · aperçu en direct';
}

function introSimRenderTopBac() {
  const wrap = el('intro-sim-top-wrap');
  const cont = el('intro-sim-top');
  if (!wrap || !cont || typeof introSimTopEntries !== 'function') return;
  if (wrap.dataset.loading) return;
  const top = introSimTopEntries(10, 92);
  if (!top.length) { wrap.hidden = true; return; }
  wrap.hidden = false;
  cont.innerHTML = top.map(e => {
    const oe = (e.oeuvre || '').replace(/\(\d{4}\)/, '').trim();
    return `<button type="button" class="chip intro-sim-ex-chip intro-sim-top-chip" onclick="introSimQuick(${JSON.stringify(e.auteurNom || e.auteur)},${JSON.stringify(oe)},${JSON.stringify(e.titre || '')})" title="Probabilité ~${e.prob || '?'}%">${introSimEsc(e.auteurNom || e.auteur)} · ${introSimEsc((e.titre || oe).slice(0, 28))}</button>`;
  }).join('');
}

function initIntroSim() {
  introSimUpdateMeta();
  const bindForm = () => {
    const quick = el('intro-sim-quick');
    if (quick && !quick.dataset.ready) {
      quick.dataset.ready = '1';
      quick.innerHTML = INTRO_SIM_EXAMPLES.map(ex =>
        `<button type="button" class="chip intro-sim-ex-chip" onclick="introSimQuick(${JSON.stringify(ex.auteur)},${JSON.stringify(ex.oeuvre)},${JSON.stringify(ex.passage)})">${introSimEsc(ex.auteur)} · ${introSimEsc(ex.oeuvre.split('(')[0].trim())}</button>`
      ).join('');
    }
    const au = el('intro-sim-auteur');
    const oe = el('intro-sim-oeuvre');
    const pa = el('intro-sim-passage');
    if (au && !au.dataset.ready) {
      au.dataset.ready = '1';
      au.addEventListener('input', () => { introSimUpdateSuggest('auteur'); introSimScheduleLive(); });
    }
    if (oe && !oe.dataset.ready) {
      oe.dataset.ready = '1';
      oe.addEventListener('input', () => { introSimUpdateSuggest('oeuvre'); introSimScheduleLive(); });
    }
    if (pa && !pa.dataset.ready) {
      pa.dataset.ready = '1';
      pa.addEventListener('input', () => {
        if (typeof introSimIsExcerptText !== 'function' || !introSimIsExcerptText(pa.value)) {
          introSimUpdateSuggest('passage');
        }
        introSimScheduleLive();
      });
    }
    ['intro-sim-auteur', 'intro-sim-oeuvre', 'intro-sim-theme'].forEach(id => {
      const inp = el(id);
      if (inp && !inp.dataset.enter) {
        inp.dataset.enter = '1';
        inp.addEventListener('keydown', e => {
          if (e.key === 'Enter') { e.preventDefault(); introSimGenerate(); }
        });
      }
    });
    const paEnter = el('intro-sim-passage');
    if (paEnter && !paEnter.dataset.enter) {
      paEnter.dataset.enter = '1';
      paEnter.addEventListener('keydown', e => {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          introSimGenerate();
        }
      });
    }
    const theme = el('intro-sim-theme');
    if (theme && !theme.dataset.live) {
      theme.dataset.live = '1';
      theme.addEventListener('input', introSimScheduleLive);
    }
    introSimRenderRecent();
    introSimRenderTopBac();
    introSimApplyQuery();
  };

  if (typeof ensureBacPassagesLoaded === 'function') {
    const st = typeof bacPassagesLoadStatus === 'function' ? bacPassagesLoadStatus() : null;
    if (st && st.loaded < st.total) {
      const wrap = el('intro-sim-top-wrap');
      if (wrap) { wrap.hidden = false; wrap.dataset.loading = '1'; }
      ensureBacPassagesLoaded((n, tot) => {
        introSimUpdateMeta();
      }).then(() => {
        if (typeof introSimResetIndex === 'function') introSimResetIndex();
        if (wrap) delete wrap.dataset.loading;
        introSimUpdateMeta();
        bindForm();
      }).catch(() => {
        introSimUpdateMeta();
        bindForm();
      });
      if (!el('intro-sim-auteur')?.dataset.ready) bindForm();
      return;
    }
  }
  bindForm();
}

function introSimFields() {
  return {
    auteur: el('intro-sim-auteur')?.value.trim() || '',
    oeuvre: el('intro-sim-oeuvre')?.value.trim() || '',
    passage: el('intro-sim-passage')?.value.trim() || '',
    theme: el('intro-sim-theme')?.value.trim() || '',
  };
}

function introSimSetFields({ auteur, oeuvre, passage, theme }) {
  if (el('intro-sim-auteur') && auteur != null) el('intro-sim-auteur').value = auteur;
  if (el('intro-sim-oeuvre') && oeuvre != null) el('intro-sim-oeuvre').value = oeuvre;
  if (el('intro-sim-passage') && passage != null) el('intro-sim-passage').value = passage;
  if (el('intro-sim-theme') && theme != null) el('intro-sim-theme').value = theme;
}

function introSimNavigate() {
  switchMatiere('proc');
  const btn = document.querySelector('#snav-proc .stab[onclick*="p-meth"]');
  if (btn) switchPg('proc', 'p-meth', btn);
  setTimeout(() => el('intro-sim')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 160);
}

function introSimLoadRecent() {
  try { return JSON.parse(localStorage.getItem(INTRO_SIM_RECENT_KEY) || '[]'); }
  catch (e) { return []; }
}

function introSimSaveRecent(fields) {
  if (!fields?.auteur && !fields?.oeuvre) return;
  const key = [fields.auteur, fields.oeuvre, fields.passage].map(s => (s || '').toLowerCase()).join('|');
  let list = introSimLoadRecent().filter(r => r.key !== key);
  list.unshift({ ...fields, key, ts: Date.now() });
  list = list.slice(0, INTRO_SIM_RECENT_MAX);
  try { localStorage.setItem(INTRO_SIM_RECENT_KEY, JSON.stringify(list)); } catch (e) {}
  introSimRenderRecent();
}

function introSimPassageLabel(passage) {
  const p = (passage || '').trim();
  if (!p) return '';
  if (typeof introSimIsExcerptText === 'function' && introSimIsExcerptText(p)) {
    const line = p.split('\n').map(l => l.trim()).find(l => l.length > 8) || p;
    return line.length > 42 ? line.slice(0, 39) + '…' : line;
  }
  return p;
}

function introSimRenderRecent() {
  const wrap = el('intro-sim-recent-wrap');
  const cont = el('intro-sim-recent');
  if (!wrap || !cont) return;
  const list = introSimLoadRecent();
  if (!list.length) {
    wrap.hidden = true;
    return;
  }
  wrap.hidden = false;
  cont.innerHTML = list.map(r => {
    const sub = (r.oeuvre || introSimPassageLabel(r.passage) || '…').split('(')[0].trim();
    return `<button type="button" class="chip intro-sim-ex-chip" onclick="introSimQuick(${JSON.stringify(r.auteur)},${JSON.stringify(r.oeuvre)},${JSON.stringify(r.passage || '')})">${introSimEsc(r.auteur)} · ${introSimEsc(sub)}</button>`;
  }).join('');
}

function introSimPushQuery(fields) {
  if (!fields || typeof history.replaceState !== 'function') return;
  try {
    const u = new URL(location.href);
    ['intro_a', 'intro_o', 'intro_p', 'intro_t'].forEach(k => u.searchParams.delete(k));
    if (fields.auteur) u.searchParams.set('intro_a', fields.auteur);
    if (fields.oeuvre) u.searchParams.set('intro_o', fields.oeuvre);
    if (fields.passage && fields.passage.length <= 400) u.searchParams.set('intro_p', fields.passage);
    if (fields.theme) u.searchParams.set('intro_t', fields.theme);
    history.replaceState(null, '', u.pathname + u.search + u.hash);
  } catch (e) {}
}

function introSimApplyQuery() {
  const sp = new URLSearchParams(location.search);
  const auteur = sp.get('intro_a') || '';
  const oeuvre = sp.get('intro_o') || '';
  if (!auteur && !oeuvre) return;
  const au = el('intro-sim-auteur');
  if (!au || au.dataset.queryDone) return;
  au.dataset.queryDone = '1';
  introSimSetFields({
    auteur,
    oeuvre,
    passage: sp.get('intro_p') || '',
    theme: sp.get('intro_t') || '',
  });
  setTimeout(introSimGenerate, 60);
}

function introSimShareLink() {
  const f = introSimFields();
  introSimPushQuery(f);
  const url = location.href;
  const done = () => { if (typeof playSound === 'function') playSound('ok'); };
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(url).then(done).catch(() => {});
  }
}

function introSimOpts() {
  const theme = el('intro-sim-theme')?.value.trim();
  return theme ? { themeOverride: theme.charAt(0).toLowerCase() + theme.slice(1) } : {};
}

function introSimScheduleLive() {
  clearTimeout(_introSimLiveTimer);
  _introSimLiveTimer = setTimeout(introSimLivePreview, 450);
}

function introSimLivePreview() {
  const auteur = el('intro-sim-auteur')?.value.trim() || '';
  const oeuvre = el('intro-sim-oeuvre')?.value.trim() || '';
  if (!auteur && !oeuvre) return;
  const passage = el('intro-sim-passage')?.value.trim() || '';
  const matches = introSimSearch(auteur, oeuvre, passage, introSimOpts());
  if (matches.length) introSimRenderMatches(matches, auteur, oeuvre, passage, true);
}

function introSimQuick(auteur, oeuvre, passage, theme) {
  introSimSetFields({ auteur, oeuvre, passage: passage || '', theme: theme || '' });
  introSimGenerate();
}

function introSimRandom() {
  const pick = () => {
    const entry = typeof introSimRandomEntry === 'function' ? introSimRandomEntry(85) : null;
    if (!entry) {
      alert('Aucun passage trouvé (banque en cours de chargement ?). Réessaie dans quelques secondes.');
      return;
    }
    const oeuvre = (entry.oeuvre || '').replace(/\(\d{4}\)/, '').trim();
    introSimQuick(entry.auteurNom || entry.auteur, oeuvre, entry.titre || '');
  };
  if (typeof ensureBacPassagesLoaded === 'function') {
    const st = typeof bacPassagesLoadStatus === 'function' ? bacPassagesLoadStatus() : null;
    if (st && st.loaded < st.total) {
      introSimUpdateMeta();
      ensureBacPassagesLoaded().then(() => {
        if (typeof introSimResetIndex === 'function') introSimResetIndex();
        introSimUpdateMeta();
        pick();
      });
      return;
    }
  }
  pick();
}

function introSimOpenFromGtext(id) {
  const t = typeof gtextGetById === 'function' ? gtextGetById(id) : introSimGetRawText(id);
  if (!t) return;
  introSimNavigate();
  setTimeout(() => {
    initIntroSim();
    introSimQuick(t.auteur, t.oeuvre.replace(/\(\d{4}\)/, '').trim(), t.titre);
    el('intro-sim')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 120);
}

function introSimOpenFromExo(exoId) {
  if (typeof EXERCICES === 'undefined' || typeof introSimParseOeuvreRef !== 'function') return;
  const ex = EXERCICES.find(e => e.id === exoId);
  const parsed = ex?.oeuvre ? introSimParseOeuvreRef(ex.oeuvre) : null;
  if (!parsed) return;
  introSimNavigate();
  setTimeout(() => {
    initIntroSim();
    introSimQuick(parsed.auteur, parsed.oeuvre, parsed.passage);
    el('intro-sim')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 120);
}

function introSimOpenFromAuteur(nom, oeuvresStr) {
  if (!nom) return;
  const oeuvre = typeof introSimFirstOeuvreFromList === 'function'
    ? introSimFirstOeuvreFromList(oeuvresStr)
    : (oeuvresStr || '').split(/[·;,]/)[0].trim();
  introSimNavigate();
  setTimeout(() => {
    initIntroSim();
    introSimQuick(nom, oeuvre, '');
    el('intro-sim')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 120);
}

function introSimUpdateSuggest(field) {
  if (field === 'passage') {
    const pa = el('intro-sim-passage');
    if (pa && typeof introSimIsExcerptText === 'function' && introSimIsExcerptText(pa.value)) return;
  }
  const inp = el(field === 'auteur' ? 'intro-sim-auteur' : field === 'oeuvre' ? 'intro-sim-oeuvre' : 'intro-sim-passage');
  const dl = el(field === 'auteur' ? 'intro-sim-auteur-list' : field === 'oeuvre' ? 'intro-sim-oeuvre-list' : null);
  if (!inp || !dl || typeof introSimSuggest !== 'function') return;
  const items = introSimSuggest(inp.value, field === 'passage' ? 'titre' : field);
  dl.innerHTML = items.map(v => `<option value="${introSimEscAttr(v)}">`).join('');
}

function introSimEsc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function introSimEscAttr(s) {
  return introSimEsc(s).replace(/"/g, '&quot;');
}

function introSimRenderMatches(matches, auteur, oeuvre, passage, silent) {
  const wrap = el('intro-sim-matches');
  if (!wrap) return;
  if (!matches.length) {
    wrap.innerHTML = `<p class="intro-sim-warn">Aucun passage indexé ne correspond. Essaie le <strong>nom de famille</strong>, un mot de l'œuvre, ou <strong>colle l'extrait</strong> dans le champ passage. Si l'auteur est dans tes fiches, une intro générique sera quand même proposée.</p>`;
    el('intro-sim-result').innerHTML = '';
    return;
  }
  const top = matches.slice(0, 10);
  const fbNote = top[0].entry.fallback ? ' <span class="intro-sim-fb">(intro générique — auteur reconnu, passage non indexé)</span>' : '';
  wrap.innerHTML = `<p class="intro-sim-match-lbl">${matches.length} résultat${matches.length > 1 ? 's' : ''}${fbNote}${silent ? ' · aperçu' : ' — clique pour changer de passage :'}</p><div class="intro-sim-match-chips">${top.map((m, i) => {
    const probTag = m.entry.prob ? `<span class="intro-sim-prob">~${m.entry.prob}%</span>` : '';
    return `<button type="button" class="chip intro-sim-match-chip${i === 0 ? ' on' : ''}" onclick="introSimPickMatch(${i})">${introSimEsc(m.entry.id)} · ${introSimEsc(m.entry.titre || m.entry.oeuvre)} <span class="intro-sim-score">${introSimScorePct(m.score)}%</span>${probTag}</button>`;
  }).join('')}</div>`;
  window._introSimMatches = top;
  _introSimProbIdx = 0;
  introSimShowResult(top[0].entry, top[0].score, { persist: !silent });
}

function introSimPickMatch(idx) {
  const m = window._introSimMatches?.[idx];
  if (!m) return;
  document.querySelectorAll('.intro-sim-match-chip').forEach((c, i) => c.classList.toggle('on', i === idx));
  _introSimProbIdx = 0;
  introSimShowResult(m.entry, m.score, { persist: true });
}

function introSimShowResult(entry, score, showOpts) {
  showOpts = showOpts || {};
  const out = el('intro-sim-result');
  if (!out || !entry) return;
  const labels = ['① Amorce', '② Auteur & œuvre', '③ Extrait', '④ Problématique', '⑤ Plan'];
  const keys = ['amorce', 'auteur', 'extrait', 'problematique', 'plan'];

  const procedesHtml = entry.procedesCles?.length
    ? `<div class="intro-sim-proc"><strong>Procédés repérables dans ce passage</strong><div class="intro-sim-proc-chips">${entry.procedesCles.map(p => `<span class="intro-sim-proc-chip">${introSimEsc(p)}</span>`).join('')}</div></div>`
    : '';

  const tipsHtml = entry.authorTips?.length
    ? `<div class="intro-sim-tips"><strong>Repères auteur (intro)</strong><ul>${entry.authorTips.map(t => `<li>${introSimEsc(t)}</li>`).join('')}</ul></div>`
    : '';

  const probAlt = entry.problematiqueAlt?.[_introSimProbIdx % (entry.problematiqueAlt.length || 1)];
  const probText = _introSimProbIdx === 0
    ? entry.temps.problematique
    : `À travers l'étude de ce passage, nous nous demanderons ${probAlt}`;

  const blocks = keys.map((k, i) => {
    const txt = k === 'problematique' ? probText : entry.temps[k];
    return `<div class="intro-sim-temps"><div class="intro-sim-temps-head"><span class="intro-sim-temps-lbl">${labels[i]}</span><button type="button" class="intro-sim-copy-one" onclick="introSimCopySection('${k}')" title="Copier">📋</button></div><p id="intro-sim-${k}">${introSimEsc(txt)}</p></div>`;
  }).join('');

  const checklist = keys.map((k, i) =>
    `<span class="intro-sim-check-item"><span class="intro-sim-check-n">${i + 1}</span>${labels[i].replace(/^[①②③④⑤]\s*/, '')}</span>`
  ).join('');

  const actions = [];
  const relatedGt = (!entry.gtextId && typeof introSimFindRelatedGtext === 'function')
    ? introSimFindRelatedGtext(entry) : null;
  if (entry.indexOnly && !entry.gtextId) {
    actions.push(`<span class="intro-sim-index-tag">Index bac — pas d'analyse IPC complète</span>`);
  }
  if (entry.gtextId && typeof startGtext === 'function') {
    actions.push(`<button type="button" class="sbtn sec" onclick="startGtext('${introSimEscAttr(entry.gtextId)}')">📖 Analyser ${introSimEsc(entry.gtextId)}</button>`);
  } else if (relatedGt && typeof startGtext === 'function') {
    actions.push(`<button type="button" class="sbtn sec" onclick="startGtext('${introSimEscAttr(relatedGt.id)}')" title="Texte proche (même auteur/œuvre)">📖 Texte proche · ${introSimEsc(relatedGt.id)}</button>`);
  }
  if (entry.problematiqueAlt?.length > 1) {
    actions.push(`<button type="button" class="sbtn sec" onclick="introSimRotateProb()">↻ Autre problématique</button>`);
  }
  actions.push(`<button type="button" class="sbtn sec intro-sim-fav-btn" id="intro-sim-fav-btn" onclick="introSimToggleFav()">☆ Enregistrer</button>`);
  actions.push(`<button type="button" class="sbtn sec" onclick="introSimCopyFull()">📋 Copier l'intro complète</button>`);
  actions.push(`<button type="button" class="sbtn sec" onclick="introSimShareLink()">🔗 Lien partageable</button>`);
  actions.push(`<button type="button" class="sbtn sec" onclick="window.print()">🖨 Imprimer</button>`);

  out.innerHTML = `
    <div class="intro-sim-result-head">
      <span class="intro-sim-badge">${introSimEsc(entry.id)}</span>
      <strong>${introSimEsc(entry.auteurNom)}</strong> · ${introSimEsc(entry.titre || entry.oeuvre)}
      ${entry.genre ? `<span class="intro-sim-genre">${introSimEsc(entry.genre)}</span>` : ''}
      ${entry.prob ? `<span class="intro-sim-prob-badge" title="Probabilité estimée au bac">~${entry.prob}% bac</span>` : ''}
      ${score ? `<span class="intro-sim-conf">Correspondance ${introSimScorePct(score)}%</span>` : ''}
    </div>
    ${entry.fallback ? '<p class="intro-sim-fb-banner">Intro générique à partir de la fiche auteur — complète avec ton extrait d\'examen.</p>' : ''}
    <div class="intro-sim-checklist" aria-label="Structure en 5 temps">${checklist}</div>
    ${entry.contexte ? `<p class="intro-sim-ctx">${introSimEsc(entry.contexte)}</p>` : ''}
    ${procedesHtml}
    ${tipsHtml}
    <div class="intro-sim-temps-wrap">${blocks}</div>
    <div class="intro-sim-actions">${actions.join('')}</div>
    <div class="intro-sim-full">
      <div class="intro-sim-full-lbl">Introduction complète</div>
      <div class="intro-sim-full-text" id="intro-sim-full-text">${keys.map(k => `<p>${introSimEsc(k === 'problematique' ? probText : entry.temps[k])}</p>`).join('')}</div>
    </div>`;

  window._introSimCurrent = { ...entry, temps: { ...entry.temps, problematique: probText } };
  window._introSimCurrent.full = keys.map(k => window._introSimCurrent.temps[k]).join('\n\n');
  if (showOpts.persist) {
    introSimSaveRecent(introSimFields());
    introSimPushQuery(introSimFields());
  }
  introSimUpdateFavBtn();
}

function introSimRotateProb() {
  const entry = window._introSimCurrent;
  if (!entry?.problematiqueAlt?.length) return;
  _introSimProbIdx = (_introSimProbIdx + 1) % entry.problematiqueAlt.length;
  introSimShowResult(entry, null);
}

function introSimGenerate() {
  const run = () => {
    if (typeof introSimSearch !== 'function') {
      alert('Banque d\'intros non chargée.');
      return;
    }
    const auteur = el('intro-sim-auteur')?.value.trim() || '';
    const oeuvre = el('intro-sim-oeuvre')?.value.trim() || '';
    const passage = el('intro-sim-passage')?.value.trim() || '';
    if (!auteur && !oeuvre) {
      alert('Renseigne au moins l\'auteur ou l\'œuvre.');
      return;
    }
    const matches = introSimSearch(auteur, oeuvre, passage, introSimOpts());
    introSimRenderMatches(matches, auteur, oeuvre, passage, false);
    el('intro-sim-result')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };
  if (typeof ensureBacPassagesLoaded === 'function') {
    const st = typeof bacPassagesLoadStatus === 'function' ? bacPassagesLoadStatus() : null;
    if (st && st.loaded < st.total) {
      introSimUpdateMeta();
      ensureBacPassagesLoaded().then(() => {
        if (typeof introSimResetIndex === 'function') introSimResetIndex();
        introSimUpdateMeta();
        run();
      });
      return;
    }
  }
  run();
}

function introSimCopySection(key) {
  const entry = window._introSimCurrent;
  const txt = entry?.temps?.[key];
  if (!txt) return;
  navigator.clipboard.writeText(txt).catch(() => {});
  if (typeof playSound === 'function') playSound('ok');
}

function introSimCopyFull() {
  const entry = window._introSimCurrent;
  if (!entry?.full) return;
  navigator.clipboard.writeText(entry.full).then(() => {
    if (typeof playSound === 'function') playSound('ok');
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = entry.full;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  });
}
