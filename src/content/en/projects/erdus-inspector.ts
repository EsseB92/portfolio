import type { ProjectContent } from "@/types/content";

export const content: ProjectContent = {
  id: "erdus-inspector",
  seo: {
    title: "Erdus Inspector: one-click security and SEO audit",
    description:
      "Erdus Inspector, a Chrome extension for quick audits: security headers, cookies, WordPress, CDN cache and on-page SEO, with a score and a Markdown report.",
  },
  label: "Erdus Inspector",
  hero: {
    eyebrow: "Chrome extension · Manifest V3",
    h1: "Erdus Inspector, a one-click security and SEO audit of any page",
    intro:
      "Erdus Inspector is a Chrome extension I designed and built to audit the open page: security headers, cookies, exposed WordPress version, CDN cache and SEO tags. Every check is scored and explained, and the report copies as Markdown.",
    imageAlt:
      "The Erdus Inspector popup open on a page: overall score of 43 and a list of failed security checks (HSTS, CSP, X-Frame-Options).",
    tags: ["Chrome Extension", "Manifest V3", "JavaScript", "Web security"],
  },
  link: {
    visit: "Install from the Chrome Web Store",
    live: "Chrome Web Store:",
  },
  idea: {
    paragraphs: [
      "I regularly run security audits of the sites I host and of my clients' sites. I wanted the core of those checks in the browser, on any page, with results I can show a client without jargon.",
      "The extension collects nothing: the analysis runs in the browser and only contacts the audited site. It asks for the fewest permissions possible, and access to a site's cookies is granted only if the user decides so.",
    ],
    points: [
      "A score and an explanation for every check",
      "No data collected",
      "Minimal permissions, per-site access",
      "Client-ready Markdown report",
    ],
  },
  features: {
    items: [
      {
        title: "Security headers",
        text: "CSP (flagging 'unsafe-inline' and 'unsafe-eval'), HSTS, X-Frame-Options or frame-ancestors, nosniff, Referrer-Policy and Permissions-Policy, plus disclosed software versions.",
      },
      {
        title: "Cookies",
        text: "Secure, HttpOnly and SameSite attributes of the site's cookies. Only session cookies lower the score: an analytics cookie set from JavaScript cannot be HttpOnly.",
      },
      {
        title: "WordPress and CDN cache",
        text: "WordPress version exposed by the generator tag, ?ver= parameters or the readme.html file. Cache status read from Hostinger, Cloudflare, Vercel or LiteSpeed headers.",
      },
      {
        title: "On-page SEO",
        text: "Title and meta description with their lengths, canonical, robots, Open Graph and Twitter card, single h1, heading hierarchy, images without alt, JSON-LD, lang and viewport.",
      },
      {
        title: "Google and social previews",
        text: "The popup shows how the page will look in Google results and when shared on social networks, based on its tags.",
      },
      {
        title: "On-page highlighting",
        text: "A toggle outlines images without alt, duplicate h1s and skipped heading levels on the page, in an isolated layer that leaves the site untouched.",
      },
      {
        title: "Score and badge",
        text: "A score out of 100 per section and an overall score, shown in colour on the extension icon for the audited tab.",
      },
      {
        title: "Markdown report",
        text: "The full report, with findings, explanations and the heading outline, copies in one click for a ticket, an email or a quote.",
      },
    ],
  },
  tech: {
    intro:
      "JavaScript with no framework, no dependencies and no build step: the extension folder ships as is.",
    items: [
      {
        title: "Manifest V3",
        text: "A service worker runs the analysis; a script injected on demand reads the page and returns serialisable data, scored by the same code as the preview page.",
      },
      {
        title: "Headers without webRequest",
        text: "Headers come from an anonymous HEAD request to the page, using activeTab's temporary access. webRequest would have required permanent access to every site.",
      },
      {
        title: "Per-site cookie access",
        text: "Chrome does not hand cookies over under activeTab alone, so the extension then asks for access to the audited site only, through an optional, revocable permission.",
      },
      {
        title: "Isolated highlight layer",
        text: "A closed shadow DOM and a constructed stylesheet: page styles cannot reach the layer, and the page's CSP does not block it.",
      },
      {
        title: "Tested in a real Chrome",
        text: "The extension is loaded into a disposable headless Chrome driven over CDP, then run on several real sites to compare its findings with headers checked by hand.",
      },
      {
        title: "Tooled publishing",
        text: "Dependency-free Node scripts build the Chrome Web Store package and the listing screenshots, rendered in headless Chrome from the real popup.",
      },
    ],
    stack: [
      "JavaScript",
      "Chrome Extensions",
      "Manifest V3",
      "Shadow DOM",
      "Chrome DevTools Protocol",
      "Node.js",
    ],
  },
  challenges: {
    items: [
      {
        title: "Minimal permissions",
        text: "Reading a site's headers and cookies without asking for “access to all your data on all websites”: activeTab for the page, and optional access requested site by site for cookies.",
      },
      {
        title: "No false positives",
        text: "Trials on real sites fixed the analysis: SVG icon <title> elements, the jQuery version mistaken for WordPress's, and harmless cookies wrongly flagged.",
      },
      {
        title: "A report a client can read",
        text: "Each check carries a precise finding and a one-sentence explanation, so the report works for the developer and the client alike.",
      },
    ],
  },
  cta: {
    title: "An audit of your site?",
    text: "Security, performance, SEO: let's talk about your site in thirty minutes.",
  },
  jsonLdDescription:
    "Chrome extension that audits the open page: security headers, cookies, exposed WordPress version, CDN cache and SEO, with a score, explanations, on-page highlighting and a Markdown report. No data collected.",
};
