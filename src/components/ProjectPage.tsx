import Link from "next/link";
import type { CSSProperties } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import ProjectVideo from "@/components/ProjectVideo";
import ServiceCta from "@/components/ServiceCta";
import { getProject, getService, getUi } from "@/content";
import { path, type Locale } from "@/lib/i18n";
import { hostname, projectIds, projectMeta, type ProjectId } from "@/lib/projects";
import { projectGraph } from "@/lib/seo";

const stagger = (i: number) => ({ "--stagger": Math.min(i, 6) }) as CSSProperties;

type Props = { locale: Locale; id: ProjectId };

/**
 * Gabarit des pages projet : hero (avec vidéo), idée, fonctionnalités,
 * choix techniques, défis, maillage, CTA vers l'offre associée.
 * Pas de data-track : tokens du socle, comme la home.
 */
export default function ProjectPage({ locale, id }: Props) {
  const project = getProject(locale, id);
  const ui = getUi(locale);
  const meta = projectMeta[id];
  const service = getService(locale, meta.service);
  const others = projectIds.filter((other) => other !== id);
  const home = path("home", locale);

  return (
    <>
      {/* Héro */}
      <section aria-labelledby="titre-projet" className="hero-bg">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <Breadcrumb
            label={ui.breadcrumb.label}
            items={[
              { label: ui.breadcrumb.home, href: home },
              { label: ui.breadcrumb.projects, href: `${home}#projets` },
              { label: project.label },
            ]}
          />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[3fr_2fr]">
            <div>
              <p style={stagger(0)} className="eyebrow hero-enter">
                {project.hero.eyebrow}
              </p>
              <h1
                id="titre-projet"
                style={stagger(1)}
                className="hero-enter mt-3 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl"
              >
                {project.hero.h1}
              </h1>
              <p style={stagger(2)} className="hero-enter mt-6 max-w-2xl text-lg text-muted text-pretty">
                {project.hero.intro}
              </p>
              {project.hero.status && (
                <p style={stagger(3)} className="hero-enter mt-4 inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-border bg-surface px-3 py-1 text-sm text-muted">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-amber-500" />
                  {project.hero.status}
                </p>
              )}
              <div style={stagger(3)} className="hero-enter mt-8 flex flex-wrap items-center gap-4">
                {meta.url && (
                  <a href={meta.url} rel="noopener" target="_blank" className="btn btn-primary">
                    {project.link?.visit ?? ui.project.visit}
                    <span className="sr-only">{ui.newTab}</span>
                    <Icon name="arrow" size={16} />
                  </a>
                )}
                <Link href={path(service.id, locale)} className="btn btn-secondary">
                  {service.label}
                </Link>
              </div>
              <ul aria-label={ui.project.stackLabel} className="mt-8 flex flex-wrap gap-2">
                {project.hero.tags.map((tag) => (
                  <li key={tag} className="badge badge-accent">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            {meta.video ? (
              <div style={stagger(4)} className="hero-enter">
                <ProjectVideo title={project.label} video={meta.video} labels={ui.video} />
              </div>
            ) : (
              meta.image && (
                <div style={stagger(4)} className="hero-enter">
                  {/* eslint-disable-next-line @next/next/no-img-element -- export statique, image déjà dimensionnée */}
                  <img
                    src={meta.image.src}
                    alt={project.hero.imageAlt ?? ""}
                    width={meta.image.width}
                    height={meta.image.height}
                    decoding="async"
                    className="w-full rounded-[var(--radius-card)] border border-border"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* L'idée */}
      <section aria-labelledby="titre-idee" className="border-t border-border bg-surface/50">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[3fr_2fr]">
          <div>
            <h2 id="titre-idee" className="text-3xl font-bold tracking-tight">
              {ui.project.ideaTitle}
            </h2>
            {project.idea.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="mt-4 max-w-2xl leading-relaxed text-muted text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="space-y-3 self-center">
            {project.idea.points.map((point, i) => (
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

      {/* Fonctionnalités clés */}
      <section aria-labelledby="titre-fonctionnalites" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 id="titre-fonctionnalites" className="text-3xl font-bold tracking-tight">
            {ui.project.featuresTitle}
          </h2>
          {project.features.intro && <p className="mt-3 max-w-2xl text-muted">{project.features.intro}</p>}
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {project.features.items.map((item, i) => (
              <li key={item.title} style={stagger(i)} className="reveal card card-lift p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Choix techniques */}
      <section aria-labelledby="titre-technique" className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 id="titre-technique" className="text-3xl font-bold tracking-tight">
            {ui.project.techTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{project.tech.intro}</p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.tech.items.map((item, i) => (
              <li key={item.title} style={stagger(i)} className="reveal card card-lift p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
          <h3 className="eyebrow mt-12">{ui.project.stackLabel}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.stack.map((item, i) => (
              <li key={item} style={stagger(i)} className="badge reveal">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Défis et enseignements */}
      <section aria-labelledby="titre-defis" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 id="titre-defis" className="text-3xl font-bold tracking-tight">
            {ui.project.challengesTitle}
          </h2>
          {project.challenges.intro && <p className="mt-3 max-w-2xl text-muted">{project.challenges.intro}</p>}
          <ol className="mt-10 border-l-2 border-border">
            {project.challenges.items.map((item, i) => (
              <li key={item.title} style={stagger(i)} className="reveal relative pb-10 pl-8 last:pb-0">
                <span aria-hidden="true" className="absolute top-1.5 -left-[7px] h-3 w-3 rounded-full border-2 border-accent bg-background" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Maillage interne : site en ligne, offre associée, autres projets */}
      <section aria-labelledby="titre-related" className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <h2 id="titre-related" className="eyebrow">
            {ui.project.relatedTitle}
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {meta.url && (
              <li className="text-muted">
                {project.link?.live ?? ui.project.liveSite}{" "}
                <a href={meta.url} rel="noopener" target="_blank" className="font-medium text-accent underline-offset-4 hover:underline">
                  {hostname(meta.url)}
                  <span className="sr-only">{ui.newTab}</span>
                </a>
              </li>
            )}
            <li className="text-muted">
              {ui.project.relatedService}{" "}
              <Link href={path(service.id, locale)} className="font-medium text-accent underline-offset-4 hover:underline">
                {service.label}
              </Link>
            </li>
            <li className="text-muted">
              {ui.project.otherProjects}{" "}
              {others.map((other, i) => (
                <span key={other}>
                  {i > 0 && ", "}
                  <Link href={path(other, locale)} className="font-medium text-accent underline-offset-4 hover:underline">
                    {getProject(locale, other).label}
                  </Link>
                </span>
              ))}
            </li>
            <li>
              <Link href={`${home}#projets`} className="font-medium text-accent underline-offset-4 hover:underline">
                {ui.project.allProjects}
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <ServiceCta
        title={project.cta.title}
        text={project.cta.text}
        label={ui.booking.label}
        labelShort={ui.booking.labelShort}
        hint={ui.booking.hint}
        service={meta.service}
      />

      <JsonLd data={projectGraph(locale, id)} />
    </>
  );
}
