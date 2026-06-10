/* Effets sonores (Web Audio API — sans fichiers externes, synthèse variée) */
const BacSounds = (function () {
  let _ctx = null;
  let _gestureUnlocked = false;
  let _lastTickSec = -1;
  let _lastExamWarn = -1;
  let _lastVariant = {};
  let _playCount = 0;

  function _get(key, fallback) {
    if (typeof getSetting !== 'function') return fallback;
    const v = getSetting(key);
    return v === undefined || v === null ? fallback : v;
  }

  function _enabled() {
    if (!_get('soundOn', true)) return false;
    if (_get('reduceMotion', false)) return false;
    return true;
  }

  function _volume() {
    return Math.max(0, Math.min(100, _get('soundVolume', 70))) / 100;
  }

  function _theme() {
    const t = _get('soundTheme', 'classic');
    return ['classic', 'soft', 'minimal', 'arcade'].includes(t) ? t : 'classic';
  }

  /** Profils par thème — timbre, dynamique, espacement */
  function _themeCfg() {
    switch (_theme()) {
      case 'soft':
        return { peak: 0.82, gap: 88, bright: 0.85, detune: 3, release: 1.15, filter: 2800 };
      case 'minimal':
        return { peak: 0.52, gap: 62, bright: 0.7, detune: 1, release: 0.75, filter: 2200 };
      case 'arcade':
        return { peak: 1.12, gap: 68, bright: 1.2, detune: 8, release: 0.9, filter: 4200 };
      default:
        return { peak: 1, gap: 82, bright: 1, detune: 5, release: 1, filter: 3400 };
    }
  }

  function _ac() {
    if (!_gestureUnlocked) return null;
    if (!_ctx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      try {
        _ctx = new Ctx();
      } catch (e) {
        return null;
      }
    }
    if (_ctx.state === 'suspended') {
      try {
        const p = _ctx.resume();
        if (p && typeof p.catch === 'function') p.catch(() => {});
      } catch (e) {}
    }
    return _ctx;
  }

  function _resume() {
    if (!_enabled() || !_gestureUnlocked) return null;
    const c = _ac();
    if (!c || c.state !== 'running') return null;
    return c;
  }

  function _rand(a, b) {
    return a + Math.random() * (b - a);
  }

  function _pickVariant(kind, n) {
    if (n <= 1) return 0;
    let idx;
    let tries = 0;
    do {
      idx = Math.floor(Math.random() * n);
      tries++;
    } while (tries < 6 && idx === _lastVariant[kind]);
    _lastVariant[kind] = idx;
    return idx;
  }

  function _note(freq, dur, opts) {
    const c = _resume();
    if (!c) return;
    const cfg = _themeCfg();
    const t0 = c.currentTime + (opts.delay || 0);
    const type = opts.type || 'sine';
    const det = (opts.detune || 0) + _rand(-cfg.detune, cfg.detune);
    const f = freq * cfg.bright * (opts.freqMul || 1) * _rand(0.998, 1.002);
    const peak = (opts.peak ?? 1) * cfg.peak;
    const durSec = dur * (opts.durMul || 1) * cfg.release;

    const osc = c.createOscillator();
    const g = c.createGain();
    const filter = c.createBiquadFilter();
    const pan = c.createStereoPanner();

    osc.type = type;
    osc.frequency.setValueAtTime(f, t0);
    if (opts.slideTo) {
      osc.frequency.exponentialRampToValueAtTime(opts.slideTo * cfg.bright, t0 + Math.min(durSec * 0.7, 0.18));
    }
    osc.detune.setValueAtTime(det, t0);

    filter.type = opts.filterType || 'lowpass';
    filter.frequency.setValueAtTime(opts.filterFreq || cfg.filter, t0);
    filter.Q.value = opts.filterQ ?? 0.7;

    const atk = opts.attack ?? 0.01;
    const dec = opts.decay ?? Math.min(durSec * 0.35, 0.08);
    const sus = opts.sustain ?? 0.35;
    const rel = opts.release ?? Math.max(durSec - atk - dec, 0.06);
    const v = _volume() * peak * 0.13;

    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(v, 0.0001), t0 + atk);
    g.gain.exponentialRampToValueAtTime(Math.max(v * sus, 0.0001), t0 + atk + dec);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + atk + dec + rel);

    pan.pan.value = opts.pan != null ? opts.pan : _rand(-0.22, 0.22);

    osc.connect(filter);
    filter.connect(g);
    g.connect(pan);
    pan.connect(c.destination);

    osc.start(t0);
    osc.stop(t0 + atk + dec + rel + 0.05);
  }

  function _noise(dur, opts) {
    const c = _resume();
    if (!c) return;
    const cfg = _themeCfg();
    const t0 = c.currentTime + (opts.delay || 0);
    const durSec = dur * (opts.durMul || 1);
    const len = Math.max(1, Math.floor(c.sampleRate * durSec));
    const buf = c.createBuffer(1, len, c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      const env = 1 - i / len;
      data[i] = (_rand(-1, 1) * (opts.sharp ?? 1)) * env * env;
    }
    const src = c.createBufferSource();
    src.buffer = buf;
    const filter = c.createBiquadFilter();
    const g = c.createGain();
    const pan = c.createStereoPanner();

    filter.type = opts.filterType || 'bandpass';
    filter.frequency.value = opts.filterFreq || 900;
    filter.Q.value = opts.filterQ ?? 1.2;

    const peak = (opts.peak ?? 0.6) * cfg.peak;
    const v = _volume() * peak * 0.11;
    g.gain.setValueAtTime(v, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + durSec);

    pan.pan.value = opts.pan != null ? opts.pan : _rand(-0.3, 0.3);

    src.connect(filter);
    filter.connect(g);
    g.connect(pan);
    pan.connect(c.destination);
    src.start(t0);
    src.stop(t0 + durSec + 0.02);
  }

  function _chord(notes, gap, baseOpts) {
    const cfg = _themeCfg();
    notes.forEach((n, i) => {
      _note(n.f, n.d || 0.14, {
        ...baseOpts,
        ...n,
        delay: (baseOpts?.delay || 0) + i * (gap || cfg.gap) / 1000,
        pan: n.pan != null ? n.pan : _rand(-0.35, 0.35),
      });
    });
  }

  function _seq(notes, gap) {
    const cfg = _themeCfg();
    notes.forEach((n, i) => {
      setTimeout(() => _note(n.f, n.d || 0.14, n), i * (gap || cfg.gap));
    });
  }

  function _seqNoise(steps, gap) {
    steps.forEach((s, i) => {
      setTimeout(() => _noise(s.d || 0.05, s), i * (gap || 55));
    });
  }

  /* ── Variantes : bonne réponse ── */
  const CORRECT_VARIANTS = {
    classic: [
      () => _seq([{ f: 523, d: 0.1 }, { f: 659, d: 0.14, peak: 0.9 }, { f: 784, d: 0.12, peak: 0.75 }], 78),
      () => _chord([{ f: 392, d: 0.2 }, { f: 494, d: 0.2 }, { f: 587, d: 0.18 }], 0, { type: 'triangle', sustain: 0.25 }),
      () => { _note(880, 0.08, { type: 'sine', peak: 0.7 }); _note(1175, 0.12, { delay: 0.06, type: 'sine', peak: 0.55 }); },
      () => _seq([{ f: 659, d: 0.09, type: 'triangle' }, { f: 784, d: 0.11 }, { f: 988, d: 0.15, peak: 0.85 }], 65),
      () => { _note(523, 0.06, { slideTo: 784, type: 'sine', peak: 0.8 }); _noise(0.04, { filterFreq: 2400, peak: 0.25 }); },
      () => _seq([{ f: 440, d: 0.08 }, { f: 554, d: 0.1 }, { f: 659, d: 0.14, type: 'triangle' }], 72),
    ],
    soft: [
      () => _seq([{ f: 523, d: 0.14, type: 'sine', sustain: 0.5 }, { f: 659, d: 0.2, peak: 0.65 }], 95),
      () => _chord([{ f: 440, d: 0.28 }, { f: 554, d: 0.28 }], 0, { type: 'sine', filterFreq: 1800, sustain: 0.55 }),
      () => _note(784, 0.22, { type: 'sine', attack: 0.02, sustain: 0.45, filterFreq: 2200, peak: 0.55 }),
      () => _seq([{ f: 392, d: 0.12 }, { f: 494, d: 0.16 }, { f: 587, d: 0.2, peak: 0.6 }], 88),
      () => { _note(659, 0.18, { type: 'triangle', sustain: 0.5 }); _note(880, 0.2, { delay: 0.1, peak: 0.45 }); },
    ],
    minimal: [
      () => _note(660, 0.07, { type: 'sine', peak: 0.45 }),
      () => _note(784, 0.05, { type: 'sine', peak: 0.4, filterFreq: 2000 }),
      () => _seq([{ f: 523, d: 0.05 }, { f: 659, d: 0.06, peak: 0.38 }], 55),
      () => _noise(0.025, { filterFreq: 3200, peak: 0.2, filterType: 'highpass' }),
    ],
    arcade: [
      () => _seq([{ f: 523, d: 0.07, type: 'square', peak: 0.75 }, { f: 784, d: 0.1, type: 'square' }, { f: 1047, d: 0.12, type: 'square', peak: 0.65 }], 58),
      () => { _note(880, 0.06, { type: 'square' }); _noise(0.03, { filterFreq: 1800, peak: 0.5 }); },
      () => _seq([{ f: 659, d: 0.06, type: 'square' }, { f: 988, d: 0.08, type: 'square' }], 50),
      () => _chord([{ f: 392, d: 0.1, type: 'square' }, { f: 523, d: 0.1, type: 'square' }, { f: 659, d: 0.1, type: 'square' }], 0, { peak: 0.7 }),
      () => _seq([{ f: 440, d: 0.05, type: 'square' }, { f: 554, d: 0.05 }, { f: 659, d: 0.05 }, { f: 880, d: 0.1, peak: 0.8 }], 42),
    ],
  };

  /* ── Variantes : mauvaise réponse ── */
  const WRONG_VARIANTS = {
    classic: [
      () => { _note(196, 0.2, { type: 'triangle', peak: 0.65, slideTo: 155 }); _noise(0.06, { filterFreq: 400, peak: 0.35 }); },
      () => _seq([{ f: 220, d: 0.12, type: 'sawtooth', peak: 0.5 }, { f: 185, d: 0.18, type: 'triangle', peak: 0.45 }], 70),
      () => _chord([{ f: 233, d: 0.22, type: 'triangle' }, { f: 207, d: 0.22, type: 'triangle' }], 0, { peak: 0.55, filterFreq: 800 }),
      () => { _note(330, 0.08, { type: 'square', peak: 0.35, filterFreq: 600 }); setTimeout(() => _note(277, 0.15, { type: 'triangle', peak: 0.5 }), 60); },
      () => _noise(0.1, { filterFreq: 280, peak: 0.45, filterType: 'lowpass' }),
    ],
    soft: [
      () => _note(220, 0.22, { type: 'sine', peak: 0.45, slideTo: 196, sustain: 0.3 }),
      () => _seq([{ f: 247, d: 0.14, peak: 0.4 }, { f: 207, d: 0.18, peak: 0.35 }], 85),
      () => _note(185, 0.2, { type: 'triangle', peak: 0.38, filterFreq: 1200 }),
    ],
    minimal: [
      () => _note(220, 0.1, { type: 'sine', peak: 0.35 }),
      () => _noise(0.04, { filterFreq: 500, peak: 0.25 }),
    ],
    arcade: [
      () => _seq([{ f: 110, d: 0.1, type: 'square', peak: 0.6 }, { f: 87, d: 0.14, type: 'square', peak: 0.55 }], 55),
      () => { _note(147, 0.12, { type: 'sawtooth', peak: 0.5 }); _noise(0.05, { filterFreq: 600, peak: 0.55 }); },
      () => _chord([{ f: 123, d: 0.15, type: 'square' }, { f: 116, d: 0.15, type: 'square' }], 0, { peak: 0.65 }),
    ],
  };

  const PARTIAL_VARIANTS = {
    classic: [
      () => _seq([{ f: 440, d: 0.11 }, { f: 494, d: 0.13, peak: 0.72 }, { f: 523, d: 0.1, peak: 0.6 }], 75),
      () => { _note(587, 0.14, { type: 'triangle', peak: 0.65 }); _note(494, 0.1, { delay: 0.08, peak: 0.5 }); },
      () => _chord([{ f: 349, d: 0.16 }, { f: 440, d: 0.16 }], 0, { type: 'triangle', sustain: 0.3 }),
      () => _seq([{ f: 392, d: 0.1 }, { f: 466, d: 0.12, peak: 0.68 }], 80),
    ],
    soft: [
      () => _seq([{ f: 440, d: 0.14 }, { f: 494, d: 0.16, peak: 0.58 }], 90),
      () => _note(523, 0.18, { type: 'sine', sustain: 0.4, peak: 0.5 }),
    ],
    minimal: [
      () => _note(494, 0.07, { peak: 0.4 }),
      () => _seq([{ f: 440, d: 0.05 }, { f: 494, d: 0.06, peak: 0.35 }], 58),
    ],
    arcade: [
      () => _seq([{ f: 440, d: 0.07, type: 'square' }, { f: 523, d: 0.09, type: 'square', peak: 0.65 }], 52),
      () => _note(587, 0.1, { type: 'square', peak: 0.6 }),
    ],
  };

  const COMPLETE_VARIANTS = {
    classic: [
      () => _seq([
        { f: 523, d: 0.11 }, { f: 659, d: 0.11 }, { f: 784, d: 0.14 },
        { f: 988, d: 0.18, peak: 0.9 }, { f: 1175, d: 0.22, peak: 0.75 },
      ], 88),
      () => {
        _chord([{ f: 392, d: 0.25 }, { f: 494, d: 0.25 }, { f: 587, d: 0.25 }, { f: 784, d: 0.22 }], 0, { type: 'triangle', sustain: 0.28 });
        setTimeout(() => _noise(0.08, { filterFreq: 1200, peak: 0.35 }), 120);
      },
      () => _seq([
        { f: 440, d: 0.08 }, { f: 554, d: 0.08 }, { f: 659, d: 0.1 },
        { f: 880, d: 0.12 }, { f: 1047, d: 0.16, peak: 0.85 },
      ], 72),
      () => {
        _note(523, 0.08, { slideTo: 1047, type: 'sine', peak: 0.85 });
        setTimeout(() => _seq([{ f: 784, d: 0.1 }, { f: 988, d: 0.14, peak: 0.8 }], 65), 100);
      },
    ],
    soft: [
      () => _seq([
        { f: 523, d: 0.14 }, { f: 659, d: 0.14 }, { f: 784, d: 0.18, peak: 0.7 },
        { f: 988, d: 0.24, peak: 0.6 },
      ], 98),
      () => _chord([{ f: 440, d: 0.3 }, { f: 554, d: 0.3 }, { f: 659, d: 0.28 }], 0, { type: 'sine', sustain: 0.4 }),
    ],
    minimal: [
      () => _seq([{ f: 523, d: 0.07 }, { f: 659, d: 0.08 }, { f: 784, d: 0.1, peak: 0.55 }], 60),
    ],
    arcade: [
      () => _seq([
        { f: 523, d: 0.06, type: 'square' }, { f: 659, d: 0.06, type: 'square' },
        { f: 784, d: 0.08, type: 'square' }, { f: 1047, d: 0.12, type: 'square', peak: 0.85 },
      ], 48),
      () => {
        _seqNoise([{ d: 0.04, filterFreq: 900, peak: 0.5 }, { d: 0.04, filterFreq: 1400, peak: 0.45 }], 40);
        setTimeout(() => _seq([{ f: 880, d: 0.08, type: 'square' }, { f: 1175, d: 0.12, type: 'square' }], 55), 90);
      },
    ],
  };

  const STREAK_VARIANTS = {
    classic: [
      () => _seq([{ f: 587, d: 0.09 }, { f: 740, d: 0.11 }, { f: 880, d: 0.14, peak: 0.9 }, { f: 1047, d: 0.12, peak: 0.75 }], 68),
      () => { _note(659, 0.07, { slideTo: 988 }); _chord([{ f: 784, d: 0.12 }, { f: 988, d: 0.12 }], 0, { peak: 0.85 }); },
      () => _seq([{ f: 523, d: 0.07 }, { f: 659, d: 0.07 }, { f: 784, d: 0.07 }, { f: 988, d: 0.14, peak: 0.95 }], 55),
    ],
    soft: [
      () => _seq([{ f: 587, d: 0.12 }, { f: 740, d: 0.14 }, { f: 880, d: 0.18, peak: 0.65 }], 82),
    ],
    minimal: [
      () => _seq([{ f: 659, d: 0.06 }, { f: 784, d: 0.08, peak: 0.5 }], 58),
    ],
    arcade: [
      () => _seq([{ f: 659, d: 0.05, type: 'square' }, { f: 880, d: 0.06, type: 'square' }, { f: 1047, d: 0.1, type: 'square', peak: 0.9 }], 45),
      () => { _noise(0.03, { peak: 0.45 }); _seq([{ f: 784, d: 0.06, type: 'square' }, { f: 1175, d: 0.1, type: 'square' }], 50); },
    ],
  };

  function _playThemed(kind, map) {
    const theme = _theme();
    const list = map[theme] || map.classic;
    const idx = _pickVariant(kind, list.length);
    list[idx]();
    _playCount++;
  }

  function playCorrect() { if (!_enabled()) return; _playThemed('correct', CORRECT_VARIANTS); }

  function playWrong() { if (!_enabled()) return; _playThemed('wrong', WRONG_VARIANTS); }

  function playPartial() { if (!_enabled()) return; _playThemed('partial', PARTIAL_VARIANTS); }

  function playComplete() { if (!_enabled()) return; _playThemed('complete', COMPLETE_VARIANTS); }

  function playStreak() { if (!_enabled()) return; _playThemed('streak', STREAK_VARIANTS); }

  /* ── UI & ambient ── */
  const CLICK_VARIANTS = [
    () => _note(740, 0.028, { type: 'sine', peak: 0.38, filterFreq: 4000 }),
    () => _noise(0.022, { filterFreq: 2800, peak: 0.22, filterType: 'highpass' }),
    () => _note(880, 0.025, { type: 'triangle', peak: 0.32 }),
    () => _note(620, 0.03, { type: 'sine', peak: 0.35, slideTo: 720 }),
    () => _note(520, 0.02, { type: 'sine', peak: 0.28, filterFreq: 5000 }),
  ];

  const FLIP_VARIANTS = [
    () => { _noise(0.055, { filterFreq: 1100, peak: 0.35, pan: -0.15 }); _note(680, 0.05, { peak: 0.3, pan: 0.2 }); },
    () => { _note(420, 0.04, { slideTo: 620, peak: 0.32 }); _noise(0.04, { filterFreq: 800, peak: 0.28 }); },
    () => _seq([{ f: 520, d: 0.04, peak: 0.28 }, { f: 780, d: 0.05, peak: 0.25 }], 38),
    () => { _noise(0.07, { filterFreq: 600, peak: 0.3, filterType: 'bandpass' }); _note(540, 0.045, { type: 'triangle', peak: 0.25 }); },
    () => _note(880, 0.035, { type: 'sine', peak: 0.22, attack: 0.004, release: 0.04 }),
  ];

  const TICK_VARIANTS = [
    () => _note(920, 0.022, { type: 'sine', peak: 0.28, filterFreq: 5000 }),
    () => _noise(0.018, { filterFreq: 3500, peak: 0.18, filterType: 'highpass' }),
    () => _note(1100, 0.02, { type: 'triangle', peak: 0.25 }),
    () => _note(760, 0.024, { type: 'sine', peak: 0.26, pan: _playCount % 2 ? 0.25 : -0.25 }),
  ];

  const WARNING_VARIANTS = [
    () => _seq([{ f: 330, d: 0.09, peak: 0.75, type: 'triangle' }, { f: 330, d: 0.09, peak: 0.6 }], 115),
    () => { _note(440, 0.1, { type: 'square', peak: 0.45, filterFreq: 1200 }); setTimeout(() => _note(330, 0.12, { peak: 0.55 }), 100); },
    () => _chord([{ f: 294, d: 0.14 }, { f: 349, d: 0.14 }], 0, { type: 'sawtooth', peak: 0.5, filterFreq: 900 }),
    () => _seq([{ f: 392, d: 0.07, peak: 0.65 }, { f: 330, d: 0.09 }, { f: 392, d: 0.09, peak: 0.55 }], 90),
  ];

  const TIMEOUT_VARIANTS = [
    () => { _note(220, 0.26, { type: 'sawtooth', peak: 0.48, slideTo: 165 }); _noise(0.12, { filterFreq: 350, peak: 0.35 }); },
    () => _seq([{ f: 196, d: 0.12, type: 'square', peak: 0.45 }, { f: 147, d: 0.2, type: 'sawtooth', peak: 0.5 }], 80),
    () => _chord([{ f: 185, d: 0.22, type: 'triangle' }, { f: 175, d: 0.22, type: 'triangle' }], 0, { peak: 0.55, filterFreq: 700 }),
  ];

  const REVEAL_VARIANTS = [
    () => _note(880, 0.07, { type: 'sine', peak: 0.38 }),
    () => _seq([{ f: 660, d: 0.05 }, { f: 880, d: 0.08, peak: 0.42 }], 45),
    () => { _noise(0.03, { filterFreq: 2000, peak: 0.2 }); _note(988, 0.06, { peak: 0.35 }); },
  ];

  const NAV_VARIANTS = [
    () => _note(520, 0.03, { type: 'sine', peak: 0.22, filterFreq: 4500 }),
    () => _note(640, 0.028, { type: 'triangle', peak: 0.2 }),
    () => _noise(0.015, { filterFreq: 3200, peak: 0.12, filterType: 'highpass' }),
    () => _note(480, 0.025, { slideTo: 560, peak: 0.18 }),
  ];

  const ADD_VARIANTS = [
    () => _seq([{ f: 523, d: 0.06, peak: 0.55 }, { f: 659, d: 0.08, peak: 0.45 }], 52),
    () => _note(784, 0.07, { type: 'triangle', peak: 0.42, slideTo: 880 }),
    () => _chord([{ f: 440, d: 0.1 }, { f: 554, d: 0.1 }], 0, { type: 'sine', peak: 0.4, sustain: 0.35 }),
    () => { _note(659, 0.05, { peak: 0.4 }); _noise(0.02, { filterFreq: 2600, peak: 0.15 }); },
  ];

  const REMOVE_VARIANTS = [
    () => _note(440, 0.08, { type: 'triangle', peak: 0.35, slideTo: 330 }),
    () => _seq([{ f: 392, d: 0.06, peak: 0.32 }, { f: 330, d: 0.08, peak: 0.28 }], 58),
    () => _noise(0.035, { filterFreq: 700, peak: 0.22, filterType: 'lowpass' }),
  ];

  const OPEN_VARIANTS = [
    () => _seq([{ f: 392, d: 0.07 }, { f: 494, d: 0.09 }, { f: 587, d: 0.11, peak: 0.5 }], 62),
    () => { _note(523, 0.06, { slideTo: 784, peak: 0.48 }); _noise(0.04, { filterFreq: 1500, peak: 0.2 }); },
    () => _chord([{ f: 330, d: 0.14 }, { f: 415, d: 0.14 }, { f: 494, d: 0.12 }], 0, { type: 'triangle', peak: 0.45 }),
  ];

  const LEVELUP_VARIANTS = {
    classic: [
      () => _seq([{ f: 523, d: 0.08 }, { f: 659, d: 0.08 }, { f: 784, d: 0.1 }, { f: 988, d: 0.14, peak: 0.85 }], 68),
      () => { _note(440, 0.06, { slideTo: 880, peak: 0.75 }); setTimeout(() => _note(1175, 0.12, { peak: 0.65 }), 90); },
    ],
    soft: [
      () => _seq([{ f: 440, d: 0.12 }, { f: 554, d: 0.14 }, { f: 659, d: 0.16, peak: 0.55 }], 88),
    ],
    minimal: [
      () => _seq([{ f: 659, d: 0.06 }, { f: 784, d: 0.08, peak: 0.45 }], 55),
    ],
    arcade: [
      () => _seq([{ f: 523, d: 0.05, type: 'square' }, { f: 659, d: 0.05, type: 'square' }, { f: 784, d: 0.07, type: 'square' }, { f: 1047, d: 0.1, type: 'square', peak: 0.8 }], 42),
    ],
  };

  function playClick() {
    if (!_enabled() || !_get('soundClicks', true)) return;
    CLICK_VARIANTS[_pickVariant('click', CLICK_VARIANTS.length)]();
  }

  function playFlip() {
    if (!_enabled()) return;
    FLIP_VARIANTS[_pickVariant('flip', FLIP_VARIANTS.length)]();
  }

  function playTick() {
    if (!_enabled() || !_get('soundTimerTick', true)) return;
    TICK_VARIANTS[_pickVariant('tick', TICK_VARIANTS.length)]();
  }

  function playWarning() {
    if (!_enabled()) return;
    WARNING_VARIANTS[_pickVariant('warning', WARNING_VARIANTS.length)]();
  }

  function playTimeout() {
    if (!_enabled()) return;
    TIMEOUT_VARIANTS[_pickVariant('timeout', TIMEOUT_VARIANTS.length)]();
  }

  function playReveal() {
    if (!_enabled()) return;
    REVEAL_VARIANTS[_pickVariant('reveal', REVEAL_VARIANTS.length)]();
  }

  function playNav() {
    if (!_enabled() || !_get('soundClicks', true)) return;
    NAV_VARIANTS[_pickVariant('nav', NAV_VARIANTS.length)]();
  }

  function playAdd() {
    if (!_enabled()) return;
    ADD_VARIANTS[_pickVariant('add', ADD_VARIANTS.length)]();
  }

  function playRemove() {
    if (!_enabled()) return;
    REMOVE_VARIANTS[_pickVariant('remove', REMOVE_VARIANTS.length)]();
  }

  function playOpen() {
    if (!_enabled()) return;
    OPEN_VARIANTS[_pickVariant('open', OPEN_VARIANTS.length)]();
  }

  function playLevelup() {
    if (!_enabled()) return;
    _playThemed('levelup', LEVELUP_VARIANTS);
  }

  function playPreview() {
    /* Aperçu des thèmes sonores — déclenché depuis Paramètres (previewSound), pas au survol UI. */
    if (!_get('soundOn', true)) return;
    if (!_gestureUnlocked || !_ctx || _ctx.state !== 'running') return;
    setTimeout(() => playNav(), 30);
    setTimeout(() => playCorrect(), 150);
    setTimeout(() => playPartial(), 400);
    setTimeout(() => playStreak(), 650);
    setTimeout(() => playComplete(), 920);
    setTimeout(() => playFlip(), 1200);
    setTimeout(() => playAdd(), 1380);
    setTimeout(() => playOpen(), 1580);
    setTimeout(() => playWrong(), 1880);
  }

  function qcmTimerTick(remaining) {
    if (remaining <= 0 || remaining > 5) return;
    if (remaining === _lastTickSec) return;
    _lastTickSec = remaining;
    playTick();
  }

  function resetQcmTimerTick() {
    _lastTickSec = -1;
  }

  function examTimerTick(timeLeft) {
    if (timeLeft <= 0) return;
    const marks = [60, 30, 10];
    if (marks.includes(timeLeft) && _lastExamWarn !== timeLeft) {
      _lastExamWarn = timeLeft;
      playWarning();
      return;
    }
    if (timeLeft <= 10 && timeLeft !== _lastExamWarn) {
      _lastExamWarn = timeLeft;
      playTick();
    }
  }

  function resetExamTimerTick() {
    _lastExamWarn = -1;
  }

  function unlock() {
    if (_ctx && _ctx.state === 'running') return;
    _gestureUnlocked = true;
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!_ctx) _ctx = new Ctx();
      if (_ctx.state === 'suspended') {
        const p = _ctx.resume();
        if (p && typeof p.catch === 'function') p.catch(() => {});
      }
    } catch (e) {}
  }

  return {
    playCorrect,
    playWrong,
    playPartial,
    playComplete,
    playStreak,
    playClick,
    playFlip,
    playTick,
    playWarning,
    playTimeout,
    playReveal,
    playNav,
    playAdd,
    playRemove,
    playOpen,
    playLevelup,
    playPreview,
    qcmTimerTick,
    resetQcmTimerTick,
    examTimerTick,
    resetExamTimerTick,
    unlock,
  };
})();

