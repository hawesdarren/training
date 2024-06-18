import { Page, Locator, expect } from "@playwright/test";

export class BasicAuthPage {

    readonly page!: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly signinBtn: Locator;
    readonly cancelBtn: Locator;
    readonly successMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.username = page.getByLabel('Username').getByRole('textbox');
        this.password = page.getByLabel('Passord').getByRole('textbox');
        this.signinBtn = page.getByRole('button').filter({hasText: 'Signin'});
        this.signinBtn = page.getByRole('button').filter({hasText: 'Cancel'});
        this.successMessage = page.locator('h3~p');
    }

    async loginWithCorrectCredentials(){
        
        await expect(this.successMessage).toBeVisible();
        await expect(this.successMessage).toHaveText('Congratulations! You must have the proper credentials.') 
    }

    
}