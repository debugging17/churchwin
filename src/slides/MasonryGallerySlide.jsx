import { useRef } from "react";
import { useSlideAnimation } from "../hooks/useSlideAnimation";

export default function MasonryGallerySlide() {
    const slideRef = useRef(null);
    useSlideAnimation(slideRef, 6);

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
            <div style={{ width: "100%", height: "100%" }}>
                <div className="premium-bento-grid">
                    <video className="premium-bento-item" style={{ flex: "1 1 50%", height: "48%", objectPosition: "center" }} src="/assets/images/mansory/grok-video-7864786d-3736-496a-abd9-5b4b705fd073.mp4" autoPlay loop muted playsInline />
                    <img className="premium-bento-item" style={{ flex: "1 1 48%", height: "48%", objectPosition: "center" }} src="/assets/images/mansory/pomelli-image(13).png" alt="ChurchWin Shea Butter Tin" />
                    <img className="premium-bento-item" style={{ flex: "1 1 32%", height: "48%", objectPosition: "center" }} src="/assets/images/mansory/pomelli-image(16).png" alt="African Black Soap Handheld" />
                    <img className="premium-bento-item" style={{ flex: "1 1 32%", height: "48%", objectPosition: "center" }} src="/assets/images/mansory/pomelli-image(17).png" alt="African Black Soap Woman" />
                    <img className="premium-bento-item" style={{ flex: "1 1 32%", height: "48%", objectPosition: "center" }} src="/assets/images/mansory/pomelli-image(18).png" alt="African Black Soap Floating" />
                </div>
            </div>
        </section>
    );
}
