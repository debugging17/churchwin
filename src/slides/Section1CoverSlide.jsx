import { useRef } from 'react';
import { useSlideAnimation } from '../hooks/useSlideAnimation';

const HERO_PRODUCTS = [
    { src: '/assets/images/Churchwin_B09ZF5HS5W-Shea-Butter_Listing-Images_Image-5-Photoroom.webp', alt: 'Shea Butter' },
    { src: '/assets/images/Churchwin_B08ZNQ6WGJ-Neem-Oil-8-Photoroom-2.webp', alt: 'Neem Oil' },
    { src: '/assets/images/Cocoa-Butter-Photoroom-1.png', alt: 'Cocoa Butter' },
    { src: '/assets/images/baobab.png', alt: 'Baobab' },
    { src: '/assets/images/moringa.webp', alt: 'Moringa' },
];

export default function Section1CoverSlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 2);

    return (
        <section className="slide" id="slide-section-cover" ref={slideRef} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#012787', position: 'relative', overflow: 'hidden'
        }}>
            {/* Top Right Mini Product Showcase Stamp */}
            <div style={{
                position: 'absolute', top: '5vh', right: '4vw',
                width: '32vh', height: '26vh', minWidth: '240px', minHeight: '190px',
                background: '#ffffff', borderRadius: '24px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                zIndex: 20, padding: '1rem'
            }}>
                <div style={{
                    position: 'relative',
                    width: '100%', height: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    {HERO_PRODUCTS.map((product, i) => {
                        let positionStyles = {};
                        if (i === 0) positionStyles = { position: 'absolute', left: '12%', bottom: '2%', zIndex: 12 };
                        if (i === 1) positionStyles = { position: 'absolute', left: '10%', top: '2%', zIndex: 10 };
                        if (i === 2) positionStyles = { position: 'relative', zIndex: 15 };
                        if (i === 3) positionStyles = { position: 'absolute', right: '10%', top: '2%', zIndex: 10 };
                        if (i === 4) positionStyles = { position: 'absolute', right: '10%', bottom: '2%', zIndex: 12 };

                        return (
                            <div key={i} style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center',
                                ...positionStyles
                            }}>
                                <img
                                    src={product.src}
                                    alt={product.alt}
                                    style={{
                                        maxHeight: '11vh',
                                        maxWidth: '7vw',
                                        objectFit: 'contain',
                                        filter: 'drop-shadow(-4px 6px 10px rgba(0,0,0,0.15))',
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Main Centered Content Card */}
            <div className="reveal-content" style={{
                background: '#ffffff', borderRadius: '16px',
                padding: '1.5rem 4rem 1.5rem 2rem',
                display: 'flex', alignItems: 'center', gap: '2.5rem',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                <span style={{
                    fontSize: '4.5rem', fontWeight: 800, color: '#ff6a00',
                    fontFamily: 'Montserrat, sans-serif', lineHeight: 1
                }}>
                    01
                </span>

                <h1 style={{
                    margin: 0, fontSize: '3.2rem', fontWeight: 800, color: '#012787',
                    letterSpacing: '-0.02em', whiteSpace: 'nowrap'
                }}>
                    The Current Reality
                </h1>
            </div>
        </section>
    );
}
