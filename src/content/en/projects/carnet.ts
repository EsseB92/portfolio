import type { ProjectContent } from "@/types/content";

export const content: ProjectContent = {
  id: "carnet",
  seo: {
    title: "Carnet: an offline note-taking app with no account",
    description:
      "Carnet, an offline note-taking web app with no account: Markdown, tags, search, voice dictation, photos. Notes never leave your device (PWA).",
  },
  label: "Carnet",
  hero: {
    eyebrow: "Web app · PWA",
    h1: "Carnet, an offline note-taking app with no account",
    intro:
      "Carnet is a progressive web app for taking notes that I designed and built. It works fully offline and without an account: notes are stored in the browser and never leave the device.",
    tags: ["PWA", "IndexedDB", "JavaScript", "Playwright"],
  },
  idea: {
    paragraphs: [
      "Jot down a note quickly, on a phone or a computer, without signing up and without handing your notes to a server. Carnet installs on the home screen and opens without a network.",
      "The code follows the same frugal principle: no dependencies, no build step. The folder deploys as is to any static HTTPS host. Only visits are counted, without cookies; the content of notes is never sent.",
    ],
    points: [
      "No account, no notes sent anywhere",
      "Works without a network",
      "No dependencies, no build step",
      "Export and import of all notes",
    ],
  },
  features: {
    items: [
      {
        title: "Notes and autosave",
        text: "Create, pin and delete notes, with an undoable delete. Notes are saved as you type and the app asks the browser for persistent storage.",
      },
      {
        title: "Light Markdown and Reading mode",
        text: "Headings, lists, clickable checkboxes, quotes, colors and highlights. A formatting bar sits above the keyboard on mobile.",
      },
      {
        title: "Search and tags",
        text: "Instant, accent-insensitive search across titles and text, with highlighting. Any #keyword becomes a filter.",
      },
      {
        title: "Voice dictation",
        text: "Dictated text is inserted at the cursor, in French, when the browser offers speech recognition.",
      },
      {
        title: "Photos and sketches",
        text: "Attached images are resized to 1600 px, and sketches are drawn with a finger or a mouse using a pen, a highlighter and an eraser.",
      },
      {
        title: "Trash and export",
        text: "A deleted note stays in the trash for thirty days. JSON export, import by merge where the most recent version wins, and a reminder when the last export is more than thirty days old.",
      },
      {
        title: "Sharing from Android",
        text: "Sharing a text or a link to Carnet offers to create a note. A “Quick note” shortcut opens the editor directly.",
      },
      {
        title: "Everyday comfort",
        text: "Automatic dark mode, a single-screen mobile layout, keyboard shortcuts and sorting by date or title.",
      },
    ],
  },
  tech: {
    intro:
      "HTML, CSS and JavaScript with no framework and no dependencies, relying on browser APIs for everything else.",
    items: [
      {
        title: "IndexedDB",
        text: "Notes and their attachments are stored in the browser. The JSON export includes images as base64 and the trash.",
      },
      {
        title: "Service worker",
        text: "The app is cached to work offline. A new version is detected when the app returns to the foreground, when the network comes back and every hour, then announced with a message.",
      },
      {
        title: "Share target",
        text: "An Android share arrives as a POST to the service worker, which stores the text in IndexedDB and redirects to the home page: shared content never reaches the server.",
      },
      {
        title: "Playwright tests",
        text: "Critical scenarios run on desktop Chrome and a Pixel 5: persistence, trash, search, Reading mode, attachments, export then import, and service worker updates.",
      },
      {
        title: "Continuous deployment",
        text: "Each push runs the tests, then a two-pass SSH deployment and a check of what the site actually serves.",
      },
    ],
    stack: [
      "JavaScript",
      "PWA",
      "IndexedDB",
      "Service worker",
      "Web Share Target",
      "Playwright",
      "GitHub Actions",
    ],
  },
  challenges: {
    items: [
      {
        title: "Updates despite the CDN cache",
        text: "The CDN keeps JavaScript and CSS files for a year. Each version therefore gets a new URL, and the service worker, always re-fetched from the network, activates immediately and offers to reload.",
      },
      {
        title: "Sharing that never touches the server",
        text: "Shared text is intercepted by the service worker and never enters a cache. Since any site can open Carnet with text in the URL, the page asks for confirmation before creating the note.",
      },
      {
        title: "Not losing notes",
        text: "With no account and no server, backups are up to the user: persistent storage requested, a thirty-day trash, export reminders and import by merge.",
      },
    ],
  },
  cta: {
    title: "Need a custom web app?",
    text: "Offline, installable, respectful of user data: let's talk about your project in thirty minutes.",
  },
  jsonLdDescription:
    "Offline progressive web app for note-taking with no account: light Markdown, tags, instant search, voice dictation, photos and sketches, trash and export. Notes stay on the device.",
};
