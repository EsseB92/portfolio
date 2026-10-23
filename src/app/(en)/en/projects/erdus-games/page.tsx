import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { projectMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return projectMetadata("en", "erdus-games");
}

export default function Page() {
  return <ProjectPage locale="en" id="erdus-games" />;
}
