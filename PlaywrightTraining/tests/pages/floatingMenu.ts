import { Page, Locator, expect } from "@playwright/test";

export class FloatingMenu {
    readonly page: Page;
    readonly header: Locator;
    readonly homeLink: Locator;
    readonly newsLink: Locator;
    readonly contactLink: Locator;
    readonly abountLink: Locator;
    
    
    constructor(page:Page){
        this.page = page;
        this.header = page.locator('h3').first();
        this.homeLink = page.getByRole('link', {name: 'Home'});
        this.newsLink = page.getByRole('link', {name: 'News'});
        this.contactLink = page.getByRole('link', {name: 'Contact'});
        this.abountLink = page.getByRole('link', {name: 'About'});
        
    }

    async verifyFloatingMenu(){
        await expect(this.homeLink).toBeVisible();
        await expect(this.newsLink).toBeVisible();
        await expect(this.abountLink).toBeVisible();
        await expect(this.contactLink).toBeVisible();
        //Get page height
        const pageDimensions = await this.page.evaluate(()=>{
            const element = document.querySelector('body');
            return {
                height: element?.offsetHeight,
                width: element?.offsetWidth
            }
        });
        console.log('page height: ' + pageDimensions.height)
        console.log('page height: ' + pageDimensions.width)
        //Scroll to bottom of page
        //var h: number = pageDimensions.height;
        //await this.page.mouse.wheel(0, h);
    }
}