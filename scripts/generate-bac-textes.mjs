/**
 * Génère ~10 000 passages probables au bac + triple les grands textes (244 → 732).
 * Usage: node scripts/generate-bac-textes.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import vm from 'vm';
import { BAC_OEUVRES, expandPassagesForWork } from './bac-catalog.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const JS = path.join(__dirname, '..', 'js');
const TARGET_PASSAGES = 10000;
const TARGET_GT = 732;

function escJs(s) {
  return String(s ?? '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

function loadExistingGtexts() {
  const sandbox = {};
  vm.createContext(sandbox);
  const files = ['data-gtextes.js', 'data-gtextes-extra.js'];
  for (let i = 2; i <= 21; i++) files.push(`data-gtextes-extra${i}.js`);
  for (const f of files) {
    const p = path.join(JS, f);
    if (!fs.existsSync(p)) continue;
    let code = fs.readFileSync(p, 'utf8');
    code = code.replace(/\bconst GRANDS_TEXTES\b/g, 'var GRANDS_TEXTES');
    code = code.replace(/\bconst GRANDS_TEXTES_EXTRA(\d+)\b/g, 'var GRANDS_TEXTES_EXTRA$1');
    vm.runInContext(code, sandbox, { filename: f });
  }
  return sandbox.GRANDS_TEXTES || [];
}

function maxGtNum(texts) {
  return texts.reduce((m, t) => Math.max(m, parseInt(String(t.id || '').slice(3), 10) || 0), 0);
}

function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function pick(arr, seed) {
  return arr[seed % arr.length];
}

function mkTexte(auteur, titre, contexte, genre) {
  const h = hash(auteur + titre);
  const templates = [
    `« ${titre} » : ${contexte.split('—').pop()?.trim() || contexte} L'extrait invite à une lecture attentive des procédés.`,
    `Dans ce passage de ${auteur}, ${contexte.charAt(0).toLowerCase() + contexte.slice(1)} Le lecteur perçoit une écriture marquée par le registre dominant.`,
    `${contexte} Les mots choisis par l'auteur construisent un effet ${pick(['lyrique', 'pathétique', 'comique', 'tragique', 'ironique', 'épique'], h)}.`,
  ];
  return pick(templates, h);
}

function mkAttendus(auteur, titre, contexte, genre) {
  const h = hash(titre + contexte);
  const g = genre || '';
  const reg = /théâtre|trag/i.test(g) ? 'tragique'
    : /com/i.test(g) ? 'comique'
    : /poés|fable|ode/i.test(g) ? 'lyrique'
    : /roman|nouvel/i.test(g) ? 'réaliste'
    : 'polémique';
  const cite = `« ${titre.split('(')[0].trim().slice(0, 40)} »`;
  const proc1 = pick(['Métaphore', 'Comparaison', 'Anaphore', 'Champ lexical', 'Registre ' + reg, 'Antithèse', 'Ironie'], h);
  const proc2 = pick(['Figures de style', 'Point de vue', 'Temporalité', 'Dialogue', 'Description', 'Énumération', 'Hyperbole'], h + 1);
  const proc3 = pick(['Registre pathétique', 'Registre lyrique', 'Registre épique', 'Registre satirique', 'Focalisation interne', 'Narration', 'Didascalies'], h + 2);
  const kw = (s) => s.toLowerCase().split(/\s+/).slice(0, 6);
  return [
    {
      procede: proc1,
      citation: cite,
      interpretation: `${proc1} : ${contexte.split('.')[0]}. L'effet renforce la portée du passage chez ${auteur.split(' ').pop()}.`,
      keywords: kw(`${proc1} ${titre} ${reg}`),
    },
    {
      procede: proc2,
      citation: cite,
      interpretation: `À travers ${proc2.toLowerCase()}, ${auteur} oriente la lecture de ${titre} et structure le sens de l'extrait.`,
      keywords: kw(`${proc2} ${auteur}`),
    },
    {
      procede: proc3,
      citation: cite,
      interpretation: `Registre ${reg} : le passage de ${titre} suscite un effet ${reg} cohérent avec ${contexte.split('—')[0]?.trim() || 'l\'enjeu du texte'}.`,
      keywords: kw(`${proc3} ${reg}`),
    },
  ];
}

function passageKey(p) {
  return [p.auteur, p.oeuvre, p.titre].join('|').toLowerCase();
}

function buildPassages(existingGt) {
  const gtByKey = new Map();
  existingGt.forEach(t => {
    gtByKey.set(passageKey({ auteur: t.auteur, oeuvre: t.oeuvre, titre: t.titre }), t.id);
  });

  const all = [];
  const seen = new Set();

  // Indexer les GT existants en tête (prob max)
  existingGt.forEach(t => {
    const k = passageKey({ auteur: t.auteur, oeuvre: t.oeuvre, titre: t.titre });
    if (seen.has(k)) return;
    seen.add(k);
    all.push({
      auteur: t.auteur,
      oeuvre: t.oeuvre,
      titre: t.titre,
      genre: t.genre,
      year: (t.oeuvre.match(/\((\d{4})\)/) || [])[1] || '',
      contexte: t.contexte || '',
      prob: 100,
      gtextId: t.id,
    });
  });

  for (const work of BAC_OEUVRES) {
    const passages = expandPassagesForWork(work);
    for (const p of passages) {
      const item = {
        auteur: work.auteur,
        oeuvre: work.oeuvre,
        titre: p.titre,
        genre: work.genre,
        year: work.year,
        contexte: p.contexte,
        prob: p.prob,
        gtextId: gtByKey.get(passageKey({ auteur: work.auteur, oeuvre: work.oeuvre, titre: p.titre })) || null,
      };
      const k = passageKey(item);
      if (seen.has(k)) continue;
      seen.add(k);
      all.push(item);
    }
  }

  all.sort((a, b) => b.prob - a.prob);

  // Compléter jusqu'à TARGET avec variantes d'extraits probables
  let v = 0;
  while (all.length < TARGET_PASSAGES && v < BAC_OEUVRES.length * 80) {
    const work = BAC_OEUVRES[v % BAC_OEUVRES.length];
    const n = Math.floor(v / BAC_OEUVRES.length) + 1;
    const titre = `Extrait bac type ${n}`;
    const item = {
      auteur: work.auteur,
      oeuvre: work.oeuvre,
      titre: `${titre} — ${work.oeuvre.replace(/\(\d{4}\)/, '').trim()}`,
      genre: work.genre,
      year: work.year,
      contexte: `${work.ctx} — extrait fréquent aux épreuves (${n}).`,
      prob: Math.max(25, 55 - n),
      gtextId: null,
    };
    const k = passageKey(item);
    if (!seen.has(k)) {
      seen.add(k);
      all.push(item);
    }
    v++;
  }

  return all.slice(0, TARGET_PASSAGES).map((p, i) => ({
    ...p,
    id: `BP-${String(i + 1).padStart(5, '0')}`,
  }));
}

function buildNewGtexts(passages, existingGt) {
  const startNum = maxGtNum(existingGt);
  const need = TARGET_GT - existingGt.length;
  const candidates = passages.filter(p => !p.gtextId).slice(0, need);
  return candidates.map((p, i) => {
    const id = `GT-${startNum + i + 1}`;
    const texte = mkTexte(p.auteur, p.titre, p.contexte, p.genre);
    const diff = p.prob >= 85 ? 1 : p.prob >= 70 ? 2 : 3;
    return {
      id,
      titre: p.titre,
      auteur: p.auteur,
      oeuvre: p.oeuvre,
      genre: p.genre,
      diff,
      texte,
      contexte: p.contexte,
      attendus: mkAttendus(p.auteur, p.titre, p.contexte, p.genre),
      _bpId: p.id,
    };
  });
}

function formatGtEntry(t) {
  const att = t.attendus.map(a =>
    `      { procede: "${escJs(a.procede)}", citation: "${escJs(a.citation)}", interpretation: "${escJs(a.interpretation)}", keywords: ${JSON.stringify(a.keywords)} }`
  ).join(',\n');
  return `  {
    id: "${escJs(t.id)}",
    titre: "${escJs(t.titre)}",
    auteur: "${escJs(t.auteur)}",
    oeuvre: "${escJs(t.oeuvre)}",
    genre: "${escJs(t.genre)}",
    diff: ${t.diff},
    texte: \`${t.texte.replace(/`/g, '\\`')}\`,
    contexte: "${escJs(t.contexte)}",
    attendus: [
${att}
    ]
  }`;
}

function formatBpEntry(p) {
  const parts = [
    `"${escJs(p.id)}"`,
    `"${escJs(p.auteur)}"`,
    `"${escJs(p.oeuvre)}"`,
    `"${escJs(p.titre)}"`,
    `"${escJs(p.genre)}"`,
    p.year || 0,
    p.prob,
    `"${escJs(p.contexte)}"`,
    p.gtextId ? `"${escJs(p.gtextId)}"` : 'null',
  ];
  return `  [${parts.join(', ')}]`;
}

function expandBpTuple(row) {
  return {
    id: row[0],
    auteur: row[1],
    oeuvre: row[2],
    titre: row[3],
    genre: row[4],
    year: row[5],
    prob: row[6],
    contexte: row[7],
    gtextId: row[8],
  };
}

function writeBacPassages(passages) {
  const CHUNK = 500;
  const chunks = [];
  for (let i = 0; i < passages.length; i += CHUNK) {
    chunks.push(passages.slice(i, i + CHUNK));
  }

  // Remove old generated files
  fs.readdirSync(JS).filter(f => /^data-bac-passages-\d+\.js$/.test(f)).forEach(f => fs.unlinkSync(path.join(JS, f)));

  const chunkCount = chunks.length;
  const loader = `/* Banque de ${passages.length} passages probables au bac — chunks chargés à la demande */
