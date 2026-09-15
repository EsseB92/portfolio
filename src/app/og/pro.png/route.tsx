import { ImageResponse } from "next/og";
import OgCard from "@/components/og/OgCard";
import { getService, getTrack } from "@/content";
import { OG_SIZE, ogPalettes } from "@/lib/og";

export const dynamic = "force-static";

/** Visuel OG de la piste « pro », écrit dans out/og/pro.png au build. */
export function GET() {
  const track = getTrack("fr", "pro");
  const a = getService("fr", "creation-site-web");
  const b = getService("fr", "gestion-projet-digital");
  return new ImageResponse(
    (
      <OgCard
        palette={ogPalettes.pro}
        eyebrow={track.eyebrow}
        title={`${a.label} · ${b.label}`}
        subtitle={track.description}
        footer="erdus.fr/services"
      />
    ),
    OG_SIZE,
  );
}
