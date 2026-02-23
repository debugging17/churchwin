import { useRef } from "react";
import { useSlideAnimation } from "../hooks/useSlideAnimation";

export default function MasonryGallerySlide2() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 7);

    return (
        <section
            className="slide slide-light"
            id="slide-masonry-2"
            ref={slideRef}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffffff",
                position: "relative",
                overflowY: "hidden", /* No vertical scroll to enforce slide flow */
                overflowX: "hidden",
                padding: "0" /* Removed padding for edge-to-edge */
            }}
        >
            <div style={{ width: "100%", height: "100%" }}>
                <div className="bento-grid">
                    <img className="bento-item bento-wide" src="/assets/images/mansory/pomelli-image(4).png" alt="Gallery Image 6" />
                    <img className="bento-item bento-regular" src="/assets/images/mansory/pomelli-image(9).png" alt="Gallery Image 7" />
                    <img className="bento-item bento-regular" src="/assets/images/mansory/pomelli-image.png" alt="Gallery Image 8" />
                    <img className="bento-item bento-wide" src="/assets/images/mansory/pomelli-image(17).png" alt="Gallery Image 9" />
                    <img className="bento-item bento-regular" src="/assets/images/mansory/pomelli-image(18).png" alt="Gallery Image 10" />
                    <img className="bento-item bento-regular" src="/assets/images/mansory/pomelli-image(2).png" alt="Gallery Image 11" />
                </div>
            </div>
        </section>
    );
}
