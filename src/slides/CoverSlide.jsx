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
                background: '#011533' // Deep dark blue to make video pop
            }}
        >
            {/* Background Video (Phase 1: Hook) */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    objectFit: 'cover', opacity: 0.35, zIndex: 1, pointerEvents: 'none',
                    filter: 'grayscale(30%)'
                }}
            >
                <source src="/assets/videos/vid-6.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlay for Text Readability */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2,
                background: 'linear-gradient(to bottom, rgba(1,39,135,0.4) 0%, rgba(1,39,135,0.9) 100%)'
            }} />

            {/* Brand Logo */}
            <div style={{
                position: 'absolute', top: '5vh', left: '50%', transform: 'translateX(-50%)',
                zIndex: 20,
                background: 'rgba(255, 255, 255, 0.95)',
                padding: '1rem 3rem',
                borderRadius: '4px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
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
                <h1 className="headline-xl" style={{ fontSize: '3.8rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                    Revitalizing Churchwin:<br />
                    <span style={{ color: 'var(--accent)', fontWeight: 300, fontSize: '3rem' }}>
                        Digital Transformation &amp; Web Architecture
                    </span>
                </h1>

                <div style={{ height: '2px', width: '100px', background: 'var(--accent)', margin: '0 auto 2rem auto' }} />

                <p className="body-xl" style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.9)' }}>
                    A Strategic Proposal to Translate "Hidden Gem" Quality<br /> into Market-Leading B2B Revenue.
                </p>

                {/* Engineering/Architect Angle Badge */}
                <div style={{
                    marginTop: '4rem', background: 'rgba(255,255,255,0.05)', display: 'inline-block',
                    padding: '1.2rem 2.5rem', borderRadius: '12px', border: '1px solid rgba(255,106,0,0.3)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}>
                    <div style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.4rem', fontWeight: 700 }}>
                        System Architecture Proposal
                    </div>
                    <div style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 600 }}>
                        Technical Web Architect
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.4rem', letterSpacing: '0.5px' }}>
                        Engineering Rigor • Agile Project Management • ROI-Driven Web Dev
                    </div>
                </div>
            </div>
        </section>
    );
}
