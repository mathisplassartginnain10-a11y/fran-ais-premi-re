/**
 * Remplace les entrées théâtre avec mélange personnages/œuvres.
 */
import { execSync } from 'child_process';
import { writeGtextFile, oeuvreKey, JS } from './gtext-enrichment-lib.mjs';
import {
  listGtextDataFiles, loadGtextFileEntries, extractTheatreSpeakers, checkCharacterCoherence,
} from './gtext-citation-lib.mjs';
import { CANONICAL_BY_WORK, CROSS_PLAY_MARKERS } from './gtext-corpus/canonical-passages.mjs';

function workKey(entry) {
  return oeuvreKey(entry.auteur, entry.oeuvre).replace(/\s*\(\d{4}\)\s*$/, '').trim();
}

function hasCrossPlay(entry) {
  const k = workKey(entry);
  const forbidden = CROSS_PLAY_MARKERS[k];
  if (!forbidden) return false;
  const speakers = extractTheatreSpeakers(entry.texte).map(s => s.toUpperCase());
  return speakers.some(sp => forbidden.some(f => sp.includes(f) || f.includes(sp)));
}

function pickCanonical(entry) {
  const k = workKey(entry);
  const pool = CANONICAL_BY_WORK[k];
  if (!pool?.length) return null;
  const n = parseInt(entry.id.slice(3), 10) || 0;
  return pool[n % pool.length];
}

const stats = { replaced: 0, typoFixed: 0, files: {} };

for (const file of listGtextDataFiles()) {
  const { entries, original } = loadGtextFileEntries(file);
  let touched = 0;

  const processed = entries.map(entry => {
    let e = entry;

    if (e.texte?.includes('PÈDRE')) {
      e = { ...e, texte: e.texte.replace(/PÈDRE/g, 'PHÈDRE') };
      stats.typoFixed++;
      touched++;
    }

    const charIssues = checkCharacterCoherence(e);
    if (!charIssues.length && !hasCrossPlay(e)) return e;

    if (hasCrossPlay(e) || charIssues.some(i => /appartient|impossible|non reconnu/i.test(i) && !/DOM JUAN|ÉLISE|MARIANE|LE PAUVRE|HÉCTOR/i.test(i))) {
      const canon = pickCanonical(e);
      if (canon) {
        stats.replaced++;
        touched++;
        return {
          ...e,
          titre: canon.titre,
          texte: canon.texte,
          contexte: canon.contexte,
          attendus: canon.attendus,
        };
      }
    }
    return e;
  });

  if (touched) {
    writeGtextFile(file, processed, original);
    stats.files[file] = touched;
  }
}

console.log('=== FIX PERSONNAGES GT ===');
console.log(JSON.stringify(stats, null, 2));

for (const f of listGtextDataFiles()) {
  execSync(`node --check ${JS}/${f}`, { stdio: 'pipe' });
}
