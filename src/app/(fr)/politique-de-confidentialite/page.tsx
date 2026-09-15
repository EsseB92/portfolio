import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacy } from "@/content/fr/legal";
import { legalMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return legalMetadata("fr", "privacy", privacy);
}

export default function Page() {
  return <LegalPage locale="fr" routeId="privacy" content={privacy} />;
}
