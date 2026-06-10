/**
 * Entrées GT-772 → GT-987 (fichiers extra13–extra21).
 * Format compact : [id, titre, auteur, oeuvre, genre, diff, texte, contexte, attendus[]]
 */
import { att } from '../gtext-enrichment-lib.mjs';

export function e(id, titre, auteur, oeuvre, genre, diff, texte, contexte, attendus) {
  return { id, titre, auteur, oeuvre, genre, diff, texte, contexte, attendus };
}

export function mapData(rows) {
  return rows.map(([id, titre, auteur, oeuvre, genre, diff, texte, contexte, atts]) =>
    e(id, titre, auteur, oeuvre, genre, diff, texte, contexte, atts.map(([p, c, i, k]) => att(p, c, i, k)))
  );
}

// ── Fichier 13 : GT-772–795 ──
export const DATA13 = [
  ['GT-772', 'Don Quichotte (I, 1)', 'Cervantès', 'Don Quichotte (1605, trad. fr.)', 'Roman', 2,
    `Dans un village de la Manche, dont je ne veux pas me rappeler le nom, vivait, il n'y a pas longtemps, un de ces gentilshommes qui ont lance au râtelier, rondache antique, maigre rosse et lévrier de chasse. Un pot-au-feu plus souvent de bœuf que de mouton, salpicón la plupart des soirs, des duelos y quebrantos le samedi, lentilles le vendredi, quelque pigeonneau de surcroît le dimanche, consumaient les trois quarts de son revenu. Le reste passait en casaque de fin drap, haut-de-chausses de velours pour les fêtes, pantoufles de même étoffe; et les jours de semaine, il se faisait honneur de son meilleur gros drap.`,
    'Incipit romanesque : naissance du héros parodique.',
    [['Incipit', '« Dans un village de la Manche »', "L'ouverture installe un cadre concret avant la dérive imaginaire.", ['incipit', 'cadre', 'réalisme', 'roman']],
     ['Accumulation', '« lance au râtelier, rondache antique, maigre rosse »', "Portrait comique du gentilhomme appauvri.", ['accumulation', 'portrait', 'comique', 'chevalerie']],
     ['Registre burlesque', '« dont je ne veux pas me rappeler le nom »', "Feinte négligence du narrateur — parodie héroïque.", ['burlesque', 'narrateur', 'parodie', 'ironie']]]],
  ['GT-773', 'Werther (10 mai)', 'Goethe', 'Les Souffrances du jeune Werther (1774, trad. fr.)', 'Roman', 2,
    `Quelle douceur pour mon cœur de se perdre dans cette nature! Quand le brouillard de la vallée monte devant moi, quand le soleil de midi repose sur la masse impénétrable de ma forêt, et que quelques rayons seulement se glissent jusque dans le sanctuaire; quand, couché dans les hautes herbes auprès du ruisseau, je découvre, de la terre jusqu'à moi, mille petites plantes inconnues; quand je sens de plus près le monde innombrable des vermisseaux, des insectes, et que je sens la présence du Tout-Puissant qui nous a créés à son image, le souffle du Très-Aimé qui nous porte et nous soutient dans une éternelle volupté.`,
    'Lettre lyrique : Werther confond paysage, émotion et élévation spirituelle.',
    [['Anaphore', '« quand ... quand ... quand »', "Reprise rythmique traduisant l'expansion de la sensibilité.", ['anaphore', 'lyrisme', 'nature', 'sensibilité']],
     ['Champ lexical', '« brouillard », « forêt », « ruisseau », « plantes »', "Le monde naturel devient miroir de l'âme passionnée.", ['nature', 'paysage', 'âme', 'romantisme']],
     ['Registre lyrique', '« Quelle douceur pour mon cœur »', "La première personne fait de l'expérience un absolu intime.", ['lyrique', 'je', 'émotion', 'werther']]]],
  ['GT-774', 'Deux villes (incipit)', 'Dickens', 'Le Conte de deux cités (1859, trad. fr.)', 'Roman', 2,
    `C'était le meilleur des temps, c'était le pire des temps; c'était l'âge de la sagesse, c'était l'âge de la folie; c'était l'époque de la croyance, c'était l'époque de l'incrédulité; c'était la saison de la lumière, c'était la saison des ténèbres; c'était le printemps de l'espérance, c'était l'hiver du désespoir. Nous avions tout devant nous, nous n'avions rien devant nous; nous allions tous directement au ciel, nous allions tous directement dans l'autre sens. En un mot, cette époque ressemblait tellement à la nôtre que ses autorités les plus bruyantes insistaient pour qu'on ne la reçût, en bien ou en mal, qu'au superlatif.`,
    'Ouverture historique : la Révolution sous le signe du contraste.',
    [['Antithèse', '« le meilleur des temps ... le pire des temps »', "Système binaire dramatisant une époque déchirée.", ['antithèse', 'histoire', 'contraste', 'révolution']],
     ['Parallélisme', '« c\'était ... c\'était ... »', "Rythme oratoire de l'incipit.", ['parallélisme', 'rythme', 'oratoire', 'incipit']],
     ['Hyperbole', '« qu\'au superlatif »', "Excès idéologique du moment historique.", ['hyperbole', 'superlatif', 'narrateur', 'critique']]]],
  ['GT-775', 'Le Corbeau (extrait)', 'Poe', 'Le Corbeau (1845, trad. Mallarmé)', 'Poésie', 3,
    `Une fois, sur le minuit lugubre, pendant que je m'appesantissais, faible et fatigué, sur maint curieux et bizarre volume de doctrine oubliée, pendant que je dodelinais la tête, presque assoupi soudain, il se fit comme un tapotement, comme de quelqu'un frappant doucement, frappant à la porte de ma chambre. « C'est quelque visiteur, murmurai-je, qui frappe à la porte de ma chambre; ce n'est que cela, et rien de plus. » Et le Corbeau, perché, ne dit qu'un mot, comme si son âme en ce seul mot se répandait: « Jamais plus. »`,
    'Poème narratif : deuil et hantise dans la voix répétée de l\'oiseau.',
    [['Refrain', '« Jamais plus »', "Refrain fixant l'irréversibilité du deuil.", ['refrain', 'deuil', 'fatalité', 'poe']],
     ['Atmosphère', '« minuit lugubre »', "Décor nocturne d'angoisse fantastique.", ['fantastique', 'nuit', 'angoisse', 'atmosphère']],
     ['Gradation sonore', '« frappant doucement, frappant »', "Répétition auditive matérialisant l'obsession.", ['répétition', 'son', 'obsession', 'narrateur']]]],
  ['GT-776', 'Essais (I, 26)', 'Montaigne', 'Essais (1580)', 'Idées', 2,
    `Savoir par cœur n'est pas savoir: c'est tenir ce qu'on a donné en garde à sa mémoire. Ce qu'on sait droitement, on en dispose sans regarder au patron, sans tourner les yeux vers son livre. Fâcheuse suffisance, qu'une suffisance purement livresque! Je voudrais qu'on fût soigneux de choisir un conducteur qui eût plutôt la tête bien faite que bien pleine, et qu'on y requît tous les deux, mais plus les mœurs et l'entendement que la science. Qu'il fasse tout passer par l'étamine et ne loge rien en sa tête par simple autorité et à crédit.`,
    'Réflexion humaniste sur l\'éducation et le jugement.',
    [['Antithèse', '« tête bien faite que bien pleine »', "Montaigne oppose jugement vivant et érudition passive.", ['antithèse', 'éducation', 'jugement', 'humanisme']],
     ['Maxime', '« Savoir par cœur n\'est pas savoir »', "Pédagogie de l'appropriation critique.", ['maxime', 'mémoire', 'savoir', 'pédagogie']],
     ['Métaphore', '« passer par l\'étamine »', "L'élève doit filtrer les idées.", ['métaphore', 'esprit critique', 'autorité', 'liberté']]]],
  ['GT-777', 'Traité sur la tolérance', 'Voltaire', 'Traité sur la tolérance (1763)', 'Idées', 2,
    `Ce n'est donc plus aux hommes que je m'adresse; c'est à toi, Dieu de tous les êtres, de tous les mondes et de tous les temps: s'il est permis à de faibles créatures, perdues dans l'immensité et imperceptibles au reste de l'univers, d'oser te demander quelque chose, à toi qui as tout donné, à toi dont les décrets sont immuables comme éternels, daigne regarder en pitié les erreurs attachées à notre nature; que ces erreurs ne fassent point nos calamités. Tu ne nous as point donné un cœur pour nous haïr, et des mains pour nous égorger; fais que nous nous aidions mutuellement à supporter le fardeau d'une vie pénible et passagère.`,
    'Prière philosophique : argumentation par l\'universalité religieuse.',
    [['Apostrophe', '« c\'est à toi, Dieu de tous les êtres »', "Invocation donnant une portée universelle au plaidoyer.", ['apostrophe', 'dieu', 'universel', 'tolérance']],
     ['Antithèse', '« nous haïr » / « nous aidions mutuellement »', "Voltaire oppose violence confessionnelle et fraternité.", ['antithèse', 'haine', 'fraternité', 'lumières']],
     ['Registre oratoire', '« daigne regarder en pitié »', "Ton solennel — supplication civique.", ['oratoire', 'prière', 'civique', 'voltaire']]]],
  ['GT-778', 'Discours sur l\'inégalité', 'Rousseau', 'Discours (1755)', 'Idées', 3,
    `Le premier qui, ayant enclos un terrain, s'avisa de dire: Ceci est à moi, et trouva des gens assez simples pour le croire, fut le vrai fondateur de la société civile. Que de crimes, de guerres, de meurtres, que de misères et d'horreurs n'eût point épargnés au genre humain celui qui, arrachant les pieux ou comblant le fossé, eût crié à ses semblables: Gardez-vous d'écouter cet imposteur; vous êtes perdus, si vous oubliez que les fruits sont à tous, et que la terre n'est à personne. Mais il y a grande apparence qu'alors les choses en étaient déjà venues au point de ne pouvoir plus durer comme elles étaient.`,
    'Critique de la propriété et du contrat social inégal.',
    [['Hypothèse', '« Le premier qui ... Ceci est à moi »', "Scène d'origine dénonçant l'injustice.", ['propriété', 'origine', 'inégalité', 'polémique']],
     ['Exclamation', '« Que de crimes, de guerres, de meurtres »', "Énumération dramatisant les effets de l'appropriation.", ['énumération', 'violence', 'histoire', 'critique']],
     ['Maxime', '« la terre n\'est à personne »', "Droit naturel contre l'ordre social établi.", ['sentence', 'nature', 'société', 'rousseau']]]],
  ['GT-779', 'De l\'esprit des lois (XI, 6)', 'Montesquieu', 'De l\'esprit des lois (1748)', 'Idées', 2,
    `Il y a dans chaque État trois sortes de pouvoirs: la puissance législative, la puissance exécutrice des choses qui dépendent du droit des gens, et la puissance exécutrice de celles qui dépendent du droit civil. Par la première, le prince ou le magistrat fait des lois pour un temps ou pour toujours. Par la seconde, il fait la paix ou la guerre, envoie ou reçoit des ambassades, établit la sûreté. Par la troisième, il punit les crimes, ou juge les différends des particuliers. Lorsque, dans la même personne, la puissance législative est réunie à la puissance exécutrice, il n'y a point de liberté.`,
    'Séparation des pouvoirs comme garantie de liberté.',
    [['Définition', '« trois sortes de pouvoirs »', "Raisonnement par distinction conceptuelle.", ['définition', 'pouvoirs', 'politique', 'lois']],
     ['Anaphore', '« Par la première ... Par la seconde ... Par la troisième »', "Progression clarifiant la mécanique institutionnelle.", ['anaphore', 'progression', 'institution', 'clarté']],
     ['Thèse', '« il n\'y a point de liberté »', "Concentration du pouvoir détruit l'État libre.", ['thèse', 'liberté', 'séparation', 'montesquieu']]]],
  ['GT-780', 'Le Loup et l\'Agneau', 'La Fontaine', 'Fables (1668)', 'Poésie', 1,
    `La raison du plus fort est toujours la meilleure:
Nous l'allons montrer tout à l'heure.
Un Agneau se désaltérait
Dans le courant d'une onde pure.
Un Loup survient à jeun, qui cherchait aventure,
Et que la faim en ces lieux attirait.
Qui te rend si hardi de troubler mon breuvage?
Dit cet animal plein de rage:
Tu seras châtié de ta témérité.
Sire, répond l'Agneau, que Votre Majesté
Ne se mette pas en colère;
Mais plutôt qu'elle considère
Que je me vas désaltérant
Dans le courant,
Plus de vingt pas au-dessous d'Elle.`,
    'Fable argumentative : l\'arbitraire de la force.',
    [['Morale', '« La raison du plus fort est toujours la meilleure »', "Moralité initiale orientant la lecture politique.", ['morale', 'force', 'justice', 'fable']],
     ['Dialogue', '« Qui te rend si hardi »', "Discours direct — procès truqué.", ['dialogue', 'procès', 'injustice', 'allégorie']],
     ['Ironie', '« Votre Majesté »', "Politesse de l'agneau accentuant la violence du loup.", ['ironie', 'politesse', 'domination', 'la fontaine']]]],
  ['GT-781', 'Tartuffe (I, 5)', 'Molière', 'Tartuffe (1669)', 'Théâtre', 2,
    `ORGON
Ha! si vous aviez vu comme j'en fis rencontre,
Vous auriez pris pour lui l'amitié que je montre.
Chaque jour à l'église il venait, d'un air doux,
Tout vis-à-vis de moi se mettre à deux genoux.
Il attirait les yeux de l'assemblée entière
Par l'ardeur dont au Ciel il poussait sa prière;
Il faisait des soupirs, de grands élancements,
Et baisait humblement la terre à tous moments;
Et lorsque je sortais, il me devançait vite,
Pour m'aller à la porte offrir de l'eau bénite.
DORINE
Et Tartuffe?
ORGON
Le pauvre homme!`,
    'Comédie de l\'aveuglement dévot.',
    [['Comique de caractère', '« Le pauvre homme! »', "Refrain d'Orgon manifestant son aveuglement.", ['comique', 'aveuglement', 'orgon', 'tartuffe']],
     ['Accumulation', '« soupirs, de grands élancements »', "Excès de dévotion signalant l'hypocrisie.", ['accumulation', 'hypocrisie', 'dévotion', 'satire']],
     ['Ironie dramatique', '« Et Tartuffe? »', "Le spectateur comprend ce qu'Orgon refuse de voir.", ['ironie dramatique', 'spectateur', 'imposture', 'théâtre']]]],
  ['GT-782', 'Phèdre (I, 3)', 'Racine', 'Phèdre (1677)', 'Théâtre', 3,
    `PÈDRE
Je le vis, je rougis, je pâlis à sa vue;
Un trouble s'éleva dans mon âme éperdue;
Mes yeux ne voyaient plus, je ne pouvais parler;
Je sentis tout mon corps et transir et brûler.
Je reconnus Vénus et ses feux redoutables,
D'un sang qu'elle poursuit tourments inévitables.
Par des vœux assidus je crus les détourner:
Je lui bâtis un temple, et pris soin de l'orner;
De victimes moi-même à toute heure entourée,
Je cherchais dans leurs flancs ma raison égarée.`,
    'Aveu tragique : passion comme fatalité divine.',
    [['Parallélisme', '« Je le vis, je rougis, je pâlis »', "Rythme ternaire du choc amoureux.", ['parallélisme', 'passion', 'aveu', 'tragédie']],
     ['Antithèse', '« transir et brûler »', "Ambivalence douloureuse du désir.", ['antithèse', 'désir', 'douleur', 'racine']],
     ['Mythologie', '« Je reconnus Vénus »', "Amour inscrit dans la fatalité tragique.", ['mythologie', 'fatalité', 'vénus', 'phèdre']]]],
  ['GT-783', 'Le Cid (I, 6)', 'Corneille', 'Le Cid (1637)', 'Théâtre', 2,
    `RODRIGUE
Percé jusques au fond du cœur
D'une atteinte imprévue aussi bien que mortelle,
Misérable vengeur d'une juste querelle,
Et malheureux objet d'une injuste rigueur,
Je demeure immobile, et mon âme abattue
Cède au coup qui me tue.
Si près de voir mon feu récompensé,
Ô Dieu! l'étrange peine!
En cet affront mon père est l'offensé,
Et l'offenseur le père de Chimène.
Que je sens de rudes combats!
Contre mon propre honneur mon amour s'intéresse.`,
    'Dilemme cornélien : amour et devoir.',
    [['Antithèse', '« l\'offensé ... l\'offenseur »', "Impossible choix du héros.", ['antithèse', 'dilemme', 'honneur', 'amour']],
     ['Registre tragique', '« Percé jusques au fond du cœur »', "Souffrance morale comme blessure réelle.", ['tragique', 'souffrance', 'honneur', 'corneille']],
     ['Exclamation', '« Ô Dieu! l\'étrange peine! »', "Urgence du conflit dramatique.", ['exclamation', 'pathétique', 'conflit', 'rodrigue']]]],
  ['GT-784', 'Demain, dès l\'aube', 'Hugo', 'Les Contemplations (1856)', 'Poésie', 1,
    `Demain, dès l'aube, à l'heure où blanchit la campagne,
Je partirai. Vois-tu, je sais que tu m'attends.
J'irai par la forêt, j'irai par la montagne.
Je ne puis demeurer loin de toi plus longtemps.
Je marcherai les yeux fixés sur mes pensées,
Sans rien voir au dehors, sans entendre aucun bruit,
Seul, inconnu, le dos courbé, les mains croisées,
Triste, et le jour pour moi sera comme la nuit.
Je ne regarderai ni l'or du soir qui tombe,
Ni les voiles au loin descendant vers Harfleur,
Et quand j'arriverai, je mettrai sur ta tombe
Un bouquet de houx vert et de bruyère en fleur.`,
    'Élégie : trajet vers la tombe de la fille disparue.',
    [['Progression', '« Je partirai ... J\'irai ... Je marcherai »', "Marche physique comme chemin du deuil.", ['progression', 'deuil', 'élégie', 'hugo']],
     ['Antithèse', '« le jour ... comme la nuit »', "Le monde extérieur s'efface devant la douleur.", ['antithèse', 'douleur', 'intériorité', 'lyrique']],
     ['Chute', '« sur ta tombe »', "Destination funèbre révélée.", ['chute', 'tombe', 'émotion', 'poésie']]]],
  ['GT-785', 'L\'Albatros', 'Baudelaire', 'Les Fleurs du mal (1857)', 'Poésie', 2,
    `Souvent, pour s'amuser, les hommes d'équipage
Prennent des albatros, vastes oiseaux des mers,
Qui suivent, indolents compagnons de voyage,
Le navire glissant sur les gouffres amers.
A peine les ont-ils déposés sur les planches,
Que ces rois de l'azur, maladroits et honteux,
Laissent piteusement leurs grandes ailes blanches
Comme des avirons traîner à côté d'eux.
Ce voyageur ailé, comme il est gauche et veule!
Lui, naguère si beau, qu'il est comique et laid!
Le Poète est semblable au prince des nuées.`,
    'Allégorie du poète : grandeur et inadaptation sociale.',
    [['Allégorie', '« Le Poète est semblable au prince des nuées »', "L'oiseau identifié au créateur.", ['allégorie', 'poète', 'société', 'baudelaire']],
     ['Antithèse', '« rois de l\'azur » / « comique et laid »', "Chute du sublime vers le ridicule.", ['antithèse', 'sublime', 'ridicule', 'modernité']],
     ['Ironie', '« pour s\'amuser »', "Cruauté collective banalisée.", ['ironie', 'cruauté', 'foule', 'symbolisme']]]],
  ['GT-786', 'Le Dormeur du val', 'Rimbaud', 'Poésies (1870)', 'Poésie', 1,
    `C'est un trou de verdure où chante une rivière
Accrochant follement aux herbes des haillons
D'argent; où le soleil, de la montagne fière,
Luit: c'est un petit val qui mousse de rayons.
Un soldat jeune, bouche ouverte, tête nue,
Et la nuque baignant dans le frais cresson bleu,
Dort; il est étendu dans l'herbe, sous la nue,
Pâle dans son lit vert où la lumière pleut.
Les pieds dans les glaïeuls, il dort. Souriant comme
Sourirait un enfant malade, il fait un somme:
Nature, berce-le chaudement: il a froid.
Les parfums ne font pas frissonner sa narine;
Il dort dans le soleil, la main sur sa poitrine,
Tranquille. Il a deux trous rouges au côté droit.`,
    'Poème de guerre : idylle vers la mort.',
    [['Chute', '« Il a deux trous rouges au côté droit »', "Dernier vers reconfigurant le tableau.", ['chute', 'guerre', 'mort', 'rimbaud']],
     ['Personnification', '« Nature, berce-le »', "Nature mère impuissante.", ['personnification', 'nature', 'pathétique', 'poésie']],
     ['Contraste', '« trou de verdure » / « trous rouges »', "Violence guerrière par le contraste visuel.", ['contraste', 'couleurs', 'violence', 'lyrique']]]],
  ['GT-787', 'Chanson d\'automne', 'Verlaine', 'Poèmes saturniens (1866)', 'Poésie', 1,
    `Les sanglots longs
Des violons
De l'automne
Blessent mon cœur
D'une langueur
Monotone.
Tout suffocant
Et blême, quand
Sonne l'heure,
Je me souviens
Des jours anciens
Et je pleure;
Et je m'en vais
Au vent mauvais
Qui m'emporte
Deçà, delà,
Pareil à la
Feuille morte.
Le soir s'allonge et la cloche descend dans l'air humide, la ville s'efface, et mon pas hésite comme une voix qui s'éteint dans le froid.`,
    'Musique mélancolique : paysage saisonnier et moi.',
    [['Allitération', '« sanglots longs / violons »', "Plainte musicale nasale.", ['allitération', 'musicalité', 'mélancolie', 'verlaine']],
     ['Comparaison', '« Pareil à la feuille morte »', "Sujet emporté par le temps.", ['comparaison', 'automne', 'temps', 'destin']],
     ['Registre lyrique', '« je me souviens ... je pleure »', "Émotion intime gouvernant le poème.", ['lyrique', 'souvenir', 'tristesse', 'poésie']]]],
  ['GT-788', 'Zone (ouverture)', 'Apollinaire', 'Alcools (1913)', 'Poésie', 2,
    `A la fin tu es las de ce monde ancien.
Bergère ô tour Eiffel le troupeau des ponts bêle ce matin.
Tu en as assez de vivre dans l'antiquité grecque et romaine.
Ici même les automobiles ont l'air d'être anciennes.
La religion seule est restée toute neuve, la religion est restée simple comme les hangars de Port-Aviation.
Seul en Europe tu n'es pas antique ô Christianisme.
L'Européen le plus moderne c'est vous pape Pie X.
Et toi que les fenêtres observent la honte te retient d'entrer dans une église et de t'y confesser ce matin.`,
    'Poétique de la modernité : collage urbain.',
    [['Apostrophe', '« Bergère ô tour Eiffel »', "Pastorale renouvelée en ville.", ['apostrophe', 'modernité', 'ville', 'apollinaire']],
     ['Antithèse', '« monde ancien » / « moderne »', "Tension héritage et nouveauté.", ['antithèse', 'ancien', 'moderne', 'avant-garde']],
     ['Vers libre', '« A la fin tu es las de ce monde ancien »', "Flux de conscience.", ['vers libre', 'rythme', 'subjectivité', 'alcools']]]],
  ['GT-789', 'Le Lac', 'Lamartine', 'Méditations poétiques (1820)', 'Poésie', 2,
    `Ainsi, toujours poussés vers de nouveaux rivages,
Dans la nuit éternelle emportés sans retour,
Ne pourrons-nous jamais sur l'océan des âges
Jeter l'ancre un seul jour?
Ô lac! l'année à peine a fini sa carrière,
Et près des flots chéris qu'elle devait revoir,
Regarde! je viens seul m'asseoir sur cette pierre
Où tu la vis s'asseoir!
Tu mugissais ainsi sous ces roches profondes;
Ainsi tu te brisais sur leurs flancs déchirés;
Ainsi le vent jetait l'écume de tes ondes
Sur ses pieds adorés.`,
    'Élégie sur le temps et la perte.',
    [['Interrogation', '« Ne pourrons-nous jamais »', "Question existentielle.", ['interrogation', 'temps', 'fuite', 'lamartine']],
     ['Apostrophe', '« Ô lac! »', "Paysage confident.", ['apostrophe', 'nature', 'souvenir', 'romantisme']],
     ['Métaphore', '« l\'océan des âges »', "Temps figuré comme mer.", ['métaphore', 'temps', 'durée', 'élégie']]]],
  ['GT-790', 'La Nuit de mai', 'Musset', 'Poésies nouvelles (1835)', 'Poésie', 2,
    `POÈTE
Poète, prends ton luth et me donne un baiser;
La fleur de l'églantier sent ses bourgeons éclore,
Le printemps naît ce soir, les vents vont s'embraser,
Et l'odeur de tes vers se répandra sur l'aurore.
MUSE
Les plus désespérés sont les chants les plus beaux,
Et j'en sais d'immortels qui sont de purs sanglots.
Lorsque le pélican, lassé d'un long voyage,
Dans les brouillards du soir retourne à ses roseaux,
Ses petits affamés courent sur le rivage
En le voyant au loin s'abattre sur les eaux.`,
    'Dialogue lyrique : souffrance source de création.',
    [['Dialogue', '« POÈTE ... MUSE »', "Inspiration comme combat.", ['dialogue', 'muse', 'poète', 'création']],
     ['Maxime', '« Les plus désespérés sont les chants les plus beaux »', "Esthétique du malheur.", ['maxime', 'désespoir', 'beauté', 'romantisme']],
     ['Symbole', '« le pélican »', "Poète qui se sacrifie.", ['symbole', 'pélican', 'sacrifice', 'lyrisme']]]],
  ['GT-791', 'Le Père Goriot (incipit)', 'Balzac', 'Le Père Goriot (1835)', 'Roman', 2,
    `Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux, sans que jamais la médisance ait attaqué les mœurs de cet honorable établissement. Mais aussi, depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. Néanmoins, en 1819, époque où commence ce drame, il s'y trouvait une pauvre jeune fille.`,
    'Incipit réaliste du monde balzacien.',
    [['Précision', '« rue Neuve-Sainte-Geneviève »', "Ancrage topographique parisien.", ['réalisme', 'topographie', 'paris', 'balzac']],
     ['Ironie', '« honorable établissement »', "Médiocrité suggérée.", ['ironie', 'narrateur', 'milieu', 'société']],
     ['Annonce', '« époque où commence ce drame »', "Destin tragique annoncé.", ['drame', 'annonce', 'destin', 'roman']]]],
  ['GT-792', 'Madame Bovary (I, 1)', 'Flaubert', 'Madame Bovary (1857)', 'Roman', 2,
    `Nous étions à l'étude, quand le proviseur entra, suivi d'un nouveau habillé en bourgeois et d'un garçon de classe qui portait un grand pupitre. Ceux qui dormaient se réveillèrent, et chacun se leva comme surpris dans son travail. Le proviseur nous fit signe de nous rasseoir; puis, se tournant vers le maître d'études: « Monsieur Roger, lui dit-il à demi-voix, voici un élève que je vous recommande; il entre en cinquième. Si son travail et sa conduite sont méritoires, il passera dans les grands, où l'appelle son âge. » Resté dans l'angle, derrière la porte, si bien qu'on l'apercevait à peine, le nouveau était un gars de la campagne.`,
    'Entrée maladroite de Charles.',
    [['Focalisation', '« Nous étions à l\'étude »', "Regard collectif sur le personnage.", ['focalisation', 'collectif', 'regard', 'flaubert']],
     ['Réalisme', '« habillé en bourgeois »', "Hiérarchie scolaire et sociale.", ['réalisme', 'social', 'école', 'roman']],
     ['Anticipation', '« le nouveau »', "Inadaptation annoncée.", ['anticipation', 'personnage', 'inadaptation', 'charles']]]],
  ['GT-793', 'Germinal (I, 1)', 'Zola', 'Germinal (1885)', 'Roman', 3,
    `Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il ne voyait même pas le sol noir, et il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel, le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres.`,
    'Incipit naturaliste : marche nocturne hostile.',
    [['Métaphore', '« rafales larges comme sur une mer »', "Plaine océanique désolée.", ['métaphore', 'paysage', 'désolation', 'zola']],
     ['Champ lexical', '« obscurité », « encre », « ténèbres »', "Noirceur du drame social.", ['champ lexical', 'noir', 'mine', 'naturalisme']],
     ['Focalisation externe', '« un homme suivait seul »', "Silhouette anonyme.", ['focalisation', 'anonymat', 'milieu', 'roman']]]],
  ['GT-794', 'Boule de suif (départ)', 'Maupassant', 'Boule de suif (1880)', 'Roman', 2,
    `Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, éreintés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait surtout des mobilisés, gens paisibles, rentiers tranquilles, ployant sous le poids du fusil; puis de petits mobiles alertes, faciles à l'épouvante comme à l'enthousiasme; puis des francs-tireurs, héros de parade, et des soldats vaincus.`,
    'Ouverture de guerre : désordre militaire.',
    [['Accumulation', '« noirs, barbus, sales, harassés »', "Épuisement collectif.", ['accumulation', 'guerre', 'épuisement', 'maupassant']],
     ['Antithèse', '« épouvante » / « enthousiasme »', "Instabilité des foules.", ['antithèse', 'foule', 'instabilité', 'réalisme']],
     ['Description', '« sans drapeau, sans régiment »', "Perte des signes militaires.", ['description', 'défaite', 'armée', 'histoire']]]],
  ['GT-795', 'Le Rouge et le Noir (ouverture)', 'Stendhal', 'Le Rouge et le Noir (1830)', 'Roman', 2,
    `La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, c'est une des branches du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure qui semble promettre le bonheur à tout le monde.`,
    'Incipit ironique : décor provincial harmonieux.',
    [['Cadre', '« la petite ville de Verrières »', "Ancrage local.", ['cadre', 'province', 'réalisme', 'stendhal']],
     ['Lexique positif', '« jolies », « blanches », « propreté »', "Contraste critique futur.", ['lexique', 'ironie', 'bourgeoisie', 'roman']],
     ['Attente', '« semble promettre le bonheur »', "Promesse suspecte.", ['attente', 'promesse', 'satire', 'narrateur']]]],
];

export const EXTRA13 = mapData(DATA13);

export { DATA14, DATA15, DATA16, DATA17, DATA18, DATA19, DATA20, DATA21 } from './_data-14-21.mjs';
