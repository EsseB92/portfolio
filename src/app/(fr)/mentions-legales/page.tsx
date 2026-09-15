import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legal } from "@/content/fr/legal";
import { legalMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return legalMetadata("fr", "legal", legal);
}

export default function Page() {
  return <LegalPage locale="fr" routeId="legal" content={legal} />;
}
