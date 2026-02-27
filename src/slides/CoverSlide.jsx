import { useRef } from "react";
import { useSlideAnimation } from "../hooks/useSlideAnimation";

export default function CoverSlide() {
  const slideRef = useRef(null);
  useSlideAnimation(slideRef, 0);

  return (
    <section
      className="slide"
      id="slide-1"
      ref={slideRef}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "#011533", // Deep dark blue to make video pop
      }}
    >
      {/* Background Video (Phase 1: Hook) */}
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        preload="metadata"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.85,
          zIndex: 1,
          pointerEvents: "none",
          filter: "grayscale(15%)",
        }}
      >
        <source src="/assets/videos/vid-6.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay for Text Readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          background:
            "linear-gradient(to bottom, rgba(1,39,135,0.1) 0%, rgba(1,39,135,0.4) 100%)",
        }}
      />

      {/* Main Content Pane */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          padding: "2rem 10vw",
        }}
      >
        {/* Brand Logo - In Normal Flow to Prevent Overlap */}
        <div
          style={{
            marginTop: "3vh",
            marginBottom: "clamp(1.5rem, 3vh, 2.5rem)",
            width: "100%",
            boxSizing: "border-box",
            display: "block",
            textAlign: "center",
          }}
        >
          <img
            src="/assets/images/churchwin_logo_new.png"
            style={{
              width: "100%",
              maxWidth: "260px",
              display: "block",
              margin: "0 auto",
              height: "auto",
              objectFit: "contain",
              opacity: 0.95,
              borderRadius: "1rem",
            }}
            alt="Churchwin Trading Co."
          />
        </div>

        <h1
          className="headline-xl"
          style={{ marginBottom: "1.2rem", lineHeight: 1.2 }}
        >
          Revitalizing Churchwin Trading:
          <br />
          <span
            style={{
              color: "var(--accent)",
              fontWeight: 300,
              fontSize: "0.8em",
            }}
          >
            Digital Transformation &amp; Web Presence Amplification
          </span>
        </h1>

        <div
          style={{
            height: "2px",
            width: "100px",
            background: "var(--accent)",
            margin: "0 auto 1.5rem auto",
          }}
        />

        <p className="body-xl" style={{ color: "rgba(255,255,255,0.9)" }}>
          A Strategic Proposal to Translate "Hidden Gem" Quality
          <br /> into Market-Leading B2B Revenue.
        </p>

        {/* Engineering/Architect Angle Badge */}
        <div
          style={{
            marginTop: "3.5rem",
            background: "rgba(255,255,255,0.15)",
            display: "inline-block",
            padding: "1.2rem 2.5rem",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            style={{
              fontSize: "0.85rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "0.4rem",
              fontWeight: 800,
            }}
          >
            B2B Growth &amp; Digital Strategy
          </div>
          <div style={{ fontSize: "1.2rem", color: "#fff", fontWeight: 700 }}>
            Technical Web Architect
          </div>
          <div
            style={{
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.9)",
              marginTop: "0.4rem",
              letterSpacing: "0.5px",
            }}
          >
            Engineering Rigor • Agile Project Management • ROI-Driven Web Dev
          </div>
        </div>
      </div>
    </section>
  );
}
