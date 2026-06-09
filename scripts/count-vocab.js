const fs = require('fs');
const vm = require('vm');
const root = 'c:/Users/mathi/OneDrive/Documents/cours/français/js';
const ctx = { console };
vm.createContext(ctx);

function load(name) {
  let c = fs.readFileSync(`${root}/${name}`, 'utf8');
  c = c.replace(/^const (VOCAB_COURS|VOCAB_QCM|VOCAB_CATS|VOCAB_QCM_CATS)\b/gm, 'var $1');
  vm.runInContext(c, ctx, { filename: name });
}

load('data-vocabulaire.js');
load('data-vocabulaire-extra.js');

function norm(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim();
}

let dups = 0;
ctx.VOCAB_QCM.forEach(q => {
  const seen = new Set();
  q.opts.forEach(o => {
    const k = norm(o);
    if (seen.has(k)) dups++;
    seen.add(k);
  });
});

console.log('Fiches:', ctx.VOCAB_COURS.length);
console.log('QCM:', ctx.VOCAB_QCM.length);
console.log('Categories:', ctx.VOCAB_CATS.join(' | '));
console.log('Duplicate options in questions:', dups);
