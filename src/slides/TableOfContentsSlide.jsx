import { useRef } from 'react';
import { useSlideAnimation } from '../hooks/useSlideAnimation';

const TOC_ITEMS = [
    { num: '01', title: 'The Current Reality', desc: 'Traffic data, competitor analysis & the cost of inaction.' },
    { num: '02', title: 'The Brand Gap', desc: 'Why world-class products need a world-class digital presence.' },
    { num: '03', title: '90-Day Roadmap', desc: 'A phased sprint to build SEO authority & conversion funnels.' },
    { num: '04', title: 'The Sales Engine', desc: 'Lead-gen machine with outbound workflows & automation.' },
    { num: '05', title: 'Digital Architecture', desc: 'Multi-industry B2B portal — scalable across verticals.' },
    { num: '06', title: 'Next Steps', desc: 'Zero-risk 30-minute working session with wireframes.' },
];

const HERO_PRODUCTS = [
    { src: '/assets/images/Churchwin_B09ZF5HS5W-Shea-Butter_Listing-Images_Image-5-Photoroom.webp', alt: 'Shea Butter', z: 3, rotate: '-8deg', translateX: '10%', scale: 1.1 },
    { src: '/assets/images/Churchwin_B08ZNQ6WGJ-Neem-Oil-8-Photoroom-2.webp', alt: 'Neem Oil', z: 5, rotate: '0deg', translateX: '0', scale: 1.25 },
    { src: '/assets/images/Cocoa-Butter-Photoroom-1.png', alt: 'Cocoa Butter', z: 3, rotate: '8deg', translateX: '-10%', scale: 1.1 },
];

export default function TableOfContentsSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 1);

    return (
        <section className="slide" id="slide-toc" ref={slideRef} style={{
            display: 'flex', alignItems: 'stretch',
            background: '#ffffff', overflow: 'hidden'
        }}>
            {/* Left Pane: Executive Summary + TOC */}
            <div style={{
                width: '50%', padding: '4rem 3rem 3rem 5rem',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                zIndex: 10, overflowY: 'auto',
                scrollbarWidth: 'none', msOverflowStyle: 'none'
            }}>
                {/* Label */}
                <span style={{
                    fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '3px',
                    color: '#ff6a00', marginBottom: '1.2rem', fontWeight: 700,
                    display: 'block'
                }}>Executive Summary</span>

                {/* Heading */}
                <h1 style={{
                    fontSize: '3rem', fontWeight: 800, color: '#012787',
                    lineHeight: 1.15, marginBottom: '1.5rem', letterSpacing: '-0.02em'
                }}>
                    What's Inside<br />
                    <span style={{ color: '#ff6a00' }}>This Proposal</span>
                </h1>

                {/* Summary Paragraph */}
                <p style={{
                    fontSize: '1.05rem', color: '#444', lineHeight: 1.7,
                    marginBottom: '2.5rem', maxWidth: '500px'
                }}>
                    Churchwin Trading Co. produces world-class natural products — but the
                    digital storefront doesn't match. This proposal outlines a{' '}
                    <strong style={{ color: '#012787' }}>90-day technical sprint</strong> to
                    transform an invisible online presence into a{' '}
                    <strong style={{ color: '#012787' }}>B2B revenue engine</strong>,
                    closing an estimated{' '}
                    <strong style={{ color: '#ff4444' }}>$150k+ monthly gap</strong>.
                </p>

                {/* TOC Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {TOC_ITEMS.map((item, i) => (
                        <div key={i} style={{
                            display: 'flex', alignItems: 'center', gap: '1.2rem',
                            padding: '0.85rem 1.2rem', borderRadius: '12px',
                            background: '#f8f9fb',
                            border: '1px solid rgba(1,39,135,0.06)',
                            transition: 'all 0.3s ease', cursor: 'default'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = 'rgba(1,39,135,0.05)';
                                e.currentTarget.style.borderColor = 'rgba(255,106,0,0.2)';
                                e.currentTarget.style.transform = 'translateX(4px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = '#f8f9fb';
                                e.currentTarget.style.borderColor = 'rgba(1,39,135,0.06)';
                                e.currentTarget.style.transform = 'translateX(0)';
                            }}
                        >
                            <span style={{
                                fontSize: '1.3rem', fontWeight: 800, color: '#ff6a00',
                                minWidth: '2.2rem', fontFamily: 'Montserrat, sans-serif'
                            }}>{item.num}</span>
                            <div style={{ flex: 1 }}>
                                <div style={{
                                    fontSize: '0.95rem', fontWeight: 700, color: '#012787',
                                    marginBottom: '0.1rem'
                                }}>{item.title}</div>
                                <div style={{
                                    fontSize: '0.75rem', color: '#888', lineHeight: 1.4
                                }}>{item.desc}</div>
                            </div>
                            <span style={{ color: '#ccc', fontSize: '1rem' }}>→</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Pane: Apple-style 3D Product Showcase */}
            <div style={{
                width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden'
            }}>
                {/* Soft radial gradient backdrop */}
                <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '120%', height: '120%',
                    background: 'radial-gradient(ellipse at center, rgba(1,39,135,0.04) 0%, rgba(255,106,0,0.03) 40%, transparent 70%)',
                    pointerEvents: 'none'
                }} />

                {/* 3D Product Stack — Apple-style perspective */}
                <div style={{
                    position: 'relative',
                    width: '100%', height: '70vh', maxHeight: '550px',
                    perspective: '1200px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    {HERO_PRODUCTS.map((product, i) => (
                        <div
                            key={i}
                            style={{
                                position: 'absolute',
                                transform: `translateX(${product.translateX}) rotateY(${product.rotate}) scale(${product.scale})`,
                                zIndex: product.z,
                                transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                transformStyle: 'preserve-3d',
                                cursor: 'default'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = `translateX(${product.translateX}) rotateY(${product.rotate}) scale(${product.scale * 1.08})`;
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = `translateX(${product.translateX}) rotateY(${product.rotate}) scale(${product.scale})`;
                            }}
                        >
                            <img
                                src={product.src}
                                alt={product.alt}
                                style={{
                                    height: '45vh',
                                    maxHeight: '400px',
                                    width: 'auto',
                                    objectFit: 'contain',
                                    filter: `drop-shadow(0 30px 40px rgba(0,0,0,0.25)) drop-shadow(0 60px 80px rgba(0,0,0,0.15))`,
                                    pointerEvents: 'none'
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom row: smaller supporting products */}
                <div style={{
                    position: 'absolute', bottom: '3rem',
                    display: 'flex', gap: '1.5rem', alignItems: 'flex-end',
                    justifyContent: 'center', width: '100%', padding: '0 2rem'
                }}>
                    {[
                        '/assets/images/PhotoshopExtension_Image (1).png',
                        '/assets/images/PhotoshopExtension_Image (2).png',
                        '/assets/images/PhotoshopExtension_Image (3).png',
                    ].map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Product ${i + 1}`}
                            style={{
                                height: '80px',
                                width: 'auto',
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
                                opacity: 0.7,
                                transition: 'opacity 0.3s, transform 0.3s',
                                cursor: 'default'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.opacity = '1';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.opacity = '0.7';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
