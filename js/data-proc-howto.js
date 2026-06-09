/* Fiches « Comment ça marche ? » — page Procédés */
const PROC_HOWTO = {
  'Métaphore': {
    lead: 'On rapproche <strong>deux réalités</strong> sans mot comparatif (« comme », « tel »). L\'auteur dit que A <em>est</em> B : l\'image remplace le sens littéral.',
    steps: [
      { label: 'Repérer', html: 'Cherche un mot pris <strong>au sens figuré</strong> : « sa voix <em>est</em> un velours » — personne ne parle littéralement de velours.' },
      { label: 'Décortiquer', html: '<p class="proc-howto-ex">« Sa voix est un velours »</p><p>Domaine 1 : la voix · Domaine 2 : le velours (douceur, chaleur) → transfert de sens.</p>' },
    ],
    tips: ['Pas de « comme » : si tu vois « comme », c\'est une <strong>comparaison</strong>.', 'Interprète : que suggère l\'image ? (douceur, danger, beauté…)'],
  },
  'Comparaison': {
    lead: 'Même idée que la métaphore, mais le rapprochement est <strong>annoncé</strong> par un outil : « comme », « tel », « semblable à », « pareil à »…',
    steps: [
      { label: 'Repérer', html: 'Surligne l\'outil comparatif et les <strong>deux termes</strong> rapprochés.' },
      { label: 'Exemple', html: '<p class="proc-howto-ex">« Il était droit <mark class="proc-mk-h">comme</mark> un chêne »</p><p>Homme ↔ chêne : solidité, fierté, stature — image <em>explicite</em> et claire.</p>' },
    ],
    tips: ['Métaphore = implicite · Comparaison = explicite avec « comme » / « tel ».', 'L\'effet : rendre l\'abstrait concret, guider l\'imaginaire du lecteur.'],
  },
  'Oxymore': {
    lead: 'Deux mots <strong>contradictoires</strong> sont réunis dans le <em>même groupe nominal</em> (souvent adj. + nom).',
    steps: [
      { label: 'Repérer', html: 'Deux idées opposées <strong>collées ensemble</strong> : obscur + clarté, vivant + mort, chaste + ardent…' },
      { label: 'Exemple', html: '<p class="proc-howto-ex">« Cette <mark class="proc-mk-h">obscure clarté</mark> » (Corneille)</p><p>Impossible logiquement → tension poétique, paradoxe, ambiguïté.</p>' },
    ],
    tips: ['≠ Antithèse : l\'oxymore <strong>fusionne</strong> les opposés ; l\'antithèse les <strong>juxtapose</strong> en parallèle.', 'Interprète le paradoxe vécu (amour/haine, vie/mort…).'],
  },
  'Antithèse': {
    lead: 'Deux idées ou mots <strong>opposés</strong> sont mis face à face, souvent dans une <strong>structure parallèle</strong> (même syntaxe).',
    steps: [
      { label: 'Repérer', html: 'Cherche deux pôles opposés : jour/nuit, amour/haine, riches/pauvres, vie/mort…' },
      { label: 'Exemple', html: '<p class="proc-howto-ex">« Les dieux ont soif, les hommes ont faim »</p><p>Structure symétrique + opposition → le contraste met chaque terme en relief.</p>' },
    ],
    tips: ['≠ Oxymore : ici les opposés restent <strong>distincts</strong>, ils ne fusionnent pas.', 'Effet : tension, choix moral, contraste dramatique.'],
  },
  'Litote': {
    lead: 'On dit <strong>volontairement moins</strong> que ce qu\'on pense pour que le lecteur comprenne <strong>plus</strong>.',
    steps: [
      { label: 'Repérer', html: 'Formulation <strong>atténuée</strong> ou négative qui cache une idée forte : « je ne te hais point » = je t\'aime.' },
      { label: 'Exemple', html: '<p class="proc-howto-ex">« Va, je ne te hais point » (Corneille)</p><p>La négation masque une passion → pudeur, intensité contenue, sous-entendu.</p>' },
    ],
    tips: ['≠ Euphémisme (adoucir une réalité dure) · ≠ Ironie (dire le contraire).', 'Hyperbole = exagérer · Litote = minimiser pour amplifier.'],
  },
  'Anaphore': {
    lead: 'Un <strong>même mot ou groupe</strong> est répété en <strong>début</strong> de phrase ou de vers.',
    steps: [
      { label: 'Repérer', html: 'Plusieurs lignes commencent pareil : « Que… », « Je… », « Rome… », « J\'accuse… »' },
      { label: 'Exemple', html: '<p class="proc-howto-ex">« <mark class="proc-mk-h">Rome</mark>, l\'unique objet… / <mark class="proc-mk-h">Rome</mark>, à qui vient ton bras… »</p><p>Martèlement → insistance, rythme incantatoire, émotion obsédante.</p>' },
    ],
    tips: ['≠ Épiphore (répétition en <strong>fin</strong> de phrase).', 'Compte combien de reprises : plus il y en a, plus l\'effet est fort.'],
  },
  'Hyperbole': {
    lead: 'Exagération <strong>volontaire</strong> : on pousse au-delà du vraisemblable pour frapper l\'imagination.',
    steps: [
      { label: 'Repérer', html: 'Chiffres impossibles, superlatifs extrêmes, « jamais », « mille », « toujours », « le plus… du monde ».' },
      { label: 'Exemple', html: '<p class="proc-howto-ex">« Je t\'ai dit <mark class="proc-mk-h">mille fois</mark>… »</p><p>Personne ne compte mille fois → insistance comique ou dramatique.</p>' },
    ],
    tips: ['Précise l\'effet : comique, tragique, pathétique ou polémique ?', '≠ Litote : l\'hyperbole dit <strong>plus</strong>, la litote dit <strong>moins</strong>.'],
  },
  'Gradation': {
    lead: 'Plusieurs éléments sont rangés par <strong>intensité croissante</strong> (ascendante) ou <strong>décroissante</strong> (descendante).',
    steps: [
      { label: 'Repérer', html: 'Les mots forment une <strong>progression</strong> : souffrir → agoniser → mourir · ou l\'inverse.' },
      { label: 'Exemple', html: '<p class="proc-howto-ex">« Il souffrit, agonisa, mourut » (Hugo)</p><p>Gradation <strong>ascendante</strong> → crescendo dramatique vers la mort.</p>' },
    ],
    tips: ['≠ Énumération : la gradation exige un <strong>ordre d\'intensité</strong>.', 'Interprète le sommet (ou la chute) : où mène la progression ?'],
  },
  'Énumération': {
    lead: 'Une <strong>liste</strong> de mots ou groupes juxtaposés, <strong>sans ordre d\'intensité obligatoire</strong>.',
    steps: [
      { label: 'Repérer', html: 'Virgules en série, « et » qui enchaîne, accumulation de noms ou de verbes.' },
      { label: 'Exemple', html: '<p class="proc-howto-ex">« Femmes, moinillon, enfants, tout passa » (La Fontaine)</p><p>Liste → universalité, plénitude, insistance par le nombre.</p>' },
    ],
    tips: ['≠ Gradation : pas besoin que l\'intensité monte ou descende.', 'Effet fréquent : abondance, oppression, généralisation (« tout le monde »).'],
  },
  'Accumulation': {
    lead: 'Comme l\'énumération, mais l\'effet visé est surtout la <strong>masse</strong>, la pesanteur ou l\'accélération du rythme.',
    steps: [
      { label: 'Repérer', html: 'Beaucoup d\'éléments <strong>juxtaposés</strong> qui s\'additionnent visuellement ou auditivement.' },
      { label: 'Exemple', html: '<p class="proc-howto-ex">« Rouge, vert, jaune, bleu, tout semblait vivre »</p><p>Effet de plénitude, saturation, parfois étouffement.</p>' },
    ],
    tips: ['Proche de l\'énumération ; l\'important est l\'effet de <strong>masse</strong>.', 'Peut ralentir (liste lourde) ou accélérer (rythme haché).'],
  },
  'Allitération': {
    lead: 'La <strong>même consonne</strong> (le son) revient dans plusieurs mots proches. Lis à voix haute.',
    steps: [
      { label: 'Étape 1 · Le son', html: 'Repère un son consonantique répété : <strong>[s]</strong>, <strong>[r]</strong>, <strong>[l]</strong>, <strong>[ch]</strong>…' },
      { label: 'Étape 2 · L\'exemple', html: '<p class="proc-howto-ex">« Pour qui sont ces <mark class="proc-mk-s">s</mark>erpent<mark class="proc-mk-s">s</mark> qui <mark class="proc-mk-s">s</mark>ifflent <mark class="proc-mk-s">s</mark>ur vo<mark class="proc-mk-s">s</mark> tête<mark class="proc-mk-s">s</mark> ? » (Racine)</p><p>[s] partout → imite le sifflement.</p>' },
    ],
    tips: ['C\'est le <strong>son</strong>, pas la lettre · ≠ rime · ≠ assonance (voyelle).'],
    foot: '<div class="proc-howto-compare"><span><strong>Allitération</strong> = consonne · <strong>Assonance</strong> = voyelle</span></div>',
  },
  'Assonance': {
    lead: 'La <strong>même voyelle</strong> (le son) revient dans plusieurs mots proches. Surtout audible à voix haute.',
    steps: [
      { label: 'Étape 1 · Le son', html: 'Note le son entre crochets : <strong>[ɔ̃]</strong> (bon), <strong>[a]</strong>, <strong>[i]</strong>, <strong>[u]</strong>…' },
      { label: 'Étape 2 · L\'exemple', html: '<p class="proc-howto-ex">« Les <mark class="proc-mk-o">san</mark>glots l<mark class="proc-mk-o">ong</mark>s / des vi<mark class="proc-mk-o">ol</mark>ons / de l\'<mark class="proc-mk-o">aut</mark>omne » (Verlaine)</p><p>[ɔ̃] → plainte, mélancolie.</p>' },
    ],
    tips: ['L\'orthograpie varie (« on », « om », « en ») · ≠ rime · souvent combinée avec l\'allitération.'],
    foot: '<div class="proc-howto-compare"><span><strong>Allitération</strong> = consonne · <strong>Assonance</strong> = voyelle</span></div>',
  },
  'Personnification': {
    lead: 'On prête des <strong>traits humains</strong> (parler, agir, ressentir) à un animal, un objet ou une abstraction.',
    steps: [
      { label: 'Repérer', html: 'Un non-humain <strong>fait quelque chose d\'humain</strong> : la nature pleure, la mort parle, le temps fuit…' },
      { label: 'Exemple', html: '<p class="proc-howto-ex">« La nature pleurait »</p><p>La nature ne pleure pas littéralement → animation du monde, émotion.</p>' },
    ],
    tips: ['≠ Métaphore simple : ici le non-humain <strong>agit</strong> comme un agent.', 'Fréquent en poésie, fable et description lyrique.'],
  },
  'Enjambement': {
    lead: 'La <strong>phrase ne s\'arrête pas</strong> à la fin du vers : elle déborde sur le vers suivant.',
    steps: [
      { label: 'Repérer', html: 'À la fin d\'un vers, <strong>pas de ponctuation forte</strong> (point, point d\'interrogation) : la phrase continue.' },
      { label: 'Exemple', html: '<p class="proc-howto-ex">« …poussés vers de nouveaux rivages, / Dans la nuit éternelle emportés… » (Baudelaire)</p><p>Le sens « tombe » sur le vers suivant → fluidité, mouvement, tension.</p>' },
    ],
    tips: ['Effet inverse du rejet (mot isolé en tête du vers suivant).', 'Peut mimer l\'instabilité, l\'emportement, la continuité.'],
  },
  'Rejet': {
    lead: 'Après un enjambement, un mot (ou petit groupe) est <strong>relégué seul en tête</strong> du vers suivant.',
    steps: [
      { label: 'Repérer', html: 'Un mot important commence le vers, <strong>isolé</strong>, alors que la phrase a déjà commencé avant.' },
      { label: 'Exemple', html: '<p class="proc-howto-ex">« …et le vent / <mark class="proc-mk-h">Du</mark> soir agitait les feuilles »</p><p>« Du » en rejet → mise en valeur, rupture rythmique.</p>' },
    ],
    tips: ['Toujours lié à un enjambement.', 'Le mot rejeté est souvent chargé de sens ou d\'émotion.'],
  },
  'Contre-rejet': {
    lead: 'Un mot est <strong>placé en fin de vers</strong>, alors que la phrase continue sur le vers d\'après — effet de suspension.',
    steps: [
      { label: 'Repérer', html: 'Le vers se termine par un mot qui <strong>anticipe</strong> la suite ; le sens n\'est complet qu\'au vers suivant.' },
      { label: 'Exemple', html: '<p class="proc-howto-ex">« …vers de nouveaux <mark class="proc-mk-h">rivages</mark> / Dans la nuit… »</p><p>« rivages » attend la suite → attente, retard du sens.</p>' },
    ],
    tips: ['≠ Rejet : le mot clé est en <strong>fin</strong> de vers, pas en début du suivant.', 'Crée une pause avant le débordement du sens.'],
  },
  'Césure': {
    lead: 'Pause rythmique <strong>au milieu du vers</strong>, souvent après la 6<sup>e</sup> syllabe en alexandrin (|).',
    steps: [
      { label: 'Repérer', html: 'Coupe le vers en deux moitiés (hémistiches) : respiration, ponctuation ou coupure syntaxique au centre.' },
      { label: 'Exemple', html: '<p class="proc-howto-ex">« Les sanglots longs | des violons de l\'automne »</p><p>Équilibre 6 + 6 syllabes → solennité, respiration, mise en relief.</p>' },
    ],
    tips: ['Typique de l\'alexandrin classique.', 'La césure peut tomber sur un mot important ou créer une surprise.'],
  },
  'Alexandrin': {
    lead: 'Vers de <strong>douze syllabes</strong>, référence du théâtre et de la poésie classique (Racine, Hugo, Baudelaire).',
    steps: [
      { label: 'Compter', html: 'Compte les syllabes (e muet compte ou non selon la règle du « e » caduc devant consonne).' },
      { label: 'Analyser', html: '<p>12 syllabes → souvent une <strong>césure</strong> au milieu, plus enjambements, rejets, rimes.</p><p>Effet : solennité, régularité, souffle noble.</p>' },
    ],
    tips: ['Ne confonds pas avec le sonnet (forme) ni le vers libre (sans métrique fixe).', 'Observe comment la césure et l\'enjambement modulent le rythme.'],
  },
  'Rimes croisées': {
    lead: 'Schéma <strong>ABAB</strong> : la rime A entoure la rime B dans chaque strophe.',
    steps: [
      { label: 'Repérer', html: 'Note les sons en fin de vers : 1<sup>er</sup> et 3<sup>e</sup> riment (A), 2<sup>e</sup> et 4<sup>e</sup> riment (B).' },
      { label: 'Schéma', html: '<p class="proc-howto-ex">ABAB — ex. sonnet : quatrains souvent croisés (CDCD…)</p><p>Effet : équilibre, légèreté, progression harmonieuse.</p>' },
    ],
    tips: ['≠ Rimes plates (AABB) · ≠ Rimes embrassées (ABBA).', 'Repère la lettre de rime sur chaque vers du poème.'],
  },
  'Rimes embrassées': {
    lead: 'Schéma <strong>ABBA</strong> : les rimes A encadrent les rimes B.',
    steps: [
      { label: 'Repérer', html: 'Vers 1 et 4 riment (A), vers 2 et 3 riment (B) — effet d\'<strong>encadrement</strong>.' },
      { label: 'Schéma', html: '<p class="proc-howto-ex">ABBA — fréquent chez Apollinaire (« Sous le pont Mirabeau… »)</p><p>Effet : circularité, miroir, clôture.</p>' },
    ],
    tips: ['Les rimes B sont « prises en sandwich » par les rimes A.', 'Renforce l\'unité de la strophe.'],
  },
  'Rimes plates': {
    lead: 'Schéma <strong>AABB</strong> : deux rimes se suivent deux à deux.',
    steps: [
      { label: 'Repérer', html: 'Vers 1–2 riment (A), vers 3–4 riment (B) — enchaînement <strong>linéaire</strong>.' },
      { label: 'Schéma', html: '<p class="proc-howto-ex">AABB — ballades, chansons, strophes simples</p><p>Effet : fluidité chantante, régularité.</p>' },
    ],
    tips: ['La forme la plus simple à repérer.', 'Peut donner un rythme narratif ou mélodique.'],
  },
  'Sonnet': {
    lead: 'Poème fixe de <strong>14 vers</strong> : 2 quatrains (4 vers) + 2 tercets (3 vers).',
    steps: [
      { label: 'Structure', html: '<strong>Quatrains</strong> (8 vers) : exposition · <strong>Tercets</strong> (6 vers) : retournement ou synthèse (chute).' },
      { label: 'Au bac', html: 'Repère la forme, le schéma de rimes, et surtout le <strong>dernier tercet</strong> : souvent la chute ou la résolution.' },
    ],
    tips: ['Du Bellay, Ronsard, Labé, Baudelaire (« Le Cygne »)…', 'La contrainte concentre l\'argument en peu de vers.'],
  },
  'Vers libre': {
    lead: 'Vers <strong>sans métrique ni rimes imposées</strong> : le poète choisit son rythme (Verlaine, Rimbaud, Apollinaire, XX<sup>e</sup> s.).',
    steps: [
      { label: 'Repérer', html: 'Pas de nombre fixe de syllabes, pas de schéma de rimes obligatoire — mais souvent une <strong>musicalité</strong> interne (assonances, allitérations).' },
      { label: 'Analyser', html: 'Le sens et le rythme du discours priment · modernité, liberté, subjectivité.' },
    ],
    tips: ['≠ Vers libre ne veut pas dire « sans rythme ».', 'Cherche quand même les sonorités et les coupures de ligne significatives.'],
  },
  'Champ lexical': {
    lead: 'Ensemble de mots du <strong>même univers sémantique</strong> (même thème) dans un passage.',
    steps: [
      { label: 'Repérer', html: 'Regroupe les mots par thème : mort, amour, guerre, nature, nuit, joie…' },
      { label: 'Exemple', html: '<p class="proc-howto-ex">Mort : <mark class="proc-mk-h">tombeau</mark>, <mark class="proc-mk-h">cendres</mark>, <mark class="proc-mk-h">nuit</mark>, <mark class="proc-mk-h">silence</mark>, <mark class="proc-mk-h">linceul</mark></p><p>Convergence lexicale → atmosphère unitaire, idée directrice.</p>' },
    ],
    tips: ['Minimum 3–4 mots du même registre pour parler de champ lexical au bac.', 'Relie le champ au thème global du texte.'],
  },
};

