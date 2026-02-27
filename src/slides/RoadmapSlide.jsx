import { memo, useRef, useState, useEffect, useCallback } from "react";

import { createPortal } from "react-dom";
import { useSlideAnimation } from "../hooks/useSlideAnimation";
import gsap from "gsap";

const STRATEGY_DETAILS = [
  {
    num: "01",
    label: "DAYS 1-30",
    title: "Core Architecture",
    subtitle: "Foundation & Specs",
    color: "#4facfe",
    tags: ["UX/UI Overhaul", "SEO Strategy", "B2B Catalogs"],
    icon: "🔧",
    strategies: [
      {
        icon: "🎨",
        name: "UX/UI & B2B Catalogs",
        desc: "Redesign the storefront with conversion-focused layouts. Integrate downloadable B2B catalogs with technical specs.",
        kpi: "Target: Support 500+ high-value prospects",
      },
      {
        icon: "🔍",
        name: "Technical SEO Audit",
        desc: 'Fix crawl errors, optimize meta tags, implement structured data (Product Schema), and build a keyword strategy around "bulk shea butter supplier".',
        kpi: "Target: Page 1 for 5 key terms",
      },
      {
        icon: "📊",
        name: "CRM & Analytics Setup",
        desc: "Deploy HubSpot CRM for lead tracking. Install GA4 with conversion events, heatmaps (Hotjar), and Meta Pixel for retargeting.",
        kpi: "Target: Full attribution pipeline",
      },
      {
        icon: "📝",
        name: "Content Foundation",
        desc: "Create 5 cornerstone blog posts targeting long-tail B2B queries. Build product pages with comparison tables and trust badges.",
        kpi: "Target: 10 indexed pages in 30 days",
      },
    ],
  },
  {
    num: "02",
    label: "DAYS 31-60",
    title: "Campaign Outreach",
    subtitle: "Churchwin Origins",
    color: "#ff6a00",
    tags: ["Origins Campaign", "Instantly.ai", "Sample Requests"],
    icon: "⚡",
    strategies: [
      {
        icon: "🎯",
        name: "Origins Landing Pages",
        desc: 'Create targeted landing pages for the "Churchwin Origins" campaign to highlight ethical sourcing and on-demand freshness.',
        kpi: "Target: 15% conversion rate",
      },
      {
        icon: "📧",
        name: "Automated Sample Forms",
        desc: "Implement professional digital sample request forms to facilitate the dispatch of pre-qualified sample kits.",
        kpi: "Target: 20+ pre-qualified sample kits",
      },
      {
        icon: "🎬",
        name: "Asset Production",
        desc: "Produce 3 hero videos: factory tour, cooperative women's story, and product sourcing journey. Create downloadable spec sheets and certifications PDF.",
        kpi: "Target: 3 video assets + media kit",
      },
      {
        icon: "🤝",
        name: "LinkedIn Authority",
        desc: "Launch CEO thought-leadership campaign. Post 3x/week on ethical sourcing trends. Engage with target buyers' content systematically.",
        kpi: "Target: 500 new connections/month",
      },
    ],
  },
  {
    num: "03",
    label: "DAYS 61-90",
    title: "Scaling & Authority",
    subtitle: "Full amplification",
    color: "#27c93f",
    tags: ["SEO Authority", "Retargeting", "Organic Moat"],
    icon: "🚀",
    strategies: [
      {
        icon: "📱",
        name: "SEO Benefits Authority",
        desc: "Digital rollout of SEO-targeted articles specifically on the benefits of Baobab and Moringa to build organic authority.",
        kpi: "Target: Break reliance on paid ads",
      },
      {
        icon: "🔄",
        name: "Meta Pixel Retargeting",
        desc: "Retarget site visitors and email openers with dynamic product ads. Build lookalike audiences from converters for cold prospecting at scale.",
        kpi: "Target: 5x ROAS on ad spend",
      },
      {
        icon: "🏪",
        name: "Wholesale Portals",
        desc: "Launch a self-serve B2B portal with tiered pricing, MOQ calculator, and sample request form. Architected to support new verticals (Moringa, Baobab).",
        kpi: "Target: 20 portal signups/month",
      },
      {
        icon: "📈",
        name: "QR Traceability",
        desc: "Add QR codes to bulk packaging linked to origin stories — cooperative name, harvest date, region. Premium buyers pay 15-20% more for traceability.",
        kpi: "Target: All new shipments QR-enabled",
      },
    ],
  },
];

