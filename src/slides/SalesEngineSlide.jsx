import { useRef } from 'react';
import { useSlideAnimation } from '../hooks/useSlideAnimation';

export default function SalesEngineSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 9);

    return (
        <section className="slide slide-light" id="slide-5" ref={slideRef}>
            <div className="narrative-pane">
                <span className="label">Enhancement 01: Sales</span>
                <h1 className="headline-xl">
                    Stop Waiting. <br /><span className="highlight">Go Get Them.</span>
                </h1>
                <p className="body-xl">
                    Implementing <strong>Apollo.io</strong> and <strong>Instantly.ai</strong> for Precision Targeting.
                    <br /><br />
                    <strong>The Shift:</strong><br />
                    From Shotgun (Mass Ads) to Sniper (Direct Email).
                    <br /><br />
                    We target the exact <strong>R&amp;D Directors</strong> and <strong>Formulators</strong> at top Cosmetic firms.
                </p>
            </div>

            <div className="visual-pane">
                {/* Tangible Engine Demo */}
                <div style={{
                    display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', height: '100%', gap: '1.5rem', padding: '1rem'
                }}>

                    {/* Live Apollo.io Query Mockup */}
                    <div style={{
                        background: '#0d1117', border: '1px solid #30363d', borderRadius: '8px',
                        overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                        position: 'relative'
                    }}>
                        {/* Browser Header Mockup */}
                        <div style={{
                            background: '#161b22', padding: '8px 12px', display: 'flex', alignItems: 'center',
                            borderBottom: '1px solid #30363d', gap: '8px'
                        }}>
                            <div style={{ display: 'flex', gap: '6px' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                            </div>
                            <div style={{
                                background: '#0d1117', padding: '4px 12px', borderRadius: '4px',
                                fontSize: '0.7rem', color: '#8b949e', flex: 1, textAlign: 'center', marginLeft: '10px'
                            }}>
                                apollo.io/search?title=R%26D%20Director&industry=Cosmetics
                            </div>
                        </div>
                        {/* Fake Video or Image mockup area */}
                        <div style={{ position: 'relative', width: '100%', height: '220px', background: '#000' }}>
                            <video
                                autoPlay loop muted playsInline preload="none"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                            >
                                <source src="/assets/videos/vid-6.mp4" type="video/mp4" />
                            </video>

                            {/* Overlay UI element showing targeted search */}
                            <div style={{
                                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                                background: 'rgba(255,255,255,0.95)', padding: '1rem 1.5rem', borderRadius: '8px',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.5)', textAlign: 'center', color: '#000',
                                minWidth: '250px'
                            }}>
                                <div style={{ fontSize: '0.8rem', color: '#666', fontWeight: 600, marginBottom: '0.2rem' }}>QUERY RESULTS</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)' }}>34,218</div>
                                <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>VERIFIED DECISION MAKERS</div>
                                <div style={{ marginTop: '0.5rem', fontSize: '0.7rem', color: '#999', textAlign: 'left' }}>
                                    ✓ Job Title: R&amp;D Director, Formulator<br />
                                    ✓ Industry: Cosmetics, Skincare<br />
                                    ✓ Location: Global
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* The Leave-Behind CTA */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(255,106,0,0.1) 0%, rgba(255,106,0,0.05) 100%)',
                        border: '1px solid rgba(255,106,0,0.3)', borderRadius: '8px',
                        padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        marginTop: '1rem'
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
                            padding: '0.7rem 1.2rem', borderRadius: '4px', fontWeight: 800,
                            cursor: 'pointer', transition: 'transform 0.2s', fontSize: '0.85rem'
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
