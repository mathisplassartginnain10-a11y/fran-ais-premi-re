import {
  loadAllGtexts, loadExtraFile, isBadEntry, buildGoodDonorIndex, oeuvreKey,
} from './gtext-enrichment-lib.mjs';

const all = loadAllGtexts();
const donors = buildGoodDonorIndex(all);
const { entries } = loadExtraFile(12);
const bad = entries.filter(isBadEntry);
let withDonor = 0;
bad.forEach(t => {
  const k = oeuvreKey(t.auteur, t.oeuvre);
  const d = donors.get(k);
  if (d?.length) withDonor++;
  else console.log('no donor', t.id, t.auteur, t.oeuvre, t.titre);
});
console.log('bad', bad.length, 'with donor', withDonor);
