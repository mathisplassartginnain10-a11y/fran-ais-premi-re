/**
 * Vérifie que chaque gtextId des passages BAC pointe vers un GT existant.
 * Usage: node scripts/verify-bac-links.mjs
 */
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const JS = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'js');
const s = {};
vm.createContext(s);

function load(f) {
  let c = fs.readFileSync(path.join(JS, f), 'utf8');
  c = c.replace(/\bconst GRANDS_TEXTES\b/g, 'var GRANDS_TEXTES');
  c = c.replace(/\bconst GRANDS_TEXTES_EXTRA(\d+)\b/g, 'var GRANDS_TEXTES_EXTRA$1');
  vm.runInContext(c, s, { filename: f });
}

['data-gtextes.js', 'data-gtextes-extra.js'].forEach(load);
for (let i = 2; i <= 21; i++) {
  const f = `data-gtextes-extra${i}.js`;
  if (fs.existsSync(path.join(JS, f))) load(f);
}
load('data-bac-passages.js');
for (let i = 1; i <= 30; i++) {
  const f = `data-bac-passages-${String(i).padStart(2, '0')}.js`;
  if (!fs.existsSync(path.join(JS, f))) break;
  load(f);
}

const gtIds = new Set((s.GRANDS_TEXTES || []).map(t => t.id));
const passages = s.getAllBacPassages();
const bad = passages.filter(p => p.gtextId && !gtIds.has(p.gtextId));
const named = passages.filter(p => !/^(Acte \d|Chapitre \d|Poème \d|Passage \d|Extrait bac type)/.test(p.titre));

console.log('Passages BAC:', passages.length);
console.log('Liés GT:', passages.filter(p => p.gtextId).length);
console.log('Passages nommés:', named.length);
console.log('Liens invalides:', bad.length);
if (bad.length) {
  bad.slice(0, 10).forEach(p => console.log(' ', p.id, p.gtextId, p.auteur, p.titre.slice(0, 40)));
  process.exit(1);
}
console.log('OK — tous les gtextId sont valides.');
