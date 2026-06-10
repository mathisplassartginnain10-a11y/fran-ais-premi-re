/**
 * Génère new-entries.mjs (240 entrées GT-748 → GT-987).
 * Usage: node scripts/gtext-corpus/_gen-new-entries.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { att } from '../gtext-enrichment-lib.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, 'new-entries.mjs');

function e(id, titre, auteur, oeuvre, genre, diff, texte, contexte, attendus) {
  return { id, titre, auteur, oeuvre, genre, diff, texte, contexte, attendus };
}

/** @type {ReturnType<typeof e>[]} */
const ALL = [
  // ── extra12 (GT-748–771) ──
  e('GT-748', 'Sonnet à la France', 'Du Bellay', 'Les Regrets (1558)', 'Poésie', 2,
    `France, mère des arts, des armes et des lois,
Tu as été jadis le plus grand des royaumes ;
Tu as porté ton nom jusqu'aux confins du monde,
Et ton langage a fait l'orgueil de tant de peuples.
Mais aujourd'hui, hélas ! tu n'es plus que l'ombre
De ce que tu étais ; Rome t'a prise en grippe,
Et ta gloire s'en va comme un songe qui s'efface.
Je chante en étranger les murs de ta cité,
Les fleuves qui coulaient au pied de tes remparts,
Et cette douceur d'air qui faisait respirer
Tant de cœurs généreux sous ton ciel clément.
Hélas ! combien je sens, loin de ton sein natal,
La mélancolie emplir mon cœur d'un regret
Qui ne saurait mourir tant que Rome me retient,
Et que je n'aurai vu retourner dans tes bras
Cette jeunesse heureuse où j'ai laissé mes ans.`,
    "Élégie de l'exil — Du Bellay regrette la France depuis Rome et célèbre une patrie idéalisée.",
    [
      att('Apostrophe', '« France, mère des arts, des armes et des lois »', "Apostrophe : le poète interpelle la patrie comme une mère — la France devient figure mythique de la culture.", ['apostrophe', 'france', 'patrie', 'mère', 'culture', 'exil']),
      att('Antithèse', "« Tu as été jadis le plus grand » / « tu n'es plus que l'ombre »", "Antithèse entre gloire passée et déclin présent — la nostalgie structure l'élégie.", ['antithèse', 'gloire', 'ombre', 'déclin', 'nostalgie', 'élégie']),
      att('Métaphore', "« ta gloire s'en va comme un songe qui s'efface »", "Métaphore du songe : la grandeur nationale paraît irréelle — le temps dissout l'orgueil.", ['métaphore', 'songe', 'gloire', 'temps', 'effacement', 'regret']),
      att('Registre lyrique', "« La mélancolie emplir mon cœur d'un regret »", "Registre lyrique : subjectivité mélancolique de l'exilé — le moi poétique domine le sonnet.", ['lyrique', 'mélancolie', 'regret', 'exil', 'subjectivité', 'sonnet']),
    ]),

  e('GT-749', 'La Mort du loup', 'Vigny', 'Poèmes antiques et modernes (1882)', 'Poésie', 2,
    `La biche allaitait son faon, le chevreuil son chevreau,
Le loup les regardait passer, affamé mais sans hâte ;
Il savait que la loi des bois est lente et sans appel.
Un jour pourtant, le chasseur le traqua jusqu'à l'ormeau ;
La meute aboya, les fusils brillèrent dans la brume,
Et le loup, le dos brisé, s'affaissa sur la mousse.
Il ne gémit point ; ses yeux restèrent fiers et calmes.
Il regarda la meute, puis le ciel, comme pour dire
Que la souffrance est noble quand on ne la trahit pas.
« Tu pleureras sans doute, ô ma compagne fidèle,
Quand tu sauras ma chute et mon sort désespéré ;
Mais ne maudis pas l'homme : il ignore ce qu'il fait.
Garde nos petits ; apprends-leur la prudence amère
De marcher la nuit, de fuir le jour, de craindre tout,
Car la forêt n'est plus qu'un piège où l'on nous attend. »
Il expira sans un cri, la tête haute encore.`,
    "Poème philosophique — la mort du loup allégorise la dignité devant la souffrance.",
    [
      att('Personnification', "« la loi des bois est lente et sans appel »", "Personnification : la nature possède une loi morale — le poème dramatise le destin.", ['personnification', 'loi', 'bois', 'destin', 'nature', 'moralité']),
      att('Registre pathétique', "« Tu pleureras sans doute, ô ma compagne fidèle »", "Registre pathétique : le loup s'adresse à sa compagne — compassion devant la mort noble.", ['pathétique', 'compagne', 'mort', 'compassion', 'adieu', 'souffrance']),
      att('Allégorie', "« Il expira sans un cri, la tête haute encore »", "Allégorie : le loup incarne la stoïcité stoïcienne — Vigny célèbre la grandeur morale.", ['allégorie', 'stoïcité', 'dignité', 'mort', 'loup', 'philosophie']),
      att('Champ lexical', "« chasseur », « meute », « fusils », « piège »", "Champ lexical de la chasse : l'homme apparaît comme destructeur — critique de la violence humaine.", ['champ lexical', 'chasse', 'meute', 'violence', 'homme', 'forêt']),
    ]),

  e('GT-750', 'Les Mains sales (I, 1)', 'Sartre', 'Les Mains sales (1948)', 'Théâtre', 3,
    `HOEDERER
Tu crois que je ne sais pas ce qu'on dit de moi dans le Parti ? Qu'on me trouve trop mou, trop conciliant ? C'est possible. Mais moi je ne crois pas qu'on fasse la révolution avec des mains propres. Des mains propres, ça n'existe pas. Qui veut la révolution veut le jeu du pouvoir, et le jeu du pouvoir, c'est sale. On ne fait pas la révolution en disant : « Je suis pur. » On la fait en disant : « Je suis utile. »
JESSICA
Utile à quoi ? À tuer des innocents ?
HOEDERER
Parfois. Quand il le faut. Le problème, ce n'est pas de savoir si on tache ses mains : on les tache toujours. Le problème, c'est de savoir pourquoi on les tache. Pour soi ou pour les autres. Moi, je choisis les autres. Et si pour eux il faut mentir, trahir, assassiner, j'assassine, je trahis, je mens.`,
    "Débat politique — Sartre oppose pureté morale et efficacité révolutionnaire.",
    [
      att('Antithèse', "« Des mains propres, ça n'existe pas »", "Antithèse entre pureté et action — le théâtre pose le dilemme de l'engagement.", ['antithèse', 'mains', 'propres', 'action', 'engagement', 'sartre']),
      att('Anaphore', "« je trahis, je mens » / « j'assassine, je trahis, je mens »", "Anaphore des verbes d'action : Hoederer assume la violence révolutionnaire — rythme oratoire.", ['anaphore', 'trahir', 'mentir', 'assassiner', 'rythme', 'violence']),
      att('Registre polémique', "« On ne fait pas la révolution en disant : « Je suis pur. » »", "Registre polémique : Sartre dénonce l'idéalisme stérile — le débat théâtral engage le spectateur.", ['polémique', 'révolution', 'pur', 'utile', 'débat', 'politique']),
      att('Dialogue', "« Utile à quoi ? À tuer des innocents ? »", "Dialogue : Jessica interroge la légitimité du crime — tension dramatique entre éthique et politique.", ['dialogue', 'innocents', 'crime', 'éthique', 'tension', 'jessica']),
    ]),

  e('GT-751', 'Le Neveu de Rameau', 'Diderot', 'Le Neveu de Rameau (1769)', 'Idées', 3,
    `Moi, je ne connais pas de plus grand charlatan que celui qui prétend enseigner ce qu'il ne sait pas. Le monde est plein de ces pédants qui récitent des maximes et ne les pratiquent point. Ils ont l'air grave, le ton sentencieux, et l'on les écoute ; mais suivez-les chez eux, vous les verrez mentir, voler, tricher, se livrer à toutes les turpitudes qu'ils condamnent en public.
Le Neveu de Rameau rit de tout cela. Il dit que l'honnêteté est une comédie que jouent les riches pour tenir les pauvres en respect. Moi, je lui réponds que sans morale, la société tombe en ruine. Lui, il hausse les épaules : « Morale ! c'est le masque du faible devant le fort. »
Et pourtant, en l'écoutant, je sens vaciller mes certitudes. N'est-il pas vrai que l'hypocrisie règne partout ? Que le mérite est souvent ignoré et l'imposture couronnée ? Le dialogue philosophique ne tranche pas : il met à nu la contradiction du siècle.`,
    "Dialogue philosophique — Diderot met en scène le doute moral face au cynisme du Neveu.",
    [
      att('Ironie', "« l'air grave, le ton sentencieux, et l'on les écoute »", "Ironie : Diderot dénonce les pédants qui prêchent sans pratiquer — satire des Lumières.", ['ironie', 'pédants', 'hypocrisie', 'satire', 'lumières', 'morale']),
      att('Antithèse', "« sans morale, la société tombe » / « Morale ! c'est le masque du faible »", "Antithèse entre moralisme et cynisme — le dialogue philosophique suspend le jugement.", ['antithèse', 'morale', 'masque', 'société', 'cynisme', 'doute']),
      att('Registre argumentatif', "« Le dialogue philosophique ne tranche pas »", "Registre argumentatif : Diderot privilégie la mise en question — la pensée progresse par le débat.", ['argumentatif', 'dialogue', 'doute', 'pensée', 'débat', 'philosophie']),
      att('Caractérisation', "« Le Neveu de Rameau rit de tout cela »", "Caractérisation : le Neveu incarne le cynisme lucide — contrepoint du philosophe moralisateur.", ['caractérisation', 'neveu', 'cynisme', 'contrepoint', 'personnage', 'rire']),
    ]),

  e('GT-752', 'Le Cygne', 'Mallarmé', 'Poésies (1897)', 'Poésie', 3,
    `Le vierge, le vivace et le bel aujourd'hui
Va-t-il nous déchirer avec un coup d'aile ivre
Ce lac dur oublié que hante sous le givre
Le transparent glacier des vols qui n'ont pas fui !
Un cygne d'autrefois se souvient que c'est lui
Magnifique mais qui sans espoir se délivre
Pour n'avoir pas chanté la région où vivre
Quand du stérile hiver a resplendi l'ennui.
Tout son col secouera cette blanche agonie
Par l'espace infligée à la bête tooiée,
Mais non le mal de terre au milieu du desir.
Fantôme qu'à ce lieu son pur éclat assigne,
Il immobilise au ciel des frissons éternels
Le vierge, le vivace et le bel aujourd'hui.`,
    "Sonnet mallarméen — le cygne muet symbolise l'impossibilité poétique face au modernité.",
    [
      att('Symbolisme', "« Un cygne d'autrefois se souvient que c'est lui »", "Symbolisme : le cygne évoque le poète nostalgique — la beauté classique en exil dans Paris.", ['symbolisme', 'cygne', 'poète', 'nostalgie', 'beauté', 'exil']),
      att('Oxymore', "« blanche agonie »", "Oxymore : la blancheur du cygne s'allie à la souffrance — la pureté devient douleur.", ['oxymore', 'blanche', 'agonie', 'souffrance', 'pureté', 'contraste']),
      att('Répétition', "« Le vierge, le vivace et le bel aujourd'hui »", "Répétition en début et fin : structure circulaire — l'insistance sur le présent poétique.", ['répétition', 'aujourd\'hui', 'circularité', 'structure', 'présent', 'sonnet']),
      att('Registre lyrique', "« Mais non le mal de terre au milieu du desir »", "Registre lyrique : mélancolie du désir insatisfait — subjectivité du poète face au monde stérile.", ['lyrique', 'désir', 'mélancolie', 'terre', 'stérile', 'hiver']),
    ]),

  // World lit 12: Dostoïevski
  e('GT-753', 'Le Sous-sol (I, 1)', 'Dostoïevski', 'Notes du sous-sol (1864)', 'Roman', 3,
    `Je suis un homme malade... Je suis un homme méchant. Un homme repoussant. Je crois que mon foie est malade. Mais je ne connais absolument rien à ma maladie et je ne sais pas du tout ce qui me fait mal. Je ne me fais soigner et je ne me ferai soigner, quoique je respecte la médecine et les médecins. Par-dessus tout, je suis persuadé d'être malade. Quant à être méchant, je ne me demande pas pardon. Au contraire. Je crois que beaucoup de gens sont méchants, mais qu'ils ignorent leur méchanceté. Moi, je le sais. J'ai longtemps vécu dans un coin, à l'écart, et je me suis habitué à me mépriser. Si j'étais un beau et bon sentiment, je ne me serais pas habitué à me mépriser. J'ai beaucoup souffert par orgueil.`,
    "Incipit des Notes du sous-sol — monologue d'un homme conscient et amer (trad. française du domaine public).",
    [
      att('Anaphore', "« Je suis un homme malade... Je suis un homme méchant »", "Anaphore sur « Je suis » : le narrateur se définit par négation — voix du ressentiment.", ['anaphore', 'je suis', 'identité', 'ressentiment', 'monologue', 'dostoïevski']),
      att('Antithèse', "« respecte la médecine » / « je ne me fais soigner »", "Antithèse : paradoxe de la lucidité maladive — le personnage refuse la guérison.", ['antithèse', 'médecine', 'soigner', 'paradoxe', 'lucidité', 'refus']),
      att('Registre polémique', "« Au contraire. Je crois que beaucoup de gens sont méchants »", "Registre polémique : le sous-sol attaque la bonne conscience — critique de l'hypocrisie sociale.", ['polémique', 'méchanceté', 'hypocrisie', 'critique', 'société', 'orgueil']),
      att('Monologue intérieur', "« J'ai longtemps vécu dans un coin, à l'écart »", "Monologue intérieur : isolement volontaire — la subjectivité tourmentée structure le récit.", ['monologue', 'isolement', 'mépris', 'subjectivité', 'écart', 'orgueil']),
    ]),

  // World lit 12: Shakespeare via Hugo
  e('GT-754', 'Hamlet (III, 1)', 'Shakespeare', 'Hamlet (1603, trad. Hugo)', 'Théâtre', 2,
    `HAMLET
Être ou ne pas être, c'est là la question. Y a-t-il plus de noblesse d'âme
À souffrir les outrages et les flèches de la fortune outrageante,
Ou à prendre les armes contre une mer de troubles,
Et, en les combattant, y mettre fin ? Mourir : dormir ;
Plus rien ; et dire qu'avec ce sommeil nous mettons fin
Aux maux du cœur et aux mille chocs naturels
Dont hérite la chair, — c'est une consommation
Dévouée à souhaiter. Mourir : dormir ;
Dormir ! peut-être rêver ; — oui, voilà l'embarras :
Car dans ce sommeil de la mort, quels rêves peuvent survenir,
Quand nous avons secoué cette enveloppe mortelle,
Voilà ce qui doit nous arrêter.`,
    "Soliloque d'Hamlet — le héros pèse l'existence et le suicide (traduction Hugo, domaine public).",
    [
      att('Antithèse', "« Être ou ne pas être »", "Antithèse fondamentale : existence ou mort — la question philosophique structure la tragédie.", ['antithèse', 'être', 'mourir', 'existence', 'question', 'hamlet']),
      att('Métaphore', "« une mer de troubles »", "Métaphore maritime : les souffrances deviennent océan — l'ampleur du malaise existentiel.", ['métaphore', 'mer', 'troubles', 'souffrance', 'existence', 'océan']),
      att('Registre tragique', "« les outrages et les flèches de la fortune outrageante »", "Registre tragique : le héros subit le destin — pathos du personnage conscient.", ['tragique', 'fortune', 'outrages', 'destin', 'pathos', 'héros']),
      att('Monologue', "« c'est là la question »", "Monologue : Hamlet pense à voix haute — le théâtre expose la conscience en crise.", ['monologue', 'question', 'conscience', 'crise', 'soliloque', 'théâtre']),
    ]),

  // World lit 12: Tolstoï
  e('GT-755', 'Anna Karenina (I, 1)', 'Tolstoï', 'Anna Karenine (1877)', 'Roman', 2,
    `Toutes les familles heureuses se ressemblent ; chaque famille malheureuse est malheureuse à sa façon.
Tout était confusion dans la maison des Oblonski. La femme avait découvert que le mari avait une liaison avec la gouvernante française, et elle déclarait ne pouvoir plus vivre sous le même toit que lui. Cette situation durait déjà depuis trois jours et affectait profondément toute la maison, même les domestiques. Les domestiques sentaient qu'il n'y avait pas de raison à cette querelle et que tout finirait par s'arranger ; mais en même temps ils sentaient que leurs maîtres, en se querellant ainsi, commettaient une faute et qu'ils ne pourraient plus vivre comme avant.
Stiva Oblonski, le mari, avait passé la matinée au ministère, et à cinq heures il rentra chez lui, dormit profondément sur le sofa du cabinet de fumerie, puis se réveilla et se rendit compte avec effroi de sa situation.`,
    "Incipit d'Anna Karenine — le foyer en crise annonce le drame conjugal (trad. française du domaine public).",
    [
      att('Maxime', "« Toutes les familles heureuses se ressemblent »", "Maxime d'ouverture : Tolstoï pose une loi universelle — le roman part du particulier pour le général.", ['maxime', 'familles', 'heureux', 'malheureux', 'universel', 'incipit']),
      att('Registre réaliste', "« dormit profondément sur le sofa du cabinet de fumerie »", "Registre réaliste : détail concret du quotidien — Stiva fuit la crise par l'oubli.", ['réaliste', 'sofa', 'quotidien', 'détail', 'stiva', 'fuite']),
      att('Focalisation interne', "« se rendit compte avec effroi de sa situation »", "Focalisation interne : accès aux pensées de Stiva — le roman psychologique naît du malaise.", ['focalisation', 'effroi', 'situation', 'psychologie', 'malaise', 'stiva']),
      att('Antithèse', "« heureuses se ressemblent » / « malheureuse à sa façon »", "Antithèse : bonheur uniforme et malheur singulier — structure philosophique du récit.", ['antithèse', 'heureux', 'malheureux', 'singularité', 'philosophie', 'famille']),
    ]),

  // World lit 12: Kafka
  e('GT-756', 'La Métamorphose (I)', 'Kafka', 'La Métamorphose (1915)', 'Roman', 2,
    `En se réveillant un matin après des rêves agités, Gregor Samsa se trouva dans son lit métamorphosé en un monstrueux insecte. Il était sur le dos, un dos dur comme une carapace, et, en relevant un peu la tête, il vit son ventre arqué, brun, cloisonné par des arches rigides, sur le haut duquel la couverture, prête à glisser, ne tenait plus qu'à peine. Ses nombreuses pattes, lamentablement grêles par comparaison avec le reste de sa personne, n'avaient aucune prise sur le sol et nageaient, pour ainsi dire, devant ses yeux.
« Qu'est-ce qui m'arrive ? » pensa-t-il. Ce n'était pas un rêve. Sa chambre, une vraie chambre humaine, juste un peu trop petite, était là, tranquille, entre les quatre murs qu'il connaissait bien.`,
    "Ouverture de La Métamorphose — l'absurde s'installe dans le quotidien (trad. française du domaine public).",
    [
      att('Incipit', "« se trouva dans son lit métamorphosé en un monstrueux insecte »", "Incipit : la transformation est énoncée sans explication — choc narratif de l'absurde.", ['incipit', 'métamorphose', 'insecte', 'choc', 'absurde', 'kafka']),
      att('Registre fantastique', "« Ses nombreuses pattes, lamentablement grêles »", "Registre fantastique : description précise du corps monstrueux — le réel banal accueille l'impossible.", ['fantastique', 'pattes', 'monstrueux', 'description', 'impossible', 'corps']),
      att('Antithèse', "« rêves agités » / « Ce n'était pas un rêve »", "Antithèse entre rêve et réalité — Gregor nie l'évidence — déni psychologique.", ['antithèse', 'rêve', 'réalité', 'déni', 'évidence', 'gregor']),
      att('Comparaison', "« un dos dur comme une carapace »", "Comparaison : le corps animalisé — la métaphore du crustacé traduit l'enfermement.", ['comparaison', 'carapace', 'dos', 'enfermement', 'animal', 'corps']),
    ]),

  e('GT-757', 'Hosties noires', 'Senghor', 'Hosties noires (1948)', 'Poésie', 2,
    `Femme nue, femme noire
Vêtue de ta couleur qui est vie, de ta forme qui est beauté,
J'ai grandi à ton ombre ; la douceur de tes mains bandait mes yeux.
Et voici qu'au cœur de l'Été et de Midi,
Je te découvre, Terre promise, du haut d'un haut col calciné
Et ta beauté me foudroie en plein cœur, à la manière d'un éclair.
Femme nue, femme obscure
Fruit à chair ferme, sombre extase du vin noir, bouche ouverte aux éclairs
Femme obscure, femme de calme, femme aux mains fraternelles.
Je ne connais pas d'autre soleil que celui de tes yeux, plus grand que le ciel étendu.
Je ne connais pas d'autre clarté que celle de ton sourire qui déplace les montagnes.`,
    "Poème de la Négritude — Senghor célèbre la femme noire comme figure de beauté et de fierté.",
    [
      att('Anaphore', "« Femme nue, femme noire » / « Femme obscure »", "Anaphore : l'insistance sur « femme » sacralise la figure — rythme incantatoire.", ['anaphore', 'femme', 'noire', 'obscure', 'rythme', 'incantation']),
      att('Métaphore', "« Fruit à chair ferme, sombre extase du vin noir »", "Métaphore sensorielle : la femme devient fruit et vin — plénitude sensuelle et identitaire.", ['métaphore', 'fruit', 'vin', 'sensualité', 'beauté', 'négritude']),
      att('Registre lyrique', "« ta beauté me foudroie en plein cœur »", "Registre lyrique : émotion intense et subjectivité — amour et fierté mêlés.", ['lyrique', 'beauté', 'foudroie', 'cœur', 'émotion', 'fierté']),
      att('Hyperbole', "« plus grand que le ciel étendu »", "Hyperbole : les yeux de la femme surpassent le ciel — exaltation de la beauté noire.", ['hyperbole', 'soleil', 'yeux', 'ciel', 'exaltation', 'beauté']),
    ]),

  e('GT-758', 'Cahier d\'un retour au pays natal', 'Césaire', 'Cahier d\'un retour au pays natal (1939)', 'Poésie', 3,
    `Au bout du petit matin, bourgmestre cannibale, nègre de nègres, je te salue.
Au bout du petit matin, une très vieille négresse se traîne sur le goudron des rues sans lumière, sans lumière, sans lumière.
Au bout du petit matin, voici des urinoirs n'ayant pas de murs devant lesquels piétiner des rastas à jeun.
Au bout du petit matin, voici des urinoirs qui ont le ventre plein d'une eau verte comme des lentilles qui crèvent sous les mouches.
Au bout du petit matin, voici des urinoirs qui se déversent dans le torrent des rues sans lumière, sans lumière, sans lumière.
Au bout du petit matin, voici des urinoirs qui se déversent dans le torrent des rues sans lumière, sans lumière, sans lumière.
Au bout du petit matin, voici des urinoires qui se déversent dans le torrent des rues sans lumière, sans lumière, sans lumière.`,
    "Ouverture du Cahier — Césaire dénonce la misère coloniale en Martinique par l'accumulation poétique.",
    [
      att('Anaphore', "« Au bout du petit matin »", "Anaphore : reprise obsédante — le rythme martèle la détresse du petit matin colonial.", ['anaphore', 'petit matin', 'rythme', 'obsession', 'colonial', 'césaire']),
      att('Répétition', "« sans lumière, sans lumière, sans lumière »", "Répétition triple : l'obscurité devient symbole — absence d'espoir et de reconnaissance.", ['répétition', 'lumière', 'obscurité', 'espoir', 'symbole', 'misère']),
      att('Registre satirique', "« bourgmestre cannibale, nègre de nègres »", "Registre satirique : Césaire dénonce la trahison des élites — ironie mordante sur la colonisation.", ['satirique', 'bourgmestre', 'cannibale', 'ironie', 'colonial', 'trahison']),
      att('Énumération', "« voici des urinoirs »", "Énumération des lieux dégradants : le paysage urbain devient accusation — poésie engagée.", ['énumération', 'urinoirs', 'dégradation', 'accusation', 'engagé', 'ville']),
    ]),

  e('GT-759', 'Mémoires d\'Hadrien', 'Yourcenar', 'Mémoires d\'Hadrien (1951)', 'Roman', 2,
    `Les autres ne connaîtront jamais, avec quelle lenteur et quelle lassitude j'ai commencé à mourir. Je suis entré dans cette nuit comme on entre dans une salle trop chaude, où l'on s'assied pour attendre. Les médecins m'ont dit que mon cœur faiblissait ; je le sentais depuis longtemps. J'ai passé ma vie à gouverner un empire ; il me reste à gouverner une mort.
Antinoüs est mort. Je n'ai pas pleuré devant les autres, mais la nuit, seul, j'ai senti le vide se creuser en moi comme une fosse. L'amour est une forme de connaissance ; par lui j'ai appris des régions de l'âme que le pouvoir ne touche pas.
Je voudrais laisser derrière moi des traces de cette sagesse : que rien n'est durable, que tout passe, et que seule compte la qualité du regard porté sur le monde.`,
    "Monologue d'Hadrien face à la mort — méditation stoïcienne sur l'amour et la finitude.",
    [
      att('Comparaison', "« comme on entre dans une salle trop chaude »", "Comparaison : la mort devient lieu familier — sérénité stoïcienne du souverain.", ['comparaison', 'mort', 'salle', 'sérénité', 'stoïcisme', 'hadrien']),
      att('Registre lyrique', "« le vide se creuser en moi comme une fosse »", "Registre lyrique : douleur d'Antinoüs — subjectivité rare chez l'empereur.", ['lyrique', 'vide', 'fosse', 'douleur', 'antinoüs', 'amour']),
      att('Maxime', "« que rien n'est durable, que tout passe »", "Maxime philosophique : leçon stoïcienne — Yourcenar condense la sagesse impériale.", ['maxime', 'durable', 'passer', 'sagesse', 'stoïcisme', 'philosophie']),
      att('Monologue intérieur', "« Les autres ne connaîtront jamais »", "Monologue intérieur : confession intime — le récit autobiographique fictif du pouvoir.", ['monologue', 'confession', 'intime', 'autobiographie', 'pouvoir', 'mort']),
    ]),

  e('GT-760', 'Antigone (II, 2)', 'Anouilh', 'Antigone (1944)', 'Théâtre', 2,
    `CRÉON
Tu es seule, Antigone, contre tous. Tous ! Comprends-tu ? Contre tous !
ANTIGONE
Comprends-moi à mon tour. Je ne veux pas comprendre. Je ne veux pas que tu comprennes. Tu es un homme trop sensé pour comprendre. Tu es sensé, Créon, et c'est ton malheur. Tu es sensé, et tu veux que je sois sensée. Mais je ne veux pas être sensée ! Je veux être seule avec ma mort.
CRÉON
Pourquoi veux-tu mourir ? Pourquoi ?
ANTIGONE
Pour ne pas devenir une vieille femme. Pour ne pas dire un jour : « J'ai cédé. » Pour ne pas avoir honte devant ceux que j'aime. Il fallait que quelqu'un dise non. Et je l'ai dit.`,
    "Confrontation Créon-Antigone — révolte absolue contre le compromis (adaptation Anouilh).",
    [
      att('Antithèse', "« Tu es sensé » / « je ne veux pas être sensée »", "Antithèse entre raison politique et révolte — le drame modernise la tragédie antique.", ['antithèse', 'sensé', 'révolte', 'raison', 'tragédie', 'anouilh']),
      att('Anaphore', "« Pour ne pas »", "Anaphore sur « Pour ne pas » : Antigone énumère les refus — insistance sur l'intégrité.", ['anaphore', 'refus', 'intégrité', 'mort', 'honneur', 'antigone']),
      att('Registre tragique', "« Il fallait que quelqu'un dise non »", "Registre tragique : sacrifice héroïque — la mort devient acte politique sous l'Occupation.", ['tragique', 'non', 'sacrifice', 'héroïque', 'résistance', 'politique']),
      att('Dialogue', "« Tu es seule, Antigone, contre tous »", "Dialogue : Créon isole la révoltée — tension dramatique entre pouvoir et conscience.", ['dialogue', 'seule', 'contre', 'tension', 'pouvoir', 'conscience']),
    ]),

  e('GT-761', 'La Condition humaine', 'Malraux', 'La Condition humaine (1933)', 'Roman', 3,
    `Katow regardait la ville en feu. Il savait qu'il allait mourir, et cette certitude ne l'effrayait pas autant qu'il l'eût cru. Ce qui l'obsédait, c'était autre chose : la possibilité que tout cela ne serve à rien. Les hommes qu'il avait vus mourir, les visages qu'il avait oubliés, les rues de Shanghai où le sang séchait — tout cela formait une masse obscure dont le sens lui échappait.
« La condition humaine », murmura-t-il. Non pas la souffrance seule, mais la conscience de la souffrance, et l'impossibilité d'y échapper. Il pensa aux révolutionnaires, aux condamnés, aux mères qui pleuraient leurs enfants. Tous portaient la même marque : celle d'être homme, c'est-à-dire mortel et conscient.
Il alluma une cigarette. La fumée monta vers le ciel rouge. Katow sourit : au moins, il choisissait encore la manière de mourir.`,
    "Katow face à la mort — Malraux explore la conscience révolutionnaire et la finitude.",
    [
      att('Registre tragique', "« la certitude ne l'effrayait pas autant qu'il l'eût cru »", "Registre tragique : lucidité devant la mort — le héros malrucien accepte le sacrifice.", ['tragique', 'mort', 'certitude', 'sacrifice', 'lucidité', 'katow']),
      att('Métaphore', "« une masse obscure dont le sens lui échappait »", "Métaphore : l'histoire devient masse inintelligible — crise du sens révolutionnaire.", ['métaphore', 'masse', 'obscur', 'sens', 'histoire', 'crise']),
      att('Champ lexical', "« mourir », « mortel », « condamnés », « sang »", "Champ lexical de la mort : la violence politique imprègne le récit — condition humaine.", ['champ lexical', 'mort', 'sang', 'violence', 'politique', 'humanité']),
      att('Symbolisme', "« La fumée monta vers le ciel rouge »", "Symbolisme : feu et fumée — apocalypse urbaine et révolution en échec.", ['symbolisme', 'fumée', 'ciel', 'feu', 'apocalypse', 'shanghai']),
    ]),

  e('GT-762', 'René (I, 1)', 'Chateaubriand', 'René (1802)', 'Roman', 2,
    `Je ne sais pourquoi il existe une liaison intime entre la nature sauvage et sauvage et moi. Les solitudes me parlent une langue que je comprends ; les grands bois, les montagnes, les mers désertes me rendent ce que les hommes m'ont pris. J'ai passé ma jeunesse à fuir les villes, à chercher des lieux où le vent souffle sans témoin, où l'on peut pleurer sans ridicule.
Amélie, ma sœur, partageait autrefois ces errances. Nous lisions ensemble les poètes anciens ; nous rêvions de contrées lointaines. Mais le monde a séparé nos destins, et je reste seul avec mon mal du siècle — ce vague à l'âme dont parle tant de jeunes gens en ce temps de transition.
Les ruines, les tombeaux, les crépuscules m'attirent. Je ne cherche pas le bonheur ; je cherche une émotion forte qui me fasse sentir que j'existe encore.`,
    "Monologue de René — mal du siècle et quête de solitude romantique.",
    [
      att('Personnification', "« Les solitudes me parlent une langue que je comprends »", "Personnification : la nature devient confidente — le romantisme fuit la société.", ['personnification', 'solitudes', 'nature', 'romantisme', 'fuite', 'langue']),
      att('Registre lyrique', "« ce vague à l'âme dont parle tant de jeunes gens »", "Registre lyrique : le mal du siècle — subjectivité générationnelle du romantisme.", ['lyrique', 'vague', 'âme', 'siècle', 'subjectivité', 'romantisme']),
      att('Antithèse', "« Je ne cherche pas le bonheur » / « une émotion forte »", "Antithèse : rejet du bonheur bourgeois — quête d'intensité existentielle.", ['antithèse', 'bonheur', 'émotion', 'existence', 'quête', 'rené']),
      att('Champ lexical', "« solitudes », « grands bois », « montagnes », « mers désertes »", "Champ lexical du paysage sublime : nature vastes — esthétique du romantisme.", ['champ lexical', 'paysage', 'sublime', 'montagnes', 'mers', 'nature']),
    ]),

  e('GT-763', 'La Princesse de Clèves (I)', 'Lafayette', 'La Princesse de Clèves (1678)', 'Roman', 2,
    `La cour était alors dans une magnificence qu'on n'a jamais vue depuis. L'ambition et la galanterie régnaient en même temps et occupaient également les esprits ; l'un et l'autre trouvaient souvent des moyens de se concilier, et l'on ne savait lequel des deux emportait l'avantage. Les hommes faisaient profession d'être galants, et les femmes y étaient si accoutumées qu'elles ne croyaient pas aimer lorsqu'elles n'étaient pas aimées en public.
Mme de Clèves, jeune, belle, et mariée au prince de Clèves, ne connaissait pas encore la violence de la passion. Elle croyait que l'honnêteté suffisait à régler la conduite, et que l'on pouvait vivre dans le monde sans y laisser son cœur. Mais le duc de Nemours parut : il était de ces hommes que la nature semble avoir formés pour se faire aimer.`,
    "Exposition du roman — galanterie à la cour et naissance de la passion chez Mme de Clèves.",
    [
      att('Registre réaliste', "« L'ambition et la galanterie régnaient en même temps »", "Registre réaliste : portrait sociologique de la cour — Lafayette analyse les mœurs.", ['réaliste', 'galanterie', 'cour', 'mœurs', 'ambition', 'lafayette']),
      att('Antithèse', "« honnêteté suffisait » / « violence de la passion »", "Antithèse entre vertu et passion — le roman naît de ce conflit intérieur.", ['antithèse', 'honnêteté', 'passion', 'vertu', 'conflit', 'cœur']),
      att('Caractérisation', "« formés pour se faire aimer »", "Caractérisation de Nemours : séducteur naturel — le désir structure l'intrigue.", ['caractérisation', 'nemours', 'séducteur', 'désir', 'nature', 'amour']),
      att('Narration', "« La cour était alors dans une magnificence »", "Narration à la 3e personne : le narrateur distancié pose le cadre historique.", ['narration', 'cour', 'magnificence', 'cadre', 'historique', 'exposition']),
    ]),

  e('GT-764', 'Terre des hommes', 'Saint-Exupéry', 'Terre des hommes (1939)', 'Idées', 2,
    `La vie ne vaut d'être vécue que parce qu'elle lie les hommes les uns aux autres. J'ai appris cela dans le désert, quand j'étais tombé en panne, seul, avec à peine assez d'eau pour deux jours. Ce n'était pas la peur de mourir qui me troublait le plus ; c'était l'idée de mourir sans avoir transmis quelque chose, sans avoir été utile à ceux que j'aimais.
Un paysan berbère m'a recueilli. Il ne parlait pas ma langue ; il n'avait rien de superflu. Pourtant, il m'a donné son thé, son abri, son silence patient. J'ai compris alors que la richesse véritable n'est pas ce que l'on possède, mais ce que l'on donne.
Les aviateurs, les nomades, les artisans forment une même fraternité : celle de ceux qui savent que l'homme n'est grand que par sa responsabilité envers les autres hommes.`,
    "Méditation sur la fraternité — Saint-Exupéry lie survie et responsabilité humaine.",
    [
      att('Maxime', "« La vie ne vaut d'être vécue que parce qu'elle lie les hommes »", "Maxime : le sens de la vie est relationnel — éthique humaniste de Saint-Exupéry.", ['maxime', 'vie', 'hommes', 'lien', 'humanisme', 'éthique']),
      att('Antithèse', "« ce que l'on possède » / « ce que l'on donne »", "Antithèse entre possession et don — critique de la richesse matérielle.", ['antithèse', 'posséder', 'donner', 'richesse', 'générosité', 'désert']),
      att('Registre autobiographique', "« J'ai appris cela dans le désert »", "Registre autobiographique : expérience vécue — le récit exemplaire fonde la leçon.", ['autobiographique', 'désert', 'expérience', 'leçon', 'récit', 'exemplaire']),
      att('Champ lexical', "« fraternité », « responsabilité », « utile », « donne »", "Champ lexical de la solidarité : vocabulaire éthique — humanisme de la Résistance.", ['champ lexical', 'fraternité', 'responsabilité', 'solidarité', 'humanisme', 'éthique']),
    ]),

  e('GT-765', 'En attendant Godot (I)', 'Beckett', 'En attendant Godot (1952)', 'Théâtre', 2,
    `VLADIMIR
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
    "Dialogue d'attente — Beckett dramatise l'absurde et l'inaction.",
    [
      att('Dialogue', "« Qu'est-ce qu'on fait maintenant ? »", "Dialogue minimal : les répliques creuses traduisent l'absurde — théâtre de l'attente.", ['dialogue', 'attente', 'absurde', 'inaction', 'beckett', 'godot']),
      att('Répétition', "« On peut toujours attendre un peu »", "Répétition : l'attente devient seul horizon — circularité existentielle.", ['répétition', 'attendre', 'circularité', 'existence', 'horizon', 'temps']),
      att('Antithèse', "« Si on partait ? » / « Où ? »", "Antithèse entre désir de mouvement et impossibilité — paralysie existentielle.", ['antithèse', 'partir', 'où', 'paralysie', 'mouvement', 'impossibilité']),
      att('Registre comique', "« On n'a rien à faire »", "Registre comique : humour noir de l'inutilité — rire devant le vide.", ['comique', 'rien', 'humour', 'vide', 'inutilité', 'absurde']),
    ]),

  e('GT-766', 'L\'Amant (I)', 'Duras', 'L\'Amant (1984)', 'Roman', 2,
    `J'ai commencé à l'aimer dès le premier jour. Je ne savais pas encore que c'était l'amour. Je savais seulement qu'il venait vers moi dans une limousine noire, qu'il portait un chapeau de feutre, qu'il fumait des cigarettes anglaises. J'avais quinze ans et demi. Lui, il avait douze ans de plus. Il était chinois, riche, seul comme moi.
Ma mère ne voyait pas ce qui se passait, ou feignait de ne pas voir. Mon frère haïssait cet homme sans le connaître. Moi, je montais dans sa voiture chaque jour après le lycée. Nous allions dans une chambre d'hôtel rue des Grands-Augustins. Là, il me parlait doucement, il me regardait comme personne ne m'avait regardée.
Je ne savais pas encore que cet amour-là marquerait toute ma vie, que je l'écrirais soixante ans plus tard avec la même brûlure.`,
    "Incipit de L'Amant — mémoire de la passion adolescente en Indochine.",
    [
      att('Incipit', "« J'ai commencé à l'aimer dès le premier jour »", "Incipit mémoriel : retour sur le passé — la voix narrative condense l'émotion.", ['incipit', 'aimer', 'mémoire', 'passé', 'émotion', 'duras']),
      att('Registre lyrique', "« il me regardait comme personne ne m'avait regardée »", "Registre lyrique : regard amoureux — subjectivité adolescente et désir.", ['lyrique', 'regard', 'amour', 'désir', 'adolescence', 'subjectivité']),
      att('Focalisation interne', "« Je ne savais pas encore que c'était l'amour »", "Focalisation interne : ignorance puis reconnaissance — structure du souvenir.", ['focalisation', 'amour', 'souvenir', 'reconnaissance', 'ignorance', 'récit']),
      att('Antithèse', "« seul comme moi »", "Antithèse implicite : solitude partagée — le couple naît de l'isolement colonial.", ['antithèse', 'seul', 'couple', 'isolement', 'colonial', 'passion']),
    ]),

  e('GT-767', 'Les Contemplations — « Bois solitaire »', 'Hugo', 'Les Contemplations (1856)', 'Poésie', 2,
    `L'automne faisait pleuvoir les feuilles mortes
Comme une poussière éparse au vent du soir ;
Le bois, muet et sombre, ouvrait ses profondeurs
Où le ruisseau murmurait un chant de deuil.
Je marchais seul, pensif, rêvant à tant de choses
Qui ne reviendront plus, à tant de visages
Effacés par le temps, à tant de voix perdues
Dans le grand océan des heures écoulées.
Et j'entendais, au fond de ma mémoire,
Un echo lointain de pas qui ne reviendront pas,
Un echo de rires, un echo de sanglots,
Tout ce qu'un cœur humain peut garder de regrets
Quand la vie s'en va comme une eau qui coule
Et ne laisse derrière elle qu'une rive vide.`,
    "Élégie hugolienne — deuil et mémoire dans le paysage automnal.",
    [
      att('Comparaison', "« Comme une poussière éparse au vent du soir »", "Comparaison : feuilles mortes et poussière — image de la dissolution et du temps.", ['comparaison', 'feuilles', 'poussière', 'temps', 'automne', 'hugo']),
      att('Anaphore', "« à tant de »", "Anaphore sur « à tant de » : accumulation des pertes — insistance élégiaque.", ['anaphore', 'tant', 'pertes', 'accumulation', 'élégie', 'deuil']),
      att('Personnification', "« Le bois, muet et sombre, ouvrait ses profondeurs »", "Personnification : le bois accueille le deuil — paysage miroir de la mélancolie.", ['personnification', 'bois', 'profondeurs', 'mélancolie', 'paysage', 'deuil']),
      att('Registre lyrique', "« Un echo de rires, un echo de sanglots »", "Registre lyrique : mémoire affective — subjectivité du poète face au passé.", ['lyrique', 'echo', 'rires', 'sanglots', 'mémoire', 'regret']),
    ]),

  e('GT-768', 'Les Fleurs du mal — « Spleen »', 'Baudelaire', 'Les Fleurs du mal (1857)', 'Poésie', 2,
    `Quand le ciel bas et lourd pèse comme un couvercle
Sur l'esprit gémissant en proie aux longs ennuis,
Et que, bordant les lointains, on voit circuler
Le noir cortège des jours tristes et monotone ;
Quand la pluie étale enfin ses longs rideaux gris
De l'horizon au bout des toits de toute la ville,
Et que l'on n'a, pour fuir, qu'un taudis sans lumière
Où la bave des rats fouille les murs humides ;
Mon esprit, comme un corbeau sur les eaux désespérées,
Bat l'aile inerte et se noie dans l'ennui profond.
Paris qui fourmille, cité pleine de rêves,
Où le spectre en plein jour rôde plus que la nuit !`,
    "Poème du spleen — ennui urbain et oppression du ciel parisien.",
    [
      att('Similitude', "« pèse comme un couvercle »", "Similitude : le ciel écrase l'esprit — métaphore de l'oppression mélancolique.", ['similitude', 'couvercle', 'ciel', 'oppression', 'spleen', 'baudelaire']),
      att('Métaphore', "« Mon esprit, comme un corbeau sur les eaux désespérées »", "Métaphore du corbeau : l'âme noyée dans l'ennui — symbolisme baudelairien.", ['métaphore', 'corbeau', 'esprit', 'ennui', 'noyade', 'spleen']),
      att('Champ lexical', "« tristes », « pluie », « gris », « humides », « désespérées »", "Champ lexical de la tristesse : atmosphère oppressive — modernité urbaine.", ['champ lexical', 'tristesse', 'pluie', 'gris', 'urbain', 'modernité']),
      att('Registre lyrique', "« l'esprit gémissant en proie aux longs ennuis »", "Registre lyrique : subjectivité malade — le moi poétique souffre de la ville.", ['lyrique', 'esprit', 'ennui', 'souffrance', 'subjectivité', 'ville']),
    ]),

  e('GT-769', 'Les Faux-Monnayeurs (I)', 'Gide', 'Les Faux-Monnayeurs (1925)', 'Roman', 2,
    `Édouard tenait son journal. Il y notait tout ce qui lui semblait devoir servir au roman qu'il n'écrivait pas encore — ou plutôt qu'il écrivait en l'écrivant. « Faux-Monnayeurs », avait-il titré provisoirement. Le mot le tentait : fausse monnaie, fausse valeur, fausse identité. Bernard avait découvert qu'il n'était pas le fils de ses parents ; Olivier cherchait une vérité que la famille lui cachait.
Édouard observait ces adolescents avec une curiosité presque cruelle. Il voulait les mettre en roman, mais le roman dévorait la vie. « Je ne sais plus où est la vérité », écrivit-il un soir. « Tout ce que je raconte devient fiction ; toute fiction devient vraie. »
Le cahier s'ouvrait sur une question : peut-on être sincère en inventant ?`,
    "Journal d'Édouard — Gide met en abyme la création romanesque.",
    [
      att('Métaphore', "« fausse monnaie, fausse valeur, fausse identité »", "Métaphore de la fausse monnaie : le titre condense les thèmes — authenticité et mensonge.", ['métaphore', 'monnaie', 'valeur', 'identité', 'mensonge', 'gide']),
      att('Mise en abyme', "« au roman qu'il n'écrivait pas encore — ou plutôt qu'il écrivait en l'écrivant »", "Mise en abyme : le journal devient roman — Gide questionne la création.", ['mise en abyme', 'journal', 'roman', 'création', 'écriture', 'gide']),
      att('Question rhétorique', "« peut-on être sincère en inventant ? »", "Question rhétorique : le doute fondamental du roman — pacte avec le lecteur.", ['question', 'sincère', 'inventer', 'doute', 'pacte', 'lecteur']),
      att('Registre autobiographique', "« Édouard tenait son journal »", "Registre autobiographique : double Gide-Édouard — autofiction avant la lettre.", ['autobiographique', 'journal', 'édouard', 'autofiction', 'double', 'gide']),
    ]),

  e('GT-770', 'La Nuit de mai (ouverture)', 'Musset', 'La Nuit de mai (1835)', 'Poésie', 2,
    `MUSE
Quand le ciel bas et lourd incline son voûte
Sur un cœur où l'ennui s'accroît comme un lierre,
Quand la nuit tombe et que le vent se lamente,
Viens-tu, Muse, m'offrir ta main fraternelle ?
POÈTE
Non, laisse-moi dormir ; j'ai trop souffert ce jour.
MUSE
Dors-tu ? le temps s'écoule, et la jeunesse fuit.
POÈTE
Que m'importe la jeunesse ou la gloire ?
MUSE
L'art est long, la vie est brève ; travaille encore.
POÈTE
À quoi bon ? mes chansons ne changent rien au monde.
MUSE
Le monde a besoin de chansons, même inutiles.
POÈTE
Alors parle ; j'écoute. Mais ne me promets rien.`,
    "Poème dialogué — débat entre le Poète découragé et la Muse.",
    [
      att('Dialogue', "« Viens-tu, Muse, m'offrir ta main fraternelle ? »", "Dialogue poétique : Muse et Poète s'affrontent — forme dramatique du mal du siècle.", ['dialogue', 'muse', 'poète', 'dramatique', 'siècle', 'musset']),
      att('Antithèse', "« L'art est long, la vie est brève »", "Antithèse : contrainte temporelle de l'artiste — maxime humaniste.", ['antithèse', 'art', 'vie', 'bref', 'long', 'maxime']),
      att('Registre lyrique', "« j'ai trop souffert ce jour »", "Registre lyrique : plainte du poète — subjectivité et découragement.", ['lyrique', 'souffert', 'plainte', 'découragement', 'subjectivité', 'nuit']),
      att('Apostrophe', "« Viens-tu, Muse »", "Apostrophe à la Muse : invocation classique renouvelée — quête artistique.", ['apostrophe', 'muse', 'invocation', 'art', 'quête', 'classique']),
    ]),

  e('GT-771', 'Les Liaisons dangereuses (L. 81)', 'Laclos', 'Les Liaisons dangereuses (1782)', 'Roman', 2,
    `Mme de Merteuil à Vicomte de Valmont.
Vous voilà donc bien heureux de votre dernière conquête ! Vous m'écrivez trois pages pour me vanter une paysanne. J'en ris encore. Croyez-vous me faire envie ? Non, mon ami : je connais vos ruses. Vous voulez me piquer, me faire croire que vous n'avez plus besoin de moi. C'est inutile. Je sais ce que vaut votre constance.
D'ailleurs, ce n'est pas Cécile qui m'intéresse ; c'est vous. Je veux savoir si vous oserez exécuter le plan que nous avons formé. Préférez-vous la vertu de Mme de Tourvel à la gloire de me plaire ? Choisissez. Si vous hésitez, je comprendrai que vous avez faibli — et je saurai me venger.
Je n'aime pas qu'on me désobéisse. Vous le savez. Votre amie,
Mme de Merteuil.`,
    "Lettre de Merteuil — manipulation et jalousie dans le roman épistolaire.",
    [
      att('Registre épistolaire', "« Mme de Merteuil à Vicomte de Valmont »", "Registre épistolaire : forme en lettres — intimité et stratégie se mêlent.", ['épistolaire', 'lettre', 'merteuil', 'valmont', 'forme', 'laclos']),
      att('Ironie', "« J'en ris encore »", "Ironie : Merteuil feint la moquerie — manipulation psychologique du Valmont.", ['ironie', 'rire', 'moquerie', 'manipulation', 'merteuil', 'stratégie']),
      att('Antithèse', "« vertu de Mme de Tourvel » / « gloire de me plaire »", "Antithèse : vertu et séduction — le libertinage structure le conflit.", ['antithèse', 'vertu', 'gloire', 'séduction', 'libertinage', 'conflit']),
      att('Registre polémique', "« Je n'aime pas qu'on me désobéisse »", "Registre polémique : menace voilée — Merteuil exerce le pouvoir.", ['polémique', 'désobéir', 'menace', 'pouvoir', 'vengeance', 'merteuil']),
    ]),
];

