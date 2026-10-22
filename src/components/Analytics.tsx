"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type GoatCounter = { count: (vars: { path: string }) => void };

/**
 * Mesure d'audience sans cookie (https://erdus.goatcounter.com).
 * Version figée de count.js (v4) vérifiée par SRI : changer de version = recalculer le hash.
 * count.js compte le premier chargement ; les navigations client de Next
 * (sans rechargement) sont comptées ici à chaque changement de chemin.
 */
export default function Analytics() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const gc = (window as { goatcounter?: GoatCounter }).goatcounter;
    gc?.count({ path: pathname });
  }, [pathname]);

  return (
    <Script
      data-goatcounter="https://erdus.goatcounter.com/count"
      src="https://gc.zgo.at/count.v4.js"
      integrity="sha384-nRw6qfbWyJha9LhsOtSb2YJDyZdKvvCFh0fJYlkquSFjUxp9FVNugbfy8q1jdxI+"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
