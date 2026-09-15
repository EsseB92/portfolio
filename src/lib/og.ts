import type { Track } from "@/lib/services";

/** Couleurs des visuels Open Graph, alignées sur les tokens de globals.css. */
export type OgPalette = {
  background: string;
  soft: string;
  accent: string;
  accent2: string;
  foreground: string;
  muted: string;
};

export const ogPalettes: Record<Track | "home", OgPalette> = {
  home: {
    background: "#0a0a0f",
    soft: "#1e1b4b",
    accent: "#a5b4fc",
    accent2: "#818cf8",
    foreground: "#f4f4f5",
    muted: "#a1a1aa",
  },
  pro: {
    background: "#0a0a0f",
    soft: "#1e1b4b",
    accent: "#a5b4fc",
    accent2: "#818cf8",
    foreground: "#f4f4f5",
    muted: "#a1a1aa",
  },
  gaming: {
    background: "#0b0f17",
    soft: "#1a2000",
    accent: "#c8f135",
    accent2: "#ff3da5",
    foreground: "#f4f4f5",
    muted: "#a1a1aa",
  },
};

export const OG_SIZE = { width: 1200, height: 630 };
