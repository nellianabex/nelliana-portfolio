"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

export default function Contact() {
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

        <AnimatedSection delay={0.15} className="mt-16 grid md:grid-cols-2 gap-16">
          {/* Email */}
          <div className="flex flex-col gap-6">
            <p className="text-gris-sombre text-sm font-body uppercase tracking-widest">
              Par email
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${email}`}
                className="font-body text-xl md:text-2xl text-blanc-casse hover:text-fluo transition-colors duration-200 break-all"
                aria-label={`Envoyer un email à ${email}`}
              >
                {email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 w-fit px-5 py-2.5 border border-white/20 rounded-full text-sm font-body text-blanc-casse/70 hover:border-fluo hover:text-fluo transition-all duration-200"
                aria-label="Copier l'adresse email"
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
            </div>

            {/* CTA button */}
            <motion.a
              href={`mailto:${email}?subject=Collaboration - Nelliana BEX`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-4 inline-flex items-center justify-center gap-3 px-8 py-4 bg-fluo text-noir font-body font-bold text-base rounded-full hover:shadow-[0_0_40px_rgba(212,255,0,0.3)] transition-shadow duration-300 w-full md:w-fit"
              aria-label="Envoyer un message à Nelliana BEX"
            >
              Envoyer un message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.a>
          </div>

          {/* Socials */}
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
