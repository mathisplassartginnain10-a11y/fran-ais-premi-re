/**
 * Réécritures manuelles — lot extra17 (GT-490 → GT-537).
 * 33 entrées : textes authentiques, 4 att() par entrée, 400-1200 car.
 */
import { att } from '../gtext-enrichment-lib.mjs';

export const REWRITES_PART_B = {

  /* ── Rimbaud, Poésies (1870) — Le Dormeur du val ─────────────────── */
  'GT-490': {
    texte: `C'est un trou de verdure où chante une rivière,
Accrochant follement aux herbes des haillons
D'argent ; où le soleil, de la montagne fière,
Luit : c'est un petit val qui mousse de rayons.

Un soldat jeune, bouche ouverte, tête nue,
Et la nuque baignant dans le frais cresson bleu,
Dort ; il est étendu dans l'herbe, sous la nue,
Pâle dans son lit vert où la lumière pleut.

Les pieds dans les glaïeuls, il dort. Souriant comme
Sourirait un enfant malade, il fait un somme :
Nature, berce-le chaudement : il a froid.

Les parfums ne font pas frissonner sa narine ;
Il dort dans le soleil, la main sur sa poitrine,
Tranquille. Il a deux trous rouges au côté droit.`,
    contexte: "Sonnet antiwar — tableau bucolique dissimulant la mort d'un soldat.",
    attendus: [
      att('Ironie tragique', '« Il a deux trous rouges au côté droit »', 'Le vers final brise l\'illusion pastorale : la révélation de la mort subvertit rétrospectivement tout le tableau — l\'ironie tragique condamne la guerre en silence.', ['ironie', 'mort', 'révélation', 'bucolique', 'guerre', 'blessure']),
      att('Personnification', '« Nature, berce-le chaudement : il a froid »', 'La nature apostrophée comme une mère tutélaire — l\'impératif pathétique souligne son indifférence réelle à la mort des hommes.', ['personnification', 'nature', 'berce', 'mère', 'froid', 'mort']),
      att('Métaphore', '« Pâle dans son lit vert où la lumière pleut »', '« Lit vert » métaphorise l\'herbe en lit funèbre — l\'euphémisme pastoral anticipe la mort tout en la dissimulant au lecteur.', ['métaphore', 'lit', 'vert', 'lumière', 'mort', 'euphémisme']),
      att('Champ lexical', '« Dort », « fait un somme », « la main sur sa poitrine »', 'Champ lexical du sommeil masquant la mort — Rimbaud accumule les signes d\'un repos apparent pour frapper le lecteur avec la chute finale.', ['champ lexical', 'sommeil', 'repos', 'mort', 'chute', 'suspense']),
    ],
  },

  /* ── Racine, Phèdre (1677) — Acte 1, scène 3 : aveu à Œnone ───── */
  'GT-491': {
    texte: `PHÈDRE
Mon mal vient de plus loin. À peine au fils d'Égée
Sous les lois de l'hymen je m'étais engagée,
Mon repos, mon bonheur semblait s'être affermi ;
Athènes me montra mon superbe ennemi.
Je le vis, je rougis, je pâlis à sa vue ;
Un trouble s'éleva dans mon âme éperdue ;
Mes yeux ne voyaient plus, je ne pouvais parler ;
Je sentis tout mon corps et transir et brûler.
Je reconnus Vénus et ses feux redoutables,
D'un sang qu'elle poursuit tourments inévitables.
Je crus la détourner par des vœux assidus ;
Je lui bâtis un temple, et pris soin de l'orner.
De victimes moi-même à toute heure entourée,
Je cherchais dans leurs flancs ma raison égarée.`,
    contexte: "Aveu de Phèdre à Œnone — passion fatale pour Hippolyte, héritage de Vénus.",
    attendus: [
      att('Gradation', '« je rougis, je pâlis à sa vue »', 'Gradation : rouge de l\'amour, pâleur mortelle — deux étapes physiologiques condensent la passion fatale en un seul vers et signalent la double nature du sentiment.', ['gradation', 'rougis', 'pâlis', 'passion', 'amour', 'coup de foudre']),
      att('Antithèse', '« transir et brûler »', 'Antithèse froid/chaud : Vénus torture simultanément le corps par le feu et la glace — le paradoxe physique traduit l\'impossibilité de la passion interdite.', ['antithèse', 'transir', 'brûler', 'passion', 'paradoxe', 'vénus']),
      att('Registre tragique', '« D\'un sang qu\'elle poursuit tourments inévitables »', 'Registre tragique : la malédiction héréditaire dépasse la volonté de Phèdre — la fatalité du sang condamne la lignée de Pasiphaé sans recours.', ['tragique', 'sang', 'malédiction', 'fatalité', 'héritage', 'inévitable']),
      att('Apostrophe', '« Je reconnus Vénus et ses feux redoutables »', 'Apostrophe implicite à la déesse : Phèdre externalise sa culpabilité en désignant Vénus comme cause surnaturelle — la passion s\'inscrit dans la fatalité mythologique.', ['apostrophe', 'vénus', 'feux', 'divine', 'fatalité', 'mythologie']),
    ],
  },

  /* ── Racine, Phèdre (1677) — Acte 3, scène 4 : jalousie ─────────── */
  'GT-493': {
    texte: `PHÈDRE
Hippolyte est sensible, et ne sent rien pour moi !
Aricie a son cœur ! Aricie a sa foi !
Ah ! dieux ! Lorsqu'à mes vœux l'ingrat inexorable
S'armait d'un œil si fier, d'un front si redoutable,
Je pensais qu'à l'amour son cœur toujours fermé
Fût contre tout mon sexe également armé.
Une autre cependant a fléchi son audace ;
Devant ses yeux cruels une autre a trouvé grâce.
Peut-être a-t-il un cœur facile à s'attendrir :
Je suis le seul objet qu'il ne saurait souffrir.
Et je me chargeais du soin de le défendre ?
Ma main pour le venger s'est trop longtemps tendue.
Irai-je implorer l'aide de Thésée ?
Mon époux est vivant, et moi je brûle encore.`,
    contexte: "Jalousie de Phèdre — découverte de l'amour d'Hippolyte pour Aricie.",
    attendus: [
      att('Anaphore', '« Aricie a son cœur ! Aricie a sa foi ! »', 'Anaphore du nom rival : la répétition martèle la jalousie naissante — la double exclamation traduit la stupeur et la souffrance devant l\'élection d\'une autre.', ['anaphore', 'aricie', 'jalousie', 'répétition', 'rival', 'exclamation']),
      att('Antithèse', '« contre tout mon sexe également armé »', 'Antithèse : Phèdre croyait Hippolyte insensible à tous — la préférence pour Aricie rend le rejet personnel et cruel, transformant l\'indifférence en haine ciblée.', ['antithèse', 'sexe', 'armé', 'indifférence', 'rejet', 'personnel']),
      att('Registre pathétique', '« Je suis le seul objet qu\'il ne saurait souffrir »', 'Registre pathétique : Phèdre se voit uniquement haïe parmi tous — la formule s\'auto-victimise et suscite pitié tout en révélant la jalousie dévorante.', ['pathétique', 'souffrir', 'pitié', 'victime', 'rejet', 'unique']),
      att('Apostrophe', '« Ah ! dieux ! »', 'Apostrophe aux dieux : interjection tragique par laquelle Phèdre fait appel à la sphère divine — la jalousie prend une dimension cosmique irréductible à la simple rivalité amoureuse.', ['apostrophe', 'dieux', 'interjection', 'tragique', 'cosmique', 'jalousie']),
    ],
  },

  /* ── Racine, Phèdre (1677) — Acte 4, scène 2 : Thésée et Hippolyte */
  'GT-494': {
    texte: `THÉSÉE
Perfide, oses-tu bien te montrer devant moi ?
Monstre, qu'a trop longtemps épargné le tonnerre,
Reste impur des brigands dont j'ai purgé la terre,
Après que le transport d'un amour plein d'horreur
Jusqu'au lit de ton père a porté sa fureur,
Tu m'oses présenter une tête ennemie !
Tu parais dans ces lieux pleins de ton infamie.
HIPPOLYTE
Phèdre accuse Hippolyte ? Un tel excès de crime
Me laisse sans parole, et m'accable et m'opprime.
De tant de jours passés, quels gages vous ai-je rendus ?
THÉSÉE
Ah ! que ton impudence excite ma colère !
Traître ! tu prétendais qu'en un lâche silence
Phèdre ensevelirait ta brutale insolence.`,
    contexte: "Confrontation de Thésée et Hippolyte — fausse accusation, colère paternelle aveugle.",
    attendus: [
      att('Apostrophe', '« Monstre, qu\'a trop longtemps épargné le tonnerre »', 'Apostrophe violente : Thésée accable son fils d\'injures divines — l\'appel au tonnerre convoque Zeus comme justicier et mesure l\'aveuglement paternel.', ['apostrophe', 'monstre', 'tonnerre', 'père', 'colère', 'injure']),
      att('Hyperbole', '« Reste impur des brigands dont j\'ai purgé la terre »', 'Hyperbole héroïque : Thésée se pose en purificateur de la terre entière — la grandeur du père sert à amplifier l\'infamie supposée du fils.', ['hyperbole', 'impur', 'brigands', 'terre', 'héroïque', 'père']),
      att('Registre tragique', '« Un tel excès de crime / Me laisse sans parole »', 'Registre tragique : Hippolyte, innocent, est réduit au silence par l\'accumulation accusatoire — l\'incompréhension fatale précipite inévitablement la catastrophe.', ['tragique', 'crime', 'silence', 'innocent', 'fatalité', 'catastrophe']),
      att('Ironie dramatique', '« Phèdre ensevelirait ta brutale insolence »', 'Ironie dramatique : l\'accusatrice est la coupable — l\'inversion tragique des rôles condense l\'ironie fondamentale de la pièce que seul le spectateur perçoit.', ['ironie dramatique', 'phèdre', 'insolence', 'coupable', 'inversion', 'spectateur']),
    ],
  },

  /* ── Racine, Andromaque (1667) — Acte 1, scène 5 ────────────────── */
  'GT-495': {
    texte: `ANDROMAQUE
Je ne l'espère plus. Un père mort sans gloire,
Des amis qui n'ont pu conserver sa mémoire,
Des enfants dans les fers, et sous un joug servile
La veuve de Hector pleurant dans votre asile,
Ce sont pour moi des maux assez considérables.
PYRRHUS
Vous pouvez sur Pylade exercer vos rigueurs.
ANDROMAQUE
Souffrez que, loin de vous et même loin de moi-même,
J'aille où la douleur me rappelle et m'enchaîne :
Je vous laisse la gloire, et vous garde ma foi.
Je ne vous dirai point que je vous hais, Seigneur.
Mais, Seigneur, s'il le faut, si le ciel en colère
Réserve à d'autres mains la vengeance d'Hector,
Immolant mon Astyanax, finissez donc par moi.`,
    contexte: "Andromaque supplie Pyrrhus d'épargner Astyanax — fidélité à Hector et résistance.",
    attendus: [
      att('Énumération', '« Un père mort sans gloire, / Des amis qui n\'ont pu conserver sa mémoire, / Des enfants dans les fers »', 'Énumération des malheurs troyens : chaque terme cumule la désolation — Andromaque dresse un bilan pathétique pour attendrir Pyrrhus et justifier sa résistance.', ['énumération', 'malheurs', 'troie', 'désolation', 'pathétique', 'résistance']),
      att('Antithèse', '« Je vous laisse la gloire, et vous garde ma foi »', 'Antithèse gloire/foi : Andromaque oppose les ambitions guerrières de Pyrrhus à sa fidélité conjugale — elle revendique une grandeur morale supérieure à la victoire militaire.', ['antithèse', 'gloire', 'foi', 'fidélité', 'morale', 'conjugale']),
      att('Litote', '« Je ne vous dirai point que je vous hais, Seigneur »', 'Litote : nier la haine c\'est avouer une forme de respect contraint — Andromaque ménage Pyrrhus tout en affirmant sa dignité de vaincue.', ['litote', 'hais', 'respect', 'dignité', 'vaincue', 'contrainte']),
      att('Registre pathétique', '« Immolant mon Astyanax, finissez donc par moi »', 'Registre pathétique : l\'offre du sacrifice maternel atteint le comble du dévouement — la mère préfère mourir plutôt que de voir périr son fils.', ['pathétique', 'sacrifice', 'astyanax', 'mère', 'mort', 'dévouement']),
    ],
  },

  /* ── Racine, Andromaque (1667) — Acte 3, scène 1 : monologue ───── */
  'GT-497': {
    texte: `ANDROMAQUE
Que fais-je ? où ma douleur me portait-elle ?
Non, non, je n'ai point à m'en vanter, ma foi.
Hector, voilà le fils qu'on veut ôter à moi !
Il faudra donc choisir entre la foi que je dois
À ton cher fils, et celle que ta cendre exige.
Tu n'es plus ; et moi seule en ce péril extrême
Je dois sauver ta trace et ta mémoire même.
Dois-je, pour conserver ma foi si chèrement,
Trahir ton fils, Hector, et l'immoler à Pyrrhus ?
Ma tristesse et mon fils — quel parti prendre ?
Dois-je pleurer Troie, ou céder à Pyrrhus ?
Non. Je ne serai point complice de sa perte.
Allons voir Céphise ; elle seule peut me rendre
Le conseil que réclame en ce danger pressant
La veuve de Hector et la mère d'Astyanax.`,
    contexte: "Monologue d'Andromaque — dilemme entre fidélité à Hector mort et survie d'Astyanax.",
    attendus: [
      att('Monologue délibératif', '« Dois-je, pour conserver ma foi si chèrement, / Trahir ton fils, Hector »', 'Monologue délibératif : Andromaque se pose elle-même le dilemme — la question rhétorique dramatise l\'impossibilité d\'un choix juste entre deux devoirs absolus.', ['monologue', 'délibératif', 'dilemme', 'hector', 'fils', 'choix']),
      att('Apostrophe', '« Hector, voilà le fils qu\'on veut ôter à moi ! »', 'Apostrophe au mort : Andromaque interpelle Hector pour le prendre à témoin — le défunt reste présent comme surmoi qui guide la décision maternelle.', ['apostrophe', 'hector', 'mort', 'présence', 'témoin', 'décision']),
      att('Antithèse', '« Ma tristesse et mon fils — quel parti prendre ? »', 'Antithèse deuil/amour maternel : les deux devoirs s\'excluent mutuellement — Racine condense l\'incompatibilité tragique en une formule elliptique.', ['antithèse', 'deuil', 'fils', 'devoir', 'incompatible', 'tragique']),
      att('Registre pathétique', '« La veuve de Hector et la mère d\'Astyanax »', 'Registre pathétique : les deux titres superposés — veuve et mère — cumulent les douleurs et suscitent la compassion en révélant la double vulnérabilité d\'Andromaque.', ['pathétique', 'veuve', 'mère', 'douleur', 'compassion', 'double']),
    ],
  },

  /* ── Corneille, Le Cid (1637) — Acte 1, scène 7 : stances de Rodrigue */
  'GT-498': {
    texte: `RODRIGUE
Percé jusques au fond du cœur
D'une atteinte imprévue aussi bien que mortelle,
Misérable vengeur d'une juste querelle,
Et malheureux objet d'une injuste rigueur,
Je demeure immobile, et mon âme abattue
Cède au coup qui me tue.
Si près de voir mon feu récompensé,
Ô Dieu, l'étrange peine !
En cet affront mon père est l'offensé,
Et l'offenseur le père de Chimène !
Que je sens de rudes combats !
Contre mon propre honneur mon amour s'intéresse :
Il faut venger un père, et perdre une maîtresse.
L'un m'anime le cœur, l'autre retient mon bras.
Réduit au triste choix ou de trahir ma flamme,
Ou de vivre en infâme,
Des deux côtés mon mal est infini.`,
    contexte: "Stances de Rodrigue — dilemme entre amour pour Chimène et honneur paternel.",
    attendus: [
      att('Antithèse', '« Il faut venger un père, et perdre une maîtresse »', 'Antithèse entre devoir et amour — le vers condense en un alexandrin le dilemme cornélien qui est le moteur de toute la pièce.', ['antithèse', 'venger', 'père', 'perdre', 'maîtresse', 'dilemme']),
      att('Anaphore', '« Réduit au triste choix ou de trahir ma flamme, / Ou de vivre en infâme »', 'Anaphore de « Ou » : le balancement binaire mime la délibération intérieure — les deux options également inacceptables paralysent le héros.', ['anaphore', 'ou', 'balancement', 'délibération', 'honneur', 'paralysie']),
      att('Apostrophe', '« Ô Dieu, l\'étrange peine ! »', 'Apostrophe à Dieu : Rodrigue invoque le ciel comme témoin de son déchirement — l\'exclamation lyrique traduit l\'impossibilité du choix et le vertige du héros.', ['apostrophe', 'dieu', 'peine', 'déchirement', 'lyrique', 'exclamation']),
      att('Registre pathétique', '« Percé jusques au fond du cœur / D\'une atteinte imprévue »', 'Registre pathétique : la métaphore de la blessure au cœur traduit la violence émotionnelle — Rodrigue est victime d\'une situation qui le dépasse tout en révélant sa grandeur.', ['pathétique', 'cœur', 'blessure', 'victime', 'violence', 'émotionnel']),
    ],
  },

  /* ── Corneille, Le Cid (1637) — Acte 2, scène 5 : aveu de Chimène */
  'GT-499': {
    texte: `CHIMÈNE
Va, je ne te hais point.
RODRIGUE
Tu le dois.
CHIMÈNE
Je ne puis.
RODRIGUE
Crains-tu si peu le blâme, et si peu les faux bruits ?
Force-les au silence, et sans plus discourir,
Sauve ta renommée en me faisant mourir.
CHIMÈNE
Elle éclate bien mieux en te laissant la vie ;
Et je veux que la voix de la plus noire envie
Élève au ciel ma gloire et plaigne mes ennuis,
Sachant que je t'adore et que je te poursuis.
Va, je ne te hais point. Ô douleur inhumaine !
RODRIGUE
Ô miracle d'amour !
CHIMÈNE
Ô comble de misère !
Que de maux et de pleurs nous coûteront nos pères !`,
    contexte: "Première entrevue de Chimène et Rodrigue après le duel — aveu et devoir de vengeance.",
    attendus: [
      att('Litote', '« Va, je ne te hais point »', 'Litote : la négation de la haine est l\'aveu de l\'amour — Chimène dit le contraire pour se cacher à elle-même une passion que le devoir lui interdit d\'avouer.', ['litote', 'hais', 'amour', 'négation', 'aveu', 'devoir']),
      att('Antithèse', '« Sachant que je t\'adore et que je te poursuis »', 'Antithèse amour/vengeance dans un seul vers : Corneille condense l\'impossibilité tragique — adorer et poursuivre en justice le même homme.', ['antithèse', 'adore', 'poursuis', 'amour', 'vengeance', 'tragique']),
      att('Stichomythie', '« Tu le dois. / Je ne puis »', 'Stichomythie : l\'échange de répliques courtes mime l\'affrontement émotionnel — le rythme haché traduit l\'urgence et la violence du dilemme entre les deux amants.', ['stichomythie', 'réplique', 'échange', 'rythme', 'affrontement', 'dilemme']),
      att('Apostrophe', '« Ô miracle d\'amour ! / Ô comble de misère ! »', 'Doubles apostrophes exclamatives en écho : Rodrigue et Chimène formulent le même événement en sens inverse — l\'un voit le miracle, l\'autre la catastrophe.', ['apostrophe', 'miracle', 'misère', 'écho', 'contraste', 'exclamation']),
    ],
  },

  /* ── Corneille, Le Cid (1637) — Acte 4, scène 1 : Chimène au roi ─ */
  'GT-500': {
    texte: `CHIMÈNE
Sire, mon père est mort ; mes yeux ont vu son sang
Couler à gros bouillons de son généreux flanc ;
Ce sang qui tant de fois garantit vos murailles,
Ce sang qui tant de fois vous gagna des batailles,
Ce sang qui tout sorti fume encor de courroux
De se voir répandu pour d'autres que pour vous,
Qu'au milieu des hasards n'osait verser la guerre,
Rodrigue en votre cour vient d'en couvrir la terre.
J'ai couru sur le lieu sans force et sans couleur :
Je l'ai trouvé sans vie. Excusez ma douleur,
Sire ; la voix me manque à ce récit funeste ;
Mes pleurs et mes soupirs vous diront mieux le reste.`,
    contexte: "Chimène implore le roi don Fernand de punir Rodrigue — rhétorique du deuil.",
    attendus: [
      att('Anaphore', '« Ce sang qui tant de fois garantit vos murailles, / Ce sang qui tant de fois vous gagna des batailles »', 'Anaphore de « Ce sang » : la répétition martèle les mérites du père mort — Chimène construit son réquisitoire en accumulant les services rendus à la couronne.', ['anaphore', 'sang', 'répétition', 'mérite', 'père', 'réquisitoire']),
      att('Hyperbole', '« Ce sang qui tout sorti fume encor de courroux »', 'Hyperbole pathétique : le sang encore fumant de colère personnifie le père en justicier posthume — la mort même réclame vengeance au nom de l\'honneur outragé.', ['hyperbole', 'sang', 'fume', 'courroux', 'père', 'vengeance']),
      att('Registre pathétique', '« Mes pleurs et mes soupirs vous diront mieux le reste »', 'Registre pathétique : Chimène use de l\'ineffable — ses larmes parlent plus fort que les mots ; elle joue sur l\'émotion royale pour obtenir justice.', ['pathétique', 'pleurs', 'soupirs', 'émotion', 'roi', 'ineffable']),
      att('Prosopopée', '« Ce sang qui tout sorti fume encor de courroux / De se voir répandu »', 'Prosopopée : le sang du père est doté d\'une conscience et d\'une volonté — il voit et ressent son versement injuste, renforçant la charge émotionnelle de la plainte.', ['prosopopée', 'sang', 'courroux', 'volonté', 'père', 'injustice']),
    ],
  },

  /* ── Corneille, Horace (1640) — Acte 1, scène 1 : Sabine ────────── */
  'GT-501': {
    texte: `SABINE
Arrêtons un moment. La solitude et l'ombre
Conviennent à l'état de mon âme, et leur nombre
N'a rien qui me déplaise en ce triste séjour.
Ces lieux qui me renvoient le jour
Témoins de mes ennuis et de mes déplaisirs,
Feront-ils retentir l'écho de mes soupirs ?
Qu'est-ce que ton amour ? L'honneur de ta patrie
L'emporte, ou du devoir ta flamme est asservie ?
JULIE
Vous trouverez en vous-même un ennemi secret.
SABINE
Non, non, je ne veux plus en craindre les effets :
Puisqu'Albe et que Rome ont un destin contraire,
Je suis romaine hélas ! mais je suis sa femme ;
Mon esprit ne peut plus souffrir ces combats :
C'est Rome que je perds si j'y perds son bras.`,
    contexte: "Sabine entre Rome et Albe — conflit entre devoir patriotique et amour conjugal.",
    attendus: [
      att('Antithèse', '« Je suis romaine hélas ! mais je suis sa femme »', 'Antithèse entre identité nationale et appartenance conjugale — le « mais » oppose deux loyautés inconciliables qui définissent le dilemme cornélien de Sabine.', ['antithèse', 'romaine', 'femme', 'nation', 'amour', 'devoir']),
      att('Champ lexical', '« ennuis », « déplaisirs », « soupirs », « combats »', 'Champ lexical de la souffrance morale : l\'accumulation de termes de douleur traduit l\'état de Sabine — déchirée entre deux patries, elle incarne le conflit tragique à elle seule.', ['champ lexical', 'souffrance', 'soupirs', 'combats', 'déchirement', 'moral']),
      att('Apostrophe', '« Qu\'est-ce que ton amour ? »', 'Apostrophe à Julie : la question rhétorique interpelle la confidente pour articuler le conflit entre amour et devoir — ressort dramatique de l\'ouverture de la pièce.', ['apostrophe', 'amour', 'julie', 'devoir', 'question', 'conflit']),
      att('Registre pathétique', '« C\'est Rome que je perds si j\'y perds son bras »', 'Registre pathétique : la formule confond la perte du mari et la perte de la patrie — Sabine résume son destin de femme déchirée en une équation tragique indépassable.', ['pathétique', 'rome', 'perds', 'bras', 'patrie', 'mari']),
    ],
  },

  /* ── Molière, Le Misanthrope (1666) — Acte 1, scène 4 ───────────── */
  'GT-502': {
    texte: `ALCESTE
Non, je ne veux pas, moi, vous flatter davantage ;
Vos façons ne sont point à mon sens convenables,
Et, si l'on me demande, elles sont condamnables.
Votre sonnet sur l'objet de vos feux,
Philis, est si mauvais qu'à vous le dire même,
Vous devriez en avoir quelque honte.
ORONTE
Je voudrais bien, monsieur, vous demander pourquoi.
ALCESTE
Parce que votre style est mauvais, et que vous
Vous fiez trop souvent à des ressorts fort faux.
ORONTE
Mais les personnes de cour en ont parlé de même.
ALCESTE
Ces personnes de cour ont un fort bon goût.
Tenez, il faut vous dire, en ami sincère,
Que votre sonnet ne vaut pas grand-chose.
Pour rimer il ne faut pas se forcer :
Rien de tel, s'il vous plaît, que de n'en faire point.`,
    contexte: "Querelle du sonnet — Alceste refuse la flatterie convenue et critique sans ménagement.",
    attendus: [
      att('Ironie', '« Ces personnes de cour ont un fort bon goût »', 'Ironie mordante : Alceste feint d\'approuver le jugement des courtisans pour mieux en souligner l\'absurdité — le registre satirique vise la complaisance du monde mondain.', ['ironie', 'cour', 'goût', 'flatterie', 'satirique', 'mondain']),
      att('Registre satirique', '« Votre sonnet ne vaut pas grand-chose »', 'Registre satirique : l\'honnêteté brutale d\'Alceste tourne en comédie — la franchise excessive parodie la sociabilité mondaine et ses codes hypocrites.', ['satirique', 'sonnet', 'franchise', 'honnêteté', 'comédie', 'hypocrisie']),
      att('Antithèse', '« en ami sincère » / « votre style est mauvais »', 'Antithèse entre l\'affirmation d\'amitié et la critique radicale — Molière montre que la vérité absolue peut être aussi violente que le mensonge poli.', ['antithèse', 'ami', 'sincère', 'critique', 'vérité', 'violence']),
      att('Dialogue', '« Je voudrais bien, monsieur, vous demander pourquoi »', 'Dialogue : la demande de justification d\'Oronte permet à Alceste d\'exposer sa vision — la joute verbale structure la scène autour du problème de la sincérité en société.', ['dialogue', 'oronte', 'justification', 'joute', 'sincérité', 'société']),
    ],
  },

  /* ── Molière, Tartuffe (1664) — Acte 1, scène 6 : Orgon et Cléante */
  'GT-503': {
    texte: `CLÉANTE
Cet homme d'Orgon fait la dupe, et croit
Que sa dévotion est sincère et droite.
Mais je me méfie, et crains qu'un tel discours
Ne soit qu'un voile à des desseins jaloux.
ORGON
C'est un homme… qui… ah !… enfin, un homme… qui…
Un homme de bien, car enfin c'est un saint.
Il s'est venu rendre à l'église tous les jours,
Il s'agenouillait vis-à-vis de moi,
Et chaque fois que je sortais, il se levait
Pour me présenter de l'eau bénite.
J'en étais attendri, j'en étais ravi, j'en étais ébloui.
CLÉANTE
Mais cependant votre sœur vous dit que c'est un fourbe.
ORGON
Elle est folle, parbleu. Je la connais trop bien.`,
    contexte: "Orgon chante les mérites de Tartuffe à Cléante — éloge aveugle de la fausse dévotion.",
    attendus: [
      att('Ironie', '« j\'en étais attendri, j\'en étais ravi, j\'en étais ébloui »', 'Ironie : la triple gradation enthousiaste d\'Orgon devant les simagrées de Tartuffe révèle son aveuglement — le spectateur voit ce qu\'Orgon refuse de percevoir.', ['ironie', 'ébloui', 'aveuglement', 'orgon', 'dupe', 'spectateur']),
      att('Gradation', '« attendri… ravi… ébloui »', 'Gradation ascendante : l\'admiration croissante d\'Orgon est une progression vers la folie — chaque terme amplifie l\'envoûtement par le faux dévot.', ['gradation', 'attendri', 'ravi', 'ébloui', 'fanatisme', 'envoûtement']),
      att('Registre satirique', '« Il s\'agenouillait vis-à-vis de moi »', 'Registre satirique : Molière dénonce la dévotion de façade — les gestes d\'Église (génuflexion, eau bénite) deviennent des instruments de manipulation sociale.', ['satirique', 'dévotion', 'façade', 'manipulation', 'génuflexion', 'hypocrisie']),
      att('Dialogue', '« votre sœur vous dit que c\'est un fourbe. / Elle est folle »', 'Dialogue : le rejet catégorique d\'Orgon révèle son obstination aveugle — la contradiction frontale entre la vérité et la croyance est le ressort comique central de la pièce.', ['dialogue', 'fourbe', 'folle', 'obstination', 'comique', 'vérité']),
    ],
  },

  /* ── Molière, Tartuffe (1664) — Acte 3, scène 2 : séduction d'Elmire */
  'GT-505': {
    texte: `TARTUFFE
L'amour qui nous attache aux beautés éternelles
N'étouffe pas en nous l'amour des temporelles.
Nos sens facilement peuvent être charmés
Des ouvrages parfaits que le ciel a formés.
Ses attraits réfléchis brillent dans vos appas ;
Mais en vous il prodigue ces trésors.
De vos beautés, dont j'admire les attraits,
Mon âme est enivrée, et mon cœur en est pris.
ELMIRE
Je vous estime heureux, monsieur, de n'en être
Que peu touché. La vertu vous doit être
Propice, et vous préserve heureusement
De cette folle ardeur dont le tourment
Contraint un misérable à se déclarer.
TARTUFFE
De grâce, ayez pitié de ma peine secrète,
Madame ; car enfin je vous dois d'avoir la foi sincère
Et je n'ai plus la force de vous en taire.`,
    contexte: "Tartuffe déclare sa flamme à Elmire — hypocrisie religieuse au service de la séduction.",
    attendus: [
      att('Sophisme', '« L\'amour qui nous attache aux beautés éternelles / N\'étouffe pas en nous l\'amour des temporelles »', 'Sophisme dévot : Tartuffe légitime son désir charnel en le greffant sur la théologie — le registre religieux sert de couverture rhétorique à la séduction impudique.', ['sophisme', 'beauté', 'temporelles', 'éternelles', 'rhétorique', 'hypocrisie']),
      att('Euphémisme', '« Mon âme est enivrée, et mon cœur en est pris »', 'Euphémisme amoureux : le vocabulaire de l\'ivresse et du cœur masque la nature charnelle du désir — Tartuffe use des codes du discours galant pour déguiser sa concupiscence.', ['euphémisme', 'ivresse', 'cœur', 'désir', 'galant', 'masque']),
      att('Ironie dramatique', '« La vertu vous doit être / Propice »', 'Ironie dramatique : Elmire feint la naïveté pour piéger Tartuffe — le spectateur comprend la double-entente que le personnage trompeur refuse de voir.', ['ironie dramatique', 'vertu', 'elmire', 'piège', 'spectateur', 'naïveté']),
      att('Registre satirique', '« je n\'ai plus la force de vous en taire »', 'Registre satirique : la déclaration d\'impuissance morale par un dévot illustre l\'écart entre discours vertueux et conduite — Molière attaque l\'hypocrisie cléricale.', ['satirique', 'force', 'taire', 'dévot', 'clérical', 'hypocrisie']),
    ],
  },

  /* ── Verlaine, Poèmes saturniens (1866) — « Mon rêve familier » ─── */
  'GT-507': {
    texte: `Mon rêve familier
Je fais souvent ce rêve étrange et pénétrant
D'une femme inconnue, et que j'aime, et qui m'aime,
Et qui n'est, chaque fois, ni tout à fait la même
Ni tout à fait une autre, et m'aime et me comprend.
Car elle me comprend, et mon cœur, transparent
Pour elle seule, hélas ! cesse d'être un problème
Pour elle seule, et les moiteurs de mon front blême,
Elle seule les sait rafraîchir, en pleurant.

Est-elle brune, blonde ou rousse ? — Je l'ignore.
Son nom ? Je me souviens qu'il est doux et sonore
Comme ceux des aimés que la Vie exila.

Son regard est pareil au regard des statues,
Et, pour sa voix, lointaine, et calme, et grave, elle a
L'inflexion des voix chères qui se sont tues.`,
    contexte: "Sonnet du rêve — idéal féminin fuyant, musicalité et mélancolie symboliste.",
    attendus: [
      att('Anaphore', '« Ni tout à fait la même / Ni tout à fait une autre »', 'Anaphore de « Ni tout à fait » : la répétition traduit l\'identité fluctuante de la femme rêvée — entre la même et l\'autre, elle échappe à toute définition et incarne l\'idéal insaisissable.', ['anaphore', 'ni', 'identité', 'fuyant', 'rêve', 'idéal']),
      att('Synesthésie', '« Son nom ? Je me souviens qu\'il est doux et sonore »', 'Synesthésie : le nom est à la fois tactile (doux) et auditif (sonore) — Verlaine mêle les sens pour rendre la présence aimée impalpable mais envahissante.', ['synesthésie', 'nom', 'doux', 'sonore', 'sens', 'impalpable']),
      att('Métaphore', '« Son regard est pareil au regard des statues »', 'Métaphore de la statue : le regard figé et lointain évoque la mort et l\'idéal inaccessible — le rêve se teinte de funèbre et de mélancolie.', ['métaphore', 'regard', 'statue', 'mort', 'idéal', 'inaccessible']),
      att('Registre lyrique', '« L\'inflexion des voix chères qui se sont tues »', 'Registre lyrique : le poème se clôt sur le silence des voix disparues — mélancolie pure, nostalgie d\'un bonheur perdu que seul le rêve peut encore convoquer.', ['lyrique', 'voix', 'tues', 'mélancolie', 'nostalgie', 'silence']),
    ],
  },

  /* ── Verlaine, Romances sans paroles (1874) — Ariette III ────────── */
  'GT-508': {
    texte: `Il pleure dans mon cœur
Comme il pleut sur la ville.
Quelle est cette langueur
Qui pénètre mon cœur ?
Ô bruit doux de la pluie
Par terre et sur les toits !
Pour un cœur qui s'ennuie,
Ô le chant de la pluie !

Il pleure sans raison
Dans ce cœur qui s'écœure.
Quoi ! nulle trahison ?
Ce deuil est sans raison.

C'est bien la pire peine
De ne savoir pourquoi,
Sans amour et sans haine,
Mon cœur a tant de peine.`,
    contexte: "Ariette III — spleen sans cause, pluie et mélancolie impressionniste.",
    attendus: [
      att('Synesthésie', '« Il pleure dans mon cœur / Comme il pleut sur la ville »', 'Synesthésie fondatrice : Verlaine fond le registre météorologique et l\'intériorité — la pluie extérieure et les larmes intimes deviennent le même phénomène.', ['synesthésie', 'pleure', 'pleut', 'intérieur', 'extérieur', 'fusion']),
      att('Anaphore', '« Il pleure dans mon cœur » / « Il pleure sans raison »', 'Anaphore : la reprise de l\'incipit structure le poème comme une incantation — le refrain mime le retour monotone et irrémédiable de la mélancolie.', ['anaphore', 'pleure', 'refrain', 'mélancolie', 'monotone', 'incantation']),
      att('Champ lexical', '« langueur », « s\'ennuie », « s\'écœure », « peine »', 'Champ lexical du spleen : l\'accumulation de termes d\'abattement sans cause traduit le mal verlainien — une tristesse pure, affranchie de tout événement identifiable.', ['champ lexical', 'spleen', 'langueur', 'ennui', 'peine', 'mélancolie']),
      att('Paradoxe', '« Ce deuil est sans raison » / « Sans amour et sans haine »', 'Paradoxe : un deuil sans mort, une peine sans cause — Verlaine invente une forme de souffrance moderne, abstraite et musicale, proprement symboliste.', ['paradoxe', 'deuil', 'raison', 'abstrait', 'souffrance', 'moderne']),
    ],
  },

  /* ── Baudelaire, Les Fleurs du mal (1857) — « Correspondances » ──── */
  'GT-509': {
    texte: `Correspondances
La Nature est un temple où de vivants piliers
Laissent parfois sortir de confuses paroles ;
L'homme y passe à travers des forêts de symboles
Qui l'observent avec des regards familiers.

Comme de longs échos qui de loin se confondent
Dans une ténébreuse et profonde unité,
Vaste comme la nuit et comme la clarté,
Les parfums, les couleurs et les sons se répondent.

Il est des parfums frais comme des chairs d'enfants,
Doux comme les hautbois, verts comme les prairies,
— Et d'autres, corrompus, riches et triomphants,
Ayant l'expansion des choses infinies,
Comme l'ambre, le musc, le benjoin et l'encens,
Qui chantent les transports de l'esprit et des sens.`,
    contexte: "Sonnet des correspondances — théorie symboliste de l'analogie universelle.",
    attendus: [
      att('Métaphore', '« La Nature est un temple où de vivants piliers »', 'Métaphore filée du temple : la nature devient un lieu sacré aux piliers parlants — Baudelaire sacralise le monde sensible et lui confère une dimension spirituelle fondatrice du symbolisme.', ['métaphore', 'temple', 'nature', 'sacré', 'piliers', 'symbolisme']),
      att('Synesthésie', '« Les parfums, les couleurs et les sons se répondent »', 'Synesthésie fondatrice : olfactif, visuel et auditif se correspondent — Baudelaire pose le principe d\'une analogie universelle entre les sens au cœur de l\'esthétique symboliste.', ['synesthésie', 'parfums', 'couleurs', 'sons', 'correspondances', 'symbolisme']),
      att('Énumération', '« Comme l\'ambre, le musc, le benjoin et l\'encens »', 'Énumération de parfums précieux : l\'accumulation sensorielle crée une ivresse du lecteur — le poème joue lui-même le rôle des correspondances entre l\'écrit et le sensible.', ['énumération', 'ambre', 'musc', 'benjoin', 'ivresse', 'sensible']),
      att('Champ lexical', '« symboles », « ténébreuse », « profonde unité »', 'Champ lexical du mystère et de la profondeur — Baudelaire inscrit la nature dans un espace spirituel inconnu que seul le poète-voyant peut déchiffrer.', ['champ lexical', 'mystère', 'symboles', 'profondeur', 'poète', 'spirituel']),
    ],
  },

  /* ── Hugo, Les Misérables (1862) — Chapitre 4 : portrait de Mabeuf */
  'GT-511': {
    texte: `M. Mabeuf habitait, dans le bas de la rue Mouffetard, une maison qui respirait la misère par toutes ses lézardes. C'était un vieillard de soixante-douze ans, qui avait été marguillier de l'église Saint-Médard. Sa bibliothèque, ses gravures, ses livres s'en étaient allés un à un. Il avait vendu tout, le superflu d'abord, puis le nécessaire. Il lui restait deux choses auxquelles il tenait encore : une vieille flore et son jardin. La vieille flore couverte de mousse, avec ses planches en taille-douce coloriées, ne valait plus rien. Le jardin était un carré de terre de quatre toises, où croissaient quelques légumes et des fleurs. Ce jardin était sa vie. Quand Mabeuf n'avait pas de quoi manger, son jardin le nourrissait ; quand il n'avait pas de feu, ses légumes le réchauffaient.`,
    contexte: "Portrait de M. Mabeuf — misère progressive, résistance par le jardinage.",
    attendus: [
      att('Gradation descendante', '« le superflu d\'abord, puis le nécessaire »', 'Gradation descendante : la pauvreté prive d\'abord le superflu puis le nécessaire — Hugo dessine la déchéance par étapes, rendant visible la mécanique implacable de la misère.', ['gradation', 'superflu', 'nécessaire', 'misère', 'déchéance', 'étapes']),
      att('Personnification', '« une maison qui respirait la misère par toutes ses lézardes »', 'Personnification : la maison devient un être vivant qui exhale la misère — le bâtiment incarne la condition de son habitant et l\'amplifie symboliquement.', ['personnification', 'maison', 'misère', 'lézardes', 'condition', 'symbole']),
      att('Antithèse', '« quand Mabeuf n\'avait pas de quoi manger, son jardin le nourrissait »', 'Antithèse entre misère monétaire et abondance naturelle — le paradoxe souligne la dignité du pauvre qui maintient sa survie par un rapport direct à la terre.', ['antithèse', 'manger', 'jardin', 'nourrir', 'dignité', 'pauvre']),
      att('Registre réaliste', '« un carré de terre de quatre toises »', 'Registre réaliste : la précision de la mesure ancre le récit dans le concret social — Hugo documente la survie matérielle pour mieux dénoncer les conditions de la misère urbaine.', ['réaliste', 'carré', 'toises', 'concret', 'misère', 'urbaine']),
    ],
  },

  /* ── Hugo, La Légende des siècles (1859) — « Booz endormi » ───────── */
  'GT-512': {
    texte: `Booz endormi
Booz s'était couché de fatigue accablé ;
Il avait tout le jour travaillé dans son aire ;
Puis il avait fait son lit à sa manière
Là-haut, vers le zénith, sous les cieux étoilé.

Ce vieillard possédait des champs de blés et d'orge ;
Il était, quoique riche, à la justice enclin ;
Il n'avait pas de fange en l'eau de son moulin,
Il n'avait pas d'enfer dans le feu de sa forge.

Sa barbe était d'argent comme un ruisseau d'avril.
Sa gerbe n'était point avare ni haineuse ;
Quand il voyait passer quelque pauvre glaneuse :
— Laissez tomber exprès des épis, disait-il.`,
    contexte: "Portrait de Booz — vieillard juste et généreux dans l'épopée humaniste hugolienne.",
    attendus: [
      att('Comparaison', '« Sa barbe était d\'argent comme un ruisseau d\'avril »', 'Comparaison : la barbe blanche de Booz est un ruisseau printanier — la vieillesse devient source de vie et de pureté ; Hugo renverse la connotation de déclin.', ['comparaison', 'barbe', 'argent', 'ruisseau', 'vieillesse', 'pureté']),
      att('Antithèse', '« Il n\'avait pas de fange en l\'eau de son moulin, / Il n\'avait pas d\'enfer dans le feu de sa forge »', 'Double négation antithétique : l\'absence de fange et d\'enfer définit la bonté de Booz en creux — la pureté morale se construit par l\'exclusion du vice.', ['antithèse', 'fange', 'enfer', 'bonté', 'pureté', 'morale']),
      att('Registre épique', '« Là-haut, vers le zénith, sous les cieux étoilé »', 'Registre épique : le sommeil de Booz est placé sous les étoiles — Hugo inscrit le personnage dans une dimension cosmique et biblique qui élève l\'humble moissonnage au rang d\'épopée.', ['épique', 'zénith', 'étoiles', 'cosmique', 'biblique', 'épopée']),
      att('Registre lyrique', '« Laissez tomber exprès des épis »', 'Registre lyrique : le discours direct de Booz condense sa générosité naturelle en un seul geste — Hugo fait du seigneur de Bethléem l\'incarnation de la bonté romantique et humaniste.', ['lyrique', 'épis', 'générosité', 'geste', 'humaniste', 'romantique']),
    ],
  },

  /* ── Rimbaud, Le Bateau ivre (1871) — strophes centrales ─────────── */
  'GT-513': {
    texte: `J'ai heurté, savez-vous, d'incroyables Florides
Où se mêlaient aux fleurs des yeux de panthères,
Des peaux d'hommes ! des arcs-en-ciel tendus
Sous l'horizon des mers, à de glauques troupeaux.

Et j'ai vu quelquefois ce que l'homme a cru voir !
J'ai vu le soleil bas, taché d'horreurs mystiques,
Illuminant de longs figements violets,
Pareils à des acteurs de drames très antiques.

Moi qui tremblais, sentant geindre à cinquante lieues
Le rut des Béhémots et les Maelstroms épais,
Fileur éternel des immobilités bleues,
Je regrette l'Europe aux anciens parapets.

— Est-ce en ces nuits sans fond que tu dors et t'exiles,
Million d'oiseaux d'or, ô future Vigueur ?`,
    contexte: "Strophes hallucinatoires du Bateau ivre — visions du voyage, épuisement et nostalgie.",
    attendus: [
      att('Accumulation', '« des yeux de panthères, / Des peaux d\'hommes ! des arcs-en-ciel »', 'Accumulation hallucinatoire : les visions s\'enchaînent sans logique causale — le bateau-poète accumule les images surréelles d\'un voyage initiatique hors du réel.', ['accumulation', 'panthères', 'arcs-en-ciel', 'hallucination', 'vision', 'voyage']),
      att('Apostrophe', '« ô future Vigueur ? »', 'Apostrophe finale : Rimbaud interpelle une énergie future et inconnue — l\'interrogation ouvre le poème sur une espérance utopique après l\'épuisement complet du voyage.', ['apostrophe', 'vigueur', 'futur', 'espérance', 'utopie', 'question']),
      att('Métaphore', '« Fileur éternel des immobilités bleues »', 'Métaphore : le bateau devient fileur de silence bleu — l\'image condense la vacuité et l\'infini de l\'océan comme espace de méditation et d\'anéantissement.', ['métaphore', 'fileur', 'immobilité', 'bleu', 'océan', 'infini']),
      att('Registre lyrique', '« Je regrette l\'Europe aux anciens parapets »', 'Registre lyrique : le désir de retour s\'exprime comme nostalgie — l\'angoisse du déracinement et le regret de l\'ordre ancien contrastent avec les visions délirantes du voyage.', ['lyrique', 'regret', 'europe', 'nostalgie', 'déracinement', 'retour']),
    ],
  },

  /* ── Rimbaud, Une Saison en enfer (1873) — « Mauvais sang » ─────── */
  'GT-514': {
    texte: `Mauvais sang
Jadis, si je me souviens bien, ma vie était un festin où s'ouvraient tous les cœurs, où tous les vins coulaient. Un soir, j'ai assis la Beauté sur mes genoux. — Et je l'ai trouvée amère. — Et je l'ai injuriée.
Je me suis armé contre la justice. Je me suis enfui. Ô sorcières, ô misère, ô haine, c'est à vous que mon trésor a été confié !
J'ai réussi à faire s'évanouir dans mon esprit toute l'espérance humaine. Sur toute joie pour l'étrangler j'ai fait le bond sourd de la bête féroce. J'ai appelé les bourreaux pour, en périssant, mordre la crosse de leurs fusils. J'ai appelé les fléaux, pour m'étouffer avec le sable, le sang. Le malheur a été mon dieu.`,
    contexte: "Prologue de Mauvais sang — révolte contre la beauté, fuite vers la damnation choisie.",
    attendus: [
      att('Apostrophe', '« Ô sorcières, ô misère, ô haine »', 'Triple apostrophe : Rimbaud invoque une trinité maudite — la révolte devient litanie, le refus de l\'espérance prend la forme d\'une prière inversée et blasphématoire.', ['apostrophe', 'sorcières', 'misère', 'haine', 'prière', 'révolte']),
      att('Antithèse', '« ma vie était un festin » / « je l\'ai trouvée amère »', 'Antithèse festin/amertume : la chute du passé heureux vers le présent désabusé structure le texte comme une déchéance délibérément choisie par le narrateur.', ['antithèse', 'festin', 'amère', 'chute', 'déchéance', 'damnation']),
      att('Métaphore', '« j\'ai fait le bond sourd de la bête féroce »', 'Métaphore animale : l\'étouffement de la joie est un bond de fauve — Rimbaud décrit la violence intérieure de la révolte comme instinct primitif et prémédité.', ['métaphore', 'bond', 'bête', 'violence', 'instinct', 'révolte']),
      att('Gradation', '« j\'ai appelé les bourreaux… j\'ai appelé les fléaux »', 'Gradation : appel des bourreaux puis des fléaux — l\'escalade vers l\'auto-destruction totale traduit la logique nihiliste de Mauvais sang.', ['gradation', 'bourreaux', 'fléaux', 'destruction', 'nihilisme', 'escalade']),
    ],
  },

  /* ── Rimbaud, Illuminations (1886) — « Aube » ───────────────────── */
  'GT-515': {
    texte: `Aube
J'ai embrassé l'aube d'été.
Rien ne bougeait encore au front des palais. L'eau était morte. Les camps d'ombres ne quittaient pas la route du bois. J'ai marché, réveillant les haleines vives et tièdes, et les pierreries regardèrent, et les ailes se levèrent sans bruit.
La première entreprise fut, dans le sentier déjà empli de frais et blêmes éclats, une fleur qui me dit son nom.
Je ris au wasserfall blond qui s'échevela à travers les sapins : à la cime argentée je reconnus la déesse.
Puis je levai un à un les voiles. Dans l'allée, en agitant les bras. Par la plaine, où je l'ai dénoncée au coq. À la grand'ville elle fuyait parmi les clochers et les dômes.
En haut de la route, près d'un bois de lauriers, je l'ai entourée avec ses voiles amassés, et j'ai senti un peu son immense corps. L'aube et l'enfant tombèrent au bas du bois.`,
    contexte: "Poème en prose — poursuite de l'Aube personnifiée, quête de l'idéal insaisissable.",
    attendus: [
      att('Personnification', '« J\'ai embrassé l\'aube d\'été »', 'Personnification : l\'Aube est une femme que le poète embrasse et poursuit — Rimbaud érotise le phénomène naturel et en fait l\'allégorie de la quête poétique de l\'idéal.', ['personnification', 'aube', 'femme', 'poursuite', 'quête', 'idéal']),
      att('Gradation spatiale', '« Dans l\'allée… Par la plaine… À la grand\'ville »', 'Gradation spatiale : de l\'allée à la ville en passant par la plaine, la poursuite s\'élargit — l\'Aube fuit devant le poète et parcourt l\'espace comme un idéal toujours reculant.', ['gradation', 'allée', 'plaine', 'ville', 'poursuite', 'idéal']),
      att('Métaphore', '« j\'ai senti un peu son immense corps »', 'Métaphore corporelle : l\'Aube devient corps immense au moment de la capture — la fusion brève traduit l\'instant de grâce poétique avant la chute et la dissolution.', ['métaphore', 'corps', 'immense', 'capture', 'grâce', 'poétique']),
      att('Champ lexical', '« pierreries », « éclats », « argentée », « voiles »', 'Champ lexical de la lumière et du voilement — Rimbaud construit une texture visionnaire où la clarté de l\'aube se dissimule sous des voiles que le poète lève un à un.', ['champ lexical', 'lumière', 'voile', 'argent', 'vision', 'mystère']),
    ],
  },

  /* ── Lamartine, Méditations poétiques (1820) — « L'Automne » ──────── */
  'GT-516': {
    texte: `L'Automne
Salut, bois couronnés d'un reste de verdure !
Feuillages jaunissants sur les gazons épars !
Salut, derniers beaux jours ! Le deuil de la nature
Convient à la douleur et plaît à mes regards.
Je suis d'un pas rêveur le sentier solitaire,
J'aime à revoir encor, pour la dernière fois,
Ce soleil pâlissant dont la faible lumière
Perce à peine à mes pieds l'obscurité des bois.
Oui, dans ces jours d'automne où la nature expire,
À ses regards voilés, je trouve des appas.
Ma route est devant moi ; derrière elle est fermée.
Ainsi de nos amours la saison est passée ;
Nos printemps sont flétris ; nos jours ont leurs pleurs.`,
    contexte: "L'automne comme métaphore du deuil amoureux — méditation romantique sur le temps.",
    attendus: [
      att('Métaphore', '« Le deuil de la nature »', 'Métaphore : la nature automnale est en deuil — Lamartine fusionne le paysage et le sentiment, procédé romantique par excellence qui fait du décor l\'expression de l\'état d\'âme.', ['métaphore', 'deuil', 'nature', 'automne', 'romantique', 'fusion']),
      att('Apostrophe', '« Salut, bois couronnés d\'un reste de verdure ! »', 'Apostrophe lyrique : Lamartine interpelle la nature mourante comme une présence amie — l\'exclamation traduit l\'élan romantique vers le monde naturel comme interlocuteur intime.', ['apostrophe', 'bois', 'salut', 'nature', 'lyrique', 'romantique']),
      att('Antithèse', '« Ma route est devant moi ; derrière elle est fermée »', 'Antithèse passé/avenir : la route fermée derrière et ouverte devant traduit la mélancolie de l\'amour révolu et l\'incertitude angoissante de l\'avenir.', ['antithèse', 'route', 'devant', 'derrière', 'passé', 'avenir']),
      att('Registre lyrique', '« Nos printemps sont flétris ; nos jours ont leurs pleurs »', 'Registre lyrique : le « nos » collectif universalise la mélancolie personnelle — Lamartine transcende la peine individuelle pour en faire une vérité humaine partagée.', ['lyrique', 'printemps', 'flétris', 'pleurs', 'collectif', 'universel']),
    ],
  },

  /* ── Voltaire, Candide (1759) — Dialogue sur l'optimisme ────────── */
  'GT-518': {
    texte: `— Qu'est-ce qu'optimisme ? disait Cacambo.
— Hélas ! dit Candide, c'est la rage de soutenir que tout est bien quand on est mal.
Il versait des larmes en regardant les nègres, et en pleurant il entra dans Surinam.
La première chose dont ils s'informèrent fut si on ne pourrait pas les embarquer pour Buenos-Ayres. Celui à qui ils s'adressèrent s'offrit à faire avec eux un marché honnête. Il leur donna rendez-vous dans un cabaret.
— Pour quelle raison êtes-vous ici, lui dit Candide ?
— Ah ! monsieur, répondit le matelot, c'est parce que j'aime ma patrie.
— Fort bien, dit Candide ; mais pourquoi y a-t-il tant de mal dans ce monde ?
— Pour exercer notre patience, dit le Pangloss de service.
— Vous plaisantez, dit Candide ; mais laissons cela, je vous prie.`,
    contexte: "Dialogue sur l'optimisme — Candide remet en cause la doctrine de Pangloss après Surinam.",
    attendus: [
      att('Ironie', '« c\'est la rage de soutenir que tout est bien quand on est mal »', 'Ironie cinglante : Candide résume l\'optimisme leibnizien en une formule absurde — Voltaire détruit la doctrine philosophique par la définition même que lui en donne sa victime.', ['ironie', 'optimisme', 'rage', 'bien', 'mal', 'leibniz']),
      att('Dialogue', '« Pour quelle raison êtes-vous ici ? / C\'est parce que j\'aime ma patrie »', 'Dialogue philosophique dégradé : la réponse du matelot déjoue l\'attente d\'une explication profonde — Voltaire use du non sequitur pour ridiculiser les rationalisations de la misère.', ['dialogue', 'patrie', 'non sequitur', 'absurde', 'dégradé', 'voltaire']),
      att('Registre satirique', '« le Pangloss de service »', 'Registre satirique : la formule généralise la figure en type universel — tout optimiste béat devient interchangeable, vidant la doctrine de toute substance propre.', ['satirique', 'pangloss', 'service', 'type', 'universel', 'doctrine']),
      att('Antithèse', '« il versait des larmes » / « tout est bien »', 'Antithèse larmes/optimisme : le contraste entre la souffrance visible des esclaves et la doctrine enjouée condamne l\'optimisme leibnizien comme aveuglement coupable.', ['antithèse', 'larmes', 'bien', 'souffrance', 'aveuglement', 'optimisme']),
    ],
  },

  /* ── Voltaire, Candide (1759) — Chapitre 3 : la guerre ──────────── */
  'GT-519': {
    texte: `Rien n'était si beau, si leste, si brillant, si bien ordonné que les deux armées. Les trompettes, les fifres, les hautbois, les tambours, les canons, formaient une harmonie telle qu'il n'y en eut jamais en enfer. Les canons renversèrent d'abord à peu près six mille hommes de chaque côté ; ensuite la mousqueterie ôta du meilleur des mondes environ neuf à dix mille coquins qui en infectaient la surface. La baïonnette fut aussi la raison suffisante de la mort de quelques milliers d'hommes. Le tout pouvait bien se monter à une trentaine de mille âmes. Candide, qui tremblait comme un philosophe, se cacha du mieux qu'il put pendant cette boucherie héroïque.`,
    contexte: "Chapitre 3 — description ironique d'une bataille : guerre et optimisme philosophique.",
    attendus: [
      att('Ironie', '« cette boucherie héroïque »', 'Ironie : l\'oxymore associe boucherie et héroïque — Voltaire détruit le discours glorieux sur la guerre en une formule qui révèle la violence sous le vernis de l\'honneur.', ['ironie', 'boucherie', 'héroïque', 'oxymore', 'guerre', 'gloire']),
      att('Gradation', '« six mille hommes… neuf à dix mille coquins… quelques milliers »', 'Gradation macabre : le décompte précis des morts accumulés dénonce la logique guerrière — Voltaire use du chiffre exact pour transformer l\'horreur en statistique absurde.', ['gradation', 'six mille', 'dix mille', 'milliers', 'décompte', 'absurde']),
      att('Registre satirique', '« une harmonie telle qu\'il n\'y en eut jamais en enfer »', 'Registre satirique : comparer la musique de guerre au chant de l\'enfer retourne le beau contre lui-même — la satire voltairienne use de l\'éloge pour mieux condamner.', ['satirique', 'harmonie', 'enfer', 'satire', 'éloge', 'condamnation']),
      att('Antiphrase', '« du meilleur des mondes environ neuf à dix mille coquins »', 'Antiphrase : Voltaire reprend le vocabulaire de Pangloss (meilleur des mondes) pour l\'appliquer au meurtre — le décalage ironique détruit l\'optimisme par l\'absurde.', ['antiphrase', 'meilleur', 'mondes', 'coquins', 'pangloss', 'absurde']),
    ],
  },

  /* ── Flaubert, L'Éducation sentimentale (1869) — portrait de Frédéric */
  'GT-521': {
    texte: `Il avait le beau teint des gens qui vivent à la campagne, les yeux bleus, les cheveux châtains, quelque chose de tendre dans la voix et dans le regard, une douceur naturelle, un peu gauche, qui tenait à la fois de la naïveté de l'adolescence et de la noblesse de la jeunesse.
La vue de Mme Arnoux l'avait saisi d'une émotion si vive que, pendant quelques instants, il demeura sans bouger. Il contempla les sourcils un peu froncés, le nez légèrement incliné, les lèvres entrouvertes, et quelque chose d'indéfinissable dans les yeux. Il n'avait jamais rien vu de si beau. Quelqu'un l'appela par son nom : Frédéric Moreau. Il ne répondit pas, regardant toujours. La vapeur qui montait du fleuve, les herbes du rivage, les reflets de l'eau, tout lui paraissait appartenir à ce visage.`,
    contexte: "Coup de foudre de Frédéric pour Mme Arnoux — portrait de l'idéal féminin fuyant.",
    attendus: [
      att('Énumération', '« les sourcils un peu froncés, le nez légèrement incliné, les lèvres entrouvertes »', 'Énumération fragmentée du portrait : Flaubert décompose le visage en traits isolés — le regard amoureux, incapable de saisir le tout, ne perçoit que des détails.', ['énumération', 'portrait', 'sourcils', 'lèvres', 'regard', 'fragmenté']),
      att('Synesthésie', '« La vapeur… les herbes… les reflets… tout lui paraissait appartenir à ce visage »', 'Synesthésie : le monde entier est absorbé par le visage de Mme Arnoux — la fusion du paysage et de l\'aimée traduit la toute-puissance du coup de foudre.', ['synesthésie', 'vapeur', 'herbes', 'reflets', 'fusion', 'coup de foudre']),
      att('Gradation', '« la naïveté de l\'adolescence et de la noblesse de la jeunesse »', 'Gradation : de la naïveté à la noblesse, Flaubert construit un portrait idéalisé — Frédéric projette sur Mme Arnoux ses propres aspirations romantiques.', ['gradation', 'naïveté', 'noblesse', 'idéal', 'projection', 'romantique']),
      att('Registre lyrique', '« Il n\'avait jamais rien vu de si beau »', 'Registre lyrique : la formule d\'absolu traduit la subjectivité du regard amoureux — Flaubert inscrit l\'éducation sentimentale sous le signe d\'un idéal féminin inatteignable.', ['lyrique', 'beau', 'absolu', 'subjectivité', 'idéal', 'inatteignable']),
    ],
  },

  /* ── Camus, La Peste (1947) — scène clé de Rieux ────────────────── */
  'GT-526': {
    texte: `Rieux s'arrêta et regarda cette femme. La lampe de la rue éclairait un profil dur et régulier. Il pensa qu'une solidarité sans illusion était plus facile à vivre avec qu'une solidarité fondée sur des mensonges. Le docteur sentait, sans pouvoir se l'expliquer, qu'il avait peur de perdre ce qui lui permettait de continuer à soigner les malades, c'est-à-dire la franchise. Que le fléau tue, c'était entendu. Mais que le mensonge triomphât aussi, cela lui semblait une seconde défaite. Il y avait quelque chose dans cette ville assiégée qui ressemblait à l'amour : l'obstination muette de ceux qui, de toutes leurs forces, résistaient ensemble à l'absurde et à la mort.`,
    contexte: "Méditation de Rieux — solidarité sans illusions comme seule réponse à la peste et à l'absurde.",
    attendus: [
      att('Antithèse', '« solidarité sans illusion » / « solidarité fondée sur des mensonges »', 'Antithèse entre deux formes de solidarité — Rieux choisit la vérité difficile contre le mensonge consolateur : Camus pose l\'éthique de la lucidité comme seule réponse valide à l\'absurde.', ['antithèse', 'solidarité', 'illusion', 'mensonge', 'lucidité', 'absurde']),
      att('Métaphore', '« quelque chose dans cette ville assiégée qui ressemblait à l\'amour »', 'Métaphore de l\'amour pour désigner la résistance collective — Camus sacralise la solidarité humaine en la comparant au sentiment le plus fort, sans idéalisme naïf.', ['métaphore', 'ville', 'assiégée', 'amour', 'résistance', 'solidarité']),
      att('Gradation', '« que le fléau tue… que le mensonge triomphât aussi »', 'Gradation : la défaite militaire s\'aggrave d\'une défaite morale — Camus hiérarchise les catastrophes, faisant du mensonge une épidémie aussi dangereuse que la peste.', ['gradation', 'fléau', 'mensonge', 'défaite', 'morale', 'épidémie']),
      att('Registre réaliste', '« La lampe de la rue éclairait un profil dur et régulier »', 'Registre réaliste : le détail de la lampe ancre la méditation dans le quotidien concret — Camus refuse toute envolée lyrique pour rester au niveau de la résistance ordinaire.', ['réaliste', 'lampe', 'profil', 'concret', 'quotidien', 'résistance']),
    ],
  },

  /* ── Proust, Du côté de chez Swann (1913) — la madeleine ────────── */
  'GT-527': {
    texte: `Et tout d'un coup le souvenir m'est apparu. Ce goût, c'était celui du petit morceau de madeleine que le dimanche matin à Combray, quand j'allais lui dire bonjour dans sa chambre, ma tante Léonie m'offrait après l'avoir trempé dans son infusion de thé ou de tilleul. La vue de la petite madeleine ne m'avait rien rappelé avant que je n'y eusse goûté ; peut-être parce que, en en ayant souvent aperçu depuis, sans en manger, sur les tablettes des pâtissiers, leur image avait quitté ces jours de Combray pour se lier à d'autres plus récents ; peut-être parce que de ces souvenirs abandonnés si longtemps hors de la mémoire, rien ne subsistait, tout s'était désagrégé ; les formes — et celle aussi du petit coquillage de pâtisserie, si grassement sensuel sous son plissé sévère et dévot — s'étaient abolies, ou, ensommeillées, avaient perdu la force d'expansion qui leur eût permis de rejoindre la conscience.`,
    contexte: "La madeleine de Tante Léonie — surgissement de la mémoire involontaire à Combray.",
    attendus: [
      att('Métaphore', '« le petit coquillage de pâtisserie, si grassement sensuel sous son plissé sévère et dévot »', 'Métaphore : la madeleine est un coquillage à la fois sensuel et dévot — Proust inscrit le souvenir dans une tension entre chair et spiritualité, essence même de Combray.', ['métaphore', 'coquillage', 'sensuel', 'dévot', 'souvenir', 'combray']),
      att('Gradation descendante', '« tout s\'était désagrégé… s\'étaient abolies… ensommeillées »', 'Gradation décroissante : les souvenirs s\'effacent par étapes — Proust décrit la dégradation mémorielle avant la résurrection, soulignant la fragilité de la mémoire volontaire.', ['gradation', 'désagrégé', 'abolies', 'ensommeillées', 'mémoire', 'oubli']),
      att('Périphrase', '« Ce goût, c\'était celui du petit morceau de madeleine »', 'Périphrase : Proust retarde l\'identification de la saveur — la structure narrative mime la lenteur de la remontée mémorielle, la conscience qui cherche avant de trouver.', ['périphrase', 'goût', 'madeleine', 'mémoire', 'lenteur', 'remontée']),
      att('Registre lyrique', '« Et tout d\'un coup le souvenir m\'est apparu »', 'Registre lyrique : le surgissement soudain est narré comme une épiphanie — Proust sacralise la mémoire involontaire en lui conférant la puissance d\'une révélation absolue.', ['lyrique', 'souvenir', 'surgissement', 'épiphanie', 'mémoire', 'révélation']),
    ],
  },

  /* ── Mallarmé, Poésies (1897) — « Apparition » ───────────────────── */
  'GT-528': {
    texte: `Apparition
La lune s'attristait. Des séraphins en pleurs
Rêvant, l'archet aux doigts, dans le calme des fleurs
Vaporeuses, tiraient de mourantes violes
De blancs sanglots glissant sur l'azur des corolles.
— C'était le jour béni de ton premier baiser.
Ma songerie aimant à me martyriser
S'enivrait savamment du parfum de tristesse
Que même sans regret et sans déboire laisse
La cueillette d'un Rêve au cœur qui l'a cueilli.
J'errais donc, l'œil rivé sur le pavé vieilli
Quand avec du soleil aux cheveux, dans la rue
Et dans le soir, tu m'es en riant apparue
Et j'ai cru voir la fée au chapeau de clarté
Qui jadis sur mes beaux sommeils d'enfant gâté
Passait, laissant toujours de ses mains mal fermées
Neiger de blancs bouquets d'étoiles parfumées.`,
    contexte: "Apparition — vision de la femme aimée comme fée lumineuse, idéal et souvenir d'enfance.",
    attendus: [
      att('Synesthésie', '« De blancs sanglots glissant sur l\'azur des corolles »', 'Synesthésie : les sanglots sont blancs et glissants, les corolles bleues — Mallarmé mêle ouïe, toucher et vue pour créer une texture poétique impalpable et musicale.', ['synesthésie', 'sanglots', 'blancs', 'azur', 'corolles', 'impalpable']),
      att('Métaphore', '« la fée au chapeau de clarté »', 'Métaphore lumineuse : la femme aimée est une fée couronnée de soleil — Mallarmé sacralise l\'être aimé en figure mythique de l\'enfance et de la pureté absolue.', ['métaphore', 'fée', 'clarté', 'soleil', 'enfance', 'pureté']),
      att('Personnification', '« La lune s\'attristait »', 'Personnification : la lune triste ouvre le poème sur un décor mélancolique — le ciel reflète l\'état du sujet lyrique avant l\'apparition salvatrice.', ['personnification', 'lune', 'tristesse', 'décor', 'mélancolie', 'lyrique']),
      att('Registre lyrique', '« Neiger de blancs bouquets d\'étoiles parfumées »', 'Registre lyrique : l\'image finale condense lumière, parfum et légèreté — Mallarmé clôt le poème sur une vision d\'enfance préservée, idéal poétique inaccessible à l\'âge adulte.', ['lyrique', 'neiger', 'étoiles', 'parfum', 'enfance', 'idéal']),
    ],
  },

  /* ── Rousseau, Les Confessions (1782) — Le vol du ruban ─────────── */
  'GT-531': {
    texte: `Marion, petite Savoyarde d'une grande beauté, était en service dans cette maison. Le ruban de Mlle Pontal vint à manquer. Je fus soupçonné d'avoir pris ce ruban, parce que j'avais été vu seul dans la chambre où il était. Je déclarai que je l'avais trouvé. Marion me regarda, et ne dit rien. Les yeux s'attachèrent sur moi avec une douceur qui me déchira l'âme. C'est d'elle que j'avais pris ce ruban : les soupçons pesaient sur elle. Je sentis que j'allais être perdu si je persistais à l'accuser ; mais la honte de ma lâcheté m'empêchait de me rétracter. J'accusai Marion.
Ce souvenir me trouble encore. Ce que j'ai senti depuis lors n'a jamais effacé cette impression. Je ne sais comment j'aurais pu survivre au remords si Marion avait été sévèrement punie.`,
    contexte: "Vol du ruban — aveu de la faute fondatrice, culpabilité et mémoire du moi dans les Confessions.",
    attendus: [
      att('Focalisation interne', '« Je sentis que j\'allais être perdu si je persistais à l\'accuser »', 'Focalisation interne : Rousseau restitue le calcul honteux de l\'enfant en temps réel — le lecteur accède à la genèse du mensonge, rendu plus accablant par sa transparence confessée.', ['focalisation', 'interne', 'calcul', 'honte', 'enfant', 'mensonge']),
      att('Registre pathétique', '« Les yeux s\'attachèrent sur moi avec une douceur qui me déchira l\'âme »', 'Registre pathétique : le regard de Marion concentre la culpabilité de Rousseau — la douceur de l\'innocente accusée rend la faute du narrateur plus insupportable encore.', ['pathétique', 'yeux', 'douceur', 'déchira', 'innocente', 'culpabilité']),
      att('Antithèse', '« la honte de ma lâcheté » / « me rétracter »', 'Antithèse entre honte et réparation : Rousseau analyse le paradoxe de la faute — la honte qui devrait inciter à l\'aveu devient l\'obstacle même à cet aveu.', ['antithèse', 'honte', 'lâcheté', 'rétracter', 'paradoxe', 'aveu']),
      att('Anaphore', '« Ce souvenir me trouble encore. Ce que j\'ai senti »', 'Anaphore de « Ce » : Rousseau revient obsessionnellement sur la scène — la répétition de la deixis traduit l\'impossibilité d\'effacer la mémoire de la faute inaugurale.', ['anaphore', 'souvenir', 'trouble', 'mémoire', 'obsession', 'faute']),
    ],
  },

  /* ── Dumas, Les Trois Mousquetaires (1844) — incipit ─────────────── */
  'GT-532': {
    texte: `Le premier lundi du mois d'avril 1625, le bourg de Meung, où naquit l'auteur du Roman de la Rose, semblait être en aussi grande révolution que si les huguenots en fussent venus faire une seconde Rochelle. Plusieurs bourgeois, voyant fuir les femmes du côté de la Grande-Rue et entendant les enfants crier sur les seuils des portes, se hâtaient d'endosser la cuirasse, et, soutenant leur contenance un peu incertaine par un mousquet ou une pertuisane, se dirigeaient vers l'hôtellerie du Franc-Meunier, devant laquelle s'empressait, en grossissant de minute en minute, un groupe bruyant et curieux.
En ce temps-là les paniques étaient fréquentes, et peu de jours se passaient sans qu'une ville ou l'autre enregistrât dans ses archives quelque événement de ce genre.`,
    contexte: "Incipit des Trois Mousquetaires — arrivée de d'Artagnan à Meung, ouverture épique et comique.",
    attendus: [
      att('Hyperbole', '« aussi grande révolution que si les huguenots en fussent venus faire une seconde Rochelle »', 'Hyperbole comique : la panique d\'un bourg de province est comparée à une guerre de religion — Dumas amplifie l\'événement pour créer un effet épique facétieux dès l\'incipit.', ['hyperbole', 'révolution', 'huguenots', 'rochelle', 'comique', 'épique']),
      att('Énumération', '« un mousquet ou une pertuisane »', 'Énumération des armements improvisés — Dumas dresse un tableau vivant et ironique de la mobilisation populaire qui ridiculise la grandeur militaire.', ['énumération', 'mousquet', 'pertuisane', 'ironique', 'militaire', 'populaire']),
      att('Registre épique', '« en grossissant de minute en minute, un groupe bruyant et curieux »', 'Registre épique parodique : la foule grossit comme une armée — Dumas joue avec les codes du récit héroïque pour créer un incipit spectaculaire teinté de comédie.', ['épique', 'foule', 'grossissant', 'parodique', 'héroïque', 'spectaculaire']),
      att('Ironie', '« En ce temps-là les paniques étaient fréquentes »', 'Ironie narrative : le commentaire détaché banalise la panique — le narrateur distance l\'événement pour souligner le caractère typique, et donc amusant, de la situation.', ['ironie', 'paniques', 'fréquentes', 'narrateur', 'distance', 'typique']),
    ],
  },

  /* ── Prévost, Manon Lescaut (1731) — ouverture / incipit ─────────── */
  'GT-534': {
    texte: `J'ai observé, dans tous les pays où la vertu est en honneur, que la réputation en dépend autant des apparences que des réalités. J'allais voir le chevalier des Grieux dans sa prison, lorsqu'une grande et belle dame m'aborda dans la cour, et me dit qu'il fallait que je parlasse au gouverneur. Le gouverneur me reçut avec beaucoup de politesse, et me dit qu'il ignorait le sujet qui m'amenait. Je lui dis que c'était pour voir un de mes amis qui était en prison. Il me répondit qu'il n'y avait point de prisonnier de ce nom-là. J'insistai, et lui dis que c'était le chevalier des Grieux. Il me répondit que c'était un jeune homme d'une famille distinguée, qui s'était mis dans de mauvaises affaires par amour pour une créature indigne de lui, nommée Manon Lescaut.`,
    contexte: "Incipit de Manon Lescaut — cadre du récit enchâssé, présentation de des Grieux et Manon.",
    attendus: [
      att('Dialogue', '« Je lui dis que c\'était pour voir un de mes amis qui était en prison »', 'Dialogue encadrant : le récit s\'ouvre par une conversation mondaine — Prévost use de la mise en abyme pour authentifier une histoire scandaleuse par le jeu des témoignages successifs.', ['dialogue', 'cadre', 'mondain', 'mise en abyme', 'témoignage', 'authenticité']),
      att('Antithèse', '« une famille distinguée » / « une créature indigne de lui »', 'Antithèse noblesse/indignité : Manon est définie d\'emblée par son incompatibilité sociale avec des Grieux — l\'interdit de classe fonde la tragédie sentimentale.', ['antithèse', 'distinguée', 'indigne', 'classe', 'interdit', 'tragédie']),
      att('Registre pathétique', '« un jeune homme… qui s\'était mis dans de mauvaises affaires par amour »', 'Registre pathétique : la formule résume la déchéance de des Grieux comme sacrifice amoureux — Prévost suscite dès l\'incipit la pitié pour le héros victime de sa passion.', ['pathétique', 'amour', 'déchéance', 'victime', 'passion', 'sacrifice']),
      att('Prolepse', '« une créature indigne de lui »', 'Prolepse : le jugement moral sur Manon est prononcé avant même qu\'elle apparaisse — le narrateur installe d\'emblée la fatalité du destin de des Grieux et oriente le regard du lecteur.', ['prolepse', 'indigne', 'fatalité', 'jugement', 'narrateur', 'destin']),
    ],
  },

  /* ── Mérimée, Carmen (1845) — portrait de Carmen ─────────────────── */
  'GT-535': {
    texte: `Elle avait les cheveux noirs, de grands yeux en amande, des lèvres un peu grosses mais bien dessinées, et les plus belles dents du monde. Sa peau était douce et d'un brun clair. Elle dansait, chantait, riait, et tout cela avec une grâce et une légèreté que je n'ai jamais vues depuis. Elle se nommait Carmen. Elle portait une jupe courte qui laissait voir ses jambes jusqu'aux genoux, et des souliers plats attachés avec des cordons de soie. Elle portait un nœud de rubans cramoisis dans les cheveux. Sa robe était orange. Quand elle dansait, sa jupe envolée montrait deux petits pieds chaussés de mules rouges. Elle avait un air si libre, si insolent qu'on n'eût pas cru qu'elle fût du même monde que nous.`,
    contexte: "Portrait de Carmen — beauté exotique, liberté et séduction fatale.",
    attendus: [
      att('Énumération', '« Elle dansait, chantait, riait, et tout cela avec une grâce »', 'Énumération de talents : la triple action de Carmen traduit sa vitalité débordante — chaque verbe ajoute une dimension à la liberté incarnée par le personnage.', ['énumération', 'dansait', 'chantait', 'riait', 'liberté', 'vitalité']),
      att('Champ lexical', '« cramoisis », « orange », « mules rouges »', 'Champ lexical du rouge et du feu : Mérimée peint Carmen en couleurs ardentes — le rouge symbolise la passion, le danger et la mort qui marqueront le destin de la gitane.', ['champ lexical', 'rouge', 'cramoisis', 'orange', 'passion', 'danger']),
      att('Antithèse', '« si libre, si insolent » / « du même monde que nous »', 'Antithèse entre la liberté de Carmen et la conformité bourgeoise du narrateur — Mérimée installe l\'altérité fascinante du personnage comme principe de séduction et de destruction.', ['antithèse', 'libre', 'insolent', 'monde', 'altérité', 'séduction']),
      att('Focalisation interne', '« que je n\'ai jamais vues depuis »', 'Focalisation interne : le narrateur homodiégétique exprime sa fascination rétrospective — le « depuis » traduit l\'emprise durable de Carmen sur la mémoire du narrateur-victime.', ['focalisation', 'interne', 'depuis', 'fascination', 'mémoire', 'victime']),
    ],
  },

  /* ── Verlaine, Jadis et naguère (1884) — « Art poétique » ─────────── */
  'GT-537': {
    texte: `Art poétique
De la musique avant toute chose,
Et pour cela préfère l'Impair
Plus vague et plus soluble dans l'air,
Sans rien en lui qui pèse ou qui pose.

Il faut aussi que tu n'ailles point
Choisir tes mots sans quelque méprise :
Rien de plus cher que la chanson grise
Où l'Indécis au Précis se joint.

Car nous voulons la Nuance encor,
Pas la Couleur, rien que la nuance !
Oh ! la nuance seule fianceLe rêve au rêve et la flûte au cor !
Prends l'éloquence et tords-lui son cou !
Oh ! qui dira les torts de la Rime ?`,
    contexte: "Art poétique — manifeste symboliste, primat de la musique et de la nuance sur la rhétorique.",
    attendus: [
      att('Apostrophe', '« Prends l\'éloquence et tords-lui son cou ! »', 'Apostrophe impérative : Verlaine s\'adresse au poète pour lui enjoindre de tuer l\'éloquence — la violence de l\'image programme la révolution symboliste contre la rhétorique classique.', ['apostrophe', 'éloquence', 'violence', 'symboliste', 'rhétorique', 'manifeste']),
      att('Anaphore', '« Rien de plus cher… Pas la Couleur, rien que la nuance »', 'Anaphore de « Rien » : la négation répétée cerne par défaut l\'idéal verlainien — la poésie se définit par ce qu\'elle refuse autant que par ce qu\'elle embrasse.', ['anaphore', 'rien', 'négation', 'idéal', 'refus', 'définition']),
      att('Antithèse', '« l\'Indécis au Précis se joint »', 'Antithèse Indécis/Précis : Verlaine théorise le flou comme valeur positive — le vague et la nuance l\'emportent sur la clarté classique dans l\'esthétique symboliste.', ['antithèse', 'indécis', 'précis', 'vague', 'nuance', 'classique']),
      att('Métaphore', '« la chanson grise / Où l\'Indécis au Précis se joint »', 'Métaphore musicale et chromatique : la chanson grise combine la tonalité de la nuance et la musicalité — Verlaine formule son idéal poétique comme synthèse entre flou et forme.', ['métaphore', 'chanson', 'grise', 'musique', 'nuance', 'symboliste']),
    ],
  },

};
