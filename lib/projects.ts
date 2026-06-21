export interface ProcessBlock {
  titre: string;
  texte?: string;
  items?: string[];
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
      "Concept cover inspirée de l'EP collaboratif « 2069' » de PLK, né de 2069 minutes de lives pendant lesquels 7 000 fans ont co-construit le projet avec lui au sein du label virtuel Enna Music.",
    featured: true,
    image: "/assets/projects/plk-2069/cover.jpg",
    images: [
      "/assets/projects/plk-2069/cover.jpg",
      "/assets/projects/plk-2069/01.png",
      "/assets/projects/plk-2069/02.png",
      "/assets/projects/plk-2069/03.jpg",
      "/assets/projects/plk-2069/04.png",
    ],
    client: "PLK / concept personnel",
    annee: "2024",
    role: "Direction artistique · Graphisme",
    process: [
      {
        titre: "CONTEXTE",
        texte: "« 2069' » fait référence aux 2069 minutes de lives quotidiens pendant lesquels PLK et 7 000 fans ont conçu cet EP ensemble. Chaque fan pouvait choisir un rôle au sein du label virtuel Enna Music, avec son propre avatar ours pour identifier sa fonction.",
        items: [
          "Votes, discussions, choix créatifs en temps réel",
          "Rôles disponibles : boss, attaché de presse, DA image, stagiaire…",
          "Chaque fonction avait son propre avatar ours",
        ],
      },
      {
        titre: "L'OURS",
        texte: "L'ours dépasse le simple avatar : il incarne les fans ayant contribué au projet.",
        items: [
          "Posture de leader, doigt pointé vers le spectateur",
          "Clin d'œil complice à l'implication directe de chaque auditeur",
          "Typographie imposante et intemporelle, proche du logo Enna",
          "Réalisation : 3 jours sur Photoshop",
        ],
      },
    ],
    outils: ["Photoshop"],
  },
  {
    slug: "nes-ca-va-aller",
    titre: "NES",
    titreOutline: "Ça Va Aller",
    categorie: "Direction artistique",
    sous_titre: "Concept cover single · Direction artistique",
    couleur_ticket: "#0d1f2d",
    lien_externe: "https://www.behance.net/gallery/215082919/Concept-cover-Ca-Va-Aller-(NeS)",
    description:
      "Concept cover pour l'EP « Ça Va Aller » de NeS, un projet introspectif dans lequel il se livre sur ses émotions. La vitre brisée comme métaphore : briser le plafond de verre, continuer malgré la fragilité.",
    featured: true,
    image: "/assets/projects/nes-ca-va-aller/01.jpg",
    images: [
      "/assets/projects/nes-ca-va-aller/01.jpg",
      "/assets/projects/nes-ca-va-aller/02.jpeg",
      "/assets/projects/nes-ca-va-aller/03.png",
      "/assets/projects/nes-ca-va-aller/04.png",
    ],
    client: "NeS / concept personnel",
    annee: "2024",
    role: "Direction artistique · Graphisme",
    process: [
      {
        titre: "CONCEPT VISUEL",
        texte: "Chaque élément visuel porte une intention précise.",
        items: [
          "Dégradé bleu : couleur récurrente chez NeS, évoque l'introspection, la sérénité et l'espoir",
          "Texture d'éclats de verre brisé : fragilité et résilience en un seul geste",
          "Portrait de NeS (photo Jeremy Beaudet) : visage assombri, aspect mélancolique",
          "Reflets dans les éclats : contraste entre douleur et détermination",
        ],
      },
      {
        titre: "TYPOGRAPHIE",
        texte: "L'ambivalence des textes de NeS traduite en deux registres. La cover originale (une image de glace) a nourri la direction des textures et de la palette froide.",
        items: [
          "Majuscules script élégantes et aériennes : poésie et optimisme",
          "Minuscules sérif : puissance et force du message",
        ],
      },
    ],
    outils: ["Photoshop", "Illustrator"],
  },
  {
    slug: "khali-x-le-type",
    titre: "KHALI",
    titreOutline: "× Le Type",
    categorie: "Infographie",
    sous_titre: "Infographie · Réseaux sociaux",
    couleur_ticket: "#1c1409",
    lien_externe: "https://www.behance.net/gallery/215083507/Infographie-Khali-de-Palmer-a-la-conscration",
    description:
      "Infographie synthétique déclinée desktop et mobile sur le parcours de Khali, d'après l'article « De Palmer au label de Myth Syzer » publié par le magazine Le Type. Timeline, stats, identité visuelle de l'artiste.",
    featured: false,
    image: "/assets/projects/khali-x-le-type/01.png",
    images: [
      "/assets/projects/khali-x-le-type/01.png",
      "/assets/projects/khali-x-le-type/02.jpg",
      "/assets/projects/khali-x-le-type/03.png",
    ],
    client: "Khali / projet académique",
    annee: "2024",
    role: "Infographie · Communication",
    process: [
      {
        titre: "CONTEXTE",
        texte: "Projet réalisé dans le cadre de mes études. L'article « Entretien avec Khali, de Palmer au label de Myth Syzer » (Le Type, 2020) comme base. Objectif : synthétiser un long format en infographie claire et engageante.",
        items: [
          "Deux formats cibles : desktop et réseaux sociaux",
          "Arrière-plan : extension de la cover « Il me ressemble pas non plus » pour garder l'identité de Khali",
        ],
      },
      {
        titre: "DÉCLINAISON",
        texte: "Temps de réalisation : 1 semaine.",
        items: [
          "Desktop : timeline épurée SoundCloud → « Laïla » → « Il me ressemble pas non plus », stats Spotify (+47K followers, évolution 2019–2022)",
          "Mobile : carousel Instagram dans l'identité visuelle du magazine Le Type",
        ],
      },
    ],
    outils: ["Photoshop", "Illustrator", "Acrobat"],
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
