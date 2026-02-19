import { useRef } from 'react';
import { useSlideAnimation } from '../hooks/useSlideAnimation';

export default function CoverSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 0);

    return (
        <section
            className="slide"
            id="slide-1"
            ref={slideRef}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'radial-gradient(circle at 50% 50%, #023e8a 0%, #012787 100%)'
            }}
        >
            {/* World Map Overlay */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                opacity: 0.1,
                backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')",
                backgroundSize: 'cover',
                pointerEvents: 'none'
            }} />

            {/* Brand Logo */}
            <div style={{
                position: 'absolute', top: '5vh', left: '50%', transform: 'translateX(-50%)',
                zIndex: 20,
                background: 'rgba(255, 255, 255, 0.95)',
                padding: '1rem 3rem',
                borderRadius: '4px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
                <img
                    src="/assets/images/churchwin_logo_new.png"
                    style={{ width: '220px', display: 'block' }}
                    alt="Churchwin Trading Co."
                />
            </div>

            {/* Main Content */}
            <div
                className="narrative-pane"
                style={{ width: '100%', textAlign: 'center', alignItems: 'center', padding: '0 10vw', zIndex: 10 }}
            >
                <h1 className="headline-xl" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
                    Revitalizing Churchwin:<br />
                    <span style={{ color: 'var(--accent)', fontWeight: 300 }}>
                        A Strategic Roadmap to Global B2B Dominance
                    </span>
                </h1>

                <div style={{ height: '2px', width: '100px', background: 'var(--accent)', marginBottom: '2rem' }} />

                <p className="body-xl" style={{ fontSize: '1.5rem', color: 'var(--text-mute)' }}>
                    Turning "Hidden Gem" Quality into <br />Market-Leading Revenue (Q1-Q2 2026)
                </p>

                <div style={{
                    marginTop: '4rem', fontSize: '0.9rem', letterSpacing: '2px',
                    textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)'
                }}>
                    Strategic Digital Marketing &amp; Brand Revamp Proposal
                </div>
            </div>
        </section>
    );
}
