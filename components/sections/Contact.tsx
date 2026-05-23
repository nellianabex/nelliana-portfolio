"use client";

import { useState, useEffect } from "react";
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
  { value: "logo-identite", label: "Logo / Identité" },
  { value: "direction-artistique", label: "Direction artistique" },
  { value: "photographie", label: "Photographie" },
  { value: "communication", label: "Communication" },
  { value: "management", label: "Management d'artistes" },
  { value: "autre", label: "Autre" },
];

const usages = [
  { value: "reseaux", label: "Réseaux sociaux" },
  { value: "video", label: "Vidéo / Motion" },
  { value: "print", label: "Print / Affiches" },
  { value: "watermark", label: "Watermark" },
  { value: "web", label: "Site web" },
  { value: "identite-complete", label: "Identité complète" },
];

const budgets = [
  { value: "moins-500", label: "< 500€" },
  { value: "500-1500", label: "500 – 1 500€" },
  { value: "1500-3000", label: "1 500 – 3 000€" },
  { value: "plus-3000", label: "+ 3 000€" },
  { value: "a-discuter", label: "À discuter" },
];

const timelines = [
  { value: "urgent", label: "Urgent (< 2 sem.)" },
  { value: "1mois", label: "Dans 1 mois" },
  { value: "2-3mois", label: "2 – 3 mois" },
  { value: "pas-presse", label: "Pas pressé(e)" },
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
  nomProjet: string;
  type: string;
  livrable: string;
  usages: string[];
  contexte: string;
  cible: string;
  ambiance: string;
  references: string;
  aEviter: string;
  existants: string;
  budget: string;
  timeline: string;
  decouverte: string;
}

