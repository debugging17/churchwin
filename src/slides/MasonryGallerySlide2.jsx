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
                background: "#ffffff",
                position: "relative",
                overflow: "hidden",
                padding: "0 0 5.5rem 0"
            }}
        >
            <div style={{ width: "100%", height: "100%" }}>
                <div className="premium-bento-grid">
                    <img className="premium-bento-item col-span-2 row-span-2" src="/assets/images/mansory/pomelli-image(17).png" alt="Hero Gallery Image 9" />
                    <img className="premium-bento-item col-span-2 row-span-2" src="/assets/images/mansory/pomelli-image(9).png" alt="Gallery Image 7" />
                    <img className="premium-bento-item col-span-1 row-span-1" src="/assets/images/mansory/pomelli-image(4).png" alt="Tall Gallery Image 6" />
                    <img className="premium-bento-item col-span-1 row-span-1" src="/assets/images/mansory/pomelli-image.png" alt="Gallery Image 8" />
                    <img className="premium-bento-item col-span-1 row-span-1" src="/assets/images/mansory/pomelli-image(18).png" alt="Gallery Image 10" />
                    <img className="premium-bento-item col-span-1 row-span-1" src="/assets/images/mansory/pomelli-image(2).png" alt="Gallery Image 11" />
                </div>
            </div>
        </section>
    );
}
