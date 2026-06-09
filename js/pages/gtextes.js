/* gtextes.js — Grands textes : analyse + personnalisation */
const GTEXT_STATE = {
  diff: 0, genre: '', search: '', sort: 'default', priorityOnly: false,
  activeId: null, entries: [], phase: 'list', showCustomForm: false,
};

function gtextGetThreshold() {
  return (getSetting('gtextInterpThreshold') ?? 28) / 100;
}

function gtextInterpThresholdEffective(procOk) {
  const base = gtextGetThreshold();
  return procOk ? Math.min(base, 0.28) : base;
}

const GTEXT_IDEA_STOP = new Set([
  'dans', 'avec', 'pour', 'plus', 'cette', 'comme', 'etre', 'tous', 'tout', 'une', 'des', 'les', 'par',
  'que', 'est', 'son', 'aux', 'sur', 'sans', 'sont', 'peut', 'elle', 'leur', 'meme', 'aussi', 'texte',
  'effet', 'effets', 'lecteur', 'auteur', 'passage', 'celui', 'celle', 'entre', 'vers', 'mot',
]);

function gtextKwMatch(u, kw) {
  const nk = gtextNorm(kw);
  if (!nk || nk.length < 3) return false;
  if (u.includes(nk)) return true;
  if (nk.length >= 5 && u.includes(nk.slice(0, 5))) return true;
  const parts = nk.split(' ').filter(p => p.length >= 4);
  if (parts.length >= 2 && parts.every(p => u.includes(p))) return true;
  return false;
}

function gtextExtractIdeas(text) {
  return gtextNorm(text).split(' ').filter(w => w.length >= 5 && !GTEXT_IDEA_STOP.has(w));
}

function gtextCountKwHits(u, expected) {
  const kws = expected.keywords || [];
  if (!kws.length) return 0;
  return kws.filter(kw => gtextKwMatch(u, kw)).length;
}

function gtextScoreInterp(user, expected) {
  const u = gtextNorm(user);
  if (u.length < gtextGetMinChars()) return 0;
  const kws = expected.keywords || [];
  if (!kws.length) return u.length >= 25 ? 0.45 : 0;

  let hit = 0;
  kws.forEach(kw => { if (gtextKwMatch(u, kw)) hit++; });
  let score = hit / kws.length;

  const ideas = gtextExtractIdeas(expected.interpretation || '');
  if (ideas.length) {
    let ideaHit = 0;
    ideas.slice(0, 8).forEach(w => {
      const stem = w.slice(0, Math.min(w.length, 6));
      if (stem.length >= 4 && u.includes(stem)) ideaHit++;
    });
    score = Math.max(score, ideaHit / Math.min(ideas.length, 6));
  }

  if (expected.citation) {
    const cite = gtextNorm(expected.citation).split(' ').filter(w => w.length >= 5);
    if (cite.length) {
      const citeHit = cite.filter(w => u.includes(w.slice(0, 5))).length;
      if (citeHit >= 1) score = Math.max(score, Math.min(0.35 + citeHit * 0.08, 0.55));
    }
  }

  return score;
}

/** Bon procédé + idée générale (mots-clés ou sens du corrigé) → validé. */
function gtextInterpOk(user, expected, procOk) {
  const u = gtextNorm(user);
  const score = gtextScoreInterp(user, expected);
  const threshold = gtextInterpThresholdEffective(procOk);
  if (score >= threshold) return true;
  if (!procOk) return false;

  const hits = gtextCountKwHits(u, expected);
  const minLen = gtextGetMinChars();

  if (hits >= 2) return true;
  if (hits >= 1 && u.length >= minLen) return true;
  if (score >= 0.18 && u.length >= minLen + 5) return true;

  const ideas = gtextExtractIdeas(expected.interpretation || '');
  if (ideas.length >= 2) {
    const ideaHits = ideas.slice(0, 6).filter(w => u.includes(w.slice(0, Math.min(w.length, 6)))).length;
    if (ideaHits >= 1 && u.length >= minLen) return true;
  }

  const procMeta = gtextLookupProc(expected.procede);
  if (procMeta?.effet) {
    const effetIdeas = gtextExtractIdeas(procMeta.effet);
    const effetHit = effetIdeas.filter(w => u.includes(w.slice(0, Math.min(w.length, 5)))).length;
    if (effetHit >= 1 && gtextCountEffectWords(u) >= 1 && u.length >= minLen) return true;
  }

  return false;
}

function gtextGetMinChars() {
  return getSetting('gtextMinInterpChars') ?? 15;
}

function gtextNorm(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ' ')
    .replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function gtextEsc(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;')
    .replace(/`/g, '&#96;');
}

function gtextEscAttr(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function gtextStartIdFromAction(action) {
  if (!action) return '';
  const m = String(action).match(/startGtext\(\s*(.+)\s*\)/);
  if (!m) return '';
  try { return JSON.parse(m[1]); } catch (e) {
    return m[1].replace(/^['"]|['"]$/g, '');
  }
}

let _gtextClickBound = false;

/** Clics sur cartes / boutons texte — sans onclick inline (fiable partout). */
function initGtextListHandlers() {
  if (_gtextClickBound) return;
  _gtextClickBound = true;

  document.addEventListener('click', e => {
    const del = e.target.closest('[data-gtext-del]');
    if (del) {
      e.preventDefault();
      e.stopPropagation();
      gtextDeleteCustom(del.getAttribute('data-gtext-del'));
      return;
    }
    const startBtn = e.target.closest('[data-gtext-start]');
    if (startBtn) {
      e.preventDefault();
      const id = startBtn.getAttribute('data-gtext-start');
      if (id) startGtext(id);
      return;
    }
    const card = e.target.closest('[data-gtext-id]');
    if (!card || e.target.closest('button, a, input, textarea, select, label')) return;
    const id = card.getAttribute('data-gtext-id');
    if (id) startGtext(id);
  });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('[data-gtext-id]');
    if (!card) return;
    e.preventDefault();
    const id = card.getAttribute('data-gtext-id');
    if (id) startGtext(id);
  });
}

function gtextProcKey(s) {
  return gtextNorm(s).replace(/^(registre|figure|procede|niveau)\s+/g, '').trim();
}

function gtextProcedeScore(userProc, expectedProc) {
  const u = gtextProcKey(userProc);
  const e = gtextProcKey(expectedProc);
  if (!u || !e) return 0;
  if (u === e) return 1;
  if (u.includes(e) || e.includes(u)) return 0.92;
  const uW = u.split(' ').filter(w => w.length > 3);
  const eW = e.split(' ').filter(w => w.length > 3);
  if (uW.length && eW.length && uW[0] === eW[0]) return 0.78;
  if (typeof PROC_DATA !== 'undefined') {
    const matchProc = name => gtextProcKey(name);
    const uProc = PROC_DATA.find(p => matchProc(p.name) === u || matchProc(p.name).includes(u));
    const eProc = PROC_DATA.find(p => matchProc(p.name) === e || matchProc(p.name).includes(e));
    if (uProc && eProc && uProc.name === eProc.name) return 1;
    if (uProc && eProc && uProc.sub === eProc.sub) return 0.55;
  }
  return 0;
}

function gtextMatchAuteur(t) {
  if (typeof AUTEURS_DATA === 'undefined' || !t?.auteur) return null;
  const a = gtextNorm(t.auteur);
  return AUTEURS_DATA.find(x => {
    const n = gtextNorm(x.nom);
    const last = n.split(' ').pop();
    return n.includes(a) || a.includes(last) || last === a;
  }) || null;
}

const GTEXT_OEUVRE_STOP = new Set([
  'le', 'la', 'les', 'de', 'du', 'des', 'l', 'd', 'un', 'une', 'et', 'ou', 'en', 'au', 'aux', 'a',
]);

function gtextNormOeuvreStr(s) {
  return gtextNorm(s).replace(/\b\d{4}\b/g, '').replace(/\([^)]*\)/g, '').trim();
}

function gtextSignificantWords(s) {
  return gtextNormOeuvreStr(s).split(' ').filter(w => w.length >= 4 && !GTEXT_OEUVRE_STOP.has(w));
}

function gtextScoreOeuvreKey(oeuvre, titre, key) {
  if (!key || key.length < 3) return 0;
  const k = key.trim();
  let score = 0;

  if (oeuvre === k) score = 200;
  else if (oeuvre.startsWith(k) && k.length >= 5) score = 150 + k.length;
  else if (k.startsWith(oeuvre) && oeuvre.length >= 5) score = 140 + oeuvre.length;
  else if (oeuvre.includes(k) && k.length >= 5) score = 100 + k.length;
  else if (k.includes(oeuvre) && oeuvre.length >= 6) score = 90 + oeuvre.length;

  if (titre === k) score = Math.max(score, 75);
  else if (titre.includes(k) && k.length >= 6) score = Math.max(score, 70 + k.length);
  else if (k.includes(titre) && titre.length >= 6) score = Math.max(score, 65 + titre.length);

  const keyWords = gtextSignificantWords(k);
  if (keyWords.length) {
    const oeuvreMatched = keyWords.filter(w => oeuvre.includes(w));
    if (oeuvreMatched.length === keyWords.length) score = Math.max(score, 85 + keyWords.length * 8);
    else if (oeuvreMatched.length >= 2) score = Math.max(score, 55 + oeuvreMatched.length * 10);
    else if (oeuvreMatched.length === 1 && keyWords[0].length >= 6) score = Math.max(score, 40 + keyWords[0].length);

    const titreMatched = keyWords.filter(w => titre.includes(w));
    if (keyWords.length >= 2 && titreMatched.length === keyWords.length) score = Math.max(score, 72 + titreMatched.length * 6);
    else if (titreMatched.length >= 2) score = Math.max(score, 50 + titreMatched.length * 8);
  }

  return score;
}

function gtextLookupOeuvreInfo(t) {
  if (t?.contexteOeuvre) return t.contexteOeuvre;
  if (typeof GTEXT_OEUVRE_BY_ID !== 'undefined' && t?.id && GTEXT_OEUVRE_BY_ID[t.id]) {
    return GTEXT_OEUVRE_BY_ID[t.id];
  }
  if (typeof GTEXT_OEUVRE_INFO === 'undefined') return null;

  const oeuvre = gtextNormOeuvreStr(t.oeuvre || '');
  const titre = gtextNormOeuvreStr(t.titre || '');

  let bestText = null;
  let bestScore = 0;
  for (const [key, info] of Object.entries(GTEXT_OEUVRE_INFO)) {
    const score = gtextScoreOeuvreKey(oeuvre, titre, key);
    if (score > bestScore) {
      bestScore = score;
      bestText = info;
    }
  }
  return bestScore >= 35 ? bestText : null;
}

function gtextBuildOeuvreContext(t) {
  const aut = gtextMatchAuteur(t);
  const oeuvreInfo = gtextLookupOeuvreInfo(t);
  const rows = [];
  rows.push({ label: 'Auteur', value: aut?.dates ? `${t.auteur} (${aut.dates})` : t.auteur });
  rows.push({ label: 'Œuvre', value: t.oeuvre });
  rows.push({ label: 'Genre', value: t.genre });
  if (aut?.mouvement) rows.push({ label: 'Courant', value: aut.mouvement });
  if (oeuvreInfo) rows.push({ label: 'L\'œuvre en bref', value: oeuvreInfo });
  else if (aut?.oeuvres) rows.push({ label: 'Œuvres de l\'auteur', value: aut.oeuvres });
  if (aut?.note) rows.push({ label: 'Note', value: aut.note });
  rows.push({ label: 'Ce passage', value: t.contexte });
  return rows;
}

function gtextRenderOeuvreContext(t) {
  const rows = gtextBuildOeuvreContext(t);
  return `<div class="gtext-oeuvre-box">
    <div class="gtext-oeuvre-title">Contexte de l'œuvre</div>
    <dl class="gtext-oeuvre-dl">${rows.map(r =>
      `<div class="gtext-oeuvre-row"><dt>${gtextEsc(r.label)}</dt><dd>${gtextEsc(r.value)}</dd></div>`
    ).join('')}</dl>
  </div>`;
}

function gtextBestProcScore(procede, attendus) {
  if (!attendus?.length) return 0;
  return attendus.reduce((best, a) => Math.max(best, gtextProcedeScore(procede, a.procede)), 0);
}

function gtextLookupProc(procede) {
  if (typeof PROC_DATA === 'undefined' || !procede?.trim()) return null;
  let best = null;
  let bestScore = 0;
  PROC_DATA.forEach(p => {
    const score = gtextProcedeScore(procede, p.name);
    if (score > bestScore) { bestScore = score; best = p; }
  });
  return bestScore >= 0.78 ? best : null;
}

const GTEXT_EFFECT_WORDS = [
  'effet', 'lecteur', 'sens', 'registre', 'emotion', 'image', 'insiste', 'renforce', 'cree',
  'atmosphere', 'tension', 'contraste', 'intensite', 'melancolie', 'impact', 'souligne',
  'exprime', 'provoque', 'suscite', 'theme', 'idee', 'ton', 'rythme', 'musicalite',
  'dramatique', 'poetique', 'tragique', 'lyrique', 'ironie', 'emphase', 'insistance',
  'suggestion', 'identification', 'emotionnel', 'pathos', 'distance', 'valorise',
  'traduit', 'met en', 'illustre', 'accentue', 'revele', 'denonce', 'evoque', 'rapproche',
  'symbolise', 'humanise', 'dramatise', 'attenu', 'exagere', 'rapelle', 'associe',
];

const GTEXT_INTERP_STARTERS = [
  'L\'emploi de … traduit … et renforce …',
  'Ce procédé met en valeur … en créant l\'effet de …',
  'Grâce à …, l\'auteur souligne … et provoque … chez le lecteur',
  'On observe … : cela installe un registre … et …',
  'Les mots cités (…) montrent que … — effet sur le lecteur : …',
  'En reliant la citation à l\'effet, on peut dire que …',
  'L\'extrait … révèle … : le procédé sert à …',
];

function gtextCountEffectWords(u) {
  return GTEXT_EFFECT_WORDS.filter(w => u.includes(w)).length;
}

function gtextFindExpectedProc(procName, attendus) {
  if (!attendus?.length || !procName?.trim()) return null;
  let best = null;
  let bestScore = 0;
  attendus.forEach(a => {
    const s = gtextProcedeScore(procName, a.procede);
    if (s > bestScore) { bestScore = s; best = a; }
  });
  return bestScore >= 0.55 ? best : null;
}

function gtextInterpFeedbackMsg(user, expected, procOk) {
  if (!procOk || !expected) return 'Procédé correct — précise un effet (registre, émotion, impact sur le lecteur).';
  const u = gtextNorm(user);
  const minLen = gtextGetMinChars();
  const hits = gtextCountKwHits(u, expected);
  const effectHits = gtextCountEffectWords(u);
  const hints = [];

  if (u.length < minLen) hints.push(`allonge un peu (${u.length}/${minLen} car. min.)`);
  if (effectHits < 1) hints.push('utilise un verbe d\'effet : traduit, renforce, souligne, provoque…');
  if (!/registre|ton|atmosphere|emotion|lecteur|sens|theme|idee|impact/.test(u)) {
    hints.push('précise le registre, le ton ou l\'effet sur le lecteur');
  }
  if (hits < 1 && expected.keywords?.length) {
    const kws = expected.keywords.filter(k => k.length >= 4).slice(0, 3);
    if (kws.length) hints.push(`évoque : ${kws.join(', ')}`);
  }
  if (!/(citation|vers|mot|dans|extrait|texte)/.test(u) && expected.citation) {
    hints.push('relie ton analyse aux mots cités');
  }

  const procMeta = gtextLookupProc(expected.procede);
  if (procMeta?.effet && effectHits < 2) {
    hints.push(`pense à l\'effet type : ${procMeta.effet.split(/[.;]/)[0].slice(0, 70)}…`);
  }

  if (!hints.length) return 'Procédé correct — encore un détail sur l\'effet ou le sens global.';
  return 'Procédé correct — ' + hints.join(' · ') + '.';
}

