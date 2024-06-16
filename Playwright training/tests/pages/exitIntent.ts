import { Page, Locator, expect } from "@playwright/test";

export class ExitIntent {
    readonly page: Page;
    readonly header: Locator;
    readonly modal: Locator;
    readonly modalHeader: Locator;
    readonly modalCloseLink: Locator;
    readonly openModalLink: Locator;

    
    constructor(page:Page){
        this.page = page;
        this.header = page.locator('h3').first();
        this.modal = page.locator('.modal');
        this.modalHeader = page.locator('.modal h3');
        this.modalCloseLink = page.locator('.modal .modal-footer p');
        
    }

    async moveMouseOutsideViewArea(){
        //Move mouse outside viewing area
        //Move mouse into area 1st then move outside area
        await this.page.mouse.move(10,10);
        await this.page.mouse.move(-1,-1); 
        //Wait for Modal
        await this.modal.waitFor({state: 'visible'});
        await expect(this.modal).toBeVisible();
        await expect(this.modalHeader).toHaveText('This is a modal window');
        await expect(this.modalCloseLink).toBeVisible();
    }
}