/* Registres — contenu spécifique par tonalité */
const PROC_HOWTO_REGISTRE = {
  lyrique: {
    lead: 'Le texte exprime des <strong>sentiments personnels intenses</strong> : amour, nostalgie, mélancolie, joie intime.',
    steps: [
      { label: 'Repérer', html: '« Je » poétique, confessions, émotions directes, souvenirs, paysage intériorisé.' },
      { label: 'Auteurs', html: 'Verlaine, Lamartine, Ronsard, Louise Labé — subjectivité et identification émotionnelle.' },
    ],
    tips: ['Interprète l\'effet sur le lecteur : compassion, mélancolie, évasion…', 'Souvent lié au « je » et aux lexiques du cœur, du temps, de la nature.'],
  },
  épique: {
    lead: 'Faits <strong>grandiose</strong>, héros exaltés, souffle narratif collectif.',
    steps: [
      { label: 'Repérer', html: 'Batailles, exploits, vastes espaces, vocabulaire de la gloire, du courage, de l\'histoire.' },
      { label: 'Effet', html: 'Admiration, fierté, élévation — le individu s\'efface parfois devant le destin collectif.' },
    ],
    tips: ['Hugo (Légende des Siècles), épopée, récits héroïques.', 'Peut coexister avec le registre tragique ou pathétique.'],
  },
  tragique: {
    lead: 'Personnages broyés par une <strong>fatalité</strong> qu\'ils ne maîtrisent pas — terreur et pitié.',
    steps: [
      { label: 'Repérer', html: 'Destin, devoir, transgression, mort annoncée, peur des dieux, impuissance.' },
      { label: 'Exemple', html: 'Racine (<em>Phèdre</em>) : passion interdite + loi divine → catharsis.' },
    ],
    tips: ['≠ Pathétique : le tragique insiste sur la <strong>fatalité</strong> ; le pathétique sur la <strong>souffrance</strong>.', 'Effet : terreur, pitié, tension dramatique.'],
  },
  comique: {
    lead: 'Visée du <strong>rire</strong> : quiproquos, caricatures, situations absurdes, jeux de mots.',
    steps: [
      { label: 'Repérer', html: 'Molière : ruses, dupes, gestes, dialogues vifs · Ionesco : absurde, répétitions grotesques.' },
      { label: 'Effet', html: 'Divertissement — parfois critique sociale <em>déguisée</em> derrière le rire.' },
    ],
    tips: ['≠ Satirique : le comique vise surtout le rire ; la satire vise la <strong>dénonciation</strong>.', 'Registre comique + satirique = possible (Molière).'],
  },
  satirique: {
    lead: 'Critique <strong>mordante</strong> des mœurs, institutions ou idées — par le rire, l\'ironie, la dérision.',
    steps: [
      { label: 'Repérer', html: 'Grotesque, hyperbole moqueuse, décalage, portrait caricatural, second degré.' },
      { label: 'Exemple', html: 'Voltaire (<em>Candide</em>) : ironie contre l\'optimisme, absurdité du monde.' },
    ],
    tips: ['Le rire sert à <strong>dénoncer</strong>, pas seulement à amuser.', 'Registre satirique fréquent au bac (Lumières, conte philosophique).'],
  },
  pathétique: {
    lead: 'Visée de la <strong>compassion</strong> : souffrance d\'autrui, injustice, détresse — le lecteur est ému.',
    steps: [
      { label: 'Repérer', html: 'Victimes (enfants, pauvres, exclus), vocabulaire de la douleur, pitié, larmes, mort injuste.' },
      { label: 'Exemple', html: 'Hugo (mort de Gavroche) : enfant innocent + violence → indignation et empathie.' },
    ],
    tips: ['Effet : pitié, indignation morale, parfois appel à la justice.', 'Peut s\'allier au registre lyrique ou épique.'],
  },
};

