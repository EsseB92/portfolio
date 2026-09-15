import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return serviceMetadata("fr", "gestion-projet-digital");
}

export default function Page() {
  return <ServicePage locale="fr" id="gestion-projet-digital" />;
}
