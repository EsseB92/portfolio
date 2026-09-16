import { links, skillItems } from "@/lib/data";
import type { HomeContent, HubContent } from "@/types/content";

export const home: HomeContent = {
  seo: {
    title: "Bertrand Sudre — Développeur Web Freelance | Erdus",
    description:
      "Bertrand Sudre, développeur web freelance à Bois-Colombes. Création de sites, gestion de projets digitaux, bots Discord et Twitch, montage PC sur mesure.",
    keywords: [
      "développeur web freelance",
      "création site internet",
      "chef de projet digital freelance",
      "bot Discord",
      "montage PC sur mesure",
      "Next.js",
      "WordPress",
      "Île-de-France",
      "Bois-Colombes",
    ],
  },
  hero: {
    availability: "Disponible pour de nouveaux projets",
    jobTitle: "Développeur Web Freelance",
    tagline:
      "Je conçois des sites et applications web sur mesure : rapides, sécurisés, accessibles et optimisés pour le référencement.",
    location:
      "Basé à Bois-Colombes, en Île-de-France, je travaille à distance avec des clients partout en France.",
    primaryCta: "Découvrir mes offres",
    secondaryCta: "Me contacter",
  },
  tracks: {
    title: "Deux univers, un seul interlocuteur",
    intro:
      "Selon que vous dirigez une entreprise ou une chaîne de stream, le besoin n'est pas le même. Les méthodes, elles, sont identiques.",
    cardCta: "Voir les offres",
  },
  method: {
    title: "Ce que je garantis",
    intro:
      "Quelle que soit l'offre, chaque projet est livré avec les mêmes fondations. Ce sont mes engagements, pas des options.",
    items: [
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
    ],
  },
  skills: {
    title: "Compétences",
    intro:
      "Une stack moderne côté frontend, des fondations solides côté backend et des outils éprouvés pour livrer vite et bien.",
    groups: [
      { category: "Frontend", items: skillItems.frontend },
      { category: "Backend & CMS", items: skillItems.backend },
      { category: "Outils", items: skillItems.tools },
      { category: "Automatisation & streaming", items: skillItems.automation },
    ],
  },
  experience: {
    title: "Parcours",
    intro:
      "Plus de dix ans d'expérience entre gestion de projets numériques, administration de systèmes et développement web.",
    items: [
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
    ],
  },
  projects: {
    title: "Projets",
    intro:
      "Une sélection de réalisations récentes, du portfolio immersif au site e-commerce optimisé.",
    serviceLinkPrefix: "Offre associée :",
    items: [
      {
        title: "Erdus Games",
        description:
          "Jeu web en deux modes : Depixelize (l'image se dépixélise, à deviner avant qu'elle ne soit nette) et Guess (un indice de plus à chaque erreur). Cinq univers, quatre niveaux, JavaScript vanilla et Canvas, données via les API RAWG, TMDB, AniList et flagcdn.",
        tags: ["JavaScript", "Canvas", "API REST"],
        url: links.games,
        service: "dev-streaming",
      },
      {
        title: "Erdus",
        description:
          "Portfolio personnel développé avec Next.js et TypeScript : SEO multilingue, performance optimisée et design sur mesure.",
        tags: ["Next.js", "TypeScript", "SEO"],
        url: links.portfolio,
        service: "creation-site-web",
      },
      {
        title: "Portfolio 3D",
        description:
          "Expérience immersive en 3D dans le navigateur avec Three.js : animations et effets visuels spectaculaires.",
        tags: ["Three.js", "React", "WebGL"],
        url: links.portfolio3d,
        service: "creation-site-web",
      },
      {
        title: "Manufacturist",
        description:
          "Site e-commerce WordPress optimisé pour la performance : temps de chargement réduits et parcours d'achat fluide.",
        tags: ["WordPress", "E-commerce", "Performance"],
        url: null,
        service: "creation-site-web",
      },
      {
        title: "Observatoire du Paysage UTLB",
        description:
          "Blog WordPress avec sécurisation renforcée sur mesure et intégration d'une newsletter Noptin.",
        tags: ["WordPress", "Sécurité", "Newsletter"],
        url: links.utlb,
        service: "creation-site-web",
      },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        question: "Quels types de projets réalisez-vous ?",
        answer:
          "Deux univers : des projets digitaux pour les entreprises (création de site web, gestion de projet) et des projets pour les streamers et joueurs (bots Discord et Twitch, overlays, montage PC). Les méthodes et les exigences de qualité sont les mêmes.",
      },
      {
        question: "Travaillez-vous uniquement en Île-de-France ?",
        answer:
          "Je suis basé à Bois-Colombes, près de Paris, mais je travaille à distance avec des clients partout en France. Les échanges se font en visioconférence et par écrit selon vos préférences. Seul le montage PC implique une remise en main propre ou un envoi.",
      },
      {
        question: "Comment optimisez-vous le référencement (SEO) d'un site ?",
        answer:
          "J'interviens sur trois axes : la technique (performance, données structurées, maillage), le contenu (sémantique, mots-clés) et l'expérience utilisateur (accessibilité, mobile). Chaque site est livré avec sitemap, balises optimisées et Core Web Vitals au vert.",
      },
      {
        question: "Comment sécurisez-vous les sites que vous livrez ?",
        answer:
          "Chaque site est livré avec HTTPS, des en-têtes de sécurité stricts, des dépendances à jour et, pour WordPress, un durcissement spécifique : pare-feu applicatif, limitation des tentatives de connexion et sauvegardes automatisées.",
      },
    ],
  },
  contact: {
    title: "Un projet en tête ?",
    text: "Parlons-en. Décrivez-moi votre besoin et je vous répondrai sous 48 heures avec une première analyse et une estimation.",
    malt: "Me retrouver sur Malt",
    linkedin: "LinkedIn",
  },
};

export const hub: HubContent = {
  seo: {
    title: "Services web, gestion de projet, streaming et PC",
    description:
      "Création de site web et gestion de projet pour les entreprises, bots Discord et Twitch et montage PC pour les streamers. Cadrage gratuit de 30 min.",
  },
  h1: "Quatre offres, deux univers",
  intro:
    "Des projets digitaux pour les entreprises, du streaming et du hardware pour les joueurs. Chaque offre a sa page, son déroulé et ses questions fréquentes. Toutes commencent par un cadrage gratuit de trente minutes.",
  cta: {
    title: "Vous hésitez entre deux offres ?",
    text: "Trente minutes en visio suffisent pour orienter votre projet vers la bonne offre, ou pour combiner deux d'entre elles.",
  },
};
