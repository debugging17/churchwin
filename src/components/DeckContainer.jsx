import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";
import { useDeck } from "../hooks/useDeck";
import Particles from "./Particles";

// Import Swiper styles
import "swiper/css";

const TOTAL_SLIDES = 19;

const DeckContainer = memo(function DeckContainer({ children }) {
  const {
    progressRef,
    pageNumRef,
    pageIndicatorRef,
    bgTextRef,
    onSwiper,
    onSlideChange
  } = useDeck(TOTAL_SLIDES);

  return (
    <>
      {/* Floating Particles */}
      <Particles />

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Background Watermark */}
      <div className="bg-text" ref={bgTextRef}>
        IMPACT
      </div>

      {/* Main Deck */}
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={{
          forceToAxis: false,
          sensitivity: 1,
          thresholdDelta: 50,
          thresholdTime: 60,
          noMousewheelClass: "swiper-no-mousewheel",
        }}
        keyboard={{
          enabled: true,
        }}
        modules={[Mousewheel, Keyboard]}
        className="deck-container"
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
        speed={1000}
        resistance={true}
        resistanceRatio={0.5}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* UI Elements */}
      <div className="progress-bar">
        <div className="progress-fill" ref={progressRef} />
      </div>
      <div className="page-indicator" ref={pageIndicatorRef}>
        <span className="current-page" ref={pageNumRef}>
          01
        </span>{" "}
        / {TOTAL_SLIDES.toString().padStart(2, "0")}
      </div>
    </>
  );
});

export default DeckContainer;
