/**
 * Corrections factuelles de texte (cas b) — remplacement intégral vérifié.
 */
import { att } from '../gtext-enrichment-lib.mjs';

export const TEXT_FULL_FIXES = {
  'GT-746': {
    titre: 'Monologue d\'Oreste (V, 5)',
    contexte: 'Hallucination d\'Oreste après la mort d\'Hermione — registre tragique et onomatopée en [s].',
    texte: `ORESTE
Qu'ils sont loin, ces plaisirs dont j'étais accablé !
Dieux ! qu'il est beau le jour où triomphe la vengeance !
Mais Hermione est morte… Allons, sortons de ce palais.
Pour qui sont ces serpents qui sifflent sur vos têtes ?
Peuples, vous les voyez, mes yeux encore égarés
De leur sanglant venin n'ont pu se détourner.
Voyez : ils se traînent encor dans ce palais :
C'est sur moi qu'ils viennent, c'est sur moi qu'ils s'attaquent ;
De sang et de fange ils viennent me baigner,
Et mêlent confusément leurs lames infernales
À ce monstre qu'ils portent sur leurs têtes impurales.`,
    attendus: [
      att('Allitération', '« ces serpents qui sifflent sur vos têtes »', 'Allitération en [s] dans « serpents », « sifflent », « sur » : la consonne imite le sifflement et installe une menace sensorielle.', ['allitération', 's', 'serpent', 'siffl', 'imitation', 'menace']),
      att('Registre tragique', '« Pour qui sont ces serpents qui sifflent sur vos têtes ? »', 'Registre tragique : Oreste hallucine une scène d\'horreur après la mort d\'Hermione — la folie dramatise la culpabilité.', ['tragique', 'orest', 'hallucin', 'hermione', 'folie', 'coupabl']),
      att('Anaphore', '« C\'est sur moi qu\'ils viennent, c\'est sur moi qu\'ils s\'attaquent »', 'Anaphore de « c\'est sur moi » : martèlement qui concentre la menace sur le héros — effet d\'obsession et de panique.', ['anaphore', 'sur moi', 'martel', 'menace', 'panique', 'obsess']),
      att('Champ lexical', '« sang », « fange », « venin », « monstre »', 'Champ lexical de la souillure et du sang : le vocabulaire matérialise la vision infernale d\'Oreste.', ['champ lexical', 'sang', 'fange', 'venin', 'souill', 'horreur']),
    ],
  },
};
