import { links } from "@/lib/data";
import type { RouteId } from "@/lib/i18n";
import type { ServiceId } from "@/lib/services";
import { videos, type ProjectVideo } from "@/lib/videos";

/** Projets phares qui ont leur propre page (FR /projets/<slug>/, EN /en/projects/<slug>/). */
export const projectIds = ["erdus-games", "cadence", "carnet"] as const;

export type ProjectId = (typeof projectIds)[number];

export type ProjectMeta = {
  id: ProjectId & RouteId;
  /** Site public ; null tant que le projet n'est pas accessible en ligne (pas de lien de téléchargement) */
  url: string | null;
  /** Offre associée (maillage interne et CTA de fin de page) */
  service: ServiceId;
  video?: ProjectVideo;
  /** Données structurées : sous-type de SoftwareApplication */
  schema: {
    type: "WebApplication" | "MobileApplication";
    applicationCategory: string;
    operatingSystem: string;
    /** Gratuité affirmée par le README du projet (offers à 0 €) */
    free: boolean;
  };
};

export const projectMeta: Record<ProjectId, ProjectMeta> = {
  "erdus-games": {
    id: "erdus-games",
    url: links.games,
    service: "dev-streaming",
    video: videos.games,
    schema: {
      type: "WebApplication",
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      free: false,
    },
  },
  cadence: {
    id: "cadence",
    url: null,
    service: "creation-site-web",
    video: videos.cadence,
    schema: {
      type: "MobileApplication",
      applicationCategory: "HealthApplication",
      operatingSystem: "Android",
      free: true,
    },
  },
  carnet: {
    id: "carnet",
    url: links.notes,
    service: "creation-site-web",
    video: videos.notes,
    schema: {
      type: "WebApplication",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      free: false,
    },
  },
};

export function isProjectId(id: string): id is ProjectId {
  return (projectIds as readonly string[]).includes(id);
}

/** Nom d'hôte affiché pour un lien externe (game.erdus.fr). */
export function hostname(href: string): string {
  return new URL(href).hostname;
}
