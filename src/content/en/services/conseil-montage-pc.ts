import type { ServiceContent } from "@/types/content";

export const content: ServiceContent = {
  id: "conseil-montage-pc",
  seo: {
    title: "Custom PC Building & Configuration Advice, Paris",
    description:
      "Custom PC building in the Paris area: gaming or streaming configuration advice, component selection for your budget, assembly and tests. Free scoping call.",
    keyword: "custom PC building",
  },
  label: "PC advice and building",
  tagline:
    "A configuration chosen for your use and budget, assembled, installed and tested.",
  hero: {
    h1: "Custom PC building: advice, component selection and assembly",
    intro:
      "Custom PC building in Hauts-de-Seine and the Paris area: I advise you on the configuration, select components for your budget and use (gaming, streaming, creative work, office), then assemble, install and test the machine before handing it over.",
    badges: ["AMD", "Intel", "NVIDIA", "Windows 11", "Linux"],
  },
  problem: {
    title: "The problem I solve",
    paragraphs: [
      "Pre-built PCs charge for the brand, impose unbalanced components and turn out noisy or limited as soon as you want to game and stream at the same time. Building yourself takes time, and a compatibility mistake is expensive.",
      "Gaming PC configuration advice, then custom assembly, fix both: a machine balanced for your real use, built cleanly, with verified temperatures and noise levels.",
    ],
    points: [
      "A budget to split wisely between CPU, graphics card, memory and storage",
      "Choosing PC components that are compatible with each other, with no bottleneck",
      "A streaming PC that has to encode and play without stutter",
      "An existing machine to upgrade rather than replace",
      "A quiet PC for an office or a shared room",
    ],
  },
  deliverables: {
    title: "Custom PC building: what you get",
    items: [
      {
        title: "Configuration advice",
        text: "Two priced proposals matched to your use and budget, with the reasoning behind each choice and the possible trade-offs.",
      },
      {
        title: "The parts list",
        text: "Exact references, verified compatibility (socket, power supply, case format, cooling), links to retailers. You order, or I order for you.",
      },
      {
        title: "Assembly and cabling",
        text: "Clean build, cable management for airflow, thermal paste applied correctly, every connection checked.",
      },
      {
        title: "Setup and tuning",
        text: "BIOS updated and configured (memory profile, fan curves), Windows 11 or Linux installed, drivers, basic and streaming software if needed.",
      },
      {
        title: "Tests and a report",
        text: "Stability tests, temperatures under load, noise level, measured performance. You receive a report with the results.",
      },
      {
        title: "Upgrading an existing PC",
        text: "Diagnosis of your machine, which components to replace first, assembly and cleaning. Often cheaper than a new PC.",
      },
    ],
  },
  process: {
    title: "How the service runs",
    steps: [
      {
        title: "Free scoping call",
        text: "30 minutes to talk about your use, the games or software you target, your budget and your constraints (noise, size, looks).",
      },
      {
        title: "Configuration proposal",
        text: "Two priced options within a few days, with explanations. You approve, or we adjust.",
      },
      {
        title: "Ordering components",
        text: "By you or by me, from reliable retailers. I check deliveries and the condition of the parts.",
      },
      {
        title: "Build and setup",
        text: "Assembly, cabling, BIOS, operating system and drivers. Usually one working day.",
      },
      {
        title: "Tests and handover",
        text: "Stability and temperature tests, report, then handover in person in Hauts-de-Seine or secure shipping.",
      },
      {
        title: "Support",
        text: "One month of assistance after handover for any settings or software question.",
      },
    ],
  },
  stack: {
    title: "Components and tools",
    intro: "I work with every brand and choose on the performance-to-price ratio of the moment:",
    items: [
      "AMD Ryzen / Intel Core CPUs",
      "NVIDIA / AMD graphics cards",
      "DDR5 memory",
      "NVMe SSDs",
      "Air / AIO cooling",
      "Windows 11",
      "Linux",
      "HWiNFO",
      "OCCT",
      "3DMark",
      "Cinebench",
    ],
  },
  cases: {
    title: "Two typical requests",
    intro: "Two frequent requests and how I handle them.",
    items: [
      {
        title: "Gaming and streaming on a single machine",
        context:
          "A streamer who plays and encodes on the same PC, with frame drops during streams and a fixed budget.",
        result:
          "A balanced configuration with a CPU that has enough cores for encoding, a graphics card sized for the target resolution, 32 GB of memory and quiet cooling. Hardware encoding configured in OBS, tests in real conditions.",
      },
      {
        title: "Upgrading a four-year-old PC",
        context:
          "A machine that became slow for recent games, with a limited budget and no wish to buy everything again.",
        result:
          "Diagnosis, replacement of the graphics card and SSD, added memory, cleaning and fresh thermal paste. Performance doubled in the target games for a fraction of the price of a new PC.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions about PC building",
    items: [
      {
        question: "How much does the building service cost?",
        answer:
          "Advice and assembly are billed as a fixed fee, independent from the price of components, which you pay directly to the retailer. The fee is given after scoping, depending on complexity (liquid cooling, compact case, dual PC).",
      },
      {
        question: "Do you supply the components?",
        answer:
          "Both are possible. The simplest is for you to order with the list I provide: invoices and warranties are in your name.",
      },
      {
        question: "What about the warranty?",
        answer:
          "Each component keeps its manufacturer warranty. I guarantee the build: if a problem comes from the assembly, I fix it at no cost.",
      },
      {
        question: "Do you travel?",
        answer:
          "Yes, in Hauts-de-Seine and Paris for handover or an on-site upgrade. Elsewhere in the Paris area, depending on distance. Advice is done remotely anywhere.",
      },
      {
        question: "Do you also build PCs for creative work or office use?",
        answer:
          "Yes. Video editing, 3D, development, quiet office workstation: the method is the same, only the components change.",
      },
    ],
  },
  cta: {
    title: "Shall we talk about your next machine?",
    text: "Thirty minutes to define your use and budget and leave with a first idea of configuration.",
  },
  jsonLd: {
    name: "PC advice and building",
    serviceType: "PC configuration advice and custom assembly",
    description:
      "Configuration advice, component selection, assembly, setup and testing of custom gaming, streaming and creative PCs in Hauts-de-Seine and the Paris area.",
  },
};
