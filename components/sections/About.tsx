"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const pageLeft = `Multipotentielle spécialisée rap.

Graphisme, photo, direction artistique, communication —
je touche à tout, mais rien au hasard et rien sans structure.

La musique urbaine n'est pas mon contexte de travail.
C'est ma matière première.

J'ai grandi avec le rap. Pas comme auditrice passive —
comme quelqu'un qui décortique, qui observe, qui comprend
comment une image sert un son, comment une identité visuelle
porte une carrière, comment les mots et la photo peuvent faire
la différence entre un artiste qu'on remarque
et un artiste qu'on retient.

C'est de là que vient mon exigence.
Pas d'une formation, pas d'un brief.
D'années à regarder cet univers de près.`;

const pageRight = `Aujourd'hui je travaille sur deux axes qui se nourrissent l'un l'autre :
la création visuelle et la direction de communication d'un côté,
le management d'artistes de l'autre.

Les deux demandent la même chose :
une vision claire, une exécution rigoureuse,
et la capacité à tenir plusieurs fils en même temps
sans en lâcher aucun.

Multipotentielle, ça ne veut pas dire dispersée.
Ça veut dire que je vois les connexions là où d'autres voient des silos.

Et dans le rap, où tout est lié —
le son, l'image, la communication, le business —
c'est exactement ce qu'il faut.

— Nel`;

function Polaroid() {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: 4, y: 20 }}
      whileInView={{ opacity: 1, rotate: 4, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      className="absolute -top-8 -right-6 md:-right-12"
      style={{ willChange: "transform, opacity" }}
      aria-hidden="true"
    >
      <div className="bg-blanc-casse p-2 pb-8 shadow-2xl w-28 md:w-36">
        <div className="w-full aspect-square bg-gris-sombre/30 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
        <p className="text-center text-[8px] text-noir/50 font-handwritten mt-2 leading-tight">Nel, 2025</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-36 px-6 md:px-12 bg-noir relative overflow-hidden"
      aria-label="À propos de Nelliana BEX"
    >
      <div className="max-w-[1440px] mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-5xl md:text-7xl text-blanc-casse mb-16 tracking-wide">
            À PROPOS
          </h2>
        </AnimatedSection>

        {/* Notebook */}
        <motion.div
          style={{ y, willChange: "transform" }}
          className="relative"
        >
          <div className="relative bg-[#1A1208] rounded-lg shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden">
            {/* Notebook spine */}
            <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-px bg-white/5 z-10" aria-hidden="true">
              {/* Spiral rings */}
              {Array(12).fill(null).map((_, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white/10 bg-transparent"
                  style={{ top: `${(i + 0.5) * (100 / 13)}%` }}
                />
              ))}
            </div>

            <div className="grid md:grid-cols-2">
              {/* Left page */}
              <div className="relative p-8 md:p-12 border-r border-white/5">
                <Polaroid />
                <p className="font-handwritten text-lg md:text-xl text-blanc-casse/90 leading-[1.9] whitespace-pre-line">
                  {pageLeft}
                </p>
              </div>

              {/* Right page */}
              <div className="p-8 md:p-12">
                <p className="font-handwritten text-lg md:text-xl text-blanc-casse/90 leading-[1.9] whitespace-pre-line">
                  {pageRight}
                </p>

                {/* Signature fluo underline */}
                <div className="mt-8 flex items-center gap-3">
                  <span className="font-handwritten text-2xl text-fluo">Nelliana BEX</span>
                  <div className="flex-1 h-px bg-fluo/30" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