function gtextLiveEntryScore(proc, cite, interp, attendus, texte) {
  if (!(proc || '').trim()) return null;
  const scored = gtextValidateUserEntries(
    [{ procede: proc, citation: cite || '', interpretation: interp || '' }],
    attendus,
    texte
  );
  return scored[0] || null;
}

function gtextRenderInterpCoach(procName, interpText, citation, attendus, texte) {
  const u = gtextNorm(interpText || '');
  const minLen = gtextGetMinChars();
  const procMeta = gtextLookupProc(procName);
  const expected = gtextFindExpectedProc(procName, attendus);
  const showKwHints = getSetting('gtextShowHints');

  const checks = [
    { ok: (procName || '').trim().length >= 2, label: 'Procédé nommé' },
    { ok: (citation || '').trim().length >= 4 || /citation|vers|dans|mot|extrait/.test(u), label: 'Citation ou renvoi au texte' },
    { ok: u.length >= minLen, label: `Interprétation développée (${u.length}/${minLen})` },
    { ok: gtextCountEffectWords(u) >= 1, label: 'Verbe / effet (traduit, renforce, provoque…)' },
    { ok: /registre|ton|atmosphere|emotion|lecteur|sens|theme|impact|idee/.test(u), label: 'Registre, sens ou lecteur' },
  ];

  const checkHtml = checks.map(c =>
    `<li class="${c.ok ? 'ok' : ''}">${c.ok ? '✓' : '○'} ${gtextEsc(c.label)}</li>`
  ).join('');

  const tips = [];
  if (procMeta?.effet) tips.push(`<strong>Effet habituel :</strong> ${gtextEsc(procMeta.effet)}`);
  if (expected && showKwHints && expected.keywords?.length) {
    const kws = expected.keywords.filter(k => k.length >= 4).slice(0, 4);
    if (kws.length) tips.push(`<strong>Pistes de sens :</strong> ${kws.map(k => `<code>${gtextEsc(k)}</code>`).join(' ')}`);
  }
  const starter = GTEXT_INTERP_STARTERS[Math.abs(gtextNorm(procName).length) % GTEXT_INTERP_STARTERS.length];

  let weakHint = '';
  if (typeof computeGtextExtendedStats === 'function') {
    const ext = computeGtextExtendedStats();
    if (ext?.weakAxis && ext.weakAxis.pct < 58) {
      weakHint = `<p class="gtext-coach-weak">Priorité globale : ${ext.weakAxis.icon} ${gtextEsc(ext.weakAxis.label)} (${ext.weakAxis.pct}% en moy.)</p>`;
    }
  }

  let liveIpci = '';
  if (texte) {
    const live = gtextLiveEntryScore(procName, citation, interpText, attendus, texte);
    if (live) {
      const w = GTEXT_GRADE_CFG.weights;
      liveIpci = `<div class="gtext-coach-live">
        <span>Analyse en cours</span>
        <span class="gtext-coach-live-pts">P ${live.procOk ? w.procede : 0} · C ${live.citeOk ? w.citation : 0} · I ${live.interpOk ? w.interpretation : 0} = ${Math.round(live.points * 100) / 100}/1</span>
        ${live.feedback ? `<span class="gtext-coach-live-fb">${gtextEsc(live.feedback)}</span>` : ''}
      </div>`;
    }
  }

  return `
    <div class="gtext-coach-title">Coach interprétation · IPCI</div>
    <p class="gtext-coach-ipci"><strong>I</strong> idée → <strong>P</strong>rocédé → <strong>C</strong>itation → <strong>I</strong>nterprétation (effet + sens)</p>
    ${weakHint}
    ${liveIpci}
    <ul class="gtext-coach-check">${checkHtml}</ul>
    ${tips.length ? `<div class="gtext-coach-tips">${tips.join('<br>')}</div>` : ''}
    <p class="gtext-coach-formula"><strong>Formule :</strong> ${gtextEsc(starter)}</p>`;
}

function gtextBindInterpCoach(attendus) {
  const proc = el('gtext-proc');
  const interp = el('gtext-interp');
  const cite = el('gtext-cite');
  const coach = el('gtext-coach');
  if (!proc || !interp || !coach) return;

  const update = () => {
    const t = gtextGetById(GTEXT_STATE.activeId);
    coach.innerHTML = gtextRenderInterpCoach(proc.value, interp.value, cite?.value || '', attendus, t?.texte);
  };
  proc.addEventListener('input', update);
  interp.addEventListener('input', update);
  if (cite) cite.addEventListener('input', update);
  update();
}

