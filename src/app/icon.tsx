import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Favicon — brand mark in serif italic on the deep ground.
 *
 * Mirrors the gold "Sixty Newton" wordmark style in a tight square so
 * favicon tabs read as "S·N" instantly at 16/32px.
 *
 * Gold and bg match the live design tokens:
 *   bg:      #0a0807   (--bg)
 *   gold:    #b8924f   (--gold)
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0807",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#b8924f",
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          fontSize: 32,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          border: "2px solid #b8924f",
          boxSizing: "border-box",
          borderRadius: 8,
        }}
      >
        SN
      </div>
    ),
    { ...size },
  );
}
