import { useRef, useState } from "react";
import { useSlideAnimation } from "../hooks/useSlideAnimation";

const PLATFORMS = [
    {
        id: "apollo",
        name: "Apollo.io",
        url: "apollo.io",
        logo: "/assets/images/Sales Engine/apollo.png",
        logoFilter: "brightness(0) invert(1)",
        accentColor: "#ff6a00",
        panelBg: "#0d1117",
        panelHeaderBg: "#161b22",
        purpose: "Lead Intelligence & Prospecting",
        tier: "Basic Plan",
        monthlyPrice: 49,
        annualMonthly: 39,
        isDark: true,
        breakdown: [
            { label: "Contacts Exported", value: "10,000", icon: "👥" },
            { label: "Email Sequences", value: "Unlimited", icon: "📧" },
            { label: "CRM Sync", value: "Yes", icon: "🔗" },
        ],
        barData: [
            { label: "Leads", pct: 85, color: "#ff6a00" },
            { label: "Emails", pct: 100, color: "#27c93f" },
            { label: "Exports", pct: 60, color: "#0ea5e9" },
        ],
        features: ["10,000 export credits/mo", "Unlimited email search", "CRM integrations", "Chrome extension", "CSV export"],
    },
    {
        id: "mailchimp",
        name: "Mailchimp",
        url: "mailchimp.com",
        logo: "/assets/images/Sales Engine/mailchimp.png",
        logoFilter: "none",
        accentColor: "#c8a200",
        panelBg: "#fffdf0",
        panelHeaderBg: "#fff8d0",
        purpose: "Email Marketing & Automation",
        tier: "Standard Plan",
        monthlyPrice: 20,
        annualMonthly: 17,
        isDark: false,
        breakdown: [
            { label: "Contacts", value: "500", icon: "📋" },
            { label: "Emails/mo", value: "6,000", icon: "✉️" },
            { label: "Automations", value: "Unlimited", icon: "⚡" },
        ],
        barData: [
            { label: "Contacts", pct: 30, color: "#c8a200" },
            { label: "Emails", pct: 70, color: "#ff6a00" },
            { label: "Opens", pct: 42, color: "#27c93f" },
        ],
        features: ["500 contacts included", "6,000 emails/mo", "Automation journeys", "A/B testing", "Analytics reports"],
    },
    {
        id: "instantly",
        name: "Instantly.ai",
        url: "instantly.ai",
        logo: "/assets/images/Sales Engine/instantly.png",
        logoFilter: "none",
        accentColor: "#6366f1",
        panelBg: "#f8f9ff",
        panelHeaderBg: "#eef0ff",
        purpose: "Cold Email Outreach at Scale",
        tier: "Growth Plan",
        monthlyPrice: 37,
        annualMonthly: 30,
        isDark: false,
        breakdown: [
            { label: "Active Leads", value: "5,000", icon: "🎯" },
            { label: "Email Accounts", value: "Unlimited", icon: "📬" },
            { label: "Campaigns", value: "Unlimited", icon: "🚀" },
        ],
        barData: [
            { label: "Leads", pct: 75, color: "#6366f1" },
            { label: "Replies", pct: 22, color: "#27c93f" },
            { label: "Warmup", pct: 90, color: "#f59e0b" },
        ],
        features: ["5,000 active leads", "Unlimited email accounts", "Unlimited campaigns", "Warmup included", "Analytics"],
    },
    {
        id: "linkedin",
        name: "LinkedIn",
        url: "linkedin.com",
        logo: "/assets/images/Sales Engine/linkedin.png",
        logoFilter: "none",
        accentColor: "#0a66c2",
        panelBg: "#f3f7fb",
        panelHeaderBg: "#dceaf7",
        purpose: "Sales Navigator & B2B Outreach",
        tier: "Sales Navigator Core",
        monthlyPrice: 99,
        annualMonthly: 79,
        isDark: false,
        breakdown: [
            { label: "InMail Credits", value: "50/mo", icon: "💬" },
            { label: "Lead Lists", value: "Unlimited", icon: "📊" },
            { label: "CRM Sync", value: "Yes", icon: "🔗" },
        ],
        barData: [
            { label: "Reach", pct: 95, color: "#0a66c2" },
            { label: "InMail", pct: 50, color: "#f59e0b" },
            { label: "Alerts", pct: 80, color: "#27c93f" },
        ],
        features: ["Advanced lead & company search", "50 InMail credits/mo", "Lead & account alerts", "CRM integrations", "Real-time insights"],
    },
];

