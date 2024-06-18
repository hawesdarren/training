import { Page, Locator, expect } from "@playwright/test";

export class ChallengingDOM {
    readonly page: Page;
    readonly header: Locator;
    readonly blueButton: Locator;
    readonly redButton: Locator;
    readonly greenButton: Locator;
    readonly resultBox: Locator;

    constructor(page: Page){
        this.page = page;
        this.header = page.locator('h3').first();
        this.blueButton = page.locator('.button').first();
        this.redButton = page.locator('.button').nth(1);
        this.greenButton = page.locator('.button').last();
        this.resultBox = page.locator('#canvas');
        
    }

    async checkButtons(){
        expect(this.blueButton).toBeVisible();
        expect(this.redButton).toBeVisible();
        expect(this.greenButton).toBeVisible();
    
    }

    async getRow(description: string){
        
        const targetRow = this.page.locator('tr:has-text("'+description+'")');
        console.log('target row: ' + await targetRow.textContent());
        const targetCell1 = targetRow.locator('td').nth(0);
        console.log('1st cell in row: ' + await targetCell1.textContent());
        expect(await targetCell1.textContent()).toBe('Iuvaret7')
    }

    async getResult(){
        expect(await this.resultBox).toBeVisible();
        console.log('Result text: ' + await this.resultBox.textContent());
    }


}