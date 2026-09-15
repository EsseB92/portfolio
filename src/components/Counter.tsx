"use client";

import { useEffect, useRef } from "react";

type Props = {
  value: number;
  prefix?: string;
  suffix?: string;
  locale: string;
  /** Durée de l'animation en ms */
  duration?: number;
  className?: string;
};

/**
 * Compteur animé une seule fois à l'entrée dans le viewport.
 * La valeur finale est rendue côté serveur : sans JavaScript ou avec
 * prefers-reduced-motion, le chiffre est simplement affiché.
 */
export default function Counter({
  value,
  prefix = "",
  suffix = "",
  locale,
  duration = 900,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const format = (n: number) =>
      `${prefix}${Math.round(n).toLocaleString(locale)}${suffix}`;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = format(value * eased);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        el.textContent = format(0);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, prefix, suffix, locale, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString(locale)}
      {suffix}
    </span>
  );
}
