import { useRef } from 'react';
import { useSlideAnimation } from '../hooks/useSlideAnimation';
import { useTilt } from '../hooks/useTilt';

export default function CurrentRealitySlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 3);
    const tiltRef = useTilt();

    return (
        <section className="slide" id="slide-2" ref={slideRef}>
            <div className="narrative-pane" style={{ paddingRight: '1rem' }}>
                <span className="label">The Current Reality</span>
                <h1 className="headline-xl">
                    The Hard Truth: <br /><span className="highlight">We Are Invisible</span>
                </h1>
                <p className="body-xl">
                    While competitors dominate organic search, Churchwin Trading remains a "best-kept secret."
                    <br /><br />
                    <strong>The Data Speaks:</strong><br />
                    We have <strong>0.3%</strong> of the market leader's traffic. Check the breakdown.
                    <br /><br />
                    <span style={{ fontSize: '0.9em', color: 'var(--accent)' }}>
                        Our entire traffic volume is a rounding error for Baraka Shea.
                    </span>
                </p>
            </div>

            <div className="visual-pane" ref={tiltRef} style={{ padding: '1rem' }}>
                <div className="bento-grid">
                    {/* Market Leader: Baraka Shea */}
                    <div
                        className="bento-card card-leader"
                        style={{ cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', border: '1px solid rgba(39, 201, 63, 0.3)' }}
                        onClick={() => window.open('/assets/docs/Website_Analysis_Insights_Jan_2026.pdf', '_blank')}
                        title="Click to view full SimilarWeb Report"
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 15px 30px rgba(39, 201, 63, 0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={{
                            position: 'absolute', top: '1rem', right: '1rem',
                            background: '#27c93f', color: '#000',
                            padding: '2px 8px', borderRadius: '12px',
                            fontSize: '0.7rem', fontWeight: 700
                        }}>LEADER</div>
                        <div>
                            <h4>Baraka Shea Butter</h4>
                            <div className="bento-big-num">52,931</div>
                            <div className="bento-sub">Monthly Visits</div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '5px' }}>
                                <span>Organic Sources</span>
                                <span>High</span>
                            </div>
                            <div className="stat-bar">
                                <div className="stat-fill" style={{ width: '100%', background: '#27c93f' }} />
                            </div>
                            <div className="bento-sub" style={{ marginTop: '0.8rem' }}>
                                3:27 Avg Duration • 2.02 Pages/Visit
                            </div>
                            <div style={{
                                fontSize: '0.65rem', color: '#27c93f', marginTop: '1rem',
                                display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600
                            }}>
                                📄 CLICK FOR FULL SIMILARWEB REPORT
                            </div>
                        </div>
                    </div>

                    {/* Client: Churchwin Trading (the company this pitch is for) — expanded top right */}
                    <div className="bento-card" style={{
                        gridColumn: 'span 2',
                        gridRow: 'span 1',
                        background: 'rgba(255, 106, 0, 0.12)',
                        border: '2px solid rgba(255, 106, 0, 0.5)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute', top: '1rem', right: '1rem',
                            background: 'var(--accent)', color: '#fff',
                            padding: '3px 10px', borderRadius: '12px',
                            fontSize: '0.75rem', fontWeight: 700
                        }}>YOU</div>
                        <h4 style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', letterSpacing: '1px' }}>Churchwin Trading Co.</h4>
                        <div className="bento-big-num" style={{ color: '#ff6a00', fontSize: '2.8rem' }}>N/A</div>
                        <div style={{ fontSize: '0.95rem', color: '#ffcc99', fontWeight: 600 }}>No Digital Presence</div>
                        <div style={{ marginTop: 'auto' }}>
                            <div className="stat-bar">
                                <div className="stat-fill" style={{ width: '0%', background: 'var(--accent)' }} />
                            </div>
                            <div style={{ fontSize: '0.8rem', color: '#ff6a00', fontWeight: 600, marginTop: '0.5rem' }}>Invisible Online — Zero Organic Traffic</div>
                        </div>
                    </div>

                    {/* Retail Arm: Churchwin.com — row 2, left */}
                    <div className="bento-card" style={{
                        gridColumn: 'span 1',
                        background: 'rgba(255, 255, 255, 0.18)',
                        border: '1px dashed rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)'
                    }}>
                        <h4 style={{ whiteSpace: 'normal', overflow: 'visible', fontSize: '0.7rem' }}>Churchwin.com (Retail)</h4>
                        <div className="bento-big-num" style={{ fontSize: '1.5rem', color: '#ccc' }}>200</div>
                        <div className="bento-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>Monthly Visits</div>
                        <div className="stat-bar">
                            <div className="stat-fill" style={{ width: '1%', background: '#888' }} />
                        </div>
                        <div className="bento-sub" style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.3rem' }}>100% Paid Traffic</div>
                    </div>

                    {/* Mid-Tier: FairTale Ghana — row 2, right */}
                    <div className="bento-card" style={{
                        gridColumn: 'span 1',
                        background: 'rgba(255, 255, 255, 0.14)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)'
                    }}>
                        <h4>FairTale Ghana</h4>
                        <div className="bento-big-num">2,186</div>
                        <div className="bento-sub">Monthly Visits</div>
                        <div className="stat-bar">
                            <div className="stat-fill" style={{ width: '5%', background: '#f1c40f' }} />
                        </div>
                    </div>

                    {/* Insight Card - Cost of Inaction */}
                    <div className="bento-card" style={{
                        gridColumn: 'span 4',
                        background: 'linear-gradient(135deg, rgba(255,0,0,0.15), rgba(255,68,0,0.08))',
                        border: '1px solid rgba(255,68,68,0.4)',
                        padding: '1.5rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '2.5rem' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', color: '#ff4444', fontWeight: 800, lineHeight: 1 }}>$150k+</div>
                                <div style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginTop: '0.3rem' }}>Est. Lost Monthly Revenue</div>
                            </div>
                            <div style={{ width: '2px', height: '60px', background: 'rgba(255,255,255,0.2)', borderRadius: '1px' }} />
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '2rem', color: '#ffaa66', fontWeight: 800, lineHeight: 1 }}>The C.O.I.</div>
                                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginTop: '0.3rem' }}>(Cost of Inaction)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
