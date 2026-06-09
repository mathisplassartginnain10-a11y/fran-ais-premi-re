const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'js');
const files = fs.readdirSync(dir).filter(f => /^data-gtextes/.test(f));
const all = new Map();
const withinDup = [];

for (const f of files) {
  const t = fs.readFileSync(path.join(dir, f), 'utf8');
  const ids = [...t.matchAll(/id:\s*"(GT-\d+)"/g)].map(m => m[1]);
  let idx = 0;
  for (const block of t.split(/attendus:\s*\[/).slice(1)) {
    const id = ids[idx++] || '?';
    const interps = [...block.matchAll(/interpretation:\s*"([^"]+)"/g)].map(m => m[1]);
    const seen = new Set();
    for (const i of interps) {
      if (seen.has(i)) withinDup.push({ id, f, interp: i.slice(0, 80) });
      seen.add(i);
      const k = i.toLowerCase().trim();
      all.set(k, (all.get(k) || 0) + 1);
    }
  }
}

const globalDup = [...all.entries()].filter(([, c]) => c > 2).sort((a, b) => b[1] - a[1]).slice(0, 20);
console.log('Doublons exacts dans un même texte:', withinDup.length);
withinDup.slice(0, 8).forEach(d => console.log(`  ${d.id} (${d.f}): ${d.interp}…`));
console.log('\nInterprétations identiques ≥3 fois:', globalDup.length);
globalDup.forEach(([i, c]) => console.log(`  [${c}] ${i.slice(0, 110)}…`));
