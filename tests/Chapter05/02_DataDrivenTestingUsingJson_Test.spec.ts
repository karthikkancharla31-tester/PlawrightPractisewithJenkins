// Import Playwright module

import { test, expect } from '@playwright/test'

import testData from '../../test-data/qa/testdata.json'


type TestData = {

    TestDataSet1: {
        email: string,
        pwd: string
    },
    TestDataSet2: {
        email: string,
        pwd: string
    },
}

const typedTestData = testData as TestData;

for (const dataSetName in typedTestData) {

    const user = typedTestData[dataSetName as keyof TestData];

    test(`Data driven testing using JSON file: ${user.email}`, async ({ page }) => {

        // Go to URL
        await page.goto(`${process.env.GITHUB_URL}`);

        // Click on Sigh In
        await page.getByRole('link', { name: 'Sign in' }).click();

        // Enter User Name and Password
        await page.getByRole('textbox', { name: 'Username or email address' }).click();
        await page.getByRole('textbox', { name: 'Username or email address' }).fill(user.email);

        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(user.pwd);
        
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();
        
        // validate webpage tittle
        await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
    });
}



