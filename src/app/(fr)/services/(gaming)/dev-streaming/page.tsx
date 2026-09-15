import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return serviceMetadata("fr", "dev-streaming");
}

export default function Page() {
  return <ServicePage locale="fr" id="dev-streaming" />;
}
