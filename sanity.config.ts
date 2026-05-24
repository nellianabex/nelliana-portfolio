import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "nelliana-bex-portfolio",
  title: "Portfolio Nelliana BEX",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "hpy9h9g1",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenu")
          .items([
            S.listItem()
              .title("⚙️ Paramètres du site")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
                  .title("Paramètres")
              ),
            S.divider(),
            S.listItem()
              .title("🎨 Projets créatifs")
              .child(S.documentTypeList("projet").title("Projets")),
            S.listItem()
              .title("📷 Galerie photo")
              .child(S.documentTypeList("photo").title("Photos")),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
