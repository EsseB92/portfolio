import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { getUi } from "@/content";
import { path, url, type Locale, type RouteId } from "@/lib/i18n";
import type { LegalPageContent } from "@/types/legal";

type Props = {
  locale: Locale;
  routeId: Extract<RouteId, "legal" | "privacy">;
  content: LegalPageContent;
};

/** Gabarit des pages légales : texte structuré, lien vers l'autre page légale. */
export default function LegalPage({ locale, routeId, content }: Props) {
  const ui = getUi(locale);
  const other: Extract<RouteId, "legal" | "privacy"> = routeId === "legal" ? "privacy" : "legal";
  const otherLabel = other === "legal" ? ui.footer.legal : ui.footer.privacy;
  const pageUrl = url(routeId, locale);

  return (
    <>
      <section aria-labelledby="titre-legal" className="hero-bg">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <Breadcrumb
            label={ui.breadcrumb.label}
            items={[
              { label: ui.breadcrumb.home, href: path("home", locale) },
              { label: content.h1 },
            ]}
          />
          <p className="eyebrow mt-8">{content.eyebrow}</p>
          <h1 id="titre-legal" className="mt-3 text-4xl font-bold tracking-tight text-balance">
            {content.h1}
          </h1>
          {content.updated && <p className="mt-3 text-sm text-muted">{content.updated}</p>}
        </div>
      </section>

      <div className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          {content.sections.map((section) => (
            <section key={section.title} className="border-b border-border py-8 first:pt-0 last:border-b-0">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <div className="mt-4 space-y-3 text-muted">
                {section.blocks.map((block, i) => {
                  if (block.type === "h3") {
                    return (
                      <h3 key={i} className="pt-2 font-semibold text-foreground">
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <ul key={i} className="list-disc space-y-1 pl-5">
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={i} className="leading-relaxed">
                      {block.text}
                    </p>
                  );
                })}
              </div>
            </section>
          ))}
          <p className="mt-8 text-sm">
            <Link href={path(other, locale)} className="font-medium text-accent underline-offset-4 hover:underline">
              {otherLabel}
            </Link>
          </p>
        </div>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": `${pageUrl}#breadcrumb`,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: ui.breadcrumb.home, item: url("home", locale) },
            { "@type": "ListItem", position: 2, name: content.h1, item: pageUrl },
          ],
        }}
      />
    </>
  );
}
