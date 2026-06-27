/**
 * Génère js/data-oral.js depuis :
 * - docs/LL_1_16_GoogleDocs_ouvertures.txt (corrigés)
 * - docs/textes/16_textes_BAC.html (passages littéraires)
 * Usage: node scripts/build-oral-data.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const src = path.join(root, 'docs', 'LL_1_16_GoogleDocs_ouvertures.txt');
const htmlSrc = path.join(root, 'docs', 'textes', '16_textes_BAC.html');
const out = path.join(root, 'js', 'data-oral.js');

const raw = fs.readFileSync(src, 'utf8');
const lines = raw.split(/\r?\n/);

const TABLE_HDR = /^(Arguments|Connecteurs logiques|Procédés employés|Procédés|Interprétation|Texte)$/i;
const SKIP_LINE = /^(→|\(\d+\)|\d+ère sous-partie|\d+ème sous-partie|\d+\)\s)/i;

function stripHtml(s) {
  return (s || '')
    .replace(/<span class="didascalie">([\s\S]*?)<\/span>/gi, '($1)')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractKeywords(text) {
  const stop = new Set(['dans', 'pour', 'avec', 'cette', 'celle', 'comme', 'entre', 'quoi', 'plus', 'moins', 'leurs', 'elle', 'elles', 'nous', 'vous', 'dont', 'mais', 'tres', 'tout', 'tous', 'etre', 'avoir', 'auteur', 'lecteur', 'texte', 'effet', 'procde']);
  const words = (text || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .match(/[a-z]{5,}/g) || [];
  return [...new Set(words.filter(w => !stop.has(w)))].slice(0, 8);
}

function makeAtt(citation, procede, interpretation, mouvement, connecteur) {
  return {
    citation: String(citation || '').slice(0, 220),
    procede: String(procede || '').slice(0, 120),
    interpretation: String(interpretation || '').slice(0, 600),
    mouvement: mouvement || '',
    connecteur: connecteur || '',
    keywords: extractKeywords(`${interpretation} ${procede} ${connecteur}`),
  };
}

function isProcedeLine(s) {
  if (!s || s.length > 110) return false;
  if (/^(Il |La |Le |Les |Ce |Cette |Des |Un |Une |En |Pour |Après |Dès |Dans |Nous |Fontenelle|L'auteur|Voltaire|Musset|Rimbaud|Hugo|Perdican|Des Grieux|Micromégas|Quasimodo|Cyrano|Roxane|Camille|Manon|La marquise|Le Saturnien|Le narrateur|Poème|Sonnet|Mouvement|1ère|2ème|3ème)/i.test(s)) return false;
  if (/[.!?]$/.test(s) && s.length > 45) return false;
  return /[a-zàâçéèêëîïôùûü]/i.test(s);
}

function isInterpLine(s) {
  return s && s.length >= 28 && !TABLE_HDR.test(s);
}

function isCiteLine(s) {
  if (!s) return false;
  if (/^«/.test(s)) return true;
  if (s.includes('/') && s.length < 140) return true;
  if (s.length < 95 && !/^(Il |La |Le |Ce |Cette |Fontenelle|Voltaire|Musset|Rimbaud|Perdican|Des Grieux|Quasimodo|En |Pour |Après |Dès )/.test(s)) return true;
  return false;
}

function guessProcedeFromProse(ln) {
  const patterns = [
    [/comparatif/i, 'Comparatif'],
    [/hyperbol/i, 'Hyperbole'],
    [/métaphor/i, 'Métaphore'],
    [/anaphor/i, 'Anaphore'],
    [/antithèse/i, 'Antithèse'],
    [/gradation/i, 'Gradation'],
    [/interjection/i, 'Interjection'],
    [/champ lexical/i, 'Champ lexical'],
    [/registre pathétique/i, 'Registre pathétique'],
    [/registre tragique/i, 'Registre tragique'],
    [/registre lyrique/i, 'Registre lyrique'],
    [/registre comique/i, 'Registre comique'],
    [/registre ironique/i, 'Registre ironique'],
    [/didascalie/i, 'Didascalie'],
    [/stichomythie/i, 'Stichomythie'],
    [/aparté/i, 'Aparté'],
    [/prolepse/i, 'Prolepse'],
    [/euphémisme/i, 'Euphémisme'],
    [/focalisation interne/i, 'Focalisation interne'],
    [/discours direct/i, 'Discours direct'],
    [/discours indirect/i, 'Discours indirect'],
    [/question rhétorique/i, 'Question rhétorique'],
    [/prétérition/i, 'Prétérition'],
    [/oxymore/i, 'Oxymore'],
    [/synesthésie/i, 'Synesthésie'],
    [/rejet/i, 'Rejet'],
    [/contre-rejet/i, 'Contre-rejet'],
    [/allitération/i, 'Allitération'],
    [/assonance/i, 'Assonance'],
    [/énumération/i, 'Énumération'],
    [/mise en abyme/i, 'Mise en abyme'],
    [/alexandrin/i, 'Alexandrin'],
    [/négation/i, 'Négation'],
    [/impératif/i, 'Impératif'],
    [/conditionnel/i, 'Conditionnel'],
    [/subjonctif/i, 'Subjonctif'],
    [/passé simple/i, 'Passé simple'],
    [/imparfait/i, 'Imparfait'],
    [/comparaison/i, 'Comparaison'],
    [/personnification/i, 'Personnification'],
    [/apostrophe/i, 'Apostrophe'],
    [/tautologie/i, 'Tautologie'],
    [/parallélisme/i, 'Parallélisme'],
    [/chiasme/i, 'Chiasme'],
    [/ironie/i, 'Ironie'],
    [/satire|satirique/i, 'Satire'],
    [/comique de répétition/i, 'Comique de répétition'],
    [/comique de situation/i, 'Comique de situation'],
    [/comique de caractères/i, 'Comique de caractères'],
    [/isotopie/i, 'Isotopie'],
    [/périphrase/i, 'Périphrase'],
    [/litote/i, 'Litote'],
    [/analogie/i, 'Analogie'],
    [/métaphore filée/i, 'Métaphore filée'],
    [/triple énonciation/i, 'Triple énonciation'],
    [/mise en abîme/i, 'Mise en abîme'],
    [/alexandrin/i, 'Alexandrin'],
    [/sonnet/i, 'Sonnet'],
    [/contre.?blason/i, 'Contre-blason'],
    [/registre épique/i, 'Registre épique'],
    [/registre didactique/i, 'Registre didactique'],
    [/registre satirique/i, 'Registre satirique'],
    [/registre fantastique/i, 'Registre fantastique'],
    [/temps du récit|passé simple|imparfait|plus-que-parfait|conditionnel passé/i, 'Temps du récit'],
    [/focalisation/i, 'Focalisation'],
    [/discours rapporté/i, 'Discours rapporté'],
    [/connecteur/i, 'Connecteur logique'],
    [/interpellation/i, 'Interpellation'],
    [/hyperbole/i, 'Hyperbole'],
  ];
  for (const [re, name] of patterns) {
    if (re.test(ln)) return name;
  }
  const m = ln.match(/(?:procédé|figure|registre|effet|emploi)\s*(?:de|:)?\s*([a-zàâçéèêëîïôùûü\s-]{4,40})/i);
  if (m) return m[1].trim().replace(/^d['']/, '').slice(0, 60);
  return null;
}

function dedupeAttendus(list) {
  const seen = new Set();
  const out = [];
  for (const a of list) {
    const key = (a.procede + '|' + a.citation.slice(0, 40)).toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(a);
  }
  return out;
}

function extractAttendusFromSection(sec) {
  const mouvement = sec.title || 'Analyse';
  const attendus = [];
  const raw = (sec.lines || []).map(l => l.replace(/&gt;/g, '>').replace(/&amp;/g, '&').trim());

  for (const ln of raw) {
    const arrow = ln.match(/^(.+?)\s*→\s*(.+)$/);
    if (arrow && !TABLE_HDR.test(arrow[1])) {
      const left = arrow[1].trim();
      const citeM = left.match(/«[^»]+»/);
      attendus.push(makeAtt(
        citeM ? citeM[0] : left.slice(0, 120),
        arrow[2].split(/[.;]/)[0].trim().slice(0, 80),
        ln,
        mouvement,
      ));
    }
  }

  const lines = raw.filter(l => l && !TABLE_HDR.test(l) && !SKIP_LINE.test(l) && !/^→/.test(l));
  for (let i = 0; i < lines.length - 2; i++) {
    const cite = lines[i];
    const proc = lines[i + 1];
    const interp = lines[i + 2];
    if (isCiteLine(cite) && isProcedeLine(proc) && isInterpLine(interp)) {
      attendus.push(makeAtt(cite, proc, interp, mouvement));
      i += 2;
    }
  }

  for (let i = 0; i < lines.length - 1; i++) {
    if (/^Procédé$/i.test(lines[i]) || /^Procédés$/i.test(lines[i])) continue;
    const procOnly = lines[i];
    const interpOnly = lines[i + 1];
    if (isProcedeLine(procOnly) && isInterpLine(interpOnly) && interpOnly.length > 40) {
      const cites = procOnly.match(/«[^»]+»/g) || interpOnly.match(/«[^»]+»/g) || [];
      attendus.push(makeAtt(cites[0] || procOnly.slice(0, 80), procOnly, interpOnly, mouvement));
      i += 1;
    }
  }

  for (const ln of raw) {
    if (TABLE_HDR.test(ln) || SKIP_LINE.test(ln)) continue;
    if (ln.startsWith('→')) continue;
    if (ln.length < 45) continue;

    const cites = ln.match(/«[^»]{2,}»/g) || [];
    const proc = guessProcedeFromProse(ln);
    if (!proc) continue;

    if (cites.length >= 2) {
      cites.forEach(c => attendus.push(makeAtt(c, proc, ln, mouvement)));
    } else if (cites.length === 1 || ln.length >= 70) {
      attendus.push(makeAtt(cites[0] || ln.slice(0, 100), proc, ln, mouvement));
    }
  }

  return attendus;
}

function extractAttendus(sections) {
  const attendus = [];
  for (const sec of sections || []) {
    attendus.push(...extractAttendusFromSection(sec));
  }
  return dedupeAttendus(attendus).slice(0, 32);
}

function groupAttendusByMouvement(attendus) {
  const map = new Map();
  (attendus || []).forEach(a => {
    const k = a.mouvement || 'Analyse';
    if (!map.has(k)) map.set(k, []);
    map.get(k).push(a);
  });
  return [...map.entries()].map(([title, items]) => ({ title, items }));
}

function parsePassagesFromHtml(html) {
  const map = {};
  for (let n = 1; n <= 16; n++) {
    const marker = `id="corps-ll${n}"`;
    const start = html.indexOf(marker);
    if (start < 0) continue;
    const openEnd = html.indexOf('>', start) + 1;
    let depth = 1;
    let i = openEnd;
    while (i < html.length && depth > 0) {
      const nextOpen = html.indexOf('<div', i);
      const nextClose = html.indexOf('</div>', i);
      if (nextClose < 0) break;
      if (nextOpen >= 0 && nextOpen < nextClose) {
        depth += 1;
        i = nextOpen + 4;
      } else {
        depth -= 1;
        i = nextClose + 6;
      }
    }
    const inner = html.slice(openEnd, i - 6);
    map[n] = parseCorpsHtml(inner);
  }
  return map;
}

function parseCorpsHtml(inner) {
  const rows = [];
  const tokenRe = /<p class="locuteur">([\s\S]*?)<\/p>|<div class="ligne"><span class="num">(\d+)<\/span><p>([\s\S]*?)<\/p><\/div>|<div class="vers-gauche"><span class="num">(\d+)<\/span><span>([\s\S]*?)<\/span><\/div>|<div class="titre-poeme">([\s\S]*?)<\/div>/g;
  let m;
  while ((m = tokenRe.exec(inner)) !== null) {
    if (m[1] != null) {
      const t = stripHtml(m[1]);
      if (t) rows.push({ type: 'speaker', text: t });
    } else if (m[2] != null) {
      const t = stripHtml(m[3]);
      if (t) rows.push({ type: 'line', n: parseInt(m[2], 10), text: t });
    } else if (m[4] != null) {
      const t = stripHtml(m[5]);
      if (t) rows.push({ type: 'line', n: parseInt(m[4], 10), text: t });
    } else if (m[6] != null) {
      const t = stripHtml(m[6]);
      if (t) rows.push({ type: 'title', text: t });
    }
  }

  const passageLines = rows.filter(r => r.type === 'line');
  const plainParts = [];
  rows.forEach(r => {
    if (r.type === 'title') plainParts.push(r.text.toUpperCase());
    else if (r.type === 'speaker') plainParts.push(r.text);
    else if (r.type === 'line') plainParts.push(r.text);
  });

  return {
    lines: passageLines.map(r => ({ n: r.n, text: r.text })),
    plain: plainParts.join('\n'),
    rows,
  };
}

function parseTexts() {
  const texts = [];
  let i = 0;
  while (i < lines.length) {
    const m = lines[i].match(/^LECTURE LINÉAIRE N°(\d+)\s*$/);
    if (!m) { i++; continue; }
    const num = parseInt(m[1], 10);
    i++;
    const auteur = (lines[i] || '').replace(/\s*—\s*$/, '').trim();
    i++;
    const oeuvre = (lines[i] || '').trim();
    i++;
    const titre = (lines[i] || '').trim();
    i++;
    while (i < lines.length && !lines[i].trim()) i++;
    if (lines[i]?.trim() === 'Introduction') i++;

    const introLines = [];
    while (i < lines.length && !/^Problématique\s*:/.test(lines[i])) {
      if (/^LECTURE LINÉAIRE/.test(lines[i])) break;
      if (lines[i].trim()) introLines.push(lines[i].trim());
      i++;
    }
    let problematique = '';
    if (/^Problématique\s*:/.test(lines[i] || '')) {
      i++;
      const pl = [];
      while (i < lines.length && !/^1er mouvement\s*:/.test(lines[i])) {
        if (/^LECTURE LINÉAIRE/.test(lines[i])) break;
        if (lines[i].trim()) pl.push(lines[i].trim());
        i++;
      }
      problematique = pl.join(' ').trim();
    }
    const plan = [];
    for (let p = 0; p < 3; p++) {
      const labels = ['1er mouvement', '2ème mouvement', '2eme mouvement', '3ème mouvement', '3eme mouvement'];
      const re = new RegExp(`^(${labels.join('|')})\\s*:`, 'i');
      if (!re.test(lines[i] || '')) break;
      i++;
      const pl = [];
      while (i < lines.length && !re.test(lines[i]) && !/^Mouvement \d|^Conclusion|^Ouverture|^LECTURE/.test(lines[i])) {
        if (/^(1er|2ème|2eme|3ème|3eme) mouvement\s*:/i.test(lines[i])) break;
        if (lines[i].trim()) pl.push(lines[i].trim());
        i++;
      }
      if (pl.length) plan.push(pl.join(' ').trim());
    }

    const bodyLines = [];
    let ouverture = '';
    let conclusion = '';
    let mode = 'body';
    while (i < lines.length && !/^LECTURE LINÉAIRE/.test(lines[i])) {
      const ln = lines[i];
      if (/^Ouverture\s*:/.test(ln)) {
        mode = 'ouverture';
        i++;
        continue;
      }
      if (/^Conclusion\s*$/.test(ln.trim())) {
        mode = 'conclusion';
        i++;
        continue;
      }
      if (mode === 'ouverture') ouverture += (ouverture ? '\n' : '') + ln.trim();
      else if (mode === 'conclusion') conclusion += (conclusion ? '\n' : '') + ln.trim();
      else if (ln.trim()) bodyLines.push(ln);
      i++;
    }

    const sections = [];
    let cur = { title: 'Analyse', lines: [] };
    bodyLines.forEach(ln => {
      const mh = ln.match(/^Mouvement \d+ — (.+)$/);
      if (mh) {
        if (cur.lines.length) sections.push(cur);
        cur = { title: mh[1].trim(), lines: [] };
      } else {
        cur.lines.push(ln);
      }
    });
    if (cur.lines.length) sections.push(cur);

    texts.push({
      id: `LL-${String(num).padStart(2, '0')}`,
      num,
      auteur,
      oeuvre,
      titre,
      introduction: introLines.join('\n\n'),
      problematique,
      plan,
      sections,
      conclusion: conclusion.trim(),
      ouverture: ouverture.trim(),
    });
  }
  return texts;
}

function buildQcm(texts) {
  const qcm = [];
  texts.forEach(t => {
    const label = `${t.auteur} — ${t.titre}`;
    qcm.push({
      cat: 'Lecture linéaire (oral)',
      q: `Lecture linéaire n°${t.num} : quelle est la problématique ?`,
      opts: shuffleOpts([
        t.problematique,
        texts[(t.num % 16)].problematique,
        texts[((t.num + 5) % 16) || 16 - 1].problematique,
        texts[((t.num + 9) % 16) || 16 - 1].problematique,
      ], t.id + '-prob'),
      ans: 0,
      expl: `Texte ${t.num} : ${t.auteur}, ${t.oeuvre} — « ${t.titre} ».`,
      ref: t.id,
    });
    qcm[qcm.length - 1].ans = qcm[qcm.length - 1].opts.indexOf(t.problematique);

    const autres = texts.filter(x => x.id !== t.id).slice(0, 12);
    const wrongAuteurs = shuffleOpts(autres.map(x => x.auteur).filter((a, idx, arr) => arr.indexOf(a) === idx)).slice(0, 3);
    const optsA = shuffleOpts([t.auteur, ...wrongAuteurs], t.id + '-aut');
    qcm.push({
      cat: 'Lecture linéaire (oral)',
      q: `« ${t.titre} » (${t.oeuvre}) : quel est l'auteur ?`,
      opts: optsA,
      ans: optsA.indexOf(t.auteur),
      expl: `${t.auteur} — ${t.oeuvre}.`,
      ref: t.id,
    });

    if (t.plan[0]) {
      const wrongPlans = autres.map(x => x.plan[0]).filter(Boolean).slice(0, 3);
      const optsP = shuffleOpts([t.plan[0], ...wrongPlans], t.id + '-plan');
      qcm.push({
        cat: 'Lecture linéaire (oral)',
        q: `${label} — quel est le 1er mouvement du plan ?`,
        opts: optsP,
        ans: optsP.indexOf(t.plan[0]),
        expl: `Plan annoncé : ${t.plan.join(' · ')}`,
        ref: t.id,
      });
    }

    if (t.ouverture) {
      const snippet = t.ouverture.slice(0, 72).replace(/\s+\S*$/, '') + '…';
      qcm.push({
        cat: 'Lecture linéaire (oral)',
        q: `Lecture linéaire n°${t.num} : l'ouverture évoque surtout…`,
        opts: shuffleOpts([
          snippet,
          'Une comparaison avec le Parnasse et Gautier',
          'Le retour au classicisme de Racine',
          'La censure de Baudelaire en 1857',
        ], t.id + '-ouv'),
        ans: 0,
        expl: `Ouverture : ${t.ouverture.slice(0, 200)}…`,
        ref: t.id,
      });
      qcm[qcm.length - 1].ans = 0;
    }
  });
  return qcm;
}

function shuffleOpts(arr, seed = '') {
  const a = [...new Set(arr.filter(Boolean))];
  while (a.length < 4) a.push('—');
  const out = a.slice(0, 4);
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  for (let i = out.length - 1; i > 0; i--) {
    h = (h * 1664525 + 1013904223) >>> 0;
    const j = h % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const texts = parseTexts();
if (texts.length !== 16) {
  console.error('Attendu 16 textes, obtenu', texts.length);
  process.exit(1);
}

const html = fs.readFileSync(htmlSrc, 'utf8');
const passages = parsePassagesFromHtml(html);

texts.forEach(t => {
  const p = passages[t.num];
  if (p) {
    t.passage = p;
    t.texte = p.plain;
  } else {
    console.warn('Passage manquant pour LL', t.num);
    t.passage = { lines: [], plain: '', rows: [] };
    t.texte = '';
  }
  t.attendus = extractAttendus(t.sections);
  t.attendusByMouvement = groupAttendusByMouvement(t.attendus);
  t.attenduCount = t.attendus.length;
  t.lineCount = t.passage?.lines?.length || 0;
  if (t.attendus.length < 4) {
    console.warn(`LL${t.num}: seulement ${t.attendus.length} attendus — vérifie le corrigé`);
  }
});

const qcm = buildQcm(texts);
const cats = ['Toutes', 'Lecture linéaire (oral)'];

const attenduCounts = texts.map(t => `${t.id}:${t.attendus.length}`).join(', ');
console.log('Attendus par texte:', attenduCounts);

let js = `/* data-oral.js — 16 lectures linéaires (épreuve orale) */
/* Généré par scripts/build-oral-data.mjs — ne pas éditer à la main */
/* Sources: LL_1_16_GoogleDocs_ouvertures.txt + docs/textes/16_textes_BAC.html */

