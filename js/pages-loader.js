/* Charge les partials HTML si absents (fallback fetch pour dev sans rebuild) */
async function loadAppPages() {
  if (el('m-proc')) return;

  const settingsMount = el('settings-mount');
  const pagesMount = el('pages-mount');
  if (!settingsMount || !pagesMount) {
    throw new Error('Structure de page invalide (#settings-mount / #pages-mount).');
  }

  const parts = [
    { url: 'partials/settings.html', mount: settingsMount, append: false },
    { url: 'partials/m-proc.html', mount: pagesMount, append: true },
    { url: 'partials/m-gram.html', mount: pagesMount, append: true },
    { url: 'partials/m-vocab.html', mount: pagesMount, append: true },
    { url: 'partials/m-fav.html', mount: pagesMount, append: true },
  ];

  for (const { url, mount, append } of parts) {
    let res;
    try {
      res = await fetch(url);
    } catch (e) {
      throw new Error(
        'Impossible de charger ' + url + '. Ouvrez le site via un serveur local (python -m http.server) ou rechargez index.html.'
      );
    }
    if (!res.ok) throw new Error('Impossible de charger ' + url + ' (' + res.status + ')');
    const html = await res.text();
    if (append) mount.insertAdjacentHTML('beforeend', html);
    else mount.innerHTML = html;
  }
}

function showBootError(err) {
  const msg = (err && err.message) ? err.message : String(err);
  const box = document.createElement('div');
  box.className = 'boot-error';
  box.innerHTML =
    '<strong>Chargement incomplet</strong><p>' + msg.replace(/</g, '&lt;') + '</p>' +
    '<p style="opacity:.85;margin-top:8px">Depuis le dossier du projet : <code>python -m http.server 8080</code> puis ouvrez <code>http://localhost:8080/</code></p>';
  const mount = el('pages-mount') || document.body;
  mount.prepend(box);
}
