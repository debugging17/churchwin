import { useRef } from "react";
import { useSlideAnimation } from "../hooks/useSlideAnimation";
import SvgBackground from "../components/SvgBackground";

const HERO_PRODUCTS = [
  {
    src: "/assets/images/Churchwin_B09ZF5HS5W-Shea-Butter_Listing-Images_Image-5-Photoroom.webp",
    alt: "Shea Butter",
  },
  {
    src: "/assets/images/Churchwin_B08ZNQ6WGJ-Neem-Oil-8-Photoroom-2.webp",
    alt: "Neem Oil",
  },
  { src: "/assets/images/Cocoa-Butter-Photoroom-1.png", alt: "Cocoa Butter" },
  { src: "/assets/images/baobab.png", alt: "Baobab" },
  { src: "/assets/images/moringa.webp", alt: "Moringa" },
];

export default function SectionCoverSlide({
  num,
  title,
  theme = "dark",
  slideIndex,
}) {
  const slideRef = useRef(null);
  useSlideAnimation(slideRef, slideIndex);

  const isLight = theme === "light";
  const bgColor = isLight ? "#ffffff" : "#012787";
  const textColor = isLight ? "#012787" : "#ffffff";

  return (
    <section
      className={`slide ${isLight ? "slide-light" : ""}`}
      id={`slide-section-${num}`}
      ref={slideRef}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: bgColor,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {isLight && <SvgBackground />}

      {/* Ambient centre glow */}
      <div
        style={{
          position: "absolute",
          width: "60vw",
          height: "60vw",
          background: isLight
            ? "radial-gradient(circle, rgba(1,39,135,0.06) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(255,106,0,0.09) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Top Right Mini Product Showcase Stamp */}
      <div
        className="section-product-stamp section-cover-product-stamp"
        style={{
          position: "absolute",
          top: "clamp(1rem, 4vh, 3rem)",
          right: "clamp(1rem, 3vw, 3rem)",
          width: "clamp(140px, 30vw, 240px)",
          height: "clamp(110px, 20vw, 180px)",
          background: "rgba(255, 255, 255, 0.96)",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: isLight
            ? "0 10px 40px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.9)"
            : "0 12px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.6)",
          zIndex: 20,
          padding: "0.5rem",
          border: "none",
          outline: isLight ? "4px solid #ff6a00" : "none",
          outlineOffset: "0px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {HERO_PRODUCTS.map((product, i) => {
            let positionStyles = {};
            if (i === 0)
              positionStyles = {
                position: "absolute",
                left: "12%",
                bottom: "2%",
                zIndex: 12,
              };
            if (i === 1)
              positionStyles = {
                position: "absolute",
                left: "10%",
                top: "2%",
                zIndex: 10,
              };
            if (i === 2) positionStyles = { position: "relative", zIndex: 15 };
            if (i === 3)
              positionStyles = {
                position: "absolute",
                right: "10%",
                top: "2%",
                zIndex: 10,
              };
            if (i === 4)
              positionStyles = {
                position: "absolute",
                right: "10%",
                bottom: "2%",
                zIndex: 12,
              };

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  ...positionStyles,
                }}
              >
                <img
                  src={product.src}
                  alt={product.alt}
                  style={{
                    maxHeight: "clamp(30px, 8vh, 80px)",
                    maxWidth: "clamp(25px, 10vw, 60px)",
                    objectFit: "contain",
                    filter: "drop-shadow(-3px 4px 6px rgba(0,0,0,0.15))",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Centered Content Card */}
      <div
        className="reveal-content"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(1rem, 2vw, 2.5rem)",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 2rem",
        }}
      >
        {isLight ? (
          <div
            className="section-cover-number"
            style={{
              backgroundColor: "#012787",
              padding:
                "clamp(0.4rem, 1.2vw, 0.8rem) clamp(0.8rem, 1.8vw, 1.2rem)",
              borderRadius: "clamp(12px, 2vw, 24px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 1,
            }}
          >
            <span
              style={{
                fontSize: "clamp(3rem, 8vw, 4.5rem)",
                fontWeight: 800,
                fontFamily: "Montserrat, sans-serif",
                lineHeight: 1,
                color: "#012787",
                WebkitTextStroke: "2.5px #ffffff",
                paintOrder: "stroke fill",
              }}
            >
              {num}
            </span>
          </div>
        ) : (
          <div
            className="section-cover-number"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "clamp(10px, 1.8vw, 20px)",
              padding:
                "clamp(0.3rem, 1vw, 0.7rem) clamp(0.7rem, 1.6vw, 1.1rem)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 1,
            }}
          >
            <span
              style={{
                fontSize: "clamp(3rem, 8vw, 4.5rem)",
                fontWeight: 800,
                fontFamily: "Montserrat, sans-serif",
                lineHeight: 1,
                color: "#ffffff",
                WebkitTextStroke: "2.5px #012787",
                paintOrder: "stroke fill",
              }}
            >
              {num}
            </span>
          </div>
        )}

        <h1
          className="section-cover-title"
          style={{
            margin: 0,
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            fontWeight: 800,
            color: textColor,
            letterSpacing: "-0.03em",
            whiteSpace: "normal",
            maxWidth: "100%",
            textShadow: isLight
              ? "0 2px 12px rgba(0,0,0,0.12)"
              : "0 4px 24px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </h1>
      </div>

      {/* Bottom Right Logo Stamp */}
      <div
        className="section-cover-logo-stamp"
        style={{
          position: "absolute",
          bottom: "max(1.5rem, env(safe-area-inset-bottom, 1.5rem))",
          right: "clamp(1rem, 4vw, 3rem)",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "12px",
          padding: "clamp(0.5rem, 2vw, 0.8rem) clamp(1rem, 4vw, 1.5rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          zIndex: 20,
          border: "none",
          outline: isLight ? "6px solid #ff6a00" : "none",
          outlineOffset: "0px",
          maxWidth: "70vw",
        }}
      >
        <img
          src="/assets/images/churchwin_logo_new.png"
          alt="Churchwin Trading Co."
          style={{ width: "100%", maxWidth: "160px", height: "auto", objectFit: "contain" }}
        />
      </div>
    </section>
  );
}
