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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffffff",
                position: "relative",
                overflowY: "hidden",
                overflowX: "hidden",
                padding: "0"
            }}
        >
            <div style={{ width: "100%", height: "100%" }}>
                <div className="bento-grid">
                    <img className="bento-item bento-large" src="/assets/images/mansory/pomelli-image(19).png" alt="Gallery Image 12" />
                    <img className="bento-item bento-regular" src="/assets/images/mansory/pomelli-image(6).png" alt="Gallery Image 13" />
                    <img className="bento-item bento-regular" src="/assets/images/mansory/pomelli-image(8).png" alt="Gallery Image 14" />
                    <img className="bento-item bento-regular" src="/assets/images/mansory/9d63CUgb8OZ71v4sh7AOvn.png" alt="Gallery Image 15" />
                    <img className="bento-item bento-regular" src="/assets/images/mansory/bVungMUNZ9z3OJdh5woONe.png" alt="Gallery Image 16" />
                </div>
            </div>
        </section>
    );
}
