import { test, expect } from '@playwright/test';
import config from '../playwright.config';
import { DynamicWindow } from './pages/dynamicWindow';

test.beforeEach(async ({ page }) =>{
    const dynamicWindow = new DynamicWindow(page);
    await page.goto('entry_ad');
    await expect(dynamicWindow.header).toHaveText('Entry Ad');
    
});

test('Close Modal', async ({page}) => {
    const dynamicWindow = new DynamicWindow(page);
    await dynamicWindow.closeModal();
});

test('Close and Open Modal', async ({page}) => {
    const dynamicWindow = new DynamicWindow(page);
    await dynamicWindow.closeModal();
    await dynamicWindow.openModal();
});