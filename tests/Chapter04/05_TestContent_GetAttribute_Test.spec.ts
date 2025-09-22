
import {test,expect}  from '@playwright/test'

test('Get Text and Get Attribute',async({page})=>{

    await page.goto('https://github.com/BakkappaN');

    const name = (await page.locator('[itemprop="name"]').textContent())?.trim();
    console.log(`Name is :${name}`);

    const innerName = (await page.locator('[itemprop="name"]').innerText())?.trim();
    console.log(`Inner Name is :${innerName}`);
    expect(innerName).toBe('Testers Talk');

    const attributeValue = await page.getByTestId('repositories').first().getAttribute('data-selected-links');

    console.log(`Attribute value is : ${attributeValue}`);

});