/**
 * Vidéos de présentation des projets (voix off en français, sous-titres WebVTT).
 *
 * Les fichiers ne sont pas dans le dépôt : ils sont déposés à la main dans
 * public_html/videos/ (scp), comme game/, note/ et cadence/, et survivent aux
 * déploiements FTPS. En local, les copier dans public/videos/ (ignoré par git).
 * Noms versionnés : ne jamais écraser un fichier existant (le CDN Hostinger
 * peut continuer à servir l'ancien) — nouvelle version = nouveau suffixe.
 */

export type ProjectVideo = {
  /** Nom de base des fichiers : <file>.mp4, <file>.jpg (couverture), <file>.fr.vtt */
  file: string;
  /** Durée en secondes (arrondie) */
  seconds: number;
  /** Date de mise en ligne (AAAA-MM-JJ) */
  uploadDate: string;
};

export const videos = {
  games: { file: "erdus-games-v1", seconds: 69, uploadDate: "2026-10-23" },
  cadence: { file: "cadence-v1", seconds: 51, uploadDate: "2026-10-23" },
  notes: { file: "carnet-v1", seconds: 56, uploadDate: "2026-10-23" },
  portfolio: { file: "erdus-v1", seconds: 67, uploadDate: "2026-10-23" },
  utlb: { file: "observatoire-paysage-utlb-v1", seconds: 61, uploadDate: "2026-10-23" },
  inspector: { file: "erdus-inspector-v1", seconds: 66, uploadDate: "2026-10-24" },
  epure: { file: "epure-v1", seconds: 55, uploadDate: "2026-10-24" },
} as const satisfies Record<string, ProjectVideo>;

/** Chemins publics des fichiers d'une vidéo. */
export function videoFiles(video: ProjectVideo) {
  const base = `/videos/${video.file}`;
  return { mp4: `${base}.mp4`, poster: `${base}.jpg`, captions: `${base}.fr.vtt` };
}

/** Durée ISO 8601 (PT1M9S) pour le JSON-LD. */
export function isoDuration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `PT${m ? `${m}M` : ""}${s ? `${s}S` : ""}`;
}

/** Durée lisible (1:09). */
export function clockDuration(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}
