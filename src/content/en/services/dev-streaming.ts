import type { ServiceContent } from "@/types/content";

export const content: ServiceContent = {
  id: "dev-streaming",
  seo: {
    title: "Discord Bot Developer for Streamers & Twitch",
    description:
      "Discord bot developer for streamers: custom Twitch and YouTube bots, bespoke stream overlays, chat automations wired to your smart home. Free scoping call.",
    keyword: "Discord bot developer",
  },
  label: "Streaming development",
  tagline:
    "Discord and Twitch bots, interactive overlays and automations that connect your chat to your setup.",
  hero: {
    h1: "Discord bot developer for streamers: bots, overlays and automations",
    intro:
      "As a freelance Discord bot developer, I build custom tools for streamers: personalized Discord and Twitch bots, interactive stream overlays, Twitch or YouTube chat automations that trigger your lights, sounds, alerts or mini-games. One contact, from scoping to hosting.",
    badges: [
      "Discord.js",
      "Twitch EventSub",
      "YouTube Live API",
      "OBS WebSocket",
      "Node.js",
      "TypeScript",
      "Home Assistant",
    ],
  },
  problem: {
    title: "The problem I solve",
    paragraphs: [
      "Mainstream bots all do the same thing. As soon as you want a mechanic specific to your channel, an integration with your hardware or a precise moderation rule, you hit a limit, one more subscription or an abandoned plugin.",
      "A developer for streamers writes exactly what your community needs: a custom Twitch bot that talks to your Discord server, a bespoke stream overlay that reacts to chat, a Twitch chat automation that controls your smart home. The code is yours and runs on your infrastructure.",
    ],
    points: [
      "A Discord server to structure: automatic roles, onboarding, tickets, live alerts, moderation",
      "Twitch or YouTube commands and rewards that existing bots do not offer",
      "Static overlays when you want elements that react to your chat live",
      "Hardware (lights, cameras, panels, sounds) that chat could trigger",
      "Moderation and hosting tasks that eat your time on every stream",
    ],
  },
  deliverables: {
    title: "Discord bot developer: what I build",
    intro:
      "Each building block is independent: you order what you need, and the blocks talk to each other.",
    items: [
      {
        title: "Custom Discord bot",
        text: "Automatic roles and channels, onboarding forms, tickets, Twitch or YouTube live announcements, moderation with logs, commands specific to your community. Hosted on your server, with an admin panel if needed.",
      },
      {
        title: "Custom Twitch or YouTube bot",
        text: "Chat commands, channel points and rewards, timers, reactions to subs and raids, sync with Discord. Compatible with Twitch EventSub events and YouTube Live chat.",
      },
      {
        title: "Interactive stream overlays",
        text: "Browser sources for OBS: alerts, polls, queues, goal bars, elements that move when chat types. Designed to match your identity, lightweight so your frame rate does not drop.",
      },
      {
        title: "Chat automation and smart home",
        text: "Chat triggers your Philips Hue or Home Assistant lights, switches OBS scenes, plays a sound, activates a camera or a panel. With cooldowns, point costs and limits so you stay in control.",
      },
      {
        title: "Chat mini-games",
        text: "Cooperative or competitive games played from chat: votes, duels, quizzes, races, persistent points economy. Displayed in the overlay and tracked in Discord.",
      },
      {
        title: "Hosting and maintenance",
        text: "Deployment on a small server (VPS or Raspberry Pi), backups, monitoring and automatic restart. Updates when Twitch, Discord or YouTube change their APIs.",
      },
    ],
  },
  process: {
    title: "How the project runs",
    steps: [
      {
        title: "Free scoping call",
        text: "30 minutes to talk about your channel, your community and what you want to trigger. You leave with a list of what is feasible and a price range.",
      },
      {
        title: "Specification",
        text: "List of commands, events, permissions and rules (cooldowns, costs, limits). A short document you approve, with overlay mockups.",
      },
      {
        title: "Iterative development",
        text: "Delivery block by block, tested with you on a private Discord server or a test stream. You see the result before the next step.",
      },
      {
        title: "Go-live",
        text: "Installation on your hosting, connection to your Twitch, YouTube and Discord accounts and to your hardware, documentation of accesses.",
      },
      {
        title: "Follow-up",
        text: "One month of fixes included, then a maintenance plan to keep up with platform changes and add mechanics.",
      },
    ],
  },
  stack: {
    title: "Technologies",
    intro: "TypeScript code running on Node.js, wired to the platforms' official APIs:",
    items: [
      "Node.js",
      "TypeScript",
      "Discord.js",
      "Twitch API / EventSub",
      "YouTube Live Streaming API",
      "OBS WebSocket",
      "WebSocket",
      "Home Assistant",
      "Philips Hue API",
      "Docker",
      "PostgreSQL / SQLite",
      "VPS / Raspberry Pi",
    ],
  },
  cases: {
    title: "Two typical setups",
    intro: "Two typical scenarios, not client projects, to illustrate what I can set up for a mid-sized channel.",
    items: [
      {
        title: "Community Discord server linked to Twitch",
        context:
          "A Twitch channel with an active Discord managed by hand: roles given one by one, forgotten live announcements, scattered moderation.",
        result:
          "A Discord bot that assigns roles based on Twitch subscriber status, announces streams automatically, opens support tickets and logs moderation. The streamer no longer touches the server during streams.",
      },
      {
        title: "Interactive overlay and smart home driven by chat",
        context:
          "A streamer wants viewers to act on the set and cameras with channel points, without breaking the flow of the stream.",
        result:
          "A Twitch bot connected to Home Assistant and OBS: rewards that change light colors, trigger a scene or a sound, with cooldowns and queues shown in the overlay. Rewards are editable from Discord.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions about bots and overlays",
    items: [
      {
        question: "How much does a custom Discord or Twitch bot cost?",
        answer:
          "A simple bot (announcements, roles, a few commands) is in the hundreds of euros. A full set with bot, overlays and smart home automations is in the thousands. The free scoping call gives you a figure before any commitment.",
      },
      {
        question: "Do I need a server to run the bot?",
        answer:
          "Yes, a bot has to run continuously. A small VPS for a few euros a month or a Raspberry Pi at home is enough. I handle installation, monitoring and automatic restart.",
      },
      {
        question: "Does it work with YouTube or Kick too?",
        answer:
          "YouTube Live yes, through the official API. For Kick or other platforms, it depends on how open their API is: I check feasibility during scoping.",
      },
      {
        question: "What happens when Twitch or Discord changes its API?",
        answer:
          "That is what the maintenance plan is for: I watch platform announcements and update the bot before anything breaks. Without a plan, I can step in on a one-off quote.",
      },
      {
        question: "Can I modify the bot myself?",
        answer:
          "The code is yours and documented. For everyday settings (commands, rewards, cooldowns), I ship a panel or admin commands so you never have to touch the code.",
      },
      {
        question: "What are the timelines?",
        answer:
          "Count one to two weeks for a simple bot, four to eight weeks for a full set with overlays and smart home. Blocks are delivered as they are ready.",
      },
    ],
  },
  cta: {
    title: "Shall we talk about your channel?",
    text: "Thirty minutes to list what you want to automate and leave with an honest estimate.",
  },
  jsonLd: {
    name: "Streaming development",
    serviceType: "Discord and Twitch bot development, stream overlays",
    description:
      "Custom Discord and Twitch bots, interactive stream overlays, chat automations connected to smart home devices and mini-games for streamers, hosted on your own infrastructure.",
  },
};
