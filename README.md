# Portfolio Nelliana BEX

Portfolio de Nelliana BEX — Directrice artistique digitale, manager d'artistes, photographe et chargée de communication.

**Stack :** Next.js 14 App Router · TypeScript strict · Tailwind CSS · Framer Motion · GSAP · Lenis · Sanity CMS

---

## Installation locale

### Prérequis

- Node.js ≥ 18
- Un compte [Sanity.io](https://sanity.io) (gratuit, tier Free suffit)

### 1. Cloner et installer

```bash
git clone <repo-url> nelliana-portfolio
cd nelliana-portfolio
npm install --legacy-peer-deps
```

### 2. Configurer le CMS Sanity

1. Va sur [sanity.io/manage](https://sanity.io/manage) et crée un nouveau projet
2. Note ton **Project ID** et le **dataset** (par défaut : `production`)
3. Génère un token API : *Settings → API → Add API token* (rôle : Editor)

```bash
cp .env.local.example .env.local
```

Remplis `.env.local` :

```
NEXT_PUBLIC_SANITY_PROJECT_ID=ton-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=ton-token
```

### 3. Lancer en développement

```bash
node node_modules/next/dist/bin/next dev -p 3000
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000)
Le studio Sanity est accessible sur [http://localhost:3000/studio](http://localhost:3000/studio)

---

## Utilisation du CMS (sans être dev)

### Ouvrir le back office

Va sur `/studio` (ex : `https://nellianabex.fr/studio`) et connecte-toi avec ton compte Sanity.

---

### Ajouter un projet

1. Dans le studio, clique sur **"Projets créatifs"**
2. Clique sur **"+"** en haut à droite
3. Remplis les champs :
   - **Titre** : nom du projet (ex: "PLK — 2069'")
   - **Slug** : généré automatiquement depuis le titre, clique sur "Generate"
   - **Catégorie** : sélectionne dans la liste (Branding, Direction artistique, etc.)
   - **Sous-titre** : description courte (1 ligne)
   - **Couleur du ticket** : code hexadécimale de la couleur de la carte (ex: `#D44B4B`)
   - **Images** : glisse-dépose tes images ou clique pour uploader
   - **Lien Behance** : URL externe si le projet est publié ailleurs
   - **Projet mis en avant** : cocher si tu veux que ce projet soit plus visible
4. Clique sur **"Publish"** (en haut à droite, bouton vert)

Le projet apparaîtra sur le site en temps réel.

---

### Ajouter une photo de concert

1. Clique sur **"Galerie photo"**
2. Clique sur **"+"**
3. Remplis les champs :
   - **Photo** : upload l'image
   - **Description** : texte alternatif (ex: "Concert Khali - Paris 2024")
   - **Artiste** : nom de l'artiste photographié
   - **Événement** : nom du concert ou de l'événement
   - **Date** : date de la photo
   - **Ville** : ville de l'événement
4. Publie avec **"Publish"**

---

### Modifier le statut de disponibilité

1. Clique sur **"Paramètres du site"**
2. Active ou désactive **"Disponible pour de nouveaux projets ?"**
3. Publie — le badge vert sur le Hero se met à jour automatiquement

---

### Modifier les textes About

1. Clique sur **"Paramètres du site"**
2. Modifie **"Texte About — Page gauche"** et **"Texte About — Page droite"**
3. Publie

---

## Déploiement sur Vercel (recommandé)

### 1. Pousser sur GitHub

```bash
git init
git add .
git commit -m "init: portfolio Nelliana BEX"
git remote add origin https://github.com/ton-compte/nelliana-portfolio.git
git push -u origin main
```

### 2. Importer sur Vercel

1. Va sur [vercel.com/new](https://vercel.com/new)
2. Importe ton repo GitHub
3. Vercel détecte automatiquement Next.js, garde les paramètres par défaut
4. Ajoute les **variables d'environnement** :
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`
5. Clique sur **"Deploy"**

### 3. Configurer le domaine

Dans Vercel → *Settings → Domains*, ajoute `nellianabex.fr` et suis les instructions DNS.

### 4. Activer le CORS pour Sanity

Sur [sanity.io/manage](https://sanity.io/manage) → ton projet → *API → CORS Origins* :

- Ajoute `https://nellianabex.fr`
- Ajoute `https://nellianabex.fr/studio`
- Cocher "Allow credentials"

---

## Structure des fichiers

```
/
├── app/
│   ├── page.tsx              ← Homepage (assemble toutes les sections)
│   ├── layout.tsx            ← Layout global (fonts, Nav, Footer)
│   ├── globals.css           ← Variables CSS + grain film + animations
│   ├── projets/[slug]/       ← Page projet individuelle
│   ├── studio/[[...tool]]/   ← Sanity Studio (back office)
│   ├── sitemap.ts            ← Sitemap XML automatique
│   └── robots.ts             ← Robots.txt
├── components/
│   ├── ui/
│   │   ├── CustomCursor.tsx  ← Curseur custom jaune fluo
│   │   ├── SmoothScroll.tsx  ← Lenis smooth scroll
│   │   ├── Ticker.tsx        ← Bande défilante
│   │   └── AnimatedSection.tsx ← Fade + slide au scroll
│   ├── sections/
│   │   ├── Hero.tsx          ← Section principale avec animations
│   │   ├── About.tsx         ← Carnet journal
│   │   ├── Photographie.tsx  ← Galerie horizontale
│   │   ├── Projets.tsx       ← Tickets filtrables
│   │   ├── Contact.tsx       ← Section contact
│   │   └── ProjectDetail.tsx ← Page projet
│   └── layout/
│       ├── Nav.tsx           ← Navigation fixe + mobile
│       └── Footer.tsx        ← Pied de page
├── lib/
│   ├── projects.ts           ← Données projets (statique / à connecter à Sanity)
│   └── sanity.ts             ← Client Sanity + queries GROQ
├── sanity/
│   └── schemas/              ← Schémas CMS (projet, photo, paramètres)
├── STACK_DECISION.md         ← Décision de stack documentée
└── .env.local.example        ← Template variables d'environnement
```

---

## Palette de couleurs

| Nom | Hex | Usage |
|---|---|---|
| Jaune fluo | `#D4FF00` | Accent principal, CTA, "BEX", filtres actifs |
| Noir profond | `#0A0A0A` | Fond global |
| Blanc cassé | `#F5F5F0` | Texte principal |
| Gris sombre | `#6B6B6B` | Texte secondaire, labels |
| Gris surface | `#141414` | Fond sections alternées |

---

## Fonts

- **Bebas Neue** — Titres display (class: `font-display`)
- **Inter** — Corps de texte (class: `font-body`)
- **Caveat** — Texte handwritten section About (class: `font-handwritten`)
