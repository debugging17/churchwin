import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

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
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const pageNumRef = useRef(null);
  const pageIndicatorRef = useRef(null);
  const bgTextRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const currentIndexRef = useRef(0);
  const slidesRef = useRef([]);

  // Keep ref in sync with state
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // Cache slide elements once after mount
  useEffect(() => {
    slidesRef.current = Array.from(document.querySelectorAll(".slide"));
  }, []);

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

  const performSlideTransition = useCallback(
    (index, direction) => {
      currentIndexRef.current = index;
      setCurrentIndex(index);
      updateUI(index);

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimatingRef.current = false;
        },
      });

      // Horizontal slide transition — the core mechanic
      tl.to(containerRef.current, {
        x: -100 * index + "vw",
        duration: 1.2,
        ease: "power4.inOut",
      });

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
      if (isAnimatingRef.current || index < 0 || index >= totalSlides) return;
      isAnimatingRef.current = true;

      const direction = index > currentIndexRef.current ? "next" : "prev";

      // Special Exit Animation for Slide 1
      if (currentIndexRef.current === 0 && direction === "next") {
        const tlExit = gsap.timeline({
          onComplete: () => {
            performSlideTransition(index, direction);
          },
        });

        tlExit.to(
          ".product-hero-item.main",
          { scale: 1.5, z: 200, opacity: 0, duration: 0.8, ease: "power2.in" },
          0,
        );
        tlExit.to(
          ".product-hero-item.left",
          {
            x: "-50vw",
            rotation: -45,
            opacity: 0,
            duration: 0.8,
            ease: "power2.in",
          },
          0.1,
        );
        tlExit.to(
          ".product-hero-item.right",
          {
            x: "50vw",
            rotation: 45,
            opacity: 0,
            duration: 0.8,
            ease: "power2.in",
          },
          0.1,
        );
        tlExit.to(".hero-title", { scale: 0.5, opacity: 0, duration: 0.5 }, 0);

        return;
      }

      // Special Exit Animation for Section Covers
      const currentSlide = slidesRef.current[currentIndexRef.current];
      if (currentSlide && currentSlide.id.startsWith("slide-section-")) {
        const numEl = currentSlide.querySelector(".section-cover-number");
        const titleEl = currentSlide.querySelector(".section-cover-title");
        const productStamp = currentSlide.querySelector(
          ".section-cover-product-stamp",
        );
        const logoStamp = currentSlide.querySelector(
          ".section-cover-logo-stamp",
        );

        if (numEl || titleEl) {
          const tlExit = gsap.timeline({
            onComplete: () => {
              performSlideTransition(index, direction);
            },
          });

          const dirSign = direction === "next" ? -1 : 1;

          if (numEl)
            tlExit.to(
              numEl,
              { y: -30, opacity: 0, duration: 0.3, ease: "power2.in" },
              0,
            );
          if (titleEl)
            tlExit.to(
              titleEl,
              { x: 30 * dirSign, opacity: 0, duration: 0.3, ease: "power2.in" },
              0.05,
            );
          if (productStamp)
            tlExit.to(
              productStamp,
              { y: -30, opacity: 0, duration: 0.3, ease: "power2.in" },
              0,
            );
          if (logoStamp)
            tlExit.to(
              logoStamp,
              { y: 30, opacity: 0, duration: 0.3, ease: "power2.in" },
              0,
            );

          return;
        }
      }

      performSlideTransition(index, direction);
    },
    [totalSlides, performSlideTransition],
  );

  const lastBoundaryHitRef = useRef(0);

  // Helper to detect internal scroll areas and interactive elements
  // Returns:
  // - false: NOT an internal scroll, ALLOW slide transition
  // - true: IS an internal scroll, BLOCK slide transition
  // - "boundary": Is at the boundary of an internal scroll, apply cooldown before allowing transition
  const isInternalScroll = useCallback((target, isVerticalSwipe = false, scrollDir = 0) => {
    // If a modal is open, don't allow slide navigation
    if (document.querySelector("[data-modal-overlay]")) return true;

    // If clicking on interactive elements, don't navigate
    if (
      target.closest("[data-interactive]") ||
      target.closest("button") ||
      target.closest("a")
    )
      return true;

    // 1. Detect inner scrollable containers (e.g., masonry galleries)
    let el = target;
    let innerScrollContainer = null;
    while (el && el !== document.body && !el.classList?.contains("slide")) {
      const style = window.getComputedStyle(el);
      if (
        style.overflow === "auto" ||
        style.overflow === "scroll" ||
        style.overflowY === "auto" ||
        style.overflowY === "scroll"
      ) {
        if (el.scrollHeight > el.clientHeight + 2) {
          innerScrollContainer = el;
          break;
        }
      }
      el = el.parentElement;
    }

    if (innerScrollContainer && isVerticalSwipe) {
      const atTop = innerScrollContainer.scrollTop <= 1;
      const atBottom =
        Math.ceil(innerScrollContainer.scrollTop + innerScrollContainer.clientHeight) >=
        innerScrollContainer.scrollHeight - 1;

      if (scrollDir === -1 && !atTop) return true; // Scrolling up, but not at top
      if (scrollDir === 1 && !atBottom) return true; // Scrolling down, but not at bottom
      if (scrollDir === 0) return true; // Strict block if no dir provided

      // If we are EXACTLY at the boundary trying to scroll past it, 
      // return a special flag to apply a time-based cooldown resistance
      return "boundary";
    }

    const scrollable = target.closest(".slide");
    if (!scrollable) return false;

    // 2. On mobile/tablet, block ONLY vertical swipe navigation if there is vertical overflow on the slide itself
    if (isVerticalSwipe && window.innerWidth <= 1024) {
      // Give a 5px threshold to avoid false positives on perfectly fit elements
      if (scrollable.scrollHeight > scrollable.clientHeight + 5) {
        const atTop = scrollable.scrollTop <= 1;
        const atBottom =
          Math.ceil(scrollable.scrollTop + scrollable.clientHeight) >=
          scrollable.scrollHeight - 1;

        if (scrollDir === -1 && !atTop) return true; // Scrolling up, not at top
        if (scrollDir === 1 && !atBottom) return true; // Scrolling down, not at bottom
        if (scrollDir === 0) return true; // strict block

        return "boundary"; // At boundary, apply cooldown
      }
    }

    if (scrollable.id === "slide-6" && window.innerWidth <= 768) {
      return true;
    }
    return false;
  }, []);

  // Setup Observer and keyboard listeners
  useEffect(() => {

    const handleObserverScroll = (self, isVertical, scrollDir, gotoOffset) => {
      const scrollStatus = isInternalScroll(self.event.target, isVertical, scrollDir);

      if (scrollStatus === true) {
        // Actively scrolling inside a valid container. 
        // Reset boundary timer so they have to start pushing again when they hit the end.
        lastBoundaryHitRef.current = Date.now();
        return;
      }

      if (scrollStatus === "boundary") {
        // They are pushing *against* the edge of a scrollable container.
        const now = Date.now();
        const timeSinceHit = now - lastBoundaryHitRef.current;

        if (timeSinceHit < 400) {
          // Cooldown active. Block the slide transition.
          // We don't update lastBoundaryHitRef here so the 400ms eventually expires
          // if they keep pushing.
          return;
        } else {
          // Cooldown over! They pushed intentionally hard enough.
          // Reset it for the next slide.
          lastBoundaryHitRef.current = Date.now();
        }
      }

      gotoSlide(currentIndexRef.current + gotoOffset);
    };

    // Observer handles trackpad, wheel, and pointer down/up (including touch)
    const observer = Observer.create({
      target: window,
      type: "wheel,touch,pointer",
      onUp: (self) => {
        // Wheel scrolled UP, or User swiped vertically Downwards (moving content up organically)
        handleObserverScroll(self, true, -1, -1);
      },
      onDown: (self) => {
        // Wheel scrolled DOWN, or User swiped vertically Upwards
        handleObserverScroll(self, true, 1, 1);
      },
      onLeft: (self) => {
        // User swiped horizontally Left (wanting next page on the right)
        handleObserverScroll(self, false, 0, 1);
      },
      onRight: (self) => {
        // User swiped horizontally Right (wanting prev page on the left)
        handleObserverScroll(self, false, 0, -1);
      },
      wheelSpeed: -1,
      tolerance: 30, // Increased tolerance to prevent micro-jitters from firing
      preventDefault: false, // allow native nested scrolling when needed
    });

    const handleKeydown = (e) => {
      // Don't navigate deck if a modal is open
      if (document.querySelector("[data-modal-overlay]")) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown")
        gotoSlide(currentIndexRef.current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp")
        gotoSlide(currentIndexRef.current - 1);
    };

    window.addEventListener("keydown", handleKeydown);

    // Initialize UI for first slide
    updateUI(0);

    return () => {
      observer.kill();
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [gotoSlide, isInternalScroll, updateUI]);

  return {
    currentIndex,
    containerRef,
    progressRef,
    pageNumRef,
    pageIndicatorRef,
    bgTextRef,
    gotoSlide,
  };
}
