import { Page, Locator, expect } from "@playwright/test";

export class IBMessage {
    readonly page: Page;
    readonly header: Locator;
    readonly deleteTopMessage: Locator
    
    
    constructor(page:Page){
        this.page = page;
        this.header = page.locator('h1').first();
        this.deleteTopMessage = page.locator('#ctl00_c_lvwMessages_ctrl0_DeleteButton');
        
    }

    async deleteAllMessages(){
        
        await expect(this.deleteTopMessage).toBeVisible();

        //Need to create a loop
        while(await this.deleteTopMessage.isVisible()){
            //Delete actions
            //this.page.on('dialog', dialog => dialog.accept());
            this.page.once('dialog', async dialog => {
                await expect(dialog.message()).toContain("If you delete this message we won't be able to respond to your query. Delete anyway ?");
                await dialog.accept();
                          
            });
            await this.deleteTopMessage.waitFor({state: 'visible'});
            await this.deleteTopMessage.click();
            await this.page.waitForLoadState('domcontentloaded', {timeout: 120000});
            await expect(this.page.locator('.ms_notice h2')).toBeVisible({timeout: 30000});
            //await expect(this.page.locator('.ms_notice h2')).toContain('Message deleted');
            
        }
        
    }
}