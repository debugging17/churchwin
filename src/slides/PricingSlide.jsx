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
        bgColor: "#0d1117",
        headerBg: "#161b22",
        purpose: "Lead Intelligence & Prospecting",
        tier: "Basic",
        monthlyPrice: 49,
        annualMonthly: 39,
        currency: "USD",
        features: ["10,000 export credits/mo", "Unlimited email search", "CRM integrations", "Chrome extension", "CSV export"],
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
        theme: "dark",
    },
    {
        id: "mailchimp",
        name: "Mailchimp",
        url: "mailchimp.com",
        logo: "/assets/images/Sales Engine/mailchimp.png",
        logoFilter: "none",
        accentColor: "#ffe01b",
        bgColor: "#fff8e1",
        headerBg: "rgba(255,224,27,0.25)",
        purpose: "Email Marketing & Automation",
        tier: "Standard",
        monthlyPrice: 20,
        annualMonthly: 17,
        currency: "USD",
        features: ["500 contacts included", "6,000 emails/mo", "Automation journeys", "A/B testing", "Analytics reports"],
        breakdown: [
            { label: "Contacts", value: "500", icon: "📋" },
            { label: "Emails/mo", value: "6,000", icon: "✉️" },
            { label: "Automations", value: "Unlimited", icon: "⚡" },
        ],
        barData: [
            { label: "Contacts", pct: 30, color: "#ffe01b" },
            { label: "Emails", pct: 70, color: "#ff6a00" },
            { label: "Opens", pct: 42, color: "#27c93f" },
        ],
        theme: "light",
    },
    {
        id: "instantly",
        name: "Instantly.ai",
        url: "instantly.ai",
        logo: "/assets/images/Sales Engine/instantly.png",
        logoFilter: "none",
        accentColor: "#6366f1",
        bgColor: "#f8fafc",
        headerBg: "#eff0fe",
        purpose: "Cold Email Outreach at Scale",
        tier: "Growth",
        monthlyPrice: 37,
        annualMonthly: 30,
        currency: "USD",
        features: ["5,000 active leads", "Unlimited email accounts", "Unlimited campaigns", "Warmup included", "Analytics"],
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
        theme: "light",
    },
    {
        id: "linkedin",
        name: "LinkedIn",
        url: "linkedin.com",
        logo: "/assets/images/Sales Engine/linkedin.png",
        logoFilter: "none",
        accentColor: "#0a66c2",
        bgColor: "#f3f2ef",
        headerBg: "#e8e8e8",
        purpose: "Sales Navigator & B2B Outreach",
        tier: "Sales Navigator Core",
        monthlyPrice: 99,
        annualMonthly: 79,
        currency: "USD",
        features: ["Advanced lead & company search", "InMail messages (50/mo)", "Lead & account recommendations", "CRM sync", "Real-time alerts"],
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
        theme: "light",
    },
];

const TOTAL_MONTHLY = PLATFORMS.reduce((sum, p) => sum + p.monthlyPrice, 0);
const TOTAL_ANNUAL = PLATFORMS.reduce((sum, p) => sum + p.annualMonthly, 0);

