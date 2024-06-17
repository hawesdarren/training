import { Page, Locator, expect } from "@playwright/test";

export class ContextMenu {

    readonly page: Page;
    readonly header: Locator;
    readonly hotSpot: Locator;
    
    constructor(page:Page){
        this.page = page;
        this.header = page.locator('h3').first();
        this.hotSpot = page.locator('#hot-spot');
        
        
    }

    async rightClickHotSpot(){
        //Check hotstop visable
        expect(this.hotSpot.isVisible);
         //Wait for alert - must be before click hotspot
         this.page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('You selected a context menu');
            await dialog.accept();
        });

        
        //Right click hotspot
        await this.hotSpot.click({button: "right"});
       
    }



}