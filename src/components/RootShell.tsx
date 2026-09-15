import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { getUi } from "@/content";
import { geistMono, geistSans } from "@/lib/fonts";
import type { Locale } from "@/lib/i18n";
import { rootGraph } from "@/lib/seo";
import "@/app/globals.css";

type Props = {
  locale: Locale;
  children: React.ReactNode;
};

/**
 * Enveloppe commune aux deux root layouts (FR et EN) : <html lang>, polices,
 * header, footer, révélation au scroll et @graph JSON-LD.
 */
export default function RootShell({ locale, children }: Props) {
  const ui = getUi(locale);
  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#contenu" className="skip-link">
          {ui.skipLink}
        </a>
        <Header locale={locale} ui={ui} />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />
        <ScrollReveal />
        <JsonLd data={rootGraph(locale)} />
      </body>
    </html>
  );
}
