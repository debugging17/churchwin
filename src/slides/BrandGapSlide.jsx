import { useRef } from 'react';
import { useSlideAnimation } from '../hooks/useSlideAnimation';

export default function BrandGapSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 2);

    return (
        <section className="slide slide-light" id="slide-3" ref={slideRef}>
            <div className="narrative-pane">
                <span className="label">The Brand Gap</span>
                <h1 className="headline-xl">
                    Great Product, <br /><span className="highlight">Outdated Presence</span>
                </h1>
                <p className="body-xl">
                    Our digital storefront does not reflect our product quality.
                    <br /><br />
                    <strong>1. Static vs. Dynamic:</strong><br />
                    Our site is a flat catalog. No Clear CTAs ("Request Sample").
                    <br /><br />
                    <strong>2. Narrative Void:</strong><br />
                    Competitors sell "Impact" &amp; "Ethics". We list specs.
                    <br /><br />
                    <strong>3. Zero Trust Signals:</strong><br />
                    No User Generated Content. No Maker Stories. We look risky.
                </p>
            </div>

            <div className="visual-pane">
                {/* Split Screen Comparison */}
                <div
                    className="split-comparison"
                    style={{
                        display: 'flex', gap: '1rem', width: '100%', height: 'auto',
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

                    {/* Right: Future (Dynamic) */}
                    <div style={{
                        flex: 1, background: '#fff', borderRadius: '8px', position: 'relative',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                        border: '2px solid var(--accent)', overflow: 'hidden'
                    }}>
                        <img
                            src="/assets/images/Churchwin_B09ZF5HS5W-Shea-Butter_Listing-Images_Image-5-Photoroom.webp"
                            alt=""
                            style={{ position: 'absolute', width: '120%', top: '-10%', left: '-10%', opacity: 0.2 }}
                        />
                        <div style={{
                            padding: '1rem', position: 'relative', zIndex: 2,
                            height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'
                        }}>
                            <div style={{
                                background: 'var(--accent)', color: '#000', padding: '0.5rem 1rem',
                                borderRadius: '4px', textAlign: 'center', fontWeight: 700
                            }}>REQUEST SAMPLE</div>
                            <div style={{
                                marginBottom: '1rem', textAlign: 'center',
                                color: '#333', fontWeight: 700, marginTop: '1rem'
                            }}>PERSUASIVE ENGINE</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
