import type { ServiceContent } from "@/types/content";

export const content: ServiceContent = {
  id: "conseil-montage-pc",
  seo: {
    title: "Montage PC sur mesure, conseil et assemblage",
    description:
      "Montage PC sur mesure dans les Hauts-de-Seine : conseil de configuration gaming ou streaming, choix des composants, assemblage et tests. Cadrage gratuit.",
    keyword: "montage PC sur mesure",
  },
  label: "Conseil et montage PC",
  tagline:
    "Une configuration choisie pour votre usage et votre budget, assemblée, installée et testée.",
  hero: {
    h1: "Montage PC sur mesure : conseil, choix des composants et assemblage",
    intro:
      "Montage PC sur mesure dans les Hauts-de-Seine et en région parisienne : je vous conseille sur la configuration, je sélectionne les composants selon votre budget et votre usage (jeu, streaming, création, bureautique), puis j'assemble, j'installe et je teste la machine avant de vous la remettre.",
    badges: ["AMD", "Intel", "NVIDIA", "Windows 11", "Linux"],
  },
  problem: {
    title: "Le problème que je règle",
    paragraphs: [
      "Les PC préassemblés facturent la marque, imposent des composants déséquilibrés et se révèlent bruyants ou limités dès qu'on veut jouer et streamer en même temps. Monter soi-même demande du temps, et une erreur de compatibilité coûte cher.",
      "Le conseil configuration PC gaming, puis l'assemblage PC personnalisé, règlent ces deux points : une machine équilibrée pour votre usage réel, montée proprement, avec des températures et un niveau sonore vérifiés.",
    ],
    points: [
      "Un budget à répartir intelligemment entre processeur, carte graphique, mémoire et stockage",
      "Le choix des composants PC compatibles entre eux, sans goulot d'étranglement",
      "Un PC de streaming qui doit encoder et jouer sans saccade",
      "Une machine existante à mettre à niveau plutôt qu'à remplacer",
      "Un PC silencieux pour un bureau ou une pièce partagée",
    ],
  },
  deliverables: {
    title: "Montage PC sur mesure : ce que vous recevez",
    items: [
      {
        title: "Un conseil de configuration",
        text: "Deux propositions chiffrées adaptées à votre usage et votre budget, avec l'explication de chaque choix et les compromis possibles.",
      },
      {
        title: "La liste de composants",
        text: "Références précises, compatibilité vérifiée (socket, alimentation, format du boîtier, refroidissement), liens vers les revendeurs. Vous commandez, ou je commande pour vous.",
      },
      {
        title: "L'assemblage et le câblage",
        text: "Montage propre, gestion des câbles pour la circulation d'air, pâte thermique appliquée correctement, vérification de chaque connexion.",
      },
      {
        title: "L'installation et l'optimisation",
        text: "BIOS à jour et réglé (profil mémoire, courbes de ventilation), Windows 11 ou Linux installé, pilotes, logiciels de base et de streaming si besoin.",
      },
      {
        title: "Les tests et un rapport",
        text: "Tests de stabilité, températures en charge, niveau sonore, performances mesurées. Vous recevez un rapport avec les résultats.",
      },
      {
        title: "La mise à niveau d'un PC existant",
        text: "Diagnostic de votre machine, composants à changer en priorité, montage et nettoyage. Souvent moins cher qu'un PC neuf.",
      },
    ],
  },
  process: {
    title: "Déroulé de la prestation",
    steps: [
      {
        title: "Cadrage gratuit",
        text: "30 minutes pour parler de votre usage, des jeux ou logiciels visés, de votre budget et de vos contraintes (bruit, taille, esthétique).",
      },
      {
        title: "Proposition de configuration",
        text: "Deux options chiffrées sous quelques jours, avec les explications. Vous validez, ou on ajuste.",
      },
      {
        title: "Commande des composants",
        text: "Par vous ou par moi, chez des revendeurs fiables. Je vérifie les livraisons et l'état des pièces.",
      },
      {
        title: "Montage et installation",
        text: "Assemblage, câblage, BIOS, système d'exploitation et pilotes. Une journée de travail en général.",
      },
      {
        title: "Tests et remise",
        text: "Tests de stabilité et de température, rapport, puis remise en main propre dans les Hauts-de-Seine ou envoi sécurisé.",
      },
      {
        title: "Support",
        text: "Un mois d'assistance après la remise pour toute question de réglage ou de logiciel.",
      },
    ],
  },
  stack: {
    title: "Composants et outils",
    intro: "Je travaille avec toutes les marques et je choisis selon le rapport performance / prix du moment :",
    items: [
      "Processeurs AMD Ryzen / Intel Core",
      "Cartes graphiques NVIDIA / AMD",
      "Mémoire DDR5",
      "SSD NVMe",
      "Refroidissement air / AIO",
      "Windows 11",
      "Linux",
      "HWiNFO",
      "OCCT",
      "3DMark",
      "Cinebench",
    ],
  },
  cases: {
    title: "Deux cas types",
    intro: "Deux demandes fréquentes et la façon dont je les traite.",
    items: [
      {
        title: "PC de jeu et de streaming sur une seule machine",
        context:
          "Un streamer qui joue et encode sur le même PC, avec des chutes d'images pendant les lives et un budget fixé.",
        result:
          "Configuration équilibrée avec un processeur à nombre de cœurs suffisant pour l'encodage, une carte graphique dimensionnée pour la définition visée, 32 Go de mémoire et un refroidissement silencieux. Encodage matériel configuré dans OBS, tests en conditions réelles.",
      },
      {
        title: "Mise à niveau d'un PC de quatre ans",
        context:
          "Une machine devenue lente pour les jeux récents, avec un budget limité et l'envie de ne pas tout racheter.",
        result:
          "Diagnostic, remplacement de la carte graphique et du SSD, ajout de mémoire, nettoyage et nouvelle pâte thermique. Performances doublées dans les jeux visés pour une fraction du prix d'un PC neuf.",
      },
    ],
  },
  faq: {
    title: "Questions fréquentes sur le montage PC",
    items: [
      {
        question: "Combien coûte la prestation de montage ?",
        answer:
          "Le conseil et l'assemblage sont facturés au forfait, indépendamment du prix des composants, que vous payez directement au revendeur. Le montant est indiqué après le cadrage, selon la complexité (refroidissement liquide, boîtier compact, double PC).",
      },
      {
        question: "Fournissez-vous les composants ?",
        answer:
          "Les deux sont possibles. Le plus simple est que vous commandiez vous-même avec la liste que je fournis : les factures et les garanties sont à votre nom.",
      },
      {
        question: "Quelle garantie ?",
        answer:
          "Chaque composant garde la garantie de son fabricant. Je garantis le montage : si un problème vient de l'assemblage, j'interviens sans frais.",
      },
      {
        question: "Vous déplacez-vous ?",
        answer:
          "Oui, dans les Hauts-de-Seine et à Paris pour la remise ou une mise à niveau sur place. Ailleurs en région parisienne, selon la distance. Le conseil se fait à distance partout en France.",
      },
      {
        question: "Montez-vous aussi des PC pour la création ou la bureautique ?",
        answer:
          "Oui. Montage vidéo, 3D, développement, station silencieuse de bureau : la méthode est la même, seuls les composants changent.",
      },
    ],
  },
  cta: {
    title: "On parle de votre future machine ?",
    text: "Trente minutes pour définir votre usage et votre budget, et repartir avec une première idée de configuration.",
  },
  jsonLd: {
    name: "Conseil et montage PC",
    serviceType: "Conseil en configuration et assemblage de PC sur mesure",
    description:
      "Conseil en configuration, sélection de composants, assemblage, installation et tests de PC gaming, streaming et création sur mesure, dans les Hauts-de-Seine et en région parisienne.",
  },
};
