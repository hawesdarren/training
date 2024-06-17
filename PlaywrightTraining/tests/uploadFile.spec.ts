import { test, expect } from '@playwright/test';
import config from '../playwright.config';
import { FileUpload } from './pages/fileUpload';

test.beforeEach(async ({ page }) =>{
    const fileUpload = new FileUpload(page);
    await page.goto('upload');
    await expect(fileUpload.header).toHaveText('File Uploader');
    
});

test('Upload File with file chooser', async ({page}) => {
    const fileUpload = new FileUpload(page);
    await fileUpload.uploadFileWithFileChooser('C:\\Temp\\DC Batch AFEDK.csv');
});