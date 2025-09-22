// Import Playwright module

import {test, expect} from '@playwright/test'

// write a test

test('My First playwright test script',{tag:['@PlaywrightWithJenkins']},async ({page})=>{

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

});

//npx playwright test Chapter01/02_First_test.spec.ts --repeat-each=3 --project='firefox'