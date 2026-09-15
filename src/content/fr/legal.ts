import { identity, links } from "@/lib/data";
import type { LegalPageContent } from "@/types/legal";

/** Mentions légales : portées depuis l'ancien site, adaptées à la nouvelle stack. */
export const legal: LegalPageContent = {
  seo: {
    title: "Mentions légales",
    description:
      "Mentions légales du site erdus.fr : éditeur, hébergeur, propriété intellectuelle, données personnelles et droit applicable.",
  },
  eyebrow: "Légal",
  h1: "Mentions légales",
  sections: [
    {
      title: "Éditeur du site",
      blocks: [
        { type: "p", text: `${identity.name} — Développeur web freelance` },
        { type: "p", text: "Activité exercée en tant qu'auto-entrepreneur (micro-entreprise)" },
        { type: "p", text: `SIRET : ${identity.siret}` },
        { type: "p", text: `${identity.locality}, ${identity.region}, France` },
        { type: "p", text: `E-mail : ${identity.email}` },
        { type: "p", text: `Site web : ${links.portfolio}` },
      ],
    },
    {
      title: "Hébergement",
      blocks: [
        { type: "p", text: "Hostinger International Ltd." },
        { type: "p", text: "61 Lordou Vironos Street, 6023 Larnaca, Chypre" },
        { type: "p", text: "Site web : www.hostinger.fr" },
      ],
    },
    {
      title: "Propriété intellectuelle",
      blocks: [
        {
          type: "p",
          text: "L'ensemble du contenu de ce site (textes, images, code source, design) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable de l'auteur.",
        },
      ],
    },
    {
      title: "Responsabilité",
      blocks: [
        {
          type: "p",
          text: `Les informations contenues sur ce site sont fournies à titre indicatif. ${identity.name} s'efforce de les maintenir à jour, mais ne saurait être tenu responsable des erreurs ou omissions éventuelles.`,
        },
        {
          type: "p",
          text: `Ce site peut contenir des liens vers des sites tiers. ${identity.name} n'est pas responsable du contenu de ces sites externes.`,
        },
      ],
    },
    {
      title: "Données personnelles",
      blocks: [
        {
          type: "p",
          text: "Les données collectées via le formulaire de contact (nom, adresse e-mail, message) sont utilisées uniquement pour répondre à vos demandes. Elles ne sont ni vendues, ni utilisées à des fins commerciales.",
        },
        {
          type: "p",
          text: `Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit : ${identity.email}`,
        },
        {
          type: "p",
          text: "Pour plus d'informations, consultez la politique de confidentialité.",
        },
      ],
    },
    {
      title: "Cookies",
      blocks: [
        {
          type: "p",
          text: "Ce site n'utilise pas de cookies de traçage ou publicitaires. Aucun outil d'analyse de trafic tiers n'est intégré.",
        },
      ],
    },
    {
      title: "Droit applicable",
      blocks: [
        {
          type: "p",
          text: "Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.",
        },
      ],
    },
  ],
};

