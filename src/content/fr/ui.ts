/** Chaînes d'interface FR : navigation, formulaire, libellés communs. */
export const ui = {
  skipLink: "Aller au contenu principal",
  brandHome: "Erdus — retour à l'accueil",
  nav: {
    label: "Navigation principale",
    method: "Méthode",
    skills: "Compétences",
    experience: "Parcours",
    services: "Services",
    projects: "Projets",
    faq: "FAQ",
    contact: "Contact",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  siteLinks: {
    label: "Sites Erdus",
    portfolio: "Portfolio",
    games: "Jeux",
    booking: "Réserver",
  },
  lang: {
    switchLabel: "Read this page in English",
    switchShort: "EN",
  },
  breadcrumb: { label: "Fil d'Ariane", home: "Accueil", services: "Services" },
  newTab: " (nouvel onglet)",
  booking: {
    label: "Réserver un cadrage gratuit — 30 min",
    labelShort: "Cadrage gratuit — 30 min",
    hint: "Visio de 30 minutes, sans engagement, pour cadrer votre besoin.",
  },
  figures: {
    title: "Chiffres-clés",
    years: "années d'expérience",
    response: "de délai de réponse",
    offers: "offres, deux univers",
  },
  service: {
    eyebrowPro: "Projets digitaux",
    eyebrowGaming: "Streaming & hardware",
    relatedTitle: "Pour aller plus loin",
    relatedHub: "Voir les quatre offres",
    relatedPrefix: "Offre complémentaire :",
    casesNote: "Cas type",
    stepLabel: "Étape",
    seeDeliverables: "Voir ce qui est livré",
  },
  hub: {
    seeOffer: "Découvrir l'offre",
  },
  form: {
    name: "Nom",
    namePlaceholder: "Votre nom",
    email: "E-mail",
    emailPlaceholder: "vous@exemple.fr",
    message: "Message",
    messagePlaceholder:
      "Décrivez votre projet : objectif, délais, budget indicatif…",
    submit: "Envoyer le message",
    sending: "Envoi en cours…",
    success: "Message bien envoyé ! Je vous réponds sous 48 heures.",
    errorName: "Indiquez votre nom (2 à 100 caractères).",
    errorEmail: "Indiquez une adresse e-mail valide.",
    errorMessage: "Votre message doit faire entre 10 et 5 000 caractères.",
    errorFix: "Veuillez corriger les champs signalés.",
    errorGeneric: "L'envoi a échoué. Réessayez plus tard ou écrivez-moi à",
    unavailable:
      "Le formulaire est momentanément indisponible. Écrivez-moi directement à",
    honeypot: "Ne pas cocher cette case",
    subject: "[Portfolio] Nouveau message",
  },
  thanks: {
    title: "Message envoyé",
    text: "Merci, votre message est bien arrivé. Je vous réponds sous 48 heures.",
    back: "Retour à l'accueil",
  },
  footer: {
    tagline: "Développeur web freelance",
    servicesTitle: "Offres",
    legalTitle: "Légal",
    legal: "Mentions légales",
    privacy: "Politique de confidentialité",
  },
  notFound: {
    title: "Page introuvable",
    text: "Cette page n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },
} as const;

type DeepStrings<T> = {
  readonly [K in keyof T]: T[K] extends string ? string : DeepStrings<T[K]>;
};

/** Même structure que le fichier FR, valeurs libres (utilisé par en/ui.ts). */
export type UiStrings = DeepStrings<typeof ui>;
