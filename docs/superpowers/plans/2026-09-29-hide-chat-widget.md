# Hide Chat Widget Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the floating chat icon from the root and Arabic routes while preserving its component for future use.

**Architecture:** Stop mounting `ChatWidget` in the two site shells that currently render it. Cover both route families with one browser regression test that checks the widget icon is absent.

**Tech Stack:** Next.js 16, React 19, TypeScript, Playwright

## Global Constraints

- Keep `src/components/ChatWidget.tsx` unchanged.
- Do not alter any other layout, content, styling, or navigation.

---

### Task 1: Remove ChatWidget Render Sites

**Files:**
- Create: `tests/chat-widget-hidden.spec.ts`
- Modify: `src/app/page.tsx`
- Modify: `src/app/[lang]/layout.tsx`

**Interfaces:**
- Consumes: Existing root `/` and localized `/ar` routes.
- Produces: Both routes render without `.lucide-message-square-plus` while the component source remains available.

- [x] **Step 1: Write the failing browser test**

```ts
import { expect, test } from 'playwright/test';

for (const path of ['/', '/ar']) {
  test(`hides the chat widget on ${path}`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('.lucide-message-square-plus')).toHaveCount(0);
  });
}
```

- [x] **Step 2: Verify the test fails because the widget is visible**

Run: `npx playwright test tests/chat-widget-hidden.spec.ts --reporter=line`
Expected: FAIL on both routes because `.lucide-message-square-plus` has a count of 1.

- [x] **Step 3: Remove the two render sites**

Delete the `ChatWidget` import and `<ChatWidget />` element from `src/app/page.tsx` and `src/app/[lang]/layout.tsx`. Do not modify `src/components/ChatWidget.tsx`.

- [x] **Step 4: Verify behavior and production quality**

Run: `npx playwright test tests/chat-widget-hidden.spec.ts --reporter=line`
Expected: PASS for `/` and `/ar`.

Run: `npm run lint`
Expected: Exit code 0.

Run: `npm run build`
Expected: Exit code 0.