export default function PricingSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 16); // slide index 16 (0-based)

    const [activeId, setActiveId] = useState("apollo");
    const active = PLATFORMS.find((p) => p.id === activeId);

    const isDark = active.theme === "dark";

    return (
        <section
            className="slide"
            id="slide-pricing"
            ref={slideRef}
            style={{
                background: "var(--bg-dark)",
                flexDirection: "column",
                padding: "0",
                overflow: "hidden",
            }}
        >
            {/* ── Header ── */}
            <div className="pricing-header">
                <span className="label" style={{ display: "block", marginBottom: "0.2rem" }}>
                    Investment Breakdown
                </span>
                <h1 className="headline-xl" style={{ margin: 0 }}>
                    How much will it <span className="highlight">Cost?</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", marginTop: "0.35rem" }}>
                    Monthly subscription costs for each platform in our sales stack
                </p>
            </div>

            {/* ── Main Panel ── */}
            <div className="pricing-body">
                {/* Left Sidebar */}
                <aside className="pricing-sidebar">
                    {PLATFORMS.map((p) => (
                        <button
                            key={p.id}
                            className={`pricing-tab ${activeId === p.id ? "pricing-tab--active" : ""}`}
                            onClick={() => setActiveId(p.id)}
                            style={{ "--tab-accent": p.accentColor }}
                        >
                            <div className="pricing-tab__logo-wrap">
                                <img
                                    src={p.logo}
                                    alt={p.name}
                                    className="pricing-tab__logo"
                                    onError={(e) => {
                                        e.target.style.display = "none";
                                        e.target.nextSibling.style.display = "flex";
                                    }}
                                />
                                <div className="pricing-tab__logo-fallback" style={{ display: "none" }}>
                                    {p.name[0]}
                                </div>
                            </div>
                            <div className="pricing-tab__text">
                                <span className="pricing-tab__name">{p.name}</span>
                                <span className="pricing-tab__url">{p.url}</span>
                            </div>
                            <div className="pricing-tab__price" style={{ color: activeId === p.id ? p.accentColor : "rgba(255,255,255,0.45)" }}>
                                ${p.monthlyPrice}
                                <span>/mo</span>
                            </div>
                        </button>
                    ))}

                    {/* Total row */}
                    <div className="pricing-total">
                        <span>Total Stack</span>
                        <div>
                            <div className="pricing-total__mo">${TOTAL_MONTHLY}<span>/mo</span></div>
                            <div className="pricing-total__ann">${TOTAL_ANNUAL}/mo billed annually</div>
                        </div>
                    </div>
                </aside>

                {/* Right Panel */}
                <div
                    key={activeId}
                    className="pricing-panel"
                    style={{ background: active.bgColor }}
                >
                    {/* Panel Header */}
                    <div className="pricing-panel__header" style={{ background: active.headerBg }}>
                        <div className="pricing-panel__header-left">
                            <img
                                src={active.logo}
                                alt={active.name}
                                className="pricing-panel__logo"
                                style={{ filter: active.logoFilter }}
                                onError={(e) => (e.target.style.display = "none")}
                            />
                            <div>
                                <div className="pricing-panel__platform-name" style={{ color: isDark ? "#fff" : "#111" }}>
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
                            <div className="pricing-panel__annual" style={{ color: isDark ? "rgba(255,255,255,0.5)" : "#888" }}>
                                ${active.annualMonthly}/mo annual plan
                            </div>
                        </div>
                    </div>

                    {/* Panel Body */}
                    <div className="pricing-panel__body">
                        {/* Purpose */}
                        <div className="pricing-panel__purpose" style={{ color: isDark ? "rgba(255,255,255,0.7)" : "#444" }}>
                            {active.purpose}
                        </div>

                        {/* Breakdown Cards */}
                        <div className="pricing-breakdown-row">
                            {active.breakdown.map((item) => (
                                <div
                                    key={item.label}
                                    className="pricing-kpi"
                                    style={{
                                        background: isDark ? "rgba(255,255,255,0.06)" : "#fff",
                                        border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "#e9ecef"}`,
                                    }}
                                >
                                    <span className="pricing-kpi__icon">{item.icon}</span>
                                    <div className="pricing-kpi__value" style={{ color: active.accentColor }}>
                                        {item.value}
                                    </div>
                                    <div className="pricing-kpi__label" style={{ color: isDark ? "rgba(255,255,255,0.5)" : "#888" }}>
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bar Chart */}
                        <div
                            className="pricing-bars"
                            style={{ background: isDark ? "rgba(255,255,255,0.04)" : "#fff", borderColor: isDark ? "rgba(255,255,255,0.08)" : "#e9ecef" }}
                        >
                            <div className="pricing-bars__title" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "#777" }}>
                                Usage Allocation
                            </div>
                            {active.barData.map((bar) => (
                                <div key={bar.label} className="pricing-bar-row">
                                    <span className="pricing-bar-row__label" style={{ color: isDark ? "rgba(255,255,255,0.7)" : "#555" }}>
                                        {bar.label}
                                    </span>
                                    <div className="pricing-bar-row__track">
                                        <div
                                            className="pricing-bar-row__fill"
                                            style={{ width: `${bar.pct}%`, background: bar.color }}
                                        />
                                    </div>
                                    <span className="pricing-bar-row__pct" style={{ color: bar.color }}>
                                        {bar.pct}%
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Features List */}
                        <ul className="pricing-features">
                            {active.features.map((f) => (
                                <li
                                    key={f}
                                    style={{ color: isDark ? "rgba(255,255,255,0.75)" : "#444" }}
                                >
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
