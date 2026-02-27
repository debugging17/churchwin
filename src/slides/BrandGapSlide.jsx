import { useRef } from "react";
import { useSlideAnimation } from "../hooks/useSlideAnimation";

export default function BrandGapSlide() {
  const slideRef = useRef(null);
  useSlideAnimation(slideRef, 5);

  return (
    <section className="slide slide-light" id="slide-3" ref={slideRef}>
      {/* Container forcing exact vertical top & bottom alignment between columns */}
      <div className="split-stretch-container" style={{
        padding: "2rem 1rem", minHeight: "85vh", maxHeight: "1200px",
        transform: "translateY(-5vh)"
      }}>

        <div className="narrative-pane" style={{ width: "45%", display: "flex", flexDirection: "column" }}>
          <span
            className="label"
            style={{ marginBottom: "0.25rem", display: "inline-block" }}
          >
            The Brand Gap
          </span>
          <h1 className="headline-xl" style={{ marginTop: 0, marginBottom: "1.25rem" }}>
            Great Product, <br />
            <span className="highlight">Outdated Presence</span>
          </h1>
          <div
            className="body-xl"
            style={{
              fontSize: "clamp(0.9rem, 1.1vw, 1.15rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", /* Pushes the elements to fill the total height exactly */
              flex: 1, /* Allow to stretch */
              gap: "1.2rem",
              lineHeight: "1.45"
            }}
          >
            <p style={{ margin: 0, fontSize: "1.05em", fontWeight: 500 }}>
              Our digital storefront fails to reflect our premium sourcing.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <strong style={{ color: "var(--accent)", fontSize: "1.05em" }}>1. Product Specificity:</strong>
              <p style={{ margin: 0 }}>
                We pitch Baobab and Moringa generically instead of as a
                &quot;bio-retinol alternative&quot; and a &quot;protein-dense
                superfood&quot;.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <strong style={{ color: "var(--accent)", fontSize: "1.05em" }}>2. Missing the Target:</strong>
              <p style={{ margin: 0 }}>
                We miss Tier-1 &quot;Anchor Clients&quot;—R&D Directors, Procurement
                Managers, and Corporate Spa Directors.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <strong style={{ color: "var(--accent)", fontSize: "1.05em" }}>3. The Expectation Gap:</strong>
              <p style={{ margin: 0 }}>
                These high-value buyers expect a premium, data-rich digital experience
                that reflects our ethical, on-demand freshness.
              </p>
            </div>
          </div>
        </div>

        <div className="visual-pane" style={{ width: "55%", display: "flex", flexDirection: "column" }}>
          {/* Invisible spacer mimicking the exact height of the label on the left, so the visual cards align perfectly with the H1 natively. */}
          <div style={{ visibility: "hidden", marginBottom: "0.25rem", pointerEvents: "none" }}>
            <span className="label" style={{ display: "inline-block" }}>The Brand Gap</span>
          </div>

          {/* Split Screen Comparison */}
          <div
            className="split-comparison"
            style={{
              display: "flex",
              flex: 1, /* Stretch to the bottom of the flex container natively */
              gap: "2rem",
              width: "100%",
              flexWrap: "nowrap",
              alignItems: "stretch"
            }}
          >
            {/* Left: Current (Boring) */}
            <div
              style={{
                flex: 1.1, /* Balanced catalog card */
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                position: "relative",
                opacity: 0.98,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 10px 40px rgba(0,0,0,0.06)", /* Add presence */
                minWidth: "280px",
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
              <div style={{ position: "relative", flex: 1, minHeight: 0, background: "#fff", borderRadius: "0 0 12px 12px" }}>
                <img
                  src="/assets/images/productcatalogue.png"
                  alt="Current Static Catalog Dashboard"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "contain",
                    objectPosition: "top center",
                    transform: "scale(1.05)",
                    transformOrigin: "center top", // Zooms image to cleanly crop out the natively baked-in PNG shadow borders
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
                gap: "2.5rem",
                minWidth: "250px",
              }}
            >
              {/* Immersive Sourcing Hero Video (Separated Layer) */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  background: "#000",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "2px solid var(--accent)",
                  boxShadow: "none",
                  position: "relative",
                }}
              >
                <video
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
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
                  flex: 1
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

      </div> {/* End Stretch Container */}
    </section>
  );
}
