import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = "Chhea Chhouy — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #080d17 0%, #152b65 52%, #332262 100%)",
          color: "#f4f8ff",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "900px" }}>
          <div style={{ color: "#a9c1ff", display: "flex", fontSize: 28, letterSpacing: 6, marginBottom: 26 }}>
            PORTFOLIO / CAMBODIA
          </div>
          <div style={{ display: "flex", fontSize: 78, fontWeight: 800, letterSpacing: -4, lineHeight: 1.05 }}>
            Chhea Chhouy
          </div>
          <div style={{ color: "#b9c8e8", display: "flex", fontSize: 38, marginTop: 24 }}>
            Full-Stack Developer
          </div>
          <div style={{ borderTop: "2px solid #7898ff", display: "flex", marginTop: 46, paddingTop: 24 }}>
            {SITE_NAME}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
