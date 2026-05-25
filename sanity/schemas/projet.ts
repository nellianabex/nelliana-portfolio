import { defineField, defineType } from "sanity";

export default defineType({
  name: "projet",
  title: "Projet créatif",
  type: "document",
  groups: [
    { name: "base", title: "Infos de base" },
    { name: "detail", title: "Page détail" },
    { name: "visuels", title: "Visuels" },
  ],
  fields: [
    // ── Base ──
    defineField({
      name: "titre",
      title: "Titre principal",
      type: "string",
      description: "Ex : PLK, NES, KHALI…",
      validation: (Rule) => Rule.required().min(1).max(80),
      group: "base",
    }),
    defineField({
      name: "titreOutline",
      title: "Titre en outline (2e partie)",
      type: "string",
      description: "Ex : 2069', Ça Va Aller — s'affiche en contour sur la page projet",
      group: "base",
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "titre", maxLength: 96 },
      validation: (Rule) => Rule.required(),
      group: "base",
    }),
    defineField({
      name: "categorie",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Branding", value: "Branding" },
          { title: "Direction artistique", value: "Direction artistique" },
          { title: "Infographie", value: "Infographie" },
          { title: "Webdesign", value: "Webdesign" },
          { title: "Communication", value: "Communication" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
      group: "base",
    }),
    defineField({
      name: "sousTitre",
      title: "Sous-titre (carte projet)",
      type: "string",
      description: "Court — affiché sur le ticket dans la grille",
      validation: (Rule) => Rule.required().max(120),
      group: "base",
    }),
    defineField({
      name: "couleurTicket",
      title: "Couleur du ticket",
      type: "string",
      description: "Couleur hex du ticket dans la grille (ex : #D44B4B)",
      validation: (Rule) => Rule.required().regex(/^#[0-9A-Fa-f]{6}$/, "Format : #RRGGBB"),
      group: "base",
    }),
    defineField({
      name: "featured",
      title: "Projet mis en avant ?",
      type: "boolean",
      initialValue: false,
      group: "base",
    }),
    defineField({
      name: "ordre",
      title: "Ordre d'affichage",
      type: "number",
      description: "Plus petit = apparaît en premier",
      group: "base",
    }),

    // ── Détail ──
    defineField({
      name: "description",
      title: "Description (page détail)",
      type: "text",
      rows: 4,
      description: "Texte en italique sous le titre — 1 à 3 phrases max",
      group: "detail",
    }),
    defineField({
      name: "client",
      title: "Client / Artiste",
      type: "string",
      description: "Ex : PLK (concept personnel), NES, Khali x Le Type…",
      group: "detail",
    }),
    defineField({
      name: "annee",
      title: "Année",
      type: "string",
      description: "Ex : 2024",
      group: "detail",
    }),
    defineField({
      name: "role",
      title: "Rôle / Prestation",
      type: "string",
      description: "Ex : Direction artistique · Communication",
      group: "detail",
    }),
    defineField({
      name: "process",
      title: "Démarche (blocs process)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "titre", title: "Titre du bloc", type: "string" }),
            defineField({ name: "texte", title: "Texte", type: "text", rows: 4 }),
          ],
          preview: {
            select: { title: "titre" },
          },
        },
      ],
      group: "detail",
    }),
    defineField({
      name: "outils",
      title: "Outils utilisés",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: "Ex : Photoshop, Illustrator, Figma…",
      group: "detail",
    }),
    defineField({
      name: "lienExterne",
      title: "Lien Behance / externe (optionnel)",
      type: "url",
      group: "detail",
    }),

    // ── Visuels ──
    defineField({
      name: "images",
      title: "Images du projet",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Description (alt)",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "caption",
              title: "Légende (optionnel)",
              type: "string",
            }),
          ],
        },
      ],
      group: "visuels",
    }),
  ],
  orderings: [
    { title: "Ordre personnalisé", name: "ordreAsc", by: [{ field: "ordre", direction: "asc" }] },
    { title: "Titre A→Z", name: "titreAsc", by: [{ field: "titre", direction: "asc" }] },
  ],
  preview: {
    select: { title: "titre", subtitle: "categorie", media: "images.0" },
  },
});
