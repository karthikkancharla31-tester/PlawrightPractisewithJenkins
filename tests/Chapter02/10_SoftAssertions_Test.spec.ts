
import {test,expect} from '@playwright/test'

test('Handing Assertions',async({page})=>{

    await page.goto("https://www.youtube.com/");

    //visible, editable, enabled, empty
    await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
    await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
    await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEnabled();
    await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEmpty();

    //URL, Title, Text, Count

    await page.getByPlaceholder('Search',{exact:true}).first().click();
    await page.getByPlaceholder('Search',{exact:true}).first().fill('Playwright by Testers Talk');
    await page.getByPlaceholder('Search',{exact:true}).first().press('Enter');

    await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright+by+Testers+Talk');

    await expect.soft(page).toHaveTitle('Playwright abc by Testers Talk - YouTube');

    await expect(page.locator('span[id="title"]').first()).toHaveText('People also watched');
    
    await expect(page.locator('span[id="title"]')).toHaveCount(1);


});