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
    { src: '/assets/images/Churchwin_B09ZF5HS5W-Shea-Butter_Listing-Images_Image-5-Photoroom.webp', alt: 'Shea Butter' },
    { src: '/assets/images/Churchwin_B08ZNQ6WGJ-Neem-Oil-8-Photoroom-2.webp', alt: 'Neem Oil' },
    { src: '/assets/images/Cocoa-Butter-Photoroom-1.png', alt: 'Cocoa Butter' },
    { src: '/assets/images/baobab.png', alt: 'Baobab' },
    { src: '/assets/images/moringa.webp', alt: 'Moringa' },
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
            <div className="hide-scrollbar" style={{
                width: '45%', padding: '1.5rem 1rem 1.5rem 4rem',
                display: 'flex', flexDirection: 'column',
                zIndex: 10, overflowY: 'auto',
                scrollbarWidth: 'none', msOverflowStyle: 'none'
            }}>
                {/* Wrapper to naturally center content without clipping top if it is tall */}
                <div style={{ margin: 'auto 0' }}>
                    {/* Label */}
                    <span style={{
                        fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '3px',
                        color: '#ff6a00', marginBottom: '1rem', fontWeight: 700,
                        display: 'block'
                    }}>Executive Summary</span>

                    {/* Heading */}
                    <h1 style={{
                        marginTop: 0, // ensure no extra margin cuts it off
                        fontSize: '2.5rem', fontWeight: 800, color: '#012787',
                        lineHeight: 1.15, marginBottom: '0.6rem', letterSpacing: '-0.02em',
                        whiteSpace: 'nowrap'
                    }}>
                        What's Inside <span style={{ color: '#012787' }}>This Proposal</span>
                    </h1>

                    {/* Summary Paragraph */}
                    <p style={{
                        fontSize: '0.95rem', color: '#444', lineHeight: 1.5,
                        marginBottom: '0.8rem', maxWidth: '520px'
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
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {TOC_ITEMS.map((item, i) => (
                            <div key={i} style={{
                                display: 'flex', alignItems: 'center', gap: '1.2rem',
                                padding: '0.75rem 1.25rem', borderRadius: '12px',
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
                                    fontSize: '1.4rem', fontWeight: 800, color: '#ff6a00',
                                    minWidth: '2.2rem', fontFamily: 'Montserrat, sans-serif'
                                }}>{item.num}</span>
                                <div style={{ flex: 1 }}>
                                    <div style={{
                                        fontSize: '1rem', fontWeight: 700, color: '#012787',
                                        marginBottom: '0.1rem'
                                    }}>{item.title}</div>
                                    <div style={{
                                        fontSize: '0.85rem', color: '#666', lineHeight: 1.3
                                    }}>{item.desc}</div>
                                </div>
                                <span style={{ color: '#ccc', fontSize: '1.2rem' }}>→</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Pane: 100% 3D Product Showcase */}
            <div style={{
                width: '55%', display: 'flex', alignItems: 'stretch', justifyContent: 'center',
                position: 'relative', overflow: 'visible'
            }}>
                {/* Soft radial gradient backdrop */}
                <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '120%', height: '120%',
                    background: 'radial-gradient(ellipse at center, rgba(1,39,135,0.04) 0%, rgba(255,106,0,0.03) 40%, transparent 70%)',
                    pointerEvents: 'none', zIndex: 0
                }} />

                {/* 3D Product Assembly - Scattered Layout */}
                <div style={{
                    position: 'relative',
                    width: '100%', padding: '0 1rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    height: '100%', zIndex: 10,
                    perspective: '1200px'
                }}>
                    {HERO_PRODUCTS.map((product, i) => {
                        let positionStyles = {};
                        // 0: Shea (Bottom Left), 1: Neem (Top Left), 2: Cocoa (Center), 3: Baobab (Top Right), 4: Moringa (Bottom Right)
                        // Note: Using slightly offset left percentages because Shea container might be wider due to aspect ratio, 
                        // moving it to left: '10%' so it distances evenly from the center like Moringa does from the right.
                        if (i === 0) positionStyles = { position: 'absolute', left: '10%', bottom: '2%', zIndex: 12 };
                        if (i === 1) positionStyles = { position: 'absolute', left: '10%', top: '2%', zIndex: 10 };
                        if (i === 2) positionStyles = { position: 'relative', zIndex: 15 }; // Centered naturally 
                        if (i === 3) positionStyles = { position: 'absolute', right: '10%', top: '2%', zIndex: 10 };
                        if (i === 4) positionStyles = { position: 'absolute', right: '10%', bottom: '2%', zIndex: 12 };

                        return (
                            <div
                                key={i}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                    cursor: 'default',
                                    ...positionStyles
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-20px) scale(1.15)';
                                    e.currentTarget.style.zIndex = 20;
                                    e.currentTarget.querySelector('.floor-shadow').style.opacity = '0.5';
                                    e.currentTarget.querySelector('.floor-shadow').style.transform = 'scale(0.8)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.zIndex = positionStyles.zIndex;
                                    e.currentTarget.querySelector('.floor-shadow').style.opacity = '1';
                                    e.currentTarget.querySelector('.floor-shadow').style.transform = 'scale(1)';
                                }}
                            >
                                <img
                                    src={product.src}
                                    alt={product.alt}
                                    style={{
                                        height: '38vh',
                                        maxHeight: '400px',
                                        maxWidth: '26vw',
                                        objectFit: 'contain',
                                        filter: 'drop-shadow(-10px 10px 20px rgba(0,0,0,0.15)) drop-shadow(0 25px 35px rgba(0,0,0,0.1))',
                                        position: 'relative',
                                        zIndex: 2,
                                        pointerEvents: 'none'
                                    }}
                                />
                                {/* Distinct 3D Floor Shadow */}
                                <div
                                    className="floor-shadow"
                                    style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '10%',
                                        right: '10%',
                                        height: '24px',
                                        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)',
                                        zIndex: 1,
                                        transition: 'all 0.4s ease',
                                        pointerEvents: 'none'
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
