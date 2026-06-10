/**
 * Vérification stricte des citations GT + cohérence personnages (théâtre).
 */
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { JS, oeuvreKey } from './gtext-enrichment-lib.mjs';

/** Personnages autorisés par œuvre (clé = oeuvreKey normalisée). */
export const WORK_CHARACTERS = {
  'racine|phèdre': new Set(['PHÈDRE', 'PÈDRE', 'HIPPOLYTE', 'THÉSÉE', 'OENONE', 'ŒNONE', 'ARISTE', 'ISMÈNE', 'PANOUPE', 'THÉRAMÈNE', 'GARDE', 'MESSAGER']),
  'racine|andromaque': new Set(['ANDROMAQUE', 'PYRRHUS', 'HERMIONE', 'ORESTE', 'PYLADE', 'CLEONE', 'CÉLIPHÉE', 'PHOENIX', 'HÉCTOR']),
  'racine|britannicus': new Set(['BRITANNICUS', 'NERON', 'NÉRON', 'AGrippine', 'AGRIPPINE', 'JUNIE', 'BURRHUS', 'NARCISSE', 'ALBINE']),
  'racine|bérénice': new Set(['BÉRÉNICE', 'BERENICE', 'TITUS', 'ANTIOCHUS', 'PHÉNICE', 'PAULIN', 'ARASPE']),
  'racine|mithridate': new Set(['MITHRIDATE', 'MONIME', 'XIPHARES', 'PHARNACE', 'ARBATE']),
  'molière|tartuffe': new Set(['TARTUFFE', 'ORGON', 'ELMIRE', 'CLÉANTE', 'DAMIS', 'VALÈRE', 'DORINE', 'MADAME PERNELLE', 'FLIPOTE', 'MARIANE', 'M. LOYAL', 'LE EXEMPT']),
  'molière|le misanthrope': new Set(['ALCESTE', 'CÉLIMÈNE', 'PHILINTE', 'ORONTE', 'ELIANTE', 'ARSINOÉ', 'ACASTE', 'CLITANDRE', 'BASQUE', 'DUBOIS']),
  'molière|l\'avare': new Set(['HARPAGON', 'ÉLIANTE', 'ÉLISE', 'ELIANE', 'CLÉANTE', 'VALÈRE', 'ANSELME', 'FROSINE', 'LA FLÈCHE', 'BRINDAVOINE', 'LA MERLUCIE', 'JACQUES', 'LE COMMISSAIRE']),
  'molière|dom juan': new Set(['DON JUAN', 'DOM JUAN', 'SGANARELLE', 'GUSMAN', 'DONNA ELVIRA', 'DON CARLOS', 'DON ALONSE', 'M. DIMANCHE', 'LA RAMÉE', 'PIERRE', 'LA STATUE', 'LE PAUVRE']),
  'corneille|le cid': new Set(['RODRIGUE', 'CHIMÈNE', 'DON DIÈGUE', 'DON GOMEZ', 'LE COMTE', 'L\'INFANTE', 'INFANTE', 'FERNANDO', 'LE ROI', 'DON ARIAS', 'DON SANCHO']),
  'corneille|horace': new Set(['HORACE', 'CAMILLE', 'CURIACE', 'SABINE', 'VALÈRE', 'LE ROI', 'JULIE', 'MESSAGER']),
  'corneille|cinna': new Set(['CINNA', 'ÉMILIE', 'AUGUSTE', 'LIVIE', 'MAXIME', 'FULVIE']),
};

/** Locuteurs toujours suspects dans une tragédie racinienne profane. */
const RACINE_FORBIDDEN_SPEAKERS = new Set(['LE CHŒUR', 'LE CHOEUR', 'CHŒUR', 'CHOEUR']);

