// Import Playwright module

import {test, expect} from '@playwright/test'

test('Test1',async ({page})=>{

await page.goto('https://github.com');
await page.getByRole('link', { name: 'Sign in' }).click();

await page.goto('https://github.com/login');
await page.getByRole('textbox', { name: 'Username or email address' }).click();
await page.getByRole('textbox', { name: 'Username or email address' }).fill('abcd@test.com');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('1234');
await page.getByRole('button', { name: 'Sign in', exact: true }).click();

await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');

});

test('Test2',async ({page})=>{
 expect(true).toBe(false);
});

test('Test3',async ({page})=>{
 expect(true).toBe(false);
});


