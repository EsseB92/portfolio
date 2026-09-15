import type { Metadata } from "next";
import HubPage from "@/components/HubPage";
import { hubMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return hubMetadata("en");
}

export default function Services() {
  return <HubPage locale="en" />;
}
