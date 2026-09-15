import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return serviceMetadata("en", "gestion-projet-digital");
}

export default function Page() {
  return <ServicePage locale="en" id="gestion-projet-digital" />;
}
