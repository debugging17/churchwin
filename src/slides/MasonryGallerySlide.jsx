import { memo, useRef } from "react";
import Masonry from "react-masonry-css";
import { useSlideAnimation } from "../hooks/useSlideAnimation";
import { useNestedScroll } from "../hooks/useNestedScroll";
import SvgBackground from "../components/SvgBackground";

const MasonryGallerySlide = memo(function MasonryGallerySlide() {
    const slideRef = useRef(null);
    const scrollerRef = useRef(null);
    useSlideAnimation(slideRef, 6);
    useNestedScroll(scrollerRef);

    return (
        <section
            className="slide slide-light"
            id="slide-masonry"
            ref={slideRef}
            style={{
                background: "#ffffff",
                position: "relative",
                overflow: "hidden",
                padding: "0 0 5.5rem 0"
            }}
        >
            <SvgBackground opacity={0.05} />
            <div
                ref={scrollerRef}
                className="masonry-scroller"
                style={{ width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden", paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
            >
                <Masonry
                    breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    <video className="premium-gallery-img" src="/assets/images/mansory/grok-video-7864786d-3736-496a-abd9-5b4b705fd073.mp4" autoPlay={true} loop={true} muted={true} playsInline={true} />
                    <img className="premium-gallery-img" loading="lazy" decoding="async" src="/assets/images/mansory/pomelli-image(16).png" alt="African Black Soap Handheld" />
                    <img className="premium-gallery-img" loading="lazy" decoding="async" src="/assets/images/mansory/pomelli-image(13).png" alt="ChurchWin Shea Butter" />
                    <img className="premium-gallery-img" loading="lazy" decoding="async" src="/assets/images/mansory/pomelli-image(18).png" alt="African Black Soap Floating" />
                    <img className="premium-gallery-img" loading="lazy" decoding="async" src="/assets/images/mansory/9d63CUgb8OZ71v4sh7AOvn.png" alt="African Black Soap Square" />
                    <img className="premium-gallery-img" loading="lazy" decoding="async" src="/assets/images/mansory/aUolXP5nNuu85KUmIIL_3H.png" alt="African Black Soap Holding" />
                </Masonry>
            </div>
        </section>
    );
});

export default MasonryGallerySlide;
