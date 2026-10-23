import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { projectMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return projectMetadata("en", "cadence");
}

export default function Page() {
  return <ProjectPage locale="en" id="cadence" />;
}
