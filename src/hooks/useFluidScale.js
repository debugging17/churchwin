import { useEffect } from 'react';

/**
 * useFluidScale
 * 
 * Replaces the buggy CSS `transform: scale()` matrix with a pure Fluid REM engine.
 * Instead of letterboxing the container or breaking Swiper mouse physics, this script
 * dynamically calculates the user's monitor width relative to a 1920px "golden ratio"
 * and updates the underlying HTML root `font-size`.
 * 
 * Since our CSS is primarily built on `rem` (Relative EMs), everything—padding, gaps,
 * grid sizes, and typography—organically swishes into perfect, 4-corner full-screen 
 * proportions without any fake browser zooms.
 */
export function useFluidScale() {
    useEffect(() => {
        const handleResize = () => {
            // 1. Mobile & Small Tablets: Rest back to native 16px. 
            // Fluid scaling on tiny screens crushes text unreadably. 
            // Our media queries handle <768px perfectly.
            if (window.innerWidth <= 1024) {
                document.documentElement.style.fontSize = '16px';
                return;
            }

            // 2. Desktop Baseline: The design is mathematically perfect at 1920px width.
            const BASE_WIDTH = 1920;
            const widthRatio = window.innerWidth / BASE_WIDTH;

            // 3. Fluid Base Calculation: 
            // Standard browsers assume 1rem = 16px. 
            // If the screen is 1440px wide, the ratio is 0.75x.
            // 16px * 0.75 = 12px base root size.
            const fluidRemBase = 16 * widthRatio;

            // 4. Clamping Constraints:
            // Don't let 4K monitors blow up text to 40px base (looks goofy).
            // Don't let 1024px monitors shrink text below 10px (Chrome hard-caps around 9px anyway).
            const finalFontSize = Math.max(10, Math.min(fluidRemBase, 22));

            // 5. Inject the heart of the engine.
            // This single line propagates mathematically perfect scaling to every `.slide`, 
            // `.card`, and `.title` using `rem` units across the entire application instantly.
            document.documentElement.style.setProperty('font-size', `${finalFontSize}px`, 'important');
        };

        // Calculate immediately on mount
        handleResize();

        // Use a tiny 20ms debounce on resize events for silken performance
        let timeoutId;
        const debouncedResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(handleResize, 20);
        };

        window.addEventListener('resize', debouncedResize);

        return () => {
            window.removeEventListener('resize', debouncedResize);
            clearTimeout(timeoutId);
            // Reset if hook unmounts cleanly
            document.documentElement.style.fontSize = '16px';
        };
    }, []);
}
