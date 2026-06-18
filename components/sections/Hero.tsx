"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Ticker from "@/components/ui/Ticker";

const pills = ["Direction artistique", "Branding", "Photographie", "Communication", "Rap & culture urbaine"];

const NELLIANA = "NELLIANA".split("");

function BarcodeIcon() {
  return (
    <svg width="80" height="28" viewBox="0 0 80 28" fill="none" aria-hidden="true">
      {[2,5,7,10,13,16,18,21,24,27,29,32,35,38,41,43,46,49,52,55,57,60,63,66,69,71,74,77].map((x, i) => (
        <rect key={i} x={x} y={0} width={i % 5 === 0 ? 3 : 2} height={28} fill="#212121" />
      ))}
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#212121" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function AccreditationCard() {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0, rotate: -3 }}
      animate={{ y: 0, opacity: 1, rotate: -3 }}
      transition={{ type: "spring", stiffness: 180, damping: 18, delay: 1.2 }}
      className="relative w-[190px] sm:w-[210px] md:w-[240px]"
      style={{ willChange: "transform" }}
      aria-label="Carte accréditation Nelliana BEX"
    >
      <div
        className="bg-fluo rounded-2xl p-4 md:p-5 shadow-[0_20px_60px_rgba(212,255,0,0.25)] flex flex-col gap-2 md:gap-3"
        style={{ minHeight: 300 }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between">
          <span className="w-3 h-3 rounded-full bg-noir/20 flex-shrink-0" />
          <GlobeIcon />
          <BarcodeIcon />
        </div>

        {/* Disciplines */}
        <div className="text-[9px] font-body font-semibold text-noir/60 uppercase tracking-widest leading-tight">
          Graphisme · Communication · Photographie
        </div>
        <div className="text-[10px] font-body font-bold text-noir uppercase tracking-wider">
          Management d&apos;artistes
        </div>

        {/* Status */}
        <div className="mt-1 md:mt-2">
          <p className="font-body font-black text-xl md:text-2xl leading-none text-noir tracking-tight uppercase">
            Disponible
          </p>
          <p className="font-body font-bold text-sm md:text-base leading-snug text-noir/60 uppercase tracking-wide">
            pour vous accompagner
          </p>
        </div>

        {/* Photo placeholder + name */}
        <div className="mt-auto flex items-end gap-2">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative">
            <Image
              src="/nelliana-portrait.png"
              alt="Nelliana BEX"
              fill
              className="object-cover object-center grayscale"
              sizes="48px"
            />
          </div>
          <div>
            <p className="font-body font-bold text-noir text-sm leading-tight">Nelliana BEX</p>
            <p className="font-body text-noir/60 text-[10px]">@n3lliana</p>
          </div>
        </div>

        {/* Notch decoration bottom */}
        <div className="flex items-center gap-1 pt-2 border-t border-noir/20">
          {Array(5).fill(null).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-noir/15" />
          ))}
        </div>
      </div>

      {/* Lanyard hole */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-noir/30 bg-fluo" />
    </motion.div>
  );
}

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" aria-label="Présentation de Nelliana BEX">
      {/* Top ticker */}
      <div className="pt-16 border-b border-noir/10">
        <Ticker
          text="MANAGEMENT D'ARTISTES · GRAPHISME · WEBDESIGN · PHOTOGRAPHIE · COMMUNICATION"
          speed="fast"
          className="py-3 text-xs font-display text-gris-sombre tracking-widest"
          separator="✦"
        />
      </div>

      {/* Main content */}
      <div className="flex-1 max-w-[1440px] mx-auto w-full px-5 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-10 md:py-24">
        {/* Left: text */}
        <div className="flex-1 flex flex-col gap-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gris-sombre text-sm font-body uppercase tracking-widest"
          >
            Découvrez mon travail
          </motion.p>

          {/* NELLIANA — letter by letter */}
          <h1 className="flex flex-col leading-none">
            <div className="flex" aria-label="NELLIANA">
              {NELLIANA.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.05, ease: "easeOut" }}
                  className="font-display text-[clamp(2.2rem,10vw,9rem)] text-noir"
                  style={{ willChange: "transform, opacity" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* BEX — fluo burst */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display text-[clamp(2.2rem,10vw,9rem)] text-fluo leading-none"
              style={{ willChange: "transform, opacity" }}
              aria-label="BEX"
            >
              BEX
            </motion.span>
          </h1>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex items-center gap-2 border border-fluo/40 rounded-[8px] px-3 py-1.5 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            <span className="text-sm font-body text-gris-sombre">Disponible pour vos projets créatifs</span>
          </motion.div>

          {/* Soft skills pills */}
          <div className="flex flex-wrap gap-2" role="list" aria-label="Compétences transversales">
            {pills.map((pill, i) => (
              <motion.span
                key={pill}
                role="listitem"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + i * 0.08 }}
                className="px-4 py-1.5 rounded-full border border-noir/15 text-sm font-body text-noir/60 hover:border-fluo/80 hover:text-noir transition-all duration-200"
                style={{ willChange: "transform, opacity" }}
              >
                {pill}
              </motion.span>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#projets"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="inline-flex items-center gap-3 mt-4 px-8 py-3 bg-fluo text-noir font-body font-semibold text-sm rounded-[8px] hover:scale-105 hover:shadow-[0_0_30px_rgba(212,255,0,0.3)] transition-all duration-300 w-fit"
            aria-label="Voir mes projets"
          >
            Voir mes projets
            <span aria-hidden="true">→</span>
          </motion.a>
        </div>

        {/* Right: accreditation card */}
        <div className="flex-shrink-0 flex items-center justify-center md:justify-end self-center md:self-auto">
          <AccreditationCard />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="flex justify-center pb-8"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gris-sombre"
        >
          <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path d="M8 0v20M1 13l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
