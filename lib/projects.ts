export interface Project {
  slug: string;
  titre: string;
  categorie: "Branding" | "Direction artistique" | "Infographie" | "Webdesign" | "Communication";
  sous_titre: string;
  couleur_ticket: string;
  lien_externe: string | null;
  description?: string;
  images?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "plk-2069",
    titre: "PLK — 2069'",
    categorie: "Branding",
    sous_titre: "Concept cover & merch",
    couleur_ticket: "#D44B4B",
    lien_externe: "https://www.behance.net/nellianabex",
    description:
      "Concept complet de direction artistique pour l'album 2069' de PLK — cover, merch, déclinaisons visuelles.",
    featured: true,
  },
  {
    slug: "nes-ca-va-aller",
    titre: "NES — Ça Va Aller",
    categorie: "Branding",
    sous_titre: "Concept cover",
    couleur_ticket: "#4B8DD4",
    lien_externe: "https://www.behance.net/nellianabex",
    description:
      "Concept de cover single pour NES — direction artistique, typographie, palette de couleurs.",
    featured: true,
  },
  {
    slug: "khali-x-le-type",
    titre: "Khali x Le Type",
    categorie: "Infographie",
    sous_titre: "Infographie",
    couleur_ticket: "#C4A882",
    lien_externe: null,
    description:
      "Création d'infographies pour la collaboration Khali x Le Type — visuel social media et print.",
    featured: false,
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
