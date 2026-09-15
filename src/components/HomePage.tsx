import Link from "next/link";
import type { CSSProperties } from "react";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import TrackCard from "@/components/TrackCard";
import { getHome, getService, getUi } from "@/content";
import { identity, links } from "@/lib/data";
import { path, url, type Locale } from "@/lib/i18n";
import { homeGraph } from "@/lib/seo";
import { trackIds } from "@/lib/services";

const stagger = (i: number) =>
  ({ "--stagger": Math.min(i, 6) }) as CSSProperties;

type Props = { locale: Locale };

export default function HomePage({ locale }: Props) {
  const home = getHome(locale);
  const ui = getUi(locale);

  return (
    <>
      {/* Héro : dégradé de fond mobile (seule animation en boucle de la page) */}
      <section aria-labelledby="titre-hero" className="hero-bg">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
          <p
            style={stagger(0)}
            className="hero-enter mb-4 inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-border bg-surface px-3 py-1 text-sm text-muted"
          >
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-green-500" />
            {home.hero.availability}
          </p>
          <h1
            id="titre-hero"
            style={stagger(1)}
            className="hero-enter max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-6xl"
          >
            {identity.name},{" "}
            <span className="text-accent">{home.hero.jobTitle.toLowerCase()}</span>
          </h1>
          <p
            style={stagger(2)}
            className="hero-enter mt-6 max-w-2xl text-lg text-muted text-pretty"
          >
            {home.hero.tagline} {home.hero.location}
          </p>
          <div style={stagger(3)} className="hero-enter mt-8 flex flex-wrap gap-4">
            <Link href={path("services", locale)} className="btn btn-primary group">
              {home.hero.primaryCta}
              <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a href="#contact" className="btn btn-secondary">
              {home.hero.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      {/* Pistes : deux univers, chacun dans sa direction artistique */}
      <section id="pistes" aria-labelledby="titre-pistes" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 id="titre-pistes" className="text-3xl font-bold tracking-tight">
            {home.tracks.title}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{home.tracks.intro}</p>
          <div className="mt-10 grid gap-6 min-[900px]:grid-cols-2">
            {trackIds.map((track, i) => (
              <TrackCard
                key={track}
                locale={locale}
                track={track}
                cta={home.tracks.cardCta}
                stagger={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Méthode : ce que je garantis, quelle que soit l'offre */}
      <section id="methode" aria-labelledby="titre-methode" className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 id="titre-methode" className="text-3xl font-bold tracking-tight">
            {home.method.title}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{home.method.intro}</p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {home.method.items.map((item, i) => (
              <li key={item.title} style={stagger(i)} className="reveal card card-lift p-6">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-control)] bg-accent-soft text-accent">
                  <Icon name={item.icon} />
                </span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Compétences */}
      <section id="competences" aria-labelledby="titre-competences" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 id="titre-competences" className="text-3xl font-bold tracking-tight">
            {home.skills.title}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{home.skills.intro}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {home.skills.groups.map((group, i) => (
              <div key={group.category} style={stagger(i)} className="reveal card card-lift p-6">
                <h3 className="eyebrow">{group.category}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li key={skill} className="badge">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section id="parcours" aria-labelledby="titre-parcours" className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 id="titre-parcours" className="text-3xl font-bold tracking-tight">
            {home.experience.title}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{home.experience.intro}</p>
          <ol className="mt-10 border-l-2 border-border">
            {home.experience.items.map((exp, i) => (
              <li key={`${exp.company}-${exp.startDate}`} style={stagger(i)} className="reveal relative pb-10 pl-8 last:pb-0">
                <span aria-hidden="true" className="absolute top-1.5 -left-[7px] h-3 w-3 rounded-full border-2 border-accent bg-background" />
                <p className="figure text-sm text-muted">{exp.period}</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {exp.role} <span className="font-normal text-muted">— {exp.company}</span>
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{exp.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Projets : chaque projet pointe vers l'offre correspondante */}
      <section id="projets" aria-labelledby="titre-projets" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 id="titre-projets" className="text-3xl font-bold tracking-tight">
            {home.projects.title}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{home.projects.intro}</p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {home.projects.items.map((project, i) => {
              const service = getService(locale, project.service);
              return (
                <li key={project.title} style={stagger(i)} className="reveal card card-lift flex flex-col p-6">
                  <h3 className="text-xl font-semibold">
                    {project.url ? (
                      <a href={project.url} rel="noopener" target="_blank" className="hover:text-accent">
                        {project.title}
                        <span className="sr-only">{ui.newTab}</span>
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag} className="badge badge-accent">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm text-muted">
                    {home.projects.serviceLinkPrefix}{" "}
                    <Link href={path(service.id, locale)} className="font-medium text-accent underline-offset-4 hover:underline">
                      {service.label}
                    </Link>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="titre-faq" className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 id="titre-faq" className="text-3xl font-bold tracking-tight">
            {home.faq.title}
          </h2>
          <div className="mt-10 space-y-4">
            {home.faq.items.map((item, i) => (
              <details key={item.question} style={stagger(i)} className="reveal card group transition-colors hover:border-accent/50">
                <summary className="cursor-pointer list-none px-6 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
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

      {/* Contact */}
      <section id="contact" aria-labelledby="titre-contact" className="border-t border-border">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[2fr_3fr]">
          <div>
            <h2 id="titre-contact" className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {home.contact.title}
            </h2>
            <p className="mt-4 max-w-xl text-muted text-pretty">{home.contact.text}</p>
            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <a href={`mailto:${identity.email}`} className="font-medium text-accent underline-offset-4 hover:underline">
                  {identity.email}
                </a>
              </li>
              <li>
                <a href={links.malt} rel="noopener" target="_blank" className="font-medium text-accent underline-offset-4 hover:underline">
                  {home.contact.malt}
                  <span className="sr-only">{ui.newTab}</span>
                </a>
              </li>
              <li>
                <a href={links.linkedin} rel="noopener" target="_blank" className="font-medium text-accent underline-offset-4 hover:underline">
                  {home.contact.linkedin}
                  <span className="sr-only">{ui.newTab}</span>
                </a>
              </li>
              <li>
                <a href={links.booking} className="font-medium text-accent underline-offset-4 hover:underline">
                  {ui.booking.label}
                </a>
              </li>
            </ul>
          </div>
          <div className="reveal">
            <ContactForm ui={ui.form} redirectUrl={url("thanks", locale)} />
          </div>
        </div>
      </section>

      <JsonLd data={homeGraph(locale)} />
    </>
  );
}
