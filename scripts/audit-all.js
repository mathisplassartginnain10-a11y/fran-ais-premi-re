/**
 * Passe d audit locale — enchaîne les scripts de vérification.
 * Usage: node scripts/audit-all.js
 */
const { spawnSync } = require('child_process');
const path = require('path');

const root = path.join(__dirname, '..');
const scripts = [
  'audit-qcm.js',
  'audit-course-alignment.js',
  'verify-intro-sim.js',
  'test-exam-engine.js',
  'test-intro-sim-engine.js',
  'test-stats-qcm.js',
  'test-oral-data.js',
  'test-oral-validation.js',
];

let failed = 0;

console.log('=== audit-all ===\n');

for (const s of scripts) {
  const rel = path.join('scripts', s);
  console.log('---', s, '---');
  const r = spawnSync(process.execPath, [path.join(root, rel)], {
    cwd: root,
    stdio: 'inherit',
    env: process.env,
  });
  if (r.status !== 0) {
    failed++;
    console.error('FAILED:', s, '(exit', r.status, ')\n');
  } else {
    console.log('OK:', s, '\n');
  }
}

console.log(failed ? `=== ${failed} script(s) en échec ===` : '=== Tous les audits OK ===');
process.exit(failed ? 1 : 0);
