// Import Playwright module

import { test, expect } from '@playwright/test'
import path from 'path'
import { readExcelFile } from '../../src/utils/ExcelHelper'

const filepath = path.join(__dirname,'../../test-data/qa/testdata.xlsx');

const records = readExcelFile(filepath);



for (const record of records) {
    test(`Data driven testing using Excel file: ${record.email}`, async ({ page }) => {

        // Go to URL
        await page.goto(`${process.env.GITHUB_URL}`);

        // Click on Sigh In
        await page.getByRole('link', { name: 'Sign in' }).click();

        // Enter User Name and Password
        await page.getByRole('textbox', { name: 'Username or email address' }).click();
        await page.getByRole('textbox', { name: 'Username or email address' }).fill(record.email);

        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(record.pwd);

        await page.getByRole('button', { name: 'Sign in', exact: true }).click();

        // validate webpage tittle
        await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
    });

}







