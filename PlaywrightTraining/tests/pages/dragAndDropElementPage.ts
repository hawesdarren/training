import { Page, Locator, expect } from "@playwright/test";

export class DragAndDropElementsPage {
    readonly page: Page;
    readonly header: Locator;
    readonly boxA: Locator;
    readonly boxB: Locator;

    
    constructor(page:Page){
        this.page = page;
        this.header = page.locator('h3').first();
        this.boxA = page.locator('id=column-a');
        this.boxB = page.locator('id=column-b');
        
    }

    async verifyPageLoaded(){
        expect(this.header).toContainText('Drag and Drop');
        expect(this.boxA).toBeVisible();
        expect(this.boxB).toBeVisible();
    }

    async dragColumnAontoColumnB(){
        //Get Column A box name
        const columnA = await this.boxA.innerText();
        const columnB = await this.boxB.innerText();
        //Drag column A onto B
        await this.boxA.dragTo(this.boxB);
        //Assert column A is now on column B
        expect(await this.boxB.innerText()).toEqual(columnA);
        expect(await this.boxA.innerText()).toEqual(columnB);
    }
}
