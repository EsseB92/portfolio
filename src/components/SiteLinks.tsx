/**
 * Liens entre les sites Erdus : Portfolio, Jeux, Réserver.
 *
 * Composant autonome : aucune dépendance au projet (ni Tailwind, ni data.ts),
 * aucun état client. Copiez ce fichier tel quel sur game.erdus.fr et
 * rdv.erdus.fr. Les couleurs suivent les variables CSS --muted, --foreground
 * et --accent si elles existent, avec des valeurs de repli sinon.
 */

export type SiteLinkId = "portfolio" | "games" | "booking";

export type SiteLinksProps = {
  /** Site courant : rendu sans lien, marqué aria-current="page" */
  current?: SiteLinkId;
  /** Libellé de la liste pour les lecteurs d'écran */
  label?: string;
  /** Libellés des trois liens (par défaut en français) */
  labels?: Partial<Record<SiteLinkId, string>>;
  className?: string;
};

const SITES: ReadonlyArray<{ id: SiteLinkId; href: string; label: string }> = [
  { id: "portfolio", href: "https://erdus.fr/", label: "Portfolio" },
  { id: "games", href: "https://game.erdus.fr/", label: "Jeux" },
  { id: "booking", href: "https://rdv.erdus.fr/", label: "Réserver" },
];

const css = `
.erdus-site-links ul{display:flex;align-items:center;gap:1.25rem;margin:0;padding:0;list-style:none;font-family:var(--font-geist-mono,ui-monospace,monospace);font-size:.7rem;letter-spacing:.16em;text-transform:uppercase}
.erdus-site-links a{color:var(--muted,#a1a1aa);text-decoration:none;transition:color 180ms ease-out}
.erdus-site-links a:hover{color:var(--foreground,#f4f4f5)}
.erdus-site-links [aria-current]{color:var(--accent,#a5b4fc)}
`;

export default function SiteLinks({
  current,
  label = "Sites Erdus",
  labels,
  className,
}: SiteLinksProps) {
  const classes = className ? `erdus-site-links ${className}` : "erdus-site-links";
  return (
    <nav aria-label={label} className={classes}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <ul>
        {SITES.map((site) => {
          const text = labels?.[site.id] ?? site.label;
          return (
            <li key={site.id}>
              {site.id === current ? (
                <span aria-current="page">{text}</span>
              ) : (
                <a href={site.href}>{text}</a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
