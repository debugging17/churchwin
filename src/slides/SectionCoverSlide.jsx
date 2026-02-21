import { useRef } from 'react';
import { useSlideAnimation } from '../hooks/useSlideAnimation';

const HERO_PRODUCTS = [
    { src: '/assets/images/Churchwin_B09ZF5HS5W-Shea-Butter_Listing-Images_Image-5-Photoroom.webp', alt: 'Shea Butter' },
    { src: '/assets/images/Churchwin_B08ZNQ6WGJ-Neem-Oil-8-Photoroom-2.webp', alt: 'Neem Oil' },
    { src: '/assets/images/Cocoa-Butter-Photoroom-1.png', alt: 'Cocoa Butter' },
    { src: '/assets/images/baobab.png', alt: 'Baobab' },
    { src: '/assets/images/moringa.webp', alt: 'Moringa' },
];

export default function SectionCoverSlide({ num, title, theme = 'dark', slideIndex }) {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, slideIndex);

    const isLight = theme === 'light';
    const bgColor = isLight ? '#ffffff' : '#012787';
    const textColor = isLight ? '#012787' : '#ffffff';

    return (
        <section className={`slide ${isLight ? 'slide-light' : ''}`} id={`slide-section-${num}`} ref={slideRef} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: bgColor, position: 'relative', overflow: 'hidden'
        }}>
            {/* Top Right Mini Product Showcase Stamp */}
            <div style={{
                position: 'absolute', top: '4vh', right: '3vw',
                width: '26vh', height: '20vh', minWidth: '180px', minHeight: '140px',
                background: '#ffffff', borderRadius: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: isLight ? '0 10px 40px rgba(0,0,0,0.1)' : '0 10px 30px rgba(0,0,0,0.2)',
                zIndex: 20, padding: '0.5rem', border: isLight ? '1px solid rgba(0,0,0,0.05)' : 'none'
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
                display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 2vw, 2.5rem)',
                flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center',
                padding: '0 2rem'
            }}>
                <span style={{
                    fontSize: 'clamp(3rem, 8vw, 4.5rem)', fontWeight: 800, color: textColor,
                    fontFamily: 'Montserrat, sans-serif', lineHeight: 1
                }}>
                    {num}
                </span>

                <h1 style={{
                    margin: 0, fontSize: 'clamp(2rem, 6vw, 3.2rem)', fontWeight: 800, color: textColor,
                    letterSpacing: '-0.02em', whiteSpace: 'normal', maxWidth: '100%'
                }}>
                    {title}
                </h1>
            </div>

            {/* Bottom Right Logo Stamp */}
            <div style={{
                position: 'absolute', bottom: '4vh', right: '3vw',
                background: '#ffffff', borderRadius: '12px',
                padding: '0.8rem 1.2rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: isLight ? '0 10px 40px rgba(0,0,0,0.1)' : '0 10px 30px rgba(0,0,0,0.2)',
                zIndex: 20, border: isLight ? '1px solid rgba(0,0,0,0.05)' : 'none'
            }}>
                <img
                    src="/assets/images/churchwin_logo_new.png"
                    alt="Churchwin Trading Co."
                    style={{ height: '5vh', minHeight: '40px', objectFit: 'contain' }}
                />
            </div>
        </section>
    );
}
