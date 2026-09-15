import type { OgPalette } from "@/lib/og";

type Props = {
  palette: OgPalette;
  eyebrow: string;
  title: string;
  subtitle: string;
  footer: string;
};

/**
 * Visuel Open Graph partagé (home + une variante par piste).
 * Rendu par Satori (ImageResponse) : flexbox et styles inline uniquement.
 */
export default function OgCard({ palette, eyebrow, title, subtitle, footer }: Props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: `linear-gradient(135deg, ${palette.background} 0%, ${palette.soft} 100%)`,
        color: palette.foreground,
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 10,
          background: `linear-gradient(90deg, ${palette.accent}, ${palette.accent2})`,
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
        <div style={{ fontSize: 32, color: palette.accent, fontWeight: 700 }}>Erdus.</div>
        <div
          style={{
            fontSize: 22,
            color: palette.accent,
            letterSpacing: 6,
            textTransform: "uppercase",
            border: `2px solid ${palette.accent}`,
            padding: "6px 16px",
            borderRadius: 999,
          }}
        >
          {eyebrow}
        </div>
      </div>
      <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 1000 }}>
        {title}
      </div>
      <div style={{ fontSize: 34, color: palette.muted, marginTop: 20, maxWidth: 1000 }}>
        {subtitle}
      </div>
      <div style={{ fontSize: 24, color: palette.accent, marginTop: 48 }}>{footer}</div>
    </div>
  );
}
