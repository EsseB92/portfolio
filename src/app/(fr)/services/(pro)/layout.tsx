/** Piste « pro » : bascule les tokens de globals.css via data-track. */
export default function ProLayout({ children }: { children: React.ReactNode }) {
  return <div data-track="pro">{children}</div>;
}
