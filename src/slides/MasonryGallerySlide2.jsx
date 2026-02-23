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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffffff",
                position: "relative",
                overflowY: "hidden", /* No vertical scroll to enforce slide flow */
                overflowX: "hidden",
                padding: "0" /* Removed padding for edge-to-edge */
            }}
        >
            <div style={{ width: "100%", height: "100%" }}>
                <div className="masonry-grid" style={{ height: "100%" }}>
                    <img className="masonry-item" src="/assets/images/mansory/pomelli-image(17).png" alt="Pomelli Image 17" />
                    <img className="masonry-item" src="/assets/images/mansory/pomelli-image(18).png" alt="Pomelli Image 18" />
                    <img className="masonry-item" src="/assets/images/mansory/pomelli-image(2).png" alt="Pomelli Image 2" />
                    <img className="masonry-item" src="/assets/images/mansory/pomelli-image(19).png" alt="Pomelli Image 19" />
                    <img className="masonry-item" src="/assets/images/mansory/pomelli-image(6).png" alt="Pomelli Image 6" />
                    <img className="masonry-item" src="/assets/images/mansory/pomelli-image(8).png" alt="Pomelli Image 8" />
                    <img className="masonry-item" src="/assets/images/mansory/9d63CUgb8OZ71v4sh7AOvn.png" alt="Pomelli Extra 1" />
                    <img className="masonry-item" src="/assets/images/mansory/bVungMUNZ9z3OJdh5woONe.png" alt="Pomelli Extra 2" />
                </div>
            </div>
        </section>
    );
}
