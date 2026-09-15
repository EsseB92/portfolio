export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { locales, routes, url, type RouteId } from "@/lib/i18n";
import { lastModified } from "@/lib/lastmod";

type IndexableRoute = Exclude<RouteId, "thanks">;

/** Fichiers dont l'historique git donne la date réelle de modification. */
function sourcesFor(id: IndexableRoute): readonly string[] {
  switch (id) {
    case "home":
      return [
        "src/content/fr/home.ts",
        "src/content/en/home.ts",
        "src/components/HomePage.tsx",
      ];
    case "legal":
    case "privacy":
      return ["src/content/fr/legal.ts", "src/content/en/legal.ts"];
    case "services":
      return [
        "src/content/fr/home.ts",
        "src/content/en/home.ts",
        "src/content/fr/tracks.ts",
        "src/content/en/tracks.ts",
        "src/components/HubPage.tsx",
      ];
    default:
      return [
        `src/content/fr/services/${id}.ts`,
        `src/content/en/services/${id}.ts`,
        "src/components/ServicePage.tsx",
      ];
  }
}

const indexable = (Object.keys(routes) as RouteId[]).filter(
  (id): id is IndexableRoute => id !== "thanks",
);

/** Toutes les pages FR et EN, avec hreflang réciproques dans le sitemap. */
export default function sitemap(): MetadataRoute.Sitemap {
  return indexable.flatMap((id) => {
    const lastMod = lastModified(sourcesFor(id));
    const languages = Object.fromEntries(locales.map((l) => [l, url(id, l)]));
    const priority =
      id === "home" ? 1 : id === "services" ? 0.9 : id === "legal" || id === "privacy" ? 0.3 : 0.8;
    return locales.map((locale) => ({
      url: url(id, locale),
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages },
    }));
  });
}
