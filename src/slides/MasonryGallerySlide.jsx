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
                    <div className="masonry-col">
                        <div style={{ flex: 1 }}>
                            <img className="masonry-item" src="/assets/images/mansory/8NONlPs-Ack6oO4nyCgOxL.png" alt="Masonry Slide 1" style={{ height: "100%" }} />
                        </div>
                        <div style={{ flex: 1.5 }}>
                            <video className="masonry-item" src="/assets/images/mansory/grok-video-7864786d-3736-496a-abd9-5b4b705fd073.mp4" autoPlay loop muted playsInline style={{ height: "100%" }} />
                        </div>
                    </div>
                    <div className="masonry-col">
                        <div style={{ flex: 1.5 }}>
                            <img className="masonry-item" src="/assets/images/mansory/aUolXP5nNuu85KUmIIL_3H.png" alt="Masonry Slide 3" style={{ height: "100%" }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <img className="masonry-item" src="/assets/images/mansory/pomelli-image(1).png" alt="Pomelli Image 1" style={{ height: "100%" }} />
                        </div>
                    </div>
                    <div className="masonry-col">
                        <div style={{ flex: 1 }}>
                            <img className="masonry-item" src="/assets/images/mansory/pomelli-image(13).png" alt="Pomelli Image 13" style={{ height: "100%" }} />
                        </div>
                        <div style={{ flex: 1.2 }}>
                            <img className="masonry-item" src="/assets/images/mansory/pomelli-image(16).png" alt="Pomelli Image 16" style={{ height: "100%" }} />
                        </div>
                    </div>
                    <div className="masonry-col">
                        <div style={{ flex: 1 }}>
                            <img className="masonry-item" src="/assets/images/mansory/pomelli-image(4).png" alt="Pomelli Image 4" style={{ height: "100%" }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <img className="masonry-item" src="/assets/images/mansory/pomelli-image(9).png" alt="Pomelli Image 9" style={{ height: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
