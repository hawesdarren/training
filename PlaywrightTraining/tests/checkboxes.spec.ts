import { test, expect, request } from '@playwright/test';
import config from '../playwright.config';
import { Checkboxes } from './pages/checkboxes';

test.beforeEach(async ({ page }) =>{
    const checkboxes = new Checkboxes(page);
    await page.goto('checkboxes');
    await expect(checkboxes.header).toHaveText('Checkboxes');
    await expect(checkboxes.checkbox1).toBeVisible();
    await expect(checkboxes.checkbox2).toBeVisible();
});

test('Select Checkbox 1', async ({page}) =>{
    const checkboxes = new Checkboxes(page);
    await checkboxes.checkbox1.check();
    await checkboxes.checkbox1.isChecked()
});

test('Check all checkboxes', async ({page}) =>{
    const checkboxes = new Checkboxes(page);
    await checkboxes.CheckAllCheckboxes();
    await checkboxes.CheckAllCheckboxesChecked();
});