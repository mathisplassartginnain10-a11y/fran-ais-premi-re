/* data-intro-simulator.js — Banque d'intros (5 temps) indexée sur les grands textes + auteurs */

const INTRO_SIM_AMORCE = {
  classicisme: {
    prev: 'Baroque',
    prevCar: 'liberté théâtrale et excès baroques',
    siecle: 'XVIIe',
    curCar: 'classicisme, théâtre de l\'honneur et règles dramatiques',
  },
  lumieres: {
    prev: 'classicisme',
    prevCar: 'théâtre moral et esthétique des règles',
    siecle: 'XVIIIe',
    curCar: 'Siècle des Lumières, progrès de la raison et combat des préjugés',
  },
  romantisme: {
    prev: 'Siècle des Lumières',
    prevCar: 'combat des préjugés et visée didactique',
    siecle: 'XIXe',
    curCar: 'romantisme, subjectivité, nature et « mal du siècle »',
  },
  realisme: {
    prev: 'romantisme',
    prevCar: 'exaltation de la subjectivité et du « je » poétique',
    siecle: 'XIXe',
    curCar: 'réalisme et naturalisme, miroir du réel et analyse sociale',
  },
  moderne: {
    prev: 'réalisme et naturalisme',
    prevCar: 'description objective de la société et du milieu',
    siecle: 'XXe',
    curCar: 'modernité littéraire, remise en question des formes et de la condition humaine',
  },
  contemporain: {
    prev: 'XXe siècle',
    prevCar: 'exploration de l\'absurde et rupture avec les formes classiques',
    siecle: 'XXIe',
    curCar: 'littérature contemporaine, mémoire, identité et conflits intimes',
  },
};

const INTRO_SIM_PLAN = {
  poesie: [
    'la construction lyrique du « je » et l\'expression des émotions',
    'le travail formel du poème (versification, effets sonores, figures)',
    'la portée symbolique du texte et son effet sur le lecteur',
  ],
  narratif: [
    'la construction du récit (point de vue, temporalité, rythme)',
    'la caractérisation et l\'univers fictionnel',
    'le projet de l\'auteur et le registre dominant',
  ],
  theatre: [
    'la dramaturgie et les enjeux de la scène',
    'la langue théâtrale (dialogues, figures, registres)',
    'la dimension spectaculaire (didascalies, double énonciation)',
  ],
  idees: [
    'l\'argumentation et la visée persuasive',
    'les procédés stylistiques au service de la démonstration',
    'l\'engagement de l\'auteur et la portée du texte',
  ],
  default: [
    'les procédés qui construisent le sens',
    'l\'effet produit sur le lecteur ou le spectateur',
    'la cohérence du projet d\'écriture dans l\'extrait',
  ],
};

let _introSimIndex = null;

