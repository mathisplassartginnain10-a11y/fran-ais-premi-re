/* core.js — Paramètres, utilitaires, navigation, stockage, thème */
let _applyingAllSettings = false;
const DEFAULT_SETTINGS = {
  // Apparence
  theme:              'dark',
  accent:             'gold',
  surfaceStyle:       'default',
  borderRadius:       'normal',
  heroStyle:          'gradient',
  accentGlow:         true,
  showCountdownBar:   true,
  navStyle:           'default',
  backgroundStyle:    'default',
  matiereColors:      true,
  cardBorder:         'normal',
  themeAuto:          false,
  settingsTab:        'design',
  fontSize:           1,
  fontFamily:         'default',
  uiScale:            100,
  density:            'normal',
  animations:         true,
  settingsPanelWide:  false,
  compactNav:         false,
  procGridCols:       3,
  // Profil
  brandTitle:         'Bac de Français',
  userName:           '',
  profileEmoji:       '',
  profileGoal:        '',
  // Navigation
  defaultMatiere:     'proc',
  rememberPage:       true,
  showSubnav:         true,
  showNavStreak:      true,
  showNavReadiness:   true,
  showDailyChallenge: true,
  showKbHints:        true,
  showHeroSections:   true,
  showFooters:        true,
  // QCM
  timerDuration:      30,
  showExplIm:         true,
  kbShortcuts:        true,
  showCatProg:        true,
  reviseThresh:       0.6,
  qcmSessionSize:     20,
  qcmFocusMode:       true,
  qcmShuffleOnReset:  true,
  qcmShowCorpusLink:  true,
  qcmShowFavBtn:      true,
  qcmAutoAdvance:     false,
  // Flashcards
  autoFlip:           0,
  showCatCard:        true,
  // Gamification
  confettiOn:         true,
  confettiThr:        88,
  soundOn:            true,
  soundVolume:        70,
  soundTheme:         'classic',
  soundClicks:        true,
  soundTimerTick:     true,
  streakOn:           true,
  // Accessibilité
  reduceMotion:       false,
  highContrast:       false,
  // Examen
  examPresetDefault:  1,
  examMatDefault:     'both',
  // Stats
  showReadinessStats: true,
  showStatsAdvanced:  true,
  showBacDashboard:   true,
  // Exercices & Corpus
  exoShuffleOnReset:  true,
  corpusCompact:      false,
  searchDebounce:     180,
  // Grands textes
  gtextInterpThreshold: 28,
  gtextMinInterpChars:  15,
  gtextShowContext:     true,
  gtextShowHints:       true,
  gtextTextSize:        'normal',
  gtextListSort:        'default',
  gtextHideCompleted:   false,
  gtextShuffleList:     false,
  gtextShowCustomFirst: false,
  gtextShowProbHub:     true,
  // Probabilités & modèle
  probMode:               'realistic',
  probPriorAdmis:         40,
  probPriorGtext:         38,
  probShrinkK:            8,
  probShrinkKExam:        2,
  probShrinkKGtext:       4,
  probSteepness:          88,
  probWeightExam:         36,
  probWeightQcm:          30,
  probWeightGtext:        22,
  probWeightExo:          6,
  probWeightChallenge:    3,
  probWeightCartes:       3,
  probMinQcmAttempts:     3,
  probMinCatAttempts:     3,
  probMinExoAttempts:     5,
  probMinChallenge:       3,
  probMinCarteCards:      8,
  probMaxCapHigh:         90,
  probMaxCapMid:          82,
  probMaxCapLow:          74,
  probCapN5:              72,
  probCapN2:              62,
  probCapN1:              48,
  probBandSpread:         0,
  probBandInsufficient:   12,
  probPenaltyNoExam:      5,
  probPenaltyLowCov12:    10,
  probPenaltyLowCov25:    5,
  probPenaltyTimeoutHigh: 6,
  probPenaltyTimeoutMid:  3,
  probPenaltyWeak4:       6,
  probPenaltyWeak2:       3,
  probCompositeQcm:       62,
  probApplyPenalties:     true,
  probIncludeChallenge:   true,
  probIncludeCartes:      true,
  probIncludeExo:         true,
  probShowHub:            true,
  probShowCatalogGrid:    true,
  probShowIndicators:     true,
  probShowInsufficient:   false,
  probShowExamPreview:    true,
  probShowGtextPanel:     true,
};

const SOUND_THEME_HINTS = {
  classic: 'Arpèges chaleureux · 6 variantes par effet',
  soft: 'Cloches douces · notes longues',
  minimal: 'Bips discrets · très léger',
  arcade: 'Chiptune · percussions noise',
};

const SETTINGS_PRESETS = {
  full:    null,
  minimal: {
    showDailyChallenge:false, showKbHints:false, showHeroSections:false,
    confettiOn:false, showNavReadiness:false, showStatsAdvanced:false,
    showBacDashboard:false, animations:false, qcmShowFavBtn:false,
  },
  exam: {
    qcmFocusMode:true, showExplIm:false, qcmSessionSize:50,
    showDailyChallenge:false, showKbHints:true, confettiOn:true,
    confettiThr:75, timerDuration:45, showHeroSections:false,
  },
  revision: {
    qcmFocusMode:true, showExplIm:true, qcmSessionSize:30,
    reviseThresh:0.5, showCatProg:true, showStatsAdvanced:true,
    showDailyChallenge:true, streakOn:true,
  },
  focus: {
    qcmFocusMode:true, showHeroSections:false, compactNav:true,
    density:'compact', animations:false, showDailyChallenge:false,
    showFooters:false, surfaceStyle:'flat', heroStyle:'minimal', accentGlow:false,
  },
  cosy: {
    surfaceStyle:'soft', borderRadius:'round', heroStyle:'gradient',
    accentGlow:true, backgroundStyle:'gradient', density:'spacious',
    showCountdownBar:true, matiereColors:true,
  },
};

let _searchDebounceMs = 180;
let _dashboardTimer = null;
let _dailyPool = null;
let _challengeTimer = null;
let _challengeSlotId = null;
const CHALLENGE_INTERVAL_MS = 10 * 60 * 1000;
let _corpusCacheKey = '';
let _corpusCacheHtml = '';
let _corpusFilteredItems = [];
let _corpusVisibleCount = 60;
const _stCache = {};
let _favsCache = null;

function invalidateStCache(key) {
  if (key) delete _stCache[key];
  else { Object.keys(_stCache).forEach(k => delete _stCache[k]); }
}
function invalidateFavsCache() { _favsCache = null; }
function invalidateAllCaches() {
  invalidateStCache();
  invalidateFavsCache();
  _corpusCacheKey = '';
  _dailyPool = null;
}

const ACCENTS = {
  gold:   { c:'#c9a84c', c2:'#e6c97a', dim:'rgba(201,168,76,.13)', label:'Or' },
  purple: { c:'#9b87d4', c2:'#b8abde', dim:'rgba(155,135,212,.13)', label:'Violet' },
  teal:   { c:'#6dbfaa', c2:'#8fd4c0', dim:'rgba(109,191,170,.13)', label:'Teal' },
  coral:  { c:'#d4886e', c2:'#e4a898', dim:'rgba(212,136,110,.13)', label:'Corail' },
  blue:   { c:'#7aaed4', c2:'#9ec5e4', dim:'rgba(122,174,212,.13)', label:'Bleu' },
  rose:   { c:'#d47aa0', c2:'#e49dbe', dim:'rgba(212,122,160,.13)', label:'Rose' },
  green:  { c:'#88bf6e', c2:'#a8d48e', dim:'rgba(136,191,110,.13)', label:'Vert' },
};

let _settings = { ...DEFAULT_SETTINGS };
let _themeAutoMq = null;

