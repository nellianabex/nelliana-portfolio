"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Ticker from "@/components/ui/Ticker";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { categories, type Project, type Category } from "@/lib/projects";

function TicketCard({ project, index }: { project: Project; index: number }) {
  const rotation = useMemo(() => (Math.random() - 0.5) * 4, []);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.92, rotate: rotation }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      exit={{ opacity: 0, scale: 0.88 }}
      whileHover={{ scale: 1.04, rotate: 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative group cursor-pointer rounded-sm overflow-hidden"
      style={{ willChange: "transform, opacity" }}
      aria-label={`Projet ${project.titre}`}
    >
      <div
        className="relative flex flex-col"
        style={{ backgroundColor: project.couleur_ticket, minHeight: index % 3 === 0 ? 360 : 280 }}
      >
        {/* Ticket header */}
        <div className="p-4 flex items-start justify-between">
          <span className="font-display text-sm text-blanc-casse/40 tracking-widest uppercase">
            {project.categorie}
          </span>
          <div className="w-2 h-2 rounded-full bg-blanc-casse/20" />
        </div>

        {/* Image area */}
        <div className="flex-1 mx-3 rounded-sm overflow-hidden flex items-center justify-center min-h-[120px] relative bg-blanc-casse/5">
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={typeof project.image === "string" ? project.image : (project.image as {asset?: {url?: string}})?.asset?.url}
              alt={project.titre}
              className="w-full h-full object-cover absolute inset-0"
            />
          ) : (
            <span className="font-display text-[clamp(2rem,6vw,3.5rem)] text-blanc-casse/8 tracking-widest select-none px-4 text-center leading-none">
              {project.titreOutline ?? project.titre}
            </span>
          )}
        </div>

        {/* Ticket footer */}
        <div className="p-4 pt-3">
          <h3 className="font-display text-2xl text-blanc-casse leading-tight tracking-wide">
            {project.titre}
          </h3>
          <p className="text-blanc-casse/50 text-sm font-body mt-1">{project.sous_titre}</p>
        </div>

        {/* Perforations bottom */}
        <div className="flex items-center gap-2 px-4 pb-4" aria-hidden="true">
          {Array(6).fill(null).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-blanc-casse/15" />
          ))}
          <div className="flex-1 border-t border-dashed border-blanc-casse/15" />
          {Array(6).fill(null).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-blanc-casse/15" />
          ))}
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-fluo/90 flex items-center justify-center"
        >
          <Link
            href={`/projets/${project.slug}`}
            className="font-display text-xl text-noir tracking-wider hover:underline"
            aria-label={`Voir le détail du projet ${project.titre}`}
          >
            VOIR LE PROJET →
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}

interface ProjetsProps {
  projects: Project[];
}

export default function Projets({ projects }: ProjetsProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("Tout");

  const filtered = useMemo(() => {
    if (activeCategory === "Tout") return projects;
    return projects.filter((p) => p.categorie === activeCategory);
  }, [activeCategory, projects]);

  return (
    <section
      id="projets"
      className="py-16 md:py-36 bg-surface overflow-hidden"
      aria-label="Projets de Nelliana BEX"
    >
      {/* Ticker */}
      <Ticker
        text="MES CRÉATIONS"
        speed="slow"
        className="py-4 text-4xl md:text-6xl font-display text-noir/10 tracking-wider mb-12"
        separator="✦"
      />

      <div className="px-5 md:px-12">
        <AnimatedSection className="mb-10">
          <h2 className="font-display text-4xl md:text-7xl text-noir tracking-wide">
            MES CRÉATIONS
          </h2>
        </AnimatedSection>

        {/* Filter bar */}
        <AnimatedSection delay={0.1} className="mb-12">
          <div
            className="flex flex-wrap gap-3"
            role="tablist"
            aria-label="Filtrer les projets par catégorie"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-fluo text-noir"
                    : "border border-noir/20 text-noir/60 hover:border-fluo/50 hover:text-noir"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <TicketCard key={project.slug} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filtered.length === 0 && (
          <p className="text-gris-sombre font-body text-center py-24">
            Aucun projet dans cette catégorie pour l&apos;instant.
          </p>
        )}
      </div>
    </section>
  );
}
