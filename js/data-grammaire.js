/* ═══════════════════════════════════════════════════
   data-grammaire.js — 14 fiches cours + 95 QCM
   ═══════════════════════════════════════════════════ */

const GRAM_COURS = [
  /* ── COURS 1 : Les Propositions ── */
  {
    cours:"Cours 1", cat:"Les Propositions", col:"purple",
    name:"La proposition : définition & types",
    def:"Une proposition = groupe de mots construit autour d'un verbe conjugué. Phrase simple = 1 verbe. Phrase complexe = 2 verbes ou plus.",
    content:`<div class="sub-title">Phrase simple vs complexe</div>
      <table class="mtable">
        <tr><th>Type</th><th>Verbes</th><th>Proposition(s)</th></tr>
        <tr><td>Phrase simple</td><td>1</td><td>1 indépendante</td></tr>
        <tr><td>Phrase complexe</td><td>2+</td><td>2 indépendantes OU 1 principale + 1 subordonnée</td></tr>
      </table>
      <div class="sub-title">Les 3 types de propositions</div>
      <div class="row-item"><strong>Indépendante</strong> — existe seule, sans subordonnant.<div class="ex-box">« Je vais à la piscine tous les jours. »</div></div>
      <div class="row-item"><strong>Principale</strong> — fonctionne de façon autonome, liée à une subordonnée.<div class="ex-box">« <u>Je suis toujours à l'heure</u> quand je dois aller à l'école. »</div></div>
      <div class="row-item"><strong>Subordonnée</strong> — dépend de la principale, introduite par un <em>subordonnant</em>. Trois sous-types : relative, complétive, circonstancielle.</div>`
  },
  {
    cours:"Cours 1", cat:"Les Propositions", col:"purple",
    name:"Indépendantes : juxtaposées ou coordonnées",
    def:"Deux indépendantes peuvent être liées par une conjonction de coordination (coordonnées) ou par une virgule/point-virgule (juxtaposées).",
    content:`<table class="mtable">
        <tr><th>Type</th><th>Lien</th><th>Exemple</th></tr>
        <tr><td>Coordonnées</td><td>mais, ou, et, donc, or, ni, car</td><td><em>« J'écoute une chanson et je danse. »</em></td></tr>
        <tr><td>Juxtaposées</td><td>virgule ou point-virgule</td><td><em>« J'écoute une chanson, je danse. »</em></td></tr>
      </table>
      <div class="sub-title">Moyen mnémotechnique</div>
      <div class="row-item"><strong>MAIS OU ET DONC OR NI CAR</strong> — les 7 conjonctions de coordination.</div>`
  },
  {
    cours:"Cours 1", cat:"Les Propositions", col:"purple",
    name:"La subordonnée relative",
    def:"Introduite par un pronom relatif (qui, que, dont, où, lequel…), elle complète un nom ou un groupe nominal (antécédent).",
    content:`<div class="sub-title">Pronoms relatifs</div>
      <div class="row-item">qui · que · quoi · dont · où · lequel · auquel · duquel…</div>
      <div class="sub-title">Exemple analysé</div>
      <div class="ex-box">« Je regarde le chat <u>qui court sur le toit</u>. »<br>→ PSR introduite par <em>qui</em>, complément de l'antécédent <em>le chat</em>.</div>
      <div class="sub-title">Relative déterminative vs explicative</div>
      <div class="row-item"><strong>Déterminative</strong> — indispensable au sens : « L'homme <u>qui ment</u> perd sa crédibilité. »</div>
      <div class="row-item"><strong>Explicative</strong> — entre virgules, apporte une précision facultative : « Mon frère, <u>qui habite Lyon</u>, est venu. »</div>`
  },
  {
    cours:"Cours 1", cat:"Les Propositions", col:"purple",
    name:"La subordonnée complétive",
    def:"Introduite par la conjonction « que », elle complète un verbe (COD, COI, sujet, attribut du sujet, complément de l'adjectif).",
    content:`<div class="sub-title">Exemple analysé</div>
      <div class="ex-box">« Je pense <u>que tu es arrivée la première</u>. »<br>→ PSC introduite par <em>que</em>, COD du verbe <em>penser</em>.</div>
      <div class="sub-title">Fonctions possibles</div>
      <div class="row-item"><strong>COD / COI</strong> — <em>« Je pense qu'il est déjà tard. »</em></div>
      <div class="row-item"><strong>Complément de l'adjectif</strong> — <em>« Je suis triste que tu ne sois pas venue. »</em></div>
      <div class="row-item"><strong>Attribut du sujet</strong> — <em>« Mon souhait est que tu viennes. »</em></div>
      <div class="row-item"><strong>Sujet</strong> — <em>« Que tu aies arrêté le sport me désole. »</em></div>`
  },
  {
    cours:"Cours 1", cat:"Les Propositions", col:"purple",
    name:"La subordonnée circonstancielle — 8 types",
    def:"Introduite par une conjonction ou locution conjonctive, elle indique les circonstances d'une action.",
    content:`<table class="mtable">
        <tr><th>Type</th><th>Conjonctions clés</th><th>Exemple</th></tr>
        <tr><td>Cause</td><td>parce que, puisque, vu que…</td><td><em>« Je fais du sport parce que c'est bon pour la santé. »</em></td></tr>
        <tr><td>But</td><td>pour que, afin que, de peur que…</td><td><em>« Je lui donne des conseils pour qu'il réussisse. »</em></td></tr>
        <tr><td>Conséquence</td><td>si…que, tant…que, à tel point que…</td><td><em>« La météo est si belle que je vais faire du bateau. »</em></td></tr>
        <tr><td>Comparaison</td><td>aussi…que, plus…que, comme…</td><td><em>« Il est aussi sportif qu'il est travailleur. »</em></td></tr>
        <tr><td>Concession</td><td>bien que, quoique, même si…</td><td><em>« Tu as eu une bonne note bien que tu n'aies pas étudié. »</em></td></tr>
        <tr><td>Opposition</td><td>tandis que, alors que, pendant que…</td><td><em>« Nicolas aime le chocolat tandis que Mélanie préfère la vanille. »</em></td></tr>
        <tr><td>Condition</td><td>si, à moins que, à condition que…</td><td><em>« Il doit travailler dur s'il veut réussir. »</em></td></tr>
        <tr><td>Temps</td><td>quand, avant que, après que, pendant que…</td><td><em>« Nous faisons une marche quand il fait beau. »</em></td></tr>
      </table>`
  },

  /* ── COURS 2 : Les Propositions (suite) ── */
  {
    cours:"Cours 2", cat:"Les Propositions (suite)", col:"teal",
    name:"La complétive : 3 formes",
    def:"Il existe 3 formes de proposition subordonnée complétive : introduite par « que », infinitive, et interrogative indirecte.",
    content:`<div class="row-item"><strong>Complétive introduite par « que »</strong> (cf. Cours 1)<div class="ex-box">« Je pense <u>qu'il est déjà tard</u>. »</div></div>
      <div class="row-item"><strong>Complétive infinitive</strong> — verbe à l'infinitif, souvent après un verbe de perception.<div class="ex-box">« J'entends <u>un chien aboyer</u>. » (= J'entends qu'un chien aboie.)</div></div>
      <div class="row-item"><strong>Interrogative indirecte</strong> — introduite par un mot interrogatif ou « si ».<div class="ex-box">« Je me demande <u>pourquoi il est venu</u>. »<br>« Je me demande <u>s'il viendra</u>. »</div></div>`
  },
  {
    cours:"Cours 2", cat:"Les Propositions (suite)", col:"teal",
    name:"Cas particuliers de la complétive",
    def:"Certaines complétives apparaissent avec un seul verbe conjugué mais forment deux propositions.",
    content:`<div class="row-item"><strong>Complément du présentatif</strong> — phrase introduite par <em>Voici</em> ou <em>Voilà</em>.<div class="ex-box">« Voilà <u>que nous sommes en retard</u>. »</div></div>
      <div class="row-item"><strong>Complément de l'adverbe</strong> — phrase introduite par un adverbe.<div class="ex-box">« Heureusement <u>qu'elle n'est pas arrivée en retard</u>. »</div></div>`
  },
  {
    cours:"Cours 2", cat:"Les Propositions (suite)", col:"teal",
    name:"Participiale & incise",
    def:"Deux types de propositions moins fréquents mais utiles pour une analyse fine.",
    content:`<div class="row-item"><strong>Participiale</strong> — présence d'un participe (passé ou présent), séparée par une ponctuation, sans subordonnant.<div class="ex-box">« <u>Une fois le rideau levé</u>, le spectacle commence. »<br>« <u>Le spectacle ayant commencé</u>, le silence règne. »</div></div>
      <div class="row-item"><strong>Incise</strong> — proposition insérée pour rapporter des paroles ou pensées.<div class="ex-box">« Il veut certainement, <u>pensait-elle</u>, que nous achetions cette maison. »</div></div>`
  },
  {
    cours:"Cours 2", cat:"Les Propositions (suite)", col:"teal",
    name:"Synthèse : tableau général des propositions",
    def:"Vue d'ensemble de toutes les propositions.",
    content:`<table class="mtable">
        <tr><th>Proposition</th><th>Sous-type</th><th>Rôle</th></tr>
        <tr><td>Indépendante</td><td>—</td><td>Existe seule, sans dépendance</td></tr>
        <tr><td>Principale</td><td>—</td><td>Autonome, accompagnée d'une subordonnée</td></tr>
        <tr><td rowspan="4">Subordonnée</td><td>Relative</td><td>Complète un nom</td></tr>
        <tr><td>Complétive</td><td>Complète un verbe (que / infinitive / interr. indirecte)</td></tr>
        <tr><td>Circonstancielle</td><td>Cause, but, conséquence, comparaison, concession, opposition, condition, temps</td></tr>
        <tr><td>Participiale</td><td>Complément circonstanciel sans subordonnant</td></tr>
        <tr><td>Incise</td><td>—</td><td>Rapporte des paroles ou pensées</td></tr>
      </table>`
  },

  /* ── COURS 3 : La Négation ── */
  {
    cours:"Cours 3", cat:"La Négation", col:"coral",
    name:"Négation syntaxique : généralités",
    def:"La négation syntaxique transforme une phrase affirmative en phrase négative, via un système corrélatif (2 éléments) ou un seul élément (ne seul).",
    content:`<div class="sub-title">Système corrélatif (2 éléments)</div>
      <div class="row-item"><strong>Discordantiel</strong> : l'adverbe <em>ne</em> (ou <em>n'</em>), placé avant le verbe.</div>
      <div class="row-item"><strong>Forclusif</strong> : second élément qui ferme le mouvement négatif.<ul style="padding-left:1.1rem;margin-top:3px;font-size:12px;color:var(--tx2)"><li>Adverbe : <em>pas, plus, point, jamais, guère, nullement, nulle part</em></li><li>Pronom : <em>rien, personne</em></li><li>Déterminant : <em>nulle, aucun</em></li></ul></div>
      <div class="sub-title">Système à un élément</div>
      <div class="row-item">Se construit avec <em>ne</em> uniquement (usage soutenu).</div>`
  },
  {
    cours:"Cours 3", cat:"La Négation", col:"coral",
    name:"Formes de la négation syntaxique",
    def:"4 formes : totale (ne…pas / ne…point), partielle (ne…plus, ne…jamais…), restrictive (ne…que), explétive (ne sans valeur de négation).",
    content:`<table class="mtable">
        <tr><th>Forme</th><th>Construction</th><th>Exemple</th></tr>
        <tr><td>Totale</td><td>ne…pas / ne…point</td><td><em>« Il ne vient pas. »</em></td></tr>
        <tr><td>Partielle</td><td>ne…plus, ne…jamais, ne…rien, ne…guère, ne…aucun, personne…ne…</td><td><em>« Je ne mange plus. »</em></td></tr>
        <tr><td>Restrictive</td><td>ne…que (valeur positive = seulement)</td><td><em>« Il ne parle que le soir. »</em></td></tr>
        <tr><td>Explétive</td><td>ne seul, sans valeur négative</td><td><em>« J'ai peur qu'il ne soit tard. »</em></td></tr>
      </table>
      <div class="sub-title">Explétive — 3 contextes</div>
      <div class="row-item">Avec un verbe de <strong>comparaison</strong> : <em>« Il est moins grand qu'il n'y paraît. »</em></div>
      <div class="row-item">Avec un verbe exprimant la <strong>crainte</strong> : <em>« J'ai peur qu'il ne soit trop tard. »</em></div>
      <div class="row-item">Avec un <strong>subordonnant composé</strong> : <em>« Rentre avant qu'il ne fasse froid. »</em></div>`
  },
  {
    cours:"Cours 3", cat:"La Négation", col:"coral",
    name:"La négation lexicale & synthèse",
    def:"La négation lexicale nie le sens d'un mot sans passer par la syntaxe. Elle s'exprime de 3 façons : préposition, préfixe, antonyme.",
    content:`<table class="mtable">
        <tr><th>Forme</th><th>Procédé</th><th>Exemple</th></tr>
        <tr><td>Préposition</td><td>sans / sans que</td><td><em>« Il est parti sans prévenir. »</em></td></tr>
        <tr><td>Préfixe privatif</td><td>in-, im-, il-, ir-, dé(s)-, a-, anti-…</td><td><em>incapable, défaire, amoral, antisocial</em></td></tr>
        <tr><td>Antonyme</td><td>Mot de sens opposé</td><td><em>chaud ↔ froid ; aimer ↔ haïr</em></td></tr>
      </table>
      <div class="sub-title">Synthèse globale</div>
      <table class="mtable">
        <tr><th>Branche</th><th>Type</th><th>Formes clés</th></tr>
        <tr><td rowspan="4"><strong>Syntaxique</strong></td><td>Totale</td><td>ne…pas / ne…point</td></tr>
        <tr><td>Partielle</td><td>ne…plus, ne…jamais, ne…rien, personne…ne, aucun…ne</td></tr>
        <tr><td>Restrictive</td><td>ne…que</td></tr>
        <tr><td>Explétive</td><td>ne seul (crainte, comparaison, subordonnant composé)</td></tr>
        <tr><td rowspan="3"><strong>Lexicale</strong></td><td>Préposition</td><td>sans / sans que</td></tr>
        <tr><td>Préfixe privatif</td><td>in-, dé-, a-, anti-…</td></tr>
        <tr><td>Antonymie</td><td>chaud/froid, aimer/haïr…</td></tr>
      </table>`
  },

  /* ── COURS 4 : Les Modes du verbe ── */
  {
    cours:"Cours 4", cat:"Les Modes", col:"blue",
    name:"Modes personnels : indicatif, subjonctif, conditionnel, impératif",
    def:"Les modes personnels indiquent la personne grammaticale et expriment le rapport du locuteur à l'action.",
    content:`<table class="mtable">
        <tr><th>Mode</th><th>Valeur principale</th><th>Exemple</th></tr>
        <tr><td>Indicatif</td><td>Certitude, faits réels</td><td><em>« Il vient. / Il viendra. »</em></td></tr>
        <tr><td>Subjonctif</td><td>Doute, souhait, nécessité, sentiment</td><td><em>« Il faut qu'il vienne. »</em></td></tr>
        <tr><td>Conditionnel</td><td>Hypothèse, souhait, politesse, fait non certain</td><td><em>« Il viendrait si tu l'invitais. »</em></td></tr>
        <tr><td>Impératif</td><td>Ordre, conseil, défense</td><td><em>« Viens ! Ne bouge pas. »</em></td></tr>
      </table>
      <div class="sub-title">Subjonctif — contextes d'emploi</div>
      <div class="row-item">Après <strong>bien que, quoique</strong> (concession) : <em>« Bien qu'il soit fatigué… »</em></div>
      <div class="row-item">Après <strong>pour que, afin que</strong> (but) : <em>« Pour qu'il réussisse… »</em></div>
      <div class="row-item">Après <strong>il faut que, il est nécessaire que</strong> : <em>« Il faut que tu partes. »</em></div>
      <div class="sub-title">Conditionnel — 3 valeurs</div>
      <div class="row-item"><strong>Hypothèse</strong> : <em>« Si j'avais le temps, je lirais davantage. »</em></div>
      <div class="row-item"><strong>Souhait / politesse</strong> : <em>« Je voudrais un café. »</em></div>
      <div class="row-item"><strong>Fait non certain (presse)</strong> : <em>« Le président aurait démissionné. »</em></div>`
  },
  {
    cours:"Cours 4", cat:"Les Modes", col:"blue",
    name:"Modes impersonnels : infinitif, participe, gérondif",
    def:"Les modes impersonnels n'indiquent pas la personne grammaticale. Ils se comportent souvent comme des noms, adjectifs ou adverbes.",
    content:`<table class="mtable">
        <tr><th>Mode</th><th>Formation</th><th>Valeur</th><th>Exemple</th></tr>
        <tr><td>Infinitif</td><td>Forme de base du verbe</td><td>Nom verbal (sujet, COD…)</td><td><em>« Lire est un plaisir. »</em></td></tr>
        <tr><td>Participe présent</td><td>radical + -ant</td><td>Simultanéité, cause (invariable)</td><td><em>« Souriant, il répondit. »</em></td></tr>
        <tr><td>Participe passé</td><td>radical + -é/-i/-u/-s</td><td>Passif, temps composés</td><td><em>« Fatigué, il s'arrêta. »</em></td></tr>
        <tr><td>Gérondif</td><td><strong>en</strong> + participe présent</td><td>Manière, simultanéité, condition</td><td><em>« En travaillant, il réussira. »</em></td></tr>
      </table>
      <div class="sub-title">Participe présent vs adjectif verbal</div>
      <div class="row-item"><strong>Participe présent</strong> — invariable : <em>« Une chanson charman<u>t</u> son public. »</em></div>
      <div class="row-item"><strong>Adjectif verbal</strong> — accordé : <em>« Une histoire charmant<u>e</u>. »</em></div>
      <div class="sub-title">Gérondif — 4 valeurs</div>
      <div class="row-item">Manière : <em>« Il répond en souriant. »</em></div>
      <div class="row-item">Simultanéité : <em>« En lisant, il s'endormit. »</em></div>
      <div class="row-item">Condition : <em>« En travaillant, tu réussiras. »</em></div>
      <div class="row-item">Cause : <em>« Il s'est blessé en tombant. »</em></div>`
  },

  /* ── COURS 5 : La Voix ── */
  {
    cours:"Cours 5", cat:"La Voix", col:"amber",
    name:"Voix active, passive et pronominale",
    def:"La voix indique la relation entre le sujet grammatical et l'action verbale.",
    content:`<div class="sub-title">Les 3 voix</div>
      <table class="mtable">
        <tr><th>Voix</th><th>Construction</th><th>Exemple</th></tr>
        <tr><td>Active</td><td>Sujet fait l'action</td><td><em>« Marie écrit la lettre. »</em></td></tr>
        <tr><td>Passive</td><td><strong>être</strong> + participe passé — sujet subit l'action</td><td><em>« La lettre est écrite par Marie. »</em></td></tr>
        <tr><td>Pronominale</td><td><strong>se</strong> + verbe — 4 sous-types</td><td><em>« Il se lave. » / « Ils se battent. »</em></td></tr>
      </table>
      <div class="sub-title">La voix passive</div>
      <div class="row-item"><strong>Complément d'agent</strong> = celui qui fait l'action, introduit par <em>par</em> ou <em>de</em>.</div>
      <div class="row-item"><strong>Condition</strong> : seuls les verbes transitifs directs (avec un COD) peuvent se mettre au passif.</div>
      <div class="row-item"><strong>Effet stylistique</strong> : mettre en valeur ce qui subit l'action, effacer ou minimiser l'agent.</div>
      <div class="sub-title">Voix pronominale — 4 types</div>
      <table class="mtable">
        <tr><th>Type</th><th>Description</th><th>Exemple</th></tr>
        <tr><td>Réfléchie</td><td>Sujet fait l'action sur lui-même</td><td><em>« Il se lave. »</em></td></tr>
        <tr><td>Réciproque</td><td>Action mutuelle entre plusieurs sujets</td><td><em>« Ils se battent. »</em></td></tr>
        <tr><td>Passive (pron.)</td><td>Se + verbe actif, sens passif</td><td><em>« Ce livre se lit facilement. »</em></td></tr>
        <tr><td>Lexicale</td><td>Verbe essentiellement pronominal</td><td><em>« Il s'évanouit. / Elle se souvient. »</em></td></tr>
      </table>`
  },
];

