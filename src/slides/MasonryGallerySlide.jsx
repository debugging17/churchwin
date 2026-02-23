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
                    <video className="premium-bento-item col-span-2 row-span-2" src="/assets/images/mansory/grok-video-7864786d-3736-496a-abd9-5b4b705fd073.mp4" autoPlay loop muted playsInline />
                    <img className="premium-bento-item col-span-2 row-span-2" src="/assets/images/mansory/pomelli-image(16).png" alt="Gallery Image 3" />
                    <img className="premium-bento-item col-span-1 row-span-1" src="/assets/images/mansory/8NONlPs-Ack6oO4nyCgOxL.png" alt="Gallery Image 1" />
                    <img className="premium-bento-item col-span-1 row-span-1" src="/assets/images/mansory/aUolXP5nNuu85KUmIIL_3H.png" alt="Gallery Image 2" />
                    <img className="premium-bento-item col-span-1 row-span-1" src="/assets/images/mansory/pomelli-image(1).png" alt="Gallery Image 4" />
                    <img className="premium-bento-item col-span-1 row-span-1" src="/assets/images/mansory/pomelli-image(13).png" alt="Gallery Image 5" />
                </div>
            </div>
        </section>
    );
}
