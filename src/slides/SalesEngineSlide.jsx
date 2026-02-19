import { useRef } from 'react';
import { useSlideAnimation } from '../hooks/useSlideAnimation';

export default function SalesEngineSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 4);

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
                {/* Funnel Diagram */}
                <div style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'center', height: '100%', gap: '1rem'
                }}>
                    <div style={{
                        width: '250px', padding: '1rem', background: '#fff',
                        border: '1px solid #ddd', color: '#000', textAlign: 'center',
                        borderRadius: '4px', fontWeight: 700,
                        clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)'
                    }}>
                        Apollo.io Database<br />
                        <span style={{ fontSize: '0.8rem', fontWeight: 400 }}>30,000+ Verified Contacts</span>
                    </div>

                    <div style={{ width: '2px', height: '20px', background: 'rgba(0,0,0,0.2)' }} />

                    <div style={{
                        width: '200px', padding: '1rem', background: 'rgba(255,255,255,0.9)',
                        border: '1px solid #ddd', color: '#000', textAlign: 'center',
                        borderRadius: '4px', fontWeight: 700,
                        clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)'
                    }}>
                        Filter: Formulators
                    </div>

                    <div style={{ width: '2px', height: '20px', background: 'rgba(0,0,0,0.2)' }} />

                    <div style={{
                        width: '150px', padding: '1rem', background: 'var(--accent)',
                        color: '#000', textAlign: 'center', borderRadius: '4px', fontWeight: 700,
                        boxShadow: '0 0 20px rgba(255,179,0,0.5)'
                    }}>
                        Instantly.ai <br />
                        <span style={{ fontSize: '0.8rem' }}>Automated Sequence</span>
                    </div>

                    <div style={{ width: '2px', height: '20px', background: 'var(--accent)' }} />

                    <div style={{
                        width: '100px', padding: '1rem', background: '#27c93f',
                        color: '#fff', textAlign: 'center', borderRadius: '50%', fontWeight: 700,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '1/1'
                    }}>
                        CLOSED<br />DEAL
                    </div>
                </div>
            </div>
        </section>
    );
}