function StrategyModal({ month, onClose }) {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth > 768 && window.innerWidth <= 1200,
  );

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      const tablet = window.innerWidth > 768 && window.innerWidth <= 1200;
      setIsMobile(mobile);
      setIsTablet(tablet);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 },
    );
    gsap.fromTo(
      modalRef.current,
      { scale: 0.9, opacity: 0, y: 30 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "back.out(1.5)",
        delay: 0.1,
      },
    );
  }, []);

  const handleClose = useCallback(() => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.2 });
    gsap.to(modalRef.current, {
      scale: 0.95,
      opacity: 0,
      y: 20,
      duration: 0.25,
      onComplete: onClose,
    });
  }, [onClose]);

  // Close on escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleClose]);

  const isSmall = isMobile || isTablet;

  return (
    <div
      ref={overlayRef}
      data-modal-overlay
      onClick={handleClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(8px)",
        display: "grid",
        placeItems: "center",
        zIndex: 10000,
        cursor: "pointer",
        padding: isMobile ? "0.5rem" : "1rem",
      }}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#ffffff",
          border: `1px solid ${month.color}44`,
          borderRadius: isMobile ? "14px" : "20px",
          padding: isMobile
            ? "1.25rem 1rem"
            : isTablet
              ? "1.5rem 1.75rem"
              : "2rem 2.5rem",
          width: isMobile ? "100%" : "90vw",
          maxWidth: isMobile ? "100%" : isTablet ? "900px" : "1050px",
          maxHeight: isMobile ? "95vh" : "92vh",
          overflowY: "auto",
          cursor: "default",
          boxShadow: `0 30px 80px rgba(0,0,0,0.3), 0 0 40px rgba(255,106,0,0.15)`,
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: isSmall ? "1rem" : "1.25rem",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                background: "#ff6a00",
                color: "#fff",
                padding: "4px 14px",
                borderRadius: "20px",
                fontSize: "0.7rem",
                fontWeight: 800,
                letterSpacing: "1.5px",
                marginBottom: "0.5rem",
              }}
            >
              {month.label}
            </div>
            <h2
              style={{
                fontSize: isMobile ? "1.4rem" : "2.2rem",
                fontWeight: 800,
                color: "#012787",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                margin: 0,
              }}
            >
              <span>{month.icon}</span> {month.title}
            </h2>
            <p
              style={{
                color: "#012787",
                opacity: 0.8,
                fontStyle: "italic",
                margin: "0.25rem 0 0",
                fontSize: isMobile ? "0.85rem" : "1.1rem",
              }}
            >
              {month.subtitle}
            </p>
          </div>
          <button
            onClick={handleClose}
            style={{
              background: "rgba(1,39,135,0.1)",
              border: "none",
              color: "#012787",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "1.1rem",
              display: "grid",
              placeItems: "center",
              flexShrink: 0,
              transition: "background 0.2s",
            }}
            onMouseOver={(e) =>
              (e.target.style.background = "rgba(1,39,135,0.2)")
            }
            onMouseOut={(e) =>
              (e.target.style.background = "rgba(1,39,135,0.1)")
            }
          >
            ✕
          </button>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: `linear-gradient(to right, rgba(1,39,135,0.2), transparent)`,
            marginBottom: isSmall ? "0.75rem" : "1.25rem",
          }}
        />

        {/* Strategy Cards Grid */}
        <div
          className="strategy-grid"
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "0.75rem" : "1rem",
          }}
        >
          {month.strategies.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#f8f9fa",
                border: "1px solid rgba(1,39,135,0.1)",
                borderRadius: "14px",
                padding: isMobile ? "1rem" : "1.5rem",
                transition:
                  "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                cursor: "default",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = `rgba(255,106,0,0.4)`;
                e.currentTarget.style.boxShadow = `0 5px 15px rgba(255,106,0,0.1)`;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "rgba(1,39,135,0.1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  fontSize: isMobile ? "1.6rem" : "2.2rem",
                  marginBottom: "0.5rem",
                }}
              >
                {s.icon}
              </div>
              <h4
                style={{
                  color: "#012787",
                  fontSize: isMobile ? "0.95rem" : "1.2rem",
                  fontWeight: 700,
                  marginBottom: "0.4rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {s.name}
              </h4>
              <p
                style={{
                  color: "#333",
                  fontSize: isMobile ? "0.85rem" : "1.05rem",
                  lineHeight: 1.5,
                  marginBottom: "0.8rem",
                }}
              >
                {s.desc}
              </p>
              <div
                style={{
                  fontSize: isMobile ? "0.75rem" : "0.9rem",
                  fontWeight: 600,
                  color: "#ff6a00",
                  background: `rgba(255,106,0,0.1)`,
                  padding: "6px 12px",
                  borderRadius: "6px",
                  display: "inline-block",
                  letterSpacing: "0.3px",
                }}
              >
                {s.kpi}
              </div>
            </div>
          ))}
        </div>

        {/* Click hint at the bottom */}
        <div
          style={{
            textAlign: "center",
            marginTop: isSmall ? "0.75rem" : "1.25rem",
            fontSize: "0.75rem",
            color: "#666",
          }}
        >
          Press{" "}
          <kbd
            style={{
              background: "rgba(1,39,135,0.1)",
              color: "#012787",
              padding: "2px 6px",
              border: "1px solid rgba(1,39,135,0.2)",
              borderRadius: "4px",
              fontSize: "0.7rem",
            }}
          >
            ESC
          </kbd>{" "}
          or click outside to close
        </div>
      </div>
    </div>
  );
}

