import { useRef } from 'react';
import { useSlideAnimation } from '../hooks/useSlideAnimation';

export default function RoadmapSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 3);

    return (
        <section className="slide" id="slide-4" ref={slideRef}>
            <div className="narrative-pane" style={{ width: '40%' }}>
                <span className="label">The Strategic Solution</span>
                <h1 className="headline-xl">
                    The Fix: <br /><span className="highlight">3-Month Roadmap</span>
                </h1>
                <p className="body-xl">
                    We don't need a year. We need 90 days of aggressive execution.
                    <br /><br />
                    <strong>Month 1: Foundation</strong><br />
                    Fixing the plumbing. UX Overhaul &amp; SEO.
                    <br /><br />
                    <strong>Month 2: Automation</strong><br />
                    Turning on the faucet. Apollo.io &amp; Cold Outreach.
                    <br /><br />
                    <strong>Month 3: Scale</strong><br />
                    Amplification. Retargeting (Meta Pixel) &amp; UGC.
                </p>
            </div>

            <div className="visual-pane" style={{ width: '60%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                    {/* Month 1 */}
                    <div style={{
                        background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px',
                        borderLeft: '4px solid #4facfe', position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute', top: '-10px', left: '-10px',
                            background: '#4facfe', color: '#fff', padding: '4px 8px',
                            fontSize: '0.8rem', fontWeight: 700, borderRadius: '4px'
                        }}>MONTH 1</div>
                        <h3 style={{ marginTop: '0.5rem', color: '#fff' }}>Digital Foundation</h3>
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                            {['UX/UI Overhaul', 'SEO Strategy', 'CRM Setup'].map(tag => (
                                <span key={tag} style={{
                                    fontSize: '0.8rem', background: 'rgba(79, 172, 254, 0.2)',
                                    padding: '4px 8px', borderRadius: '4px'
                                }}>{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Month 2 */}
                    <div style={{
                        background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px',
                        borderLeft: '4px solid var(--accent)', position: 'relative', marginLeft: '2rem'
                    }}>
                        <div style={{
                            position: 'absolute', top: '-10px', left: '-10px',
                            background: 'var(--accent)', color: '#000', padding: '4px 8px',
                            fontSize: '0.8rem', fontWeight: 700, borderRadius: '4px'
                        }}>MONTH 2</div>
                        <h3 style={{ marginTop: '0.5rem', color: '#fff' }}>Automation Engine</h3>
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                            {['Apollo.io Mining', 'Instantly.ai', 'Asset Production'].map(tag => (
                                <span key={tag} style={{
                                    fontSize: '0.8rem', background: 'rgba(255, 179, 0, 0.2)',
                                    color: 'var(--accent)', padding: '4px 8px', borderRadius: '4px'
                                }}>{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Month 3 */}
                    <div style={{
                        background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px',
                        borderLeft: '4px solid #27c93f', position: 'relative', marginLeft: '4rem'
                    }}>
                        <div style={{
                            position: 'absolute', top: '-10px', left: '-10px',
                            background: '#27c93f', color: '#fff', padding: '4px 8px',
                            fontSize: '0.8rem', fontWeight: 700, borderRadius: '4px'
                        }}>MONTH 3</div>
                        <h3 style={{ marginTop: '0.5rem', color: '#fff' }}>Scale &amp; Amplify</h3>
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                            {['UGC Campaign', 'Retargeting', 'Wholesale Portal'].map(tag => (
                                <span key={tag} style={{
                                    fontSize: '0.8rem', background: 'rgba(39, 201, 63, 0.2)',
                                    padding: '4px 8px', borderRadius: '4px'
                                }}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
