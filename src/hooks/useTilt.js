import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useTilt(elementRef) {
    const paneRef = useRef(null);

    useEffect(() => {
        const pane = paneRef.current;
        if (!pane) return;

        const handleMouseMove = (e) => {
            const element = elementRef?.current || pane.querySelector('.headshot-frame, .product-hero, .kpi-modern, .browser-frame, .bento-grid');
            if (!element) return;

            const rect = pane.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            let depth = 20;
            if (element.classList.contains('product-hero-item')) depth = 50;
            if (element.classList.contains('main')) depth = 80;
            if (element.classList.contains('bento-grid')) depth = 15;

            gsap.to(element, {
                rotateX,
                rotateY,
                x: (x - centerX) / centerX * depth,
                y: (y - centerY) / centerY * depth,
                transformPerspective: 1000,
                duration: 0.8,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            const element = elementRef?.current || pane.querySelector('.headshot-frame, .product-hero, .kpi-modern, .browser-frame, .bento-grid');
            if (!element) return;

            gsap.to(element, {
                rotateX: 0,
                rotateY: 0,
                x: 0,
                y: 0,
                duration: 1,
                ease: "elastic.out(1, 0.5)"
            });
        };

        pane.addEventListener('mousemove', handleMouseMove);
        pane.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            pane.removeEventListener('mousemove', handleMouseMove);
            pane.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [elementRef]);

    return paneRef;
}
