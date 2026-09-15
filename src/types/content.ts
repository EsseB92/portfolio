import type { ServiceId, Track } from "@/lib/services";

export type FaqItem = { question: string; answer: string };

export type KeyFigure = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export type ServiceContent = {
  id: ServiceId;
  seo: {
    /** 50-60 caractères, mot-clé primaire en tête ; « | Erdus » ajouté par le template */
    title: string;
    /** 140-155 caractères, bénéfice concret + appel à l'action */
    description: string;
    keyword: string;
  };
  /** Nom court : cartes, fil d'Ariane, footer */
  label: string;
  /** Une phrase pour les cartes du hub et de la home */
  tagline: string;
  hero: {
    h1: string;
    /** Premier paragraphe : contient le mot-clé primaire */
    intro: string;
    /** Badges de techno affichés sous le hero (surtout piste gaming) */
    badges?: readonly string[];
  };
  problem: {
    title: string;
    paragraphs: readonly string[];
    points: readonly string[];
  };
  deliverables: {
    title: string;
    intro?: string;
    items: readonly { title: string; text: string }[];
  };
  process: {
    title: string;
    steps: readonly { title: string; text: string }[];
  };
  stack: { title: string; intro?: string; items: readonly string[] };
  cases: {
    title: string;
    intro?: string;
    items: readonly { title: string; context: string; result: string }[];
  };
  faq: { title: string; items: readonly FaqItem[] };
  cta: { title: string; text: string };
  jsonLd: { name: string; serviceType: string; description: string };
};

export type TrackContent = {
  id: Track;
  /** Étiquette mono uppercase */
  eyebrow: string;
  title: string;
  description: string;
  /** Titre du groupe sur le hub */
  hubTitle: string;
  hubIntro: string;
};

export type HomeContent = {
  seo: { title: string; description: string; keywords: readonly string[] };
  hero: {
    availability: string;
    jobTitle: string;
    tagline: string;
    location: string;
    primaryCta: string;
    secondaryCta: string;
  };
  tracks: { title: string; intro: string; cardCta: string };
  method: {
    title: string;
    intro: string;
    items: readonly { title: string; description: string; icon: string }[];
  };
  skills: {
    title: string;
    intro: string;
    groups: readonly { category: string; items: readonly string[] }[];
  };
  experience: {
    title: string;
    intro: string;
    items: readonly {
      role: string;
      company: string;
      period: string;
      startDate: string;
      description: string;
    }[];
  };
  projects: {
    title: string;
    intro: string;
    serviceLinkPrefix: string;
    items: readonly {
      title: string;
      description: string;
      tags: readonly string[];
      url: string | null;
      service: ServiceId;
    }[];
  };
  faq: { title: string; items: readonly FaqItem[] };
  contact: {
    title: string;
    text: string;
    malt: string;
    linkedin: string;
  };
};

export type HubContent = {
  seo: { title: string; description: string };
  h1: string;
  intro: string;
  cta: { title: string; text: string };
};
