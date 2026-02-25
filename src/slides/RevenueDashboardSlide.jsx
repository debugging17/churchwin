import { useRef } from "react";
import { useSlideAnimation } from "../hooks/useSlideAnimation";
import { useNestedScroll } from "../hooks/useNestedScroll";
import {
    AreaChart,
    Area,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";
import {
    LayoutDashboard,
    BarChart2,
    Users,
    Activity,
    Hash,
    GitCompare,
    Clock,
    Radio,
    Calendar,
    Download,
    Settings,
    Package,
    AlertTriangle,
    CalendarX,
    TrendingUp,
    BadgePercent,
    ShoppingBag,
    MoreVertical
} from "lucide-react";

/* ── Custom Payment Icons ── */
const MastercardIcon = () => (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="16" rx="2" fill="#1A1F36" />
        <circle cx="9" cy="8" r="4.5" fill="#EB001B" />
        <circle cx="15" cy="8" r="4.5" fill="#F79E1B" />
        <path d="M12 11.53c-1.12-1-1.78-2.43-1.78-4.03S10.88 4.47 12 3.47c1.12 1 1.78 2.43 1.78 4.03S13.12 10.53 12 11.53z" fill="#FF5F00" />
    </svg>
);

const VisaIcon = () => (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="16" rx="2" fill="#1A1F36" />
        <path d="M10.58 12.35L12.15 6h1.5l-1.57 6.35h-1.5zm8.56-6.1c-.24-.1-.85-.32-1.84-.32-1.63 0-2.78.89-2.8 2.14-.02 1.05.9 1.57 1.59 1.95.7.35 1.05.58 1.05.94 0 .52-.61.78-1.16.78-.66 0-1.03-.1-1.4-.29L14.35 13c.4.19 1.15.35 1.94.35 1.74 0 2.87-.85 2.89-2.17.02-.92-.56-1.54-1.51-2.02-.64-.32-1.03-.52-1.03-.85 0-.41.44-.73 1.1-.73.57 0 .97.13 1.25.26l.15 1.11zm-5.61 6.1H11.6l-1.07-5.02c-.1-.4-.68-.53-.88-.58l-1.57-.49.12-.66h3c.36 0 .68.25.76.66l.57 6.09zm-8.83 0h1.61L8.2 6H6.84c-.32 0-.6.18-.72.46L3.48 12.35h1.65l.33-.94h2.02l.19.94zm-1.87-2.31l1-2.82.52 2.82H5.53z" fill="#fff" />
    </svg>
);

const DiscoverIcon = () => (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="16" rx="2" fill="#1A1F36" />
        <path d="M4 6h3.5c1.5 0 2.5 1 2.5 2.5v0c0 1.5-1 2.5-2.5 2.5H4V6z" fill="#FF6000" />
        <circle cx="15" cy="8.5" r="2.5" fill="#E4E4E4" />
        <path d="M19.5 11l-2-5M21 11l-2-5" stroke="#FF6000" strokeWidth="1.5" />
    </svg>
);

/* ── Data Configs ── */
const NAV_MAIN = [
    { icon: <LayoutDashboard size={16} />, label: "Dashboard", active: true, badge: 5 },
    { icon: <BarChart2 size={16} />, label: "Content Performance" },
    { icon: <Users size={16} />, label: "Audience Insight" },
    { icon: <Activity size={16} />, label: "Engagement Metrics" },
    { icon: <Hash size={16} />, label: "Hashtag Performance", badge: 3 },
    { icon: <GitCompare size={16} />, label: "Competitor Analysis" },
    { icon: <Clock size={16} />, label: "Campaign Tracking" },
];

const NAV_SUPPORT = [
    { icon: <Radio size={16} />, label: "Real Time Monitoring" },
    { icon: <Calendar size={16} />, label: "Schedule & Calendar" },
    { icon: <Download size={16} />, label: "Report & Export" },
    { icon: <Settings size={16} />, label: "Settings" },
];

/* ── Top Row Cards Data ── */
const STAT_CARDS = [
    {
        title: "Shipped Orders",
        value: "42",
        change: "+18.2% than last week",
        icon: <Package size={20} color="#012787" />,
        up: true
    },
    {
        title: "Refunds/Returns",
        value: "8",
        change: "-8.7% than last week",
        icon: <AlertTriangle size={20} color="#f59e0b" />,
        up: false
    },
    {
        title: "Missed Deliveries",
        value: "27",
        change: "+4.3% than last week",
        icon: <CalendarX size={20} color="#ef4444" />,
        up: false
    }
];

/* ── Chart Data ── */
const SALES_DATA = [
    { month: "Jan", revenue: 4000, orders: 2400 },
    { month: "Feb", revenue: 3000, orders: 1398 },
    { month: "Mar", revenue: 2000, orders: 9800 },
    { month: "Apr", revenue: 2780, orders: 3908 },
    { month: "May", revenue: 1890, orders: 4800 },
    { month: "Jun", revenue: 2390, orders: 3800 },
    { month: "Jul", revenue: 3490, orders: 4300 },
];

const PRODUCT_DATA = [
    { name: "Shea Butter", value: 78, fill: "#ff6a00" },
    { name: "Neem Oil", value: 62, fill: "#012787" },
    { name: "Baobab Oil", value: 45, fill: "#0141b0" },
    { name: "Cocoa Butter", value: 38, fill: "#f59e0b" },
];

const GOAL_DATA = [
    { name: "Completed", value: 56, fill: "#012787" },
    { name: "Remaining", value: 44, fill: "#e2e8f0" }
];

/* ── Transactions ── */
const TRANSACTIONS = [
    { initials: "JA", name: "Jack Alfredo", amount: 316.0, status: "Paid", method: "Mastercard" },
    { initials: "MG", name: "Maria Gonzalez", amount: 253.4, status: "Pending", method: "Visa" },
    { initials: "JD", name: "John Doe", amount: 852.0, status: "Paid", method: "Discover" },
    { initials: "EC", name: "Emily Carter", amount: 889.0, status: "Pending", method: "Visa" },
    { initials: "DL", name: "David Lee", amount: 723.16, status: "Paid", method: "Mastercard" },
];

const statusColor = (s) => {
    if (s === "Paid") return "#27c93f";
    if (s === "Pending") return "#f59e0b";
    return "#ef4444";
};

const getMethodIcon = (method) => {
    switch (method) {
        case "Mastercard": return <MastercardIcon />;
        case "Visa": return <VisaIcon />;
        case "Discover": return <DiscoverIcon />;
        default: return <MastercardIcon />;
    }
};

export default function RevenueDashboardSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 14);

    // Apply the nested scroll hook to the main content area
    const contentRef = useRef(null);
    useNestedScroll(contentRef, null); // Pass ref to hook (swiperRef is optional globally)

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
                        <div className="rdash-sidebar__group-label">Pages</div>
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

                        <div className="rdash-sidebar__group-label" style={{ marginTop: "1rem" }}>
                            Supporting Features
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
                        <div className="rdash-breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <LayoutDashboard size={14} color="#94a3b8" />
                            <span style={{ color: "#94a3b8" }}>Home</span>
                            <span style={{ color: "#cbd5e1" }}>/</span>
                            <span style={{ color: "#94a3b8" }}>Dashboard</span>
                            <span style={{ color: "#cbd5e1" }}>/</span>
                            <span style={{ color: "#012787", fontWeight: 600 }}>Free</span>
                        </div>
                        <div className="rdash-topbar__right">
                            <div className="rdash-avatar">
                                <span>CK</span>
                            </div>
                        </div>
                    </header>

                    {/* Scrollable Content grid */}
                    <div
                        className="rdash-content swiper-no-mousewheel"
                        ref={contentRef}
                    >
                        {/* ── Top Row: 3 Stat Cards ── */}
                        <div className="rdash-grid-top">
                            {STAT_CARDS.map((s) => (
                                <div key={s.title} className="rdash-card">
                                    <div className="rdash-card__header">
                                        <div className="rdash-card__icon-box">{s.icon}</div>
                                        <div className="rdash-card__number">{s.value}</div>
                                    </div>
                                    <div className="rdash-card__title">{s.title}</div>
                                    <div className="rdash-card__change">{s.change}</div>
                                </div>
                            ))}
                        </div>

                        {/* ── Middle Row: Product vs Sales ── */}
                        <div className="rdash-grid-middle">
                            {/* Product Insight */}
                            <div className="rdash-card rdash-card--product">
                                <div className="rdash-card__topwrap">
                                    <div>
                                        <h3 className="rdash-h3">Product insight</h3>
                                        <p className="rdash-p">Published on 12 MAY 2025</p>
                                    </div>
                                    <div className="rdash-product-thumb">
                                        <img src="/assets/images/churchwin_logo_new.png" alt="product obj" style={{ height: '24px', objectFit: 'contain' }} />
                                    </div>
                                </div>

                                <div className="rdash-product-stats">
                                    <div className="rdash-pstat">
                                        <span>Product reached</span>
                                        <strong>21,153</strong>
                                    </div>
                                    <div className="rdash-pstat">
                                        <span>Order placed</span>
                                        <strong>2,123</strong>
                                    </div>
                                </div>

                                <div className="rdash-barchart-wrap">
                                    <ResponsiveContainer width="100%" height={120}>
                                        <BarChart data={PRODUCT_DATA} layout="vertical" margin={{ top: 0, right: 0, bottom: 0, left: -20 }}>
                                            <XAxis type="number" hide />
                                            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                                            <Tooltip cursor={{ fill: '#f8f9fb' }} />
                                            <Bar dataKey="value" barSize={8} radius={[0, 4, 4, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Sales Metrics & Goal */}
                            <div className="rdash-card rdash-card--sales">
                                <h3 className="rdash-h3" style={{ marginBottom: '1rem' }}>Sales metrics</h3>

                                {/* Area Chart Section */}
                                <div style={{ height: '260px', width: '100%' }}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={SALES_DATA} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                                            <defs>
                                                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#ff6a00" stopOpacity={0.8} />
                                                    <stop offset="95%" stopColor="#ff6a00" stopOpacity={0} />
                                                </linearGradient>
                                                <linearGradient id="colorOrd" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#012787" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#012787" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} dy={10} />
                                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} />
                                            <Tooltip />
                                            <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                                            <Area type="monotone" dataKey="revenue" stroke="#ff6a00" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                                            <Area type="monotone" dataKey="orders" stroke="#012787" strokeWidth={3} fillOpacity={1} fill="url(#colorOrd)" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* Mini metric cards below chart */}
                                <div className="rdash-mini-grid">
                                    <div className="rdash-mini-card">
                                        <TrendingUp size={16} color="#64748b" />
                                        <div>
                                            <span>Sales trend</span>
                                            <strong>$11,548</strong>
                                        </div>
                                    </div>
                                    <div className="rdash-mini-card">
                                        <BadgePercent size={16} color="#64748b" />
                                        <div>
                                            <span>Discount offers</span>
                                            <strong>$1,326</strong>
                                        </div>
                                    </div>
                                    <div className="rdash-mini-card">
                                        <ShoppingBag size={16} color="#64748b" />
                                        <div>
                                            <span>Net profit</span>
                                            <strong>$17,356</strong>
                                        </div>
                                    </div>
                                    <div className="rdash-mini-card">
                                        <Package size={16} color="#64748b" />
                                        <div>
                                            <span>Total orders</span>
                                            <strong>248</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── Bottom Row: Goal & Table ── */}
                        <div className="rdash-grid-bottom">
                            {/* Revenue Goal (Donut) */}
                            <div className="rdash-card rdash-card--goal">
                                <h3 className="rdash-h3">Revenue goal</h3>
                                <div className="rdash-pie-wrapper">
                                    <ResponsiveContainer width="100%" height={160}>
                                        <PieChart>
                                            <Pie
                                                data={GOAL_DATA}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={50}
                                                outerRadius={70}
                                                paddingAngle={2}
                                                dataKey="value"
                                                stroke="none"
                                            >
                                                {GOAL_DATA.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="rdash-pie-center">
                                        <strong>256.24</strong>
                                        <span>Total Profit</span>
                                    </div>
                                </div>
                                <div className="rdash-goal-label">
                                    <span>Plan completed</span>
                                    <strong>56%</strong>
                                </div>
                            </div>

                            {/* Total Earning */}
                            <div className="rdash-card rdash-card--earning">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3 className="rdash-h3">Total Earning</h3>
                                    <MoreVertical size={16} color="#94a3b8" />
                                </div>
                                <div className="rdash-earning-val">
                                    <strong>$24,650</strong>
                                    <span className="rdash-earning-badge">^ 10%</span>
                                </div>
                                <p className="rdash-p">Compare to last year ($84,325)</p>

                                <div className="rdash-sales-plan" style={{ marginTop: '2rem' }}>
                                    <h3 className="rdash-h3">Sales plan</h3>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem' }}>
                                        <strong style={{ fontSize: '2.5rem', color: '#012787', lineHeight: 1 }}>54%</strong>
                                        <p className="rdash-p" style={{ fontSize: '0.65rem' }}>
                                            <strong>Cohort analysis indicators</strong><br />
                                            Analyzes the behaviour of a group of users who joined a product/service at the same time. over a certain period.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── Transaction Table ── */}
                        <div className="rdash-card rdash-table-wrap">
                            <h3 className="rdash-h3" style={{ marginBottom: '1rem' }}>Recent Transactions</h3>
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
                                                    style={{ color: statusColor(t.status), background: `${statusColor(t.status)}15` }}
                                                >
                                                    {t.status}
                                                </span>
                                            </td>
                                            <td>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b' }}>
                                                    {getMethodIcon(t.method)}
                                                    {t.method}
                                                </div>
                                            </td>
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
