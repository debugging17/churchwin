/**
 * export-pdf.cjs
 *
 * Exports all slides from the Churchwin web presentation to a pixel-perfect PDF.
 *
 * Usage:
 *   1. Start the dev server in one terminal:  npm run dev
 *   2. In another terminal:                   node export-pdf.cjs
 *
 * Output:
 *   churchwin-proposal.pdf  (19 pages, 1920×1080 each)
 */

"use strict";

const { chromium } = require("playwright");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

// ─── Config ──────────────────────────────────────────────────────────────────
const URL = "http://localhost:5173";
const TOTAL_SLIDES = 19;
const VIEWPORT = { width: 1920, height: 1080 };
const SLIDE_SETTLE_MS = 2000;   // wait after each slide transition
const SLIDE_FIRST_MS = 3000;   // extra wait for the very first slide (GSAP intro)
const OUTPUT_FILE = path.join(__dirname, "churchwin-proposal.pdf");
const SCREENSHOTS_DIR = path.join(__dirname, ".pdf-screenshots");
// ─────────────────────────────────────────────────────────────────────────────

async function run() {
  // Make screenshot staging dir
  if (!fs.existsSync(SCREENSHOTS_DIR)) fs.mkdirSync(SCREENSHOTS_DIR);

  console.log("🚀 Launching Playwright (headless Chromium)…");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  // ── 1. Load the presentation ──────────────────────────────────────────────
  console.log(`📡 Loading ${URL}…`);
  await page.goto(URL, { waitUntil: "networkidle", timeout: 60_000 });

  // Wait for Swiper to initialise (it adds the class 'swiper-initialized')
  await page.waitForSelector(".swiper-initialized", { timeout: 15_000 });

  // Wait for web fonts
  await page.evaluate(() => document.fonts.ready);

  // ── PDF-Only Style Overrides ──────────────────────────────────────────────
  await page.addStyleTag({
    content: `
      /* Hide UI chrome that should NOT appear in PDF */
      .noise-overlay,
      canvas { display: none !important; }

      /* Progress bar + page number → visible, solid #012787 */
      .progress-bar {
        background: rgba(1, 39, 135, 0.2) !important;
      }
      .progress-fill {
        background: #012787 !important;
      }
      .page-indicator,
      .current-page {
        color: #012787 !important;
        text-shadow: none !important;
      }

      /* ── Cover Slide (Slide 1): PDF readability fix ──────────────────────
         The video background is static in a screenshot, so the original
         light overlay makes the orange subtitle unreadable.
         We dim the video and add a much stronger blue overlay via
         a pseudo-element, all scoped to #slide-1 only.
      ─────────────────────────────────────────────────────────────────── */

      /* Dim the video itself */
      #slide-1 video {
        opacity: 0.45 !important;
      }

      /* Strong dark overlay on top of everything except text */
      #slide-1::after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 3;  /* above video (z:1) and gradient overlay (z:2), below text (z:10) */
        background: linear-gradient(
          to bottom,
          rgba(1, 21, 51, 0.55) 0%,
          rgba(1, 39, 135, 0.78) 100%
        );
        pointer-events: none;
      }

      /* ── Cover Slide footer: white glassmorphism for PDF ─────────────────
         The footer card is too blue against the blue-heavy slide.
         Override to frosted-white panel with navy text — PDF only.
      ─────────────────────────────────────────────────────────────────── */

      /* Footer card — white glassmorphism */
      #slide-1 > div > div:last-child {
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.88) 0%,
          rgba(225, 235, 255, 0.80) 100%
        ) !important;
        border-top: 1px solid rgba(1, 39, 135, 0.18) !important;
        box-shadow: 0 -20px 48px rgba(1, 39, 135, 0.12),
                    inset 0 1px 0 rgba(255, 255, 255, 0.9) !important;
        backdrop-filter: blur(24px) !important;
        -webkit-backdrop-filter: blur(24px) !important;
      }

      /* Fix: plus-lighter blend mode renders text invisible on white.
         Reset to normal so #012787 shows correctly. */
      #slide-1 > div > div:last-child > div {
        mix-blend-mode: normal !important;
      }

      /* ALL text inside the footer → solid #012787, no glow */
      #slide-1 > div > div:last-child div,
      #slide-1 > div > div:last-child div > div:first-child,
      #slide-1 > div > div:last-child div > div:last-child {
        color: #012787 !important;
        text-shadow: none !important;
        -webkit-text-stroke: 0 !important;
      }
    `,
  });

  // ── Directly patch cover slide footer inline styles ───────────────────────
  // CSS !important cannot beat inline styles set via JSX. We must mutate the
  // element's .style object in JS to guarantee the colour actually applies.
  await page.evaluate(() => {
    const footer = document.querySelector("#slide-1 > div > div:last-child");
    if (!footer) return;

    // Inner wrapper — kill the plus-lighter blend mode
    const inner = footer.querySelector("div");
    if (inner) {
      inner.style.mixBlendMode = "normal";
      inner.style.color = "#012787";
    }

    // Every text div inside the footer → solid navy, no shadow
    footer.querySelectorAll("div").forEach((el) => {
      el.style.color = "#012787";
      el.style.textShadow = "none";
    });
  });

  console.log("✅ Presentation loaded. Starting slide capture…\n");

  // ── 2. Screenshot each slide ──────────────────────────────────────────────
  const screenshotPaths = [];

  for (let i = 0; i < TOTAL_SLIDES; i++) {
    // Navigate to the slide via the Swiper API exposed on window.swiper
    await page.evaluate((index) => {
      // Swiper instance is stored on the .swiper-initialized element
      const swiperEl = document.querySelector(".swiper-initialized");
      if (swiperEl && swiperEl.swiper) {
        swiperEl.swiper.slideTo(index, 0); // 0 ms = instant (no animation)
      }
    }, i);

    // Let the slide and any GSAP/CSS animations settle
    const waitMs = i === 0 ? SLIDE_FIRST_MS : SLIDE_SETTLE_MS;
    await page.waitForTimeout(waitMs);

    const slideNum = String(i + 1).padStart(2, "0");
    const filePath = path.join(SCREENSHOTS_DIR, `slide-${slideNum}.png`);

    await page.screenshot({ path: filePath, type: "png" });
    screenshotPaths.push(filePath);
    console.log(`  📸 Slide ${slideNum}/${TOTAL_SLIDES} captured`);
  }

  await browser.close();
  console.log("\n✅ All slides captured. Building PDF…");

  // ── 3. Stitch screenshots into a PDF ─────────────────────────────────────
  // Page size = 1920×1080 pt (1 pt = 1px in PDFKit by default)
  const doc = new PDFDocument({
    autoFirstPage: false,
    size: [VIEWPORT.width, VIEWPORT.height],
    margin: 0,
  });

  const output = fs.createWriteStream(OUTPUT_FILE);
  doc.pipe(output);

  for (const imgPath of screenshotPaths) {
    doc.addPage({ size: [VIEWPORT.width, VIEWPORT.height], margin: 0 });
    doc.image(imgPath, 0, 0, { width: VIEWPORT.width, height: VIEWPORT.height });
  }

  doc.end();

  await new Promise((resolve, reject) => {
    output.on("finish", resolve);
    output.on("error", reject);
  });

  // ── 4. Clean up staging screenshots ──────────────────────────────────────
  for (const f of screenshotPaths) fs.unlinkSync(f);
  fs.rmdirSync(SCREENSHOTS_DIR);

  console.log(`\n🎉 Done!  →  ${OUTPUT_FILE}`);
  console.log(`   ${TOTAL_SLIDES} pages · 1920×1080 px each`);
}

run().catch((err) => {
  console.error("❌ Export failed:", err);
  process.exit(1);
});
