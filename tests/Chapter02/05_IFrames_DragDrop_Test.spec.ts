
import {test,expect} from '@playwright/test'

test('Handling IFrames, DragAndDrops elements in Playwright',async({page})=>{

    await page.goto('https://jqueryui.com/droppable/');

    const iFrame = page.frameLocator('[class="demo-frame"]');
    
    const dragElement = iFrame.locator('[id="draggable"]');

    const dropElement = iFrame.locator('[id ="droppable"]');

    await dragElement.dragTo(dropElement);

});