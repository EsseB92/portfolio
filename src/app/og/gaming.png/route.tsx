import { ImageResponse } from "next/og";
import OgCard from "@/components/og/OgCard";
import { getService, getTrack } from "@/content";
import { OG_SIZE, ogPalettes } from "@/lib/og";

export const dynamic = "force-static";

/** Visuel OG de la piste « gaming », écrit dans out/og/gaming.png au build. */
export function GET() {
  const track = getTrack("fr", "gaming");
  const a = getService("fr", "dev-streaming");
  const b = getService("fr", "conseil-montage-pc");
  return new ImageResponse(
    (
      <OgCard
        palette={ogPalettes.gaming}
        eyebrow={track.eyebrow}
        title={`${a.label} · ${b.label}`}
        subtitle={track.description}
        footer="erdus.fr/services"
      />
    ),
    OG_SIZE,
  );
}
