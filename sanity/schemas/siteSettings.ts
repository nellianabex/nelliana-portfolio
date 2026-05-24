import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Paramètres du site",
  type: "document",
  groups: [
    { name: "general", title: "Général" },
    { name: "about", title: "Section À propos" },
    { name: "contact", title: "Contact & réseaux" },
  ],
  fields: [
    // ── Général ──
    defineField({
      name: "disponible",
      title: "Disponible pour de nouveaux projets ?",
      type: "boolean",
      initialValue: true,
      description: "Affiche / masque le badge vert dans le Hero",
      group: "general",
    }),
    defineField({
      name: "bandeauManagement",
      title: "Texte du bandeau en haut de page",
      type: "string",
      initialValue: "Management d'artistes : complet pour le moment. Autres collaborations bienvenues.",
      description: "Le bandeau fluo tout en haut du site",
      group: "general",
    }),

    // ── About ──
    defineField({
      name: "aboutParagraphesGauche",
      title: "Textes colonne gauche (About)",
      type: "array",
      of: [{ type: "text", rows: 3 }],
      description: "Chaque entrée = un paragraphe dans la colonne gauche",
      group: "about",
    }),
    defineField({
      name: "aboutParagraphesDroite",
      title: "Textes colonne droite (About)",
      type: "array",
      of: [{ type: "text", rows: 3 }],
      description: "Chaque entrée = un paragraphe dans la colonne droite",
      group: "about",
    }),

    // ── Contact ──
    defineField({
      name: "instagram",
      title: "URL Instagram",
      type: "url",
      group: "contact",
    }),
    defineField({
      name: "linkedin",
      title: "URL LinkedIn",
      type: "url",
      group: "contact",
    }),
    defineField({
      name: "behance",
      title: "URL Behance",
      type: "url",
      group: "contact",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Paramètres du site" };
    },
  },
});
