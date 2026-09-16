import { identity, links } from "@/lib/data";
import type { LegalPageContent } from "@/types/legal";

/** Legal notice, English version of the French page. */
export const legal: LegalPageContent = {
  seo: {
    title: "Legal notice",
    description:
      "Legal notice for erdus.fr: publisher, hosting provider, intellectual property, personal data and applicable law.",
  },
  eyebrow: "Legal",
  h1: "Legal notice",
  sections: [
    {
      title: "Publisher",
      blocks: [
        { type: "p", text: `${identity.name} — Freelance web developer` },
        { type: "p", text: `Publication director: ${identity.name}` },
        { type: "p", text: "Sole trader under the French micro-entreprise scheme" },
        { type: "p", text: `SIREN: ${identity.siren}` },
        { type: "p", text: "VAT not applicable, Article 293 B of the French General Tax Code (CGI)" },
        { type: "p", text: `${identity.locality}, ${identity.region}, France` },
        { type: "p", text: `Email: ${identity.email}` },
        { type: "p", text: `Website: ${links.portfolio}` },
      ],
    },
    {
      title: "Hosting",
      blocks: [
        { type: "p", text: "Hostinger International Ltd." },
        { type: "p", text: "61 Lordou Vironos Street, 6023 Larnaca, Cyprus" },
        { type: "p", text: "Website: www.hostinger.com" },
      ],
    },
    {
      title: "Intellectual property",
      blocks: [
        {
          type: "p",
          text: "All content on this site (text, images, source code, design) is protected by copyright. Any reproduction, even partial, is prohibited without the prior written consent of the author.",
        },
      ],
    },
    {
      title: "Liability",
      blocks: [
        {
          type: "p",
          text: `The information on this site is provided for guidance only. ${identity.name} strives to keep it up to date but cannot be held liable for any errors or omissions.`,
        },
        {
          type: "p",
          text: `This site may contain links to third-party websites. ${identity.name} is not responsible for the content of those external sites.`,
        },
      ],
    },
    {
      title: "Personal data",
      blocks: [
        {
          type: "p",
          text: "Data collected through the contact form (name, email address, message) is used solely to answer your request. It is neither sold nor used for commercial purposes.",
        },
        {
          type: "p",
          text: `Under the GDPR, you have the right to access, rectify and delete your data. To exercise this right: ${identity.email}`,
        },
        { type: "p", text: "For more information, see the privacy policy." },
      ],
    },
    {
      title: "Cookies",
      blocks: [
        {
          type: "p",
          text: "This site does not use tracking or advertising cookies. No third-party analytics tool is integrated.",
        },
      ],
    },
    {
      title: "Applicable law",
      blocks: [
        {
          type: "p",
          text: "This site and this legal notice are governed by French law. In the event of a dispute, French courts have sole jurisdiction.",
        },
      ],
    },
  ],
};

export const privacy: LegalPageContent = {
  seo: {
    title: "Privacy policy",
    description:
      "Privacy policy for erdus.fr: data collected by the contact form, legal basis, retention period, your rights and security measures.",
  },
  eyebrow: "Legal",
  h1: "Privacy policy",
  updated: "Last updated: September 2026",
  sections: [
    {
      title: "Who we are",
      blocks: [
        {
          type: "p",
          text: `This site is published by ${identity.name}, freelance web developer, at ${links.portfolio}.`,
        },
        { type: "p", text: `Contact: ${identity.email}` },
      ],
    },
    {
      title: "Data collected",
      blocks: [
        { type: "h3", text: "Contact form" },
        { type: "p", text: "When you use the contact form, the following data is collected:" },
        {
          type: "list",
          items: [
            "Name — to personalise the reply",
            "Email address — to reply to you",
            "Message — to handle your request",
          ],
        },
        {
          type: "p",
          text: "This data is used solely to answer your request. It is not stored in a database by us and is not used for commercial purposes.",
        },
        {
          type: "p",
          text: "Form delivery is handled by Web3Forms (a form submission service) acting as a processor: it forwards your message by email to the site publisher and does not use it for any other purpose. As the site is static, no data is processed on the hosting server.",
        },
        { type: "h3", text: "Browsing data" },
        {
          type: "p",
          text: "This site has no tracking tool (Google Analytics, Hotjar, advertising pixels, etc.) and collects no browsing data itself.",
        },
        {
          type: "p",
          text: "Like any hosting provider, Hostinger keeps technical connection logs (IP address, requested page, date and time, browser) for security and diagnostic purposes, for a limited period and under its own responsibility. The site publisher does not use these logs.",
        },
        { type: "h3", text: "Cookies" },
        {
          type: "p",
          text: "This site uses no tracking, advertising or analytics cookies. Fonts are hosted on the site: no external resource is loaded while browsing.",
        },
      ],
    },
    {
      title: "Legal basis",
      blocks: [
        {
          type: "p",
          text: "Processing of contact form data is based on your explicit consent (Article 6(1)(a) GDPR): by submitting the form, you agree that your data is used to handle your request.",
        },
      ],
    },
    {
      title: "Retention period",
      blocks: [
        {
          type: "p",
          text: "Emails received through the contact form are kept for as long as needed to handle your request, then deleted within a maximum of 12 months.",
        },
      ],
    },
    {
      title: "Your rights",
      blocks: [
        { type: "p", text: "Under the GDPR, you have the following rights:" },
        {
          type: "list",
          items: [
            "Right of access — obtain a copy of your data",
            "Right to rectification — correct inaccurate data",
            "Right to erasure — request deletion of your data",
            "Right to object — object to the processing of your data",
            "Right to data portability — receive your data in a structured format",
          ],
        },
        { type: "p", text: `To exercise these rights: ${identity.email}` },
        {
          type: "p",
          text: "If you have a complaint, you may contact the French data protection authority, the CNIL (www.cnil.fr).",
        },
      ],
    },
    {
      title: "Data security",
      blocks: [
        { type: "p", text: "This site implements several technical measures to protect your data:" },
        {
          type: "list",
          items: [
            "Encrypted connection over HTTPS (TLS)",
            "HTTP security headers (CSP, HSTS, X-Frame-Options)",
            "Anti-bot protection on the form (honeypot field) and spam filtering by the delivery provider",
          ],
        },
      ],
    },
    {
      title: "Third-party services",
      blocks: [
        {
          type: "p",
          text: "Fonts — fonts are hosted on this site. No request is sent to Google Fonts or any other third-party service while browsing.",
        },
        {
          type: "p",
          text: "Contact form — Web3Forms receives the form data at the time of sending, solely to forward it to the site publisher.",
        },
        {
          type: "p",
          text: "Booking — the “Book a scoping call” links lead to rdv.erdus.fr, another site of the publisher with its own privacy policy.",
        },
      ],
    },
    {
      title: "Changes",
      blocks: [
        {
          type: "p",
          text: "This privacy policy may be updated from time to time. The date of the last update is shown at the top of this page.",
        },
      ],
    },
  ],
};
