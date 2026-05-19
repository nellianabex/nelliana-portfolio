import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Paramètres du site",
  type: "document",
  fields: [
    defineField({
      name: "disponible",
      title: "Disponible pour de nouveaux projets ?",
      type: "boolean",
      initialValue: true,
      description: "Affecte le badge vert sur le Hero",
    }),
    defineField({
      name: "aboutTexteGauche",
      title: "Texte About — Page gauche du carnet",
      type: "text",
      rows: 12,
    }),
    defineField({
      name: "aboutTexteDroite",
      title: "Texte About — Page droite du carnet",
      type: "text",
      rows: 12,
    }),
    defineField({
      name: "email",
      title: "Email de contact",
      type: "string",
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: "instagram",
      title: "URL Instagram",
      type: "url",
    }),
    defineField({
      name: "linkedin",
      title: "URL LinkedIn",
      type: "url",
    }),
    defineField({
      name: "behance",
      title: "URL Behance",
      type: "url",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Paramètres du site" };
    },
  },
});
