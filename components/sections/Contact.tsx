"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const socials = [
  {
    label: "Instagram",
    handle: "@n3lliana",
    href: "https://instagram.com/n3lliana",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "Nelliana BEX",
    href: "https://linkedin.com/in/nelliana-bex",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <path d="M7 10v7M7 7v.01M12 10v7M12 13a3 3 0 0 1 6 0v4" />
      </svg>
    ),
  },
  {
    label: "Behance",
    handle: "Nelliana BEX",
    href: "https://behance.net/nellianabex",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 11.5A2 2 0 0 0 9.5 9.5H5v4h2.5a2 2 0 0 0 0-4zM5 15v4.5h3a2.25 2.25 0 0 0 0-4.5H5zm9.5-7h5M14.25 11a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0z" />
      </svg>
    ),
  },
];

const typesProjet = [
  { value: "direction-artistique", label: "Direction artistique" },
  { value: "branding", label: "Branding" },
  { value: "photographie", label: "Photographie" },
  { value: "communication", label: "Communication" },
  { value: "management", label: "Management d'artistes" },
  { value: "autre", label: "Autre" },
];

const decouverte = [
  { value: "instagram", label: "Instagram" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "behance", label: "Behance" },
  { value: "bouche-a-oreille", label: "Bouche à oreille" },
  { value: "autre", label: "Autre" },
];

interface FormData {
  prenom: string;
  type: string;
  projet: string;
  timeline: string;
  decouverte: string;
}

const initialForm: FormData = {
  prenom: "",
  type: "",
  projet: "",
  timeline: "",
  decouverte: "",
};