function procRenderHowto(name) {
  let h = PROC_HOWTO[name];
  if (!h && /^Registre\s+/i.test(name)) {
    const reg = name.replace(/^Registre\s+/i, '').toLowerCase();
    h = PROC_HOWTO_REGISTRE[reg];
  }
  if (!h) {
    h = {
      lead: 'Repère le procédé dans le passage, cite les mots concernés, puis explique l\'<strong>effet</strong> sur le sens et sur le lecteur.',
      steps: [
        { label: 'Méthode IPCI', html: '<strong>I</strong> idée → <strong>P</strong>rocédé → <strong>C</strong>itation → <strong>I</strong>nterprétation (effet + sens).' },
        { label: 'Au bac', html: 'Ne te contente pas de nommer : dis <em>pourquoi</em> l\'auteur l\'emploie et <em>ce que ça produit</em>.' },
      ],
      tips: ['Relie toujours le procédé aux mots du texte.', 'Utilise un verbe d\'effet : traduit, renforce, souligne, provoque…'],
    };
  }

  const cols = h.steps.map(s => `
    <div class="proc-howto-box">
      <div class="proc-howto-label">${s.label}</div>
      ${s.html.startsWith('<p') ? s.html : `<p>${s.html}</p>`}
    </div>`).join('');

  const tips = h.tips?.length
    ? `<ul class="proc-howto-list">${h.tips.map(t => `<li>${t}</li>`).join('')}</ul>`
    : '';

  return `
    <div class="proc-howto">
      <div class="proc-howto-title">Comment ça marche ?</div>
      <p class="proc-howto-lead">${h.lead}</p>
      <div class="proc-howto-cols">${cols}</div>
      ${tips}
      ${h.foot || ''}
    </div>`;
}

