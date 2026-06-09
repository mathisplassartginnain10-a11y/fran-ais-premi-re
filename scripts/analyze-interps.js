const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'js');
const files = fs.readdirSync(dir).filter(f => f.startsWith('data-gtextes') && f.endsWith('.js'));
const interps = [];

for (const f of files) {
  const s = fs.readFileSync(path.join(dir, f), 'utf8');
  let currentId = null;
  const lines = s.split('\n');
  for (const line of lines) {
    const idM = line.match(/id:\s*"(GT-\d+)"/);
    if (idM) currentId = idM[1];
    const attM = line.match(/\{\s*procede:\s*"([^"]+)",\s*citation:\s*"((?:\\.|[^"\\])*)",\s*interpretation:\s*"((?:\\.|[^"\\])*)"/);
    if (attM && currentId) {
      interps.push({
        id: currentId,
        file: f,
        proc: attM[1],
        cite: attM[2],
        interp: attM[3],
        line,
      });
    }
  }
}

function scoreQuality(i) {
  let score = 100;
  const p = i.proc.toLowerCase();
  const t = i.interp;
  if (t.length < 70) score -= 35;
  else if (t.length < 95) score -= 15;
  if (t.startsWith(i.proc + ' :') || t.startsWith(i.proc + ':')) score -= 10;
  if (/—\s*[a-zàéèêëïîôùûüç-]+\s+[a-zàéèêëïîôùûüç-]+\.$/i.test(t) && t.length < 100) score -= 25;
  if (!t.includes('«') && i.cite.includes('«')) score -= 5;
  const citeWords = (i.cite.match(/[A-Za-zÀ-ÿ]{4,}/g) || []).slice(0, 4);
  const hits = citeWords.filter(w => t.toLowerCase().includes(w.toLowerCase())).length;
  if (citeWords.length && hits === 0) score -= 20;
  return score;
}

const flagged = interps
  .map(i => ({ ...i, score: scoreQuality(i) }))
  .filter(i => i.score < 75)
  .sort((a, b) => a.score - b.score);

console.log('Total attendus:', interps.length);
console.log('Flagged low quality (<75):', flagged.length);
console.log('\nBy file:');
const byFile = {};
flagged.forEach(i => { byFile[i.file] = (byFile[i.file] || 0) + 1; });
Object.entries(byFile).sort((a,b)=>b[1]-a[1]).forEach(([f,c])=>console.log(c,f));

console.log('\nSample worst 20:');
flagged.slice(0, 20).forEach(i => {
  console.log(`[${i.score}] ${i.id} ${i.proc}`);
  console.log('  C:', i.cite.slice(0, 60));
  console.log('  I:', i.interp);
});

fs.writeFileSync(
  path.join(__dirname, 'flagged-interps.json'),
  JSON.stringify(flagged.map(({ line, ...r }) => r), null, 2)
);
console.log('\nWrote scripts/flagged-interps.json');
