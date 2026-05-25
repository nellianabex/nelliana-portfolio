export interface ProcessBlock {
  titre: string;
  texte: string;
}

export interface Project {
  slug: string;
  titre: string;
  titreOutline?: string; // dernier mot en outline (style chrome)
  categorie: "Branding" | "Direction artistique" | "Infographie" | "Webdesign" | "Communication";
  sous_titre: string;
  description?: string;
  couleur_ticket: string;
  lien_externe: string | null;
  images?: string[];
  featured?: boolean;
  // Champs page détail
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
    categorie: "Branding",
    sous_titre: "Concept cover & merch",
    couleur_ticket: "#D44B4B",
    lien_externe: "https://www.behance.net/nellianabex",
    description:
      "Concept complet de direction artistique pour l'album 2069' de PLK — cover, merch, déclinaisons visuelles.",
    featured: true,
    client: "PLK (concept personnel)",
    annee: "2024",
    role: "Direction artistique",
    process: [
      {
        titre: "CONCEPT",
        texte:
          "Point de départ : l'univers sonore de PLK, entre introspection et futurisme. Palette désaturée, typographie condensée, références visuelles SF des années 70. Tout part d'une idée simple : un artiste qui regarde 2069 depuis 2024.",
      },
      {
        titre: "EXÉCUTION",
        texte:
          "Déclinaison systématique sur les formats clés : cover principale, singles, merch capsule, habillages réseaux. Chaque élément répond à une logique de système, pas de pièces isolées.",
      },
    ],
    outils: ["Photoshop", "Illustrator", "After Effects", "Figma"],
  },
  {
    slug: "nes-ca-va-aller",
    titre: "NES",
    titreOutline: "Ça Va Aller",
    categorie: "Branding",
    sous_titre: "Concept cover single",
    couleur_ticket: "#4B8DD4",
    lien_externe: "https://www.behance.net/nellianabex",
    description:
      "Concept de cover single pour NES — direction artistique, typographie, palette de couleurs.",
    featured: true,
    client: "NES (concept personnel)",
    annee: "2024",
    role: "Direction artistique",
    process: [
      {
        titre: "RECHERCHE",
        texte:
          "Analyse de l'identité existante de NES. Palette émotionnelle autour du titre : douceur, résilience, lumière. Références visuelles entre le minimalisme scandinave et le grain argentique.",
      },
      {
        titre: "LIVRABLE",
        texte:
          "Cover single + déclinaisons formats sociaux. Typographie choisie pour sa lisibilité en thumbnail. Traitement photo desaturé avec grain pour renforcer l'émotion du titre.",
      },
    ],
    outils: ["Photoshop", "Lightroom", "Illustrator"],
  },
  {
    slug: "khali-x-le-type",
    titre: "KHALI",
    titreOutline: "x Le Type",
    categorie: "Infographie",
    sous_titre: "Infographie & social media",
    couleur_ticket: "#C4A882",
    lien_externe: null,
    description:
      "Création d'infographies pour la collaboration Khali x Le Type — visuel social media et print.",
    featured: false,
    client: "Khali x Le Type",
    annee: "2023",
    role: "Infographie · Communication",
    process: [
      {
        titre: "BRIEF",
        texte:
          "Deux univers à faire cohabiter dans une série cohérente. Contrainte : lisible en petit format Instagram et impactant en A3 print.",
      },
      {
        titre: "PRODUCTION",
        texte:
          "Série de 6 visuels, système de grille commun, déclinaisons couleurs par track. Livraison en formats exportés prêts à publier.",
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
