import Link from "next/link";
import { getServices, getUi } from "@/content";
import { identity, links } from "@/lib/data";
import { path, type Locale } from "@/lib/i18n";

type Props = { locale: Locale };

export default function Footer({ locale }: Props) {
  const ui = getUi(locale);
  const services = getServices(locale);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 text-sm text-muted sm:px-6 md:grid-cols-[1fr_auto]">
        <div>
          <p>
            © {new Date().getFullYear()} {identity.name} — {identity.brand}.{" "}
            {ui.footer.tagline}, {identity.locality}.
          </p>
          <ul className="mt-4 flex flex-wrap items-center gap-5">
            <li>
              <a href={links.github} rel="noopener" target="_blank" className="transition-colors hover:text-foreground">
                GitHub<span className="sr-only">{ui.newTab}</span>
              </a>
            </li>
            <li>
              <a href={links.linkedin} rel="noopener" target="_blank" className="transition-colors hover:text-foreground">
                LinkedIn<span className="sr-only">{ui.newTab}</span>
              </a>
            </li>
            <li>
              <a href={links.malt} rel="noopener" target="_blank" className="transition-colors hover:text-foreground">
                Malt<span className="sr-only">{ui.newTab}</span>
              </a>
            </li>
            <li>
              <a href={links.games} className="transition-colors hover:text-foreground">
                {ui.siteLinks.games} — game.erdus.fr
              </a>
            </li>
            <li>
              <a href={links.booking} className="transition-colors hover:text-foreground">
                {ui.siteLinks.booking} — rdv.erdus.fr
              </a>
            </li>
          </ul>
        </div>
        <nav aria-label={ui.footer.servicesTitle}>
          <p className="eyebrow">{ui.footer.servicesTitle}</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href={path("services", locale)} className="transition-colors hover:text-foreground">
                {ui.nav.services}
              </Link>
            </li>
            {services.map((service) => (
              <li key={service.id}>
                <Link href={path(service.id, locale)} className="transition-colors hover:text-foreground">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
