import { useRef } from 'react';
import { useSlideAnimation } from '../hooks/useSlideAnimation';

export default function BrandGapSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 5);

    return (
        <section className="slide slide-light" id="slide-3" ref={slideRef}>
            <div className="narrative-pane" style={{ paddingTop: '3rem' }}>
                <span className="label" style={{ marginBottom: '0.25rem', display: 'inline-block' }}>The Brand Gap</span>
                <h1 className="headline-xl" style={{ marginTop: 0 }}>
                    Great Product, <br /><span className="highlight">Outdated Presence</span>
                </h1>
                <p className="body-xl" style={{ fontSize: 'clamp(0.85rem, 1.1vw, 1.15rem)' }}>
                    Our digital storefront fails to reflect our premium sourcing.
                    <br /><br />
                    <strong>1. Product Specificity:</strong><br />
                    We pitch Baobab and Moringa generically instead of as a &quot;bio-retinol alternative&quot; and a &quot;protein-dense superfood&quot;.
                    <br /><br />
                    <strong>2. Missing the Target:</strong><br />
                    We miss Tier-1 &quot;Anchor Clients&quot;—R&D Directors, Procurement Managers, and Corporate Spa Directors.
                    <br /><br />
                    <strong>3. The Expectation Gap:</strong><br />
                    These high-value buyers expect a premium, data-rich digital experience that reflects our ethical, on-demand freshness.
                </p>
            </div>

            <div className="visual-pane">
                {/* Split Screen Comparison */}
                <div
                    className="split-comparison"
                    style={{
                        display: 'flex', gap: '1rem', width: '100%', height: 'auto', flexWrap: 'wrap',
                        minHeight: '400px', maxWidth: '800px', padding: '1rem 0'
                    }}
                >
                    {/* Left: Current (Boring) */}
                    <div style={{
                        flex: 1, background: '#e0e7ff', border: '1px dashed #999',
                        borderRadius: '8px', position: 'relative', opacity: 0.8, transform: 'scale(0.9)'
                    }}>
                        <div style={{ padding: '1rem', color: '#333' }}>
                            <div style={{ height: '10px', width: '40%', background: '#bdc3c7', marginBottom: '1rem' }} />
                            <div style={{ height: '2px', width: '80%', background: '#d1d5db', marginBottom: '0.5rem' }} />
                            <div style={{ height: '2px', width: '80%', background: '#d1d5db', marginBottom: '0.5rem' }} />
                            <div style={{ height: '2px', width: '80%', background: '#d1d5db', marginBottom: '0.5rem' }} />
                            <div style={{
                                marginTop: '2rem', textAlign: 'center',
                                fontFamily: "'Montserrat'", fontWeight: 700, color: '#999'
                            }}>STATIC CATALOG</div>
                        </div>
                    </div>

                    {/* Right: Future (Dynamic Prototype) */}
                    <div style={{
                        flex: 1, background: '#111', borderRadius: '12px', position: 'relative',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                        border: '2px solid var(--accent)', overflow: 'hidden',
                        display: 'flex', flexDirection: 'column'
                    }}>
                        {/* Immersive Sourcing Hero Video */}
                        <div style={{ position: 'relative', width: '100%', height: '140px', background: '#000', overflow: 'hidden' }}>
                            <video
                                autoPlay loop muted playsInline preload="none"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                            >
                                <source src="/assets/videos/vid-4.mp4" type="video/mp4" />
                            </video>
                            <div style={{
                                position: 'absolute', bottom: '10px', left: '10px',
                                background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '2px 8px',
                                borderRadius: '4px', fontSize: '0.6rem', fontWeight: 700
                            }}>▶ ETHICAL SOURCING</div>
                        </div>

                        {/* Interactive 3D Product Area */}
                        <div style={{
                            flex: 1, padding: '1rem', position: 'relative', zIndex: 2,
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            background: 'linear-gradient(to bottom, #111, #222)'
                        }}>
                            <div style={{
                                position: 'absolute', top: '10px', right: '10px',
                                background: 'rgba(255,255,255,0.1)', color: '#aaa', padding: '4px 8px',
                                borderRadius: '4px', fontSize: '0.6rem', border: '1px solid rgba(255,255,255,0.2)'
                            }}>
                                🔄 360° INTERACTIVE VIEW
                            </div>
                            <img
                                src="/assets/images/Churchwin_B09ZF5HS5W-Shea-Butter_Listing-Images_Image-5-Photoroom.webp"
                                alt="Product 3D Mockup"
                                loading="lazy"
                                style={{ width: '80%', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }}
                            />

                            <div style={{ marginTop: 'auto', width: '100%' }}>
                                <div style={{ textAlign: 'center', color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                                    Premium Bulk Shea Butter
                                </div>
                                <div style={{
                                    background: 'var(--accent)', color: '#000', padding: '0.6rem 1rem',
                                    borderRadius: '6px', textAlign: 'center', fontWeight: 800, cursor: 'pointer',
                                    transition: 'transform 0.2s', boxShadow: '0 5px 15px rgba(255,106,0,0.3)'
                                }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                    REQUEST B2B SAMPLE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
