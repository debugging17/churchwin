import { useRef } from 'react';
import { useSlideAnimation } from '../hooks/useSlideAnimation';

export default function NarrativeSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 5);

    return (
        <section className="slide" id="slide-6" ref={slideRef}>
            <div className="narrative-pane">
                <span className="label">Enhancement 02: Narrative</span>
                <h1 className="headline-xl">
                    Commodity to <br /><span className="highlight">Community</span>
                </h1>
                <p className="body-xl">
                    Leveraging Storytelling to Command Premium Pricing.
                    <br /><br />
                    <strong>Origin Story Campaign:</strong><br />
                    Video assets showcasing the women's cooperatives.
                    <br /><br />
                    <strong>Traceability:</strong><br />
                    QR codes on bulk packaging mapping batches to harvest regions.
                    <br /><br />
                    We don't just sell oil; we sell <strong>Ethical Solutions</strong>.
                </p>
            </div>

            <div className="visual-pane">
                {/* QR Code / Origin Visual */}
                <div style={{
                    width: '100%', height: '60%', background: '#fff', borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}>
                    <img
                        src="/assets/images/Churchwin_B08ZNQ6WGJ-Neem-Oil-8-Photoroom-2.webp"
                        alt=""
                        style={{ position: 'absolute', width: '60%', opacity: 0.1, top: '-50px', right: '-20px' }}
                    />

                    <div style={{ textAlign: 'center', color: '#333', zIndex: 2 }}>
                        <div style={{
                            width: '150px', height: '150px', background: '#000',
                            margin: '0 auto 1rem auto', borderRadius: '8px',
                            display: 'grid', placeItems: 'center'
                        }}>
                            <span style={{ color: '#fff', fontSize: '3rem' }}>⚃</span>
                        </div>
                        <h3 style={{ fontFamily: "'Montserrat'", fontWeight: 700, marginBottom: '0.5rem' }}>
                            SCAN ORIGIN
                        </h3>
                        <p style={{ fontSize: '0.8rem', color: '#666' }}>
                            Batch #CW-2026-02<br />Region: Northern Ghana
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