/* ── Guides interprétation IPCI (partagés page Procédés + fiche GENERAL_PROCEDES) ── */
const PROC_INTERP_GUIDE = {
  'Métaphore': { tip: 'Repère l\'<strong>image</strong> et les deux réalités rapprochées sans « comme ». Explique ce que le transfert de sens révèle (symbolique, émotion, thème).', formula: '« La métaphore « … » rapproche … et … : l\'image traduit … et suggère … au lecteur. »' },
  'Comparaison': { tip: 'Repère l\'<strong>outil comparatif</strong> (« comme », « tel », « semblable à »). Montre ce que le rapprochement rend plus visible ou concret.', formula: '« La comparaison « … comme … » rapproche … et … : le lecteur visualise mieux … dans le passage. »' },
  'Oxymore': { tip: 'Identifie les <strong>deux termes contradictoires</strong> réunis dans un même groupe. Explique la tension ou le paradoxe vécu.', formula: '« L\'oxymore « … » associe deux opposés : la contradiction exprime … et condense … »' },
  'Antithèse': { tip: 'Repère les <strong>deux pôles opposés</strong> (structure parallèle). Explique ce que le contraste met en relief ou accentue.', formula: '« L\'antithèse entre « … » et « … » oppose … et … : le contraste souligne … »' },
  'Litote': { tip: 'Montre que l\'auteur dit <strong>moins pour faire entendre plus</strong>. Interprète le sous-entendu (souvent une émotion contenue).', formula: '« La litote « … » atténue la formule mais renforce en réalité … : le sous-entendu traduit … »' },
  'Anaphore': { tip: 'Repère le <strong>mot ou groupe répété en tête</strong> de phrase ou de vers. Explique l\'effet d\'insistance ou d\'incantation.', formula: '« L\'anaphore de « … » martèle … et crée un rythme incantatoire qui insiste sur … »' },
  'Hyperbole': { tip: 'Montre l\'<strong>exagération volontaire</strong>. Précise si l\'effet est dramatique, comique ou emphatique dans ce passage.', formula: '« L\'hyperbole « … » exagère … pour marquer l\'intensité de … et fixer l\'attention du lecteur. »' },
  'Gradation': { tip: 'Vérifie si l\'intensité <strong>monte ou descend</strong> (ascendante / descendante). Explique la progression dramatique ou émotionnelle.', formula: '« La gradation « … → … → … » organise une progression … : l\'escalade (ou la chute) concentre l\'effet sur … »' },
  'Énumération': { tip: 'Liste les éléments juxtaposés. Montre l\'effet de <strong>plénitude, universalité ou insistance</strong> (sans progression d\'intensité obligatoire).', formula: '« L\'énumération « …, …, … » multiplie les occurrences et insiste sur … par accumulation. »' },
  'Accumulation': { tip: 'Repère la <strong>masse d\'éléments juxtaposés</strong>. Distingue-la de la gradation : ici, pas d\'ordre d\'intensité obligatoire.', formula: '« L\'accumulation de « … » produit un effet de plénitude (ou d\'oppression) autour de … »' },
  'Allitération': { tip: 'Repère la <strong>consonne répétée</strong> (le son, pas seulement la lettre). Lie-la à un effet imitatif ou à l\'atmosphère.', formula: '« L\'allitération en [s] dans « serpents / sifflent / sur » mime le sifflement et renforce la menace du passage. »' },
  'Assonance': { tip: 'Repère la <strong>voyelle répétée</strong> (le son, ex. [ɔ̃] comme dans « bon »). Relie cette résonance à l\'atmosphère (mélancolie, plainte…).', formula: '« L\'assonance en [ɔ̃] dans « sanglots / longs / violons / automne » installe une plainte grave qui traduit la mélancolie automnale. »' },
  'Personnification': { tip: 'Montre quel <strong>trait humain</strong> est attribué à un animal, un objet ou une abstraction.', formula: '« La personnification « … » dote … de traits humains : … devient agent et dynamise … »' },
  'Enjambement': { tip: 'Montre que la <strong>phrase déborde du vers</strong>. Explique l\'effet rythmique (fluidité, tension, instabilité).', formula: '« L\'enjambement « … / … » brise le rythme attendu : le sens déborde et mime … »' },
  'Rejet': { tip: 'Repère le <strong>mot isolé en tête du vers suivant</strong>. Explique la mise en valeur et la rupture rythmique.', formula: '« Le rejet de « … » isole le mot et crée une emphase rythmique qui … »' },
  'Contre-rejet': { tip: 'Repère le <strong>mot anticipé en fin de vers</strong>. Explique la suspension avant le débordement du sens.', formula: '« Le contre-rejet de « … » retarde le sens et crée une attente qui … »' },
  'Césure': { tip: 'Repère la <strong>pause au milieu du vers</strong> (souvent après la 6<sup>e</sup> syllabe en alexandrin).', formula: '« La césure après « … | … » structure le vers en deux hémistiches et met en valeur … »' },
  'Alexandrin': { tip: 'Rappelle le <strong>vers de douze syllabes</strong>. Montre comment il accueille césure, rejet ou enjambement.', formula: '« L\'alexandrin impose une régularité solennelle ; ici, il … et sert … dans le passage. »' },
  'Rimes croisées': { tip: 'Schéma <strong>ABAB</strong> : explique l\'équilibre et la progression harmonieuse.', formula: '« Les rimes croisées (ABAB) créent un équilibre … et accompagnent … dans le poème. »' },
  'Rimes embrassées': { tip: 'Schéma <strong>ABBA</strong> : effet de miroir ou d\'enfermement.', formula: '« Les rimes embrassées (ABBA) encadrent … et produisent un effet de circularité autour de … »' },
  'Rimes plates': { tip: 'Schéma <strong>AABB</strong> : fluidité chantante et progression linéaire.', formula: '« Les rimes plates (AABB) assurent une régularité … et renforcent … »' },
  'Sonnet': { tip: 'Forme <strong>14 vers</strong> (2 quatrains + 2 tercets). Montre la chute possible au tercet final.', formula: '« Le sonnet concentre … ; le tercet final retourne ou synthétise … »' },
  'Vers libre': { tip: 'Absence de métrique fixe : le <strong>rythme et le sens</strong> priment sur la contrainte formelle.', formula: '« Le vers libre libère le rythme : ici, il … et marque la modernité / la subjectivité de … »' },
  'Champ lexical': { tip: 'Regroupe les mots du <strong>même univers sémantique</strong>. Explique l\'atmosphère ou l\'idée directrice.', formula: '« Le champ lexical de … (« … », « … », « … ») crée une atmosphère … et insiste sur … »' },
};

