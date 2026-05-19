import { defineField, defineType } from "sanity";

export default defineType({
  name: "photo",
  title: "Photo de concert",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Description de la photo (alt)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "artiste",
      title: "Artiste photographié(e)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "event",
      title: "Nom de l'événement",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      options: { dateFormat: "DD/MM/YYYY" },
    }),
    defineField({
      name: "ville",
      title: "Ville",
      type: "string",
    }),
    defineField({
      name: "ordre",
      title: "Ordre d'affichage",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Plus récent d'abord",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Ordre personnalisé",
      name: "ordreAsc",
      by: [{ field: "ordre", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "artiste",
      subtitle: "event",
      media: "image",
    },
  },
});
