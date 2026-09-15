const paths: Record<string, React.ReactNode> = {
  code: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13 4l-2 16" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  zap: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />,
  shield: <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z" />,
  devices: (
    <>
      <rect x="2" y="4" width="14" height="10" rx="1" />
      <path d="M6 18h6M9 14v4" />
      <rect x="17" y="9" width="5" height="9" rx="1" />
    </>
  ),
  bot: (
    <>
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <path d="M12 4v4M8 13h.01M16 13h.01M9 17h6" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1M9 11h6M9 15h4" />
    </>
  ),
  gamepad: (
    <>
      <path d="M6 8h12a4 4 0 0 1 4 4v3a3 3 0 0 1-5.4 1.8L15 15H9l-1.6 1.8A3 3 0 0 1 2 15v-3a4 4 0 0 1 4-4z" />
      <path d="M7 12h3M8.5 10.5v3M15.5 11h.01M17.5 13h.01" />
    </>
  ),
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </>
  ),
  arrow: <path d="M5 12h14m0 0-6-6m6 6-6 6" />,
  check: <path d="m5 13 4 4L19 7" />,
};

type Props = {
  name: string;
  size?: number;
  className?: string;
};

export default function Icon({ name, size = 24, className }: Props) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
