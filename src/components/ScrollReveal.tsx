"use client";

import { useEffect } from "react";

/**
 * Active les animations d'apparition au scroll.
 * Le marqueur data-js garantit que sans JavaScript, le contenu reste visible
 * (les styles .reveal ne s'appliquent que sous [data-js]).
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    document.documentElement.setAttribute("data-js", "true");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
