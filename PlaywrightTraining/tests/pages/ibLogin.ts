import { Page, Locator, expect } from "@playwright/test";

export class IBLogin {
    readonly page: Page;
    readonly header: Locator;
    readonly accessNumber: Locator;
    readonly password: Locator;
    readonly loginButton: Locator

    
    constructor(page:Page){
        this.page = page;
        this.header = page.locator('h1').first();
        this.accessNumber = page.getByLabel('Access number:');
        this.password = page.getByLabel('Password:');
        this.loginButton  =page.getByRole('button', {name: 'Log in to internet banking'});
    }

    async login(acessNumber: string, password: string){
        await expect(this.header).toHaveText('Internet banking login');
        await expect(this.accessNumber).toBeVisible();
        await expect(this.password).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        //Login
        await this.accessNumber.fill(acessNumber);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}