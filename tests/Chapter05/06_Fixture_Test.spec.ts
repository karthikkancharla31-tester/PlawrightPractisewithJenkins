//import {expect,test} from '@playwright/test'
import {test} from '../../src/fixtures/TestFixture';
import { HomePage } from '../../src/pages/HomePage';
import { ResultPage } from '../../src/pages/ResultPage';
import { PlaylistPage } from '../../src/pages/PlaylistPage';

test('Implementing fixture in Playwright',async({page})=>{

    console.log(`Test execution started.....`);

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

    console.log(`Test execution ended.....`);
});