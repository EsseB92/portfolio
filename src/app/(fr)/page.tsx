import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { homeMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return homeMetadata("fr");
}

export default function Home() {
  return <HomePage locale="fr" />;
}
