import { useRef } from 'react';
import { useSlideAnimation } from '../hooks/useSlideAnimation';

export default function NarrativeSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 6);

    return (
        <section className="slide" id="slide-6" ref={slideRef}>
            <div className="narrative-pane">
                <span className="label">Strategic Expansion</span>
                <h1 className="headline-xl">
                    Multi-Industry <br /><span className="highlight">Architecture</span>
                </h1>
                <p className="body-xl" style={{ fontSize: '1.1rem' }}>
                    Building a scalable B2B portal ready for new verticals (Cosmetics, Nutraceuticals) and ingredients (Baobab, Moringa).
                    <br /><br />
                    <strong>Automated Workflows:</strong><br />
                    Self-serve MOQ calculators, gated pricing tiers, and automated sample requests.
                    <br /><br />
                    I build the <strong>Turnkey Engine</strong> so your sales team can scale globally without friction.
                </p>
            </div>

            <div className="visual-pane">
                {/* B2B Portal UI Mockup */}
                <div style={{
                    width: '100%', background: '#fff', borderRadius: '12px',
                    display: 'flex', flexDirection: 'column',
                    position: 'relative', overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}>
                    {/* Mock Navigation Tabs */}
                    <div style={{
                        background: '#f8f9fa', padding: '1.2rem 1.5rem 0 1.5rem',
                        borderBottom: '1px solid #ddd', display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 700
                    }}>
                        <div style={{ color: 'var(--accent)', borderBottom: '3px solid var(--accent)', paddingBottom: '0.8rem' }}>
                            Cosmetics
                        </div>
                        <div style={{ color: '#999', paddingBottom: '0.8rem', cursor: 'pointer' }}>
                            Nutraceuticals
                        </div>
                        <div style={{ color: '#999', paddingBottom: '0.8rem', cursor: 'pointer' }}>
                            Luxury Spas
                        </div>
                    </div>

                    {/* Mock Portal Content */}
                    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ margin: 0, color: '#333', fontSize: '1.3rem' }}>Contract Manufacturing</h3>
                                <div style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.2rem' }}>Tier 1 Access (1000kg+ MOQ)</div>
                            </div>
                            <div style={{ background: '#e0f2fe', color: '#0369a1', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>VERIFIED DISTRIBUTOR</div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                            {/* Workflow Feature 1 */}
                            <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1rem', background: '#fafafa' }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🧮</div>
                                <div style={{ fontWeight: 700, color: '#333', fontSize: '0.9rem' }}>Dynamic MOQ Calculator</div>
                                <div style={{ color: '#777', fontSize: '0.75rem', marginTop: '0.3rem' }}>Live LTL Freight Estimates</div>
                            </div>

                            {/* Workflow Feature 2 */}
                            <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1rem', background: '#fafafa' }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🔑</div>
                                <div style={{ fontWeight: 700, color: '#333', fontSize: '0.9rem' }}>Gated Pricing Tiers</div>
                                <div style={{ color: '#777', fontSize: '0.75rem', marginTop: '0.3rem' }}>Volume-based auto-discounting</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
