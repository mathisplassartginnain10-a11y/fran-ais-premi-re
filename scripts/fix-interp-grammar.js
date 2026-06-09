/**
 * Corrige les formulations grammaticales récurrentes dans les interprétations.
 */
const fs = require('fs');
const path = require('path');

const JS_DIR = path.join(__dirname, '..', 'js');
const FILES = fs.readdirSync(JS_DIR).filter(f => /^data-gtextes/.test(f) && f.endsWith('.js'));

const REPLACEMENTS = [
  ['ressent alors distancie par l\'humour', 'éprouve une mise à distance comique grâce à l\'humour'],
  ['ressent alors critique les comportements ou les institutions par le rire', 'est invité à critiquer les mœurs et les institutions par le rire'],
  ['pour oblige le lecteur', 'pour obliger le lecteur'],
];

let total = 0;
for (const file of FILES) {
  const fp = path.join(JS_DIR, file);
  let content = fs.readFileSync(fp, 'utf8');
  let n = 0;
  for (const [from, to] of REPLACEMENTS) {
    const parts = content.split(from);
    if (parts.length > 1) {
      n += parts.length - 1;
      content = parts.join(to);
    }
  }
  if (n) {
    fs.writeFileSync(fp, content, 'utf8');
    console.log(`${file}: ${n} correction(s)`);
    total += n;
  }
}
console.log(`Total: ${total}`);
