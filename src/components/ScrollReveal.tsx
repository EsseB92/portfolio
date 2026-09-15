"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Active les animations d'apparition au scroll (IntersectionObserver natif).
 * Le marqueur data-js garantit que sans JavaScript, le contenu reste visible
 * (les styles .reveal ne s'appliquent que sous [data-js]).
 * Les classes sont retirées une fois l'entrée jouée pour rendre la main aux
 * transitions de survol (.card-lift) sans hériter du délai en cascade.
 * Relancé à chaque changement de page (navigation client).
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    document.documentElement.setAttribute("data-js", "true");

    const cleanup = (el: Element) => {
      el.classList.remove("reveal", "is-visible");
      (el as HTMLElement).style.removeProperty("--stagger");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target;
          observer.unobserve(el);
          el.classList.add("is-visible");
          const timer = setTimeout(() => cleanup(el), 1500);
          const onEnd = (e: Event) => {
            if ((e as TransitionEvent).propertyName !== "transform") return;
            clearTimeout(timer);
            el.removeEventListener("transitionend", onEnd);
            cleanup(el);
          };
          el.addEventListener("transitionend", onEnd);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
