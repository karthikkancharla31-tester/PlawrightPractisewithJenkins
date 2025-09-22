import { test, expect } from '@playwright/test';

test('Locators in Playwright', async ({ page }) => {

    //await page.goto('https://github.com/BakkappaN');

    //getByRole

    //await page.getByRole('link',{name:'Sign in'}).click();

    //getByLabel

    //await page.getByLabel('Homepage',{exact:true}).first().click();

    //getByAltText

    //await page.getByAltText("View BakkappaN's full-sized avatar").click();

    //getByTestId

    //await page.getByTestId("repositories").first().click();

    //getByText

    //await page.getByText("Sign up").first().click();

    //getByPlaceHolder, XPath ,CSSSelectors

    //await expect(page.getByPlaceholder("Search or jump to...")).toBeVisible();

    //await page.goto("https://www.youtube.com/@testerstalk")

    //xpath

   // await page.locator('//input[@name="search_query"]').fill('testers talk');

    //css
    
    //await page.locator('input[name="search_query"]').first().fill('testers talk');

    // getByTitle

    await page.goto("https://www.google.com");
    await page.getByTitle('Search').fill('Testers talk');




});