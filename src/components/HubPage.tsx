import Link from "next/link";
import type { CSSProperties } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import ServiceCta from "@/components/ServiceCta";
import { getHub, getService, getTrack, getUi } from "@/content";
import { keyFigures } from "@/lib/figures";
import { path, type Locale } from "@/lib/i18n";
import { hubGraph } from "@/lib/seo";
import { serviceMeta, trackIds, tracks } from "@/lib/services";

const stagger = (i: number) => ({ "--stagger": i }) as CSSProperties;

type Props = { locale: Locale };

/** Hub /services : les quatre offres en deux groupes, chacun dans sa DA. */
export default function HubPage({ locale }: Props) {
  const hub = getHub(locale);
  const ui = getUi(locale);
  const figures = keyFigures(locale);

  return (
    <>
      <div aria-hidden="true" className="scroll-progress" />

      <section aria-labelledby="titre-hub" className="hero-bg">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <Breadcrumb
            label={ui.breadcrumb.label}
            items={[
              { label: ui.breadcrumb.home, href: path("home", locale) },
              { label: ui.breadcrumb.services },
            ]}
          />
          <h1 id="titre-hub" className="hero-enter mt-8 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            {hub.h1}
          </h1>
          <p style={stagger(1)} className="hero-enter mt-6 max-w-2xl text-lg text-muted text-pretty">
            {hub.intro}
          </p>

          <dl aria-label={ui.figures.title} className="mt-12 grid gap-6 sm:grid-cols-3">
            {figures.map((figure, i) => (
              <div key={figure.label} style={stagger(i)} className="reveal flex flex-col border-l border-border pl-4">
                <dt className="eyebrow order-2 mt-1 text-muted">{figure.label}</dt>
                <dd className="figure order-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  <Counter value={figure.value} prefix={figure.prefix} suffix={figure.suffix} locale={locale} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {trackIds.map((trackId) => {
        const track = getTrack(locale, trackId);
        return (
          <section
            key={trackId}
            id={trackId}
            data-track={trackId}
            aria-labelledby={`titre-${trackId}`}
            className="hero-bg scanlines border-t border-border"
          >
            <div className="relative z-[1] mx-auto max-w-5xl px-4 py-20 sm:px-6">
              <p className="eyebrow">{track.eyebrow}</p>
              <h2 id={`titre-${trackId}`} className="mt-3 text-3xl font-bold tracking-tight">
                <span className="text-key">{track.hubTitle}</span>
              </h2>
              <p className="mt-3 max-w-2xl text-muted">{track.hubIntro}</p>
              <ul className="mt-10 grid gap-6 md:grid-cols-2">
                {tracks[trackId].services.map((id, i) => {
                  const service = getService(locale, id);
                  return (
                    <li key={id} style={stagger(i)} className="reveal card card-lift flex flex-col p-6 sm:p-8">
                      <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-control)] bg-accent-soft text-accent">
                        <Icon name={serviceMeta[id].icon} />
                      </span>
                      <h3 className="text-xl font-semibold">
                        <Link href={path(id, locale)} className="hover:text-accent">
                          {service.label}
                        </Link>
                      </h3>
                      <p className="mt-3 flex-1 text-muted">{service.tagline}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {(service.hero.badges ?? []).slice(0, 4).map((badge) => (
                          <li key={badge} className="badge badge-accent">
                            {badge}
                          </li>
                        ))}
                      </ul>
                      <Link href={path(id, locale)} className="btn btn-secondary mt-6 self-start">
                        {ui.hub.seeOffer}
                        <span className="sr-only">: {service.label}</span>
                        <Icon name="arrow" size={16} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        );
      })}

      <ServiceCta
        title={hub.cta.title}
        text={hub.cta.text}
        label={ui.booking.label}
        hint={ui.booking.hint}
      />

      <JsonLd data={hubGraph(locale)} />
    </>
  );
}