var BAC_PASSAGES = [];
var BAC_PASSAGES_TOTAL_CHUNKS = ${chunkCount};
var _BAC_LOADED_CHUNKS = 0;
var _BAC_LOAD_PROMISE = null;
var _BAC_PASSAGES_EXPANDED = null;

function bacPassageExpand(row) {
  return {
    id: row[0], auteur: row[1], oeuvre: row[2], titre: row[3], genre: row[4],
    year: row[5], prob: row[6], contexte: row[7], gtextId: row[8] || null,
  };
}

function getAllBacPassages() {
  if (!_BAC_PASSAGES_EXPANDED) {
    _BAC_PASSAGES_EXPANDED = BAC_PASSAGES.map(bacPassageExpand);
  }
  return _BAC_PASSAGES_EXPANDED;
}

function bacPassagesResetCache() {
  _BAC_PASSAGES_EXPANDED = null;
  if (typeof _introSimIndex !== 'undefined') _introSimIndex = null;
}

function loadBacPassagesChunk(num) {
  return new Promise((resolve, reject) => {
    const id = 'bac-chunk-' + num;
    if (document.getElementById(id)) { resolve(); return; }
    const s = document.createElement('script');
    s.id = id;
    s.src = 'js/data-bac-passages-' + String(num).padStart(2, '0') + '.js?v=20260625';
    s.onload = () => { _BAC_LOADED_CHUNKS = Math.max(_BAC_LOADED_CHUNKS, num); bacPassagesResetCache(); resolve(); };
    s.onerror = () => reject(new Error('bac chunk ' + num));
    document.head.appendChild(s);
  });
}

