import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mandalyne — Jewelry inspired by symmetry";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#120f09",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0px",
        }}
      >
        {/* Concentric ring ornament */}
        <div
          style={{
            width: 108,
            height: 108,
            borderRadius: "50%",
            border: "2px solid #C9A227",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              border: "2px solid #8B6F1A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: "#C9A227",
              }}
            />
          </div>
        </div>

        <div
          style={{
            fontSize: 88,
            color: "#f3ead6",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            lineHeight: "1",
            marginBottom: 22,
          }}
        >
          Mandalyne
        </div>

        <div
          style={{
            width: 60,
            height: 1,
            background: "#C9A227",
            marginBottom: 22,
            opacity: 0.5,
          }}
        />

        <div
          style={{
            fontSize: 22,
            color: "#C9A227",
            fontFamily: "Georgia, serif",
            letterSpacing: "6px",
            textTransform: "uppercase",
          }}
        >
          Jewelry · Inspired by Symmetry
        </div>
      </div>
    ),
    { ...size }
  );
}
