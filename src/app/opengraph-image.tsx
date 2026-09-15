import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Link Hall — a directory of good sites";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          backgroundColor: "#0F1115",
          color: "#E7E5DE",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "999px",
              backgroundColor: "#E8A33D",
            }}
          />
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#9B9A93",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Curated directory
          </div>
        </div>
        <div
          style={{
            fontSize: 88,
            fontStyle: "italic",
            lineHeight: 1.05,
            marginBottom: "24px",
          }}
        >
          Link Hall
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#9B9A93",
            maxWidth: 780,
            lineHeight: 1.35,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          A hand-picked list of good websites, sorted by category — with search
          and shareable filters.
        </div>
      </div>
    ),
    { ...size },
  );
}
