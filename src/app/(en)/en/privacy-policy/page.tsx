import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacy } from "@/content/en/legal";
import { legalMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return legalMetadata("en", "privacy", privacy);
}

export default function Page() {
  return <LegalPage locale="en" routeId="privacy" content={privacy} />;
}
