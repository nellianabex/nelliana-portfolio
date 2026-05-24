"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const paragraphsLeft = [
  "Graphisme, photo, direction artistique, communication. Je touche à tout, mais rien au hasard et rien sans structure.",
  "La musique urbaine n'est pas mon contexte de travail. C'est ma matière première.",
  "J'ai grandi avec le rap. Pas comme auditrice passive : comme quelqu'un qui décortique, qui observe, qui comprend comment une image sert un son, comment une identité visuelle porte une carrière, comment les mots et la photo peuvent faire la différence entre un artiste qu'on remarque et un artiste qu'on retient.",
  "C'est de là que vient mon exigence. Pas d'une formation, pas d'un brief. D'années à regarder cet univers de près.",
];

const paragraphsRight = [
  "Aujourd'hui je travaille sur deux axes qui se nourrissent l'un l'autre : la création visuelle et la direction de communication d'un côté, le management d'artistes de l'autre.",
  "Les deux demandent la même chose : une vision claire, une exécution rigoureuse, et la capacité à tenir plusieurs fils en même temps sans en lâcher aucun.",
  "Toucher à tout, ça ne veut pas dire manquer de focus. Ça veut dire voir les connexions là où d'autres voient des silos.",
  "Et dans le rap, où tout est lié (le son, l'image, la communication, le business), c'est exactement ce qu'il faut.",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-36 px-5 md:px-12 bg-noir relative overflow-hidden"
      aria-label="À propos de Nelliana BEX"
    >
      <div className="max-w-[1440px] mx-auto">

        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-7xl text-blanc-casse mb-10 md:mb-16 tracking-wide">
            À PROPOS
          </h2>
        </AnimatedSection>

        {/* Editorial layout */}
        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-[5fr_7fr] border border-white/8 overflow-hidden">

            {/* ── Photo column ── */}
            <div ref={photoRef} className="relative overflow-hidden min-h-[320px] md:min-h-0">
              <motion.div
                style={{ y: photoY, willChange: "transform" }}
                className="absolute inset-0 scale-[1.06]"
              >
                <Image
                  src="/nelliana-portrait.png"
                  alt="Nelliana BEX"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                {/* subtle dark vignette bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-noir/60 to-transparent pointer-events-none" />
              </motion.div>

              {/* Caption */}
              <div className="absolute bottom-5 left-5 z-10">
                <p className="text-[10px] font-body uppercase tracking-[0.2em] text-blanc-casse/40">
                  Nelliana BEX · Paris, 2025
                </p>
              </div>

              {/* Fluo right border accent */}
              <div className="absolute right-0 inset-y-0 w-px bg-fluo/30 z-10" aria-hidden="true" />
            </div>

            {/* ── Text column ── */}
            <div className="flex flex-col p-6 md:p-12 lg:p-16">

              {/* Tag */}
              <p className="text-[10px] font-body uppercase tracking-[0.25em] text-fluo mb-10">
                Direction artistique · Communication · Management
              </p>

              {/* Two-column text grid on desktop */}
              <div className="flex flex-col md:grid md:grid-cols-2 gap-x-10 gap-y-5 flex-1">
                {/* Left paragraphs */}
                <div className="flex flex-col gap-5">
                  {paragraphsLeft.map((p, i) => (
                    <p
                      key={i}
                      className={`font-body leading-relaxed ${
                        i === 0
                          ? "text-blanc-casse font-semibold text-base"
                          : "text-blanc-casse/70 text-sm"
                      }`}
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {/* Right paragraphs */}
                <div className="flex flex-col gap-5">
                  {paragraphsRight.map((p, i) => (
                    <p key={i} className="font-body text-sm leading-relaxed text-blanc-casse/70">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Signature */}
              <div className="mt-10 pt-8 border-t border-white/8 flex items-center gap-4">
                <span className="font-handwritten text-2xl text-fluo">Nel</span>
                <div className="flex-1 h-px bg-fluo/20" />
              </div>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
