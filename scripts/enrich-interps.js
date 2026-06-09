/**
 * Génère des interprétations IPC de qualité bac pour tous les grands textes.
 * Usage: node scripts/enrich-interps.js [--dry] [--force]
 */
const fs = require('fs');
const path = require('path');

const DRY = process.argv.includes('--dry');
const FORCE = process.argv.includes('--force');
const GENERATED_ONLY = process.argv.includes('--generated');
const JS_DIR = path.join(__dirname, '..', 'js');

function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function escJs(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function pick(arr, seed) {
  return arr[seed % arr.length];
}

function quotes(citation) {
  return [...citation.matchAll(/«([^»]+)»/g)].map(m => m[1].trim()).filter(Boolean);
}

function words(citation, keywords, n = 4) {
  const fromQ = quotes(citation).join(' ');
  const pool = [
    ...(fromQ.match(/[A-Za-zÀ-ÿ'-]{3,}/g) || []),
    ...(keywords || []),
    ...(citation.match(/[A-Za-zÀ-ÿ'-]{4,}/g) || []),
  ];
  const seen = new Set();
  const out = [];
  for (const w of pool) {
    const k = w.toLowerCase();
    if (seen.has(k) || k.length < 3) continue;
    seen.add(k);
    out.push(w);
    if (out.length >= n) break;
  }
  return out;
}

function qList(arr, max = 3) {
  return arr.slice(0, max).map(w => `« ${w} »`).join(', ');
}

function themePhrase(meta, keywords) {
  const ctx = (meta.contexte || '').trim();
  if (ctx) {
    const parts = ctx.split(/[—–]/);
    if (parts[1]) {
      let clause = parts[1].split(/[,;]/)[0].trim().toLowerCase().replace(/[.!?…]+$/, '');
      if (clause.length > 4 && clause.length < 55) {
        if (/^(le |la |l'|les |un |une |des )/.test(clause)) return clause;
        if (/^(métaphore|amour|mort|souffrance|passion|mémoire|nature|liberté|colère|peur|désir)/.test(clause)) {
          if (/^amour/i.test(clause)) return `l'${clause}`;
          return `la ${clause}`;
        }
        return clause;
      }
    }
    const head = parts[0].trim().toLowerCase().replace(/[.!?…]+$/, '');
    if (head.length > 8 && head.length < 55) return head;
  }
  if (meta.titre) return `« ${meta.titre} »`;
  if (keywords?.length) return `le motif de ${keywords[0]}`;
  return 'le sens du passage';
}

function isBadTemplate(interp) {
  return /approfondit la signification|n'est plus seulement décrit|colorent l'extrait|ressent alors|condense poème|enrichit (poème|roman|essai|théâtre|allegorie)|dynamise poème|structure la réception|renforce la visibilité de|perçoit mieux poème|perçoit mieux roman|colore l'extrait d'une tonalité|oblige le lecteur à arbitrer entre deux pôles|le lecteur mesure l'écart entre les termes et oblige|On distingue un registre|transparaît dans|adopte ici un registre|fonctionne comme métaphore : le transfert de sens condense|relève de l'antithèse : le lecteur|L'effet est de insiste|L'effet est de épuise|dot un élément abstrait ou objectal|^(Le passage «|Grâce à «|L'ensemble «|En accumulant «|Par le registre|Le gradation)/i.test(interp)
    || /éclaire de l'en|la éclaire|» juxtapose plusieurs|juxtapose plusieurs éléments pour insister sur registre|autour de sonnet|complexité de sonnet|structure l'argumentation autour de|sur la amour|organise de la amour/i.test(interp);
}

function isGoodManual(entry) {
  const t = entry.interp;
  if (isBadTemplate(t)) return false;
  if (t.length < 82) return false;
  if (/décrit·e|le thème de le /i.test(t)) return false;
  if (/oblige le lecteur à arbitrer.*oblige le lecteur/i.test(t)) return false;

  const proc = entry.proc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (new RegExp('^' + proc).test(t) && t.length >= 80) return true;
  if (/—/.test(t) && t.length >= 78 && !/n'est plus seulement|colorent l'extrait|transparaît/i.test(t)) return true;
  if (/\. [A-ZÉÀÎÔÙÂÄËÏÜŒ]/.test(t) && t.length >= 88) return true;
  if (t.length >= 112 && !/renforce la visibilité|structure la réception|perçoit mieux/i.test(t)) return true;
  return false;
}

function prepDe(phrase) {
  let p = (phrase || '').trim();
  if (!p) return 'du passage';
  if (/^de (le |la |l'|les |du |des )/.test(p)) return p;
  if (/^(le |la |l'|les )/.test(p)) {
    if (/^l'/.test(p)) return "de l'" + p.slice(2);
    if (/^la /.test(p)) return 'de la ' + p.slice(3);
    if (/^les /.test(p)) return 'des ' + p.slice(4);
    return 'du ' + p.slice(3);
  }
  if (/^[aeiouéèêàâh]/i.test(p)) return "de l'" + p;
  if (/^amour\b/i.test(p)) return "de l'" + p;
  if (/tion$|té$|esse$|ie$|ade$|ance$|ence$|eur$|euse$|ière$|oire$|isme$/.test(p)) return 'de la ' + p;
  return 'du ' + p;
}

function withArticle(phrase) {
  const d = prepDe(phrase);
  if (d.startsWith("de l'")) return "l'" + d.slice(4);
  if (d.startsWith('de la ')) return 'la ' + d.slice(6);
  if (d.startsWith('des ')) return 'les ' + d.slice(4);
  if (d.startsWith('du ')) return 'le ' + d.slice(3);
  return phrase;
}

function polish(text) {
  return text
    .replace(/\s+/g, ' ')
    .replace(/([A-Za-zÀ-ÿ])(:)/g, '$1 :')
    .replace(/\s+([.,;:!?])/g, '$1')
    .replace(/,\s*,/g, ',')
    .replace(/\. \./g, '.')
    .trim();
}

function auteur(meta) {
  return meta.auteur || "l'auteur";
}

function oeuvreShort(meta) {
  if (!meta.oeuvre) return "l'œuvre";
  return meta.oeuvre.replace(/\s*\(\d{4}\)\s*$/, '').trim();
}

function citePair(citation) {
  const qs = quotes(citation);
  if (qs.length >= 2) return { a: qs[0], b: qs[1] };
  if (qs.length === 1) return { a: qs[0], b: null };
  const clean = citation.replace(/\s+/g, ' ').trim();
  return { a: clean.length > 48 ? clean.slice(0, 45) + '…' : clean, b: null };
}

function regName(proc) {
  return proc.replace(/^Registre\s+/i, '').toLowerCase();
}

function regEffect(reg) {
  const m = {
    pathétique: 'suscite la compassion et l\'indignation face à la souffrance',
    tragique: 'installe une fatalité qui dépasse les personnages et provoque terreur ou pitié',
    lyrique: 'exprime une subjectivité intime et des émotions personnelles',
    satirique: 'dénonce les mœurs ou les institutions par l\'ironie et la dérision',
    comique: 'provoque le rire par la situation, les mots ou les personnages',
    épique: 'élève l\'action au niveau du grand récit et exalte la scène',
    fantastique: 'trouble la frontière entre réel et surnaturel',
    polémique: 'arme l\'argumentation d\'une violence rhétorique',
    poétique: 'privilégie la beauté formelle, la suggestion et la musicalité',
    dramatique: 'intensifie le conflit et retient l\'attention du spectateur',
    didactique: 'vise à instruire le lecteur et à transmettre une leçon morale ou intellectuelle',
    ironique: 'crée un décalage entre le sens apparent et le sens réel',
    onirique: 'donne au passage une atmosphère de rêve et d\'irréel',
    mélancolique: 'installe une tonalité triste, nostalgique ou mélancolique',
    élégiaque: 'mêle deuil, souvenir et méditation sur la perte',
    psychologique: 'explore les états intérieurs et les mouvements de la conscience',
    critique: 'juge une réalité sociale, politique ou esthétique',
    merveilleux: 'ouvre la scène à l\'émerveillement et au surnaturel',
    populaire: 'rapproche la langue du parler quotidien et des classes populaires',
  };
  return m[reg] || 'colore le passage d\'une tonalité marquée';
}

function buildInterpretation(entry, meta, idx) {
  const seed = hash(`${meta.id}|${entry.proc}|${idx}|${entry.cite}`);
  const proc = entry.proc;
  const pLo = proc.toLowerCase();
  const aut = auteur(meta);
  const oev = oeuvreShort(meta);
  const th = themePhrase(meta, entry.keywords);
  const ws = words(entry.cite, entry.keywords);
  const ql = qList(ws);
  const { a, b } = citePair(entry.cite);
  const qA = a.includes('«') ? a : `« ${a} »`;

  if (/^registre/i.test(proc)) {
    const reg = regName(proc);
    const eff = regEffect(reg);
    const patterns = [
      () => `Registre ${reg} : ${qA} ${eff}, ${prepDe(th)}.`,
      () => `Registre ${reg} : par ${qA}, ${aut} ${eff} — tonalité dominante de ${oev}.`,
      () => `À travers ${qA}, le registre ${reg} domine et ${eff}.`,
      () => `Registre ${reg} : la scène ${eff}; ${qA} concentre cette coloration ${prepDe(th)}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/champ lexical/i.test(proc)) {
    const patterns = [
      () => `Champ lexical centré sur ${th} : ${ql}. Ces résonances lexicales créent une atmosphère cohérente et insistent sur l'idée directrice.`,
      () => `Les mots ${ql} appartiennent au même champ sémantique. Leur convergence renforce ${th} et structure l'unité thématique du passage.`,
      () => `Champ lexical : ${ql}. L'accumulation de ces lexies enveloppe le lecteur dans l'univers de ${th}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/anaphor/i.test(proc)) {
    const mot = ws[0] || a.split(/\s+/)[0] || 'le terme répété';
    const patterns = [
      () => `Anaphore de « ${mot} » : la reprise en tête de segment martèle l'idée et crée un rythme incantatoire. ${aut} insiste ainsi sur ${th}.`,
      () => `Anaphore : ${qA} se répète pour produire un effet d'insistance mémorable et structurer ${th}.`,
      () => `La reprise de ${qA} (anaphore) accélère ou alourdit le rythme et concentre l'attention sur ${th}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/antith/i.test(proc)) {
    if (b) {
      const patterns = [
        () => `Antithèse entre « ${a} » et « ${b} » : le contraste met en relief deux pôles opposés et accentue ${th}.`,
        () => `Antithèse : « ${a} » s'oppose à « ${b} ». Cette tension structure le sens et oblige le lecteur à mesurer l'écart entre les deux idées.`,
      ];
      return pick(patterns, seed)();
    }
    const patterns = [
      () => `Antithèse repérée dans ${qA} : deux termes ou idées s'opposent pour souligner ${th}.`,
      () => `Antithèse : ${qA} installe une opposition nette qui condense la tension dramatique ou argumentative du passage.`,
    ];
    return pick(patterns, seed)();
  }

  if (/métaph/i.test(proc)) {
    const patterns = [
      () => `Métaphore : ${qA} transfère le sens d'un domaine à un autre et crée une image frappante. ${aut} suggère ainsi ${th}.`,
      () => `La métaphore ${qA} rapproche deux réalités sans outil comparatif : l'image condense ${th} en une vision poétique forte.`,
      () => `${qA} fonctionne comme métaphore : le rapprochement implicite enrichit ${th} et marque le style de ${aut}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/compar/i.test(proc)) {
    const patterns = [
      () => `Comparaison : ${qA} rapproche explicitement deux éléments (outil comparatif ou ressemblance). Le lecteur visualise mieux ${th}.`,
      () => `Comparaison repérée dans ${qA} : le parallèle rend ${th} plus concret et guide l'imaginaire du lecteur.`,
      () => `Par ${qA}, ${aut} établit une comparaison qui clarifie ${th} et ancre le sens dans une image accessible.`,
    ];
    return pick(patterns, seed)();
  }

  if (/personnif/i.test(proc)) {
    const patterns = [
      () => `Personnification : ${qA} reçoit des traits humains (parler, agir, ressentir). ${aut} anime la scène et rend ${th} plus vivante.`,
      () => `Personnification repérée dans ${qA} : l'abstraction ou l'objet devient agent, ce qui dynamise ${th}.`,
      () => `${qA} est personnifié·e : attribuer une action ou une voix humaine à un non-humain intensifie ${th}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/hyperb/i.test(proc)) {
    const patterns = [
      () => `Hyperbole : ${qA} exagère volontairement la réalité pour marquer l'intensité du ressenti dans ${th}.`,
      () => `Hyperbole repérée dans ${qA} : l'amplification pousse l'expression dans l'excès expressif et fixe l'attention du lecteur.`,
      () => `En exagérant ${qA}, ${aut} use de l'hyperbole pour souligner ${th}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/oxymore/i.test(proc)) {
    const patterns = [
      () => `Oxymore : ${qA} réunit deux termes contradictoires. La tension sémantique exprime une ambiguïté ou un paradoxe vécu dans ${th}.`,
      () => `Oxymore repéré dans ${qA} : l'association d'opposés condense une contradiction poétique propre à ${th}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/litote/i.test(proc)) {
    const patterns = [
      () => `Litote : ${qA} dit moins pour faire entendre plus. L'atténuation apparente renforce en réalité l'intensité de ${th}.`,
      () => `Litote repérée dans ${qA} : ${aut} sous-entend une idée forte par une formulation modeste ou négative.`,
    ];
    return pick(patterns, seed)();
  }

  if (/gradation/i.test(proc)) {
    const patterns = [
      () => `Gradation : ${qA} organise les éléments en intensité croissante ou décroissante. La progression dramatique structure ${th}.`,
      () => `Gradation repérée dans ${ql} : l'escalade (ou la chute) d'intensité concentre l'effet sur ${th}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/énum|accumul/i.test(proc)) {
    const label = /accumul/i.test(proc) ? 'Accumulation' : 'Énumération';
    const patterns = [
      () => `${label} : les termes ${ql} juxtaposent plusieurs éléments pour insister sur ${withArticle(th)} et produire un effet de plénitude ou d'oppression.`,
      () => `${label} repérée dans ${qA} : la liste multiplie les occurrences et renforce l'idée centrale de ${withArticle(th)}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/allit/i.test(proc)) {
    const patterns = [
      () => `Allitération : répétition d'une consonne autour de ${ql}. La musicalité imitative soutient ${th} et fixe l'oreille du lecteur.`,
      () => `Allitération repérée dans ${qA} : la répétition consonantique crée une harmonie sonore qui accompagne ${th}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/asson/i.test(proc)) {
    const patterns = [
      () => `Assonance : répétition d'une voyelle dans ${ql}. Cette résonance vocale installe une atmosphère musicale au service de ${th}.`,
      () => `Assonance repérée dans ${qA} : la répétition vocalique crée une mélodie lancinante qui renforce ${th}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/apostrophe/i.test(proc)) {
    const patterns = [
      () => `Apostrophe : ${qA} interpelle directement un absent, une abstraction ou le lecteur. ${aut} dramatise ainsi ${th}.`,
      () => `Apostrophe repérée dans ${qA} : l'adresse soudaine crée un effet de présence et d'urgence dans ${th}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/enjamb/i.test(proc)) {
    const patterns = [
      () => `Enjambement : ${qA} — la phrase déborde d'un vers sur l'autre. Le rythme brisé mime ${th} ou traduit une instabilité.`,
      () => `Enjambement repéré dans ${qA} : le sens dépasse la frontière du vers et modifie la respiration poétique de ${th}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/rejet|contre-rejet|césure|alexandr/i.test(proc)) {
    const patterns = [
      () => `${proc} : ${qA} modifie le découpage du vers et met en valeur un mot ou une pause. Le rythme sert ${th}.`,
      () => `${proc} repéré dans ${qA} : la rupture ou la pause rythmique structure la lecture de ${th}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/vers libre/i.test(proc)) {
    const patterns = [
      () => `Vers libre : ${qA} échappe à la métrique régulière. ${aut} privilégie la liberté rythmique et la modernité de ${th}.`,
      () => `Vers libre repéré dans le passage : l'absence de contrainte métrique fixe laisse le sens et la musicalité primer dans ${th}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/focalisation externe/i.test(proc)) {
    const patterns = [
      () => `Focalisation externe : ${qA} — le narrateur observe sans accéder aux pensées intimes. La distance narrative structure ${th}.`,
      () => `Focalisation externe repérée dans ${qA} : le lecteur ne voit que l'extérieur des personnages, ce qui objectivise ${th}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/focalisation zéro/i.test(proc)) {
    const patterns = [
      () => `Focalisation zéro : ${qA} — le narrateur omniscient connaît et relate les faits avec une vision globale de ${th}.`,
      () => `Focalisation zéro repérée dans ${qA} : le narrateur sait tout et guide le lecteur dans ${th}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/paradoxe/i.test(proc)) {
    const patterns = [
      () => `Paradoxe : ${qA} affirme une idée qui surprend ou contredit la logique commune. ${aut} brouille les certitudes dans ${th}.`,
      () => `Paradoxe repéré dans ${qA} : la contradiction apparente concentre la réflexion sur ${th}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/ironie|antiphrase/i.test(proc)) {
    const patterns = [
      () => `${proc} : ${qA} dit le contraire du sens réel ou crée un décalage critique. ${aut} invite à lire ${th} à contre-pied.`,
      () => `${proc} repérée dans ${qA} : le décalage entre le dit et le voulu dénonce ou moque ${th}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/question rhétorique/i.test(proc)) {
    const patterns = [
      () => `Question rhétorique : ${qA} n'attend pas de réponse mais oriente la réflexion du lecteur vers ${th}.`,
      () => `Question rhétorique repérée dans ${qA} : l'interrogation feinte structure l'argumentation de ${th}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/parallélisme/i.test(proc)) {
    const patterns = [
      () => `Parallélisme : ${qA} reproduit une structure syntaxique identique. La symétrie renforce ${th} et crée un effet de martèlement.`,
      () => `Parallélisme repéré dans ${qA} : la répétition de structures parallèles insiste sur ${th}.`,
    ];
    return pick(patterns, seed)();
  }

  if (/sonnet/i.test(proc)) {
    const patterns = [
      () => `Sonnet : forme fixe de quatorze vers (2 quatrains + 2 tercets). La contrainte concentre ${prepDe(th)} et prépare souvent une chute au tercet final.`,
      () => `Sonnet : la structure en quatrains et tercets organise ${prepDe(th)} et permet un retournement au dernier tercet.`,
    ];
    return pick(patterns, seed)();
  }

  // Fallback générique mais propre
  const art = /^[aeiouéèêàâh]/i.test(pLo) ? "l'" : 'le ';
  const patterns = [
    () => `${proc} : ${qA} concentre l'effet recherché par ${aut} dans ${th}. ${art}${pLo} oriente la lecture vers le sens du passage.`,
    () => `${proc} repéré dans ${qA} : ${aut} mobilise ce procédé pour structurer ${th} dans ${oev}.`,
    () => `Par ${qA}, ${art}${pLo} approfondit ${th} et marque le style de ${aut}.`,
  ];
  return pick(patterns, seed)();
}

function scoreQuality(entry) {
  let score = 100;
  const t = entry.interp;
  if (t.length < 85) score -= 30;
  else if (t.length < 100) score -= 10;
  if (/ressent alors|colorent l'extrait|approfondit la signification du passage|enrichit essai|condense poème|décrit·e/i.test(t)) score -= 40;
  if (/^(Registre|Hyperbole|Antithèse|Métaphore|Comparaison|Personnification)\s*:\s*[^.]{8,45}\s*—\s*\w/.test(t) && t.length < 95) score -= 15;
  const ws = words(entry.cite, entry.keywords, 2);
  if (ws.length && !ws.some(w => t.toLowerCase().includes(w.toLowerCase().slice(0, 4)))) score -= 10;
  return score;
}

function parseGtextFiles() {
  const files = fs.readdirSync(JS_DIR).filter(f => f.startsWith('data-gtextes') && f.endsWith('.js') && !f.includes('oeuvre'));
  const texts = new Map();
  const entries = [];

  for (const file of files) {
    const s = fs.readFileSync(path.join(JS_DIR, file), 'utf8');
    let cur = null;
    let attIdx = 0;
    for (const line of s.split('\n')) {
      const idM = line.match(/id:\s*"(GT-\d+)"/);
      if (idM) {
        cur = { id: idM[1], file, auteur: '', oeuvre: '', contexte: '', titre: '' };
        attIdx = 0;
      }
      if (!cur) continue;
      const tM = line.match(/titre:\s*"([^"]+)"/);
      if (tM) cur.titre = tM[1];
      const aM = line.match(/auteur:\s*"([^"]+)"/);
      if (aM) cur.auteur = aM[1];
      const oM = line.match(/oeuvre:\s*"([^"]+)"/);
      if (oM) cur.oeuvre = oM[1];
      const cM = line.match(/contexte:\s*"([^"]+)"/);
      if (cM) cur.contexte = cM[1];

      const attM = line.match(/\{\s*procede:\s*"([^"]+)",\s*citation:\s*"((?:\\.|[^"\\])*)",\s*interpretation:\s*"((?:\\.|[^"\\])*)",\s*keywords:\s*\[([^\]]*)\]/);
      if (attM) {
        const keywords = [...attM[4].matchAll(/"([^"]+)"/g)].map(m => m[1]);
        entries.push({
          file,
          id: cur.id,
          proc: attM[1],
          cite: attM[2],
          interp: attM[3],
          keywords,
          line,
          attIdx: attIdx++,
        });
        if (!texts.has(cur.id)) texts.set(cur.id, { ...cur });
      }
    }
  }
  return { entries, texts };
}

function main() {
  const { entries, texts } = parseGtextFiles();
  const usedInText = new Map();
  const replacements = [];

  for (const e of entries) {
    if (GENERATED_ONLY && !/^data-gtextes-extra(1[2-9]|2[01])\.js$/.test(e.file)) continue;
    const meta = texts.get(e.id) || {};
    if (!FORCE && isGoodManual(e)) continue;

    let newInterp = polish(buildInterpretation(e, meta, e.attIdx));
    let tries = 0;
    const key = e.id;
    if (!usedInText.has(key)) usedInText.set(key, new Set());
    while ((usedInText.get(key).has(newInterp) || newInterp === e.interp) && tries < 16) {
      newInterp = polish(buildInterpretation(e, meta, e.attIdx + tries + 1));
      tries++;
    }
    usedInText.get(key).add(newInterp);

    if (newInterp !== e.interp) {
      replacements.push({ ...e, newInterp, oldInterp: e.interp });
    }
  }

  console.log('Entries total:', entries.length);
  console.log('Replacements:', replacements.length);

  if (DRY) {
    replacements.slice(0, 12).forEach(r => {
      console.log('\n', r.id, r.proc);
      console.log('  OLD:', r.oldInterp);
      console.log('  NEW:', r.newInterp);
    });
    return;
  }

  const byFile = {};
  replacements.forEach(r => {
    if (!byFile[r.file]) byFile[r.file] = [];
    byFile[r.file].push(r);
  });

  for (const [file, reps] of Object.entries(byFile)) {
    let content = fs.readFileSync(path.join(JS_DIR, file), 'utf8');
    let count = 0;
    for (const r of reps) {
      const oldNeedle = `interpretation: "${r.oldInterp.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
      const newNeedle = `interpretation: "${escJs(r.newInterp)}"`;
      if (!content.includes(oldNeedle)) {
        console.warn('Missing needle', r.id, r.proc, file);
        continue;
      }
      content = content.replace(oldNeedle, newNeedle);
      count++;
    }
    fs.writeFileSync(path.join(JS_DIR, file), content);
    console.log('Updated', file, count);
  }
}

main();
