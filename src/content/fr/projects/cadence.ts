import type { ProjectContent } from "@/types/content";

export const content: ProjectContent = {
  id: "cadence",
  seo: {
    title: "Cadence : application Android de podomètre social",
    description:
      "Cadence, podomètre social pour Android, gratuit et sans publicité : groupes, classements, défis. Pas comptés en arrière-plan sans GPS. Expo et Kotlin.",
  },
  label: "Cadence",
  hero: {
    eyebrow: "Application mobile · Android",
    h1: "Cadence, une application Android de podomètre social",
    intro:
      "Cadence est une application Android de podomètre social, gratuite et sans publicité, que je conçois et développe avec Expo et React Native. Elle compte les pas en arrière-plan sans GPS et permet de se mesurer à ses proches : groupes, classements et défis.",
    status: "En développement : pas encore disponible sur Google Play.",
    tags: ["React Native", "Expo", "Kotlin", "Supabase"],
  },
  idea: {
    paragraphs: [
      "Un podomètre social gratuit et sans publicité, qui reste un simple compteur de pas par défaut. Les fonctions sociales et cartographiques s'activent à la demande, depuis le profil : un module désactivé ne demande aucune autorisation et n'envoie aucune requête.",
      "La contrainte de départ : un coût récurrent nul. Le back-end tient sur les plans gratuits de Supabase et de Firebase, ce qui impose une vraie sobriété réseau, et la cartographie repose sur des services libres, sans clé d'API.",
    ],
    points: [
      "Comptage des pas sans GPS",
      "Gratuit, sans publicité",
      "Trois modules activables : Groupes, Carte et itinéraires, Rencontres sportives",
      "Coût récurrent nul",
    ],
  },
  features: {
    items: [
      {
        title: "Comptage en arrière-plan",
        text: "Un service natif compte les pas même application fermée. La notification permanente et le widget affichent le même total que l'accueil, avec une barre de tempo de 24 traits qui s'allument à mesure que l'objectif approche.",
      },
      {
        title: "Historique et récap partageable",
        text: "Vues jour, semaine, mois et année, et une image récapitulative à partager depuis l'historique.",
      },
      {
        title: "Groupes et classements",
        text: "Classements de groupe au jour, à la semaine et au mois, défis, discussion et invitation par lien. Le classement se met à jour en direct.",
      },
      {
        title: "Badges et rappels",
        text: "Badges et jalons attribués côté serveur. Un rappel à l'heure choisie indique les pas restants et le temps de marche estimé, et se tait si l'objectif est atteint.",
      },
      {
        title: "Widgets Android",
        text: "Un widget du jour et un widget de la semaine, rendus en version claire et sombre selon le thème du système.",
      },
      {
        title: "Carte et navigation à pied",
        text: "Points d'eau issus d'OpenStreetMap, signalement de fontaines et guidage piéton avec annonces vocales, qui continue écran verrouillé.",
      },
      {
        title: "Rencontres sportives",
        text: "Proposer une sortie à un lieu et une date, voir celles organisées dans un rayon de 20 km, les rejoindre ou les quitter.",
      },
      {
        title: "Health Connect",
        text: "Lecture des pas et de la distance dans Health Connect. Le total du jour retient la plus grande valeur entre le capteur et Health Connect, ce qui évite le double comptage montre et téléphone.",
      },
    ],
  },
  tech: {
    intro:
      "Une application Expo en TypeScript strict, un module natif Kotlin pour ce que JavaScript ne peut pas faire, et Supabase comme back-end.",
    items: [
      {
        title: "Expo, React Native et TypeScript",
        text: "Expo Router pour la navigation et les liens d'invitation, Zustand pour l'état local, TanStack Query pour le cache serveur et le hors-ligne, NativeWind pour les styles, Reanimated et moti pour les animations, en respectant le réglage « Supprimer les animations ».",
      },
      {
        title: "Un module Kotlin pour compter les pas",
        text: "Le capteur de pas de JavaScript s'arrête quand l'application est gelée. Un service natif au premier plan, abonné au capteur du téléphone, devient la source de vérité et partage ses totaux avec le widget.",
      },
      {
        title: "Supabase et la sécurité au niveau des lignes",
        text: "Authentification par code reçu par e-mail, Postgres, Realtime, Edge Functions et pg_cron. Personne ne lit directement les pas des autres : tout passe par des fonctions SQL de classement.",
      },
      {
        title: "Sobriété réseau",
        text: "Une seule ligne par utilisateur et par jour, mise à jour au plus toutes les deux minutes ou par tranche de 250 pas, jamais d'événements bruts.",
      },
      {
        title: "Notifications push",
        text: "Une file d'attente remplie par des triggers, vidée par une Edge Function vers Firebase Cloud Messaging. Sans Firebase, l'application fonctionne normalement.",
      },
      {
        title: "Cartographie libre",
        text: "MapLibre et OpenFreeMap pour la carte, Overpass pour les fontaines, Valhalla et OSRM pour les itinéraires, Photon pour la recherche, Open-Meteo pour la météo : gratuits et sans clé d'API.",
      },
    ],
    stack: [
      "Expo",
      "React Native",
      "TypeScript",
      "Kotlin",
      "Supabase",
      "PostgreSQL",
      "TanStack Query",
      "Zustand",
      "NativeWind",
      "Reanimated",
      "MapLibre",
      "Firebase Cloud Messaging",
      "Health Connect",
      "Jest",
    ],
  },
  challenges: {
    items: [
      {
        title: "Compter sans vider la batterie",
        text: "Aucun réveil programmé : rien ne tourne écran éteint et téléphone immobile. Le service relit Health Connect à l'allumage de l'écran et à intervalles espacés, plus souvent seulement quand on marche.",
      },
      {
        title: "Des classements à jour, application fermée",
        text: "Quand le total dépasse de 250 pas le dernier envoi, le service natif lance une tâche JavaScript sans interface qui réutilise la session et l'envoi de l'application. Côté serveur, un trigger garde toujours la plus grande valeur.",
      },
      {
        title: "Un guidage qui tient écran verrouillé",
        text: "La bibliothèque de localisation d'Expo livre les positions d'arrière-plan avec du retard écran éteint. Un second module natif fournit une position par seconde, sans demander la localisation en arrière-plan permanente.",
      },
      {
        title: "La confidentialité par construction",
        text: "Pas du jour lisibles uniquement via les classements, positions arrondies pour les fontaines signalées et les rencontres, localisation lue seulement à la demande par la carte, la météo et la navigation.",
      },
      {
        title: "Rester gratuit dans la durée",
        text: "Le plan gratuit de Supabase se met en pause après sept jours sans requête : un workflow GitHub Actions l'interroge toutes les 48 heures. Les serveurs publics de cartographie sont sollicités avec modération.",
      },
    ],
  },
  cta: {
    title: "Une application sur mesure en tête ?",
    text: "Application mobile ou web, back-end, notifications : parlons de votre projet en trente minutes.",
  },
  jsonLdDescription:
    "Application Android de podomètre social, gratuite et sans publicité : comptage des pas en arrière-plan sans GPS, groupes, classements, défis, widgets, carte des points d'eau et navigation à pied.",
};
