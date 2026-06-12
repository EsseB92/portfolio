import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import { SITE_URL, identity, links, skills } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${identity.name} — ${identity.jobTitle} | ${identity.brand}`,
    template: `%s | ${identity.brand}`,
  },
  description: identity.description,
  keywords: [
    "développeur web freelance",
    "création site internet",
    "Next.js",
    "React",
    "TypeScript",
    "WordPress",
    "SEO",
    "Île-de-France",
    "Bois-Colombes",
  ],
  authors: [{ name: identity.name, url: SITE_URL }],
  creator: identity.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: identity.brand,
    title: `${identity.name} — ${identity.jobTitle}`,
    description: identity.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${identity.name} — ${identity.jobTitle}`,
    description: identity.tagline,
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: identity.name,
      jobTitle: identity.jobTitle,
      description: identity.tagline,
      url: SITE_URL,
      sameAs: [links.github, links.linkedin, links.malt],
      address: {
        "@type": "PostalAddress",
        addressLocality: identity.locality,
        addressRegion: identity.region,
        addressCountry: identity.country,
      },
      knowsAbout: skills.flatMap((group) => [...group.items]),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: identity.brand,
      url: SITE_URL,
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      inLanguage: "fr-FR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Lit le nonce généré par le proxy : force le rendu dynamique afin que la
  // CSP stricte (nonce unique par requête) s'applique aux scripts de Next.
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#contenu" className="skip-link">
          Aller au contenu principal
        </a>
        <Header />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollReveal />
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
