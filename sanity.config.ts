import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "nelliana-bex-portfolio",
  title: "Portfolio Nelliana BEX",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath: "/studio",
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Contenu")
          .items([
            S.listItem()
              .title("Projets créatifs")
              .icon(() => "🎨")
              .child(S.documentTypeList("projet").title("Projets")),
            S.listItem()
              .title("Galerie photo")
              .icon(() => "📷")
              .child(S.documentTypeList("photo").title("Photos")),
            S.listItem()
              .title("Paramètres du site")
              .icon(() => "⚙️")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
                  .title("Paramètres")
              ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