/** Interprétation d'un procédé hors corrigé (pas de mots-clés attendus). */
function gtextInterpOkExtra(entry, procMeta) {
  const u = gtextNorm(entry.interpretation);
  const minLen = gtextGetMinChars();
  if (u.length < minLen) return false;

  const effectHits = gtextCountEffectWords(u);

  if (procMeta?.effet) {
    const effetWords = gtextExtractIdeas(procMeta.effet);
    const effetHits = effetWords.filter(w => u.includes(w.slice(0, Math.min(w.length, 6)))).length;
    if (effetHits >= 1 && effectHits >= 1) return true;
    if (effetHits >= 2) return true;
  }

  if (effectHits >= 2) return true;
  if (effectHits >= 1 && u.length >= minLen + 8) return true;

  const citeRaw = entry.citation || (u.includes('citation :') ? u.split('citation :')[1]?.split('.')[0] : '');
  if (citeRaw) {
    const cite = gtextNorm(citeRaw);
    if (cite.length >= 6 && u.includes(cite.slice(0, Math.min(cite.length, 10)))) return effectHits >= 1;
  }

  return u.length >= 28 && effectHits >= 1;
}

function gtextValidateExtra(entry) {
  const procMeta = gtextLookupProc(entry.procede);
  const procKey = gtextProcKey(entry.procede);
  const procOk = !!procMeta || procKey.length >= 4;
  const interpOk = gtextInterpOkExtra(entry, procMeta);
  let feedback = null;
  if (procOk && interpOk) {
    feedback = procMeta
      ? 'Bon repérage — procédé légitime même s\'il n\'est pas dans le corrigé.'
      : 'Analyse acceptée — vérifie le nom exact du procédé si tu peux.';
  } else if (procOk && !interpOk) {
    feedback = procMeta?.effet
      ? `Procédé repéré — explique l'effet (ex. : ${procMeta.effet.split(/[.;]/)[0].slice(0, 60)}…).`
      : 'Procédé repéré — précise l\'effet sur le sens, le registre ou le lecteur.';
  } else if (!procOk && interpOk) {
    feedback = 'Interprétation correcte — précise le nom du procédé (figure, registre…).';
  } else {
    feedback = 'Développe l\'interprétation (effet, registre, impact sur le lecteur).';
  }
  return {
    entry,
    extra: true,
    procede: entry.procede,
    procMeta,
    procKnown: !!procMeta,
    procOk,
    interpOk,
    valid: procOk && interpOk,
    score: interpOk ? (procMeta ? 0.72 : 0.58) : 0.18,
    feedback,
  };
}

function gtextEntryProcLabel(procede, attendus) {
  const score = gtextBestProcScore(procede, attendus);
  if (score >= 0.85) return { cls: 'ok', text: 'Dans le texte' };
  if (score >= 0.55) return { cls: 'warn', text: 'Proche — précise le nom' };
  if (gtextLookupProc(procede)) return { cls: 'bad', text: 'Pas dans ce texte' };
  return { cls: 'warn', text: 'À vérifier' };
}

function loadGtextCustom() {
  try { return JSON.parse(localStorage.getItem('bac_gtext_custom') || '[]'); }
  catch (e) { return []; }
}

function saveGtextCustom(list) {
  try { localStorage.setItem('bac_gtext_custom', JSON.stringify(list)); } catch (e) {}
}

function getAllGtexts() {
  const base = typeof GRANDS_TEXTES !== 'undefined' ? GRANDS_TEXTES.slice() : [];
  const custom = loadGtextCustom();
  return getSetting('gtextShowCustomFirst') ? custom.concat(base) : base.concat(custom);
}

function gtextSaveDraft(id, entries) {
  try { localStorage.setItem('bac_gtext_draft_' + id, JSON.stringify(entries)); } catch (e) {}
}

function gtextLoadDraft(id) {
  try { return JSON.parse(localStorage.getItem('bac_gtext_draft_' + id) || 'null') || []; }
  catch (e) { return []; }
}

function gtextClearDraft(id) {
  try { localStorage.removeItem('bac_gtext_draft_' + id); } catch (e) {}
}

function gtextGetInterpText(entry) {
  const i = (entry?.interpretation || '').trim();
  return i.replace(/^Citation\s*:\s*[^.]+\.\s*/i, '').trim() || i;
}

function gtextCitationOk(citation, texte, matchedAttendu) {
  const raw = (citation || '').trim();
  if (raw.length < 3) return false;
  const c = gtextNorm(raw);
  const textNorm = gtextNorm(texte || '');
  const words = c.split(' ').filter(w => w.length >= 3);
  if (!words.length) {
    return c.length >= 5 && textNorm.includes(c.slice(0, Math.min(c.length, 14)));
  }
  const inText = words.filter(w => textNorm.includes(w)).length;
  if (inText >= 1 && (words.length === 1 || inText >= 2)) return true;
  if (matchedAttendu?.citation) {
    const ref = gtextNorm(matchedAttendu.citation);
    const overlap = words.filter(w => ref.includes(w) || w.length >= 4 && ref.split(' ').some(r => r.includes(w.slice(0, 4)))).length;
    if (overlap >= 1) return true;
  }
  return inText >= 1;
}

function gtextMatchAttendu(procede, attendus, usedIndices) {
  let best = null;
  let bestScore = 0;
  let bestIdx = -1;
  attendus.forEach((a, ai) => {
    if (usedIndices?.has(ai)) return;
    const s = gtextProcedeScore(procede, a.procede);
    if (s > bestScore) { bestScore = s; best = a; bestIdx = ai; }
  });
  return { attendu: best, score: bestScore, index: bestIdx };
}

/** Valide les entrées utilisateur (max 5) · 0,5 procédé + 0,25 citation + 0,25 interprétation */
function gtextValidateUserEntries(entries, attendus, texte) {
  const maxN = GTEXT_GRADE_CFG.maxEntries;
  const usedAttendu = new Set();
  const scored = [];

  entries.slice(0, maxN).forEach((entry, ei) => {
    if (!entry.procede?.trim()) return;

    const { attendu: matched, score: procScore, index: ai } = gtextMatchAttendu(entry.procede, attendus, usedAttendu);
    const procOk = procScore >= 0.85;
    if (procOk && ai >= 0) usedAttendu.add(ai);

    const matchForInterp = procScore >= 0.55 ? matched : null;
    const interpText = gtextGetInterpText(entry);
    let interpOk = false;
    let interpScore = 0;
    if (matchForInterp) {
      interpScore = gtextScoreInterp(interpText, matchForInterp);
      interpOk = gtextInterpOk(interpText, matchForInterp, procOk || procScore >= 0.55);
    } else if (procOk) {
      const extra = gtextLookupProc(entry.procede);
      interpScore = extra ? 0.35 : 0;
      interpOk = gtextInterpOkExtra({ ...entry, interpretation: interpText }, extra);
    }

    const citeOk = gtextCitationOk(entry.citation, texte, matchForInterp || matched);

    let points = 0;
    if (procOk) points += GTEXT_GRADE_CFG.weights.procede;
    if (citeOk) points += GTEXT_GRADE_CFG.weights.citation;
    if (interpOk) {
      const w = GTEXT_GRADE_CFG.weights.interpretation;
      const thr = gtextInterpThresholdEffective(procOk || procScore >= 0.55);
      const mult = interpScore >= 0.85 ? 1
        : interpScore >= thr ? 0.55 + 0.45 * ((interpScore - thr) / Math.max(0.85 - thr, 0.15))
        : 0.55;
      points += Math.round(w * mult * 100) / 100;
    }

    const interpPtsEarned = interpOk
      ? Math.round((points - (procOk ? GTEXT_GRADE_CFG.weights.procede : 0) - (citeOk ? GTEXT_GRADE_CFG.weights.citation : 0)) * 100) / 100
      : 0;

    let feedback = null;
    if (!procOk) {
      feedback = matched && procScore >= 0.55
        ? `Procédé proche (« ${matched.procede} ») — précise le nom exact pour les 0,5 pt.`
        : 'Procédé non reconnu dans ce texte — vérifie le nom (figure, registre…).';
    } else {
      const missing = [];
      if (!citeOk) missing.push('citation (0,25 pt)');
      if (!interpOk) missing.push('interprétation (0,25 pt)');
      if (missing.length) feedback = `Procédé validé (0,5) — complète : ${missing.join(', ')}.`;
      else if (matched) feedback = gtextInterpFeedbackMsg(interpText, matched, true).replace(/^Procédé correct — /, 'Complet · ');
    }

    scored.push({
      entry,
      index: ei,
      attenduIdx: ai,
      matched,
      procOk,
      citeOk,
      interpOk,
      interpScore,
      procScore,
      points,
      interpPtsEarned,
      maxPoints: 1,
      valid: procOk && citeOk && interpOk && interpScore >= 0.72,
      feedback,
      procedeLabel: matched?.procede || entry.procede,
    });
  });

  return scored;
}

/** Barème : max 5 procédés · 0,5 + 0,25 + 0,25 = 1 pt chacun · cible = procédés du corrigé */
const GTEXT_GRADE_CFG = {
  maxEntries: 5,
  weights: { procede: 0.5, citation: 0.25, interpretation: 0.25 },
  /** Plafond /20 pour un repérage IPCI complet (sans plan, rédaction, etc.) */
  repMaxNote: 16,
};

/** Nombre de procédés attendus dans le corrigé (référence pour la note). */
function gtextGradeTarget(attendus) {
  const n = Array.isArray(attendus) && attendus.length ? attendus.length : GTEXT_GRADE_CFG.maxEntries;
  return Math.min(GTEXT_GRADE_CFG.maxEntries, n);
}

/** Retient la meilleure entrée par procédé du corrigé (évite de gonfler la note avec des doublons). */
function gtextGradeCountedEntries(scoredEntries) {
  const byAttendu = new Map();
  scoredEntries.forEach(e => {
    if (!e.procOk || e.attenduIdx == null || e.attenduIdx < 0) return;
    const cur = byAttendu.get(e.attenduIdx);
    if (!cur || e.points > cur.points) byAttendu.set(e.attenduIdx, e);
  });
  return [...byAttendu.values()].sort((a, b) => b.points - a.points);
}

