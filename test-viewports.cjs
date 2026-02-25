const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  if (!fs.existsSync('screenshots')) fs.mkdirSync('screenshots');
  const browser = await chromium.launch();

  const viewports = [
    { name: 'ipad-vert', width: 768, height: 1024 },
    { name: 'ipad-horiz', width: 1024, height: 768 }
  ];

  const slides = [1, 2, 3, 5, 6, 15]; // Key slides

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // Slide 1
    if (slides.includes(1)) await page.screenshot({ path: `screenshots/${vp.name}-slide1.png` });

    // Advance and shoot
    for (let i = 2; i <= 15; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(600);
      if (slides.includes(i)) {
        await page.screenshot({ path: `screenshots/${vp.name}-slide${i}.png` });
      }
    }
    await page.close();
  }
  await browser.close();
  console.log('Screenshots generated in ./screenshots');
})();
