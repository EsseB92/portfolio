"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SiteLinks from "@/components/SiteLinks";
import type { UiStrings } from "@/content/fr/ui";
import { identity } from "@/lib/data";
import {
  otherLocale,
  path,
  routeIdFromPath,
  type Locale,
} from "@/lib/i18n";

type Props = {
  locale: Locale;
  ui: UiStrings;
};

/** highlight : lien de page (actif selon le pathname) et non ancre (scroll-spy) */
type NavItem = { href: string; label: string; section?: string; highlight?: boolean };

export default function Header({ locale, ui }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const home = path("home", locale);
  const services = path("services", locale);
  const onServices = pathname.startsWith(services.replace(/\/$/, ""));

  const navItems: NavItem[] = [
    { href: services, label: ui.nav.services, highlight: true },
    { href: `${home}#methode`, label: ui.nav.method, section: "methode" },
    { href: `${home}#competences`, label: ui.nav.skills, section: "competences" },
    { href: `${home}#parcours`, label: ui.nav.experience, section: "parcours" },
    { href: `${home}#projets`, label: ui.nav.projects, section: "projets" },
    { href: `${home}#faq`, label: ui.nav.faq, section: "faq" },
    { href: `${home}#contact`, label: ui.nav.contact, section: "contact" },
  ];

  // Lien FR/EN : URL équivalente dans l'autre langue (repli : accueil)
  const target = otherLocale(locale);
  const routeId = routeIdFromPath(pathname) ?? "home";
  const switchHref = path(routeId, target);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Scroll-spy : met en évidence la section visible (home uniquement)
  const isHome = pathname === home || pathname === home.replace(/\/$/, "");
  useEffect(() => {
    if (!isHome) return;
    const sections = navItems
      .map((item) => (item.section ? document.getElementById(item.section) : null))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // navItems est dérivé de locale/pathname : les dépendances suffisent
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, pathname, isHome]);

  const isCurrent = (item: NavItem) =>
    item.highlight ? onServices : isHome && item.section === activeId;

  const langLink = (className: string, onClick?: () => void) => (
    <Link
      href={switchHref}
      hrefLang={target}
      lang={target}
      aria-label={ui.lang.switchLabel}
      className={className}
      onClick={onClick}
    >
      {ui.lang.switchShort}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      {/* Bandeau : liens entre les sites Erdus + langue */}
      <div className="border-b border-border/60">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-1.5 sm:px-6">
          <SiteLinks
            current="portfolio"
            label={ui.siteLinks.label}
            labels={{
              portfolio: ui.siteLinks.portfolio,
              games: ui.siteLinks.games,
              booking: ui.siteLinks.booking,
            }}
          />
          {langLink(
            "font-mono text-xs font-semibold tracking-[0.16em] text-muted transition-colors hover:text-accent",
            () => setOpen(false),
          )}
        </div>
      </div>

      <nav
        aria-label={ui.nav.label}
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6"
      >
        <Link
          href={home}
          className="font-mono text-lg font-bold tracking-tight transition-colors hover:text-accent"
          aria-label={ui.brandHome}
        >
          {identity.brand}
          <span aria-hidden="true" className="text-accent">
            .
          </span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrent(item) ? "true" : undefined}
                className="nav-link text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-control)] border border-border transition-colors hover:border-accent md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? ui.nav.closeMenu : ui.nav.openMenu}</span>
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      <ul
        id="menu-mobile"
        hidden={!open}
        className="border-t border-border px-4 pb-4 md:hidden"
      >
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isCurrent(item) ? "true" : undefined}
              className="block py-3 text-sm font-medium text-muted hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
