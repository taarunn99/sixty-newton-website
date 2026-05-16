import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Placeholder favicon — gold square with '60' in serif italic.
 * Swap for final brand mark before launch (data-placeholder grep target).
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1a1410",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #c9a263",
          color: "#c9a263",
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          fontSize: 32,
          fontWeight: 500,
        }}
      >
        60
      </div>
    ),
    { ...size },
  );
}
