import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const JS = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'js');
const files = fs.readdirSync(JS).filter(f => /^data-gtextes/.test(f) && f.endsWith('.js') && !f.includes('oeuvre'));
const ids = new Map();
for (const f of files) {
  const s = fs.readFileSync(path.join(JS, f), 'utf8');
  for (const m of s.matchAll(/id:\s*"(GT-\d+)"/g)) {
    if (!ids.has(m[1])) ids.set(m[1], []);
    ids.get(m[1]).push(f);
  }
}
const dups = [...ids.entries()].filter(([, v]) => v.length > 1);
console.log('Total unique IDs:', ids.size);
console.log('Duplicate IDs:', dups.length);
dups.slice(0, 20).forEach(([id, fl]) => console.log(id, '→', fl.join(', ')));
const nums = [...ids.keys()].map(id => parseInt(id.slice(3), 10));
console.log('Max GT:', Math.max(...nums));
