import type { ServiceContent } from "@/types/content";

export const content: ServiceContent = {
  id: "creation-site-web",
  seo: {
    title: "Création de site web freelance en Île-de-France",
    description:
      "Création de site web freelance à Bois-Colombes : site vitrine, e-commerce ou refonte avec Next.js ou WordPress, rapide et sécurisé. Cadrage gratuit 30 min.",
    keyword: "création de site web freelance",
  },
  label: "Création de site web",
  tagline:
    "Un site vitrine, une boutique ou une application sur mesure, rapide, sécurisé et prêt pour le référencement.",
  hero: {
    h1: "Création de site web freelance : un site rapide, sûr et bien référencé",
    intro:
      "Création de site web freelance en Île-de-France : je conçois et développe votre site vitrine, votre boutique ou votre application avec Next.js ou WordPress, du cahier des charges à la mise en ligne. Basé à Bois-Colombes dans les Hauts-de-Seine, je travaille aussi à distance avec des clients partout en France.",
    badges: ["Next.js", "React", "TypeScript", "WordPress", "SEO"],
  },
  problem: {
    title: "Le problème que je règle",
    paragraphs: [
      "Un site qui charge lentement, qui n'apparaît pas sur Google ou qui n'a pas bougé depuis cinq ans coûte des clients tous les mois. Les solutions toutes faites limitent vite, les agences facturent des équipes entières, et certains freelances disparaissent après la mise en ligne.",
      "Je propose une alternative simple : un développeur Next.js freelance, ou WordPress selon le besoin, qui construit un site sur mesure, en assure la performance et le référencement technique dès le départ, puis reste joignable après la livraison.",
    ],
    points: [
      "Refonte d'un site vitrine devenu lent, daté ou impossible à modifier",
      "Création d'un site WordPress sur mesure sans thème acheté ni page builder subi",
      "Boutique en ligne avec un parcours d'achat court et un temps de chargement maîtrisé",
      "Application web métier avec Next.js quand un CMS ne suffit plus",
    ],
  },
  deliverables: {
    title: "Ce que vous recevez",
    intro:
      "Chaque site est livré complet, avec les fondations techniques que la plupart des devis oublient.",
    items: [
      {
        title: "Un site sur mesure",
        text: "Maquette validée avec vous, intégration fidèle, code propre et documenté. Next.js pour les projets applicatifs, WordPress pour l'autonomie éditoriale.",
      },
      {
        title: "Le SEO technique inclus",
        text: "Balises, données structurées schema.org, sitemap, hreflang si plusieurs langues, maillage interne. Le site est prêt à être indexé le jour de la mise en ligne.",
      },
      {
        title: "La performance mesurée",
        text: "Core Web Vitals au vert, images optimisées, chargement différé hors écran. Je vous remets les scores PageSpeed avant et après.",
      },
      {
        title: "La sécurité de base",
        text: "HTTPS, en-têtes de sécurité, dépendances à jour, sauvegardes. Pour WordPress : durcissement, pare-feu applicatif et limitation des tentatives de connexion.",
      },
      {
        title: "Responsive et accessible",
        text: "Une interface qui fonctionne au clavier, au lecteur d'écran et sur tous les écrans, conforme aux bases du RGAA / WCAG.",
      },
      {
        title: "Formation et passation",
        text: "Une session pour apprendre à modifier vos contenus, une documentation courte, et le code source vous appartient.",
      },
    ],
  },
  process: {
    title: "Déroulé de la mission",
    steps: [
      {
        title: "Cadrage gratuit",
        text: "30 minutes en visio pour comprendre votre activité, vos objectifs et votre budget. Vous repartez avec une recommandation, même si nous ne travaillons pas ensemble.",
      },
      {
        title: "Devis et planning",
        text: "Un devis détaillé poste par poste, un planning avec des jalons datés et une liste claire de ce que vous devez fournir.",
      },
      {
        title: "Maquette",
        text: "Structure des pages et maquette dans Figma, validées avec vous avant d'écrire une ligne de code.",
      },
      {
        title: "Développement",
        text: "Intégration, contenus, SEO technique et sécurité. Vous suivez l'avancement sur une URL de prévisualisation.",
      },
      {
        title: "Recette et mise en ligne",
        text: "Tests sur navigateurs et mobiles, corrections, puis déploiement sur votre hébergement avec redirections si c'est une refonte.",
      },
      {
        title: "Suivi",
        text: "Un mois de corrections inclus après la mise en ligne, puis un contrat de maintenance si vous le souhaitez.",
      },
    ],
  },
  stack: {
    title: "Technologies",
    intro:
      "Je choisis l'outil selon le projet, pas l'inverse. Les deux stacks principales :",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WordPress",
      "Elementor",
      "PHP",
      "Symfony",
      "GitHub",
      "Vercel / Hostinger",
    ],
  },
  cases: {
    title: "Création de site web freelance : deux projets récents",
    items: [
      {
        title: "Manufacturist — boutique WordPress",
        context:
          "Site e-commerce WordPress dont le temps de chargement freinait les ventes et dont le parcours d'achat comptait trop d'étapes.",
        result:
          "Optimisation de la performance (cache, images, scripts tiers), simplification du tunnel de commande et corrections d'accessibilité. Temps de chargement réduit et parcours plus court.",
      },
      {
        title: "Observatoire du Paysage UTLB — blog sécurisé",
        context:
          "Blog WordPress associatif exposé aux attaques par force brute et sans outil pour animer sa communauté.",
        result:
          "Durcissement sur mesure (pare-feu applicatif, limitation des connexions, sauvegardes automatisées) et intégration d'une newsletter Noptin. Site stable et équipe autonome sur les contenus.",
      },
    ],
  },
  faq: {
    title: "Questions fréquentes sur la création de site",
    items: [
      {
        question: "Combien coûte la création d'un site web ?",
        answer:
          "Un site vitrine sur mesure démarre autour de quelques milliers d'euros ; une boutique ou une application coûte davantage selon les fonctionnalités. Le cadrage gratuit sert justement à vous donner une fourchette honnête avant tout engagement.",
      },
      {
        question: "Next.js ou WordPress : comment choisir ?",
        answer:
          "WordPress convient quand vous modifiez souvent vos contenus et voulez rester autonome. Next.js convient aux sites qui exigent des performances élevées, des fonctionnalités spécifiques ou une intégration avec vos outils. Je vous recommande l'un ou l'autre après le cadrage.",
      },
      {
        question: "Quels sont les délais ?",
        answer:
          "Comptez trois à six semaines pour un site vitrine, davantage pour une boutique ou une application. Le planning est fixé au devis et dépend surtout de la rapidité avec laquelle vous fournissez textes et visuels.",
      },
      {
        question: "Vous occupez-vous de l'hébergement et du nom de domaine ?",
        answer:
          "Oui. Je vous conseille un hébergeur adapté, je configure le domaine, le certificat HTTPS et les sauvegardes. Les abonnements restent à votre nom : vous gardez le contrôle.",
      },
    ],
  },
  cta: {
    title: "On cadre votre projet de site ?",
    text: "Trente minutes en visio pour parler de votre activité et repartir avec une recommandation claire.",
  },
  jsonLd: {
    name: "Création de site web",
    serviceType: "Création et refonte de site web",
    description:
      "Création de sites vitrines, boutiques en ligne et applications web sur mesure avec Next.js ou WordPress, optimisés pour la performance, la sécurité et le référencement.",
  },
};
