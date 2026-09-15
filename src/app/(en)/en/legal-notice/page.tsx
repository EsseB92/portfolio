import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legal } from "@/content/en/legal";
import { legalMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return legalMetadata("en", "legal", legal);
}

export default function Page() {
  return <LegalPage locale="en" routeId="legal" content={legal} />;
}
