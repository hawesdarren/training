import { test, expect } from '@playwright/test';
import config from '../playwright.config';


test('has title', async ({ page, baseURL }) => {
  await page.goto('');
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('The Internet');
});


