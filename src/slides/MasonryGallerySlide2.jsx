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
                <div className="bento-grid">
                    <img className="bento-item bento-tall" src="/assets/images/mansory/pomelli-image(17).png" alt="Gallery Image 9" />
                    <img className="bento-item bento-large" src="/assets/images/mansory/pomelli-image(18).png" alt="Gallery Image 10" />
                    <img className="bento-item bento-regular" src="/assets/images/mansory/pomelli-image(2).png" alt="Gallery Image 11" />
                    <img className="bento-item bento-tall" src="/assets/images/mansory/pomelli-image(19).png" alt="Gallery Image 12" />
                    <img className="bento-item bento-large" src="/assets/images/mansory/pomelli-image(6).png" alt="Gallery Image 13" />
                    <img className="bento-item bento-regular" src="/assets/images/mansory/pomelli-image(8).png" alt="Gallery Image 14" />
                    <img className="bento-item bento-regular" src="/assets/images/mansory/9d63CUgb8OZ71v4sh7AOvn.png" alt="Gallery Image 15" />
                    <img className="bento-item bento-regular" src="/assets/images/mansory/bVungMUNZ9z3OJdh5woONe.png" alt="Gallery Image 16" />
                </div>
            </div>
        </section>
    );
}