function _resolveTheme() {
  if (_settings.themeAuto && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  return _settings.theme || 'dark';
}

function _bindThemeAuto() {
  if (_themeAutoMq) {
    try { _themeAutoMq.removeEventListener('change', _onThemeAutoChange); } catch (e) {}
    _themeAutoMq = null;
  }
  if (!_settings.themeAuto || !window.matchMedia) return;
  _themeAutoMq = window.matchMedia('(prefers-color-scheme: light)');
  _themeAutoMq.addEventListener('change', _onThemeAutoChange);
}

function _onThemeAutoChange() {
  document.body.classList.toggle('light', _resolveTheme() === 'light');
  updateThemeBtn();
  renderSettingsPreview();
}

function loadSettings() {
  try {
    const s = JSON.parse(localStorage.getItem('bac_settings') || '{}');
    _settings = { ...DEFAULT_SETTINGS, ...s };
  } catch (e) { _settings = { ...DEFAULT_SETTINGS }; }
}
function saveSettings() {
  try { localStorage.setItem('bac_settings', JSON.stringify(_settings)); } catch (e) {}
}

function getSetting(k) { return _settings[k]; }

function applySetting(key, val, segBtn) {
  if (key === 'theme' && _settings.themeAuto) {
    _settings.themeAuto = false;
    _bindThemeAuto();
    _setSw('sw-themeauto', false);
  }
  _settings[key] = val;
  saveSettings();
  _applySettingEffect(key, val);
  const dashKeys = ['showBacDashboard', 'showNavReadiness', 'userName', 'brandTitle', 'profileEmoji', 'profileGoal'];
  const isProb = key.startsWith('prob');
  const isUiDesign = ['surfaceStyle', 'borderRadius', 'heroStyle', 'accentGlow', 'showCountdownBar', 'navStyle', 'accent', 'theme', 'themeAuto', 'backgroundStyle', 'matiereColors', 'cardBorder'].includes(key);
  if (isProb) refreshProbStats();
  applyUiPreferences(dashKeys.includes(key) || isProb || isUiDesign);
  if (segBtn) {
    const parent = segBtn.closest('.seg-ctrl');
    if (parent) parent.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('on'));
    segBtn.classList.add('on');
  }
  _updateSettingsLabels();
}

function refreshProbStats() {
  scheduleDashboardUpdate();
  if (typeof renderExam === 'function') {
    const examPage = el('page-exam');
    if (examPage && examPage.classList.contains('on')) renderExam();
  }
  const gtextPg = el('proc-p-gtextes');
  if (gtextPg && gtextPg.classList.contains('on') && typeof renderGtextesList === 'function') {
    if (GTEXT_STATE.phase === 'work' && typeof renderGtextWork === 'function') renderGtextWork();
    else renderGtextesList();
  }
  ['proc', 'gram', 'vocab'].forEach(m => {
    if (typeof renderStats !== 'function') return;
    const page = el(typeof STAT_CONFIG !== 'undefined' ? STAT_CONFIG[m].prefix + 'stats' : m + '-stats');
    if (page && page.classList.contains('on') && typeof renderAdvancedStats === 'function') renderAdvancedStats(m);
  });
}

function _applySettingEffect(key, val) {
  const b = document.body;
  switch (key) {
    case 'theme':
      b.classList.toggle('light', _resolveTheme() === 'light');
      updateThemeBtn();
      renderSettingsPreview();
      break;
    case 'themeAuto':
      _bindThemeAuto();
      b.classList.toggle('light', _resolveTheme() === 'light');
      updateThemeBtn();
      break;
    case 'accent':
      const a = ACCENTS[val] || ACCENTS.gold;
      document.documentElement.style.setProperty('--gold',  a.c);
      document.documentElement.style.setProperty('--gold2', a.c2);
      document.documentElement.style.setProperty('--gdim',  a.dim);
      renderSettingsPreview();
      break;
    case 'fontSize':
      b.classList.remove('fs-sm','fs-lg');
      if (val === 0) b.classList.add('fs-sm');
      if (val === 2) b.classList.add('fs-lg');
      _fsIdx = val;
      _applyFs();
      break;
    case 'density':
      b.classList.remove('density-compact','density-spacious');
      if (val !== 'normal') b.classList.add('density-' + val);
      break;
    case 'animations':
      b.classList.toggle('no-animations', !val);
      break;
    case 'timerDuration':
      /* lu directement via getSetting() dans startTimer */
      break;
    case 'soundVolume':
      if (!_applyingAllSettings && _settings.soundOn && typeof playSound === 'function') playSound('click');
      break;
    case 'soundTheme':
    case 'soundClicks':
    case 'soundTimerTick':
    case 'soundOn':
      if (key === 'soundTheme' && !_applyingAllSettings && _settings.soundOn && typeof previewSound === 'function') previewSound();
      break;
    case 'reduceMotion':
      b.classList.toggle('reduce-motion', val);
      break;
    case 'highContrast':
      b.classList.toggle('high-contrast', val);
      break;
    case 'surfaceStyle':
    case 'borderRadius':
    case 'heroStyle':
    case 'accentGlow':
    case 'showCountdownBar':
    case 'navStyle':
    case 'backgroundStyle':
    case 'matiereColors':
    case 'cardBorder':
      applyUiPreferences(false);
      renderSettingsPreview();
      break;
    case 'profileEmoji':
    case 'profileGoal':
    case 'brandTitle':
    case 'userName':
      updateProfileNav();
      break;
  }
}

function scheduleDashboardUpdate() {
  clearTimeout(_dashboardTimer);
  _dashboardTimer = setTimeout(() => {
    if (typeof renderGlobalDashboard === 'function') renderGlobalDashboard();
  }, 280);
}

