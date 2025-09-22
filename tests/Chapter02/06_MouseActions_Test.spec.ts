
import {test,expect} from '@playwright/test'

test('Handling Mouse actions',async({page})=>{

    await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');

    //left click
    //await page.getByRole('link',{name:'Playwright by Testers Talk'}).first().click({button:'left'});

    //middle click

    //await page.getByRole('link',{name:'Playwright by Testers Talk'}).first().click({button:'middle'});

    //right click

    //await page.getByRole('link',{name:'Playwright by Testers Talk'}).first().click({button:'right'});

    //mouse hover

    await page.getByLabel('Search by voice').hover();

    //double click

    await page.getByLabel('Search by voice').dblclick();

});