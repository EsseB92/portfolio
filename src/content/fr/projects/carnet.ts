import type { ProjectContent } from "@/types/content";

export const content: ProjectContent = {
  id: "carnet",
  seo: {
    title: "Carnet : application de notes hors ligne et sans compte",
    description:
      "Carnet, application web de prise de notes hors ligne et sans compte : Markdown, tags, recherche, dictée, photos. Les notes restent sur l'appareil (PWA).",
  },
  label: "Carnet",
  hero: {
    eyebrow: "Application web · PWA",
    h1: "Carnet, une application de prise de notes hors ligne et sans compte",
    intro:
      "Carnet est une application web progressive de prise de notes que j'ai conçue et développée. Elle fonctionne entièrement hors ligne et sans compte : les notes sont stockées dans le navigateur et ne quittent jamais l'appareil.",
    tags: ["PWA", "IndexedDB", "JavaScript", "Playwright"],
  },
  idea: {
    paragraphs: [
      "Prendre une note vite, sur son téléphone ou son ordinateur, sans inscription et sans confier ses notes à un serveur. Carnet s'installe sur l'écran d'accueil et s'ouvre sans réseau.",
      "Côté code, le même principe de sobriété : aucune dépendance, aucun build. Le dossier se déploie tel quel sur n'importe quel hébergement statique en HTTPS. Seules les visites sont comptées, sans cookie ; le contenu des notes n'est jamais envoyé.",
    ],
    points: [
      "Aucun compte, aucune note envoyée",
      "Fonctionne sans réseau",
      "Aucune dépendance, aucun build",
      "Export et import de toutes les notes",
    ],
  },
  features: {
    items: [
      {
        title: "Notes et enregistrement automatique",
        text: "Créer, épingler et supprimer des notes, avec une suppression annulable. L'enregistrement se fait pendant la frappe et l'application demande au navigateur un stockage persistant.",
      },
      {
        title: "Markdown léger et mode Lecture",
        text: "Titres, listes, cases à cocher cliquables, citations, couleurs et surlignage. Une barre de mise en forme s'affiche au-dessus du clavier sur mobile.",
      },
      {
        title: "Recherche et tags",
        text: "Recherche instantanée dans les titres et les textes, insensible aux accents, avec surlignage. Tout #mot-clé devient un filtre.",
      },
      {
        title: "Dictée vocale",
        text: "Le texte dicté est inséré au curseur, en français, quand le navigateur propose la reconnaissance vocale.",
      },
      {
        title: "Photos et croquis",
        text: "Images jointes réduites à 1600 px, croquis dessinés au doigt ou à la souris avec stylo, surligneur et gomme.",
      },
      {
        title: "Corbeille et export",
        text: "Une note supprimée reste trente jours dans la corbeille. Export JSON, import par fusion où la version la plus récente gagne, et rappel quand le dernier export date de plus de trente jours.",
      },
      {
        title: "Partage depuis Android",
        text: "Partager un texte ou un lien vers Carnet propose de créer une note. Un raccourci « Note rapide » ouvre directement l'éditeur.",
      },
      {
        title: "Confort au quotidien",
        text: "Mode sombre automatique, disposition mobile à un écran, raccourcis clavier et tri par date ou par titre.",
      },
    ],
  },
  tech: {
    intro:
      "HTML, CSS et JavaScript sans framework ni dépendance, avec les API du navigateur pour tout le reste.",
    items: [
      {
        title: "IndexedDB",
        text: "Les notes et leurs pièces jointes sont stockées dans le navigateur. L'export JSON inclut les images en base64 et la corbeille.",
      },
      {
        title: "Service worker",
        text: "L'application est mise en cache pour fonctionner hors ligne. Une nouvelle version est détectée au retour au premier plan, au retour du réseau et toutes les heures, puis annoncée par un message.",
      },
      {
        title: "Cible de partage",
        text: "Le partage Android arrive en POST au service worker, qui dépose le texte dans IndexedDB et redirige vers l'accueil : le contenu partagé n'atteint jamais le serveur.",
      },
      {
        title: "Tests Playwright",
        text: "Les scénarios critiques sont rejoués sur Chrome de bureau et un Pixel 5 : persistance, corbeille, recherche, mode Lecture, pièces jointes, export puis import, et mise à jour du service worker.",
      },
      {
        title: "Déploiement continu",
        text: "Chaque push lance les tests, puis un déploiement par SSH en deux passes et une vérification de ce que le site publie réellement.",
      },
    ],
    stack: [
      "JavaScript",
      "PWA",
      "IndexedDB",
      "Service worker",
      "Web Share Target",
      "Playwright",
      "GitHub Actions",
    ],
  },
  challenges: {
    items: [
      {
        title: "Des mises à jour malgré le cache du CDN",
        text: "Le CDN garde les fichiers JavaScript et CSS un an. Chaque version porte donc une adresse neuve, et le service worker, toujours relu sur le réseau, s'active aussitôt puis propose de recharger.",
      },
      {
        title: "Un partage qui ne touche jamais le serveur",
        text: "Le texte partagé est intercepté par le service worker et n'entre dans aucun cache. Comme n'importe quel site peut ouvrir Carnet avec un texte en paramètre, la page demande confirmation avant de créer la note.",
      },
      {
        title: "Ne pas perdre de notes",
        text: "Sans compte ni serveur, la sauvegarde repose sur l'utilisateur : stockage persistant demandé, corbeille de trente jours, rappel d'export et import par fusion.",
      },
    ],
  },
  cta: {
    title: "Une application web sur mesure ?",
    text: "Hors ligne, installable, respectueuse des données : parlons de votre projet en trente minutes.",
  },
  jsonLdDescription:
    "Application web progressive de prise de notes, hors ligne et sans compte : Markdown léger, tags, recherche instantanée, dictée vocale, photos et croquis, corbeille et export. Les notes restent sur l'appareil.",
};
