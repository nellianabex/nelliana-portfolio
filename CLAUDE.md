# Nelliana BEX Portfolio — Instructions Claude Code

## SEO Content Engine

Le moteur SEO est dans `.seo-engine/`. À utiliser pour tous les articles et tâches SEO.

**RÈGLE UNIVERSELLE : Pour toute tâche impliquant des articles, du contenu, du SEO, des mots-clés, des concurrents — toujours lire `.seo-engine/config.yaml` et les fichiers data pertinents EN PREMIER.**

### Référence des fichiers

| Fichier | Rôle | Quand |
|---------|------|-------|
| `config.yaml` | Config, auteur, signaux de confiance | Avant toute tâche |
| `data/features.yaml` | Services de Nelliana | Avant rédaction |
| `data/competitors.yaml` | Matrice concurrents | Avant comparaisons |
| `data/seo-keywords.csv` | Mots-clés + données SERP | Avant choisir un sujet |
| `data/content-map.yaml` | Articles publiés | Avant rédaction |
| `data/content-queue.yaml` | File de rédaction priorisée | Pour choisir quoi écrire |
| `data/topic-clusters.yaml` | Architecture pillar/cluster | Avant rédaction |
| `templates/tone-guide.md` | Voix et règles éditoriales | Avant toute rédaction |
| `templates/blog-frontmatter.yaml` | Format frontmatter | Lors de la génération |
| `logs/changelog.md` | Journal des actions | Après chaque action |

### Règles fondamentales

1. **Lire avant d'écrire.** Toujours : config, features, content-map, queue, clusters, tone-guide.
2. **Ne jamais inventer des métriques ou services.** Uniquement ce qui est dans features.yaml.
3. **Claims sur les concurrents = confidence requise.** Si "unverified" → caveat ou lien vers leur page.
4. **Pas de web search pour les données SERP.** Toujours demander à l'utilisateur les vrais résultats Google.
5. **Check cannibalisation avant chaque article.** Scanner content-map pour les mots-clés overlappants.
6. **Angle unique requis.** "Plus complet" n'est pas un angle.
7. **E-E-A-T obligatoire.** Témoignage, métrique, expérience, ou lien GMB dans chaque article.
8. **Human review requis.** Sauvegarder les articles en `draft: true`. Ne jamais auto-publier.
9. **Mettre à jour tous les fichiers après rédaction** : content-map, features, keywords, queue, clusters, changelog.
10. **Log tout** dans changelog.md.
