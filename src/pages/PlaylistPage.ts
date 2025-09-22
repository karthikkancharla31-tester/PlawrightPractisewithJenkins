import {expect,Page} from '@playwright/test'

export class PlaylistPage{

    readonly page:Page;
    
    constructor(page:Page){

        this.page = page;
        //elements

    }

    //methods
    async validatePageTitle(title:string){

       await expect(this.page).toHaveTitle(title);

    }
}