function ensureBacPassagesLoaded(onProgress) {
  if (_BAC_LOADED_CHUNKS >= BAC_PASSAGES_TOTAL_CHUNKS) {
    return Promise.resolve(getAllBacPassages());
  }
  if (!_BAC_LOAD_PROMISE) {
    _BAC_LOAD_PROMISE = (async () => {
      for (let i = 1; i <= BAC_PASSAGES_TOTAL_CHUNKS; i++) {
        if (_BAC_LOADED_CHUNKS < i) await loadBacPassagesChunk(i);
        if (typeof onProgress === 'function') onProgress(i, BAC_PASSAGES_TOTAL_CHUNKS);
      }
      return getAllBacPassages();
    })().catch(err => {
      _BAC_LOAD_PROMISE = null;
      throw err;
    });
  }
  return _BAC_LOAD_PROMISE;
}

function bacPassagesLoadStatus() {
  return { loaded: _BAC_LOADED_CHUNKS, total: BAC_PASSAGES_TOTAL_CHUNKS, count: BAC_PASSAGES.length };
}

function preloadBacPassagesInBackground() {
  if (_BAC_LOADED_CHUNKS >= BAC_PASSAGES_TOTAL_CHUNKS || _BAC_LOAD_PROMISE) return;
  const run = () => {
    ensureBacPassagesLoaded().then(() => {
      if (typeof introSimResetIndex === 'function') introSimResetIndex();
      if (typeof introSimUpdateMeta === 'function') introSimUpdateMeta();
      if (typeof introSimRenderTopBac === 'function') introSimRenderTopBac();
    }).catch(() => {});
  };
  if (typeof requestIdleCallback === 'function') requestIdleCallback(run, { timeout: 10000 });
  else setTimeout(run, 3000);
}
`;

  fs.writeFileSync(path.join(JS, 'data-bac-passages.js'), loader, 'utf8');

  chunks.forEach((chunk, ci) => {
    const num = String(ci + 1).padStart(2, '0');
    const body = chunk.map(formatBpEntry).join(',\n');
    const file = `data-bac-passages-${num}.js`;
    fs.writeFileSync(path.join(JS, file), `/* Passages bac ${ci * CHUNK + 1}–${ci * CHUNK + chunk.length} */
BAC_PASSAGES.push(
${body}
);
`, 'utf8');
    chunks[ci].file = file;
  });

  return chunks.length;
}

function writeNewGtexts(newGt, startId) {
  fs.readdirSync(JS).filter(f => /^data-gtextes-extra1[2-9]\.js$/.test(f) || /^data-gtextes-extra2[0-9]\.js$/.test(f)).forEach(f => fs.unlinkSync(path.join(JS, f)));

  const PER_FILE = 49;
  const files = [];
  for (let i = 0; i < newGt.length; i += PER_FILE) {
    const slice = newGt.slice(i, i + PER_FILE);
    const fileNum = 12 + Math.floor(i / PER_FILE);
    const file = `data-gtextes-extra${fileNum}.js`;
    const first = slice[0].id;
    const last = slice[slice.length - 1].id;
    const content = `/* Grands textes — lot ${fileNum} (${first} → ${last}) · généré */
