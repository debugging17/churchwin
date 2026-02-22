import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 20;

export default function Particles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Prefer reduced motion — skip particles entirely
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const particles = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 4 + 1;
      const dur = Math.random() * 5 + 5;
      const delay = Math.random() * 5;
      const xDrift = Math.random() * 50 - 25;

      p.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                background: rgba(255, 255, 255, 0.3);
                position: absolute;
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                filter: blur(${Math.random() * 2}px);
                --x-drift: ${xDrift}px;
                --y-drift: ${-(Math.random() * 100 + 50)}px;
                animation: particleFloat ${dur}s linear ${delay}s infinite;
                will-change: transform, opacity;
            `;
      container.appendChild(p);
      particles.push(p);
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <>
      <style>{`
                @keyframes particleFloat {
                    0% { transform: translate(0, 0); opacity: 0.3; }
                    100% { transform: translate(var(--x-drift), var(--y-drift)); opacity: 0; }
                }
            `}</style>
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
    </>
  );
}
