/** "gaming" track: switches the globals.css tokens through data-track. */
export default function GamingLayout({ children }: { children: React.ReactNode }) {
  return <div data-track="gaming">{children}</div>;
}
