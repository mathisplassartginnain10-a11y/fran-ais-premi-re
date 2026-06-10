import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/src="(js\/[^"]+)"/g)].map(m => m[1]);
let total = 0;
let n = 0;
scripts.forEach(s => {
  const p = path.join(root, s.split('?')[0]);
  if (fs.existsSync(p)) {
    total += fs.statSync(p).size;
    n++;
  }
});
console.log(`Scripts initiaux: ${n} fichiers, ${(total / 1024).toFixed(0)} KB`);
