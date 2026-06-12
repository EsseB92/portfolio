"use client";

import { useActionState } from "react";
import { sendMessage, type ContactState } from "@/app/actions";

const initialState: ContactState = { status: "idle" };

const fieldClass =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-colors placeholder:text-muted/60 hover:border-accent/50 focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendMessage,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center rounded-xl border border-border bg-surface p-8 text-center"
      >
        <span
          aria-hidden="true"
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m5 13 4 4L19 7" />
          </svg>
        </span>
        <p className="text-lg font-semibold">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="relative rounded-xl border border-border bg-surface p-6 text-left sm:p-8"
    >
      {/* Honeypot anti-spam : invisible pour les humains, hors tabulation */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir ce champ</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="mb-2 block text-sm font-medium">
            Nom
          </label>
          <input
            id="nom"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            defaultValue={state.values?.name}
            aria-invalid={state.errors?.name ? true : undefined}
            aria-describedby={state.errors?.name ? "erreur-nom" : undefined}
            placeholder="Votre nom"
            className={fieldClass}
          />
          {state.errors?.name && (
            <p id="erreur-nom" className="mt-2 text-sm text-red-600 dark:text-red-400">
              {state.errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            defaultValue={state.values?.email}
            aria-invalid={state.errors?.email ? true : undefined}
            aria-describedby={state.errors?.email ? "erreur-email" : undefined}
            placeholder="vous@exemple.fr"
            className={fieldClass}
          />
          {state.errors?.email && (
            <p id="erreur-email" className="mt-2 text-sm text-red-600 dark:text-red-400">
              {state.errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          defaultValue={state.values?.message}
          aria-invalid={state.errors?.message ? true : undefined}
          aria-describedby={state.errors?.message ? "erreur-message" : undefined}
          placeholder="Décrivez votre projet : objectif, délais, budget indicatif…"
          className={`${fieldClass} resize-y`}
        />
        {state.errors?.message && (
          <p id="erreur-message" className="mt-2 text-sm text-red-600 dark:text-red-400">
            {state.errors.message}
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="rounded-lg bg-accent px-6 py-3 font-semibold text-accent-contrast transition-[opacity,transform] hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Envoi en cours…" : "Envoyer le message"}
        </button>
        <p role="status" aria-live="polite" className="text-sm text-red-600 dark:text-red-400">
          {state.status === "error" ? state.message : ""}
        </p>
      </div>
    </form>
  );
}
