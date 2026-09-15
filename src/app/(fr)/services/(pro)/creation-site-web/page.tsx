import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return serviceMetadata("fr", "creation-site-web");
}

export default function Page() {
  return <ServicePage locale="fr" id="creation-site-web" />;
}
