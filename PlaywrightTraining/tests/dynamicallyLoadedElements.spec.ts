import { test, expect } from '@playwright/test';
import config from '../playwright.config';
import { DynamicallyLoadedElements } from './pages/dynamicallyLoadedElements';

test.beforeEach(async ({ page }) =>{
    const dynamicLoadedElemnts = new DynamicallyLoadedElements(page);
    await page.goto('dynamic_loading');
    await expect(dynamicLoadedElemnts.header).toHaveText('Dynamically Loaded Page Elements');
    
});

test('Hidden Elements', async ({page}) => {
    const dynamicLoadedElemnts = new DynamicallyLoadedElements(page);
    await dynamicLoadedElemnts.viewHiddenElements();
});

test('Rendered Afer The Fact Elements', async ({page}) => {
    const dynamicLoadedElemnts = new DynamicallyLoadedElements(page);
    await dynamicLoadedElemnts.renderdAfterThefact();
});