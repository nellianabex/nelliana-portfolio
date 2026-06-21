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
    lien_externe: "https://www.behance.net/gallery/215082391/Concept-cover-2069-(PLK)",
    description:
      "Concept cover inspirée de l'EP collaboratif « 2069' » de PLK — né de 2069 minutes de lives pendant lesquels 7 000 fans ont co-construit le projet avec lui au sein du label virtuel Enna Music.",
    featured: true,
    image: "/assets/projects/plk-2069/cover.jpg",
    images: [
      "/assets/projects/plk-2069/cover.jpg",
      "/assets/projects/plk-2069/01.png",
      "/assets/projects/plk-2069/02.png",
      "/assets/projects/plk-2069/03.jpg",
      "/assets/projects/plk-2069/04.png",
    ],
    client: "PLK — concept personnel",
    annee: "2024",
    role: "Direction artistique · Graphisme",
    process: [
      {
        titre: "CONTEXTE",
        texte:
          "« 2069' » fait référence aux 2069 minutes de lives quotidiens pendant lesquels PLK et 7 000 de ses fans ont conçu cet EP ensemble — votes, discussions, choix créatifs en temps réel. Chaque fan pouvait choisir un rôle au sein du label virtuel Enna Music : boss, attaché de presse, DA image, stagiaire… Chaque fonction avait son propre avatar ours pour identifier les rôles clés.",
      },
      {
        titre: "L'OURS",
        texte:
          "L'ours dépasse le simple avatar : il incarne les fans ayant contribué au projet. Ici, posture de leader, doigt pointé vers le spectateur — un clin d'œil complice qui rappelle l'implication directe de chaque auditeur. Pour le titre, j'ai opté pour une typographie imposante et intemporelle, proche du logo Enna, pour rester fidèle à l'identité visuelle du projet. Réalisation : 3 jours sur Photoshop.",
      },
    ],
    outils: ["Photoshop"],
  },
  {
    slug: "nes-ca-va-aller",
    titre: "NES",
    titreOutline: "Ça Va Aller",
    categorie: "Direction artistique",
    sous_titre: "Concept cover single · DA",
    couleur_ticket: "#0d1f2d",
    lien_externe: "https://www.behance.net/gallery/215082919/Concept-cover-Ca-Va-Aller-(NeS)",
    description:
      "Direction artistique pour le single Ça Va Aller de NES. Traitement photo entre grain argentique et minimalisme — pour un titre qui parle de résilience, la sobriété visuelle fait partie du propos.",
    featured: true,
    image: "/assets/projects/nes-ca-va-aller/01.jpg",
    images: [
      "/assets/projects/nes-ca-va-aller/01.jpg",
      "/assets/projects/nes-ca-va-aller/02.jpeg",
      "/assets/projects/nes-ca-va-aller/03.png",
      "/assets/projects/nes-ca-va-aller/04.png",
    ],
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
    lien_externe: "https://www.behance.net/gallery/215083507/Infographie-Khali-de-Palmer-a-la-conscration",
    description:
      "Série d'infographies pour la collaboration Khali x Le Type. Deux univers graphiques distincts à faire cohabiter dans un système cohérent, lisible en miniature Instagram et impactant en A3.",
    featured: false,
    image: "/assets/projects/khali-x-le-type/01.png",
    images: [
      "/assets/projects/khali-x-le-type/01.png",
      "/assets/projects/khali-x-le-type/02.jpg",
      "/assets/projects/khali-x-le-type/03.png",
    ],
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
