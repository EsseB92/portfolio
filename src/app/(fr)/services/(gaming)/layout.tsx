/** Piste « gaming » : bascule les tokens de globals.css via data-track. */
export default function GamingLayout({ children }: { children: React.ReactNode }) {
  return <div data-track="gaming">{children}</div>;
}
