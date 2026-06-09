(async function () {
  try {
    if (typeof loadAppPages === 'function') await loadAppPages();
  } catch (e) {
    if (typeof showBootError === 'function') showBootError(e);
    else console.error(e);
    return;
  }
  if (!el('m-proc')) {
    if (typeof showBootError === 'function') {
      showBootError(new Error('Contenu principal introuvable (#m-proc). Rechargez la page.'));
    }
    return;
  }
  try {
    bootApp();
  } catch (e) {
    console.error('bootApp', e);
    if (typeof showBootError === 'function') showBootError(e);
  }
})();
