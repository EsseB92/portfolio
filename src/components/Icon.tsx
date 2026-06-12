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
};

export default function Icon({ name }: { name: string }) {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