export const privacy: LegalPageContent = {
  seo: {
    title: "Politique de confidentialité",
    description:
      "Politique de confidentialité du site erdus.fr : données collectées par le formulaire de contact, base légale, durée de conservation, vos droits et sécurité.",
  },
  eyebrow: "Légal",
  h1: "Politique de confidentialité",
  updated: "Dernière mise à jour : septembre 2026",
  sections: [
    {
      title: "Qui sommes-nous ?",
      blocks: [
        {
          type: "p",
          text: `Ce site est édité par ${identity.name}, développeur web freelance, accessible à l'adresse ${links.portfolio}.`,
        },
        { type: "p", text: `Contact : ${identity.email}` },
      ],
    },
    {
      title: "Données collectées",
      blocks: [
        { type: "h3", text: "Formulaire de contact" },
        {
          type: "p",
          text: "Lorsque vous utilisez le formulaire de contact, les données suivantes sont collectées :",
        },
        {
          type: "list",
          items: [
            "Nom — pour personnaliser la réponse",
            "Adresse e-mail — pour vous répondre",
            "Message — pour traiter votre demande",
          ],
        },
        {
          type: "p",
          text: "Ces données sont utilisées uniquement pour répondre à votre demande. Elles ne sont ni stockées en base de données par nos soins, ni utilisées à des fins commerciales.",
        },
        {
          type: "p",
          text: "L'acheminement du formulaire est assuré par Web3Forms (Web3Forms, service d'envoi de formulaires), qui agit en qualité de sous-traitant : il transmet votre message par e-mail à l'éditeur du site et ne l'exploite pas à d'autres fins. Le site étant statique, aucune donnée n'est traitée sur le serveur d'hébergement.",
        },
        { type: "h3", text: "Données de navigation" },
        {
          type: "p",
          text: "Ce site ne dispose d'aucun outil de suivi (Google Analytics, Hotjar, pixels publicitaires, etc.). Aucune donnée de navigation n'est collectée.",
        },
        { type: "h3", text: "Cookies" },
        {
          type: "p",
          text: "Ce site n'utilise aucun cookie de traçage, publicitaire ou analytique. Les polices sont hébergées sur le site : aucune ressource externe n'est chargée lors de la navigation.",
        },
      ],
    },
    {
      title: "Base légale du traitement",
      blocks: [
        {
          type: "p",
          text: "Le traitement des données du formulaire de contact repose sur votre consentement explicite (article 6.1.a du RGPD) : en soumettant le formulaire, vous acceptez que vos données soient utilisées pour traiter votre demande.",
        },
      ],
    },
    {
      title: "Durée de conservation",
      blocks: [
        {
          type: "p",
          text: "Les e-mails reçus via le formulaire de contact sont conservés le temps nécessaire au traitement de votre demande, puis supprimés dans un délai maximal de 12 mois.",
        },
      ],
    },
    {
      title: "Vos droits",
      blocks: [
        { type: "p", text: "Conformément au RGPD, vous disposez des droits suivants :" },
        {
          type: "list",
          items: [
            "Droit d'accès — obtenir une copie de vos données",
            "Droit de rectification — corriger vos données inexactes",
            "Droit à l'effacement — demander la suppression de vos données",
            "Droit d'opposition — vous opposer au traitement de vos données",
            "Droit à la portabilité — recevoir vos données dans un format structuré",
          ],
        },
        { type: "p", text: `Pour exercer ces droits : ${identity.email}` },
        {
          type: "p",
          text: "En cas de réclamation, vous pouvez contacter la CNIL (www.cnil.fr).",
        },
      ],
    },
    {
      title: "Sécurité des données",
      blocks: [
        { type: "p", text: "Ce site met en œuvre plusieurs mesures techniques pour protéger vos données :" },
        {
          type: "list",
          items: [
            "Connexion chiffrée via HTTPS (TLS)",
            "En-têtes de sécurité HTTP (CSP, HSTS, X-Frame-Options)",
            "Protection anti-robots du formulaire (champ piège) et filtrage anti-spam du prestataire d'envoi",
          ],
        },
      ],
    },
    {
      title: "Services tiers",
      blocks: [
        {
          type: "p",
          text: "Polices d'écriture — les polices sont hébergées sur ce site. Aucune requête n'est envoyée à Google Fonts ni à un autre service tiers pendant la navigation.",
        },
        {
          type: "p",
          text: "Formulaire de contact — Web3Forms reçoit les données du formulaire au moment de l'envoi, uniquement pour les transmettre à l'éditeur du site.",
        },
        {
          type: "p",
          text: "Prise de rendez-vous — les liens « Réserver un cadrage » mènent vers rdv.erdus.fr, un autre site de l'éditeur soumis à sa propre politique de confidentialité.",
        },
      ],
    },
    {
      title: "Modifications",
      blocks: [
        {
          type: "p",
          text: "Cette politique de confidentialité peut être mise à jour ponctuellement. La date de dernière mise à jour est indiquée en haut de cette page.",
        },
      ],
    },
  ],
};
