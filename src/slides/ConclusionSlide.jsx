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
                <span className="label">Next Steps</span>
                <h1 className="headline-xl">
                    Let's Grow <br /><span className="highlight">Together</span>
                </h1>
                <p className="body-xl">
                    This isn't just a website update.<br />
                    It's a <strong>Market Domination Strategy</strong>.
                    <br /><br />
                    <strong>Proposal:</strong><br />
                    • Full Rebrand (Logo Refinement)<br />
                    • High-Performance Shopify/Custom Hybrid<br />
                    • Sales Funnel Setup (Apollo + Instantly)
                    <br /><br />
                    <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Ready to Start?</span>
                </p>
            </div>
        </section>
    );
}
