"use client";

import { useState, type FormEvent } from "react";
import Icon from "@/components/Icon";
import type { UiStrings } from "@/content/fr/ui";
import { identity } from "@/lib/data";

type Props = {
  ui: UiStrings["form"];
  /** URL absolue de la page de remerciement (repli sans JavaScript) */
  redirectUrl: string;
};

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "success" | "error";

const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClass =
  "w-full rounded-[var(--radius-control)] border border-border bg-background px-4 py-3 text-sm transition-colors placeholder:text-muted/60 hover:border-accent/50 focus:border-accent focus:outline-none";

/**
 * Formulaire de contact envoyé à Web3Forms (site statique : aucune route Next).
 * Avec JavaScript : envoi en fetch et message inline. Sans JavaScript : POST
 * HTML classique, puis redirection vers la page de remerciement.
 * Le champ botcheck est un honeypot invisible.
 */
export default function ContactForm({ ui, redirectUrl }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState<string>("");

  if (!ACCESS_KEY) {
    return (
      <p className="card p-6 text-sm text-muted">
        {ui.unavailable}{" "}
        <a href={`mailto:${identity.email}`} className="font-medium text-accent underline-offset-4 hover:underline">
          {identity.email}
        </a>
        .
      </p>
    );
  }

  if (status === "success") {
    return (
      <div role="status" className="card flex h-full flex-col items-center justify-center p-8 text-center">
        <span aria-hidden="true" className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
          <Icon name="check" />
        </span>
        <p className="text-lg font-semibold">{ui.success}</p>
      </div>
    );
  }

  const validate = (data: FormData): Errors => {
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const body = String(data.get("message") ?? "").trim();
    if (name.length < 2 || name.length > 100) next.name = ui.errorName;
    if (!EMAIL_RE.test(email) || email.length > 200) next.email = ui.errorEmail;
    if (body.length < 10 || body.length > 5000) next.message = ui.errorMessage;
    return next;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setMessage(ui.errorFix);
      return;
    }

    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: ui.subject,
          from_name: `${identity.brand} portfolio`,
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          botcheck: data.get("botcheck") === "on",
        }),
      });
      const result: { success?: boolean } = await response.json();
      if (!response.ok || !result.success) throw new Error("web3forms");
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage(`${ui.errorGeneric} ${identity.email}.`);
    }
  };

  const pending = status === "sending";

  return (
    <form
      action={ENDPOINT}
      method="POST"
      onSubmit={onSubmit}
      noValidate
      className="card relative p-6 text-left sm:p-8"
    >
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input type="hidden" name="subject" value={ui.subject} />
      <input type="hidden" name="from_name" value={`${identity.brand} portfolio`} />
      <input type="hidden" name="redirect" value={redirectUrl} />

      {/* Honeypot anti-spam : invisible pour les humains, hors tabulation */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="botcheck">{ui.honeypot}</label>
        <input id="botcheck" name="botcheck" type="checkbox" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="mb-2 block text-sm font-medium">
            {ui.name}
          </label>
          <input
            id="nom"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "erreur-nom" : undefined}
            placeholder={ui.namePlaceholder}
            className={fieldClass}
          />
          {errors.name && (
            <p id="erreur-nom" className="mt-2 text-sm text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            {ui.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "erreur-email" : undefined}
            placeholder={ui.emailPlaceholder}
            className={fieldClass}
          />
          {errors.email && (
            <p id="erreur-email" className="mt-2 text-sm text-red-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          {ui.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "erreur-message" : undefined}
          placeholder={ui.messagePlaceholder}
          className={`${fieldClass} resize-y`}
        />
        {errors.message && (
          <p id="erreur-message" className="mt-2 text-sm text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? ui.sending : ui.submit}
        </button>
        <p role="status" aria-live="polite" className="text-sm text-red-400">
          {status === "error" ? message : ""}
        </p>
      </div>
    </form>
  );
}
