import { expect, test } from 'playwright/test';

test('serves the Arabic homepage directly at the root URL', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('main')).toBeVisible();
  await expect.poll(() => page.evaluate(() => window.location.pathname)).toBe('/');
});
