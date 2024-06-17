import { Page, Locator, expect } from "@playwright/test";

export class Checkboxes {
    readonly page: Page;
    readonly header: Locator;
    readonly checkbox1: Locator;
    readonly checkbox2: Locator;

    
    constructor(page:Page){
        this.page = page;
        this.header = page.locator('h3').first();
        this.checkbox1 = page.getByRole('checkbox').first();
        this.checkbox2 = page.getByRole('checkbox').nth(1);
        
    }

    async CheckAllCheckboxes(){
        const allCheckboxes: Locator[] = await this.page.getByRole('checkbox').all();

        for(const checkbox of allCheckboxes){
            //Check the checkbox    
            console.log('About to set locators: ' + checkbox)
            await checkbox.setChecked(true);
        }
       
    }

    async CheckAllCheckboxesChecked(){
        const allCheckboxes: Locator[] = await this.page.getByRole('checkbox').all();

        for(const checkbox of allCheckboxes){
            //Check the checkbox    
            console.log('About to check locators: ' + checkbox)
            expect.soft(await checkbox.isChecked(), checkbox + ' is not set to true');
        }
    }
}