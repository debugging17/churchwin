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
          <div
            className="growth-text"
            style={{
              fontSize: "15rem",
              color: "rgba(255,255,255,0.05)",
              fontWeight: 800,
              position: "absolute",
              pointerEvents: "none",
              zIndex: 1,
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
              background: "rgba(255, 106, 0, 0.15)",
              color: "#fff",
              border: "1px solid rgba(255, 106, 0, 0.4)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              padding: "clamp(1rem, 2vw, 1.25rem) clamp(2rem, 4vw, 3rem)",
              borderRadius: "12px",
              fontWeight: 800,
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              boxShadow: "0 8px 32px rgba(255, 106, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
              marginTop: "clamp(1rem, 2vw, 2rem)",
              letterSpacing: "1px",
              textTransform: "uppercase"
            }}
            onClick={() =>
              window.open(
                "mailto:info@churchwintrading.com?subject=Working%20Session%20Request&body=Hi%2C%20I%20am%20interested%20in%20scheduling%20a%2030-minute%20working%20session%20to%20discuss%20the%20digital%20strategy%20proposal.",
                "_blank",
                "noopener,noreferrer"
              )
            }
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.background = "rgba(255, 106, 0, 0.25)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(255, 106, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.borderColor = "rgba(255, 106, 0, 0.6)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255, 106, 0, 0.15)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(255, 106, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "rgba(255, 106, 0, 0.4)";
            }}
          >
            SCHEDULE WORKING SESSION
          </button>
        </p>
      </div>
    </section>
  );
}