export function normalizeForCitation(s) {
  return String(s ?? '')
    .normalize('NFD').replace(/\p{M}/gu, '')
    .replace(/[«»""''„]/g, '')
    .replace(/\.\.\.|…/g, ' ')
    .replace(/[^\p{L}\p{N}\s'-]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

export function stripGuillemets(citation) {
  return String(citation ?? '')
    .replace(/^[«\s]+|[»\s]+$/g, '')
    .replace(/^[«\s]+|[»\s]+$/g, '')
    .trim();
}

/** Découpe une citation en segments testables (/, →, …). */
export function splitCitationSegments(citation) {
  const raw = stripGuillemets(citation);
  if (!raw) return [];
  return raw
    .split(/\s*[\/→]\s*|\s*…\s*|\s*\.\.\.\s*/)
    .map(s => s.trim())
    .filter(s => s.replace(/[^\p{L}]/gu, '').length >= 4);
}

export function citationSegmentInText(segment, texte) {
  const seg = normalizeForCitation(segment);
  const body = normalizeForCitation(texte);
  if (!seg || !body) return false;
  if (body.includes(seg)) return true;
  const words = seg.split(' ').filter(w => w.length > 2);
  if (words.length < 3) return false;
  const pattern = words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('\\s+');
  return new RegExp(pattern, 'i').test(body);
}

export function citationStrictInText(citation, texte) {
  const segments = splitCitationSegments(citation);
  if (!segments.length) {
    const whole = stripGuillemets(citation);
    return whole.length >= 4 && citationSegmentInText(whole, texte);
  }
  return segments.every(seg => citationSegmentInText(seg, texte));
}

export function extractTheatreSpeakers(texte) {
  const speakers = [];
  for (const line of String(texte || '').split('\n')) {
    const m = line.match(/^([A-ZÉÈÊÀÂÔÛÇŒ][A-ZÉÈÊÀÂÔÛÇŒ\s\-'.]{1,40})$/);
    if (m) speakers.push(m[1].trim());
  }
  return [...new Set(speakers)];
}

function workCharacterKey(entry) {
  const k = oeuvreKey(entry.auteur, entry.oeuvre);
  const aliases = {
    'racine|bérénice (1670)': 'racine|bérénice',
    'racine|berenice (1670)': 'racine|bérénice',
  };
  const base = k.replace(/\s*\(\d{4}\)\s*$/, '').replace(/\s+/g, ' ');
  return aliases[base] || base.replace(/\(\d{4}\)/, '').trim();
}

export function checkCharacterCoherence(entry) {
  const genre = String(entry.genre || '').toLowerCase();
  if (!/théâtre|tragédie|comédie|theatre/.test(genre)) return [];

  const issues = [];
  const speakers = extractTheatreSpeakers(entry.texte);
  const wKey = workCharacterKey(entry);
  const allowed = WORK_CHARACTERS[wKey];

  speakers.forEach(sp => {
    const up = sp.toUpperCase();
    if (/RACINE/.test(entry.auteur?.toUpperCase?.() || entry.auteur || '') && RACINE_FORBIDDEN_SPEAKERS.has(up)) {
      issues.push(`Locuteur « ${sp} » impossible dans une tragédie de Racine (pas de chœur).`);
    }
    if (wKey === 'racine|andromaque' && up === 'OENONE') {
      issues.push('OENONE appartient à Phèdre, pas à Andromaque.');
    }
    if (wKey === 'racine|phèdre' && up === 'ANDROMAQUE') {
      issues.push('ANDROMAQUE n\'apparaît pas dans Phèdre.');
    }
    if (allowed) {
      const ok = [...allowed].some(a => normalizeForCitation(a) === normalizeForCitation(up));
      if (!ok && !/^(LE|LA|UN|UNE)\s/.test(up)) {
        issues.push(`Locuteur « ${sp} » non reconnu pour ${entry.oeuvre}.`);
      }
    }
  });
  return issues;
}

export function findQuoteInTexte(hint, texte) {
  const flat = String(texte || '').replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
  const target = normalizeForCitation(stripGuillemets(hint));
  if (target.length < 6) return null;

  if (normalizeForCitation(flat).includes(target)) {
    return extractOriginalByNorm(flat, target);
  }

  const words = target.split(' ').filter(w => w.length > 2);
  for (let size = Math.min(words.length, 8); size >= 3; size--) {
    const chunk = words.slice(0, size).join(' ');
    const idx = normalizeForCitation(flat).indexOf(chunk);
    if (idx >= 0) {
      return extractOriginalByNorm(flat, chunk, Math.max(chunk.length, target.length));
    }
  }
  return null;
}

function extractOriginalByNorm(flat, normNeedle, minLen) {
  const nf = normalizeForCitation(flat);
  let start = nf.indexOf(normNeedle);
  if (start < 0) return null;
  let end = start + Math.max(normNeedle.length, minLen || normNeedle.length);

  let oStart = 0; let oEnd = flat.length; let ni = 0;
  for (let i = 0; i < flat.length && ni < start; i++) {
    if (normalizeForCitation(flat[i]) || flat[i].match(/\s/)) ni++;
    if (ni <= start) oStart = i + 1;
  }
  for (let i = oStart; i < flat.length && ni < end; i++) {
    if (normalizeForCitation(flat[i]) || flat[i].match(/\s/)) ni++;
    oEnd = i + 1;
  }
  let quote = flat.slice(oStart, oEnd).trim();
  quote = quote.replace(/^[,;:\s]+|[,;:\s]+$/g, '');
  if (quote.length < 8) return null;
  return quote;
}

export function autoFixCitation(citation, texte) {
  const segments = splitCitationSegments(citation);
  if (!segments.length) {
    const q = findQuoteInTexte(citation, texte);
    return q ? `« ${q} »` : null;
  }
  const fixed = segments.map(seg => findQuoteInTexte(seg, texte)).filter(Boolean);
  if (fixed.length !== segments.length) {
    const single = findQuoteInTexte(segments[0], texte);
    if (single) return `« ${single} »`;
    return null;
  }
  if (fixed.length === 1) return `« ${fixed[0]} »`;
  return fixed.map(q => `« ${q} »`).join(' / ');
}

export function listGtextDataFiles() {
  return fs.readdirSync(JS)
    .filter(f => /^data-gtextes/.test(f) && f.endsWith('.js') && !f.includes('oeuvre'))
    .sort((a, b) => {
      if (a === 'data-gtextes.js') return -1;
      if (b === 'data-gtextes.js') return 1;
      return a.localeCompare(b, undefined, { numeric: true });
    });
}

export function loadGtextFileEntries(filename) {
  const sandbox = {};
  vm.createContext(sandbox);
  const p = path.join(JS, filename);
  let code = fs.readFileSync(p, 'utf8');
  code = code.replace(/\bconst (GRANDS_TEXTES\w*)\b/g, 'var $1');
  vm.runInContext(code, sandbox, { filename });
  const varName = code.match(/\b(?:const|var)\s+(GRANDS_TEXTES\w*)\s*=/)?.[1] || 'GRANDS_TEXTES';
  return {
    file: filename,
    varName,
    entries: sandbox[varName] || [],
    original: fs.readFileSync(p, 'utf8'),
  };
}

export function auditEntry(entry) {
  const citationFails = [];
  (entry.attendus || []).forEach((a, i) => {
    if (!citationStrictInText(a.citation, entry.texte)) {
      citationFails.push({ index: i, procede: a.procede, citation: a.citation });
    }
  });
  const characterIssues = checkCharacterCoherence(entry);
  return { citationFails, characterIssues };
}
