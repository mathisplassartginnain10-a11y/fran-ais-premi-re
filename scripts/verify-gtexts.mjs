/**
 * Vérification finale banque GT après enrichissement.
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import {
  loadAllGtexts, isBadEntry, validateEntry, JS,
} from './gtext-enrichment-lib.mjs';

const MARKER = "L'extrait invite à une lecture attentive des procédés";
const all = loadAllGtexts();
const bad = all.filter(isBadEntry);
const marker = all.filter(t => (t.texte || '').includes(MARKER));
const lens = all.map(t => (t.texte || '').length);
const avgLen = Math.round(lens.reduce((a, b) => a + b, 0) / lens.length);

const byGenre = {};
const byCentury = {};
const worldLit = all.filter(t => /trad\.|traduction|Dostoïevski|Tolstoï|Kafka|Cervantès|Goethe|Dickens|Shakespeare|Ibsen|Tchekhov|Whitman|Pouchkine|Gogol|Melville|Hawthorne|Stevenson|Wilde|Byron|Shelley|Poe \(|Crime et Châtiment|Don Quichotte|Hamlet|Macbeth|Werther/i.test(t.oeuvre + t.auteur + t.titre));

all.forEach(t => {
  byGenre[t.genre || '?'] = (byGenre[t.genre || '?'] || 0) + 1;
  const y = parseInt((t.oeuvre.match(/\((\d{4})\)/) || [])[1], 10);
  if (y) {
    const c = y < 1600 ? 'XVe-XVIe' : y < 1700 ? 'XVIIe' : y < 1800 ? 'XVIIIe' : y < 1900 ? 'XIXe' : 'XXe-XXIe';
    byCentury[c] = (byCentury[c] || 0) + 1;
  }
});

const newIds = all.filter(t => parseInt(t.id.slice(3), 10) >= 748);
const citeIssues = all.flatMap(t => validateEntry(t).map(i => `${t.id}:${i}`)).filter(x => x.includes('citation'));

console.log('=== VÉRIFICATION GT ===');
console.log('Total:', all.length);
console.log('Bad/thin:', bad.length);
console.log('Marqueur générique:', marker.length);
console.log('Longueur moyenne texte:', avgLen, 'car.');
console.log('Nouvelles (GT-748+):', newIds.length);
console.log('Littérature mondiale (heuristique):', worldLit.length, `(${Math.round(worldLit.length / newIds.length * 100)}% des nouvelles)`);
console.log('\nPar genre:', byGenre);
console.log('Par siècle:', byCentury);

if (bad.length) {
  console.log('\nBad IDs (max 20):', bad.slice(0, 20).map(t => t.id).join(', '));
}

const files = fs.readdirSync(JS).filter(f => /^data-gtextes/.test(f) && f.endsWith('.js') && !f.includes('oeuvre'));
let syntaxOk = true;
for (const f of files) {
  try {
    execSync(`node --check ${path.join(JS, f)}`, { stdio: 'pipe' });
  } catch {
    syntaxOk = false;
    console.error('Syntax error:', f);
  }
}
try {
  execSync(`node --check ${path.join(JS, 'data-gtextes-oeuvre-by-id.js')}`, { stdio: 'pipe' });
} catch {
  syntaxOk = false;
  console.error('Syntax error: data-gtextes-oeuvre-by-id.js');
}
console.log('\nSyntaxe JS:', syntaxOk ? 'OK' : 'ERREURS');
console.log('Citations hors texte:', citeIssues.length);
