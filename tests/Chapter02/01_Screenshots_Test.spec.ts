import { test, expect } from '@playwright/test';

test('Capture Screenshots in Playwright', async ({ page }) => {

    await page.goto('https://www.youtube.com/@testerstalk');

    //Element screenshot
     await page.locator('#page-header-container').screenshot({path:'./screenshots/ElementScreenshot.png'});
    //Page screenshot

    await page.screenshot({path:'./screenshots/PageScreenshot.png'});

    //Full Page screenshot

    await page.screenshot({path:'./screenshots/FullPageScreenshot.png',fullPage:true});

});