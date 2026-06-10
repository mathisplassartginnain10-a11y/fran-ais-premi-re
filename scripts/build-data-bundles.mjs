/**
 * Concatène les fichiers data-gtextes-extra*.js en 3 chunks HTTP
 * (sources inchangées — édition dans js/data-gtextes-extra*.js).
 *
 * Usage: node scripts/build-data-bundles.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const JS = path.join(__dirname, '..', 'js');
const OUT = path.join(JS, 'built');

const CHUNKS = [
  {
    out: 'data-gtextes-chunk1.js',
    files: [
      'data-gtextes-extra.js',
      'data-gtextes-extra2.js',
      'data-gtextes-extra3.js',
      'data-gtextes-extra4.js',
      'data-gtextes-extra5.js',
      'data-gtextes-extra6.js',
      'data-gtextes-extra7.js',
    ],
  },
  {
    out: 'data-gtextes-chunk2.js',
    files: [
      'data-gtextes-extra8.js',
      'data-gtextes-extra9.js',
      'data-gtextes-extra10.js',
      'data-gtextes-extra11.js',
      'data-gtextes-extra12.js',
      'data-gtextes-extra13.js',
      'data-gtextes-extra14.js',
    ],
  },
  {
    out: 'data-gtextes-chunk3.js',
    files: [
      'data-gtextes-extra15.js',
      'data-gtextes-extra16.js',
      'data-gtextes-extra17.js',
      'data-gtextes-extra18.js',
      'data-gtextes-extra19.js',
      'data-gtextes-extra20.js',
      'data-gtextes-extra21.js',
    ],
  },
];

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

let totalKb = 0;
for (const chunk of CHUNKS) {
  const parts = chunk.files.map(f => {
    const p = path.join(JS, f);
    if (!fs.existsSync(p)) throw new Error('Fichier manquant: ' + f);
    return fs.readFileSync(p, 'utf8').trim();
  });
  const header = `/* Bundle auto — ${chunk.files.join(', ')} · ne pas éditer */\n`;
  const body = parts.join('\n\n');
  const outPath = path.join(OUT, chunk.out);
  fs.writeFileSync(outPath, header + body + '\n', 'utf8');
  const kb = fs.statSync(outPath).size / 1024;
  totalKb += kb;
  console.log(`${chunk.out}: ${kb.toFixed(1)} KB (${chunk.files.length} fichiers)`);
}
console.log(`Total bundles: ${totalKb.toFixed(1)} KB → ${OUT}`);
