import { SITE_URL } from "@/lib/data";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const localeTags: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en-US",
};

export const ogLocales: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
};

/**
 * Table des routes : une entrée par page, un chemin par langue.
 * Les slugs anglais sont traduits (pas de simple préfixe /en/).
 * Toutes les URL se terminent par « / » (trailingSlash: true).
 */
export const routes = {
  home: { fr: "/", en: "/en/" },
  services: { fr: "/services/", en: "/en/services/" },
  "creation-site-web": {
    fr: "/services/creation-site-web/",
    en: "/en/services/web-development/",
  },
  "gestion-projet-digital": {
    fr: "/services/gestion-projet-digital/",
    en: "/en/services/digital-project-management/",
  },
  "dev-streaming": {
    fr: "/services/dev-streaming/",
    en: "/en/services/streaming-development/",
  },
  "conseil-montage-pc": {
    fr: "/services/conseil-montage-pc/",
    en: "/en/services/custom-pc-building/",
  },
  thanks: { fr: "/merci/", en: "/en/thank-you/" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteId = keyof typeof routes;

export function path(id: RouteId, locale: Locale): string {
  return routes[id][locale];
}

export function absoluteUrl(pathname: string): string {
  return `${SITE_URL}${pathname}`;
}

export function url(id: RouteId, locale: Locale): string {
  return absoluteUrl(path(id, locale));
}

/** Canonical auto-référent + hreflang réciproques (fr, en, x-default = fr). */
export function alternatesFor(id: RouteId, locale: Locale) {
  return {
    canonical: url(id, locale),
    languages: {
      fr: url(id, "fr"),
      en: url(id, "en"),
      "x-default": url(id, "fr"),
    },
  };
}

export function otherLocale(locale: Locale): Locale {
  return locale === "fr" ? "en" : "fr";
}

/** Retrouve l'identifiant de route à partir d'un pathname (client). */
export function routeIdFromPath(pathname: string): RouteId | null {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  for (const id of Object.keys(routes) as RouteId[]) {
    for (const locale of locales) {
      if (routes[id][locale] === normalized) return id;
    }
  }
  return null;
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
}
