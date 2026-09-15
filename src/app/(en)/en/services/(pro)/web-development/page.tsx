import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return serviceMetadata("en", "creation-site-web");
}

export default function Page() {
  return <ServicePage locale="en" id="creation-site-web" />;
}