function ChipSelect({
  options,
  value,
  onChange,
}: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`px-4 py-2 rounded-[8px] text-sm font-body transition-all duration-200 ${
            value === opt.value
              ? "bg-fluo text-noir font-semibold"
              : "border border-white/15 text-blanc-casse/70 hover:border-fluo/50 hover:text-blanc-casse"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function BriefForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [sent, setSent] = useState(false);
  const email = "nelliana.bex@gmail.com";

  const set = (key: keyof FormData, val: string) =>
    setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Brief collaboration${form.prenom ? ` — ${form.prenom}` : ""}`;
    const body = [
      `Bonjour Nelliana,`,
      ``,
      `Je m'appelle ${form.prenom || "…"}.`,
      ``,
      `━━ MON PROJET ━━`,
      `Type : ${typesProjet.find((t) => t.value === form.type)?.label || "Non précisé"}`,
      ``,
      form.projet || "…",
      ``,
      `━━ TIMELINE ━━`,
      form.timeline || "Non précisée",
      ``,
      `━━ COMMENT J'AI TROUVÉ TON PROFIL ━━`,
      decouverte.find((d) => d.value === form.decouverte)?.label || "Non précisé",
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-12 text-center flex flex-col items-center gap-4"
      >
        <span className="text-4xl">✦</span>
        <p className="font-display text-3xl text-fluo tracking-wide">C&apos;est parti !</p>
        <p className="text-gris-sombre font-body text-sm max-w-xs">
          Ton brief s&apos;est ouvert dans ta messagerie. Envoie-le et je reviens vers toi rapidement.
        </p>
        <button
          onClick={onClose}
          className="mt-4 text-xs font-body text-gris-sombre hover:text-blanc-casse transition-colors"
        >
          Fermer
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {/* Prénom */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-body uppercase tracking-widest text-gris-sombre">
          01 — Comment tu t&apos;appelles ?
        </label>
        <input
          type="text"
          value={form.prenom}
          onChange={(e) => set("prenom", e.target.value)}
          placeholder="Ton prénom"
          className="bg-transparent border-b border-white/15 focus:border-fluo pb-2 text-blanc-casse font-body text-base outline-none placeholder:text-gris-sombre/50 transition-colors duration-200"
        />
      </div>

      {/* Type */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-body uppercase tracking-widest text-gris-sombre">
          02 — C&apos;est pour quoi ?
        </label>
        <ChipSelect
          options={typesProjet}
          value={form.type}
          onChange={(v) => set("type", v)}
        />
      </div>

      {/* Projet */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-body uppercase tracking-widest text-gris-sombre">
          03 — Raconte-moi ton projet
        </label>
        <textarea
          value={form.projet}
          onChange={(e) => set("projet", e.target.value)}
          placeholder={`Qui tu es, ce que tu veux créer, ce que tu cherches.${"\n"}Pas besoin d'être parfait — je veux juste comprendre ta vision.`}
          rows={4}
          className="bg-transparent border-b border-white/15 focus:border-fluo pb-2 text-blanc-casse font-body text-sm outline-none placeholder:text-gris-sombre/50 resize-none transition-colors duration-200 leading-relaxed"
        />
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-body uppercase tracking-widest text-gris-sombre">
          04 — T&apos;as une idée de quand ?
        </label>
        <input
          type="text"
          value={form.timeline}
          onChange={(e) => set("timeline", e.target.value)}
          placeholder="Dès que possible, dans 2 mois, pour septembre…"
          className="bg-transparent border-b border-white/15 focus:border-fluo pb-2 text-blanc-casse font-body text-base outline-none placeholder:text-gris-sombre/50 transition-colors duration-200"
        />
      </div>

      {/* Découverte */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-body uppercase tracking-widest text-gris-sombre">
          05 — Comment tu m&apos;as trouvée ?
        </label>
        <ChipSelect
          options={decouverte}
          value={form.decouverte}
          onChange={(v) => set("decouverte", v)}
        />
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="mt-2 w-full py-4 bg-fluo text-noir font-body font-bold text-base rounded-[8px] hover:shadow-[0_0_40px_rgba(212,255,0,0.25)] transition-shadow duration-300 flex items-center justify-center gap-3"
      >
        Envoyer mon brief
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </motion.button>

      <button
        type="button"
        onClick={onClose}
        className="text-xs font-body text-gris-sombre hover:text-blanc-casse transition-colors text-center"
      >
        Annuler
      </button>
    </form>
  );
}

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "nelliana.bex@gmail.com";

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-36 px-6 md:px-12 bg-surface"
      aria-label="Contact — Nelliana BEX"
    >
      <div className="max-w-[1440px] mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-none tracking-wide mb-4">
            ON TRAVAILLE
            <br />
            <span className="text-fluo">ENSEMBLE&nbsp;?</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mt-16 grid md:grid-cols-2 gap-16 items-start">
          {/* Left — form ou CTA */}
          <div className="flex flex-col gap-6">
            <AnimatePresence mode="wait">
              {showForm ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <BriefForm onClose={() => setShowForm(false)} />
                </motion.div>
              ) : (
                <motion.div
                  key="cta"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <a
                      href={`mailto:${email}`}
                      className="font-body text-xl md:text-2xl text-blanc-casse hover:text-fluo transition-colors duration-200 break-all"
                    >
                      {email}
                    </a>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 w-fit px-5 py-2.5 border border-white/20 rounded-[8px] text-sm font-body text-blanc-casse/70 hover:border-fluo hover:text-fluo transition-all duration-200"
                  >
                    {copied ? (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Copié !
                      </>
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        Copier l&apos;email
                      </>
                    )}
                  </button>

                  <motion.button
                    onClick={() => setShowForm(true)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-2 inline-flex items-center justify-center gap-3 px-8 py-4 bg-fluo text-noir font-body font-bold text-base rounded-[8px] hover:shadow-[0_0_40px_rgba(212,255,0,0.3)] transition-shadow duration-300 w-full md:w-fit"
                  >
                    Envoyer un message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right — socials */}
          <div className="flex flex-col gap-6">
            <p className="text-gris-sombre text-sm font-body uppercase tracking-widest">
              Sur les réseaux
            </p>
            <ul className="flex flex-col gap-4" role="list">
              {socials.map(({ label, handle, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                    aria-label={`${label} — ${handle}`}
                  >
                    <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gris-sombre group-hover:border-fluo group-hover:text-fluo transition-all duration-200">
                      {icon}
                    </span>
                    <div>
                      <p className="font-body font-medium text-blanc-casse group-hover:text-fluo transition-colors duration-200">
                        {label}
                      </p>
                      <p className="font-body text-sm text-gris-sombre">{handle}</p>
                    </div>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="1.5"
                      className="ml-auto text-gris-sombre group-hover:text-fluo group-hover:translate-x-1 transition-all duration-200"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
