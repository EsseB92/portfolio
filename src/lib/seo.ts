import type { Metadata } from "next";
import { getHome, getHub, getService, getServices, getUi } from "@/content";
import { SITE_URL, allSkills, identity, links } from "@/lib/data";
import {
  alternatesFor,
  localeTags,
  ogLocales,
  otherLocale,
  url,
  type Locale,
  type RouteId,
} from "@/lib/i18n";
import { serviceIds, serviceMeta, type ServiceId, type Track } from "@/lib/services";
import type { LegalPageContent } from "@/types/legal";

/* ---------------------------------------------------------------------------
   Identifiants stables du @graph (identiques sur toutes les pages)
   ------------------------------------------------------------------------ */
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const ORG_ID = `${SITE_URL}/#organization`;

export const OG_IMAGE: Record<Track | "home", string> = {
  home: "/og/home.png",
  pro: "/og/pro.png",
  gaming: "/og/gaming.png",
};

const OG_SIZE = { width: 1200, height: 630 };

function ogImages(image: string, alt: string) {
  return [{ url: image, ...OG_SIZE, alt }];
}

type PageSocial = {
  locale: Locale;
  title: string;
  description: string;
  url: string;
  image: string;
};

/** openGraph et twitter complets pour une page (Next remplace ces clés
    en bloc : les valeurs du layout ne sont pas fusionnées). */
function social({ locale, title, description, url: pageUrl, image }: PageSocial) {
  return {
    openGraph: {
      type: "website" as const,
      locale: ogLocales[locale],
      alternateLocale: ogLocales[otherLocale(locale)],
      siteName: identity.brand,
      title,
      description,
      url: pageUrl,
      images: ogImages(image, title),
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [{ url: image, alt: title }],
    },
  };
}

/* ---------------------------------------------------------------------------
   Métadonnées
   ------------------------------------------------------------------------ */
export function rootMetadata(locale: Locale): Metadata {
  const home = getHome(locale);
  const alt = home.seo.title;
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: home.seo.title,
      template: `%s | ${identity.brand}`,
    },
    description: home.seo.description,
    keywords: [...home.seo.keywords],
    authors: [{ name: identity.name, url: SITE_URL }],
    creator: identity.name,
    openGraph: {
      type: "website",
      locale: ogLocales[locale],
      alternateLocale: ogLocales[otherLocale(locale)],
      siteName: identity.brand,
      images: ogImages(OG_IMAGE.home, alt),
    },
    twitter: {
      card: "summary_large_image",
      images: [OG_IMAGE.home],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function homeMetadata(locale: Locale): Metadata {
  const home = getHome(locale);
  return {
    title: { absolute: home.seo.title },
    description: home.seo.description,
    alternates: alternatesFor("home", locale),
    ...social({
      locale,
      title: home.seo.title,
      description: home.seo.description,
      url: url("home", locale),
      image: OG_IMAGE.home,
    }),
  };
}

export function hubMetadata(locale: Locale): Metadata {
  const hub = getHub(locale);
  const title = `${hub.seo.title} | ${identity.brand}`;
  return {
    title: hub.seo.title,
    description: hub.seo.description,
    alternates: alternatesFor("services", locale),
    ...social({
      locale,
      title,
      description: hub.seo.description,
      url: url("services", locale),
      image: OG_IMAGE.pro,
    }),
  };
}

export function serviceMetadata(locale: Locale, id: ServiceId): Metadata {
  const service = getService(locale, id);
  const track = serviceMeta[id].track;
  const title = `${service.seo.title} | ${identity.brand}`;
  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: alternatesFor(id, locale),
    ...social({
      locale,
      title,
      description: service.seo.description,
      url: url(id, locale),
      image: OG_IMAGE[track],
    }),
  };
}

export function legalMetadata(
  locale: Locale,
  id: Extract<RouteId, "legal" | "privacy">,
  content: LegalPageContent,
): Metadata {
  const title = `${content.seo.title} | ${identity.brand}`;
  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: alternatesFor(id, locale),
    ...social({
      locale,
      title,
      description: content.seo.description,
      url: url(id, locale),
      image: OG_IMAGE.home,
    }),
  };
}

