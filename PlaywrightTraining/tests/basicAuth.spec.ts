import { test } from '@playwright/test';
import config from '../playwright.config';
import { BasicAuthPage } from './pages/basicAuthPage';


test('Basic Auth', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials: {
            username: 'admin',
            password: 'admin',
        },
    });
    const page = await context.newPage();
    await page.goto('basic_auth');

    const basicAuthPage = new BasicAuthPage(page);
    await basicAuthPage.loginWithCorrectCredentials();
});