function gtextEstimateGrade(scoredEntries, attendus) {
  const targetCount = gtextGradeTarget(attendus);
  const maxPts = targetCount;
  const counted = gtextGradeCountedEntries(scoredEntries);
  const totalPts = counted.reduce((s, e) => s + e.points, 0);

  let note = Math.round((totalPts / maxPts) * GTEXT_GRADE_CFG.repMaxNote * 10) / 10;

  const covered = counted.length;
  const fullValid = counted.filter(e => e.valid).length;
  const avgInterp = counted.length
    ? counted.reduce((s, e) => s + (e.interpScore || 0), 0) / counted.length
    : 0;
  const allCite = counted.length > 0 && counted.every(e => e.citeOk);

  if (covered >= targetCount) note += 1;
  if (fullValid >= targetCount) note += 1;
  if (avgInterp >= 0.78 && allCite) note += 2;

  note = Math.min(20, Math.round(note * 10) / 10);
  const scorePct = Math.round(note / 20 * 100);

  const procPts = counted.reduce((s, e) => s + (e.procOk ? GTEXT_GRADE_CFG.weights.procede : 0), 0);
  const citePts = counted.reduce((s, e) => s + (e.citeOk ? GTEXT_GRADE_CFG.weights.citation : 0), 0);
  const interpPts = counted.reduce((s, e) => s + (e.interpPtsEarned || 0), 0);
  const full = counted.filter(e => e.valid).length;
  const partial = counted.filter(e => e.points > 0 && !e.valid).length;

  const mention = typeof scoreToBacGrade === 'function'
    ? scoreToBacGrade(scorePct).mention
    : (note >= 16 ? 'Très Bien' : note >= 14 ? 'Bien' : note >= 12 ? 'Assez Bien' : note >= 10 ? 'Admis' : 'Non admis (estim.)');

  return {
    note,
    mention,
    scorePct,
    totalPts: Math.round(totalPts * 100) / 100,
    maxPts,
    targetCount,
    covered,
    procPts: Math.round(procPts * 100) / 100,
    citePts: Math.round(citePts * 100) / 100,
    interpPts: Math.round(interpPts * 100) / 100,
    entryCount: scoredEntries.length,
    countedCount: counted.length,
    full,
    partial,
    avgInterp: Math.round(avgInterp * 100),
  };
}

function gtextResultMessage(est) {
  if (est.note >= 18) return 'Excellent — repérage IPCI complet et interprétations de qualité.';
  if (est.note >= 16) return 'Très bon repérage — pour viser 18–20, approfondis l\'effet et la précision des citations.';
  if (est.note >= 14) return 'Bon travail — vérifie les citations et les effets encore partiels.';
  if (est.note >= 12) return 'Bonne base — couvre tous les procédés du corrigé avec citation + interprétation.';
  if (est.note >= 10) return 'Des points gagnés — repère d\'autres procédés attendus dans le texte.';
  return 'Continue : nomme le procédé (0,5), cite (0,25), interprète l\'effet (0,25).';
}

function gtextFormatGradeBreakdown(est) {
  return `${est.totalPts}/${est.maxPts} pts · ${est.covered}/${est.targetCount} proc. corrigé → ${est.note}/20 · P ${est.procPts} · C ${est.citePts} · I ${est.interpPts}`;
}

function gtextScoreBreakdownHtml(r) {
  const w = GTEXT_GRADE_CFG.weights;
  const p = r.procOk ? w.procede : 0;
  const c = r.citeOk ? w.citation : 0;
  const i = r.interpPtsEarned ?? (r.interpOk ? w.interpretation : 0);
  return `<span class="gtext-pts">P ${p} · C ${c} · I ${i} = <strong>${Math.round(r.points * 100) / 100}</strong>/1</span>`;
}

function gtextLoadStats() {
  try { return JSON.parse(localStorage.getItem('bac_gtext_stats') || '{}'); }
  catch (e) { return {}; }
}

function gtextGradeClass(note) {
  if (note >= 14) return 'hi';
  if (note >= 10) return 'mid';
  return 'lo';
}

function gtextGetById(id) {
  return getAllGtexts().find(t => t.id === id) || null;
}

function gtextProcOptions() {
  if (typeof PROC_DATA === 'undefined') return '';
  return PROC_DATA.map(p =>
    `<option value="${gtextEsc(p.name)}">${gtextEsc(p.name)}</option>`
  ).join('');
}

function gtextRenderPassage(texte, titre) {
  if (!texte?.trim()) return '';
  return `<blockquote class="gtext-body" aria-label="Texte${titre ? ' : ' + gtextEsc(titre) : ''}">${gtextEsc(texte)}</blockquote>`;
}

/** Liste des procédés du corrigé — coche ceux déjà repérés. */
function gtextRenderAttendusPanel(t, scored) {
  const attendus = Array.isArray(t?.attendus) ? t.attendus : [];
  if (!attendus.length) {
    return `<div class="gtext-attendus-panel"><p class="gtext-hint">Aucun procédé référencé pour ce texte.</p></div>`;
  }
  const target = gtextGradeTarget(attendus);
  const foundIdx = new Set(
    (scored || []).filter(r => r.procOk && r.attenduIdx != null && r.attenduIdx >= 0).map(r => r.attenduIdx)
  );
  return `
    <div class="gtext-attendus-panel">
      <div class="gtext-attendus-title">Procédés du texte (${attendus.length}) · note calibrée sur ${target}</div>
      <p class="gtext-hint">Repère ceux que tu vois (max ${GTEXT_GRADE_CFG.maxEntries} saisis) — correction <strong>immédiate</strong> sous chaque analyse.</p>
      <ol class="gtext-attendus-list">
        ${attendus.map((a, idx) => `
          <li class="gtext-attendus-item${foundIdx.has(idx) ? ' gtext-attendus-found' : ''}">
            ${foundIdx.has(idx) ? '<span class="gtext-attendus-check">✓</span>' : ''}
            <strong>${gtextEsc(a.procede)}</strong>
            <cite>${gtextEsc(a.citation)}</cite>
          </li>`).join('')}
      </ol>
    </div>`;
}

function gtextRenderLiveScoreBar(est) {
  if (!est) return '';
  const gc = gtextGradeClass(est.note);
  return `
    <div class="gtext-live-bar ${gc}">
      <div class="gtext-live-main">${est.note}<span>/20</span></div>
      <div class="gtext-live-meta">
        <strong>${est.mention}</strong>
        <span>${gtextFormatGradeBreakdown(est)}</span>
      </div>
    </div>`;
}

/** Une analyse saisie avec correction IPCI immédiate (P/C/I + modèle). */
function gtextRenderWorkEntry(r, i) {
  const cls = r.valid ? 'ok' : r.points > 0 ? 'ng' : 'miss';
  const label = r.valid ? '✓ Complet' : r.procOk ? 'Partiel' : 'À revoir';
  const citeLine = r.entry.citation
    ? `<p class="gtext-entry-cite">« ${gtextEsc(r.entry.citation)} »</p>`
    : '';
  const matchedLine = r.matched && r.entry.procede !== r.matched.procede
    ? `<div class="gtext-recap-proc-wrong">Tu as écrit « ${gtextEsc(r.entry.procede)} » → corrigé : « ${gtextEsc(r.matched.procede)} »</div>`
    : '';
  const feedbackHtml = r.feedback
    ? `<div class="gtext-recap-feedback">${gtextEsc(r.feedback)}</div>`
    : '';
  const modelHtml = r.matched
    ? `<div class="gtext-recap-model"><span style="color:var(--tx3);font-size:10px;text-transform:uppercase;letter-spacing:.05em">Modèle · </span>${gtextEsc(r.matched.interpretation)}</div>`
    : '';
  return `<article class="gtext-entry gtext-entry-scored gtext-entry-${cls}">
    <div class="gtext-entry-main">
      <div class="gtext-recap-head">
        <strong>${gtextEsc(r.entry.procede)}</strong>
        <span class="gtext-recap-tag ${r.valid ? 'ok' : 'ng'}">${label}</span>
        ${gtextScoreBreakdownHtml(r)}
      </div>
      ${matchedLine}${citeLine}
      <p class="gtext-recap-user">Interprétation : « ${gtextEsc(gtextGetInterpText(r.entry))} »</p>
      ${feedbackHtml}${modelHtml}
    </div>
    <button type="button" class="gtext-entry-del" onclick="gtextRemoveEntry(${i})" title="Retirer">✕</button>
  </article>`;
}

function gtextSortItems(items) {
  const sort = GTEXT_STATE.sort || getSetting('gtextListSort') || 'default';
  const stats = gtextLoadStats();
  const copy = items.slice();
  if (sort === 'alpha') {
    copy.sort((a, b) => (a.titre || a.id || '').localeCompare(b.titre || b.id || '', 'fr'));
  } else if (sort === 'diff') {
    copy.sort((a, b) => a.diff - b.diff || (a.titre || a.id || '').localeCompare(b.titre || b.id || '', 'fr'));
  } else if (sort === 'score') {
    copy.sort((a, b) => {
      const na = stats[a.id]?.note ?? -1;
      const nb = stats[b.id]?.note ?? -1;
      return nb - na || (a.titre || a.id || '').localeCompare(b.titre || b.id || '', 'fr');
    });
  } else if (sort === 'todo') {
    copy.sort((a, b) => {
      const da = stats[a.id] ? 1 : 0;
      const db = stats[b.id] ? 1 : 0;
      return da - db || a.diff - b.diff;
    });
  } else if (sort === 'priority') {
    const ext = typeof computeGtextExtendedStats === 'function' ? computeGtextExtendedStats() : null;
    const recIds = new Set(ext?.recommendedIds || []);
    copy.sort((a, b) => {
      const ra = recIds.has(a.id) ? 0 : 1;
      const rb = recIds.has(b.id) ? 0 : 1;
      return ra - rb || (stats[a.id]?.note ?? -1) - (stats[b.id]?.note ?? -1) || a.diff - b.diff;
    });
  }
  if (getSetting('gtextShuffleList')) return shuf(copy);
  return copy;
}

function gtextFilterItems(items) {
  const q = gtextNorm(GTEXT_STATE.search);
  let out = items.filter(t =>
    (GTEXT_STATE.diff === 0 || t.diff === GTEXT_STATE.diff) &&
    (typeof gtextMatchGenre === 'function' ? gtextMatchGenre(t, GTEXT_STATE.genre) : true)
  );
  if (getSetting('gtextHideCompleted')) {
    const st = gtextLoadStats();
    out = out.filter(t => !st[t.id]?.note);
  }
  if (q) {
    out = out.filter(t =>
      gtextNorm(t.titre + ' ' + t.auteur + ' ' + t.genre + ' ' + t.oeuvre).includes(q)
    );
  }
  if (GTEXT_STATE.priorityOnly && typeof computeGtextExtendedStats === 'function') {
    const recIds = new Set(computeGtextExtendedStats().recommendedIds || []);
    if (recIds.size) out = out.filter(t => recIds.has(t.id));
  }
  return gtextSortItems(out);
}

