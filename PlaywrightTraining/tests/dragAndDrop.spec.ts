import { test, expect } from '@playwright/test';
import config from '../playwright.config';
import { DragAndDropElementsPage } from './pages/dragAndDropElementPage';


test.beforeEach(async ({ page }) =>{
    const dragAndDropElementsPage = new DragAndDropElementsPage(page);
    await page.goto('drag_and_drop');
    await expect(dragAndDropElementsPage.header).toHaveText('Drag and Drop');

});

test('Add Element', async ({ page }) => {
    const dragAndDropElementsPage = new DragAndDropElementsPage(page); 
    //Verify page loaded
    await dragAndDropElementsPage.verifyPageLoaded();
    //Drag test
    await dragAndDropElementsPage.dragColumnAontoColumnB();
});

