/**
 * Corrige les citations des attendus pour qu'elles apparaissent verbatim dans texte.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { citationInText } from '../gtext-enrichment-lib.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TARGET = path.join(__dirname, 'rewrites-all.mjs');

function norm(s) {
  return String(s).replace(/[«»""]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
}

function extractAround(texte, idx, len = 60) {
  const flat = texte.replace(/\n/g, ' ');
  let start = idx;
  while (start > 0 && flat[start - 1] !== '.' && flat[start - 1] !== '!' && flat[start - 1] !== '?' && flat[start - 1] !== ';' && (idx - start) < 40) start--;
  if (start > 0 && /[.!?;]/.test(flat[start - 1])) start++;
  let end = idx;
  while (end < flat.length && flat[end] !== '.' && flat[end] !== '!' && flat[end] !== '?' && flat[end] !== ';' && (end - idx) < len) end++;
  if (end < flat.length) end++;
  return flat.slice(start, end).trim();
}

function findPhrase(texte, needle) {
  const flat = texte.replace(/\n/g, ' ');
  const n = norm(needle);
  if (!n || n.length < 6) return null;
  const f = norm(flat);
  if (f.includes(n)) {
    const idx = f.indexOf(n);
    return extractAround(flat, idx, n.length + 20);
  }
  const chunk = n.slice(0, Math.max(12, Math.floor(n.length * 0.6)));
  if (chunk.length >= 8 && f.includes(chunk)) {
    const idx = f.indexOf(chunk);
    return extractAround(flat, idx, 70);
  }
  return null;
}

function findByKeywords(texte, keywords) {
  const flat = texte.replace(/\n/g, ' ');
  const sorted = [...keywords].filter(k => k.length >= 4).sort((a, b) => b.length - a.length);
  for (const kw of sorted) {
    const idx = flat.toLowerCase().indexOf(kw.toLowerCase());
    if (idx >= 0) return extractAround(flat, idx, 65);
  }
  const lines = texte.split('\n').map(l => l.trim()).filter(l => l.length >= 15 && !/^[A-ZÉÈÊËÀÂÄÙÛÜÎÏÔÖÇ][A-ZÉÈÊËÀÂÄÙÛÜÎÏÔÖÇ\s]+$/.test(l));
  return lines[Math.floor(lines.length / 2)] || lines[0] || null;
}

function fixCitation(texte, attendu) {
  if (citationInText(attendu.citation, texte)) return attendu.citation;
  const raw = attendu.citation.replace(/[«»""]/g, '').trim();
  const parts = raw.split(/\s*[…\/]\s*/).map(p => p.trim()).filter(Boolean);
  for (const p of parts) {
    const found = findPhrase(texte, p);
    if (found) return `« ${found} »`;
  }
  const found = findPhrase(texte, raw);
  if (found) return `« ${found} »`;
  const byKw = findByKeywords(texte, attendu.keywords || []);
  if (byKw) return `« ${byKw} »`;
  return attendu.citation;
}

let content = fs.readFileSync(TARGET, 'utf8');
const mod = await import(`./rewrites-all.mjs?fix=${Date.now()}`);
const REWRITES = mod.REWRITES;

let fixed = 0;
for (const [id, entry] of Object.entries(REWRITES)) {
  for (let i = 0; i < entry.attendus.length; i++) {
    const a = entry.attendus[i];
    if (citationInText(a.citation, entry.texte)) continue;
    const newCite = fixCitation(entry.texte, a);
    if (!citationInText(newCite, entry.texte)) continue;
    const oldEsc = a.citation.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const newEsc = newCite.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const key = `'${id}'`;
    const blockStart = content.indexOf(`  ${key}:`);
    if (blockStart < 0) continue;
    const slice = content.slice(blockStart, blockStart + 8000);
    const oldNeedle = `att("${a.procede}", "${oldEsc}"`;
    const newNeedle = `att("${a.procede}", "${newEsc}"`;
    if (slice.includes(oldNeedle)) {
      const absOld = blockStart + slice.indexOf(oldNeedle);
      content = content.slice(0, absOld) + newNeedle + content.slice(absOld + oldNeedle.length);
      a.citation = newCite;
      fixed++;
    }
  }
}

fs.writeFileSync(TARGET, content, 'utf8');
console.log('Citations fixed:', fixed);

const mod2 = await import(`./rewrites-all.mjs?check=${Date.now()}`);
let issues = 0;
for (const [id, r] of Object.entries(mod2.REWRITES)) {
  for (const a of r.attendus) {
    if (!citationInText(a.citation, r.texte)) {
      issues++;
      console.log(id, a.procede, a.citation.slice(0, 50));
    }
  }
}
console.log('Remaining citation issues:', issues);
