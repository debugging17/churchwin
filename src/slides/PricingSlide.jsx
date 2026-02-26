import { useRef, useState } from "react";
import { useSlideAnimation } from "../hooks/useSlideAnimation";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Users, Mail, Link, ClipboardList, Send, Zap, Target, Inbox, Rocket, MessageCircle, BarChart2 } from "lucide-react";

const PLATFORMS = [
    {
        id: "apollo",
        name: "Apollo.io",
        url: "apollo.io",
        logo: "/assets/images/Sales Engine/apollo.png",
        logoFilter: "brightness(0) invert(1)",
        accentColor: "#ff6a00",
        panelBg: "#ffffff",
        panelHeaderBg: "#fff5f0",
        purpose: "Lead Intelligence & Prospecting",
        tier: "Basic Plan",
        monthlyPrice: 49,
        annualMonthly: 39,
        isDark: false,
        breakdown: [
            { label: "Contacts Exported", value: "10,000", icon: <Users size={20} /> },
            { label: "Email Sequences", value: "Unlimited", icon: <Mail size={20} /> },
            { label: "CRM Sync", value: "Yes", icon: <Link size={20} /> },
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
            { label: "Contacts", value: "500", icon: <ClipboardList size={20} /> },
            { label: "Emails/mo", value: "6,000", icon: <Send size={20} /> },
            { label: "Automations", value: "Unlimited", icon: <Zap size={20} /> },
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
            { label: "Active Leads", value: "5,000", icon: <Target size={20} /> },
            { label: "Email Accounts", value: "Unlimited", icon: <Inbox size={20} /> },
            { label: "Campaigns", value: "Unlimited", icon: <Rocket size={20} /> },
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
            { label: "InMail Credits", value: "50/mo", icon: <MessageCircle size={20} /> },
            { label: "Lead Lists", value: "Unlimited", icon: <BarChart2 size={20} /> },
            { label: "CRM Sync", value: "Yes", icon: <Link size={20} /> },
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
                            style={{
                                "--tab-accent": p.accentColor,
                                background: activeId === p.id ? `${p.accentColor}0A` : "transparent",
                                borderLeft: activeId === p.id ? `4px solid ${p.accentColor}` : "4px solid transparent",
                                paddingLeft: activeId === p.id ? "1.25rem" : "1.5rem",
                                transition: "all 0.3s ease"
                            }}
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

                    {/* Total Stack Card */}
                    <div className="pricing-total-stack">
                        <div className="pricing-total-stack__inner">
                            <div className="pricing-total-stack__label">Total Stack</div>
                            <div className="pricing-total-stack__price">
                                <span className="pricing-total-stack__dollar">$</span>
                                <span className="pricing-total-stack__amount">{TOTAL_MO}</span>
                                <span className="pricing-total-stack__period">/mo</span>
                            </div>

                        </div>
                    </div>
                </aside>

                {/* Right Panel */}
                <div
                    key={activeId}
                    className="pricing-panel"
                    style={{
                        background: active.panelBg,
                        border: "1px solid rgba(0,0,0,0.06)",
                        boxShadow: "0 24px 48px rgba(0, 0, 0, 0.08)",
                        borderRadius: "16px",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                    }}
                >
                    {/* Panel header (macOS style) */}
                    <div style={{
                        padding: "1rem 1.5rem",
                        background: active.panelHeaderBg,
                        display: "flex",
                        alignItems: "center",
                        borderBottom: "1px solid rgba(0,0,0,0.05)"
                    }}>
                        <div style={{ display: "flex", gap: "6px", width: "120px" }}>
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56" }} />
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f" }} />
                        </div>
                        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                            <img
                                src={active.logo}
                                alt={active.name}
                                style={{ height: "24px", filter: active.logoFilter, objectFit: "contain" }}
                                onError={(e) => (e.target.style.display = "none")}
                            />
                        </div>
                        <div style={{ width: "120px", textAlign: "right", fontSize: "0.85rem", color: "#94a3b8", fontWeight: 600 }}>
                            {active.url}
                        </div>
                    </div>

                    {/* Panel body */}
                    <div className="pricing-panel__body" style={{ padding: "2rem", display: "flex", flexDirection: "column", flex: 1 }}>

                        {/* Title & Price Row */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "1rem" }}>
                            <div>
                                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "0.4rem" }}>
                                    {active.purpose}
                                </div>
                                <div style={{ fontSize: "1.85rem", fontWeight: 800, color: "#0f172a", lineHeight: 1 }}>
                                    {active.tier}
                                </div>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: active.accentColor, lineHeight: 1 }}>
                                    ${active.monthlyPrice}
                                </div>
                                <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#94a3b8", marginTop: "0.5rem" }}>
                                    ${active.annualMonthly}/mo annually
                                </div>
                            </div>
                        </div>

                        {/* Usage Bars / Chart */}
                        <div style={{ width: "100%", height: "120px", marginBottom: "2rem", marginTop: "1rem" }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    layout="vertical"
                                    data={active.barData}
                                    margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
                                    barSize={10}
                                >
                                    <XAxis type="number" hide domain={[0, 100]} />
                                    <YAxis
                                        dataKey="label"
                                        type="category"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748b', fontSize: 13, fontWeight: 700 }}
                                        width={75}
                                    />
                                    <Tooltip
                                        cursor={{ fill: 'rgba(0,0,0,0.03)' }}
                                        contentStyle={{
                                            borderRadius: "8px",
                                            border: "none",
                                            boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                                            background: "#fff",
                                            color: "#111",
                                            fontWeight: 600,
                                            fontSize: "0.85rem"
                                        }}
                                        formatter={(value) => [`${value}% allocated`, 'Usage']}
                                    />
                                    <Bar dataKey="pct" radius={[0, 4, 4, 0]} background={{ fill: '#f1f5f9', radius: [0, 4, 4, 0] }}>
                                        {active.barData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Breakdown Pills */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
                            {active.breakdown.map((item, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "1rem 1.5rem",
                                        background: `${active.accentColor}08`,
                                        borderRadius: "14px",
                                        border: `1px solid ${active.accentColor}1A`
                                    }}
                                >
                                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "#334155", flex: 1 }}>
                                        {item.label}
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#10b981", fontWeight: 700, flex: 1, justifyContent: "center" }}>
                                        {item.icon}
                                        <span style={{ fontSize: "0.95rem" }}>Included</span>
                                    </div>
                                    <div style={{ fontSize: "1.1rem", fontWeight: 800, color: active.accentColor, flex: 1, textAlign: "right" }}>
                                        {item.value}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Features List */}
                        <ul style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.85rem",
                            listStyle: "none",
                            margin: 0,
                            padding: 0,
                            marginTop: "auto"
                        }}>
                            {active.features.map((f, idx) => (
                                <li key={idx} style={{ color: "#64748b", fontSize: "0.85rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "6px" }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={active.accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}
