import { memo, useRef } from "react";

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
        <g transform="translate(4.8, 0.8) scale(0.6)">
            <path d="M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 01.894.764l.817 4.338 2.018-5.102zm8.033 5.049c.008-1.979-2.736-2.088-2.717-2.972.006-.269.262-.555.822-.628a3.66 3.66 0 011.913.336l.34-1.59a5.207 5.207 0 00-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479-.012 1.079.963 1.68 1.698 2.04.756.367 1.01.603 1.006.931-.005.504-.602.725-1.16.734-.975.015-1.54-.263-1.992-.473l-.351 1.642c.453.208 1.289.39 2.156.398 2.037 0 3.37-1.006 3.377-2.564m5.061 2.447H24l-1.565-7.496h-1.656a.883.883 0 00-.826.55l-2.909 6.946h2.036l.405-1.12h2.488zm-2.163-2.656l1.02-2.815.588 2.815zm-8.16-4.84l-1.603 7.496H8.34l1.605-7.496z" fill="#fff" />
        </g>
    </svg>
);

const DiscoverIcon = () => (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="16" rx="2" fill="#1A1F36" />
        <g transform="translate(1.2, -2.8) scale(0.9)">
            <path d="M14.58 12a2.023 2.023 0 1 1-2.025-2.023h.002c1.118 0 2.023.906 2.023 2.023zm-5.2-2.001c-1.124 0-2.025.884-2.025 1.99 0 1.118.878 1.984 2.007 1.984.319 0 .593-.063.93-.221v-.873c-.296.297-.559.416-.895.416-.747 0-1.277-.542-1.277-1.312 0-.73.547-1.306 1.243-1.306.354 0 .622.126.93.428v-.873a1.898 1.898 0 0 0-.913-.233zm-3.352 1.545c-.445-.165-.576-.273-.576-.479 0-.239.233-.422.553-.422.222 0 .405.091.598.308l.388-.508a1.665 1.665 0 0 0-1.117-.422c-.673 0-1.186.467-1.186 1.089 0 .524.239.792.936 1.043.291.103.438.171.513.217a.456.456 0 0 1 .222.394c0 .308-.245.536-.576.536-.354 0-.639-.177-.809-.507l-.479.461c.342.502.752.724 1.317.724.771 0 1.311-.513 1.311-1.249-.002-.603-.252-.876-1.095-1.185zM24 10.3a.29.29 0 0 1-.288.291.29.29 0 0 1-.291-.291v-.003A.29.29 0 1 1 24 10.3zm-.059.001a.235.235 0 0 0-.231-.239.234.234 0 0 0-.232.239c0 .132.104.239.232.239a.235.235 0 0 0 .231-.239zM3.472 13.887h.742v-3.803h-.742v3.803zm12.702-1.248l-1.014-2.554h-.81l1.614 3.9h.399l1.643-3.9h-.804l-1.028 2.554zm2.166 1.248h2.104v-.644h-1.362v-1.027h1.312v-.644h-1.312v-.844h1.362v-.644H18.34v3.803zm5.409-3.557l.11.138h-.097l-.094-.13v.13h-.08v-.334h.107c.081 0 .126.036.126.103.001.046-.025.08-.072.093zm-.006-.092c0-.029-.021-.043-.06-.043h-.014v.087h.014c.039 0 .06-.014.06-.044zm-1.228 2.047l1.197 1.602H22.8l-1.027-1.528h-.097v1.528h-.741v-3.803h1.1c.855 0 1.346.411 1.346 1.123 0 .583-.308.965-.866 1.078zm.103-1.038c0-.37-.251-.563-.713-.563h-.228v1.152h.217c.473-.001.724-.207.724-.589zm-19.487.742a1.91 1.91 0 0 1-.69 1.46c-.365.303-.781.439-1.357.439H.001v-3.803H1.09c1.202 0 2.041.781 2.041 1.904zm-.764-.006c0-.364-.154-.718-.411-.947-.245-.222-.536-.308-1.015-.308H.742v2.515h.199c.479 0 .782-.092 1.015-.302.256-.228.411-.593.411-.958z" fill="#fff" />
        </g>
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

const RevenueDashboardSlide = memo(function RevenueDashboardSlide() {

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
                        <div className="rdash-sidebar__top-group">
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
                        </div>

                        <div className="rdash-sidebar__bottom-group">
                            <div className="rdash-sidebar__group-label">Supporting Features</div>
                            {NAV_SUPPORT.map((item) => (
                                <div key={item.label} className="rdash-nav-item">
                                    <span className="rdash-nav-item__icon">{item.icon}</span>
                                    <span className="rdash-nav-item__label">{item.label}</span>
                                </div>
                            ))}
                        </div>
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
                            <span style={{ color: "#012787", fontWeight: 600 }}>Dashboard</span>
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
                        {/* ── Top Row: Goal & Earning ── */}
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
                                    <strong>$55,458</strong>
                                    <span className="rdash-earning-badge">^ 60%</span>
                                </div>
                                <p className="rdash-p">Compare to last year ($34,661)</p>

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

                        {/* ── Second Row: 3 Stat Cards ── */}
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
                                        <BarChart data={PRODUCT_DATA} layout="vertical" margin={{ top: 0, right: 0, bottom: 0, left: 15 }}>
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
});

export default RevenueDashboardSlide;
