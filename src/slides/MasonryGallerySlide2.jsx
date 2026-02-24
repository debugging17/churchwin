import { useRef } from "react";
import Masonry from "react-masonry-css";
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
            <div className="masonry-scroller" style={{ width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden", paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
                <Masonry
                    breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    <img className="premium-gallery-img" src="/assets/images/mansory/pomelli-image.png" alt="African Black Soap Counter" />
                    <img className="premium-gallery-img" src="/assets/images/mansory/pomelli-image(19).png" alt="African Black Soap Ingredients" />
                    <img className="premium-gallery-img" src="/assets/images/mansory/pomelli-image(6).png" alt="Moringa Powder Scoop" />
                    <img className="premium-gallery-img" src="/assets/images/mansory/pomelli-image(9).png" alt="Moringa Powder Family" />
                    <img className="premium-gallery-img" src="/assets/images/mansory/pomelli-image(17).png" alt="African Black Soap Woman Setup" />
                    {/* ?v=2 busts browser cache for this updated image */}
                    <img className="premium-gallery-img" src="/assets/images/mansory/8NONlPs-Ack6oO4nyCgOxL.png?v=2" alt="Baobab Oil Dropper" />
                </Masonry>
            </div>
        </section>
    );
}
