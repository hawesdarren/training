import { test, expect } from '@playwright/test';
import config from '../playwright.config';
import { AddRemoveElementsPage } from './pages/addRemoveElementPage';


test.beforeEach(async ({ page }) =>{
    const addRemovePage = new AddRemoveElementsPage(page);
    await page.goto('add_remove_elements/');
    await expect(addRemovePage.heading).toHaveText('Add/Remove Elements');

});

test('Add Element', async ({ page }) => {
    const addRemovePage = new AddRemoveElementsPage(page); 
    // Button to have Add Element
    await addRemovePage.addElement();
});

test('Delete an Element', async ({ page }) => {
    const addRemovePage = new AddRemoveElementsPage(page); 
    // Button to have Add Element
    await addRemovePage.deleteAddedElement();
});

test('Add Two Elements', async ({ page }) => {
    const addRemovePage = new AddRemoveElementsPage(page); 
    // Button to have Add Element
    await addRemovePage.addTwoElements();
});