import { expect, test } from 'playwright/test';

test('renders without errors when WebGL is unavailable', async ({ page }) => {
  const pageErrors: Error[] = [];
  page.on('pageerror', (error) => pageErrors.push(error));

  await page.addInitScript(() => {
    const getContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (
      contextId: string,
      ...args: unknown[]
    ) {
      if (contextId === 'webgl' || contextId === 'webgl2' || contextId === 'experimental-webgl') {
        return null;
      }
      return getContext.call(this, contextId as '2d', ...args as []);
    } as typeof HTMLCanvasElement.prototype.getContext;
  });

  await page.goto('/');

  await expect(page.getByTestId('webgl-fallback')).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test('keeps the 3D canvas when WebGL only rejects the performance caveat', async ({ page }) => {
  await page.addInitScript(() => {
    const getContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (
      contextId: string,
      ...args: unknown[]
    ) {
      const options = args[0] as WebGLContextAttributes | undefined;
      if (
        (contextId === 'webgl' || contextId === 'webgl2') &&
        options?.failIfMajorPerformanceCaveat
      ) {
        return null;
      }
      return getContext.call(this, contextId as '2d', ...args as []);
    } as typeof HTMLCanvasElement.prototype.getContext;
  });

  await page.goto('/');

  await expect(page.locator('canvas')).toBeVisible();
  await expect(page.getByTestId('webgl-fallback')).toHaveCount(0);
});
