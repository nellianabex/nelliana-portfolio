import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Photographie from "@/components/sections/Photographie";
import Projets from "@/components/sections/Projets";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projets />
      <Photographie />
      <About />
      <Contact />
    </>
  );
}
