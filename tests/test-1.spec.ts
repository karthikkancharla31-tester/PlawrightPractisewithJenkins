import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.goto('https://github.com/login');
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('bc@example.com');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('42535435665');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('Incorrect username or').click();
});