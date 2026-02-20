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
                position: 'absolute', top: '4vh', right: '3vw',
                width: '26vh', height: '20vh', minWidth: '180px', minHeight: '140px',
                background: '#ffffff', borderRadius: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                zIndex: 20, padding: '0.5rem'
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
                                        maxHeight: '8vh',
                                        maxWidth: '5vw',
                                        objectFit: 'contain',
                                        filter: 'drop-shadow(-3px 4px 6px rgba(0,0,0,0.15))',
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Main Centered Content Card */}
            <div className="reveal-content" style={{
                display: 'flex', alignItems: 'center', gap: '2.5rem',
            }}>
                <span style={{
                    fontSize: '4.5rem', fontWeight: 800, color: '#ffffff',
                    fontFamily: 'Montserrat, sans-serif', lineHeight: 1
                }}>
                    01
                </span>

                <h1 style={{
                    margin: 0, fontSize: '3.2rem', fontWeight: 800, color: '#ffffff',
                    letterSpacing: '-0.02em', whiteSpace: 'nowrap'
                }}>
                    The Current Reality
                </h1>
            </div>
        </section>
    );
}
