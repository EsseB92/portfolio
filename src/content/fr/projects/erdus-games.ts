import type { ProjectContent } from "@/types/content";

export const content: ProjectContent = {
  id: "erdus-games",
  seo: {
    title: "Erdus Games : jeux de devinettes en ligne, défi du jour",
    description:
      "Erdus Games, jeux de devinettes en ligne : films, jeux vidéo, animés, drapeaux, musique. Défi du jour, marathon, défis entre amis, PWA en JavaScript.",
  },
  label: "Erdus Games",
  hero: {
    eyebrow: "Application web · Jeu",
    h1: "Erdus Games, une plateforme de jeux de devinettes en ligne",
    intro:
      "Erdus Games est une plateforme de jeux de devinettes que j'ai conçue et développée : reconnaître un jeu vidéo, un film, une série, un animé, un drapeau, un morceau ou un Pokémon à partir d'une image qui se dévoile, d'indices successifs ou d'une comparaison d'attributs. Un site statique en JavaScript, installable sur téléphone.",
    tags: ["JavaScript", "Canvas", "PHP", "PWA"],
  },
  idea: {
    paragraphs: [
      "Les jeux de devinettes du web, dans l'esprit de guessthe.game ou framed.wtf, se limitent souvent à un seul thème et une seule mécanique. L'idée d'Erdus Games : réunir neuf thèmes et trois façons de jouer sur un même site, avec un défi du jour identique pour tout le monde.",
      "Le tout sans base de données : un site statique, un petit proxy PHP pour les API et des fichiers JSON côté serveur. Les parties libres se jouent sans compte ; le défi du jour, le marathon et les défis entre amis demandent seulement un pseudo et un lien de connexion reçu par e-mail, sans mot de passe.",
    ],
    points: [
      "Neuf thèmes : jeux vidéo, films, séries, animés et mangas, drapeaux, musique, extraits audio, Pokémon, personnages",
      "La même œuvre pour tout le monde chaque jour",
      "Aucune base de données, aucun mot de passe",
      "Installable sur téléphone (PWA)",
    ],
  },
  features: {
    items: [
      {
        title: "Image cachée",
        text: "L'image se révèle lentement et il faut la reconnaître avant qu'elle soit nette. Vitesse réglable et plusieurs effets : pixels, flou, dézoom ou aléatoire.",
      },
      {
        title: "Indices",
        text: "Chaque erreur dévoile une nouvelle image et un indice textuel (année, genre, plateforme, pays…), avec autocomplétion et essais colorés. En audio, l'extrait s'allonge à chaque erreur, de 1 à 16 secondes.",
      },
      {
        title: "Comparaison",
        text: "Aucune image : chaque proposition est comparée à l'œuvre mystère attribut par attribut, en vert, jaune ou rouge, avec des flèches pour les valeurs ordonnées. Dix vies.",
      },
      {
        title: "Défi du jour",
        text: "La même œuvre pour tout le monde, une tentative par thème et par jour, un résultat partageable en emojis, une série de jours consécutifs et une archive des défis passés.",
      },
      {
        title: "Marathon du jour",
        text: "Les neuf thèmes à la suite, avec un chrono qui ne compte que le temps de jeu, une reprise possible et un classement dédié.",
      },
      {
        title: "Défi entre amis",
        text: "Un code à six caractères et un lien d'invitation : chacun joue les mêmes cinq œuvres, jusqu'à cinquante joueurs, avec le classement de la partie.",
      },
      {
        title: "Classements, badges et statistiques",
        text: "Classements par thème et par période, cercle d'amis, vingt badges, statistiques personnelles et image de partage générée dans le navigateur.",
      },
      {
        title: "Rappels et installation",
        text: "Installation sur l'écran d'accueil et rappels Web Push anonymes à l'heure choisie : défi du jour prêt, série sur le point d'expirer.",
      },
    ],
  },
  tech: {
    intro:
      "Un site statique en HTML, CSS et JavaScript sans framework, complété par quelques scripts PHP. Ni base de données, ni bibliothèque côté client.",
    items: [
      {
        title: "JavaScript vanilla et Canvas",
        text: "Les effets de révélation sont dessinés dans un canvas. En production, dix-huit scripts sont concaténés et minifiés en un seul fichier : le premier écran charge environ 135 Ko, les listes embarquées sont chargées à la demande.",
      },
      {
        title: "Deux sources par thème",
        text: "RAWG, TMDB, AniList, Deezer, PokéAPI, flagcdn, Wikidata… Si la source principale tombe en panne ou atteint son quota, la source de secours prend le relais pendant cinq minutes.",
      },
      {
        title: "Un proxy PHP qui protège les clés",
        text: "Les clés d'API restent sur le serveur. Le proxy n'accepte que les requêtes du site, ne relaie que des chemins et paramètres autorisés, limite le débit par adresse IP et applique un budget quotidien par service amont.",
      },
      {
        title: "Connexion par lien, sans mot de passe",
        text: "Un pseudo et un lien e-mail à usage unique, valable quinze minutes. La synchronisation entre appareils fusionne un instantané JSON ; le serveur ne garde que le dernier instantané et l'adresse e-mail.",
      },
      {
        title: "Cache et hors ligne",
        text: "Service worker en stale-while-revalidate pour un affichage instantané, ressources servies un an avec des adresses versionnées, vérification anti-robot par Cloudflare Turnstile et CSP stricte.",
      },
      {
        title: "Tests et mise en production",
        text: "Tests de bout en bout Playwright sur Chrome de bureau et Pixel 5, réseau entièrement simulé. Chaque push lance le build, le déploiement par SSH et une vérification de ce qui est réellement publié.",
      },
    ],
    stack: [
      "JavaScript",
      "Canvas",
      "PHP",
      "PWA",
      "Service worker",
      "Web Push",
      "Cloudflare Turnstile",
      "Playwright",
      "esbuild",
      "GitHub Actions",
    ],
  },
  challenges: {
    items: [
      {
        title: "Tenir dans les quotas des API",
        text: "Cache des réponses, budget quotidien par service, bascule automatique vers la source de secours. Les listes du défi du jour sont figées jusqu'à minuit et archivées : mêmes œuvres et mêmes images pour tout le monde, y compris les jours suivants.",
      },
      {
        title: "Publier sans être piégé par le cache",
        text: "Le CDN garde les fichiers JavaScript et CSS un an. Chaque version porte donc une nouvelle adresse, et le déploiement envoie le bundle avant la page et le service worker pour ne jamais publier une page qui référence un fichier absent.",
      },
      {
        title: "Les écarts entre navigateurs",
        text: "Safari ne gère pas les filtres sur canvas : le flou passe par un filtre CSS. Android ignore le volume des balises audio : il est réglé par la Web Audio API.",
      },
      {
        title: "Sécuriser la connexion par lien",
        text: "Un lien de connexion n'est jamais échangé à l'insu du joueur : la demande porte un secret propre au navigateur et, à défaut, le site demande une confirmation. Sans l'un ni l'autre, le serveur refuse l'échange.",
      },
      {
        title: "Des erreurs compréhensibles",
        text: "Aucune erreur brute n'arrive au joueur : hors ligne, délai dépassé ou service en panne donnent un message en français et un bouton « Réessayer ».",
      },
    ],
  },
  cta: {
    title: "Un mini-jeu ou un outil pour votre communauté ?",
    text: "Défis partagés, classements, intégration d'API : parlons de votre projet en trente minutes.",
  },
  jsonLdDescription:
    "Plateforme de jeux de devinettes en ligne : neuf thèmes, modes Image cachée, Indices et Comparaison, défi du jour, marathon et défis entre amis. Installable (PWA).",
};
