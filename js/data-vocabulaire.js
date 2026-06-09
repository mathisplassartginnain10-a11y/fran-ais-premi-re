/* ═══════════════════════════════════════════════════
   data-vocabulaire.js — Fiches & QCM vocabulaire d'analyse
   Sources : VOCABULAIRE DE L'ANALYSE · Bien rédiger
   ═══════════════════════════════════════════════════ */

const VOCAB_COURS = [
  {
    cours: "Partie 1", cat: "Analyser & décrire", col: "purple",
    name: "Verbes d'analyse et de description",
    def: "Lexique pour décrire, décomposer et expliquer un texte — commentaire et dissertation.",
    content: `<div class="sub-title">Verbes clés</div>
      <div class="row-item"><strong>Analyser · étudier · décrire · identifier · décomposer · examiner · dégager · illustrer · montrer · expliquer · repérer · caractériser</strong></div>
      <div class="sub-title">Exemple de formulation</div>
      <div class="ex-box"><em>« Dans un premier temps, nous analyserons la manière dont l'auteur construit son argumentation, pour étudier, dans un second temps, la portée persuasive du texte. »</em></div>
      <div class="sub-title">Progression conseillée</div>
      <div class="row-item">1. Repérer les procédés · 2. Les nommer · 3. Citer · 4. Interpréter (IPCI).</div>
      <div class="sub-title">À éviter</div>
      <div class="row-item">« Il y a », « on voit », « il existe », « nous pouvons trouver ».</div>`
  },
  {
    cours: "Partie 1", cat: "Jugement & argumentation", col: "blue",
    name: "Verbes de jugement et d'argumentation",
    def: "Lexique pour exprimer une prise de position, comparer ou opposer des idées.",
    content: `<div class="sub-title">Verbes clés</div>
      <div class="row-item"><strong>Critiquer · approuver · réfuter · argumenter · justifier · comparer · opposer · défendre · contester · démontrer</strong></div>
      <div class="sub-title">Exemple</div>
      <div class="ex-box"><em>« Dans ce texte, l'auteur choisit d'opposer deux visions du monde. »</em></div>
      <div class="sub-title">Dissertation</div>
      <div class="row-item">Thèse → arguments → exemples · Concession : <em>certes… mais…</em> · Synthèse : <em>il apparaît que…</em></div>`
  },
  {
    cours: "Partie 1", cat: "Interprétation", col: "teal",
    name: "Verbes d'interprétation et de nuance",
    def: "Lexique pour proposer un sens, nuancer et questionner le texte.",
    content: `<div class="sub-title">Verbes clés</div>
      <div class="row-item"><strong>Interpréter · proposer · suggérer · distinguer · nuancer · questionner</strong></div>
      <div class="sub-title">Exemple</div>
      <div class="ex-box"><em>« On peut interpréter le silence du personnage principal comme une forme de résistance passive face à l'autorité. »</em></div>`
  },
  {
    cours: "Partie 1", cat: "Mise en évidence", col: "coral",
    name: "L'auteur met en évidence",
    def: "Formules pour dire qu'un procédé ou un thème est mis en relief dans le texte.",
    content: `<div class="sub-title">Verbes et locutions</div>
      <div class="row-item"><strong>Souligner · mettre en lumière · faire ressortir · pointer · exposer · relever · accentuer · insister sur · valoriser</strong></div>
      <div class="sub-title">Exemple</div>
      <div class="ex-box"><em>« Dans cet extrait, l'auteur met en évidence la complexité des relations humaines à travers l'utilisation de métaphores évocatrices. »</em></div>`
  },
  {
    cours: "Partie 2", cat: "Bien rédiger", col: "amber",
    name: "Registre : éviter le familier",
    def: "Remplacez les tournures relâchées par un registre courant ou soutenu, adapté à l'écrit du bac.",
    content: `<table class="mtable">
        <tr><th>À éviter</th><th>Employez plutôt</th></tr>
        <tr><td>Je</td><td>Nous, on (avec parcimonie)</td></tr>
        <tr><td>Se baser sur, à la base, de base</td><td>Se fonder sur, s'appuyer, à l'origine, au début</td></tr>
        <tr><td>Au final</td><td>Finalement, en définitive</td></tr>
        <tr><td>Suite à</td><td>À la suite de…, en raison de…</td></tr>
        <tr><td>gérer</td><td>S'occuper de, organiser</td></tr>
        <tr><td>Au niveau de</td><td>À propos de, en ce qui concerne, pour ce qui est de</td></tr>
        <tr><td>Le vécu, le ressenti</td><td>La vie, les sensations, les sentiments</td></tr>
      </table>`
  },
  {
    cours: "Partie 2", cat: "Bien rédiger", col: "amber",
    name: "Remplacer « il y a » et les verbes vides",
    def: "Bannissez les formulations imprécises ; privilégiez des verbes d'analyse précis.",
    content: `<div class="sub-title">Au lieu de « il y a »…</div>
      <div class="row-item">Le texte <strong>présente</strong>, <strong>se compose de</strong>, <strong>contient</strong>, <strong>met en relief</strong>, <strong>comporte</strong>…</div>
      <div class="sub-title">Exemple corrigé</div>
      <div class="ex-box">✗ <em>Il y a une comparaison au vers 2 et il y a encore une métaphore…</em><br>
      ✓ <em>Le vers 2 comporte une comparaison et l'on trouve également une métaphore appliquée au même objet dans la strophe suivante.</em></div>
      <div class="sub-title">Limiter être, avoir, faire</div>
      <div class="ex-box">✗ <em>Le roi a de l'autorité… car il a tous les pouvoirs.</em><br>
      ✓ <em>Le roi exerce son autorité… car il détient tous les pouvoirs.</em></div>`
  },
  {
    cours: "Partie 2", cat: "Bien rédiger", col: "pink",
    name: "Hyperonymes, synonymes et périphrases",
    def: "Regrouper, varier le lexique et éviter les répétitions maladroites.",
    content: `<div class="sub-title">Hyperonyme (terme général)</div>
      <div class="ex-box">✗ comparaisons, métaphores, personnifications…<br>✓ <strong>images</strong> (hyperonyme regroupant plusieurs figures)</div>
      <div class="sub-title">Remplacer « être »</div>
      <div class="row-item">apparaître, sembler, représenter, constituer…</div>
      <div class="sub-title">Verbes de parole</div>
      <div class="row-item">dire, affirmer, déclarer, prétendre, s'exclamer…</div>
      <div class="sub-title">Verbes de pensée et de jugement</div>
      <div class="row-item">penser, considérer, trouver, juger, croire, douter, certifier, confirmer, louer, blâmer…</div>
      <div class="sub-title">Verbes de sentiment</div>
      <div class="row-item">aimer, détester, apprécier, souhaiter, craindre, déplorer…</div>`
  },
  {
    cours: "Partie 2", cat: "Bien rédiger", col: "gray",
    name: "Cohésion, ponctuation et modalisation",
    def: "Soigner la syntaxe, couper les phrases longues et nuancer le propos.",
    content: `<div class="sub-title">Pronoms et reprise</div>
      <div class="ex-box">✗ <em>Le roi s'adresse aux Indiens. Les Indiens lui répondent.</em><br>
      ✓ <em>Le roi s'adresse aux Indiens qui lui répondent.</em> ou <em>Ceux-ci lui répondent.</em></div>
      <div class="sub-title">Ponctuation</div>
      <div class="row-item">Coupez les phrases trop longues ; mettez entre virgules les propositions.</div>
      <div class="sub-title">Modalisateurs</div>
      <div class="row-item">peut-être, sans doute, certainement — le conditionnel pour atténuer ou marquer l'éventualité.</div>`
  },
  {
    cours: "Partie 3", cat: "Narration & description", col: "green",
    name: "Vocabulaire de la narration",
    def: "Verbes et effets pour parler du récit et du rythme narratif.",
    content: `<div class="sub-title">Verbes</div>
      <div class="row-item"><strong>Raconter, narrer, passer sous silence, arrêter, suspendre, ralentir, accélérer</strong></div>
      <div class="sub-title">Effet sur le lecteur</div>
      <div class="row-item">Le lecteur <strong>entre dans une intrigue</strong>, suit un fil narratif, perçoit une accélération ou un suspense.</div>`
  },
  {
    cours: "Partie 3", cat: "Narration & description", col: "green",
    name: "Vocabulaire de la description",
    def: "Lexique pour analyser les passages descriptifs et le réalisme.",
    content: `<div class="sub-title">Verbes</div>
      <div class="row-item"><strong>Peindre, détailler, caractériser, qualifier, présenter</strong></div>
      <div class="sub-title">Effet sur le lecteur</div>
      <div class="row-item">Le lecteur <strong>visualise des détails</strong>, perçoit des <strong>effets de réel</strong>.</div>`
  },
  {
    cours: "Partie 3", cat: "Narration & description", col: "green",
    name: "Point de vue et focalisation",
    def: "Formules pour décrire l'angle de perception du récit ou du poème.",
    content: `<div class="sub-title">Formules</div>
      <div class="row-item"><strong>Adopter un point de vue · poser un regard sur · le narrateur adopte…</strong></div>
      <div class="sub-title">Effet</div>
      <div class="row-item">Le lecteur est sensible à un <strong>angle de vue</strong> : focalisation externe (faits visibles) ou focalisation zéro (omniscience).</div>`
  },
  {
    cours: "Partie 3", cat: "Formules d'analyse", col: "purple",
    name: "Formules selon l'objet analysé",
    def: "Modèles de tournures pour commenter adjectifs, noms, procédés, champs lexicaux, effets et texte.",
    content: `<table class="mtable">
        <tr><th>Objet</th><th>Verbes utiles</th></tr>
        <tr><td>Un adjectif</td><td>caractérise, qualifie…</td></tr>
        <tr><td>Un nom, un terme</td><td>désigne, se charge, prend, revêt, amplifie, atténue, connote</td></tr>
        <tr><td>Un procédé</td><td>exprime, met en évidence, souligne</td></tr>
        <tr><td>Un champ lexical</td><td>se développe, évoque, insiste sur, souligne</td></tr>
        <tr><td>Un effet</td><td>est produit, est rendu par, est perceptible, réside dans…</td></tr>
        <tr><td>Un texte</td><td>traite de, repose sur l'idée que, met en scène, présente…</td></tr>
      </table>`
  },
];

