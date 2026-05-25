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
  // Essaie Sanity d'abord
  try {
    const project = await sanityClient.fetch(queries.projetBySlug, {
      slug: params.slug,
    });
    if (project) {
      return {
        title: `${project.titre}${project.titreOutline ? " " + project.titreOutline : ""}`,
        description: project.description ?? project.sous_titre,
        openGraph: {
          title: `${project.titre} — Nelliana BEX`,
          description: project.description ?? project.sous_titre,
        },
      };
    }
  } catch {
    // fallback
  }

  // Fallback statique
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Projet introuvable" };
  return {
    title: project.titre,
    description: project.description ?? project.sous_titre,
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
