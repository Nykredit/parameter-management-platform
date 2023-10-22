import { expect, test } from '@playwright/test';

test('corrects invalid environments', async ({ page }) => {
    const environment = 'this is not a valid environment';
    await page.goto(`http://localhost:5173/${environment}/parameters`);

    expect(page.url()).toBe('http://localhost:5173/invalid/parameters');
});
