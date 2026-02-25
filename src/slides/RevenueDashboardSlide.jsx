import { useRef } from "react";
import { useSlideAnimation } from "../hooks/useSlideAnimation";

/* ── Stat card data ── */
const STATS = [
    {
        icon: "📦",
        value: "1,248",
        label: "Shipped Orders",
        change: "+18.2%",
        up: true,
    },
    {
        icon: "📈",
        value: "$84.3K",
        label: "Revenue Growth",
        change: "+24.6%",
        up: true,
    },
    {
        icon: "🎯",
        value: "36",
        label: "Active Campaigns",
        change: "+4.3%",
        up: true,
    },
];

/* ── Sidebar nav items ── */
const NAV_MAIN = [
    { icon: "📊", label: "Dashboard", active: true, badge: 5 },
    { icon: "📈", label: "Content Performance" },
    { icon: "👥", label: "Audience Insight" },
    { icon: "🎯", label: "Engagement Metrics" },
    { icon: "#️⃣", label: "Hashtag Performance", badge: 3 },
    { icon: "🔄", label: "Competitor Analysis" },
    { icon: "⏱️", label: "Campaign Tracking" },
];

const NAV_SUPPORT = [
    { icon: "📡", label: "Real Time Monitoring" },
    { icon: "📅", label: "Schedule & Calendar" },
    { icon: "📤", label: "Report & Export" },
    { icon: "⚙️", label: "Settings" },
];

/* ── Chart data (7-month sparkline) ── */
const CHART_MONTHS = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];
const CHART_REVENUE = [32, 45, 38, 52, 48, 65, 72]; // in thousands
const CHART_ORDERS = [18, 28, 22, 35, 30, 42, 55];

/* ── Product insights ── */
const PRODUCTS = [
    { name: "Shea Butter", pct: 78, color: "#ff6a00" },
    { name: "Neem Oil", pct: 62, color: "#012787" },
    { name: "Baobab Oil", pct: 45, color: "#0141b0" },
    { name: "Cocoa Butter", pct: 38, color: "#ff8c3a" },
];

/* ── Transactions ── */
const TRANSACTIONS = [
    { initials: "JA", name: "Jack Alfredo", amount: 316.0, status: "paid", method: "Mastercard" },
    { initials: "MG", name: "Maria Gonzalez", amount: 253.4, status: "pending", method: "Visa" },
    { initials: "JD", name: "John Doe", amount: 852.0, status: "paid", method: "Mastercard" },
    { initials: "EC", name: "Emily Carter", amount: 889.0, status: "pending", method: "Visa" },
    { initials: "DL", name: "David Lee", amount: 723.16, status: "paid", method: "Mastercard" },
    { initials: "SP", name: "Sophia Patel", amount: 612.0, status: "failed", method: "Visa" },
];

/* ── Helpers ── */
const statusColor = (s) => {
    if (s === "paid") return "#27c93f";
    if (s === "pending") return "#f59e0b";
    return "#ef4444";
};

/* Build SVG path from values (normalised to viewBox 0-100) */
function sparkPath(values, maxVal) {
    const stepX = 100 / (values.length - 1);
    return values
        .map((v, i) => {
            const x = i * stepX;
            const y = 100 - (v / maxVal) * 80 - 10; // 10-90 range
            return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
        })
        .join(" ");
}

function sparkArea(values, maxVal) {
    const line = sparkPath(values, maxVal);
    return `${line} L100,100 L0,100 Z`;
}

