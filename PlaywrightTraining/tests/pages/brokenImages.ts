import { Page, Locator, expect } from "@playwright/test";

export class BrokenImages {
        readonly page: Page;
        readonly header: Locator;
        readonly images: Locator;
        readonly image1: Locator;
        readonly image2: Locator;
        readonly image3: Locator;

        constructor(page: Page){
            this.page = page;
            this.header = page.locator('h3').first();
            this.images = page.locator('img');
            this.image1  =page.getByRole('img').nth(1);
            this.image2  =page.getByRole('img').nth(2);
            this.image3  =page.getByRole('img').nth(3);
        }

        async checkForBrokenImages(baseURL){
            //Get all images
            let numImages = await this.images.count();
            console.log('Number of images on the page: ' + numImages );
            //var imagesPaths: string[] = [];
            const images: Locator[] = await this.page.getByRole('img').all();
            
            for(const image of images){
                
                const getSrc = await getImageSrcAttribute(image);
                const status = await getImageStatus(getSrc||'not-found', this.page);
                expect(status, 'Image: ' + getSrc + ' not loaded').toBe(200);
            }
                 
            
              
            
            async function getImageStatus(srcAttribute: string, page: Page){
                             
                const status = await (await page.request.get(baseURL + srcAttribute)).status();
                console.log('Image: ' + srcAttribute + ' has status: ' + status);
                
                return status;
            }
            async function getImageSrcAttribute(image: Locator){
                
                const srcAttribute = await image.getAttribute('src');
                console.log('Image Src: ' + srcAttribute);
                return srcAttribute;
            }
                
        }
           
                                     
           
        

       

}