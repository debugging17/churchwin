import { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(Observer);

const BG_TEXTS = ["IMPACT", "SPECIALIST", "METHOD", "ENGINE", "RESULTS", "LOGIC", "AUDIT", "ANALYSIS", "STRATEGY", "SOLUTION", "BUILD"];

export function useDeck(totalSlides) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const progressRef = useRef(null);
    const pageNumRef = useRef(null);
    const bgTextRef = useRef(null);
    const isAnimatingRef = useRef(false);
    const currentIndexRef = useRef(0);

    // Keep ref in sync with state
    useEffect(() => {
        currentIndexRef.current = currentIndex;
    }, [currentIndex]);

    const updateUI = useCallback((index) => {
        // Update page number
        if (pageNumRef.current) {
            pageNumRef.current.innerText = (index + 1).toString().padStart(2, '0');
        }

        // Update progress bar
        const percent = ((index + 1) / totalSlides) * 100;
        if (progressRef.current) {
            gsap.to(progressRef.current, { width: `${percent}%`, duration: 0.5 });
        }

        // Update background text
        if (bgTextRef.current) {
            bgTextRef.current.innerText = BG_TEXTS[index] || "CHURCHWIN";
            gsap.fromTo(bgTextRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 0.05, scale: 1, duration: 1 }
            );
        }

        // Handle Light Mode specifics for Nav
        const slides = document.querySelectorAll('.slide');
        const currentSlide = slides[index];
        if (currentSlide && currentSlide.classList.contains('slide-light')) {
            gsap.to('.progress-bar', { background: 'rgba(8, 41, 88, 0.1)', duration: 0.5 });
            gsap.to('.page-indicator', { color: 'rgba(8, 41, 88, 0.6)', duration: 0.5 });
            gsap.to('.current-page', { color: '#082958', duration: 0.5 });
        } else {
            gsap.to('.progress-bar', { background: 'rgba(255, 255, 255, 0.1)', duration: 0.5 });
            gsap.to('.page-indicator', { color: '#aab8c5', duration: 0.5 });
            gsap.to('.current-page', { color: '#F1EEE2', duration: 0.5 });
        }
    }, [totalSlides]);

    const performSlideTransition = useCallback((index, direction) => {
        currentIndexRef.current = index;
        setCurrentIndex(index);
        updateUI(index);

        const tl = gsap.timeline({
            onComplete: () => { isAnimatingRef.current = false; }
        });

        // Horizontal slide transition — the core mechanic
        tl.to(containerRef.current, {
            x: (-100 * index) + "vw",
            duration: 1.2,
            ease: "power4.inOut"
        });

        // Dispatch custom event so slides can animate their content
        window.dispatchEvent(new CustomEvent('slideChange', {
            detail: { index, direction }
        }));
    }, [updateUI]);

    const gotoSlide = useCallback((index) => {
        if (isAnimatingRef.current || index < 0 || index >= totalSlides) return;
        isAnimatingRef.current = true;

        const direction = index > currentIndexRef.current ? 'next' : 'prev';

        // Special Exit Animation for Slide 1
        if (currentIndexRef.current === 0 && direction === 'next') {
            const tlExit = gsap.timeline({
                onComplete: () => {
                    performSlideTransition(index, direction);
                }
            });

            tlExit.to('.product-hero-item.main', { scale: 1.5, z: 200, opacity: 0, duration: 0.8, ease: "power2.in" }, 0);
            tlExit.to('.product-hero-item.left', { x: "-50vw", rotation: -45, opacity: 0, duration: 0.8, ease: "power2.in" }, 0.1);
            tlExit.to('.product-hero-item.right', { x: "50vw", rotation: 45, opacity: 0, duration: 0.8, ease: "power2.in" }, 0.1);
            tlExit.to('.hero-title', { scale: 0.5, opacity: 0, duration: 0.5 }, 0);

            return;
        }

        performSlideTransition(index, direction);
    }, [totalSlides, performSlideTransition]);

    // Helper to detect internal scroll areas
    const isInternalScroll = useCallback((target) => {
        const scrollable = target.closest('.slide');
        if (!scrollable) return false;
        if (scrollable.id === 'slide-6' && window.innerWidth <= 768) {
            return true;
        }
        return false;
    }, []);

    // Setup Observer and keyboard listeners
    useEffect(() => {
        const observer = Observer.create({
            target: window,
            type: "wheel,touch,pointer",
            onUp: (self) => {
                if (isInternalScroll(self.event.target)) return;
                gotoSlide(currentIndexRef.current - 1);
            },
            onDown: (self) => {
                if (isInternalScroll(self.event.target)) return;
                gotoSlide(currentIndexRef.current + 1);
            },
            wheelSpeed: -1,
            tolerance: 10,
            preventDefault: true
        });

        const handleKeydown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') gotoSlide(currentIndexRef.current + 1);
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') gotoSlide(currentIndexRef.current - 1);
        };

        window.addEventListener('keydown', handleKeydown);

        // Initialize UI for first slide
        updateUI(0);

        return () => {
            observer.kill();
            window.removeEventListener('keydown', handleKeydown);
        };
    }, [gotoSlide, isInternalScroll, updateUI]);

    return {
        currentIndex,
        containerRef,
        progressRef,
        pageNumRef,
        bgTextRef,
        gotoSlide,
    };
}
