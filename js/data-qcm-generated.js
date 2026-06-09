/* ═══════════════════════════════════════════════════
   data-qcm-generated.js — QCM auto-générés
   À partir de PROC_DATA et GRAM_COURS (14)
   ═══════════════════════════════════════════════════ */

(function () {
  function _shuf(a) {
    const x = a.slice();
    for (let i = x.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [x[i], x[j]] = [x[j], x[i]];
    }
    return x;
  }

  function _uniq(arr) {
    const seen = new Set();
    return arr.filter(q => {
      const k = q.q.slice(0, 80);
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }

  function _norm(s) {
    return (s || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function _pickOthers(pool, item, key, n) {
    return _shuf(pool.filter(x => key(x) !== key(item))).slice(0, n);
  }

  function _pickUniqueValues(pool, item, getVal, n) {
    const seen = new Set([_norm(getVal(item))]);
    const out = [];
    for (const x of _shuf(pool.filter(x => x !== item && _norm(getVal(x)) !== _norm(getVal(item))))) {
      const v = getVal(x);
      const k = _norm(v);
      if (!k || seen.has(k)) continue;
      seen.add(k);
      out.push(v);
      if (out.length >= n) break;
    }
    return out;
  }

  function _mkQ(cat, q, correct, wrong, expl, ref) {
    const seen = new Set();
    const opts = [];
    const add = (text) => {
      const t = String(text ?? '').trim();
      const k = _norm(t);
      if (!k || seen.has(k)) return;
      seen.add(k);
      opts.push(t);
    };
    add(correct);
    wrong.forEach(w => { if (opts.length < 4) add(w); });
    if (opts.length < 4) return null;
    const shuffled = _shuf(opts.slice(0, 4));
    const ans = shuffled.findIndex(o => _norm(o) === _norm(correct));
    if (ans < 0) return null;
    const item = { cat, q, opts: shuffled, ans, expl };
    if (ref) item.ref = ref;
    return item;
  }

  function _trunc(s, n) {
    if (!s) return '';
    const t = s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    return t.length <= n ? t : t.slice(0, n - 1) + '…';
  }

  const PROC_CATS_LIST = [
    'Figures de style', 'Procédés narratifs', 'Procédés poétiques',
    'Registres & tonalités', 'Syntaxe & lexique'
  ];

  /* ── Littérature : ~4 questions par procédé ── */
  const procGen = [];
  if (typeof PROC_DATA !== 'undefined') {
    const byCat = new Map();
    const bySub = new Map();
    PROC_DATA.forEach(d => {
      if (!byCat.has(d.cat)) byCat.set(d.cat, []);
      byCat.get(d.cat).push(d);
      if (!bySub.has(d.sub)) bySub.set(d.sub, []);
      bySub.get(d.sub).push(d);
    });
    PROC_DATA.forEach(d => {
      const peers = (byCat.get(d.cat) || []).filter(x => x.name !== d.name);
      const subPeers = (bySub.get(d.sub) || []).filter(x => x.name !== d.name);
      const allPeers = PROC_DATA.filter(x => x.name !== d.name);

      if (peers.length >= 3) {
        procGen.push(_mkQ(
          d.cat,
          `Définition — quel procédé ? « ${_trunc(d.def, 110)} »`,
          d.name,
          _pickOthers(peers, d, x => x.name, 3).map(x => x.name),
          `${d.name} : ${d.def}`,
          'proc:' + d.name
        ));
      }

      if (subPeers.length >= 3) {
        procGen.push(_mkQ(
          d.cat,
          `Quel effet produit surtout le procédé « ${d.name} » ?`,
          _trunc(d.effet, 90),
          _pickOthers(subPeers, d, x => x.name, 3).map(x => _trunc(x.effet, 90)),
          `Effet de ${d.name} : ${d.effet}`,
          'proc:' + d.name
        ));
      }

      if (d.ex && d.ex.length > 12 && allPeers.length >= 3) {
        procGen.push(_mkQ(
          d.cat,
          `Exemple — quel procédé ? ${_trunc(d.ex, 95)}`,
          d.name,
          _pickOthers(allPeers, d, x => x.name, 3).map(x => x.name),
          `Dans ${d.ex}, on repère ${d.name} (${d.sub}).`,
          'proc:' + d.name
        ));
      }

      const wrongCats = _shuf(PROC_CATS_LIST.filter(c => c !== d.cat)).slice(0, 3);
      if (wrongCats.length === 3) {
        procGen.push(_mkQ(
          d.cat,
          `Catégorie — où classer « ${d.name} » ?`,
          d.cat,
          wrongCats,
          `${d.name} relève de « ${d.cat} » (sous-thème : ${d.sub}).`,
          'proc:' + d.name
        ));
      }

      const wrongSubs = _pickUniqueValues(PROC_DATA, d, x => x.sub, 3);
      if (wrongSubs.length >= 3) {
        const sq = _mkQ(
          d.cat,
          `Sous-thème — « ${d.name} » appartient à…`,
          d.sub,
          wrongSubs,
          `${d.name} est classé en « ${d.sub} » dans ${d.cat}.`,
          'proc:' + d.name
        );
        if (sq) procGen.push(sq);
      }
    });
  }

  /* ── Grammaire : ~5 questions par fiche ── */
  const gramGen = [];
  if (typeof GRAM_COURS !== 'undefined') {
    const byCat = new Map();
    GRAM_COURS.forEach(d => {
      if (!byCat.has(d.cat)) byCat.set(d.cat, []);
      byCat.get(d.cat).push(d);
    });
    const coursNames = [...new Set(GRAM_COURS.map(x => x.cours))];
    const catNames = [...new Set(GRAM_COURS.map(x => x.cat))];

    GRAM_COURS.forEach(d => {
      const peers = (byCat.get(d.cat) || []).filter(x => x.name !== d.name);
      const allPeers = GRAM_COURS.filter(x => x.name !== d.name);

      if (allPeers.length >= 3) {
        gramGen.push(_mkQ(
          d.cat,
          `Fiche grammaire — quelle notion ? « ${_trunc(d.def, 100)} »`,
          d.name,
          _pickOthers(allPeers, d, x => x.name, 3).map(x => x.name),
          `${d.name} (${d.cours}) : ${d.def}`,
          'gram:' + d.name
        ));
      }

      gramGen.push(_mkQ(
        d.cat,
        `À quel cours appartient la fiche « ${d.name} » ?`,
        d.cours,
        _shuf(coursNames.filter(c => c !== d.cours)).slice(0, 3),
        `« ${d.name} » figure dans ${d.cours}.`,
        'gram:' + d.name
      ));

      gramGen.push(_mkQ(
        d.cat,
        `Thème de la fiche « ${d.name} » ?`,
        d.cat,
        _shuf(catNames.filter(c => c !== d.cat)).slice(0, 3),
        `Thème : ${d.cat}.`,
        'gram:' + d.name
      ));

      if (peers.length >= 3) {
        gramGen.push(_mkQ(
          d.cat,
          `Parmi ces notions de « ${d.cat} », laquelle est « ${d.name} » ?`,
          d.name,
          _pickOthers(peers, d, x => x.name, 3).map(x => x.name),
          d.def,
          'gram:' + d.name
        ));
      }

      gramGen.push(_mkQ(
        d.cat,
        `Vrai ou faux sur « ${d.name} » :`,
        d.def.slice(0, 120),
        _pickOthers(allPeers, d, x => x.name, 3).map(x => _trunc(x.def, 120)),
        `Définition correcte de ${d.name}.`,
        'gram:' + d.name
      ));
    });
  }

  /* ── Méthode : banque fixe étendue ── */
  const methGen = [
    {cat:"Méthode commentaire",q:"Combien de temps environ pour l'introduction au bac ?",opts:["2 min","5 min","15 min","25 min"],ans:1,expl:"L'introduction se rédige en ~5 min après analyse et plan (~15 min de préparation totale en amont)."},
    {cat:"Méthode commentaire",q:"Le développement du commentaire dure environ…",opts:["20 min","40 min","60 min","10 min"],ans:1,expl:"~40 min pour le développement — cœur du devoir avec IPCI."},
    {cat:"Méthode commentaire",q:"Un axe de commentaire doit être…",opts:["Chronologique","Thématique et justifié par des procédés","Un résumé du texte","Sans citation"],ans:1,expl:"Chaque axe = interprétation + procédés + citations."},
    {cat:"Méthode commentaire",q:"La problématique doit être…",opts:["Fermée (oui/non)","Ouverte et liée au fonctionnement du texte","Le titre de l'œuvre","Une liste de figures"],ans:1,expl:"Question ouverte à laquelle le commentaire répond progressivement."},
    {cat:"Méthode commentaire",q:"Dans IPCI, le « P » initial signifie…",opts:["Plan","Procédé","Présentation","Paraphrase"],ans:1,expl:"IPCI = Idée, Procédé, Citation, Interprétation."},
    {cat:"Dissertation",q:"Durée typique du développement en dissertation…",opts:["20 min","45 min","5 min","90 min"],ans:1,expl:"~45 min pour développer thèse, exemples et transitions."},
    {cat:"Dissertation",q:"Un bon exemple en dissertation doit être…",opts:["Long et narratif","Précis, situé et analysé","Sans auteur","Uniquement poétique"],ans:1,expl:"Titre + auteur + scène/procédé + analyse brève + lien à l'argument."},
    {cat:"Dissertation",q:"Le plan thématique explore…",opts:["Une opposition dialectique","Plusieurs aspects complémentaires d'une question","La chronologie des auteurs","Un seul auteur"],ans:1,expl:"3 angles qui approfondissent la même problématique."},
    {cat:"Dissertation",q:"La concession dans un devoir sert à…",opts:["Annuler la thèse","Nuancer en admettant une limite","Remplacer la conclusion","Paraphraser"],ans:1,expl:"« Certes… mais… » = maturité argumentative."},
    {cat:"Connecteurs & Style",q:"« Néanmoins » introduit plutôt…",opts:["Une addition","Une concession ou opposition nuancée","Une illustration","Une cause"],ans:1,expl:"Connecteur de concession/opposition formel."},
    {cat:"Connecteurs & Style",q:"« Par conséquent » exprime…",opts:["Un but","Une conséquence","Une comparaison","Une reformulation"],ans:1,expl:"Lien logique de résultat."},
    {cat:"Connecteurs & Style",q:"Pour varier « montre que » on peut dire…",opts:["Résume que","Fait ressortir que / souligne que","Paraphrase que","Ignore que"],ans:1,expl:"Verbes d'analyse variés enrichissent le style soutenu."},
    {cat:"Méthode commentaire",q:"Analyser un registre, c'est…",opts:["Résumer l'intrigue","Relier tonalité, procédés et effet sur le lecteur","Compter les vers","Citer la biographie"],ans:1,expl:"Registre = dominante émotionnelle + moyens stylistiques."},
    {cat:"Méthode commentaire",q:"Un commentaire de poème doit mobiliser…",opts:["Uniquement la paraphrase","Versification, figures, sens et registre","Seulement la biographie","Aucune citation"],ans:1,expl:"Niveaux : métrique, sonore, lexical, syntaxique, sémantique."},
    {cat:"Dissertation",q:"« En définitive » annonce plutôt…",opts:["Une introduction","Une conclusion / bilan","Un exemple","Une concession"],ans:1,expl:"Formule de clôture argumentative."},
    {cat:"Dissertation",q:"L'antithèse dialectique sert à…",opts:["Répéter la thèse","Opposer une vision contraire pour enrichir","Conclure sans nuance","Raconter une œuvre"],ans:1,expl:"Thèse puis vision opposée avant synthèse."},
    {cat:"Connecteurs & Style",q:"« À titre d'illustration » introduit…",opts:["Une opposition","Un exemple","Une cause","Une conclusion"],ans:1,expl:"Connecteur d'illustration fréquent au bac."},
    {cat:"Connecteurs & Style",q:"Registre familier au bac…",opts:["Est recommandé","Est à éviter dans l'écrit","Est obligatoire","Remplace le soutenu"],ans:1,expl:"Écrit soutenu ou courant standard — jamais familier/argot."},
  ];

  const generated = _uniq([...procGen, ...gramGen, ...methGen].filter(Boolean));

  if (typeof PROC_QCM !== 'undefined') {
    PROC_QCM.push(...generated.filter(q =>
      !['Les Propositions','Les Propositions (suite)','La Négation','Les Modes','La Voix'].includes(q.cat)
    ));
  }
  if (typeof GRAM_QCM !== 'undefined') {
    GRAM_QCM.push(...generated.filter(q =>
      ['Les Propositions','Les Propositions (suite)','La Négation','Les Modes','La Voix'].includes(q.cat)
    ));
  }

  if (typeof window !== 'undefined') window.BAC_QCM_GENERATED = generated.length;
})();
