import { useRef } from 'react';
import { useSlideAnimation } from '../hooks/useSlideAnimation';

export default function ConclusionSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 6);

    return (
        <section className="slide" id="slide-7" ref={slideRef}>
            <div className="visual-pane">
                <div style={{
                    width: '100%', height: '100%', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', position: 'relative'
                }}>
                    <div
                        className="growth-text"
                        style={{
                            fontSize: '15rem', color: 'rgba(255,255,255,0.05)',
                            fontWeight: 800, position: 'absolute', pointerEvents: 'none', zIndex: 1
                        }}
                    >GROWTH</div>
                    <img
                        src="/assets/images/churchwin_logo_new.png"
                        style={{ width: '300px', display: 'block', position: 'relative', zIndex: 2 }}
                        alt="Churchwin Logo"
                    />
                </div>
            </div>

            <div className="narrative-pane">
                <span className="label">The Close</span>
                <h1 className="headline-xl">
                    Zero-Risk <br /><span className="highlight">Next Step</span>
                </h1>
                <p className="body-xl" style={{ fontSize: '1.2rem' }}>
                    This isn't just a website update.<br />
                    It's an <strong>enterprise-grade digital sales engine</strong>.
                    <br /><br />
                    <strong>Proposal Action Item:</strong><br />
                    Let's schedule a 30-minute working session next Tuesday to review the Day 1-30 wireframes for the new high-converting product pages.
                    <br /><br />
                    <button style={{
                        background: 'var(--accent)', color: '#000', border: 'none',
                        padding: '1rem 2rem', borderRadius: '4px', fontWeight: 800,
                        cursor: 'pointer', transition: 'transform 0.2s', fontSize: '1rem',
                        boxShadow: '0 10px 20px rgba(255,106,0,0.3)',
                        marginTop: '1rem'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        SCHEDULE WORKING SESSION
                    </button>
                </p>
            </div>
        </section>
    );
}
