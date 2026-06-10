/** Supprime les entrées GT dupliquées (même id) dans extra12-21 — garde la première. */
import { loadExtraFile, writeExtraFile } from './gtext-enrichment-lib.mjs';

for (let num = 12; num <= 21; num++) {
  const { entries, original } = loadExtraFile(num);
  const seen = new Set();
  const deduped = [];
  let removed = 0;
  for (const e of entries) {
    if (seen.has(e.id)) { removed++; continue; }
    seen.add(e.id);
    deduped.push(e);
  }
  if (removed) {
    writeExtraFile(num, deduped, original);
    console.log(`extra${num}: -${removed} doublon(s) → ${deduped.length}`);
  }
}
