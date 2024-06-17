import { Page, Locator, expect } from "@playwright/test";

export class IBHeader {
    readonly page: Page;
    readonly header: Locator;
    readonly messagesLink: Locator;

    
    constructor(page:Page){
        this.page = page;
        this.header = page.locator('h1').first();
        this.messagesLink = page.getByRole('link', {name: 'Messages'});
    }

    async navToMessages(){
        await expect(this.messagesLink).toBeVisible();
        await this.messagesLink.click();
    }
}