import type { CSSProperties } from "react";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import {
  SITE_URL,
  experiences,
  faq,
  identity,
  links,
  projects,
  services,
  skills,
} from "@/lib/data";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const stagger = (i: number) =>
  ({ "--stagger": Math.min(i, 6) }) as CSSProperties;

export default function Home() {
  return (
    <>
      {/* Héro */}
      <section
        aria-labelledby="titre-hero"
        className="relative overflow-hidden"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
          <div className="blob blob-alt absolute top-1/4 -right-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
          <p
            style={stagger(0)}
            className="hero-enter mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted"
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 animate-pulse rounded-full bg-green-500"
            />
            {identity.availability}
          </p>
          <h1
            id="titre-hero"
            style={stagger(1)}
            className="hero-enter max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-6xl"
          >
            {identity.name},{" "}
            <span className="text-accent">
              {identity.jobTitle.toLowerCase()}
            </span>
          </h1>
          <p
            style={stagger(2)}
            className="hero-enter mt-6 max-w-2xl text-lg text-muted text-pretty"
          >
            {identity.tagline} Basé à {identity.location}, je travaille à
            distance avec des clients partout en France.
          </p>
          <div style={stagger(3)} className="hero-enter mt-8 flex flex-wrap gap-4">
            <a
              href="#projets"
              className="group flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-contrast transition-[opacity,transform] hover:opacity-90 active:scale-[0.98]"
            >
              Voir mes projets
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-y-0.5"
              >
                <path d="M12 5v14m0 0 6-6m-6 6-6-6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border bg-surface px-6 py-3 font-semibold transition-[border-color,transform] hover:border-accent active:scale-[0.98]"
            >
              Me contacter
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        aria-labelledby="titre-services"
        className="border-t border-border bg-surface/50"
      >
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2
            id="titre-services"
            className="text-3xl font-bold tracking-tight"
          >
            Services
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Des prestations complètes pour concevoir, sécuriser et faire
            grandir votre présence en ligne.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <li
                key={service.title}
                style={stagger(i)}
                className="reveal card-lift rounded-xl border border-border bg-surface p-6 hover:border-accent"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon name={service.icon} />
                </span>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Compétences */}
      <section
        id="competences"
        aria-labelledby="titre-competences"
        className="border-t border-border"
      >
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2
            id="titre-competences"
            className="text-3xl font-bold tracking-tight"
          >
            Compétences
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Une stack moderne côté frontend, des fondations solides côté
            backend et des outils éprouvés pour livrer vite et bien.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {skills.map((group, i) => (
              <div
                key={group.category}
                style={stagger(i)}
                className="reveal card-lift rounded-xl border border-border bg-surface p-6"
              >
                <h3 className="font-mono text-sm font-semibold tracking-wide text-accent uppercase">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border px-3 py-1 text-sm transition-colors hover:border-accent hover:text-accent"
                    >
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
      <section
        id="parcours"
        aria-labelledby="titre-parcours"
        className="border-t border-border bg-surface/50"
      >
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2
            id="titre-parcours"
            className="text-3xl font-bold tracking-tight"
          >
            Parcours
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Dix ans d&apos;expérience entre gestion de projets numériques,
            administration de systèmes et développement web.
          </p>
          <ol className="mt-10 border-l-2 border-border">
            {experiences.map((exp, i) => (
              <li
                key={`${exp.company}-${exp.startDate}`}
                style={stagger(i)}
                className="reveal relative pb-10 pl-8 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[7px] h-3 w-3 rounded-full border-2 border-accent bg-background"
                />
                <p className="font-mono text-sm text-muted">{exp.period}</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {exp.role}{" "}
                  <span className="font-normal text-muted">
                    — {exp.company}
                  </span>
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {exp.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Projets */}
      <section
        id="projets"
        aria-labelledby="titre-projets"
        className="border-t border-border"
      >
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 id="titre-projets" className="text-3xl font-bold tracking-tight">
            Projets
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Une sélection de réalisations récentes, du portfolio immersif au
            site e-commerce optimisé.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {projects.map((project, i) => (
              <li
                key={project.title}
                style={stagger(i)}
                className="reveal card-lift flex flex-col rounded-xl border border-border bg-surface p-6 hover:border-accent"
              >
                <h3 className="text-xl font-semibold">
                  {project.url ? (
                    <a
                      href={project.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="hover:text-accent"
                    >
                      {project.title}
                      <span className="sr-only"> (nouvel onglet)</span>
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        aria-labelledby="titre-faq"
        className="border-t border-border bg-surface/50"
      >
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 id="titre-faq" className="text-3xl font-bold tracking-tight">
            Questions fréquentes
          </h2>
          <div className="mt-10 space-y-4">
            {faq.map((item, i) => (
              <details
                key={item.question}
                style={stagger(i)}
                className="reveal group rounded-xl border border-border bg-surface transition-colors hover:border-accent/50"
              >
                <summary className="cursor-pointer list-none px-6 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <svg
                      aria-hidden="true"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="shrink-0 transition-transform group-open:rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        aria-labelledby="titre-contact"
        className="border-t border-border"
      >
        <div className="mx-auto grid max-w-5xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[2fr_3fr]">
          <div>
            <h2
              id="titre-contact"
              className="text-3xl font-bold tracking-tight text-balance sm:text-4xl"
            >
              Un projet en tête&nbsp;?
            </h2>
            <p className="mt-4 max-w-xl text-muted text-pretty">
              Parlons-en. Décrivez-moi votre besoin et je vous répondrai sous
              48 heures avec une première analyse et une estimation.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${identity.email}`}
                  className="font-medium text-accent underline-offset-4 hover:underline"
                >
                  {identity.email}
                </a>
              </li>
              <li>
                <a
                  href={links.malt}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-medium text-accent underline-offset-4 hover:underline"
                >
                  Me retrouver sur Malt
                  <span className="sr-only"> (nouvel onglet)</span>
                </a>
              </li>
              <li>
                <a
                  href={links.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-medium text-accent underline-offset-4 hover:underline"
                >
                  LinkedIn
                  <span className="sr-only"> (nouvel onglet)</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
