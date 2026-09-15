import Icon from "@/components/Icon";
import { bookingUrl, type ServiceId } from "@/lib/services";

type Props = {
  title: string;
  text: string;
  label: string;
  hint: string;
  service?: ServiceId;
};

/** CTA de fin de page : réservation d'un cadrage gratuit sur rdv.erdus.fr (dofollow). */
export default function ServiceCta({ title, text, label, hint, service }: Props) {
  return (
    <section aria-labelledby="titre-cta" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="card border-key reveal flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 id="titre-cta" className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-muted text-pretty">{text}</p>
          </div>
          <div className="shrink-0">
            <a href={bookingUrl(service)} className="btn btn-primary">
              {label}
              <Icon name="arrow" size={16} />
            </a>
            <p className="mt-2 text-xs text-muted">{hint}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