function applyUiPreferences(refreshDashboard) {
  const b = document.body;
  const s = _settings;
  _searchDebounceMs = s.searchDebounce || 180;

  b.classList.toggle('hide-kb-hints',       !s.showKbHints);
  b.classList.toggle('hide-heroes',        !s.showHeroSections);
  b.classList.toggle('hide-daily',         !s.showDailyChallenge);
  b.classList.toggle('hide-footer',        !s.showFooters);
  b.classList.toggle('hide-subnav',        !s.showSubnav);
  b.classList.toggle('hide-corpus-link',   !s.qcmShowCorpusLink);
  b.classList.toggle('hide-qcm-fav',       !s.qcmShowFavBtn);
  b.classList.toggle('hide-readiness-stats', !s.showReadinessStats);
  b.classList.toggle('hide-advanced-stats',  !s.showStatsAdvanced);
  b.classList.toggle('hide-bac-dashboard',   !s.showBacDashboard);
  b.classList.toggle('hide-nav-readiness',   !s.showNavReadiness);
  b.classList.toggle('hide-prob-hub',        s.probShowHub === false);
  b.classList.toggle('hide-prob-catalog',    s.probShowCatalogGrid === false);
  b.classList.toggle('hide-exam-prob-preview', s.probShowExamPreview === false);
  b.classList.toggle('hide-gtext-prob-panel', s.probShowGtextPanel === false);
  b.classList.toggle('hide-gtext-prob-hub', s.gtextShowProbHub === false);
  b.classList.toggle('compact-nav',         s.compactNav);
  b.classList.toggle('sp-wide',             s.settingsPanelWide);
  b.classList.toggle('corpus-compact',      s.corpusCompact);

  b.classList.remove('surface-glass', 'surface-flat', 'surface-soft');
  const surf = s.surfaceStyle || 'default';
  if (surf !== 'default') b.classList.add('surface-' + surf);

  b.classList.remove('radius-sharp', 'radius-round');
  if (s.borderRadius === 'sharp') b.classList.add('radius-sharp');
  if (s.borderRadius === 'round') b.classList.add('radius-round');

  b.classList.remove('hero-minimal', 'hero-bold');
  const hero = s.heroStyle || 'gradient';
  if (hero === 'minimal') b.classList.add('hero-minimal');
  if (hero === 'bold') b.classList.add('hero-bold');

  b.classList.toggle('accent-glow', s.accentGlow !== false);
  b.classList.toggle('hide-countdown', s.showCountdownBar === false);
  b.classList.toggle('nav-pills', s.navStyle === 'pills');

  b.classList.remove('bg-subtle', 'bg-gradient', 'bg-plain');
  const bg = s.backgroundStyle || 'default';
  if (bg !== 'default') b.classList.add('bg-' + bg);

  b.classList.remove('card-border-accent', 'card-border-minimal');
  if (s.cardBorder === 'accent') b.classList.add('card-border-accent');
  if (s.cardBorder === 'minimal') b.classList.add('card-border-minimal');

  b.classList.toggle('matiere-colors', s.matiereColors !== false);

  document.body.classList.toggle('light', _resolveTheme() === 'light');

  b.classList.remove('font-serif', 'font-sans-only', 'font-system');
  if (s.fontFamily === 'serif')  b.classList.add('font-serif');
  if (s.fontFamily === 'sans')   b.classList.add('font-sans-only');
  if (s.fontFamily === 'system') b.classList.add('font-system');

  document.documentElement.style.setProperty('--ui-scale', (s.uiScale || 100) / 100);
  document.documentElement.style.setProperty('--pgrid-cols', s.procGridCols || 3);

  const brandText = document.querySelector('.brand-text');
  if (brandText) brandText.textContent = s.brandTitle || DEFAULT_SETTINGS.brandTitle;
  document.title = (s.brandTitle || 'Bac de Français') + ' — Première';

  const inpBrand = el('inp-brand');
  const inpName  = el('inp-username');
  if (inpBrand && document.activeElement !== inpBrand) inpBrand.value = s.brandTitle || '';
  if (inpName  && document.activeElement !== inpName)  inpName.value  = s.userName || '';
  const inpEmoji = el('inp-profile-emoji');
  const inpGoal = el('inp-profile-goal');
  if (inpEmoji && document.activeElement !== inpEmoji) inpEmoji.value = s.profileEmoji || '';
  if (inpGoal && document.activeElement !== inpGoal) inpGoal.value = s.profileGoal || '';

  updateProfileNav();
  renderSettingsPreview();

  updateStreakNav();
  if (s.showDailyChallenge) renderDailyChallenge();
  else { const d = el('daily-challenge'); if (d) d.style.display = 'none'; }

  if (refreshDashboard) scheduleDashboardUpdate();

  if (typeof syncGtextUiClasses === 'function') syncGtextUiClasses();

  ['proc','gram','vocab'].forEach(m => {
    const btn = el(QCM_STATE[m]?.prefix + 'focus-btn');
    if (btn) btn.classList.toggle('on', s.qcmFocusMode);
  });

  if (typeof applyScreenFit === 'function') applyScreenFit();
}

function applySettingsPreset(name) {
  const preset = SETTINGS_PRESETS[name];
  if (!preset && name === 'full') {
    _settings = { ...DEFAULT_SETTINGS };
  } else if (preset) {
    _settings = { ...DEFAULT_SETTINGS, ...preset };
  } else return;
  saveSettings();
  applyAllSettings();
  syncSettingsUI();
  _examPreset = getSetting('examPresetDefault');
  _examMat = getSetting('examMatDefault');
  syncSessionChips();
  ['proc','gram','vocab'].forEach(m => mixQ(m));
  renderExam();
}

function applyAllSettings() {
  loadSettings();
  _applyingAllSettings = true;
  try {
    Object.entries(_settings).forEach(([k, v]) => _applySettingEffect(k, v));
  } finally {
    _applyingAllSettings = false;
  }
  _bindThemeAuto();
  applyUiPreferences(false);
  _updateSettingsLabels();
}

