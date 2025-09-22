
import {test,expect} from '@playwright/test'

test('Handling Keyboard actions',async({page})=>{

    await page.goto('https://www.google.com/');

    //Enter action from Keyboard
    //await page.getByLabel('Search',{exact:true}).first().click();

    //await page.getByLabel('Search',{exact:true}).first().fill("Playwright by Testers talk");

    //await page.getByLabel('Search',{exact:true}).first().press('Enter');

    //Selecting & Deleting from Keyboard

    //await page.getByLabel('Search',{exact:true}).first().click();
    //await page.keyboard.press('Ctrl + A');
    //await page.keyboard.press('Delete');

    //press Tab and Enter

    await page.getByLabel('Search',{exact:true}).first().click();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    


})