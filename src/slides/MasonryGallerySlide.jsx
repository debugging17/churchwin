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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffffff",
                position: "relative",
                overflowY: "hidden", /* Disabled scroll! It's an internal strict layout now */
                overflowX: "hidden",
                padding: "0" /* Removed padding for edge-to-edge */
            }}
        >
            <div style={{ width: "100%" }}>
                <div className="masonry-grid" style={{ height: "100vh" }}>
                    <img className="masonry-item" src="/assets/images/mansory/8NONlPs-Ack6oO4nyCgOxL.png" alt="Masonry Slide 1" />
                    <video className="masonry-item" src="/assets/images/mansory/grok-video-7864786d-3736-496a-abd9-5b4b705fd073.mp4" autoPlay loop muted playsInline />
                    <img className="masonry-item" src="/assets/images/mansory/aUolXP5nNuu85KUmIIL_3H.png" alt="Masonry Slide 3" />
                    <img className="masonry-item" src="/assets/images/mansory/pomelli-image(1).png" alt="Pomelli Image 1" />
                    <img className="masonry-item" src="/assets/images/mansory/pomelli-image(13).png" alt="Pomelli Image 13" />
                    <img className="masonry-item" src="/assets/images/mansory/pomelli-image(16).png" alt="Pomelli Image 16" />
                    <img className="masonry-item" src="/assets/images/mansory/pomelli-image(4).png" alt="Pomelli Image 4" />
                    <img className="masonry-item" src="/assets/images/mansory/pomelli-image(9).png" alt="Pomelli Image 9" />
                </div>
            </div>
        </section>
    );
}
