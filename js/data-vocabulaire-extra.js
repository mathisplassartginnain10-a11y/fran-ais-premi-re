/* Fiches et QCM vocabulaire — extension (fusionnée au chargement) */
(function () {
  const EXTRA_COURS = [
    {
      cours: "Partie 1", cat: "Analyser & décrire", col: "purple",
      name: "Structurer une analyse (premier / second temps)",
      def: "Enchaîner les étapes de l'analyse avec un lexique précis et une progression logique.",
      content: `<div class="sub-title">Formules de progression</div>
        <div class="row-item"><strong>Dans un premier temps… / dans un second temps… / enfin…</strong></div>
        <div class="row-item"><strong>Nous commencerons par… / nous verrons ensuite… / nous montrerons enfin…</strong></div>
        <div class="ex-box"><em>« Dans un premier temps, nous analyserons la construction argumentative ; dans un second temps, nous étudierons la portée persuasive du texte. »</em></div>
        <div class="sub-title">Verbes utiles à chaque étape</div>
        <div class="row-item">Repérer → identifier → décomposer → examiner → dégager → interpréter.</div>`
    },
    {
      cours: "Partie 1", cat: "Analyser & décrire", col: "teal",
      name: "Illustrer, exemplifier, montrer",
      def: "Lexique pour présenter un exemple ou une citation sans paraphraser.",
      content: `<div class="row-item"><strong>Illustrer · exemplifier · montrer · citer · reprendre · évoquer</strong></div>
        <div class="ex-box"><em>« Ainsi, l'auteur illustre son propos par l'exemple de… »</em><br>
        <em>« On peut citer à titre d'illustration le vers… »</em></div>`
    },
    {
      cours: "Partie 2", cat: "Bien rédiger", col: "amber",
      name: "Tableau complet : familier → soutenu",
      def: "Référence rapide des tournures à bannir à l'écrit du bac.",
      content: `<table class="mtable">
          <tr><th>À éviter</th><th>Registre soutenu</th></tr>
          <tr><td>Je (trop subjectif)</td><td>Nous (avec mesure), le lecteur, on (rare)</td></tr>
          <tr><td>Il y a / il existe</td><td>Le texte comporte, présente, met en relief</td></tr>
          <tr><td>On voit que / on peut voir</td><td>Il apparaît que, l'on constate que</td></tr>
          <tr><td>En gros / bref / genre</td><td>En somme, somme toute, pour ainsi dire</td></tr>
          <tr><td>Super / trop / hyper</td><td>Remarquablement, particulièrement, extrêmement</td></tr>
          <tr><td>Mettre en avant</td><td>Souligner, mettre en lumière, faire ressortir</td></tr>
          <tr><td>Parler de</td><td>Traiter de, aborder, évoquer, développer</td></tr>
          <tr><td>Montrer que (répété)</td><td>Montrer, démontrer, établir, prouver, révéler</td></tr>
        </table>`
    },
    {
      cours: "Partie 2", cat: "Bien rédiger", col: "pink",
      name: "Verbes de parole — lexique complet",
      def: "Varier les verbes introducteurs de paroles ou de prises de position.",
      content: `<table class="mtable">
          <tr><th>Intention</th><th>Verbes</th></tr>
          <tr><td>Affirmer</td><td>dire, affirmer, déclarer, assurer, soutenir</td></tr>
          <tr><td>Nuançer</td><td>prétendre, suggérer, laisser entendre, insinuer</td></tr>
          <tr><td>Proclamer</td><td>proclamer, annoncer, clamer, s'exclamer</td></tr>
          <tr><td>Contester</td><td>contester, rétorquer, objecter, dénoncer</td></tr>
          <tr><td>Expliquer</td><td>expliquer, justifier, argumenter, développer</td></tr>
        </table>
        <div class="ex-box">✗ <em>L'auteur dit que…</em> (répété)<br>✓ <em>L'auteur affirme / laisse entendre / s'exclame…</em></div>`
    },
    {
      cours: "Partie 2", cat: "Bien rédiger", col: "pink",
      name: "Verbes de pensée, jugement et sentiment",
      def: "Trois familles de verbes pour analyser les prises de position et les émotions.",
      content: `<div class="sub-title">Pensée & jugement</div>
        <div class="row-item">penser, considérer, estimer, juger, croire, douter, certifier, confirmer, louer, blâmer, déplorer</div>
        <div class="sub-title">Sentiment</div>
        <div class="row-item">aimer, détester, apprécier, souhaiter, craindre, redouter, espérer, regretter</div>
        <div class="sub-title">Exemple de périphrase</div>
        <div class="ex-box">✗ <em>Hugo décrit… Hugo représente…</em><br>✓ <em>Le romancier décrit… il la présente ensuite…</em></div>`
    },
    {
      cours: "Partie 2", cat: "Bien rédiger", col: "coral",
      name: "Hyperonymes et regroupements",
      def: "Termes généraux pour éviter les listes répétitives de procédés.",
      content: `<table class="mtable">
          <tr><th>Hyperonyme</th><th>Regroupe</th></tr>
          <tr><td>images</td><td>comparaison, métaphore, personnification…</td></tr>
          <tr><td>figures de style</td><td>oxymore, antithèse, hyperbole…</td></tr>
          <tr><td>effets sonores</td><td>allitération, assonance, onomatopée…</td></tr>
          <tr><td>procédés narratifs</td><td>ellipse, analepse, focalisation…</td></tr>
          <tr><td>registre / tonalité</td><td>lyrique, tragique, satirique…</td></tr>
          <tr><td>connecteurs / articulations</td><td>addition, opposition, conséquence…</td></tr>
        </table>`
    },
    {
      cours: "Partie 2", cat: "Bien rédiger", col: "gray",
      name: "Périphrases : auteur, œuvre, personnage",
      def: "Varier les désignations pour un style soutenu et éviter les répétitions.",
      content: `<table class="mtable">
          <tr><th>Éviter</th><th>Alternatives</th></tr>
          <tr><td>l'auteur</td><td>l'écrivain, le romancier, le poète, le dramaturge, l'essayiste, le narrateur</td></tr>
          <tr><td>le personnage</td><td>le héros, la protagoniste, le locuteur, le narrateur, le témoin</td></tr>
          <tr><td>le texte</td><td>l'extrait, le passage, l'œuvre, le poème, la scène, le monologue</td></tr>
          <tr><td>dit</td><td>affirme, déclare, laisse entendre, confie, murmure (si justifié)</td></tr>
        </table>`
    },
    {
      cours: "Partie 2", cat: "Bien rédiger", col: "gray",
      name: "Intégrer une citation",
      def: "Formules pour introduire une citation sans paraphrase ni erreur de présentation.",
      content: `<div class="row-item"><strong>« … »</strong> (guillemets obligatoires) · numéro de vers ou de ligne si possible</div>
        <div class="row-item">Intro : <em>comme l'affirme l'auteur : « … »</em> · <em>on lit notamment : « … »</em></div>
        <div class="row-item"><em>Le vers X comporte… : « … »</em> · <em>Dans cette strophe, … : « … »</em></div>
        <div class="row-item">Commentaire : courte (5–15 mots) · Dissertation : encore plus ciblée</div>`
    },
    {
      cours: "Partie 3", cat: "Formules d'analyse", col: "purple",
      name: "Analyser un adjectif",
      def: "Formules types pour commenter un qualificatif.",
      content: `<div class="row-item">L'adjectif <strong>caractérise / qualifie / nuance / intensifie</strong> le nom…</div>
        <div class="row-item">Il confère une tonalité <em>(mélancolique, ironique, solennelle…)</em></div>
        <div class="ex-box"><em>« L'adjectif "frêle" qualifie Cosette et suggère une vulnérabilité physique et morale. »</em></div>`
    },
    {
      cours: "Partie 3", cat: "Formules d'analyse", col: "purple",
      name: "Analyser un nom ou un terme",
      def: "Commenter le choix d'un mot et sa charge sémantique.",
      content: `<div class="row-item">Le terme <strong>désigne / renvoie à / se charge de / revêt / connote</strong>…</div>
        <div class="row-item">Il <strong>amplifie / atténue</strong> le sens · il porte une connotation <em>(religieuse, guerrière…)</em></div>
        <div class="ex-box"><em>« Le mot "silence" revêt ici une valeur symbolique de résistance. »</em></div>`
    },
    {
      cours: "Partie 3", cat: "Formules d'analyse", col: "blue",
      name: "Analyser un procédé stylistique",
      def: "Enchaîner procédé → citation → interprétation (IPCI).",
      content: `<div class="row-item">Le procédé <strong>exprime / met en évidence / souligne / traduit</strong>…</div>
        <div class="row-item">Structure : <strong>Idée → Procédé nommé → Citation → Interprétation</strong></div>
        <div class="ex-box"><em>« L'oxymore "obscure clarté" traduit une tension entre savoir et doute. »</em></div>`
    },
    {
      cours: "Partie 3", cat: "Formules d'analyse", col: "blue",
      name: "Analyser un champ lexical",
      def: "Montrer la cohérence thématique d'un ensemble de mots.",
      content: `<div class="row-item">Le champ lexical de <em>X</em> <strong>se développe / évoque / insiste sur / souligne</strong>…</div>
        <div class="row-item">Les termes <em>…, … et …</em> convergent vers l'idée de…</div>
        <div class="ex-box"><em>« Le champ lexical de la mort (cendres, nuit, tombeau) installe une atmosphère élégiaque. »</em></div>`
    },
    {
      cours: "Partie 3", cat: "Formules d'analyse", col: "coral",
      name: "Analyser un effet sur le lecteur",
      def: "Relier le procédé à l'impact ressenti ou produit.",
      content: `<div class="row-item">L'effet <strong>est produit par / est rendu par / réside dans / se traduit par</strong>…</div>
        <div class="row-item">Le lecteur <strong>ressent / perçoit / est sensibilisé à / est immergé dans</strong>…</div>
        <div class="ex-box"><em>« L'effet d'oppression réside dans la répétition martelée de "on". »</em></div>`
    },
    {
      cours: "Partie 3", cat: "Formules d'analyse", col: "coral",
      name: "Analyser le texte dans son ensemble",
      def: "Formules pour les axes globaux, la problématique et la conclusion.",
      content: `<div class="row-item">Le texte <strong>traite de / repose sur l'idée que / met en scène / présente / explore</strong>…</div>
        <div class="row-item">L'ensemble <strong>conduit à / invite à / tend vers</strong> une réflexion sur…</div>
        <div class="ex-box"><em>« Ce poème explore la fugacité du temps et invite à une méditation mélancolique. »</em></div>`
    },
    {
      cours: "Partie 3", cat: "Narration & description", col: "green",
      name: "Temporalité et rythme du récit",
      def: "Vocabulaire pour commenter accélérations, pauses et silences narratifs.",
      content: `<div class="row-item"><strong>Accélérer · ralentir · suspendre · interrompre · passer sous silence · condenser · dilater</strong></div>
        <div class="row-item">Le récit <strong>accélère / s'interrompt / marque une pause / gagne en intensité</strong></div>
        <div class="row-item">Effets : suspense, tension, immersion, distanciation</div>`
    },
    {
      cours: "Partie 4", cat: "Connecteurs & devoir", col: "gray",
      name: "Connecteurs d'addition et de renforcement",
      def: "Enrichir un raisonnement sans répéter « et » ou « aussi ».",
      content: `<div class="row-item"><strong>De plus · en outre · qui plus est · par ailleurs · également · de surcroît · en effet</strong></div>
        <div class="ex-box"><em>« De plus, cette stratégie narrative renforce l'empathie du lecteur. »</em></div>`
    },
    {
      cours: "Partie 4", cat: "Connecteurs & devoir", col: "gray",
      name: "Connecteurs d'opposition et de concession",
      def: "Articuler thèse, nuance et contradiction.",
      content: `<div class="sub-title">Opposition</div>
        <div class="row-item">cependant, toutefois, néanmoins, en revanche, au contraire, pourtant, or</div>
        <div class="sub-title">Concession</div>
        <div class="row-item">certes… mais, il est vrai que, quoique, bien que, même si</div>
        <div class="ex-box"><em>« Certes, le personnage semble faible ; néanmoins, il incarne une résistance morale. »</em></div>`
    },
    {
      cours: "Partie 4", cat: "Connecteurs & devoir", col: "gray",
      name: "Connecteurs de cause, conséquence et conclusion",
      def: "Assurer la logique argumentative du devoir.",
      content: `<div class="sub-title">Cause / explication</div>
        <div class="row-item">car, en effet, puisque, étant donné que, c'est que</div>
        <div class="sub-title">Conséquence / conclusion</div>
        <div class="row-item">donc, ainsi, par conséquent, c'est pourquoi, dès lors, en définitive</div>
        <div class="sub-title">Illustration</div>
        <div class="row-item">par exemple, ainsi, c'est le cas de, à titre d'illustration</div>`
    },
    {
      cours: "Partie 4", cat: "Connecteurs & devoir", col: "teal",
      name: "Transitions et annonces de plan",
      def: "Formules pour lier introduction, développement et conclusion.",
      content: `<div class="row-item"><strong>Annonce :</strong> « Dans un premier temps… / Puis… / Enfin… »</div>
        <div class="row-item"><strong>Transition :</strong> « Nous avons montré que… / Cependant… / Il convient désormais d'examiner… »</div>
        <div class="row-item"><strong>Conclusion :</strong> « En définitive… / Pour conclure… / L'ensemble du texte invite à… »</div>`
    },
    {
      cours: "Partie 4", cat: "Commentaire & dissertation", col: "teal",
      name: "Commentaire : introduction et problématique",
      def: "Formules pour une entrée en matière claire et soutenue.",
      content: `<div class="row-item"><strong>Présentation :</strong> auteur, titre, date, genre, extrait situé</div>
        <div class="row-item"><strong>Problématique :</strong> « En quoi… ? / Dans quelle mesure… ? / Comment… ? »</div>
        <div class="row-item"><strong>Annonce :</strong> « Nous verrons d'abord… puis… enfin… »</div>
        <div class="row-item">Éviter : paraphrase, question fermée oui/non, « Je vais parler de… »</div>`
    },
    {
      cours: "Partie 4", cat: "Commentaire & dissertation", col: "blue",
      name: "Dissertation : thèse, concession, synthèse",
      def: "Lexique du plan dialectique et du raisonnement argumenté.",
      content: `<div class="row-item"><strong>Thèse :</strong> défendre, soutenir, affirmer, montrer que</div>
        <div class="row-item"><strong>Concession :</strong> certes… mais… / il convient de nuancer / on objectera que</div>
        <div class="row-item"><strong>Synthèse :</strong> il apparaît que, on peut conclure que, il s'avère que</div>
        <div class="ex-box"><em>« Certes, l'amour passionné domine le récit ; toutefois, le devoir l'emporte in fine. »</em></div>`
    },
    {
      cours: "Partie 4", cat: "Poésie & énonciation", col: "green",
      name: "Poésie : versification et musicalité",
      def: "Vocabulaire pour commenter la forme poétique sans paraphrase.",
      content: `<div class="row-item">Le vers <strong>rythme / scande / structure / cadence</strong> le poème</div>
        <div class="row-item">La <strong>rime / l'assonance / l'allitération / l'enjambement</strong> crée un effet <em>…</em></div>
        <div class="row-item">La strophe <strong>organise / articule / renforce</strong> le sens</div>`
    },
    {
      cours: "Partie 4", cat: "Poésie & énonciation", col: "green",
      name: "Énonciation : narrateur, locuteur, distance",
      def: "Analyser qui parle et avec quelle distance vis-à-vis du récit ou du lecteur.",
      content: `<div class="row-item">Le <strong>narrateur / locuteur poétique / personnage</strong> adopte un ton <em>…</em></div>
        <div class="row-item">La <strong>distance énonciative</strong> crée un effet d'objectivité, d'intimité ou d'ironie</div>
        <div class="row-item">Le <strong>je</strong> lyrique / le <strong>tu</strong> apostrophé / l'<strong>on</strong> généralisant</div>`
    },
  ];

  const EXTRA_QCM = [
    { cat: "Connecteurs & devoir", q: "Quel connecteur exprime une addition ?", opts: ["Cependant", "De plus", "Or", "Bien que"], ans: 1, expl: "De plus, en outre, qui plus est : addition ou renforcement." },
    { cat: "Connecteurs & devoir", q: "« Certes… mais… » introduit surtout…", opts: ["Une illustration", "Une concession nuancée", "Une conclusion", "Une description"], ans: 1, expl: "Concession : admettre une limite avant de maintenir la thèse." },
    { cat: "Connecteurs & devoir", q: "« Par conséquent » exprime…", opts: ["Une opposition", "Une conséquence logique", "Une comparaison", "Une citation"], ans: 1, expl: "Conséquence : donc, ainsi, c'est pourquoi, dès lors." },
    { cat: "Connecteurs & devoir", q: "« En revanche » sert surtout à…", opts: ["Additionner", "Oppose deux idées ou deux cas", "Conclure", "Citer"], ans: 1, expl: "Opposition : en revanche, au contraire, à l'opposé." },
    { cat: "Connecteurs & devoir", q: "« À titre d'illustration » introduit…", opts: ["Une opposition", "Un exemple", "Une conclusion", "Une paraphrase"], ans: 1, expl: "Illustration : par exemple, c'est le cas de, ainsi." },
    { cat: "Connecteurs & devoir", q: "Une bonne transition entre deux parties…", opts: ["Répète le plan", "Fait le bilan puis annonce la suite", "Supprime la problématique", "Paraphrase le texte"], ans: 1, expl: "Transition = bilan + pivot + annonce." },
    { cat: "Commentaire & dissertation", q: "Une problématique efficace est surtout…", opts: ["Fermée (oui/non)", "Ouverte (en quoi, comment, dans quelle mesure)", "Le titre recopié", "Une liste de procédés"], ans: 1, expl: "Problématique ouverte liée au fonctionnement du texte." },
    { cat: "Commentaire & dissertation", q: "« En quoi le silence devient-il un acte de résistance ? » est…", opts: ["Une paraphrase", "Une problématique ouverte", "Un résumé", "Une citation"], ans: 1, expl: "Formule en quoi / comment / dans quelle mesure." },
    { cat: "Commentaire & dissertation", q: "La concession en dissertation sert à…", opts: ["Annuler la thèse", "Nuancer en admettant une limite", "Paraphraser", "Introduire une biographie"], ans: 1, expl: "Certes… mais… = maturité argumentative." },
    { cat: "Commentaire & dissertation", q: "« En définitive » annonce plutôt…", opts: ["Une introduction", "Une conclusion ou synthèse", "Une citation", "Une description"], ans: 1, expl: "Formule de clôture argumentative." },
    { cat: "Formules d'analyse", q: "« Le terme « cendres » appartient au champ lexical de… » — on analyse…", opts: ["La versification", "La thématique / sémantique", "La grammaire seule", "La biographie"], ans: 1, expl: "Champ lexical = cohérence thématique." },
    { cat: "Formules d'analyse", q: "« L'adjectif « frêle » qualifie… » — formule pour…", opts: ["Un verbe", "Un adjectif", "Un connecteur", "Un titre"], ans: 1, expl: "Adjectif → caractérise, qualifie." },
    { cat: "Formules d'analyse", q: "« L'effet d'oppression réside dans… » commente surtout…", opts: ["La date de parution", "L'impact sur le lecteur", "L'orthographe", "Le nombre de vers"], ans: 1, expl: "Effet = impact produit ou ressenti." },
    { cat: "Formules d'analyse", q: "IPCI signifie…", opts: ["Introduction, Plan, Conclusion, Interprétation", "Idée, Procédé, Citation, Interprétation", "Image, Phrase, Contexte, Ironie", "Intention, Paragraphe, Conclusion, Impact"], ans: 1, expl: "Structure minimale d'un paragraphe d'analyse." },
    { cat: "Bien rédiger", q: "Pour varier « l'auteur dit », on peut écrire…", opts: ["l'auteur base", "l'écrivain affirme / laisse entendre", "l'auteur gère", "l'auteur ressent"], ans: 1, expl: "Verbes de parole + périphrases (écrivain, romancier…)." },
    { cat: "Bien rédiger", q: "Un hyperonyme de « allitération, assonance, rime » est…", opts: ["image", "effets sonores / musicalité", "registre comique", "connecteur"], ans: 1, expl: "Regrouper par terme générique." },
    { cat: "Bien rédiger", q: "« On voit que » se reformule plutôt…", opts: ["Il y a", "Il apparaît que / l'on constate que", "Au final", "De base"], ans: 1, expl: "Registre analytique impersonnel." },
    { cat: "Bien rédiger", q: "Intégrer une citation exige surtout…", opts: ["La paraphrase", "Des guillemets et une courte longueur ciblée", "L'absence de procédé nommé", "Le registre familier"], ans: 1, expl: "Citation courte, entre guillemets, commentée." },
    { cat: "Narration & description", q: "« Condenser le récit » produit surtout…", opts: ["Un ralentissement", "Une accélération narrative", "Une description", "Une rime"], ans: 1, expl: "Condenser / accélérer vs ralentir / dilater." },
    { cat: "Poésie & énonciation", q: "« Le vers scande le poème » concerne…", opts: ["La grammaire", "La versification / rythme", "La biographie", "Les connecteurs"], ans: 1, expl: "Lexique de la forme poétique." },
    { cat: "Poésie & énonciation", q: "La distance énonciative désigne…", opts: ["La longueur du texte", "Le rapport du locuteur au récit et au lecteur", "Le nombre de chapitres", "La date de publication"], ans: 1, expl: "Intimité, objectivité ou ironie selon la voix." },
    { cat: "Analyser & décrire", q: "« Dans un second temps, nous étudierons… » sert à…", opts: ["Conclure", "Enchaîner une deuxième étape d'analyse", "Paraphraser", "Citer la biographie"], ans: 1, expl: "Progression temporelle de l'argumentation." },
    { cat: "Mise en évidence", q: "« Mettre en lumière » est proche de…", opts: ["Passer sous silence", "Souligner / faire ressortir", "Paraphraser", "Résumer"], ans: 1, expl: "Synonymes de mise en évidence." },
    { cat: "Jugement & argumentation", q: "« Approuver » s'oppose le plus directement à…", opts: ["Comparer", "Critiquer / réfuter", "Décrire", "Illustrer"], ans: 1, expl: "Couple critique / approuver, réfuter / défendre." },
    { cat: "Interprétation", q: "« Distinguer » en analyse, c'est…", opts: ["Confondre deux idées", "Séparer des interprétations ou registres", "Supprimer la citation", "Paraphraser"], ans: 1, expl: "Distinguer, nuancer, opposer des lectures." },
  ];

  function _norm(s) {
    return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim();
  }

  function _mkFromFiche(d) {
    const peers = VOCAB_COURS.filter(x => x.name !== d.name && x.cat !== d.cat);
    if (peers.length < 3) return null;
    const wrong = [];
    const seen = new Set([_norm(d.cat)]);
    for (const p of peers.sort(() => Math.random() - 0.5)) {
      if (seen.has(_norm(p.cat))) continue;
      seen.add(_norm(p.cat));
      wrong.push(p.cat);
      if (wrong.length >= 3) break;
    }
    if (wrong.length < 3) return null;
    const opts = [d.cat, ...wrong].sort(() => Math.random() - 0.5);
    const ans = opts.indexOf(d.cat);
    if (ans < 0) return null;
    return {
      cat: d.cat,
      q: `Thème — la fiche « ${d.name.slice(0, 55)}${d.name.length > 55 ? '…' : ''} » relève de…`,
      opts,
      ans,
      expl: `« ${d.name} » appartient au thème « ${d.cat} ».`,
    };
  }

  if (typeof VOCAB_COURS !== 'undefined') {
    const names = new Set(VOCAB_COURS.map(x => x.name));
    EXTRA_COURS.forEach(c => { if (!names.has(c.name)) VOCAB_COURS.push(c); });
  }

  if (typeof VOCAB_QCM !== 'undefined') {
    const qseen = new Set(VOCAB_QCM.map(q => _norm(q.q)));
    EXTRA_QCM.forEach(q => {
      const k = _norm(q.q);
      if (!qseen.has(k)) { VOCAB_QCM.push(q); qseen.add(k); }
    });
    EXTRA_COURS.forEach(d => {
      const g = _mkFromFiche(d);
      if (g && !qseen.has(_norm(g.q))) { VOCAB_QCM.push(g); qseen.add(_norm(g.q)); }
    });
  }

  const extraCats = ["Connecteurs & devoir", "Commentaire & dissertation", "Poésie & énonciation"];
  if (typeof VOCAB_CATS !== 'undefined') {
    extraCats.forEach(c => { if (!VOCAB_CATS.includes(c)) VOCAB_CATS.push(c); });
  }
  if (typeof VOCAB_QCM_CATS !== 'undefined') {
    extraCats.forEach(c => { if (!VOCAB_QCM_CATS.includes(c)) VOCAB_QCM_CATS.push(c); });
  }
})();
