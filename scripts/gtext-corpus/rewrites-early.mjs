/**
 * Réécritures manuelles — entrées d'origine GT-001 → GT-260 (244 bad).
 */
import { REWRITES_EARLY_A } from './rewrites-early-a.mjs';
import { REWRITES_EARLY_B } from './rewrites-early-b.mjs';
import { REWRITES_EARLY_C } from './rewrites-early-c.mjs';
import { REWRITES_EARLY_D } from './rewrites-early-d.mjs';
import { REWRITES_EARLY_E } from './rewrites-early-e.mjs';

export const REWRITES_EARLY = {
  ...REWRITES_EARLY_A,
  ...REWRITES_EARLY_B,
  ...REWRITES_EARLY_C,
  ...REWRITES_EARLY_D,
  ...REWRITES_EARLY_E,
};
