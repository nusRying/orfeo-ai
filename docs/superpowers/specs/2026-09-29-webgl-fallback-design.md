# WebGL Fallback Design

## Goal

Prevent the site from crashing when WebGL is disabled, unavailable, or blocked by a sandbox.

## Design

Add a client-side `useWebGLSupport` hook that checks whether a temporary canvas can create a WebGL 2 or WebGL context before React Three Fiber mounts a renderer. `WaveBackground` and `InteractiveHub` will mount their Three.js canvases only when that check succeeds.

While capability is unknown or unsupported, `WaveBackground` keeps its existing CSS gradient layer and `InteractiveHub` keeps its non-WebGL container and marquee. The normal 3D experience remains unchanged on supported browsers.

## Verification

Use Playwright to override WebGL context creation, load `/`, and confirm the fallback renders without uncaught page errors. Then run lint and the production build.