function introSimNorm(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

/** Séparateur type sujet de bac entre incipit et explicit */
function introSimPassageEllipsis() {
  return ' … ';
}

function introSimPassageHasEllipsis(texte) {
  return /\s[…\.]{3}\s|\s\.\.\.\s/u.test(String(texte || ''));
}

/** Découpe en phrases (prose) */
function introSimSplitSentences(texte) {
  const flat = (texte || '').replace(/\s+/g, ' ').trim();
  if (!flat) return [];
  const parts = flat.match(/[^.!?…]+[.!?…]+|[^.!?…]+$/g);
  return (parts || [flat]).map(s => s.trim()).filter(Boolean);
}

/** Format bac : première phrase (ou vers) … dernière phrase */
function introSimPassageFirstLast(texte) {
  const raw = (texte || '').trim();
  if (!raw) return '';
  if (introSimPassageHasEllipsis(raw)) {
    return raw.replace(/\s\.\.\.\s/g, introSimPassageEllipsis()).replace(/\s\.{3,}\s/g, introSimPassageEllipsis());
  }
  const lines = introSimTextLines(raw);
  if (lines.length >= 2) {
    const first = lines[0];
    const last = lines[lines.length - 1];
    if (introSimNorm(first) === introSimNorm(last)) return first;
    return first + introSimPassageEllipsis() + last;
  }
  const parts = introSimSplitSentences(raw);
  if (parts.length <= 1) return raw;
  const first = parts[0];
  const last = parts[parts.length - 1];
  if (introSimNorm(first) === introSimNorm(last)) return first;
  return first + introSimPassageEllipsis() + last;
}

/** Incipit + explicit pour recherche / matching */
function introSimPassageAnchors(texte) {
  const raw = (texte || '').trim();
  if (!raw) return { head: '', tail: '' };
  if (introSimPassageHasEllipsis(raw)) {
    const chunks = raw.split(/\s*[…\.]{3}\s*|\s\.\.\.\s/u).map(s => s.trim()).filter(Boolean);
    if (chunks.length >= 2) {
      return { head: introSimNorm(chunks[0]), tail: introSimNorm(chunks[chunks.length - 1]) };
    }
  }
  const parts = introSimSplitSentences(raw);
  if (parts.length >= 2) {
    return { head: introSimNorm(parts[0]), tail: introSimNorm(parts[parts.length - 1]) };
  }
  const n = introSimNorm(raw);
  return { head: n, tail: '' };
}

function introSimQuoteSnippet(s) {
  const cut = (s || '').trim();
  if (!cut) return '';
  const q = cut.length > 90 ? cut.slice(0, 87) + '…' : cut;
  return q.startsWith('«') ? q : `« ${q.replace(/^["«]|["»]$/g, '')} »`;
}

/** Titre court ou extrait collé (texte intégral ou première … dernière phrase) */
function introSimIsExcerptText(raw) {
  const t = (raw || '').trim();
  if (!t) return false;
  if (introSimPassageHasEllipsis(t)) return true;
  if (t.includes('\n')) return true;
  if (t.length > 100) return true;
  return t.split(/\s+/).filter(Boolean).length >= 18;
}

function introSimParsePassageInput(raw) {
  const texte = (raw || '').trim();
  if (!texte) return { label: '', texte: '', isExcerpt: false };
  const isExcerpt = introSimIsExcerptText(texte);
  return { label: isExcerpt ? '' : texte, texte, isExcerpt };
}

function introSimPassageSearchOpts(passage, opts) {
  opts = opts || {};
  const parsed = introSimParsePassageInput(passage);
  if (parsed.isExcerpt) opts = { ...opts, userExcerpt: parsed.texte };
  return { parsed, opts };
}

function introSimScoreExcerptMatch(entry, excerptNorm) {
  if (!excerptNorm || excerptNorm.length < 20) return 0;
  const hay = entry.textSnippet || entry.search || '';
  if (!hay || hay.length < 15) return 0;
  const head = excerptNorm.slice(0, 140);
  if (head.length >= 25 && hay.includes(head.slice(0, Math.min(80, head.length)))) return 58;
  const words = [...new Set(excerptNorm.split(' ').filter(w => w.length >= 4))].slice(0, 28);
  if (!words.length) return 0;
  const hits = words.filter(w => hay.includes(w)).length;
  const ratio = hits / words.length;
  if (ratio >= 0.4) return Math.min(52, Math.round(ratio * 55));
  if (hits >= 5) return Math.min(42, hits * 5);
  return 0;
}

function introSimScoreAnchorMatch(excerptAnchors, gtTextNorm, gtAnchors) {
  let score = 0;
  const { head: eh, tail: et } = excerptAnchors;
  const { head: gh, tail: gt } = gtAnchors;
  if (eh.length >= 18) {
    if (gh && (gh.includes(eh.slice(0, Math.min(50, eh.length))) || eh.includes(gh.slice(0, 40)))) score += 42;
    else if (gtTextNorm.includes(eh.slice(0, Math.min(60, eh.length)))) score += 38;
  }
  if (et && et.length >= 12 && eh !== et) {
    if (gt && (gt.includes(et.slice(0, Math.min(45, et.length))) || et.includes(gt.slice(0, 35)))) score += 38;
    else if (gtTextNorm.includes(et.slice(0, Math.min(55, et.length)))) score += 32;
  }
  if (eh && gh && eh.slice(0, 30) === gh.slice(0, 30)) score += 20;
  if (et && gt && et.slice(0, 25) === gt.slice(0, 25)) score += 18;
  return score;
}

/** GT analysable à partir d'un extrait collé (texte intégral ou première … dernière phrase) */
function introSimFindGtextByExcerpt(texte) {
  const raw = (texte || '').trim();
  if (raw.length < 24) return null;
  const texts = typeof getAllGtexts === 'function'
    ? getAllGtexts()
    : (typeof GRANDS_TEXTES !== 'undefined' ? GRANDS_TEXTES : []);
  if (!texts.length) return null;
  const excerptNorm = introSimNorm(raw);
  const excerptAnchors = introSimPassageAnchors(raw);
  const head = excerptNorm.slice(0, 160);
  let best = null;
  let bestScore = 0;
  texts.forEach(t => {
    if (!t?.id || !/^GT-\d+$/.test(t.id) || !t.texte || !t.attendus?.length) return;
    const tn = introSimNorm(t.texte);
    const gtAnchors = introSimPassageAnchors(t.texte);
    let score = introSimScoreAnchorMatch(excerptAnchors, tn, gtAnchors);
    if (head.length >= 40 && tn.includes(head.slice(0, Math.min(90, head.length)))) score += 55;
    else if (head.length >= 22 && tn.includes(head.slice(0, 36))) score += 40;
    const words = [...new Set(excerptNorm.split(' ').filter(w => w.length >= 4))].slice(0, 32);
    if (words.length) {
      const hits = words.filter(w => tn.includes(w)).length;
      score += Math.round((hits / words.length) * 40);
    }
    if (t.attendus.length >= 4) score += 6;
    else if (t.attendus.length >= 3) score += 3;
    if (parseInt(t.id.slice(3), 10) <= 260) score += 2;
    const minScore = introSimPassageHasEllipsis(raw) ? 42 : 48;
    if (score > bestScore && score >= minScore) {
      bestScore = score;
      best = t;
    }
  });
  return best;
}

function introSimEnrichEntryFromExcerpt(entry, texte, auteur, oeuvre, opts) {
  if (!texte || entry?.gtextId) return entry;
  const found = introSimFindGtextByExcerpt(texte);
  if (!found) return entry;
  const built = introSimBuildFromText(found, auteur || found.auteur, oeuvre || found.oeuvre, { ...opts, userExcerpt: texte });
  return {
    ...built,
    id: entry?.id || found.id,
    gtextId: found.id,
    prob: entry?.prob ?? built.prob,
    search: entry?.search || built.search,
    textSnippet: entry?.textSnippet || introSimNorm((found.texte || '').slice(0, 900)),
    indexOnly: false,
    fallback: false,
  };
}

function introSimExtractYear(...parts) {
  for (const p of parts) {
    const pub = String(p || '').match(/\((\d{4})\)/);
    if (pub) return pub[1];
  }
  for (const p of parts) {
    const s = String(p || '');
    if (/\d{4}\s*[–-]\s*\d{4}/.test(s)) continue;
    const m = s.match(/\b(1[6-9]\d{2}|20\d{2})\b/);
    if (m) return m[1];
  }
  return '';
}

function introSimDetectEra(year, mouvement, genre) {
  const y = parseInt(year, 10);
  const m = introSimNorm(mouvement + ' ' + genre);
  if (/contempor|québéc|xxie/.test(m)) return 'contemporain';
  if (y >= 2000 || (!y && /contempor/.test(m))) return 'contemporain';
  if (y >= 1900 || /surréal|existential|absurde|nouveau roman/.test(m)) return 'moderne';
  if (/natural|zola|realis|flaubert|maupassant|balzac|stendhal/.test(m)) return 'realisme';
  if (y >= 1800 && y < 1880 || /romant|hugo|lamartine|musset|vigny/.test(m)) return 'romantisme';
  if (y >= 1680 && y < 1780 || /lumière|voltaire|diderot|marivaux|beaumarchais/.test(m)) return 'lumieres';
  if (y >= 1600 && y < 1680 || /classic|corneille|racine|molière|molier|prévost|fenelon/.test(m)) return 'classicisme';
  if (y >= 1780 && y < 1900) return 'realisme';
  if (y >= 1500 && y < 1600) return 'classicisme';
  return 'romantisme';
}

function introSimFonction(genre) {
  const g = introSimNorm(genre);
  if (/theatre|trag|comed|drame|piece/.test(g)) return 'dramaturge';
  if (/poes|poeme|sonnet|fable|eleg|lyriq|vers/.test(g)) return 'poète';
  if (/roman|nouvel|conte|recit|epist/.test(g)) return 'romancier';
  if (/idees|essai|philos|pamph|discours/.test(g)) return 'philosophe et écrivain';
  return 'écrivain';
}

function introSimGenreKind(genre) {
  const g = introSimNorm(genre);
  if (/theatre|trag|comed|drame|piece/.test(g)) return 'theatre';
  if (/poes|poeme|sonnet|fable|eleg|lyriq|vers/.test(g)) return 'poesie';
  if (/idees|essai|philos|pamph|discours|conte philo/.test(g)) return 'idees';
  if (/roman|nouvel|conte|recit|epist/.test(g)) return 'narratif';
  return 'default';
}

function introSimRegistre(genre, contexte, attendus) {
  const c = introSimNorm(contexte + ' ' + genre);
  if (/comique|satir|iron|fable/.test(c)) return 'comique et satirique';
  if (/trag|fatal|passion coup|mort|deuil|douleur/.test(c)) return 'tragique et pathétique';
  if (/lyriq|melancol|amour|souvenir|eleg/.test(c)) return 'lyrique et mélancolique';
  if (/epique|heros|honneur|devoir|patriot/.test(c)) return 'épique et héroïque';
  if (/fantast|peur|folie|horreur/.test(c)) return 'fantastique ou angoissant';
  if (/philos|argument|denonc|engag/.test(c)) return 'polémique et argumentatif';
  if (attendus?.length) {
    const p = attendus[0].procede || '';
    if (/registre/i.test(p)) {
      const r = p.replace(/^registre\s+/i, '').toLowerCase();
      if (r) return r;
    }
  }
  return 'varié, mêlant description et subjectivité';
}

function introSimRegistreShort(registre) {
  return (registre || 'varié').split(',')[0].trim().replace(/^et\s+/i, '');
}

const INTRO_SIM_THEME_PATTERNS = [
  [/amour|passion|desir|coeur|baiser|tendre|jalous/, 'l\'amour et le conflit des sentiments'],
  [/mort|deuil|tombe|funer|necro|sepul/, 'la mort et le deuil'],
  [/temps|souvenir|passe|autrefois|melancol|automne|veill|oubli/, 'la mélancolie du temps qui passe'],
  [/nature|paysage|saison|foret|mer|mont|campagn/, 'le rapport à la nature'],
  [/libert|revol|injust|misere|pauv|oppress|exploit/, 'la dénonciation sociale et l\'injustice'],
  [/heros|honneur|devoir|patriot|guerre|combat/, 'le conflit entre passion et devoir'],
  [/folie|reve|song|halluc|fantas|absurd/, 'le trouble de la perception et du réel'],
  [/ident|memoire|exil|enfant|origine/, 'l\'identité et la mémoire'],
  [/colere|haine|venge|violence|cruaut/, 'la colère et la violence'],
  [/beaut|laideur|art|creer|poet/, 'le rapport à la beauté et à l\'art'],
  [/silence|parol|lang|discours|verbe/, 'le pouvoir de la parole et du silence'],
  [/famill|pere|mere|filial|frater/, 'les liens familiaux'],
];

function introSimThemeNormalize(raw) {
  let t = (raw || '').trim().replace(/\.$/, '').replace(/\s+/g, ' ');
  if (!t) return '';
  if (t.length > 65) t = t.split(/[,;]/)[0].trim();
  if (t.length > 65) t = t.slice(0, 62).trim() + '…';
  if (!/^(la |le |l'|les |un |une |des |du |de la |de l'|l')/i.test(t)) {
    t = t.charAt(0).toLowerCase() + t.slice(1);
  }
  return t;
}

function introSimThemeFromInterp(interp) {
  const m = interp.match(
    /(?:traduis(?:ent|e)|sugg(?:ère|er|ère)|évoqu(?:e|ent)|illustr(?:e|ent)|renfor(?:ce|cent)|exprim(?:e|ent)|autour de|concern(?:e|ant)|insist(?:e|ent) sur)\s+([^,.;]{6,50})/i,
  );
  if (!m) return '';
  let t = m[1].trim().replace(/\s+(dans|par|sur|au|en|à)\s+[^,.;]+$/i, '');
  return introSimThemeNormalize(t);
}

function introSimThemeFromContext(contexte) {
  let s = (contexte || '').trim().split(/[.—]/)[0].trim();
  s = s.replace(/^(dans ce passage|cet extrait|extrait|scène|poème|texte|passage)\s*,?\s*/i, '');
  if (s.length < 12 || s.length > 55) return '';
  if (/^(il|elle|on|nous|ce|cette|l'auteur)/i.test(s)) return '';
  return introSimThemeNormalize(s.charAt(0).toLowerCase() + s.slice(1));
}

function introSimThemeShort(contexte, titre, attendus, genreKind) {
  const hay = introSimNorm((contexte || '') + ' ' + (titre || ''));
  for (const [re, label] of INTRO_SIM_THEME_PATTERNS) {
    if (re.test(hay)) return label;
  }
  if (attendus?.length) {
    for (const a of attendus.slice(0, 4)) {
      const cleaned = introSimCleanInterp(a.interpretation);
      const fromInterp = introSimThemeFromInterp(cleaned);
      if (fromInterp) return fromInterp;
    }
  }
  const fromCtx = introSimThemeFromContext(contexte);
  if (fromCtx) return fromCtx;
  const defaults = {
    poesie: 'la subjectivité et l\'expression des émotions',
    theatre: 'la tension dramatique',
    narratif: 'la construction du récit',
    idees: 'l\'argumentation et la persuasion',
  };
  return defaults[genreKind] || 'le sens du passage';
}

function introSimTheme(contexte, titre, attendus, genreKind) {
  return introSimThemeShort(contexte, titre, attendus, genreKind || 'default');
}

function introSimBuildProblematiquePack({ genreKind, themeShort, registre, genreLbl, procedesCles }) {
  const reg = introSimRegistreShort(registre);
  const proc = (procedesCles?.[0] || '').trim();
  const procHint = proc && proc.length < 42 ? `, notamment par ${proc.toLowerCase()}` : '';

  if (genreKind === 'poesie') {
    return {
      main: `À travers l'étude de ce passage, nous nous demanderons en quoi les procédés poétiques${procHint} permettent de suggérer ${themeShort}.`,
      alts: [
        `Comment le poète exprime-t-il ${themeShort} par le choix des images et du rythme ?`,
        `En quoi le registre ${reg} sert-il ici à faire ressortir ${themeShort} ?`,
        `Dans quelle mesure la musicalité du poème renforce-t-elle ${themeShort} ?`,
      ],
    };
  }
  if (genreKind === 'theatre') {
    return {
      main: `À travers l'étude de ce passage, nous nous demanderons comment la mise en scène et la langue théâtrale mettent en jeu ${themeShort}.`,
      alts: [
        `Comment le dramaturge crée-t-il la tension autour de ${themeShort} ?`,
        `En quoi le registre ${reg} renforce-t-il ${themeShort} ?`,
        `Dans quelle mesure ce ${genreLbl || 'texte théâtral'} engage-t-il le spectateur dans ${themeShort} ?`,
      ],
    };
  }
  if (genreKind === 'narratif') {
    return {
      main: `À travers l'étude de ce passage, nous nous demanderons comment le narrateur construit ${themeShort}.`,
      alts: [
        `En quoi les choix de narration orientent-ils la perception de ${themeShort} ?`,
        `Comment la description et le point de vue contribuent-ils à ${themeShort} ?`,
        `Dans quelle mesure cet extrait narratif invite-t-il à ressentir ${themeShort} ?`,
      ],
    };
  }
  if (genreKind === 'idees') {
    return {
      main: `À travers l'étude de ce passage, nous nous demanderons comment l'auteur articule son argumentation autour de ${themeShort}.`,
      alts: [
        `En quoi les procédés argumentatifs${procHint} éclairent ${themeShort} ?`,
        `Comment l'écrivain cherche-t-il à faire comprendre ${themeShort} au lecteur ?`,
        `Dans quelle mesure la visée persuasive passe-t-elle par ${themeShort} ?`,
      ],
    };
  }
  return {
    main: `À travers l'étude de ce passage, nous nous demanderons en quoi l'écriture de l'auteur donne sens à ${themeShort}.`,
    alts: [
      `Comment l'auteur compose-t-il son texte pour faire ressortir ${themeShort} ?`,
      `En quoi les procédés employés${procHint} éclairent ${themeShort} ?`,
      `Dans quelle mesure le registre ${reg} participe-t-il de ${themeShort} ?`,
    ],
  };
}

function introSimResolveAuthor(auteurInput) {
  const q = introSimNorm(auteurInput);
  if (!q) return { nom: auteurInput.trim(), dates: '', mouvement: '', intro: [] };
  if (typeof AUTEURS_DATA !== 'undefined') {
    const hit = AUTEURS_DATA.find(a => {
      const n = introSimNorm(a.nom);
      const last = n.split(' ').pop();
      return n.includes(q) || q.includes(last) || last === q || q.split(' ').pop() === last;
    });
    if (hit) return hit;
  }
  return { nom: auteurInput.trim(), dates: '', mouvement: '', intro: [] };
}

function introSimBuildAmorce(era) {
  const t = INTRO_SIM_AMORCE[era] || INTRO_SIM_AMORCE.romantisme;
  return `Depuis toujours, la littérature permet aux auteurs d'exprimer leur vision du monde et de questionner la société dans laquelle ils vivent. Si le ${t.prev} était marqué par ${t.prevCar}, le ${t.siecle} siècle voit naître ${t.curCar}.`;
}

function introSimGenreLabel(genre) {
  const g = (genre || '').trim();
  if (!g) return 'texte littéraire';
  return g.charAt(0).toLowerCase() + g.slice(1);
}

function introSimSituationLine(contexte, oeuvreBrief) {
  if (oeuvreBrief) {
    const after = oeuvreBrief.includes(':') ? oeuvreBrief.split(':').slice(1).join(':').trim() : oeuvreBrief;
    if (after.length > 18) {
      const s = after.split(/[.—]/)[0].trim();
      return s.charAt(0).toLowerCase() + s.slice(1);
    }
  }
  if (contexte) {
    const s = contexte.split(/[.—]/)[0].trim();
    if (s.length > 12) return s.charAt(0).toLowerCase() + s.slice(1);
  }
  return '';
}

function introSimProcedesCles(attendus) {
  if (!attendus?.length) return [];
  const seen = new Set();
  const out = [];
  attendus.forEach(a => {
    const p = (a.procede || '').trim();
    if (!p || seen.has(p)) return;
    seen.add(p);
    out.push(p);
  });
  return out.slice(0, 5);
}

function introSimMovementLabel(author, year) {
  const id = author.id || '';
  const y = parseInt(year, 10) || 0;
  if (id === 'rimbaud' || /rimbaud/i.test(author.nom || '')) {
    if (y && y <= 1875) return '__RIMBAUD_MAUDIT__';
    return 'symbolisme';
  }
  if (id === 'verlaine' || /verlaine/i.test(author.nom || '')) {
    return y && y < 1880 ? 'romantisme tardif' : 'symbolisme';
  }
  if (id === 'baudelaire' || /baudelaire/i.test(author.nom || '')) {
    return 'modernité poétique';
  }
  if (author.mouvement) return author.mouvement.split('—')[0].trim().toLowerCase();
  return '';
}

function introSimExcerptPreview(texte) {
  const t = (texte || '').trim();
  if (!t) return '';
  if (introSimPassageHasEllipsis(t)) {
    const chunks = t.split(/\s*[…\.]{3}\s*|\s\.\.\.\s/u).map(s => s.trim()).filter(Boolean);
    if (chunks.length >= 2) {
      const a = introSimQuoteSnippet(chunks[0]);
      const b = introSimQuoteSnippet(chunks[chunks.length - 1]);
      if (introSimNorm(chunks[0]) !== introSimNorm(chunks[chunks.length - 1])) {
        return `${a} et se clôt sur ${b}`;
      }
    }
  }
  const fl = introSimPassageFirstLast(t);
  if (fl !== t && introSimPassageHasEllipsis(fl)) return introSimExcerptPreview(fl);
  const line = t.split('\n').map(l => l.trim()).find(l => l.length > 8) || t;
  return introSimQuoteSnippet(line.length > 120 ? line.slice(0, 117) + '…' : line);
}

function introSimExtraitPreviewSuffix(excerptPreview) {
  if (!excerptPreview) return '';
  if (excerptPreview.includes(' et se clôt sur ')) {
    return ` Le passage s'ouvre sur ${excerptPreview}.`;
  }
  return ` Le passage s'ouvre notamment sur ${excerptPreview}.`;
}

function introSimBuildFromText(t, auteurInput, oeuvreInput, opts) {
  opts = opts || {};
  const author = introSimResolveAuthor(auteurInput || t.auteur);
  const auteurNom = author.nom || t.auteur;
  const oeuvreBrief = typeof GTEXT_OEUVRE_BY_ID !== 'undefined' ? GTEXT_OEUVRE_BY_ID[t.id] : '';
  const year = introSimExtractYear(t.oeuvre, oeuvreInput, oeuvreBrief);
  const oeuvreLabel = (oeuvreInput || '').trim() || t.oeuvre || t.titre;
  const era = introSimDetectEra(year, author.mouvement, t.genre);
  const fonction = introSimFonction(t.genre);
  const genreKind = introSimGenreKind(t.genre);
  const registre = opts.registreOverride || introSimRegistre(t.genre, t.contexte, t.attendus);
  const genreLbl = introSimGenreLabel(t.genre);
  const procedesCles = introSimProcedesCles(t.attendus);
  const plan = INTRO_SIM_PLAN[genreKind] || INTRO_SIM_PLAN.default;
  const theme = opts.themeOverride
    ? introSimThemeNormalize(opts.themeOverride)
    : introSimThemeShort(t.contexte, t.titre, t.attendus, genreKind);
  const probPack = introSimBuildProblematiquePack({
    genreKind,
    themeShort: theme,
    registre,
    genreLbl,
    procedesCles,
  });
  const datesStr = author.dates ? ` (${author.dates})` : '';
  const userExcerpt = opts.userExcerpt || '';
  const passageLabel = userExcerpt
    ? ' cet extrait'
    : (t.titre ? ` l'extrait intitulé « ${t.titre} »` : ' cet extrait');
  const situation = introSimSituationLine(t.contexte, oeuvreBrief);
  const excerptPreview = introSimExcerptPreview(userExcerpt || t.texte);

  const oeuvreClean = oeuvreLabel.replace(/\s*\(\d{4}\)\s*$/, '').replace(/^«|»$/g, '').trim();
  const titreInOeuvre = t.titre && introSimNorm(oeuvreClean).includes(introSimNorm(t.titre));
  const oeuvreIsPoem = genreKind === 'poesie' && t.titre && introSimNorm(oeuvreClean) === introSimNorm(t.titre);
  let auteurPhrase = `C'est dans ce contexte que s'inscrit ${auteurNom}${datesStr}, ${fonction} majeur`;
  const movLbl = introSimMovementLabel(author, year);
  if (movLbl === '__RIMBAUD_MAUDIT__') {
    auteurPhrase += `, figure emblématique du poète maudit et de la modernité poétique`;
  } else if (movLbl) auteurPhrase += ` du ${movLbl}`;
  else auteurPhrase += ' de cette période';
  if (year) {
    if (oeuvreIsPoem) {
      auteurPhrase += `. Il compose en ${year} le poème « ${t.titre} »`;
    } else {
      auteurPhrase += `. Il publie en ${year} « ${oeuvreClean} »`;
      if (t.titre && !titreInOeuvre) auteurPhrase += `, dont est tiré « ${t.titre} »`;
    }
  } else {
    auteurPhrase += `. Il compose « ${oeuvreClean} »`;
    if (t.titre && !titreInOeuvre) auteurPhrase += `, dont est tiré « ${t.titre} »`;
  }
  auteurPhrase += '.';

  let extraitPhrase = `Dans${passageLabel}, ${genreLbl} extrait de « ${oeuvreClean} »`;
  if (situation) extraitPhrase += `, ${situation}`;
  extraitPhrase += `, l'auteur traite de ${theme} en adoptant un registre ${registre}.`;
  extraitPhrase += introSimExtraitPreviewSuffix(excerptPreview);

  const temps = {
    amorce: introSimBuildAmorce(era),
    auteur: auteurPhrase,
    extrait: extraitPhrase,
    problematique: probPack.main,
    plan: `Pour répondre à cette question, nous analyserons dans un premier temps ${plan[0]}, avant d'étudier ${plan[1]}, puis ${plan[2]}.`,
  };

  const problematiqueAlt = probPack.alts;

  return {
    id: t.id,
    gtextId: t.id,
    auteur: t.auteur,
    auteurNom,
    oeuvre: t.oeuvre,
    titre: t.titre,
    genre: t.genre,
    year,
    era,
    registre,
    theme,
    procedesCles,
    excerptPreview,
    authorTips: author.intro || [],
    authorDev: author.dev || '',
    oeuvreBrief: oeuvreBrief || '',
    temps,
    problematiqueAlt,
    full: Object.values(temps).join('\n\n'),
    contexte: t.contexte,
    genreKind,
  };
}

function introSimBuildFallback(auteur, oeuvre, passage, opts) {
  opts = opts || {};
  const author = introSimResolveAuthor(auteur);
  const auteurNom = author.nom || auteur.trim();
  if (!auteurNom && !opts.userExcerpt) return null;
  const displayAuteur = auteurNom || 'L\'auteur';
  const year = introSimExtractYear(oeuvre);
  const era = introSimDetectEra(year, author.mouvement, author.genre || '');
  const fonction = introSimFonction(author.genre || oeuvre);
  const genreKind = introSimGenreKind(author.genre || '');
  const genreLbl = introSimGenreLabel(author.genre || '');
  const plan = INTRO_SIM_PLAN[genreKind] || INTRO_SIM_PLAN.default;
  const theme = opts.themeOverride
    ? introSimThemeNormalize(opts.themeOverride)
    : introSimThemeShort(author.dev || '', passage || oeuvre, null, genreKind);
  const registre = opts.registreOverride || 'varié';
  const probPack = introSimBuildProblematiquePack({
    genreKind,
    themeShort: theme,
    registre,
    genreLbl,
    procedesCles: [],
  });
  const oeuvreClean = (oeuvre || passage || 'l\'œuvre').replace(/\(\d{4}\)/, '').trim();
  const datesStr = author.dates ? ` (${author.dates})` : '';
  const phraseType = author.intro?.find(l => /^Phrase type/i.test(l));

  let auteurPhrase = phraseType
    ? phraseType.replace(/^Phrase type\s*:\s*/i, '').replace(/^«|»$/g, '').trim()
    : `C'est dans ce contexte que s'inscrit ${displayAuteur}${datesStr}, ${fonction} majeur de cette période.`;
  if (!phraseType && oeuvreClean) {
    auteurPhrase += year
      ? ` Il publie en ${year} « ${oeuvreClean} ».`
      : ` Son œuvre majeure est « ${oeuvreClean} ».`;
  }

  const userExcerpt = opts.userExcerpt || '';
  const shortPassage = userExcerpt ? '' : (passage || '').trim();
  const passageLbl = shortPassage ? ` l'extrait « ${shortPassage.slice(0, 80)}${shortPassage.length > 80 ? '…' : ''} »` : ' cet extrait';
  let extraitPhrase = `Dans${passageLbl}${oeuvreClean ? `, tiré de « ${oeuvreClean} »` : ''}, l'auteur traite de ${theme} en adoptant un registre ${registre}.`;
  const excerptPreview = userExcerpt ? introSimExcerptPreview(userExcerpt) : '';
  extraitPhrase += introSimExtraitPreviewSuffix(excerptPreview);
  const temps = {
    amorce: introSimBuildAmorce(era),
    auteur: auteurPhrase,
    extrait: extraitPhrase,
    problematique: probPack.main,
    plan: `Pour répondre à cette question, nous analyserons dans un premier temps ${plan[0]}, avant d'étudier ${plan[1]}, puis ${plan[2]}.`,
  };

  return {
    id: 'FALLBACK',
    auteur: auteur || displayAuteur,
    auteurNom: displayAuteur,
    oeuvre: oeuvreClean,
    titre: passage || '',
    genre: author.genre || '',
    year,
    procedesCles: [],
    authorTips: author.intro || [],
    authorDev: author.dev || '',
    temps,
    problematiqueAlt: probPack.alts,
    full: Object.values(temps).join('\n\n'),
    contexte: author.dev ? author.dev.slice(0, 180) + '…' : '',
    fallback: true,
    registre,
    theme,
    genreKind,
  };
}

/** Lignes non vides du texte (numérotées à partir de 1) */
function introSimTextLines(texte) {
  const out = [];
  (texte || '').split('\n').forEach(l => {
    const t = l.trim();
    if (t.length > 1) out.push(t);
  });
  return out;
}

function introSimCitationFromLines(lines, startLine) {
  if (!lines?.length) return '« … »';
  const slice = lines.slice(0, 3).join(' / ');
  const cut = slice.length > 95 ? slice.slice(0, 92) + '…' : slice;
  const end = startLine + lines.length - 1;
  const ref = end > startLine ? ` (v. ${startLine}–${end})` : ` (v. ${startLine})`;
  return `« ${cut.replace(/^["«]|["»]$/g, '')} »${ref}`;
}

function introSimCleanInterp(interp) {
  let s = (interp || '').trim();
  if (!s) return '';
  s = s.replace(
    /^(Anaphore|Comparaison(?:\s+(?:avec|explicite)[^:]{0,50})?|Métaphore|Personnification|Assonance|Enjambement|Registre[^:]*|Champ lexical|Hyperbole|Allitération|Versification|Antithèse|Dialogue[^:]*|Accumulation|Gradation|Ironie|Apostrophe|Synechdoque|Métonymie|Sonnet|Didascalies?)\s*:\s*/i,
    ''
  );
  s = s.replace(/^Citation\s*:[^.]+\.\s*/i, '');
  return s.trim();
}

function introSimIdeaFromInterp(interp) {
  const cleaned = introSimCleanInterp(interp) || (interp || '').trim();
  const s = cleaned.split(/(?<=[.!?])\s+/)[0]?.trim() || cleaned;
  if (s.length >= 24) {
    return s.charAt(0).toUpperCase() + s.slice(1).replace(/[.!?]$/, '') + '.';
  }
  return 'Le passage construit progressivement son effet sur le lecteur.';
}

function introSimProcLabel(proc) {
  const raw = (proc || 'procédé').trim();
  const p = raw.toLowerCase();
  if (/^registre/.test(p)) return `le ${p}`;
  if (/^champ lexical/.test(p)) return `le ${p}`;
  if (/^dialogue/.test(p)) return `le ${p}`;
  if (/^versification/.test(p)) return `la versification`;
  if (/^enjambement/.test(p)) return `l'enjambement`;
  if (/^(métaphore|personnification|comparaison|hyperbole|anaphore|assonance|allitération|antithèse|ironie|allégorie|allegorie|synecdoque|métonymie|antanaclase|accumulation|gradation)$/.test(p)) {
    return `la ${p}`;
  }
  if (/^([aeiouàâéèêëîïôùûü])/.test(p)) return `l'${p}`;
  if (/tion$|ade$|ance$|esse$|ure$|ie$|èse$/.test(p)) return `la ${p}`;
  return `le ${p}`;
}

function introSimBuildIpciParagraph(att, auteurNom) {
  const author = auteurNom || 'L\'auteur';
  const proc = introSimProcLabel(att.procede);
  const cite = att.citation ? ` (${att.citation})` : '';
  let body = introSimCleanInterp(att.interpretation);
  if (!body) {
    body = introSimGenericInterp(att.procede, null, null).replace(/[.!?]$/, '');
  }
  if (!body) body = 'renforce l\'impact du passage sur le lecteur';
  if (!/[.!?]$/.test(body)) body += '.';
  const start = body.charAt(0).toLowerCase() + body.slice(1);
  return `${author} mobilise ${proc}${cite} : ${start}`;
}

function introSimGuessProcede(segment, genre) {
  const s = introSimNorm(segment);
  const g = introSimNorm(genre);
  if (/^je\b|mon coeur|mon ame|je pleure/.test(s)) return 'Registre lyrique';
  if (/\bcomme\b|pareil|tel/.test(s)) return 'Comparaison';
  if (/(\b\w{4,}\b).*\1/.test(segment)) return 'Répétition / anaphore';
  if (/[!?]/.test(segment) && /[!?].*[!?]/.test(segment)) return 'Exclamation / interrogation';
  if (/ne pas|jamais|rien|sans|nul/.test(s)) return 'Négation';
  if (/théâtre|trag|comed/.test(g)) return 'Dialogue théâtral';
  if (/poes|poeme|vers/.test(g)) return 'Versification';
  if (segment.split(/\s+/).length >= 18) return 'Phrase longue / accumulation';
  return 'Champ lexical';
}

function introSimGenericInterp(procede, theme, registre) {
  const p = (procede || 'procédé').toLowerCase();
  const th = theme || 'l\'enjeu du passage';
  const reg = (registre || 'littéraire').split(',')[0];
  if (/asson|allit|rythm|vers|enjam|alexandr|octos/.test(p)) {
    return `crée un rythme et une musicalité qui traduisent ${th} dans un registre ${reg}.`;
  }
  if (/compar|metaph|personnif|hyperb|analog/.test(p)) {
    return `oriente la représentation et donne une dimension symbolique à ${th}.`;
  }
  if (/lyri|je po|subjectiv/.test(p)) {
    return `expose la subjectivité du locuteur et engage le lecteur dans une lecture ${reg}.`;
  }
  if (/champ lexical|lexique|vocab/.test(p)) {
    return `construit un réseau de mots cohérent autour de ${th}.`;
  }
  if (/dialog|didascal|tirade|stichom/.test(p)) {
    return `structure la scène et intensifie l'effet ${reg} sur le spectateur.`;
  }
  return `contribue à traduire ${th} et à produire un effet ${reg} sur le lecteur.`;
}

function introSimInferAttendusFromText(texte, entry) {
  const lines = introSimTextLines(texte);
  if (!lines.length) return [];
  const attendus = [];
  const used = new Set();

  (entry.procedesCles || []).forEach((p, i) => {
    const chunk = lines.slice(i * 2, i * 2 + 3);
    if (!chunk.length) return;
    attendus.push({
      procede: p,
      citation: introSimCitationFromLines(chunk, i * 2 + 1),
      interpretation: introSimGenericInterp(p, entry.theme, entry.registre),
    });
    used.add(i);
  });

  const chunkSize = Math.max(2, Math.ceil(lines.length / 9));
  for (let i = 0; i < lines.length && attendus.length < 14; i += chunkSize) {
    const chunk = lines.slice(i, i + chunkSize);
    const seg = chunk.join(' ');
    const proc = introSimGuessProcede(seg, entry.genre);
    const key = proc + '|' + i;
    if (used.has(key)) continue;
    attendus.push({
      procede: proc,
      citation: introSimCitationFromLines(chunk, i + 1),
      interpretation: introSimGenericInterp(proc, entry.theme, entry.registre),
    });
  }
  return attendus;
}

function introSimResolveAttendus(entry, texte) {
  let raw = entry.gtextId ? introSimGetRawText(entry.gtextId) : null;
  if ((!raw?.attendus?.length) && texte) {
    const found = introSimFindGtextByExcerpt(texte);
    if (found) raw = found;
  }
  const corpus = raw?.attendus?.length ? raw.attendus : [];
  if (corpus.length && texte) {
    const tn = introSimNorm(texte);
    const matched = corpus.filter(a => {
      const cite = introSimNorm((a.citation || '').replace(/[«»"]/g, ''));
      if (cite.length >= 12 && tn.includes(cite.slice(0, Math.min(40, cite.length)))) return true;
      return (a.keywords || []).some(k => k.length >= 4 && tn.includes(introSimNorm(k)));
    });
    if (matched.length >= 3) return matched;
  }
  if (corpus.length) return corpus;
  return introSimInferAttendusFromText(texte, entry);
}

function introSimPartitionAttendus(attendus, n) {
  const groups = Array.from({ length: n }, () => []);
  attendus.forEach((a, i) => groups[i % n].push(a));
  return groups;
}

function introSimPartTitle(i, axis) {
  const rom = ['I', 'II', 'III'][i] || String(i + 1);
  const cap = axis.charAt(0).toUpperCase() + axis.slice(1);
  return `Partie ${rom} — ${cap}`;
}

function introSimPartLead(i, axis) {
  if (i === 0) return `Dans un premier temps, nous étudierons ${axis}.`;
  if (i === 1) return `Nous examinerons ensuite ${axis}.`;
  return `Enfin, nous nous intéresserons à ${axis}.`;
}

function introSimPartTransition(prevAxis, nextAxis) {
  return `Après avoir montré ${prevAxis}, nous analysons ${nextAxis}.`;
}

function introSimBuildOuverture(entry) {
  const author = introSimResolveAuthor(entry.auteur);
  const mov = author.mouvement ? author.mouvement.split('—')[0].trim().toLowerCase() : 'cette période littéraire';
  const oeuvre = (entry.oeuvre || '').replace(/\(\d{4}\)/, '').trim();
  if (oeuvre) {
    return `Ce texte s'inscrit dans la continuité des enjeux explorés dans « ${oeuvre} » et invite à un rapprochement avec d'autres œuvres du ${mov}.`;
  }
  return `On peut rapprocher ce passage d'autres textes du ${mov}, qui mobilisent des procédés différents pour des thématiques voisines.`;
}

function introSimBuildConclusion(entry) {
  const auteur = entry.auteurNom || entry.auteur || 'l\'auteur';
  const theme = entry.theme || 'l\'enjeu central du passage';
  const procs = (entry.procedesCles || []).slice(0, 2);
  const procTxt = procs.length ? procs.join(' et ') : 'les procédés étudiés';
  const reg = (entry.registre || 'littéraire').split(',')[0];
  const bilan = `Ainsi, à travers ${procTxt}, ${auteur} traduit ${theme} et produit un effet ${reg} sur le lecteur.`;
  return `${bilan}\n\n${introSimBuildOuverture(entry)}`;
}

/** Commentaire rédigé complet : intro + 3 parties IPCI + conclusion */
function introSimBuildFullCommentary(entry, opts) {
  opts = opts || {};
  if (!entry?.temps) return null;
  const raw = entry.gtextId ? introSimGetRawText(entry.gtextId) : null;
  const texte = (opts.userExcerpt || raw?.texte || '').trim();
  const gtRaw = raw?.attendus?.length ? raw : (texte ? introSimFindGtextByExcerpt(texte) : null);
  const genreKind = entry.genreKind || introSimGenreKind(entry.genre);
  const axes = (INTRO_SIM_PLAN[genreKind] || INTRO_SIM_PLAN.default).slice(0, 3);
  const attendus = introSimResolveAttendus(entry, texte);
  const groups = introSimPartitionAttendus(attendus, axes.length);
  const auteurNom = entry.auteurNom || entry.auteur || 'L\'auteur';

  const intro = Object.values(entry.temps).join('\n\n');
  const parts = [];
  const fullBlocks = [intro];

  axes.forEach((axis, i) => {
    const paras = (groups[i] || []).map(a => introSimBuildIpciParagraph(a, auteurNom));
    if (!paras.length && texte) {
      const lines = introSimTextLines(texte);
      const chunkSize = Math.max(2, Math.ceil(lines.length / axes.length));
      const chunk = lines.slice(i * chunkSize, (i + 1) * chunkSize);
      if (chunk.length) {
        const fake = {
          procede: introSimGuessProcede(chunk.join(' '), entry.genre),
          citation: introSimCitationFromLines(chunk, i * chunkSize + 1),
          interpretation: introSimGenericInterp(null, entry.theme, entry.registre),
        };
        paras.push(introSimBuildIpciParagraph(fake, auteurNom));
      }
    }
    const lead = introSimPartLead(i, axis);
    const body = paras.length ? paras.join('\n\n') : `${auteurNom} développe ${axis} tout au long de l'extrait, en s'appuyant sur des procédés variés qui orientent la lecture.`;
    const text = `${lead}\n\n${body}`;
    const transition = i < axes.length - 1 ? introSimPartTransition(axes[i], axes[i + 1]) : '';
    parts.push({ id: `part${i + 1}`, label: introSimPartTitle(i, axis), text, transition, ipcCount: paras.length });
    fullBlocks.push(text);
    if (transition) fullBlocks.push(transition);
  });

  const conclusion = introSimBuildConclusion(entry);
  fullBlocks.push(conclusion);

  return {
    intro,
    parts,
    conclusion,
    full: fullBlocks.join('\n\n'),
    ipcCount: attendus.length,
    lineCount: introSimTextLines(texte).length,
    fromCorpus: !!(gtRaw?.attendus?.length),
  };
}

function introSimAttachCommentary(entry, opts) {
  if (!entry?.temps) return entry;
  opts = opts || {};
  if (opts.skipTemplateCommentary) return entry;
  if (opts.fullCommentary === false) return entry;
  const excerpt = opts.userExcerpt || (introSimIsExcerptText(opts.passageRaw || '') ? opts.passageRaw.trim() : '');
  const want = opts.fullCommentary
    || excerpt
    || (entry.gtextId && introSimGetRawText(entry.gtextId)?.attendus?.length);
  if (!want) return entry;
  if (excerpt && (!entry.gtextId || entry.fallback || entry.indexOnly)) {
    entry = introSimEnrichEntryFromExcerpt(entry, excerpt, entry.auteur, entry.oeuvre, opts);
  }
  if (excerpt) opts = { ...opts, userExcerpt: excerpt };
  const comm = introSimBuildFullCommentary(entry, opts);
  if (!comm?.full) return entry;
  entry.commentaire = comm;
  entry.fullComment = comm.full;
  if (entry.procedesCles?.length === 0 && comm.ipcCount) {
    entry.procedesCles = introSimProcedesCles(
      introSimResolveAttendus(entry, opts.userExcerpt || introSimGetRawText(entry.gtextId)?.texte || '')
    );
  }
  return entry;
}

function introSimEnrichEntry(entry, auteur, oeuvre, passage, opts) {
  const built = introSimRebuildEntry(entry, auteur, oeuvre, passage, opts);
  return introSimAttachCommentary(built, { ...opts, passageRaw: passage });
}

function introSimScoreEntry(entry, auteurQ, oeuvreQ, passageQ) {
  let score = 0;
  const a = introSimNorm(auteurQ);
  const o = introSimNorm(oeuvreQ);
  const parsed = introSimParsePassageInput(passageQ);
  const p = introSimNorm(parsed.label);
  const ea = introSimNorm(entry.auteur);
  const en = introSimNorm(entry.auteurNom);
  const eo = introSimNorm(entry.oeuvre);
  const et = introSimNorm(entry.titre);

  if (a) {
    if (ea === a || en === a) score += 50;
    else if (ea.includes(a) || a.includes(ea) || en.includes(a) || a.includes(en.split(' ').pop())) score += 38;
    else if (a.length >= 4 && (ea.includes(a.slice(0, 4)) || en.includes(a.slice(0, 4)))) score += 20;
  }
  if (o) {
    if (eo.includes(o) || o.includes(eo)) score += 45;
    else if (et.includes(o) || o.includes(et)) score += 40;
    else {
      const ow = o.split(' ').filter(w => w.length >= 4);
      const hits = ow.filter(w => eo.includes(w) || et.includes(w)).length;
      score += Math.min(35, hits * 12);
    }
  }
  if (p) {
    if (et.includes(p) || p.includes(et)) score += 35;
    else {
      const pw = p.split(' ').filter(w => w.length >= 3);
      const hits = pw.filter(w => et.includes(w) || (entry.search || '').includes(w)).length;
      score += Math.min(30, hits * 10);
    }
  }
  if (parsed.isExcerpt) {
    score += introSimScoreExcerptMatch(entry, introSimNorm(parsed.texte));
  }
  if (!a && !o && !p && !parsed.isExcerpt) return 0;
  if (a && o && score < 30) score = Math.max(score, 15);
  if (parsed.isExcerpt && score < 25 && (a || o)) score = Math.max(score, 18);
  if (entry.prob) score += Math.min(12, Math.round(entry.prob * 0.08));
  return score;
}

function introSimBuildIndex() {
  if (_introSimIndex) return _introSimIndex;
  const list = [];
  const gtById = new Map();
  const gtTexts = typeof getAllGtexts === 'function' ? getAllGtexts() : (typeof GRANDS_TEXTES !== 'undefined' ? GRANDS_TEXTES : []);
  gtTexts.forEach(t => { if (t?.id) gtById.set(t.id, t); });

  const sources = typeof getAllBacPassages === 'function' ? getAllBacPassages() : null;
  if (sources?.length) {
    sources.forEach(p => {
      if (!p?.auteur) return;
      const raw = p.gtextId && gtById.has(p.gtextId) ? gtById.get(p.gtextId) : {
        id: p.gtextId || p.id,
        auteur: p.auteur,
        oeuvre: p.oeuvre,
        titre: p.titre,
        genre: p.genre,
        contexte: p.contexte,
        texte: '',
        attendus: [],
      };
      const built = introSimBuildFromText(raw, p.auteur, p.oeuvre);
      const textPart = introSimPassageFirstLast(raw.texte || '');
      const textSnippet = introSimNorm(textPart);
      list.push({
        ...built,
        id: p.id,
        gtextId: p.gtextId && /^GT-\d+$/.test(p.gtextId) ? p.gtextId : null,
        prob: p.prob || 0,
        indexOnly: !p.gtextId,
        textSnippet,
        search: introSimNorm([p.id, p.gtextId, p.auteur, built.auteurNom, p.oeuvre, p.titre, p.genre, p.contexte, built.procedesCles.join(' '), textPart].join(' ')),
      });
    });
  } else {
    gtTexts.forEach(t => {
      if (!t?.auteur) return;
      const built = introSimBuildFromText(t, t.auteur, t.oeuvre);
      const textPart = (t.texte || '').slice(0, 900);
      const textSnippet = introSimNorm(textPart);
      list.push({
        ...built,
        prob: 100,
        textSnippet,
        search: introSimNorm([t.id, t.auteur, built.auteurNom, t.oeuvre, t.titre, t.genre, t.contexte, built.procedesCles.join(' '), textPart].join(' ')),
      });
    });
  }
  _introSimIndex = list;
  return list;
}

function introSimScorePct(score) {
  return Math.min(100, Math.round((score / 85) * 100));
}

function introSimGetRawText(id) {
  const gtTexts = typeof getAllGtexts === 'function' ? getAllGtexts() : (typeof GRANDS_TEXTES !== 'undefined' ? GRANDS_TEXTES : []);
  const hit = gtTexts.find(x => x.id === id);
  if (hit) return hit;
  if (typeof getAllBacPassages === 'function') {
    const p = getAllBacPassages().find(x => x.id === id || x.gtextId === id);
    if (p) {
      return gtTexts.find(x => x.id === p.gtextId) || {
        id: p.gtextId || p.id,
        auteur: p.auteur,
        oeuvre: p.oeuvre,
        titre: p.titre,
        genre: p.genre,
        contexte: p.contexte,
        texte: '',
        attendus: [],
      };
    }
  }
  return null;
}

function introSimGetById(id) {
  const t = introSimGetRawText(id);
  return t ? introSimBuildFromText(t, t.auteur, t.oeuvre) : null;
}

function introSimCount() {
  if (typeof getAllBacPassages === 'function') {
    const st = typeof bacPassagesLoadStatus === 'function' ? bacPassagesLoadStatus() : null;
    if (st?.loaded >= st?.total) return getAllBacPassages().length;
    if (st?.count) return st.count;
  }
  return introSimBuildIndex().length;
}

function introSimRandomEntry(minProb) {
  const index = introSimBuildIndex();
  if (!index.length) return null;
  const floor = minProb || 0;
  const pool = floor ? index.filter(e => (e.prob || 0) >= floor) : index;
  const src = pool.length ? pool : index;
  return src[Math.floor(Math.random() * src.length)];
}

function introSimTopEntries(n, minProb) {
  const index = introSimBuildIndex();
  const floor = minProb || 85;
  return index
    .filter(e => (e.prob || 0) >= floor)
    .sort((a, b) => (b.prob || 0) - (a.prob || 0))
    .slice(0, n || 12);
}

function introSimRebuildEntry(entry, auteur, oeuvre, passage, opts) {
  const { parsed, opts: o2 } = introSimPassageSearchOpts(passage, opts);
  opts = o2;
  const passageLabel = parsed.label;
  if (!entry?.gtextId || entry.fallback) {
    const fb = introSimBuildFallback(auteur, oeuvre, passageLabel, opts);
    return fb ? { ...fb, search: entry?.search, textSnippet: entry?.textSnippet } : entry;
  }
  const t = introSimGetRawText(entry.gtextId);
  if (!t) return entry;
  const built = introSimBuildFromText(t, auteur || t.auteur, oeuvre || t.oeuvre, opts);
  return { ...built, search: entry.search, textSnippet: entry.textSnippet, prob: entry.prob, indexOnly: entry.indexOnly };
}

function introSimSearch(auteur, oeuvre, passage, opts) {
  const { parsed, opts: o2 } = introSimPassageSearchOpts(passage, opts);
  opts = o2;
  const index = introSimBuildIndex();
  let scored = index
    .map(e => ({ entry: e, score: introSimScoreEntry(e, auteur, oeuvre, passage) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score);

  const needRebuild = parsed.isExcerpt || opts.themeOverride || opts.registreOverride;
  if (scored.length && needRebuild) {
    scored = scored.map(m => ({
      entry: introSimRebuildEntry(m.entry, auteur, oeuvre, passage, opts),
      score: m.score,
    }));
  }

  const ollamaActive = typeof introSimOllamaEnabled === 'function'
    ? introSimOllamaEnabled()
    : (typeof ollamaCommentIsEnabled === 'function' && ollamaCommentIsEnabled());
  const skipTemplate = ollamaActive && opts.fullCommentary;

  scored = scored.map(m => ({
    entry: introSimAttachCommentary(m.entry, {
      ...opts,
      passageRaw: passage,
      fullCommentary: opts.fullCommentary,
      skipTemplateCommentary: skipTemplate,
    }),
    score: m.score,
  }));

  if (!scored.length && ((auteur || '').trim() || parsed.isExcerpt)) {
    const fb = introSimBuildFallback(auteur, oeuvre, parsed.label, opts);
    if (fb) {
      const enriched = introSimAttachCommentary(fb, {
        ...opts,
        passageRaw: passage,
        fullCommentary: true,
        skipTemplateCommentary: skipTemplate,
      });
      scored = [{ entry: enriched, score: parsed.isExcerpt ? 32 : 28 }];
    }
  }
  return scored;
}

function introSimSuggest(partial, field) {
  const q = introSimNorm(partial);
  if (q.length < 2) return [];
  const index = introSimBuildIndex();
  const set = new Set();
  const out = [];
  index.forEach(e => {
    let val = field === 'auteur' ? e.auteurNom
      : field === 'oeuvre' ? (e.oeuvre || '').replace(/\(\d{4}\)/, '').trim()
      : field === 'titre' ? e.titre
      : e.titre;
    if (!val) return;
    const n = introSimNorm(val);
    if (n.includes(q) && !set.has(val)) {
      set.add(val);
      out.push(val);
    }
  });
  return out.slice(0, 12);
}

function introSimResetIndex() {
  _introSimIndex = null;
}

/** GT analysable le plus proche (même auteur / œuvre) pour un passage index-only */
function introSimFindRelatedGtext(entry) {
  const texts = typeof getAllGtexts === 'function' ? getAllGtexts() : (typeof GRANDS_TEXTES !== 'undefined' ? GRANDS_TEXTES : []);
  if (!texts.length || !entry?.auteur) return null;
  const au = introSimNorm(entry.auteur);
  const oe = introSimNorm(String(entry.oeuvre || '').replace(/\(\d{4}\)/, ''));
  const ti = introSimNorm(entry.titre || '');
  const sameAuthor = texts.filter(t => {
    if (!t?.id || !/^GT-\d+$/.test(t.id)) return false;
    const ta = introSimNorm(t.auteur);
    const fam = au.length >= 3 ? ta.includes(au) || au.includes(ta.split(' ').pop()) : ta === au;
    return fam;
  });
  if (!sameAuthor.length) return null;
  const byTitre = sameAuthor.find(t => {
    const tt = introSimNorm(t.titre);
    return ti && (tt === ti || tt.includes(ti) || ti.includes(tt));
  });
  if (byTitre) return byTitre;
  const byOeuvre = sameAuthor.find(t => {
    const to = introSimNorm(String(t.oeuvre || '').replace(/\(\d{4}\)/, ''));
    return oe && (to === oe || to.includes(oe) || oe.includes(to));
  });
  if (byOeuvre) return byOeuvre;
  return sameAuthor.sort((a, b) => {
    const na = parseInt(a.id.slice(3), 10);
    const nb = parseInt(b.id.slice(3), 10);
    if (na <= 260 && nb > 260) return -1;
    if (nb <= 260 && na > 260) return 1;
    return na - nb;
  })[0];
}

/** Alias passage / titre court → titre d'œuvre (champ EXERCICES, corpus, etc.) */
const INTRO_SIM_PASSAGE_ALIASES = {
  'chanson d automne': { oeuvre: 'Poèmes saturniens', passage: true },
  'correspondances': { oeuvre: 'Les Fleurs du mal', passage: true },
  'le voyage': { oeuvre: 'Les Fleurs du mal', passage: true },
  'spleen et ideal': { oeuvre: 'Les Fleurs du mal', passage: true },
  'le spleen de paris': { oeuvre: 'Le Spleen de Paris', passage: false },
  'les animaux malades de la peste': { oeuvre: 'Fables', passage: true },
  'la cigale et la fourmi': { oeuvre: 'Fables', passage: true },
  'le corbeau et le renard': { oeuvre: 'Fables', passage: true },
  'demain des l aube': { oeuvre: 'Les Contemplations', passage: true },
  'bois mon ami': { oeuvre: 'Les Contemplations', passage: true },
  'un coup de des jamais n abolira le hasard': { oeuvre: 'Poésies', passage: true },
  'mon reve familier': { oeuvre: 'Poèmes saturniens', passage: true },
  'il pleure dans mon coeur': { oeuvre: 'Romances sans paroles', passage: true },
  'art poetique': { oeuvre: 'Jadis et naguère', passage: true },
  'l albatros': { oeuvre: 'Les Fleurs du mal', passage: true },
  'l invitation au voyage': { oeuvre: 'Les Fleurs du mal', passage: true },
  'harmonie du soir': { oeuvre: 'Les Fleurs du mal', passage: true },
  'le lac': { oeuvre: 'Méditations poétiques', passage: true },
  'mignonne allons voir si la rose': { oeuvre: 'Odes', passage: true },
  'l apres midi d un faune': { oeuvre: "L'Après-midi d'un faune", passage: false },
  'le bateau ivre': { oeuvre: 'Le Bateau ivre', passage: false },
  'le dormeur du val': { oeuvre: 'Poésie', passage: true },
};

/** Alias réservés à un auteur (évite les confusions inter-auteurs) */
const INTRO_SIM_AUTHOR_ALIASES = {
  hugo: {
    'demain des l aube': { oeuvre: 'Les Contemplations', passage: true },
    'bois mon ami': { oeuvre: 'Les Contemplations', passage: true },
    'recueillement': { oeuvre: 'Les Contemplations', passage: true },
  },
  baudelaire: {
    'correspondances': { oeuvre: 'Les Fleurs du mal', passage: true },
    'le voyage': { oeuvre: 'Les Fleurs du mal', passage: true },
    'l albatros': { oeuvre: 'Les Fleurs du mal', passage: true },
  },
  verlaine: {
    'chanson d automne': { oeuvre: 'Poèmes saturniens', passage: true },
    'il pleure dans mon coeur': { oeuvre: 'Romances sans paroles', passage: true },
    'art poetique': { oeuvre: 'Jadis et naguère', passage: true },
    'mon reve familier': { oeuvre: 'Poèmes saturniens', passage: true },
  },
  rimbaud: {
    'le bateau ivre': { oeuvre: 'Le Bateau ivre', passage: false },
    'le dormeur du val': { oeuvre: 'Poésie', passage: true },
  },
  lamartine: {
    'le lac': { oeuvre: 'Méditations poétiques', passage: true },
  },
  mallarme: {
    'l apres midi d un faune': { oeuvre: "L'Après-midi d'un faune", passage: false },
  },
};

function introSimResolvePassageAlias(auteur, rest) {
  const r = introSimNorm(rest);
  const a = introSimNorm(auteur).split(' ').pop();
  const scoped = INTRO_SIM_AUTHOR_ALIASES[a]?.[r] || INTRO_SIM_AUTHOR_ALIASES[introSimNorm(auteur)]?.[r];
  const hit = scoped || INTRO_SIM_PASSAGE_ALIASES[r];
  if (!hit) return null;
  if (hit.passage) return { oeuvre: hit.oeuvre, passage: rest };
  return { oeuvre: hit.oeuvre, passage: '' };
}

function introSimFirstOeuvreFromList(oeuvresStr) {
  if (!oeuvresStr) return '';
  const first = oeuvresStr.split(/[·;,]/)[0].trim();
  return first.replace(/\s*\(\d{4}\)\s*$/, '').replace(/^«|»$/g, '').trim();
}

/** Parse « Auteur, Titre (année) » ou « Auteur, Passage — Œuvre (année) » (EXERCICES, corpus…) */
function introSimParseOeuvreRef(raw) {
  const s = (raw || '').trim();
  if (!s || /formule classique|^exemple$|^texte anonyme/i.test(s)) return null;
  const withoutYear = s.replace(/\s*\(\d{4}\)\s*$/, '').trim();
  const comma = withoutYear.indexOf(',');
  if (comma < 1) return null;
  const auteur = withoutYear.slice(0, comma).trim();
  let rest = withoutYear.slice(comma + 1).trim();
  if (!auteur || !rest) return null;
  let oeuvre = rest;
  let passage = '';
  if (rest.includes(' — ')) {
    const dash = rest.indexOf(' — ');
    passage = rest.slice(0, dash).trim();
    oeuvre = rest.slice(dash + 3).trim();
  } else {
    const aliased = introSimResolvePassageAlias(auteur, rest);
    if (aliased) {
      oeuvre = aliased.oeuvre;
      passage = aliased.passage;
    }
  }
  return { auteur, oeuvre, passage };
}
