import { execFileSync } from "node:child_process";

/**
 * Date réelle de dernière modification d'un ensemble de fichiers, lue dans
 * l'historique git au moment du build. Repli sur la date du build si git
 * n'est pas disponible ou si l'historique n'est pas cloné (fetch-depth: 0
 * dans le workflow GitHub Actions).
 */
export function lastModified(files: readonly string[]): Date {
  try {
    const out = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", ...files],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    return out ? new Date(out) : new Date();
  } catch {
    return new Date();
  }
}
