import { Page, Locator, expect } from "@playwright/test";

export class Dropdown {
    readonly page: Page;
    readonly header: Locator;
    readonly dropdown: Locator

    
    constructor(page:Page){
        this.page = page;
        this.header = page.locator('h3').first();
        this.dropdown = page.locator('#dropdown');
        
        
    }

    async selectOptionByValue(option: string){
        //Wait for drop down to be present
        await this.dropdown.isVisible();
        //Select option
        await this.dropdown.selectOption(option);
    }

    async selectOptionByLabel(option: string){
        //Wait for drop down to be present
        await this.dropdown.isVisible();
        //Select option
        await this.dropdown.selectOption({ label: option });
    }
}