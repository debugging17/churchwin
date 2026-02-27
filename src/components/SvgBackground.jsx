/**
 * SvgBackground — decorative scattered SVG icon layer for white/light slides.
 * Absolutely positioned, pointer-events none, z-index 0.
 * Icons: leaf, jar, globe, cocoa bean, oil drop, plant, sparkle, shea nut
 */

const ICONS = [
    // ── LEAF ──────────────────────────────────────────────────────────────────
    {
        id: "leaf",
        path: `M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 2
           c1.9 0 3.6.6 5 1.7L5.7 17C4.6 15.6 4 13.9 4 12c0-4.4 3.6-8 8-8zm0 16
           c-1.9 0-3.6-.6-5-1.7L18.3 7C19.4 8.4 20 10.1 20 12c0 4.4-3.6 8-8 8z`,
        vb: "0 0 24 24",
    },
    // ── BOTANICAL LEAF 2 ──────────────────────────────────────────────────────
    {
        id: "leaf2",
        path: `M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20
           C19 20 22 3 22 3c-1 2-8 0-5 8a10.48 10.48 0 0 0 2 4 10 10 0 0 1-8-2
           c0-2 2-7 10-9 0 0-3 0-2-4z`,
        vb: "0 0 24 24",
    },
    // ── OIL DROP ──────────────────────────────────────────────────────────────
    {
        id: "drop",
        path: `M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z`,
        vb: "0 0 24 24",
    },
    // ── JAR / CONTAINER ───────────────────────────────────────────────────────
    {
        id: "jar",
        path: `M8 2h8l1 3H7L8 2zm-1 4h10a1 1 0 0 1 1 1v1H6V7a1 1 0 0 1 1-1zm-1
           3v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9H6zm3 3h6v1H9v-1zm0 3h6v1H9v-1z`,
        vb: "0 0 24 24",
    },
    // ── COCOA BEAN ────────────────────────────────────────────────────────────
    {
        id: "cocoa",
        path: `M12 3C7.58 3 4 6.58 4 11c0 2.55 1.17 4.83 3 6.35V20h10v-2.65
           C18.83 15.83 20 13.55 20 11c0-4.42-3.58-8-8-8zm0 2c3.31 0 6 2.69
           6 6 0 2.22-1.2 4.16-3 5.19V18H9v-1.81C7.2 15.16 6 13.22 6 11
           c0-3.31 2.69-6 6-6zm-2 4v2H8l4 5 4-5h-2V9h-4z`,
        vb: "0 0 24 24",
    },
    // ── PLANT / SPROUT ────────────────────────────────────────────────────────
    {
        id: "plant",
        path: `M12 22V12m0 0C12 7 7 5 3 6c0 4 3 8 9 6m0-6c0-5 5-7 9-6-1
           4-4 8-9 6`,
        vb: "0 0 24 24",
    },
    // ── GLOBE / TRADE ─────────────────────────────────────────────────────────
    {
        id: "globe",
        path: `M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 2c.9 0 1.9.15 2.8.43
           C14 5.5 13 7 12 7s-2-1.5-2.8-2.57A8 8 0 0 1 12 4zM4.2 9H7c.2 1.3.6
           2.5 1.1 3.5C5.9 11.5 4.7 10.4 4.2 9zM4 12a8 8 0 0 1 .1-1.3
           c.8.9 1.8 1.6 3 2 .1.5.2 1 .4 1.5C5.5 13.6 4.6 12.8 4 12zm8 8
           c-1 0-2.2-1.3-3-3.5.9.3 1.9.5 3 .5s2.1-.2 3-.5C14.2 18.7 13 20
           12 20zm0-5c-3.5 0-6-2.2-6-5 0-.5 0-1 .1-1.4.3 0 .6.1.9.1C9.5 9
           11 9.4 12 10c1-.6 2.5-1 4-1 .3 0 .6 0 .9-.1.1.4.1.9.1 1.4 0
           2.8-2.5 5-5 5zm4-.2c.2-.5.3-1 .4-1.5 1.2-.4 2.2-1.1 3-2
           .1.4.1.9.1 1.3-.6.8-1.5 1.6-3.5 2.2zm1.8-5.8c-.5 1.4-1.7
           2.5-3.1 3C16.4 11.5 16.8 10.3 17 9h2.8c-.2.4-.5.7-1 1z`,
        vb: "0 0 24 24",
    },
    // ── SPARKLE / STAR ────────────────────────────────────────────────────────
    {
        id: "sparkle",
        path: `M12 1l2.39 7.26L22 10.18l-5.95 5.54 1.67 8.05L12 19.77
           6.28 23.77l1.67-8.05L2 10.18l7.61-1.92z`,
        vb: "0 0 24 24",
    },
    // ── SHEA NUT ──────────────────────────────────────────────────────────────
    {
        id: "nut",
        path: `M12 2C9 2 5 5 5 9c0 5 4 9 7 11 3-2 7-6 7-11 0-4-4-7-7-7zm0 2
           c2 0 5 2.5 5 5 0 3.5-3 7-5 9-2-2-5-5.5-5-9 0-2.5 3-5 5-5zm0 3
           a2 2 0 0 0 0 4 2 2 0 0 0 0-4z`,
        vb: "0 0 24 24",
    },
    // ── FLASK / LAB ───────────────────────────────────────────────────────────
    {
        id: "flask",
        path: `M9 3v8L4.5 19A2 2 0 0 0 6.3 22h11.4a2 2 0 0 0 1.8-3L15
           11V3H9zm0 0h6M8 19h8`,
        vb: "0 0 24 24",
    },
];

