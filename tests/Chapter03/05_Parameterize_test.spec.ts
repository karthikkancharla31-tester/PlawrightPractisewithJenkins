import { test, expect } from '@playwright/test'

const searchKeyWords = ['abcd@test.com', 'efg@test.com', 'ijk@test.com']

for (const searchKeyWord of searchKeyWords) {

    test(`Parameterize Test1 ${searchKeyWord}`, async ({ page }) => {
        await page.goto('https://github.com');
        await page.getByRole('link', { name: 'Sign in' }).click();
        await page.goto('https://github.com/login');
        await page.getByRole('textbox', { name: 'Username or email address' }).click();
        await page.getByRole('textbox', { name: 'Username or email address' }).fill(searchKeyWord);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('1234');
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();
        await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
    });

}


