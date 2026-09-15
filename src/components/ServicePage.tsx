import Link from "next/link";
import type { CSSProperties } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import ServiceCta from "@/components/ServiceCta";
import { getService, getUi } from "@/content";
import { keyFigures } from "@/lib/figures";
import { path, type Locale } from "@/lib/i18n";
import { serviceGraph } from "@/lib/seo";
import { bookingUrl, serviceMeta, type ServiceId } from "@/lib/services";

const stagger = (i: number) => ({ "--stagger": Math.min(i, 6) }) as CSSProperties;

type Props = { locale: Locale; id: ServiceId };

/**
 * Gabarit commun des quatre pages service : hero, problème, livrables,
 * déroulé, technos, cas concrets, FAQ, maillage, CTA.
 * La direction artistique vient du data-track posé par le layout de segment.
 */
export default function ServicePage({ locale, id }: Props) {
  const service = getService(locale, id);
  const ui = getUi(locale);
  const meta = serviceMeta[id];
  const related = getService(locale, meta.related);
  const isPro = meta.track === "pro";
  const eyebrow = isPro ? ui.service.eyebrowPro : ui.service.eyebrowGaming;
  const figures = keyFigures(locale);

  return (
    <>
      {isPro && <div aria-hidden="true" className="scroll-progress" />}

      {/* Héro */}
      <section aria-labelledby="titre-service" className="hero-bg scanlines">
        <div className="relative z-[1] mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <Breadcrumb
            label={ui.breadcrumb.label}
            items={[
              { label: ui.breadcrumb.home, href: path("home", locale) },
              { label: ui.breadcrumb.services, href: path("services", locale) },
              { label: service.label },
            ]}
          />
          <p style={stagger(0)} className="eyebrow hero-enter mt-8">
            {eyebrow}
          </p>
          <h1
            id="titre-service"
            style={stagger(1)}
            className="hero-enter mt-3 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl"
          >
            {service.hero.h1}
          </h1>
          <p style={stagger(2)} className="hero-enter mt-6 max-w-2xl text-lg text-muted text-pretty">
            {service.hero.intro}
          </p>
          <div style={stagger(3)} className="hero-enter mt-8 flex flex-wrap items-center gap-4">
            <a href={bookingUrl(id)} className="btn btn-primary">
              {ui.booking.label}
              <Icon name="arrow" size={16} />
            </a>
            <a href="#livrables" className="btn btn-secondary">
              {ui.service.seeDeliverables}
            </a>
          </div>

          {isPro ? (
            <dl aria-label={ui.figures.title} className="mt-12 grid gap-6 sm:grid-cols-3">
              {figures.map((figure, i) => (
                <div key={figure.label} style={stagger(i)} className="reveal flex flex-col border-l border-border pl-4">
                  <dt className="eyebrow order-2 mt-1 text-muted">{figure.label}</dt>
                  <dd className="figure order-1 text-3xl font-bold tracking-tight sm:text-4xl">
                    <Counter value={figure.value} prefix={figure.prefix} suffix={figure.suffix} locale={locale} />
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            service.hero.badges && (
              <ul aria-label={service.stack.title} className="mt-12 flex flex-wrap gap-2">
                {service.hero.badges.map((badge, i) => (
                  <li key={badge} style={stagger(i)} className="badge badge-accent reveal">
                    {badge}
                  </li>
                ))}
              </ul>
            )
          )}
        </div>
      </section>

      {/* Problème adressé */}
      <section aria-labelledby="titre-probleme" className="border-t border-border bg-surface/50">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[3fr_2fr]">
          <div>
            <h2 id="titre-probleme" className="text-3xl font-bold tracking-tight">
              {service.problem.title}
            </h2>
            {service.problem.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="mt-4 max-w-2xl leading-relaxed text-muted text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="space-y-3 self-center">
            {service.problem.points.map((point, i) => (
              <li key={point} style={stagger(i)} className="reveal card flex items-start gap-3 p-4 text-sm">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Icon name="check" size={12} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ce qui est livré */}
      <section id="livrables" aria-labelledby="titre-livrables" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 id="titre-livrables" className="text-3xl font-bold tracking-tight">
            {service.deliverables.title}
          </h2>
          {service.deliverables.intro && (
            <p className="mt-3 max-w-2xl text-muted">{service.deliverables.intro}</p>
          )}
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.items.map((item, i) => (
              <li key={item.title} style={stagger(i)} className="reveal card card-lift p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Déroulé */}
      <section aria-labelledby="titre-deroule" className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 id="titre-deroule" className="text-3xl font-bold tracking-tight">
            {service.process.title}
          </h2>
          <ol className="mt-10 border-l-2 border-border">
            {service.process.steps.map((step, i) => (
              <li key={step.title} style={stagger(i)} className="reveal relative pb-10 pl-8 last:pb-0">
                <span aria-hidden="true" className="absolute top-1.5 -left-[7px] h-3 w-3 rounded-full border-2 border-accent bg-background" />
                <p className="eyebrow">
                  {ui.service.stepLabel} {i + 1}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Technologies */}
      <section aria-labelledby="titre-technos" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 id="titre-technos" className="text-3xl font-bold tracking-tight">
            {service.stack.title}
          </h2>
          {service.stack.intro && <p className="mt-3 max-w-2xl text-muted">{service.stack.intro}</p>}
          <ul className="mt-8 flex flex-wrap gap-2">
            {service.stack.items.map((item, i) => (
              <li key={item} style={stagger(i)} className="badge reveal">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cas concrets */}
      <section aria-labelledby="titre-cas" className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 id="titre-cas" className="text-3xl font-bold tracking-tight">
            {service.cases.title}
          </h2>
          {service.cases.intro && <p className="mt-3 max-w-2xl text-muted">{service.cases.intro}</p>}
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {service.cases.items.map((item, i) => (
              <li key={item.title} style={stagger(i)} className="reveal card card-lift p-6 sm:p-8">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.context}</p>
                <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed">{item.result}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ courte */}
      <section aria-labelledby="titre-faq" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 id="titre-faq" className="text-3xl font-bold tracking-tight">
            {service.faq.title}
          </h2>
          <div className="mt-10 space-y-4">
            {service.faq.items.map((item, i) => (
              <details key={item.question} style={stagger(i)} className="reveal card group transition-colors hover:border-accent/50">
                <summary className="cursor-pointer list-none px-6 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    <h3 className="text-base font-semibold">{item.question}</h3>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="shrink-0 transition-transform group-open:rotate-180">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Maillage interne : hub + offre complémentaire */}
      <section aria-labelledby="titre-related" className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <h2 id="titre-related" className="eyebrow">
            {ui.service.relatedTitle}
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <li>
              <Link href={path("services", locale)} className="font-medium text-accent underline-offset-4 hover:underline">
                {ui.service.relatedHub}
              </Link>
            </li>
            <li className="text-muted">
              {ui.service.relatedPrefix}{" "}
              <Link href={path(related.id, locale)} className="font-medium text-accent underline-offset-4 hover:underline">
                {related.label}
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <ServiceCta
        title={service.cta.title}
        text={service.cta.text}
        label={ui.booking.label}
        hint={ui.booking.hint}
        service={id}
      />

      <JsonLd data={serviceGraph(locale, id)} />
    </>
  );
}
