import type { RouteId } from "@/lib/i18n";

export type Track = "pro" | "gaming";

export const serviceIds = [
  "creation-site-web",
  "gestion-projet-digital",
  "dev-streaming",
  "conseil-montage-pc",
] as const;

export type ServiceId = (typeof serviceIds)[number];

export type ServiceMeta = {
  id: ServiceId & RouteId;
  track: Track;
  /** Offre complémentaire liée en bas de page (maillage interne). */
  related: ServiceId;
  icon: string;
  /** Paramètre ?service= du lien de réservation rdv.erdus.fr/cadrage */
  bookingSlug: string;
};

export const serviceMeta: Record<ServiceId, ServiceMeta> = {
  "creation-site-web": {
    id: "creation-site-web",
    track: "pro",
    related: "gestion-projet-digital",
    icon: "code",
    bookingSlug: "creation-site-web",
  },
  "gestion-projet-digital": {
    id: "gestion-projet-digital",
    track: "pro",
    related: "creation-site-web",
    icon: "clipboard",
    bookingSlug: "gestion-projet-digital",
  },
  "dev-streaming": {
    id: "dev-streaming",
    track: "gaming",
    related: "conseil-montage-pc",
    icon: "gamepad",
    bookingSlug: "dev-streaming",
  },
  "conseil-montage-pc": {
    id: "conseil-montage-pc",
    track: "gaming",
    related: "dev-streaming",
    icon: "cpu",
    bookingSlug: "conseil-montage-pc",
  },
};

export const tracks: Record<Track, { services: readonly ServiceId[] }> = {
  pro: { services: ["creation-site-web", "gestion-projet-digital"] },
  gaming: { services: ["dev-streaming", "conseil-montage-pc"] },
};

export const trackIds = ["pro", "gaming"] as const satisfies readonly Track[];

export const BOOKING_URL = "https://rdv.erdus.fr/cadrage";

export function bookingUrl(service?: ServiceId): string {
  return service
    ? `${BOOKING_URL}?service=${serviceMeta[service].bookingSlug}`
    : BOOKING_URL;
}
