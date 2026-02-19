import { useRef, useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useSlideAnimation } from '../hooks/useSlideAnimation';
import gsap from 'gsap';

const STRATEGY_DETAILS = [
    {
        num: '01',
        label: 'MONTH 1',
        title: 'Digital Foundation',
        subtitle: 'Fixing the plumbing',
        color: '#4facfe',
        tags: ['UX/UI Overhaul', 'SEO Strategy', 'CRM Setup'],
        icon: '🔧',
        strategies: [
            {
                icon: '🎨',
                name: 'UX/UI Overhaul',
                desc: 'Redesign the storefront with conversion-focused layouts, strong CTAs ("Request Sample"), and mobile-first responsive design.',
                kpi: 'Target: 3x increase in time-on-site'
            },
            {
                icon: '🔍',
                name: 'Technical SEO Audit',
                desc: 'Fix crawl errors, optimize meta tags, implement structured data (Product Schema), and build a keyword strategy around "bulk shea butter supplier".',
                kpi: 'Target: Page 1 for 5 key terms'
            },
            {
                icon: '📊',
                name: 'CRM & Analytics Setup',
                desc: 'Deploy HubSpot CRM for lead tracking. Install GA4 with conversion events, heatmaps (Hotjar), and Meta Pixel for retargeting.',
                kpi: 'Target: Full attribution pipeline'
            },
            {
                icon: '📝',
                name: 'Content Foundation',
                desc: 'Create 5 cornerstone blog posts targeting long-tail B2B queries. Build product pages with comparison tables and trust badges.',
                kpi: 'Target: 10 indexed pages in 30 days'
            }
        ]
    },
    {
        num: '02',
        label: 'MONTH 2',
        title: 'Automation Engine',
        subtitle: 'Turning on the faucet',
        color: '#ff6a00',
        tags: ['Apollo.io Mining', 'Instantly.ai', 'Asset Production'],
        icon: '⚡',
        strategies: [
            {
                icon: '🎯',
                name: 'Apollo.io Prospecting',
                desc: 'Mine 30,000+ verified contacts — R&D Directors, Formulators, and Procurement Managers at top cosmetic & personal care firms globally.',
                kpi: 'Target: 5,000 qualified leads'
            },
            {
                icon: '📧',
                name: 'Instantly.ai Cold Outreach',
                desc: 'Build 3 automated email sequences: Introduction → Value Proposition → Case Study → Meeting CTA. A/B test subject lines for 40%+ open rate.',
                kpi: 'Target: 2-3% reply rate'
            },
            {
                icon: '🎬',
                name: 'Asset Production',
                desc: 'Produce 3 hero videos: factory tour, cooperative women\'s story, and product sourcing journey. Create downloadable spec sheets and certifications PDF.',
                kpi: 'Target: 3 video assets + media kit'
            },
            {
                icon: '🤝',
                name: 'LinkedIn Authority',
                desc: 'Launch CEO thought-leadership campaign. Post 3x/week on ethical sourcing trends. Engage with target buyers\' content systematically.',
                kpi: 'Target: 500 new connections/month'
            }
        ]
    },
    {
        num: '03',
        label: 'MONTH 3',
        title: 'Scale & Amplify',
        subtitle: 'Full amplification',
        color: '#27c93f',
        tags: ['UGC Campaign', 'Retargeting', 'Wholesale Portal'],
        icon: '🚀',
        strategies: [
            {
                icon: '📱',
                name: 'UGC Campaign',
                desc: 'Partner with 10 micro-influencers in the clean beauty space. Collect and feature user-generated testimonials, unboxing videos, and reviews.',
                kpi: 'Target: 50+ authentic content pieces'
            },
            {
                icon: '🔄',
                name: 'Meta Pixel Retargeting',
                desc: 'Retarget site visitors and email openers with dynamic product ads. Build lookalike audiences from converters for cold prospecting at scale.',
                kpi: 'Target: 5x ROAS on ad spend'
            },
            {
                icon: '🏪',
                name: 'Wholesale Portal',
                desc: 'Launch a self-serve B2B portal with tiered pricing, MOQ calculator, and sample request form. Integrate with CRM for automated follow-up.',
                kpi: 'Target: 20 portal signups/month'
            },
            {
                icon: '📈',
                name: 'QR Traceability',
                desc: 'Add QR codes to bulk packaging linked to origin stories — cooperative name, harvest date, region. Premium buyers pay 15-20% more for traceability.',
                kpi: 'Target: All new shipments QR-enabled'
            }
        ]
    }
];

