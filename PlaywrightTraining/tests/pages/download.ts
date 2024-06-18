import { Page, Locator, expect } from "@playwright/test";
import fs from 'fs';

export class Download {
    readonly page: Page;
    readonly header: Locator;
    readonly modal: Locator;
    readonly modalHeader: Locator;
    readonly modalCloseLink: Locator;
    readonly openModalLink: Locator;

    
    constructor(page:Page){
        this.page = page;
        this.header = page.locator('h3').first();
                
    }

    async downloadLambaTest(){
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.getByText('LambdaTest.txt').click();
        const download = await downloadPromise;
        // Wait for the download process to complete
        console.log(await download.path());
        // Save downloaded file somewhere
        //Get current dir
        const currentDir: string = process.cwd();
        console.log('Current dir: ' + currentDir);
        await download.saveAs(currentDir + '/download/LambdaTest.txt');
        //Check file size greater than 1
        expect((await fs.promises.stat(currentDir+'/download/LambdaTest.txt')).size).toBeGreaterThan(1);
    }

}