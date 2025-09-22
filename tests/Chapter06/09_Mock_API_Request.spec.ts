import { test, expect } from '@playwright/test'

test('Mock API request in Playwright', async ({ page }) => {

    //Mock API Request
    await page.route('*/**/api/v1/fruits', async route => {
        const json = [
            {
                name: 'karthik',
                age: 23
            },
            {
                name: 'banana',
                age: 12
            },
            {
                name: 'car',
                age: 20000
            },
            {
                name: 'cricket',
                age: 200
            }
        ];
        await route.fulfill({ json });
    })

    //go to URL 
    await page.goto('https://demo.playwright.dev/api-mocking/');

    //Validate Text
    await expect(page.getByText('karthik')).toBeVisible();
    await expect(page.getByText('banana')).toBeVisible();
    await expect(page.getByText('car')).toBeVisible();
    await expect(page.getByText('cricket')).toBeVisible();
});