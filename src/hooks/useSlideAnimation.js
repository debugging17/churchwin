import { useEffect, useCallback } from 'react';
import gsap from 'gsap';

export function useSlideAnimation(slideRef, slideIndex) {

    const animateEntrance = useCallback((direction) => {
        const slide = slideRef.current;
        if (!slide) return;

        // Slide 1: Cover — special entrance
        if (slideIndex === 0) {
            gsap.set('.product-hero-item', { clearProps: "all" });
            gsap.set('.hero-title', { opacity: 0.15, scale: 0.9, clearProps: "transform" });

            gsap.fromTo('.product-hero-item.main',
                { yPercent: 5 },
                { yPercent: -5, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" }
            );
            gsap.fromTo('.product-hero-item.left',
                { yPercent: -10, rotation: -18 },
                { yPercent: 10, rotation: -12, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 }
            );
            gsap.fromTo('.product-hero-item.right',
                { yPercent: 10, rotation: 12 },
                { yPercent: -10, rotation: 18, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 }
            );

            const heroTitle = slide.querySelector('.hero-title');
            if (heroTitle) {
                gsap.fromTo(heroTitle,
                    { scale: 1.5, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
                );
            }

            const heroImg = slide.querySelector('.hero-img');
            if (heroImg) {
                gsap.fromTo(heroImg,
                    { y: "100%", opacity: 0 },
                    { y: "0%", opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.3 }
                );
            }

            const products = slide.querySelectorAll('.collage-item');
            if (products.length > 0) {
                gsap.fromTo(products,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, stagger: 0.1, delay: 1 }
                );
            }
            return;
        }

        // Slide 2: Specialist entrance
        if (slideIndex === 1) {
            const label = slide.querySelector('.label');
            const headline = slide.querySelector('.headline-xl');
            const body = slide.querySelector('.body-xl');
            const profileFrame = slide.querySelector('.profile-frame');

            gsap.set([label, headline, body, profileFrame].filter(Boolean), { clearProps: "all" });

            if (label) gsap.fromTo(label, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8, delay: 0.2 });
            if (headline) gsap.fromTo(headline, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 });
            if (body) gsap.fromTo(body, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 });
            if (profileFrame) {
                gsap.fromTo(profileFrame,
                    { scale: 0.8, opacity: 0, rotationY: -15 },
                    { scale: 1, opacity: 1, rotationY: 0, duration: 1.2, ease: "back.out(1.7)", delay: 0.4 }
                );
            }
            return;
        }

        // Section Cover Slides
        if (slide.id.startsWith('slide-section-')) {
            const numEl = slide.querySelector('.section-cover-number');
            const titleEl = slide.querySelector('.section-cover-title');
            const productStamp = slide.querySelector('.section-cover-product-stamp');
            const logoStamp = slide.querySelector('.section-cover-logo-stamp');

            gsap.set([numEl, titleEl, productStamp, logoStamp].filter(Boolean), { clearProps: "transform,opacity" });

            const dirSign = direction === 'next' ? 1 : -1;

            if (numEl) gsap.fromTo(numEl, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.5)", delay: 0.2 });
            if (titleEl) gsap.fromTo(titleEl, { x: 50 * dirSign, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.3 });
            if (productStamp) gsap.fromTo(productStamp, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.2)", delay: 0.4 });
            if (logoStamp) gsap.fromTo(logoStamp, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.2)", delay: 0.5 });
            return;
        }

        // Standard Animation for other slides

        // 1. Headlines
        const headline = slide.querySelector('.headline-xl');
        if (headline && headline.querySelectorAll('.char').length > 0) {
            gsap.fromTo(headline.querySelectorAll('.char'),
                { y: 100, opacity: 0, rotateZ: 5 },
                { y: 0, opacity: 1, rotateZ: 0, duration: 0.8, stagger: 0.02, ease: "power4.out", delay: 0.2 }
            );
        } else if (headline) {
            gsap.fromTo(headline,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
            );
        }

        // 2. Body & Labels
        const bodyTexts = slide.querySelectorAll('p, .label, .checklist-item');
        if (bodyTexts.length > 0) {
            gsap.fromTo(bodyTexts,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power2.out", delay: 0.4 }
            );
        }

        // 3. Bento Grid Stagger
        const bentoCards = slide.querySelectorAll('.bento-card');
        if (bentoCards.length > 0) {
            gsap.fromTo(bentoCards,
                { y: 50, opacity: 0, scale: 0.9 },
                { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)", delay: 0.4 }
            );
        }

        // 4. Visual Pane general animation
        const visual = slide.querySelector('.visual-pane > *:not(.bento-grid)');
        if (visual) {
            gsap.fromTo(visual,
                { scale: 0.9, x: direction === 'next' ? 50 : -50, opacity: 0, rotateY: direction === 'next' ? 10 : -10 },
                { scale: 1, x: 0, opacity: 1, rotateY: 0, duration: 1.2, ease: "back.out(1.2)", delay: 0.2 }
            );
        }
    }, [slideIndex, slideRef]);

    // Listen for slide change events
    useEffect(() => {
        const handleSlideChange = (e) => {
            const { index, direction } = e.detail;
            if (index === slideIndex) {
                animateEntrance(direction);
            }
        };

        window.addEventListener('slideChange', handleSlideChange);
        return () => window.removeEventListener('slideChange', handleSlideChange);
    }, [slideIndex, animateEntrance]);

    // Initial animation for slide 0
    useEffect(() => {
        if (slideIndex === 0) {
            const timer = setTimeout(() => animateEntrance('next'), 100);
            return () => clearTimeout(timer);
        }
    }, [slideIndex, animateEntrance]);

    return { animateEntrance };
}