const GRAM_CATS = ["Tous","Les Propositions","Les Propositions (suite)","La Négation","Les Modes","La Voix"];

/* ══════════════════════════════════════════
   QCM Grammaire — 95 questions
   ══════════════════════════════════════════ */
const GRAM_QCM = [
  /* ── Les Propositions ── */
  {cat:"Les Propositions",q:"Qu'est-ce qu'une proposition ?",opts:["Un groupe de mots sans verbe","Un groupe de mots construit autour d'un verbe conjugué","Une phrase avec deux verbes","Un type de phrase exclamative"],ans:1,expl:"Une proposition est définie par la présence d'un verbe conjugué."},
  {cat:"Les Propositions",q:"Une phrase simple contient…",opts:["Deux verbes conjugués","Un seul verbe conjugué","Un pronom relatif","Une conjonction de coordination"],ans:1,expl:"Phrase simple = 1 verbe conjugué = 1 proposition indépendante."},
  {cat:"Les Propositions",q:"Une phrase complexe contient…",opts:["1 seul verbe conjugué","2 verbes conjugués ou plus","1 proposition indépendante","Uniquement des propositions subordonnées"],ans:1,expl:"Phrase complexe = 2 verbes conjugués ou plus."},
  {cat:"Les Propositions",q:"Combien de types de propositions existe-t-il ?",opts:["2","4","3 (indépendante, principale, subordonnée)","5"],ans:2,expl:"3 types : indépendante, principale, subordonnée (avec plusieurs sous-types)."},
  {cat:"Les Propositions",q:"« J'écoute une chanson et je danse. » — les deux propositions sont…",opts:["Indépendante + subordonnée","Principale + subordonnée","Deux indépendantes coordonnées","Deux indépendantes juxtaposées"],ans:2,expl:"La conjonction « et » lie deux propositions indépendantes → coordonnées."},
  {cat:"Les Propositions",q:"« J'écoute une chanson, je danse. » — les deux propositions sont…",opts:["Coordonnées","Juxtaposées","Principale + circonstancielle","Indépendante + complétive"],ans:1,expl:"La virgule lie deux propositions indépendantes juxtaposées."},
  {cat:"Les Propositions",q:"La proposition principale est…",opts:["Celle qui ne peut pas exister seule","Celle qui fonctionne de façon autonome dans la phrase","Celle introduite par un subordonnant","Toujours en début de phrase"],ans:1,expl:"La principale est autonome ; la subordonnée en dépend."},
  {cat:"Les Propositions",q:"Qu'est-ce qu'un subordonnant ?",opts:["Un verbe auxiliaire","Un pronom personnel","Un mot ou groupe de mots introduisant une proposition subordonnée","Un signe de ponctuation"],ans:2,expl:"Le subordonnant est le terme générique : il introduit la proposition subordonnée."},
  {cat:"Les Propositions",q:"La subordonnée relative est introduite par…",opts:["Une conjonction de subordination","Un pronom relatif","Un adverbe interrogatif","La conjonction que"],ans:1,expl:"La PSR est introduite par un pronom relatif : qui, que, dont, où, lequel…"},
  {cat:"Les Propositions",q:"La subordonnée relative sert à…",opts:["Compléter un verbe","Compléter un nom ou groupe nominal","Indiquer les circonstances d'une action","Exprimer la cause"],ans:1,expl:"La PSR complète un nom ou groupe nominal (son antécédent)."},
  {cat:"Les Propositions",q:"Dans « Je regarde le chat qui court sur le toit », quelle est la fonction de la relative ?",opts:["COD du verbe regarder","Sujet de court","Complément de l'antécédent le chat","Circonstancielle de lieu"],ans:2,expl:"La PSR est complément de l'antécédent « le chat »."},
  {cat:"Les Propositions",q:"Parmi ces mots, lequel N'EST PAS un pronom relatif ?",opts:["dont","puisque","lequel","où"],ans:1,expl:"« Puisque » est une conjonction de subordination. Les pronoms relatifs : qui, que, dont, où, lequel…"},
  {cat:"Les Propositions",q:"La subordonnée complétive introduite par « que » sert à…",opts:["Compléter un nom","Compléter un verbe","Indiquer le but","Exprimer l'opposition"],ans:1,expl:"La PSC complète un verbe."},
  {cat:"Les Propositions",q:"Dans « Je pense que tu es arrivée la première », quelle est la fonction de la complétive ?",opts:["Sujet","Attribut du sujet","COD du verbe penser","Circonstancielle"],ans:2,expl:"La PSC est COD du verbe penser."},
  {cat:"Les Propositions",q:"« Que tu aies arrêté le sport me désole. » — quelle est la fonction de la complétive ?",opts:["COD","Sujet du verbe désole","Attribut du sujet","Complément de l'adjectif"],ans:1,expl:"Ici, la complétive joue le rôle de sujet du verbe désole."},
  {cat:"Les Propositions",q:"La complétive infinitive se distingue par…",opts:["La présence de « que »","Un verbe à l'infinitif, souvent après un verbe de perception","La conjonction « si »","L'absence de sujet"],ans:1,expl:"Complétive infinitive : verbe à l'infinitif. Ex. : « J'entends un chien aboyer. »"},
  {cat:"Les Propositions",q:"« Je me demande s'il viendra. » — quelle forme de complétive ?",opts:["Complétive introduite par que","Complétive infinitive","Interrogative indirecte","Circonstancielle de condition"],ans:2,expl:"L'interrogative indirecte est introduite par un mot interrogatif ou par « si »."},
  {cat:"Les Propositions",q:"Combien existe-t-il de types de circonstancielles ?",opts:["4","6","8","10"],ans:2,expl:"8 types : cause, but, conséquence, comparaison, concession, opposition, condition, temps."},
  {cat:"Les Propositions",q:"Quelle conjonction introduit une circonstancielle de cause ?",opts:["pour que","bien que","parce que","si"],ans:2,expl:"« Parce que » (aussi : puisque, vu que…) introduit la circonstancielle de cause."},
  {cat:"Les Propositions",q:"Quelle conjonction introduit une circonstancielle de but ?",opts:["tandis que","pour que","quand","bien que"],ans:1,expl:"« Pour que » (aussi : afin que, de peur que…) introduit la circonstancielle de but."},
  {cat:"Les Propositions",q:"« Bien que tu n'aies pas étudié, tu as eu une bonne note. » — quel type de circonstancielle ?",opts:["Cause","Condition","Concession","Opposition"],ans:2,expl:"La concession exprime une contradiction entre deux événements."},
  {cat:"Les Propositions",q:"Quelle différence entre la concession et l'opposition ?",opts:["Aucune","La concession exprime une contradiction ; l'opposition marque un contraste simple","L'opposition utilise bien que","La concession utilise tandis que"],ans:1,expl:"Concession (bien que) : contradiction. Opposition (tandis que) : contraste simple."},
  {cat:"Les Propositions",q:"« S'il veut réussir, il doit travailler dur. » — quel type de circonstancielle ?",opts:["Temps","Cause","Opposition","Condition"],ans:3,expl:"« Si » introduit la circonstancielle de condition."},
  {cat:"Les Propositions",q:"Quelle conjonction introduit une circonstancielle de temps ?",opts:["parce que","pour que","quand","afin que"],ans:2,expl:"« Quand » (aussi : avant que, après que, pendant que…) introduit la circonstancielle de temps."},
  {cat:"Les Propositions",q:"« La météo est si belle que je vais faire du bateau. » — quel type de circonstancielle ?",opts:["Comparaison","But","Conséquence","Cause"],ans:2,expl:"« Si…que » introduit la circonstancielle de conséquence."},
  {cat:"Les Propositions",q:"Quelle est la différence entre indépendante juxtaposée et coordonnée ?",opts:["Aucune","La juxtaposée est reliée par une virgule ; la coordonnée par une conjonction de coordination","La juxtaposée est toujours en début de phrase","La coordonnée utilise un pronom relatif"],ans:1,expl:"Juxtaposée : virgule/point-virgule. Coordonnée : conjonction de coordination (mais, ou, et…)."},
  {cat:"Les Propositions",q:"Citez les 7 conjonctions de coordination (moyen mnémotechnique).",opts:["mais, or, et, donc, et, ni, car","mais, ou, et, donc, or, ni, car","mais, ou, et, donc, et, pourtant, car","mais, ou, et, donc, alors, ni, car"],ans:1,expl:"MAIS OU ET DONC OR NI CAR — les 7 conjonctions de coordination."},
  {cat:"Les Propositions",q:"La subordonnée relative déterminative est…",opts:["Entre virgules, facultative","Indispensable au sens, non séparée par virgules","Toujours introduite par 'dont'","Toujours explicative"],ans:1,expl:"Déterminative = restreint le sens du nom, essentielle. Explicative = entre virgules, facultative."},

  /* ── Les Propositions (suite) ── */
  {cat:"Les Propositions (suite)",q:"La proposition participiale se caractérise par…",opts:["La présence d'un pronom relatif","Un participe (passé ou présent) sans subordonnant, séparé par ponctuation","Une conjonction de coordination","La présence du verbe être"],ans:1,expl:"Participiale : présence d'un participe, séparée de la principale par ponctuation, sans subordonnant."},
  {cat:"Les Propositions (suite)",q:"La proposition incise sert à…",opts:["Exprimer la cause","Rapporter des paroles ou pensées insérées dans une autre proposition","Compléter un nom","Indiquer une comparaison"],ans:1,expl:"Ex. : « Il veut, pensait-elle, que nous achetions cette maison. »"},
  {cat:"Les Propositions (suite)",q:"Quelle est la différence entre la complétive infinitive et la participiale ?",opts:["Aucune","La complétive infinitive dépend d'un verbe de perception ; la participiale est indépendante syntaxiquement","La participiale est introduite par que","La complétive infinitive est toujours sujet"],ans:1,expl:"La complétive infinitive dépend du verbe ; la participiale est séparée sans subordonnant."},
  {cat:"Les Propositions (suite)",q:"Dans « Voilà que nous sommes en retard », la complétive est complément de…",opts:["Un adjectif","Un adverbe","Du présentatif voilà","Du verbe être"],ans:2,expl:"Voilà est un présentatif ; la complétive est son complément."},
  {cat:"Les Propositions (suite)",q:"Parmi ces propositions, laquelle est une participiale ?",opts:["Quand le rideau se lève, le spectacle commence.","Le rideau levé, le spectacle commence.","Le rideau que nous voyons se lève.","Si le rideau se lève, le spectacle commence."],ans:1,expl:"'Le rideau levé' = participiale : participe passé, pas de subordonnant, séparé par virgule."},
  {cat:"Les Propositions (suite)",q:"L'interrogative indirecte est une forme de complétive car…",opts:["Elle complète un adjectif","Elle complète un verbe (souvent de questionnement ou connaissance)","Elle indique le lieu","Elle exprime une condition"],ans:1,expl:"'Je me demande pourquoi il est venu' : la subordonnée est COD du verbe 'demander'."},
  {cat:"Les Propositions (suite)",q:"Quelle est la différence entre une principale et une indépendante ?",opts:["Aucune","L'indépendante existe seule ; la principale est accompagnée d'une subordonnée","La principale est toujours en début de phrase","La principale contient un pronom relatif"],ans:1,expl:"Principale ≠ indépendante : une principale n'existe pas seule sans sa subordonnée."},

  /* ── La Négation ── */
  {cat:"La Négation",q:"Qu'est-ce que le « discordantiel » dans la négation ?",opts:["Le second élément de la négation","L'adverbe ne qui initie l'impulsion négative","Le forclusif","Un préfixe privatif"],ans:1,expl:"Le discordantiel = l'adverbe ne (ou n'), placé avant le verbe, qui initie la négation."},
  {cat:"La Négation",q:"Qu'est-ce qu'un « forclusif » ?",opts:["L'adverbe ne","Le second élément qui ferme le mouvement négatif (pas, plus, rien…)","Un préfixe","La préposition sans"],ans:1,expl:"Le forclusif ferme le mouvement négatif : pas, plus, point, jamais, guère, rien, personne, aucun…"},
  {cat:"La Négation",q:"La négation totale se construit avec…",opts:["ne…que","ne…plus","ne…pas ou ne…point","ne seul"],ans:2,expl:"Négation totale = ne…pas ou ne…point. Elle nie complètement l'action."},
  {cat:"La Négation",q:"Quelle est la valeur réelle de la négation restrictive « ne…que » ?",opts:["Elle nie complètement","Elle affirme partiellement (= seulement)","Elle exprime la crainte","Elle est synonyme de ne…plus"],ans:1,expl:"Ne…que n'est pas une vraie négation : elle restreint à un seul cas positif (= seulement)."},
  {cat:"La Négation",q:"Dans « J'ai peur qu'il ne soit trop tard », le « ne » est…",opts:["Un ne de négation totale","Un ne partiel","Un ne explétif","Un discordantiel avec forclusif"],ans:2,expl:"Le ne explétif n'exprime pas de négation réelle ; ici il accompagne un verbe de crainte."},
  {cat:"La Négation",q:"Dans « Il est moins grand qu'il n'y paraît », le « ne » est…",opts:["Un ne partiel","Un ne explétif avec un verbe de comparaison","Un ne totale","Un forclusif"],ans:1,expl:"Ne explétif + verbe de comparaison. Le sens n'est pas négatif."},
  {cat:"La Négation",q:"Parmi ces mots, lequel est un forclusif adverbe ?",opts:["aucun","personne","jamais","nulle"],ans:2,expl:"Jamais est un adverbe forclusif. Aucun et nulle sont des déterminants ; personne est un pronom."},
  {cat:"La Négation",q:"Parmi ces mots, lequel est un forclusif pronom ?",opts:["jamais","plus","personne","point"],ans:2,expl:"Personne est un pronom forclusif : « Personne ne vient. »"},
  {cat:"La Négation",q:"La négation partielle comprend notamment…",opts:["ne…pas et ne…point","ne…plus, ne…jamais, ne…guère, ne…rien…","ne…que","ne explétif"],ans:1,expl:"La négation partielle regroupe toutes les constructions ne + forclusif autre que pas/point."},
  {cat:"La Négation",q:"Laquelle N'est PAS une construction de la négation partielle ?",opts:["ne…plus","ne…jamais","ne…pas","ne…guère"],ans:2,expl:"Ne…pas est une négation totale. Les autres (plus, jamais, guère) sont des négations partielles."},
  {cat:"La Négation",q:"La négation lexicale diffère de la syntaxique car elle…",opts:["Utilise toujours ne","Nie le sens d'un mot sans passer par la syntaxe","Est toujours formée de deux éléments","Ne peut pas exprimer l'opposition"],ans:1,expl:"La négation lexicale porte sur le mot lui-même : préfixe, antonyme ou préposition sans."},
  {cat:"La Négation",q:"Quel procédé lexical utilise « sans » ou « sans que » ?",opts:["Préfixe privatif","Antonymie","Négation par préposition","Négation explétive"],ans:2,expl:"La préposition « sans » est un procédé de négation lexicale."},
  {cat:"La Négation",q:"Le préfixe « in- » dans « incapable » est un exemple de…",opts:["Négation totale","Négation explétive","Préfixe privatif","Antonymie"],ans:2,expl:"Le préfixe privatif (in-, im-, dé-, a-, anti-…) donne un sens négatif au mot."},
  {cat:"La Négation",q:"Quelle est la nature de la négation dans « Il est malheureux » ?",opts:["Syntaxique totale","Syntaxique partielle","Lexicale par préfixe privatif","Lexicale par antonymie"],ans:2,expl:"Le préfixe « mal- » donne un sens négatif à heureux → négation lexicale par préfixe privatif."},
  {cat:"La Négation",q:"L'antonymie comme procédé de négation consiste à…",opts:["Ajouter ne devant le verbe","Utiliser un mot de sens opposé","Ajouter un préfixe","Utiliser la préposition sans"],ans:1,expl:"L'antonyme nie indirectement : « aimer » nié par son contraire « haïr »."},
  {cat:"La Négation",q:"La négation lexicale peut s'exprimer de combien de façons ?",opts:["2","3","4","5"],ans:1,expl:"3 façons : préposition (sans), préfixe privatif, antonymie."},
  {cat:"La Négation",q:"Dans laquelle de ces phrases la négation est-elle LEXICALE ?",opts:["Il ne vient pas.","Elle n'a jamais répondu.","Ce comportement est immoral.","Personne ne l'a vu."],ans:2,expl:"« Immoral » contient le préfixe privatif « im- » — négation lexicale. Les autres utilisent ne + forclusif."},
  {cat:"La Négation",q:"Quel type de négation est « Rentre avant qu'il ne fasse trop froid » ?",opts:["Négation totale","Négation partielle","Négation explétive (ne seul)","Négation restrictive"],ans:2,expl:"Ne explétif avec un subordonnant composé (avant que). Le sens n'est pas négatif."},
  {cat:"La Négation",q:"Dans « Il ne parle que le soir », peut-on parler de négation vraie ?",opts:["Oui, c'est une négation totale","Non, ne…que est une restriction positive (= seulement le soir)","Oui, c'est une négation partielle","Oui, c'est une négation explétive"],ans:1,expl:"Ne…que est restrictive : elle isole un seul cas positif. Ce n'est pas une négation au sens strict."},
  {cat:"La Négation",q:"Quelle est la différence entre négation syntaxique et lexicale ?",opts:["Aucune","La syntaxique porte sur la construction de la phrase (avec ne) ; la lexicale porte sur le sens d'un mot","La lexicale utilise toujours ne","La syntaxique n'utilise jamais de forclusif"],ans:1,expl:"Syntaxique = construction de phrase avec ne. Lexicale = sens du mot nié sans ne."},
  {cat:"La Négation",q:"Dans « Nul ne peut prévoir l'avenir », quel est le forclusif ?",opts:["ne","prévoir","nul","l'avenir"],ans:2,expl:"'Nul' est un forclusif pronom/déterminant : « nul ne » = « personne ne »."},
  {cat:"La Négation",q:"Dans la langue parlée familière, le 'ne' est souvent…",opts:["Renforcé","Remplacé par un préfixe","Supprimé : 'Je sais pas', 'Il vient pas'","Transformé en 'non'"],ans:2,expl:"La chute du 'ne' est un phénomène oral courant. Il reste obligatoire à l'écrit soutenu."},
  {cat:"La Négation",q:"Peut-on avoir deux forclusifs dans la même proposition ?",opts:["Jamais","Oui : 'Il n'y a plus rien.' ('plus' + 'rien')","Seulement avec ne…pas","Seulement à l'oral"],ans:1,expl:"Deux forclusifs sont possibles et renforcent la négation : 'Il ne voit plus jamais personne.'"},

  /* ── Les Modes ── */
  {cat:"Les Modes",q:"Quel mode exprime la certitude et les faits réels ?",opts:["Subjonctif","Conditionnel","Indicatif","Impératif"],ans:2,expl:"L'indicatif est le mode du réel et de la certitude."},
  {cat:"Les Modes",q:"Le subjonctif est utilisé principalement après…",opts:["Des verbes de certitude","Des verbes de doute, souhait, nécessité ou sentiment","La conjonction 'et'","Des verbes de perception"],ans:1,expl:"'Je veux que tu viennes.' (souhait) — 'Il faut que nous partions.' (nécessité) → subjonctif."},
  {cat:"Les Modes",q:"'Il faut que tu viennes.' — le verbe 'viennes' est au…",opts:["Conditionnel présent","Subjonctif présent","Indicatif futur","Impératif"],ans:1,expl:"Après 'il faut que', le verbe est au subjonctif présent."},
  {cat:"Les Modes",q:"Le conditionnel exprime principalement…",opts:["L'ordre","La certitude présente","Une action hypothétique ou soumise à une condition","Un souhait exprimé avec force"],ans:2,expl:"'Si j'avais de l'argent, je voyagerais.' — le conditionnel traduit l'hypothèse ou le souhait."},
  {cat:"Les Modes",q:"L'impératif sert à…",opts:["Exprimer le doute","Exprimer le réel","Exprimer un ordre, une défense ou un conseil","Exprimer une hypothèse"],ans:2,expl:"'Viens ! Ne bougez pas. Prenez soin de vous.' → ordre, défense, conseil."},
  {cat:"Les Modes",q:"Le gérondif se forme avec…",opts:["La préposition 'à' + infinitif","La préposition 'en' + participe présent","Le verbe 'avoir' + participe passé","La préposition 'pour' + infinitif"],ans:1,expl:"'En chantant', 'en courant', 'en travaillant' — gérondif = en + participe présent."},
  {cat:"Les Modes",q:"Le gérondif exprime principalement…",opts:["La cause et le but seulement","La simultanéité, la manière, la condition ou la cause","L'opposition","Le résultat"],ans:1,expl:"'Il sourit en me regardant.' (manière/simultanéité) — 'En travaillant, tu réussiras.' (condition)"},
  {cat:"Les Modes",q:"Le participe présent est invariable et exprime…",opts:["Une action achevée","Une action simultanée ou la cause","L'ordre","Une hypothèse"],ans:1,expl:"'La pluie tombant, nous sommes rentrés.' — le participe présent marque la simultanéité ou la cause."},
  {cat:"Les Modes",q:"Quelle est la différence entre participe présent et adjectif verbal ?",opts:["Aucune","Le participe présent est invariable ; l'adjectif verbal s'accorde","Le participe présent s'accorde","L'adjectif verbal est invariable"],ans:1,expl:"'Charmer' : participe 'charmant' (invariable) ≠ adjectif 'charmante' (accordé)."},
  {cat:"Les Modes",q:"'Bien que tu sois fatigué, tu travailles.' — quel mode après 'bien que' ?",opts:["Indicatif","Conditionnel","Subjonctif","Impératif"],ans:2,expl:"Les conjonctions de concession (bien que, quoique) se construisent avec le subjonctif."},
  {cat:"Les Modes",q:"'Après qu'il est parti' — quel mode faut-il ?",opts:["Subjonctif","Indicatif","Conditionnel","Impératif"],ans:1,expl:"'Après que' se construit avec l'indicatif (≠ 'avant que' qui prend le subjonctif)."},
  {cat:"Les Modes",q:"L'infinitif est considéré comme un mode dit…",opts:["Personnel","Impersonnel (pas de marque de personne)","Défectif","Conjugué"],ans:1,expl:"L'infinitif est un mode impersonnel : il n'indique pas la personne."},
  {cat:"Les Modes",q:"'Si tu venais, nous sortirions.' — quel temps dans la principale ?",opts:["Indicatif imparfait","Conditionnel présent","Subjonctif présent","Impératif"],ans:1,expl:"Hypothèse peu probable : si + imparfait → conditionnel présent dans la principale."},
  {cat:"Les Modes",q:"'Si tu étais venu, nous aurions sorti.' — quel type de condition ?",opts:["Réalisable","Peu probable","Irréalisable (passé, non réalisée)","Certaine"],ans:2,expl:"Si + plus-que-parfait → conditionnel passé : condition irréalisable dans le passé."},
  {cat:"Les Modes",q:"Le mode impératif en français a combien de personnes ?",opts:["6 personnes","3 personnes (tu, nous, vous)","2 personnes","4 personnes"],ans:1,expl:"L'impératif n'existe qu'à 3 personnes : 2e sg, 1ère pl, 2e pl. 'Viens, venons, venez.'"},
  {cat:"Les Modes",q:"Quel mode impersonnel peut servir de sujet ou COD dans une phrase ?",opts:["Gérondif","Participe présent","Infinitif","Impératif"],ans:2,expl:"L'infinitif peut être sujet : 'Lire est un plaisir.' ou COD : 'Il aime lire.'"},
  {cat:"Les Modes",q:"Dans 'Il faut que nous partions', quel mode est employé ?",opts:["Indicatif","Conditionnel","Subjonctif","Impératif"],ans:2,expl:"'Il faut que' + subjonctif — verbe de nécessité → subjonctif."},
  {cat:"Les Modes",q:"Le conditionnel peut exprimer un fait non certain, notamment dans…",opts:["Les proverbes","Les textes journalistiques ('Le président aurait démissionné.')","Les ordres","Les descriptions"],ans:1,expl:"Conditionnel journalistique : distance du locuteur par rapport à un fait non vérifié."},

  /* ── La Voix ── */
  {cat:"La Voix",q:"Quelle est la voix passive ?",opts:["Le sujet fait l'action","Le sujet subit l'action accomplie par un complément d'agent","Le sujet réfléchit l'action sur lui-même","Le sujet et l'objet sont identiques"],ans:1,expl:"Voix passive : 'Le chat est mangé par le chien.' — le sujet (le chat) subit l'action."},
  {cat:"La Voix",q:"La voix passive se forme avec…",opts:["Avoir + participe passé","Être + participe passé (accordé avec le sujet)","Se + infinitif","Faire + infinitif"],ans:1,expl:"Passif = être (conjugué) + participe passé. Ex. : 'La lettre est écrite par Marie.'"},
  {cat:"La Voix",q:"Dans 'Le roman a été écrit par Zola', quel est le complément d'agent ?",opts:["Le roman","a été écrit","par Zola","écrit"],ans:2,expl:"Le complément d'agent (introduit par 'par' ou 'de') indique qui fait vraiment l'action."},
  {cat:"La Voix",q:"Quel est l'effet stylistique principal du passif ?",opts:["Mettre en valeur l'agent","Mettre en valeur ce qui subit l'action ou effacer l'agent","Accélérer le rythme","Créer une hyperbole"],ans:1,expl:"Le passif permet d'effacer l'agent — utile pour insister sur le patient ou maintenir l'anonymat."},
  {cat:"La Voix",q:"'Il se lave.' — quel type de voix pronominale ?",opts:["Réciproque","Passive","Réfléchie (le sujet fait et subit l'action)","Lexicale"],ans:2,expl:"Pronominale réfléchie : le sujet agit sur lui-même."},
  {cat:"La Voix",q:"'Ils se battent.' — quel type de voix pronominale ?",opts:["Réfléchie","Réciproque (les sujets agissent l'un sur l'autre)","Passive","Lexicale"],ans:1,expl:"Pronominale réciproque : l'action est mutuelle entre plusieurs sujets."},
  {cat:"La Voix",q:"'Ce livre se lit facilement.' — quel type de voix pronominale ?",opts:["Réfléchie","Réciproque","Passive pronominale (= peut être lu)","Lexicale"],ans:2,expl:"Pronominale à sens passif : 'Ce livre se vend bien' = 'Ce livre est vendu bien'."},
  {cat:"La Voix",q:"'Il s'évanouit' — quel type de voix pronominale ?",opts:["Réfléchie","Réciproque","Passive","Lexicale (verbe essentiellement pronominal)"],ans:3,expl:"'S'évanouir' est essentiellement pronominal — pas de forme non pronominale active."},
  {cat:"La Voix",q:"La voix active se distingue car…",opts:["Le sujet subit l'action","Le sujet accomplit l'action","Il n'y a pas de complément d'objet","Le verbe est toujours à l'infinitif"],ans:1,expl:"Voix active : 'Marie écrit la lettre.' Le sujet (Marie) fait l'action."},
  {cat:"La Voix",q:"Peut-on toujours transformer une phrase active en phrase passive ?",opts:["Oui, toujours","Non — seulement avec un verbe transitif direct","Seulement au présent","Seulement avec être"],ans:1,expl:"Seuls les verbes transitifs directs (avec un COD) peuvent se mettre à la voix passive."},
  {cat:"La Voix",q:"'Marie aime Pierre.' → forme passive correcte ?",opts:["Pierre est aimé par Marie.","Marie est aimée par Pierre.","Pierre aime Marie.","Marie et Pierre s'aiment."],ans:0,expl:"COD (Pierre) devient sujet du passif ; sujet actif (Marie) → complément d'agent 'par Marie'."},
  {cat:"La Voix",q:"Quelle est la construction de la voix pronominale ?",opts:["Avoir + participe","Être + participe","Se + verbe conjugué","En + participe présent"],ans:2,expl:"La voix pronominale se construit toujours avec le pronom réfléchi (me, te, se, nous, vous, se)."},
  {cat:"La Voix",q:"Le complément d'agent au passif est introduit par…",opts:["à ou de","par ou de","en ou par","avec ou par"],ans:1,expl:"Le complément d'agent est introduit par 'par' (le plus courant) ou 'de' (verbes de sentiment)."},
  {cat:"La Voix",q:"'Il est admiré de tous.' — quel verbe justifie l'usage de 'de' ?",opts:["Verbe de mouvement","Verbe de sentiment ou d'état","Verbe de perception","Verbe de parole"],ans:1,expl:"Avec les verbes de sentiment (aimer, admirer, respecter…), le C. d'agent peut être introduit par 'de'."},

  /* ── Les Propositions — Bloc 2 ── */
  {cat:"Les Propositions",q:"Dans 'L'homme qui marche vite est pressé', la relative est…",opts:["Explicative (facultative)","Déterminative (restreint le sens : pas tous les hommes, seulement celui-là)","Participiale","Incise"],ans:1,expl:"Déterminative : sans elle, le sens change radicalement. Elle est essentielle et non séparée par virgule."},
  {cat:"Les Propositions",q:"Dans 'Mon père, qui aime le jardinage, est dehors', la relative est…",opts:["Déterminative","Explicative (entre virgules, apporte une précision facultative)","Completive","Incise"],ans:1,expl:"Explicative : entre virgules, elle précise sans restreindre. Supprimer la relative ne change pas l'essentiel."},
  {cat:"Les Propositions",q:"'Je suis triste que tu partes.' — quelle fonction joue la complétive ?",opts:["COD","Sujet","Complément de l'adjectif 'triste'","Circonstancielle"],ans:2,expl:"Complément de l'adjectif : 'triste de quoi ?' → 'que tu partes'. La complétive dépend de l'adjectif."},
  {cat:"Les Propositions",q:"Combien de propositions y a-t-il dans 'Je sais que tu sais que je sais' ?",opts:["2","3","4","1"],ans:1,expl:"3 propositions : principale ('Je sais') + complétive 1 ('que tu sais') + complétive 2 ('que je sais')."},
  {cat:"Les Propositions",q:"Quelle est l'antécédent de 'qui' dans 'J'ai rencontré des gens qui voyagent' ?",opts:["J'ai rencontré","des gens","voyagent","J'ai"],ans:1,expl:"L'antécédent est le nom que la relative complète — ici 'des gens'. 'Qui' reprend 'des gens'."},
  {cat:"Les Propositions",q:"'Il parle vite afin qu'on ne le comprenne pas.' — quel type de circonstancielle ?",opts:["Cause","Conséquence","But (pour que = afin que)","Temps"],ans:2,expl:"Circonstancielle de but : 'afin que' introduit l'objectif visé par l'action."},
  {cat:"Les Propositions",q:"'Il parle si vite qu'on ne le comprend pas.' — quel type de circonstancielle ?",opts:["Cause","Conséquence (si…que)","But","Opposition"],ans:1,expl:"'Si…que' + résultat = conséquence. L'intensité entraîne un résultat."},
  {cat:"Les Propositions",q:"'Alors qu'il pleut, elle sort sans parapluie.' — quel type de circonstancielle ?",opts:["Condition","Cause","Concession ou opposition","Temps"],ans:2,expl:"'Alors que' peut exprimer l'opposition (contraste) ou la concession selon le contexte."},
  {cat:"Les Propositions",q:"La conjonction 'puisque' introduit une circonstancielle de…",opts:["But","Cause (cause connue et acceptée des deux interlocuteurs)","Concession","Condition"],ans:1,expl:"'Puisque' = cause présentée comme évidente et partagée. 'Parce que' peut introduire une cause nouvelle."},
  {cat:"Les Propositions",q:"'À moins que tu ne viennes, je partirai.' — quel type de circonstancielle ?",opts:["Concession","Cause","Condition","But"],ans:2,expl:"'À moins que' = condition restrictive (= sauf si). C'est une variante de la circonstancielle de condition."},

  /* ── Les Propositions (suite) — Bloc 2 ── */
  {cat:"Les Propositions (suite)",q:"La participiale 'Le soleil couché, nous rentrâmes' exprime…",opts:["Une cause directe","Une circonstance temporelle ou causale sans subordonnant","Un but","Une concession"],ans:1,expl:"La participiale est un substitut de la circonstancielle — ici temporelle (après le coucher du soleil)."},
  {cat:"Les Propositions (suite)",q:"L'incise 'dit-il' dans un récit sert à…",opts:["Introduire une complétive","Signaler le locuteur d'une parole sans guillemets supplémentaires","Introduire une participiale","Exprimer la cause"],ans:1,expl:"L'incise s'insère dans ou après les paroles directes pour attribuer la parole à un locuteur."},
  {cat:"Les Propositions (suite)",q:"'J'entends les oiseaux chanter' — quel type de complétive ?",opts:["Complétive en que","Interrogative indirecte","Complétive infinitive (après verbe de perception)","Participiale"],ans:2,expl:"Complétive infinitive : le sujet de 'chanter' (oiseaux) ≠ sujet de 'j'entends'. Verbe de perception."},
  {cat:"Les Propositions (suite)",q:"'Je ne sais pas si tu viens.' — quel type de complétive ?",opts:["Complétive en que","Interrogative indirecte introduite par 'si'","Participiale","Relative"],ans:1,expl:"Interrogative indirecte = forme de complétive qui transpose une question directe ('Viens-tu ?') en subordonnée."},
  {cat:"Les Propositions (suite)",q:"Peut-on identifier l'incise à une subordonnée ?",opts:["Oui, c'est une subordonnée circonstancielle","Non, l'incise n'est pas une subordonnée — elle est syntaxiquement indépendante","Oui, c'est une relative","Non, c'est une coordonnée"],ans:1,expl:"L'incise est une proposition à part entière, insérée dans une autre, sans lien de subordination formel."},

  /* ── La Négation — Bloc 2 ── */
  {cat:"La Négation",q:"'Il ne dort jamais plus de six heures.' — combien de forclusifs ?",opts:["1 ('jamais')","2 ('jamais' + 'plus')","0","3"],ans:1,expl:"Deux forclusifs cumulés : 'jamais' + 'plus'. La négation est doublement renforcée."},
  {cat:"La Négation",q:"Comment transformer 'Il ne parle que le soir' en phrase affirmative ?",opts:["Il ne parle pas le soir.","Il parle seulement le soir.","Il parle toujours le soir.","Il parle rarement le soir."],ans:1,expl:"Ne…que = seulement. La transformation supprime la pseudo-négation et place 'seulement'."},
  {cat:"La Négation",q:"Le ne explétif est 'explétif' car…",opts:["Il renforce la négation","Il n'a aucune valeur négative réelle — il est stylistiquement présent sans nier","Il remplace 'pas'","Il est facultatif uniquement à l'écrit"],ans:1,expl:"Explétif = superflu au sens, mais obligatoire dans certains contextes formels (crainte, comparaison, avant que)."},
  {cat:"La Négation",q:"'Il est plus grand que je ne pensais.' — le 'ne' est…",opts:["Une négation totale","Un ne explétif (verbe de comparaison 'plus…que')","Un ne partiel","Un forclusif"],ans:1,expl:"Ne explétif après 'plus…que' — le sens n'est pas négatif, 'ne' est une trace stylistique du registre soutenu."},
  {cat:"La Négation",q:"Quelle phrase contient une négation lexicale par préfixe ?",opts:["Il ne vient pas.","Il est irresponsable.","Personne ne l'a vu.","Il n'est jamais là."],ans:1,expl:"'Irresponsable' : préfixe privatif ir- + responsible → négation du sens du mot, sans ne syntaxique."},
  {cat:"La Négation",q:"'Sans effort, rien ne s'obtient.' — quelle forme de négation pour 'sans' ?",opts:["Syntaxique totale","Syntaxique partielle","Lexicale par préposition","Lexicale par antonymie"],ans:2,expl:"'Sans' est une préposition de négation lexicale — elle nie sans passer par le système ne + forclusif."},
  {cat:"La Négation",q:"À l'oral familier, 'Je sais pas' est accepté car…",opts:["La règle n'existe plus","La chute du 'ne' est un phénomène courant à l'oral — le forclusif 'pas' suffit à marquer la négation","'Pas' remplace 'ne' définitivement","C'est une faute tolérée"],ans:1,expl:"À l'oral, 'ne' tombe fréquemment — le forclusif seul suffit. À l'écrit soutenu, les deux éléments restent obligatoires."},
  {cat:"La Négation",q:"'Il ne dit mot.' — quelle construction négative ?",opts:["Ne…pas","Ne…point","Ne seul (emploi soutenu, sans forclusif)","Ne…rien"],ans:2,expl:"'Ne dire mot' = ne…mot (archaïque) ou ne seul dans certains contextes figés. Registre littéraire."},

  /* ── Les Modes — Bloc 2 ── */
  {cat:"Les Modes",q:"Peut-on utiliser 'si' avec le subjonctif en français ?",opts:["Oui, toujours","Non — 'si' de condition se construit avec l'indicatif (si + imparfait ou présent)","Oui, avec le subjonctif présent","Seulement au passé"],ans:1,expl:"Si + subjonctif = incorrect en français standard. Si + imparfait (hypothèse) ou présent (possibilité)."},
  {cat:"Les Modes",q:"'Avant qu'il vienne' → quel mode ?",opts:["Indicatif","Conditionnel","Subjonctif","Impératif"],ans:2,expl:"'Avant que' = subjonctif. ≠ 'après que' qui prend l'indicatif."},
  {cat:"Les Modes",q:"Le conditionnel de politesse dans 'Je voudrais un café' exprime…",opts:["Une condition irréalisable","Un fait non certain","Un souhait exprimé avec douceur et politesse","Un ordre déguisé"],ans:2,expl:"Conditionnel de politesse = atténuation de la demande. Plus poli que 'je veux'."},
  {cat:"Les Modes",q:"'Douter que' se construit avec…",opts:["L'indicatif","Le conditionnel","Le subjonctif (verbe de doute)","L'impératif"],ans:2,expl:"'Je doute qu'il vienne.' — douter = verbe de doute → subjonctif."},
  {cat:"Les Modes",q:"'Il faudrait partir.' — quelle valeur du conditionnel ?",opts:["Hypothèse avec si","Politesse ou atténuation d'un conseil","Fait non certain journalistique","Ordre futur"],ans:1,expl:"'Faudrait' = conditionnel de conseil atténué, plus doux que l'impératif."},
  {cat:"Les Modes",q:"Le gérondif 'en travaillant' est invariable car…",opts:["C'est un verbe conjugué","C'est un mode impersonnel — il ne s'accorde pas","C'est un adjectif","C'est un nom"],ans:1,expl:"Le gérondif = mode impersonnel. Il ne s'accorde jamais, contrairement à l'adjectif verbal."},
  {cat:"Les Modes",q:"'Sachant cela, il décida de partir.' — quel mode est 'sachant' ?",opts:["Gérondif","Infinitif","Participe présent (cause/manière, invariable)","Subjonctif"],ans:2,expl:"Participe présent = radical + ant, invariable. Il exprime une cause ou une simultanéité."},
  {cat:"Les Modes",q:"'Il a dit qu'il viendrait.' — quel temps dans la subordonnée ?",opts:["Subjonctif présent","Indicatif futur","Conditionnel présent (concordance des temps)","Indicatif imparfait"],ans:2,expl:"Concordance des temps au discours indirect : dire au présent → il vient ; dire au passé → il viendrait."},
  {cat:"Les Modes",q:"L'infinitif peut être sujet d'une phrase. Exemple correct ?",opts:["Il aime.","Lire est un plaisir.","Que tu partes me plait.","Il faut partir."],ans:1,expl:"'Lire est un plaisir.' : l'infinitif 'lire' est sujet du verbe être. Mode impersonnel utilisé comme nom."},
  {cat:"Les Modes",q:"'Bien qu'il soit en retard, il reste calme.' — pourquoi le subjonctif ?",opts:["Parce que c'est une cause","Parce que 'bien que' exige le subjonctif (conjonction de concession)","Parce que c'est un souhait","Parce que c'est au passé"],ans:1,expl:"Bien que, quoique, encore que = conjonctions de concession → toujours suivies du subjonctif."},
  {cat:"Les Modes",q:"'Il se peut qu'elle arrive.' — quel mode après 'il se peut que' ?",opts:["Indicatif","Conditionnel","Subjonctif (expression de l'incertitude)","Infinitif"],ans:2,expl:"'Il se peut que' = incertitude → subjonctif. 'Il est certain que' = certitude → indicatif."},

  /* ── La Voix — Bloc 2 ── */
  {cat:"La Voix",q:"Transformer 'On a retrouvé le coupable' au passif donne…",opts:["Le coupable a retrouvé.","Le coupable a été retrouvé.","Le coupable était retrouvé.","On retrouvait le coupable."],ans:1,expl:"Passif : COD (le coupable) → sujet + être au même temps + participe passé accordé."},
  {cat:"La Voix",q:"Dans les textes scientifiques, le passif est souvent utilisé pour…",opts:["Mettre en valeur les chercheurs","Effacer les chercheurs et mettre en avant le phénomène étudié","Accélérer la lecture","Créer de l'émotion"],ans:1,expl:"'La réaction a été observée.' → l'agent (chercheur) est effacé pour objectiver le discours scientifique."},
  {cat:"La Voix",q:"'Les deux équipes se respectent.' — quel type de pronominale ?",opts:["Réfléchie","Réciproque (action mutuelle : ils se respectent l'un l'autre)","Passive pronominale","Lexicale"],ans:1,expl:"Réciproque : l'action est échangée entre les sujets pluriels. Tester : 'l'un l'autre' fonctionne."},
  {cat:"La Voix",q:"'Elle se souvient de tout.' — quel type de pronominale ?",opts:["Réfléchie","Réciproque","Lexicale (se souvenir n'existe qu'en pronominal)","Passive"],ans:2,expl:"Se souvenir, s'évanouir, se repentir = verbes essentiellement pronominaux — pas de forme active."},
  {cat:"La Voix",q:"'Ce vin se boit frais.' — quel type de pronominale ?",opts:["Réfléchie","Réciproque","Passive pronominale (= peut être bu frais)","Lexicale"],ans:2,expl:"Pronominale à sens passif : 'se boire' = 'être bu'. Très courant pour exprimer une propriété."},
  {cat:"La Voix",q:"Quel verbe NE PEUT PAS se mettre au passif ?",opts:["Manger","Écrire","Dormir (intransitif — pas de COD)","Voir"],ans:2,expl:"Dormir est intransitif — il n'a pas de COD. Sans COD, pas de passif possible."},
  {cat:"La Voix",q:"'Les Misérables ont été écrits par Victor Hugo.' — qui est le sujet grammatical ?",opts:["Victor Hugo","ont été écrits","Les Misérables","par"],ans:2,expl:"Au passif, le sujet grammatical est ce qui subit l'action — ici 'Les Misérables' (anciennement COD)."},
];

const GRAM_QCM_CATS = ["Toutes","Analyse de phrase","Les Propositions","Les Propositions (suite)","La Négation","Les Modes","La Voix"];
