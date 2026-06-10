/* ══════════════════════════════════════════
   FAVORIS
   ══════════════════════════════════════════ */
function loadFavs() {
  if (_favsCache) return _favsCache;
  try {
    _favsCache = JSON.parse(localStorage.getItem('bac_favs') || '{"proc":[],"gram":[],"vocab":[],"qproc":[],"qgram":[],"qvocab":[],"intros":[]}');
  } catch (e) { _favsCache = { proc: [], gram: [], vocab: [], qproc: [], qgram: [], qvocab: [], intros: [] }; }
  if (!_favsCache.vocab) _favsCache.vocab = [];
  if (!_favsCache.qvocab) _favsCache.qvocab = [];
  if (!_favsCache.intros) _favsCache.intros = [];
  return _favsCache;
}
function saveFavs(f) {
  _favsCache = f;
  try {
    localStorage.setItem('bac_favs', JSON.stringify(f));
    return true;
  } catch (e) {
    return false;
  }
}

function toggleFavCard(m, name) {
  const f = loadFavs();
  const key = m === 'proc' ? 'proc' : m === 'vocab' ? 'vocab' : 'gram';
  const idx = f[key].indexOf(name);
  const adding = idx === -1;
  if (idx > -1) f[key].splice(idx, 1);
  else f[key].push(name);
  saveFavs(f);
  if (typeof playSound === 'function') playSound(adding ? 'add' : 'remove');
  const gridId = m === 'proc' ? 'pgrid' : m === 'vocab' ? 'vgrid' : 'ggrid';
  document.querySelectorAll(`#${gridId} .card`).forEach(card => {
    if (card.querySelector('.cname')?.textContent === name) {
      card.querySelector('.fav-btn')?.classList.toggle('on', f[key].includes(name));
    }
  });
  renderFavs();
}

function toggleFavQ(m, qi) {
  const s = QCM_STATE[m];
  const f = loadFavs();
  const key = m === 'proc' ? 'qproc' : m === 'vocab' ? 'qvocab' : 'qgram';
  const q = s.shuffled[qi].q;
  const idx = f[key].indexOf(q);
  const adding = idx === -1;
  if (idx > -1) f[key].splice(idx, 1);
  else f[key].push(q);
  saveFavs(f);
  if (typeof playSound === 'function') playSound(adding ? 'add' : 'remove');
  const btn = document.querySelector(`#${m}qc${qi} .qfav-btn`);
  if (btn) btn.classList.toggle('on', f[key].includes(q));
}

function favEsc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function favIntroSummary(item) {
  const hasComm = !!(item.fullComment || item.commentaire?.full);
  const text = item.fullComment || item.full || item.introOnly || '';
  const words = text.split(/\s+/).filter(Boolean).length;
  const parts = item.commentaire?.parts?.length || 0;
  const oeuvre = (item.oeuvre || item.fields?.oeuvre || '').replace(/\(\d{4}\)/, '').trim();
  const bits = [];
  if (oeuvre) bits.push(oeuvre);
  if (hasComm) {
    bits.push(parts ? `${parts} parties + conclusion` : 'commentaire complet');
  } else {
    bits.push('introduction (5 temps)');
  }
  if (words) bits.push(`~${words} mots`);
  if (item.fields?.passage) bits.push('extrait collé');
  return bits.join(' · ');
}

