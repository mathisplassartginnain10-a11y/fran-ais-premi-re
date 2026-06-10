/**
 * Rapport exhaustif citations + cohérence personnages.
 * Usage: node scripts/check-gtext-citations.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { att } from './gtext-enrichment-lib.mjs';
import {
  listGtextDataFiles, loadGtextFileEntries, auditEntry, citationStrictInText,
} from './gtext-citation-lib.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPORT = path.join(__dirname, 'gtext-citation-report.json');

const report = {
  generatedAt: new Date().toISOString(),
  summary: {},
  files: {},
};

let total = 0;
let citeFailEntries = 0;
let citeFailCount = 0;
let charFailEntries = 0;

for (const file of listGtextDataFiles()) {
  const { entries } = loadGtextFileEntries(file);
  const fileReport = { entries: [], failCount: 0 };

  entries.forEach(entry => {
    total++;
    const { citationFails, characterIssues } = auditEntry(entry);
    if (citationFails.length || characterIssues.length) {
      fileReport.failCount++;
      if (citationFails.length) citeFailEntries++;
      citeFailCount += citationFails.length;
      if (characterIssues.length) charFailEntries++;
      fileReport.entries.push({
        id: entry.id,
        auteur: entry.auteur,
        oeuvre: entry.oeuvre,
        titre: entry.titre,
        genre: entry.genre,
        texteExcerpt: String(entry.texte || '').slice(0, 220).replace(/\n/g, ' '),
        citationFails,
        characterIssues,
      });
    }
  });

  if (fileReport.entries.length) report.files[file] = fileReport;
}

report.summary = {
  totalEntries: total,
  entriesWithCitationFail: citeFailEntries,
  totalCitationFails: citeFailCount,
  entriesWithCharacterIssue: charFailEntries,
  citationFailRate: Math.round((citeFailEntries / total) * 1000) / 10 + '%',
};

fs.writeFileSync(REPORT, JSON.stringify(report, null, 2), 'utf8');

console.log('=== RAPPORT CITATIONS GT ===');
console.log(JSON.stringify(report.summary, null, 2));
console.log('Fichier:', REPORT);
console.log('Fichiers avec échecs:', Object.keys(report.files).length);
