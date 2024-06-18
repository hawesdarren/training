import { test, expect, request } from '@playwright/test';
import config from '../playwright.config';
import { ChallengingDOM } from './pages/challengingDOM';




test.beforeEach(async ({ page }) =>{
    const challengingDOM = new ChallengingDOM(page);
    await page.goto('challenging_dom');
    await expect(challengingDOM.header).toHaveText('Challenging DOM');

});

test('Check Buttons', async ({page}) => {
    const challengingDOM = new ChallengingDOM(page);
    await challengingDOM.checkButtons();
});


test('Get a row', async ({page}) => {
    const challengingDOM = new ChallengingDOM(page);
    await challengingDOM.getRow('Definiebas7');
});

test('Get the result', async ({page}) => {
    const challengingDOM = new ChallengingDOM(page);
    await challengingDOM.getResult();
});