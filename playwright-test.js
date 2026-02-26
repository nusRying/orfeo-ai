const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', err => errors.push('PAGE_ERROR: ' + err.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push('CONSOLE_ERROR: ' + msg.text());
  });
  page.on('response', response => {
    if (response.status() >= 400) {
      errors.push('NETWORK_ERROR ' + response.status() + ': ' + response.url());
    }
  });
  await page.goto('https://nusrying.github.io/orfeo-ai/', { waitUntil: 'networkidle' });
  console.log('Live Site Playwright found errors:', errors);
  await browser.close();
})();
