import { test, expect, request } from '@playwright/test';
import config from '../playwright.config';
import { BrokenImages } from './pages/brokenImages';



test.beforeEach(async ({ page }) =>{
    const brokenImages = new BrokenImages(page);
    await page.goto('broken_images');
    await expect(brokenImages.header).toHaveText('Broken Images');

});

test('Check for broken images', async ({ page }) => {
    const brokenImages = new BrokenImages(page);
    // Check for broken images
    //await brokenImages.checkForBrokenImages();
    let response = new Response();
    page.on('response', response => {
        
        expect.soft(response.status(), 'Resource failed to load ' + response.url()).toBe(200);
    });
    await page.goto('broken_images')

});

test('Check for broken images - indivually check urls', async ({ page, baseURL}) => {
    
    const brokenImages = new BrokenImages(page);
    let srcImage1 = baseURL + 'asdf.jpg'
    expect((await page.request.get(srcImage1)).status()).toBe(200);
    // Check for broken images
   
});

test('Check for brokens images - with for loop', async ({ page, baseURL }) => {
    const brokenImages = new BrokenImages(page);
    brokenImages.checkForBrokenImages(baseURL);
});

test('Check for brokens images - router fetch method', async ({ page, baseURL }) => {
    const brokenImages = new BrokenImages(page);
    await page.route('/*.*', async route => {
        const response = await route.fetch();
        await expect.soft(response.status(), 'Resource failed to download: ' + response.url()).toBe(200);
        route.continue();
    });
    await page.goto('broken_images');
});

