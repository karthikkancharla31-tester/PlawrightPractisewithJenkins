import {expect,test} from '@playwright/test'
import { HomePage } from '../../src/pages/HomePage';
import { ResultPage } from '../../src/pages/ResultPage';
import { PlaylistPage } from '../../src/pages/PlaylistPage';

test('Page Object Model Test in Playwright',async({page})=>{

    //create object of homepage
    const homePage = new HomePage(page);
    await homePage.goToURL();
    await homePage.searchWithKeyWords(`${process.env.SEARCH_KEYWORDS}`);
    await page.waitForTimeout(60000);

    //create object of resultpage
    const resultPage = new ResultPage(page);
    await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`);

    //create object of playlistpage
    const playlistPage = new PlaylistPage(page);
    await playlistPage.validatePageTitle(`${process.env.SEARCH_KEYWORDS}`+'☑️ - YouTube');
});