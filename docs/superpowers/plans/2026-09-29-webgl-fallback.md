# WebGL Fallback Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep the site usable and error-free when WebGL context creation is unavailable.

**Architecture:** Detect WebGL support in one reusable client hook before mounting React Three Fiber canvases. Render the existing non-WebGL visual layers as graceful fallbacks and leave supported-browser behavior unchanged.

**Tech Stack:** Next.js 16, React 19, TypeScript, React Three Fiber, Playwright

## Global Constraints

- Do not attempt to create a React Three Fiber renderer when WebGL capability detection fails.
- Preserve the current 3D presentation when WebGL is available.
- Preserve useful non-WebGL content when it is unavailable.

---

### Task 1: Guard Three.js Canvases

**Files:**
- Create: `src/hooks/useWebGLSupport.ts`
- Create: `tests/webgl-fallback.spec.ts`
- Modify: `src/components/WaveBackground.tsx`
- Modify: `src/components/InteractiveHub.tsx`

**Interfaces:**
- Produces: `useWebGLSupport(): boolean`, with a server snapshot of `false` until client capability is known.
- Consumes: The hook result before mounting each `<Canvas>`.

- [x] **Step 1: Write a failing browser test**

Simulate failed `webgl` and `webgl2` context creation, load `/`, and assert the fallback marker is visible with no uncaught page errors.

- [x] **Step 2: Run the test and verify the current canvas crashes**

Run: `npx playwright test tests/webgl-fallback.spec.ts --reporter=line`
Expected: FAIL due to an uncaught `Error creating WebGL context` or missing fallback.

- [x] **Step 3: Implement capability detection and guarded rendering**

Create `useWebGLSupport`, conditionally mount both canvases, and add an unobtrusive fallback marker to the existing CSS layer.

- [x] **Step 4: Verify the fallback and production build**

Run the focused Playwright test, lint, and `npm run build`; all commands must exit successfully.