const TOTAL_MO = PLATFORMS.reduce((s, p) => s + p.monthlyPrice, 0);
const TOTAL_ANN = PLATFORMS.reduce((s, p) => s + p.annualMonthly, 0);

export default function PricingSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 13); // 0-based: slot 14

    const [activeId, setActiveId] = useState("apollo");
    const active = PLATFORMS.find((p) => p.id === activeId);

    return (
        <section
            className="slide slide-light"
            id="slide-pricing"
            ref={slideRef}
            style={{ flexDirection: "column", padding: 0, overflow: "hidden", background: "#ffffff" }}
        >
            {/* ── Header ── */}
            <div className="pricing-header">
                <span className="label" style={{ color: "#ff6a00", opacity: 1, display: "block", fontSize: "0.65rem", marginBottom: "0.35rem", marginLeft: "-0.1rem" }}>
                    Investment Breakdown
                </span>
                <h1 style={{ margin: 0, color: "#012787", fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 900, fontFamily: "'Montserrat', sans-serif", lineHeight: 1.1 }}>
                    How much will it Cost?
                </h1>
            </div>

            {/* ── Body: sidebar + panel ── */}
            <div className="pricing-body">

                {/* Left Sidebar */}
                <aside className="pricing-sidebar pricing-sidebar--light">
                    {PLATFORMS.map((p) => (
                        <button
                            key={p.id}
                            className={`pricing-tab pricing-tab--light ${activeId === p.id ? "pricing-tab--active-light" : ""}`}
                            onClick={() => setActiveId(p.id)}
                            style={{ "--tab-accent": p.accentColor }}
                        >
                            <div className="pricing-tab__logo-wrap pricing-tab__logo-wrap--light">
                                <img
                                    src={p.logo}
                                    alt={p.name}
                                    className="pricing-tab__logo"
                                    onError={(e) => { e.target.style.display = "none"; if (e.target.nextSibling) e.target.nextSibling.style.display = "flex"; }}
                                />
                                <div className="pricing-tab__logo-fallback pricing-tab__logo-fallback--light" style={{ display: "none" }}>
                                    {p.name[0]}
                                </div>
                            </div>
                            <div className="pricing-tab__text">
                                <span className="pricing-tab__name pricing-tab__name--light">{p.name}</span>
                                <span className="pricing-tab__url pricing-tab__url--light">{p.url}</span>
                            </div>
                            <div
                                className="pricing-tab__price"
                                style={{ color: activeId === p.id ? p.accentColor : "#bbb" }}
                            >
                                ${p.monthlyPrice}<span>/mo</span>
                            </div>
                        </button>
                    ))}

                    {/* Compact Total */}
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        padding: "1rem 1.25rem",
                        borderRadius: "16px 0 0 16px",
                        background: "linear-gradient(135deg, #012787, #0141b0)",
                        border: "2px solid #ff6a00",
                        color: "rgba(255,255,255,0.85)",
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        boxShadow: "0 4px 16px rgba(1,39,135,0.3)",
                        marginTop: "auto",
                    }}>
                        <span style={{ fontSize: "0.85rem", letterSpacing: "1px" }}>Total Stack</span>
                        <span style={{ color: "#ff6a00", fontSize: "1.85rem", fontWeight: 900, fontFamily: "'Montserrat', sans-serif" }}>
                            ${TOTAL_MO}<span style={{ fontWeight: 400, fontSize: "0.95rem", color: "rgba(255,255,255,0.6)" }}>/mo</span>
                        </span>
                    </div>
                </aside>

                {/* Right Panel */}
                <div
                    key={activeId}
                    className="pricing-panel"
                    style={{ background: active.panelBg }}
                >
                    {/* Panel header */}
                    <div className="pricing-panel__header" style={{ background: active.panelHeaderBg }}>
                        <div className="pricing-panel__header-left">
                            <img
                                src={active.logo}
                                alt={active.name}
                                className="pricing-panel__logo"
                                style={{ filter: active.logoFilter }}
                                onError={(e) => (e.target.style.display = "none")}
                            />
                            <div>
                                <div className="pricing-panel__platform-name" style={{ color: active.isDark ? "#fff" : "#111" }}>
                                    {active.name}
                                </div>
                                <div className="pricing-panel__platform-tier" style={{ color: active.accentColor }}>
                                    {active.tier}
                                </div>
                            </div>
                        </div>
                        <div className="pricing-panel__header-right">
                            <div className="pricing-panel__price-badge" style={{ background: active.accentColor }}>
                                ${active.monthlyPrice}<small>/mo</small>
                            </div>
                            <div className="pricing-panel__annual" style={{ color: active.isDark ? "rgba(255,255,255,0.5)" : "#888" }}>
                                ${active.annualMonthly}/mo on annual plan
                            </div>
                        </div>
                    </div>

                    {/* Panel body */}
                    <div className="pricing-panel__body">
                        <p className="pricing-panel__purpose" style={{ color: active.isDark ? "rgba(255,255,255,0.65)" : "#555" }}>
                            {active.purpose}
                        </p>

                        {/* KPI cards */}
                        <div className="pricing-breakdown-row">
                            {active.breakdown.map((item) => (
                                <div
                                    key={item.label}
                                    className="pricing-kpi"
                                    style={{
                                        background: active.isDark ? "rgba(255,255,255,0.06)" : "#fff",
                                        border: `1.5px solid ${active.isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"}`,
                                        boxShadow: active.isDark ? "0 4px 12px rgba(0,0,0,0.3)" : "0 4px 16px rgba(0,0,0,0.08)",
                                    }}
                                >
                                    <span className="pricing-kpi__icon">{item.icon}</span>
                                    <div className="pricing-kpi__value" style={{ color: active.accentColor }}>{item.value}</div>
                                    <div className="pricing-kpi__label" style={{ color: active.isDark ? "rgba(255,255,255,0.45)" : "#888" }}>
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Usage bars */}
                        <div
                            className="pricing-bars"
                            style={{
                                background: active.isDark ? "rgba(255,255,255,0.04)" : "#fff",
                                border: `1.5px solid ${active.isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"}`,
                                boxShadow: active.isDark ? "0 4px 12px rgba(0,0,0,0.3)" : "0 4px 16px rgba(0,0,0,0.08)",
                            }}
                        >
                            <div className="pricing-bars__title" style={{ color: active.isDark ? "rgba(255,255,255,0.5)" : "#999" }}>
                                Usage Allocation
                            </div>
                            {active.barData.map((bar) => (
                                <div key={bar.label} className="pricing-bar-row">
                                    <span className="pricing-bar-row__label" style={{ color: active.isDark ? "rgba(255,255,255,0.7)" : "#555" }}>
                                        {bar.label}
                                    </span>
                                    <div className="pricing-bar-row__track" style={{ background: active.isDark ? "rgba(255,255,255,0.08)" : "#f0f0f0" }}>
                                        <div className="pricing-bar-row__fill" style={{ width: `${bar.pct}%`, background: bar.color }} />
                                    </div>
                                    <span className="pricing-bar-row__pct" style={{ color: bar.color }}>{bar.pct}%</span>
                                </div>
                            ))}
                        </div>

                        {/* Features */}
                        <ul className="pricing-features">
                            {active.features.map((f) => (
                                <li key={f} style={{ color: active.isDark ? "rgba(255,255,255,0.75)" : "#444" }}>
                                    <span style={{ color: active.accentColor }}>✓</span> {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}
