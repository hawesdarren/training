import { Page, Locator, expect } from "@playwright/test";

export class DynamicallyLoadedElements {
    readonly page: Page;
    readonly header: Locator;
    readonly hiddenLink: Locator;
    readonly renderedLink: Locator;
    readonly startButton: Locator;
    readonly loadingImg: Locator;
    readonly finished: Locator;
    
    constructor(page:Page){
        this.page = page;
        this.header = page.locator('h3').first();
        this.hiddenLink = page.getByRole('link', {name: 'Example 1: Element on page that is hidden'});
        this.renderedLink = page.getByRole('link', {name: 'Example 2: Element rendered after the fact'});
        this.startButton = page.getByRole('button', {name: 'Start'});
        this.loadingImg = page.locator('#loading');
        this.finished = page.locator('#finish');
    }

    async viewHiddenElements(){
        await this.hiddenLink.click();
        //Wait for start button
        await expect(this.startButton).toBeVisible();
        //Click Start
        await this.startButton.click();
        //Wait for loading img
        await expect(this.loadingImg).toBeVisible();
        //Wait loading img finsihed and Hello world displayed
        await expect(this.loadingImg).toBeHidden({timeout: 10000});
        await expect(this.finished).toBeVisible();
        await expect(this.finished).toHaveText('Hello World!');
    }

    async renderdAfterThefact(){
        await this.renderedLink.click();
        //Wait for the Start button
        await expect(this.startButton).toBeVisible();
        //Click Start
        await this.startButton.click();
        //Wait for loading img
        await expect(this.loadingImg).toBeVisible();
        //Wait loading img finsihed and Hello world displayed
        await expect(this.loadingImg).toBeHidden({timeout: 10000});
        await expect(this.finished).toBeVisible();
        await expect(this.finished).toHaveText('Hello World!');
    }
}