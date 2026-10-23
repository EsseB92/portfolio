import type { ProjectContent } from "@/types/content";

export const content: ProjectContent = {
  id: "erdus-games",
  seo: {
    title: "Erdus Games: online guessing games with a daily challenge",
    description:
      "Erdus Games, online guessing games: movies, video games, anime, flags, music. Daily challenge, marathon, challenges between friends. A JavaScript PWA.",
  },
  label: "Erdus Games",
  hero: {
    eyebrow: "Web app · Game",
    h1: "Erdus Games, an online guessing game platform",
    intro:
      "Erdus Games is a guessing game platform I designed and built: recognize a video game, a movie, a TV series, an anime, a flag, a song or a Pokémon from an image that slowly reveals itself, from successive clues or from an attribute comparison. A static JavaScript site that can be installed on a phone.",
    tags: ["JavaScript", "Canvas", "PHP", "PWA"],
  },
  idea: {
    paragraphs: [
      "Web guessing games, in the spirit of guessthe.game or framed.wtf, often stick to a single theme and a single mechanic. The idea behind Erdus Games: bring nine themes and three ways to play together on one site, with a daily challenge that is the same for everyone.",
      "All of it without a database: a static site, a small PHP proxy for the APIs and JSON files on the server. Free play needs no account; the daily challenge, the marathon and challenges between friends only require a nickname and a sign-in link sent by email, with no password.",
    ],
    points: [
      "Nine themes: video games, movies, TV series, anime and manga, flags, music, audio clips, Pokémon, characters",
      "The same item for everyone, every day",
      "No database, no password",
      "Installable on a phone (PWA)",
    ],
  },
  features: {
    items: [
      {
        title: "Hidden image",
        text: "The image reveals itself slowly and you have to recognize it before it is sharp. Adjustable speed and several effects: pixels, blur, zoom-out or random.",
      },
      {
        title: "Clues",
        text: "Each mistake reveals a new image and a text clue (year, genre, platform, country…), with autocomplete and color-coded guesses. For audio, the clip gets longer after each mistake, from 1 to 16 seconds.",
      },
      {
        title: "Comparison",
        text: "No image: each guess is compared with the mystery item attribute by attribute, in green, yellow or red, with arrows for ordered values. Ten lives.",
      },
      {
        title: "Daily challenge",
        text: "The same item for everyone, one attempt per theme per day, a result you can share as emojis, a streak of consecutive days and an archive of past challenges.",
      },
      {
        title: "Daily marathon",
        text: "All nine themes in a row, with a timer that only counts playing time, the option to resume and a dedicated leaderboard.",
      },
      {
        title: "Challenge between friends",
        text: "A six-character code and an invitation link: everyone plays the same five items, up to fifty players, with a leaderboard for the game.",
      },
      {
        title: "Leaderboards, badges and stats",
        text: "Leaderboards by theme and period, a circle of friends, twenty badges, personal statistics and a share image generated in the browser.",
      },
      {
        title: "Reminders and installation",
        text: "Installation on the home screen and anonymous Web Push reminders at the time you choose: daily challenge ready, streak about to expire.",
      },
    ],
  },
  tech: {
    intro:
      "A static site in HTML, CSS and JavaScript with no framework, plus a few PHP scripts. No database and no client-side library.",
    items: [
      {
        title: "Vanilla JavaScript and Canvas",
        text: "The reveal effects are drawn in a canvas. In production, eighteen scripts are concatenated and minified into a single file: the first screen loads about 135 KB, and the embedded lists are loaded on demand.",
      },
      {
        title: "Two sources per theme",
        text: "RAWG, TMDB, AniList, Deezer, PokéAPI, flagcdn, Wikidata… If the main source goes down or hits its quota, the fallback source takes over for five minutes.",
      },
      {
        title: "A PHP proxy that protects the keys",
        text: "API keys stay on the server. The proxy only accepts requests from the site, only relays allowed paths and parameters, rate-limits by IP address and enforces a daily budget per upstream service.",
      },
      {
        title: "Passwordless sign-in",
        text: "A nickname and a single-use email link, valid for fifteen minutes. Syncing between devices merges a JSON snapshot; the server only keeps the latest snapshot and the email address.",
      },
      {
        title: "Caching and offline",
        text: "A stale-while-revalidate service worker for instant display, assets cached for a year under versioned URLs, Cloudflare Turnstile bot protection and a strict CSP.",
      },
      {
        title: "Tests and releases",
        text: "End-to-end Playwright tests on desktop Chrome and Pixel 5, with a fully mocked network. Each push runs the build, an SSH deployment and a check of what is actually published.",
      },
    ],
    stack: [
      "JavaScript",
      "Canvas",
      "PHP",
      "PWA",
      "Service worker",
      "Web Push",
      "Cloudflare Turnstile",
      "Playwright",
      "esbuild",
      "GitHub Actions",
    ],
  },
  challenges: {
    items: [
      {
        title: "Staying within API quotas",
        text: "Response caching, a daily budget per service and automatic failover to the fallback source. Daily challenge lists are frozen until midnight and archived: the same items and the same images for everyone, even on later days.",
      },
      {
        title: "Releasing without cache traps",
        text: "The CDN keeps JavaScript and CSS files for a year. Each version therefore gets a new URL, and the deployment uploads the bundle before the page and the service worker, so a page never references a missing file.",
      },
      {
        title: "Browser differences",
        text: "Safari does not support filters on canvas, so the blur effect uses a CSS filter. Android ignores the volume of audio elements, so it is set through the Web Audio API.",
      },
      {
        title: "Securing link-based sign-in",
        text: "A sign-in link is never exchanged without the player knowing: the request carries a secret tied to the browser and, failing that, the site asks for confirmation. Without either, the server refuses the exchange.",
      },
      {
        title: "Errors people can understand",
        text: "No raw error ever reaches the player: being offline, a timeout or a service outage each produce a plain message and a “Retry” button.",
      },
    ],
  },
  cta: {
    title: "A mini-game or a tool for your community?",
    text: "Shared challenges, leaderboards, API integrations: let's talk about your project in thirty minutes.",
  },
  jsonLdDescription:
    "Online guessing game platform: nine themes, Hidden image, Clues and Comparison modes, a daily challenge, a marathon and challenges between friends. Installable (PWA).",
};
