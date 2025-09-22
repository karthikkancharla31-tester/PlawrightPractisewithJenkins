
import {test,expect} from '@playwright/test'

/*test('Visual Comparison in Playwright',async({page})=>{

    await page.goto('https://www.github.com/login');
    //await expect(page).toHaveScreenshot('GitHubLoginPage.png');

    await page.locator('#login_field').fill('playwright');

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');


});*/

test('Element Visual Comparison in Playwright',async({page})=>{

    await page.goto('https://www.github.com/login');
    //await expect(page).toHaveScreenshot('GitHubLoginPage.png');
    const element = page.locator('[class="auth-form-body  mt-3"]');
    await expect(element).toHaveScreenshot('GitHubLoginForm.png');

    //await page.locator('#login_field').fill('playwright');

    //await expect(page).toHaveScreenshot('GitHubLoginPage.png');


});


