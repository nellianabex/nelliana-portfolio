"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const, delay: delay * 0.4 },
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-10 md:mb-12">
      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#787878]">
        {children}
      </span>
      <div className="flex-1 h-px bg-white/8" />
    </div>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="min-h-screen bg-noir text-blanc-casse font-mono">

      {/* ── HEADER ── */}
      <motion.header
        {...fade(0.1)}
        className="pt-24 pb-0 px-6 md:px-20 flex items-start justify-between"
      >
        <Link
          href="/#projets"
          className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#787878] border-b border-transparent hover:text-[#c8c8c8] hover:border-[#787878] transition-all duration-200"
        >
          ← Projets
        </Link>
        <div className="text-right text-[11px] font-mono tracking-[0.1em] text-[#787878] leading-relaxed">
          {project.annee && <p>{project.annee}</p>}
          <p>{project.categorie}</p>
        </div>
      </motion.header>

      {/* ── HERO ── */}
      <motion.section
        {...fade(0.3)}
        className="px-6 md:px-20 pt-16 md:pt-20 pb-14 md:pb-16"
      >
        {/* Tag */}
        <div className="flex items-center gap-4 mb-7">
          <div className="w-8 h-px bg-[#787878]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#787878]">
            {project.categorie}
          </span>
        </div>

        {/* Titre */}
        <h1 className="font-display leading-[0.9] tracking-wide mb-0"
          style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
        >
          <span className="text-blanc-casse">{project.titre} </span>
          {project.titreOutline && (
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px #787878",
              }}
            >
              {project.titreOutline}
            </span>
          )}
        </h1>

        {/* Description italique */}
        {project.description && (
          <p className="mt-10 max-w-xl text-sm font-mono italic leading-[1.75] text-[#e8e0d0]">
            {project.description}
          </p>
        )}
      </motion.section>

      {/* ── DIVIDER ── */}
      <div
        className="mx-6 md:mx-20"
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #787878 30%, #787878 70%, transparent)",
          opacity: 0.3,
        }}
      />

      {/* ── INFOS ROW ── */}
      <motion.section
        {...fade(0.5)}
        className="px-6 md:px-20 py-10 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-white/[0.06]"
      >
        {[
          { label: "Client / Artiste", value: project.client },
          { label: "Année", value: project.annee },
          { label: "Catégorie", value: project.categorie },
          { label: "Rôle", value: project.role },
        ].map(({ label, value }) =>
          value ? (
            <div key={label}>
              <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#787878] mb-2.5">
                {label}
              </label>
              <p className="text-[13px] font-mono text-blanc-casse leading-relaxed">
                {value}
              </p>
            </div>
          ) : null
        )}
      </motion.section>

      {/* ── VISUELS ── */}
      <motion.section
        {...fade(0.7)}
        className="px-6 md:px-20 py-16 md:py-20"
      >
        <SectionLabel>Visuels</SectionLabel>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {project.images && project.images.length > 0 ? (
            // Vraies images depuis Sanity
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            project.images.map((img: any, i: number) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`relative overflow-hidden rounded-sm bg-surface group ${i === 0 || i === 3 ? "md:row-span-1" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={typeof img === "string" ? img : img.asset?.url}
                  alt={img.alt ?? `Visuel ${i + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/85 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#c8c8c8]">
                      {img.caption}
                    </span>
                  </div>
                )}
              </motion.div>
            ))
          ) : (
            // Placeholder éditorial quand pas d'images
            <div className="md:col-span-2 border border-white/[0.06] rounded-sm flex flex-col items-center justify-center py-24 gap-4">
              <span className="font-display text-[clamp(3rem,8vw,6rem)] text-white/5 tracking-widest select-none">
                {project.titre}
              </span>
              <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#787878]">
                Visuels à venir
              </p>
            </div>
          )}
        </div>
      </motion.section>

      {/* ── PROCESS ── */}
      {project.process && project.process.length > 0 && (
        <motion.section
          {...fade(0.9)}
          className="px-6 md:px-20 pb-16 md:pb-20"
        >
          <SectionLabel>Démarche</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            {project.process.map(({ titre, texte }) => (
              <div key={titre}>
                <h3
                  className="font-display text-[#c8c8c8] mb-4 tracking-wide"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)" }}
                >
                  {titre}
                </h3>
                <p className="text-[13px] font-mono leading-[1.8] text-blanc-casse/60">
                  {texte}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* ── OUTILS ── */}
      {project.outils && project.outils.length > 0 && (
        <motion.section
          {...fade(1)}
          className="px-6 md:px-20 pb-20 md:pb-28"
        >
          <SectionLabel>Outils</SectionLabel>

          <div className="flex flex-wrap gap-3">
            {project.outils.map((outil) => (
              <span
                key={outil}
                className="px-4 py-2 border border-white/15 text-[11px] font-mono uppercase tracking-[0.15em] text-[#787878] rounded-sm hover:border-[#c8c8c8] hover:text-[#c8c8c8] transition-all duration-200"
              >
                {outil}
              </span>
            ))}
          </div>
        </motion.section>
      )}

      {/* ── FOOTER NAV ── */}
      <footer className="border-t border-white/[0.06] px-6 md:px-20 py-8 flex items-center justify-between">
        <Link
          href="/#projets"
          className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#787878] hover:text-[#c8c8c8] transition-colors duration-200"
        >
          ← Tous les projets
        </Link>
        {project.lien_externe && (
          <a
            href={project.lien_externe}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#787878] hover:text-blanc-casse transition-colors duration-200"
          >
            Voir sur Behance →
          </a>
        )}
      </footer>
    </article>
  );
}
