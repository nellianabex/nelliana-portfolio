import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Photographie from "@/components/sections/Photographie";
import Projets from "@/components/sections/Projets";
import Contact from "@/components/sections/Contact";
import { sanityClient, queries } from "@/lib/sanity";
import { projects as staticProjects } from "@/lib/projects";

export const revalidate = 60;

export default async function HomePage() {
  // Charge les projets depuis Sanity, fallback statique si vide
  let projets = staticProjects;
  try {
    const sanityProjets = await sanityClient.fetch(queries.allProjets);
    if (sanityProjets?.length) {
      projets = sanityProjets;
    }
  } catch {
    // Sanity inaccessible — on garde les données statiques
  }

  return (
    <>
      <Hero />
      <Projets projects={projets} />
      <Photographie />
      <About />
      <Contact />
    </>
  );
}
