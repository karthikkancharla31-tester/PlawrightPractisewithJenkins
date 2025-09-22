
import {test,expect} from '@playwright/test'

test('Handling datepicker',async ({page})=>{

    await page.goto('https://jqueryui.com/datepicker/');

    //Hardcoded date
    const iFrame = page.frameLocator('[class="demo-frame"]');

    //await iFrame.locator('[id = "datepicker"]').fill('12/15/2024');

    //Selecting dynamic date

    //await iFrame.locator('[id = "datepicker"]').click();
    //await iFrame.locator('.ui-datepicker-today').click();

    //select prev date

    //await iFrame.locator('[id = "datepicker"]').click();
    //await iFrame.locator('[title = "Prev"]').click();
    //await iFrame.locator('[data-date="15"]').click();

    //select future date

    await iFrame.locator('[id = "datepicker"]').click();
    await iFrame.locator('[title = "Next"]').click();
    await iFrame.locator('[data-date="15"]').click();







});