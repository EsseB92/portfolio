import { links, skillItems } from "@/lib/data";
import type { HomeContent, HubContent } from "@/types/content";

export const home: HomeContent = {
  seo: {
    title: "Bertrand Sudre — Freelance Web Developer, Paris | Erdus",
    description:
      "Bertrand Sudre, freelance web developer near Paris. Website development, digital project management, Discord and Twitch bots, custom PC building.",
    keywords: [
      "freelance web developer",
      "website development",
      "freelance digital project manager",
      "Discord bot",
      "custom PC building",
      "Next.js",
      "WordPress",
      "Paris",
    ],
  },
  hero: {
    availability: "Available for new projects",
    jobTitle: "Freelance Web Developer",
    tagline:
      "I design custom websites and web applications: fast, secure, accessible and optimized for search engines.",
    location:
      "Based in Bois-Colombes, near Paris, I work remotely with clients across France and Europe.",
    primaryCta: "See my services",
    secondaryCta: "Contact me",
  },
  tracks: {
    title: "Two worlds, one contact",
    intro:
      "Running a business or running a stream channel are different needs. The methods are the same.",
    cardCta: "See the services",
  },
  method: {
    title: "What I guarantee",
    intro:
      "Whatever the service, every project ships with the same foundations. These are commitments, not options.",
    items: [
      {
        title: "Custom development",
        description:
          "Showcase sites, e-commerce and web applications built from A to Z, from specifications to deployment, with maintainable and scalable code.",
        icon: "code",
      },
      {
        title: "SEO & visibility",
        description:
          "On-page optimization, structured content, rich data and technical improvements for lasting visibility on search engines and AI answer engines.",
        icon: "search",
      },
      {
        title: "Web performance",
        description:
          "Minimal loading times, green Core Web Vitals and optimized PageSpeed scores for a smooth experience on every device.",
        icon: "zap",
      },
      {
        title: "Security",
        description:
          "Modern protocols, security headers, application firewalls and SSL certificates to protect your data and your users' data.",
        icon: "shield",
      },
      {
        title: "Responsive & accessibility",
        description:
          "Interfaces adapted to every screen and compliant with accessibility standards (WCAG), so no user is left behind.",
        icon: "devices",
      },
      {
        title: "Automation & AI",
        description:
          "Automated workflows with n8n and Make, AI integrated into your business tools to save time on repetitive tasks.",
        icon: "bot",
      },
    ],
  },
  skills: {
    title: "Skills",
    intro:
      "A modern frontend stack, solid backend foundations and proven tools to deliver fast and well.",
    groups: [
      { category: "Frontend", items: skillItems.frontend },
      { category: "Backend & CMS", items: skillItems.backend },
      { category: "Tools", items: skillItems.tools },
      { category: "Automation & streaming", items: skillItems.automation },
    ],
  },
  experience: {
    title: "Experience",
    intro:
      "More than ten years across digital project management, systems administration and web development.",
    items: [
      {
        role: "Digital production coordinator",
        company: "Edreams Factory",
        period: "Jul. 2025 — Present",
        startDate: "2025-07",
        description:
          "Coordination of digital production (work-study): process optimization, data analysis and project tracking.",
      },
      {
        role: "Freelance Web Developer",
        company: "Erdus",
        period: "Oct. 2023 — Present",
        startDate: "2023-10",
        description:
          "Design and delivery of custom web projects for varied clients, from mockup to deployment: showcase sites, e-commerce, hardened blogs.",
      },
      {
        role: "Assistant project manager",
        company: "French Ministry of the Armed Forces",
        period: "Oct. 2019 — Sep. 2021",
        startDate: "2019-10",
        description:
          "Steering of digital projects and comparative analysis of CAD software for the needs of technical teams.",
      },
      {
        role: "Administrative and IT manager",
        company: "GMF Assurances",
        period: "Sep. 2017 — Aug. 2019",
        startDate: "2017-09",
        description:
          "IT infrastructure management, user support and administration of internal tools.",
      },
      {
        role: "SharePoint administrator",
        company: "PSA Peugeot-Citroën",
        period: "Sep. 2015 — Aug. 2016",
        startDate: "2015-09",
        description:
          "Set-up of SharePoint sites and training of teams for everyday use.",
      },
    ],
  },
  projects: {
    title: "Projects",
    intro:
      "A selection of recent work, from an immersive portfolio to a performance-tuned online store.",
    serviceLinkPrefix: "Related service:",
    items: [
      {
        title: "Erdus Games",
        description:
          "Web game with two modes: Depixelize (the image sharpens progressively, guess it before it is clear) and Guess (one more clue after each mistake). Five universes, four levels, vanilla JavaScript and Canvas, data from the RAWG, TMDB, AniList and flagcdn APIs.",
        tags: ["JavaScript", "Canvas", "REST API"],
        url: links.games,
        service: "dev-streaming",
      },
      {
        title: "Erdus",
        description:
          "Personal portfolio built with Next.js and TypeScript: multilingual SEO, optimized performance and custom design.",
        tags: ["Next.js", "TypeScript", "SEO"],
        url: links.portfolio,
        service: "creation-site-web",
      },
      {
        title: "3D Portfolio",
        description:
          "Immersive 3D experience in the browser with Three.js: animations and striking visual effects.",
        tags: ["Three.js", "React", "WebGL"],
        url: links.portfolio3d,
        service: "creation-site-web",
      },
      {
        title: "Manufacturist",
        description:
          "WordPress e-commerce site tuned for performance: shorter loading times and a smoother checkout.",
        tags: ["WordPress", "E-commerce", "Performance"],
        url: null,
        service: "creation-site-web",
      },
      {
        title: "Observatoire du Paysage UTLB",
        description:
          "WordPress blog with custom hardening and a Noptin newsletter integration.",
        tags: ["WordPress", "Security", "Newsletter"],
        url: links.utlb,
        service: "creation-site-web",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What kinds of projects do you take on?",
        answer:
          "Two worlds: digital projects for businesses (website development, project management) and projects for streamers and gamers (Discord and Twitch bots, overlays, PC building). Methods and quality requirements are the same.",
      },
      {
        question: "Do you only work in the Paris area?",
        answer:
          "I am based in Bois-Colombes, near Paris, but I work remotely with clients across France and Europe. We talk by video call and in writing, as you prefer. Only PC building involves an in-person handover or shipping.",
      },
      {
        question: "How do you optimize a website for search engines?",
        answer:
          "I work on three axes: technical (performance, structured data, internal linking), content (semantics, keywords) and user experience (accessibility, mobile). Every site ships with a sitemap, optimized tags and green Core Web Vitals.",
      },
      {
        question: "How do you secure the websites you deliver?",
        answer:
          "Every site ships with HTTPS, strict security headers, up-to-date dependencies and, for WordPress, specific hardening: application firewall, login attempt limiting and automated backups.",
      },
    ],
  },
  contact: {
    title: "Have a project in mind?",
    text: "Let's talk. Describe your needs and I will reply within 48 hours with a first analysis and an estimate.",
    malt: "Find me on Malt",
    linkedin: "LinkedIn",
  },
};

export const hub: HubContent = {
  seo: {
    title: "Web, Project Management, Streaming & PC Services",
    description:
      "Four services, two worlds: website development and project management for businesses, Discord/Twitch bots and PC building for streamers. Free scoping call.",
  },
  h1: "Four services, two worlds",
  intro:
    "Digital projects for businesses, streaming and hardware for gamers. Each service has its own page, process and FAQ. All of them start with a free thirty-minute scoping call.",
  cta: {
    title: "Hesitating between two services?",
    text: "Thirty minutes on video are enough to point your project to the right service, or to combine two of them.",
  },
};
