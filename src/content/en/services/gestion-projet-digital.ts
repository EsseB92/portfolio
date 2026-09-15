import type { ServiceContent } from "@/types/content";

export const content: ServiceContent = {
  id: "gestion-projet-digital",
  seo: {
    title: "Freelance Digital Project Manager for Web Projects",
    description:
      "Freelance digital project manager: scoping, specifications and day-to-day steering of your web project with your vendors, part-time. Free scoping call.",
    keyword: "freelance digital project manager",
  },
  label: "Digital project management",
  tagline:
    "Scoping, specifications and management of your web project with your vendors, part-time.",
  hero: {
    h1: "Freelance digital project manager: scope, steer, deliver",
    intro:
      "As a freelance digital project manager, I take care of scoping, writing the specifications and steering your web project with your vendors. You keep the vision and the decisions; I handle the method, the deadlines and the technical trade-offs, part-time and without hiring.",
    badges: ["Scoping", "Specifications", "Steering", "Acceptance"],
  },
  problem: {
    title: "The problem I solve",
    paragraphs: [
      "A web project without a pilot drifts: vendors pass responsibility around, scope grows, deadlines slip and nobody in-house has the time or the vocabulary to settle technical questions.",
      "Outsourced web project management fixes this without recruiting. I bring a single point of contact who understands both your business stakes and the developers' work, and who keeps the course from scoping to production.",
    ],
    points: [
      "No specifications, or a document too vague to get comparable quotes",
      "Several vendors (agency, freelancer, host) and nobody to coordinate them",
      "A project already started that is running late with no clear reason",
      "The need for an independent technical opinion to choose a solution or a partner",
    ],
  },
  deliverables: {
    title: "What a freelance digital project manager brings you",
    items: [
      {
        title: "A written project scope",
        text: "Goals, users, scope, constraints, budget and risks in a short document everyone can read.",
      },
      {
        title: "Written specifications",
        text: "Features, site structure, technical requirements (performance, security, accessibility, SEO) and acceptance criteria. Usable as-is to consult vendors.",
      },
      {
        title: "Vendor consultation",
        text: "Comparison grid, quote analysis, questions to ask, argued recommendation. You choose with full knowledge.",
      },
      {
        title: "Day-to-day steering",
        text: "Schedule, progress meetings, ticket tracking, trade-offs, early warnings on drift. Short, regular reporting.",
      },
      {
        title: "Acceptance and go-live",
        text: "Test scenarios, fix tracking, verification of deliverables (performance, security, SEO) before approving the launch.",
      },
      {
        title: "Review and handover",
        text: "Documentation of what was delivered, list of accesses, maintenance procedures and recommendations for what comes next.",
      },
    ],
  },
  process: {
    title: "How the mission runs",
    steps: [
      {
        title: "Free scoping call",
        text: "30 minutes to understand where your project stands and what is blocking. I tell you honestly whether my involvement is useful.",
      },
      {
        title: "Diagnosis",
        text: "Review of existing documents, interviews with stakeholders, inventory of vendors and tools.",
      },
      {
        title: "Scope and specifications",
        text: "Writing, reviews with you, validation. This document becomes the reference for everyone.",
      },
      {
        title: "Consultation",
        text: "Call for vendors if needed, analysis of responses, contracting.",
      },
      {
        title: "Steering",
        text: "Weekly follow-up, trade-offs, risk management. You see actual progress, not only the forecast.",
      },
      {
        title: "Acceptance, launch, review",
        text: "Tests, fixes, deployment, then a review and a clean handover to your teams.",
      },
    ],
  },
  stack: {
    title: "Tools and methods",
    intro: "I adapt to your tools. Otherwise, here is what I suggest:",
    items: [
      "Notion",
      "Jira / Trello",
      "GitHub",
      "Figma",
      "Google Workspace",
      "Make / n8n",
      "Agile sprints",
      "V-model for fixed-scope contracts",
    ],
  },
  cases: {
    title: "Two steering experiences",
    items: [
      {
        title: "French Ministry of the Armed Forces — assistant project manager",
        context:
          "Steering digital projects and running a comparative analysis of CAD software for technical teams with varied needs.",
        result:
          "Comparison grids, tests, argued recommendation and deployment follow-up. An equipment decision made on measured criteria rather than habits.",
      },
      {
        title: "Edreams Factory — digital production coordination",
        context:
          "Coordinating digital production: several projects in parallel, vendors and scattered tracking data.",
        result:
          "Process optimization, tracking dashboards and progress rituals. Shared visibility on the state of every project.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions about project management",
    items: [
      {
        question: "How is this different from an agency?",
        answer:
          "An agency sells its own production. I am independent from vendors: I defend your interest in choices, quotes and acceptance, and I can work with the agency or freelancer of your choice.",
      },
      {
        question: "Do you work part-time?",
        answer:
          "Yes, that is the most common setup: one or two days a week, or a fixed price per phase (scoping only, specifications only, full steering).",
      },
      {
        question: "What kinds of projects do you manage?",
        answer:
          "Showcase and e-commerce sites, web applications, redesigns, migrations, automations with n8n or Make, AI tool integration. If a project requires expertise I do not have, I say so and point you elsewhere.",
      },
      {
        question: "Can you also do the development?",
        answer:
          "Yes, but not on the same project I manage for you, to stay independent in trade-offs. For development, see the website development service.",
      },
    ],
  },
  cta: {
    title: "Does your project need a pilot?",
    text: "Thirty minutes to review where your project stands and see what would unblock it.",
  },
  jsonLd: {
    name: "Digital project management",
    serviceType: "Outsourced web project management",
    description:
      "Scoping, specification writing, vendor consultation and part-time steering of web projects for small businesses and non-profits.",
  },
};
