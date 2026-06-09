/* guide.js — Page Installation & Git */

const GUIDE_REPO = 'https://github.com/mathisplassartginnain10-a11y/fran-ais-premi-re.git';
const GUIDE_CLONE = `git clone ${GUIDE_REPO}`;

function initGuide() {
  const box = el('guide-status');
  if (!box) return;

  const isFile = location.protocol === 'file:';
  const isLocal8765 = location.hostname === '127.0.0.1' && location.port === '8765';
  const isLocal = location.hostname === '127.0.0.1' || location.hostname === 'localhost';

  let cls = 'guide-status-warn';
  let title = 'Mode fichier local';
  let detail = 'Ouvre l’app via Lancer.bat → http://127.0.0.1:8765 pour le serveur et l’IA Ollama.';

  if (isLocal8765) {
    cls = 'guide-status-ok';
    title = 'Serveur local actif';
    detail = 'Tu es sur http://127.0.0.1:8765 — QCM, commentaire et IA Ollama disponibles.';
  } else if (isLocal && !isFile) {
    cls = 'guide-status-warn';
    title = `Port ${location.port || '?'}`;
    detail = 'Utilise le port 8765 (Lancer.bat) pour le proxy Ollama et toutes les fonctions.';
  } else if (!isFile && !isLocal) {
    cls = 'guide-status-err';
    title = 'Hors serveur local';
    detail = 'GitHub en ligne affiche le code uniquement — clone le dépôt et lance Lancer.bat sur ton PC.';
  }

  box.className = `guide-status ${cls}`;
  box.innerHTML = `<strong>${title}</strong><p>${detail}</p>`;
}

function guideCopyClone() {
  const txt = GUIDE_CLONE;
  navigator.clipboard.writeText(txt).then(() => {
    const btn = el('guide-copy-clone');
    if (btn) {
      const prev = btn.textContent;
      btn.textContent = '✓ Copié';
      setTimeout(() => { btn.textContent = prev; }, 2000);
    }
    if (typeof playSound === 'function') playSound('ok');
  }).catch(() => {
    prompt('Copie cette commande :', txt);
  });
}

function openGuidePage() {
  switchMatiere('proc');
  const btn = document.querySelector('#snav-proc .stab[data-guide="1"]');
  if (btn) switchPg('proc', 'p-guide', btn);
  else {
    const fallback = document.querySelector('#snav-proc .stab:last-child');
    if (fallback?.dataset?.guide) switchPg('proc', 'p-guide', fallback);
  }
  el('proc-p-guide')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
