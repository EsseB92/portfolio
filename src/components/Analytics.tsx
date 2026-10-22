"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type GoatCounter = { count: (vars: { path: string }) => void };

/**
 * Mesure d'audience sans cookie (https://erdus.goatcounter.com).
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
      src="https://gc.zgo.at/count.js"
      strategy="afterInteractive"
    />
  );
}
