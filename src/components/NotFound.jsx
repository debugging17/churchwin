import React from "react";

export default function NotFound() {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #012787 0%, #010f3d 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Montserrat', 'Inter', sans-serif",
                color: "#ffffff",
                textAlign: "center",
                padding: "2rem",
            }}
        >
            <div
                style={{
                    fontSize: "clamp(5rem, 20vw, 12rem)",
                    fontWeight: 800,
                    lineHeight: 1,
                    background: "linear-gradient(135deg, #ffffff 40%, #ff6a00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "1rem",
                    letterSpacing: "-0.04em",
                }}
            >
                404
            </div>

            <h1
                style={{
                    fontSize: "clamp(1rem, 3vw, 1.75rem)",
                    fontWeight: 600,
                    margin: "0 0 0.75rem",
                    letterSpacing: "0.02em",
                    opacity: 0.95,
                }}
            >
                Page Not Found
            </h1>

            <p
                style={{
                    fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
                    opacity: 0.55,
                    maxWidth: "400px",
                    lineHeight: 1.6,
                    marginBottom: "2.5rem",
                }}
            >
                The page you&apos;re looking for doesn&apos;t exist.
            </p>

            <a
                href="/"
                style={{
                    display: "inline-block",
                    padding: "0.75rem 2rem",
                    background: "linear-gradient(135deg, #ff6a00, #ff8c40)",
                    color: "#ffffff",
                    textDecoration: "none",
                    borderRadius: "6px",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    letterSpacing: "0.05em",
                    transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
                BACK TO DECK
            </a>
        </div>
    );
}
