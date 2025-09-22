// Import Playwright module

import { test, expect } from '@playwright/test'

// write a test

test('Handling Multiple browsers/tabs', async ({ page, browser }) => {

    // Go to URL

    await page.goto('https://github.com');

    // Click on Sigh In

    await page.getByRole('link', { name: 'Sign in' }).click();


    // Enter User Name and Password
    await page.goto('https://github.com/login');

    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('abcd@test.com');

    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('1234');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    // validate webpage tittle

    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');

    //New Browser session

    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    await page2.goto('https://github.com/login');

    await page2.getByRole('textbox', { name: 'Username or email address' }).click();
    await page2.getByRole('textbox', { name: 'Username or email address' }).fill('abcd@test.com');

    await page2.getByRole('textbox', { name: 'Password' }).click();
    await page2.getByRole('textbox', { name: 'Password' }).fill('1234');
    await page2.getByRole('button', { name: 'Sign in', exact: true }).click();
    // validate webpage tittle

    await expect(page2.getByRole('alert')).toContainText('Incorrect username or password.');

    //New Tab

   
    const newTab = await context2.newPage();
    await newTab.goto('https://www.google.com');

    // await newTab.getByRole('textbox', { name: 'Username or email address' }).click();
    // await newTab.getByRole('textbox', { name: 'Username or email address' }).fill('efg@test.com');

});