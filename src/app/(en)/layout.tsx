import type { Metadata, Viewport } from "next";
import RootShell from "@/components/RootShell";
import { rootMetadata } from "@/lib/seo";

export const metadata: Metadata = rootMetadata("en");

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
};

/** Root layout des pages anglaises (préfixe /en/). */
export default function RootLayoutEn({ children }: { children: React.ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>;
}
