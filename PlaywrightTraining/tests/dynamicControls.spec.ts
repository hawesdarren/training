import { test, expect } from '@playwright/test';
import config from '../playwright.config';
import { DynamicControls } from './pages/dynamicControlsPage';

test.beforeEach(async ({ page }) =>{
    const dynamicControls = new DynamicControls(page);
    await page.goto('dynamic_controls');
    await expect(dynamicControls.header).toHaveText('Dynamic Controls');
    
});

test('Add Checkbox', async ({ page, baseURL }) => {
  const dynamicControls = new DynamicControls(page);  
  //Add checkbox
  await dynamicControls.addTheCheckbox();
});

test('Remove Checkbox', async ({ page, baseURL }) => {
    const dynamicControls = new DynamicControls(page);  
    //Remove checkbox
    await dynamicControls.removeTheCheckbox();
});

test('enable Textbox', async ({ page, baseURL }) => {
  const dynamicControls = new DynamicControls(page);  
  //Enable textbox
  await dynamicControls.enableTextbox();
});

test('disable Textbox', async ({ page, baseURL }) => {
  const dynamicControls = new DynamicControls(page);  
  //disable textbox
  await dynamicControls.disableTextbox();
});

test('enable Textbox, enter text, then disable', async ({ page, baseURL }) => {
  const dynamicControls = new DynamicControls(page);  
  //disable textbox
  await dynamicControls.enableTextboxEnterTextThenDisable();
});