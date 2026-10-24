import type { ProjectContent } from "@/types/content";

export const content: ProjectContent = {
  id: "erdus-inspector",
  seo: {
    title: "Erdus Inspector : audit sécurité et SEO en un clic",
    description:
      "Erdus Inspector, extension Chrome d'audit express : en-têtes de sécurité, cookies, WordPress, cache CDN et SEO de la page, avec score et rapport Markdown.",
  },
  label: "Erdus Inspector",
  hero: {
    eyebrow: "Extension Chrome · Manifest V3",
    h1: "Erdus Inspector, l'audit sécurité et SEO d'une page en un clic",
    intro:
      "Erdus Inspector est une extension Chrome que j'ai conçue et développée pour auditer la page ouverte : en-têtes de sécurité, cookies, version de WordPress exposée, cache CDN et balises SEO. Chaque contrôle est noté et expliqué, et le rapport se copie en Markdown.",
    imageAlt:
      "La popup d'Erdus Inspector ouverte sur une page : score global de 43 et liste des contrôles de sécurité en échec (HSTS, CSP, X-Frame-Options).",
    tags: ["Chrome Extension", "Manifest V3", "JavaScript", "Sécurité web"],
  },
  link: {
    visit: "Installer depuis le Chrome Web Store",
    live: "Chrome Web Store :",
  },
  idea: {
    paragraphs: [
      "Je fais régulièrement des audits de sécurité des sites que j'héberge et de ceux de mes clients. Je voulais retrouver l'essentiel de ces contrôles dans le navigateur, sur n'importe quelle page, et pouvoir montrer le résultat à un client sans jargon.",
      "L'extension ne collecte rien : l'analyse se fait dans le navigateur et ne contacte que le site audité. Elle demande le minimum d'autorisations, et l'accès aux cookies d'un site n'est accordé que si l'utilisateur le décide.",
    ],
    points: [
      "Un score et une explication par contrôle",
      "Aucune donnée collectée",
      "Permissions minimales, accès site par site",
      "Rapport Markdown prêt pour le client",
    ],
  },
  features: {
    items: [
      {
        title: "En-têtes de sécurité",
        text: "CSP (avec repérage de 'unsafe-inline' et 'unsafe-eval'), HSTS, X-Frame-Options ou frame-ancestors, nosniff, Referrer-Policy et Permissions-Policy, ainsi que les versions de logiciels divulguées.",
      },
      {
        title: "Cookies",
        text: "Attributs Secure, HttpOnly et SameSite des cookies du site. Seuls les cookies de session font baisser le score : un cookie d'analyse posé en JavaScript ne peut pas être HttpOnly.",
      },
      {
        title: "WordPress et cache CDN",
        text: "Version de WordPress visible par la balise generator, les paramètres ?ver= ou le fichier readme.html. Statut du cache lu dans les en-têtes de Hostinger, Cloudflare, Vercel ou LiteSpeed.",
      },
      {
        title: "SEO de la page",
        text: "Title et meta description avec leurs longueurs, canonical, robots, Open Graph et Twitter card, h1 unique, hiérarchie des titres, images sans alt, JSON-LD, lang et viewport.",
      },
      {
        title: "Aperçus Google et partage",
        text: "La popup montre le résultat tel qu'il apparaîtra dans Google et sur les réseaux sociaux, à partir des balises de la page.",
      },
      {
        title: "Surlignage sur la page",
        text: "Un interrupteur entoure sur la page les images sans alt, les h1 en double et les sauts de niveau de titre, dans un calque isolé qui ne modifie pas le site.",
      },
      {
        title: "Score et badge",
        text: "Une note sur 100 par section et une note globale, affichée en couleur sur l'icône de l'extension pour l'onglet analysé.",
      },
      {
        title: "Rapport Markdown",
        text: "Le rapport complet, avec constats, explications et plan des titres, se copie en un clic pour un ticket, un e-mail ou un devis.",
      },
    ],
  },
  tech: {
    intro:
      "JavaScript sans framework ni dépendance, sans étape de build : le dossier de l'extension est publié tel quel.",
    items: [
      {
        title: "Manifest V3",
        text: "Un service worker orchestre l'analyse ; un script injecté à la demande lit la page et renvoie des données sérialisables, évaluées par le même code que la page d'aperçu.",
      },
      {
        title: "En-têtes sans webRequest",
        text: "Les en-têtes sont lus par une requête HEAD anonyme vers la page, grâce à l'accès temporaire d'activeTab. webRequest aurait exigé un accès permanent à tous les sites.",
      },
      {
        title: "Cookies site par site",
        text: "Chrome ne livre pas les cookies sous activeTab seul : l'extension demande alors l'accès au seul site audité, par une autorisation facultative et révocable.",
      },
      {
        title: "Calque de surlignage isolé",
        text: "Shadow DOM fermé et feuille de style construite : les styles de la page ne touchent pas le calque, et sa CSP ne le bloque pas.",
      },
      {
        title: "Tests dans un vrai Chrome",
        text: "L'extension est chargée dans un Chrome headless jetable piloté en CDP, puis lancée sur plusieurs sites réels pour comparer ses résultats aux en-têtes relevés à la main.",
      },
      {
        title: "Publication outillée",
        text: "Des scripts Node sans dépendance produisent le paquet du Chrome Web Store et les captures de la fiche, rendues en Chrome headless à partir de la vraie popup.",
      },
    ],
    stack: [
      "JavaScript",
      "Chrome Extensions",
      "Manifest V3",
      "Shadow DOM",
      "Chrome DevTools Protocol",
      "Node.js",
    ],
  },
  challenges: {
    items: [
      {
        title: "Des autorisations minimales",
        text: "Lire les en-têtes et les cookies d'un site sans demander « l'accès à toutes vos données sur tous les sites » : activeTab pour la page, et un accès facultatif demandé site par site pour les cookies.",
      },
      {
        title: "Pas de faux positifs",
        text: "Les essais sur de vrais sites ont corrigé l'analyse : les <title> des icônes SVG, la version de jQuery prise pour celle de WordPress, ou des cookies sans risque signalés à tort.",
      },
      {
        title: "Un rapport lisible par un client",
        text: "Chaque contrôle porte un constat précis et une explication en une phrase, pour que le rapport serve aussi bien au développeur qu'au client.",
      },
    ],
  },
  cta: {
    title: "Un audit de votre site ?",
    text: "Sécurité, performances, SEO : parlons de votre site en trente minutes.",
  },
  jsonLdDescription:
    "Extension Chrome d'audit de la page ouverte : en-têtes de sécurité, cookies, version de WordPress exposée, cache CDN et SEO, avec score, explications, surlignage des problèmes et rapport Markdown. Aucune donnée collectée.",
};
