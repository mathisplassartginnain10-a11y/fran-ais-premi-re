(function () {
  'use strict';

  var PASSAGE_MS = Date.UTC(2026, 5, 11, 6, 0, 0);
  var timer = null;

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function formatBacCountdown(ms) {
    var sec = Math.max(0, Math.floor(ms / 1000));
    var d = Math.floor(sec / 86400);
    var h = Math.floor((sec % 86400) / 3600);
    var m = Math.floor((sec % 3600) / 60);
    var s = sec % 60;
    if (d > 0) return 'J-' + d + ' · ' + pad(h) + ' h ' + pad(m) + ' min ' + pad(s) + ' s';
    return pad(h) + ' h ' + pad(m) + ' min ' + pad(s) + ' s';
  }

  function hideBar() {
    var bar = document.getElementById('bac-countdown-bar');
    if (bar) bar.classList.add('hidden');
    document.body.classList.add('no-countdown-bar');
  }

  function updateBacCountdown() {
    var bar = document.getElementById('bac-countdown-bar');
    var val = document.getElementById('bac-countdown-val');
    if (!bar || !val) return;

    var diff = PASSAGE_MS - Date.now();
    if (diff > 0) {
      val.textContent = formatBacCountdown(diff);
      bar.classList.remove('hidden');
      document.body.classList.remove('no-countdown-bar');
      return;
    }

    if (Date.now() < PASSAGE_MS + 86400000) {
      val.textContent = "C'est aujourd'hui · bonne chance !";
      bar.classList.remove('hidden');
      document.body.classList.remove('no-countdown-bar');
      return;
    }

    hideBar();
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function initBacCountdown() {
    updateBacCountdown();
    if (timer) clearInterval(timer);
    timer = setInterval(updateBacCountdown, 1000);
  }

  window.BAC_PASSAGE_UTC = PASSAGE_MS;
  window.initBacCountdown = initBacCountdown;
  window.updateBacCountdown = updateBacCountdown;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBacCountdown);
  } else {
    initBacCountdown();
  }
})();
