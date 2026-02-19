import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Particles() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const particleCount = 20;
        const particles = [];

        for (let i = 0; i < particleCount; i++) {
            const p = document.createElement('div');
            const size = Math.random() * 4 + 1;
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.background = 'rgba(255, 255, 255, 0.3)';
            p.style.position = 'absolute';
            p.style.borderRadius = '50%';
            p.style.left = `${Math.random() * 100}%`;
            p.style.top = `${Math.random() * 100}%`;
            p.style.filter = `blur(${Math.random() * 2}px)`;
            container.appendChild(p);
            particles.push(p);

            gsap.to(p, {
                y: `-=${Math.random() * 100 + 50}`,
                x: `+=${Math.random() * 50 - 25}`,
                opacity: 0,
                duration: Math.random() * 5 + 5,
                repeat: -1,
                ease: "none",
                delay: Math.random() * 5
            });
        }

        return () => {
            particles.forEach(p => {
                gsap.killTweensOf(p);
                p.remove();
            });
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 2
            }}
        />
    );
}
