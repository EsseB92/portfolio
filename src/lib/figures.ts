import { getUi } from "@/content";
import { identity, yearsOfExperience } from "@/lib/data";
import type { Locale } from "@/lib/i18n";
import { serviceIds } from "@/lib/services";
import type { KeyFigure } from "@/types/content";

/** Chiffres-clés dérivés des données du site (aucune valeur saisie à la main). */
export function keyFigures(locale: Locale): readonly KeyFigure[] {
  const ui = getUi(locale);
  return [
    { value: yearsOfExperience(), suffix: "+", label: ui.figures.years },
    { value: identity.responseHours, suffix: " h", label: ui.figures.response },
    { value: serviceIds.length, label: ui.figures.offers },
  ];
}
