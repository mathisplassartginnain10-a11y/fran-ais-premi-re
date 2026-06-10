function bootApp() {

  if (typeof initBacCountdownFromCore === 'function') initBacCountdownFromCore();

  applyAllSettings();

  syncQcmRefs();

  pruneCoherenceOnBoot();

  _examPreset = getSetting('examPresetDefault') ?? 1;

  _examMat = getSetting('examMatDefault') ?? 'both';

  buildAccentSwatches();
  if (typeof switchSettingsTab === 'function') switchSettingsTab(getSetting('settingsTab') || 'design');
  if (typeof renderSettingsPreview === 'function') renderSettingsPreview();
  if (typeof updateProfileNav === 'function') updateProfileNav();

  buildProcSearchIndex();

  buildGramSearchIndex();

  buildVocabSearchIndex();

  updateDynamicCounts();

  initPChips();

  initGChips();

  initVChips();

  initProcSearch();

  initGramSearch();

  initVocabSearch();

  renderProc();

  renderGram();

  renderVocab();

  syncSessionChips();

  ['proc', 'gram', 'vocab'].forEach(m => { initQcmCats(m); mixQ(m); });

  try { renderExam(); } catch (e) { console.error('renderExam', e); }

  try {
    if (typeof renderGlobalDashboard === 'function') renderGlobalDashboard();
  } catch (e) { console.error('renderGlobalDashboard', e); }

  initChallengeTimer();

  const defMat = getSetting('defaultMatiere') || 'proc';

  if (defMat !== 'proc') switchMatiere(defMat);

  restoreLastPage();

  if (typeof initGtextListHandlers === 'function') initGtextListHandlers();

  if (typeof initTimeTracker === 'function') initTimeTracker();

  if (typeof initScreenFit === 'function') initScreenFit();

  if (typeof preloadBacPassagesInBackground === 'function') preloadBacPassagesInBackground();

  if (typeof preloadGtextesInBackground === 'function') preloadGtextesInBackground();

}

