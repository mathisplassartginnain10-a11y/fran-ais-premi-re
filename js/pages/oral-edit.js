/* oral-edit.js — Édition intégrée dans l'onglet Oral */

const ORAL_EDIT_STATE = { activeId: null, tab: 'infos', dirty: false, saveTimer: null };

function oralEditEsc(s) {
  return typeof oralEsc === 'function' ? oralEsc(s) : String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
}

function oralEditCollectForm(root) {
  const q = sel => root.querySelector(sel);
  const out = {};
  const map = {
    auteur: '#oral-ed-auteur',
    oeuvre: '#oral-ed-oeuvre',
    titre: '#oral-ed-titre',
    introduction: '#oral-ed-intro',
    problematique: '#oral-ed-prob',
    planRaw: '#oral-ed-plan',
    corrigeRaw: '#oral-ed-corrige',
    passageRaw: '#oral-ed-passage',
    conclusion: '#oral-ed-concl',
    ouverture: '#oral-ed-ouv',
    attendusRaw: '#oral-ed-att',
  };
  Object.entries(map).forEach(([k, sel]) => {
    const el = q(sel);
    if (el) out[k] = el.value;
  });
  const manualEl = q('#oral-ed-att-manual');
  if (manualEl) out.attendusManual = manualEl.checked;
  return out;
}

function oralEditScheduleSave(id) {
  ORAL_EDIT_STATE.dirty = true;
  const status = el('oral-edit-status');
  if (status) status.textContent = 'Modifications…';
  clearTimeout(ORAL_EDIT_STATE.saveTimer);
  ORAL_EDIT_STATE.saveTimer = setTimeout(() => oralEditSave(id, true), 900);
}

function oralEditSave(id, silent) {
  const root = el('oral-detail');
  if (!root || !id) return;
  const form = oralEditCollectForm(root);
  if (typeof oralSaveTextFromForm === 'function') {
    oralSaveTextFromForm(id, form);
    ORAL_EDIT_STATE.dirty = false;
    const status = el('oral-edit-status');
    if (status) {
      status.textContent = silent
        ? 'Enregistré · ' + new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
        : 'Enregistré';
    }
  }
}

function oralEditSetTab(subTab, id) {
  ORAL_EDIT_STATE.tab = subTab;
  if (typeof openOralText === 'function') openOralText(id, 'edition');
}

