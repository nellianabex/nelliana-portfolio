import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "hpy9h9g1",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: false, // false pour avoir les données fraîches côté serveur
});

const builder = imageUrlBuilder(sanityClient);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

export const queries = {
  // Tous les projets — pour la grille
  allProjets: `*[_type == "projet"] | order(ordre asc, _createdAt desc) {
    _id,
    titre,
    titreOutline,
    "slug": slug.current,
    categorie,
    "sous_titre": sousTitre,
    "couleur_ticket": couleurTicket,
    "lien_externe": lienExterne,
    featured,
    "image": images[0] { asset->, alt }
  }`,

  // Un projet par slug — pour la page détail
  projetBySlug: `*[_type == "projet" && slug.current == $slug][0] {
    _id,
    titre,
    titreOutline,
    "slug": slug.current,
    categorie,
    "sous_titre": sousTitre,
    description,
    "couleur_ticket": couleurTicket,
    "lien_externe": lienExterne,
    featured,
    client,
    annee,
    role,
    process[] { titre, texte },
    outils,
    images[] { asset->, alt, caption }
  }`,

  // Slugs pour generateStaticParams
  allProjetSlugs: `*[_type == "projet"] { "slug": slug.current }`,

  // Photos galerie
  allPhotos: `*[_type == "photo"] | order(ordre asc, date desc) {
    _id,
    image { asset-> },
    alt,
    artiste,
    event,
    date,
    ville
  }`,

  // Paramètres du site
  siteSettings: `*[_type == "siteSettings"][0] {
    disponible,
    bandeauManagement,
    aboutParagraphesGauche,
    aboutParagraphesDroite,
    instagram,
    linkedin,
    behance
  }`,
};
