import { useEffect } from 'react';

/**
 * useViewportScale
 * 
 * Custom hook to dynamically calculate and apply a CSS transform scale
 * to the presentation deck. This ensures the 16:9 (1920x1080) slide content
 * perfectly fits edge-to-edge on any desktop/tablet screen size (like a 
 * PowerPoint or Figma prototype).
 * 
 * On mobile devices (<=768px), it disables scaling to allow native CSS 
 * fluid stacking and vertical scrolling.
 */
export function useViewportScale(enabled = true) {
    useEffect(() => {
        if (!enabled) return;

        const calculateScale = () => {
            // 1. Mobile Check: Do not scale, let fluid CSS handle it
            if (window.innerWidth <= 768) {
                document.documentElement.style.setProperty('--app-scale', '1');
                return;
            }

            // 2. Base Design Resolution (16:9)
            const BASE_WIDTH = 1920;
            const BASE_HEIGHT = 1080;

            // 3. Calculate Scale Factors
            const widthRatio = window.innerWidth / BASE_WIDTH;
            const heightRatio = window.innerHeight / BASE_HEIGHT;

            // 4. 'Contain' mode: scale by the most constrained dimension
            const scale = Math.min(widthRatio, heightRatio);

            // 5. Apply reasonable bounds (don't shrink to invisible, don't blow up 4k)
            // Max scale 1.25x so massive monitors don't look blurry pixelated.
            // Min scale 0.4x so it still fits on an old 1024x768 monitor cleanly.
            const finalScale = Math.max(0.4, Math.min(scale, 1.25));

            // 6. Inject as a CSS Variable at the root level
            document.documentElement.style.setProperty('--app-scale', finalScale.toString());
        };

        // Calculate immediately on mount
        calculateScale();

        // Listen for resize events with a small debounce/throttle for performance
        let timeoutId;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(calculateScale, 20); // 20ms debounce
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, [enabled]);
}
