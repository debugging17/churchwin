---
name: premium-visual-enhancement
description: Enhances the visual quality and premium lushness of the Churchwin web deck — a Vite/React SPA built with Swiper, GSAP, and Recharts. Applies cinematic micro-animations, richer glassmorphism, elevated typography hierarchy, and conversion-focused visual storytelling patterns.
---

# Premium Visual Enhancement Skill

## Project Context

This is a **full-screen horizontal Swiper deck** — a B2B sales proposal for Churchwin Trading Co. Every design decision should feel like it belongs in a Forbes 500 pitch, not a template.

### Design Token Reference

| Token | Value | Usage |
|---|---|---|
| `--bg-dark` | `#012787` | Primary navy background |
| `--bg-card` | `#001a57` | Card backgrounds |
| `--accent` | `#ff6a00` | CTA orange — use sparingly, maximum impact |
| `--text-main` | `#ffffff` | Primary text |
| `--text-mute` | `#f0f4f8` | Secondary text |
| `--border-radius-card` | `14px` | Card corners |
| `--transition-smooth` | `0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Spring easing |

### Typography Stack
- **Display/Headings**: `Montserrat` weight 800, `letter-spacing: -0.02em`
- **Body**: `Inter` or `Montserrat` weight 400–600
- **Labels**: `Montserrat` weight 700, `letter-spacing: 3px`, `text-transform: uppercase`
- **Scale**: All sizes use `clamp()` — always write `clamp(min, preferred vw, max)`

### CSS File Map
- `variables.css` — design tokens only
- `deck.css` — layout primitives (`.slide`, `.narrative-pane`, `.visual-pane`, `.headline-xl`, `.label`, `.body-xl`)
- `components.css` — component-level styles (cards, bento grids, charts, modals)
- `responsive.css` — breakpoint overrides (`@media max-width: 1024px`, `768px`, `480px`)

---

## Premium Visual Principles

### 1. Glassmorphism — The Signature Material
Every card, badge, and overlay panel in this deck uses **layered glassmorphism**. When adding or updating cards:

```css
/* Standard premium card */
background: rgba(255, 255, 255, 0.06);
border: 1px solid rgba(255, 255, 255, 0.12);
backdrop-filter: blur(20px) saturate(180%);
-webkit-backdrop-filter: blur(20px) saturate(180%);
box-shadow:
  0 8px 32px rgba(0, 0, 0, 0.3),
  inset 0 1px 0 rgba(255, 255, 255, 0.1);
border-radius: var(--border-radius-card);
```

**Accent card (orange highlight):**
```css
background: rgba(255, 106, 0, 0.12);
border: 1px solid rgba(255, 106, 0, 0.35);
box-shadow: 0 0 40px rgba(255, 106, 0, 0.15), inset 0 1px 0 rgba(255,255,255,0.08);
```

**Never use flat colours on cards. Always use rgba with blur.**

---

### 2. GSAP Animations — Already Wired
The `useSlideAnimation(slideRef, slideIndex)` hook handles per-slide entrance animation via GSAP. Each slide's children animate in sequence. To make an element animate:

1. Add `data-animate` attribute to any element in the slide JSX
2. GSAP will stagger-fade it in when the slide becomes active

For custom per-element cinematic effects, import GSAP directly:

```js
import { gsap } from 'gsap';

// Cinematic headline entrance
gsap.from(headlineRef.current, {
  y: 40,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  delay: 0.3,
});

