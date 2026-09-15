import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { homeMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return homeMetadata("en");
}

export default function Home() {
  return <HomePage locale="en" />;
}
