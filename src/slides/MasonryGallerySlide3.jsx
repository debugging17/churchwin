import { useRef } from "react";
import { useSlideAnimation } from "../hooks/useSlideAnimation";

export default function MasonryGallerySlide3() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 8); // Slide index 8

    return (
        <section
            className="slide slide-light"
            id="slide-masonry-3"
            ref={slideRef}
            style={{
                background: "#ffffff",
                position: "relative",
                overflow: "hidden",
                padding: "0 0 5.5rem 0"
            }}
        >
            <div style={{ width: "100%", height: "100%" }}>
                <div className="premium-bento-grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr" }}>
                    <img className="premium-bento-item" style={{ gridColumn: "span 1", gridRow: "span 1", objectPosition: "center" }} src="/assets/images/mansory/pomelli-image(1).png" alt="Baobab Powder Water" />
                    <img className="premium-bento-item" style={{ gridColumn: "span 1", gridRow: "span 1", objectPosition: "center" }} src="/assets/images/mansory/9d63CUgb8OZ71v4sh7AOvn.png" alt="African Black Soap Display" />
                    <img className="premium-bento-item" style={{ gridColumn: "span 1", gridRow: "span 1", objectPosition: "center" }} src="/assets/images/mansory/pomelli-image(8).png" alt="Moringa Powder Surface" />
                </div>
            </div>
        </section>
    );
}