function gtextListSummary() {
  const all = getAllGtexts();
  const st = gtextLoadStats();
  const done = all.filter(t => st[t.id]?.note != null).length;
  const custom = loadGtextCustom().length;
  return { total: all.length, done, custom };
}

/** Hub probabilités & stats IPCI — vue liste */
function renderGtextProbHub() {
  const box = el('gtext-prob-hub');
  if (!box) return;
  if (getSetting('gtextShowProbHub') === false) {
    box.innerHTML = '';
    return;
  }
  if (typeof computeGtextExtendedStats !== 'function') {
    box.innerHTML = '';
    return;
  }

  const ext = computeGtextExtendedStats();
  if (!ext.hasData) {
    box.innerHTML = `
      <div class="gph-empty">
        <div class="gph-empty-title">Centre commentaire · probabilités</div>
        <p>Corrige ton premier grand texte pour débloquer les stats IPCI, probabilités de mention et recommandations personnalisées.</p>
        <p class="gph-empty-sub">Barème : P 0,5 · C 0,25 · I 0,25 → /20 · <button type="button" class="corpus-inline-btn" onclick="introSimNavigate()">Simulateur d'intro (10 000 passages)</button></p>
      </div>`;
    return;
  }

  const d = ext.detail;
  const m = ext.mentions;
  const confCls = ext.confidence === 'high' ? 'hi' : ext.confidence === 'mid' ? 'mid' : 'lo';
  const trendHtml = ext.trend
    ? `<span class="gph-trend gph-trend-${ext.trend.dir}">${ext.trend.dir === 'up' ? '↑' : ext.trend.dir === 'down' ? '↓' : '→'} ${ext.trend.oldAvg} → ${ext.trend.recentAvg}/20</span>`
    : '';

  const ipciHtml = ext.ipci ? ['proc', 'cite', 'interp'].map(k => {
    const labels = { proc: 'Procédés P', cite: 'Citations C', interp: 'Interpr. I' };
    const pct = ext.ipci[k];
    const prob = ext.ipci[k + 'Prob'];
    const cls = pct >= 68 ? 'hi' : pct >= 45 ? 'mid' : 'lo';
    const isWeak = ext.weakAxis?.id === k;
    return `<div class="gph-ipci-item${isWeak ? ' gph-ipci-weak' : ''}">
      <div class="gph-ipci-top"><span>${labels[k]}</span><span class="hscore ${cls}">${pct}%</span></div>
      <div class="rtrack"><div class="rfill" style="width:${pct}%;background:${cls === 'hi' ? 'var(--ok)' : cls === 'mid' ? 'var(--amber)' : 'var(--er)'}"></div></div>
      <div class="gph-ipci-prob">P(≥10/20) · signal ${prob ?? '—'}%</div>
    </div>`;
  }).join('') : '';

  const mentionHtml = m ? [
    { k: 'pass', l: 'Admis ≥10', v: m.pass },
    { k: 'ab', l: 'AB ≥12', v: m.ab },
    { k: 'b', l: 'B ≥14', v: m.b },
    { k: 'tb', l: 'TB ≥16', v: m.tb },
  ].map(x => {
    const cls = x.v >= 70 ? 'hi' : x.v >= 45 ? 'mid' : 'lo';
    return `<div class="gph-mention"><span>${x.l}</span><strong class="hscore ${cls}">${x.v ?? '—'}%</strong></div>`;
  }).join('') : '';

  const genreHtml = Object.entries(ext.byGenre).slice(0, 5).map(([g, b]) =>
    `<div class="gph-genre-row"><span>${gtextEsc(g)}</span><span>${b.n} txt · ${b.avgNote}/20</span><span class="hscore ${b.avgNote >= 12 ? 'hi' : b.avgNote >= 10 ? 'mid' : 'lo'}">${b.probPass ?? '—'}%</span></div>`
  ).join('');

  const tlHtml = ext.timeline.slice(-8).map(t => {
    const cls = t.note >= 14 ? 'hi' : t.note >= 10 ? 'mid' : 'lo';
    const w = Math.max(8, Math.round(t.note / 20 * 100));
    return `<div class="gph-tl-bar" title="${gtextEsc(t.titre)} · ${t.note}/20"><div class="gph-tl-fill ${cls}" style="width:${w}%"></div><span>${t.note}</span></div>`;
  }).join('');

  const recHtml = ext.recommendations.slice(0, 4).map(r => {
    const startId = r.textId || gtextStartIdFromAction(r.action);
    const goBtn = startId
      ? `<button type="button" class="sbtn" style="font-size:9px;margin-left:6px" data-gtext-start="${gtextEscAttr(startId)}">→</button>`
      : '';
    return `<div class="gph-rec">${r.icon} ${gtextEsc(r.text)}${goBtn}<span class="gph-rec-gain">${r.gain}</span></div>`;
  }).join('');

  const simHtml = ext.simulations.map(s =>
    `<div class="gph-sim"><span>${s.icon} ${gtextEsc(s.name)}</span><span class="gph-sim-d">+${s.delta}%</span></div>`
  ).join('');

  const diffHtml = ext.byDiff ? [1, 2, 3].map(d => {
    const b = ext.byDiff[d];
    if (!b?.n) return '';
    const lbl = d === 1 ? '★ Facile' : d === 2 ? '★★ Moyen' : '★★★ Difficile';
    return `<div class="gph-diff-row"><span>${lbl}</span><span>${b.n} txt · ${b.avgNote}/20</span><span class="hscore ${b.avgNote >= 12 ? 'hi' : b.avgNote >= 10 ? 'mid' : 'lo'}">${b.probPass ?? '—'}%</span></div>`;
  }).join('') : '';

  const recordHtml = ext.best && ext.worst ? `
    <div class="gph-records">
      <span class="gph-record gph-record-hi">Meilleur : <strong>${ext.best.note}/20</strong> · ${gtextEsc((ext.best.titre || ext.best.id || '').slice(0, 28))}</span>
      <span class="gph-record gph-record-lo">À revoir : <strong>${ext.worst.note}/20</strong> · ${gtextEsc((ext.worst.titre || ext.worst.id || '').slice(0, 28))}</span>
    </div>` : '';

  const nextHtml = ext.nextText
    ? `<div class="gph-next"><span>Prochain texte suggéré :</span> <button type="button" class="sbtn" data-gtext-start="${gtextEscAttr(ext.nextText.id)}">${gtextEsc((ext.nextText.titre || ext.nextText.id || '').slice(0, 36))}${(ext.nextText.titre || '').length > 36 ? '…' : ''} →</button></div>`
    : '';

  const bacLine = ext.bacComposite?.noteEst != null
    ? ` · Bac composite ~<strong>${ext.bacComposite.noteEst}/20</strong> (admis ${ext.bacComposite.probPass}%)`
    : '';

  box.innerHTML = `
    <div class="gph-wrap">
      <div class="gph-header">
        <div>
          <h2 class="gph-title">Commentaire · <em>probabilités</em></h2>
          <p class="gph-sub">${ext.done}/${ext.totalCorpus} textes · couverture ${ext.coveragePct}% · confiance ${ext.confidence === 'high' ? 'élevée' : ext.confidence === 'mid' ? 'moyenne' : 'faible'} ${trendHtml}</p>
        </div>
        <div class="gph-main-score">
          <div class="gph-main-label">Moy. commentaire</div>
          <div class="gph-main-val ${confCls}">${d.avgNote}<span>/20</span></div>
          <div class="gph-main-prob">Admis ${ext.prob}% · fourchette ${ext.probBand}</div>
        </div>
      </div>

      ${recordHtml}
      ${nextHtml}

      <div class="gph-grid">
        <div class="gph-box">
          <div class="gph-box-title">IPCI — dimensions</div>
          <div class="gph-ipci-grid">${ipciHtml}</div>
          ${ext.weakAxis ? `<p class="gph-hint">Priorité : <strong>${ext.weakAxis.icon} ${ext.weakAxis.label}</strong> (${ext.weakAxis.pct}%)</p>` : ''}
        </div>
        <div class="gph-box">
          <div class="gph-box-title">Probabilités de mention</div>
          <div class="gph-mentions">${mentionHtml}</div>
          <p class="gph-hint">Basé sur ${ext.done} texte(s) corrigé(s)${bacLine}</p>
        </div>
        <div class="gph-box">
          <div class="gph-box-title">Par niveau</div>
          <div class="gph-genres">${diffHtml || '<span class="no-data">—</span>'}</div>
        </div>
      </div>

      <div class="gph-row">
        <div class="gph-col">
          <div class="gph-box-title">Par genre</div>
          <div class="gph-genres">${genreHtml || '<span class="no-data">—</span>'}</div>
        </div>
        <div class="gph-col">
          <div class="gph-box-title">Historique notes</div>
          <div class="gph-timeline">${tlHtml || '<span class="no-data">—</span>'}</div>
        </div>
        <div class="gph-col">
          <div class="gph-box-title">Recommandations</div>
          <div class="gph-recs">${recHtml || '<span class="no-data">Profil équilibré.</span>'}</div>
        </div>
        <div class="gph-col">
          <div class="gph-box-title">Simulations</div>
          <div class="gph-sims">${simHtml || '<span class="no-data">—</span>'}</div>
        </div>
      </div>
    </div>`;
}

