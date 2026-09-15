export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "h3"; text: string };

export type LegalSection = {
  title: string;
  blocks: readonly LegalBlock[];
};

export type LegalPageContent = {
  seo: { title: string; description: string };
  eyebrow: string;
  h1: string;
  /** Date de dernière mise à jour affichée sous le titre (optionnelle) */
  updated?: string;
  sections: readonly LegalSection[];
};
