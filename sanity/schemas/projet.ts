import { defineField, defineType } from "sanity";

export default defineType({
  name: "projet",
  title: "Projet créatif",
  type: "document",
  fields: [
    defineField({
      name: "titre",
      title: "Titre du projet",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(80),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "titre", maxLength: 96 },
      validation: (Rule) => Rule.required(),
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
    }),
    defineField({
      name: "sousTitre",
      title: "Sous-titre / description courte",
      type: "string",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "description",
      title: "Description détaillée",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "couleurTicket",
      title: "Couleur du ticket",
      type: "string",
      description: "Couleur hexadécimale (ex: #D44B4B)",
      validation: (Rule) => Rule.required().regex(/^#[0-9A-Fa-f]{6}$/, "Format: #RRGGBB"),
    }),
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
              title: "Description de l'image (alt)",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "lienExterne",
      title: "Lien Behance / externe (optionnel)",
      type: "url",
    }),
    defineField({
      name: "featured",
      title: "Projet mis en avant ?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "ordre",
      title: "Ordre d'affichage",
      type: "number",
      description: "Plus le chiffre est bas, plus le projet apparaît en premier",
    }),
  ],
  orderings: [
    {
      title: "Ordre personnalisé",
      name: "ordreAsc",
      by: [{ field: "ordre", direction: "asc" }],
    },
    {
      title: "Titre A→Z",
      name: "titreAsc",
      by: [{ field: "titre", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "titre",
      subtitle: "categorie",
      media: "images.0",
    },
  },
});
