import { ImageResponse } from "next/og";
import OgCard from "@/components/og/OgCard";
import { getHome } from "@/content";
import { identity } from "@/lib/data";
import { OG_SIZE, ogPalettes } from "@/lib/og";

export const dynamic = "force-static";

/** Visuel OG de la home (FR et EN), écrit dans out/og/home.png au build. */
export function GET() {
  const home = getHome("fr");
  return new ImageResponse(
    (
      <OgCard
        palette={ogPalettes.home}
        eyebrow="Portfolio"
        title={identity.name}
        subtitle={home.hero.jobTitle}
        footer="Next.js · React · TypeScript · WordPress · SEO · Sécurité"
      />
    ),
    OG_SIZE,
  );
}
