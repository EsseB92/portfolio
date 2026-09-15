import Link from "next/link";
import Icon from "@/components/Icon";
import { getService, getTrack } from "@/content";
import { path, type Locale } from "@/lib/i18n";
import { serviceMeta, tracks, type Track } from "@/lib/services";

type Props = {
  locale: Locale;
  track: Track;
  cta: string;
  stagger: number;
};

/**
 * Carte de piste sur la home : rendue dans SA propre direction artistique
 * grâce à data-track, qui bascule les tokens de globals.css.
 */
export default function TrackCard({ locale, track, cta, stagger }: Props) {
  const content = getTrack(locale, track);
  const services = tracks[track].services.map((id) => getService(locale, id));

  return (
    <article
      data-track={track}
      style={{ "--stagger": stagger } as React.CSSProperties}
      className="reveal card card-lift hero-bg scanlines flex flex-col p-6 sm:p-8"
    >
      <div className="relative z-[1] flex flex-1 flex-col">
        <p className="eyebrow">{content.eyebrow}</p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-balance">
          <span className="text-key">{content.title}</span>
        </h3>
        <p className="mt-3 text-muted text-pretty">{content.description}</p>
        <ul className="mt-6 space-y-3">
          {services.map((service) => (
            <li key={service.id}>
              <Link
                href={path(service.id, locale)}
                className="group flex items-start gap-3 rounded-[var(--radius-control)] border border-border bg-background/40 p-3 transition-colors hover:border-accent"
              >
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-control)] bg-accent-soft text-accent">
                  <Icon name={serviceMeta[service.id].icon} size={18} />
                </span>
                <span>
                  <span className="block font-semibold group-hover:text-accent">
                    {service.label}
                  </span>
                  <span className="block text-sm text-muted">{service.tagline}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={path("services", locale)}
          className="btn btn-primary mt-8 self-start"
        >
          {cta}
          <Icon name="arrow" size={16} />
        </Link>
      </div>
    </article>
  );
}