/** Panneau probabilités complet après correction */
function gtextRenderResultProbPanel(est, scored, t) {
  if (getSetting('probShowGtextPanel') === false) return '';
  if (typeof computeGtextMentionProbs !== 'function') return '';

  const mentions = computeGtextMentionProbs(est.note, 1);
  const ext = typeof computeGtextExtendedStats === 'function' ? computeGtextExtendedStats() : null;
  const bac = typeof computeBacComposite === 'function' ? computeBacComposite() : null;
  const ps = typeof getProbSettings === 'function' ? getProbSettings() : { shrinkKGtext: 4 };

  const ipci = [
    { l: 'Procédés P', pts: est.procPts, max: 2.5, prob: _probFromPerformance(Math.round(est.procPts / 2.5 * 100), 1, { shrinkK: ps.shrinkKGtext }) },
    { l: 'Citations C', pts: est.citePts, max: 1.25, prob: _probFromPerformance(Math.round(est.citePts / 1.25 * 100), 1, { shrinkK: ps.shrinkKGtext }) },
    { l: 'Interpr. I', pts: est.interpPts, max: 1.25, prob: _probFromPerformance(Math.round(est.interpPts / 1.25 * 100), 1, { shrinkK: ps.shrinkKGtext }) },
  ];

  const avgDelta = ext?.detail?.avgNote != null
    ? Math.round((est.note - ext.detail.avgNote) * 10) / 10
    : null;

  const mentionRows = [
    { l: 'Admis ≥10/20', v: mentions.pass, band: mentions.band.text },
    { l: 'Assez Bien ≥12', v: mentions.ab, band: _probBand(mentions.ab, { level: 'low' }).text },
    { l: 'Bien ≥14', v: mentions.b, band: _probBand(mentions.b, { level: 'low' }).text },
    { l: 'Très Bien ≥16', v: mentions.tb, band: _probBand(mentions.tb, { level: 'low' }).text },
  ].map(r => {
    const cls = r.v >= 70 ? 'hi' : r.v >= 45 ? 'mid' : 'lo';
    return `<div class="gtext-prob-mention-row">
      <span>${r.l}</span><strong class="hscore ${cls}">${r.v}%</strong><span class="gtext-prob-band">${r.band}</span>
    </div>`;
  }).join('');

  const ipciHtml = ipci.map(x => {
    const pct = Math.round(x.pts / x.max * 100);
    const cls = pct >= 68 ? 'hi' : pct >= 45 ? 'mid' : 'lo';
    return `<div class="gtext-prob-item">
      <span>${x.l}</span>
      <strong>${x.prob ?? '—'}${x.prob != null ? '%' : ''}</strong>
      <span>${x.pts}/${x.max} · ${pct}%</span>
    </div>`;
  }).join('');

  const missed = scored.filter(r => !r.valid && r.points > 0).length;
  const blockers = [];
  if (est.procPts < 1.5) blockers.push('Repérage procédés — vise 5 procédés du corrigé');
  if (est.citePts < 0.75) blockers.push('Citations — cite les mots exacts du passage');
  if (est.interpPts < 0.75) blockers.push('Interprétations — effet + registre + lecteur');
  if (missed) blockers.push(`${missed} analyse(s) incomplète(s) (P/C/I)`);

  const blockersHtml = blockers.slice(0, 3).map(b => `<li>${gtextEsc(b)}</li>`).join('');

  const compareHtml = ext?.detail ? `
    <div class="gtext-prob-compare">
      vs ta moy. <strong>${ext.detail.avgNote}/20</strong>
      ${avgDelta != null ? ` · ce texte <strong style="color:${avgDelta >= 0 ? 'var(--ok)' : 'var(--coral)'}">${avgDelta >= 0 ? '+' : ''}${avgDelta}</strong>` : ''}
      · couverture corpus <strong>${ext.coveragePct}%</strong>
    </div>` : '';

  const bacHtml = bac?.noteEst != null
    ? `<div class="gtext-prob-global">Impact Bac composite : ~<strong>${bac.noteEst}/20</strong> · admis ${bac.probPass}% · AB ${bac.probAB}% · poids écrit ${Math.round((1 - (ps.compositeQcmShare ?? 0.62)) * 100)}%</div>`
    : '';

  const simHtml = ext?.simulations?.length
    ? `<div class="gtext-prob-sims">${ext.simulations.map(s =>
        `<div class="gtext-prob-sim"><span>${s.icon} ${gtextEsc(s.name)}</span><span>+${s.delta}% proba</span></div>`
      ).join('')}</div>`
    : '';

  const nextHtml = ext?.nextText && ext.nextText.id !== t.id
    ? `<div class="gtext-prob-next"><button type="button" class="sbtn" data-gtext-start="${gtextEscAttr(ext.nextText.id)}">Texte suivant suggéré : ${gtextEsc((ext.nextText.titre || ext.nextText.id || '').slice(0, 40))} →</button></div>`
    : '';

  return `
    <div class="gtext-prob-panel gtext-prob-panel-full">
      <div class="gtext-prob-head">Probabilités commentaire · IPCI <span style="font-weight:400;color:var(--tx3)">(1 texte · n=${ext?.done ?? 1})</span></div>
      <div class="gtext-prob-main">
        <div class="gtext-prob-main-note">${est.note}<span>/20</span></div>
        <div class="gtext-prob-main-meta">
          <strong>${est.mention}</strong>
          <span>P admis ${mentions.pass}% · fourchette ${mentions.band.text}</span>
        </div>
      </div>
      ${compareHtml}
      <div class="gtext-prob-grid">${ipciHtml}</div>
      <div class="gtext-prob-mentions-wrap">${mentionRows}</div>
      ${blockersHtml ? `<ul class="gtext-prob-blockers">${blockersHtml}</ul>` : ''}
      ${simHtml}
      ${nextHtml}
      ${bacHtml}
    </div>`;
}

function syncGtextUiClasses() {
  const b = document.body;
  b.classList.remove('gtext-fs-compact', 'gtext-fs-large');
  const sz = getSetting('gtextTextSize') || 'normal';
  if (sz === 'compact') b.classList.add('gtext-fs-compact');
  if (sz === 'large') b.classList.add('gtext-fs-large');
}

function initGtextesFilters() {
  initGtextListHandlers();
  GTEXT_STATE.sort = getSetting('gtextListSort') || 'default';

  const genreCont = el('gtextes-genre-chips');
  if (genreCont && !genreCont.dataset.ready) {
    genreCont.dataset.ready = '1';
    (typeof GTEXT_GENRES !== 'undefined' ? GTEXT_GENRES : [{ id: '', label: 'Tous' }]).forEach(g => {
      const b = document.createElement('button');
      b.className = 'chip' + (g.id === GTEXT_STATE.genre ? ' on' : '');
      b.textContent = g.label;
      b.onclick = () => {
        GTEXT_STATE.genre = g.id;
        genreCont.querySelectorAll('.chip').forEach(x => x.classList.remove('on'));
        b.classList.add('on');
        renderGtextesList();
      };
      genreCont.appendChild(b);
    });
  }

  const cont = el('gtextes-diff-chips');
  if (cont && !cont.dataset.ready) {
    cont.dataset.ready = '1';
    (typeof GTEXT_DIFFS !== 'undefined' ? GTEXT_DIFFS : [{ id: 0, label: 'Tous' }]).forEach(d => {
      const b = document.createElement('button');
      b.className = 'chip' + (d.id === GTEXT_STATE.diff ? ' on' : '');
      b.textContent = d.label;
      b.onclick = () => {
        GTEXT_STATE.diff = d.id;
        cont.querySelectorAll('.chip').forEach(x => x.classList.remove('on'));
        b.classList.add('on');
        renderGtextesList();
      };
      cont.appendChild(b);
    });
  }

  const viewCont = el('gtextes-view-chips');
  if (viewCont && !viewCont.dataset.ready) {
    viewCont.dataset.ready = '1';
    const priBtn = document.createElement('button');
    priBtn.className = 'chip' + (GTEXT_STATE.priorityOnly ? ' on' : '');
    priBtn.textContent = '★ Priorité IPCI';
    priBtn.title = 'Textes recommandés par le modèle (axe faible, couverture, genres)';
    priBtn.onclick = () => {
      GTEXT_STATE.priorityOnly = !GTEXT_STATE.priorityOnly;
      priBtn.classList.toggle('on', GTEXT_STATE.priorityOnly);
      renderGtextesList();
    };
    viewCont.appendChild(priBtn);
  }

  const sortCont = el('gtextes-sort-chips');
  if (sortCont && !sortCont.dataset.ready) {
    sortCont.dataset.ready = '1';
    [
      { id: 'default', label: 'Par défaut' },
      { id: 'alpha', label: 'A → Z' },
      { id: 'diff', label: 'Niveau ↑' },
      { id: 'todo', label: 'À faire' },
      { id: 'priority', label: 'Priorité ↑' },
      { id: 'score', label: 'Meilleure note' },
    ].forEach(s => {
      const b = document.createElement('button');
      b.className = 'chip' + (s.id === GTEXT_STATE.sort ? ' on' : '');
      b.textContent = s.label;
      b.onclick = () => {
        GTEXT_STATE.sort = s.id;
        applySetting('gtextListSort', s.id);
        sortCont.querySelectorAll('.chip').forEach(x => x.classList.remove('on'));
        b.classList.add('on');
        renderGtextesList();
      };
      sortCont.appendChild(b);
    });
  }

  const search = el('gtextes-search');
  if (search && !search.dataset.ready) {
    search.dataset.ready = '1';
    search.value = GTEXT_STATE.search;
    search.addEventListener('input', debounce(() => {
      GTEXT_STATE.search = search.value.trim();
      renderGtextesList();
    }, getSetting('searchDebounce') || 180));
  }

  syncGtextUiClasses();
}

function renderGtextCustomForm() {
  const box = el('gtextes-custom-form');
  if (!box) return;
  if (!GTEXT_STATE.showCustomForm) { box.innerHTML = ''; box.classList.add('hidden'); return; }
  box.classList.remove('hidden');
  box.innerHTML = `
    <div class="gtext-custom-panel">
      <div class="gtext-custom-head">
        <strong>Ajouter ton texte</strong>
        <button type="button" class="sbtn" onclick="gtextToggleCustomForm(false)">✕</button>
      </div>
      <div class="gtext-custom-grid">
        <input type="text" id="gc-titre" placeholder="Titre de l'extrait" maxlength="80">
        <input type="text" id="gc-auteur" placeholder="Auteur" maxlength="48">
        <input type="text" id="gc-oeuvre" placeholder="Œuvre (année)" maxlength="80">
        <select id="gc-genre">
          <option>Poésie</option><option>Théâtre</option><option>Roman</option>
          <option>Nouvelle</option><option>Fable</option><option>Autre</option>
        </select>
        <select id="gc-diff">
          <option value="1">★ Facile</option>
          <option value="2" selected>★★ Moyen</option>
          <option value="3">★★★ Difficile</option>
        </select>
      </div>
      <textarea id="gc-texte" placeholder="Colle l'extrait à analyser…" rows="6"></textarea>
      <textarea id="gc-contexte" placeholder="Contexte (2-3 phrases)" rows="2"></textarea>
      <textarea id="gc-attendus" placeholder="Corrigé simplifié — une ligne par procédé : Procédé | Citation | Interprétation" rows="4"></textarea>
      <p class="gtext-hint">Format attendu : <code>Anaphore | « citation » | effet interprété…</code></p>
      <div class="gtext-actions">
        <button class="pbtn" onclick="gtextSaveCustomText()">Enregistrer mon texte</button>
      </div>
    </div>`;
}

