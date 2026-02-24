import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

const BG_TEXTS = [
  "IMPACT",
  "SPECIALIST",
  "METHOD",
  "ENGINE",
  "RESULTS",
  "LOGIC",
  "AUDIT",
  "ANALYSIS",
  "STRATEGY",
  "SOLUTION",
  "BUILD",
];

export function useDeck(totalSlides) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const progressRef = useRef(null);
  const pageNumRef = useRef(null);
  const pageIndicatorRef = useRef(null);
  const bgTextRef = useRef(null);
  const currentIndexRef = useRef(0);
  const slidesRef = useRef([]);

  // Keep ref in sync with state
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  const updateUI = useCallback(
    (index) => {
      // Update page number
      if (pageNumRef.current) {
        pageNumRef.current.textContent = (index + 1)
          .toString()
          .padStart(2, "0");
      }

      // Update progress bar
      const percent = ((index + 1) / totalSlides) * 100;
      if (progressRef.current) {
        gsap.to(progressRef.current, { width: `${percent}%`, duration: 0.5 });
      }

      // Update background text
      if (bgTextRef.current) {
        bgTextRef.current.textContent = BG_TEXTS[index] || "CHURCHWIN";
        gsap.fromTo(
          bgTextRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 0.05, scale: 1, duration: 1 },
        );
      }

      // Handle Light Mode specifics for Nav
      // Swiper manages its ownDOM, so we look for the slide inside the swiper wrapper
      const currentSlide = slidesRef.current[index];
      const isLightSlide =
        currentSlide &&
        (currentSlide.classList.contains("slide-light") ||
          currentSlide.style.background === "#ffffff" ||
          currentSlide.style.backgroundColor === "#ffffff" ||
          currentSlide.style.background === "rgb(255, 255, 255)");

      if (isLightSlide) {
        gsap.to(".progress-bar", {
          background: "rgba(1, 39, 135, 0.15)",
          duration: 0.5,
        });
        gsap.to(".progress-fill", { background: "#012787", duration: 0.5 });
        if (pageIndicatorRef.current)
          pageIndicatorRef.current.style.color = "#012787";
        if (pageNumRef.current) pageNumRef.current.style.color = "#012787";
      } else {
        gsap.to(".progress-bar", {
          background: "rgba(255, 255, 255, 0.1)",
          duration: 0.5,
        });
        gsap.to(".progress-fill", { background: "#ffffff", duration: 0.5 });
        if (pageIndicatorRef.current)
          pageIndicatorRef.current.style.color = "#aab8c5";
        if (pageNumRef.current) pageNumRef.current.style.color = "#F1EEE2";
      }
    },
    [totalSlides],
  );

  const handleSlideChange = useCallback(
    (newSwiper) => {
      const index = newSwiper.activeIndex;
      const prevIndex = currentIndexRef.current;
      const direction = index > prevIndex ? "next" : "prev";

      setCurrentIndex(index);
      updateUI(index);

      // Dispatch custom event so slides can animate their content
      window.dispatchEvent(
        new CustomEvent("slideChange", {
          detail: { index, direction },
        }),
      );
    },
    [updateUI],
  );

  const gotoSlide = useCallback(
    (index) => {
      if (!swiper) return;
      swiper.slideTo(index);
    },
    [swiper],
  );

  // NOTE: Keyboard navigation is handled by Swiper's built-in Keyboard module.
  // Do NOT add a separate keydown handler here or slides will double-advance.

  // Sync slidesRef
  useEffect(() => {
    slidesRef.current = Array.from(document.querySelectorAll(".slide"));
  }, []);

  return {
    currentIndex,
    progressRef,
    pageNumRef,
    pageIndicatorRef,
    bgTextRef,
    gotoSlide,
    onSwiper: setSwiper,
    onSlideChange: handleSlideChange,
    updateUI
  };
}
