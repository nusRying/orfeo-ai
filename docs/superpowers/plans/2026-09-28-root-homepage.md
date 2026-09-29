# Root Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Serve the Arabic homepage directly at `/` without redirecting visitors to `/ar`.

**Architecture:** Reuse the existing Arabic dictionary and site-shell components in the root page. Keep the localized `/ar` route available for compatibility while making the canonical deployment entry point render immediately at the domain root.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Playwright

## Global Constraints

- Preserve all existing localized routes.
- The browser URL must remain `/` when the root homepage loads.

---

### Task 1: Serve the Arabic homepage at the root route

**Files:**
- Modify: `src/app/page.tsx`
- Create: `tests/root-homepage.spec.ts`
- Create: `playwright.config.ts`

**Interfaces:**
- Consumes: `getDictionary('ar')`, `DictionaryProvider`, and the existing site-shell components.
- Produces: A server-rendered root page at `/` with Arabic content and no client redirect.

- [x] **Step 1: Write the failing browser test**

```ts
import { expect, test } from 'playwright/test';

test('serves the Arabic homepage directly at the root URL', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('main')).toBeVisible();
  await expect.poll(() => page.evaluate(() => window.location.pathname)).toBe('/');
});
```

- [x] **Step 2: Run the test to verify it fails**

Run: `npx playwright test tests/root-homepage.spec.ts`
Expected: FAIL because the current client page redirects from `/` to `/ar`.

- [x] **Step 3: Render the existing Arabic homepage and shell from the root page**

Replace the redirect component with an async server component that loads the Arabic dictionary and renders `Hero`, `LandingSections`, navigation, footer, and supporting site components.

- [x] **Step 4: Run the focused test and production checks**

Run: `npx playwright test tests/root-homepage.spec.ts`
Expected: PASS with the final URL ending in `/`.

Run: `npm run lint`
Expected: PASS.

Run: `npm run build`
Expected: PASS and `/` listed as a generated route.
