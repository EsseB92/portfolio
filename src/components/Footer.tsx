import { identity, links } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {identity.name} — {identity.brand}.
          Développeur web freelance, {identity.locality}.
        </p>
        <ul className="flex items-center gap-5">
          <li>
            <a
              href={links.github}
              rel="noopener noreferrer"
              target="_blank"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={links.linkedin}
              rel="noopener noreferrer"
              target="_blank"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={links.malt}
              rel="noopener noreferrer"
              target="_blank"
              className="transition-colors hover:text-foreground"
            >
              Malt
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