const ORAL_TEXTS = ${JSON.stringify(texts, null, 2)};

const ORAL_QCM = ${JSON.stringify(qcm, null, 2)};

const ORAL_QCM_CATS = ${JSON.stringify(cats)};

const ORAL_EXO_TIMER_SEC = 1800;

function getOralTextById(id) {
  return ORAL_TEXTS.find(t => t.id === id) || null;
}

function getOralCatalog() {
  return ORAL_TEXTS.map(t => ({
    id: t.id,
    num: t.num,
    auteur: t.auteur,
    oeuvre: t.oeuvre,
    titre: t.titre,
    problematique: t.problematique,
    attenduCount: (t.attendus || []).length,
    hasPassage: !!(t.texte && t.texte.length > 40),
    search: [t.auteur, t.oeuvre, t.titre, t.problematique].join(' ').toLowerCase(),
  }));
}

if (typeof PROC_QCM !== 'undefined' && typeof ORAL_QCM !== 'undefined') {
  ORAL_QCM.forEach(q => PROC_QCM.push(q));
  if (typeof PROC_QCM_CATS !== 'undefined' && !PROC_QCM_CATS.includes('Lecture linéaire (oral)')) {
    PROC_QCM_CATS.push('Lecture linéaire (oral)');
  }
}
`;

fs.writeFileSync(out, js, 'utf8');
console.log('OK:', out, '—', texts.length, 'textes,', qcm.length, 'QCM, passages HTML intégrés');
