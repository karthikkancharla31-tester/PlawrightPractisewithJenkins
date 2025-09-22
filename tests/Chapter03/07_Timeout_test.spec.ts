// Import Playwright module

import { test, expect } from '@playwright/test'

// write a test

test('Handling Timeouts', async ({ page }) => {

    test.setTimeout(1*60*1000);

    // Go to URL

    await page.goto('https://github.com');

    // Click on Sigh In

    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.goto('https://github.com/login');

    await page.getByRole('textbox', { name: 'aUsername or email address' }).click({timeout:5000});
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('abcd@test.com');

    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('1234');

    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.',{timeout:5000});

    //await page.waitForTimeout(60000);


});
