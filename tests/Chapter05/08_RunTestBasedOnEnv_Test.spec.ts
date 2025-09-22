// import {expect,test} from '@playwright/test'
// import { HomePage } from '../../src/pages/HomePage';
// import { ResultPage } from '../../src/pages/ResultPage';
// import { PlaylistPage } from '../../src/pages/PlaylistPage';

import {test} from '../../src/fixtures/TestFixture'

test('Optimized POM in Playwright',async({page,homePage,resultPage,playlistPage,testData})=>{

    //create object of homepage
   // const homePage = new HomePage(page);

    console.log(String(testData.Module1TestData?.Skill1));
    await homePage.goToURL();
    await homePage.searchWithKeyWords(String(testData.Module1TestData?.Skill1));
    await page.waitForTimeout(60000);

    //create object of resultpage
   // const resultPage = new ResultPage(page);
    await resultPage.clickOnPlaylist(String(testData.Module1TestData?.Skill1));

    //create object of playlistpage
    //const playlistPage = new PlaylistPage(page);
    await playlistPage.validatePageTitle(String(testData.Module1TestData?.Skill1)+'☑️ - YouTube');
});