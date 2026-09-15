import { home as homeEn, hub as hubEn } from "@/content/en/home";
import { content as enCreationSiteWeb } from "@/content/en/services/creation-site-web";
import { content as enConseilMontagePc } from "@/content/en/services/conseil-montage-pc";
import { content as enDevStreaming } from "@/content/en/services/dev-streaming";
import { content as enGestionProjetDigital } from "@/content/en/services/gestion-projet-digital";
import { tracks as tracksEn } from "@/content/en/tracks";
import { ui as uiEn } from "@/content/en/ui";
import { home as homeFr, hub as hubFr } from "@/content/fr/home";
import { content as frCreationSiteWeb } from "@/content/fr/services/creation-site-web";
import { content as frConseilMontagePc } from "@/content/fr/services/conseil-montage-pc";
import { content as frDevStreaming } from "@/content/fr/services/dev-streaming";
import { content as frGestionProjetDigital } from "@/content/fr/services/gestion-projet-digital";
import { tracks as tracksFr } from "@/content/fr/tracks";
import { ui as uiFr, type UiStrings } from "@/content/fr/ui";
import type { Locale } from "@/lib/i18n";
import type { ServiceId, Track } from "@/lib/services";
import type {
  HomeContent,
  HubContent,
  ServiceContent,
  TrackContent,
} from "@/types/content";

type LocaleBundle = {
  ui: UiStrings;
  home: HomeContent;
  hub: HubContent;
  tracks: readonly TrackContent[];
  services: Record<ServiceId, ServiceContent>;
};

const bundles: Record<Locale, LocaleBundle> = {
  fr: {
    ui: uiFr,
    home: homeFr,
    hub: hubFr,
    tracks: tracksFr,
    services: {
      "creation-site-web": frCreationSiteWeb,
      "gestion-projet-digital": frGestionProjetDigital,
      "dev-streaming": frDevStreaming,
      "conseil-montage-pc": frConseilMontagePc,
    },
  },
  en: {
    ui: uiEn,
    home: homeEn,
    hub: hubEn,
    tracks: tracksEn,
    services: {
      "creation-site-web": enCreationSiteWeb,
      "gestion-projet-digital": enGestionProjetDigital,
      "dev-streaming": enDevStreaming,
      "conseil-montage-pc": enConseilMontagePc,
    },
  },
};

export function getUi(locale: Locale): UiStrings {
  return bundles[locale].ui;
}

export function getHome(locale: Locale): HomeContent {
  return bundles[locale].home;
}

export function getHub(locale: Locale): HubContent {
  return bundles[locale].hub;
}

export function getTracks(locale: Locale): readonly TrackContent[] {
  return bundles[locale].tracks;
}

export function getTrack(locale: Locale, id: Track): TrackContent {
  const track = bundles[locale].tracks.find((t) => t.id === id);
  if (!track) throw new Error(`Missing track content: ${locale}/${id}`);
  return track;
}

export function getService(locale: Locale, id: ServiceId): ServiceContent {
  return bundles[locale].services[id];
}

export function getServices(locale: Locale): readonly ServiceContent[] {
  return Object.values(bundles[locale].services);
}
