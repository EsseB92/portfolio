import Link from "next/link";
import Icon from "@/components/Icon";
import { getUi } from "@/content";
import { path, type Locale } from "@/lib/i18n";

type Props = { locale: Locale };

/** Page de confirmation après envoi du formulaire sans JavaScript (noindex). */
export default function ThanksPage({ locale }: Props) {
  const ui = getUi(locale);
  return (
    <section aria-labelledby="titre-merci" className="hero-bg">
      <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <span aria-hidden="true" className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent">
          <Icon name="check" />
        </span>
        <h1 id="titre-merci" className="text-4xl font-bold tracking-tight">
          {ui.thanks.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">{ui.thanks.text}</p>
        <Link href={path("home", locale)} className="btn btn-primary mt-8">
          {ui.thanks.back}
        </Link>
      </div>
    </section>
  );
}
