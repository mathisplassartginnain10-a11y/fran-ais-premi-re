/* score-compare.js — Comparaison de scores via export/import compact */

function buildScoreSummary() {
  const mats = [
    { key: 'proc', label: 'Littérature' },
    { key: 'gram', label: 'Grammaire' },
    { key: 'vocab', label: 'Vocabulaire' },
  ];
  const summary = {
    type: 'bac_score_summary',
    version: 1,
    exported: new Date().toISOString(),
    matieres: {},
  };

  mats.forEach(({ key, label }) => {
    const stKey = QCM_STATE[key]?.stKey;
    if (!stKey) return;
    const st = loadSt(stKey);
    const sessions = st.sessions || [];
    let lastTs = 0;
    sessions.forEach(s => { if (s.ts && s.ts > lastTs) lastTs = s.ts; });
    const cats = (QCM_STATE[key].cats || []).filter(c => c !== 'Toutes');
    const categories = {};
    cats.forEach(cat => {
      const pct = _getCatPct(key, cat);
      if (pct !== null) categories[cat] = pct;
    });
    let globalOk = 0, globalTot = 0;
    Object.values(st.qdata || {}).forEach(d => {
      if (d && d.total > 0) { globalOk += d.ok; globalTot += d.total; }
    });
    summary.matieres[key] = {
      label,
      globalPct: globalTot ? Math.round(globalOk / globalTot * 100) : null,
      sessions: sessions.length,
      lastActivity: lastTs ? new Date(lastTs).toISOString() : null,
      categories,
    };
  });

  return summary;
}

function exportScoreSummary() {
  const data = buildScoreSummary();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'bac_score_summary_export.json';
  a.click();
  URL.revokeObjectURL(url);
}

function _scoreCompareValidate(data) {
  if (!data || data.type !== 'bac_score_summary') return 'Fichier de résumé de scores attendu (bac_score_summary).';
  if (!data.matieres || typeof data.matieres !== 'object') return 'Structure matieres invalide.';
  return null;
}

function _scoreCompareAllCats() {
  const cats = [];
  [
    { key: 'proc', label: 'Litt.' },
    { key: 'gram', label: 'Gram.' },
    { key: 'vocab', label: 'Vocab.' },
  ].forEach(({ key, label }) => {
    (QCM_STATE[key]?.cats || []).filter(c => c !== 'Toutes').forEach(cat => {
      cats.push({ key, label, cat });
    });
  });
  return cats;
}

function renderScoreComparePanel(other) {
  const panel = el('score-compare-panel');
  if (!panel) return;
  const mine = buildScoreSummary();
  const err = _scoreCompareValidate(other);
  if (err) {
    panel.innerHTML = `<p class="score-compare-err">${err}</p>`;
    return;
  }

  const rows = _scoreCompareAllCats().map(({ key, label, cat }) => {
    const myPct = mine.matieres[key]?.categories?.[cat];
    const otPct = other.matieres?.[key]?.categories?.[cat];
    const fmt = v => (v == null ? '—' : v + '%');
    return `<tr>
      <td>${label} · ${cat}</td>
      <td>${fmt(myPct)}</td>
      <td>${fmt(otPct)}</td>
    </tr>`;
  }).join('');

  const matRows = ['proc', 'gram', 'vocab'].map(k => {
    const ml = mine.matieres[k];
    const ol = other.matieres?.[k];
    if (!ml && !ol) return '';
    const fmt = v => (v == null ? '—' : v + '%');
    return `<tr class="score-compare-global">
      <td><strong>${ml?.label || ol?.label || k}</strong> (global)</td>
      <td>${fmt(ml?.globalPct)} · ${ml?.sessions ?? 0} sess.</td>
      <td>${fmt(ol?.globalPct)} · ${ol?.sessions ?? 0} sess.</td>
    </tr>`;
  }).join('');

  panel.innerHTML = `
    <div class="score-compare-wrap">
      <table class="score-compare-table">
        <thead><tr><th>Catégorie</th><th>Moi</th><th>Autre</th></tr></thead>
        <tbody>${matRows}${rows}</tbody>
      </table>
      <p class="score-compare-note">Comparaison en lecture seule — vos données locales ne sont pas modifiées.</p>
    </div>`;
  panel.hidden = false;
}

function importScoreSummaryForCompare(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      renderScoreComparePanel(data);
    } catch (err) {
      alert('❌ Fichier JSON invalide.');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

function clearScoreCompare() {
  const panel = el('score-compare-panel');
  if (panel) { panel.innerHTML = ''; panel.hidden = true; }
}
