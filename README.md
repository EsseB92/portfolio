# Portfolio — Bertrand Sudre (Erdus)

Portfolio et vitrine de services construit avec **Next.js 16**, **React 19**,
**TypeScript** et **Tailwind CSS 4**, exporté en statique et hébergé sur
Hostinger.

## Démarrage

```bash
npm install
npm run dev    # développement → http://localhost:3000
npm run build  # export statique dans out/
npm run lint   # ESLint
```

## Pages

| FR                                 | EN                                        | Piste  |
| ---------------------------------- | ----------------------------------------- | ------ |
| `/`                                | `/en/`                                    | socle  |
| `/services/`                       | `/en/services/`                           | hub    |
| `/services/creation-site-web/`     | `/en/services/web-development/`           | pro    |
| `/services/gestion-projet-digital/`| `/en/services/digital-project-management/`| pro    |
| `/services/dev-streaming/`         | `/en/services/streaming-development/`     | gaming |
| `/services/conseil-montage-pc/`    | `/en/services/custom-pc-building/`        | gaming |
| `/projets/erdus-games/`            | `/en/projects/erdus-games/`               | projet |
| `/projets/cadence/`                | `/en/projects/cadence/`                   | projet |
| `/projets/carnet/`                 | `/en/projects/carnet/`                    | projet |

Chaque page déclare un canonical auto-référent et des hreflang `fr`, `en`,
`x-default`. Le sitemap reprend ces alternates.

## Modifier le contenu

- **Données neutres** (identité, liens, technos) : `src/lib/data.ts`.
- **Textes** : `src/content/fr/` et `src/content/en/` (home, hub, pistes,
  interface, une fiche par offre dans `services/`).
- **Pages projet** : textes dans `src/content/{fr,en}/projects/`, données neutres
  (site public, offre associée, vidéo, type schema.org) dans `src/lib/projects.ts`.
- **Catalogue des offres** (piste, icône, offre complémentaire, slug de
  réservation) : `src/lib/services.ts`.
- **Routes et slugs traduits** : `src/lib/i18n.ts`.
- **Métadonnées et JSON-LD** : `src/lib/seo.ts`.

## Deux directions artistiques

Les tokens du socle sont déclarés dans `:root` de `src/app/globals.css`.
Chaque piste n'override qu'un sous-ensemble via `[data-track="pro"]` et
`[data-track="gaming"]`, posés par les layouts de segment
`src/app/(fr)/services/(pro)/layout.tsx` et `(gaming)/layout.tsx` (idem en EN)
et par les cartes de la section `#pistes` de la home. Header, footer, grille et
espacements sont identiques sur les deux pistes.

## Architecture

| Fichier                                | Rôle                                                        |
| -------------------------------------- | ----------------------------------------------------------- |
| `src/app/(fr)/layout.tsx`, `(en)/layout.tsx` | Root layouts par langue (`<html lang>`), via `RootShell` |
| `src/components/RootShell.tsx`         | Header, footer, révélation au scroll, JSON-LD @graph        |
| `src/components/HomePage.tsx`          | Page d'accueil (héro, pistes, méthode, compétences, parcours, projets, FAQ, contact) |
| `src/components/HubPage.tsx`           | Hub `/services` : quatre offres en deux groupes             |
| `src/components/ServicePage.tsx`       | Gabarit des pages service                                   |
| `src/components/ProjectPage.tsx`       | Gabarit des pages projet (Erdus Games, Cadence, Carnet)     |
| `src/components/SiteLinks.tsx`         | Liens Portfolio / Jeux / Réserver, autonome et réutilisable |
| `src/components/ContactForm.tsx`       | Formulaire de contact (Web3Forms, fonctionne sans JS)       |
| `src/app/og/*.png/route.tsx`           | Images Open Graph (home, pro, gaming) générées au build     |
| `src/app/global-not-found.tsx`         | 404 bilingue                                                |
| `src/app/sitemap.ts`, `robots.ts`, `manifest.ts` | Fichiers SEO générés par Next                     |
| `public/.htaccess`                     | HTTPS, www → apex, 404, en-têtes de sécurité, cache, compression |
| `.github/workflows/deploy.yml`         | Build + déploiement FTPS vers Hostinger sur push `main`     |
| `docs/hostinger.md`                    | Configuration hPanel et secrets GitHub                      |
| `public/llms.txt`                      | Résumé structuré pour les moteurs IA (GEO)                  |

## Formulaire de contact

L'envoi passe par [Web3Forms](https://web3forms.com) : le navigateur poste
directement vers leur API (aucune route Next, compatible export statique).
Copier `.env.example` vers `.env.local` et renseigner `NEXT_PUBLIC_WEB3FORMS_KEY`.
Sans clé, le formulaire invite à écrire directement par e-mail. Un champ
honeypot (`botcheck`) filtre les robots.

## SEO & GEO

- Métadonnées complètes par page : title, description, canonical, hreflang,
  Open Graph, Twitter Card, robots.
- Données structurées schema.org : `Person`, `WebSite`, `ProfilePage`,
  `ProfessionalService` (commun) ; `ItemList` + `FAQPage` (home) ;
  `Service` + `BreadcrumbList` + `FAQPage` (pages service) ; `BreadcrumbList` +
  `WebApplication` ou `MobileApplication` (pages projet).
- `sitemap.xml` avec hreflang et `lastmod` lus dans git, `robots.txt`,
  `manifest.webmanifest`, `llms.txt`.

## Accessibilité et mouvement

- Lien d'évitement, landmarks, un seul h1 par page, hiérarchie h2/h3 stricte,
  contrastes AA (accents lime et magenta réservés aux éléments non textuels).
- `prefers-reduced-motion` respecté : révélations, compteurs, dégradé mouvant et
  barre de progression désactivés. Contenu intégralement visible sans JavaScript.

## Sécurité

Export statique : la CSP est servie par le `.htaccess`. Sans nonce par requête,
`script-src` autorise `'unsafe-inline'` (scripts inline de Next et JSON-LD) ;
`object-src 'none'`, `base-uri 'self'`, `frame-ancestors 'none'` et les autres
en-têtes (HSTS, `X-Content-Type-Options`, `Referrer-Policy`,
`Permissions-Policy`, COOP/CORP) restent stricts.

## Mesure d'audience

[GoatCounter](https://erdus.goatcounter.com), sans cookie. Le script et le
comptage des navigations client sont dans `src/components/Analytics.tsx`. La CSP
autorise `gc.zgo.at` en `script-src` et `erdus.goatcounter.com` en
`connect-src` et `img-src`. Les sous-domaines ont leurs propres sites
GoatCounter (`erdus-game`, `erdus-note`) dans le même compte.

## Déploiement

Voir `docs/hostinger.md`.
