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
                overflow: "hidden",
                padding: "2rem"
            }}
        >
            <div style={{ width: "100%", maxWidth: "1200px" }}>
                <div className="masonry-grid">
                    <div className="masonry-col">
                        <div>
                            <img className="masonry-item" src="/assets/images/mansory/8NONlPs-Ack6oO4nyCgOxL.png" alt="Masonry Slide 1" />
                        </div>
                        <div>
                            <video className="masonry-item" src="/assets/images/mansory/grok-video-7864786d-3736-496a-abd9-5b4b705fd073.mp4" autoPlay loop muted playsInline />
                        </div>
                        <div>
                            <img className="masonry-item" src="/assets/images/mansory/aUolXP5nNuu85KUmIIL_3H.png" alt="Masonry Slide 3" />
                        </div>
                    </div>
                    <div className="masonry-col">
                        <div>
                            <img className="masonry-item" src="/assets/images/mansory/pomelli-image(1).png" alt="Pomelli Image 1" />
                        </div>
                        <div>
                            <img className="masonry-item" src="/assets/images/mansory/pomelli-image(13).png" alt="Pomelli Image 13" />
                        </div>
                        <div>
                            <img className="masonry-item" src="/assets/images/mansory/pomelli-image(16).png" alt="Pomelli Image 16" />
                        </div>
                    </div>
                    <div className="masonry-col">
                        <div>
                            <img className="masonry-item" src="/assets/images/mansory/pomelli-image(17).png" alt="Pomelli Image 17" />
                        </div>
                        <div>
                            <img className="masonry-item" src="/assets/images/mansory/pomelli-image(18).png" alt="Pomelli Image 18" />
                        </div>
                        <div>
                            <img className="masonry-item" src="/assets/images/mansory/pomelli-image(2).png" alt="Pomelli Image 2" />
                        </div>
                    </div>
                    <div className="masonry-col">
                        <div>
                            <img className="masonry-item" src="/assets/images/mansory/pomelli-image(19).png" alt="Pomelli Image 19" />
                        </div>
                        <div>
                            <img className="masonry-item" src="/assets/images/mansory/pomelli-image(6).png" alt="Pomelli Image 6" />
                        </div>
                        <div>
                            <img className="masonry-item" src="/assets/images/mansory/pomelli-image(8).png" alt="Pomelli Image 8" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
