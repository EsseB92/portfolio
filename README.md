# Portfolio — Bertrand Sudre (Erdus)

Portfolio de développeur web freelance construit avec **Next.js 16**, **React 19**, **TypeScript** et **Tailwind CSS 4**.

## Démarrage

```bash
npm install
npm run dev    # développement → http://localhost:3000
npm run build  # build de production
npm run start  # serveur de production
npm run lint   # ESLint
```

## Modifier le contenu

Tout le contenu (identité, services, compétences, expériences, projets, FAQ, liens) est centralisé dans **`src/lib/data.ts`**. Modifier ce fichier met à jour le site, les métadonnées SEO et les données structurées en même temps.

L'URL canonique du site est définie par `SITE_URL` dans ce même fichier.

## Architecture

| Fichier | Rôle |
|---|---|
| `src/lib/data.ts` | Source unique de vérité du contenu |
| `src/app/layout.tsx` | Métadonnées SEO, Open Graph, JSON-LD (Person, WebSite, ProfilePage) |
| `src/app/page.tsx` | Page d'accueil (héro, services, compétences, parcours, projets, FAQ, contact) + JSON-LD FAQPage |
| `src/app/opengraph-image.tsx` | Image Open Graph générée au build |
| `src/app/sitemap.ts`, `robots.ts`, `manifest.ts` | Fichiers SEO générés par Next |
| `src/app/actions.ts` | Server Action du formulaire de contact (validation, honeypot, rate-limit, envoi Resend) |
| `src/components/ContactForm.tsx` | Formulaire de contact accessible (fonctionne aussi sans JavaScript) |
| `src/proxy.ts` | CSP stricte avec nonce unique par requête |
| `next.config.ts` | En-têtes de sécurité statiques (HSTS, X-Frame-Options, Permissions-Policy…) |
| `public/llms.txt` | Résumé structuré pour les moteurs IA (GEO) |

## Sécurité

- **CSP stricte** : `script-src 'self' 'nonce-…' 'strict-dynamic'` — un nonce unique est généré à chaque requête dans `src/proxy.ts`, ce qui impose le rendu dynamique de la page (lecture de `headers()` dans le layout). Aucun script inline non signé ne peut s'exécuter.
- HSTS (préchargeable), `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`, COOP/CORP.
- `X-Powered-By` désactivé, dépendances auditées (0 vulnérabilité, override `postcss` en place).
- **Formulaire de contact** : validation serveur stricte, champ honeypot anti-bots (faux succès renvoyé), rate-limit 3 messages / 10 min par IP, e-mail en texte brut (aucune injection d'en-tête ou de HTML possible).

## Formulaire de contact

L'envoi passe par [Resend](https://resend.com). Copier `.env.example` vers `.env.local` et renseigner :

- `RESEND_API_KEY` (obligatoire pour l'envoi ; sans la clé, le formulaire invite à écrire directement par e-mail)
- `CONTACT_EMAIL` : adresse de réception (défaut : `identity.email` de `src/lib/data.ts`)
- `CONTACT_FROM` : expéditeur (nécessite un domaine vérifié chez Resend ; défaut : `onboarding@resend.dev`)

Le formulaire fonctionne sans JavaScript (progressive enhancement des Server Actions). Le rate-limit est en mémoire : suffisant sur une instance unique (Vercel/VPS), à remplacer par un store partagé (Upstash, Redis) en cas de déploiement multi-instances.

## SEO & GEO

- Métadonnées complètes (title template, canonical, Open Graph, Twitter Card, robots).
- Données structurées schema.org : `Person`, `WebSite`, `ProfilePage`, `FAQPage`.
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, image OG générée au build.
- `llms.txt` pour les moteurs de réponse IA (ChatGPT, Claude, Perplexity…).

## Accessibilité

- Lien d'évitement, landmarks sémantiques, hiérarchie de titres stricte, contrastes AA.
- `prefers-reduced-motion` respecté (animations désactivées), `prefers-color-scheme` (thème clair/sombre automatique, sans JavaScript).
- Contenu intégralement visible sans JavaScript (les animations de scroll ne s'activent que si JS est présent).

## Déploiement

Le site nécessite un hébergement Node.js (Vercel, Netlify, VPS…) car la CSP à nonce impose un rendu dynamique. Sur Vercel : pousser le dépôt et importer le projet, aucune configuration supplémentaire.
