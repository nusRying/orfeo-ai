const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        
        let errors = [];
        page.on('console', msg => {
            if (msg.type() === 'error') {
                errors.push(`[Console Error] ${msg.text()}`);
                console.log(`[Console Error] ${msg.text()}`);
            }
        });
        page.on('pageerror', error => {
            errors.push(`[Page Error] ${error.message}`);
            console.log(`[Page Error] ${error.message}`);
        });

        await page.goto('http://localhost:3000/en');
        await new Promise(r => setTimeout(r, 5000));
        
        console.log("Collected Errors:");
        console.log(errors.join("\n"));
        
        await browser.close();
        process.exit(0);
    } catch (e) {
        console.error("Puppeteer Script Error:", e);
        process.exit(1);
    }
})();
