import { useRef, useState } from 'react';
import { useSlideAnimation } from '../hooks/useSlideAnimation';

const VERTICALS = [
    {
        tab: 'Cosmetics',
        heading: 'Contract Manufacturing',
        tier: 'Tier 1 Access (1000kg+ MOQ)',
        badge: 'VERIFIED DISTRIBUTOR',
        badgeBg: '#e0f2fe',
        badgeColor: '#0369a1',
        features: [
            { icon: '🧮', name: 'Dynamic MOQ Calculator', desc: 'Live LTL Freight Estimates' },
            { icon: '🔑', name: 'Gated Pricing Tiers', desc: 'Volume-based auto-discounting' },
        ]
    },
    {
        tab: 'Nutraceuticals',
        heading: 'Health & Wellness Supply',
        tier: 'GMP Certified (500kg+ MOQ)',
        badge: 'CERTIFIED SUPPLIER',
        badgeBg: '#dcfce7',
        badgeColor: '#15803d',
        features: [
            { icon: '🧪', name: 'COA & Lab Results Portal', desc: 'Batch-level certificates of analysis' },
            { icon: '📦', name: 'Custom Formulation Builder', desc: 'Blend ratios & encapsulation options' },
        ]
    },
    {
        tab: 'Luxury Spas',
        heading: 'Premium Spa Ingredients',
        tier: 'Artisan Grade (200kg+ MOQ)',
        badge: 'EXCLUSIVE PARTNER',
        badgeBg: '#fef3c7',
        badgeColor: '#92400e',
        features: [
            { icon: '🌿', name: 'Origin Story Traceability', desc: 'QR-linked cooperative & harvest data' },
            { icon: '💎', name: 'White-Label Packaging', desc: 'Custom branding & private label options' },
        ]
    }
];

export default function NarrativeSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 11);
    const [activeTab, setActiveTab] = useState(0);

    const v = VERTICALS[activeTab];

    return (
        <section className="slide" id="slide-6" ref={slideRef}>
            <div className="narrative-pane">
                <span className="label">Strategic Expansion</span>
                <h1 className="headline-xl">
                    Multi-Industry <br /><span className="highlight">Architecture</span>
                </h1>
                <p className="body-xl" style={{ fontSize: '1.1rem' }}>
                    Building a scalable B2B portal ready for new verticals (Cosmetics, Nutraceuticals) and ingredients (Baobab, Moringa).
                    <br /><br />
                    <strong>Automated Workflows:</strong><br />
                    Self-serve MOQ calculators, gated pricing tiers, and automated sample requests.
                    <br /><br />
                    I build the <strong>Turnkey Engine</strong> so your sales team can scale globally without friction.
                </p>
            </div>

            <div className="visual-pane">
                {/* B2B Portal UI Mockup */}
                <div style={{
                    width: '100%', background: '#fff', borderRadius: '12px',
                    display: 'flex', flexDirection: 'column',
                    position: 'relative', overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}>
                    {/* Navigation Tabs */}
                    <div style={{
                        background: '#f8f9fa', padding: '1.2rem 1.5rem 0 1.5rem',
                        borderBottom: '1px solid #ddd', display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 700
                    }}>
                        {VERTICALS.map((vt, i) => (
                            <div
                                key={i}
                                data-interactive
                                onClick={(e) => { e.stopPropagation(); setActiveTab(i); }}
                                style={{
                                    color: activeTab === i ? 'var(--accent)' : '#999',
                                    borderBottom: activeTab === i ? '3px solid var(--accent)' : '3px solid transparent',
                                    paddingBottom: '0.8rem',
                                    cursor: 'pointer',
                                    transition: 'color 0.2s, border-color 0.2s',
                                    userSelect: 'none'
                                }}
                                onMouseOver={(e) => { if (activeTab !== i) e.currentTarget.style.color = '#666'; }}
                                onMouseOut={(e) => { if (activeTab !== i) e.currentTarget.style.color = '#999'; }}
                            >
                                {vt.tab}
                            </div>
                        ))}
                    </div>

                    {/* Portal Content */}
                    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ margin: 0, color: '#333', fontSize: '1.3rem' }}>{v.heading}</h3>
                                <div style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.2rem' }}>{v.tier}</div>
                            </div>
                            <div style={{ background: v.badgeBg, color: v.badgeColor, padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>{v.badge}</div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                            {v.features.map((f, fi) => (
                                <div key={fi} style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1rem', background: '#fafafa' }}>
                                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{f.icon}</div>
                                    <div style={{ fontWeight: 700, color: '#333', fontSize: '0.9rem' }}>{f.name}</div>
                                    <div style={{ color: '#777', fontSize: '0.75rem', marginTop: '0.3rem' }}>{f.desc}</div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