function StrategyModal({ month, onClose }) {
    const overlayRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        gsap.fromTo(modalRef.current,
            { scale: 0.9, opacity: 0, y: 30 },
            { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.5)', delay: 0.1 }
        );
    }, []);

    const handleClose = useCallback(() => {
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.2 });
        gsap.to(modalRef.current, {
            scale: 0.95, opacity: 0, y: 20, duration: 0.25,
            onComplete: onClose
        });
    }, [onClose]);

    // Close on escape key
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') handleClose(); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [handleClose]);

    return (
        <div
            ref={overlayRef}
            data-modal-overlay
            onClick={handleClose}
            style={{
                position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(8px)',
                display: 'grid', placeItems: 'center', zIndex: 10000, cursor: 'pointer'
            }}
        >
            <div
                ref={modalRef}
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: 'linear-gradient(145deg, #0d1117 0%, #161b22 100%)',
                    border: `1px solid ${month.color}44`,
                    borderRadius: '20px',
                    padding: '2rem 2.5rem',
                    width: '90vw', maxWidth: '700px', maxHeight: '85vh',
                    overflowY: 'auto', cursor: 'default',
                    boxShadow: `0 30px 80px rgba(0,0,0,0.6), 0 0 40px ${month.color}22`
                }}
            >
                {/* Modal Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div>
                        <div style={{
                            display: 'inline-block', background: month.color,
                            color: month.color === '#ff6a00' ? '#000' : '#fff',
                            padding: '4px 14px', borderRadius: '20px',
                            fontSize: '0.7rem', fontWeight: 800, letterSpacing: '1.5px', marginBottom: '0.75rem'
                        }}>{month.label}</div>
                        <h2 style={{
                            fontSize: '1.8rem', fontWeight: 800, color: '#fff',
                            display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0
                        }}>
                            <span>{month.icon}</span> {month.title}
                        </h2>
                        <p style={{ color: '#8b949e', fontStyle: 'italic', margin: '0.25rem 0 0', fontSize: '0.95rem' }}>
                            {month.subtitle}
                        </p>
                    </div>
                    <button
                        onClick={handleClose}
                        style={{
                            background: 'rgba(255,255,255,0.1)', border: 'none',
                            color: '#fff', width: '36px', height: '36px',
                            borderRadius: '50%', cursor: 'pointer', fontSize: '1.1rem',
                            display: 'grid', placeItems: 'center', flexShrink: 0,
                            transition: 'background 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
                        onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                    >✕</button>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: `linear-gradient(to right, ${month.color}66, transparent)`, marginBottom: '1.5rem' }} />

                {/* Strategy Cards Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                    {month.strategies.map((s, i) => (
                        <div key={i} style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            borderRadius: '14px', padding: '1.25rem',
                            transition: 'border-color 0.3s, transform 0.3s',
                            cursor: 'default'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.borderColor = `${month.color}55`;
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{ fontSize: '1.8rem', marginBottom: '0.6rem' }}>{s.icon}</div>
                            <h4 style={{
                                color: '#fff', fontSize: '0.95rem', fontWeight: 700,
                                marginBottom: '0.4rem', letterSpacing: '-0.01em'
                            }}>{s.name}</h4>
                            <p style={{
                                color: '#8b949e', fontSize: '0.8rem', lineHeight: 1.5,
                                marginBottom: '0.75rem'
                            }}>{s.desc}</p>
                            <div style={{
                                fontSize: '0.7rem', fontWeight: 600,
                                color: month.color, background: `${month.color}15`,
                                padding: '4px 10px', borderRadius: '6px',
                                display: 'inline-block', letterSpacing: '0.3px'
                            }}>{s.kpi}</div>
                        </div>
                    ))}
                </div>

                {/* Click hint at the bottom */}
                <div style={{
                    textAlign: 'center', marginTop: '1.5rem',
                    fontSize: '0.75rem', color: '#484f58'
                }}>
                    Press <kbd style={{
                        background: 'rgba(255,255,255,0.1)', padding: '2px 6px',
                        borderRadius: '4px', fontSize: '0.7rem'
                    }}>ESC</kbd> or click outside to close
                </div>
            </div>
        </div>
    );
}

