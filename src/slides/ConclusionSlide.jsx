import { useRef } from "react";
import { useSlideAnimation } from "../hooks/useSlideAnimation";

export default function ConclusionSlide() {
  const slideRef = useRef(null);

  useSlideAnimation(slideRef, 18);

  return (
    <section className="slide" id="slide-7" ref={slideRef}>
      <div className="visual-pane">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "5vh",
            position: "relative",
          }}
        >
          {/* Ambient glow behind logo */}
          <div
            style={{
              position: "absolute",
              width: "50vw",
              height: "50vw",
              background:
                "radial-gradient(circle, rgba(255,106,0,0.12) 0%, transparent 65%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <div
            className="growth-text"
            style={{
              fontSize: "clamp(6rem, 14vw, 15rem)",
              color: "rgba(255,255,255,0.04)",
              fontWeight: 800,
              position: "absolute",
              pointerEvents: "none",
              zIndex: 1,
              letterSpacing: "-0.04em",
            }}
          >
            GROWTH
          </div>
          <img
            src="/assets/images/churchwin_logo_new.png"
            style={{
              width: "clamp(300px, 35vw, 600px)",
              display: "block",
              position: "relative",
              zIndex: 2,
              borderRadius: "1rem",
            }}
            alt="Churchwin Logo"
          />
        </div>
      </div>

      <div className="narrative-pane">
        <span className="label">The Close</span>
        <h1 className="headline-xl">
          Zero-Risk <br />
          <span className="highlight">Next Step</span>
        </h1>
        <p className="body-xl">
          We aren't building a catalog.
          <br />
          We are building an{" "}
          <strong>enterprise-grade digital sales engine</strong>.
          <br />
          <br />
          <strong>Proposal Action Item:</strong>
          <br />
          Let's schedule a zero-risk 30-minute working session to discuss how this
          digital foundation will directly support capturing{" "}
          <strong>
            1,000+ qualified global prospects, 50+ sample shipments, and 10-20
            high-volume bulk clients.
          </strong>
          <br />
          <br />
          <button
            style={{
              background: "linear-gradient(135deg, #ff6a00 0%, #ff8c40 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontWeight: 800,
              cursor: "pointer",
              fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
              boxShadow: "0 8px 32px rgba(255, 106, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
              marginTop: "clamp(1rem, 2vw, 2rem)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "clamp(0.9rem, 2vw, 1.2rem) clamp(2rem, 4vw, 3.5rem)",
              transition: "transform var(--transition-spring), box-shadow var(--transition-base)",
            }}
            onClick={() =>
              window.open(
                "mailto:info@churchwintrading.com?subject=Working%20Session%20Request&body=Hi%2C%20I%20am%20interested%20in%20scheduling%20a%2030-minute%20working%20session%20to%20discuss%20the%20digital%20strategy%20proposal.",
                "_blank",
                "noopener,noreferrer"
              )
            }
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 16px 48px rgba(255, 106, 0, 0.55), inset 0 1px 0 rgba(255,255,255,0.25)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(255, 106, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)";
            }}
          >
            SCHEDULE WORKING SESSION
          </button>
        </p>
      </div>
    </section>
  );
}