function procGetHowtoData(name) {
  if (PROC_HOWTO[name]) return PROC_HOWTO[name];
  if (/^Registre\s+/i.test(name)) {
    const reg = name.replace(/^Registre\s+/i, '').toLowerCase();
    return PROC_HOWTO_REGISTRE[reg] || null;
  }
  return null;
}

function procGetInterpGuideData(name, cat) {
  if (PROC_INTERP_GUIDE[name]) return PROC_INTERP_GUIDE[name];
  if (/^Registre/i.test(name)) {
    const reg = name.replace(/^Registre\s+/i, '').toLowerCase();
    const regTips = {
      lyrique: 'Expression du « je » et des sentiments intimes : amour, nostalgie, mélancolie…',
      épique: 'Souffle grandiose : exaltation du héros, faits d\'envergure, admiration.',
      tragique: 'Fatalité qui dépasse les personnages : terreur, pitié, catharsis.',
      comique: 'Visée du rire : situation, quiproquo, personnage, distanciation.',
      satirique: 'Dénonciation par l\'ironie et la dérision : mœurs, institutions, absurdités.',
      pathétique: 'Visée de la compassion : souffrance, pitié, indignation morale.',
    };
    return {
      tip: `Décris la tonalité ${reg} : ${regTips[reg] || 'quel sentiment domine et quelle visée (émouvoir, rire, dénoncer…) ?'}`,
      formula: `« Registre ${reg} : … traduit une tonalité ${reg} qui … — enjeu central du passage. »`,
    };
  }
  if (cat === 'Procédés narratifs') {
    return {
      tip: 'Précise qui voit / qui sait (focalisation) ou l\'effet sur le rythme du récit (ellipse, scène…).',
      formula: `« ${name} : … modifie la distance narrative (ou le rythme) et … »`,
    };
  }
  return {
    tip: 'Ne te contente pas de nommer le procédé : explique pourquoi l\'auteur l\'emploie et quel effet il produit.',
    formula: `« ${name} : « … » … traduit / renforce / souligne … et provoque … chez le lecteur. »`,
  };
}

