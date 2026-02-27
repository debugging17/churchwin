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

        {/* Engineering/Architect Angle Badge (Full-Width Footer) */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            background: "linear-gradient(135deg, rgba(1,39,135,0.45) 0%, rgba(1,39,135,0.25) 100%)", // Further reduced opacity for enhanced glassmorphism
            padding: "2rem 4rem",
            paddingBottom: "max(2rem, env(safe-area-inset-bottom, 2rem))", // Native iOS safe area blending
            borderTopLeftRadius: "32px",
            borderTopRightRadius: "32px",
            borderTop: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 -20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "flex",
            justifyContent: "center", // Centering the text block as requested
            alignItems: "center",
            flexDirection: "column",
            zIndex: 10,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "0.9rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.9)", // Glass-infused white
                textShadow: "0 2px 10px rgba(0,0,0,0.2)", // Harmonizing shadow
                marginBottom: "0.6rem",
                fontWeight: 800,
                fontFamily: "'Montserrat', sans-serif"
              }}
            >
              B2B Growth &amp; Digital Strategy
            </div>
            <div style={{
              fontSize: "clamp(1.2rem, 3.5vw, 1.8rem)",
              color: "rgba(255, 255, 255, 0.95)", // Almost fully opaque to pop inside the glass
              textShadow: "0 0 20px rgba(255,255,255,0.3), 0 2px 10px rgba(0,0,0,0.4)", // Glow + drop shadow for embedded depth
              fontWeight: 800,
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: "-0.01em",
              marginBottom: "0.4rem"
            }}>
              Technical Web Architect
            </div>
            <div
              style={{
                fontSize: "0.95rem",
                color: "rgba(255, 255, 255, 0.8)", // Glass-infused description
                textShadow: "0 2px 8px rgba(0,0,0,0.25)", // Harmonizing shadow
                marginTop: "0.2rem",
                letterSpacing: "0.8px",
                fontWeight: 500
              }}
            >
              Engineering Rigor • Agile Project Management • ROI-Driven Web Dev
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
