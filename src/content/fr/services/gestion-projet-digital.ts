import type { ServiceContent } from "@/types/content";

export const content: ServiceContent = {
  id: "gestion-projet-digital",
  seo: {
    title: "Chef de projet digital freelance, cadrage et suivi",
    description:
      "Chef de projet digital freelance : cadrage, cahier des charges et pilotage de votre projet web avec vos prestataires, à temps partagé. Cadrage gratuit.",
    keyword: "chef de projet digital freelance",
  },
  label: "Gestion de projet digital",
  tagline:
    "Cadrage, cahier des charges et pilotage de votre projet web avec vos prestataires, en temps partagé.",
  hero: {
    h1: "Chef de projet digital freelance : cadrer, piloter, livrer",
    intro:
      "Chef de projet digital freelance, je prends en charge le cadrage, la rédaction du cahier des charges et le pilotage de votre projet web avec vos prestataires. Vous gardez la vision et les décisions ; je m'occupe de la méthode, des délais et des arbitrages techniques, en temps partagé et sans embauche.",
    badges: ["Cadrage", "Cahier des charges", "Pilotage", "Recette"],
  },
  problem: {
    title: "Le problème que je règle",
    paragraphs: [
      "Un projet web sans pilote dérive : les prestataires se renvoient la responsabilité, le périmètre grossit, les délais glissent et personne en interne n'a le temps ou le vocabulaire pour trancher les questions techniques.",
      "La gestion de projet web externalisée règle ce point sans recruter. J'apporte un interlocuteur unique qui comprend à la fois vos enjeux métier et le travail des développeurs, et qui tient le cap du cadrage à la mise en production.",
    ],
    points: [
      "Aucun cahier des charges, ou un document trop flou pour obtenir des devis comparables",
      "Plusieurs prestataires (agence, freelance, hébergeur) et personne pour coordonner",
      "Un projet lancé qui prend du retard sans que l'on sache pourquoi",
      "Besoin d'un regard technique indépendant pour choisir une solution ou un partenaire",
    ],
  },
  deliverables: {
    title: "Ce qu'un chef de projet digital freelance vous apporte",
    items: [
      {
        title: "Un cadrage projet digital écrit",
        text: "Objectifs, utilisateurs, périmètre, contraintes, budget et risques dans un document court que tout le monde peut lire.",
      },
      {
        title: "La rédaction du cahier des charges",
        text: "Fonctionnalités, arborescence, exigences techniques (performance, sécurité, accessibilité, SEO) et critères de recette. Exploitable tel quel pour consulter des prestataires.",
      },
      {
        title: "La consultation des prestataires",
        text: "Grille de comparaison, analyse des devis, questions à poser, recommandation argumentée. Vous choisissez en connaissance de cause.",
      },
      {
        title: "Le pilotage au quotidien",
        text: "Planning, points d'avancement, suivi des tickets, arbitrages, alertes en amont des dérives. Un reporting court et régulier.",
      },
      {
        title: "La recette et la mise en production",
        text: "Scénarios de test, suivi des corrections, vérification des livrables (performance, sécurité, SEO) avant de valider la mise en ligne.",
      },
      {
        title: "Le bilan et la passation",
        text: "Documentation de ce qui a été livré, liste des accès, procédures de maintenance et recommandations pour la suite.",
      },
    ],
  },
  process: {
    title: "Déroulé de la mission",
    steps: [
      {
        title: "Cadrage gratuit",
        text: "30 minutes pour comprendre où en est votre projet et ce qui bloque. Je vous dis honnêtement si mon intervention est utile.",
      },
      {
        title: "Diagnostic",
        text: "Lecture des documents existants, entretiens avec les parties prenantes, état des lieux des prestataires et des outils.",
      },
      {
        title: "Cadrage et cahier des charges",
        text: "Rédaction, relectures avec vous, validation. Ce document devient la référence pour tout le monde.",
      },
      {
        title: "Consultation",
        text: "Appel à prestataires si nécessaire, analyse des réponses, contractualisation.",
      },
      {
        title: "Pilotage",
        text: "Suivi hebdomadaire, arbitrages, gestion des risques. Vous voyez l'avancement réel, pas seulement le prévisionnel.",
      },
      {
        title: "Recette, mise en ligne, bilan",
        text: "Tests, corrections, déploiement, puis un bilan et une passation propre à vos équipes.",
      },
    ],
  },
  stack: {
    title: "Outils et méthodes",
    intro:
      "Je m'adapte à vos outils. À défaut, voici ceux que je propose :",
    items: [
      "Notion",
      "Jira / Trello",
      "GitHub",
      "Figma",
      "Google Workspace",
      "Make / n8n",
      "Méthode agile par sprints",
      "Cycle en V pour les marchés cadrés",
    ],
  },
  cases: {
    title: "Deux expériences de pilotage",
    items: [
      {
        title: "Ministère des Armées — assistant chef de projet",
        context:
          "Pilotage de projets numériques et analyse comparative de logiciels de CAO pour des équipes techniques aux besoins hétérogènes.",
        result:
          "Grilles de comparaison, tests, recommandation argumentée et suivi du déploiement. Une décision d'équipement prise sur des critères mesurés plutôt que sur des habitudes.",
      },
      {
        title: "Edreams Factory — coordination de production digitale",
        context:
          "Coordination de la production digitale : plusieurs projets en parallèle, des prestataires et des données de suivi dispersées.",
        result:
          "Optimisation des processus, tableaux de bord de suivi et rituels d'avancement. Une visibilité partagée sur l'état de chaque projet.",
      },
    ],
  },
  faq: {
    title: "Questions fréquentes sur la gestion de projet",
    items: [
      {
        question: "Quelle différence avec une agence ?",
        answer:
          "Une agence vend sa propre production. Je suis indépendant des prestataires : je défends votre intérêt dans les choix, les devis et la recette, et je peux travailler avec l'agence ou le freelance de votre choix.",
      },
      {
        question: "Intervenez-vous à temps partiel ?",
        answer:
          "Oui, c'est le cas le plus fréquent : un ou deux jours par semaine, ou un forfait par phase (cadrage seul, cahier des charges seul, pilotage complet).",
      },
      {
        question: "Quels types de projets pilotez-vous ?",
        answer:
          "Sites vitrines et e-commerce, applications web, refontes, migrations, automatisations avec n8n ou Make, intégration d'outils d'IA. Si le projet exige une expertise que je n'ai pas, je le dis et je vous oriente.",
      },
      {
        question: "Pouvez-vous aussi développer ?",
        answer:
          "Oui, mais pas sur le même projet que je pilote pour vous, afin de rester indépendant dans les arbitrages. Pour un développement, voyez l'offre de création de site web.",
      },
    ],
  },
  cta: {
    title: "Votre projet a besoin d'un pilote ?",
    text: "Trente minutes pour faire le point sur l'état de votre projet et voir ce qui débloquerait la situation.",
  },
  jsonLd: {
    name: "Gestion de projet digital",
    serviceType: "Gestion de projet web externalisée",
    description:
      "Cadrage, rédaction de cahier des charges, consultation de prestataires et pilotage de projets web en temps partagé, pour les TPE, PME et associations.",
  },
};
