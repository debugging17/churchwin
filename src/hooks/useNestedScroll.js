import { useEffect } from "react";

/**
 * useNestedScroll
 *
 * Attaches to a scrollable container inside a Swiper slide (e.g. the masonry gallery scroller).
 * While the user is hovering that container, it disables Swiper's mousewheel so the inner
 * content can scroll freely. When the inner scroller reaches its top or bottom boundary,
 * Swiper's mousewheel is re-enabled so the deck can advance to the next slide.
 *
 * @param {React.RefObject} scrollerRef  - ref to the inner scrollable div
 * @param {React.RefObject} swiperRef    - ref to the Swiper instance (the swiper-container DOM node)
 */
export function useNestedScroll(scrollerRef, swiperRef) {
    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        // Swiper reads the `swiper-no-mousewheel` class on the event target's ancestors
        // to decide whether to handle the wheel event. Adding it to our scroller
        // prevents Swiper from stealing wheel events while the user scrolls inside.
        const SWIPER_NO_WHEEL_CLASS = "swiper-no-mousewheel";

        // Disable Swiper mousewheel on entry
        const onMouseEnter = () => {
            scroller.classList.add(SWIPER_NO_WHEEL_CLASS);
        };

        // Re-enable Swiper mousewheel on exit (safety net)
        const onMouseLeave = () => {
            scroller.classList.remove(SWIPER_NO_WHEEL_CLASS);
        };

        // On wheel, check boundaries — if at top/bottom edge, yield to Swiper
        const onWheel = (e) => {
            const { scrollTop, scrollHeight, clientHeight } = scroller;
            const atTop = scrollTop <= 0 && e.deltaY < 0;
            const atBottom = scrollTop + clientHeight >= scrollHeight - 1 && e.deltaY > 0;

            if (atTop || atBottom) {
                // At boundary: remove the no-wheel class so Swiper can advance
                scroller.classList.remove(SWIPER_NO_WHEEL_CLASS);
            } else {
                // Mid-scroll: keep Swiper locked out
                scroller.classList.add(SWIPER_NO_WHEEL_CLASS);
            }
        };

        scroller.addEventListener("mouseenter", onMouseEnter);
        scroller.addEventListener("mouseleave", onMouseLeave);
        scroller.addEventListener("wheel", onWheel, { passive: true });

        return () => {
            scroller.removeEventListener("mouseenter", onMouseEnter);
            scroller.removeEventListener("mouseleave", onMouseLeave);
            scroller.removeEventListener("wheel", onWheel);
            scroller.classList.remove(SWIPER_NO_WHEEL_CLASS);
        };
    }, [scrollerRef, swiperRef]);
}
