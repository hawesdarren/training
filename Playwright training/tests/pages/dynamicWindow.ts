import { Page, Locator, expect } from "@playwright/test";

export class DynamicWindow {
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
        this.openModalLink = page.locator('#restart-ad');
        //this.openModalLink = page.getByRole('link', {name: 'click here'});
    }

    async closeModal(){
        //Check if Modal is open
        await this.modal.waitFor({ state: 'visible' })
        if(await this.modal.isVisible()){
            await expect(this.modalHeader).toHaveText('This is a modal window');
            //Click close
            await this.modalCloseLink.click();
            await expect(this.modal).toBeHidden();
        }
        else{
            expect(false, 'Modal window was not visible');
        }
    }

    async openModal(){
        await this.modal.waitFor({ state: 'hidden' })
        //Check if Modal is open/hidden
        if(await this.modal.isHidden()){
            //Click open modal
            await this.openModalLink.isEnabled();
            await this.openModalLink.click();
            const requestPromise = this.page.waitForEvent('close')
            //Wait for modal
            await expect(this.modal).toBeVisible();
        }
        else{
            //Do nothing modal already open
        }
    }
}