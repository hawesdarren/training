import { Locator,  Page, expect } from "@playwright/test";

export class AddRemoveElementsPage {
    readonly page!: Page;
    readonly addElementBtn: Locator;
    readonly deleteBtn: Locator;
    readonly heading: Locator;


    constructor(page: Page){
        this.page = page;
        this.addElementBtn  = page.getByRole('button').filter({hasText: 'Add Element'});
        this.deleteBtn  = page.getByRole('button').filter({hasText: 'Delete'});
        this.heading = page.locator('h3').first();
    }

    async addElement(){
        //Click add element btn and wait for new element to display
        await this.addElementBtn.click();
        await expect(this.deleteBtn).toBeVisible();
        await expect(this.deleteBtn).toHaveText('Delete');
        
    }

    async addTwoElements(){
        //Click add element btn and wait for new element to display
        await this.addElementBtn.click();
        await this.addElementBtn.click();
        await expect(this.deleteBtn).toHaveCount(2);
        await expect(this.deleteBtn.first()).toHaveText('Delete');
        await expect(this.deleteBtn.nth(1)).toHaveText('Delete');
        await expect(this.deleteBtn.last()).toHaveText('Delete');
        
    }

    async deleteAddedElement(){
        await this.addElement();
        await this.deleteBtn.click();
        await expect(this.deleteBtn).not.toBeVisible();
    }
}