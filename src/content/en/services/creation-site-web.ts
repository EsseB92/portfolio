import type { ServiceContent } from "@/types/content";

export const content: ServiceContent = {
  id: "creation-site-web",
  seo: {
    title: "Freelance Web Development, Next.js & WordPress",
    description:
      "Freelance web development near Paris: showcase site, online store or redesign with Next.js or WordPress, fast, secure and SEO-ready. Free scoping call.",
    keyword: "freelance web development",
  },
  label: "Website development",
  tagline:
    "A custom showcase site, store or web app: fast, secure and ready for search engines.",
  hero: {
    h1: "Freelance web development: a fast, secure and well-ranked website",
    intro:
      "Freelance web development in the Paris area: I design and build your showcase site, online store or web application with Next.js or WordPress, from specifications to launch. Based in Bois-Colombes (Hauts-de-Seine), I also work remotely with clients across France and Europe.",
    badges: ["Next.js", "React", "TypeScript", "WordPress", "SEO"],
  },
  problem: {
    title: "The problem I solve",
    paragraphs: [
      "A website that loads slowly, does not show up on Google or has not changed in five years loses customers every month. Off-the-shelf builders hit their limits quickly, agencies bill whole teams, and some freelancers vanish after launch.",
      "I offer a simple alternative: a freelance Next.js developer, or WordPress when it fits better, who builds a custom site, takes care of performance and technical SEO from day one, and stays reachable after delivery.",
    ],
    points: [
      "Redesign of a showcase site that became slow, dated or impossible to edit",
      "A custom WordPress site without a purchased theme or an imposed page builder",
      "An online store with a short checkout and controlled loading time",
      "A business web application with Next.js when a CMS is no longer enough",
    ],
  },
  deliverables: {
    title: "Freelance web development: what you get",
    intro:
      "Every site ships complete, with the technical foundations most quotes leave out.",
    items: [
      {
        title: "A custom website",
        text: "A mockup validated with you, faithful integration, clean and documented code. Next.js for application-type projects, WordPress for editorial autonomy.",
      },
      {
        title: "Technical SEO included",
        text: "Meta tags, schema.org structured data, sitemap, hreflang for multilingual sites, internal linking. The site is ready to be indexed on launch day.",
      },
      {
        title: "Measured performance",
        text: "Green Core Web Vitals, optimized images, deferred loading below the fold. You get the PageSpeed scores before and after.",
      },
      {
        title: "Baseline security",
        text: "HTTPS, security headers, up-to-date dependencies, backups. For WordPress: hardening, application firewall and login attempt limiting.",
      },
      {
        title: "Responsive and accessible",
        text: "An interface that works with a keyboard, a screen reader and on every screen size, following WCAG basics.",
      },
      {
        title: "Training and handover",
        text: "A session to learn how to edit your content, short documentation, and the source code is yours.",
      },
    ],
  },
  process: {
    title: "How the project runs",
    steps: [
      {
        title: "Free scoping call",
        text: "30 minutes on video to understand your business, goals and budget. You leave with a recommendation, even if we do not work together.",
      },
      {
        title: "Quote and schedule",
        text: "A detailed line-by-line quote, a schedule with dated milestones and a clear list of what you need to provide.",
      },
      {
        title: "Mockup",
        text: "Page structure and Figma mockup, validated with you before a single line of code is written.",
      },
      {
        title: "Development",
        text: "Integration, content, technical SEO and security. You follow progress on a preview URL.",
      },
      {
        title: "Testing and launch",
        text: "Browser and mobile tests, fixes, then deployment on your hosting, with redirects if it is a redesign.",
      },
      {
        title: "Follow-up",
        text: "One month of fixes included after launch, then a maintenance contract if you want one.",
      },
    ],
  },
  stack: {
    title: "Technologies",
    intro: "I pick the tool for the project, not the other way around. The two main stacks:",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WordPress",
      "Elementor",
      "PHP",
      "Symfony",
      "GitHub",
      "Vercel / Hostinger",
    ],
  },
  cases: {
    title: "Two recent projects",
    items: [
      {
        title: "Manufacturist — WordPress store",
        context:
          "A WordPress e-commerce site whose loading time was hurting sales and whose checkout had too many steps.",
        result:
          "Performance work (caching, images, third-party scripts), a simplified checkout and accessibility fixes. Faster loading and a shorter purchase path.",
      },
      {
        title: "Observatoire du Paysage UTLB — hardened blog",
        context:
          "A non-profit WordPress blog exposed to brute-force attacks, with no tool to engage its community.",
        result:
          "Custom hardening (application firewall, login limiting, automated backups) and a Noptin newsletter integration. A stable site and a team autonomous on content.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions about website development",
    items: [
      {
        question: "How much does a website cost?",
        answer:
          "A custom showcase site starts at a few thousand euros; a store or an application costs more depending on features. The free scoping call exists precisely to give you an honest range before any commitment.",
      },
      {
        question: "Next.js or WordPress: how do I choose?",
        answer:
          "WordPress suits you if you edit content often and want to stay autonomous. Next.js suits sites that need high performance, specific features or integration with your tools. I recommend one or the other after the scoping call.",
      },
      {
        question: "What are the timelines?",
        answer:
          "Count three to six weeks for a showcase site, more for a store or an application. The schedule is set in the quote and mostly depends on how quickly you provide text and visuals.",
      },
      {
        question: "Do you handle hosting and the domain name?",
        answer:
          "Yes. I recommend a suitable host and set up the domain, the HTTPS certificate and backups. Subscriptions stay in your name: you keep control.",
      },
    ],
  },
  cta: {
    title: "Shall we scope your website?",
    text: "Thirty minutes on video to talk about your business and leave with a clear recommendation.",
  },
  jsonLd: {
    name: "Website development",
    serviceType: "Website design and development",
    description:
      "Custom showcase sites, online stores and web applications built with Next.js or WordPress, optimized for performance, security and search engines.",
  },
};