const PLACEMENTS_LARGE = [
    // Grid 1 (y: 0 - 300)
    { icon: "leaf", x: 80, y: 90, size: 70, rot: -20 },
    { icon: "drop", x: 380, y: 150, size: 60, rot: 15 },
    { icon: "cocoa", x: 680, y: 70, size: 75, rot: 30 },
    { icon: "jar", x: 980, y: 160, size: 80, rot: -10 },

    // Grid 2 (y: 300 - 600)
    { icon: "plant", x: 150, y: 400, size: 85, rot: 0 },
    { icon: "sparkle", x: 450, y: 340, size: 50, rot: 20 },
    { icon: "globe", x: 750, y: 460, size: 80, rot: -5 },
    { icon: "flask", x: 1050, y: 380, size: 75, rot: 10 },

    // Grid 3 (y: 600 - 900)
    { icon: "leaf2", x: 100, y: 700, size: 80, rot: 45 },
    { icon: "nut", x: 400, y: 780, size: 65, rot: -30 },
    { icon: "cocoa", x: 700, y: 680, size: 75, rot: 15 },
    { icon: "sparkle", x: 1000, y: 750, size: 55, rot: -20 },

    // Grid 4 (y: 900 - 1200) - explicitly filling gaps like bottom left
    { icon: "drop", x: 120, y: 1050, size: 60, rot: 25 },
    { icon: "leaf", x: 420, y: 1000, size: 75, rot: 60 },
    { icon: "jar", x: 720, y: 1100, size: 70, rot: 35 },
    { icon: "plant", x: 1020, y: 1020, size: 85, rot: -10 },

    // Additional sprinkles to fill any remaining holes for a perfectly consistent wallpaper effect
    { icon: "leaf2", x: 270, y: 220, size: 55, rot: -15 },
    { icon: "sparkle", x: 840, y: 240, size: 45, rot: 45 },
    { icon: "nut", x: 1150, y: 90, size: 60, rot: 80 },

    { icon: "drop", x: 60, y: 550, size: 50, rot: -5 },
    { icon: "cocoa", x: 550, y: 590, size: 60, rot: 10 },

    { icon: "leaf2", x: 260, y: 930, size: 55, rot: -35 },
    { icon: "flask", x: 550, y: 980, size: 65, rot: -15 },

    { icon: "sparkle", x: 880, y: 920, size: 45, rot: 10 },
    { icon: "globe", x: 1150, y: 1150, size: 75, rot: -5 },
];

export default function SvgBackground({
    color = "#012787",
    opacity = 0.055, // Pulled back slightly further
}) {
    const iconMap = Object.fromEntries(ICONS.map((ic) => [ic.id, ic]));

    return (
        <div
            aria-hidden="true"
            className="svg-background-layer"
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
                overflow: "hidden",
            }}
        >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="churchwin-pattern" x="0" y="0" width="1200" height="1200" patternUnits="userSpaceOnUse">
                        <g fill={color} opacity={opacity}>
                            {PLACEMENTS_LARGE.map((p, i) => {
                                const ic = iconMap[p.icon];
                                if (!ic) return null;
                                return (
                                    <svg
                                        key={i}
                                        x={p.x}
                                        y={p.y}
                                        width={p.size}
                                        height={p.size}
                                        viewBox={ic.vb}
                                    >
                                        <g transform={`rotate(${p.rot}, 12, 12)`}>
                                            <path d={ic.path} />
                                        </g>
                                    </svg>
                                );
                            })}
                        </g>
                    </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#churchwin-pattern)" />
            </svg>
        </div>
    );
}
