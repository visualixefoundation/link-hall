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
          backgroundColor: "#F4F5F7",
          color: "#111827",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "999px",
              backgroundColor: "#0D9488",
            }}
          />
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#0D9488",
            }}
          >
            Curated directory
          </div>
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: "20px",
            letterSpacing: "-0.02em",
          }}
        >
          Link Hall
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#6B7280",
            maxWidth: 820,
            lineHeight: 1.4,
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