const RoadmapSlide = memo(function RoadmapSlide() {

  const slideRef = useRef(null);
  useSlideAnimation(slideRef, 10);
  const [activeMonth, setActiveMonth] = useState(null);

  return (
    <section className="slide" id="slide-4" ref={slideRef}>
      {/* Container forcing exact vertical top & bottom alignment between columns */}
      <div className="split-stretch-container" style={{ padding: "2rem 1rem", minHeight: "65vh", maxHeight: "1000px" }}>

        <div className="narrative-pane" style={{ width: "45%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

          <div>
            <span className="label" style={{ marginBottom: "0.25rem", display: "inline-block" }}>The Strategic Solution</span>
            <h1 className="headline-xl" style={{ marginTop: 0, marginBottom: "1rem" }}>
              The Fix: <br />
              <span className="highlight">3-Month Roadmap</span>
            </h1>
            <p className="body-xl" style={{ margin: 0, fontSize: "clamp(1rem, 1.25vw, 1.25rem)", lineHeight: "1.5" }}>
              We don't need a year. We need{" "}
              <strong style={{ color: "#fff" }}>90 days</strong> of aggressive,
              focused execution.
            </p>
          </div>

          <div
            className="body-xl"
            style={{
              fontSize: "clamp(1rem, 1.25vw, 1.25rem)", /* Increased text size for confident presence */
              lineHeight: "1.5"
            }}
          >
            <p style={{ margin: 0 }}>
              <strong style={{ color: "#fff" }}>
                Days 1-30: Core Architecture
              </strong>
              <br />
              UX Overhaul, SEO Foundation, CRM structure.
              <br />
              <br />
              <strong style={{ color: "#fff" }}>
                Days 31-60: Automation &amp; CRM
              </strong>
              <br />
              Cold Outreach pipeline, Lead Scoring, Video Assets.
              <br />
              <br />
              <strong style={{ color: "#fff" }}>
                Days 61-90: Scaling &amp; Portals
              </strong>
              <br />
              Wholesale B2B Self-Serve Portal, Retargeting.
            </p>
          </div>
        </div>

        <div
          className="visual-pane"
          style={{
            width: "55%",
            display: "flex",
            flexDirection: "column"
          }}
        >
          {/* Invisible spacer mimicking the exact height of the label on the left, aligning the top card with the H1 */}
          <div style={{ visibility: "hidden", marginBottom: "0.25rem", pointerEvents: "none" }}>
            <span className="label" style={{ display: "inline-block" }}>The Strategic Solution</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", /* Stretches the cards out evenly from top to bottom */
              flex: 1, /* Occupies all available stretched space */
              gap: "clamp(0.5rem, 1.2vh, 1rem)", /* Reduced gap to prevent cutting */
              width: "100%",
              maxWidth: "500px",
            }}
          >
            {STRATEGY_DETAILS.map((m, i) => {
              const cardBgs = ["#e7ecd6", "#fbe8cd", "#e0f2fe"];
              const bgStr = cardBgs[i] || "#ffffff";

              return (
                <div
                  key={i}
                  data-interactive
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMonth(m);
                  }}
                  style={{
                    background: bgStr,
                    borderRadius: "16px",
                    padding: "clamp(0.8rem, 1.5vh, 1.5rem) clamp(1rem, 2vw, 1.5rem)",
                    position: "relative",
                    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                    cursor: "pointer",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "clamp(0.4rem, 0.8vh, 0.75rem)",
                    border: "1px solid rgba(0,0,0,0.05)",
                    flexShrink: 0,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
                  }}
                >
                  {/* Card header */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: "0.25rem",
                    }}
                  >
                    <div style={{ fontSize: "clamp(1.5rem, 2.5vh, 2rem)", marginBottom: "0", display: "inline-block" }}>{m.icon}</div>
                    <div>
                      <div
                        style={{
                          display: "block",
                          color: m.color,
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          marginBottom: "0.5rem"
                        }}
                      >
                        {m.label}
                      </div>
                      <h3
                        style={{
                          color: "#012787",
                          fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                          fontWeight: 800,
                          margin: 0,
                          letterSpacing: "-0.02em",
                          fontFamily: "'Montserrat', sans-serif"
                        }}
                      >
                        {m.title}
                      </h3>
                    </div>
                  </div>

                  {/* Subtitle / Description like "Examples" */}
                  <div
                    style={{
                      fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)",
                      color: "#334155",
                      fontWeight: 500,
                      lineHeight: "1.3",
                      textAlign: "center",
                    }}
                  >
                    {m.subtitle} <br />
                    <span style={{ fontSize: "clamp(0.7rem, 1vw, 0.8rem)", color: "#64748b", fontWeight: 600 }}>
                      {m.tags.join(" • ")}
                    </span>
                  </div>

                  {/* Action Link resembling BUY NOW */}
                  <div style={{ marginTop: "0.25rem", display: "flex", justifyContent: "center" }}>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        color: "#df5a1a",
                        fontWeight: 800,
                        fontSize: "clamp(0.7rem, 1vw, 0.8rem)",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        paddingBottom: "4px",
                        textAlign: "center"
                      }}
                    >
                      Click to explore ➔
                      {/* The extending line */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "120%",
                          height: "1px",
                          background: "#df5a1a",
                        }}
                      />
                    </div>
                  </div>

                  {/* Connecting line between cards */}
                  {i < 2 && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-1.25rem",
                        left: "2.5rem",
                        width: "2px",
                        height: "1.25rem",
                        background: `linear-gradient(to bottom, #cfd3be, transparent)`,
                        zIndex: 1,
                      }}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div> {/* End Stretch Container */}

      {/* Strategy Detail Modal — portaled to body to avoid GSAP transform */}
      {activeMonth &&
        createPortal(
          <StrategyModal
            month={activeMonth}
            onClose={() => setActiveMonth(null)}
          />,
          document.body,
        )}
    </section>
  );
});

export default RoadmapSlide;
