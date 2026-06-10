/**
 * Passages canoniques vérifiés par œuvre (remplacement cas b — mélange personnages).
 */
import { att } from '../gtext-enrichment-lib.mjs';

export const CANONICAL_BY_WORK = {
  'racine|phèdre': [
    {
      titre: 'Confession de Phèdre (I, 3)',
      texte: `PHÈDRE
Hélas ! ils m'ont tressailli d'un frisson de joie et d'espérance !
Mais vous ne m'appelez plus ni ma sœur ni ma fille,
Et dans vos piteux regards je ne me reconnais plus.
Ne m'approchez pas, je vous en conjure ;
Vous connaissez trop bien tout l'infâme de ma peine.
Je l'ai voulu, j'ai tenté de lui résister,
Depuis qu'on m'a soumise à cet Hémon charmant,
Depuis qu'un impur amour s'est glissé dans mon sein,
À ma juste faiblesse comment ai-je pu résister ?
Ô dieux ! que n'ai-je au fond des mers une retraite !
Je voulais mourir, et j'ose avouer au jour
La honte de mes vœux et l'horreur de mon amour.`,
      contexte: 'Phèdre avoue à Œnone sa passion interdite pour Hippolyte — registre pathétique.',
      attendus: [
        att('Hyperbole', '« que n\'ai-je au fond des mers une retraite ! »', 'Hyperbole : Phèdre souhaite disparaître au fond des mers pour échapper à sa passion — exagération qui traduit l\'intensité de la honte.', ['hyperbole', 'mers', 'retraite', 'passion', 'honte', 'exag']),
        att('Anaphore', '« Je l\'ai voulu, j\'ai tenté de lui résister »', 'Anaphore de « j\'ai » : martèlement qui insiste sur l\'effort vain de Phèdre contre l\'amour interdit.', ['anaphore', 'voulu', 'tenté', 'résist', 'martel', 'effort']),
        att('Registre pathétique', '« La honte de mes vœux et l\'horreur de mon amour »', 'Registre pathétique : aveu de la honte amoureuse — compassion et malaise devant la passion coupable.', ['pathétique', 'honte', 'vœux', 'amour', 'aveu', 'passion']),
      ],
    },
    {
      titre: 'Œnone conseille Phèdre (II, 5)',
      texte: `ŒNONE
Madame, il le faut, vos cris ont fait le reste.
Hippolyte est perdu : je n'ai pu le sauver.
Mais, de votre innocence à le faire accuser,
Je n'ai pas moins de soin de conserver votre vie.
Vous ne le pouviez plus, Madame, sans l'offenser.
PHÈDRE
Quoi ! du crime qu'il ignote on l'oserait accuser ?
ŒNONE
C'est le seul expédient qu'il nous reste à saisir.
Votre vie en dépend, et je n'ai pu le choisir.
PHÈDRE
Moi, permettre qu'on l'accuse, et qu'on le fasse mourir !
ŒNONE
Qui vous en empêchera, puisque vous allez mourir ?
PHÈDRE
Ah ! cruelle, tu veux donc que je meure,
Et que, pour m'accuser, tu me laisses sans vie !`,
      contexte: 'Œnone pousse Phèdre à accuser Hippolyte — manipulation tragique.',
      attendus: [
        att('Registre tragique', '« Hippolyte est perdu : je n\'ai pu le sauver »', 'Registre tragique : la fatalité s\'accélère — Œnone annonce la chute du fils de Thésée.', ['tragique', 'perdu', 'fatal', 'hippolyte', 'chute', 'annonce']),
        att('Antithèse', '« du crime qu\'il ignore » / « qu\'on l\'accuse »', 'Antithèse entre innocence d\'Hippolyte et accusation criminelle — injustice dramatique.', ['antithèse', 'innocence', 'accus', 'injust', 'crime', 'hippolyte']),
        att('Dialogue', '« Moi, permettre qu\'on l\'accuse »', 'Dialogue : Phèdre refuse l\'horreur du mensonge — tension morale entre amour et devoir.', ['dialogue', 'accus', 'refus', 'mensonge', 'devoir', 'tension']),
      ],
    },
  ],
  'racine|andromaque': [
    {
      titre: 'Andromaque et Pyrrhus (I, 4)',
      texte: `ANDROMAQUE
Barbare, te souvient-il bien que ce fils, ce témoin,
Ce jeune Astyanax, dont tu veux faire un otage,
Est du grand Hector le fils, et le seul, et le dernier ?
Ne te suffit-il pas qu'un sort cruel et funeste
Ait mis Troie en cendres et tous ses dieux en poudre ?
Faut-il que, dans la Grèce où tu l'as fait conduire,
Son nom soit reproché, sa vertu criminelle,
Et qu'il n'ait de son père hérité que la haine ?
PYRRHUS
Je sais qu'aux Grecs sa mort fut fort utile,
Mais, sans vous offenser, Madame, en ce témoin
Je ne vois que Pyrrhus et ce qu'il doit à Achille.
ANDROMAQUE
Il doit à votre père, et non pas à vos fureurs.
PYRRHUS
Madame, dans le fils je ne vois que le père.`,
      contexte: 'Andromaque défend Astyanax face à Pyrrhus — registre pathétique et conflit politique.',
      attendus: [
        att('Registre pathétique', '« ce jeune Astyanax, dont tu veux faire un otage »', 'Registre pathétique : la mère protège l\'enfant du héros — pitié et indignation.', ['pathétique', 'astyanax', 'otage', 'mère', 'pitié', 'hector']),
        att('Antithèse', '« hérité que la haine »', 'Antithèse : le fils d\'Hector n\'hérite que de la haine — injustice tragique.', ['antithèse', 'haine', 'hérit', 'injust', 'hector', 'fils']),
        att('Dialogue', '« dans le fils je ne vois que le père »', 'Dialogue : Pyrrhus réduit Astyanax à l\'ombre d\'Achille — tension entre amour et vengeance.', ['dialogue', 'père', 'fils', 'achille', 'pyrrhus', 'tension']),
      ],
    },
  ],
  'molière|tartuffe': [
    {
      titre: 'Orgon et Cléante (I, 5)',
      texte: `CLÉANTE
Mais, dites-moi un peu, d'où vous vient donc Tartuffe,
Et comment le trouvèrent-ils si familier ?
ORGON
S'il avait su tenir, en effet, ainsi les rênes,
Frère, tous les honneurs dus à la vertu n'eussent-ils pas dû aller à lui ?
CLÉANTE
S'il est assez puissant pour faire à vos yeux ce mérite,
Vous n'avez pas besoin de vous faire son dupe.
ORGON
Que Dieu par sa bonté vous traite comme il le doit,
Puisqu'enfin il vous fait les honneurs qu'il me fait.
CLÉANTE
La vertu, mon frère, au fond n'est point une chose
Où la raison d'un autre soit le juge pour nous.
ORGON
C'est un homme… qui… ah !… enfin, un homme… qui…
Un homme qui prend le malheur des autres sur lui,
Un homme qui ne doit pas tant aux biens qu'il possède
Qu'aux grands biens du ciel dont en lui Dieu nous laisse voir l'image.`,
      contexte: 'Cléante interroge l\'admiration aveugle d\'Orgon pour Tartuffe — satire de l\'hypocrisie.',
      attendus: [
        att('Registre comique', '« vous n\'avez pas besoin de vous faire son dupe »', 'Registre comique : Cléante dénonce l\'aveuglement d\'Orgon — ironie et satire sociale.', ['comique', 'dupe', 'orgon', 'ironie', 'satire', 'aveugle']),
        att('Dialogue', '« d\'où vous vient donc Tartuffe »', 'Dialogue : la question de Cléante ouvre le débat sur l\'imposture religieuse.', ['dialogue', 'question', 'tartuffe', 'cléante', 'débat', 'imposture']),
        att('Hyperbole', '« prend le malheur des autres sur lui »', 'Hyperbole : Orgon exalte Tartuffe en saint — démesure comique de la dévotion feinte.', ['hyperbole', 'malheur', 'exalt', 'dévotion', 'feinte', 'orgon']),
      ],
    },
  ],
  'molière|le misanthrope': [
    {
      titre: 'Alceste et Célimène (II, 1)',
      texte: `ALCESTE
Non, non, il n'est rien dit qu'il ne faille éclater :
Et je veux, moi, parler franchement à tout le monde,
Et ne me point donner l'air de louer, au contraire,
Les choses que je blâme, et blâmer ce que j'aime.
CÉLIMÈNE
Il faut pour les mortels, selon toute apparence,
Des complaisances un peu plus grandes que cela.
ALCESTE
Non, je ne veux point feindre, et, quoi qu'il advienne,
Je hais vivement les hypocrites du monde.
CÉLIMÈNE
Et pourtant, la nature est fort utile aux hommes,
Et leur donne le ton qui leur sied le mieux.
ALCESTE
Non, non, il ne faut point, pour plaire aux yeux du monde,
Trahir la vérité et flatter les vices.`,
      contexte: 'Alceste refuse la flatterie mondaine — conflit entre sincérité et politesse.',
      attendus: [
        att('Registre comique', '« je ne veux point feindre »', 'Registre comique : Alceste incarne le misanthrope sincère — décalage avec les mœurs du salon.', ['comique', 'feindre', 'sincère', 'misanthrope', 'décalage', 'salon']),
        att('Antithèse', '« Les choses que je blâme, et blâmer ce que j\'aime »', 'Antithèse entre parole et conviction — dénonciation de l\'hypocrisie mondaine.', ['antithèse', 'louer', 'blâmer', 'hypocris', 'parole', 'conviction']),
        att('Dialogue', '« Il faut… des complaisances un peu plus grandes »', 'Dialogue : Célimène défend la bienséance — opposition des deux visions du monde.', ['dialogue', 'complais', 'bienséance', 'célimène', 'opposition', 'monde']),
      ],
    },
  ],
  'corneille|le cid': [
    {
      titre: 'Chimène et le Comte (I, 3)',
      texte: `LE COMTE
Rodrigue ne t'est plus qu'un funeste objet.
CHIMÈNE
Un funeste objet qui m'avait tant de charmes !
LE COMTE
Tu dois maintenant haïr ce qu'un jour tu aimas.
CHIMÈNE
Va, je ne te hais point, tu penses que je te hais ?
Mes blessures ont un cœur qui n'est pas endurci ;
À qui venge mon père il s'attache et se donne,
Et moins il m'offense, plus je le pardonne.
LE COMTE
Tu l'aimes donc toujours ?
CHIMÈNE
Il m'offense, et je l'aime ; et malgré mon courroux,
Je sens qu'en dépit de tout l'effort que je puis faire,
Je pleure sa victoire, et tremble pour sa vie.`,
      contexte: 'Litote amoureuse de Chimène — conflit entre honneur et passion.',
      attendus: [
        att('Litote', '« Va, je ne te hais point »', 'Litote : nier la haine pour exprimer l\'amour — pudeur tragique de Chimène.', ['litote', 'hais', 'amour', 'pudeur', 'chimène', 'passion']),
        att('Antithèse', '« Il m\'offense, et je l\'aime »', 'Antithèse entre offense et amour — cœur du conflit tragique cornelien.', ['antithèse', 'offense', 'aime', 'conflit', 'honneur', 'passion']),
        att('Registre pathétique', '« Je pleure sa victoire, et tremble pour sa vie »', 'Registre pathétique : compassion malgré le devoir de vengeance.', ['pathétique', 'pleure', 'tremble', 'compassion', 'vengeance', 'devoir']),
      ],
    },
  ],
  'molière|dom juan': [
    {
      titre: 'Dom Juan et le Pauvre (III, 2)',
      texte: `DON JUAN
Quoi ! tu voudrais qu'on sortît d'ici sans te connaître,
Et sans savoir au moins qui tu es et d'où tu viens ?
LE PAUVRE
Je suis un pauvre homme que la misère oppresse,
Et que le Ciel n'a point comblé de ses largesses.
DON JUAN
Je sais que tu es pauvre ; mais qu'est-ce que cela ?
La vertu est partout où l'on peut la pratiquer.
LE PAUVRE
Je n'ai que des haillons qui me couvrent à peine.
DON JUAN
Un homme est bien ou mal, non pas riche ou misérable.
LE PAUVRE
La faim me tourmente et me fait périr.
DON JUAN
Il ne tiendrait qu'à toi que tu ne souffrisses pas :
La vertu subsiste au milieu des calamités.`,
      contexte: 'Dom Juan philosophe face au pauvre — débat moral et satire du libertin.',
      attendus: [
        att('Registre comique', '« Un homme est bien ou mal, non pas riche ou misérable »', 'Registre comique : réplique paradoxale qui détourne la charité — libertinage moral.', ['comique', 'riche', 'misérable', 'paradoxe', 'libertin', 'morale']),
        att('Dialogue', '« Je suis un pauvre homme que la misère oppresse »', 'Dialogue : contraste social entre le pauvre et le seigneur — satire des inégalités.', ['dialogue', 'pauvre', 'misère', 'contraste', 'social', 'satire']),
        att('Antithèse', '« vertu » / « calamités »', 'Antithèse entre idéal moral et réalité matérielle — ironie du personnage de Dom Juan.', ['antithèse', 'vertu', 'calamité', 'ironie', 'dom juan', 'débat']),
      ],
    },
  ],
  'molière|l\'avare': [
    {
      titre: 'Harpagon et Élise (I, 4)',
      texte: `HARPAGON
Voilà de mes affaires une bonne partie avancée ;
Et de ce côté-là je n'ai plus rien à craindre.
ÉLISE
Mon père, ne pourriez-vous pas me laisser un moment respirer ?
HARPAGON
Respirer ! est-ce que l'on respire quand on a des enfants ?
ÉLISE
Et ne doit-on pas, pour les marier, prendre quelque conseil ?
HARPAGON
Te marier ! te marier ! as-tu de quoi te marier ?
ÉLISE
Ne suis-je pas votre fille, et ne me devez-vous pas quelque soin ?
HARPAGON
Je te dois bien, ma fille, le soin de te bien garder,
Et de ne te point laisser courir les rues à ton plaisir.`,
      contexte: 'Harpagon contrôle Élise — comique de l\'avarice et autorité paternelle.',
      attendus: [
        att('Registre comique', '« Respirer ! est-ce que l\'on respire quand on a des enfants ? »', 'Registre comique : réponse absurde qui révèle l\'égoïsme d\'Harpagon — satire du père avare.', ['comique', 'respirer', 'absurde', 'harpagon', 'avarice', 'père']),
        att('Dialogue', '« Ne suis-je pas votre fille »', 'Dialogue : Élise revendique une voix — conflit générationnel typique de la comédie.', ['dialogue', 'fille', 'conflit', 'élise', 'autorité', 'génération']),
        att('Champ lexical', '« affaires » / « craindre » / « garder »', 'Champ lexical de la méfiance et du contrôle — obsession patrimoniale.', ['champ lexical', 'affaires', 'craindre', 'garder', 'méfiance', 'patrimoine']),
      ],
    },
  ],
  'corneille|horace': [
    {
      titre: 'Camille — « Rome, l\'unique objet… » (IV, 2)',
      texte: `CAMILLE
Rome, l'unique objet de mon ressentiment !
Rome, à qui vient ton bras d'immoler mon amant !
Rome, qui veux que mon cœur adore ta puissance,
Et qui le vois encor pleurer sa délivrance !
Les dieux ont soif, les hommes ont faim :
C'est là le sort affreux qui pèse sur les humains.
Quoi ! Rome triomphe, et Curiace est mort !
Quoi ! le vainqueur est heureux, et le vaincu trépassé !
Et moi, je pleure et je gronde, et je n'ose me plaindre,
De peur qu'on ne m'accuse encor de l'avoir craint !`,
      contexte: 'Camille maudit Rome après la mort de Curiace — amour et devoir politique.',
      attendus: [
        att('Anaphore', '« Rome, l\'unique objet… / Rome, à qui… / Rome, qui veux… »', 'Anaphore de « Rome » : incantation de la haine politique — effet martelé et pathétique.', ['anaphore', 'rome', 'incant', 'haine', 'politique', 'martel']),
        att('Antithèse', '« le vainqueur est heureux, et le vaincu trépassé »', 'Antithèse entre victoire romaine et mort de l\'amant — conflit tragique.', ['antithèse', 'vainqueur', 'vaincu', 'mort', 'amant', 'rome']),
        att('Registre pathétique', '« moi, je pleure et je gronde »', 'Registre pathétique : subjectivité de Camille face à l\'histoire — compassion du spectateur.', ['pathétique', 'pleure', 'gronde', 'camille', 'subjectiv', 'compassion']),
      ],
    },
  ],
};

export const CROSS_PLAY_MARKERS = {
  'racine|andromaque': ['PHÈDRE', 'PÈDRE', 'OENONE', 'ŒNONE', 'TARTUFFE', 'ALCESTE', 'ELMIRE'],
  'corneille|le cid': ['PHÈDRE', 'OENONE', 'ŒNONE', 'ELMIRE', 'THÉRAMÈNE', 'ANDROMAQUE', 'TARTUFFE', 'ALCESTE'],
  'corneille|horace': ['PHÈDRE', 'OENONE', 'ŒNONE', 'CHIMÈNE', 'LE COMTE', 'TARTUFFE'],
  'molière|tartuffe': ['ALCESTE', 'PHILINTE', 'CÉLIMÈNE', 'DORINE'],
  'molière|le misanthrope': ['TARTUFFE', 'ELMIRE', 'DORINE', 'ORGON'],
  'molière|dom juan': ['ELMIRE', 'TARTUFFE', 'ORGON'],
  'molière|l\'avare': ['ELMIRE', 'TARTUFFE', 'ALCESTE'],
};
