import { ImageResponse } from "next/og";
import { SITE } from "@/constants/site";

export const runtime = "edge";
export const alt = SITE.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default site-wide OG image. Per-route pages can override with their own opengraph-image.tsx.
 */
export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1a1410",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#f3ead2",
          fontFamily: "Georgia, serif",
          padding: 80,
          textAlign: "center",
          backgroundImage:
            "radial-gradient(ellipse at 50% 55%, rgba(201,162,99,0.10), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 18,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#a89a82",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: 99, background: "#c9a263" }} />
          mep · fit-out · pools & specialist systems
          <span style={{ width: 6, height: 6, borderRadius: 99, background: "#c9a263" }} />
        </div>
        <div
          style={{
            fontSize: 132,
            fontWeight: 300,
            lineHeight: 1,
            marginTop: 40,
            letterSpacing: "-0.01em",
          }}
        >
          Precision Engineered,
        </div>
        <div
          style={{
            fontSize: 132,
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1,
            marginTop: 8,
            letterSpacing: "-0.01em",
          }}
        >
          at Scale.
        </div>
        <div
          style={{
            marginTop: 56,
            fontSize: 20,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#c9a263",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          Sixty · Newton
        </div>
      </div>
    ),
    { ...size },
  );
}
