import { test, expect } from '@playwright/test';
import config from '../playwright.config';
import { Dropdown } from './pages/dropdownPage';

test.beforeEach(async ({ page }) =>{
    const dropdown = new Dropdown(page);
    await page.goto('dropdown');
    await expect(dropdown.header).toHaveText('Dropdown List');
    
});

test('Select By Value', async ({ page, baseURL }) => {
  const dropdown = new Dropdown(page);  
  //Select Value 1
  await dropdown.selectOptionByValue('1');
  //Check value set
  //expect(await dropdown.dropdown.inputValue()).toContain('1');
  await expect (dropdown.dropdown).toHaveValue('1');
});

test('Select By Label', async ({ page, baseURL }) => {
    const dropdown = new Dropdown(page);  
    //Select Value 1
    await dropdown.selectOptionByLabel('Option 2');
    //Check value set
    await expect(dropdown.dropdown).toHaveValue('2');
  });