import { expect, test } from '@playwright/test';

test('displays current environment in header', async ({ page }) => {
    const environment = 'prod';
    await page.goto(`http://localhost:5173/${environment}/parameters`);

    await expect(page.locator('header').getByText(environment)).toBeVisible();
});
