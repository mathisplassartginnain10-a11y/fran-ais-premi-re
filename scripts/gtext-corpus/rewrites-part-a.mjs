/**
 * Réécritures manuelles — lot extra16 (GT-441 → GT-488).
 */
import { att } from '../gtext-enrichment-lib.mjs';

export const REWRITES_PART_A = {
  'GT-441': {
    texte: `Comme je descendais des Fleuves impassibles,
Je ne me sentis plus guidé par les haleurs :
Des Peaux-Rouges criards les avaient pris pour cibles
Les ayant cloués nus aux poteaux colorés.

J'ai été l'hiver sonné du trompeau des calmes.
J'ai suivi, longs mois, la houle furieuse des mers
Et n'ai pas eu plus souvent ma victoire aux fêtes
Que l'étoile au fond du marais.

Je me suis baigné dans le Poème
De la Mer, infusé d'astres, et luisant,
Devinant alors le chant vert et glauque
Des rythmes insensés qui sont l'homme et la mer et la vengeance !

Et voilà que je suis devenu un enfant
Perdu dans ce port, tandis que les flots
Roulent leur infini sur mes pieds nus.`,
    contexte: "Ouverture du Bateau ivre — descente initiatique et ivresse poétique.",
    attendus: [
      att('Métaphore', "« Je me suis baigné dans le Poème / De la Mer »", "Métaphore : Rimbaud fusionne le moi poétique et l'élément marin — la mer devient matière et langage à la fois.", ['métaphore', 'mer', 'poème', 'fusion', 'initiation', 'rimbaud']),
      att('Personnification', "« Des Fleuves impassibles »", "Personnification : les fleuves semblent indifférents au poète abandonné — la nature accueille puis rejette le bateau.", ['personnification', 'fleuves', 'impassibles', 'nature', 'abandon', 'voyage']),
      att('Registre épique', "« longs mois, la houle furieuse des mers »", "Registre épique : l'amplification temporelle et la houle « furieuse » élèvent le récit au niveau du grand voyage héroïque.", ['épique', 'houle', 'mers', 'voyage', 'héroïque', 'temps']),
      att('Symbolisme', "« Perdu dans ce port »", "Symbolisme : le port final traduit l'épuisement de l'ivresse créatrice — le poète enfant retrouve la rive après l'errance.", ['symbolisme', 'port', 'enfant', 'épuisement', 'ivresse', 'errance']),
    ],
  },
  'GT-444': {
    texte: `Ainsi, toujours poussés vers de nouveaux rivages,
Dans la nuit éternelle emportés sans retour,
Ne pourrons-nous jamais sur l'océan des âges
Jeter l'ancre un seul jour ?

Ô lac ! l'année à peine a fini sa carrière,
Et, près des flots chéris qu'elle devait revoir,
Regarde ! je viens seul m'asseoir sur cette pierre
Où tu la vis s'asseoir !

Tu mugissais ainsi sous ces roches profondes ;
Ainsi tu te brisais aux rivages mouillés ;
Ainsi le vent jetait l'écume de tes ondes
Sur ses pieds adorés.

Un soir, t'en souvient-il ? nous voguions en silence ;
Un bruit léger dans l'eau roulait le gouvernail ;
Et cette voix, confusément rassurante,
Disait : « L'heure présente est sainte ; enfin voici l'heure ! »`,
    contexte: "Le Lac — élégie lamartinienne sur le temps et le souvenir amoureux.",
    attendus: [
      att('Comparaison', "« sur l'océan des âges »", "Comparaison : la vie est un voyage sans retour — l'image maritime traduit l'irrémédiable écoulement du temps.", ['comparaison', 'océan', 'âges', 'temps', 'voyage', 'lamartine']),
      att('Apostrophe', "« Ô lac ! »", "Apostrophe : le poète interpelle le lac témoin du passé — le paysage devient interlocuteur du deuil amoureux.", ['apostrophe', 'lac', 'témoin', 'souvenir', 'deuil', 'lyrique']),
      att('Anaphore', "« Ainsi, toujours poussés »", "Anaphore sur « ainsi » : la reprise structure l'élegie et martèle l'idée d'un mouvement sans fin.", ['anaphore', 'ainsi', 'rythme', 'insistance', 'temps', 'élégie']),
      att('Registre lyrique', "« cette voix, confusément rassurante »", "Registre lyrique : la voix du passé mêle présent et mémoire — subjectivité mélancolique du poète.", ['lyrique', 'voix', 'souvenir', 'mélancolie', 'présent', 'amour']),
    ],
  },
  'GT-445': {
    texte: `Maître Corbeau, sur un arbre perché,
Tenait en son bec un fromage.
Maître Renard, par l'odeur alléché,
Lui fit à peu près ce langage :
« Et ! bonjour, Monsieur du Corbeau.
Que vous êtes joli ! que vous me semblez beau !
Sans mentir, si votre ramage
Se rapporte à votre plumage,
Vous êtes le Phénix des hôtes de ces bois. »
À ces mots le Corbeau ne se sent pas de joie ;
Et pour montrer sa belle voix,
Il ouvre un large bec, laisse tomber sa proie.
Le Renard le prend, et dit : « Mon bon Monsieur,
Apprenez que tout flatteur
Vit aux dépens de celui qui l'écoute :
Cette leçon vaut bien un fromage, sans doute. »
Le Corbeau, honteux et confus,
Jura, mais un peu tard, qu'on ne l'y prendrait plus.`,
    contexte: "Fable I, 2 — satire de la flatterie et morale explicite.",
    attendus: [
      att('Dialogue', "« Et ! bonjour, Monsieur du Corbeau »", "Dialogue : le Renard feint la politesse pour piéger le Corbeau — la fable dramatise la ruse.", ['dialogue', 'renard', 'corbeau', 'ruse', 'flatterie', 'fable']),
      att('Ironie', "« Vous êtes le Phénix des hôtes de ces bois »", "Ironie : la flatterie exagérée dénonce la vanité du Corbeau — le lecteur voit le piège avant la victime.", ['ironie', 'phénix', 'vanité', 'flatterie', 'piège', 'satire']),
      att('Chute morale', "« tout flatteur / Vit aux dépens de celui qui l'écoute »", "Chute morale : La Fontaine explicite la leçon — la fable instruit par le récit animalier.", ['morale', 'flatteur', 'leçon', 'fable', 'satire', 'écoute']),
      att('Registre satirique', "« honteux et confus »", "Registre satirique : la humiliation du Corbeau moque les dupes de la vanité — visée sociale implicite.", ['satirique', 'honte', 'vanité', 'dupe', 'morale', 'mœurs']),
    ],
  },
  'GT-446': {
    texte: `Dans un château de Westphalie, à quelques lieues de la ville de Dantzig, il y avait un baron qui possédait une des plus belles maisons de la province, mais dont l'entrée n'était pas plus riche que celle d'un baron allemand. La cour de sa maison était encombrée de poutres et de bardeaux cloutés ; tout autour, des poutres soutenaient un grenier ; autour du grenier, il y avait quelquefois des lapins qui passaient et qui revenaient par les trous que le temps avait faits dans les murailles. Candide, le neveu du baron, était un jeune homme à la figure pleine de candeur et de simplicité ; il avait le jugement assez droit, avec l'esprit tout simple ; c'est ce qui le fit sortir du château.`,
    contexte: "Incipit de Candide — cadre westphalien et portrait du héros naïf.",
    attendus: [
      att('Antithèse', "« une des plus belles maisons » / « entrée n'était pas plus riche »", "Antithèse : Voltaire oppose richesse apparente et misère réelle — ironie sur l'aristocratie allemande.", ['antithèse', 'richesse', 'misère', 'ironie', 'château', 'voltaire']),
      att('Caractérisation', "« figure pleine de candeur et de simplicité »", "Caractérisation : le nom Candide condense le trait moral du héros — naïveté qui structure tout le conte.", ['caractérisation', 'candeur', 'simplicité', 'héros', 'naïveté', 'nom']),
      att('Registre satirique', "« lapins qui passaient par les trous »", "Registre satirique : détail grotesque du château délabré — dévalorisation comique du cadre noble.", ['satirique', 'délabré', 'grotesque', 'château', 'détail', 'comique']),
      att('Incipit', "« Dans un château de Westphalie »", "Incipit : localisation précise et ton conteur — pacte de lecture du conte philosophique.", ['incipit', 'westphalie', 'conte', 'cadre', 'narrateur', 'pacte']),
    ],
  },
  'GT-447': {
    texte: `Nous étions à l'Étude, quand le Proviseur entra, suivi d'un nouveau habillé en bourgeois et d'un garçon de classe qui portait un grand pupitre. Ceux qui dormaient se réveillèrent, et chacun se leva comme surpris dans son travail.
Le nouveau tenait à la main une casquette d'un genre composite, où l'on retrouvait les éléments du bonnet à poil, du chapeau rond et du casque. Cette chose muette semblait dire à la fois l'embarras provincial et l'ambition maladroite.
Quand il fallut décliner son nom, il balbutia si fort qu'on comprit à peine : « Charbovari ». Le rire éclata sur tous les bancs.`,
    contexte: "Madame Bovary — arrivée de Charles au collège : portrait social et ironie réaliste.",
    attendus: [
      att('Focalisation externe', "« suivi d'un nouveau habillé en bourgeois »", "Flaubert cadre d'abord Charles de l'extérieur, comme un objet observé par la classe : la focalisation externe accentue sa gaucherie avant même sa parole.", ['focalisation', 'externe', 'charles', 'portrait', 'réalisme', 'collège']),
      att('Description satirique', "« une casquette d'un genre composite »", "La description détaillée de la casquette caricature le personnage : l'objet condense l'entre-deux social de Charles et produit une satire discrète de la petite bourgeoisie.", ['description', 'casquette', 'satire', 'bourgeoisie', 'caricature', 'flaubert']),
      att('Registre ironique', "« Charbovari »", "La déformation du nom et le rire collectif installent l'ironie inaugurale du roman : le héros naît dans l'humiliation publique, loin de toute grandeur romanesque.", ['ironie', 'nom', 'rire', 'humiliation', 'incipit', 'roman']),
      att('Scène d\'exposition', "« Nous étions à l'Étude »", "L'incipit plonge immédiatement dans une scène concrète et sociale : Flaubert expose lieu, groupe, hiérarchie et regard collectif en quelques lignes d'une efficacité réaliste.", ['exposition', 'incipit', 'classe', 'réalisme', 'société', 'narration']),
    ],
  },
  'GT-448': {
    texte: `Julien se promenait à grands pas dans la petite chambre sombre où il se retirait pour lire le Mémorial de Sainte-Hélène. Le bruit de la scie de son père montait de la cour comme un rappel brutal de sa condition. « Être prêtre ? être soldat ? » se répétait-il ; et chaque réponse lui paraissait une trahison de soi.
Il ouvrit la fenêtre sur la montagne, regarda longtemps le ciel rouge, puis revint à son livre. Les phrases de Napoléon lui donnaient un courage féroce ; l'instant d'après, la peur d'être ridicule le clouait sur sa chaise.`,
    contexte: "Le Rouge et le Noir — monologue de Julien : ambition, honte sociale et calcul.",
    attendus: [
      att('Monologue intérieur', "« Être prêtre ? être soldat ? »", "Les interrogations directes donnent accès à la conscience de Julien : Stendhal met en scène un moi clivé entre stratégie sociale et désir d'héroïsme.", ['monologue', 'julien', 'dilemme', 'ambition', 'stratégie', 'stendhal']),
      att('Antithèse sociale', "« le bruit de la scie ... / le Mémorial de Sainte-Hélène »", "L'opposition entre l'atelier paternel et Napoléon dramatise l'écart de classe : Julien vit dans le réel populaire mais pense en termes d'ascension impériale.", ['antithèse', 'classe', 'napoléon', 'atelier', 'ascension', 'social']),
      att('Registre pathétique', "« la peur d'être ridicule le clouait »", "La peur du ridicule révèle la fragilité psychologique du héros : derrière la volonté de puissance, Stendhal montre une sensibilité blessée par le regard social.", ['pathétique', 'ridicule', 'fragilité', 'héros', 'regard', 'société']),
      att('Symbolisme des lieux', "« la petite chambre sombre »", "L'espace clos matérialise l'enfermement de Julien dans sa condition ; la fenêtre vers la montagne ouvre l'horizon du désir sans abolir l'obstacle social.", ['symbolisme', 'chambre', 'fenêtre', 'condition', 'désir', 'espace']),
    ],
  },
  'GT-449': {
    texte: `J'aimais ma maison où j'ai grandi. Elle regardait la Seine, et j'y passais des journées paisibles, entre le jardin, le fleuve et mes livres. Pourtant, depuis quelque temps, une inquiétude sans cause me suivait. Je me réveillais en sursaut ; je croyais sentir derrière moi une présence, un souffle, quelque chose d'invisible qui me frôlait.
Un soir, je bus de l'eau ; le lendemain, la carafe était vide alors que je n'avais pas soif. J'accusai d'abord les domestiques, puis je me tus : la honte d'être pris pour fou me fit écrire ce journal.`,
    contexte: "Le Horla — bascule du quotidien vers l'invisible menaçant.",
    attendus: [
      att('Progression fantastique', "« une inquiétude sans cause ... une présence »", "Maupassant installe d'abord un malaise indéfini puis des indices concrets : la progression graduelle fait glisser le réel vers le fantastique.", ['fantastique', 'progression', 'malaise', 'présence', 'réel', 'horla']),
      att('Focalisation interne', "« je croyais sentir ... je me tus »", "Le récit à la première personne enferme le lecteur dans la perception du narrateur : impossible de trancher entre phénomène surnaturel et dérèglement mental.", ['focalisation', 'interne', 'journal', 'incertitude', 'folie', 'narrateur']),
      att('Objet-signaleur', "« la carafe était vide »", "La carafe vide fonctionne comme preuve minimale mais obsédante : le détail matériel donne une base réaliste à l'hypothèse surnaturelle.", ['objet', 'preuve', 'carafe', 'obsession', 'doute', 'réalisme']),
      att('Registre pathétique', "« la honte d'être pris pour fou »", "La peur du jugement social rend la terreur plus intime : le narrateur souffre autant de la possible folie que de la menace invisible.", ['pathétique', 'honte', 'folie', 'peur', 'journal', 'souffrance']),
    ],
  },
  'GT-450': {
    texte: `La chaleur montait de la route blanche et me frappait au front. Le soleil me faisait mal derrière les tempes. Sur le sable, la mer renvoyait une lumière dure qui m'aveuglait ; j'entendais seulement le bruit sec des vagues et mon sang dans mes oreilles.
L'Arabe était là, immobile, le couteau à la main. J'ai fait un pas ; la sueur m'a coulé dans les yeux. Alors tout a vacillé. La gâchette a cédé, et j'ai compris que j'avais brisé l'équilibre du jour. J'ai tiré encore, comme on frappe à la porte du malheur.`,
    contexte: "L'Étranger — scène de la plage : meurtre, sensation physique et absurdité.",
    attendus: [
      att('Champ lexical sensoriel', "« chaleur », « lumière », « sueur », « bruit »", "Camus construit la scène par sensations physiques plutôt que par psychologie : le corps précède la décision et transforme l'acte en mécanique.", ['champ lexical', 'sensation', 'corps', 'chaleur', 'camus', 'meurtre']),
      att('Causalité absurde', "« la gâchette a cédé »", "La formulation désubjectivise l'action : le geste semble déclenché par un enchaînement matériel plus que par une volonté morale claire.", ['absurde', 'causalité', 'gâchette', 'désubjectivation', 'étranger', 'acte']),
      att('Métaphore', "« frapper à la porte du malheur »", "La métaphore finale transforme les coups de feu supplémentaires en entrée dans une fatalité irréversible : le personnage franchit un seuil.", ['métaphore', 'malheur', 'seuil', 'fatalité', 'violence', 'destin']),
      att('Style blanc', "« L'Arabe était là, immobile »", "La phrase brève et neutre typique du style de Camus crée une distance émotionnelle : l'horreur est dite sans pathos, ce qui renforce son étrangeté.", ['style', 'phrase brève', 'neutralité', 'distance', 'camus', 'écriture']),
    ],
  },
  'GT-451': {
    texte: `La chair est triste, hélas ! et j'ai lu tous les livres.
Fuir ! là-bas fuir ! Je sens que des oiseaux sont ivres
D'être parmi l'écume inconnue et les cieux !
Rien, ni les vieux jardins reflétés par les yeux,
Ne retiendra ce cœur qui dans la mer se trempe.
Ô nuits ! ni la clarté déserte de ma lampe
Sur le vide papier que la blancheur défend.
Je partirai ! Steamer balançant ta mâture,
Lève l'ancre pour une exotique nature !`,
    contexte: "Mallarmé, Brise marine — désir de fuite absolue et crise de la création.",
    attendus: [
      att('Apostrophe', "« Fuir ! là-bas fuir ! »", "L'injonction à soi-même ouvre un élan lyrique violent : le poète formule la fuite comme nécessité existentielle.", ['apostrophe', 'fuite', 'élan', 'lyrique', 'mallarmé', 'désir']),
      att('Antithèse', "« j'ai lu tous les livres » / « Je partirai ! »", "L'opposition entre saturation intellectuelle et départ imaginaire dramatise la crise moderne : le savoir ne sauve plus, seul l'ailleurs attire.", ['antithèse', 'livres', 'départ', 'crise', 'modernité', 'poésie']),
      att('Symbolisme', "« le vide papier que la blancheur défend »", "La page blanche devient symbole d'impuissance poétique : la blancheur n'est pas neutralité, mais résistance du langage à l'inspiration.", ['symbolisme', 'page blanche', 'impuissance', 'langage', 'création', 'mallarmé']),
      att('Registre lyrique', "« Steamer ... Lève l'ancre »", "L'image du navire condense l'imaginaire de l'évasion : la musicalité des impératifs transforme le poème en départ rêvé plutôt qu'effectif.", ['lyrique', 'steamer', 'ancre', 'évasion', 'musicalité', 'rêve']),
    ],
  },
  'GT-452': {
    texte: `Ces nymphes, je les veux perpétuer.
Si clair,
Leur incarnat léger, qu'il voltige dans l'air
Assoupi de sommeils touffus.
Aimais-je un rêve ?
Mon doute, amas de nuit ancienne, s'achève
En maint rameau subtil, qui, demeuré les vrais
Bois même, prouve, hélas ! que bien seul je m'offrais
Pour triomphe la faute idéale de roses.
Réfléchissons...
ou si les femmes dont tu gloses
Figurent un souhait de tes sens fabuleux !`,
    contexte: "L'Après-midi d'un faune — hésitation entre songe érotique et réel.",
    attendus: [
      att('Questionnement métapoétique', "« Aimais-je un rêve ? »", "Le faune doute de sa propre expérience : Mallarmé transforme la scène mythologique en réflexion sur le statut incertain de la perception poétique.", ['question', 'rêve', 'incertitude', 'faune', 'poétique', 'mallarmé']),
      att('Synesthésie', "« incarnat léger ... voltige dans l'air »", "La couleur devient mouvement et souffle : la sensation visuelle se mêle au tactile pour créer un univers flottant, propre au symbolisme.", ['synesthésie', 'incarnat', 'air', 'sensation', 'symbolisme', 'flou']),
      att('Antithèse', "« les vrais Bois » / « faute idéale »", "L'opposition du concret sylvestre et de l'idéal fantasmatique met en scène l'écart entre nature et désir.", ['antithèse', 'bois', 'idéal', 'désir', 'réel', 'fantasme']),
      att('Registre lyrique', "« je les veux perpétuer »", "Le verbe de volonté affirme une entreprise de fixation poétique : sauver l'instant sensuel par la parole.", ['lyrique', 'volonté', 'perpétuer', 'instant', 'sensuel', 'parole']),
    ],
  },
  'GT-453': {
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
    contexte: "Rimbaud, Le Dormeur du val — sonnet pacifiste et ironie tragique.",
    attendus: [
      att('Ironie tragique', "« Il a deux trous rouges au côté droit »", "Ironie tragique : le vers final révèle la mort du soldat — le tableau bucolique se retourne en dénonciation de la guerre.", ['ironie', 'mort', 'soldat', 'guerre', 'révélation', 'rimbaud']),
      att('Personnification', "« Nature, berce-le chaudement : il a froid »", "Personnification : la nature apostrophée comme mère ne peut réchauffer le mort — pathos et indifférence cosmique.", ['personnification', 'nature', 'berce', 'froid', 'mort', 'pathos']),
      att('Métaphore', "« Pâle dans son lit vert où la lumière pleut »", "Métaphore : l'herbe devient lit funèbre — l'euphémisme pastoral dissimule la mort avant la chute finale.", ['métaphore', 'lit', 'vert', 'lumière', 'mort', 'euphémisme']),
      att('Champ lexical', "« Dort », « fait un somme », « la main sur sa poitrine »", "Champ lexical du sommeil : Rimbaud accumule les signes d'un repos apparent pour frapper le lecteur à la dernière ligne.", ['champ lexical', 'sommeil', 'repos', 'mort', 'suspense', 'chute']),
    ],
  },
  'GT-455': {
    texte: `PHÈDRE
Oui, Prince, je languis, je brûle pour Thésée ;
Je l'aime, non point tel que l'ont vu les enfers,
Volage adorateur de mille objets divers,
Qui va du dieu des morts déshonorer la couche ;
Mais fidèle, mais fier, et même un peu farouche.
Charmant, jeune, traînant tous les cœurs après soi,
Tel qu'on dépeint nos dieux, ou tel que je vous vois.
Il avait votre port, vos yeux, votre langage ;
Cette noble pudeur colorait son visage,
Lorsque de notre Crète il traversa les flots.`,
    contexte: "Phèdre, acte II scène 5 — aveu amoureux et déplacement de Thésée vers Hippolyte.",
    attendus: [
      att('Aveu tragique', "« je brûle pour Thésée »", "L'aveu est immédiatement biaisé : nommer Thésée pour désigner Hippolyte signale la transgression et la stratégie d'auto-justification.", ['aveu', 'tragique', 'thésée', 'hippolyte', 'passion', 'racine']),
      att('Antithèse', "« Volage ... / Mais fidèle »", "Phèdre oppose deux images de Thésée pour fabriquer une figure idéale : le discours reconstruit l'objet aimé selon le désir.", ['antithèse', 'volage', 'fidèle', 'idéalisation', 'désir', 'tragédie']),
      att('Comparaison mythologique', "« Tel qu'on dépeint nos dieux »", "La comparaison divine hisse Hippolyte au rang d'idole : l'amour devient culte et prépare la catastrophe.", ['comparaison', 'dieux', 'idolâtrie', 'amour', 'mythologie', 'fatalité']),
      att('Registre pathétique', "« je languis, je brûle »", "Le vocabulaire physiologique de la passion montre un corps malade d'amour : la tragédie racinienne passe par la souffrance incarnée.", ['pathétique', 'languis', 'brûle', 'corps', 'souffrance', 'passion']),
    ],
  },
  'GT-458': {
    texte: `DON DIÈGUE
Ô rage ! ô désespoir ! ô vieillesse ennemie !
N'ai-je donc tant vécu que pour cette infamie ?
Et ne suis-je blanchi dans les travaux guerriers
Que pour voir en un jour flétrir tant de lauriers ?
Mon bras, qu'avec respect toute l'Espagne admire,
Mon bras, qui tant de fois a sauvé cet empire,
Tant de fois affermi le trône de son roi,
Trahit donc ma querelle, et ne fait rien pour moi ?
Ô cruel souvenir de ma gloire passée !
Œuvre de tant de jours en un jour effacée !`,
    contexte: "Le Cid, acte I scène 6 — plainte de Don Diègue après l'affront.",
    attendus: [
      att('Anaphore exclamative', "« Ô rage ! ô désespoir ! ô vieillesse ennemie ! »", "La triple exclamation martèle l'effondrement du héros : Corneille fait du monologue un cri d'honneur blessé.", ['anaphore', 'ô', 'rage', 'désespoir', 'honneur', 'corneille']),
      att('Interrogation rhétorique', "« N'ai-je donc tant vécu... ? »", "La question n'appelle pas de réponse ; elle dramatise l'injustice ressentie et transforme l'affront personnel en crise de toute une vie.", ['interrogation', 'rhétorique', 'injustice', 'vieillesse', 'honneur', 'drame']),
      att('Hyperbole héroïque', "« toute l'Espagne admire »", "L'amplification nationale mesure la chute : plus la gloire passée est grande, plus l'humiliation présente est insupportable.", ['hyperbole', 'espagne', 'gloire', 'chute', 'héroïque', 'tragique']),
      att('Antithèse temporelle', "« tant de jours ... en un jour effacée »", "L'opposition durée/instant condense la logique tragique : une existence de mérite peut être détruite par un seul événement.", ['antithèse', 'temps', 'jour', 'effacement', 'tragédie', 'honneur']),
    ],
  },
  'GT-460': {
    texte: `CHIMÈNE
Elvire, m'as-tu fait un rapport bien sincère ?
Ne déguises-tu point ce qu'a fait mon père ?
ELVIRE
J'ai vu de mes yeux ce que je vous ai dit.
RODRIGUE
Percé jusques au fond du cœur,
D'une atteinte imprévue aussi bien que mortelle,
Misérable vengeur d'une juste querelle,
Et malheureux objet d'une injuste rigueur,
Je demeure immobile, et mon âme abattue
Cède au coup qui me tue.
Il faut venger un père, et perdre une maîtresse.`,
    contexte: "Le Cid, acte III scène 2 — souffrance croisée de Chimène et Rodrigue.",
    attendus: [
      att('Stichomythie', "« m'as-tu ... ? / J'ai vu ... »", "Les répliques courtes de Chimène et Elvire installent une tension immédiate, puis la tirade de Rodrigue élargit la crise intime.", ['stichomythie', 'chimène', 'elvire', 'tension', 'réplique', 'théâtre']),
      att('Antithèse cornélienne', "« venger un père, et perdre une maîtresse »", "Le vers condense la contradiction fondatrice de la pièce : honneur public contre fidélité amoureuse.", ['antithèse', 'père', 'maîtresse', 'honneur', 'amour', 'cid']),
      att('Registre pathétique', "« mon âme abattue / Cède au coup »", "Le lexique de la blessure morale transforme le dilemme en souffrance corporelle : le héros devient victime de son propre devoir.", ['pathétique', 'âme', 'coup', 'souffrance', 'devoir', 'héros']),
      att('Parallélisme', "« juste querelle / injuste rigueur »", "Le parallélisme oppose justice et injustice dans une symétrie frappante : la forme rend sensible l'impasse morale.", ['parallélisme', 'juste', 'injuste', 'impasse', 'symétrie', 'morale']),
    ],
  },
  'GT-461': {
    texte: `ALCESTE
Franchement, c'est un fort méchant homme que vous.
PHILINTE
Toujours, dans vos discours, vous poussez tout aux bouts,
Et, parce qu'un ami vous manque de parole,
Vous voulez qu'on renonce à la société.
ALCESTE
Je veux qu'on soit sincère, et qu'en homme d'honneur
On ne lâche aucun mot qui ne parte du cœur.
PHILINTE
Lorsqu'un homme vous vient embrasser avec joie,
Il faut bien rendre un peu ce qu'à nos yeux il croit.
ALCESTE
Je hais tous les hommes ; les uns parce qu'ils sont méchants,
Et les autres pour être aux méchants complaisants.`,
    contexte: "Le Misanthrope — débat entre sincérité absolue et sociabilité.",
    attendus: [
      att('Antithèse', "« sincère » / « société »", "Molière oppose deux morales du lien social : vérité brute d'Alceste contre civilité pragmatique de Philinte.", ['antithèse', 'sincérité', 'société', 'alceste', 'philinte', 'comédie']),
      att('Maxime', "« On ne lâche aucun mot qui ne parte du cœur »", "La formule générale donne à Alceste une posture de moraliste ; sa rigidité devient principe et ressort comique.", ['maxime', 'cœur', 'morale', 'rigidité', 'misanthrope', 'langage']),
      att('Registre satirique', "« Je hais tous les hommes »", "L'excès verbal fait rire tout en dénonçant l'hypocrisie mondaine : la satire naît du contraste entre lucidité et outrance.", ['satirique', 'haine', 'outrance', 'mondain', 'hypocrisie', 'molière']),
      att('Dialogue dialectique', "« Toujours ... / Je veux ... »", "L'affrontement argumentatif structure la scène comme un débat philosophique dramatique plus qu'une simple querelle.", ['dialogue', 'dialectique', 'débat', 'théâtre', 'argumentation', 'scène']),
    ],
  },
  'GT-464': {
    texte: `DORINE
Vous êtes donc, monsieur, un homme bien heureux !
ORGON
Que veux-tu dire là ?
DORINE
Que sans trouble et sans peine,
Vous voyez toute chose en doctrine certaine.
Votre Tartuffe est saint ; son zèle vous conduit ;
Et, quand votre maison murmure, il vous instruit.
ORGON
Tais-toi, tu parles mal d'un homme irréprochable.
DORINE
Irréprochable ? Il veut commander à table,
Régler jusqu'à nos yeux, jusqu'à notre parler.`,
    contexte: "Tartuffe — Dorine dénonce l'aveuglement d'Orgon.",
    attendus: [
      att('Ironie', "« un homme bien heureux »", "Dorine ouvre par un faux compliment : l'ironie attaque la crédulité d'Orgon sans frontalité immédiate.", ['ironie', 'dorine', 'orgon', 'crédulité', 'tartuffe', 'comédie']),
      att('Registre satirique', "« commander à table ... régler ... »", "La liste des intrusions domestiques expose la tyrannie du faux dévot : Molière ridiculise l'autorité religieuse usurpée.", ['satirique', 'tyrannie', 'dévot', 'maison', 'usurpation', 'molière']),
      att('Antithèse', "« saint » / « commander »", "L'opposition entre façade spirituelle et contrôle matériel dévoile le cœur de l'hypocrisie tartuffienne.", ['antithèse', 'saint', 'hypocrisie', 'façade', 'pouvoir', 'intérêt']),
      att('Rôle de la servante', "« Tais-toi ... / Irréprochable ? »", "Dorine, socialement inférieure, porte la vérité dramatique : la comédie confie la lucidité critique à la voix subalterne.", ['servante', 'lucidité', 'vérité', 'hiérarchie', 'théâtre', 'critique']),
    ],
  },
  'GT-465': {
    texte: `TARTUFFE
Notre intérêt brûle de le voir en colère
Contre l'injuste rigueur de votre fils ;
Et s'il faut l'accuser, j'ai de quoi le faire.
Je vous dirai qu'il est venu hier
Dans une chambre voisine de la mienne,
Où j'ai passé le temps à me confesser.
J'ai vu, sans être vu, dans le miroir proche,
Tout ce qu'il fit, et sa mine hypocrite
Ne me parut pas cacher un grand mystère.
Il prit un mouchoir qu'il avait trouvé,
Et dit tout bas : « O Ciel ! que je suis malheureux !
Est-ce un mouchoir, hélas ! qui m'oblige à le voir ?
Que ne suis-je aveugle, ou qu'il ne soit couvert ! »
Il baisa le mouchoir avec transport,
Et le mit dans son sein, près de son cœur.`,
    contexte: "Tartuffe, acte 3 scène 1 — Elmire rapporte la séduction hypocrite à Orgon.",
    attendus: [
      att('Ironie dramatique', "« sa mine hypocrite »", "Ironie dramatique : le spectateur connaît la duplicité de Tartuffe — Elmire dévoile la mascarade religieuse.", ['ironie', 'hypocrite', 'duplicité', 'tartuffe', 'dévoilement', 'molière']),
      att('Registre comique', "« O Ciel ! que je suis malheureux ! »", "Registre comique : Tartuffe feint la pénitence pour séduire — la fausse piété devient spectacle grotesque.", ['comique', 'ciel', 'pénitence', 'feinte', 'grotesque', 'hypocrisie']),
      att('Dialogue', "« Je vous dirai qu'il est venu hier »", "Dialogue : Elmire instruit Orgon — la scène dramatise la confrontation entre vérité et aveuglement.", ['dialogue', 'elmire', 'orgon', 'vérité', 'aveuglement', 'confrontation']),
      att('Antithèse', "« Que ne suis-je aveugle »", "Antithèse : Tartuffe simule le renoncement au désir tout en le nourrissant — corps et parole s'opposent.", ['antithèse', 'aveugle', 'désir', 'renoncement', 'corps', 'parole']),
    ],
  },
  'GT-466': {
    texte: `SGANARELLE
Quoi que puisse dire Aristote et toute la philosophie, il n'est rien d'égal au tabac ; c'est la passion des honnêtes gens, et qui vit sans tabac n'est pas digne de vivre. Non seulement il réjouit et purge les cerveaux humains, mais encore il instruit les âmes à la vertu.
Voyez un peu cette civilité qu'il inspire : dès qu'on en prend, on en donne à droite et à gauche ; on n'attend même pas qu'on en demande.
Mais laissons là ce discours, et parlons de notre maître.`,
    contexte: "Dom Juan, acte I scène 1 — tirade comique de Sganarelle.",
    attendus: [
      att('Parodie érudite', "« Aristote et toute la philosophie »", "Sganarelle détourne le discours savant pour défendre un objet trivial : la parodie donne le ton burlesque de l'ouverture.", ['parodie', 'aristote', 'philosophie', 'burlesque', 'sganarelle', 'domjuan']),
      att('Hyperbole', "« qui vit sans tabac n'est pas digne de vivre »", "L'exagération transforme une habitude en principe absolu : Molière ridiculise les raisonnements dogmatiques.", ['hyperbole', 'tabac', 'dogme', 'comique', 'molière', 'outrance']),
      att('Registre satirique', "« il instruit les âmes à la vertu »", "Attribuer une vertu morale au tabac révèle l'absurdité des justifications intéressées ; satire des faux discours de valeur.", ['satirique', 'vertu', 'absurde', 'discours', 'valeur', 'comédie']),
      att('Fonction d\'incipit', "« parlons de notre maître »", "La transition finale relie la fantaisie verbale à l'intrigue : Sganarelle introduit Dom Juan par un détour comique significatif.", ['incipit', 'transition', 'maître', 'intrigue', 'théâtre', 'introduction']),
    ],
  },
  'GT-469': {
    texte: `Souvent, pour s'amuser, les hommes d'équipage
Prennent des albatros, vastes oiseaux des mers,
Qui suivent, indolents compagnons de voyage,
Le navire glissant sur les gouffres amers.
À peine les ont-ils déposés sur les planches,
Que ces rois de l'azur, maladroits et honteux,
Laissent piteusement leurs grandes ailes blanches
Comme des avirons traîner à côté d'eux.
Le Poète est semblable au prince des nuées :
Exilé sur le sol au milieu des huées,
Ses ailes de géant l'empêchent de marcher.`,
    contexte: "Baudelaire, L'Albatros — allégorie de la condition du poète moderne.",
    attendus: [
      att('Allégorie', "« Le Poète est semblable au prince des nuées »", "La comparaison finale révèle la portée allégorique de tout le tableau : l'oiseau marin figure le poète exilé dans la société.", ['allégorie', 'poète', 'albatros', 'exil', 'modernité', 'baudelairien']),
      att('Antithèse', "« rois de l'azur » / « maladroits et honteux »", "L'opposition ciel/pont dramatise la déchéance : sublime dans son élément, ridicule dès qu'il touche le monde social.", ['antithèse', 'azur', 'honteux', 'déchéance', 'sublime', 'social']),
      att('Comparaison', "« Comme des avirons »", "L'image concrète des ailes-rames matérialise l'entrave : ce qui permettait de voler devient handicap au sol.", ['comparaison', 'ailes', 'avirons', 'entrave', 'image', 'poésie']),
      att('Registre pathétique', "« au milieu des huées »", "Le poète est exposé à la moquerie collective : la scène suscite pitié et met en cause la brutalité du groupe.", ['pathétique', 'huées', 'foule', 'poète', 'souffrance', 'société']),
    ],
  },
  'GT-471': {
    texte: `— Jean Valjean, mon frère, n'oubliez jamais que vous m'avez promis d'employer cet argent à devenir honnête homme.
Le vieillard s'avança d'un pas.
— Jean Valjean, mon frère, vous n'appartenez plus au mal, mais au bien. C'est votre âme que je vous achète ; je la retire aux pensées noires et à l'esprit de perdition, et je la donne à Dieu.
Jean Valjean restait là, stupéfait, les yeux pleins de larmes. Il tenait les chandeliers d'argent contre sa poitrine comme un homme qui sauve sa vie.`,
    contexte: "Les Misérables — dialogue fondateur entre l'évêque et Jean Valjean.",
    attendus: [
      att('Apostrophe fraternelle', "« mon frère »", "La formule répétée transforme le forçat en sujet digne : Hugo substitue la fraternité à la logique pénale.", ['apostrophe', 'frère', 'valjean', 'évêque', 'rédemption', 'hugo']),
      att('Métaphore spirituelle', "« C'est votre âme que je vous achète »", "L'évêque détourne le vocabulaire marchand pour exprimer un salut : la transaction devient geste de grâce.", ['métaphore', 'âme', 'acheter', 'grâce', 'religieux', 'rédemption']),
      att('Registre pathétique', "« les yeux pleins de larmes »", "La réaction physique de Valjean matérialise la conversion intérieure ; l'émotion fonde la renaissance morale du personnage.", ['pathétique', 'larmes', 'conversion', 'émotion', 'valjean', 'misérables']),
      att('Symbole', "« les chandeliers d'argent »", "Les chandeliers fonctionnent comme objet-mémoire : preuve concrète de la miséricorde, ils orientent toute l'éthique future de Valjean.", ['symbole', 'chandeliers', 'mémoire', 'miséricorde', 'objet', 'destin']),
    ],
  },
  'GT-472': {
    texte: `Il y avait à Montfermeil, près de Paris, une manière de gargote qui passait pour un cabaret respectable. Le mari et la femme qui tenaient cette maison s'appelaient Thénardier. Ils avaient, à la fenêtre, une petite fille bien mise, qui riait avec un chat ; à l'ombre de la table, une autre enfant, sale, maigre, pieds nus, balayait la salle avec un balai trop grand pour elle.
Cette enfant avait huit ans. On l'appelait Cosette.
Le soir, quand les voyageurs arrivaient, Madame Thénardier criait : « Cosette ! de l'eau ! du bois ! » et l'enfant courait, tremblante.`,
    contexte: "Les Misérables — présentation de Cosette chez les Thénardier.",
    attendus: [
      att('Antithèse visuelle', "« une petite fille bien mise ... une autre enfant, sale, maigre »", "Le contraste entre les deux fillettes dévoile immédiatement l'injustice sociale et affective du foyer Thénardier.", ['antithèse', 'cosette', 'thénardier', 'injustice', 'enfance', 'social']),
      att('Registre pathétique', "« l'enfant courait, tremblante »", "Le détail corporel de la peur installe la compassion : Hugo donne un visage concret à la misère enfantine.", ['pathétique', 'tremblante', 'enfant', 'misère', 'compassion', 'hugo']),
      att('Focalisation narrative', "« On l'appelait Cosette »", "La nomination progressive individualise l'enfant après la description de sa condition : passage du type social au destin singulier.", ['focalisation', 'nomination', 'cosette', 'destin', 'narration', 'roman']),
      att('Registre réaliste', "« gargote ... balai trop grand »", "Les objets modestes et les gestes de service ancrent la scène dans le quotidien concret, condition de l'efficacité sociale du roman.", ['réaliste', 'gargote', 'balai', 'quotidien', 'roman social', 'détail']),
    ],
  },
  'GT-473': {
    texte: `Mon père, ce héros au sourire si doux,
Suivi d'un seul housard qu'il aimait entre tous
Pour sa grande bravoure et pour sa haute taille,
Parcourait à cheval, le soir d'une bataille,
Le champ couvert de morts sur qui tombait la nuit.
Il lui sembla, dans l'ombre où l'on distinguait mal,
Qu'un enfant était là, qui, vivant de hasard,
Se traînait vers un mort pour lui prendre son arme.
Mon père, ému, dit alors : « Donnez-lui de quoi boire. »
Et l'enfant, c'était l'ennemi, leva les yeux en larmes.`,
    contexte: "La Légende des siècles, Après la bataille — grandeur morale dans la guerre.",
    attendus: [
      att('Registre épique', "« le soir d'une bataille »", "Le cadre héroïque inscrit la scène dans la grande Histoire, mais Hugo y introduit une éthique de compassion.", ['épique', 'bataille', 'histoire', 'hugo', 'héros', 'guerre']),
      att('Antithèse', "« l'enfant ... c'était l'ennemi »", "La révélation oppose innocence et altérité militaire : l'ennemi devient d'abord un enfant vulnérable.", ['antithèse', 'enfant', 'ennemi', 'compassion', 'humanisme', 'guerre']),
      att('Portrait héroïque', "« ce héros au sourire si doux »", "L'association force et douceur redéfinit l'héroïsme : la noblesse ne tient pas à la violence mais à la clémence.", ['portrait', 'héros', 'douceur', 'clémence', 'valeur', 'éthique']),
      att('Pathétique', "« leva les yeux en larmes »", "Le détail final concentre l'émotion et justifie le geste de pitié : Hugo transforme la scène militaire en leçon morale.", ['pathétique', 'larmes', 'pitié', 'émotion', 'leçon', 'humanité']),
    ],
  },
  'GT-474': {
    texte: `Comme je descendais des Fleuves impassibles,
Je ne me sentis plus guidé par les haleurs :
Des Peaux-Rouges criards les avaient pris pour cibles
Les ayant cloués nus aux poteaux colorés.
J'étais insoucieux de tous les équipages,
Porteur de blés flamands ou de cotons anglais.
Quand avec mes haleurs ont fini ces tapages,
Les Fleuves m'ont laissé descendre où je voulais.
Et dès lors je me suis baigné dans le Poème
De la Mer, infusé d'astres, et lactescent.`,
    contexte: "Le Bateau ivre — strophes de libération : rupture avec la conduite humaine.",
    attendus: [
      att('Allégorie', "« je descendais des Fleuves impassibles »", "Le bateau figure le poète qui rompt avec les contraintes sociales : la descente devient aventure de langage.", ['allégorie', 'bateau', 'poète', 'libération', 'rimbaud', 'langage']),
      att('Registre épique', "« Porteur de blés flamands ou de cotons anglais »", "L'ampleur géographique et commerciale donne une dimension historique au départ, avant le basculement visionnaire.", ['épique', 'commerce', 'géographie', 'ampleur', 'voyage', 'rimbaud']),
      att('Personnification', "« Les Fleuves m'ont laissé descendre »", "La nature agit comme une volonté autonome : le poète est porté puis abandonné par des forces élémentaires.", ['personnification', 'fleuves', 'nature', 'autonomie', 'éléments', 'poème']),
      att('Métaphore', "« baigné dans le Poème / De la Mer »", "La fusion du texte et de l'eau annonce une poésie totale : la mer n'est plus décor mais principe d'écriture.", ['métaphore', 'poème', 'mer', 'fusion', 'écriture', 'initiation']),
    ],
  },
  'GT-475': {
    texte: `Un soir, j'ai assis la Beauté sur mes genoux. — Et je l'ai trouvée amère. — Et je l'ai injuriée.
Je me suis armé contre la justice.
Je me suis enfui.
Ô sorcières, ô misère, ô haine, c'est à vous que mon trésor a été confié !
J'ai réussi à faire s'évanouir dans mon esprit toute l'espérance humaine.
Sur toute joie pour l'étrangler j'ai fait le bond sourd de la bête féroce.
J'ai appelé les bourreaux pour, en périssant, mordre la crosse de leurs fusils.
Le malheur a été mon dieu.`,
    contexte: "Une Saison en enfer, Mauvais sang — confession de révolte et auto-damnation.",
    attendus: [
      att('Apostrophe', "« Ô sorcières, ô misère, ô haine »", "La triple invocation inverse la prière religieuse : Rimbaud sacralise le négatif dans une litanie blasphématoire.", ['apostrophe', 'litanie', 'blasphème', 'misère', 'haine', 'rimbaud']),
      att('Antithèse', "« assis la Beauté ... trouvée amère »", "La beauté promise se renverse en amertume : le texte met en scène la faillite du mythe esthétique.", ['antithèse', 'beauté', 'amère', 'faillite', 'esthétique', 'crise']),
      att('Gradation', "« je me suis armé ... je me suis enfui ... j'ai appelé les bourreaux »", "La série verbale escalade vers l'auto-destruction ; la révolte devient programme nihiliste.", ['gradation', 'révolte', 'fuite', 'bourreaux', 'nihilisme', 'escalade']),
      att('Métaphore', "« Le malheur a été mon dieu »", "La formule finale absolutise la souffrance : le malheur remplace toute transcendance et clôt la confession sur une idolâtrie noire.", ['métaphore', 'malheur', 'dieu', 'absolu', 'souffrance', 'damnation']),
    ],
  },
  'GT-476': {
    texte: `J'ai embrassé l'aube d'été.
Rien ne bougeait encore au front des palais. L'eau était morte. Les camps d'ombres ne quittaient pas la route du bois.
J'ai marché, réveillant les haleines vives et tièdes, et les pierreries regardèrent, et les ailes se levèrent sans bruit.
La première entreprise fut, dans le sentier déjà empli de frais et blêmes éclats, une fleur qui me dit son nom.
Je ris au wasserfall blond qui s'échevela à travers les sapins : à la cime argentée je reconnus la déesse.`,
    contexte: "Illuminations, Aube — poursuite visionnaire de l'idéal personnifié.",
    attendus: [
      att('Personnification', "« J'ai embrassé l'aube d'été »", "L'aube devient figure féminine et désirée : la nature est vécue comme rencontre amoureuse et mystique.", ['personnification', 'aube', 'désir', 'nature', 'rimbaud', 'vision']),
      att('Synesthésie', "« haleines ... pierreries ... ailes »", "Les perceptions se croisent sans hiérarchie : la prose poétique crée un monde sensoriel total.", ['synesthésie', 'perceptions', 'prose', 'sensoriel', 'illuminations', 'poésie']),
      att('Registre merveilleux', "« une fleur qui me dit son nom »", "Le langage attribué à la fleur marque l'entrée dans un univers enchanté, au-delà du réalisme.", ['merveilleux', 'fleur', 'parole', 'enchantement', 'surréel', 'rimbaud']),
      att('Métaphore de la quête', "« je reconnus la déesse »", "La poursuite spatiale culmine dans une apparition sacrée : la poésie vise une révélation toujours fuyante.", ['métaphore', 'quête', 'déesse', 'révélation', 'idéal', 'fuite']),
    ],
  },
  'GT-478': {
    texte: `Le Loup et l'Agneau
La raison du plus fort est toujours la meilleure :
Nous l'allons montrer tout à l'heure.
Un Agneau se désaltérait
Dans le courant d'une onde pure.
Un Loup survient à jeun qui cherchait aventure,
Et que la faim en ces lieux attirait.
Qui te rend si hardi de troubler mon breuvage ?
Dit cet animal plein de rage :
Tu seras châtié de ta témérité.
Sire, répond l'Agneau, que Votre Majesté
Ne se mette pas en colère ;`,
    contexte: "La Fontaine, Le Loup et l'Agneau — violence du pouvoir et justice arbitraire.",
    attendus: [
      att('Maxime', "« La raison du plus fort est toujours la meilleure »", "L'ouverture sentencieuse donne la clé politique de la fable : la force se déguise en droit.", ['maxime', 'force', 'droit', 'fable', 'pouvoir', 'lafontaine']),
      att('Dialogue inégal', "« Qui te rend si hardi ... »", "Le dialogue oppose d'emblée menace et défense respectueuse : l'issue est écrite avant tout argument.", ['dialogue', 'inégalité', 'menace', 'agneau', 'loup', 'arbitraire']),
      att('Ironie', "« Votre Majesté »", "Le titre honorifique accentue le rapport de domination ; la politesse de l'agneau n'apaise pas la violence du prédateur.", ['ironie', 'majesté', 'domination', 'politesse', 'violence', 'fable']),
      att('Registre satirique', "« châtié de ta témérité »", "La rhétorique judiciaire du loup parodie un procès : La Fontaine critique les puissants qui fabriquent la faute des faibles.", ['satirique', 'procès', 'faute', 'puissants', 'faibles', 'justice']),
    ],
  },
  'GT-480': {
    texte: `Nous étions à l'Étude, quand le Proviseur entra, suivi d'un nouveau habillé en bourgeois et d'un garçon de classe qui portait un grand pupitre. Ceux qui dormaient se réveillèrent, et chacun se leva comme surpris dans son travail.
Le nouveau, resté dans l'angle de la porte, tenait sa casquette à deux mains ; il avait les cheveux coupés droit sur le front, et l'air si embarrassé que le maître lui cria : « Levez-vous donc ! ».
Il se leva, puis se rassit, rouge de confusion, pendant qu'un rire étouffé courait déjà parmi les bancs.`,
    contexte: "Madame Bovary, ouverture — Charles saisi par le regard collectif.",
    attendus: [
      att('Point de vue collectif', "« Nous étions à l'Étude »", "Le narrateur pluralise le regard : Charles est défini d'abord par la perception d'un groupe scolaire qui le juge.", ['point de vue', 'collectif', 'nous', 'charles', 'jugement', 'réalisme']),
      att('Description comportementale', "« tenait sa casquette ... l'air embarrassé »", "Les gestes maladroits construisent un portrait social sans commentaire psychologique explicite, typique du réalisme flaubertien.", ['description', 'gestes', 'embarras', 'portrait', 'réalisme', 'flaubert']),
      att('Registre ironique', "« Levez-vous donc ! »", "L'autorité professorale et le rire des élèves installent une ironie d'humiliation : le héros entre en scène par l'échec.", ['ironie', 'humiliation', 'école', 'rire', 'héros', 'entrée']),
      att('Scène inaugurale', "« un rire étouffé courait ... »", "La scène fixe une matrice du roman : désir d'ascension et disqualification sociale répétée.", ['inaugural', 'rire', 'ascension', 'disqualification', 'roman', 'société']),
    ],
  },
  'GT-481': {
    texte: `Dans la plaine rase, sous la nuit sans étoiles, un homme suivait seul la grande route de Marchiennes à Montsou ; dix kilomètres de pavé coupant tout droit les champs de betteraves. Il ne voyait même pas le sol noir, et n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues.
Pas une ombre d'arbre, pas une tache de village ; rien que les ténèbres épaisses, et, en face, les deux yeux rouges d'un charbonnage qui brûlaient.`,
    contexte: "Germinal — incipit : Étienne dans la nuit minière, décor naturaliste.",
    attendus: [
      att('Registre réaliste', "« dix kilomètres de pavé ... champs de betteraves »", "La précision géographique ancre l'incipit dans un territoire social déterminé : le roman part du concret matériel.", ['réaliste', 'géographie', 'pavé', 'naturalisme', 'zola', 'milieu']),
      att('Comparaison', "« des rafales larges comme sur une mer »", "La plaine devient mer hostile : la comparaison magnifie la rudesse du paysage industriel.", ['comparaison', 'rafales', 'mer', 'plaine', 'hostile', 'incipit']),
      att('Symbolisme', "« les deux yeux rouges d'un charbonnage »", "La mine personnifiée en yeux rouges annonce une puissance dévorante qui dominera les corps et les vies.", ['symbolisme', 'mine', 'yeux rouges', 'menace', 'travail', 'fatalité']),
      att('Champ lexical de la nuit', "« nuit », « noir », « ténèbres »", "L'obscurité répétée construit une atmosphère d'angoisse sociale : avant les personnages, Zola fait sentir le système qui les écrase.", ['champ lexical', 'nuit', 'angoisse', 'système', 'social', 'germinal']),
    ],
  },
  'GT-482': {
    texte: `Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas. J'ai reçu un télégramme de l'asile : « Mère décédée. Enterrement demain. Sentiments distingués. » Cela ne veut rien dire. C'était peut-être hier.
L'asile de vieillards est à Marengo, à quatre-vingts kilomètres d'Alger. Je prendrai le bus à deux heures et j'arriverai dans l'après-midi. Ainsi, je pourrai veiller et je rentrerai demain soir. J'ai demandé deux jours de congé à mon patron et il ne pouvait pas me les refuser avec une excuse pareille. Mais il n'avait pas l'air content. Je lui ai même dit : « Ce n'est pas de ma faute. » Il n'a pas répondu.`,
    contexte: "L'Étranger, chapitre 1 — incipit et indifférence de Meursault.",
    attendus: [
      att('Parataxe', "« Aujourd'hui, maman est morte. Ou peut-être hier »", "Parataxe : les phrases courtes juxtaposées traduisent l'indifférence affective — le deuil est énoncé sans pathos.", ['parataxe', 'mort', 'indifférence', 'deuil', 'meursault', 'camus']),
      att('Écriture blanche', "« Cela ne veut rien dire »", "Écriture blanche : Meursault refuse l'interprétation sentimentale — le registre neutre structure le roman de l'absurde.", ['écriture blanche', 'neutre', 'absurde', 'sentiment', 'refus', 'style']),
      att('Ironie', "« Sentiments distingués »", "Ironie : la formule télégraphique bureaucratique contraste avec la mort de la mère — décalage comique et glacial.", ['ironie', 'télégramme', 'bureaucratie', 'décalage', 'mort', 'formule']),
      att('Temporalité floue', "« je ne sais pas »", "Temporalité floue : l'incertitude sur la date de la mort traduit l'aliénation du narrateur face au temps et au lien familial.", ['temporalité', 'flou', 'aliénation', 'temps', 'famille', 'narrateur']),
    ],
  },
  'GT-484': {
    texte: `Ces nymphes, je les veux perpétuer.
Le corps solitaire de la blancheur qui scintille
Quand l'azur luisant de l'air a tremblé
Devant le silence matinal de bois mystérieux ;
Quand, sur l'azur des monts lointains et des arbres,
Sur l'or des blonds ciels, sur l'azur des mers,
Sur l'azur des mers, sur l'or des ciels,
Les nymphes ont laissé leurs ombres légères.
Ô récompense après une pensée
Qu'un long regard sur le calme des dieux !
Quel pur travail de faims et de langueurs !
Quand, lente, de ses mains l'âme délicate
Efface les chiffres de l'horloge,
Et que l'heure est pure, et que l'heure est exacte !`,
    contexte: "L'Après-midi d'un faune — ouverture symboliste, désir et rêve.",
    attendus: [
      att('Apostrophe', "« Ces nymphes, je les veux perpétuer »", "Apostrophe : le faune interpelle les nymphes absentes — le désir poétique cherche fixer l'insaisissable.", ['apostrophe', 'nymphes', 'désir', 'perpétuer', 'faune', 'mallarmé']),
      att('Répétition', "« Sur l'azur des mers »", "Répétition : l'anaphore crée une musicalité hypnotique — le symbolisme privilégie la suggestion sonore.", ['répétition', 'azur', 'musicalité', 'anaphore', 'suggestion', 'symbolisme']),
      att('Registre onirique', "« bois mystérieux »", "Registre onirique : le paysage flou et lumineux traduit l'entre-deux du rêve et du désir sensuel.", ['onirique', 'bois', 'mystère', 'rêve', 'lumière', 'sensuel']),
      att('Métaphore', "« Le corps solitaire de la blancheur »", "Métaphore : la blancheur devient corps — Mallarmé condense sensualité et abstraction poétique.", ['métaphore', 'blancheur', 'corps', 'abstraction', 'sensualité', 'image']),
    ],
  },
  'GT-485': {
    texte: `Il y a dans l'Indiana une espèce de solitude qui ne ressemble à aucune autre. C'est une solitude qui ne se trouve que dans les contrées lointaines, où la nature est sauvage et où l'homme est presque inconnu. Là, les forêts sont immenses, les rivières profondes, les montagnes hautes ; et l'on sent que l'on est seul au monde, seul avec la nature, seul avec ses pensées, seul avec son cœur.
Indiana, jeune créole, épouse par contrainte M. Delmare, homme brutal dont la jalousie étouffe tout respirait de liberté. Elle rêve d'un amour sincère, d'une affection qui la délivrerait de l'oppression conjugale.`,
    contexte: "Indiana — incipit romantique, révolte féminine et solitude.",
    attendus: [
      att('Hyperbole', "« solitude qui ne ressemble à aucune autre »", "Hyperbole : Sand magnifie l'isolement de l'héroïne — le décor annonce la révolte intérieure.", ['hyperbole', 'solitude', 'héroïne', 'sand', 'romantisme', 'isolement']),
      att('Champ lexical', "« forêts », « rivières », « montagnes »", "Champ lexical naturel : l'accumulation paysagère traduit l'étouffement moral par contraste avec la liberté rêvée.", ['champ lexical', 'nature', 'forêts', 'liberté', 'paysage', 'contraste']),
      att('Antithèse', "« contrainte » / « liberté »", "Antithèse entre mariage forcé et désir d'émancipation — le roman sandien pose la question féministe.", ['antithèse', 'contrainte', 'liberté', 'mariage', 'féminisme', 'révolte']),
      att('Registre lyrique', "« seul avec son cœur »", "Registre lyrique : subjectivité intime et émotion personnelle — tonalité romantique de l'incipit.", ['lyrique', 'cœur', 'subjectivité', 'émotion', 'romantisme', 'intime']),
    ],
  },
  'GT-486': {
    texte: `Un jour, je m'aperçus que ma mère avait beaucoup maigri. Je lui demandai si elle était malade. Elle me répondit qu'elle ne savait pas, qu'elle ne se sentait pas bien. Je lui dis qu'il fallait consulter un médecin. Elle refusa. Je ne lui en parlai plus.
Quelques semaines plus tard, elle me dit qu'elle avait rencontré un Chinois dans Cholon. Elle avait l'air heureuse. Elle me dit qu'il était gentil, qu'il lui faisait plaisir. Je ne comprenais pas.`,
    contexte: "L'Amant — mémoire fragmentée, regard adolescent sur la mère.",
    attendus: [
      att('Focalisation interne', "« Je ne comprenais pas »", "Focalisation interne : le je adolescent restitue sa perplexité — la mémoire filtre l'événement sans le comprendre.", ['focalisation', 'interne', 'je', 'mémoire', 'adolescence', 'duras']),
      att('Style minimaliste', "« Elle refusa. Je ne lui en parlai plus. »", "Style minimaliste : phrases brèves et parataxe traduisent la retenue émotionnelle — l'autofiction durassienne.", ['minimaliste', 'parataxe', 'retenue', 'autofiction', 'style', 'fragment']),
      att('Dialogue', "« elle avait rencontré un Chinois »", "Dialogue : l'annonce maternelle ouvre le récit amoureux — la mère devient pivot du destin de la narratrice.", ['dialogue', 'mère', 'cholon', 'destin', 'amour', 'annonce']),
      att('Registre autobiographique', "« Un jour, je m'aperçus »", "Registre autobiographique : l'incipit ancre le récit dans le souvenir personnel — pacte de vérité mémorielle.", ['autobiographique', 'souvenir', 'incipit', 'mémoire', 'pacte', 'récit']),
    ],
  },
  'GT-487': {
    texte: `Vous voilà bien heureuse, ma chère amie, de n'être pas à Paris en ce moment ! On n'y parle que de la rupture de M. de Gercourt et de Mlle de Volanges. Tout le monde en cherche la cause, et personne ne la devine. Je ne saurais vous dire combien j'ai ri de l'air étonné de M. de Gercourt, lorsqu'il a appris la nouvelle.
La petite Volanges est bien la dupe la plus complète qu'il y ait jamais eu. Elle ne se doute pas que son amant a été le sien avant qu'elle ne le fût, et qu'il l'a quittée pour elle.`,
    contexte: "Les Liaisons dangereuses — lettre de Mme de Merteuil, manipulation épistolaire.",
    attendus: [
      att('Ironie', "« la dupe la plus complète »", "Ironie : Merteuil moque la naïveté de Cécile — le roman épistolaire dénonce la manipulation sociale.", ['ironie', 'dupe', 'manipulation', 'merteuil', 'laclos', 'épistolaire']),
      att('Registre satirique', "« On n'y parle que de »", "Registre satirique : le babil mondain critique les mœurs aristocratiques — la société devient spectacle de vice.", ['satirique', 'monde', 'mœurs', 'aristocratie', 'vice', 'paris']),
      att('Focalisation', "« Je ne saurais vous dire combien j'ai ri »", "Focalisation : le je épistolaire révèle le plaisir cruel de la manipulatrice — caractérisation par la voix.", ['focalisation', 'je', 'plaisir', 'cruauté', 'manipulatrice', 'voix']),
      att('Antithèse', "« son amant a été le sien avant qu'elle ne le fût »", "Antithèse temporelle : Laclos condense la perversion des relations — le secret structure l'intrigue.", ['antithèse', 'secret', 'amant', 'perversion', 'intrigue', 'temps']),
    ],
  },
  'GT-488': {
    texte: `Ce toit tranquille, où marchent les colombes,
Entre les pins palpite, entre les tombes ;
Midi le juste y compose de feux
La mer, la mer, toujours recommencée !
Ô récompense après une pensée
Qu'un long regard sur le calme des dieux !
Quel pur travail de faims et de langueurs !
Quand, lente, de ses mains l'âme délicate
Efface les chiffres de l'horloge,
Et que l'heure est pure, et que l'heure est exacte !`,
    contexte: "Le Cimetière marin — ouverture, méditation sur la mer et le temps.",
    attendus: [
      att('Apostrophe', "« Ô récompense après une pensée »", "Apostrophe : Valéry interpelle la vision contemplative — le poème médite sur la pensée et le regard.", ['apostrophe', 'récompense', 'pensée', 'contemplation', 'valéry', 'méditation']),
      att('Répétition', "« La mer, la mer, toujours recommencée ! »", "Répétition : l'anaphore exclame l'éternel recommencement — le temps cyclique structure la méditation.", ['répétition', 'mer', 'recommencée', 'temps', 'cyclique', 'éternité']),
      att('Registre lyrique', "« l'âme délicate / Efface les chiffres de l'horloge »", "Registre lyrique : personnification de l'âme poétique — fusion du moi et du paysage marin.", ['lyrique', 'âme', 'horloge', 'temps', 'fusion', 'paysage']),
      att('Symbolisme', "« Ce toit tranquille, où marchent les colombes »", "Symbolisme : le cimetière marin devient lieu de sagesse — la mort et la mer s'unissent dans la pensée.", ['symbolisme', 'cimetière', 'colombes', 'mort', 'mer', 'sagesse']),
    ],
  },
};
