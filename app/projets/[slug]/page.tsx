import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectDetail from "@/components/sections/ProjectDetail";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Projet introuvable" };

  return {
    title: project.titre,
    description: project.description ?? project.sous_titre,
    openGraph: {
      title: `${project.titre} — Nelliana BEX`,
      description: project.description ?? project.sous_titre,
    },
  };
}

export default function ProjetPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
