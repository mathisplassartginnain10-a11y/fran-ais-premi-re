/* keyboard.js — Raccourcis clavier */
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  function activeMatiere() {
    const activeM = document.querySelector('.matiere.on');
    if (!activeM) return null;
    if (activeM.id === 'm-proc') return 'proc';
    if (activeM.id === 'm-gram') return 'gram';
    if (activeM.id === 'm-vocab') return 'vocab';
    return null;
  }

  if (e.key === 'Escape') {
    const panel = el('settings-panel');
    if (panel && panel.classList.contains('open') && typeof closeSettings === 'function') {
      closeSettings();
      return;
    }
  }

  if (['1','2','3','4'].includes(e.key) && getSetting('kbShortcuts')) {
    const dailyPg = el('proc-p-daily');
    if (dailyPg && dailyPg.classList.contains('on')) {
      const s = QCM_STATE.daily;
      const qi = getSetting('qcmFocusMode') ? s.currentIdx : s.shuffled.findIndex((_, i) => !s.answers.hasOwnProperty(i));
      if (qi > -1) {
        const oi = parseInt(e.key) - 1;
        if (oi < s.shuffled[qi].opts.length) ansQ('daily', qi, oi);
      }
      return;
    }
    const m = activeMatiere();
    if (!m) return;
    const qcmPage = el(`${m}-p-qcm`);
    if (!qcmPage || !qcmPage.classList.contains('on')) return;
    const s = QCM_STATE[m];
    const qi = getSetting('qcmFocusMode') ? s.currentIdx : s.shuffled.findIndex((_, i) => !s.answers.hasOwnProperty(i));
    if (qi > -1) {
      const oi = parseInt(e.key) - 1;
      if (oi < s.shuffled[qi].opts.length) ansQ(m, qi, oi);
    }
    return;
  }

  if (e.key === ' ') {
    const cp = el('proc-p-cartes');
    const gp = el('gram-p-gcartes');
    const vp = el('vocab-p-vcartes');
    if (cp && cp.classList.contains('on')) { e.preventDefault(); carteFlip(); return; }
    if (gp && gp.classList.contains('on')) { e.preventDefault(); gCarteFlip(); return; }
    if (vp && vp.classList.contains('on')) { e.preventDefault(); vCarteFlip(); return; }
  }

  if (e.key === 'ArrowRight') {
    const cp = el('proc-p-cartes');
    const gp = el('gram-p-gcartes');
    const vp = el('vocab-p-vcartes');
    if (cp && cp.classList.contains('on')) { carteNext(); return; }
    if (gp && gp.classList.contains('on')) { gCarteNext(); return; }
    if (vp && vp.classList.contains('on')) { vCarteNext(); return; }
    const qcm = document.querySelector('.matiere.on .pg.on[id$="-p-qcm"]');
    if (qcm && getSetting('qcmFocusMode')) {
      const m = qcm.id.split('-')[0];
      const s = QCM_STATE[m];
      if (s && s.answers.hasOwnProperty(s.currentIdx)) qNav(m, 1);
    }
  }
  if (e.key === 'ArrowLeft') {
    const cp = el('proc-p-cartes');
    const gp = el('gram-p-gcartes');
    const vp = el('vocab-p-vcartes');
    if (cp && cp.classList.contains('on')) { cartePrev(); return; }
    if (gp && gp.classList.contains('on')) { gCartePrev(); return; }
    if (vp && vp.classList.contains('on')) { vCartePrev(); return; }
    const qcm = document.querySelector('.matiere.on .pg.on[id$="-p-qcm"]');
    if (qcm && getSetting('qcmFocusMode')) {
      const m = qcm.id.split('-')[0];
      if (QCM_STATE[m]) qNav(m, -1);
    }
  }
});
