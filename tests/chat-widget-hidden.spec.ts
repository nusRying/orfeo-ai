import { expect, test } from 'playwright/test';

for (const path of ['/', '/ar']) {
  test(`hides the chat widget on ${path}`, async ({ page }) => {
    await page.goto(path);

    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('.lucide-message-square-plus')).toHaveCount(0);
  });
}
