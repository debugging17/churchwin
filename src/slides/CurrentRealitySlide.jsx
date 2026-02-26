import { useRef } from "react";
import { useSlideAnimation } from "../hooks/useSlideAnimation";
import { useTilt } from "../hooks/useTilt";
import { AreaChart, Area, ResponsiveContainer, YAxis, Tooltip } from "recharts";

const TREND_BARAKA = [
  { month: "Jan", visits: 40000 },
  { month: "Feb", visits: 44000 },
  { month: "Mar", visits: 48000 },
  { month: "Apr", visits: 49500 },
  { month: "May", visits: 51000 },
  { month: "Jun", visits: 52931 },
];

const TREND_CHURCHWIN = [
  { month: "Jan", visits: 0 },
  { month: "Feb", visits: 0 },
  { month: "Mar", visits: 0 },
  { month: "Apr", visits: 0 },
  { month: "May", visits: 0 },
  { month: "Jun", visits: 0 },
];

const TREND_RETAIL = [
  { month: "Jan", visits: 150 },
  { month: "Feb", visits: 180 },
  { month: "Mar", visits: 140 },
  { month: "Apr", visits: 210 },
  { month: "May", visits: 190 },
  { month: "Jun", visits: 200 },
];

const TREND_FAIRTALE = [
  { month: "Jan", visits: 1800 },
  { month: "Feb", visits: 1900 },
  { month: "Mar", visits: 1850 },
  { month: "Apr", visits: 2050 },
  { month: "May", visits: 2100 },
  { month: "Jun", visits: 2186 },
];

