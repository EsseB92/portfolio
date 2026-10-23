import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { projectMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return projectMetadata("fr", "erdus-games");
}

export default function Page() {
  return <ProjectPage locale="fr" id="erdus-games" />;
}
