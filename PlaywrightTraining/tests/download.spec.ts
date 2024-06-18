import { test, expect } from '@playwright/test';
import config from '../playwright.config';
import { Download } from './pages/download';

test.beforeEach(async ({ page }) =>{
    const download = new Download(page);
    await page.goto('download');
    await expect(download.header).toHaveText('File Downloader');
    
});

test('Download Lamda.txt', async ({page}) => {
    const download = new Download(page);
    await download.downloadLambaTest();
});