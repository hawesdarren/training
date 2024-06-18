import { test, expect } from '@playwright/test';
import config from '../playwright.config';
import { ExitIntent } from './pages/exitIntent';

test.beforeEach(async ({ page }) =>{
    const exitIntent = new ExitIntent(page);
    await page.goto('exit_intent');
    await expect(exitIntent.header).toHaveText('Exit Intent');
    
});

test('Move mouse outside area', async ({page}) => {
    const exitIntent = new ExitIntent(page);
    await exitIntent.moveMouseOutsideViewArea();
});