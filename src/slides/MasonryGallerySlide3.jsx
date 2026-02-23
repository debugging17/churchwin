import { useRef } from "react";
import Masonry from "react-masonry-css";
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
            <div className="masonry-scroller" style={{ width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden", paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
                <Masonry
                    breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    <img className="premium-gallery-img" src="/assets/images/mansory/pomelli-image(1).png" alt="Baobab Powder Water" />
                    <img className="premium-gallery-img" src="/assets/images/mansory/pomelli-image(2).png" alt="Baobab Powder Kitchen" />
                    <img className="premium-gallery-img" src="/assets/images/mansory/pomelli-image(4).png" alt="Baobab Powder Juice" />
                    <img className="premium-gallery-img" src="/assets/images/mansory/pomelli-image(8).png" alt="Moringa Powder Surface" />
                    <img className="premium-gallery-img" src="/assets/images/mansory/bVungMUNZ9z3OJdh5woONe.png" alt="Baobab Oil Product Shot" />
                </Masonry>
            </div>
        </section>
    );
}
