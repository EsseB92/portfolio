export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { getHome } from "@/content";
import { identity } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  const home = getHome("fr");
  return {
    name: `${identity.brand} — ${identity.name}`,
    short_name: identity.brand,
    description: home.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#0a0a0f",
    lang: "fr",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
