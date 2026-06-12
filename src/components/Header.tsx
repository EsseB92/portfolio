"use client";

import { useEffect, useState } from "react";
import { identity } from "@/lib/data";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#competences", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#projets", label: "Projets" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6"
      >
        <a
          href="#"
          className="font-mono text-lg font-bold tracking-tight"
          aria-label={`${identity.brand} — retour en haut de page`}
        >
          {identity.brand}
          <span aria-hidden="true" className="text-accent">
            .
          </span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">
            {open ? "Fermer le menu" : "Ouvrir le menu"}
          </span>
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
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
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
            <a
              href={item.href}
              className="block py-3 text-sm font-medium text-muted hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
