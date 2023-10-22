import { expect, test } from '@playwright/test';

test('corrects invalid environments', async ({ page }) => {
    const environment = 'this is not a valid environment';
    await page.goto(`/${environment}/parameters`);

    const url = new URL(page.url());
    expect(url.pathname).toBe('/invalid/parameters');
});
