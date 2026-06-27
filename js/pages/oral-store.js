/* oral-store.js — Persistance des modifications des 16 LL (localStorage + export) */

const ORAL_OVERRIDES_KEY = 'bac_oral_overrides';
let _oralMergedCache = null;

const ORAL_TABLE_HDR = /^(Arguments|Connecteurs logiques|Procédés employés|Procédés|Interprétation|Texte)$/i;
const ORAL_SKIP_LINE = /^(→|\(\d+\)|\d+ère sous-partie|\d+ème sous-partie|\d+\)\s)/i;

function oralInvalidateCache() {
  _oralMergedCache = null;
}

function oralLoadOverrides() {
  try { return JSON.parse(localStorage.getItem(ORAL_OVERRIDES_KEY) || '{}'); }
  catch (e) { return {}; }
}

function oralSaveOverrides(all) {
  try {
    localStorage.setItem(ORAL_OVERRIDES_KEY, JSON.stringify(all));
    oralInvalidateCache();
    return true;
  } catch (e) { return false; }
}

function oralIsModified(id) {
  return !!oralLoadOverrides()[id];
}

function oralModifiedCount() {
  return Object.keys(oralLoadOverrides()).length;
}

function oralResetTextOverride(id) {
  const all = oralLoadOverrides();
  delete all[id];
  oralSaveOverrides(all);
}

function oralResetAllOverrides() {
  if (!confirm('Réinitialiser toutes tes modifications sur les 16 lectures linéaires ?\n\nLes textes d\'origine seront restaurés (stats oral conservées).')) return;
  oralSaveOverrides({});
  if (typeof toast === 'function') toast('Textes LL restaurés');
  oralRefreshAllViews();
}

