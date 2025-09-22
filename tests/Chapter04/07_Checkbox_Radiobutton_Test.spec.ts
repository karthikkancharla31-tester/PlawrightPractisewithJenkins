import {test,expect}  from '@playwright/test'

test('Checkbox and radio buttons',async({page})=>{

    await page.goto('https://jqueryui.com/checkboxradio/');
        
    const iframe = page.frameLocator('[class="demo-frame"]');

    // Validate radio button or checkbox unchecked
    await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked();

    // Check radio button or checkbox
    await iframe.locator('[for="radio-1"]').check();

    // Validate radio button or checkbox checked
    await expect(iframe.locator('[for="radio-1"]')).toBeChecked();
});