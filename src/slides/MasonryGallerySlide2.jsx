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
                background: "#ffffff",
                position: "relative",
                overflow: "hidden",
                padding: "0 0 5.5rem 0"
            }}
        >
            <div style={{ width: "100%", height: "100%" }}>
                <div className="premium-bento-grid" style={{ gridTemplateColumns: "1.12fr 1fr 1.12fr", gridTemplateRows: "1fr 1fr" }}>
                    <img className="premium-bento-item" style={{ gridColumn: "span 1", gridRow: "span 2", objectPosition: "center" }} src="/assets/images/mansory/pomelli-image.png" alt="African Black Soap Counter" />
                    <img className="premium-bento-item" style={{ gridColumn: "span 1", gridRow: "span 1", objectPosition: "center" }} src="/assets/images/mansory/pomelli-image(19).png" alt="African Black Soap Ingredients" />
                    <img className="premium-bento-item" style={{ gridColumn: "span 1", gridRow: "span 2", objectPosition: "center" }} src="/assets/images/mansory/pomelli-image(6).png" alt="Moringa Powder Scoop" />
                    <img className="premium-bento-item" style={{ gridColumn: "span 1", gridRow: "span 1", objectPosition: "center top" }} src="/assets/images/mansory/pomelli-image(9).png" alt="Moringa Powder Family" />
                </div>
            </div>
        </section>
    );
}
