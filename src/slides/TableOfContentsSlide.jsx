import { useRef } from 'react';
import { useSlideAnimation } from '../hooks/useSlideAnimation';

const TOC_ITEMS = [
    { num: '01', title: 'The Current Reality', desc: 'Where Churchwin Trading stands in the digital landscape today — traffic data, competitor analysis & the cost of inaction.' },
    { num: '02', title: 'The Brand Gap', desc: 'Why world-class products deserve a world-class digital presence — and what\'s holding us back.' },
    { num: '03', title: '90-Day Roadmap', desc: 'A phased technical sprint to build SEO authority, conversion funnels & a B2B sales engine.' },
    { num: '04', title: 'The Sales Engine', desc: 'Turning the website into a lead-generation machine with outbound workflows & automation.' },
    { num: '05', title: 'Digital Architecture', desc: 'Multi-industry B2B portal design — scalable across Cosmetics, Nutraceuticals & beyond.' },
    { num: '06', title: 'Next Steps', desc: 'A zero-risk invitation to a 30-minute working session with Day 1-30 wireframes.' },
];

const PRODUCT_IMAGES = [
    { src: '/assets/images/Churchwin_B09ZF5HS5W-Shea-Butter_Listing-Images_Image-5-Photoroom.webp', alt: 'Shea Butter', label: 'Shea Butter' },
    { src: '/assets/images/Churchwin_B08ZNQ6WGJ-Neem-Oil-8-Photoroom-2.webp', alt: 'Neem Oil', label: 'Neem Oil' },
    { src: '/assets/images/Cocoa-Butter-Photoroom-1.png', alt: 'Cocoa Butter', label: 'Cocoa Butter' },
    { src: '/assets/images/PhotoshopExtension_Image (1).png', alt: 'Product Render 1' },
    { src: '/assets/images/PhotoshopExtension_Image (2).png', alt: 'Product Render 2' },
    { src: '/assets/images/PhotoshopExtension_Image (3).png', alt: 'Product Render 3' },
];

export default function TableOfContentsSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 1);

    return (
        <section className="slide" id="slide-toc" ref={slideRef} style={{
            display: 'flex', alignItems: 'stretch', justifyContent: 'center',
            background: 'var(--bg-dark)', overflow: 'hidden'
        }}>
            {/* Left Pane: Executive Summary + TOC */}
            <div style={{
                width: '55%', padding: '3rem 2.5rem 2rem 4rem',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                zIndex: 10, overflowY: 'auto',
                scrollbarWidth: 'none', msOverflowStyle: 'none'
            }}>
                <span className="label">Executive Summary</span>
                <h1 className="headline-xl" style={{ fontSize: '2.8rem', marginBottom: '1rem', lineHeight: 1.15 }}>
                    What's Inside<br />
                    <span className="highlight">This Proposal</span>
                </h1>

                <p style={{
                    fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6,
                    marginBottom: '2rem', maxWidth: '550px'
                }}>
                    Churchwin Trading Co. produces world-class natural products — but the digital storefront
                    doesn't match. This proposal outlines a <strong style={{ color: '#ff6a00' }}>90-day technical sprint</strong> to
                    transform an invisible online presence into a <strong style={{ color: '#ff6a00' }}>B2B revenue engine</strong>,
                    closing an estimated <strong style={{ color: '#ff4444' }}>$150k+ monthly gap</strong>.
                </p>

                {/* TOC Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {TOC_ITEMS.map((item, i) => (
                        <div key={i} style={{
                            display: 'flex', alignItems: 'flex-start', gap: '1rem',
                            padding: '0.7rem 1rem', borderRadius: '10px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            transition: 'all 0.3s ease', cursor: 'default'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = 'rgba(255,106,0,0.08)';
                                e.currentTarget.style.borderColor = 'rgba(255,106,0,0.2)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                            }}
                        >
                            <span style={{
                                fontSize: '1.2rem', fontWeight: 800, color: '#ff6a00',
                                minWidth: '2rem', fontFamily: 'Montserrat, sans-serif'
                            }}>{item.num}</span>
                            <div>
                                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginBottom: '0.15rem' }}>
                                    {item.title}
                                </div>
                                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>
                                    {item.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Pane: Product Images Stack */}
            <div style={{
                width: '45%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', padding: '2rem', zIndex: 10
            }}>
                {/* Decorative gradient backdrop */}
                <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%', height: '80%',
                    background: 'radial-gradient(ellipse, rgba(255,106,0,0.08) 0%, transparent 70%)',
                    borderRadius: '50%', pointerEvents: 'none'
                }} />

                {/* Product Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridTemplateRows: 'repeat(2, 1fr)',
                    gap: '1rem',
                    width: '100%', maxWidth: '500px',
                    position: 'relative'
                }}>
                    {PRODUCT_IMAGES.map((img, i) => (
                        <div key={i} style={{
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '14px',
                            padding: '0.8rem',
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center',
                            aspectRatio: '1',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)';
                                e.currentTarget.style.borderColor = 'rgba(255,106,0,0.3)';
                                e.currentTarget.style.boxShadow = '0 12px 30px rgba(255,106,0,0.1)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                style={{
                                    width: '100%', height: '80%', objectFit: 'contain',
                                    filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))'
                                }}
                            />
                            {img.label && (
                                <div style={{
                                    fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)',
                                    marginTop: '0.4rem', textAlign: 'center',
                                    fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase'
                                }}>{img.label}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
