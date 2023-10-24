import { expect, test } from '@playwright/test';

test('displays current environment in header', async ({ page }) => {
    const environment = 'prod';
    await page.goto(`/${environment}/parameters`);

    await expect(page.locator('header').getByText(environment)).toBeVisible();
});
