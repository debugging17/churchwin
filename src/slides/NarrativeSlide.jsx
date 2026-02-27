import { useRef, useState } from "react";
import { useSlideAnimation } from "../hooks/useSlideAnimation";

const VERTICALS = [
  {
    tab: "Industry Hubs",
    heading: "Cosmetics & Nutraceuticals",
    tier: "Food & Beverage, Luxury Hospitality",
    badge: "DEDICATED PORTALS",
    badgeBg: "#e0f2fe",
    badgeColor: "#0369a1",
    features: [
      {
        icon: "⚙️",
        name: "Automated Procurement",
        desc: "Self-serve pipelines & MOQ calculators",
      },
      {
        icon: "🔑",
        name: "Gated Pricing Tiers",
        desc: "Volume-based auto-discounting",
      },
    ],
  },
  {
    tab: "White-Label",
    heading: "High-Profit Revenue Model",
    tier: "Turnkey Infrastructure",
    badge: "SCALABLE GROWTH",
    badgeBg: "#dcfce7",
    badgeColor: "#15803d",
    features: [
      {
        icon: "🏨",
        name: "Luxury Hotel Partnerships",
        desc: "Custom branding & private label packaging",
      },
      {
        icon: "⚡",
        name: "Influencer Manufacturing",
        desc: "End-to-end turnkey product line creation",
      },
    ],
  },
  {
    tab: "Partner Network",
    heading: "Churchwin Global Partners",
    tier: "Gated, Secure Ecosystem",
    badge: "CLIENT RETENTION",
    badgeBg: "#fef3c7",
    badgeColor: "#92400e",
    features: [
      {
        icon: "🔄",
        name: "Cross-Selling Tools",
        desc: "Introducing Baobab to Shea Butter clients",
      },
      {
        icon: "🎓",
        name: "Exclusive Resources",
        desc: "Quarterly webinars & market newsletters",
      },
    ],
  },
];

export default function NarrativeSlide() {
  const slideRef = useRef(null);
  useSlideAnimation(slideRef, 16);
  const [activeTab, setActiveTab] = useState(0);

  const v = VERTICALS[activeTab];

  return (
    <section className="slide" id="slide-6" ref={slideRef} style={{ position: "relative", overflow: "hidden" }}>

      {/* 
        Unified Background Container 
        Ensures the image and overlay are safely housed together below the content layer 
        without battling global CSS resets on the main .slide element.
      */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: 'none',
        backgroundColor: '#011533' // Base dark navy
      }}>
        {/* The target background image */}
        <img
          src="/assets/images/women.png"
          alt="Women"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.4, // Boosted slightly so it's actually visible against the dark background
            mixBlendMode: 'luminosity'
          }}
        />
        {/* 
          Gradient Overlay to text legibility (Heavy left, transparent right) 
          This sits inside the background container, above the image.
        */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(1,21,51,0.98) 0%, rgba(1,21,51,0.5) 100%)'
        }} />
      </div>

      <div className="split-stretch-container" style={{ position: "relative", zIndex: 10, padding: "2rem 1rem", minHeight: "80vh", maxHeight: "1200px" }}>

        <div className="narrative-pane" style={{ width: "45%", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingRight: "2rem" }}>
          <div>
            <span className="label" style={{ marginBottom: "0.25rem", display: "inline-block" }}>Strategic Expansion</span>
            <h1 className="headline-xl" style={{ marginTop: 0, marginBottom: "0" }}>
              Multi-Industry <br />
              <span className="highlight">Architecture</span>
            </h1>
          </div>

          <p className="body-xl" style={{ margin: 0, fontSize: "clamp(1rem, 1.25vw, 1.25rem)", lineHeight: "1.5" }}>
            Building a scalable B2B portal ready for new verticals (Cosmetics,
            Nutraceuticals) and ingredients (Baobab, Moringa).
          </p>

          <div style={{ fontSize: "clamp(1rem, 1.25vw, 1.25rem)", lineHeight: "1.5" }}>
            <strong>Automated Workflows:</strong>
            <br />
            Self-serve MOQ calculators, gated pricing tiers, and automated sample
            requests.
          </div>

          <div style={{ fontSize: "clamp(1rem, 1.25vw, 1.25rem)", lineHeight: "1.5" }}>I build the <strong>Turnkey Engine</strong> so your sales team
            can scale globally without friction.
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
            <span className="label" style={{ display: "inline-block" }}>Strategic Expansion</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1, /* Allow to stretch */
              width: "100%",
            }}
          >
            {/* B2B Portal UI Mockup */}
            <div
              style={{
                width: "100%", /* Used all available width */
                flex: 1, /* Smoothly scale up to match left stack height */
                minHeight: "500px",
                background: "#fff",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0px 10px 40px rgba(0,0,0,0.15)"
              }}
            >
              {/* Navigation Tabs */}
              <div
                style={{
                  background: "#f8f9fa",
                  padding: "1.5rem 2rem 0 2rem",
                  borderBottom: "1px solid #ddd",
                  display: "flex",
                  gap: "2.5rem",
                  fontSize: "1rem",
                  fontWeight: 800,
                }}
              >
                {VERTICALS.map((vt, i) => (
                  <div
                    key={i}
                    data-interactive
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTab(i);
                    }}
                    style={{
                      color: activeTab === i ? "var(--accent)" : "#999",
                      borderBottom:
                        activeTab === i
                          ? "3px solid var(--accent)"
                          : "3px solid transparent",
                      paddingBottom: "0.8rem",
                      cursor: "pointer",
                      transition: "color 0.2s, border-color 0.2s",
                      userSelect: "none",
                    }}
                    onMouseOver={(e) => {
                      if (activeTab !== i) e.currentTarget.style.color = "#666";
                    }}
                    onMouseOut={(e) => {
                      if (activeTab !== i) e.currentTarget.style.color = "#999";
                    }}
                  >
                    {vt.tab}
                  </div>
                ))}
              </div>

              {/* Portal Content */}
              <div
                style={{
                  padding: "2.5rem 2.5rem 3rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        color: "#1a1a2e",
                        fontSize: "1.8rem",
                        fontWeight: 900,
                      }}
                    >
                      {v.heading}
                    </h3>
                    <div
                      style={{
                        color: "#666",
                        fontSize: "1.05rem",
                        marginTop: "0.4rem",
                      }}
                    >
                      {v.tier}
                    </div>
                  </div>
                  <div
                    style={{
                      background: v.badgeBg,
                      color: v.badgeColor,
                      padding: "0.6rem 1rem",
                      borderRadius: "20px",
                      fontSize: "0.85rem",
                      fontWeight: 800,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {v.badge}
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    background: "linear-gradient(to right, #eee, transparent)",
                  }}
                />

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "1.5rem",
                    flex: 1,
                  }}
                >
                  {v.features.map((f, fi) => (
                    <div
                      key={fi}
                      style={{
                        border: "1px solid #e8e8e8",
                        borderRadius: "12px",
                        padding: "1.5rem 1.25rem",
                        background: "#fafbfc",
                        display: "flex",
                        flexDirection: "column",
                        transition: "border-color 0.3s, transform 0.3s",
                        cursor: "default",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.borderColor = "#ff6a00";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.borderColor = "#e8e8e8";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                        {f.icon}
                      </div>
                      <div
                        style={{
                          fontWeight: 700,
                          color: "#1a1a2e",
                          fontSize: "1rem",
                          marginBottom: "0.4rem",
                        }}
                      >
                        {f.name}
                      </div>
                      <div
                        style={{
                          color: "#888",
                          fontSize: "0.8rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {f.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