function openSettings() {
  if (typeof pauseTimeTracker === 'function') pauseTimeTracker();
  syncSettingsUI();
  switchSettingsTab(_settings.settingsTab || 'design');
  el('settings-overlay').classList.add('open');
  el('settings-panel').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSettings() {
  el('settings-overlay').classList.remove('open');
  el('settings-panel').classList.remove('open');
  document.body.style.overflow = '';
  if (typeof resumeTimeTracker === 'function') resumeTimeTracker();
}

function syncSettingsUI() {
  const s = _settings;

  // Segmented controls
  _syncSeg('seg-theme',    s.theme);
  _syncSeg('seg-fontsize', String(s.fontSize));
  _syncSeg('seg-density',  s.density);
  _syncSeg('seg-autoflip', String(s.autoFlip));
  _syncSeg('seg-fontfamily', s.fontFamily);
  _syncSeg('seg-defaultmat', s.defaultMatiere);
  _syncSeg('seg-qcmsession', String(s.qcmSessionSize));
  _syncSeg('seg-qcmfocus', s.qcmFocusMode ? '1' : '0');
  _syncSeg('seg-exammat', s.examMatDefault);
  _syncSeg('seg-exampreset', String(s.examPresetDefault));
  _syncSeg('seg-gridcols', String(s.procGridCols));
  _syncSeg('seg-gtextsize', s.gtextTextSize || 'normal');
  _syncSeg('seg-surface', s.surfaceStyle || 'default');
  _syncSeg('seg-radius', s.borderRadius || 'normal');
  _syncSeg('seg-hero', s.heroStyle || 'gradient');
  _syncSeg('seg-navstyle', s.navStyle || 'default');
  _syncSeg('seg-background', s.backgroundStyle || 'default');
  _syncSeg('seg-cardborder', s.cardBorder || 'normal');

  _setSw('sw-themeauto', s.themeAuto);
  _setSw('sw-accentglow', s.accentGlow !== false);
  _setSw('sw-countdown', s.showCountdownBar !== false);
  _setSw('sw-matierecolors', s.matiereColors !== false);
  _setSw('sw-gtext-ctx', s.gtextShowContext !== false);
  _setSw('sw-gtext-hints', s.gtextShowHints);
  _setSw('sw-gtext-hide', s.gtextHideCompleted);
  _setSw('sw-gtext-shuf', s.gtextShuffleList);
  _setSw('sw-gtext-probhub', s.gtextShowProbHub !== false);

  _setRange('range-gtext-thr', s.gtextInterpThreshold ?? 28);
  _setRange('range-gtext-min', s.gtextMinInterpChars ?? 15);

  _syncSeg('seg-probmode', s.probMode || 'realistic');

  _setSw('sw-prob-penalties', s.probApplyPenalties !== false);
  _setSw('sw-prob-challenge', s.probIncludeChallenge !== false);
  _setSw('sw-prob-cartes', s.probIncludeCartes !== false);
  _setSw('sw-prob-exo', s.probIncludeExo !== false);
  _setSw('sw-prob-hub', s.probShowHub !== false);
  _setSw('sw-prob-catalog', s.probShowCatalogGrid !== false);
  _setSw('sw-prob-indicators', s.probShowIndicators !== false);
  _setSw('sw-prob-insufficient', s.probShowInsufficient === true);
  _setSw('sw-prob-examprev', s.probShowExamPreview !== false);
  _setSw('sw-prob-gtext', s.probShowGtextPanel !== false);

  _setRange('range-prob-prior', s.probPriorAdmis ?? 40);
  _setRange('range-prob-priorgt', s.probPriorGtext ?? 38);
  _setRange('range-prob-shrink', s.probShrinkK ?? 8);
  _setRange('range-prob-shrinkexam', s.probShrinkKExam ?? 2);
  _setRange('range-prob-shrinkgt', s.probShrinkKGtext ?? 4);
  _setRange('range-prob-steep', s.probSteepness ?? 88);
  _setRange('range-prob-wexam', s.probWeightExam ?? 36);
  _setRange('range-prob-wqcm', s.probWeightQcm ?? 30);
  _setRange('range-prob-wgtext', s.probWeightGtext ?? 22);
  _setRange('range-prob-wexo', s.probWeightExo ?? 6);
  _setRange('range-prob-wchal', s.probWeightChallenge ?? 3);
  _setRange('range-prob-wcartes', s.probWeightCartes ?? 3);
  _setRange('range-prob-minqcm', s.probMinQcmAttempts ?? 3);
  _setRange('range-prob-mincat', s.probMinCatAttempts ?? 3);
  _setRange('range-prob-minexo', s.probMinExoAttempts ?? 5);
  _setRange('range-prob-minchal', s.probMinChallenge ?? 3);
  _setRange('range-prob-mincartes', s.probMinCarteCards ?? 8);
  _setRange('range-prob-cap-hi', s.probMaxCapHigh ?? 90);
  _setRange('range-prob-cap-mid', s.probMaxCapMid ?? 82);
  _setRange('range-prob-cap-lo', s.probMaxCapLow ?? 74);
  _setRange('range-prob-capn5', s.probCapN5 ?? 72);
  _setRange('range-prob-capn2', s.probCapN2 ?? 62);
  _setRange('range-prob-capn1', s.probCapN1 ?? 48);
  _setRange('range-prob-band', s.probBandSpread ?? 0);
  _setRange('range-prob-band-ins', s.probBandInsufficient ?? 12);
  _setRange('range-prob-pen-noexam', s.probPenaltyNoExam ?? 5);
  _setRange('range-prob-pen-cov12', s.probPenaltyLowCov12 ?? 10);
  _setRange('range-prob-pen-cov25', s.probPenaltyLowCov25 ?? 5);
  _setRange('range-prob-pen-tout', s.probPenaltyTimeoutHigh ?? 6);
  _setRange('range-prob-pen-toutmid', s.probPenaltyTimeoutMid ?? 3);
  _setRange('range-prob-pen-weak4', s.probPenaltyWeak4 ?? 6);
  _setRange('range-prob-pen-weak2', s.probPenaltyWeak2 ?? 3);
  _setRange('range-prob-composite', s.probCompositeQcm ?? 62);

  _setSw('sw-animations', s.animations);
  _setSw('sw-expl',       s.showExplIm);
  _setSw('sw-kb',         s.kbShortcuts);
  _setSw('sw-catprog',    s.showCatProg);
  _setSw('sw-confetti',   s.confettiOn);
  _setSw('sw-sound',      s.soundOn);
  _setSw('sw-soundclick', s.soundClicks !== false);
  _setSw('sw-soundtick',  s.soundTimerTick !== false);

  _syncSeg('seg-soundtheme', s.soundTheme || 'classic');
  _setSw('sw-streak',     s.streakOn);
  _setSw('sw-motion',     s.reduceMotion);
  _setSw('sw-contrast',   s.highContrast);
  _setSw('sw-catcard',    s.showCatCard);
  _setSw('sw-qcmshuffle', s.qcmShuffleOnReset);
  _setSw('sw-qcmcorpus',  s.qcmShowCorpusLink);
  _setSw('sw-qcmfav',     s.qcmShowFavBtn);
  _setSw('sw-qcmadvance', s.qcmAutoAdvance);
  _setSw('sw-daily',      s.showDailyChallenge);
  _setSw('sw-kbhints',    s.showKbHints);
  _setSw('sw-heroes',     s.showHeroSections);
  _setSw('sw-footers',    s.showFooters);
  _setSw('sw-subnav',     s.showSubnav);
  _setSw('sw-navstreak',  s.showNavStreak);
  _setSw('sw-navready',   s.showNavReadiness);
  _setSw('sw-remember',   s.rememberPage);
  _setSw('sw-spwide',     s.settingsPanelWide);
  _setSw('sw-compactnav', s.compactNav);
  _setSw('sw-readystats', s.showReadinessStats);
  _setSw('sw-advstats',   s.showStatsAdvanced);
  _setSw('sw-bacdash',    s.showBacDashboard);
  _setSw('sw-exoshuffle', s.exoShuffleOnReset);
  _setSw('sw-corpuscomp', s.corpusCompact);

  _setRange('range-timer',    s.timerDuration);
  _setRange('range-revise',   Math.round(s.reviseThresh * 100));
  _setRange('range-confetti', s.confettiThr);
  _setRange('range-sound',    s.soundVolume);
  _setRange('range-uiscale',  s.uiScale);
  _setRange('range-debounce', s.searchDebounce);

  // Accent swatches
  document.querySelectorAll('.accent-swatch').forEach(sw => {
    sw.classList.toggle('on', sw.dataset.accent === s.accent);
  });

  _updateSettingsLabels();
}

function _syncSeg(id, val) {
  const c = el(id);
  if (!c) return;
  c.querySelectorAll('.seg-btn').forEach(b => b.classList.toggle('on', b.dataset.val === String(val)));
}
function _setSw(id, val) {
  const i = el(id);
  if (i) i.checked = !!val;
}
function _setRange(id, val) {
  const r = el(id);
  if (r) r.value = val;
}
function _updateSettingsLabels() {
  const lbl = (id, txt) => { const e = el(id); if (e) e.textContent = txt; };
  lbl('sound-theme-hint', SOUND_THEME_HINTS[_settings.soundTheme || 'classic'] || SOUND_THEME_HINTS.classic);
  lbl('timer-val-lbl',    _settings.timerDuration + 's');
  lbl('revise-val-lbl',   '< ' + Math.round(_settings.reviseThresh * 100) + '%');
  lbl('confetti-val-lbl', '≥ ' + _settings.confettiThr + '%');
  lbl('sound-val-lbl',    _settings.soundVolume + '%');
  lbl('uiscale-val-lbl',  _settings.uiScale + '%');
  lbl('debounce-val-lbl', _settings.searchDebounce + 'ms');
  const af = _settings.autoFlip;
  lbl('autoflip-lbl', af === 0 ? 'Désactivé' : `Retourne après ${af}s`);
  const presetLbl = ['10q·5m','20q·10m','30q·15m','50q·25m','100q·45m'];
  lbl('exampreset-lbl', presetLbl[_settings.examPresetDefault] || '20q·10m');
  lbl('gtext-thr-lbl', (_settings.gtextInterpThreshold ?? 28) + '% mots-clés');
  lbl('gtext-min-lbl', (_settings.gtextMinInterpChars ?? 15) + ' car.');
  lbl('prob-prior-lbl', (_settings.probPriorAdmis ?? 40) + '%');
  lbl('prob-priorgt-lbl', (_settings.probPriorGtext ?? 38) + '%');
  lbl('prob-shrink-lbl', String(_settings.probShrinkK ?? 8));
  lbl('prob-shrinkexam-lbl', String(_settings.probShrinkKExam ?? 2));
  lbl('prob-shrinkgt-lbl', String(_settings.probShrinkKGtext ?? 4));
  lbl('prob-steep-lbl', String(_settings.probSteepness ?? 88));
  lbl('prob-wexam-lbl', (_settings.probWeightExam ?? 36) + '%');
  lbl('prob-wqcm-lbl', (_settings.probWeightQcm ?? 30) + '%');
  lbl('prob-wgtext-lbl', (_settings.probWeightGtext ?? 22) + '%');
  lbl('prob-wexo-lbl', (_settings.probWeightExo ?? 6) + '%');
  lbl('prob-wchal-lbl', (_settings.probWeightChallenge ?? 3) + '%');
  lbl('prob-wcartes-lbl', (_settings.probWeightCartes ?? 3) + '%');
  lbl('prob-minqcm-lbl', String(_settings.probMinQcmAttempts ?? 3));
  lbl('prob-mincat-lbl', String(_settings.probMinCatAttempts ?? 3));
  lbl('prob-minexo-lbl', String(_settings.probMinExoAttempts ?? 5));
  lbl('prob-minchal-lbl', String(_settings.probMinChallenge ?? 3));
  lbl('prob-mincartes-lbl', String(_settings.probMinCarteCards ?? 8));
  lbl('prob-cap-hi-lbl', (_settings.probMaxCapHigh ?? 90) + '%');
  lbl('prob-cap-mid-lbl', (_settings.probMaxCapMid ?? 82) + '%');
  lbl('prob-cap-lo-lbl', (_settings.probMaxCapLow ?? 74) + '%');
  lbl('prob-capn5-lbl', (_settings.probCapN5 ?? 72) + '%');
  lbl('prob-capn2-lbl', (_settings.probCapN2 ?? 62) + '%');
  lbl('prob-capn1-lbl', (_settings.probCapN1 ?? 48) + '%');
  lbl('prob-band-lbl', '+' + (_settings.probBandSpread ?? 0) + ' pts');
  lbl('prob-band-ins-lbl', String(_settings.probBandInsufficient ?? 12) + ' pts');
  lbl('prob-pen-noexam-lbl', '−' + (_settings.probPenaltyNoExam ?? 5));
  lbl('prob-pen-cov12-lbl', '−' + (_settings.probPenaltyLowCov12 ?? 10));
  lbl('prob-pen-cov25-lbl', '−' + (_settings.probPenaltyLowCov25 ?? 5));
  lbl('prob-pen-tout-lbl', '−' + (_settings.probPenaltyTimeoutHigh ?? 6));
  lbl('prob-pen-toutmid-lbl', '−' + (_settings.probPenaltyTimeoutMid ?? 3));
  lbl('prob-pen-weak4-lbl', '−' + (_settings.probPenaltyWeak4 ?? 6));
  lbl('prob-pen-weak2-lbl', '−' + (_settings.probPenaltyWeak2 ?? 3));
  lbl('prob-composite-lbl', (_settings.probCompositeQcm ?? 62) + '% QCM');
  const modeLbl = { prudent: 'Prudent (−7%)', realistic: 'Réaliste', ambitious: 'Ambitieux (+7%)' };
  lbl('prob-mode-lbl', modeLbl[_settings.probMode] || 'Réaliste');
}

function buildAccentSwatches() {
  const cont = el('accent-swatches');
  if (!cont) return;
  cont.innerHTML = Object.entries(ACCENTS).map(([key, a]) =>
    `<button type="button" class="accent-swatch${_settings.accent === key ? ' on' : ''}"
      data-accent="${key}"
      style="background:${a.c}"
      title="${a.label}"
      aria-label="Accent ${a.label}"
      onclick="applySetting('accent','${key}');document.querySelectorAll('.accent-swatch').forEach(s=>s.classList.toggle('on',s.dataset.accent==='${key}'))">
      <span class="accent-swatch-lbl">${a.label}</span>
    </button>`
  ).join('');
}

/* ── Design & personnalisation (UI paramètres) ── */
function switchSettingsTab(tab, btn) {
  _settings.settingsTab = tab;
  saveSettings();
  document.querySelectorAll('.sp-tab').forEach(t => t.classList.toggle('on', t.dataset.tab === tab));
  document.querySelectorAll('.sp-section[data-sp-tab]').forEach(sec => {
    sec.classList.toggle('sp-hidden', sec.dataset.spTab !== tab);
  });
  if (btn) btn.classList.add('on');
}

function filterSettingsPanel(q) {
  const norm = (q || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  const activeTab = _settings.settingsTab || 'design';
  document.querySelectorAll(`.sp-section[data-sp-tab="${activeTab}"] .sp-row`).forEach(row => {
    if (!norm) { row.classList.remove('sp-filtered-out'); return; }
    const txt = (row.textContent || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    row.classList.toggle('sp-filtered-out', !txt.includes(norm));
  });
}

function renderSettingsPreview() {
  const box = el('sp-preview');
  if (!box) return;
  const s = _settings;
  const title = s.brandTitle || 'Bac de Français';
  const name = s.userName ? ` · ${s.userName}` : '';
  const emoji = s.profileEmoji ? `${s.profileEmoji} ` : '';
  box.innerHTML = `
    <div class="sp-preview-card card">
      <span class="sp-preview-chip">${emoji}Aperçu live</span>
      <h3 class="sp-preview-title">${title.replace(/</g, '&lt;')}<em>${name}</em></h3>
      <p class="sp-preview-sub">Thème ${_resolveTheme() === 'light' ? 'clair' : 'sombre'} · accent ${ACCENTS[s.accent]?.label || 'Or'} · ${s.surfaceStyle || 'default'} · fond ${s.backgroundStyle || 'default'}</p>
      <div class="sp-preview-row">
        <span class="chip on">Procédé</span>
        <span class="chip">Citation</span>
      </div>
      <div class="sp-preview-btns">
        <span class="sbtn sp-preview-btn">Secondaire</span>
        <span class="pbtn sp-preview-btn">Primaire</span>
      </div>
    </div>`;
}

function updateProfileNav() {
  const badge = el('profile-nav-badge');
  if (!badge) return;
  const emoji = (_settings.profileEmoji || '').trim();
  const name = (_settings.userName || '').trim();
  if (!emoji && !name) { badge.style.display = 'none'; badge.textContent = ''; return; }
  badge.style.display = 'inline-flex';
  badge.textContent = emoji || name.slice(0, 1).toUpperCase();
  badge.title = name ? `Profil · ${name}` : 'Profil';
}

function exportSettingsOnly() {
  const blob = new Blob([JSON.stringify({ settings: _settings, exported: new Date().toISOString() }, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `bac-parametres-${new Date().toLocaleDateString('fr-FR').replace(/\//g, '-')}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importSettingsOnly(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      const st = data.settings || data;
      if (!st || typeof st !== 'object') throw new Error('invalid');
      _settings = { ...DEFAULT_SETTINGS, ...st };
      saveSettings();
      applyAllSettings();
      syncSettingsUI();
      switchSettingsTab(_settings.settingsTab || 'design');
      alert('✅ Paramètres importés.');
    } catch (err) { alert('❌ Fichier paramètres invalide.'); }
  };
  reader.readAsText(file);
  e.target.value = '';
}

function saveCustomPreset() {
  try {
    localStorage.setItem('bac_custom_preset', JSON.stringify(_settings));
    alert('✅ Profil personnalisé enregistré.');
  } catch (e) { alert('❌ Impossible d\'enregistrer.'); }
}

function applyCustomPreset() {
  try {
    const raw = localStorage.getItem('bac_custom_preset');
    if (!raw) { alert('Aucun profil personnalisé enregistré. Utilise « Sauver mon profil » d\'abord.'); return; }
    _settings = { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
    saveSettings();
    applyAllSettings();
    syncSettingsUI();
    switchSettingsTab(_settings.settingsTab || 'design');
    _examPreset = getSetting('examPresetDefault');
    _examMat = getSetting('examMatDefault');
    syncSessionChips();
    ['proc', 'gram', 'vocab'].forEach(m => mixQ(m));
    renderExam();
    scheduleDashboardUpdate();
  } catch (e) { alert('❌ Profil personnalisé corrompu.'); }
}

function applyCustomAccent(hex) {
  const h = (hex || '').trim();
  if (!/^#[0-9a-fA-F]{6}$/.test(h)) return;
  document.documentElement.style.setProperty('--gold', h);
  document.documentElement.style.setProperty('--gold2', h);
  document.documentElement.style.setProperty('--gdim', h + '22');
  renderSettingsPreview();
}

/* ── Export / Import / Reset ── */
const BAC_FIXED_STAT_KEYS = [
  'bac_proc_stats', 'bac_gram_stats', 'bac_vocab_stats',
  'bac_exo_stats', 'bac_exam_history', 'bac_gtext_stats',
  'bac_carte_stats', 'bac_challenge_stats', 'bac_time_stats',
];

function _removeLocalStorageByPrefix(prefix) {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith(prefix)) keys.push(k);
  }
  keys.forEach(k => localStorage.removeItem(k));
}

function _refreshAfterStatsReset() {
  if (typeof QCM_STATE !== 'undefined') {
    ['proc', 'gram', 'vocab'].forEach(m => {
      QCM_STATE[m].answers = {};
      QCM_STATE[m].currentIdx = 0;
    });
    if (typeof mixQ === 'function') {
      mixQ('proc');
      mixQ('gram');
      mixQ('vocab');
    }
  }
  if (typeof STAT_CONFIG !== 'undefined') {
    ['proc', 'gram', 'vocab'].forEach(m => {
      if (typeof renderStats === 'function') renderStats(m);
    });
  }
  if (typeof renderFavs === 'function') renderFavs();
  if (typeof renderDailyChallenge === 'function') renderDailyChallenge();
  if (typeof updateStreakNav === 'function') updateStreakNav();
  if (typeof renderExam === 'function') renderExam();
  const gtextPg = el('proc-p-gtextes');
  if (gtextPg && gtextPg.classList.contains('on') && typeof renderGtextesList === 'function') {
    if (typeof GTEXT_STATE !== 'undefined' && GTEXT_STATE.phase === 'work' && typeof renderGtextWork === 'function') renderGtextWork();
    else renderGtextesList();
  }
  scheduleDashboardUpdate();
}

/** Efface toutes les stats d'apprentissage (paramètres et favoris conservés par défaut). */
function resetStats(options) {
  const opts = options || {};
  const includeFavs = !!opts.includeFavs;
  const msg = includeFavs
    ? 'Effacer toutes les statistiques et les favoris ?\n\nConservés : paramètres, textes grands textes perso.'
    : 'Réinitialiser toutes les statistiques ?\n\nQCM · examens · grands textes · exercices · cartes · défi quotidien\n\nConservés : favoris, paramètres, textes perso.';
  if (!confirm(msg)) return;

  BAC_FIXED_STAT_KEYS.forEach(k => localStorage.removeItem(k));
  _removeLocalStorageByPrefix('bac_challenge_');
  _removeLocalStorageByPrefix('bac_gtext_draft_');
  if (includeFavs) localStorage.removeItem('bac_favs');

  invalidateAllCaches();
  _refreshAfterStatsReset();
  alert('✅ Statistiques réinitialisées.');
}

function exportStats() {
  const data = {
    proc:     JSON.parse(localStorage.getItem('bac_proc_stats') || '{}'),
    gram:     JSON.parse(localStorage.getItem('bac_gram_stats') || '{}'),
    vocab:    JSON.parse(localStorage.getItem('bac_vocab_stats') || '{}'),
    favs:     JSON.parse(localStorage.getItem('bac_favs')       || '{}'),
    exo:      JSON.parse(localStorage.getItem('bac_exo_stats')  || '{}'),
    exams:    JSON.parse(localStorage.getItem('bac_exam_history') || '[]'),
    gtext:    JSON.parse(localStorage.getItem('bac_gtext_stats') || '{}'),
    cartes:   JSON.parse(localStorage.getItem('bac_carte_stats') || '{}'),
    challenge: JSON.parse(localStorage.getItem('bac_challenge_stats') || '{}'),
    time:     JSON.parse(localStorage.getItem('bac_time_stats') || '{}'),
    settings: _settings,
    exported: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type:'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `bac-stats-${new Date().toLocaleDateString('fr-FR').replace(/\//g,'-')}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importStats(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (data.proc)     { localStorage.setItem('bac_proc_stats', JSON.stringify(data.proc)); invalidateStCache('bac_proc_stats'); }
      if (data.gram)     { localStorage.setItem('bac_gram_stats', JSON.stringify(data.gram)); invalidateStCache('bac_gram_stats'); }
      if (data.vocab)    { localStorage.setItem('bac_vocab_stats', JSON.stringify(data.vocab)); invalidateStCache('bac_vocab_stats'); }
      if (data.favs)     { localStorage.setItem('bac_favs',       JSON.stringify(data.favs)); invalidateFavsCache(); }
      if (data.exo)      localStorage.setItem('bac_exo_stats',  JSON.stringify(data.exo));
      if (data.exams)    localStorage.setItem('bac_exam_history', JSON.stringify(data.exams));
      if (data.gtext)    localStorage.setItem('bac_gtext_stats', JSON.stringify(data.gtext));
      if (data.cartes)   localStorage.setItem('bac_carte_stats', JSON.stringify(data.cartes));
      if (data.challenge) localStorage.setItem('bac_challenge_stats', JSON.stringify(data.challenge));
      if (data.time)      localStorage.setItem('bac_time_stats', JSON.stringify(data.time));
      if (data.settings) { localStorage.setItem('bac_settings', JSON.stringify(data.settings)); applyAllSettings(); syncSettingsUI(); }
      invalidateAllCaches();
      scheduleDashboardUpdate();
      alert('✅ Importation réussie !');
    } catch (err) { alert('❌ Fichier invalide.'); }
  };
  reader.readAsText(file);
  e.target.value = '';
}

function resetAll() {
  resetStats({ includeFavs: true });
}

function resetToDefaults() {
  if (!confirm('Rétablir tous les paramètres par défaut ?')) return;
  _settings = { ...DEFAULT_SETTINGS };
  saveSettings();
  applyAllSettings();
  syncSettingsUI();
  _examPreset = getSetting('examPresetDefault');
  _examMat = getSetting('examMatDefault');
  syncSessionChips();
  ['proc','gram','vocab'].forEach(m => mixQ(m));
  renderExam();
  scheduleDashboardUpdate();
}

/* ── Utilitaires ── */
function shuf(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Mélange partiel : O(limit) au lieu de O(n) */
function shufSample(arr, limit) {
  if (limit <= 0 || limit >= arr.length) return shuf(arr);
  const a = arr.slice();
  const n = a.length;
  for (let i = 0; i < limit; i++) {
    const j = i + Math.floor(Math.random() * (n - i));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, limit);
}

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

/** Mélange les options d'une question QCM et recalcule l'index de la bonne réponse. */
function shuffleQcmOptions(q, seed) {
  if (!q || !Array.isArray(q.opts) || q.opts.length < 2 || q.ans == null) return q;
  const opts = q.opts.slice();
  const correct = opts[q.ans];
  if (correct === undefined) return q;
  let step = 0;
  const rand = seed != null
    ? () => seededRandom(seed + ++step * 9973)
    : () => Math.random();
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [opts[i], opts[j]] = [opts[j], opts[i]];
  }
  let ans = opts.indexOf(correct);
  if (ans < 0) {
    const k = String(correct).trim().toLowerCase();
    ans = opts.findIndex(o => String(o).trim().toLowerCase() === k);
  }
  if (ans < 0) return q;
  return { ...q, opts, ans };
}
function debounce(fn, ms) {
  ms = ms ?? _searchDebounceMs;
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}
function el(id) { return document.getElementById(id); }

/** Attribut onclick sûr — guillemets doubles JS → attribut HTML en quotes simples */
function htmlOnclickAttr(jsCall) {
  if (!jsCall) return '';
  const s = String(jsCall);
  if (s.includes('"') && !s.includes("'")) return `onclick='${s}'`;
  if (s.includes("'") && !s.includes('"')) return `onclick="${s.replace(/"/g, '&quot;')}"`;
  const esc = s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  return `onclick="${esc}"`;
}
function qKey(q) { return q.q.slice(0, 60); }

function updateDynamicCounts() {
  const procN = typeof PROC_DATA !== 'undefined' ? PROC_DATA.length : 0;
  const procQ = typeof PROC_QCM !== 'undefined' ? PROC_QCM.length : 0;
  const gramF = typeof GRAM_COURS !== 'undefined' ? GRAM_COURS.length : 0;
  const vocabF = typeof VOCAB_COURS !== 'undefined' ? VOCAB_COURS.length : 0;
  const gramQ = typeof GRAM_QCM !== 'undefined' ? GRAM_QCM.length : 0;
  const vocabQ = typeof VOCAB_QCM !== 'undefined' ? VOCAB_QCM.length : 0;
  const exoAll = typeof EXERCICES !== 'undefined' ? EXERCICES.length : 0;
  const exoN = typeof window !== 'undefined' && window.BAC_ALIGNED_EXO
    ? window.BAC_ALIGNED_EXO.length
    : exoAll;
  const gtextN = typeof getAllGtexts === 'function'
    ? getAllGtexts().length
    : (typeof GRANDS_TEXTES !== 'undefined' ? GRANDS_TEXTES.length : 0);
  const totalQ = procQ + gramQ + vocabQ;
  const set = (id, txt) => { const e = el(id); if (e) e.textContent = txt; };
  set('proc-count-hero', `${procN} procédés courants · Exemples & effets · Clic pour développer`);
  set('carte-count-hero', `${procN} cartes · ${PROC_CATS ? PROC_CATS.length - 1 : 0} catégories · Programme bac Première`);
  set('exo-count-hero', `${exoN} exercices · Réponses écrites · Extraits · Corrigés`);
  set('qcm-count-proc', `${procQ} questions`);
  set('qcm-count-gram', `${gramQ} questions`);
  set('qcm-count-vocab', `${vocabQ} questions`);
  const corpusN = typeof CORPUS_DOC !== 'undefined' ? CORPUS_DOC.length : 0;
  const phraseN = typeof CORPUS_PHRASES !== 'undefined' && typeof window.bacCorpusPhraseAligned === 'function'
    ? CORPUS_PHRASES.filter(p => window.bacCorpusPhraseAligned(p)).length
    : (typeof CORPUS_PHRASES !== 'undefined' ? CORPUS_PHRASES.length : 0);
  set('corpus-count-hero', `${corpusN} entrées · ${procN} procédés · ${phraseN} phrases · Grammaire · Méthode`);
  let gtextGenreSummary = '';
  if (typeof GRANDS_TEXTES !== 'undefined' && typeof GTEXT_GENRES !== 'undefined') {
    const parts = GTEXT_GENRES.filter(g => g.id).map(g => {
      const n = GRANDS_TEXTES.filter(t => g.test(t.genre)).length;
      return n ? `${n} ${g.label.toLowerCase()}` : null;
    }).filter(Boolean);
    gtextGenreSummary = parts.length ? ` · ${parts.join(' · ')}` : '';
  }
  set('gtextes-count-hero', `${gtextN} textes · 10 000 passages bac (intro)${gtextGenreSummary}`);
  const auteursN = typeof AUTEURS_DATA !== 'undefined' ? AUTEURS_DATA.length : 0;
  set('auteurs-count-hero', `${auteursN} auteurs · Poésie · Roman · Théâtre · Litt. d'idées`);
  set('vocab-count-hero', `${vocabF} fiches · Lexique commentaire & dissertation · Clic pour développer`);
  set('exam-count-hero', `Banque : ${procQ} QCM litt. · ${gramQ} QCM gram. · ${vocabQ} QCM vocab. · Questions alignées programme`);
  const foot = document.querySelector('footer');
  if (foot) foot.textContent =
    `Bac de Français · Première · ${procN} procédés courants · ${gramF} fiches grammaire · ${vocabF} fiches vocabulaire · ~${totalQ} QCM · ${exoN} exercices · France`;
  document.querySelectorAll('.sp-about-text').forEach(el => {
    if (el.innerHTML.includes('procédés')) {
      el.innerHTML = `Bac de Français · Première<br>${procN} procédés courants · ${gramF} fiches grammaire · ${vocabF} fiches vocabulaire · ~${totalQ} QCM · ${exoN} exercices<br><span style="color:var(--tx3)">Données stockées localement (localStorage)</span>`;
    }
  });
}

function getAlignedExercises() {
  if (typeof window !== 'undefined' && window.BAC_ALIGNED_EXO) return window.BAC_ALIGNED_EXO;
  if (typeof EXERCICES === 'undefined') return [];
  if (typeof window.bacExoAligned === 'function') return EXERCICES.filter(ex => window.bacExoAligned(ex));
  return EXERCICES;
}

function syncQcmRefs() {
  if (typeof PROC_QCM !== 'undefined') QCM_STATE.proc.data = PROC_QCM;
  if (typeof PROC_QCM_CATS !== 'undefined') QCM_STATE.proc.cats = PROC_QCM_CATS;
  if (typeof GRAM_QCM !== 'undefined') QCM_STATE.gram.data = GRAM_QCM;
  if (typeof GRAM_QCM_CATS !== 'undefined') QCM_STATE.gram.cats = GRAM_QCM_CATS;
  if (typeof VOCAB_QCM !== 'undefined') QCM_STATE.vocab.data = VOCAB_QCM;
  if (typeof VOCAB_QCM_CATS !== 'undefined') QCM_STATE.vocab.cats = VOCAB_QCM_CATS;
  _dailyPool = null;
}

function pruneCoherenceOnBoot() {
  if (typeof PROC_DATA === 'undefined') return;
  const validProc = new Set(PROC_DATA.map(d => d.name));
  const validQ = new Set((typeof PROC_QCM !== 'undefined' ? PROC_QCM : []).map(q => q.q));
  const validGramQ = new Set((typeof GRAM_QCM !== 'undefined' ? GRAM_QCM : []).map(q => q.q));
  const validVocabQ = new Set((typeof VOCAB_QCM !== 'undefined' ? VOCAB_QCM : []).map(q => q.q));
  const alignedExoIds = new Set(getAlignedExercises().map(e => e.id));
  const f = loadFavs();
  let changed = false;

  const procF = f.proc.filter(n => validProc.has(n));
  if (procF.length !== f.proc.length) { f.proc = procF; changed = true; }

  const qprocF = f.qproc.filter(q => {
    if (q.startsWith('EXO:')) return alignedExoIds.has(q.slice(4));
    return validQ.has(q);
  });
  if (qprocF.length !== f.qproc.length) { f.qproc = qprocF; changed = true; }

  const qgramF = f.qgram.filter(q => validGramQ.has(q));
  if (qgramF.length !== f.qgram.length) { f.qgram = qgramF; changed = true; }

  const qvocabF = (f.qvocab || []).filter(q => validVocabQ.has(q));
  if (qvocabF.length !== (f.qvocab || []).length) { f.qvocab = qvocabF; changed = true; }

  if (typeof GRAM_COURS !== 'undefined') {
    const validGram = new Set(GRAM_COURS.map(g => g.name));
    const gramF = f.gram.filter(n => validGram.has(n));
    if (gramF.length !== f.gram.length) { f.gram = gramF; changed = true; }
  }

  if (typeof VOCAB_COURS !== 'undefined') {
    const validVocab = new Set(VOCAB_COURS.map(g => g.name));
    const vocabF = (f.vocab || []).filter(n => validVocab.has(n));
    if (vocabF.length !== (f.vocab || []).length) { f.vocab = vocabF; changed = true; }
  }

  if (changed) saveFavs(f);

  ['bac_proc_stats', 'bac_gram_stats', 'bac_vocab_stats'].forEach(key => {
    try {
      const st = JSON.parse(localStorage.getItem(key) || '{"sessions":[],"qdata":{}}');
      const bank = key === 'bac_proc_stats' ? PROC_QCM
        : key === 'bac_gram_stats' ? GRAM_QCM
        : (typeof VOCAB_QCM !== 'undefined' ? VOCAB_QCM : []);
      const validKeys = new Set(bank.map(q => qKey(q)));
      let qChanged = false;
      Object.keys(st.qdata || {}).forEach(k => {
        if (!validKeys.has(k)) { delete st.qdata[k]; qChanged = true; }
      });
      if (qChanged) localStorage.setItem(key, JSON.stringify(st));
      delete _stCache[key];
    } catch (e) {}
  });
}

function getGlobalStreak() {
  if (!getSetting('streakOn')) return 0;
  const proc = loadSt('bac_proc_stats').sessions || [];
  const gram = loadSt('bac_gram_stats').sessions || [];
  const vocab = loadSt('bac_vocab_stats').sessions || [];
  return computeStreak([...proc, ...gram, ...vocab]);
}

function updateStreakNav() {
  const badge = el('streak-badge');
  if (!badge) return;
  if (!getSetting('showNavStreak') || !getSetting('streakOn')) {
    badge.style.display = 'none';
    return;
  }
  const s = getGlobalStreak();
  if (s > 0) { badge.textContent = `🔥 ${s}j`; badge.style.display = ''; }
  else badge.style.display = 'none';
}

function loadSt(key) {
  if (_stCache[key]) return _stCache[key];
  try {
    _stCache[key] = JSON.parse(localStorage.getItem(key) || '{"sessions":[],"qdata":{}}');
  } catch (e) { _stCache[key] = { sessions: [], qdata: {} }; }
  return _stCache[key];
}
function saveSt(key, st) {
  _stCache[key] = st;
  try { localStorage.setItem(key, JSON.stringify(st)); } catch (e) {}
}

/* ══════════════════════════════════════════
   THÈME CLAIR / SOMBRE
   ══════════════════════════════════════════ */
function initTheme() { /* géré par applyAllSettings() */ }
function toggleTheme() {
  if (_settings.themeAuto) {
    _settings.themeAuto = false;
    saveSettings();
    _bindThemeAuto();
    _setSw('sw-themeauto', false);
  }
  const newTheme = _resolveTheme() === 'light' ? 'dark' : 'light';
  applySetting('theme', newTheme);
  _syncSeg('seg-theme', newTheme);
}
function updateThemeBtn() {
  const btn = el('theme-toggle');
  if (btn) btn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
}

/* Compte à rebours passage — logique dans js/bac-countdown.js (init immédiat) */
function initBacCountdownFromCore() {
  if (typeof window.initBacCountdown === 'function') window.initBacCountdown();
}

/* ══════════════════════════════════════════
   NAVIGATION MATIÈRES & SOUS-ONGLETS
   ══════════════════════════════════════════ */
function switchMatiere(m) {
  if (typeof timeTrackMatiere === 'function') timeTrackMatiere(m);
  document.querySelectorAll('.matiere').forEach(x => x.classList.remove('on'));
  document.querySelectorAll('.matiere-tab').forEach(x => x.classList.remove('on'));
  const mat = el('m-' + m);
  const tab = el('mtab-' + m);
  if (mat) mat.classList.add('on');
  if (tab) tab.classList.add('on');
  if (m === 'fav') { renderFavs(); scheduleDashboardUpdate(); }
}

function matiereLabel(m) {
  if (m === 'proc') return 'Littérature';
  if (m === 'gram') return 'Grammaire';
  if (m === 'vocab') return 'Vocabulaire';
  return m;
}

function saveLastPage(matiere, page) {
  if (!getSetting('rememberPage')) return;
  try { localStorage.setItem('bac_last_page', JSON.stringify({ m: matiere, p: page })); } catch (e) {}
}

function restoreLastPage() {
  if (!getSetting('rememberPage')) return;
  try {
    const last = JSON.parse(localStorage.getItem('bac_last_page') || 'null');
    if (!last?.m || !last?.p || last.m === 'fav') return;
    const mat = el('m-' + last.m);
    const pg  = el(last.m + '-' + last.p);
    if (!mat || !pg) return;
    const tabs = document.querySelectorAll('#snav-' + last.m + ' .stab');
    let btn = null;
    tabs.forEach(b => {
      const onclick = b.getAttribute('onclick') || '';
      if (onclick.includes("'" + last.p + "'")) btn = b;
    });
    switchMatiere(last.m);
    if (btn) switchPg(last.m, last.p, btn);
  } catch (e) {}
}

function switchPg(matiere, page, btn) {
  if (typeof timeTrackPage === 'function') timeTrackPage(matiere, page);
  if (typeof playSound === 'function') playSound('nav');
  document.querySelectorAll('#m-' + matiere + ' .pg').forEach(x => x.classList.remove('on'));
  document.querySelectorAll('#snav-' + matiere + ' .stab').forEach(x => x.classList.remove('on'));
  el(matiere + '-' + page).classList.add('on');
  btn.classList.add('on');
  saveLastPage(matiere, page);
  if (page === 'p-stat')   renderStats(matiere);
  if (page === 'p-qcm')    {
    const s = QCM_STATE[matiere];
    if (!s.shuffled.length) mixQ(matiere);
    else renderQ(matiere);
    refreshQcmCatProgress(matiere);
  }
  if (page === 'p-cartes') initCartes();
  if (page === 'p-gcartes') initGramCartes();
  if (page === 'p-vcartes') initVocabCartes();
  if (page === 'p-exo')    { initExoFilters(); if (!EXO_STATE.shuffled.length) mixExo(); }
  if (page === 'p-exam')  { EXAM_STATE.running = false; renderExam(); }
  if (page === 'p-corpus') { initCorpusFilters(); renderCorpus(); }
  if (page === 'p-gtextes') {
    try { initGtextesFilters(); renderGtextesList(); }
    catch (e) { console.error('p-gtextes', e); }
  }
  if (page === 'p-auteurs') { initAuteursFilters(); renderAuteursList(); }
  if (page === 'p-meth') initIntroSim();
}

/* ══════════════════════════════════════════
   TAILLE DE POLICE
   ══════════════════════════════════════════ */
const FS_CLASSES = ['fs-sm', '', 'fs-lg'];
let _fsIdx = 1;
function initFontSize() { /* géré par applyAllSettings() */ }
function changeFontSize(delta) {
  _fsIdx = Math.max(0, Math.min(2, _fsIdx + delta));
  localStorage.setItem('bac_fs', _fsIdx);
  _applyFs();
}
function _applyFs() {
  document.body.classList.remove('fs-sm', 'fs-lg');
  if (FS_CLASSES[_fsIdx]) document.body.classList.add(FS_CLASSES[_fsIdx]);
  const dec = el('fs-dec'); const inc = el('fs-inc');
  if (dec) dec.style.opacity = _fsIdx === 0 ? '.35' : '1';
  if (inc) inc.style.opacity = _fsIdx === 2 ? '.35' : '1';
}

/* ══════════════════════════════════════════
   CONFETTI
   ══════════════════════════════════════════ */
function launchConfetti() {
  const colors = ['#c9a84c','#e6c97a','#9b87d4','#6dbfaa','#7aaed4','#d4886e','#88bf6e'];
  const wrap = document.createElement('div');
  wrap.className = 'confetti-wrap';
  document.body.appendChild(wrap);
  for (let i = 0; i < 80; i++) {
    const c = document.createElement('div');
    c.className = 'confetto';
    const col = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const delay = Math.random() * 1.5;
    const dur = 1.8 + Math.random() * 1.5;
    const size = 6 + Math.random() * 8;
    c.style.cssText = `left:${left}%;background:${col};width:${size}px;height:${size}px;animation-duration:${dur}s;animation-delay:${delay}s`;
    wrap.appendChild(c);
  }
  setTimeout(() => wrap.remove(), 4500);
}

