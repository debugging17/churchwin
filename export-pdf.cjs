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

    // Hide the UI overlay elements that are not part of slide content
    await page.addStyleTag({
        content: `
      .progress-bar,
      .page-indicator,
      .noise-overlay,
      canvas           /* Particles canvas */
      { display: none !important; }
    `,
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
