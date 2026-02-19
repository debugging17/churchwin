import { useRef } from 'react';
import { useSlideAnimation } from '../hooks/useSlideAnimation';

export default function RoadmapSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 3);

    const months = [
        {
            num: '01',
            label: 'MONTH 1',
            title: 'Digital Foundation',
            subtitle: 'Fixing the plumbing',
            color: '#4facfe',
            tags: ['UX/UI Overhaul', 'SEO Strategy', 'CRM Setup'],
            icon: '🔧'
        },
        {
            num: '02',
            label: 'MONTH 2',
            title: 'Automation Engine',
            subtitle: 'Turning on the faucet',
            color: 'var(--accent)',
            tags: ['Apollo.io Mining', 'Instantly.ai', 'Asset Production'],
            icon: '⚡'
        },
        {
            num: '03',
            label: 'MONTH 3',
            title: 'Scale & Amplify',
            subtitle: 'Full amplification',
            color: '#27c93f',
            tags: ['UGC Campaign', 'Retargeting', 'Wholesale Portal'],
            icon: '🚀'
        }
    ];

    return (
        <section className="slide" id="slide-4" ref={slideRef}>
            <div className="narrative-pane" style={{ paddingTop: '3rem' }}>
                <span className="label">The Strategic Solution</span>
                <h1 className="headline-xl">
                    The Fix: <br /><span className="highlight">3-Month Roadmap</span>
                </h1>
                <p className="body-xl" style={{ marginBottom: '2rem' }}>
                    We don't need a year. We need <strong style={{ color: '#fff' }}>90 days</strong> of aggressive, focused execution.
                </p>

                {/* Compact timeline on left */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {months.map((m, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <div style={{
                                width: '36px', height: '36px', borderRadius: '50%',
                                background: m.color, display: 'grid', placeItems: 'center',
                                fontSize: '0.75rem', fontWeight: 800, color: i === 1 ? '#000' : '#fff',
                                flexShrink: 0
                            }}>{m.num}</div>
                            <div>
                                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>
                                    {m.title}
                                </div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-mute)', lineHeight: 1.4 }}>
                                    {m.subtitle}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="visual-pane" style={{ padding: '2rem 1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%', maxWidth: '500px' }}>
                    {months.map((m, i) => (
                        <div key={i} style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderLeft: `4px solid ${m.color}`,
                            borderRadius: '12px',
                            padding: '1.25rem 1.5rem',
                            position: 'relative',
                            backdropFilter: 'blur(8px)',
                            transition: 'all 0.3s ease'
                        }}>
                            {/* Phase badge */}
                            <div style={{
                                position: 'absolute', top: '-10px', left: '12px',
                                background: m.color, color: i === 1 ? '#000' : '#fff',
                                padding: '3px 10px', borderRadius: '20px',
                                fontSize: '0.65rem', fontWeight: 800, letterSpacing: '1px'
                            }}>{m.label}</div>

                            {/* Card header */}
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: '0.6rem',
                                marginTop: '0.25rem', marginBottom: '0.75rem'
                            }}>
                                <span style={{ fontSize: '1.3rem' }}>{m.icon}</span>
                                <h3 style={{
                                    color: '#fff', fontSize: '1.1rem', fontWeight: 700,
                                    margin: 0, letterSpacing: '-0.01em'
                                }}>{m.title}</h3>
                            </div>

                            {/* Subtitle */}
                            <div style={{
                                fontSize: '0.8rem', color: 'var(--text-mute)',
                                marginBottom: '0.75rem', fontStyle: 'italic'
                            }}>{m.subtitle}</div>

                            {/* Tags */}
                            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                                {m.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.7rem', fontWeight: 600,
                                        background: `${m.color}22`,
                                        color: m.color,
                                        padding: '4px 10px', borderRadius: '20px',
                                        border: `1px solid ${m.color}33`,
                                        letterSpacing: '0.3px'
                                    }}>{tag}</span>
                                ))}
                            </div>

                            {/* Connecting line */}
                            {i < 2 && (
                                <div style={{
                                    position: 'absolute', bottom: '-1.25rem', left: '28px',
                                    width: '2px', height: '1.25rem',
                                    background: `linear-gradient(to bottom, ${m.color}66, transparent)`,
                                    zIndex: 1
                                }} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