export default function CurrentRealitySlide() {
  const slideRef = useRef(null);
  useSlideAnimation(slideRef, 3);
  const tiltRef = useTilt();

  return (
    <section className="slide" id="slide-2" ref={slideRef}>
      <div className="narrative-pane" style={{ paddingRight: "1rem" }}>
        <span className="label">The Current Reality</span>
        <h1 className="headline-xl">
          The Hard Truth: <br />
          <span className="highlight">We Are Invisible</span>
        </h1>
        <p className="body-xl">
          While our retail site (churchwin.com) exists, our high-margin B2B arm
          (<strong style={{ color: "#ff6a00" }}>Churchwin Trading</strong>) has
          zero digital pipeline.
          <br />
          <br />
          <strong>The Data Speaks:</strong>
          <br />
          Baraka Shea Butter dominates organic search with{" "}
          <strong>52,931</strong> monthly visits. We are entirely absent from
          the B2B conversation.
          <br />
          <br />
          <span style={{ fontSize: "0.9em", color: "var(--accent)" }}>
            Relying 100% on paid retail traffic while ignoring organic B2B leads
            creates an estimated $150k+ monthly revenue gap.
          </span>
        </p>
      </div>

      <div className="visual-pane" ref={tiltRef} style={{ padding: "1rem" }}>
        <div className="bento-grid">
          {/* Market Leader: Baraka Shea */}
          <div
            className="bento-card card-leader"
            style={{
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              border: "1px solid rgba(39, 201, 63, 0.3)",
            }}
            onClick={() =>
              window.open(
                "/assets/docs/Website_Analysis_Insights_Jan_2026.pdf",
                "_blank",
              )
            }
            title="Click to view full SimilarWeb Report"
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 15px 30px rgba(39, 201, 63, 0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "#27c93f",
                color: "#000",
                padding: "2px 8px",
                borderRadius: "12px",
                fontSize: "0.7rem",
                fontWeight: 700,
              }}
            >
              LEADER
            </div>
            <div>
              <h4>Baraka Shea Butter</h4>
              <div className="bento-big-num">52,931</div>
              <div className="bento-sub">Monthly Visits</div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.8rem",
                  marginBottom: "5px",
                }}
              >
                <span>Organic Sources</span>
                <span>High</span>
              </div>
              <div style={{ height: "45px", width: "100%", marginTop: "0.2rem" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={TREND_BARAKA}>
                    <defs>
                      <linearGradient id="colorBaraka" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#27c93f" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#27c93f" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <YAxis domain={['auto', 'auto']} hide />
                    <Tooltip
                      contentStyle={{ backgroundColor: "rgba(0,0,0,0.8)", borderColor: "rgba(255,255,255,0.1)", borderRadius: "8px", backdropFilter: "blur(10px)", color: "#fff", padding: "8px" }}
                      itemStyle={{ color: "#27c93f", fontWeight: 700 }}
                      labelStyle={{ color: "#9ca3af", fontSize: "0.75rem", marginBottom: "4px" }}
                      cursor={{ stroke: "rgba(255,255,255,0.15)", strokeWidth: 1, strokeDasharray: "4 4" }}
                      formatter={(value) => [value.toLocaleString(), "Visits"]}
                      labelFormatter={(label) => `${label}`}
                    />
                    <Area type="monotone" dataKey="visits" stroke="#27c93f" strokeWidth={2} fillOpacity={1} fill="url(#colorBaraka)" isAnimationActive={true} animationDuration={1500} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="bento-sub" style={{ marginTop: "0.8rem" }}>
                3:27 Avg Duration • 2.02 Pages/Visit
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "#27c93f",
                  marginTop: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontWeight: 600,
                }}
              >
                📄 CLICK FOR FULL SIMILARWEB REPORT
              </div>
            </div>
          </div>

          {/* Client: Churchwin Trading (the company this pitch is for) — expanded top right */}
          <div
            className="bento-card bento-span-2"
            style={{
              background: "rgba(255, 106, 0, 0.12)",
              border: "2px solid rgba(255, 106, 0, 0.5)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "var(--accent)",
                color: "#fff",
                padding: "3px 10px",
                borderRadius: "12px",
                fontSize: "0.75rem",
                fontWeight: 700,
              }}
            >
              YOU
            </div>
            <h4
              style={{
                fontSize: "clamp(0.7rem, 2vw, 0.85rem)",
                color: "rgba(255,255,255,0.8)",
                letterSpacing: "1px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                paddingRight: "2.5rem"
              }}
            >
              Churchwin Trading Co.
            </h4>
            <div
              className="bento-big-num"
              style={{ color: "#ff6a00", fontSize: "2.8rem" }}
            >
              N/A
            </div>
            <div
              style={{ fontSize: "0.95rem", color: "#ffcc99", fontWeight: 600 }}
            >
              No Digital Presence
            </div>
            <div style={{ marginTop: "auto" }}>
              <div style={{ height: "40px", width: "100%", marginTop: "0.5rem" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={TREND_CHURCHWIN}>
                    <defs>
                      <linearGradient id="colorChurchwin" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="var(--accent)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <YAxis domain={[0, 100]} hide />
                    <Tooltip
                      contentStyle={{ backgroundColor: "rgba(0,0,0,0.8)", borderColor: "rgba(255,255,255,0.1)", borderRadius: "8px", backdropFilter: "blur(10px)", color: "#fff", padding: "8px" }}
                      itemStyle={{ color: "var(--accent)", fontWeight: 700 }}
                      labelStyle={{ color: "#9ca3af", fontSize: "0.75rem", marginBottom: "4px" }}
                      cursor={{ stroke: "rgba(255,255,255,0.15)", strokeWidth: 1, strokeDasharray: "4 4" }}
                      formatter={(value) => [value.toLocaleString(), "Visits"]}
                      labelFormatter={(label) => `${label}`}
                    />
                    <Area type="monotone" dataKey="visits" stroke="var(--accent)" strokeWidth={2} fillOpacity={1} fill="url(#colorChurchwin)" isAnimationActive={true} animationDuration={1500} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#ff6a00",
                  fontWeight: 600,
                  marginTop: "0.5rem",
                }}
              >
                Invisible Online — Zero Organic Traffic
              </div>
            </div>
          </div>

          {/* Retail Arm: Churchwin.com — row 2, left */}
          <div
            className="bento-card"
            style={{
              gridColumn: "span 1",
              background: "rgba(255, 255, 255, 0.18)",
              border: "1px dashed rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <h4
              style={{
                whiteSpace: "normal",
                overflow: "visible",
                fontSize: "0.7rem",
              }}
            >
              Churchwin.com (Retail)
            </h4>
            <div
              className="bento-big-num"
              style={{ fontSize: "1.5rem", color: "#ccc" }}
            >
              200
            </div>
            <div
              className="bento-sub"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Monthly Visits
            </div>
            <div style={{ height: "35px", width: "100%", marginTop: "0.5rem" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={TREND_RETAIL}>
                  <defs>
                    <linearGradient id="colorRetail" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fff" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <YAxis domain={[0, 'auto']} hide />
                  <Tooltip
                    contentStyle={{ backgroundColor: "rgba(0,0,0,0.8)", borderColor: "rgba(255,255,255,0.1)", borderRadius: "8px", backdropFilter: "blur(10px)", color: "#fff", padding: "8px" }}
                    itemStyle={{ color: "#fff", fontWeight: 700 }}
                    labelStyle={{ color: "#9ca3af", fontSize: "0.75rem", marginBottom: "4px" }}
                    cursor={{ stroke: "rgba(255,255,255,0.15)", strokeWidth: 1, strokeDasharray: "4 4" }}
                    formatter={(value) => [value.toLocaleString(), "Visits"]}
                    labelFormatter={(label) => `${label}`}
                  />
                  <Area type="monotone" dataKey="visits" stroke="rgba(255,255,255,0.6)" strokeWidth={2} fillOpacity={1} fill="url(#colorRetail)" isAnimationActive={true} animationDuration={1500} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div
              className="bento-sub"
              style={{ color: "rgba(255,255,255,0.6)", marginTop: "0.3rem" }}
            >
              100% Paid Traffic
            </div>
          </div>

          {/* Mid-Tier: FairTale Ghana — row 2, right */}
          <div
            className="bento-card"
            style={{
              gridColumn: "span 1",
              background: "rgba(255, 255, 255, 0.14)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <h4>FairTale Ghana</h4>
            <div className="bento-big-num">2,186</div>
            <div className="bento-sub">Monthly Visits</div>
            <div style={{ height: "35px", width: "100%", marginTop: "0.5rem" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={TREND_FAIRTALE}>
                  <defs>
                    <linearGradient id="colorFairtale" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f1c40f" stopOpacity={0.6} />
                      <stop offset="95%" stopColor="#f1c40f" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <YAxis domain={[0, 'auto']} hide />
                  <Tooltip
                    contentStyle={{ backgroundColor: "rgba(0,0,0,0.8)", borderColor: "rgba(255,255,255,0.1)", borderRadius: "8px", backdropFilter: "blur(10px)", color: "#fff", padding: "8px" }}
                    itemStyle={{ color: "#f1c40f", fontWeight: 700 }}
                    labelStyle={{ color: "#9ca3af", fontSize: "0.75rem", marginBottom: "4px" }}
                    cursor={{ stroke: "rgba(255,255,255,0.15)", strokeWidth: 1, strokeDasharray: "4 4" }}
                    formatter={(value) => [value.toLocaleString(), "Visits"]}
                    labelFormatter={(label) => `${label}`}
                  />
                  <Area type="monotone" dataKey="visits" stroke="#f1c40f" strokeWidth={2} fillOpacity={1} fill="url(#colorFairtale)" isAnimationActive={true} animationDuration={1500} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Insight Card - Cost of Inaction */}
          <div
            className="bento-card bento-span-4"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,0,0,0.15), rgba(255,68,0,0.08))",
              border: "1px solid rgba(255,68,68,0.4)",
              padding: "1.5rem",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s, background 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.02) translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 15px 40px rgba(255, 68, 68, 0.2)";
              e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(255,0,0,0.2), rgba(255,68,0,0.12))";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1) translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(255,0,0,0.15), rgba(255,68,0,0.08))";
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                gap: "2.5rem",
                flexWrap: "wrap",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "3rem",
                    color: "#ff4444",
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  $150k+
                </div>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#fff",
                    marginTop: "0.3rem",
                  }}
                >
                  Est. Lost Monthly Revenue
                </div>
              </div>
              <div
                style={{
                  width: "2px",
                  height: "60px",
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: "1px",
                }}
              />
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "2rem",
                    color: "#ffaa66",
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  The C.O.I.
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.8)",
                    marginTop: "0.3rem",
                  }}
                >
                  (Cost of Inaction)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
