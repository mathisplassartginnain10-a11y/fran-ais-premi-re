const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const ctx = vm.createContext({ console, window: {}, globalThis: {}, setTimeout, clearTimeout });
ctx.window = ctx.globalThis;

function load(rel) {
  let code = fs.readFileSync(path.join(root, rel), 'utf8');
  code = code.replace(
    /^const (PROC_QCM|GRAM_QCM|VOCAB_QCM|PROC_DATA|GRAM_COURS|VOCAB_COURS|EXERCICES)\b/gm,
    'var $1'
  );
  vm.runInContext(code, ctx, { filename: rel });
}

[
  'js/data-procedes.js',
  'js/data-grammaire.js',
  'js/data-vocabulaire.js',
  'js/data-vocabulaire-extra.js',
  'js/data-qcm-extra.js',
  'js/data-qcm-phrases.js',
  'js/data-qcm-generated.js',
  'js/qcm-filter.js',
].forEach(load);

function dist(arr, label) {
  const d = [0, 0, 0, 0];
  arr.forEach(q => {
    if (q.ans >= 0 && q.ans < 4) d[q.ans]++;
  });
  const pct = d.map(n => ((n / arr.length) * 100).toFixed(1) + '%');
  console.log(`${label} (${arr.length}) → ans 0:${d[0]} (${pct[0]}) 1:${d[1]} (${pct[1]}) 2:${d[2]} (${pct[2]}) 3:${d[3]} (${pct[3]})`);
}

dist(ctx.PROC_QCM, 'PROC');
dist(ctx.GRAM_QCM, 'GRAM');
dist(ctx.VOCAB_QCM, 'VOCAB');
