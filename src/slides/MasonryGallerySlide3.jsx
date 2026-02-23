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
                <div className="premium-bento-grid" style={{ gridTemplateRows: "repeat(4, minmax(0, 1fr))" }}>
                    <img className="premium-bento-item col-span-2 row-span-2" src="/assets/images/mansory/pomelli-image(19).png" alt="Gallery Image 12" />
                    <img className="premium-bento-item" style={{ gridColumn: "span 1", gridRow: "span 2" }} src="/assets/images/mansory/pomelli-image(6).png" alt="Gallery Image 13" />
                    <img className="premium-bento-item" style={{ gridColumn: "span 1", gridRow: "span 2" }} src="/assets/images/mansory/pomelli-image(8).png" alt="Gallery Image 14" />
                    <img className="premium-bento-item col-span-2 row-span-2" src="/assets/images/mansory/9d63CUgb8OZ71v4sh7AOvn.png" alt="Gallery Image 15" />
                    <img className="premium-bento-item col-span-2 row-span-2" src="/assets/images/mansory/bVungMUNZ9z3OJdh5woONe.png" alt="Gallery Image 16" />
                </div>
            </div>
        </section>
    );
}
