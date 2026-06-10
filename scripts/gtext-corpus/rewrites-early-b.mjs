import { att } from '../gtext-enrichment-lib.mjs';

export const REWRITES_EARLY_B = {
  'GT-051': {
    texte: `La chair est triste, hélas ! et j'ai lu tous les livres.
Fuir ! là-bas fuir ! Je sens que des oiseaux sont ivres
D'être parmi l'écume inconnue et les cieux !
Rien, ni les vieux jardins reflétés par les yeux,
Ne retiendra ce cœur qui dans la mer se trempe.
Ô nuits ! ni la clarté déserte de ma lampe
Sur le vide papier que la blancheur défend.
Je partirai ! Steamer balançant ta mâture,
Lève l'ancre pour une exotique nature !`,
    contexte: "Poème symboliste — spleen, désir d\'évasion, langage obscur.",
    attendus: [
      att('Apostrophe', '« Fuir ! là-bas fuir ! »', 'L\'injonction violente ouvre un élan lyrique : Mallarmé formule la fuite comme nécessité existentielle face au spleen.', ["apostrophe","fuite","élan","lyrique","mallarmé","désir"]),
      att('Antithèse', '« j\'ai lu tous les livres » / « Je partirai ! »', 'L\'opposition entre saturation intellectuelle et départ imaginaire dramatise la crise moderne : le savoir ne sauve plus, seul l\'ailleurs attire.', ["antithèse","livres","départ","crise","modernité","poésie"]),
      att('Symbolisme', '« le vide papier que la blancheur défend »', 'La page blanche symbolise l\'impuissance poétique : la blancheur résiste à l\'inspiration plutôt qu\'elle ne l\'accueille.', ["symbolisme","page blanche","impuissance","langage","création","mallarmé"]),
      att('Registre lyrique', '« Steamer balançant ta mâture »', 'L\'image du navire condense l\'imaginaire de l\'évasion : les impératifs transforment le poème en départ rêvé.', ["lyrique","steamer","ancre","évasion","musicalité","rêve"])
    ],
  },
  'GT-052': {
    texte: `Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux, sans que jamais la médisance ait attaqué les mœurs de cet honorable établissement. Mais aussi, depuis trente ans, n'y a-t-il jamais été vu de jeune personne ; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. Néanmoins, en 1819, époque où commence ce drame, il s'y trouvait une pauvre jeune fille.`,
    contexte: "Incipit du roman — réalisme balzacien, comparaison ironique.",
    attendus: [
      att('Précision topographique', '« rue Neuve-Sainte-Geneviève »', 'Le détail géographique ancre le récit dans le Paris concret — procédé typique du réalisme balzacien.', ["réalisme","paris","topographie","balzac","concret","lieu"]),
      att('Ironie', '« honorable établissement »', 'La formule valorisante suggère en creux la médiocrité de la pension — ironie du narrateur sur le milieu.', ["ironie","honorable","médiocrité","narrateur","satire","pension"]),
      att('Champ lexical', '« Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, »', 'Le vocabulaire social (pension, modique, médisance) dessine un univers de misère étalée et de calcul.', ["champ lexical","pension","bourgeois","misère","social","balzac"]),
      att('Incipit dramatique', '« époque où commence ce drame »', 'Balzac annonce dès l\'ouverture la dimension tragique du récit — pacte de lecture romanesque.', ["incipit","drame","tragique","annonce","roman","balzac"])
    ],
  },
  'GT-053': {
    texte: `Pendant cinquante ans, Félicité fut servante chez madame Aubain, une veuve. C'était une personne dure, à bouche fermée ; ses traits étaient longs, et sa peau si serrée qu'on eût dit qu'elle avait le visage comme un cuir à corne. Elle était simple, énorme, de hauteur ordinaire, et laide sans qualificatif. Elle avait été grosse fille, et elle avait eu des enfants. Elle ne se maria pas, par vertu. Sa mère, qui était nourrice, l'avait habituée à des privations. Elle ne fut jamais gai, et elle ne fut jamais triste ; elle avait des habitudes pareilles à celles des autres, et son cœur était comme de l'eau.`,
    contexte: "Portrait d\'une servante — réalisme, description clinique.",
    attendus: [
      att('Caractérisation', '« laide sans qualificatif »', 'Flaubert condense en une formule lapidaire l\'effacement physique de Félicité — description clinique sans pathos.', ["caractérisation","laide","effacement","servante","flaubert","clinique"]),
      att('Antithèse', '« ne fut jamais gai, et elle ne fut jamais triste »', 'L\'absence d\'émotions marque une neutralité existentielle — le personnage est réduit à des habitudes mécaniques.', ["antithèse","gai","triste","neutralité","mécanique","existence"]),
      att('Comparaison', '« son cœur était comme de l\'eau »', 'Le cœur liquide traduit l\'indifférence et la fluidité émotionnelle — métaphore qui efface la subjectivité.', ["comparaison","cœur","eau","indifférence","fluidité","apathie"]),
      att('Registre réaliste', '« visage comme un cuir à corne »', 'La matérialité du corps usé par le travail incarne le naturalisme flaubertien — misère sans commentaire moral.', ["réaliste","corps","usure","travail","naturalisme","misère"])
    ],
  },
  'GT-054': {
    texte: `FIGARO
Parce que vous êtes un grand seigneur, vous vous croyez un grand génie ! Noblesse, fortune, un rang, des places, tout cela rend si fier ! Quoi ! vous n'avez rien de tout cela, et vous êtes fâché tout de même ! Que de travail pour trouver un pauvre bouffon ! Que de travail ! Eh ! Dieu merci, mon cher seigneur, avec le talent que j'ai pour accommoder tout ! Et pourvu que je gagne ma vie, peu m'importe que je travaille pour ou contre le roi, pour l'Espagne ou la France, pour le diable ou pour Dieu ! Mais comment vous appelez-vous ? Quel est votre nom ? Vous faites si bien attention à tout, qu'il n'est pas extraordinaire que vous perdiez celui-là ! Vous vous êtes donné la peine de naître, et rien de plus.`,
    contexte: "Tirade de Figaro — critique de l\'aristocratie, registre comique et satirique.",
    attendus: [
      att('Registre satirique', '« vous vous croyez un grand génie »', 'Figaro dénonce l\'orgueil nobiliaire par l\'ironie — la satire des privilèges structure la tirade.', ["satirique","génie","noblesse","ironie","figaro","privilège"]),
      att('Énumération', '« Noblesse, fortune, un rang, des places »', 'La liste des avantages sociaux accumule les privilèges pour mieux les vider de sens — critique des Lumières.', ["énumération","noblesse","fortune","rang","privilège","liste"]),
      att('Antithèse', '« grand seigneur » / « rien de plus »', 'L\'opposition entre titre social et absence de mérite renverse la hiérarchie — chute comique célèbre.', ["antithèse","seigneur","naître","mérite","renversement","comique"]),
      att('Registre comique', '« Vous vous êtes donné la peine de naître »', 'La formule lapidaire provoque le rire par l\'hyperbole ironique — Figaro réduit le comte à sa naissance seule.', ["comique","naître","chute","hyperbole","rire","beaumarchais"])
    ],
  },
  'GT-055': {
    texte: `DORANTE
Il me semble que si l'on me regarde, je ne sais plus ce que je disais ; et que si l'on ne me regarde pas, je ne sais pas non plus ce que je fais.
SILVIA
Vous êtes sans doute un fort bel homme.
DORANTE
Non, madame.
SILVIA
Vous n'êtes pas un bel homme ?
DORANTE
Je ne sais pas ce que c'est. Il me semble que si l'on me regarde, je ne sais plus ce que je disais ; et que si l'on ne me regarde pas, je ne sais pas non plus ce que je fais. C'est une chose étrange : le regard des autres me trouble, et leur absence me perd.`,
    contexte: "Comédie du sentiment — trouble amoureux, registre léger et psychologique.",
    attendus: [
      att('Antithèse', '« si l\'on me regarde » / « si l\'on ne me regarde pas »', 'Dorante est paralysé dans les deux cas — l\'antithèse dramatise le trouble amoureux et l\'incapacité d\'agir.', ["antithèse","regard","paralysie","amour","dorante","contraste"]),
      att('Registre comique', '« Je ne sais pas ce que c\'est »', 'La réponse évasive sur la beauté provoque le rire — comique de l\'embarras amoureux.', ["comique","beauté","embarras","rire","marivaux","évasion"]),
      att('Dialogue', '« Vous n\'êtes pas un bel homme ? »', 'Le dialogue enchaîné révèle le jeu amoureux de Silvia — psychologie fine de la comédie du sentiment.', ["dialogue","silvia","question","jeu","sentiment","psychologie"]),
      att('Registre lyrique', '« je ne sais plus ce que je disais »', 'La subjectivité troublée du personnage amoureux installe le registre lyrique dans la comédie.', ["lyrique","trouble","subjectivité","amour","émotion","marivaux"])
    ],
  },
  'GT-056': {
    texte: `NÉRON
Qu'ai-je donc fait en un jour que la haine implore ?
Je sens de mon sang même un secret horreur ;
Mon cœur n'a plus de goût à la chose où je suis ;
Néron plutôt qu'Auguste, et plutôt qu'un empire
Un sort maudit à charger et à perdre un empire.
Traîner ce nom odieux qui m'accable et me pèse ;
Le rendre exécrable à toute la terre,
Et, comme un autre Atlas, d'un poids qui m'écrase
Traîner l'univers entier après moi !
Non, non, je veux cesser d'être ou d'être tyran ;
L'empire est à mon cœur un fardeau trop pesant.`,
    contexte: "Monologue de Néron — identité tyrannique, registre tragique.",
    attendus: [
      att('Registre tragique', '« Traîner ce nom odieux qui m\'accable et me pèse »', 'Néron transforme le pouvoir en fardeau — la fatalité tyrannique dépasse le personnage et suscite terreur.', ["tragique","odieux","accable","néron","tyran","fatalité"]),
      att('Métaphore', '« comme un autre Atlas »', 'Le tyran devient Atlas écrasé par le monde — image mythologique qui magnifie la démesure du pouvoir.', ["métaphore","atlas","poids","univers","mythologie","démesure"]),
      att('Anaphore', '« Non, non, je veux cesser »', 'La répétition martèle le désir d\'abdication — oscillation entre tyrannie et lucidité.', ["anaphore","non","cesser","abdication","oscillation","néron"]),
      att('Alexandrin', '« Traîner ce nom odieux qui m\'accable et me pèse »', 'Le vers solennel en douze syllabes porte la grandeur tragique du monologue racinien.', ["alexandrin","douze","solennel","racine","monologue","rythme"])
    ],
  },
  'GT-057': {
    texte: `MADELON
Ah ! mon Dieu ! que votre visage a d'embonpoint ! Et que vous avez l'air triste ! Vous ne vous portez pas bien, sans doute.
MASCARILLE
Madame, c'est la coutume de cet air-ci.
MADELON
Quelle mine de croque-mitaine ! ah ! que vous avez l'air triste ! Vous ne vous portez pas bien, sans doute. Vous avez l'air d'un homme qui a perdu son meilleur ami.
MASCARILLE
Madame, c'est la coutume de cet air-ci.`,
    contexte: "Comédie des manières — moquerie des précieuses, registre comique.",
    attendus: [
      att('Registre comique', '« que votre visage a d\'embonpoint »', 'L\'euphémisme précieux sur l\'embonpoint caricature les manières des précieuses — moquerie des salons.', ["comique","embonpoint","précieuse","moquerie","molière","caricature"]),
      att('Répétition', '« c\'est la coutume de cet air-ci »', 'Mascarille répète la même réplique — comique de situation qui ridiculise les interrogations affectées.', ["répétition","coutume","mascarille","situation","ridicule","réplique"]),
      att('Antithèse', '« embonpoint » / « air triste »', 'Le contraste entre corpulence et mélancolie accentue l\'absurdité du portrait — effet comique.', ["antithèse","embonpoint","triste","contraste","absurde","portrait"]),
      att('Registre satirique', '« Quelle mine de croque-mitaine »', 'La satire des manières précieuses vise les codes du salon par l\'exagération polie.', ["satirique","croque-mitaine","salon","manières","satire","précieux"])
    ],
  },
  'GT-058': {
    texte: `M. MARTIN
Il y a un an, Elizabeth, vous aviez quarante ans.
M. MARTIN
Il y a un an, vous aviez quarante et demi... Il y a deux ans, vous aviez quarante et demi... Il y a trois ans, vous aviez quarante et demi... Il y a quatre ans, vous aviez quarante et demi... Il y a cinq ans, vous aviez quarante et demi... Il y a six ans, vous aviez quarante et demi...
M. MARTIN
Vous aviez quarante et demi, vous aviez quarante et demi... Vous aviez quarante et demi, vous aviez quarante et demi...`,
    contexte: "Théâtre de l\'absurde — répétition mécanique, déconstruction du langage.",
    attendus: [
      att('Anaphore', '« Il y a un an » / « Il y a deux ans »', 'La reprise mécanique des dates vide le langage de son sens — procédé central du théâtre de l\'absurde.', ["anaphore","an","répétition","mécanique","ionesco","absurde"]),
      att('Gradation', '« un an… deux ans… trois ans… »', 'La progression temporelle sans variation logique produit un effet de crescendo grotesque.', ["gradation","temps","progression","grotesque","crescendo","absurde"]),
      att('Registre comique', '« vous aviez quarante et demi »', 'L\'immobilité de l\'âge dans la répétition provoque le rire — dérision du discours rationnel.', ["comique","quarante","immobilité","rire","dérision","ionesco"]),
      att('Déconstruction', '« Elizabeth, vous aviez quarante ans »', 'Ionesco dissocie les mots de leur référent — le langage tourne à vide et perd sa fonction communicative.', ["déconstruction","langage","vide","communication","absurde","théâtre"])
    ],
  },
  'GT-059': {
    texte: `VLADIMIR
On n'a rien à faire.
ESTRAGON
On peut encore attendre un peu.
VLADIMIR
Oui, on peut toujours attendre un peu.
ESTRAGON
Qu'est-ce qu'on fait maintenant ?
VLADIMIR
Je ne sais pas.
ESTRAGON
Si on partait ?
VLADIMIR
Où ?
ESTRAGON
On pourrait essayer d'aller vers Godot.
VLADIMIR
Il ne viendra pas ce soir.
ESTRAGON
Alors demain ?
VLADIMIR
Peut-être demain.
ESTRAGON
Et si demain il ne vient pas non plus ?
VLADIMIR
Alors après-demain.
ESTRAGON
Et si jamais il ne vient ?
VLADIMIR
Alors on attendra quand même.`,
    contexte: "Théâtre de l\'absurde — attente, vide existentiel.",
    attendus: [
      att('Dialogue minimal', '« Qu\'est-ce qu\'on fait maintenant ? »', 'Les répliques creuses traduisent l\'absurde — l\'attente devient seul horizon existentiel.', ["dialogue","attente","absurde","inaction","beckett","godot"]),
      att('Antithèse', '« Si on partait ? » / « Où ? »', 'Le désir de mouvement se heurte à l\'impossibilité — paralysie existentielle caractéristique.', ["antithèse","partir","où","paralysie","mouvement","impossibilité"]),
      att('Répétition', '« on peut toujours attendre un peu »', 'La circularité de l\'attente structure la pièce — temps suspendu sans progression.', ["répétition","attendre","circularité","temps","suspendu","beckett"]),
      att('Registre tragique', '« Alors on attendra quand même »', 'La résolution d\'attendre sans fin installe une fatalité existentielle — pathos du vide.', ["tragique","attendre","fatalité","vide","existential","pathos"])
    ],
  },
  'GT-060': {
    texte: `Le 15 mai 1796, le général Bonaparte fit son entrée dans Milan à la tête de cette jeune armée qui avait passé le pont de Lodi et fait à Arcole et à Mantoue les miracles de la bravoure. La France et Bonaparte étaient alors dans le midi de l'Italie comme dans leur propre maison, à peu de chose près. Milan, le plus beau des pays du monde, était tout révolu ; on n'y faisait pas plus attention à la guerre qu'à l'amour. Le général Bonaparte, qui avait déjà conquis l'Italie, était encore un jeune homme de vingt-sept ans.`,
    contexte: "Roman stendhalien — écriture sobre, registre historique et épique.",
    attendus: [
      att('Registre épique', '« les miracles de la bravoure »', 'Stendhal élève l\'action militaire au niveau du grand récit — exaltation napoléonienne typique.', ["épique","bravoure","miracles","napoléon","exaltation","stendhal"]),
      att('Énumération', '« Le 15 mai 1796, le général Bonaparte fit son entrée dans Milan à la tête de cett »', 'La liste des victoires ancre le récit dans l\'histoire — précision documentaire stendhalienne.', ["énumération","lodi","arcole","mantoue","victoires","histoire"]),
      att('Comparaison', '« comme dans leur propre maison »', 'L\'Italie devient propriété française — image qui traduit la conquête et l\'audace du jeune général.', ["comparaison","maison","conquête","italie","audace","napoléon"]),
      att('Champ lexical', '« Le 15 mai 1796, le général Bonaparte fit son entrée dans Milan à la tête de cett »', 'Le vocabulaire militaire structure l\'incipit et installe le registre historique du roman.', ["champ lexical","général","armée","militaire","historique","guerre"])
    ],
  },
  'GT-061': {
    texte: `Gervaise, debout devant le lit, regardait dormir ses deux petits. Étienne et Claude, l'un de quatre ans, l'autre de deux ans, étaient blottis côte à côte ; et elle, pleurant presque, songait aux misères de sa vie. En ce moment-là, il y avait, près du lit, dans un mauvais sommier, une fille de douze ans qui dormait profondément. Gervaise avait tant de fatigue, tant de misère, tant de courage au travail, qu'elle aurait pu dormir debout. La misère allait poussant dans cette misère. Son corps était brisé.`,
    contexte: "Naturalisme zolien — misère ouvrière, registre pathétique.",
    attendus: [
      att('Registre pathétique', '« tant de fatigue, tant de misère »', 'L\'accumulation des maux suscite compassion — Zola documente la misère ouvrière sans embellissement.', ["pathétique","fatigue","misère","compassion","zola","ouvrier"]),
      att('Accumulation', '« tant de fatigue, tant de misère, tant de courage »', 'La triple répétition de « tant » écrase le lecteur sous la masse des épreuves.', ["accumulation","tant","épreuves","masse","écrasement","naturalisme"]),
      att('Champ lexical', '« Gervaise, debout devant le lit, regardait dormir ses deux petits. Étienne et Cla »', 'Le vocabulaire de l\'épuisement physique structure le portrait de Gervaise.', ["champ lexical","misère","fatigue","brisé","corps","épuisement"]),
      att('Focalisation interne', '« songait aux misères de sa vie »', 'L\'accès aux pensées de Gervaise renforce l\'empathie du lecteur pour la mère épuisée.', ["focalisation","interne","songait","mère","empathie","gervaise"])
    ],
  },
  'GT-062': {
    texte: `Ils s'aimaient. Léa avait cinquante ans, Chéri vingt-cinq. Ils formaient un couple singulier, admiré et envié. Tout le monde s'intéressait à leur liaison. On ne comptait pas l'âge, on ne comptait pas les années. Ils s'aimaient depuis six ans. Léa était toujours belle, et Chéri toujours jeune. Ils formaient un couple singulier, admiré et envié, et ils ne se lassaient pas de se regarder. On ne comptait pas l'âge, on ne comptait pas les années. Ils s'aimaient depuis six ans. Léa était toujours belle, et Chéri toujours jeune.`,
    contexte: "Roman de la maturité — amour, regard social, style sensoriel.",
    attendus: [
      att('Antithèse', '« cinquante ans » / « vingt-cinq »', 'L\'écart d\'âge structure le couple — Colette oppose maturité et jeunesse pour questionner les normes sociales.', ["antithèse","âge","cinquante","vingt-cinq","contraste","couple"]),
      att('Registre lyrique', '« Ils s\'aimaient »', 'L\'affirmation simple ouvre sur une subjectivité amoureuse — registre lyrique dans le roman.', ["lyrique","aimaient","amour","subjectivité","colette","émotion"]),
      att('Répétition', '« couple singulier, admiré et envié »', 'La reprise martèle l\'exception du couple dans le regard mondain.', ["répétition","singulier","admiré","envié","mondain","exception"]),
      att('Champ lexical', '« Ils s\'aimaient. Léa avait cinquante ans, Chéri vingt-cinq. Ils formaient un coup »', 'Le vocabulaire social traduit le regard extérieur sur une liaison transgressive.', ["champ lexical","admiré","envié","social","regard","liaison"])
    ],
  },
  'GT-063': {
    texte: `Il est mort. Un matin, ils ont porté le mort de là où il reposait, dans le hamac à grelots, dans la salle de Si Mun qui est la plus grande de la maison de Than hzing. Il me semble que je ne pleurerai pas. Il me semble que ce n'est même pas une douleur, c'est plus sec, plus lointain, plus profond. C'est peut-être parce que je suis vieille. La mort de cet homme, dans un sens, cela m'échappe. Il me semble que ce n'est même pas une douleur.`,
    contexte: "Autobiographie romancée — deuil, écriture minimaliste.",
    attendus: [
      att('Gradation', '« plus sec, plus lointain, plus profond »', 'La progression intensifie le deuil sans pathos — écriture minimaliste de l\'émotion refoulée.', ["gradation","sec","lointain","profond","deuil","intensité"]),
      att('Registre lyrique', '« Il me semble que je ne pleurerai pas »', 'La subjectivité hésitante traduit l\'incapacité à nommer la perte — style durassien.', ["lyrique","pleurer","deuil","subjectivité","duras","perte"]),
      att('Antithèse', '« mort » / « ne pleurerai pas »', 'L\'opposition entre la mort et l\'absence de larmes condense la contradiction du deuil.', ["antithèse","mort","pleurer","contradiction","deuil","larmes"]),
      att('Style minimaliste', '« Il est mort »', 'La phrase brève et factuelle installe une distance froide — écriture épurée caractéristique.', ["minimaliste","phrase brève","factuel","distance","duras","épuré"])
    ],
  },
  'GT-064': {
    texte: `Libellule sans reproche
Entre les doubles creux des tranchées de l'orage
Du jour où nous nous sommes connus
Sur l'île inhabitée des Platoniques
À la lisière de notre rencontre
Où l'ombre et l'orée se confondent
Et le bâton de mémoire
Que tu m'as donné ce jour-là.
Libellule sans reproche
Entre les doubles creux des tranchées de l'orage
Du jour où nous nous sommes connus.
Sur l'île inhabitée des Platoniques
À la lisière de notre rencontre.`,
    contexte: "Poésie surréaliste-résistante — images concises, symbolisme.",
    attendus: [
      att('Personnification', '« Libellule sans reproche »', 'La libellule devient interlocuteur moral — personnification qui charge la nature de sens symbolique.', ["personnification","libellule","reproche","nature","symbolisme","char"]),
      att('Métaphore', '« le bâton de mémoire »', 'L\'objet condense le souvenir et la trace du passé — image concise typique de Char.', ["métaphore","bâton","mémoire","souvenir","trace","image"]),
      att('Antithèse', '« l\'ombre et l\'orée »', 'L\'opposition ombre/lumière structure l\'espace poétique — symbolisme de la rencontre.', ["antithèse","ombre","orée","lumière","rencontre","contraste"]),
      att('Registre lyrique', '« nous nous sommes connus »', 'Le « nous » intime ancre le poème dans une subjectivité mémorielle.', ["lyrique","connu","nous","souvenir","subjectivité","mémoire"])
    ],
  },
  'GT-065': {
    texte: `Je suis un homme
et ma vie est comme celle de tous les hommes
sur la terre.
Sous le soleil.
Il passe sur ma peau un oiseau
et je n'ai pas le temps de voir s'il est beau.
Quand mon ventre est plein il est content
et quand il est vide il a peur de la mort.
C'est lui l'homme.
Mais parfois je l'oublie et parfois je l'entends
siffler au fond de moi,
tandis que je marche.
Je suis un homme
et ma vie est comme celle de tous les hommes
sur la terre.
Sous le soleil.`,
    contexte: "Poème humaniste — oiseau = poésie intérieure, registre simple.",
    attendus: [
      att('Comparaison', '« ma vie est comme celle de tous les hommes »', 'L\'assimilation à l\'universel humanise le moi poétique — registre simple et accessible.', ["comparaison","comme","hommes","universel","humaniste","supervielle"]),
      att('Métaphore', '« un oiseau » / « siffler au fond de moi »', 'L\'oiseau intérieur symbolise la poésie ou l\'âme — métaphore de la création intérieure.', ["métaphore","oiseau","siffler","poésie","âme","intérieur"]),
      att('Antithèse', '« parfois je l\'oublie et parfois je l\'entends »', 'L\'alternance traduit la vacillation entre quotidien et inspiration poétique.', ["antithèse","oublie","entends","vacillation","quotidien","poésie"]),
      att('Registre lyrique', '« Je suis un homme »', 'L\'affirmation du moi ouvre un poème de confession simple et profonde.', ["lyrique","je","homme","confession","simple","profond"])
    ],
  },
  'GT-066': {
    texte: `Les lilas et les roses
Ont une saison
Que le temps chante
Et l'hiver reprend le monde
Mais ceux qui s'aimèrent
Ne s'aiment plus
Les lilas et les roses
Ont une saison
Et l'amour a sa saison aussi
Mais ce n'est pas pour longtemps
Et l'hiver reprend le monde.
Les lilas et les roses
Ont une saison
Que le temps chante
Et l'amour a sa saison aussi
Mais ce n'est pas pour longtemps.
Et l'hiver reprend le monde
Alors que le nord
Vient du fond de la Sibérie.`,
    contexte: "Poème de la Résistance — fugacité du bonheur, registre élégiaque.",
    attendus: [
      att('Personnification', '« l\'hiver reprend le monde »', 'L\'hiver s\'approprie le monde — personnification qui traduit l\'emprise du temps sur le bonheur.', ["personnification","hiver","monde","temps","emprise","aragon"]),
      att('Anaphore', '« Les lilas et les roses »', 'La reprise structure le poème comme une complainte — insistance sur la fugacité.', ["anaphore","lilas","roses","reprise","complainte","fugacité"]),
      att('Métaphore', '« l\'amour a sa saison aussi »', 'L\'amour est assimilé aux saisons — métaphore qui lie sentiment et cycle naturel.', ["métaphore","amour","saison","cycle","nature","temps"]),
      att('Registre élégiaque', '« ceux qui s\'aimèrent / Ne s\'aiment plus »', 'Le regret du passé amoureux installe une mélancolie élégiaque — thème de la Résistance.', ["élégiaque","aimèrent","mélancolie","passé","regret","résistance"])
    ],
  },
  'GT-067': {
    texte: `J'aime le son du cor, le soir, au fond du bois,
Sois donc mon livre et mon ami,
Douleur qu'on ne sait pas, amour qu'on ne comprend pas,
Hommes de peu de jours, mais qui craignent tant de vivre !
La mer des temps n'est pas si vaste que la pensée :
Et tous ses rivages ne suffiraient pas pour l'effroi
De nos rêves, ni pour la douceur de nos regrets.
Des hommes qu'on n'aime plus dès qu'on les a compris.`,
    contexte: "Poème philosophique — mélancolie, registre élégiaque romantique.",
    attendus: [
      att('Apostrophe', '« Sois donc mon livre et mon ami »', 'Vigny interpelle la douleur comme confident — apostrophe lyrique romantique.', ["apostrophe","livre","ami","douleur","romantique","vigny"]),
      att('Assonance', '« cor… soir… bois »', 'Les sonorités nasales créent une atmosphère mélancolique — musicalité du vers.', ["assonance","cor","soir","bois","mélancolie","sonorité"]),
      att('Registre lyrique', '« J\'aime le son du cor »', 'Le « je » poétique exprime une subjectivité philosophique et mélancolique.', ["lyrique","je","cor","subjectivité","philosophie","mélancolie"]),
      att('Maxime', '« Des hommes qu\'on n\'aime plus dès qu\'on les a compris »', 'La formule condense une réflexion sur l\'incompréhension humaine — pessimisme vignyen.', ["maxime","hommes","compris","pessimisme","réflexion","philosophie"])
    ],
  },
  'GT-068': {
    texte: `Quand le ciel bas et lourd pèse comme un couvercle
Sur l'esprit qui gémit en proie à la longueur,
Et que, bordant les lointains, on enroule un soir
Immenses ouragans de rumeur ;
Quand la pluie étalant des haillons épouvantables
D'un long lineament noir à travers les cieux,
Ou quand la terre est changée en un cachot humide,
Où l'Esperance en rut, par une gueule de rai,
Sort en bafouant l'archer qui tua leurs vaches,
Et quand la pluie roulant d'infini
- Ici-bas tout est chagrin, tout est supplice,
Verser un jour noir sur un monde impur ;`,
    contexte: "Sonnet du spleen — oppression, images sombres, alexandrins.",
    attendus: [
      att('Comparaison', '« pèse comme un couvercle »', 'Le ciel oppressif est un couvercle — image concrète du spleen qui étouffe l\'esprit.', ["comparaison","comme","couvercle","ciel","oppression","spleen"]),
      att('Métaphore', '« Verser un jour noir sur un monde impur »', 'La métaphore finale condense l\'apocalypse intérieure — monde et moi souillés.', ["métaphore","jour noir","monde impur","apocalypse","spleen","baudelaire"]),
      att('Personnification', '« l\'esprit qui gémit »', 'L\'esprit gémissant personnifie la souffrance intérieure — animation du mal-être.', ["personnification","esprit","gémit","souffrance","intérieur","mal-être"]),
      att('Alexandrin', '« Quand le ciel bas et lourd pèse comme un couvercle »', 'Le vers régulier en douze syllabes porte la solennité du sonnet classique revisité.', ["alexandrin","douze","solennel","sonnet","classique","baudelaire"])
    ],
  },
  'GT-069': {
    texte: `Que tu es heureux, Automne, et la terre est belle !
Que tes deux morts ne sont pas en leurs plus hauts atours !
Les arbres te saluent avec leur chevelure
De feuilles jaunes, et te couronnent d'or.
Les vents sonores heurtent à tes antres,
Et la terre vêt son manteau marqueté
De leurs feuilles qui mourront demain.
Que tu es heureux, Automne, et la terre est belle !
Que tes deux morts ne sont pas en leurs plus hauts atours !
Les arbres te saluent avec leur chevelure
De feuilles jaunes, et te couronnent d'or.`,
    contexte: "Ode à l\'automne — personnification, registre lyrique renaissant.",
    attendus: [
      att('Personnification', '« Les arbres te saluent »', 'L\'automne et les arbres sont animés — personnification lyrique de la Renaissance.', ["personnification","arbres","saluent","automne","nature","ronsard"]),
      att('Apostrophe', '« Que tu es heureux, Automne »', 'Ronsard interpelle la saison — apostrophe qui installe le registre lyrique.', ["apostrophe","automne","heureux","lyrique","ronsard","saison"]),
      att('Antithèse', '« belle » / « mourront demain »', 'La beauté présente contraste avec la mort imminente des feuilles — élégie du temps.', ["antithèse","belle","mourront","feuilles","temps","élégie"]),
      att('Champ lexical', '« Que tu es heureux, Automne, et la terre est belle ! Que tes deux morts ne sont p »', 'Le vocabulaire chromatique peint l\'automne comme fête avant le déclin.', ["champ lexical","feuilles","jaunes","or","couleurs","automne"])
    ],
  },
  'GT-070': {
    texte: `Solitude ! que veux-tu donc ?
As-tu dans ton silence
Pour moi quelque dessein inconnu ?
Dis-moi, penchant sur moi ta face sépulcrale !
Ou si c'est dans ta voix le rappel d'un souvenir ?
Ou si c'est à ma peine une volupté complète ?
Tu m'as pris le cœur, et tu viens maintenant
Me demander pourquoi je souffre ?
Cette lumière éteinte au fond de ma pensée ?
Solitude ! que veux-tu donc ?
As-tu dans ton silence
Pour moi quelque dessein inconnu ?
Dis-moi, penchant sur moi ta face sépulcrale !`,
    contexte: "Poème élégiaque — solitude, souvenir amoureux.",
    attendus: [
      att('Personnification', '« Solitude ! que veux-tu donc ? »', 'La solitude est interpellée comme un être — personnification du sentiment abstrait.', ["personnification","solitude","interpellation","abstrait","lamartine","être"]),
      att('Oxymore', '« lumière éteinte »', 'L\'oxymore condense le paradoxe du souvenir — clarté qui ne illumine plus.', ["oxymore","lumière","éteinte","souvenir","paradoxe","contradiction"]),
      att('Registre lyrique', '« Tu m\'as pris le cœur »', 'La subjectivité amoureuse domine — élégie romantique du deuil.', ["lyrique","cœur","souffre","deuil","romantique","élégie"]),
      att('Interrogation', '« Me demander pourquoi je souffre ? »', 'Les questions rhétoriques dramatisent le dialogue intérieur avec la solitude.', ["interrogation","pourquoi","souffre","dialogue","intérieur","question"])
    ],
  },
  'GT-072': {
    texte: `Sur une des planètes qui tournent autour de l'étoile dénommée Sirius, était un jeune homme de 8 lieues de haut, et 400 coudées de tour ; c'est ce qu'on peut appeler une belle nature, et il était appelé Micromégas, nom qui signifie le grand petit, étant admiré de 3 pouces de hauteur quand il avait dix ans, et de 120 pieds géométriques lorsqu'il fut en pleine force. Il fallait que le diamètre de Micromégas fût en proportion de sa taille, et comme la surface des sphères croît par le carré des diamètres, le soleil de Sirius, qui de notre terre nous paraît à peine autant large qu'un cheval d'artillerie, était la proportion à Micromégas, et sa planète, comme 18 de nos soleils.`,
    contexte: "Conte philosophique — ironie, voyage initiatique, satire.",
    attendus: [
      att('Registre satirique', '« ce qu\'on peut appeler une belle nature »', 'Voltaire ironise sur les conventions du conte philosophique — ton léger et critique.', ["satirique","belle nature","ironie","voltaire","conte","critique"]),
      att('Hyperbole', '« 8 lieues de haut »', 'L\'exagération des dimensions ridiculise l\'échelle humaine — procédé du conte philosophique.', ["hyperbole","lieues","haut","exagération","échelle","gigantesque"]),
      att('Antithèse', '« Micromégas » / « le grand petit »', 'Le néologisme condense l\'opposition entre petit et grand — ironie sur le nom et la stature.', ["antithèse","micromégas","grand petit","nom","contraste","néologisme"]),
      att('Champ lexical', '« Sur une des planètes qui tournent autour de l\'étoile dénommée Sirius, était un j »', 'Le vocabulaire cosmique installe le cadre du voyage initiatique et de la satire.', ["champ lexical","planète","étoile","cosmique","voyage","espace"])
    ],
  },
  'GT-073': {
    texte: `Et voici que tout se dérobait, se vidait sous mon regard. Je me sentais étranger, je ne savais plus où j'étais, je ne voyais plus devant moi les choses dont je parlais : « faubourg, pavé, chaise, passants ». Les noms s'étaient desséchés, ils avaient vacillé et s'étaient évanouis : j'étais là, je ne savais plus où, je ne savais plus ce que c'était. Et voici que la racine du marronnier plongeait dans le sol, juste devant moi.`,
    contexte: "Roman existentialiste — révélation de l\'absurde.",
    attendus: [
      att('Gradation', '« se dérobait, se vidait »', 'La progression du malaise intensifie la crise existentielle — descente vers l\'absurde.', ["gradation","dérobait","vidait","malaise","crise","sartre"]),
      att('Énumération', '« faubourg, pavé, chaise, passants »', 'La liste des objets quotidiens devient étrangère — dissolution du langage et du réel.', ["énumération","faubourg","pavé","objets","étranger","langage"]),
      att('Registre tragique', '« tout se dérobait, se vidait »', 'La fatalité de l\'absurde dépasse Roquentin — terreur face au déréel.', ["tragique","dérobait","absurde","fatalité","déréalisation","nausée"]),
      att('Symbolisme', '« la racine du marronnier »', 'La racine devient révélateur de l\'existence brute — objet qui déclenche la nausée.', ["symbolisme","racine","marronnier","révélation","existence","objet"])
    ],
  },
  'GT-074': {
    texte: `Nathanaël, mets en ordre dans ta vie. Nathanaël, jette de ta vie les images du passé : ne garde que ce qui est toi, ce qui t'appartient. Nathanaël, je t'offre des Nourritures terrestres. Tout ce qui est fantastique, Nathanaël, je veux que tu t'en délivres. Tout ce qui est artificiel, Nathanaël, je veux que tu en déchires l'enveloppe. Ne garde que ce qui est toi, ce qui t'appartient. Nathanaël, je t'offre des Nourritures terrestres. Tout ce qui est fantastique, Nathanaël, je veux que tu t'en délivres.`,
    contexte: "Prose lyrique — quête de soi, registre lyrique et didactique.",
    attendus: [
      att('Anaphore', '« Nathanaël »', 'La répétition du nom martèle l\'injonction — structure didactique de la prose lyrique.', ["anaphore","nathanaël","injonction","répétition","didactique","gide"]),
      att('Impératif', '« Nathanaël, mets en ordre dans ta vie. Nathanaël, jette de ta vie les images du p »', 'Les impératifs structurent le discours comme manifeste de la quête de soi.', ["impératif","mets","jette","garde","manifeste","quête"]),
      att('Métaphore', '« les images du passé »', 'Le passé est une image à effacer — métaphore de la purification intérieure.', ["métaphore","images","passé","effacer","purification","mémoire"]),
      att('Antithèse', '« jette… / ne garde que »', 'L\'opposition entre rejeter et retenir définit l\'authenticité — quête de l\'essentiel.', ["antithèse","jette","garde","essentiel","authenticité","contraste"])
    ],
  },
  'GT-075': {
    texte: `POLYEUCTE
Non, non, les erreurs de votre cœur
Ont trop de pouvoir encore sur votre langue :
Elle parle avec douceur, et mon cœur s'y abonne ;
Et mon devoir m'oblige, et parle avec fureur.
Non, non, je ne veux point qu'un autre partage un jour
Le fruit délicieux d'un honneur que j'ai conquis ;
Et je ne veux point qu'un autre reçoive en couronne
Cette gloire que j'ai gagnée et qui me couronne.
POLYEUCTE
Non, non, madame, et c'est en moi-même que je cherche
Ce flot de vos regards dont le sang se resserre.`,
    contexte: "Tragédie chrétienne — conflit foi / amour, registre tragique.",
    attendus: [
      att('Antithèse', '« parle avec douceur » / « parle avec fureur »', 'Pauline et le devoir s\'opposent dans le cœur de Polyeucte — conflit tragique foi/amour.', ["antithèse","douceur","fureur","devoir","passion","conflit"]),
      att('Anaphore', '« Non, non »', 'La répétition refuse la compromission — fermeté du martyr face à l\'amour.', ["anaphore","non","refus","martyr","fermeté","foi"]),
      att('Registre tragique', '« mon devoir m\'oblige »', 'Le devoir divin dépasse le personnage — fatalité tragique du martyre.', ["tragique","devoir","oblige","martyre","fatalité","foi"]),
      att('Alexandrin', '« Et mon devoir m\'oblige, et parle avec fureur »', 'Le vers solennel porte la grandeur du conflit intérieur — alexandrin cornélien.', ["alexandrin","douze","solennel","cornelle","conflit","vers"])
    ],
  },
  'GT-076': {
    texte: `Booz s'était couché de fatigue accablé ;
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
    contexte: "Poème biblique — nuit paisible, énumération, registre épique.",
    attendus: [
      att('Comparaison', '« Sa barbe était d\'argent comme un ruisseau d\'avril »', 'La barbe blanche devient ruisseau printanier — vieillesse transfigurée en pureté.', ["comparaison","comme","barbe","ruisseau","vieillesse","pureté"]),
      att('Antithèse', '« Il n\'avait pas de fange » / « pas d\'enfer dans le feu »', 'La double négation définit la bonté de Booz en creux — pureté morale.', ["antithèse","fange","enfer","bonté","pureté","négation"]),
      att('Registre épique', '« sous les cieux étoilé »', 'Le cadre cosmique élève le moissonnage humble au rang d\'épopée biblique.', ["épique","cieux","étoilé","cosmique","biblique","hugo"]),
      att('Registre lyrique', '« Laissez tomber exprès des épis »', 'Le geste de générosité condense la bonté humaniste de Booz en une parole.', ["lyrique","épis","générosité","geste","humaniste","bonté"])
    ],
  },
  'GT-077': {
    texte: `À la fin tu es las de ce monde ancien.
Bergère ô tour Eiffel le troupeau des ponts bêle ce matin.
Tu en as assez de vivre dans l'antiquité grecque et romaine.
Ici même les automobiles ont l'air d'être anciennes.
La religion seule est restée toute neuve, la religion est restée simple comme les hangars de Port-Aviation.
Seul en Europe tu n'es pas antique ô Christianisme.
L'Européen le plus moderne c'est vous pape Pie X.
Et toi que les fenêtres observent la honte te retient d'entrer dans une église et de t'y confesser ce matin.`,
    contexte: "Poème moderniste — collage d\'images, vers libre, rupture.",
    attendus: [
      att('Apostrophe', '« Bergère ô tour Eiffel »', 'Apostrophe surréaliste qui fusionne pastorale et modernité urbaine — collage apollinairien.', ["apostrophe","bergère","eiffel","modernité","collage","apollinaire"]),
      att('Antithèse', '« monde ancien » / « moderne »', 'L\'opposition structure le poème — tension entre héritage classique et rupture moderniste.', ["antithèse","ancien","moderne","rupture","héritage","tension"]),
      att('Vers libre', '« À la fin tu es las de ce monde ancien »', 'L\'absence de contrainte métrique fixe libère le flux de conscience et la modernité poétique.', ["vers libre","rupture","mètre","modernité","flux","apollinaire"]),
      att('Accumulation', '« À la fin tu es las de ce monde ancien. Bergère ô tour Eiffel le troupeau des pon »', 'Le collage d\'images urbaines et religieuses construit la vision moderniste de Paris.', ["accumulation","collage","images","paris","urbain","moderniste"])
    ],
  },
  'GT-078': {
    texte: `Un soldat jeune, bouche ouverte, tête nue,
Et la nuque baignant dans le frais cresson bleu,
Dort ; il est étendu dans l'herbe, sous la nue,
Pâle dans son lit vert où la lumière pleut.

Les pieds dans les glaïeuls, il dort. Souriant comme
Sourirait un enfant malade, il fait un somme :
Nature, berce-le chaudement : il a froid.

Les parfums ne font pas frissonner sa narine ;
Il dort dans le soleil, la main sur sa poitrine,
Tranquille. Il a deux trous rouges au côté droit.`,
    contexte: "Chute du poème — révélation tragique, registre pathétique.",
    attendus: [
      att('Ironie tragique', '« Il a deux trous rouges au côté droit »', 'La révélation finale retourne le tableau bucolique — le soldat était mort depuis le début.', ["ironie","trous","rouges","mort","révélation","rimbaud"]),
      att('Personnification', '« Nature, berce-le chaudement : il a froid »', 'La nature ne peut réchauffer le mort — apostrophe pathétique et indifférence cosmique.', ["personnification","nature","berce","froid","mort","pathos"]),
      att('Champ lexical', '« Un soldat jeune, bouche ouverte, tête nue, Et la nuque baignant dans le frais cr »', 'Le champ lexical du sommeil masque la mort — suspense avant la chute.', ["champ lexical","dort","sommeil","repos","mort","suspense"]),
      att('Registre pathétique', '« deux trous rouges »', 'La violence de la guerre surgit dans l\'image crue — compassion et dénonciation.', ["pathétique","trous","guerre","violence","compassion","soldat"])
    ],
  },
  'GT-080': {
    texte: `— On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux, reprit le renard.
— L'essentiel est invisible pour les yeux, répétit le petit prince, afin de se souvenir.
— C'est le temps que tu as perdu pour ta rose qui fait ta rose si importante.
— C'est le temps que j'ai perdu pour ma rose... fit le petit prince, afin de se souvenir.
— Les hommes ont oublié cette vérité, dit le renard. Mais tu ne dois pas l'oublier. Tu deviens responsable pour toujours de ce que tu as apprivoisé. Tu es responsable de ta rose.
— Je suis responsable de ma rose... répétit le petit prince.`,
    contexte: "Conte philosophique — morale sur l\'amitié et l\'amour.",
    attendus: [
      att('Antithèse', '« cœur » / « yeux »', 'Voir avec le cœur oppose intérieur et extérieur — morale sur la perception affective.', ["antithèse","cœur","yeux","intérieur","vision","morale"]),
      att('Oxymore', '« invisible pour les yeux »', 'L\'essentiel est paradoxalement invisible — oxymore qui définit l\'amitié et l\'amour.', ["oxymore","invisible","yeux","essentiel","paradoxe","amour"]),
      att('Répétition', '« afin de se souvenir »', 'Le petit prince répète pour mémoriser — apprentissage de la sagesse par la parole.', ["répétition","souvenir","apprentissage","sagesse","renard","mémoire"]),
      att('Maxime', '« Tu es responsable de ta rose »', 'La formule condense la morale du conte — responsabilité et apprivoisement.', ["maxime","responsable","rose","morale","amitié","apprivoisé"])
    ],
  },
  'GT-081': {
    texte: `MADAME DE CLÈVES
Je n'ai pas tenu compte de ce que je vous avais dit, que je ne devais pas vous aimer ; je sens que je ne puis ni ne dois l'être. Il ne dépend pas de moi de vous donner des marques de mon estime et de ma tendresse. Monsieur de Nemours a tout l'avantage qu'il peut avoir sur vous ; je l'admire, je l'estime, je suis sensible à toutes ses qualités, et je suis persuadée qu'il mérite que l'on l'aime.`,
    contexte: "La princesse avoue à Monsieur de Clèves son amour pour le duc de Nemours — roman psychologique fondateur.",
    attendus: [
      att('Antithèse', '« ne devais pas vous aimer »', 'L\'opposition entre devoir et sentiment structure la confession — psychologie fine de la princesse.', ["antithèse","devoir","tendresse","passion","contraste","moral"]),
      att('Registre pathétique', '« Il ne dépend pas de moi »', 'La princesse est victime d\'un sentiment involontaire — pitié pour une héroïne déchirée.', ["pathétique","victime","involontaire","pitié","déchirée","sentiment"]),
      att('Champ lexical', '« MADAME DE CLÈVES Je n\'ai pas tenu compte de ce que je vous avais dit, que je ne »', 'Le vocabulaire nuancé distingue estime, tendresse et amour — psychologie aristocratique.', ["champ lexical","estime","tendresse","admire","affect","psychologie"]),
      att('Litote', '« ne devais pas vous aimer »', 'La pudeur classique formule la faute avec retenue — registre de la cour.', ["litote","pudeur","retenue","faute","classique","cour"])
    ],
  },
  'GT-082': {
    texte: `RENÉ
Il n'y a point d'individu qui ne soit plus heureux que moi dans le monde entier. Non, il n'y a pas de malheur comparable à celui de voir se détruire les seules passions qu'on aime. Un frère, une sœur, une maîtresse, une mère, perdues dans la tombe ! J'étais seul au monde : j'avais tout ce qui peut constituer la vie d'un homme. Je vivais dans l'affection d'une femme admirable ; je l'avais choisie entre tous les êtres.`,
    contexte: "René confie son mal du siècle à un père missionnaire — préromantisme et mélancolie.",
    attendus: [
      att('Antithèse', '« plus heureux que moi » / « perdues dans la tombe »', 'L\'ironie de l\'hyperbole malheureuse structure le mal du siècle — exagération romantique.', ["antithèse","heureux","tombe","ironie","malheur","contraste"]),
      att('Énumération', '« Un frère, une sœur, une maîtresse, une mère »', 'La liste des deuils accumule les pertes — gradation pathétique du mal du siècle.', ["énumération","frère","sœur","mère","deuil","liste"]),
      att('Hyperbole', '« plus heureux que moi dans le monde entier »', 'L\'exagération paradoxale traduit l\'extrême mélancolie du préromantisme.', ["hyperbole","malheur","monde","exagération","romantique","mélancolie"]),
      att('Registre lyrique', '« RENÉ Il n\'y a point d\'individu qui ne soit plus heureux que moi dans le monde en »', 'La subjectivité du moi romantique domine — confession intime au père missionnaire.', ["lyrique","je","romantique","mélancolie","subjectivité","spleen"])
    ],
  },
  'GT-083': {
    texte: `Je suis le Ténébreux, — le Veuf, — l'Inconsolé,
Le Prince d'Aquitaine à la Tour abolie :
Ma seule Étoile est morte, — et mon luth constellé
Porte le Soleil noir de la Mélancolie.
La tour du Guet immense qui a su pati ;
Nul n'a connu mon cœur que toi, — Femme imaginaire !
Celle qui cent fois me tortura comme un feu,
Et qui n'osa, — voulant voir la Sirène
Qui dort toujours au son des accords défunts,
Sourire sur les lèvres de l'Océan.`,
    contexte: "Sonnet hermétique — identité multiple du poète, symbolisme et mélancolie.",
    attendus: [
      att('Anaphore', '« Je suis le… — le… — l\'… »', 'La répétition fragmente l\'identité du poète — sujet multiple et mélancolique.', ["anaphore","je suis","identité","fragment","répétition","nerveal"]),
      att('Métaphore', '« le Soleil noir de la Mélancolie »', 'L\'oxymore solaire condense le spleen en image symboliste — héritage des Chimères.', ["métaphore","soleil noir","mélancolie","spleen","symbolisme","nerveau"]),
      att('Énumération', '« Ténébreux… Veuf… Inconsolé »', 'La liste des titres accumule les facettes du moi poétique déchiré.', ["énumération","ténébreux","veuf","inconsolé","identité","liste"]),
      att('Registre lyrique', '« Je suis le Ténébreux »', 'L\'affirmation du moi mythique ouvre un sonnet hermétique et mélancolique.', ["lyrique","je","mythique","subjectivité","hermétique","poète"])
    ],
  },
  'GT-084': {
    texte: `La rue assourdissante autour de moi hurlait.
Longue, mince, en grand deuil, douceur majestueuse,
Une femme passa, d'une main fastueuse
Élevant, balançant le feston et l'ourlet ;
Agile et noble, sa jambe de statue.
Moi, je buvais, crispé comme un extravagant,
Dans son œil, ciel livide où germe un Foudre,
Elle, délicate morte, toujours le cher corps vivant
Que j'ai senti passer un coup de foudre !
La rue assourdissante autour de moi hurlait.
Longue, mince, en grand deuil, douceur majestueuse,
Une femme passa, d'une main fastueuse
Élevant, balançant le feston et l'ourlet ;`,
    contexte: "Poème en prose lyrique — beauté fugitive dans la foule parisienne, modernité urbaine.",
    attendus: [
      att('Hyperbole', '« La rue assourdissante autour de moi hurlait »', 'L\'amplification urbaine oppose le chaos extérieur à l\'intensité intérieure.', ["hyperbole","rue","hurlait","exagération","ville","chaos"]),
      att('Métaphore', '« un coup de foudre »', 'L\'émotion fulgurante condense la beauté fugitive en image — modernité baudelairienne.', ["métaphore","foudre","émotion","instant","beauté","fugitive"]),
      att('Comparaison', '« sa jambe de statue »', 'Le corps de la passante devient sculpture — idéalisation dans la foule.', ["comparaison","jambe","statue","idéal","passante","beauté"]),
      att('Registre lyrique', '« j\'ai senti passer »', 'La subjectivité du poète domine — fulgurance de l\'expérience urbaine moderne.', ["lyrique","je","senti","subjectivité","moderne","urbain"])
    ],
  },
  'GT-085': {
    texte: `Il y avait, dans l'île Bourbon, une maison bien connue, qu'on appelait le manoir de B… Elle était située au fond d'un vallon, au milieu de plantations de caféiers. C'était une grande maison carrée, à un seul étage, avec un vaste toit en terrasse. De chaque côté de la porte, deux colonnes de bois soutenaient un auvent ; et, au-dessus de la porte, on voyait une espèce de girouette en fer, qui représentait un homme armé d'une épée.`,
    contexte: "Roman colonial et féministe — cadre exotique, Indiana prisonnière de son mariage.",
    attendus: [
      att('Champ lexical', '« Il y avait, dans l\'île Bourbon, une maison bien connue, qu\'on appelait le manoir »', 'Le vocabulaire exotique installe le cadre colonial — décor de l\'emprisonnement d\'Indiana.', ["champ lexical","île","café","exotique","colonial","décor"]),
      att('Ellipse', '« le manoir de B… »', 'La suspension du nom crée un effet de secret ou d\'intimité — convention romanesque.', ["ellipse","nom","suspension","secret","convention","récit"]),
      att('Focalisation zéro', '« Il y avait… une maison »', 'Le narrateur omniscient installe le décor objectivement — exposition du roman.', ["focalisation zéro","narrateur","décor","objectif","exposition","sand"]),
      att('Registre descriptif', '« grande maison carrée »', 'La description précise ancre le récit dans le réel géographique de la Réunion.', ["descriptif","maison","précision","réel","géographie","roman"])
    ],
  },
  'GT-086': {
    texte: `Lucien regardait Paris du haut de Saint-Sulpice ; Paris lui semblait un océan de pierre, un désert de maisons, un abîme où l'on ne pouvait rien distinguer. Il était venu de sa province avec des illusions ; il avait rêvé de gloire, de fortune, de femmes ; et il se trouvait seul, perdu dans cette ville immense, sans amis, sans protecteurs, sans ressources. Paris lui semblait un océan de pierre où il allait être englouti.`,
    contexte: "Lucien Chardon découvre Paris — roman de l\'ascension sociale et de la désillusion.",
    attendus: [
      att('Métaphore', '« un océan de pierre »', 'Paris devient océan hostile — image qui traduit le vertige et l\'écrasement du provincial.', ["métaphore","océan","pierre","paris","vertige","balzac"]),
      att('Accumulation', '« océan… désert… abîme »', 'Les trois images cumulent la menace de la métropole — désillusion parisienne.', ["accumulation","océan","désert","abîme","menace","métropole"]),
      att('Hyperbole', '« abîme où l\'on ne pouvait rien distinguer »', 'L\'exagération traduit le vertige de Lucien face à l\'immensité urbaine.', ["hyperbole","abîme","vertige","exagération","immensité","ville"]),
      att('Antithèse', '« illusions » / « seul, perdu »', 'L\'opposition entre rêves provinciaux et réalité parisienne structure l\'ascension sociale.', ["antithèse","illusions","perdu","rêve","réalité","désillusion"])
    ],
  },
  'GT-087': {
    texte: `Les occupants des voitures commencèrent à s'ennuyer à mourir, et, faute de mieux, on parla de cette fille, bien entendu avec des plaisanteries et des grossièretés. On la traitait comme une chose, comme un objet de plaisir ou de dédain. Les femmes la regardaient avec une curiosité méprisante ; les hommes la regardaient avec une curiosité avide. Et, faute de mieux, on parla de cette fille, bien entendu avec des plaisanteries et des grossièretés.`,
    contexte: "Nouvelle naturaliste — hypocrisie bourgeoise pendant la guerre de 1870.",
    attendus: [
      att('Registre satirique', '« plaisanteries et des grossièretés »', 'Maupassant dénonce l\'hypocrisie bourgeoise — mépris et vulgarité des voyageurs.', ["satirique","plaisanteries","grossièretés","hypocrisie","bourgeois","mépris"]),
      att('Hyperbole', '« s\'ennuyer à mourir »', 'L\'exagération de l\'ennui motive la bassesse du discours — réalisme maupassantien.', ["hyperbole","ennui","mourir","exagération","réalisme","voyage"]),
      att('Antithèse', '« occupants » / « cette fille »', 'L\'opposition entre respectabilité affichée et mépris révèle la hypocrisie sociale.', ["antithèse","occupants","fille","respectabilité","mépris","contraste"]),
      att('Focalisation zéro', '« Les occupants… on parla »', 'Le narrateur omniscient observe le groupe — critique impersonnelle de la société.', ["focalisation zéro","narrateur","groupe","critique","société","observe"])
    ],
  },
  'GT-088': {
    texte: `Il avait peur, une peur atroce, une peur qui le prenait à la gorge, qui lui serrait le cœur, qui lui glaçait le sang dans les veines. Jacques Lantier avait peur de lui-même, peur de cette violence qui montait en lui sans qu'il la comprenne, peur de cette hérédité maudite qui le poussait vers le crime. Il avait peur, une peur atroce, une peur qui le prenait à la gorge, qui lui serrait le cœur, qui lui glaçait le sang dans les veines. Jacques Lantier avait peur de lui-même, peur de cette violence qui montait en lui sans qu'il la comprenne, peur de cette hérédité maudite qui le poussait vers le crime.`,
    contexte: "Jacques Lantier, héros maudit — hérédité, violence, naturalisme psychologique.",
    attendus: [
      att('Accumulation', '« à la gorge… serrait le cœur… glaçait le sang »', 'Les effets physiques de la peur envahissent le corps — naturalisme somatique zolien.', ["accumulation","peur","corps","sang","naturalisme","physique"]),
      att('Gradation', '« peur… atroce… gorge… cœur… sang »', 'L\'intensité croissante de la terreur structure la crise intérieure de Jacques.', ["gradation","peur","intensité","terreur","crise","zola"]),
      att('Registre pathétique', '« peur de lui-même »', 'Jacques est proie de forces intérieures — compassion pour le héros maudit.', ["pathétique","peur","maudit","pitié","hérédité","forces"]),
      att('Hyperbole', '« glaçait le sang dans les veines »', 'L\'exagération traduit la terreur physique de la violence héréditaire.', ["hyperbole","sang","glaçait","terreur","exagération","violence"])
    ],
  },
  'GT-089': {
    texte: `FIGARO
Parce que vous êtes un grand seigneur, vous vous croyez un grand génie ! Noblesse, fortune, un rang, des places, tout cela rend si fier ! Quoi ! vous n'avez rien de tout cela, et vous êtes fâché tout de même ! Que de travail pour trouver un pauvre bouffon ! Que de travail ! Eh ! Dieu merci, mon cher seigneur, avec le talent que j'ai pour accommoder tout ! Et pourvu que je gagne ma vie, peu m'importe que je travaille pour ou contre le roi, pour l'Espagne ou la France, pour le diable ou pour Dieu ! Mais qu'avez-vous fait de tant de biens ? Vous vous êtes donné la peine de naître, et rien de plus. Quant à moi, qui me suis fait tout seul...`,
    contexte: "Figaro dénonce le privilège — comédie des Lumières, registre satirique et polémique.",
    attendus: [
      att('Question rhétorique', '« qu\'avez-vous fait de tant de biens ? »', 'La question engage le débat politique — critique des privilèges dans la comédie des Lumières.', ["question","rhétorique","biens","privilège","lumières","polémique"]),
      att('Registre satirique', '« vous vous croyez un grand génie »', 'Figaro dénonce l\'orgueil nobiliaire — satire des Lumières contre l\'aristocratie.', ["satirique","génie","noblesse","orgueil","figaro","critique"]),
      att('Anaphore', '« Noblesse, fortune, un rang, des places »', 'L\'énumération martèle les avantages vides du comte — liste satirique.', ["anaphore","noblesse","fortune","rang","énumération","privilège"]),
      att('Antithèse', '« vous êtes donné la peine de naître » / « moi… tout seul »', 'L\'opposition naissance/mérite structure la tirade politique de Figaro.', ["antithèse","naître","tout seul","mérite","travail","contraste"])
    ],
  },
  'GT-090': {
    texte: `AUGUSTE
Pour ne le point suivre, il faut quitter la vie,
Et sa clémence veut que je vive malheureux.
Il m'ôte le moyen de mourir à sa pitié,
Pour ne le point suivre il faut quitter la vie,
Et sa bonté veut que je vive malheureux.
AUGUSTE
Auguste, mon ennemi, m'arrache tout mon but ;
Il m'ôte le moyen de mourir à sa pitié,
Pour ne le point suivre il faut quitter la vie,
Et sa clémence veut que je vive malheureux.`,
    contexte: "Auguste face à Cinna — tragédie politique, conflit entre clémence et justice.",
    attendus: [
      att('Antithèse', '« quitter la vie » / « veut que je vive »', 'Auguste oscille entre mort et survie — dilemme tragique de la clémence impériale.', ["antithèse","mort","vivre","clémence","contraste","auguste"]),
      att('Oxymore', '« m\'ôte le moyen de mourir à sa pitié »', 'La pitié empêche la mort — paradoxe du tyran clément qui condamne à vivre.', ["oxymore","pit","mourir","paradoxe","clémence","tyran"]),
      att('Registre tragique', '« quitter la vie »', 'Le choix entre mort et vie malheureuse installe la fatalité politique — grandeur cornélienne.', ["tragique","vie","mort","fatalité","politique","cornelle"]),
      att('Alexandrin', '« Il m\'ôte le moyen de mourir à sa pitié »', 'Le vers solennel porte la dignité tragique d\'Auguste face à Cinna.', ["alexandrin","douze","solennel","dignité","cornelle","vers"])
    ],
  },
  'GT-091': {
    texte: `ESTHER
Oui, je viens, Seigneur, je viens, je viens en tremblant
Dans ce saint lieu que vos oracles ont honoré,
Dans ce lieu, dont je tremble et n'ose regarder,
De ce divin mystère où votre majesté
Dans l'obscurité même éclate à vos fidèles.
Vous seul connaissez mon innocence et mon crime.
ESTHER
Oui, je viens, Seigneur, je viens, je viens en tremblant
Dans ce saint lieu que vos oracles ont honoré,
Dans ce lieu, dont je tremble et n'ose regarder,
De ce divin mystère où votre majesté
Dans l'obscurité même éclate à vos fidèles.`,
    contexte: "Esther implore Dieu — tragédie biblique, registre pathétique et religieux.",
    attendus: [
      att('Anaphore', '« je viens… je viens… je viens »', 'La triple répétition martèle la ferveur et la peur d\'Esther — rythme obsédant.', ["anaphore","viens","répétition","ferveur","peur","esther"]),
      att('Apostrophe', '« Seigneur »', 'Esther interpelle Dieu — registre religieux et pathétique de la prière.', ["apostrophe","seigneur","dieu","religieux","prière","racine"]),
      att('Antithèse', '« innocence et mon crime »', 'L\'opposition condense le paradoxe moral d\'Esther — pureté et culpabilité.', ["antithèse","innocence","crime","paradoxe","moral","pur"]),
      att('Registre pathétique', '« en tremblant »', 'La terreur d\'Esther suscite compassion — tragédie biblique pathétique.', ["pathétique","tremblant","terreur","compassion","innocence","persécution"])
    ],
  },
  'GT-092': {
    texte: `ALCESTE
Je ne puis souffrir, et j'enrage en mon âme,
De voir les hommes se vendre à des lâches bassesses,
Et traiter de souverain avec des basses faiblesses ;
D'adorer des sots gens, et se traiter de fripons,
Et de ne se donner jamais que de fausses raisons.
C'est une chose inconcevable,
Que tout ce qu'on dit ici passe pour raisonnable ;
Et qu'on n'y souffre point qu'un franc discoursier.
ALCESTE
Je ne puis souffrir, et j'enrage en mon âme,
De voir les hommes se vendre à des lâches bassesses,
Et traiter de souverain avec des basses faiblesses ;
D'adorer des sots gens, et se traiter de fripons.`,
    contexte: "Alceste dénonce l\'hypocrisie mondaine — comédie de caractère, héros intransigeant.",
    attendus: [
      att('Registre satirique', '« lâches bassesses »', 'Alceste dénonce l\'hypocrisie mondaine — satire des mœurs par le misanthrope.', ["satirique","lâche","bassesse","hypocrisie","alceste","monde"]),
      att('Anaphore', '« lâche… lâches »', 'La répétition insiste sur le mépris d\'Alceste pour la faiblesse morale.', ["anaphore","lâche","répétition","mépris","faiblesse","molière"]),
      att('Registre lyrique', '« j\'enrage en mon âme »', 'La colère subjective du misanthrope installe le registre lyrique dans la comédie.', ["lyrique","rage","colère","subjectivité","misanthrope","âme"]),
      att('Champ lexical', '« ALCESTE Je ne puis souffrir, et j\'enrage en mon âme, De voir les hommes se vendr »', 'Le vocabulaire moral condense la critique de la corruption mondaine.', ["champ lexical","lâche","bassesse","faiblesse","corruption","moral"])
    ],
  },
  'GT-093': {
    texte: `ARGAN
Tout ce qui est de moi est à la médecine et à la mort ;
Je ne suis né que pour souffrir et pour me faire soigner ;
Je n'ai point de santé, et je suis malade par complaisance.
Béline, ma femme, et mes filles, Angélique et Louison,
Me font prendre toutes les drogues que les médecins ordonnent.
Je suis malade, et je veux être malade ; c'est ma profession.
ARGAN
Tout ce qui est de moi est à la médecine et à la mort ;
Je ne suis né que pour souffrir et pour me faire soigner ;
Je n'ai point de santé, et je suis malade par complaisance.`,
    contexte: "Argan, hypocondriaque — satire de la médecine et du caractère comique.",
    attendus: [
      att('Hyperbole', '« Tout ce qui est de moi est à la médecine »', 'L\'exagération ridiculise l\'obsession médicale d\'Argan — comique de caractère.', ["hyperbole","médecine","exagération","obsession","argan","comique"]),
      att('Registre comique', '« que pour souffrir et pour me faire soig »', 'La formule provoque le rire par l\'absurdité de l\'hypocondriaque.', ["comique","souffrir","soigner","ridicule","hypocondriaque","absurde"]),
      att('Champ lexical', '« ARGAN Tout ce qui est de moi est à la médecine et à la mort ; Je ne suis né que »', 'Le vocabulaire médical structure l\'obsession d\'Argan — satire de la médecine.', ["champ lexical","médecine","malade","soigner","médical","satire"]),
      att('Antithèse', '« santé » / « malade par complaisance »', 'L\'opposition entre bon sens et maladie choisie accentue le ridicule.', ["antithèse","santé","malade","complaisance","ridicule","contraste"])
    ],
  },
  'GT-094': {
    texte: `Murs, ville,
Et port,
Air nocturne et brume, encor brume ;
Montent, retombent, ou passent en hurlant,
Les djinns, fils du feu, dans l'air rapides et légers ;
Le cortège ailé prend sa course, en hurlant ;
Et sous les plis de leur robe épaisse
Montent de longs nuages en courbe,
Et les vents, les vents aux longs soupirs,
Battent les murailles dans la nuit.
Murs, ville,
Et port,
Air nocturne et brume, encor brume ;
Montent, retombent, ou passent en hurlant,
Les djinns, fils du feu, dans l'air rapides et légers ;`,
    contexte: "Poème en strophes de longueur variable — peur surnaturelle, rythme et crescendo.",
    attendus: [
      att('Énumération', '« Murs, ville, Et port, Air nocturne et brume, encor brume ; Montent, retombent, o »', 'La liste des lieux installe le décor nocturne — effet de plénitude oppressante.', ["énumération","murs","ville","port","décor","liste"]),
      att('Gradation', '« Montent, retombent, ou passent en hurlant »', 'La progression des mouvements crée un crescendo de terreur surnaturelle.', ["gradation","montent","retombent","crescendo","terreur","hugo"]),
      att('Personnification', '« Les djinns… en hurlant »', 'Les djinns animés hurlent — personnification du surnaturel fantastique.', ["personnification","djinns","hurler","surnaturel","fantastique","peur"]),
      att('Registre fantastique', '« fils du feu »', 'Le registre fantastique trouble la frontière entre réel et surnaturel.', ["fantastique","feu","surnaturel","terreur","djinns","nuit"])
    ],
  },
  'GT-095': {
    texte: `Ô saisons, ô châtiments
On est de son temps malgré tout et qu'on ne s'y habitue pas :
Plutôt être dévoré par la bête féroce, que d'être rongé par mille fourmis.
Plus doucement on y serait pris.
Ô saisons, ô châtiments
On est de son temps malgré tout et qu'on ne s'y habitue pas :
Plus doucement on y serait pris.
Ô saisons, ô châtiments
On est de son temps malgré tout et qu'on ne s'y habitue pas :
Plutôt être dévoré par la bête féroce, que d'être rongé par mille fourmis.`,
    contexte: "Prose poétique — révolte existentielle, modernité rimbaudienne.",
    attendus: [
      att('Apostrophe', '« Ô saisons, ô châtiments »', 'La double apostrophe interpelle le temps et la souffrance — révolte existentielle.', ["apostrophe","saisons","châtiments","révolte","rimbaud","temps"]),
      att('Anaphore', '« Ô saisons, ô châtiments »', 'La répétition martèle l\'obsession temporelle — modernité rimbaudienne.', ["anaphore","ô","répétition","obsession","temps","insiste"]),
      att('Antithèse', '« de son temps » / « ne s\'y habitue pas »', 'L\'opposition traduit le malaise existentiel — refus de s\'accommoder.', ["antithèse","temps","habitue","refus","malaise","existence"]),
      att('Vers libre', '« On est de son temps malgré tout »', 'La prose poétique échappe à la forme fixe — rupture avec la poésie classique.', ["vers libre","rupture","moderne","prose","rimbaud","forme"])
    ],
  },
  'GT-096': {
    texte: `Je ne voyais pas l'officier. Le soir, après le dîner, il venait dans la salle de séjour. Il entrait, saluait la tante, la mère, et moi ; et s'asseyait dans un fauteuil, sans avoir l'air de nous regarder. Nous ne lui répondions pas. Il restait là, debout un instant, puis il s'inclinait légèrement et repartait sans avoir prononcé une parole. Je ne voyais pas l'officier. Le soir, après le dîner, il venait dans la salle de séjour. Il entrait, saluait la tante, la mère, et moi ; et s'asseyait dans un fauteuil, sans avoir l'air de nous regarder.`,
    contexte: "Résistance passive — occupant allemand et famille française, silence comme refus.",
    attendus: [
      att('Champ lexical', '« Je ne voyais pas l\'officier. Le soir, après le dîner, il venait dans la salle de »', 'Le mutisme structure le refus — résistance passive symbolique.', ["champ lexical","silence","mutisme","refus","résistance","symbolique"]),
      att('Gradation', '« entrait… s\'asseyait… s\'inclinait… repartait »', 'La progression des gestes dramatise la tension sans parole.', ["gradation","geste","tension","progression","dramatique","vercors"]),
      att('Registre pathétique', '« Nous ne lui répondions pas »', 'Le silence suscite tension et courage moral — résistance passive.', ["pathétique","silence","courage","tension","moral","occupation"]),
      att('Antithèse', '« Je ne voyais pas l\'officier. Le soir, après le dîner, il venait dans la salle de »', 'L\'opposition entre présence de l\'ennemi et mutisme traduit le refus.', ["antithèse","officier","silence","ennemi","refus","contraste"])
    ],
  },
  'GT-097': {
    texte: `ANTIGONE
Je suis de ceux — peut-être — qui n'ont pas besoin de comprendre pour agir. Je suis de ceux — peut-être — qui n'ont pas besoin de déraisonner pour agir. Je suis de ceux qui pensent toujours qu'on va faire quelque chose de bien, et qui, parfois, le font.
ANTIGONE
Je suis de ceux — peut-être — qui n'ont pas besoin de comprendre pour agir. Je suis de ceux — peut-être — qui n'ont pas besoin de déraisonner pour agir.`,
    contexte: "Antigone moderne face à Créon — tragédie de la révolte, théâtre du XXe siècle.",
    attendus: [
      att('Litote', '« parfois, le font »', 'L\'atténuation renforce l\'affirmation — lucidité modeste d\'Antigone.', ["litote","parfois","atténue","modest","lucidité","action"]),
      att('Antithèse', '« pensent… faire » / « parfois, le font »', 'L\'opposition entre idéal et action structure la révolte d\'Antigone.', ["antithèse","pensent","font","idéal","action","espoir"]),
      att('Registre tragique', '« Je suis de ceux »', 'L\'affirmation identitaire installe la révolte tragique face à Créon.', ["tragique","antigone","révolte","héroïne","destin","liberté"]),
      att('Registre lyrique', '« Je suis de ceux »', 'La subjectivité engagée d\'Antigone — affirmation morale moderne.', ["lyrique","je","affirmation","subjectivité","moral","engage"])
    ],
  },
  'GT-099': {
    texte: `Ce qui meurt en un homme, c'est le consentement. Il faut donc un équivalent de la révolte. La révolte, c'est ce qui le construit. La révolution est la libération de l'homme par l'homme. La condition humaine, ce n'est pas la fin de l'homme, c'est la condition dans laquelle l'homme commence à être révolté. Ce qui meurt en un homme, c'est le consentement. Il faut donc un équivalent de la révolte. La révolte, c'est ce qui le construit.`,
    contexte: "Roman engagé — révolution chinoise, philosophie de l\'action et de la fraternité.",
    attendus: [
      att('Antithèse', '« consentement » / « révolte »', 'L\'opposition structure la philosophie de l\'action — refus de la passivité.', ["antithèse","consentement","révolte","passivité","refus","contraste"]),
      att('Métaphore', '« ce qui meurt… c\'est le consentement »', 'La mort du consentement symbolise l\'éveil politique — philosophie malrauvienne.', ["métaphore","meurt","consentement","éveil","politique","philosophie"]),
      att('Registre épique', '« révolte… construit »', 'La révolte élève l\'action au grand récit — engagement révolutionnaire.', ["épique","révolte","construit","action","révolution","grandeur"]),
      att('Parallélisme', '« Ce qui meurt… / La révolte… »', 'Les structures parallèles condensent la pensée en maximes — aphorisme engagé.', ["parallélisme","maxime","aphorisme","structure","pensée","malraux"])
    ],
  }
};
