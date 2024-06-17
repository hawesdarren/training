import { Page, Locator, expect } from "@playwright/test";

export class IBKeepSafe {
    readonly page: Page;
    readonly header: Locator;
    readonly keyboardA: Locator
    readonly proceedButton: Locator
    
    constructor(page:Page){
        this.page = page;
        this.header = page.locator('h1').first();
        this.keyboardA = page.locator('#keyboard_wrapper a').first();
        this.proceedButton = page.getByRole('button', {name: 'Proceed'})
    }

    async enterKeepSafeAnswer(){
        await expect(this.header).toHaveText('KeepSafe');
        await expect(this.keyboardA).toBeVisible();
        //Enter KeepSafe answers
        await this.keyboardA.click();
        await this.keyboardA.click();
        await expect(this.proceedButton).toBeVisible({timeout: 120000});
        await this.proceedButton.click();
    }
}