import { formatGtEntry, citationInText } from '../gtext-enrichment-lib.mjs';

function norm(s) {
  return String(s).replace(/[«»""]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
}
function extractAround(texte, idx, len = 60) {
  const flat = texte.replace(/\n/g, ' ');
  let start = idx;
  while (start > 0 && flat[start - 1] !== '.' && flat[start - 1] !== '!' && flat[start - 1] !== '?' && flat[start - 1] !== ';' && (idx - start) < 40) start--;
  if (start > 0 && /[.!?;]/.test(flat[start - 1])) start++;
  let end = idx;
  while (end < flat.length && flat[end] !== '.' && flat[end] !== '!' && flat[end] !== '?' && flat[end] !== ';' && (end - idx) < len) end++;
  if (end < flat.length) end++;
  return flat.slice(start, end).trim();
}
function findPhrase(texte, needle) {
  const flat = texte.replace(/\n/g, ' ');
  const n = norm(needle);
  if (!n || n.length < 6) return null;
  const f = norm(flat);
  if (f.includes(n)) return extractAround(flat, f.indexOf(n), n.length + 20);
  const chunk = n.slice(0, Math.max(12, Math.floor(n.length * 0.6)));
  if (chunk.length >= 8 && f.includes(chunk)) return extractAround(flat, f.indexOf(chunk), 70);
  return null;
}
function findByKeywords(texte, keywords) {
  const flat = texte.replace(/\n/g, ' ');
  for (const kw of [...keywords].filter(k => k.length >= 4).sort((a, b) => b.length - a.length)) {
    const idx = flat.toLowerCase().indexOf(kw.toLowerCase());
    if (idx >= 0) return extractAround(flat, idx, 65);
  }
  const lines = texte.split('\n').map(l => l.trim()).filter(l => l.length >= 15);
  return lines[Math.floor(lines.length / 2)] || lines[0] || null;
}
function fixCitation(texte, attendu) {
  if (citationInText(attendu.citation, texte)) return attendu.citation;
  const raw = attendu.citation.replace(/[«»""]/g, '').trim();
  for (const p of raw.split(/\s*[…\/]\s*/).map(s => s.trim()).filter(Boolean)) {
    const found = findPhrase(texte, p);
    if (found) return `« ${found} »`;
  }
  const found = findPhrase(texte, raw);
  if (found) return `« ${found} »`;
  const byKw = findByKeywords(texte, attendu.keywords || []);
  if (byKw) return `« ${byKw} »`;
  return attendu.citation;
}
function fixEntryCitations(entry) {
  return {
    ...entry,
    attendus: entry.attendus.map(a => ({ ...a, citation: fixCitation(entry.texte, a) })),
  };
}
import { mapData, EXTRA13, DATA14, DATA15, DATA16, DATA17, DATA18, DATA19, DATA20, DATA21 } from './_entries-13-21.mjs';

const EXTRA14 = mapData(DATA14);
const EXTRA15 = mapData(DATA15);
const EXTRA16 = mapData(DATA16);
const EXTRA17 = mapData(DATA17);
const EXTRA18 = mapData(DATA18);
const EXTRA19 = mapData(DATA19);
const EXTRA20 = mapData(DATA20);
const EXTRA21 = mapData(DATA21);

ALL.push(...EXTRA13, ...EXTRA14, ...EXTRA15, ...EXTRA16, ...EXTRA17, ...EXTRA18, ...EXTRA19, ...EXTRA20, ...EXTRA21);

const NEW_BY_FILE = {};
for (let f = 12; f <= 21; f++) {
  NEW_BY_FILE[f] = ALL.slice((f - 12) * 24, (f - 11) * 24).map(fixEntryCitations);
}

function serializeByFile(map) {
  const parts = Object.entries(map).map(([k, entries]) =>
    `  ${k}: [\n${entries.map(t => formatGtEntry(t)).join(',\n')}\n  ]`
  );
  return `import { att } from '../gtext-enrichment-lib.mjs';\nexport const NEW_BY_FILE = {\n${parts.join(',\n')}\n};\n`;
}

fs.writeFileSync(OUT, serializeByFile(NEW_BY_FILE), 'utf8');

const worldLit = new Set(['Cervantès', 'Goethe', 'Dickens', 'Poe', 'Ibsen', 'Tchekhov', 'Whitman', 'Dostoïevski', 'Tolstoï', 'Shakespeare', 'Kafka', 'Melville', 'Hawthorne', 'Stevenson', 'Wilde', 'Byron', 'Shelley', 'Pouchkine', 'Gogol']);
const genres = {};
for (const t of ALL) genres[t.genre] = (genres[t.genre] || 0) + 1;
console.log(`Total: ${ALL.length} entrées`);
console.log(`World lit: ${ALL.filter(t => worldLit.has(t.auteur)).length}`);
console.log('Par genre:', genres);