// Stagger a list of cards
gsap.from(cardRefs.current, {
  y: 30,
  opacity: 0,
  duration: 0.7,
  stagger: 0.12,
  ease: 'power2.out',
});
```

---

### 3. Micro-Interactions — Every Interactive Element
All clickable/hoverable elements must have:
- **Transform lift**: `translateY(-4px)` on hover
- **Glow shadow**: box-shadow amplification on hover
- **Spring transition**: use `--transition-smooth` or `0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)`
- **Pointer cursor**: always `cursor: pointer`

```jsx
// Standard hover pattern (inline styles)
onMouseEnter={(e) => {
  e.currentTarget.style.transform = 'translateY(-4px)';
  e.currentTarget.style.boxShadow = '0 16px 48px rgba(255, 106, 0, 0.25)';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
}}
```

For CSS-class based hover (in `components.css`):
```css
.premium-card {
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
              box-shadow 0.3s ease;
}
.premium-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}
```

---

### 4. Gradient & Depth Layering
Slides should feel three-dimensional. Use this layer stack:

```
z-index 0  → background image / video
z-index 1  → gradient overlay (linear-gradient with rgba)
z-index 2  → secondary decorative layer (noise, svg pattern)
z-index 3  → ambient glow blobs (radial-gradient orbs)
z-index 10 → content (cards, text)
z-index 20 → floating UI (badges, tooltips)
```

**Ambient glow blobs** (add to any slide for depth):
```jsx
<div style={{
  position: 'absolute',
  width: '600px',
  height: '600px',
  background: 'radial-gradient(circle, rgba(255,106,0,0.08) 0%, transparent 70%)',
  top: '-100px',
  right: '-100px',
  pointerEvents: 'none',
  zIndex: 1,
}} />
```

**Noise overlay is already global** (`.noise-overlay` in `DeckContainer.jsx`) — do not re-add it per slide.

---

### 5. Typography Elevation
Never use plain white text on a dark background without enhancement:

```jsx
// Premium headline — the Churchwin standard
<h1 style={{
  fontSize: 'clamp(2.5rem, 5vw, 5.5rem)',
  fontWeight: 800,
  letterSpacing: '-0.03em',
  lineHeight: 1.05,
  textShadow: '0 4px 24px rgba(0,0,0,0.4)',
}}>
```

**Gradient text** (for key numbers or highlight words):
```jsx
<span style={{
  background: 'linear-gradient(135deg, #ffffff 30%, #ff6a00 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}}>
  $2.4M
</span>
```

**Metric/KPI numbers** — always go large and bold:
```css
font-size: clamp(3rem, 8vw, 7rem);
font-weight: 800;
letter-spacing: -0.04em;
line-height: 1;
```

---

### 6. Converting CTA Buttons
The deck's CTA style — always use this pattern, never a plain flat button:

```jsx
<button
  style={{
    background: 'linear-gradient(135deg, #ff6a00 0%, #ff8c40 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: 'clamp(0.9rem, 2vw, 1.2rem) clamp(2rem, 4vw, 3.5rem)',
    fontWeight: 800,
    fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    boxShadow: '0 8px 32px rgba(255, 106, 0, 0.35), inset 0 1px 0 rgba(255,255,255,0.2)',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
    e.currentTarget.style.boxShadow = '0 16px 48px rgba(255, 106, 0, 0.5)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 106, 0, 0.35), inset 0 1px 0 rgba(255,255,255,0.2)';
  }}
>
  ACTION LABEL
</button>
```

---

### 7. Bento Grid Cards (Data Slides)
The deck uses a bento-grid pattern on data slides. Reference class: `.bento-card` in `components.css`.

**KPI card anatomy:**
```
┌──────────────────────┐
│ BADGE (STATUS LABEL) │  ← tiny pill, top-right, accent or green
│                      │
│ H4 Title             │  ← 0.8rem, semibold, subdued
│ 52,931               │  ← .bento-big-num, clamp(1.8rem, 4vw, 3rem)
│ Monthly Visits       │  ← .bento-sub, muted, 0.85rem
│ ▃▅▇▆▅ (sparkline)   │  ← Recharts AreaChart, 40–50px height
│ ↗ Trend caption      │  ← 0.65rem, coloured to trend
└──────────────────────┘
```

---

### 8. Image & Video Handling
- All `<img>` tags: always include `loading="lazy"` and `decoding="async"` and `alt`
- Videos: always include `autoPlay muted playsInline loop` + programmatic `.play()` via `useEffect`
- `objectFit: 'cover'` on all media fills
- Never set fixed `width`/`height` in px on media — always use `clamp()` or percentages

---

### 9. Section Cover Slides
The `SectionCoverSlide` component accepts `theme="dark"` or `theme="light"`. When creating new section dividers, use this component rather than custom slides — it keeps the deck cohesive.

```jsx
<SectionCoverSlide
  num="07"
  title="Section Name"
  theme="dark"
  slideIndex={n}
/>
```

---

### 10. Common Premium Pitfalls to Avoid
| ❌ Don't | ✅ Do |
|---|---|
| Solid flat card backgrounds | `rgba()` + `backdrop-filter: blur()` |
| `border: 1px solid white` | `border: 1px solid rgba(255,255,255,0.12)` |
| Plain `font-size: 24px` | `font-size: clamp(1.2rem, 2.5vw, 2rem)` |
| `transition: all 0.3s` | `transition: transform 0.3s ease, box-shadow 0.3s ease` (never transition `all`) |
| Hardcoded colours (`#fff`) | CSS variables (`var(--text-main)`) |
| `overflow: hidden` on narrative pane | Already handled — don't re-add |
| Per-slide noise overlays | One global `.noise-overlay` in `DeckContainer` |
| `z-index: 999` | Use the layering scale: 0, 1, 2, 3, 10, 20 |

---

## How to Use This Skill

When asked to enhance a slide or component:

1. **Read the target slide file** first — never overwrite established layout logic
2. **Apply the glassmorphism card standard** to any opaque flat panels
3. **Add micro-interaction hover states** to all clickable elements
4. **Elevate typography** — upgrade plain text to gradient text, add text-shadow, tighten letter-spacing
5. **Add ambient glow blobs** if the slide lacks depth
6. **Verify `clamp()` is used** on every `font-size`, `padding`, and `width`
7. **Run `npm run lint` then `npm run build`** — zero errors required before committing
8. **Commit with prefix `design:`** e.g. `design: enhance glassmorphism on PricingSlide`
