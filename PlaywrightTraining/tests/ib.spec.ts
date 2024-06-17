import { test, expect } from '@playwright/test';
import config from '../playwright.config';
import { IBLogin } from './pages/ibLogin';
import { IBKeepSafe } from './pages/ibKeepSafe';
import { IBHeader } from './pages/ibHeader';
import { IBMessage } from './pages/ibMessage';

test.beforeEach(async ({ page }) =>{
    const login = new IBLogin(page);
    const keepSafe = new IBKeepSafe(page);
    await page.goto('https://ib.kiwibank.co.nz/login');
    await login.login('910035', 'test01');
    await keepSafe.enterKeepSafeAnswer();
    
});

test('Delete all messages', async ({page}) => {
    const header = new IBHeader(page);
    const messages = new IBMessage(page);
    await header.navToMessages();
    await messages.deleteAllMessages();
});