# Stack Decision — Portfolio Nelliana BEX

**Date :** 2026-05-19  
**Décision :** Next.js 14 App Router + TypeScript + Sanity.io

---

## Tableau de scoring pondéré

| Critère (poids) | Next.js 14 + Sanity | Astro 4 + Keystatic | Remix + Contentful | Nuxt 3 + Directus |
|---|---|---|---|---|
| **Animations fluides/complexes (30%)** | 9.5 → **28.5** | 7.0 → **21.0** | 8.5 → **25.5** | 8.0 → **24.0** |
| **Galerie projets interactive (20%)** | 9.5 → **19.0** | 7.5 → **15.0** | 8.5 → **17.0** | 8.0 → **16.0** |
| **Back office non-dev (20%)** | 9.5 → **19.0** | 7.0 → **14.0** | 7.5 → **15.0** | 8.0 → **16.0** |
| **Performance & SEO (15%)** | 8.0 → **12.0** | 9.5 → **14.25** | 8.5 → **12.75** | 8.5 → **12.75** |
| **DX & vitesse de build (15%)** | 9.5 → **14.25** | 8.0 → **12.0** | 8.5 → **12.75** | 8.0 → **12.0** |
| **TOTAL /100** | **92.75** ✅ | 76.25 | 83.00 | 80.75 |

---

## Recommandation

**Stack choisie : Next.js 14 App Router + TypeScript + Sanity.io**

Score : 92.75/100 — plus de 9 points d'écart sur le 2ème. La règle de préférence cliente (Next.js si ≤ 5pts du gagnant) est moot car il gagne sur le mérite.

### Justification

1. **Animations (raison principale)** : Framer Motion est natif React, GSAP s'intègre proprement via `useGSAP`, ScrollTrigger et Lenis ont des patterns Next.js matures. La galerie horizontale, le curseur custom avec lerp, et le spring physique de la carte accréditation sont tous en première classe.

2. **Back office** : Sanity Studio est le gold standard pour les éditeurs non-dev — UI visuelle propre, hot preview, drag & drop images, labels en français, accès via `/studio`. Gratuit jusqu'à 3 utilisateurs, largement suffisant pour ce projet.

3. **Écosystème** : La combinaison Next.js + Sanity concentre l'essentiel des ressources, plugins et patterns pour ce type de portfolio créatif (scroll animations, galeries masonry, cursor custom).

### CMS : Sanity.io (vs Payload CMS)

Sanity est retenu plutôt que Payload pour :
- Studio éditorial plus mature et agréable
- Portable Text pour le contenu mixte (journal, polaroids, captions)
- CDN image natif avec transformations à la volée
- Zero infrastructure à gérer (SaaS)

---

## Stack finale

| Composant | Choix | Version |
|---|---|---|
| Framework | Next.js App Router | 14.x |
| Language | TypeScript | strict |
| Styles | Tailwind CSS | v3 |
| Animations | Framer Motion + GSAP | latest |
| Scroll | Lenis (smooth scroll) | latest |
| CMS | Sanity.io | v3 |
| Fonts | Bebas Neue + Inter + Caveat | via next/font |
| Images | next/image + Sanity image CDN | — |
| Déploiement | Vercel | — |
