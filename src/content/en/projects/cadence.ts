import type { ProjectContent } from "@/types/content";

export const content: ProjectContent = {
  id: "cadence",
  seo: {
    title: "Cadence: a social step counter app for Android",
    description:
      "Cadence, a free, ad-free social step counter for Android: groups, leaderboards, challenges. Steps counted in the background without GPS. Expo and Kotlin.",
  },
  label: "Cadence",
  hero: {
    eyebrow: "Mobile app · Android",
    h1: "Cadence, a social step counter app for Android",
    intro:
      "Cadence is a free, ad-free social step counter for Android that I am designing and building with Expo and React Native. It counts steps in the background without GPS and lets you compete with friends and family: groups, leaderboards and challenges.",
    status: "In development: not yet available on Google Play.",
    tags: ["React Native", "Expo", "Kotlin", "Supabase"],
  },
  idea: {
    paragraphs: [
      "A free, ad-free social step counter that stays a plain step counter by default. Social and map features are switched on from the profile when you want them: a disabled module asks for no permission and sends no request.",
      "The starting constraint: zero recurring cost. The back end runs on the free tiers of Supabase and Firebase, which demands real network frugality, and maps rely on open services that need no API key.",
    ],
    points: [
      "Step counting without GPS",
      "Free, no ads",
      "Three optional modules: Groups, Map and routes, Sports meetups",
      "Zero recurring cost",
    ],
  },
  features: {
    items: [
      {
        title: "Background step counting",
        text: "A native service counts steps even when the app is closed. The persistent notification and the widget show the same total as the home screen, with a 24-segment tempo bar that lights up as you near your goal.",
      },
      {
        title: "History and shareable recap",
        text: "Day, week, month and year views, and a recap image you can share from the history screen.",
      },
      {
        title: "Groups and leaderboards",
        text: "Group leaderboards by day, week and month, challenges, chat and invitation links. The leaderboard updates live.",
      },
      {
        title: "Badges and reminders",
        text: "Badges and milestones awarded on the server. A reminder at the time you choose shows the steps left and the estimated walking time, and stays silent once the goal is reached.",
      },
      {
        title: "Android widgets",
        text: "A daily widget and a weekly widget, rendered in light and dark versions to match the system theme.",
      },
      {
        title: "Map and walking navigation",
        text: "Drinking fountains from OpenStreetMap, fountain reporting and turn-by-turn walking directions with voice prompts that keep working on the lock screen.",
      },
      {
        title: "Sports meetups",
        text: "Propose an outing at a place and time, see those organized within 20 km, join them or leave them.",
      },
      {
        title: "Health Connect",
        text: "Steps and distance are read from Health Connect. The daily total keeps the higher value of the sensor and Health Connect, which avoids double counting between a watch and the phone.",
      },
    ],
  },
  tech: {
    intro:
      "An Expo app in strict TypeScript, a native Kotlin module for what JavaScript cannot do, and Supabase as the back end.",
    items: [
      {
        title: "Expo, React Native and TypeScript",
        text: "Expo Router for navigation and invitation links, Zustand for local state, TanStack Query for the server cache and offline support, NativeWind for styling, Reanimated and moti for animations, honoring the system's “Remove animations” setting.",
      },
      {
        title: "A Kotlin module to count steps",
        text: "JavaScript's step sensor stops when the app is frozen. A native foreground service subscribed to the phone's step sensor becomes the source of truth and shares its totals with the widget.",
      },
      {
        title: "Supabase and row-level security",
        text: "Sign-in with a code sent by email, Postgres, Realtime, Edge Functions and pg_cron. Nobody reads other people's steps directly: everything goes through SQL leaderboard functions.",
      },
      {
        title: "Network frugality",
        text: "A single row per user per day, updated at most every two minutes or every 250 steps, never raw events.",
      },
      {
        title: "Push notifications",
        text: "A queue filled by triggers and drained by an Edge Function to Firebase Cloud Messaging. Without Firebase, the app works normally.",
      },
      {
        title: "Open mapping",
        text: "MapLibre and OpenFreeMap for the map, Overpass for fountains, Valhalla and OSRM for routes, Photon for search, Open-Meteo for weather: free and keyless.",
      },
    ],
    stack: [
      "Expo",
      "React Native",
      "TypeScript",
      "Kotlin",
      "Supabase",
      "PostgreSQL",
      "TanStack Query",
      "Zustand",
      "NativeWind",
      "Reanimated",
      "MapLibre",
      "Firebase Cloud Messaging",
      "Health Connect",
      "Jest",
    ],
  },
  challenges: {
    items: [
      {
        title: "Counting without draining the battery",
        text: "No scheduled wake-ups: nothing runs while the screen is off and the phone is still. The service re-reads Health Connect when the screen turns on and at spaced intervals, more often only while you walk.",
      },
      {
        title: "Up-to-date leaderboards with the app closed",
        text: "When the total exceeds the last upload by 250 steps, the native service starts a headless JavaScript task that reuses the app's session and upload logic. On the server, a trigger always keeps the higher value.",
      },
      {
        title: "Navigation that survives the lock screen",
        text: "Expo's location library delivers background positions late when the screen is off. A second native module provides one position per second, without asking for permanent background location.",
      },
      {
        title: "Privacy by design",
        text: "Daily steps readable only through leaderboards, rounded positions for reported fountains and meetups, and location read only on demand by the map, the weather and navigation.",
      },
      {
        title: "Staying free over time",
        text: "Supabase's free tier pauses after seven days without requests: a GitHub Actions workflow queries it every 48 hours. Public mapping servers are used sparingly.",
      },
    ],
  },
  cta: {
    title: "Have a custom app in mind?",
    text: "Mobile or web app, back end, notifications: let's talk about your project in thirty minutes.",
  },
  jsonLdDescription:
    "Free, ad-free social step counter for Android: background step counting without GPS, groups, leaderboards, challenges, widgets, a drinking-fountain map and walking navigation.",
};
