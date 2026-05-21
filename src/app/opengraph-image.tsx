import { ImageResponse } from "next/og";
import { SITE } from "@/constants/site";

export const runtime = "edge";
export const alt = SITE.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default site-wide OG image. Matches the new hero copy — "Your trusted
 * partner in technical services and contracting." — so social-share
 * previews carry the brand-anchored headline rather than the older
 * casual line. Per-route pages can still override with their own
 * opengraph-image.tsx.
 */
export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0807",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#efe8d5",
          fontFamily: "Georgia, serif",
          padding: 64,
          textAlign: "center",
          backgroundImage:
            "radial-gradient(ellipse at 50% 50%, rgba(184,146,79,0.12), transparent 60%)",
        }}
      >
        {/* Dashed atelier frame */}
        <div
          style={{
            position: "absolute",
            top: 32,
            left: 32,
            right: 32,
            bottom: 32,
            border: "1px dashed rgba(239,232,213,0.14)",
          }}
        />

        {/* Wordmark — small caps */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 16,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#b8924f",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 500,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: 99, background: "#b8924f" }} />
          Sixty · Newton · Technical Services
          <span style={{ width: 6, height: 6, borderRadius: 99, background: "#b8924f" }} />
        </div>

        {/* Headline — three lines, mirrors the hero */}
        <div
          style={{
            fontSize: 78,
            fontWeight: 300,
            lineHeight: 1.02,
            marginTop: 44,
            letterSpacing: "-0.02em",
            color: "#efe8d5",
          }}
        >
          Your trusted partner
        </div>
        <div
          style={{
            fontSize: 78,
            fontWeight: 300,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            color: "#efe8d5",
          }}
        >
          in technical services
        </div>
        <div
          style={{
            fontSize: 78,
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            color: "#b8924f",
          }}
        >
          and contracting.
        </div>

        {/* Sub line — brand-certified positioning */}
        <div
          style={{
            marginTop: 44,
            fontSize: 22,
            color: "#8f8674",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 500,
          }}
        >
          Brand-certified applicators · UAE
        </div>
      </div>
    ),
    { ...size },
  );
}