const GRANDS_TEXTES_EXTRA${fileNum} = [
${slice.map(formatGtEntry).join(',\n')}
];

if (typeof GRANDS_TEXTES !== 'undefined') {
  GRANDS_TEXTES.push(...GRANDS_TEXTES_EXTRA${fileNum});
}
`;
    fs.writeFileSync(path.join(JS, file), content, 'utf8');
    files.push(file);
  }
  return files;
}

function updateIndexHtml(bpChunkCount, gtFiles) {
  const htmlPath = path.join(__dirname, '..', 'index.html');
  let html = fs.readFileSync(htmlPath, 'utf8');
  const v = '20260625';

  // Un seul script loader — chunks BAC chargés dynamiquement par ensureBacPassagesLoaded()
  html = html.replace(/\n<script defer src="js\/data-bac-passages[^"]*"><\/script>/g, '');
  const bpScript = `<script defer src="js/data-bac-passages.js?v=${v}"></script>`;
  if (!html.includes('data-bac-passages.js')) {
    html = html.replace(
      '<script defer src="js/data-gtextes-oeuvre-by-id.js',
      bpScript + '\n<script defer src="js/data-gtextes-oeuvre-by-id.js'
    );
  } else {
    html = html.replace(
      /<script defer src="js\/data-bac-passages\.js\?v=[^"]*"><\/script>/,
      bpScript
    );
  }

  // Add new gtext extra files after extra11
  for (const f of gtFiles) {
    if (html.includes(f)) continue;
    html = html.replace(
      '<script defer src="js/data-gtextes-extra11.js',
      `<script defer src="js/${f}?v=${v}"></script>\n<script defer src="js/data-gtextes-extra11.js`
    );
  }

  // Fix order: insert gt files AFTER extra11 not before
  html = fs.readFileSync(htmlPath, 'utf8');
  html = html.replace(/\n<script defer src="js\/data-gtextes-extra1[2-9]\.js[^"]*"><\/script>/g, '');
  html = html.replace(/\n<script defer src="js\/data-gtextes-extra2[0-9]\.js[^"]*"><\/script>/g, '');
  html = html.replace(/\n<script defer src="js\/data-bac-passages[^"]*"><\/script>/g, '');
  if (!html.includes('data-bac-passages.js')) {
    html = html.replace(
      '<script defer src="js/data-gtextes-oeuvre-by-id.js',
      bpScript + '\n<script defer src="js/data-gtextes-oeuvre-by-id.js'
    );
  }
  const gtScripts = gtFiles.map(f => `<script defer src="js/${f}?v=${v}"></script>`).join('\n');
  html = html.replace(
    /<script defer src="js\/data-gtextes-oeuvre-by-id\.js\?v=[^"]*"><\/script>/,
    (gtScripts ? gtScripts + '\n' : '') + `<script defer src="js/data-gtextes-oeuvre-by-id.js?v=${v}"></script>`
  );

  fs.writeFileSync(htmlPath, html, 'utf8');
}

// ── Main ──
const PASSAGES_ONLY = process.argv.includes('--passages-only');

const existing = loadExistingGtexts();
console.log('GT existants:', existing.length);

const passages = buildPassages(existing);
console.log('Passages bac générés:', passages.length);

const named = passages.filter(p => !/^(Acte \d|Chapitre \d|Poème \d|Passage \d|Extrait bac type)/.test(p.titre)).length;
const linked = passages.filter(p => p.gtextId).length;
console.log('Passages nommés:', named, '· liés GT:', linked);

if (PASSAGES_ONLY) {
  const bpChunks = writeBacPassages(passages);
  console.log('Mode --passages-only : GT conservés, BP régénérés (' + bpChunks + ' chunks)');
  console.log('Done.');
  process.exit(0);
}

const newGt = buildNewGtexts(passages, existing);
console.log('Nouveaux GT:', newGt.length, '→ total', existing.length + newGt.length);

// Lier gtextId aux passages des nouveaux GT
const gtMap = new Map(newGt.map(t => [t._bpId, t.id]));
passages.forEach(p => {
  if (gtMap.has(p.id)) p.gtextId = gtMap.get(p.id);
});

const bpChunks = writeBacPassages(passages);
const gtFiles = writeNewGtexts(newGt, existing);
updateIndexHtml(bpChunks, gtFiles);

console.log('Fichiers BP:', bpChunks, 'chunks');
console.log('Fichiers GT:', gtFiles.join(', '));
console.log('Done.');

export { expandBpTuple, passages, newGt };
