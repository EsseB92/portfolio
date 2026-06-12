import { ImageResponse } from "next/og";
import { identity } from "@/lib/data";

export const alt = `${identity.name} — ${identity.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0f 0%, #1e1b4b 100%)",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 32, color: "#a5b4fc", marginBottom: 16 }}>
          {`${identity.brand}.`}
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
          {identity.name}
        </div>
        <div style={{ fontSize: 40, color: "#a1a1aa", marginTop: 16 }}>
          {identity.jobTitle}
        </div>
        <div style={{ fontSize: 26, color: "#a5b4fc", marginTop: 48 }}>
          Next.js · React · TypeScript · WordPress · SEO · Sécurité
        </div>
      </div>
    ),
    size,
  );
}
