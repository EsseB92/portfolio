/** "pro" track: switches the globals.css tokens through data-track. */
export default function ProLayout({ children }: { children: React.ReactNode }) {
  return <div data-track="pro">{children}</div>;
}
