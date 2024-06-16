import { Page, Locator, expect } from "@playwright/test";

export class DynamicControls {
    readonly page: Page;
    readonly header: Locator;
    readonly checkbox: Locator;
    readonly checkboxButton: Locator;
    readonly textbox: Locator;
    readonly textboxButton: Locator;

    
    constructor(page:Page){
        this.page = page;
        this.header = page.locator('h4').first();
        this.checkbox = page.locator('#checkbox');
        this.checkboxButton = page.locator('#checkbox-example button');
        this.textbox = page.locator('#input-example input');
        this.textboxButton = page.locator('#input-example button');
    }

    async removeTheCheckbox(){
        //Check the start start
        if(await this.checkbox.isVisible()){
            //Check button is 'Add'
            expect(this.checkboxButton).toHaveText('Remove');
            //Already removed, do nothing
            
        }
        else{
            expect (this.checkboxButton).toHaveText('Add');
            //Select Add and wait for checkbox
            await this.checkboxButton.click();
            await this.checkbox.waitFor({state: 'hidden', timeout: 60000});
            expect (await this.checkbox.isVisible);
            //Check button is 'Remove'
            expect(this.checkboxButton).toHaveText('Remove');
        }
    }

    async addTheCheckbox(){
        //Check the start start
        var isCheckBoxVisible = await this.checkbox.isVisible();
                
        if(isCheckBoxVisible){
            //Check button is 'Remove'
            expect(this.checkboxButton).toHaveText('Remove');
            await this.checkboxButton.click();
            await this.checkbox.waitFor({ state: 'hidden', timeout: 60000});
            expect (await this.checkbox.isHidden());
            //Check button is 'Add'
            expect(this.checkboxButton).toHaveText('Add');
            
        }
        else{
            expect (this.checkboxButton).toHaveText('Add');
            //Do nothing
            
        }
    }

    async enableTextbox(){
        //Check if textbox is already enabled
        var isTextboxEnabled = await this.textbox.isEditable();
        if(isTextboxEnabled){
            await expect (this.textboxButton).toHaveText('Disable');
            //Do nothing
        }
        else{
            await expect ( this.textboxButton).toHaveText('Enable');
            //Enable the textbox
            await this.textboxButton.click();
            //Wait for textbox to become enabled
            await expect(this.textbox).toBeEditable();
        }
    }

    async disableTextbox(){
        //Check if textbox is already enabled
        var isTextboxEnabled = await this.textbox.isEditable();
        if(isTextboxEnabled){
            //disable the text box
            await expect (this.textboxButton).toHaveText('Disable');
            await this.textboxButton.click
            await expect (this.textbox).not.toBeEditable();
        }
        else{
            await expect(this.textboxButton).toHaveText('Enable')
        }
    }

    async enableTextboxEnterTextThenDisable(){
        //Check if textbox is already enabled
        var isTextboxEnabled = await this.textbox.isEditable();
        if(isTextboxEnabled){
            await expect ( this.textboxButton).toHaveText('Disable');
            //Enter text
            await this.textbox.fill('Some test text');
            await expect( this.textbox).toHaveValue('Some test text');
            //disable
            await this.textboxButton.click();
            //Wait for and assert disabled
            await expect(this.textbox).not.toBeEditable();
        }
        else{
            await expect (this.textboxButton).toHaveText('Enable');
            //Enable the textbox
            await this.textboxButton.click();
            //Wait for textbox to become enabled
            await expect(this.textbox).toBeEditable();
            //Enter text
            await this.textbox.fill('Some test text');
            await expect(this.textbox).toHaveValue('Some test text');
            //disable
            await this.textboxButton.click();
            //Wait for and assert disabled
            await expect(this.textbox).not.toBeEditable();
        }
    }
}