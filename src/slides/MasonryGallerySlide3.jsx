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
                <div className="premium-bento-grid">
                    <img className="premium-bento-item" style={{ flex: "1 1 32%", height: "48%", objectPosition: "center" }} src="/assets/images/mansory/pomelli-image(1).png" alt="Baobab Powder Water" />
                    <img className="premium-bento-item" style={{ flex: "1 1 32%", height: "48%", objectPosition: "center" }} src="/assets/images/mansory/pomelli-image(2).png" alt="Baobab Powder Kitchen" />
                    <img className="premium-bento-item" style={{ flex: "1 1 32%", height: "48%", objectPosition: "center" }} src="/assets/images/mansory/pomelli-image(4).png" alt="Baobab Powder Juice" />
                    <img className="premium-bento-item" style={{ flex: "1 1 48%", height: "48%", objectPosition: "center" }} src="/assets/images/PhotoshopExtension_Image (5).png" alt="African Black Soap" />
                    <img className="premium-bento-item" style={{ flex: "1 1 48%", height: "48%", objectPosition: "center" }} src="/assets/images/baobab.png" alt="Baobab Box" />
                </div>
            </div>
        </section>
    );
}