function oralRenderEditionDetail(t, id) {
  const detail = el('oral-detail');
  if (!detail) return;

  ORAL_EDIT_STATE.activeId = id;
  const subTab = ORAL_EDIT_STATE.tab || 'infos';
  const modified = typeof oralIsModified === 'function' && oralIsModified(id);
  const hasPassage = !!(t.texte && t.texte.length > 40) || t.passage?.lines?.length;

  const mainTabs = oralRenderMainTabs(id, t, 'edition', hasPassage);

  const subTabs = [
    ['infos', 'Infos & plan'],
    ['passage', 'Passage source'],
    ['corrige', 'Corrigé complet'],
    ['att', 'Procédés IPCI'],
  ];
  const subTabChips = subTabs.map(([k, label]) =>
    `<button type="button" class="chip sec${subTab === k ? ' on' : ''}" onclick="oralEditSetTab('${k}','${id}')">${label}</button>`,
  ).join('');

  let panel = '';
  if (subTab === 'infos') {
    panel = `
      <div class="oral-edit-grid">
        <label>Auteur<input type="text" id="oral-ed-auteur" class="sinput" value="${oralEditEsc(t.auteur)}" oninput="oralEditScheduleSave('${id}')"></label>
        <label>Œuvre<input type="text" id="oral-ed-oeuvre" class="sinput" value="${oralEditEsc(t.oeuvre)}" oninput="oralEditScheduleSave('${id}')"></label>
        <label>Titre<input type="text" id="oral-ed-titre" class="sinput" value="${oralEditEsc(t.titre)}" oninput="oralEditScheduleSave('${id}')"></label>
        <label class="oral-edit-full">Introduction<textarea id="oral-ed-intro" class="sinput oral-edit-ta" rows="6" oninput="oralEditScheduleSave('${id}')">${oralEditEsc(t.introduction)}</textarea></label>
        <label class="oral-edit-full">Problématique<textarea id="oral-ed-prob" class="sinput oral-edit-ta" rows="3" oninput="oralEditScheduleSave('${id}')">${oralEditEsc(t.problematique)}</textarea></label>
        <label class="oral-edit-full">Plan <span class="oral-edit-hint">(une ligne = un mouvement)</span><textarea id="oral-ed-plan" class="sinput oral-edit-ta" rows="4" oninput="oralEditScheduleSave('${id}')">${oralEditEsc(typeof oralPlanToEditable === 'function' ? oralPlanToEditable(t.plan) : (t.plan || []).join('\n'))}</textarea></label>
        <label class="oral-edit-full">Conclusion<textarea id="oral-ed-concl" class="sinput oral-edit-ta" rows="5" oninput="oralEditScheduleSave('${id}')">${oralEditEsc(t.conclusion)}</textarea></label>
        <label class="oral-edit-full">Ouverture<textarea id="oral-ed-ouv" class="sinput oral-edit-ta" rows="4" oninput="oralEditScheduleSave('${id}')">${oralEditEsc(t.ouverture)}</textarea></label>
      </div>`;
  } else if (subTab === 'passage') {
    panel = `
      <p class="oral-edit-hint">Format : <code>1. ligne</code> · théâtre : <code>[Didascalie]</code> · poésie : <code># Titre</code></p>
      <textarea id="oral-ed-passage" class="sinput oral-edit-ta oral-edit-ta-lg" oninput="oralEditScheduleSave('${id}')">${oralEditEsc(typeof oralPassageToEditable === 'function' ? oralPassageToEditable(t) : t.texte || '')}</textarea>
      <div class="oral-edit-preview"><h4>Aperçu du passage</h4><div id="oral-edit-passage-preview">${typeof oralRenderPassageBlock === 'function' ? oralRenderPassageBlock(t, false, 'full') : ''}</div></div>`;
  } else if (subTab === 'corrige') {
    panel = `
      <p class="oral-edit-hint">Sections avec en-tête <code>## Titre du mouvement</code> — tableaux Arguments / Procédés / Interprétation.</p>
      <textarea id="oral-ed-corrige" class="sinput oral-edit-ta oral-edit-ta-lg" oninput="oralEditScheduleSave('${id}')">${oralEditEsc(typeof oralSectionsToEditable === 'function' ? oralSectionsToEditable(t.sections) : '')}</textarea>`;
  } else {
    const ovs = typeof oralLoadOverrides === 'function' ? oralLoadOverrides()[id] : null;
    const manual = ovs?.attendusManual ?? false;
    panel = `
      <label class="oral-edit-check"><input type="checkbox" id="oral-ed-att-manual" ${manual ? 'checked' : ''} onchange="oralEditScheduleSave('${id}')"> Verrouiller les procédés (ne pas recalculer depuis le corrigé)</label>
      <p class="oral-edit-hint">Une ligne = un procédé · tabulation : <strong>citation → procédé → interprétation → mouvement</strong></p>
      <textarea id="oral-ed-att" class="sinput oral-edit-ta oral-edit-ta-lg" oninput="oralEditScheduleSave('${id}')">${oralEditEsc(typeof oralAttendusToEditable === 'function' ? oralAttendusToEditable(t.attendus) : '')}</textarea>
      <p class="oral-edit-hint">${(t.attendus || []).length} procédés · barème exercice 30 min.</p>`;
  }

  const stats = typeof oralExoLoadStats === 'function' ? oralExoLoadStats() : {};
  const st = stats[id];
  const draft = typeof oralHasDraft === 'function' ? oralHasDraft(id) : false;

  detail.innerHTML = `
    <div class="oral-detail-toolbar oral-edit-toolbar">
      <button type="button" class="sbtn sec" onclick="renderOralList()">← Liste des 16 textes</button>
      <button type="button" class="sbtn" onclick="oralEditSave('${id}', false)">💾 Enregistrer</button>
      ${modified ? `<button type="button" class="sbtn sec" onclick="oralEditReset('${id}')">↺ Restaurer l'original</button>` : ''}
      ${hasPassage ? `<button type="button" class="sbtn pbtn" onclick="oralExoStart('${id}')">${draft ? '⏸ Reprendre' : '▶ Exercice · 30 min'}</button>` : ''}
      <span id="oral-edit-status" class="oral-edit-status">${modified ? 'Modifié · sauvegarde auto' : 'Sauvegarde automatique'}</span>
    </div>
    ${st?.note != null ? `<div class="oral-detail-stats"><span class="oral-detail-stat-note">${st.note}/20</span><span>${oralEditEsc(st.mention || '')}</span></div>` : ''}
    ${mainTabs}
    <header class="oral-detail-head oral-edit-head">
      <p class="oral-detail-eyebrow">LL n°${t.num} · mode édition${modified ? ' · <span class="oral-modified-tag">personnalisé</span>' : ''}</p>
      <h2>${oralEditEsc(t.auteur)} — <em>${oralEditEsc(t.titre)}</em></h2>
      <p class="oral-detail-oeuvre">${oralEditEsc(t.oeuvre)} · ${t.attenduCount || t.attendus?.length || 0} procédés · ${t.lineCount || 0} lignes</p>
    </header>
    <div class="oral-edit-subtabs">
      <span class="oral-edit-subtabs-label">Modifier :</span>
      ${subTabChips}
    </div>
    <section class="oral-block oral-edit-panel oral-edit-panel-active">${panel}</section>
    <div class="oral-edit-footer">
      <p class="gtext-hint">Modifications conservées localement · export via Paramètres ou ci-dessous.</p>
      <div class="gtext-actions">
        <button type="button" class="sbtn sec" onclick="oralExportOverridesFile()">⬇ Exporter mes 16 LL</button>
        <label class="sbtn sec oral-edit-import-btn">⬆ Importer<input type="file" accept=".json" hidden onchange="oralImportOverridesFile(this.files[0]);this.value=''"></label>
      </div>
    </div>`;

  detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function oralRenderMainTabs(id, t, activeTab, hasPassage) {
  const tabs = [
    ['corrigé', 'Corrigé'],
    ...(hasPassage ? [['passage', 'Passage']] : []),
    ['edition', '✏️ Édition'],
  ];
  return `<div class="oral-tabs oral-main-tabs">${tabs.map(([k, label]) =>
    `<button type="button" class="chip${activeTab === k ? ' on' : ''}${k === 'edition' ? ' oral-tab-edit' : ''}" onclick="openOralText('${id}','${k}')">${label}</button>`,
  ).join('')}</div>`;
}

function openOralEdit(id) {
  ORAL_EDIT_STATE.tab = ORAL_EDIT_STATE.tab || 'infos';
  if (typeof openOralText === 'function') openOralText(id, 'edition');
}

function oralEditClose() {
  ORAL_EDIT_STATE.activeId = null;
  ORAL_EDIT_STATE.tab = 'infos';
  if (typeof renderOralList === 'function') renderOralList();
}

function oralEditReset(id) {
  if (!confirm('Restaurer le texte d\'origine pour cette LL ?')) return;
  if (typeof oralResetTextOverride === 'function') oralResetTextOverride(id);
  if (typeof toast === 'function') toast('Texte restauré');
  if (typeof openOralText === 'function') openOralText(id, 'edition');
}

function oralEditRefreshAfterSave(id) {
  const t = typeof getOralTextById === 'function' ? getOralTextById(id) : null;
  const preview = el('oral-edit-passage-preview');
  if (preview && t && typeof oralRenderPassageBlock === 'function') {
    preview.innerHTML = oralRenderPassageBlock(t, false, 'full');
  }
  const head = document.querySelector('.oral-edit-head h2');
  if (head && t) head.innerHTML = `${oralEditEsc(t.auteur)} — <em>${oralEditEsc(t.titre)}</em>`;
  ORAL_EDIT_STATE.dirty = false;
  const status = el('oral-edit-status');
  if (status) {
    status.textContent = 'Enregistré · ' + new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }
}

function oralEditFromPassages(id) {
  if (typeof navTab === 'function') navTab('proc', 'p-oral');
  setTimeout(() => {
    ORAL_EDIT_STATE.tab = 'passage';
    if (typeof openOralText === 'function') openOralText(id, 'edition');
  }, 120);
}

if (typeof window !== 'undefined') {
  window.oralRenderEditionDetail = oralRenderEditionDetail;
  window.oralRenderMainTabs = oralRenderMainTabs;
  window.openOralEdit = openOralEdit;
  window.oralEditClose = oralEditClose;
  window.oralEditSave = oralEditSave;
  window.oralEditSetTab = oralEditSetTab;
  window.oralEditScheduleSave = oralEditScheduleSave;
  window.oralEditReset = oralEditReset;
  window.oralEditRefreshAfterSave = oralEditRefreshAfterSave;
  window.oralEditFromPassages = oralEditFromPassages;
}
