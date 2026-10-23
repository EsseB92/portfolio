"use client";

import { useRef } from "react";
import { clockDuration, videoFiles, type ProjectVideo as Video } from "@/lib/videos";

type Props = {
  title: string;
  video: Video;
  labels: {
    watch: string;
    watchOf: string;
    close: string;
    captions: string;
    language: string;
  };
};

/**
 * Vignette de vidéo de projet et lecteur dans une boîte de dialogue native.
 * Rien n'est téléchargé avant le clic (preload="none") : seule la couverture
 * est chargée, en différé. Échap, le bouton ou un clic hors du lecteur ferment
 * la boîte et mettent la vidéo en pause. Sous-titres français activés par défaut.
 */
export default function ProjectVideo({ title, video, labels }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const player = useRef<HTMLVideoElement>(null);
  const files = videoFiles(video);
  const titleId = `video-${video.file}`;

  const open = () => {
    dialog.current?.showModal();
    player.current?.play().catch(() => {
      /* lecture bloquée par le navigateur : les commandes restent disponibles */
    });
  };
  const close = () => dialog.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className="group relative mb-5 block w-full overflow-hidden rounded-[var(--radius-card)] border border-border focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- export statique, image déjà dimensionnée */}
        <img
          src={files.poster}
          alt=""
          width={1280}
          height={720}
          loading="lazy"
          decoding="async"
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <span aria-hidden="true" className="absolute inset-0 grid place-items-center bg-black/25 transition-colors group-hover:bg-black/10">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-contrast shadow-lg">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
            </svg>
          </span>
        </span>
        <span aria-hidden="true" className="badge absolute right-3 bottom-3 gap-1.5 border-transparent bg-black/70 text-white">
          <span className="hidden sm:inline">{labels.watch} ·</span>
          {clockDuration(video.seconds)}
        </span>
        <span className="sr-only">
          {labels.watchOf} {title}
          {labels.language} ({clockDuration(video.seconds)})
        </span>
      </button>

      <dialog
        ref={dialog}
        aria-labelledby={titleId}
        onClose={() => player.current?.pause()}
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
        className="m-auto w-[min(92vw,64rem)] max-w-none overflow-visible bg-transparent p-0 text-foreground backdrop:bg-black/80"
      >
        <div className="card overflow-hidden">
          <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3">
            <p id={titleId} className="font-semibold">
              {title}
              <span className="text-muted">{labels.language}</span>
            </p>
            <button
              type="button"
              onClick={close}
              className="grid h-9 w-9 place-items-center rounded-[var(--radius-control)] border border-border hover:border-accent"
            >
              <span className="sr-only">{labels.close}</span>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
          <video
            ref={player}
            controls
            preload="none"
            playsInline
            poster={files.poster}
            width={1920}
            height={1080}
            className="block aspect-video h-auto w-full bg-black"
          >
            <source src={files.mp4} type="video/mp4" />
            <track kind="captions" src={files.captions} srcLang="fr" label={labels.captions} default />
          </video>
        </div>
      </dialog>
    </>
  );
}
