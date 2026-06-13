export interface ProcessBlock {
  titre: string;
  texte: string;
}

export interface SanityImage {
  asset?: { url?: string; _ref?: string };
  alt?: string;
  caption?: string;
}

export interface Project {
  slug: string;
  titre: string;
  titreOutline?: string;
  categorie: "Branding" | "Direction artistique" | "Infographie" | "Webdesign" | "Communication";
  sous_titre: string;
  description?: string;
  couleur_ticket: string;
  lien_externe: string | null;
  image?: SanityImage | string; // image miniature (depuis allProjets GROQ)
  images?: (SanityImage | string)[];
  featured?: boolean;
  client?: string;
  annee?: string;
  role?: string;
  process?: ProcessBlock[];
  outils?: string[];
}

export const projects: Project[] = [
  {
    slug: "plk-2069",
    titre: "PLK",
    titreOutline: "2069'",
    categorie: "Direction artistique",
    sous_titre: "Concept cover · Direction artistique",
    couleur_ticket: "#1a1a1a",
    lien_externe: "https://www.behance.net/nellianabex",
    description:
      "Concept de direction artistique pour l'album 2069' de PLK. Palette désaturée, esthétique futuriste, système visuel déclinable sur tous les supports — cover, singles, merch.",
    featured: true,
    client: "PLK — concept personnel",
    annee: "2024",
    role: "Direction artistique",
    process: [
      {
        titre: "CONCEPT",
        texte:
          "L'album parle de projection dans le futur depuis un présent tendu. Point de départ visuel : les codes SF des années 70, désaturés, appliqués à un univers trap contemporain. Chaque choix graphique sert ce paradoxe temporel — textures argentiques, typographies condensées, palette froide.",
      },
      {
        titre: "SYSTÈME",
        texte:
          "Un concept d'album, c'est pas une cover isolée. C'est un langage. Décliné sur les formats singles, les habillages réseaux, les gabarits stories, le merch capsule. Tout répond à une même grille, une même logique de teintes et de poids typographique.",
      },
    ],
    outils: ["Photoshop", "Illustrator", "After Effects"],
  },
  {
    slug: "nes-ca-va-aller",
    titre: "NES",
    titreOutline: "Ça Va Aller",
    categorie: "Direction artistique",
    sous_titre: "Concept cover single · DA",
    couleur_ticket: "#0d1f2d",
    lien_externe: "https://www.behance.net/nellianabex",
    description:
      "Direction artistique pour le single Ça Va Aller de NES. Traitement photo entre grain argentique et minimalisme — pour un titre qui parle de résilience, la sobriété visuelle fait partie du propos.",
    featured: true,
    client: "NES — concept personnel",
    annee: "2024",
    role: "Direction artistique · Retouche",
    process: [
      {
        titre: "INTENTION",
        texte:
          "NES a un univers très personnel, posé, introspectif. Le single parle de traverser quelque chose de difficile sans effondrement. L'image devait tenir cette tension — pas de dramatisation, pas de kitsch émotionnel. Grain, cadrage serré, palette quasi monochrome.",
      },
      {
        titre: "EXÉCUTION",
        texte:
          "Traitement photo avec grain argentique ajouté en post, désaturation sélective pour isoler le sujet. Typographie sobre, hiérarchie claire. Déclinaison sur les formats Spotify, Apple Music, Instagram — chaque taille testée avant livraison.",
      },
    ],
    outils: ["Lightroom", "Photoshop", "Illustrator"],
  },
  {
    slug: "khali-x-le-type",
    titre: "KHALI",
    titreOutline: "x Le Type",
    categorie: "Communication",
    sous_titre: "Infographie · Réseaux sociaux",
    couleur_ticket: "#1c1409",
    lien_externe: null,
    description:
      "Série d'infographies pour la collaboration Khali x Le Type. Deux univers graphiques distincts à faire cohabiter dans un système cohérent, lisible en miniature Instagram et impactant en A3.",
    featured: false,
    client: "Khali x Le Type",
    annee: "2023",
    role: "Infographie · Communication",
    process: [
      {
        titre: "CONTRAINTE",
        texte:
          "Khali et Le Type ont chacun leur identité visuelle. Le brief : pas de fusion, pas de compromis mou. Une série qui porte les deux univers sans que l'un écrase l'autre. La contrainte technique — lisible en 100×100px comme en 60×80cm — a guidé toutes les décisions typographiques.",
      },
      {
        titre: "PRODUCTION",
        texte:
          "Six visuels, un système de grille commun, déclinaisons couleurs par track. Formats livrés exportés et nommés pour publication directe. Aucun aller-retour de recadrage — tout pensé en amont pour les bons ratios.",
      },
    ],
    outils: ["Illustrator", "Photoshop", "InDesign"],
  },
];

export const categories = [
  "Tout",
  "Branding",
  "Direction artistique",
  "Infographie",
  "Webdesign",
  "Communication",
] as const;

export type Category = (typeof categories)[number];
