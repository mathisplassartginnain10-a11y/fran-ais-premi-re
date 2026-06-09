#!/usr/bin/env node
/**
 * Serveur local : fichiers statiques + Ollama GPU (VRAM) + proxy.
 * Usage : node scripts/local-server.mjs  (ou start.ps1)
 */
import http from 'http';
import fs from 'fs';
import path from 'path';
import { spawn, spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const PORT = parseInt(process.env.BAC_PORT || '8765', 10);
const HOST = '127.0.0.1';
const OLLAMA = `http://${HOST}:11434`;

const BAC_MODEL = 'bac-qwen3-14b';
const LEGACY_MODEL = 'qwen3:14b';
const MODELFILE = path.join(__dirname, 'Modelfile.bac-qwen');
const GPU_CTX = 8192;
const GPU_OPTS = { num_ctx: GPU_CTX, num_gpu: 999, num_thread: 2, num_batch: 384 };

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

/** Variables d'environnement pour forcer CUDA / VRAM (NVIDIA Windows) */
function ollamaGpuEnv() {
  return {
    ...process.env,
    OLLAMA_LLM_LIBRARY: process.env.OLLAMA_LLM_LIBRARY || 'cuda',
    CUDA_VISIBLE_DEVICES: process.env.CUDA_VISIBLE_DEVICES || '0',
    OLLAMA_FLASH_ATTENTION: '1',
    OLLAMA_MAX_LOADED_MODELS: '1',
    OLLAMA_NUM_PARALLEL: '1',
    OLLAMA_KEEP_ALIVE: '60m',
    OLLAMA_KV_CACHE_TYPE: process.env.OLLAMA_KV_CACHE_TYPE || 'q8_0',
    OLLAMA_HOST: `${HOST}:11434`,
  };
}

function stopOllamaProcesses() {
  if (process.platform === 'win32') {
    spawnSync('taskkill', ['/F', '/IM', 'ollama.exe'], { shell: true, stdio: 'ignore' });
    spawnSync('taskkill', ['/F', '/IM', 'ollama app.exe'], { shell: true, stdio: 'ignore' });
  } else {
    spawnSync('pkill', ['-f', 'ollama serve'], { stdio: 'ignore' });
  }
  return sleep(1500);
}

function startOllamaServe() {
  const env = ollamaGpuEnv();
  const child = spawn('ollama', ['serve'], {
    detached: true,
    stdio: 'ignore',
    shell: true,
    env,
  });
  child.unref();
  console.log('[ollama] serve lancé (CUDA · VRAM uniquement)');
}

async function ollamaUp() {
  try {
    const ac = new AbortController();
    const t = setTimeout(() => ac.abort(), 3500);
    const r = await fetch(`${OLLAMA}/api/tags`, { signal: ac.signal });
    clearTimeout(t);
    return r.ok;
  } catch {
    return false;
  }
}

async function ollamaPs() {
  try {
    const r = await fetch(`${OLLAMA}/api/ps`, { signal: AbortSignal.timeout(5000) });
    if (!r.ok) return [];
    const j = await r.json();
    return j.models || [];
  } catch {
    return [];
  }
}

function isFullGpu(processor) {
  return /100%\s*GPU/i.test(processor || '');
}

async function listOllamaModels() {
  try {
    const r = await fetch(`${OLLAMA}/api/tags`, { signal: AbortSignal.timeout(4000) });
    if (!r.ok) return [];
    const j = await r.json();
    return (j.models || []).map(m => m.name);
  } catch {
    return [];
  }
}

async function ensureBacGpuModel() {
  const names = await listOllamaModels();
  if (!names.some(n => n === BAC_MODEL || n.startsWith(`${BAC_MODEL}:`))) {
    if (!fs.existsSync(MODELFILE)) {
      return { ok: false, error: 'Modelfile.bac-qwen introuvable' };
    }
    console.log(`[ollama] Création ${BAC_MODEL} (ctx ${GPU_CTX} · GPU)…`);
    const r = spawnSync('ollama', ['create', BAC_MODEL, '-f', MODELFILE], {
      cwd: ROOT,
      shell: true,
      encoding: 'utf8',
      env: ollamaGpuEnv(),
      timeout: 300000,
    });
    if (r.status !== 0) {
      console.warn('[ollama] create:', r.stderr || r.stdout || r.status);
      return { ok: false, error: 'Impossible de créer bac-qwen3-14b' };
    }
  }
  return { ok: true, model: BAC_MODEL };
}

async function unloadModel(name) {
  if (!name) return;
  try {
    await fetch(`${OLLAMA}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: name,
        keep_alive: 0,
        messages: [{ role: 'user', content: '.' }],
        stream: false,
      }),
      signal: AbortSignal.timeout(12000),
    });
  } catch { /* ignore */ }
}

/** Vide la RAM/VRAM des modèles chargés puis précharge bac-qwen3-14b sur GPU */
async function preloadGpuModel() {
  const loaded = await ollamaPs();
  for (const m of loaded) {
    await unloadModel(m.name);
  }
  await unloadModel(LEGACY_MODEL);
  await unloadModel(BAC_MODEL);

  const body = {
    model: BAC_MODEL,
    keep_alive: '60m',
    think: false,
    stream: false,
    messages: [{ role: 'user', content: 'OK' }],
    options: { ...GPU_OPTS, num_predict: 1 },
  };

  const r = await fetch(`${OLLAMA}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(180000),
  });

  if (!r.ok) {
    const err = await r.text().catch(() => '');
    return { ok: false, error: `Chargement GPU échoué (${r.status}) ${err.slice(0, 120)}` };
  }

  await sleep(800);
  const ps = await ollamaPs();
  const row = ps.find(m => m.name.includes(BAC_MODEL) || m.name.includes(LEGACY_MODEL)) || ps[0];
  const gpu = row ? isFullGpu(row.processor) : false;

  return {
    ok: gpu,
    gpu,
    processor: row?.processor || 'inconnu',
    size: row?.size,
    model: row?.name || BAC_MODEL,
    error: gpu ? null : `Modèle sur ${row?.processor || 'CPU/RAM'} — redémarre via start.ps1`,
  };
}

let _ensurePromise = null;
let _serveStartedByUs = false;

async function ensureOllama(forceRestart) {
  if (forceRestart || !await ollamaUp()) {
    if (_ensurePromise) return _ensurePromise;
    _ensurePromise = (async () => {
      console.log('[ollama] Redémarrage serveur CUDA…');
      await stopOllamaProcesses();
      startOllamaServe();
      _serveStartedByUs = true;
      for (let i = 0; i < 45; i++) {
        await sleep(1000);
        if (await ollamaUp()) break;
        if (i === 44) return { ok: false, error: 'Ollama ne répond pas (CUDA).' };
      }
      const model = await ensureBacGpuModel();
      if (!model.ok) return model;
      const preload = await preloadGpuModel();
      return {
        ok: preload.ok,
        started: true,
        gpu: preload.gpu,
        processor: preload.processor,
        size: preload.size,
        model: preload.model,
        error: preload.error,
      };
    })();
    try {
      return await _ensurePromise;
    } finally {
      _ensurePromise = null;
    }
  }

  const model = await ensureBacGpuModel();
  if (!model.ok) return model;

  const ps = await ollamaPs();
  const bad = ps.find(m => !isFullGpu(m.processor));
  const wrong = ps.find(m => m.name.includes(LEGACY_MODEL) && !m.name.includes(BAC_MODEL));

  if (bad || wrong || !ps.some(m => m.name.includes(BAC_MODEL))) {
    const preload = await preloadGpuModel();
    return {
      ok: preload.ok,
      started: false,
      gpu: preload.gpu,
      processor: preload.processor,
      size: preload.size,
      model: preload.model,
      error: preload.error,
      reloaded: true,
    };
  }

  const row = ps.find(m => m.name.includes(BAC_MODEL)) || ps[0];
  return {
    ok: true,
    started: false,
    gpu: true,
    processor: row?.processor,
    size: row?.size,
    model: row?.name,
  };
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function patchOllamaBody(raw, path) {
  if (!raw?.length) return raw;
  if (!path.includes('/api/chat') && !path.includes('/api/generate')) return raw;
  try {
    const j = JSON.parse(raw.toString('utf8'));
    if (j.model === LEGACY_MODEL || !j.model) j.model = BAC_MODEL;
    j.think = false;
    if (!j.keep_alive && j.keep_alive !== 0) j.keep_alive = j.keep_alive || '60m';
    j.options = { ...GPU_OPTS, ...j.options, num_gpu: 999, num_ctx: GPU_CTX };
    return Buffer.from(JSON.stringify(j));
  } catch {
    return raw;
  }
}

async function proxyOllama(req, res, ollamaPath) {
  const url = `${OLLAMA}${ollamaPath}`;
  const headers = { ...req.headers, host: `${HOST}:11434` };
  delete headers.origin;
  delete headers.referer;

  const init = { method: req.method, headers };
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    const raw = await readBody(req);
    init.body = patchOllamaBody(raw, ollamaPath);
    if (!headers['content-type']) {
      init.headers['content-type'] = 'application/json';
    }
  }

  let upstream;
  try {
    upstream = await fetch(url, init);
  } catch (e) {
    res.writeHead(502, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Proxy Ollama : ' + e.message }));
    return;
  }

  res.writeHead(upstream.status, {
    'Content-Type': upstream.headers.get('content-type') || 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  if (!upstream.body) {
    res.end();
    return;
  }

  const reader = upstream.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    res.write(Buffer.from(value));
  }
  res.end();
}

function serveStatic(req, res, urlPath) {
  let rel = urlPath === '/' ? '/index.html' : urlPath;
  rel = rel.split('?')[0];
  if (rel.includes('..')) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  const filePath = path.join(ROOT, rel);
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, {
      'Content-Type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${HOST}:${PORT}`);
  const p = url.pathname;

  if (p === '/api/config') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      ollamaProxy: '/ollama',
      ensureUrl: '/api/ollama/ensure',
      ollamaModel: BAC_MODEL,
      numCtx: GPU_CTX,
      gpuOnly: true,
    }));
    return;
  }

  if (p === '/api/ollama/gpu') {
    const result = await ensureOllama(false);
    const ps = await ollamaPs();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ...result, models: ps }));
    return;
  }

  if (p === '/api/ollama/ensure') {
    const force = url.searchParams.get('restart') === '1';
    const result = await ensureOllama(force);
    res.writeHead(result.ok ? 200 : 503, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
    return;
  }

  if (p.startsWith('/ollama/')) {
    await ensureOllama(false);
    await proxyOllama(req, res, p.slice('/ollama'.length));
    return;
  }

  serveStatic(req, res, p);
});

ensureOllama(false).then(r => {
  if (!r.ok) console.warn('[ollama]', r.error || r);
  else console.log(`[ollama] ${r.processor || 'prêt'} · ${r.model || BAC_MODEL}`);
}).finally(() => {
  server.listen(PORT, HOST, () => {
    const appUrl = `http://${HOST}:${PORT}`;
    console.log(`\n  Bac Français · ${appUrl}`);
    console.log(`  Ollama GPU  · ${appUrl}/ollama · modèle ${BAC_MODEL} · ctx ${GPU_CTX}\n`);
    if (process.env.BAC_OPEN !== '0') {
      spawn('cmd', ['/c', 'start', '', appUrl], { stdio: 'ignore', shell: true }).unref?.();
    }
  });
});