function gtextToggleCustomForm(show) {
  GTEXT_STATE.showCustomForm = show !== false;
  renderGtextCustomForm();
}

function gtextParseCustomAttendus(raw) {
  return raw.split('\n').map(line => line.trim()).filter(Boolean).map(line => {
    const parts = line.split('|').map(p => p.trim());
    const procede = parts[0] || 'Procédé';
    const citation = parts[1] || '—';
    const interpretation = parts[2] || parts[1] || '';
    const keywords = interpretation.split(/\s+/).filter(w => w.length >= 4).slice(0, 8);
    return { procede, citation, interpretation, keywords };
  }).filter(a => a.interpretation.length >= 10);
}

function gtextSaveCustomText() {
  const titre = el('gc-titre')?.value.trim();
  const auteur = el('gc-auteur')?.value.trim();
  const texte = el('gc-texte')?.value.trim();
  const contexte = el('gc-contexte')?.value.trim() || 'Texte personnel.';
  const attendus = gtextParseCustomAttendus(el('gc-attendus')?.value || '');
  if (!titre || !auteur || texte.length < 40) {
    alert('Renseigne au moins titre, auteur et un extrait (40 caractères min.).');
    return;
  }
  if (attendus.length < 2) {
    alert('Ajoute au moins 2 procédés dans le corrigé (format : Procédé | Citation | Interprétation).');
    return;
  }
  const list = loadGtextCustom();
  const id = 'GT-C' + String(Date.now()).slice(-8);
  list.push({
    id, custom: true, titre, auteur,
    oeuvre: el('gc-oeuvre')?.value.trim() || 'Texte personnel',
    genre: el('gc-genre')?.value || 'Autre',
    diff: parseInt(el('gc-diff')?.value || '2', 10),
    texte, contexte, attendus,
  });
  saveGtextCustom(list);
  GTEXT_STATE.showCustomForm = false;
  updateDynamicCounts();
  renderGtextesList();
  alert('✅ Texte enregistré !');
}

function gtextDeleteCustom(id) {
  if (!confirm('Supprimer ce texte personnel ?')) return;
  saveGtextCustom(loadGtextCustom().filter(t => t.id !== id));
  const st = gtextLoadStats();
  delete st[id];
  localStorage.setItem('bac_gtext_stats', JSON.stringify(st));
  gtextClearDraft(id);
  updateDynamicCounts();
  renderGtextesList();
}

function renderGtextesList() {
  initGtextListHandlers();
  GTEXT_STATE.phase = 'list';
  GTEXT_STATE.activeId = null;
  GTEXT_STATE.entries = [];
  const listView = el('gtextes-list-view');
  const workView = el('gtextes-work-view');
  if (listView) listView.classList.remove('hidden');
  if (workView) workView.classList.add('hidden');

  renderGtextCustomForm();

  const cont = el('gtextes-list');
  const summaryEl = el('gtextes-summary');
  let ext = null;
  try {
    if (typeof computeGtextExtendedStats === 'function') ext = computeGtextExtendedStats();
  } catch (e) {
    console.error('computeGtextExtendedStats', e);
  }
  if (summaryEl) {
    const s = gtextListSummary();
    let line = `${s.total} textes · ${s.done} corrigés${s.custom ? ` · ${s.custom} perso.` : ''}`;
    if (ext?.hasData && ext.weakAxis) {
      line += ` · axe faible : ${ext.weakAxis.icon} ${ext.weakAxis.label.split('(')[0].trim()} (${ext.weakAxis.pct}%)`;
    }
    summaryEl.textContent = line;
  }

  try {
    renderGtextProbHub();
  } catch (e) {
    console.error('renderGtextProbHub', e);
    const hub = el('gtext-prob-hub');
    if (hub) hub.innerHTML = '';
  }

  if (!cont) return;
  const items = gtextFilterItems(getAllGtexts());
  const recIds = new Set(ext?.recommendedIds || []);

  if (!items.length) {
    const hideDone = getSetting('gtextHideCompleted');
    const hint = hideDone
      ? ' Tous les textes visibles sont peut-être déjà corrigés — désactive « Masquer les textes déjà faits » dans ⚙️.'
      : '';
    cont.innerHTML = `<div class="nores">Aucun texte pour ces filtres.${hint} Essaie une autre recherche ou ajoute le tien.</div>`;
    return;
  }

  try {
  cont.innerHTML = items.map(t => {
    const stars = '★'.repeat(t.diff) + '☆'.repeat(3 - t.diff);
    const st = gtextLoadStats()[t.id];
    const noteBadge = st && st.note != null
      ? `<span class="gtext-note-badge ${gtextGradeClass(st.note)}" title="${st.totalPts != null ? `${st.totalPts}/5 pts · P ${st.procPts} C ${st.citePts} I ${st.interpPts}` : st.note + '/20'}">${st.note}/20</span>`
      : '';
    let ipciMini = '';
    if (st && st.procPts != null && typeof _probFromNote20 === 'function') {
      const pP = Math.round(st.procPts / 2.5 * 100);
      const pC = Math.round((st.citePts || 0) / 1.25 * 100);
      const pI = Math.round((st.interpPts || 0) / 1.25 * 100);
      const prob = _probFromNote20(st.note, 1);
      ipciMini = `<div class="gtext-card-ipci" title="P ${pP}% · C ${pC}% · I ${pI}% · P admis ${prob ?? '—'}%">
        <span class="gtext-ipci-bar" style="width:${pP}%"></span>
        <span class="gtext-ipci-bar c" style="width:${pC}%"></span>
        <span class="gtext-ipci-bar i" style="width:${pI}%"></span>
      </div>`;
    }
    const oeuvreBrief = typeof gtextLookupOeuvreInfo === 'function' ? gtextLookupOeuvreInfo(t) : null;
    const preview = (oeuvreBrief || t.contexte || '').slice(0, 110);
    const customTag = t.custom ? '<span class="gtext-custom-tag">Perso</span>' : '';
    const recTag = recIds.has(t.id) ? '<span class="gtext-rec-tag" title="Recommandé par le modèle IPCI">Priorité</span>' : '';
    const extTag = (!t.custom && /^GT-(\d+)$/.test(t.id) && parseInt(t.id.slice(3), 10) >= 261)
      ? '<span class="gtext-ext-tag" title="Fiche générée — banque bac étendue (GT-261+)">Banque étendue</span>'
      : '';
    const delBtn = t.custom
      ? `<button type="button" class="gtext-entry-del" data-gtext-del="${gtextEscAttr(t.id)}" title="Supprimer">✕</button>`
      : '';
    return `<article class="gtext-card${t.custom ? ' gtext-card-custom' : ''}${recIds.has(t.id) ? ' gtext-card-rec' : ''}" data-gtext-id="${gtextEscAttr(t.id)}" role="button" tabindex="0">
      <div class="gtext-card-head">
        <h3>${gtextEsc(t.titre)}</h3>
        <div style="display:flex;gap:6px;align-items:center;flex-shrink:0">
          ${noteBadge}${recTag}${extTag}${customTag}${delBtn}
          <span class="gtext-genre-tag">${t.genre}</span>
          <span class="gtext-badge">${(t.attendus?.length ?? 0)} proc. texte</span>
        </div>
      </div>
      <div class="gtext-meta">${gtextEsc(t.auteur)} · ${gtextEsc(t.oeuvre)}</div>
      ${ipciMini}
      <p>${stars} · ${gtextEsc(preview)}${preview.length >= 110 ? '…' : ''}</p>
    </article>`;
  }).join('');
  } catch (e) {
    console.error('renderGtextesList', e);
    cont.innerHTML = '<div class="nores">Erreur d\'affichage de la liste — recharge la page (Ctrl+F5).</div>';
  }
}

function startGtext(id) {
  const t = gtextGetById(id);
  if (!t) {
    alert('Texte introuvable — recharge la page (Ctrl+F5).');
    return;
  }
  if (!Array.isArray(t.attendus)) t.attendus = [];
  GTEXT_STATE.activeId = id;
  GTEXT_STATE.entries = gtextLoadDraft(id);
  if (!GTEXT_STATE.entries.length) GTEXT_STATE.entries = [];
  GTEXT_STATE.phase = 'work';
  syncGtextUiClasses();

  const listView = el('gtextes-list-view');
  const workView = el('gtextes-work-view');
  if (listView) listView.classList.add('hidden');
  if (workView) workView.classList.remove('hidden');

  try {
    renderGtextWork();
  } catch (e) {
    console.error('renderGtextWork', e);
    const cont = el('gtextes-work-cont');
    if (cont) {
      cont.innerHTML = `<div class="nores">Erreur d'affichage du texte — ${gtextEsc(String(e.message || e))}<br><button class="sbtn" type="button" onclick="gtextBackToList()">← Retour</button></div>`;
    }
    return;
  }
  if (typeof playSound === 'function') playSound('open');
}

function gtextBackToList() {
  if (GTEXT_STATE.activeId && GTEXT_STATE.entries.length) {
    gtextSaveDraft(GTEXT_STATE.activeId, GTEXT_STATE.entries);
  }
  const workCont = el('gtextes-work-cont');
  if (workCont) workCont.innerHTML = '';
  renderGtextesList();
}

