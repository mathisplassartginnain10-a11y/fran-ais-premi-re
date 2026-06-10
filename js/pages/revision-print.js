/* revision-print.js — Fiche de révision (questions à revoir) via window.print() */

function _revisionCollectQuestions() {
  const thresh = getSetting('reviseThresh') || 0.6;
  const banks = [
    { m: 'proc', label: 'Littérature', data: typeof PROC_QCM !== 'undefined' ? PROC_QCM : [] },
    { m: 'gram', label: 'Grammaire', data: typeof GRAM_QCM !== 'undefined' ? GRAM_QCM : [] },
    { m: 'vocab', label: 'Vocabulaire', data: typeof VOCAB_QCM !== 'undefined' ? VOCAB_QCM : [] },
  ];
  const out = [];
  banks.forEach(({ m, label, data }) => {
    const stKey = QCM_STATE[m]?.stKey;
    if (!stKey || !data.length) return;
    const st = loadSt(stKey);
    const qdata = st.qdata || {};
    data.forEach(q => {
      const d = qdata[qKey(q)];
      const weak = !d || d.total === 0 || (d.ok / d.total) < thresh;
      if (weak) out.push({ ...q, bank: label, matiere: m });
    });
  });
  return out;
}

function printRevisionSheet() {
  const qs = _revisionCollectQuestions();
  if (!qs.length) {
    alert('Aucune question à revoir pour l\'instant.\n\nJoue aux QCM ou baisse le seuil « questions difficiles » dans Paramètres > Apprendre.');
    return;
  }

  let root = el('revision-print-root');
  if (!root) {
    root = document.createElement('div');
    root.id = 'revision-print-root';
    root.className = 'revision-print-root';
    document.body.appendChild(root);
  }

  const threshPct = Math.round((getSetting('reviseThresh') || 0.6) * 100);
  const dateStr = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

  root.innerHTML = `
    <div class="revision-print-doc">
      <header class="revision-print-head">
        <h1>Fiche de révision — questions à revoir</h1>
        <p class="revision-print-meta">Bac de Français · Première · ${dateStr} · ${qs.length} question${qs.length > 1 ? 's' : ''} (seuil &lt; ${threshPct}%)</p>
      </header>
      ${qs.map((q, i) => {
        const letters = ['A', 'B', 'C', 'D'];
        const opts = q.opts.map((o, oi) =>
          `<li class="${oi === q.ans ? 'revision-ans' : ''}"><strong>${letters[oi]}.</strong> ${o}</li>`
        ).join('');
        return `
          <article class="revision-print-item">
            <h2>${i + 1}. [${q.bank} · ${q.cat}]</h2>
            <p class="revision-print-q">${q.q}</p>
            <ol class="revision-print-opts">${opts}</ol>
            <p class="revision-print-expl"><strong>Explication :</strong> ${q.expl}</p>
          </article>`;
      }).join('')}
    </div>`;

  document.body.classList.add('print-revision');
  const cleanup = () => {
    document.body.classList.remove('print-revision');
    window.removeEventListener('afterprint', cleanup);
  };
  window.addEventListener('afterprint', cleanup);
  window.print();
}
