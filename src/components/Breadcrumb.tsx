import Link from "next/link";

export type Crumb = { label: string; href?: string };

type Props = {
  items: readonly Crumb[];
  label: string;
};

/** Fil d'Ariane visible ; le JSON-LD BreadcrumbList est généré séparément. */
export default function Breadcrumb({ items, label }: Props) {
  return (
    <nav aria-label={label} className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={last ? "text-foreground" : undefined}>
                  {item.label}
                </span>
              )}
              {!last && (
                <span aria-hidden="true" className="text-border">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