function oralExtractKeywords(text) {
  const stop = new Set(['dans', 'pour', 'avec', 'cette', 'celle', 'comme', 'entre', 'quoi', 'plus', 'moins', 'leurs', 'elle', 'elles', 'nous', 'vous', 'dont', 'mais', 'tout', 'tous', 'etre', 'avoir', 'auteur', 'lecteur', 'texte', 'effet']);
  const words = (text || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .match(/[a-z]{5,}/g) || [];
  return [...new Set(words.filter(w => !stop.has(w)))].slice(0, 8);
}

function oralMakeAtt(citation, procede, interpretation, mouvement, connecteur) {
  return {
    citation: String(citation || '').slice(0, 220),
    procede: String(procede || '').slice(0, 120),
    interpretation: String(interpretation || '').slice(0, 600),
    mouvement: mouvement || '',
    connecteur: connecteur || '',
    keywords: oralExtractKeywords(`${interpretation} ${procede} ${connecteur}`),
  };
}

function oralIsProcedeLine(s) {
  if (!s || s.length > 110) return false;
  if (/^(Il |La |Le |Les |Ce |Cette |Des |Un |Une |En |Pour |Après |Dès |Dans |Nous |Fontenelle|L'auteur|Voltaire|Musset|Rimbaud|Hugo|Perdican|Des Grieux|Micromégas|Quasimodo|Cyrano|Roxane|Camille|Manon|La marquise|Le Saturnien|Le narrateur|Poème|Sonnet|Mouvement|1ère|2ème|3ème)/i.test(s)) return false;
  if (/[.!?]$/.test(s) && s.length > 45) return false;
  return /[a-zàâçéèêëîïôùûü]/i.test(s);
}

function oralIsInterpLine(s) {
  return s && s.length >= 28 && !ORAL_TABLE_HDR.test(s);
}

function oralIsCiteLine(s) {
  if (!s) return false;
  if (/^«/.test(s)) return true;
  if (s.includes('/') && s.length < 140) return true;
  if (s.length < 95 && !/^(Il |La |Le |Ce |Cette |Fontenelle|Voltaire|Musset|Rimbaud|Perdican|Des Grieux|Quasimodo|En |Pour |Après |Dès )/.test(s)) return true;
  return false;
}

function oralGuessProcedeFromProse(ln) {
  const patterns = [
    [/comparatif/i, 'Comparatif'], [/hyperbol/i, 'Hyperbole'], [/métaphor/i, 'Métaphore'],
    [/anaphor/i, 'Anaphore'], [/antithèse/i, 'Antithèse'], [/gradation/i, 'Gradation'],
    [/interjection/i, 'Interjection'], [/champ lexical/i, 'Champ lexical'],
    [/registre pathétique/i, 'Registre pathétique'], [/registre tragique/i, 'Registre tragique'],
    [/registre lyrique/i, 'Registre lyrique'], [/registre comique/i, 'Registre comique'],
    [/registre ironique/i, 'Registre ironique'], [/didascalie/i, 'Didascalie'],
    [/stichomythie/i, 'Stichomythie'], [/aparté/i, 'Aparté'], [/prolepse/i, 'Prolepse'],
    [/euphémisme/i, 'Euphémisme'], [/focalisation interne/i, 'Focalisation interne'],
    [/discours direct/i, 'Discours direct'], [/question rhétorique/i, 'Question rhétorique'],
    [/prétérition/i, 'Prétérition'], [/oxymore/i, 'Oxymore'], [/synesthésie/i, 'Synesthésie'],
    [/rejet/i, 'Rejet'], [/enjambement/i, 'Enjambement'], [/anaphore/i, 'Anaphore'],
    [/personnification/i, 'Personnification'], [/énumération/i, 'Énumération'],
    [/litote/i, 'Litote'], [/ironie/i, 'Ironie'], [/alexandrin/i, 'Alexandrin'],
    [/connecteur/i, 'Connecteur logique'], [/subjonctif/i, 'Subjonctif'],
    [/impératif/i, 'Impératif'], [/futur/i, 'Futur'], [/négation/i, 'Négation'],
  ];
  for (const [re, name] of patterns) {
    if (re.test(ln)) return name;
  }
  return null;
}

function oralDedupeAttendus(list) {
  const seen = new Set();
  const out = [];
  for (const a of list) {
    const key = ((a.procede || '') + '|' + (a.citation || '').slice(0, 40)).toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(a);
  }
  return out;
}

function oralExtractAttendusFromSection(sec) {
  const mouvement = sec.title || 'Analyse';
  const attendus = [];
  const raw = (sec.lines || []).map(l => String(l).replace(/&gt;/g, '>').replace(/&amp;/g, '&').trim());

  for (const ln of raw) {
    const arrow = ln.match(/^(.+?)\s*→\s*(.+)$/);
    if (arrow && !ORAL_TABLE_HDR.test(arrow[1])) {
      const left = arrow[1].trim();
      const citeM = left.match(/«[^»]+»/);
      attendus.push(oralMakeAtt(
        citeM ? citeM[0] : left.slice(0, 120),
        arrow[2].split(/[.;]/)[0].trim().slice(0, 80),
        ln,
        mouvement,
      ));
    }
  }

  const lines = raw.filter(l => l && !ORAL_TABLE_HDR.test(l) && !ORAL_SKIP_LINE.test(l) && !/^→/.test(l));
  for (let i = 0; i < lines.length - 2; i++) {
    const cite = lines[i];
    const proc = lines[i + 1];
    const interp = lines[i + 2];
    if (oralIsCiteLine(cite) && oralIsProcedeLine(proc) && oralIsInterpLine(interp)) {
      attendus.push(oralMakeAtt(cite, proc, interp, mouvement));
      i += 2;
    }
  }

  for (let i = 0; i < lines.length - 1; i++) {
    const procOnly = lines[i];
    const interpOnly = lines[i + 1];
    if (oralIsProcedeLine(procOnly) && oralIsInterpLine(interpOnly) && interpOnly.length > 40) {
      const cites = procOnly.match(/«[^»]+»/g) || interpOnly.match(/«[^»]+»/g) || [];
      attendus.push(oralMakeAtt(cites[0] || procOnly.slice(0, 80), procOnly, interpOnly, mouvement));
      i += 1;
    }
  }

  for (const ln of raw) {
    if (ORAL_TABLE_HDR.test(ln) || ORAL_SKIP_LINE.test(ln) || ln.startsWith('→') || ln.length < 45) continue;
    const cites = ln.match(/«[^»]{2,}»/g) || [];
    const proc = oralGuessProcedeFromProse(ln);
    if (!proc) continue;
    if (cites.length >= 2) cites.forEach(c => attendus.push(oralMakeAtt(c, proc, ln, mouvement)));
    else if (cites.length === 1 || ln.length >= 70) attendus.push(oralMakeAtt(cites[0] || ln.slice(0, 100), proc, ln, mouvement));
  }

  return attendus;
}

function oralExtractAttendus(sections) {
  const attendus = [];
  for (const sec of sections || []) attendus.push(...oralExtractAttendusFromSection(sec));
  return oralDedupeAttendus(attendus).slice(0, 32);
}

function oralGroupAttendusByMouvement(attendus) {
  const map = new Map();
  (attendus || []).forEach(a => {
    const k = a.mouvement || 'Analyse';
    if (!map.has(k)) map.set(k, []);
    map.get(k).push(a);
  });
  return [...map.entries()].map(([title, items]) => ({ title, items }));
}

function oralPassageToEditable(t) {
  const p = t?.passage;
  if (p?.rows?.length) {
    return p.rows.map(r => {
      if (r.type === 'speaker') return `[${r.text}]`;
      if (r.type === 'title') return `# ${r.text}`;
      return `${r.n}. ${r.text}`;
    }).join('\n');
  }
  if (p?.lines?.length) return p.lines.map(l => `${l.n}. ${l.text}`).join('\n');
  return t?.texte || '';
}

function oralParsePassageEditable(raw) {
  const rows = [];
  const lines = String(raw || '').split(/\r?\n/);
  let autoN = 0;
  for (const line of lines) {
    const t = line.trim();
    if (!t) continue;
    if (/^\[.+\]$/.test(t)) {
      rows.push({ type: 'speaker', text: t.slice(1, -1).trim() });
    } else if (/^#\s+(.+)/.test(t)) {
      rows.push({ type: 'title', text: t.replace(/^#\s+/, '').trim() });
    } else {
      const lm = t.match(/^(\d+)\.\s*(.+)$/);
      if (lm) {
        autoN = parseInt(lm[1], 10);
        rows.push({ type: 'line', n: autoN, text: lm[2].trim() });
      } else {
        autoN += 1;
        rows.push({ type: 'line', n: autoN, text: t });
      }
    }
  }
  const passageLines = rows.filter(r => r.type === 'line');
  const plainParts = [];
  rows.forEach(r => {
    if (r.type === 'title') plainParts.push(r.text.toUpperCase());
    else if (r.type === 'speaker') plainParts.push(r.text);
    else if (r.type === 'line') plainParts.push(r.text);
  });
  const plain = plainParts.join('\n');
  return {
    passage: {
      lines: passageLines.map(r => ({ n: r.n, text: r.text })),
      plain,
      rows,
    },
    texte: plain,
    lineCount: passageLines.length,
  };
}

function oralSectionsToEditable(sections) {
  return (sections || []).map(sec =>
    `## ${sec.title || 'Analyse'}\n${(sec.lines || []).join('\n')}`,
  ).join('\n\n');
}

function oralParseSectionsEditable(raw) {
  const sections = [];
  const chunks = String(raw || '').split(/\n(?=##\s+)/);
  for (const chunk of chunks) {
    const trimmed = chunk.trim();
    if (!trimmed) continue;
    const m = trimmed.match(/^##\s+(.+?)(?:\n([\s\S]*))?$/);
    if (m) {
      sections.push({
        title: m[1].trim(),
        lines: (m[2] || '').split(/\r?\n/).filter(l => l.trim()),
      });
    } else if (!sections.length) {
      sections.push({ title: 'Analyse', lines: trimmed.split(/\r?\n/).filter(l => l.trim()) });
    } else {
      sections[sections.length - 1].lines.push(...trimmed.split(/\r?\n/).filter(l => l.trim()));
    }
  }
  return sections.length ? sections : [{ title: 'Analyse', lines: [] }];
}

function oralPlanToEditable(plan) {
  return (plan || []).join('\n');
}

function oralParsePlanEditable(raw) {
  return String(raw || '').split(/\r?\n/).map(l => l.trim()).filter(Boolean);
}

function oralAttendusToEditable(attendus) {
  return (attendus || []).map(a =>
    [a.citation, a.procede, a.interpretation, a.mouvement || ''].join('\t'),
  ).join('\n');
}

function oralParseAttendusEditable(raw) {
  const out = [];
  for (const line of String(raw || '').split(/\r?\n/)) {
    const t = line.trim();
    if (!t) continue;
    const parts = t.split('\t');
    if (parts.length >= 3) {
      out.push(oralMakeAtt(parts[0], parts[1], parts[2], parts[3] || ''));
    }
  }
  return oralDedupeAttendus(out).slice(0, 32);
}

function oralRecomputeDerived(t, ov) {
  const out = { ...t };
  if (ov?.passageRaw != null) Object.assign(out, oralParsePassageEditable(ov.passageRaw));
  if (ov?.sections) out.sections = ov.sections;
  if (ov?.plan) out.plan = ov.plan;

  if (ov?.attendusManual && ov.attendus) {
    out.attendus = ov.attendus;
  } else if (out.sections?.length) {
    out.attendus = oralExtractAttendus(out.sections);
  }

  out.attendusByMouvement = oralGroupAttendusByMouvement(out.attendus || []);
  out.attenduCount = (out.attendus || []).length;
  out.lineCount = out.passage?.lines?.length || 0;
  out._modified = true;
  return out;
}

function oralApplyOverride(base, ov) {
  if (!ov) return JSON.parse(JSON.stringify(base));
  const t = JSON.parse(JSON.stringify(base));
  const scalarFields = ['auteur', 'oeuvre', 'titre', 'introduction', 'problematique', 'conclusion', 'ouverture'];
  scalarFields.forEach(f => { if (ov[f] !== undefined) t[f] = ov[f]; });
  if (ov.plan !== undefined) t.plan = ov.plan;
  if (ov.sections !== undefined) t.sections = ov.sections;
  if (ov.passageRaw !== undefined) Object.assign(t, oralParsePassageEditable(ov.passageRaw));
  else if (ov.passage !== undefined) {
    t.passage = ov.passage;
    t.texte = ov.texte ?? ov.passage?.plain ?? t.texte;
  }
  if (ov.attendusManual && ov.attendus) t.attendus = ov.attendus;
  else if (ov.sections) t.attendus = oralExtractAttendus(ov.sections);
  else if (ov.attendus) t.attendus = ov.attendus;

  t.attendusByMouvement = oralGroupAttendusByMouvement(t.attendus || []);
  t.attenduCount = (t.attendus || []).length;
  t.lineCount = t.passage?.lines?.length || 0;
  t._modified = true;
  t._updatedAt = ov.updatedAt || null;
  return t;
}

function oralGetBaseTextById(id) {
  if (typeof ORAL_TEXTS === 'undefined') return null;
  return ORAL_TEXTS.find(t => t.id === id) || null;
}

function oralGetAllTexts() {
  if (_oralMergedCache) return _oralMergedCache;
  if (typeof ORAL_TEXTS === 'undefined') return [];
  const ovs = oralLoadOverrides();
  _oralMergedCache = ORAL_TEXTS.map(t => oralApplyOverride(t, ovs[t.id]));
  return _oralMergedCache;
}

function getOralTextById(id) {
  return oralGetAllTexts().find(t => t.id === id) || null;
}

function getOralCatalog() {
  return oralGetAllTexts().map(t => ({
    id: t.id,
    num: t.num,
    auteur: t.auteur,
    oeuvre: t.oeuvre,
    titre: t.titre,
    problematique: t.problematique,
    attenduCount: (t.attendus || []).length,
    hasPassage: !!(t.texte && t.texte.length > 40),
    modified: !!t._modified,
    search: [t.auteur, t.oeuvre, t.titre, t.problematique].join(' ').toLowerCase(),
  }));
}

function oralBuildOverrideFromForm(id, form) {
  const prev = oralLoadOverrides()[id] || {};
  const cur = getOralTextById(id) || oralGetBaseTextById(id);
  if (!cur) return { ...prev, version: 1, updatedAt: Date.now() };

  const strField = (formVal, prevKey, curVal) => {
    if (formVal !== undefined) return String(formVal).trim();
    if (prev[prevKey] !== undefined) return prev[prevKey];
    return curVal ?? '';
  };

  const attendusManual = form.attendusManual !== undefined
    ? !!form.attendusManual
    : (prev.attendusManual ?? false);

  let sections;
  if (form.corrigeRaw !== undefined) sections = oralParseSectionsEditable(form.corrigeRaw);
  else if (prev.sections) sections = prev.sections;
  else sections = cur.sections;

  let plan;
  if (form.planRaw !== undefined) plan = oralParsePlanEditable(form.planRaw);
  else if (prev.plan) plan = prev.plan;
  else plan = cur.plan;

  let passageRaw;
  if (form.passageRaw !== undefined) passageRaw = form.passageRaw;
  else if (prev.passageRaw !== undefined) passageRaw = prev.passageRaw;
  else passageRaw = oralPassageToEditable(cur);

  const payload = {
    version: 1,
    updatedAt: Date.now(),
    auteur: strField(form.auteur, 'auteur', cur.auteur),
    oeuvre: strField(form.oeuvre, 'oeuvre', cur.oeuvre),
    titre: strField(form.titre, 'titre', cur.titre),
    introduction: strField(form.introduction, 'introduction', cur.introduction),
    problematique: strField(form.problematique, 'problematique', cur.problematique),
    plan,
    sections,
    conclusion: strField(form.conclusion, 'conclusion', cur.conclusion),
    ouverture: strField(form.ouverture, 'ouverture', cur.ouverture),
    passageRaw,
    attendusManual,
  };

  if (attendusManual) {
    if (form.attendusRaw !== undefined) payload.attendus = oralParseAttendusEditable(form.attendusRaw);
    else if (prev.attendus) payload.attendus = prev.attendus;
    else payload.attendus = cur.attendus;
  }

  return payload;
}

function oralSaveTextFromForm(id, form) {
  const all = oralLoadOverrides();
  all[id] = oralBuildOverrideFromForm(id, form);
  const ok = oralSaveOverrides(all);
  if (ok && typeof toast === 'function' && !(typeof ORAL_EDIT_STATE !== 'undefined' && ORAL_EDIT_STATE.activeId === id)) {
    toast('Texte LL enregistré · conservé localement');
  }
  if (typeof ORAL_EDIT_STATE !== 'undefined' && ORAL_EDIT_STATE.activeId === id) {
    if (typeof oralEditRefreshAfterSave === 'function') oralEditRefreshAfterSave(id);
  } else {
    oralRefreshAllViews();
  }
  return ok;
}

function oralExportOverridesFile() {
  const data = {
    version: 1,
    type: 'bac_oral_overrides',
    exported: new Date().toISOString(),
    overrides: oralLoadOverrides(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `bac-oral-textes-${new Date().toLocaleDateString('fr-FR').replace(/\//g, '-')}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function oralImportOverridesFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      const ovs = data.overrides || data;
      if (!ovs || typeof ovs !== 'object') { alert('❌ Fichier invalide.'); return; }
      const merged = { ...oralLoadOverrides(), ...ovs };
      oralSaveOverrides(merged);
      alert(`✅ ${Object.keys(ovs).length} modification(s) importée(s).`);
      oralRefreshAllViews();
    } catch (e) { alert('❌ Fichier illisible.'); }
  };
  reader.readAsText(file);
}

function oralRefreshAllViews() {
  if (typeof renderOralList === 'function') renderOralList();
  if (typeof renderOralLlTextes === 'function') renderOralLlTextes();
  if (typeof ORAL_EXO_STATE !== 'undefined' && ORAL_EXO_STATE.activeId && typeof oralExoRenderWork === 'function') {
    oralExoRenderWork();
  }
  if (typeof scheduleDashboardUpdate === 'function') scheduleDashboardUpdate();
}

if (typeof window !== 'undefined') {
  window.oralLoadOverrides = oralLoadOverrides;
  window.oralSaveOverrides = oralSaveOverrides;
  window.oralIsModified = oralIsModified;
  window.oralModifiedCount = oralModifiedCount;
  window.oralResetTextOverride = oralResetTextOverride;
  window.oralResetAllOverrides = oralResetAllOverrides;
  window.oralGetAllTexts = oralGetAllTexts;
  window.getOralTextById = getOralTextById;
  window.getOralCatalog = getOralCatalog;
  window.oralPassageToEditable = oralPassageToEditable;
  window.oralSectionsToEditable = oralSectionsToEditable;
  window.oralPlanToEditable = oralPlanToEditable;
  window.oralAttendusToEditable = oralAttendusToEditable;
  window.oralBuildOverrideFromForm = oralBuildOverrideFromForm;
  window.oralSaveTextFromForm = oralSaveTextFromForm;
  window.oralExportOverridesFile = oralExportOverridesFile;
  window.oralImportOverridesFile = oralImportOverridesFile;
  window.oralRefreshAllViews = oralRefreshAllViews;
  window.oralGetBaseTextById = oralGetBaseTextById;
  window.oralExtractAttendus = oralExtractAttendus;
}
