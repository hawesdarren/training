import { test, expect } from '@playwright/test';
import config from '../playwright.config';
import { FloatingMenu } from './pages/floatingMenu';

test.beforeEach(async ({ page }) =>{
    const floatingMenu = new FloatingMenu(page);
    await page.goto('floating_menu');
        
});

test('Floating Menu', async ({page}) => {
    const floatingMenu = new FloatingMenu(page);
    await floatingMenu.verifyFloatingMenu();
});