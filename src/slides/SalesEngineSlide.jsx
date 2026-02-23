import { useRef } from "react";
import { useSlideAnimation } from "../hooks/useSlideAnimation";
export default function SalesEngineSlide() {
  const slideRef = useRef(null);
  useSlideAnimation(slideRef, 9);

  return (
    <section className="slide slide-light" id="slide-5" ref={slideRef}>
      <div className="narrative-pane">
        <span
          className="label"
          style={{ marginBottom: "0.25rem", display: "inline-block" }}
        >
          Enhancement 01: Sales
        </span>
        <h1 className="headline-xl" style={{ marginTop: 0 }}>
          Stop Waiting. <br />
          <span className="highlight">Go Get Them.</span>
        </h1>
        <p className="body-xl" style={{ marginBottom: "2rem" }}>
          Implementing a proven <strong style={{ color: "#012787" }}>5-Step Sales Pipeline</strong> for
          absolute precision targeting.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Item 1 */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <div style={{ fontWeight: 900, fontSize: "1.25rem", color: "#ff6a00", fontFamily: "Montserrat, sans-serif" }}>01.</div>
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0 0 0.25rem 0", color: "#012787" }}>Automated Fulfillment</h3>
              <p style={{ margin: 0, fontSize: "0.95rem", color: "#555", lineHeight: 1.4 }}>
                Instant dispatch of a "B2B Starter Package" (Catalogs, COAs,
                Tiered Pricing) upon lead capture.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <div style={{ fontWeight: 900, fontSize: "1.25rem", color: "#ff6a00", fontFamily: "Montserrat, sans-serif" }}>02.</div>
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0 0 0.25rem 0", color: "#012787" }}>High-Frequency Follow-Up</h3>
              <p style={{ margin: 0, fontSize: "0.95rem", color: "#555", lineHeight: 1.4 }}>
                Automating Day 2, Day 7, and Day 14 email sequences to push
                conversions by over <strong style={{ color: "#ff6a00" }}>40%</strong>.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <div style={{ fontWeight: 900, fontSize: "1.25rem", color: "#ff6a00", fontFamily: "Montserrat, sans-serif" }}>03.</div>
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0 0 0.25rem 0", color: "#012787" }}>Digital Incentives</h3>
              <p style={{ margin: 0, fontSize: "0.95rem", color: "#555", lineHeight: 1.4 }}>
                Lowering barriers to entry for bulk buyers via "First-Order
                Incentives" (5% off or free shipping discounts).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="visual-pane" style={{ overflow: "visible" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
            transform: "translate(-4.5rem, 2rem)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
              width: "100%",
              perspective: "1200px",
              padding: "1rem", /* Gentle padding */
            }}
          >
            {/* 1. Apollo.io */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                overflow: "hidden",
                background: "#0d1117",
                border: "1px solid rgba(0,0,0,0.05)",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                transform: "perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1) translateZ(0px)",
                transformStyle: "preserve-3d",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.zIndex = "10";
                e.currentTarget.style.boxShadow = "-20px 30px 60px rgba(0,0,0,0.3)";
                e.currentTarget.style.transform = "perspective(1200px) rotateY(-12deg) rotateX(6deg) scale(1.05) translateZ(20px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.zIndex = "1";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
                e.currentTarget.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1) translateZ(0px)";
              }}
            >
              <div
                style={{
                  background: "#161b22",
                  padding: "12px 16px",
                  borderBottom: "2px solid #30363d",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", gap: "6px" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#ff5f56",
                    }}
                  />
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#ffbd2e",
                    }}
                  />
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#27c93f",
                    }}
                  />
                </div>
                <img
                  src="/assets/images/Sales Engine/apollo.png"
                  alt="Apollo.io"
                  style={{
                    height: "28px",
                    marginLeft: "auto", // Align logo to center/right
                    marginRight: "auto",
                    borderRadius: "2px",
                    filter: "brightness(0) invert(1)",
                  }}
                  onError={(e) => (e.target.style.display = "none")}
                />
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#8b949e",
                    marginLeft: "auto",
                    fontWeight: 600,
                  }}
                >
                  apollo.io/search
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  padding: "1.5rem",
                  background: "#0d1117",
                  minHeight: "180px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1rem",
                    borderBottom: "1px solid #30363d",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#c9d1d9",
                      fontWeight: 600,
                    }}
                  >
                    Total Leads
                  </div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      color: "var(--accent)",
                      fontWeight: 800,
                    }}
                  >
                    34,218
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {/* Mock Table Row 1 */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.7rem",
                      color: "#8b949e",
                      background: "#161b22",
                      padding: "6px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    <span>R&amp;D Director</span>
                    <span style={{ color: "#27c93f" }}>✓ Verified</span>
                    <span>Cosmetics</span>
                  </div>
                  {/* Mock Table Row 2 */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.7rem",
                      color: "#8b949e",
                      background: "#161b22",
                      padding: "6px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    <span>Head Formulator</span>
                    <span style={{ color: "#27c93f" }}>✓ Verified</span>
                    <span>Skincare</span>
                  </div>
                  {/* Mock Table Row 3 */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.7rem",
                      color: "#8b949e",
                      background: "#161b22",
                      padding: "6px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    <span>VP Procurement</span>
                    <span style={{ color: "#27c93f" }}>✓ Verified</span>
                    <span>Beauty</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Instantly.ai */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                overflow: "hidden",
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.35)",
                borderRadius: "16px",
                boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
                display: "flex",
                flexDirection: "column",
                transform: "perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1) translateZ(0px)",
                transformStyle: "preserve-3d",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.zIndex = "10";
                e.currentTarget.style.boxShadow = "-20px 30px 60px rgba(0,0,0,0.15)";
                e.currentTarget.style.transform = "perspective(1200px) rotateY(-12deg) rotateX(6deg) scale(1.05) translateZ(30px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.zIndex = "1";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.25)";
                e.currentTarget.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1) translateZ(0px)";
              }}
            >
              <div
                style={{
                  background: "#f8fafc",
                  padding: "12px 16px",
                  borderBottom: "2px solid #e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", gap: "6px" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#cbd5e1",
                    }}
                  />
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#cbd5e1",
                    }}
                  />
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#cbd5e1",
                    }}
                  />
                </div>
                <img
                  src="/assets/images/Sales Engine/instantly.png"
                  alt="Instantly.ai"
                  style={{
                    height: "28px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderRadius: "2px",
                  }}
                  onError={(e) => (e.target.style.display = "none")}
                />
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#64748b",
                    marginLeft: "auto",
                    fontWeight: 600,
                  }}
                >
                  app.instantly.ai
                </div>
              </div>
              <div
                style={{
                  padding: "2rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "1rem",
                  background: "#f8fafc",
                  minHeight: "180px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    background: "#ffffff",
                    padding: "16px 20px",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "#e0f2fe",
                      color: "#0369a1",
                      borderRadius: "8px",
                      display: "grid",
                      placeItems: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    📧
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        color: "#1e293b",
                        fontWeight: 700,
                      }}
                    >
                      Step 1: Introduction
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#64748b",
                        marginTop: "2px",
                      }}
                    >
                      Sent immediately on import
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#10b981",
                    }}
                  >
                    Active
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    background: "#ffffff",
                    padding: "16px 20px",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "#fef3c7",
                      color: "#b45309",
                      borderRadius: "8px",
                      display: "grid",
                      placeItems: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    ⏳
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        color: "#1e293b",
                        fontWeight: 700,
                      }}
                    >
                      Step 2: Follow-up
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#64748b",
                        marginTop: "2px",
                      }}
                    >
                      Wait 7 days
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#f59e0b",
                    }}
                  >
                    Queued
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Mailchimp */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                overflow: "hidden",
                background: "#ffe01b",
                border: "1px solid rgba(0,0,0,0.2)",
                borderRadius: "16px",
                boxShadow: "0 15px 35px rgba(220,180,0,0.4)",
                display: "flex",
                flexDirection: "column",
                transform: "perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1) translateZ(0px)",
                transformStyle: "preserve-3d",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.zIndex = "10";
                e.currentTarget.style.boxShadow = "-20px 30px 60px rgba(255,224,27,0.4)";
                e.currentTarget.style.transform = "perspective(1200px) rotateY(-12deg) rotateX(6deg) scale(1.05) translateZ(20px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.zIndex = "1";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(220,180,0,0.4)";
                e.currentTarget.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1) translateZ(0px)";
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.4)",
                  padding: "12px 16px",
                  borderBottom: "2px solid rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", gap: "6px" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "rgba(0,0,0,0.2)",
                    }}
                  />
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "rgba(0,0,0,0.2)",
                    }}
                  />
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "rgba(0,0,0,0.2)",
                    }}
                  />
                </div>
                <img
                  src="/assets/images/Sales Engine/mailchimp.png"
                  alt="Mailchimp"
                  style={{
                    height: "28px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderRadius: "2px",
                  }}
                  onError={(e) => (e.target.style.display = "none")}
                />
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#333",
                    marginLeft: "auto",
                    fontWeight: 700,
                  }}
                >
                  mailchimp.com
                </div>
              </div>
              <div
                style={{
                  padding: "2rem",
                  textAlign: "center",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "180px",
                }}
              >
                <div
                  style={{
                    background: "#ffffff",
                    padding: "1.5rem 2.5rem",
                    borderRadius: "12px",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 800,
                      color: "#000",
                      marginBottom: "1rem",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Q3 LEAD NURTURE CAMPAIGN
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "2.5rem",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "2.2rem",
                          fontWeight: 800,
                          color: "#000",
                          lineHeight: 1,
                        }}
                      >
                        42%
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#666",
                          marginTop: "0.4rem",
                        }}
                      >
                        OPEN RATE
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "2.2rem",
                          fontWeight: 800,
                          color: "#000",
                          lineHeight: 1,
                        }}
                      >
                        12%
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#666",
                          marginTop: "0.4rem",
                        }}
                      >
                        CLICK RATE
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: "1.5rem",
                      width: "100%",
                      height: "8px",
                      background: "#f0f0f0",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: "42%",
                        height: "100%",
                        background: "#000",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 4. LinkedIn */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                overflow: "hidden",
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.35)",
                borderRadius: "16px",
                boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
                display: "flex",
                flexDirection: "column",
                transform: "perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1) translateZ(0px)",
                transformStyle: "preserve-3d",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.zIndex = "10";
                e.currentTarget.style.boxShadow = "-20px 30px 60px rgba(10,102,194,0.25)";
                e.currentTarget.style.transform = "perspective(1200px) rotateY(-12deg) rotateX(6deg) scale(1.05) translateZ(30px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.zIndex = "1";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.25)";
                e.currentTarget.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1) translateZ(0px)";
              }}
            >
              <div
                style={{
                  background: "#f3f2ef",
                  padding: "12px 16px",
                  borderBottom: "2px solid #e1e9ee",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", gap: "6px" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#c8c6c4",
                    }}
                  />
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#c8c6c4",
                    }}
                  />
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#c8c6c4",
                    }}
                  />
                </div>
                <img
                  src="/assets/images/Sales Engine/linkedin.png"
                  alt="LinkedIn"
                  style={{
                    height: "28px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderRadius: "2px",
                  }}
                  onError={(e) => (e.target.style.display = "none")}
                />
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#0a66c2",
                    marginLeft: "auto",
                    fontWeight: 700,
                  }}
                >
                  linkedin.com
                </div>
              </div>
              <div
                style={{
                  padding: "2rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  background: "#f3f2ef",
                  minHeight: "180px",
                }}
              >
                <div
                  style={{
                    background: "#ffffff",
                    padding: "1.5rem 2rem",
                    borderRadius: "12px",
                    width: "100%",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "#e1e9ee",
                        border: "3px solid #fff",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: "1.5rem",
                        color: "#666",
                      }}
                    >
                      👤
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        background: "#0a66c2",
                        color: "#fff",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        display: "grid",
                        placeItems: "center",
                        border: "2px solid #fff",
                        fontSize: "10px",
                      }}
                    >
                      ✓
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      color: "#000",
                      marginTop: "0.8rem",
                    }}
                  >
                    Prospect Connected
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#666",
                      marginTop: "4px",
                    }}
                  >
                    VP Procurement @ L'Oréal
                  </div>
                  <div
                    style={{
                      marginTop: "1rem",
                      background: "#0a66c2",
                      color: "#fff",
                      padding: "6px 16px",
                      borderRadius: "24px",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      width: "100%",
                      cursor: "pointer",
                    }}
                  >
                    Message
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
