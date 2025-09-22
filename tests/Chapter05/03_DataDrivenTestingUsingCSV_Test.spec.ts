// Import Playwright module

import { test, expect } from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'

type TestRecords = {
    email: string,
    pwd: string,
}

const records = parse(
    fs.readFileSync(path.join(__dirname, '../../test-data/qa/testdata.csv')),
    {
        columns: true,
        skipEmptyLines: true
    }
) as TestRecords[]

for (const record of records) {
    test(`Data driven testing using JSON file: ${record.email}`, async ({ page }) => {

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







