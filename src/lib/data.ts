/**
 * Données indépendantes de la langue : identité, liens, chiffres.
 * Les textes (home, offres, interface) vivent dans src/content/{fr,en}/.
 */

export const SITE_URL = "https://erdus.fr";

export const identity = {
  name: "Bertrand Sudre",
  brand: "Erdus",
  locality: "Bois-Colombes",
  region: "Île-de-France",
  country: "FR",
  email: "contact@erdus.fr",
  /** Micro-entreprise (mentions légales) */
  siren: "824 177 414",
  /** Première expérience listée dans le parcours : base des années d'expérience */
  careerStartYear: 2015,
  /** Délai de réponse annoncé, en heures */
  responseHours: 48,
} as const;

export const links = {
  github: "https://github.com/EsseB92",
  linkedin: "https://www.linkedin.com/in/bertrand-sudre/",
  malt: "https://www.malt.fr/profile/bertrandsudre",
  portfolio: "https://erdus.fr",
  games: "https://game.erdus.fr",
  booking: "https://rdv.erdus.fr",
  portfolio3d: "https://3-d-portfolio-one-drab.vercel.app/",
  manufacturist: "https://manufacturist.com/",
  utlb: "https://op-utlb.fr/",
} as const;

/** Technologies par groupe : les intitulés de groupe sont traduits dans le contenu. */
export const skillItems = {
  frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js"],
  backend: ["PHP", "Symfony", "Twig", "WordPress", "Elementor"],
  tools: ["Docker", "GitHub", "Figma", "Notion"],
  automation: ["n8n", "Make", "Discord.js", "Twitch API", "OBS WebSocket"],
} as const;

export const allSkills: readonly string[] = Object.values(skillItems).flat();

export function yearsOfExperience(): number {
  return new Date().getFullYear() - identity.careerStartYear;
}
