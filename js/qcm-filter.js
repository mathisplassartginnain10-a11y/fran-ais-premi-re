/* ═══════════════════════════════════════════════════
   qcm-filter.js — QCM alignés sur le cours (fiches + méthode)
   Exécuté après fusion de toutes les banques QCM
   ═══════════════════════════════════════════════════ */

(function () {
  if (typeof PROC_DATA === 'undefined' || typeof PROC_QCM === 'undefined') return;

  const PROC_CATS = [
    'Figures de style', 'Procédés narratifs', 'Procédés poétiques',
    'Registres & tonalités', 'Syntaxe & lexique', 'Analyse de phrase',
  ];
  const METHOD_CATS = [
    'Méthode commentaire', 'Dissertation', 'Connecteurs & Style',
  ];

  const validNames = PROC_DATA.map(d => d.name);
  const validSet = new Set(validNames);
  const registreShort = validNames
    .filter(n => n.startsWith('Registre '))
    .map(n => n.slice(9));

  /** Procédés absents des fiches — hors programme affiché */
  const REMOVED = [
    'métaphore filée', 'allégorie', 'symbole', 'épiphore',
    'paradoxe', 'chiasme', 'euphémisme', 'ironie', 'antiphrase', 'onomatopée', 'polyptote',
    'épanorthose', 'hypotypose', 'périphrase', 'métonymie', 'synecdoque', 'zeugme',
    'prétérition', 'apostrophe', 'antonomase', 'focalisation zéro', 'focalisation externe',
    'ellipse narrative', 'ellipse', 'scène', 'sommaire', 'pause descriptive', 'analepse',
    'prolepse', 'in medias res', 'incipit', 'leitmotiv', 'narrateur autodiégétique',
    'narrateur hétérodiégétique', 'discours direct', 'discours indirect', 'discours indirect libre',
    'double énonciation', 'décasyllabe', 'octosyllabe',
    'diérèse', 'rime riche', 'quatrain', 'tercet', 'distique', 'sizain', 'phrase nominale',
    'polysyndète', 'phrase exclamative', 'question rhétorique', 'modalisateur', 'champ sémantique',
    'dénotation', 'connotation', 'registre de langue', 'dislocation', 'parallélisme syntaxique',
    'parataxe', 'explicit', 'anachronie', 'symbolisme',
    'registre fantastique', 'registre didactique', 'registre polémique',
    'registre élégiaque', 'registre burlesque',
  ];

  function stripHtml(s) {
    return (s || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function norm(s) {
    return (s || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function buildBlob(parts) {
    return norm(parts.filter(Boolean).join(' '));
  }

  const procBlob = buildBlob(PROC_DATA.map(d => [d.name, d.def, d.ex, d.effet, d.cat, d.sub]));

  const gramBlob = typeof GRAM_COURS !== 'undefined'
    ? buildBlob(GRAM_COURS.map(d => [d.name, d.def, d.cours, d.cat, stripHtml(d.content)]))
    : '';
  const gramNames = new Set(typeof GRAM_COURS !== 'undefined' ? GRAM_COURS.map(d => d.name) : []);

  const vocabBlob = typeof VOCAB_COURS !== 'undefined'
    ? buildBlob(VOCAB_COURS.map(d => [d.name, d.def, stripHtml(d.content)]))
    : '';
  const vocabNames = new Set(typeof VOCAB_COURS !== 'undefined' ? VOCAB_COURS.map(d => d.name) : []);

  /** Texte des pages Commentaire / Dissertation (voie générale) */
  const methodStaticBlob = buildBlob([
    'IPCI Idée Procédé Citation Interprétation',
    'problématique annonce du plan paraphrase plan thématique plan chronologique',
    'introduction 5 min plan 15 min développement 40 min conclusion bilan ouverture',
    'dissertation thèse antithèse synthèse dialectique thématique analytique',
    'accroche contextualisation exemple argument transition concession nuance',
    'connecteurs de plus en outre cependant pourtant donc ainsi par conséquent certes néanmoins',
    'en définitive en somme registre soutenu paraphrase IPCI',
    'commentaire poème théâtre roman axes thématiques',
  ]);

  const methodExplBlob = buildBlob(
    PROC_QCM.filter(q => METHOD_CATS.includes(q.cat))
      .flatMap(q => [q.q, q.expl, ...(q.opts || [])])
  );
  const methodCourseBlob = methodStaticBlob + ' ' + methodExplBlob;

  function matchesValid(text) {
    if (!text) return false;
    const t = String(text).trim();
    if (validSet.has(t)) return true;
    const tl = norm(t);
    for (const n of validNames) {
      if (tl.includes(norm(n))) return true;
    }
    for (const s of registreShort) {
      const sn = norm(s);
      if (tl === sn || tl.includes('registre ' + sn) || tl.endsWith(' ' + sn) || tl.startsWith(sn + ' ')) return true;
    }
    for (const n of validNames) {
      const parts = n.split(' ');
      const last = parts[parts.length - 1];
      if (last.length > 3 && tl === norm(last)) return true;
    }
    return false;
  }

  function matchesRemoved(text) {
    if (!text) return false;
    const tl = norm(text);
    return REMOVED.some(r => {
      const nr = norm(r);
      return tl === nr || tl.startsWith(nr + ' ') || tl.endsWith(' ' + nr) || tl.includes(' ' + nr + ' ');
    });
  }

  function questionTargetsRemoved(q) {
    const t = norm(q.q || '');
    if (!t) return false;
    for (const r of REMOVED) {
      const nr = norm(r);
      if (t.includes(nr)) return true;
      const tail = nr.replace(/^registre /, '');
      if (tail !== nr && tail.length > 4 && t.includes(tail)) return true;
    }
    return false;
  }

  function inCourseText(text, courseBlob, nameSet) {
    if (!text) return false;
    const raw = String(text).trim();
    if (nameSet && nameSet.has(raw)) return true;
    const t = norm(text);
    if (!t || t.length < 3) return false;
    if (courseBlob.includes(t)) return true;
    const words = t.split(' ').filter(w => w.length > 3);
    if (words.length >= 2) {
      const hits = words.filter(w => courseBlob.includes(w));
      if (hits.length >= Math.max(2, Math.ceil(words.length * 0.65))) return true;
    }
    return false;
  }

  function keepMethodQcm(q) {
    const correct = q.opts[q.ans];
    if (!correct) return false;
    if (inCourseText(correct, methodCourseBlob)) return true;
    if (inCourseText(q.expl, methodCourseBlob) && norm(correct).length >= 3) return true;
    return inCourseText([q.q, q.expl, correct].join(' '), methodCourseBlob);
  }

  function keepProcQcm(q) {
    const correct = q.opts[q.ans];
    if (!correct) return false;
    if (matchesRemoved(correct)) return false;
    if (questionTargetsRemoved(q)) return false;

    if (METHOD_CATS.includes(q.cat)) return keepMethodQcm(q);
    if (!PROC_CATS.includes(q.cat)) return true;

    if (q.cat === 'Analyse de phrase') {
      return matchesValid(correct) && !matchesRemoved(correct);
    }

    if (matchesValid(correct)) return true;

    if (q.ref && String(q.ref).startsWith('proc:')) {
      const name = q.ref.slice(5);
      if (validSet.has(name)) return inCourseText(correct, procBlob) || matchesValid(correct);
    }

    return inCourseText(correct, procBlob);
  }

  function keepGramQcm(q) {
    const correct = q.opts[q.ans];
    if (!correct) return false;
    if (matchesRemoved(correct)) return false;
    if (q.ref && String(q.ref).startsWith('gram:')) {
      const name = q.ref.slice(5);
      if (gramNames.has(name)) return true;
    }
    return inCourseText(correct, gramBlob, gramNames);
  }

  function keepVocabQcm(q) {
    const correct = q.opts[q.ans];
    if (!correct) return false;
    if (q.ref && String(q.ref).startsWith('vocab:')) {
      const name = q.ref.slice(6);
      if (vocabNames.has(name)) return true;
    }
    return inCourseText(correct, vocabBlob, vocabNames);
  }

  const procBefore = PROC_QCM.length;
  const procKept = PROC_QCM.filter(keepProcQcm);
  PROC_QCM.length = 0;
  PROC_QCM.push(...procKept);

  let gramDropped = 0;
  if (typeof GRAM_QCM !== 'undefined') {
    const gramBefore = GRAM_QCM.length;
    const gramKept = GRAM_QCM.filter(keepGramQcm);
    GRAM_QCM.length = 0;
    GRAM_QCM.push(...gramKept);
    gramDropped = gramBefore - gramKept.length;
  }

  let vocabDropped = 0;
  if (typeof VOCAB_QCM !== 'undefined') {
    const vocabBefore = VOCAB_QCM.length;
    const vocabKept = VOCAB_QCM.filter(keepVocabQcm);
    VOCAB_QCM.length = 0;
    VOCAB_QCM.push(...vocabKept);
    vocabDropped = vocabBefore - vocabKept.length;
  }

  function exoAligned(ex) {
    if (!ex || !ex.opts) return false;
    if (['Méthode', 'Dissertation', 'Connecteurs & Style'].includes(ex.cat)) return true;
    const ans = ex.opts[ex.ans];
    if (matchesValid(ans)) return true;
    if (matchesRemoved(ans)) return false;
    return false;
  }

  function corpusPhraseAligned(p) {
    if (!p) return false;
    if (p.mat === 'gram') return true;
    if (p.procede && matchesValid(p.procede)) return true;
    if (p.reponse && matchesValid(p.reponse)) return true;
    if (p.procede && matchesRemoved(p.procede)) return false;
    if (p.reponse && matchesRemoved(p.reponse)) return false;
    return false;
  }

  if (typeof EXERCICES !== 'undefined') {
    window.BAC_ALIGNED_EXO = EXERCICES.filter(exoAligned);
  }

  if (typeof window !== 'undefined') {
    window.bacMatchesValidProcede = matchesValid;
    window.bacExoAligned = exoAligned;
    window.bacCorpusPhraseAligned = corpusPhraseAligned;
  }

  function sanitizeQcmItem(q) {
    if (!q || !Array.isArray(q.opts) || q.ans == null) return null;
    const correct = q.opts[q.ans];
    if (correct === undefined) return null;
    const seen = new Set();
    const opts = [];
    const add = (text) => {
      const t = String(text ?? '').trim();
      const k = norm(t);
      if (!k || seen.has(k)) return;
      seen.add(k);
      opts.push(t);
    };
    add(correct);
    q.opts.forEach((o, i) => { if (i !== q.ans) add(o); });
    if (opts.length < 4) return null;
    const finalOpts = opts.slice(0, 4);
    const correctNorm = norm(correct);
    for (let i = finalOpts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [finalOpts[i], finalOpts[j]] = [finalOpts[j], finalOpts[i]];
    }
    const ans = finalOpts.findIndex(o => norm(o) === correctNorm);
    if (ans < 0) return null;
    return { ...q, opts: finalOpts, ans };
  }

  function sanitizeQcmBank(arr) {
    if (!arr || !arr.length) return { kept: 0, dropped: 0 };
    const clean = [];
    let dropped = 0;
    arr.forEach(q => {
      const s = sanitizeQcmItem(q);
      if (s) clean.push(s);
      else dropped++;
    });
    arr.length = 0;
    arr.push(...clean);
    return { kept: clean.length, dropped };
  }

  const procSan = sanitizeQcmBank(PROC_QCM);
  const gramSan = typeof GRAM_QCM !== 'undefined' ? sanitizeQcmBank(GRAM_QCM) : { kept: 0, dropped: 0 };
  const vocabSan = typeof VOCAB_QCM !== 'undefined' ? sanitizeQcmBank(VOCAB_QCM) : { kept: 0, dropped: 0 };

  if (typeof PROC_QCM_CATS !== 'undefined') {
    const present = new Set(PROC_QCM.map(q => q.cat));
    const order = [
      'Analyse de phrase', 'Figures de style', 'Procédés narratifs', 'Procédés poétiques',
      'Registres & tonalités', 'Syntaxe & lexique', 'Méthode commentaire', 'Dissertation',
      'Connecteurs & Style',
    ];
    PROC_QCM_CATS.length = 0;
    PROC_QCM_CATS.push('Toutes', ...order.filter(c => present.has(c)));
  }

  if (typeof GRAM_QCM_CATS !== 'undefined' && typeof GRAM_QCM !== 'undefined') {
    const present = new Set(GRAM_QCM.map(q => q.cat));
    const order = ['Analyse de phrase', 'Les Propositions', 'Les Propositions (suite)', 'La Négation', 'Les Modes', 'La Voix'];
    GRAM_QCM_CATS.length = 0;
    GRAM_QCM_CATS.push('Toutes', ...order.filter(c => present.has(c)));
  }

  if (typeof VOCAB_QCM_CATS !== 'undefined' && typeof VOCAB_QCM !== 'undefined') {
    const present = new Set(VOCAB_QCM.map(q => q.cat));
    const order = VOCAB_QCM_CATS.slice(1);
    VOCAB_QCM_CATS.length = 0;
    VOCAB_QCM_CATS.push('Toutes', ...order.filter(c => present.has(c)));
  }

  if (typeof buildCorpusDoc === 'function') buildCorpusDoc();

  if (typeof window !== 'undefined') {
    window.BAC_QCM_FILTERED = procBefore - procKept.length;
    window.BAC_QCM_KEPT = procKept.length;
    window.BAC_QCM_GRAM_FILTERED = gramDropped;
    window.BAC_QCM_VOCAB_FILTERED = vocabDropped;
    window.BAC_QCM_SANITIZED = procSan.dropped + gramSan.dropped + vocabSan.dropped;
  }
})();
