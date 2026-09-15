import type { Metadata, Viewport } from "next";
import RootShell from "@/components/RootShell";
import { rootMetadata } from "@/lib/seo";

export const metadata: Metadata = rootMetadata("fr");

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
};

/** Root layout des pages françaises (URL sans préfixe). */
export default function RootLayoutFr({ children }: { children: React.ReactNode }) {
  return <RootShell locale="fr">{children}</RootShell>;
}
