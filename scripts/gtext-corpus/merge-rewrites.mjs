/**
 * Fusionne rewrites-part-a/b/c/d dans rewrites-all.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { REWRITES } from './rewrites-all.mjs';
import { REWRITES_PART_A } from './rewrites-part-a.mjs';
import { REWRITES_PART_B } from './rewrites-part-b.mjs';
import { REWRITES_PART_C } from './rewrites-part-c.mjs';
import { REWRITES_PART_D } from './rewrites-part-d.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TARGET = path.join(__dirname, 'rewrites-all.mjs');

const NEED = [
  'GT-441','GT-444','GT-445','GT-446','GT-447','GT-448','GT-449','GT-450','GT-451','GT-452','GT-453','GT-455','GT-458','GT-460','GT-461','GT-464','GT-465','GT-466','GT-469','GT-471','GT-472','GT-473','GT-474','GT-475','GT-476','GT-478','GT-480','GT-481','GT-482','GT-484','GT-485','GT-486','GT-487','GT-488',
  'GT-490','GT-491','GT-493','GT-494','GT-495','GT-497','GT-498','GT-499','GT-500','GT-501','GT-502','GT-503','GT-505','GT-507','GT-508','GT-509','GT-511','GT-512','GT-513','GT-514','GT-515','GT-516','GT-518','GT-519','GT-521','GT-526','GT-527','GT-528','GT-531','GT-532','GT-534','GT-535','GT-537',
  'GT-539','GT-540','GT-541','GT-542','GT-544','GT-545','GT-546','GT-547','GT-550','GT-551','GT-555','GT-556','GT-557','GT-558','GT-559','GT-560','GT-562','GT-563','GT-564','GT-566','GT-568','GT-570','GT-573','GT-575','GT-576','GT-577','GT-578',
  'GT-580','GT-582','GT-583','GT-584','GT-585','GT-587',
];

const incoming = { ...REWRITES_PART_A, ...REWRITES_PART_B, ...REWRITES_PART_C, ...REWRITES_PART_D };
const missing = NEED.filter(id => !incoming[id] && !REWRITES[id]);
if (missing.length) {
  console.error('Missing entries:', missing.join(', '));
  process.exit(1);
}

let src = fs.readFileSync(TARGET, 'utf8');
if (src.includes('REWRITES_PART_A')) {
  console.log('Already merged');
} else {
  src = src.replace(
    "import { att } from '../gtext-enrichment-lib.mjs';",
    `import { att } from '../gtext-enrichment-lib.mjs';
import { REWRITES_PART_A } from './rewrites-part-a.mjs';
import { REWRITES_PART_B } from './rewrites-part-b.mjs';
import { REWRITES_PART_C } from './rewrites-part-c.mjs';
import { REWRITES_PART_D } from './rewrites-part-d.mjs';`,
  );
  src = src.replace(/\n};\s*$/, `,
  ...REWRITES_PART_A,
  ...REWRITES_PART_B,
  ...REWRITES_PART_C,
  ...REWRITES_PART_D,
};
`);
  fs.writeFileSync(TARGET, src);
  console.log('Merged into rewrites-all.mjs');
}

const merged = { ...REWRITES, ...incoming };
console.log('Total REWRITES keys:', Object.keys(merged).length);
