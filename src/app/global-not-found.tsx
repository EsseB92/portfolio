import type { Metadata } from "next";
import Link from "next/link";
import { getUi } from "@/content";
import { geistMono, geistSans } from "@/lib/fonts";
import { path } from "@/lib/i18n";
import "./globals.css";

/**
 * 404 global (le site a deux root layouts, FR et EN, sans layout commun).
 * Rendu en dehors des layouts : document HTML complet, bilingue, noindex.
 */
export const metadata: Metadata = {
  title: "404 — Page introuvable | Erdus",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  const fr = getUi("fr").notFound;
  const en = getUi("en").notFound;
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col items-center justify-center px-4 py-24 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">{fr.title}</h1>
        <p className="mt-3 text-muted">{fr.text}</p>
        <Link href={path("home", "fr")} className="btn btn-primary mt-8">
          {fr.back}
        </Link>
        <section lang="en" className="mt-16 border-t border-border pt-10">
          <h2 className="text-2xl font-bold tracking-tight">{en.title}</h2>
          <p className="mt-3 text-muted">{en.text}</p>
          <Link href={path("home", "en")} className="btn btn-secondary mt-6">
            {en.back}
          </Link>
        </section>
      </body>
    </html>
  );
}
