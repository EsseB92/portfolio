/**
 * Source unique de vérité pour tout le contenu du portfolio.
 * Modifier ce fichier suffit à mettre à jour le site, le SEO et les données structurées.
 */

export const SITE_URL = "https://erdus.fr";

export const identity = {
  name: "Bertrand Sudre",
  brand: "Erdus",
  jobTitle: "Développeur Web Freelance",
  tagline:
    "Je conçois des sites et applications web sur mesure : rapides, sécurisés, accessibles et optimisés pour le référencement.",
  description:
    "Bertrand Sudre, développeur web freelance en Île-de-France (Bois-Colombes). Création de sites et d'applications sur mesure avec Next.js, React, TypeScript, Symfony et WordPress. Spécialisé en SEO, performance web, sécurité et accessibilité.",
  location: "Bois-Colombes, Île-de-France",
  locality: "Bois-Colombes",
  region: "Île-de-France",
  country: "FR",
  email: "sudrebertrand@gmail.com",
  availability: "Disponible pour de nouveaux projets",
} as const;

export const links = {
  github: "https://github.com/EsseB92",
  linkedin: "https://www.linkedin.com/in/bertrand-sudre/",
  malt: "https://www.malt.fr/profile/bertrandsudre",
} as const;

export const services = [
  {
    title: "Développement sur mesure",
    description:
      "Sites vitrines, e-commerce et applications web conçus de A à Z, du cahier des charges au déploiement, avec un code maintenable et évolutif.",
    icon: "code",
  },
  {
    title: "SEO & visibilité",
    description:
      "Optimisation on-page, contenu structuré, données enrichies et amélioration technique pour un référencement durable sur les moteurs de recherche et les IA.",
    icon: "search",
  },
  {
    title: "Performance web",
    description:
      "Temps de chargement minimaux, Core Web Vitals au vert et scores PageSpeed optimisés pour une expérience fluide sur tous les appareils.",
    icon: "zap",
  },
  {
    title: "Sécurité",
    description:
      "Protocoles avancés, en-têtes de sécurité, pare-feu applicatifs et certificats SSL pour protéger vos données et celles de vos utilisateurs.",
    icon: "shield",
  },
  {
    title: "Responsive & accessibilité",
    description:
      "Interfaces adaptées à tous les écrans et conformes aux standards d'accessibilité (RGAA / WCAG), pour ne laisser aucun utilisateur de côté.",
    icon: "devices",
  },
  {
    title: "Automatisation & IA",
    description:
      "Workflows automatisés avec n8n et Make, intégration d'IA dans vos outils métier pour gagner du temps sur les tâches répétitives.",
    icon: "bot",
  },
] as const;

export const skills = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    category: "Backend & CMS",
    items: ["PHP", "Symfony", "Twig", "WordPress", "Elementor"],
  },
  {
    category: "Outils",
    items: ["Docker", "GitHub", "Figma", "Notion"],
  },
  {
    category: "Automatisation & IA",
    items: ["n8n", "Make", "Intégration d'API IA"],
  },
] as const;

export const experiences = [
  {
    role: "Coordinateur de production digitale",
    company: "Edreams Factory",
    period: "Juil. 2025 — Aujourd'hui",
    startDate: "2025-07",
    description:
      "Coordination de la production digitale en alternance : optimisation des processus, analyse de données et suivi des projets.",
  },
  {
    role: "Développeur Web Freelance",
    company: "Erdus",
    period: "Oct. 2023 — Aujourd'hui",
    startDate: "2023-10",
    description:
      "Conception et réalisation de projets web sur mesure pour des clients variés, de la maquette au déploiement : sites vitrines, e-commerce, blogs sécurisés.",
  },
  {
    role: "Assistant chef de projet",
    company: "Ministère des Armées",
    period: "Oct. 2019 — Sept. 2021",
    startDate: "2019-10",
    description:
      "Pilotage de projets numériques et analyse comparative de logiciels de CAO pour les besoins des équipes techniques.",
  },
  {
    role: "Gestionnaire administratif et informatique",
    company: "GMF Assurances",
    period: "Sept. 2017 — Août 2019",
    startDate: "2017-09",
    description:
      "Gestion de l'infrastructure informatique, support utilisateurs et administration des outils internes.",
  },
  {
    role: "Administrateur SharePoint",
    company: "PSA Peugeot-Citroën",
    period: "Sept. 2015 — Août 2016",
    startDate: "2015-09",
    description:
      "Mise en place de sites SharePoint et formation des équipes à leur utilisation au quotidien.",
  },
] as const;

export const projects = [
  {
    title: "Erdus",
    description:
      "Portfolio personnel développé avec Next.js et TypeScript : SEO multilingue, performance optimisée et design sur mesure.",
    tags: ["Next.js", "TypeScript", "SEO"],
    url: "https://erdus.fr",
  },
  {
    title: "Portfolio 3D",
    description:
      "Expérience immersive en 3D dans le navigateur avec Three.js : animations et effets visuels spectaculaires.",
    tags: ["Three.js", "React", "WebGL"],
    url: null,
  },
  {
    title: "Manufacturist",
    description:
      "Site e-commerce WordPress optimisé pour la performance : temps de chargement réduits et parcours d'achat fluide.",
    tags: ["WordPress", "E-commerce", "Performance"],
    url: null,
  },
  {
    title: "Observatoire du Paysage UTLB",
    description:
      "Blog WordPress avec sécurisation renforcée sur mesure et intégration d'une newsletter Noptin.",
    tags: ["WordPress", "Sécurité", "Newsletter"],
    url: null,
  },
] as const;

export const faq = [
  {
    question: "Quels types de projets web réalisez-vous ?",
    answer:
      "Je réalise des sites vitrines, des boutiques e-commerce, des blogs et des applications web sur mesure, avec Next.js, React et TypeScript pour les projets modernes, ou WordPress et Symfony selon les besoins.",
  },
  {
    question: "Travaillez-vous uniquement en Île-de-France ?",
    answer:
      "Je suis basé à Bois-Colombes, près de Paris, mais je travaille à distance avec des clients partout en France. Les échanges se font en visioconférence et par écrit selon vos préférences.",
  },
  {
    question: "Comment optimisez-vous le référencement (SEO) d'un site ?",
    answer:
      "J'interviens sur trois axes : la technique (performance, données structurées, maillage), le contenu (sémantique, mots-clés) et l'expérience utilisateur (accessibilité, mobile). Chaque site est livré avec sitemap, balises optimisées et Core Web Vitals au vert.",
  },
  {
    question: "Comment sécurisez-vous les sites que vous livrez ?",
    answer:
      "Chaque site est livré avec HTTPS, des en-têtes de sécurité stricts (CSP, HSTS), des dépendances à jour et, pour WordPress, un durcissement spécifique : pare-feu applicatif, limitation des tentatives de connexion et sauvegardes automatisées.",
  },
] as const;
