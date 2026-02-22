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
                    justifyContent: 'center', height: '100%', gap: '1.5rem', padding: '1rem', width: '100%', maxWidth: '800px', margin: '0 auto'
                }}>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', width: '100%', height: '100%' }}>

                        {/* 1. Apollo.io */}
                        <div style={{
                            background: '#0d1117', border: '1px solid #30363d', borderRadius: '16px',
                            overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column'
                        }}>
                            <div style={{ background: '#161b22', padding: '12px 16px', borderBottom: '1px solid #30363d', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ display: 'flex', gap: '6px' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                                </div>
                                <img src="https://logo.clearbit.com/apollo.io" alt="Apollo.io" style={{ height: '16px', marginLeft: '12px', borderRadius: '2px' }} onError={(e) => e.target.style.display = 'none'} />
                                <div style={{ fontSize: '0.8rem', color: '#8b949e', marginLeft: 'auto', fontWeight: 600 }}>apollo.io/search</div>
                            </div>
                            <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', padding: '0', minHeight: '220px' }}>
                                <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3, position: 'absolute' }}>
                                    <source src="/assets/videos/vid-6.mp4" type="video/mp4" />
                                </video>
                                <div style={{ position: 'relative', zIndex: 1, padding: '2rem', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{ background: 'rgba(0,0,0,0.6)', padding: '1.5rem', borderRadius: '12px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>34,218</div>
                                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#c9d1d9', marginTop: '0.6rem' }}>VERIFIED B2B LEADS</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Instantly.ai */}
                        <div style={{
                            background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px',
                            overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column'
                        }}>
                            <div style={{ background: '#f8fafc', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ display: 'flex', gap: '6px' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#cbd5e1' }} />
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#cbd5e1' }} />
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#cbd5e1' }} />
                                </div>
                                <img src="https://logo.clearbit.com/instantly.ai" alt="Instantly.ai" style={{ height: '16px', marginLeft: '12px', borderRadius: '2px' }} onError={(e) => e.target.style.display = 'none'} />
                                <div style={{ fontSize: '0.8rem', color: '#64748b', marginLeft: 'auto', fontWeight: 600 }}>app.instantly.ai</div>
                            </div>
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem', background: '#f8fafc', minHeight: '220px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#ffffff', padding: '16px 20px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                                    <div style={{ width: '32px', height: '32px', background: '#e0f2fe', color: '#0369a1', borderRadius: '8px', display: 'grid', placeItems: 'center', fontSize: '1.2rem' }}>📧</div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 700 }}>Step 1: Introduction</div>
                                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>Sent immediately on import</div>
                                    </div>
                                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#10b981' }}>Active</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#ffffff', padding: '16px 20px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                                    <div style={{ width: '32px', height: '32px', background: '#fef3c7', color: '#b45309', borderRadius: '8px', display: 'grid', placeItems: 'center', fontSize: '1.2rem' }}>⏳</div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 700 }}>Step 2: Follow-up</div>
                                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>Wait 7 days</div>
                                    </div>
                                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f59e0b' }}>Queued</div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Mailchimp */}
                        <div style={{
                            background: '#ffe01b', border: '1px solid #e6c813', borderRadius: '16px',
                            overflow: 'hidden', boxShadow: '0 20px 40px rgba(255,224,27,0.2)', display: 'flex', flexDirection: 'column'
                        }}>
                            <div style={{ background: 'rgba(255,255,255,0.4)', padding: '12px 16px', borderBottom: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ display: 'flex', gap: '6px' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(0,0,0,0.2)' }} />
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(0,0,0,0.2)' }} />
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(0,0,0,0.2)' }} />
                                </div>
                                <img src="https://logo.clearbit.com/mailchimp.com" alt="Mailchimp" style={{ height: '16px', marginLeft: '12px', borderRadius: '2px' }} onError={(e) => e.target.style.display = 'none'} />
                                <div style={{ fontSize: '0.8rem', color: '#333', marginLeft: 'auto', fontWeight: 700 }}>mailchimp.com</div>
                            </div>
                            <div style={{ padding: '2rem', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '220px' }}>
                                <div style={{ background: '#ffffff', padding: '1.5rem 2.5rem', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', width: '100%' }}>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000', marginBottom: '1rem', letterSpacing: '0.5px' }}>Q3 LEAD NURTURE CAMPAIGN</div>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem' }}>
                                        <div>
                                            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#000', lineHeight: 1 }}>42%</div>
                                            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#666', marginTop: '0.4rem' }}>OPEN RATE</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#000', lineHeight: 1 }}>12%</div>
                                            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#666', marginTop: '0.4rem' }}>CLICK RATE</div>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '1.5rem', width: '100%', height: '8px', background: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
                                        <div style={{ width: '42%', height: '100%', background: '#000' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. LinkedIn */}
                        <div style={{
                            background: '#ffffff', border: '1px solid #e1e9ee', borderRadius: '16px',
                            overflow: 'hidden', boxShadow: '0 20px 40px rgba(10,102,194,0.1)', display: 'flex', flexDirection: 'column'
                        }}>
                            <div style={{ background: '#f3f2ef', padding: '12px 16px', borderBottom: '1px solid #e1e9ee', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ display: 'flex', gap: '6px' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#c8c6c4' }} />
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#c8c6c4' }} />
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#c8c6c4' }} />
                                </div>
                                <img src="https://logo.clearbit.com/linkedin.com" alt="LinkedIn" style={{ height: '16px', marginLeft: '12px', borderRadius: '2px' }} onError={(e) => e.target.style.display = 'none'} />
                                <div style={{ fontSize: '0.8rem', color: '#0a66c2', marginLeft: 'auto', fontWeight: 700 }}>linkedin.com</div>
                            </div>
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: '#f3f2ef', minHeight: '220px' }}>
                                <div style={{ background: '#ffffff', padding: '1.5rem 2rem', borderRadius: '12px', width: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{ position: 'relative' }}>
                                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#e1e9ee', border: '3px solid #fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', display: 'grid', placeItems: 'center', fontSize: '1.5rem', color: '#666' }}>👤</div>
                                        <div style={{ position: 'absolute', bottom: '0', right: '0', background: '#0a66c2', color: '#fff', width: '20px', height: '20px', borderRadius: '50%', display: 'grid', placeItems: 'center', border: '2px solid #fff', fontSize: '10px' }}>✓</div>
                                    </div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#000', marginTop: '0.8rem' }}>Prospect Connected</div>
                                    <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '4px' }}>VP Procurement @ L'Oréal</div>
                                    <div style={{ marginTop: '1rem', background: '#0a66c2', color: '#fff', padding: '6px 16px', borderRadius: '24px', fontSize: '0.8rem', fontWeight: 700, width: '100%', cursor: 'pointer' }}>
                                        Message
                                    </div>
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