export default function RoadmapSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 3);
    const [activeMonth, setActiveMonth] = useState(null);

    return (
        <section className="slide" id="slide-4" ref={slideRef}>
            <div className="narrative-pane" style={{ paddingTop: '3rem' }}>
                <span className="label">The Strategic Solution</span>
                <h1 className="headline-xl">
                    The Fix: <br /><span className="highlight">3-Month Roadmap</span>
                </h1>
                <p className="body-xl" style={{ marginBottom: '1.5rem' }}>
                    We don't need a year. We need <strong style={{ color: '#fff' }}>90 days</strong> of aggressive, focused execution.
                </p>

                <p className="body-xl" style={{ fontSize: 'clamp(0.85rem, 1.1vw, 1.1rem)' }}>
                    <strong style={{ color: '#fff' }}>Month 1: Foundation</strong><br />
                    Fixing the plumbing. UX Overhaul &amp; SEO.
                    <br /><br />
                    <strong style={{ color: '#fff' }}>Month 2: Automation</strong><br />
                    Turning on the faucet. Apollo.io &amp; Cold Outreach.
                    <br /><br />
                    <strong style={{ color: '#fff' }}>Month 3: Scale</strong><br />
                    Amplification. Retargeting (Meta Pixel) &amp; UGC.
                </p>
            </div>

            <div className="visual-pane" style={{ padding: '2rem 1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%', maxWidth: '500px' }}>
                    {STRATEGY_DETAILS.map((m, i) => (
                        <div
                            key={i}
                            data-interactive
                            onClick={(e) => { e.stopPropagation(); setActiveMonth(m); }}
                            style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderLeft: `4px solid ${m.color}`,
                                borderRadius: '12px',
                                padding: '1.25rem 1.5rem',
                                position: 'relative',
                                backdropFilter: 'blur(8px)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                                e.currentTarget.style.transform = 'translateX(4px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                                e.currentTarget.style.transform = 'translateX(0)';
                            }}
                        >
                            {/* Phase badge */}
                            <div style={{
                                position: 'absolute', top: '-10px', left: '12px',
                                background: m.color, color: i === 1 ? '#000' : '#fff',
                                padding: '3px 10px', borderRadius: '20px',
                                fontSize: '0.65rem', fontWeight: 800, letterSpacing: '1px'
                            }}>{m.label}</div>

                            {/* Card header */}
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: '0.6rem',
                                marginTop: '0.25rem', marginBottom: '0.75rem'
                            }}>
                                <span style={{ fontSize: '1.3rem' }}>{m.icon}</span>
                                <h3 style={{
                                    color: '#fff', fontSize: '1.1rem', fontWeight: 700,
                                    margin: 0, letterSpacing: '-0.01em'
                                }}>{m.title}</h3>
                            </div>

                            {/* Subtitle */}
                            <div style={{
                                fontSize: '0.8rem', color: 'var(--text-mute)',
                                marginBottom: '0.75rem', fontStyle: 'italic'
                            }}>{m.subtitle}</div>

                            {/* Tags */}
                            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                {m.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.7rem', fontWeight: 600,
                                        background: `${m.color}22`,
                                        color: m.color,
                                        padding: '4px 10px', borderRadius: '20px',
                                        border: `1px solid ${m.color}33`,
                                        letterSpacing: '0.3px'
                                    }}>{tag}</span>
                                ))}
                                {/* Click hint */}
                                <span style={{
                                    fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)',
                                    marginLeft: 'auto'
                                }}>Click to explore →</span>
                            </div>

                            {/* Connecting line */}
                            {i < 2 && (
                                <div style={{
                                    position: 'absolute', bottom: '-1.25rem', left: '28px',
                                    width: '2px', height: '1.25rem',
                                    background: `linear-gradient(to bottom, ${m.color}66, transparent)`,
                                    zIndex: 1
                                }} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* Strategy Detail Modal — portaled to body to avoid GSAP transform */}
            {activeMonth && createPortal(
                <StrategyModal month={activeMonth} onClose={() => setActiveMonth(null)} />,
                document.body
            )}
        </section>
    );
}