function renderFavs() {
  const f = loadFavs();
  const cont = el('fav-cont');
  if (!cont) return;
  cont.innerHTML = '';
  let empty = true;

  if (f.proc.length) {
    empty = false;
    const h = document.createElement('div');
    h.className = 'fav-section-title';
    h.textContent = '⭐ Procédés favoris';
    cont.appendChild(h);
    const g = document.createElement('div');
    g.className = 'pgrid';
    PROC_DATA.filter(d => f.proc.includes(d.name)).forEach(d => {
      const card = document.createElement('div');
      card.className = `card c-${d.col}`;
      card.innerHTML = `
        <div class="ctop"><span class="badge">${d.sub}</span>
          <button class="fav-btn on" onclick="toggleFavCard('proc','${d.name.replace(/'/g,"\\'")}')">★</button>
        </div>
        <div class="cname">${d.name}</div>
        <div class="cdef">${d.def}</div>
        <div class="cdiv"></div>
        <div class="elabel">Exemple</div><div class="etxt">${d.ex}</div>
        <div class="eflabel">Effet</div><div class="eftxt">${d.effet}</div>`;
      g.appendChild(card);
    });
    cont.appendChild(g);
  }

  if (f.gram.length) {
    empty = false;
    const h = document.createElement('div');
    h.className = 'fav-section-title';
    h.textContent = '⭐ Fiches grammaire favorites';
    cont.appendChild(h);
    const g = document.createElement('div');
    g.className = 'cgrid';
    GRAM_COURS.filter(d => f.gram.includes(d.name)).forEach(d => {
      const card = document.createElement('div');
      card.className = `card c-${d.col}`;
      card.innerHTML = `
        <div class="ctop"><span class="badge">${d.cours}</span>
          <button class="fav-btn on" onclick="toggleFavCard('gram','${d.name.replace(/'/g,"\\'")}')">★</button>
        </div>
        <div class="cname">${d.name}</div>
        <div class="cdef">${d.def}</div>`;
      g.appendChild(card);
    });
    cont.appendChild(g);
  }

  if (f.vocab.length && typeof VOCAB_COURS !== 'undefined') {
    empty = false;
    const h = document.createElement('div');
    h.className = 'fav-section-title';
    h.textContent = '⭐ Fiches vocabulaire favorites';
    cont.appendChild(h);
    const g = document.createElement('div');
    g.className = 'cgrid';
    VOCAB_COURS.filter(d => f.vocab.includes(d.name)).forEach(d => {
      const card = document.createElement('div');
      card.className = `card c-${d.col}`;
      card.innerHTML = `
        <div class="ctop"><span class="badge">${d.cours}</span>
          <button class="fav-btn on" onclick="toggleFavCard('vocab','${d.name.replace(/'/g,"\\'")}')">★</button>
        </div>
        <div class="cname">${d.name}</div>
        <div class="cdef">${d.def}</div>`;
      g.appendChild(card);
    });
    cont.appendChild(g);
  }

  if (f.qproc.length) {
    empty = false;
    const h = document.createElement('div');
    h.className = 'fav-section-title';
    h.textContent = '⭐ Questions QCM Littérature favorites';
    cont.appendChild(h);
    PROC_QCM.filter(q => f.qproc.includes(q.q)).forEach(q => {
      const d = document.createElement('div');
      d.className = 'qcard done';
      d.innerHTML = `<div class="qnum"><span>Littérature · ${q.cat}</span></div>
        <div class="qtxt">${q.q}</div>
        <div class="qexpl show">${q.expl}</div>`;
      cont.appendChild(d);
    });
  }

  if (f.qgram.length) {
    empty = false;
    const h = document.createElement('div');
    h.className = 'fav-section-title';
    h.textContent = '⭐ Questions QCM Grammaire favorites';
    cont.appendChild(h);
    GRAM_QCM.filter(q => f.qgram.includes(q.q)).forEach(q => {
      const d = document.createElement('div');
      d.className = 'qcard done';
      d.innerHTML = `<div class="qnum"><span>Grammaire · ${q.cat}</span></div>
        <div class="qtxt">${q.q}</div>
        <div class="qexpl show">${q.expl}</div>`;
      cont.appendChild(d);
    });
  }

  if (f.qvocab.length && typeof VOCAB_QCM !== 'undefined') {
    empty = false;
    const h = document.createElement('div');
    h.className = 'fav-section-title';
    h.textContent = '⭐ Questions QCM Vocabulaire favorites';
    cont.appendChild(h);
    VOCAB_QCM.filter(q => f.qvocab.includes(q.q)).forEach(q => {
      const d = document.createElement('div');
      d.className = 'qcard done';
      d.innerHTML = `<div class="qnum"><span>Vocabulaire · ${q.cat}</span></div>
        <div class="qtxt">${q.q}</div>
        <div class="qexpl show">${q.expl}</div>`;
      cont.appendChild(d);
    });
  }

  if (f.intros?.length) {
    empty = false;
    const h = document.createElement('div');
    h.className = 'fav-section-title';
    h.textContent = '📝 Commentaires & introductions enregistrés';
    cont.appendChild(h);
    const list = document.createElement('div');
    list.className = 'fav-intro-list';
    f.intros.forEach(item => {
      const card = document.createElement('article');
      card.className = 'fav-intro-card';
      const date = item.savedAt
        ? new Date(item.savedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })
        : '';
      const hasComm = !!(item.fullComment || (item.commentaire?.full));
      const titre = item.titre || item.fields?.passage || item.fields?.oeuvre || 'Introduction';
      const summary = favIntroSummary(item);
      const badges = [];
      if (hasComm) badges.push('<span class="fav-intro-tag fav-intro-tag-comm">Commentaire complet</span>');
      if (item.commentaire?.fromOllama || item.fromOllama) {
        const model = item.ollamaModel || item.commentaire?.model;
        badges.push(`<span class="fav-intro-tag fav-intro-tag-ia">IA Ollama${model ? ' · ' + favEsc(model) : ''}</span>`);
      }
      else if (item.commentaire?.fromCorpus) badges.push('<span class="fav-intro-tag">Corrigé GT</span>');
      card.innerHTML = `
        <div class="fav-intro-head">
          <div class="fav-intro-titles">
            <strong>${favEsc(item.auteurNom || item.fields?.auteur)}</strong>
            <span>${favEsc(titre)}</span>
            ${badges.length ? `<div class="fav-intro-tags">${badges.join('')}</div>` : ''}
          </div>
          <div class="fav-intro-head-right">
            ${item.prob ? `<span class="intro-sim-prob-badge">~${item.prob}%</span>` : ''}
            <button type="button" class="fav-btn on" onclick="introSimRemoveFavById('${favEsc(item.id)}')" title="Retirer des favoris">★</button>
          </div>
        </div>
        <p class="fav-intro-summary">${favEsc(summary)}</p>
        <div class="fav-intro-meta">${favEsc(date)}${item.entryId ? ' · ' + favEsc(item.entryId) : ''}</div>
        <div class="fav-intro-actions">
          <button type="button" class="sbtn" onclick="introSimOpenFromFav('${favEsc(item.id)}')">Ouvrir</button>
          <button type="button" class="sbtn sec" onclick="introSimCopyFavById('${favEsc(item.id)}')">📋 Copier ${hasComm ? 'tout' : ''}</button>
          ${hasComm ? `<button type="button" class="sbtn sec" onclick="introSimCopyFavById('${favEsc(item.id)}', 'intro')">📋 Intro seule</button>` : ''}
        </div>`;
      list.appendChild(card);
    });
    cont.appendChild(list);
  }

  if (empty) {
    cont.innerHTML = '<div class="fav-empty">Aucun favori pour l\'instant.<br>Clique sur ★ dans les fiches, les QCM, ou <strong>Enregistrer la réponse IA</strong> / <strong>Enregistrer tout</strong> dans le simulateur (après la génération Ollama).</div>';
  }
}

