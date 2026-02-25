import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    page.on('console', msg => {
        if (msg.type() === 'error') {
            console.log('PAGE ERROR:', msg.text());
        }
    });

    page.on('pageerror', err => {
        console.log('PAGE EXCEPTION:', err.message);
    });

    try {
        await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
        console.log('Page loaded successfully');
    } catch (e) {
        console.log('Failed to load:', e.message);
    }
    await browser.close();
})();
