import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { sanityClient, queries, urlFor } from "@/lib/sanity";
import { projects } from "@/lib/projects";
import ProjectDetail from "@/components/sections/ProjectDetail";

interface Props {
  params: { slug: string };
}

// Régénère la page toutes les 60 secondes après une requête
export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const sanityProjects = await sanityClient.fetch<{ slug: string }[]>(
      queries.allProjetSlugs
    );
    if (sanityProjects?.length) {
      return sanityProjects.map((p) => ({ slug: p.slug }));
    }
  } catch {
    // fallback sur données statiques si Sanity inaccessible
  }
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const baseUrl = "https://nellianabex.fr";

  // Essaie Sanity d'abord
  try {
    const project = await sanityClient.fetch(queries.projetBySlug, { slug: params.slug });
    if (project) {
      const title = `${project.titre}${project.titreOutline ? " " + project.titreOutline : ""} — Direction Artistique`;
      const description = project.description ?? project.sous_titre;
      const ogImage = project.image ? urlFor(project.image).width(1200).height(630).url() : `${baseUrl}/nelliana-og.jpg`;
      return {
        title,
        description,
        alternates: { canonical: `${baseUrl}/projets/${params.slug}` },
        openGraph: {
          title: `${project.titre} — Nelliana BEX`,
          description,
          images: [{ url: ogImage, width: 1200, height: 630 }],
        },
        twitter: { card: "summary_large_image", title, description, images: [ogImage] },
      };
    }
  } catch {
    // fallback
  }

  // Fallback statique
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Projet introuvable" };

  const title = `${project.titre}${project.titreOutline ? " " + project.titreOutline : ""} — Direction Artistique`;
  const description = project.description ?? project.sous_titre ?? "";
  const coverImage = typeof project.image === "string" ? `${baseUrl}${project.image}` : `${baseUrl}/nelliana-og.jpg`;

  return {
    title,
    description,
    alternates: { canonical: `${baseUrl}/projets/${params.slug}` },
    openGraph: {
      title: `${project.titre} — Nelliana BEX`,
      description,
      images: [{ url: coverImage, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description, images: [coverImage] },
  };
}

export default async function ProjetPage({ params }: Props) {
  // 1. Essaie de charger depuis Sanity
  let project = null;
  try {
    const sanityProject = await sanityClient.fetch(queries.projetBySlug, {
      slug: params.slug,
    });

    if (sanityProject) {
      // Résoudre les URLs des images Sanity
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const resolvedImages = sanityProject.images?.map((img: any) =>
        urlFor(img).width(1200).url()
      );
      project = { ...sanityProject, images: resolvedImages };
    }
  } catch {
    // Sanity inaccessible → fallback
  }

  // 2. Fallback sur données statiques
  if (!project) {
    project = projects.find((p) => p.slug === params.slug) ?? null;
  }

  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
