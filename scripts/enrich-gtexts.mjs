/**
 * Enrichit un fichier data-gtextes-extra{N}.js :
 * - réécrit les entrées « bad » via corpus manuel ou donneur
 * - ajoute de nouvelles entrées (GT-748+)
 *
 * Usage: node scripts/enrich-gtexts.mjs 12
 */
import { execSync } from 'child_process';
import {
  loadAllGtexts, loadExtraFile, isBadEntry, writeExtraFile,
  buildGoodDonorIndex, oeuvreKey, validateEntry, mergeOeuvreById, att,
} from './gtext-enrichment-lib.mjs';
import { REWRITES } from './gtext-corpus/rewrites-all.mjs';
import { NEW_BY_FILE } from './gtext-corpus/new-entries.mjs';

const num = parseInt(process.argv[2], 10);
if (!num || num < 12 || num > 21) {
  console.error('Usage: node scripts/enrich-gtexts.mjs <12-21>');
  process.exit(1);
}

const all = loadAllGtexts();
const donors = buildGoodDonorIndex(all);
const usedTextes = new Set(all.filter(t => !isBadEntry(t)).map(t => t.texte.trim()));

function pickDonor(entry) {
  const k = oeuvreKey(entry.auteur, entry.oeuvre);
  const list = donors.get(k) || [];
  return list.find(d => d.texte.trim() !== entry.texte.trim() && !usedTextes.has(d.texte.trim()));
}

function applyRewrite(entry) {
  if (REWRITES[entry.id]) {
    const r = REWRITES[entry.id];
    return {
      ...entry,
      ...(r.titre ? { titre: r.titre } : {}),
      ...(r.auteur ? { auteur: r.auteur } : {}),
      ...(r.oeuvre ? { oeuvre: r.oeuvre } : {}),
      ...(r.genre ? { genre: r.genre } : {}),
      ...(r.diff != null ? { diff: r.diff } : {}),
      texte: r.texte,
      contexte: r.contexte || entry.contexte,
      attendus: r.attendus,
    };
  }
  const donor = pickDonor(entry);
  if (donor) {
    usedTextes.add(donor.texte.trim());
    return {
      ...entry,
      texte: donor.texte,
      contexte: donor.contexte || entry.contexte,
      attendus: donor.attendus.map(a => ({ ...a })),
    };
  }
  return entry;
}

function defaultOeuvreDesc(t) {
  return `${t.oeuvre} — extrait « ${t.titre} » (${t.genre}).`;
}

const { entries, original } = loadExtraFile(num);
let rewritten = 0;
const processed = entries.map(entry => {
  if (!isBadEntry(entry)) return entry;
  const next = applyRewrite(entry);
  if (next !== entry) rewritten++;
  const issues = validateEntry(next);
  if (issues.length) console.warn(`⚠ ${next.id} après rewrite: ${issues.join(', ')}`);
  return next;
});

const newOnes = (NEW_BY_FILE[num] || []).filter(n => !processed.some(p => p.id === n.id));
const merged = [...processed, ...newOnes];
writeExtraFile(num, merged, original);

if (newOnes.length) {
  mergeOeuvreById(newOnes, defaultOeuvreDesc);
}

try {
  execSync(`node --check js/data-gtextes-extra${num}.js`, { stdio: 'inherit' });
} catch {
  process.exit(1);
}

console.log(`extra${num}: ${rewritten} réécrit(s), ${newOnes.length} ajouté(s) → ${merged.length} entrées`);