function playSound(kind) {
  if (typeof BacSounds === 'undefined') return;
  BacSounds.unlock();
  const aliases = { ok: 'correct', success: 'correct' };
  const k = aliases[kind] || kind;
  const fn = BacSounds['play' + k.charAt(0).toUpperCase() + k.slice(1)];
  if (typeof fn === 'function') fn();
}

/** Retour session : ok / partiel / raté */
function playFeedback(ok, partial) {
  if (typeof BacSounds !== 'undefined') BacSounds.unlock();
  if (partial) playSound('partial');
  else playSound(ok ? 'correct' : 'wrong');
}

/** Note sur 20 → son adapté (variantes riches par palier) */
function playGradeSound(note20) {
  if (note20 >= 16) playSound('complete');
  else if (note20 >= 14) playSound('streak');
  else if (note20 >= 10) playSound('correct');
  else if (note20 >= 6) playSound('partial');
  else playSound('wrong');
}

function previewSound() {
  if (typeof BacSounds === 'undefined') return;
  BacSounds.unlock();
  setTimeout(() => BacSounds.playPreview(), 0);
}

['pointerdown', 'keydown', 'touchstart'].forEach(ev => {
  document.addEventListener(ev, () => {
    if (typeof BacSounds !== 'undefined') BacSounds.unlock();
  }, { once: true, passive: true });
});
