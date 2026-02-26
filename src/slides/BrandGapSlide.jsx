import { useRef } from "react";
import { useSlideAnimation } from "../hooks/useSlideAnimation";

export default function BrandGapSlide() {
  const slideRef = useRef(null);
  useSlideAnimation(slideRef, 5);

  return (
    <section className="slide slide-light" id="slide-3" ref={slideRef}>
      <div className="narrative-pane" style={{ paddingTop: "2rem", width: "40%", paddingRight: "3rem" }}>
        <span
          className="label"
          style={{ marginBottom: "0.25rem", display: "inline-block" }}
        >
          The Brand Gap
        </span>
        <h1 className="headline-xl" style={{ marginTop: 0, marginBottom: "1rem" }}>
          Great Product, <br />
          <span className="highlight">Outdated Presence</span>
        </h1>
        <div
          className="body-xl"
          style={{
            fontSize: "clamp(0.85rem, 1vw, 1.05rem)",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            lineHeight: "1.4"
          }}
        >
          <p style={{ margin: 0 }}>
            Our digital storefront fails to reflect our premium sourcing.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <strong style={{ color: "var(--accent)" }}>1. Product Specificity:</strong>
            <p style={{ margin: 0 }}>
              We pitch Baobab and Moringa generically instead of as a
              &quot;bio-retinol alternative&quot; and a &quot;protein-dense
              superfood&quot;.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <strong style={{ color: "var(--accent)" }}>2. Missing the Target:</strong>
            <p style={{ margin: 0 }}>
              We miss Tier-1 &quot;Anchor Clients&quot;—R&D Directors, Procurement
              Managers, and Corporate Spa Directors.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <strong style={{ color: "var(--accent)" }}>3. The Expectation Gap:</strong>
            <p style={{ margin: 0 }}>
              These high-value buyers expect a premium, data-rich digital experience
              that reflects our ethical, on-demand freshness.
            </p>
          </div>
        </div>
      </div>

      <div className="visual-pane" style={{ width: "62%" }}>
        {/* Split Screen Comparison */}
        <div
          className="split-comparison"
          style={{
            display: "flex",
            gap: "2rem",
            width: "100%",
            height: "100%",
            maxHeight: "750px", /* Constrain vertical height so it doesn't cut off */
            flexWrap: "nowrap",
            maxWidth: "1100px", /* Keep it within the screen bounds so the right edge isn't cut off */
            padding: "1rem 2rem 1rem 0",
            alignItems: "stretch" /* Make columns equal height */
          }}
        >
          {/* Left: Current (Boring) */}
          <div
            style={{
              flex: 1.2, /* Larger catalog card */
              background: "#e0e7ff",
              border: "1px dashed #999",
              borderRadius: "12px",
              position: "relative",
              opacity: 0.95,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              minWidth: "clamp(250px, 35vw, 420px)",
            }}
          >
            {/* MacOS-style header for the screenshot */}
            <div
              style={{
                background: "#f3f4f6",
                padding: "8px 12px",
                borderBottom: "1px solid #e5e7eb",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff5f56" }} />
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ffbd2e" }} />
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#27c93f" }} />
              <div style={{ fontSize: "0.6rem", color: "#9ca3af", marginLeft: "auto", fontWeight: 600 }}>churchwintrading.com/products</div>
            </div>
            <div style={{ position: "relative", flex: 1, minHeight: 0 }}>
              <img
                src="/assets/images/productcatalogue.png"
                alt="Current Static Catalog Dashboard"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
              <div
                style={{
                  position: "absolute", top: "14px", right: "14px",
                  background: "rgba(0,0,0,0.75)", color: "#fff", padding: "6px 10px",
                  borderRadius: "6px", fontSize: "0.7rem", fontWeight: 800,
                  backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.15)",
                  letterSpacing: "0.05em",
                  zIndex: 10,
                }}
              >
                STATIC CATALOGUE
              </div>
            </div>
          </div>

          {/* Right: Future (Dynamic Prototype - Separated) */}
          <div
            style={{
              flex: 1,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              minWidth: "clamp(200px, 25vw, 340px)",
            }}
          >
            {/* Immersive Sourcing Hero Video (Separated Layer) */}
            <div
              style={{
                width: "100%",
                flex: 1, /* Lets the video container expand to fill vertical space */
                minHeight: "240px",
                background: "#000",
                borderRadius: "12px",
                overflow: "hidden",
                border: "2px solid var(--accent)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                position: "relative",
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
              >
                <source src="/assets/videos/vid-4.mp4" type="video/mp4" />
              </video>
              <div
                style={{
                  position: "absolute", bottom: "10px", left: "10px",
                  background: "rgba(0,0,0,0.6)", color: "#fff", padding: "4px 8px",
                  borderRadius: "4px", fontSize: "0.65rem", fontWeight: 700,
                  backdropFilter: "blur(4px)"
                }}
              >
                ▶ ETHICAL SOURCING
              </div>
            </div>

            {/* Premium Shea Butter Image Blended (Floating 3D Effect) */}
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0 /* Prevents product image from squashing */
              }}
            >
              <img
                src="/assets/images/Churchwin_B09ZF5HS5W-Shea-Butter_Listing-Images_Image-5-Photoroom.webp"
                alt="Product 3D Mockup"
                loading="lazy"
                style={{
                  width: "100%",
                  maxWidth: "240px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.2))",
                  mixBlendMode: "multiply"
                }}
              />
              <div style={{
                textAlign: "center",
                color: "#111",
                fontSize: "1.3rem",
                fontWeight: 900,
                marginTop: "0.5rem",
                letterSpacing: "-0.02em"
              }}>
                Premium Bulk Shea Butter
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