function procRenderHowtoPrint(name) {
  const h = procGetHowtoData(name);
  if (!h) {
    return '<p class="gpf-howto-lead">Repère le procédé, cite les mots du texte, explique l\'effet sur le sens et le lecteur (IPCI).</p>';
  }
  const steps = h.steps.map(s =>
    `<li><strong>${s.label}</strong> — ${s.html.replace(/<\/?p>/g, '')}</li>`
  ).join('');
  const tips = h.tips?.length ? `<ul class="gpf-tips">${h.tips.map(t => `<li>${t}</li>`).join('')}</ul>` : '';
  return `<p class="gpf-howto-lead">${h.lead}</p><ol class="gpf-steps">${steps}</ol>${tips}${h.foot ? `<div class="gpf-foot">${h.foot}</div>` : ''}`;
}

/** Fiche corpus imprimable — GENERAL_PROCEDES */
function buildGeneralProcedesHtml() {
  if (typeof PROC_DATA === 'undefined' || !PROC_DATA.length) {
    return '<p>Procédés non chargés.</p>';
  }
  const n = PROC_DATA.length;
  let html = `
    <div class="general-procedes-fiche">
      <header class="gpf-head">
        <p class="gpf-id">GENERAL_PROCEDES</p>
        <h2 class="gpf-title">Tous les procédés — fiche récapitulative</h2>
        <p class="gpf-sub">Bac de Français · Première · ${n} procédés · Définition · Exemple · Effet · Comment ça marche · Interprétation IPCI</p>
        <p class="gpf-ipci"><strong>I</strong> idée → <strong>P</strong>rocédé → <strong>C</strong>itation → <strong>I</strong>nterprétation</p>
      </header>`;

  let cat = '';
  PROC_DATA.forEach((p, i) => {
    if (p.cat !== cat) {
      if (cat) html += '</section>';
      cat = p.cat;
      html += `<section class="gpf-cat"><h3 class="gpf-cat-title">${cat}</h3>`;
    }
    const guide = procGetInterpGuideData(p.name, p.cat);
    const prId = 'PR-' + String(i + 1).padStart(3, '0');
    html += `
      <article class="gpf-proc">
        <div class="gpf-proc-head">
          <span class="gpf-prid">${prId}</span>
          <h4 class="gpf-proc-name">${p.name}</h4>
          <span class="gpf-subcat">${p.sub}</span>
        </div>
        <dl class="gpf-dl">
          <dt>Définition</dt><dd>${p.def}</dd>
          <dt>Exemple</dt><dd class="gpf-ex">${p.ex}</dd>
          <dt>Effet</dt><dd>${p.effet}</dd>
        </dl>
        <div class="gpf-block">
          <div class="gpf-block-label">Comment ça marche ?</div>
          ${procRenderHowtoPrint(p.name)}
        </div>
        <div class="gpf-block gpf-block-ipci">
          <div class="gpf-block-label">Interprétation au bac</div>
          <p class="gpf-tip">${guide.tip}</p>
          <p class="gpf-formula">${guide.formula}</p>
        </div>
      </article>`;
  });
  if (cat) html += '</section>';
  html += `<footer class="gpf-footnote">Document <strong>GENERAL_PROCEDES</strong> · Corpus Bac de Français · généré à partir des fiches procédés (PR-001 → PR-${String(n).padStart(3, '0')}).</footer></div>`;
  return html;
}
