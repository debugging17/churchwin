import { useRef } from 'react';
import { useSlideAnimation } from '../hooks/useSlideAnimation';

export default function SalesEngineSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 9);

    return (
        <section className="slide slide-light" id="slide-5" ref={slideRef}>
            <div className="narrative-pane">
                <span className="label" style={{ marginBottom: '0.25rem', display: 'inline-block' }}>Enhancement 01: Sales</span>
                <h1 className="headline-xl" style={{ marginTop: 0 }}>
                    Stop Waiting. <br /><span className="highlight">Go Get Them.</span>
                </h1>
                <p className="body-xl">
                    Implementing a proven <strong>5-Step Sales Pipeline</strong> for absolute precision targeting.
                    <br /><br />
                    <strong>1. Automated Fulfillment:</strong><br />
                    Instant dispatch of a &quot;B2B Starter Package&quot; (Catalogs, COAs, Tiered Pricing) upon lead capture.
                    <br /><br />
                    <strong>2. High-Frequency Follow-Up:</strong><br />
                    Automating Day 2, Day 7, and Day 14 email sequences to push conversions by over 40%.
                    <br /><br />
                    <strong>3. Digital Incentives:</strong><br />
                    Lowering barriers to entry for bulk buyers via &quot;First-Order Incentives&quot; (5% off or free shipping discounts).
                </p>
            </div>

            <div className="visual-pane">
                <div style={{
                    display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', height: '100%', gap: '1.25rem', padding: '1rem', width: '100%', maxWidth: '600px', margin: '0 auto'
                }}>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', width: '100%' }}>

                        {/* 1. Apollo.io */}
                        <div style={{
                            background: '#0d1117', border: '1px solid #30363d', borderRadius: '12px',
                            overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column'
                        }}>
                            <div style={{ background: '#161b22', padding: '8px 12px', borderBottom: '1px solid #30363d', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ display: 'flex', gap: '4px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
                                </div>
                                <div style={{ fontSize: '0.65rem', color: '#8b949e', marginLeft: 'auto', fontWeight: 600 }}>apollo.io/search</div>
                            </div>
                            <div style={{ padding: '1.25rem', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>34,218</div>
                                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#c9d1d9', marginTop: '0.4rem' }}>VERIFIED LEADS: R&amp;D DIRECTORS</div>
                            </div>
                        </div>

                        {/* 2. Instantly.ai */}
                        <div style={{
                            background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px',
                            overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column'
                        }}>
                            <div style={{ background: '#f8fafc', padding: '8px 12px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ display: 'flex', gap: '4px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1' }} />
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1' }} />
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1' }} />
                                </div>
                                <div style={{ fontSize: '0.65rem', color: '#64748b', marginLeft: 'auto', fontWeight: 600 }}>app.instantly.ai</div>
                            </div>
                            <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.6rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: '#f1f5f9', padding: '8px 10px', borderRadius: '6px' }}>
                                    <span style={{ fontSize: '0.9rem' }}>📧</span>
                                    <div style={{ fontSize: '0.75rem', color: '#334155', fontWeight: 600 }}>Step 1: Starter Kit</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: '#e0f2fe', padding: '8px 10px', borderRadius: '6px' }}>
                                    <span style={{ fontSize: '0.9rem' }}>⏳</span>
                                    <div style={{ fontSize: '0.75rem', color: '#0369a1', fontWeight: 600 }}>Step 2: Follow-up (Day 7)</div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Mailchimp */}
                        <div style={{
                            background: '#ffe01b', border: '1px solid #e6c813', borderRadius: '12px',
                            overflow: 'hidden', boxShadow: '0 10px 30px rgba(255,224,27,0.2)', display: 'flex', flexDirection: 'column'
                        }}>
                            <div style={{ background: 'rgba(255,255,255,0.4)', padding: '8px 12px', borderBottom: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ display: 'flex', gap: '4px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(0,0,0,0.2)' }} />
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(0,0,0,0.2)' }} />
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(0,0,0,0.2)' }} />
                                </div>
                                <div style={{ fontSize: '0.65rem', color: '#333', marginLeft: 'auto', fontWeight: 700 }}>mailchimp.com</div>
                            </div>
                            <div style={{ padding: '1.25rem', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#000', marginBottom: '0.6rem', letterSpacing: '0.5px' }}>Q3 LEAD NURTURE</div>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                                    <div>
                                        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000', lineHeight: 1 }}>42%</div>
                                        <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'rgba(0,0,0,0.6)', marginTop: '0.2rem' }}>OPEN RATE</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000', lineHeight: 1 }}>12%</div>
                                        <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'rgba(0,0,0,0.6)', marginTop: '0.2rem' }}>CLICK RATE</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. LinkedIn */}
                        <div style={{
                            background: '#ffffff', border: '1px solid #e1e9ee', borderRadius: '12px',
                            overflow: 'hidden', boxShadow: '0 10px 30px rgba(10,102,194,0.1)', display: 'flex', flexDirection: 'column'
                        }}>
                            <div style={{ background: '#f3f2ef', padding: '8px 12px', borderBottom: '1px solid #e1e9ee', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ display: 'flex', gap: '4px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c8c6c4' }} />
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c8c6c4' }} />
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c8c6c4' }} />
                                </div>
                                <div style={{ fontSize: '0.65rem', color: '#0a66c2', marginLeft: 'auto', fontWeight: 700 }}>linkedin.com</div>
                            </div>
                            <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#0a66c2', color: '#fff', display: 'grid', placeItems: 'center', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>✓</div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000' }}>Prospect Connected</div>
                                <div style={{ fontSize: '0.65rem', color: '#666', marginTop: '2px' }}>VP Procurement @ L'Oréal</div>
                                <div style={{ marginTop: '0.6rem', background: '#e8f3ff', color: '#0a66c2', padding: '4px 10px', borderRadius: '12px', fontSize: '0.65rem', fontWeight: 700, display: 'inline-block' }}>
                                    +500 NETWORK GROWTH
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* The Leave-Behind CTA */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(255,106,0,0.1) 0%, rgba(255,106,0,0.05) 100%)',
                        border: '1px solid rgba(255,106,0,0.3)', borderRadius: '12px',
                        padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                    }}>
                        <div>
                            <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.2rem' }}>
                                B2B Growth Kit
                            </div>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>
                                Includes the exact 3-step converting Sequence.
                            </div>
                        </div>
                        <button style={{
                            background: 'var(--accent)', color: '#000', border: 'none',
                            padding: '0.7rem 1.2rem', borderRadius: '6px', fontWeight: 800,
                            cursor: 'pointer', transition: 'transform 0.2s', fontSize: '0.85rem',
                            boxShadow: '0 5px 15px rgba(255,106,0,0.3)'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            title="Download sample email sequences and target lists"
                        >
                            DOWNLOAD ASSETS ⬇
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