export function noIndexMetadata(title: string): Metadata {
  return { title, robots: { index: false, follow: false } };
}

/* ---------------------------------------------------------------------------
   Données structurées
   ------------------------------------------------------------------------ */
function areaServed() {
  return { "@type": "AdministrativeArea", name: identity.region };
}

/** @graph commun : Person, WebSite, ProfilePage + ProfessionalService (Erdus). */
export function rootGraph(locale: Locale) {
  const home = getHome(locale);
  const inLanguage = localeTags[locale];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: identity.name,
        jobTitle: home.hero.jobTitle,
        description: home.hero.tagline,
        url: SITE_URL,
        image: `${SITE_URL}${OG_IMAGE.home}`,
        email: `mailto:${identity.email}`,
        sameAs: [links.github, links.linkedin, links.malt],
        worksFor: { "@id": ORG_ID },
        address: {
          "@type": "PostalAddress",
          addressLocality: identity.locality,
          addressRegion: identity.region,
          addressCountry: identity.country,
        },
        knowsAbout: allSkills,
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: identity.brand,
        url: SITE_URL,
        inLanguage,
        publisher: { "@id": PERSON_ID },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        inLanguage,
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": PERSON_ID },
      },
      {
        "@type": "ProfessionalService",
        "@id": ORG_ID,
        name: identity.brand,
        url: SITE_URL,
        image: `${SITE_URL}${OG_IMAGE.home}`,
        description: home.seo.description,
        email: `mailto:${identity.email}`,
        founder: { "@id": PERSON_ID },
        areaServed: areaServed(),
        address: {
          "@type": "PostalAddress",
          addressLocality: identity.locality,
          addressRegion: identity.region,
          addressCountry: identity.country,
        },
        sameAs: [links.github, links.linkedin, links.malt, links.games, links.booking],
      },
    ],
  };
}

/** Home : ItemList des quatre offres + FAQPage (FAQ visible sur la page). */
export function homeGraph(locale: Locale) {
  const home = getHome(locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "@id": `${url("home", locale)}#services`,
        name: getUi(locale).nav.services,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: serviceIds.length,
        itemListElement: getServices(locale).map((service, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: service.label,
          url: url(service.id, locale),
        })),
      },
      faqPage(locale, "home", home.faq.items),
    ],
  };
}

/** Page service : Service + BreadcrumbList + FAQPage. */
export function serviceGraph(locale: Locale, id: ServiceId) {
  const service = getService(locale, id);
  const ui = getUi(locale);
  const pageUrl = url(id, locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url(id, "fr")}#service`,
        name: service.jsonLd.name,
        description: service.jsonLd.description,
        serviceType: service.jsonLd.serviceType,
        url: pageUrl,
        provider: { "@id": ORG_ID },
        areaServed: areaServed(),
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `https://rdv.erdus.fr/cadrage?service=${serviceMeta[id].bookingSlug}`,
          availableLanguage: ["fr", "en"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: ui.breadcrumb.home, item: url("home", locale) },
          { "@type": "ListItem", position: 2, name: ui.breadcrumb.services, item: url("services", locale) },
          { "@type": "ListItem", position: 3, name: service.label, item: pageUrl },
        ],
      },
      faqPage(locale, id, service.faq.items),
    ],
  };
}

/** Hub : BreadcrumbList + ItemList. */
export function hubGraph(locale: Locale) {
  const ui = getUi(locale);
  const pageUrl = url("services", locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: ui.breadcrumb.home, item: url("home", locale) },
          { "@type": "ListItem", position: 2, name: ui.breadcrumb.services, item: pageUrl },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#list`,
        name: ui.nav.services,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: serviceIds.length,
        itemListElement: getServices(locale).map((service, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: service.label,
          url: url(service.id, locale),
        })),
      },
    ],
  };
}

function faqPage(
  locale: Locale,
  routeId: "home" | ServiceId,
  items: readonly { question: string; answer: string }[],
) {
  return {
    "@type": "FAQPage",
    "@id": `${url(routeId, locale)}#faq`,
    inLanguage: localeTags[locale],
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