export default function RevenueDashboardSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 14);

    const maxChart = Math.max(...CHART_REVENUE, ...CHART_ORDERS);

    return (
        <section
            className="slide slide-light"
            id="slide-revenue-dashboard"
            ref={slideRef}
            style={{ padding: 0, overflow: "hidden", background: "#ffffff" }}
        >
            <div className="rdash">
                {/* ── Compact Sidebar ── */}
                <aside className="rdash-sidebar">
                    <div className="rdash-sidebar__logo">
                        <img
                            src="/assets/images/churchwin_logo_new.png"
                            alt="Churchwin"
                            className="rdash-sidebar__logo-img"
                        />
                    </div>

                    <nav className="rdash-sidebar__nav">
                        <div className="rdash-sidebar__group-label">Main</div>
                        {NAV_MAIN.map((item) => (
                            <div
                                key={item.label}
                                className={`rdash-nav-item ${item.active ? "rdash-nav-item--active" : ""}`}
                            >
                                <span className="rdash-nav-item__icon">{item.icon}</span>
                                <span className="rdash-nav-item__label">{item.label}</span>
                                {item.badge && (
                                    <span className="rdash-nav-item__badge">{item.badge}</span>
                                )}
                            </div>
                        ))}

                        <div className="rdash-sidebar__group-label" style={{ marginTop: "0.75rem" }}>
                            Support
                        </div>
                        {NAV_SUPPORT.map((item) => (
                            <div key={item.label} className="rdash-nav-item">
                                <span className="rdash-nav-item__icon">{item.icon}</span>
                                <span className="rdash-nav-item__label">{item.label}</span>
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* ── Main Area ── */}
                <div className="rdash-main">
                    {/* Top bar */}
                    <header className="rdash-topbar">
                        <div className="rdash-breadcrumb">
                            <span style={{ color: "#94a3b8" }}>Home</span>
                            <span style={{ color: "#cbd5e1" }}>/</span>
                            <span style={{ color: "#94a3b8" }}>Dashboard</span>
                            <span style={{ color: "#cbd5e1" }}>/</span>
                            <span style={{ color: "#012787", fontWeight: 600 }}>Revenue</span>
                        </div>
                        <div className="rdash-topbar__right">
                            <div className="rdash-avatar">
                                <span>CK</span>
                            </div>
                        </div>
                    </header>

                    {/* Content grid */}
                    <div className="rdash-content">
                        {/* Stat cards row */}
                        <div className="rdash-stats-row">
                            {STATS.map((s) => (
                                <div key={s.label} className="rdash-stat-card">
                                    <div className="rdash-stat-card__icon">{s.icon}</div>
                                    <div className="rdash-stat-card__body">
                                        <div className="rdash-stat-card__value">{s.value}</div>
                                        <div className="rdash-stat-card__label">{s.label}</div>
                                    </div>
                                    <div
                                        className="rdash-stat-card__change"
                                        style={{ color: s.up ? "#27c93f" : "#ef4444" }}
                                    >
                                        {s.change}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Middle row: chart + product insights */}
                        <div className="rdash-middle-row">
                            {/* Sales chart */}
                            <div className="rdash-chart-card">
                                <div className="rdash-chart-card__header">
                                    <div>
                                        <div className="rdash-chart-card__title">Sales Metrics</div>
                                        <div className="rdash-chart-card__subtitle">Revenue & orders overview</div>
                                    </div>
                                    <div className="rdash-chart-card__legend">
                                        <span className="rdash-legend-dot" style={{ background: "#ff6a00" }} /> Revenue
                                        <span className="rdash-legend-dot" style={{ background: "#012787", marginLeft: "0.75rem" }} /> Orders
                                    </div>
                                </div>
                                <div className="rdash-chart-area">
                                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="rdash-chart-svg">
                                        {/* Grid lines */}
                                        {[20, 40, 60, 80].map((y) => (
                                            <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#f1f5f9" strokeWidth="0.5" />
                                        ))}
                                        {/* Revenue area */}
                                        <path d={sparkArea(CHART_REVENUE, maxChart)} fill="rgba(255,106,0,0.1)" />
                                        <path d={sparkPath(CHART_REVENUE, maxChart)} fill="none" stroke="#ff6a00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        {/* Orders area */}
                                        <path d={sparkArea(CHART_ORDERS, maxChart)} fill="rgba(1,39,135,0.08)" />
                                        <path d={sparkPath(CHART_ORDERS, maxChart)} fill="none" stroke="#012787" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        {/* Dots on revenue */}
                                        {CHART_REVENUE.map((v, i) => {
                                            const x = (i * 100) / (CHART_REVENUE.length - 1);
                                            const y = 100 - (v / maxChart) * 80 - 10;
                                            return <circle key={i} cx={x} cy={y} r="1.5" fill="#ff6a00" />;
                                        })}
                                    </svg>
                                    <div className="rdash-chart-labels">
                                        {CHART_MONTHS.map((m) => (
                                            <span key={m}>{m}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Product insights */}
                            <div className="rdash-product-card">
                                <div className="rdash-product-card__title">Product Insights</div>
                                <div className="rdash-product-card__subtitle">Top performing products</div>
                                <div className="rdash-product-list">
                                    {PRODUCTS.map((p) => (
                                        <div key={p.name} className="rdash-product-row">
                                            <span className="rdash-product-row__name">{p.name}</span>
                                            <div className="rdash-product-row__bar-track">
                                                <div
                                                    className="rdash-product-row__bar-fill"
                                                    style={{ width: `${p.pct}%`, background: p.color }}
                                                />
                                            </div>
                                            <span className="rdash-product-row__pct" style={{ color: p.color }}>
                                                {p.pct}%
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Earning summary */}
                                <div className="rdash-earning-summary">
                                    <div className="rdash-earning-summary__label">Total Earning</div>
                                    <div className="rdash-earning-summary__value">$24,650</div>
                                    <div className="rdash-earning-summary__change">
                                        <span style={{ color: "#27c93f" }}>↑ 10%</span> vs last year
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Transaction table */}
                        <div className="rdash-table-card">
                            <div className="rdash-table-card__header">
                                <span className="rdash-table-card__title">Recent Transactions</span>
                            </div>
                            <table className="rdash-table">
                                <thead>
                                    <tr>
                                        <th>Customer</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Method</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TRANSACTIONS.map((t) => (
                                        <tr key={t.name}>
                                            <td>
                                                <div className="rdash-table__customer">
                                                    <div className="rdash-table__avatar">{t.initials}</div>
                                                    <span>{t.name}</span>
                                                </div>
                                            </td>
                                            <td className="rdash-table__amount">${t.amount.toFixed(2)}</td>
                                            <td>
                                                <span
                                                    className="rdash-table__status"
                                                    style={{
                                                        color: statusColor(t.status),
                                                        background: `${statusColor(t.status)}18`,
                                                    }}
                                                >
                                                    {t.status}
                                                </span>
                                            </td>
                                            <td className="rdash-table__method">{t.method}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
