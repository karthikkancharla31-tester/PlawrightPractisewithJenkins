import { test, expect } from '@playwright/test'



test('Handling Alert Popups', async ({ page }) => {

    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        dialog.accept();
        console.log(`Alert message: ${dialog.message()}`);
        console.log(`Dialog type is : ${dialog.type()}`);
    })

    await page.getByText('See an example alert', { exact: true }).click();
});

test('Handling Confirm Alert Popups', async ({ page }) => {

    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        console.log(`Dialog type is : ${dialog.type()}`);
        //dialog.accept();
        dialog.dismiss();
        console.log(`Alert message: ${dialog.message()}`);
    })

    await page.getByText('See a sample confirm', { exact: true }).click();
});

test('Handling Prompt Alert Popups', async ({ page }) => {

    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async (dialog) => {
        console.log(`Dialog type is : ${dialog.type()}`);
        console.log(`Alert message: ${dialog.message()}`);
        await dialog.accept('playwright');

    })

    await page.getByText('See a sample prompt', { exact: true }).click();
});