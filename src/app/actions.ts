"use server";

import { headers } from "next/headers";
import { identity } from "@/lib/data";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  values?: { name: string; email: string; message: string };
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Limite d'envoi par IP : 3 messages par fenêtre de 10 minutes.
// Stockage en mémoire : suffisant pour un portfolio sur une seule instance.
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const submissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT) {
    submissions.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissions.set(ip, recent);
  return false;
}

export async function sendMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("website") ?? "");

  // Champ invisible pour les humains : un bot qui le remplit reçoit un
  // faux succès pour ne pas lui révéler qu'il a été détecté
  if (honeypot) {
    return { status: "success", message: "Message bien envoyé !" };
  }

  const values = { name, email, message };
  const errors: NonNullable<ContactState["errors"]> = {};

  if (name.length < 2 || name.length > 100) {
    errors.name = "Indiquez votre nom (2 à 100 caractères).";
  }
  if (!EMAIL_RE.test(email) || email.length > 200) {
    errors.email = "Indiquez une adresse e-mail valide.";
  }
  if (message.length < 10 || message.length > 5000) {
    errors.message = "Votre message doit faire entre 10 et 5 000 caractères.";
  }
  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Veuillez corriger les champs signalés.",
      errors,
      values,
    };
  }

  const ip =
    (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (isRateLimited(ip)) {
    return {
      status: "error",
      message:
        "Trop de messages envoyés en peu de temps. Réessayez dans quelques minutes.",
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL ?? identity.email;

  if (!apiKey) {
    console.warn(
      "RESEND_API_KEY manquant : le message du formulaire n'a pas été envoyé.",
    );
    return {
      status: "error",
      message: `Le formulaire est momentanément indisponible. Écrivez-moi directement à ${identity.email}.`,
      values,
    };
  }

  // Sujet sans retour à la ligne et corps en texte brut : aucune injection
  // d'en-tête ni de HTML possible
  const safeName = name.replace(/[\r\n]+/g, " ");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `[Portfolio] Nouveau message de ${safeName}`,
      text: `Nom : ${name}\nE-mail : ${email}\n\n${message}`,
    }),
  });

  if (!response.ok) {
    console.error(
      `Échec de l'envoi Resend (${response.status}) : ${await response.text()}`,
    );
    return {
      status: "error",
      message: `L'envoi a échoué. Réessayez plus tard ou écrivez-moi à ${identity.email}.`,
      values,
    };
  }

  return {
    status: "success",
    message: "Message bien envoyé ! Je vous réponds sous 48 heures.",
  };
}
