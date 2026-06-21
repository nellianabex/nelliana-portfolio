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
    sous_titre: "Concept cover single · Direction artistique",
    couleur_ticket: "#0d1f2d",
    lien_externe: "https://www.behance.net/gallery/215082919/Concept-cover-Ca-Va-Aller-(NeS)",
    description:
      "Concept cover pour l'EP « Ça Va Aller » de NeS — un projet introspectif dans lequel il se livre sur ses émotions. La vitre brisée comme métaphore : briser le plafond de verre, continuer malgré la fragilité.",
    featured: true,
    image: "/assets/projects/nes-ca-va-aller/01.jpg",
    images: [
      "/assets/projects/nes-ca-va-aller/01.jpg",
      "/assets/projects/nes-ca-va-aller/02.jpeg",
      "/assets/projects/nes-ca-va-aller/03.png",
      "/assets/projects/nes-ca-va-aller/04.png",
    ],
    client: "NeS — concept personnel",
    annee: "2024",
    role: "Direction artistique · Graphisme",
    process: [
      {
        titre: "CONCEPT VISUEL",
        texte:
          "Un dégradé bleu en arrière-plan — couleur récurrente dans l'univers de NeS, évoquant l'introspection, la sérénité et un espoir face aux épreuves. Traversé par une texture d'éclats de verre brisé : fragilité et résilience en un seul geste. Le portrait de NeS (photo Jeremy Beaudet), visage assombri et baissé, renforce l'aspect mélancolique du projet. Les reflets dans les éclats incarnent ce contraste subtil entre douleur et détermination.",
      },
      {
        titre: "TYPOGRAPHIE",
        texte:
          "L'ambivalence des textes de NeS traduite en deux registres typographiques : des majuscules script élégantes et aériennes pour la poésie et l'optimisme, des minuscules sérif pour la puissance et la force de son message. La cover originale du projet — une image de glace — a nourri la direction des textures et de la palette froide.",
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
    client: "Khali — projet académique",
    annee: "2024",
    role: "Infographie · Communication",
    process: [
      {
        titre: "CONTEXTE",
        texte:
          "Projet réalisé dans le cadre de mes études. Base : l'article « Entretien avec Khali, de Palmer au label de Myth Syzer » publié en 2020 par le magazine bordelais Le Type. Objectif : synthétiser un article long en infographie claire et engageante, adaptée à deux formats — desktop et réseaux sociaux. L'arrière-plan reprend la cover du projet « Il me ressemble pas non plus » de Khali pour rester cohérent avec son univers graphique.",
      },
      {
        titre: "DÉCLINAISON",
        texte:
          "Version desktop : timeline épurée retraçant sa carrière (SoundCloud → « Laïla » → « Il me ressemble pas non plus »), enrichie de stats clés (+47K followers Spotify, évolution auditeurs 2019–2022). Version mobile : carousel Instagram pensé pour une lecture fluide et engageante, dans l'identité visuelle du magazine Le Type. Temps de réalisation : 1 semaine.",
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
