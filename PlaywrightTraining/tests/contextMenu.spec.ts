import { test, expect, request } from '@playwright/test';
import config from '../playwright.config';
import { ContextMenu } from './pages/contextMenu';


test.beforeEach(async ({ page }) =>{
    const contextMenu = new ContextMenu(page);
    await page.goto('context_menu');
    await expect(contextMenu.header).toHaveText('Context Menu');

});

test('Right click', async ({ page }) => {
    //Check hot spot visiable on page
    const contextMenu = new ContextMenu(page);
    await contextMenu.rightClickHotSpot();
});