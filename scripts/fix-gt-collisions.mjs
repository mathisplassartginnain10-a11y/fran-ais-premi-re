/**
 * Corrige les IDs GT en double entre extra11 (fiches enrichies) et extra12 (générées).
 * Usage: node scripts/fix-gt-collisions.mjs [--dry]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const JS = path.join(__dirname, '..', 'js');
const DRY = process.argv.includes('--dry');
const START_NEW = 733;

function parseGtEntries(file) {
  const s = fs.readFileSync(path.join(JS, file), 'utf8');
  const entries = [];
  let cur = null;
  for (const line of s.split('\n')) {
    const idM = line.match(/^\s*id:\s*"(GT-\d+)"/);
    if (idM) {
      if (cur) entries.push(cur);
      cur = { id: idM[1], auteur: '', titre: '', oeuvre: '', file };
    }
    if (!cur) continue;
    const aM = line.match(/^\s*auteur:\s*"([^"]+)"/);
    if (aM) cur.auteur = aM[1];
    const tM = line.match(/^\s*titre:\s*"([^"]+)"/);
    if (tM) cur.titre = tM[1];
    const oM = line.match(/^\s*oeuvre:\s*"([^"]+)"/);
    if (oM) cur.oeuvre = oM[1];
  }
  if (cur) entries.push(cur);
  return entries;
}

function entryKey(e) {
  return [e.auteur, e.oeuvre, e.titre].join('|').toLowerCase();
}

const extra11 = parseGtEntries('data-gtextes-extra11.js');
const extra12 = parseGtEntries('data-gtextes-extra12.js');
const byId11 = new Map(extra11.map(e => [e.id, e]));
const byId12 = new Map(extra12.map(e => [e.id, e]));

const renames = new Map();
let next = START_NEW;
for (const [id, e12] of byId12) {
  const e11 = byId11.get(id);
  if (!e11 || entryKey(e11) === entryKey(e12)) continue;
  renames.set(id, { newId: `GT-${next++}`, entry12: e12, entry11: e11 });
}

console.log('Collisions à corriger:', renames.size);
renames.forEach((v, oldId) => {
  console.log(`  ${oldId} → ${v.newId}  (${v.entry12.auteur} · ${v.entry12.titre.slice(0, 35)})`);
});

if (DRY || !renames.size) process.exit(0);

let extra12Content = fs.readFileSync(path.join(JS, 'data-gtextes-extra12.js'), 'utf8');
for (const [oldId, { newId, entry12 }] of renames) {
  const lines = extra12Content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (!lines[i].includes(`id: "${oldId}"`)) continue;
    const block = lines.slice(i, Math.min(lines.length, i + 12)).join('\n');
    if (block.includes(`auteur: "${entry12.auteur}"`) && block.includes(`titre: "${entry12.titre}"`)) {
      lines[i] = lines[i].replace(`"${oldId}"`, `"${newId}"`);
      break;
    }
  }
  extra12Content = lines.join('\n');
}
fs.writeFileSync(path.join(JS, 'data-gtextes-extra12.js'), extra12Content);

const keyToNewId = new Map();
renames.forEach((v, oldId) => keyToNewId.set(entryKey(v.entry12), v.newId));

let bpUpdated = 0;
for (const file of fs.readdirSync(JS).filter(f => /^data-bac-passages-\d+\.js$/.test(f))) {
  let content = fs.readFileSync(path.join(JS, file), 'utf8');
  const nextContent = content.replace(
    /\["(BP-\d+)",\s*"((?:\\.|[^"\\])*)",\s*"((?:\\.|[^"\\])*)",\s*"((?:\\.|[^"\\])*)",\s*"((?:\\.|[^"\\])*)",\s*(\d+),\s*(\d+),\s*"((?:\\.|[^"\\])*)",\s*"(GT-\d+)"\]/g,
    (full, bpId, auteur, oeuvre, titre, genre, year, prob, ctx, gtId) => {
      if (!renames.has(gtId)) return full;
      const k = entryKey({ auteur, oeuvre, titre });
      const newId = keyToNewId.get(k);
      if (!newId) return full;
      bpUpdated++;
      return `["${bpId}", "${auteur}", "${oeuvre}", "${titre}", "${genre}", ${year}, ${prob}, "${ctx}", "${newId}"]`;
    }
  );
  if (nextContent !== content) fs.writeFileSync(path.join(JS, file), nextContent);
}
console.log('BAC passages mis à jour:', bpUpdated);

const oeuvrePath = path.join(JS, 'data-gtextes-oeuvre-by-id.js');
let oeuvreContent = fs.readFileSync(oeuvrePath, 'utf8');
for (const [, { newId, entry12 }] of renames) {
  if (oeuvreContent.includes(`"${newId}"`)) continue;
  const oe = entry12.oeuvre.replace(/\(\d{4}\)/, '').trim();
  const line = `  "${newId}": "Passage bac — ${entry12.titre} (${oe}, ${entry12.auteur}).",`;
  oeuvreContent = oeuvreContent.replace(/\n};\s*$/, `\n${line}\n};`);
}
fs.writeFileSync(oeuvrePath, oeuvreContent);
console.log('Done.');
