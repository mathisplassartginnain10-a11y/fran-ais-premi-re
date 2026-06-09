const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'js');
const files = fs.readdirSync(dir).filter(f => f.startsWith('data-gtextes') && f.endsWith('.js'));
const procs = new Map();
for (const f of files) {
  const s = fs.readFileSync(path.join(dir, f), 'utf8');
  for (const m of s.matchAll(/procede:\s*"([^"]+)"/g)) {
    procs.set(m[1], (procs.get(m[1]) || 0) + 1);
  }
}
console.log([...procs.entries()].sort((a, b) => b[1] - a[1]).map(x => `${x[1]}\t${x[0]}`).join('\n'));
