"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="min-h-screen pt-24 pb-24 px-6 md:px-12 bg-noir">
      <div className="max-w-[1440px] mx-auto">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm font-body text-gris-sombre mb-12"
          aria-label="Fil d'Ariane"
        >
          <Link href="/" className="hover:text-fluo transition-colors duration-200">
            Accueil
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/#projets" className="hover:text-fluo transition-colors duration-200">
            Projets
          </Link>
          <span aria-hidden="true">·</span>
          <span className="text-blanc-casse">{project.titre}</span>
        </motion.nav>

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-16 items-start">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-xs font-body uppercase tracking-widest text-gris-sombre mb-4 block"
            >
              {project.categorie}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="font-display text-[clamp(3rem,6vw,6rem)] leading-none text-blanc-casse tracking-wide mb-4"
            >
              {project.titre}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="font-body text-gris-sombre text-lg mb-8"
            >
              {project.sous_titre}
            </motion.p>

            {project.description && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-body text-blanc-casse/80 text-base leading-relaxed"
              >
                {project.description}
              </motion.p>
            )}
          </div>

          {/* Ticket card hero */}
          <motion.div
            initial={{ opacity: 0, rotate: -4, y: 30 }}
            animate={{ opacity: 1, rotate: -2, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
            className="aspect-[3/4] rounded-sm overflow-hidden max-w-sm mx-auto md:mx-0"
            style={{ backgroundColor: project.couleur_ticket, willChange: "transform" }}
          >
            <div className="h-full flex flex-col p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-xs tracking-widest text-noir/60 uppercase">
                  {project.categorie}
                </span>
                <div className="w-2 h-2 rounded-full bg-noir/20" />
              </div>
              <div className="flex-1 bg-noir/10 rounded-sm flex items-center justify-center">
                <span className="text-noir/30 text-sm font-body">Visuels du projet</span>
              </div>
              <div className="mt-6">
                <p className="font-display text-3xl text-noir leading-tight">{project.titre}</p>
                <p className="text-noir/60 text-sm font-body mt-1">{project.sous_titre}</p>
              </div>
              <div className="flex gap-2 mt-4" aria-hidden="true">
                {Array(8).fill(null).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-noir/20" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          {project.lien_externe && (
            <a
              href={project.lien_externe}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-fluo text-noir font-body font-bold text-sm rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(212,255,0,0.3)] transition-all duration-300"
              aria-label={`Voir le projet ${project.titre} sur Behance`}
            >
              Voir sur Behance →
            </a>
          )}
          <Link
            href="/#projets"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-blanc-casse font-body font-medium text-sm rounded-full hover:border-fluo hover:text-fluo transition-all duration-200"
            aria-label="Retour aux projets"
          >
            ← Tous les projets
          </Link>
        </motion.div>
      </div>
    </article>
  );
}