function renderGtextWork() {
  const t = gtextGetById(GTEXT_STATE.activeId);
  const cont = el('gtextes-work-cont');
  if (!t || !cont) return;

  const minChars = gtextGetMinChars();
  const showCtx = getSetting('gtextShowContext') !== false;
  const showHints = getSetting('gtextShowHints');

  const maxEntries = GTEXT_GRADE_CFG.maxEntries;
  const atMax = GTEXT_STATE.entries.length >= maxEntries;

  const scored = GTEXT_STATE.entries.length
    ? gtextValidateUserEntries(GTEXT_STATE.entries, t.attendus, t.texte)
    : [];
  const liveEst = scored.length ? gtextEstimateGrade(scored, t.attendus) : null;

  const entriesHtml = scored.length
    ? scored.map((r, i) => gtextRenderWorkEntry(r, i)).join('')
    : `<p class="gtext-hint">Repère les <strong>${gtextGradeTarget(t.attendus)} procédés</strong> du corrigé (${t.attendus.length} au total · max ${maxEntries} saisis).</p>`;

  const liveScoreHtml = gtextRenderLiveScoreBar(liveEst);

  const hintsHtml = showHints && t.attendus.length
    ? `<div class="gtext-hints-box">
        <div class="gtext-hints-title">Indices (procédés + pistes d'interprétation)</div>
        <div class="gtext-hints-list">${t.attendus.map(a => {
          const kws = (a.keywords || []).filter(k => k.length >= 4).slice(0, 3);
          const kwHtml = kws.length
            ? `<span class="gtext-hint-kws">${kws.map(k => `<code>${gtextEsc(k)}</code>`).join(' ')}</span>`
            : '';
          return `<div class="gtext-hint-row"><span class="gtext-hint-chip">${gtextEsc(a.procede)}</span>${kwHtml}</div>`;
        }).join('')}</div>
      </div>`
    : '';

  cont.innerHTML = `
    <div class="gtext-panel">
      <div class="gtext-head">
        <h2>${gtextEsc(t.titre)}${t.custom ? ' <span class="gtext-custom-tag">Perso</span>' : ''}</h2>
        <div class="gtext-meta">${gtextEsc(t.auteur)} · ${gtextEsc(t.oeuvre)} · ${gtextEsc(t.genre)}</div>
        ${typeof introSimOpenFromGtext === 'function' && !t.custom ? `<button type="button" class="sbtn sec gtext-intro-sim-btn" onclick="introSimOpenFromGtext('${gtextEscAttr(t.id)}')">📝 Simuler l'intro</button>` : ''}
        ${showCtx ? gtextRenderOeuvreContext(t) : ''}
      </div>
      ${gtextRenderPassage(t.texte, t.titre)}
      ${gtextRenderAttendusPanel(t, scored)}
      ${liveScoreHtml}
      ${hintsHtml}
      <div class="gtext-form-title">Tes analyses · ${GTEXT_STATE.entries.length} / ${maxEntries} · correction immédiate</div>
      <div class="gtext-entries">${entriesHtml}</div>
      <div id="gtext-coach" class="gtext-coach"></div>
      <div class="gtext-form">
        <div>
          <label for="gtext-proc">Procédé repéré</label>
          <input type="text" id="gtext-proc" list="gtext-proc-list" placeholder="Nom du procédé — liste ou saisie libre" autocomplete="off">
          <datalist id="gtext-proc-list">${gtextProcOptions()}</datalist>
        </div>
        <div>
          <label for="gtext-cite">Citation (extrait du texte)</label>
          <input type="text" id="gtext-cite" placeholder="« … » — repère les mots exacts du passage">
        </div>
        <div>
          <label for="gtext-interp">Interprétation (effet dans ce texte)</label>
          <textarea id="gtext-interp" placeholder="IPCI : explique POURQUOI l'auteur utilise ce procédé — effet sur le sens, le registre, le lecteur… (${minChars} car. min.)"></textarea>
        </div>
      </div>
      <div class="gtext-actions">
        <button class="sbtn" onclick="gtextAddEntry()" ${atMax ? 'disabled title="Maximum 5 procédés"' : ''}>+ Ajouter cette analyse</button>
        <button class="pbtn" onclick="gtextSubmit()" ${GTEXT_STATE.entries.length ? '' : 'disabled'}>Enregistrer la note et terminer</button>
      </div>
      <p class="gtext-hint">Barème : <strong>0,5</strong> P · <strong>0,25</strong> C · <strong>0,25</strong> I — note et modèle affichés dès que tu ajoutes une analyse.</p>
    </div>`;
  gtextBindInterpCoach(t.attendus);
}

function gtextAddEntry() {
  const proc = el('gtext-proc');
  const cite = el('gtext-cite');
  const interp = el('gtext-interp');
  if (!proc || !interp) return;
  if (GTEXT_STATE.entries.length >= GTEXT_GRADE_CFG.maxEntries) {
    alert(`Maximum ${GTEXT_GRADE_CFG.maxEntries} procédés par texte.`);
    return;
  }
  const procede = proc.value.trim();
  const citation = cite?.value.trim() || '';
  const interpretation = interp.value.trim();
  const min = gtextGetMinChars();
  if (!procede || procede.length < 2) { alert('Indique le procédé repéré (figure, registre, versification…).'); return; }
  if (interpretation.length < min) { alert(`Écris une interprétation plus développée (au moins ${min} caractères).`); return; }
  GTEXT_STATE.entries.push({ procede, citation, interpretation });
  gtextSaveDraft(GTEXT_STATE.activeId, GTEXT_STATE.entries);
  if (typeof playSound === 'function') playSound('add');
  renderGtextWork();
}

function gtextRemoveEntry(i) {
  GTEXT_STATE.entries.splice(i, 1);
  gtextSaveDraft(GTEXT_STATE.activeId, GTEXT_STATE.entries);
  if (typeof playSound === 'function') playSound('remove');
  renderGtextWork();
}

function gtextSubmit() {
  const t = gtextGetById(GTEXT_STATE.activeId);
  if (!t || !GTEXT_STATE.entries.length) return;

  const scored = gtextValidateUserEntries(GTEXT_STATE.entries, t.attendus, t.texte);
  const est = gtextEstimateGrade(scored, t.attendus);
  const gc = gtextGradeClass(est.note);

  try {
    const st = gtextLoadStats();
    st[t.id] = {
      note: est.note, mention: est.mention, scorePct: est.scorePct,
      totalPts: est.totalPts, procPts: est.procPts, citePts: est.citePts, interpPts: est.interpPts,
      full: est.full, partial: est.partial, entryCount: est.entryCount,
      genre: t.genre, diff: t.diff,
      date: Date.now(),
    };
    localStorage.setItem('bac_gtext_stats', JSON.stringify(st));
  } catch (e) {}
  gtextClearDraft(t.id);

  if (typeof playGradeSound === 'function') playGradeSound(est.note);

  const userRecap = scored.map(r => {
    const cls = r.valid ? 'ok' : r.points > 0 ? 'ng' : 'miss';
    const label = r.valid ? `✓ Complet (${Math.round(r.points * 100) / 100} pt)` : r.procOk ? 'Partiel' : 'Procédé non validé';
    const matchedLine = r.matched && r.entry.procede !== r.matched.procede
      ? `<div class="gtext-recap-proc-wrong">Tu as écrit « ${gtextEsc(r.entry.procede)} » → corrigé : « ${gtextEsc(r.matched.procede)} »</div>`
      : '';
    const citeUser = r.entry.citation
      ? `<div class="gtext-recap-user">Citation : « ${gtextEsc(r.entry.citation)} »</div>`
      : '';
    return `<article class="gtext-recap-item ${cls}">
      <div class="gtext-recap-head">
        <strong>${gtextEsc(r.entry.procede)}</strong>
        <span class="gtext-recap-tag ${r.valid ? 'ok' : 'ng'}">${label}</span>
        ${gtextScoreBreakdownHtml(r)}
      </div>
      ${matchedLine}${citeUser}
      <div class="gtext-recap-user">Interprétation : « ${gtextEsc(gtextGetInterpText(r.entry))} »</div>
      ${r.feedback ? `<div class="gtext-recap-feedback">${gtextEsc(r.feedback)}</div>` : ''}
      ${r.matched ? `<div class="gtext-recap-model"><span style="color:var(--tx3);font-size:10px;text-transform:uppercase;letter-spacing:.05em">Modèle · </span>${gtextEsc(r.matched.interpretation)}</div>` : ''}
    </article>`;
  }).join('');

  const corrigRecap = t.attendus.map(a => `<article class="gtext-recap-item miss">
      <div class="gtext-recap-head"><strong>${gtextEsc(a.procede)}</strong></div>
      <cite>${gtextEsc(a.citation)}</cite>
      <div class="gtext-recap-model">${gtextEsc(a.interpretation)}</div>
    </article>`).join('');

  const msg = gtextResultMessage(est);
  const gradeBreakdown = gtextFormatGradeBreakdown(est);
  const oeuvreCtx = getSetting('gtextShowContext') !== false ? gtextRenderOeuvreContext(t) : '';

  let gtextProbHtml = gtextRenderResultProbPanel(est, scored, t);

  const cont = el('gtextes-work-cont');
  if (!cont) return;
  cont.innerHTML = `
    <div class="gtext-panel gtext-result">
      <h2>Corrigé · ${gtextEsc(t.titre)}</h2>
      ${oeuvreCtx}
      ${gtextRenderPassage(t.texte, t.titre)}
      <div class="gtext-grade-estimate ${gc}">
        <div class="gtext-grade-main">${est.note}<span>/20</span></div>
        <div class="gtext-grade-meta">
          <strong>${est.mention}</strong>
          <span>${gradeBreakdown}</span>
        </div>
      </div>
      <div class="gtext-grade-detail">
        <span>${est.full} complet${est.full !== 1 ? 's' : ''} · ${est.partial} partiel${est.partial !== 1 ? 's' : ''} · ${est.covered}/${est.targetCount} proc. corrigé · ${est.entryCount} saisi${est.entryCount !== 1 ? 's' : ''}</span>
      </div>
      <p style="text-align:center;color:var(--tx2);margin-bottom:1rem">${msg}</p>
      ${gtextProbHtml}
      <p class="gtext-grade-disclaimer">Barème repérage IPCI : 0,5 P + 0,25 C + 0,25 I par procédé du corrigé (max ${est.targetCount}) → base /16, bonus qualité jusqu'à /20. Ce n'est pas la note officielle du commentaire écrit au bac.</p>
      <div class="gtext-recap-title">Tes ${scored.length} analyse${scored.length !== 1 ? 's' : ''}</div>
      <div class="gtext-recap">${userRecap || '<p class="gtext-hint">Aucune analyse.</p>'}</div>
      <div class="gtext-recap-title">Tous les procédés du texte (${t.attendus.length}) — rappel corrigé</div>
      <div class="gtext-recap gtext-recap-corrige">${corrigRecap}</div>
      <div class="gtext-actions" style="margin-top:1.2rem">
        <button type="button" class="pbtn" data-gtext-start="${gtextEscAttr(t.id)}">↺ Recommencer ce texte</button>
        <button class="sbtn" onclick="gtextBackToList()">← Autres textes</button>
      </div>
    </div>`;

  if (typeof refreshProbStats === 'function') refreshProbStats();
  else scheduleDashboardUpdate();
  ['proc', 'gram'].forEach(m => {
    const pg = el(m === 'proc' ? 'proc-p-stat' : 'gram-p-stat');
    if (pg && pg.classList.contains('on')) renderStats(m);
  });
}

if (typeof window !== 'undefined') window.startGtext = startGtext;
