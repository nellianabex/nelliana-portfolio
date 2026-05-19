import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

export const queries = {
  allProjets: `*[_type == "projet"] | order(ordre asc, _createdAt desc) {
    _id,
    titre,
    "slug": slug.current,
    categorie,
    "sous_titre": sousTitre,
    couleur_ticket,
    lienExterne,
    featured,
    "image": images[0]
  }`,

  projetBySlug: `*[_type == "projet" && slug.current == $slug][0] {
    _id,
    titre,
    "slug": slug.current,
    categorie,
    "sous_titre": sousTitre,
    description,
    couleur_ticket,
    lienExterne,
    featured,
    images[] {
      asset->,
      alt
    }
  }`,

  allPhotos: `*[_type == "photo"] | order(ordre asc, date desc) {
    _id,
    image { asset-> },
    alt,
    artiste,
    event,
    date,
    ville
  }`,

  siteSettings: `*[_type == "siteSettings"][0] {
    disponible,
    aboutTexteGauche,
    aboutTexteDroite,
    email,
    instagram,
    linkedin,
    behance
  }`,
};