const VOCAB_CATS = ["Tous", "Analyser & décrire", "Jugement & argumentation", "Interprétation", "Mise en évidence", "Bien rédiger", "Narration & description", "Formules d'analyse"];

const VOCAB_QCM = [
  { cat: "Analyser & décrire", q: "Quel verbe convient le mieux pour introduire une démarche d'analyse structurée ?", opts: ["Il y a", "Dégager", "Gérer", "Au final"], ans: 1, expl: "« Dégager » (comme analyser, examiner, décomposer) est un verbe d'analyse précis." },
  { cat: "Analyser & décrire", q: "« Dans un premier temps, nous … la construction argumentative de l'auteur. »", opts: ["gérons", "analyserons", "basculons", "ressentons"], ans: 1, expl: "Analyser / étudier / décrire : verbes d'action adaptés au commentaire." },
  { cat: "Analyser & décrire", q: "Quelle formulation remplace correctement « il y a une métaphore » ?", opts: ["Il existe une métaphore", "Le texte comporte une métaphore", "On peut trouver une métaphore", "Nous pouvons voir une métaphore"], ans: 1, expl: "Préférez : le texte présente / comporte / met en relief…" },
  { cat: "Jugement & argumentation", q: "Pour exprimer une opposition d'idées dans une dissertation, on emploie surtout…", opts: ["décrire", "opposer", "décomposer", "peindre"], ans: 1, expl: "Opposer, comparer, réfuter, argumenter : lexique du jugement." },
  { cat: "Jugement & argumentation", q: "« L'auteur choisit de … deux visions du monde. »", opts: ["illustrer", "opposer", "détailler", "suspendre"], ans: 1, expl: "Opposer deux visions = mise en contraste argumentative." },
  { cat: "Jugement & argumentation", q: "Réfuter, c'est…", opts: ["Résumer un texte", "Contester une thèse par des arguments", "Décrire un personnage", "Compter les vers"], ans: 1, expl: "Réfuter = contester, infirmer une idée adverse." },
  { cat: "Interprétation", q: "« On peut … le silence du héros comme une résistance. »", opts: ["gérer", "interpréter", "accélérer", "basculer"], ans: 1, expl: "Interpréter, proposer, suggérer : verbes d'interprétation." },
  { cat: "Interprétation", q: "Nuancer son propos, c'est…", opts: ["Répéter la même idée", "Moduler, tempérer, distinguer les degrés", "Supprimer les citations", "Paraphraser le texte"], ans: 1, expl: "Nuancer = distinguer, moduler — marque de maturité critique." },
  { cat: "Interprétation", q: "Questionner le texte signifie…", opts: ["Poser des questions ouvertes sur son sens", "Recopier la question du sujet", "Ignorer la problématique", "Ne citer qu'une fois"], ans: 0, expl: "Questionner = ouvrir une réflexion interprétative." },
  { cat: "Mise en évidence", q: "Synonyme de « souligner » dans une analyse ?", opts: ["Passer sous silence", "Faire ressortir", "Paraphraser", "Résumer"], ans: 1, expl: "Faire ressortir, mettre en lumière, relever, accentuer…" },
  { cat: "Mise en évidence", q: "« L'auteur … la complexité des relations humaines. »", opts: ["gère", "met en évidence", "base", "finalise"], ans: 1, expl: "Mettre en évidence = souligner un aspect essentiel du texte." },
  { cat: "Mise en évidence", q: "« Insister sur » appartient surtout au registre…", opts: ["Familier", "Analytique et argumentatif", "Purement narratif", "Administratif"], ans: 1, expl: "Insister sur / valoriser / pointer : lexique de l'analyse." },
  { cat: "Bien rédiger", q: "Quelle expression est la plus adaptée au bac ?", opts: ["Au final", "En définitive", "De base", "Le ressenti"], ans: 1, expl: "En définitive / finalement remplacent « au final » (registre relâché)." },
  { cat: "Bien rédiger", q: "« Au niveau de la métaphore » se reformule plutôt…", opts: ["À la base de", "En ce qui concerne la métaphore", "Au final", "Suite à"], ans: 1, expl: "À propos de / en ce qui concerne / pour ce qui est de…" },
  { cat: "Bien rédiger", q: "Remplacer « avoir » dans « il a tous les pouvoirs » donne plutôt…", opts: ["il possède / détient", "il base", "il gère", "il ressent"], ans: 0, expl: "Variez avoir, être, faire — verbes souvent vides à l'écrit." },
  { cat: "Bien rédiger", q: "Un hyperonyme de comparaison, métaphore et personnification est…", opts: ["une figure", "une image", "un registre", "un connecteur"], ans: 1, expl: "« Images » regroupe plusieurs figures de style." },
  { cat: "Bien rédiger", q: "Pour varier « Victor Hugo … Cosette », on peut dire…", opts: ["Hugo base Cosette", "le romancier la présente", "Hugo gère Cosette", "Hugo ressent Cosette"], ans: 1, expl: "Périphrase : le romancier, l'auteur, le narrateur…" },
  { cat: "Bien rédiger", q: "Un modalisateur sert à…", opts: ["Créer une rime", "Nuancer la certitude (peut-être, sans doute…)", "Introduire une citation", "Compter les syllabes"], ans: 1, expl: "Modalisateurs et conditionnel = prudence argumentative." },
  { cat: "Bien rédiger", q: "Quelle tournure améliore la cohésion ?", opts: ["Répéter le même nom", "Employer un pronom ou une relative", "Supprimer la ponctuation", "Utiliser « je » systématiquement"], ans: 1, expl: "Pronoms, relatives, connecteurs : cohésion du devoir." },
  { cat: "Narration & description", q: "Ralentir le récit, c'est plutôt…", opts: ["Une ellipse", "Une pause descriptive ou un ralentissement narratif", "Un incipit", "Une rime riche"], ans: 1, expl: "Ralentir / suspendre / arrêter : vocabulaire du tempo narratif." },
  { cat: "Narration & description", q: "« Peindre un paysage » relève surtout du vocabulaire…", opts: ["De la description", "De la conjugason", "Des connecteurs logiques", "De la versification seule"], ans: 0, expl: "Peindre, détailler, caractériser, qualifier : description." },
  { cat: "Narration & description", q: "Un effet de description réaliste : le lecteur…", opts: ["entre dans l'intrigue", "visualise des détails", "récite le texte", "ignore le lexique"], ans: 1, expl: "Description → visualisation, effet de réel." },
  { cat: "Narration & description", q: "« Adopter un point de vue » concerne surtout…", opts: ["La rime", "La focalisation / l'énonciation", "La ponctuation", "La conjugaison"], ans: 1, expl: "Point de vue = angle de perception (narration ou poésie)." },
  { cat: "Formules d'analyse", q: "Pour un adjectif, on dit qu'il…", opts: ["caractérise ou qualifie", "rime en e", "est toujours péjoratif", "remplace le verbe"], ans: 0, expl: "Adjectif → caractérise, qualifie le nom." },
  { cat: "Formules d'analyse", q: "Un champ lexical « se développe » ou…", opts: ["conjugue", "évoque un thème / insiste sur une idée", "supprime les figures", "remplace la problématique"], ans: 1, expl: "Champ lexical → cohérence thématique, insistance." },
  { cat: "Formules d'analyse", q: "« Un procédé exprime / met en évidence » — on parle surtout de…", opts: ["Sa fonction stylistique", "Son nombre de lettres", "Sa date de publication", "Son auteur uniquement"], ans: 0, expl: "Procédé → effet et mise en relief d'un sens." },
  { cat: "Formules d'analyse", q: "« Le texte repose sur l'idée que… » sert à…", opts: ["Paraphraser ligne à ligne", "Formuler une interprétation globale", "Compter les connecteurs", "Ignorer la thèse"], ans: 1, expl: "Formule d'interprétation du sens global." },
  { cat: "Formules d'analyse", q: "« L'effet réside dans… » introduit plutôt…", opts: ["Une biographie", "L'explication de l'impact sur le lecteur", "Une liste de dates", "Une paraphrase"], ans: 1, expl: "Effet → impact perçu, résultat stylistique." },
  { cat: "Bien rédiger", q: "« Se fonder sur » remplace plutôt…", opts: ["se baser sur", "au final", "gérer", "le vécu"], ans: 0, expl: "Registre soutenu : se fonder sur, s'appuyer." },
  { cat: "Analyser & décrire", q: "Quel verbe N'appartient PAS aux verbes d'analyse ?", opts: ["Examiner", "Décomposer", "Gérer", "Illustrer"], ans: 2, expl: "Gérer = registre relâché ; pas un verbe d'analyse littéraire." },
  { cat: "Mise en évidence", q: "« Relever un procédé » signifie…", opts: ["L'effacer", "L'identifier et le commenter", "Le paraphraser", "Le traduire"], ans: 1, expl: "Relever = repérer et analyser un procédé." },
  { cat: "Jugement & argumentation", q: "Justifier une thèse, c'est…", opts: ["La répéter", "La soutenir par des arguments et exemples", "La contredire", "La paraphraser"], ans: 1, expl: "Justifier / argumenter = étayer une position." },
  { cat: "Interprétation", q: "« Suggérer un sens » implique…", opts: ["Une interprétation ouverte", "Une paraphrase mot à mot", "L'absence d'exemple", "Un registre familier"], ans: 0, expl: "Suggérer = proposer une piste interprétative." },
  { cat: "Narration & description", q: "« Le lecteur entre dans une intrigue » décrit l'effet…", opts: ["D'une description", "D'une narration", "D'une citation", "D'une faute d'orthographe"], ans: 1, expl: "Intrigue = narration ; détails visuels = description." },
  { cat: "Formules d'analyse", q: "Un terme qui « connote » évoque…", opts: ["Uniquement le dictionnaire", "Un sens culturel ou subjectif", "Une rime", "Un temps verbal"], ans: 1, expl: "Connotation = sens implicite, chargé." },
  { cat: "Bien rédiger", q: "« En somme » ou « pour conclure » introduisent…", opts: ["Une illustration", "Une conclusion ou synthèse", "Une opposition", "Une citation longue"], ans: 1, expl: "Formules de clôture ou de bilan." },
  { cat: "Bien rédiger", q: "« Parler de » au bac se remplace plutôt par…", opts: ["Gérer", "Traiter de / aborder / évoquer", "Au final", "Le ressenti"], ans: 1, expl: "Registre soutenu du commentaire et de la dissertation." },
  { cat: "Analyser & décrire", q: "« Repérer » un procédé, c'est…", opts: ["Le paraphraser", "L'identifier dans le texte", "Le supprimer", "Le traduire"], ans: 1, expl: "Première étape avant de nommer et interpréter." },
  { cat: "Mise en évidence", q: "« Valoriser » un aspect du texte signifie…", opts: ["L'effacer", "Le mettre en relief positivement", "Le paraphraser", "Le résumer"], ans: 1, expl: "Valoriser = accentuer l'importance d'un thème ou procédé." },
  { cat: "Interprétation", q: "« Proposer une lecture » du texte, c'est…", opts: ["Résumer l'intrigue", "Offrir une interprétation argumentée", "Recopier la question", "Ignorer les procédés"], ans: 1, expl: "Proposer / suggérer = interprétation ouverte." },
  { cat: "Jugement & argumentation", q: "« Comparer » deux œuvres ou deux visions, c'est…", opts: ["Les confondre", "Mettre en parallèle pour éclairer la thèse", "Les paraphraser", "Les résumer"], ans: 1, expl: "Comparaison = rapprochement argumenté." },
  { cat: "Narration & description", q: "« Passer sous silence » un événement, c'est…", opts: ["L'amplifier", "Ne pas le raconter (ellipse)", "Le décrire longuement", "Le citer"], ans: 1, expl: "Vocabulaire narratif : omission volontaire." },
  { cat: "Formules d'analyse", q: "« Le passage présente une gradation » signifie…", opts: ["Une simple liste", "Une progression d'intensité (croissante ou décroissante)", "Une comparaison", "Une paraphrase"], ans: 1, expl: "Gradation = organisation par intensité ; souvent ascendante ou descendante." },
  { cat: "Formules d'analyse", q: "« Le texte recourt à l'énumération » indique…", opts: ["Une exagération", "Une liste d'éléments juxtaposés pour insister", "Une opposition", "Un registre comique seul"], ans: 1, expl: "Énumération = procédé de liste (souvent avec polysyndète pour insister)." },
  { cat: "Formules d'analyse", q: "Pour distinguer gradation et énumération, on vérifie surtout…", opts: ["La longueur de la phrase", "S'il y a progression d'intensité entre les termes", "La présence de rimes", "Le nombre de vers"], ans: 1, expl: "Gradation = intensité qui monte ou descend. Énumération = liste sans ordre d'intensité obligatoire." },
  { cat: "Mise en évidence", q: "« L'auteur énumère » décrit plutôt…", opts: ["Une seule métaphore", "Une suite d'éléments listés pour insister", "Un dialogue", "Une citation"], ans: 1, expl: "Formule d'analyse pour l'énumération et l'accumulation." },
  { cat: "Bien rédiger", q: "Le conditionnel (« pourrait », « serait ») sert souvent à…", opts: ["Affirmer avec certitude", "Nuancer ou marquer l'hypothèse", "Résumer", "Citer"], ans: 1, expl: "Conditionnel + modalisateurs = prudence analytique." },
];

const VOCAB_QCM_CATS = ["Toutes", "Analyser & décrire", "Jugement & argumentation", "Interprétation", "Mise en évidence", "Bien rédiger", "Narration & description", "Formules d'analyse"];