const initialForm: FormData = {
  prenom: "",
  nomProjet: "",
  type: "",
  livrable: "",
  usages: [],
  contexte: "",
  cible: "",
  ambiance: "",
  references: "",
  aEviter: "",
  existants: "",
  budget: "",
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

function MultiChipSelect({
  options,
  value,
  onChange,
}: {
  options: { value: string; label: string }[];
  value: string[];
  onChange: (v: string[]) => void;
}) {
  const toggle = (v: string) =>
    onChange(value.includes(v) ? value.filter((x) => x !== v) : [...value, v]);
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => toggle(opt.value)}
          className={`px-4 py-2 rounded-[8px] text-sm font-body transition-all duration-200 ${
            value.includes(opt.value)
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

const STEPS = [
  { id: 1, label: "Le projet" },
  { id: 2, label: "Direction artistique" },
  { id: 3, label: "Logistique" },
];

function FieldLabel({ children, optional }: { children: React.ReactNode; optional?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-body uppercase tracking-widest text-gris-sombre">{children}</span>
      {optional && (
        <span className="text-[10px] font-body text-gris-sombre/40 normal-case tracking-normal">optionnel</span>
      )}
    </div>
  );
}

function FieldHint({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-body text-gris-sombre/50 -mt-1">{children}</p>;
}

function BriefForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof FormData, val: string | string[]) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: false }));
  };

  const validateStep = (s: number) => {
    const newErrors: Partial<Record<keyof FormData, boolean>> = {};
    if (s === 1) {
      if (!form.prenom.trim()) newErrors.prenom = true;
      if (!form.nomProjet.trim()) newErrors.nomProjet = true;
      if (!form.type) newErrors.type = true;
      if (!form.livrable.trim()) newErrors.livrable = true;
    }
    if (s === 2) {
      if (!form.contexte.trim()) newErrors.contexte = true;
      if (!form.ambiance.trim()) newErrors.ambiance = true;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goNext = () => {
    if (validateStep(step)) setStep((s) => s + 1);
  };

  const goBack = () => setStep((s) => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(step)) return;
    const usageLabels = form.usages
      .map((u) => usages.find((o) => o.value === u)?.label)
      .filter(Boolean)
      .join(", ");
    const subject = `Brief ${form.nomProjet || "collaboration"}${form.prenom ? ` — ${form.prenom}` : ""}`;
    const body = [
      `Bonjour Nelliana,`,
      ``,
      `Je m'appelle ${form.prenom}.`,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `  PROJET / ARTISTE / MARQUE`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      form.nomProjet,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `  TYPE DE PRESTATION`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      typesProjet.find((t) => t.value === form.type)?.label || "Non précisé",
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `  LIVRABLE ATTENDU`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      form.livrable,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `  FORMATS / USAGES`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      usageLabels || "Non précisés",
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `  CONTEXTE CLIENT`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      form.contexte,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `  CIBLE`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      form.cible || "Non précisée",
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `  DIRECTION ARTISTIQUE / AMBIANCE`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      form.ambiance,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `  RÉFÉRENCES (ce qui inspire)`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      form.references || "Aucune référence fournie",
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `  CE QU'IL FAUT ABSOLUMENT ÉVITER`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      form.aEviter || "Rien de spécifié",
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `  ÉLÉMENTS EXISTANTS / CONTRAINTES`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      form.existants || "Aucun",
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `  BUDGET`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      budgets.find((b) => b.value === form.budget)?.label || "Non précisé",
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `  TIMELINE`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      timelines.find((t) => t.value === form.timeline)?.label || "Non précisée",
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `  COMMENT TU M'AS TROUVÉE`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      decouverte.find((d) => d.value === form.decouverte)?.label || "Non précisé",
    ].join("\n");

    window.location.href = `mailto:${getEmail()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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

  const inputClass = (error?: boolean) =>
    `bg-transparent border-b pb-2 text-blanc-casse font-body text-base outline-none placeholder:text-gris-sombre/50 transition-colors duration-200 ${
      error ? "border-red-500/60" : "border-white/15 focus:border-fluo"
    }`;

  const textareaClass = (error?: boolean) =>
    `bg-transparent border-b pb-2 text-blanc-casse font-body text-sm outline-none placeholder:text-gris-sombre/50 resize-none transition-colors duration-200 leading-relaxed ${
      error ? "border-red-500/60" : "border-white/15 focus:border-fluo"
    }`;

  return (
    <div className="flex flex-col gap-6">
      {/* Progress */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            {STEPS.map((s) => (
              <span
                key={s.id}
                className={`text-[10px] font-body uppercase tracking-widest transition-colors duration-200 ${
                  s.id === step ? "text-fluo" : s.id < step ? "text-blanc-casse/40" : "text-white/15"
                }`}
              >
                {s.label}
              </span>
            ))}
          </div>
          <span className="text-[10px] font-body text-gris-sombre/50">{step} / {STEPS.length}</span>
        </div>
        <div className="h-px bg-white/10 relative">
          <motion.div
            className="absolute inset-y-0 left-0 bg-fluo"
            animate={{ width: `${(step / STEPS.length) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.form
            key="step1"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25 }}
            onSubmit={(e) => { e.preventDefault(); goNext(); }}
            className="flex flex-col gap-7"
          >
            <div className="flex flex-col gap-2">
              <FieldLabel>Ton prénom ou nom de scène</FieldLabel>
              <input
                type="text"
                autoFocus
                value={form.prenom}
                onChange={(e) => set("prenom", e.target.value)}
                placeholder="Comment tu t'appelles ?"
                className={inputClass(errors.prenom)}
              />
              {errors.prenom && <span className="text-[11px] text-red-400 font-body">Obligatoire</span>}
            </div>

            <div className="flex flex-col gap-2">
              <FieldLabel>Nom du projet / artiste / marque</FieldLabel>
              <FieldHint>Le nom exact tel qu&apos;il apparaîtra dans le livrable.</FieldHint>
              <input
                type="text"
                value={form.nomProjet}
                onChange={(e) => set("nomProjet", e.target.value)}
                placeholder="Ex : MATRIXÉ.E, @rap.express_, Studio Kali…"
                className={inputClass(errors.nomProjet)}
              />
              {errors.nomProjet && <span className="text-[11px] text-red-400 font-body">Obligatoire</span>}
            </div>

            <div className="flex flex-col gap-3">
              <FieldLabel>Type de prestation</FieldLabel>
              <ChipSelect options={typesProjet} value={form.type} onChange={(v) => set("type", v)} />
              {errors.type && <span className="text-[11px] text-red-400 font-body">Choisis une option</span>}
            </div>

            <div className="flex flex-col gap-2">
              <FieldLabel>Ce que tu attends concrètement</FieldLabel>
              <FieldHint>Logo, moodboard, shooting de 2h, kit réseaux, identité complète… Sois précis(e).</FieldHint>
              <textarea
                value={form.livrable}
                onChange={(e) => set("livrable", e.target.value)}
                placeholder={`Ex : "Un logo watermark pour mes templates Insta et mes habillages vidéo. Pas de refonte des templates existants."`}
                rows={3}
                className={textareaClass(errors.livrable)}
              />
              {errors.livrable && <span className="text-[11px] text-red-400 font-body">Obligatoire</span>}
            </div>

            <div className="flex flex-col gap-3">
              <FieldLabel optional>Où sera utilisé le résultat ?</FieldLabel>
              <FieldHint>Plusieurs choix possibles.</FieldHint>
              <MultiChipSelect options={usages} value={form.usages} onChange={(v) => set("usages", v)} />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={onClose}
                className="text-xs font-body text-gris-sombre hover:text-blanc-casse transition-colors"
              >
                Annuler
              </button>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 bg-fluo text-noir font-body font-bold text-sm rounded-[8px]"
              >
                Suivant
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.button>
            </div>
          </motion.form>
        )}

        {step === 2 && (
          <motion.form
            key="step2"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25 }}
            onSubmit={(e) => { e.preventDefault(); goNext(); }}
            className="flex flex-col gap-7"
          >
            <div className="flex flex-col gap-2">
              <FieldLabel>Ton contexte</FieldLabel>
              <FieldHint>Qui tu es, d&apos;où vient le projet, son histoire, son positionnement.</FieldHint>
              <textarea
                value={form.contexte}
                autoFocus
                onChange={(e) => set("contexte", e.target.value)}
                placeholder={`Ex : "Je suis rappeur parisien, 3e projet solo. Mon univers : introspection, rue, nuit. Je sors ça en indé."`}
                rows={3}
                className={textareaClass(errors.contexte)}
              />
              {errors.contexte && <span className="text-[11px] text-red-400 font-body">Obligatoire</span>}
            </div>

            <div className="flex flex-col gap-2">
              <FieldLabel optional>C&apos;est pour qui ?</FieldLabel>
              <FieldHint>Âge, univers, ce qu&apos;ils écoutent, ce qu&apos;ils consomment.</FieldHint>
              <textarea
                value={form.cible}
                onChange={(e) => set("cible", e.target.value)}
                placeholder={`Ex : "18-28 ans, connaisseurs du rap FR, abonnés Clique et Booska-P, actifs sur Insta et YouTube."`}
                rows={2}
                className={textareaClass()}
              />
            </div>

            <div className="flex flex-col gap-2">
              <FieldLabel>Direction artistique : l&apos;ambiance</FieldLabel>
              <FieldHint>3 mots ou adjectifs. Ce que tu veux que les gens ressentent.</FieldHint>
              <input
                type="text"
                value={form.ambiance}
                onChange={(e) => set("ambiance", e.target.value)}
                placeholder="Ex : sobre, brut, épuré, authentique avant aesthetic"
                className={inputClass(errors.ambiance)}
              />
              {errors.ambiance && <span className="text-[11px] text-red-400 font-body">Obligatoire</span>}
            </div>

            <div className="flex flex-col gap-2">
              <FieldLabel optional>Références qui t&apos;inspirent</FieldLabel>
              <FieldHint>Artistes, logos, comptes, clips, covers. Pour chaque ref, dis pourquoi elle te parle.</FieldHint>
              <textarea
                value={form.references}
                onChange={(e) => set("references", e.target.value)}
                placeholder={`Ex : "Logo Clique (typo forte, lisibilité max), Midi/Minuit (sobre, sans icône), @photo (lumière nat., intimité)."`}
                rows={3}
                className={textareaClass()}
              />
            </div>

            <div className="flex flex-col gap-2">
              <FieldLabel optional>Ce qu&apos;il faut absolument éviter</FieldLabel>
              <FieldHint>Styles, couleurs, directions : tout ce qui ne te ressemble pas.</FieldHint>
              <textarea
                value={form.aEviter}
                onChange={(e) => set("aEviter", e.target.value)}
                placeholder={`Ex : "Rien de trop rond, pas de dégradés, éviter le style générique Canva."`}
                rows={2}
                className={textareaClass()}
              />
            </div>

            <div className="flex flex-col gap-2">
              <FieldLabel optional>Éléments existants à respecter</FieldLabel>
              <FieldHint>Charte couleur, palette, templates, logo, police. Laisse vide si rien.</FieldHint>
              <textarea
                value={form.existants}
                onChange={(e) => set("existants", e.target.value)}
                placeholder={`Ex : "Templates Insta en noir/jaune, Bebas Neue en place. Le logo doit s'intégrer sans refonte."`}
                rows={2}
                className={textareaClass()}
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={goBack}
                className="text-xs font-body text-gris-sombre hover:text-blanc-casse transition-colors flex items-center gap-1"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                </svg>
                Retour
              </button>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 bg-fluo text-noir font-body font-bold text-sm rounded-[8px]"
              >
                Suivant
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.button>
            </div>
          </motion.form>
        )}

        {step === 3 && (
          <motion.form
            key="step3"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-7"
          >
            <div className="flex flex-col gap-3">
              <FieldLabel optional>Budget approximatif</FieldLabel>
              <ChipSelect options={budgets} value={form.budget} onChange={(v) => set("budget", v)} />
            </div>

            <div className="flex flex-col gap-3">
              <FieldLabel optional>Timeline</FieldLabel>
              <ChipSelect options={timelines} value={form.timeline} onChange={(v) => set("timeline", v)} />
            </div>

            <div className="flex flex-col gap-3">
              <FieldLabel optional>Comment tu m&apos;as trouvée ?</FieldLabel>
              <ChipSelect options={decouverte} value={form.decouverte} onChange={(v) => set("decouverte", v)} />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={goBack}
                className="text-xs font-body text-gris-sombre hover:text-blanc-casse transition-colors flex items-center gap-1"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                </svg>
                Retour
              </button>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-4 bg-fluo text-noir font-body font-bold text-base rounded-[8px] hover:shadow-[0_0_40px_rgba(212,255,0,0.25)] transition-shadow duration-300"
              >
                Envoyer mon brief
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

// Email assemblé côté client uniquement — jamais dans le HTML statique
const getEmail = () => ["contact", "nellianabex.fr"].join("@");

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleCopyEmail = async () => {
    const text = getEmail();
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback : textarea temporaire
      const el = document.createElement("textarea");
      el.value = text;
      el.style.cssText = "position:fixed;top:-9999px;left:-9999px;opacity:0";
      document.body.appendChild(el);
      el.focus();
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
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
                  {mounted && (
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
                  )}

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
