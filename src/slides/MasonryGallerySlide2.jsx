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
                <div className="premium-bento-grid">
                    <img className="premium-bento-item" style={{ flex: "1 1 48%", height: "48%", objectPosition: "center" }} src="/assets/images/mansory/pomelli-image(19).png" alt="African Black Soap Ingredients" />
                    <img className="premium-bento-item" style={{ flex: "1 1 24%", height: "48%", objectPosition: "center" }} src="/assets/images/mansory/pomelli-image.png" alt="African Black Soap Counter" />
                    <img className="premium-bento-item" style={{ flex: "1 1 24%", height: "48%", objectPosition: "center" }} src="/assets/images/mansory/pomelli-image(6).png" alt="Moringa Powder Scoop" />
                    <img className="premium-bento-item" style={{ flex: "1 1 48%", height: "48%", objectPosition: "center top" }} src="/assets/images/mansory/pomelli-image(9).png" alt="Moringa Powder Family" />
                    <img className="premium-bento-item" style={{ flex: "1 1 48%", height: "48%", objectPosition: "center" }} src="/assets/images/mansory/pomelli-image(8).png" alt="Moringa Powder Surface" />
                </div>
            </div>
        </section>
    );
}
