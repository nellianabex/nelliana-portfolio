"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const pageLeft = `Cher journal,

Ce n'est pas que je ne savais pas. Je savais.
Depuis mes 12 ans, je sais exactement ce que je veux faire,
et pour qui. Ce n'est pas non plus une crise de vocation.
J'ai une vision claire, une direction assumée,
et une rage de créer qui n'a jamais faibli.

Mais voilà : malgré plus de 400 candidatures, la porte ne s'est pas ouverte.
J'ai essayé. J'ai insisté. J'ai adapté mon discours, peaufiné mon portfolio,
ajusté chaque mail. J'ai joué le jeu, en gardant la tête haute.

Mais à un moment, j'ai dû me rendre à l'évidence : cette rentrée,
ce ne serait pas pour moi.

Alors j'ai fait ce que je fais toujours quand on me ferme une porte :
j'ai posé une stratégie.

J'ai décalé ma rentrée pour ne pas renoncer à mon ambition.
Et j'ai pris cette année "en plus" comme une opportunité :
celle d'affiner encore, de grandir autrement, de créer avec encore plus de sens.`;

const pageRight = `Parce que pour moi, la communication, ce n'est pas qu'un outil.
C'est un pont. Entre les projets et les gens. Entre les idées et leur résonance.
C'est le moyen de traduire une vision en impact, une identité en émotion,
une mission en mouvement.

Diplômée d'un Bachelor Concepteur Designer UI, aujourd'hui,
je cherche une alternance en communication pour septembre 2025.

Pas pour "remplir une ligne sur mon CV".
Mais pour mettre ma sensibilité, mon exigence et mon feu créatif
au service d'une structure qui croit, elle aussi, que l'image peut porter du poids,
peut porter du sens, que les mots peuvent porter du poids,
et que la com' est bien plus qu'une surface.

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
