import type { Metadata } from "next";
import ThanksPage from "@/components/ThanksPage";
import { getUi } from "@/content";
import { noIndexMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return noIndexMetadata(getUi("fr").thanks.title);
}

export default function Page() {
  return <ThanksPage locale="fr" />;
}
