import type { ServiceContent } from "@/types/content";

export const content: ServiceContent = {
  id: "dev-streaming",
  seo: {
    title: "Développeur bot Discord freelance, Twitch, overlays",
    description:
      "Développeur bot Discord freelance : bots Twitch et YouTube, overlays de stream sur mesure, automatisations du chat et domotique. Cadrage gratuit 30 min.",
    keyword: "développeur bot Discord freelance",
  },
  label: "Développement streaming",
  tagline:
    "Bots Discord et Twitch, overlays interactifs et automatisations qui relient votre chat à votre setup.",
  hero: {
    h1: "Développeur bot Discord freelance : bots, overlays et automatisations pour streamers",
    intro:
      "Développeur bot Discord freelance, je crée des outils sur mesure pour les streamers : bots Discord et Twitch personnalisés, overlays de stream interactifs, automatisations du chat Twitch ou YouTube qui déclenchent vos lumières, vos sons, vos alertes ou des mini-jeux. Un seul interlocuteur, du cadrage à l'hébergement.",
    badges: [
      "Discord.js",
      "Twitch EventSub",
      "YouTube Live API",
      "OBS WebSocket",
      "Node.js",
      "TypeScript",
      "Home Assistant",
    ],
  },
  problem: {
    title: "Le problème que je règle",
    paragraphs: [
      "Les bots grand public font tous la même chose, et dès que vous voulez une mécanique propre à votre chaîne, une intégration avec votre matériel ou une règle de modération précise, vous tombez sur une limite, un abonnement de plus ou un plugin abandonné.",
      "Un développeur pour streamer écrit exactement ce dont votre communauté a besoin : un bot Twitch personnalisé qui parle à votre serveur Discord, un overlay de stream sur mesure qui réagit au chat, une automatisation du chat Twitch qui pilote votre domotique. Le code vous appartient et tourne sur votre infrastructure.",
    ],
    points: [
      "Un serveur Discord à structurer : rôles automatiques, accueil, tickets, alertes de live, modération",
      "Des commandes et récompenses Twitch ou YouTube introuvables dans les bots existants",
      "Des overlays figés alors que vous voulez des éléments qui réagissent à votre chat en direct",
      "Du matériel (lumières, caméras, panneaux, sons) que le chat pourrait déclencher",
      "Des tâches de modération et d'animation qui vous prennent du temps à chaque live",
    ],
  },
  deliverables: {
    title: "Développeur bot Discord freelance : ce que je développe",
    intro:
      "Chaque brique est indépendante : vous commandez ce dont vous avez besoin, et les briques se parlent entre elles.",
    items: [
      {
        title: "Bot Discord sur mesure",
        text: "Rôles et salons automatiques, formulaires d'accueil, tickets, annonces de live Twitch ou YouTube, modération avec journal, commandes propres à votre communauté. Hébergé sur votre serveur, avec un panneau d'administration si besoin.",
      },
      {
        title: "Bot Twitch ou YouTube personnalisé",
        text: "Commandes de chat, points de chaîne et récompenses, minuteurs, réactions aux abonnements et aux raids, synchronisation avec Discord. Compatible avec les événements Twitch EventSub et le chat YouTube Live.",
      },
      {
        title: "Overlays de stream interactifs",
        text: "Sources navigateur pour OBS : alertes, sondages, files d'attente, jauges d'objectifs, éléments qui bougent quand le chat écrit. Design intégré à votre identité, léger pour ne pas faire chuter vos images par seconde.",
      },
      {
        title: "Automatisation du chat et domotique",
        text: "Le chat déclenche vos lumières Philips Hue ou Home Assistant, change de scène OBS, joue un son, active une caméra ou un panneau. Avec cooldowns, coûts en points et limites pour garder le contrôle.",
      },
      {
        title: "Mini-jeux de chat",
        text: "Jeux collaboratifs ou compétitifs joués depuis le chat : votes, duels, quiz, courses, économie de points persistante. Affichés dans l'overlay et suivis dans Discord.",
      },
      {
        title: "Hébergement et maintenance",
        text: "Déploiement sur un petit serveur (VPS ou Raspberry Pi), sauvegardes, surveillance et redémarrage automatique. Mises à jour quand Twitch, Discord ou YouTube changent leurs API.",
      },
    ],
  },
  process: {
    title: "Déroulé de la mission",
    steps: [
      {
        title: "Cadrage gratuit",
        text: "30 minutes pour parler de votre chaîne, de votre communauté et de ce que vous voulez déclencher. Vous repartez avec une liste de ce qui est faisable et une fourchette de prix.",
      },
      {
        title: "Spécification",
        text: "Liste des commandes, des événements, des permissions et des règles (cooldowns, coûts, limites). Un document court que vous validez, avec les maquettes des overlays.",
      },
      {
        title: "Développement itératif",
        text: "Livraison brique par brique, testée avec vous sur un serveur Discord privé ou un live de test. Vous voyez le résultat avant la suite.",
      },
      {
        title: "Mise en production",
        text: "Installation sur votre hébergement, connexion aux comptes Twitch, YouTube, Discord et à votre matériel, documentation des accès.",
      },
      {
        title: "Suivi",
        text: "Un mois de corrections inclus, puis un forfait de maintenance pour suivre les évolutions des plateformes et ajouter des mécaniques.",
      },
    ],
  },
  stack: {
    title: "Technologies",
    intro:
      "Du code TypeScript exécuté sur Node.js, branché aux API officielles des plateformes :",
    items: [
      "Node.js",
      "TypeScript",
      "Discord.js",
      "Twitch API / EventSub",
      "YouTube Live Streaming API",
      "OBS WebSocket",
      "WebSocket",
      "Home Assistant",
      "Philips Hue API",
      "Docker",
      "PostgreSQL / SQLite",
      "VPS / Raspberry Pi",
    ],
  },
  cases: {
    title: "Deux cas types",
    intro:
      "Deux configurations que je mets en place pour des chaînes de taille moyenne.",
    items: [
      {
        title: "Serveur Discord de communauté relié à Twitch",
        context:
          "Une chaîne Twitch avec un Discord actif mais géré à la main : rôles donnés un par un, annonces de live oubliées, modération dispersée.",
        result:
          "Bot Discord qui attribue les rôles selon le statut d'abonné Twitch, annonce les lives automatiquement, ouvre des tickets de support et journalise la modération. Le streamer ne touche plus au serveur pendant les lives.",
      },
      {
        title: "Overlay interactif et domotique pilotés par le chat",
        context:
          "Un streamer voulait que ses viewers puissent agir sur son décor et ses caméras avec les points de chaîne, sans casser le rythme du stream.",
        result:
          "Bot Twitch relié à Home Assistant et OBS : récompenses qui changent la couleur des lumières, déclenchent une scène ou un son, avec cooldowns et files d'attente affichées dans l'overlay. Les récompenses sont modifiables depuis Discord.",
      },
    ],
  },
  faq: {
    title: "Questions fréquentes sur les bots et overlays",
    items: [
      {
        question: "Combien coûte un bot Discord ou Twitch sur mesure ?",
        answer:
          "Un bot simple (annonces, rôles, quelques commandes) se compte en centaines d'euros. Un ensemble bot + overlays + automatisations domotiques se compte en milliers. Le cadrage gratuit sert à vous donner un chiffre avant tout engagement.",
      },
      {
        question: "Faut-il un serveur pour faire tourner le bot ?",
        answer:
          "Oui, un bot doit tourner en continu. Un petit VPS à quelques euros par mois ou un Raspberry Pi chez vous suffit. Je m'occupe de l'installation, de la surveillance et du redémarrage automatique.",
      },
      {
        question: "Ça marche aussi avec YouTube ou Kick ?",
        answer:
          "YouTube Live oui, via l'API officielle. Pour Kick ou d'autres plateformes, tout dépend de l'ouverture de leur API : je vérifie la faisabilité pendant le cadrage.",
      },
      {
        question: "Que se passe-t-il quand Twitch ou Discord change son API ?",
        answer:
          "C'est le rôle du forfait de maintenance : je surveille les annonces des plateformes et je mets le bot à jour avant la coupure. Sans forfait, je peux intervenir ponctuellement sur devis.",
      },
      {
        question: "Puis-je modifier le bot moi-même ?",
        answer:
          "Le code vous appartient et il est documenté. Pour les réglages courants (commandes, récompenses, cooldowns), je livre un panneau ou des commandes d'administration pour ne pas avoir à toucher au code.",
      },
      {
        question: "Quels délais ?",
        answer:
          "Comptez une à deux semaines pour un bot simple, quatre à huit semaines pour un ensemble complet avec overlays et domotique. Les briques sont livrées au fur et à mesure.",
      },
    ],
  },
  cta: {
    title: "On parle de votre chaîne ?",
    text: "Trente minutes pour lister ce que vous voulez automatiser et repartir avec une estimation honnête.",
  },
  jsonLd: {
    name: "Développement streaming",
    serviceType: "Développement de bots Discord, Twitch et d'overlays de stream",
    description:
      "Bots Discord et Twitch personnalisés, overlays de stream interactifs, automatisations du chat reliées à la domotique et mini-jeux pour streamers, hébergés sur votre infrastructure.",
  },
};
