/* Détection écran 2560×1600 (16:10) et variables de viewport */
(function () {
  let _resizeT = null;

  function _is2560Screen() {
    const sw = window.screen?.width || 0;
    const sh = window.screen?.height || 0;
    const iw = window.innerWidth;
    const ih = window.innerHeight;
    const ratio = sw && sh ? sw / sh : iw / ih;

    const physical =
      sw >= 2480 && sw <= 2620 &&
      sh >= 1540 && sh <= 1660 &&
      Math.abs(ratio - 1.6) < 0.04;

    const viewport =
      iw >= 2460 && ih >= 1520;

    return physical || viewport;
  }

  function _isWideScreen() {
    return window.innerWidth >= 1680 && window.innerHeight >= 980;
  }

  function initScreenFit() {
    applyScreenFit();
    window.addEventListener('resize', () => {
      clearTimeout(_resizeT);
      _resizeT = setTimeout(applyScreenFit, 120);
    });
    window.addEventListener('orientationchange', applyScreenFit);
  }

  function applyScreenFit() {    const root = document.documentElement;
    const fit2560 = _is2560Screen();
    const fitWide = !fit2560 && _isWideScreen();

    root.classList.toggle('fit-2560', fit2560);
    root.classList.toggle('fit-wide', fitWide || fit2560);

    const styles = getComputedStyle(root);
    const topStack = parseFloat(styles.getPropertyValue('--top-stack-h')) || 128;
    root.style.setProperty('--app-vh', window.innerHeight + 'px');
    root.style.setProperty('--app-content-h', Math.max(400, window.innerHeight - topStack) + 'px');

    if (fit2560 && typeof getSetting === 'function') {
      const cols = getSetting('procGridCols') || 3;
      if (cols <= 3) root.style.setProperty('--pgrid-cols', '4');
    } else if (typeof getSetting === 'function') {
      root.style.setProperty('--pgrid-cols', String(getSetting('procGridCols') || 3));
    }
  }

  window.initScreenFit = initScreenFit;
  window.applyScreenFit = applyScreenFit;
})();
