# Hide Chat Widget Design

## Goal

Hide the floating chat icon everywhere it currently appears.

## Design

Remove the `ChatWidget` import and rendered `<ChatWidget />` instance from both `src/app/page.tsx` and `src/app/[lang]/layout.tsx`. Keep `src/components/ChatWidget.tsx` unchanged so the widget can be restored later without rebuilding it.

## Scope

- The root homepage at `/` no longer renders the floating chat icon.
- The localized site under `/ar` no longer renders the floating chat icon.
- No other layout, content, styling, or navigation changes are included.

## Verification

- Search the app routes to confirm no `ChatWidget` render sites remain.
- Run lint and the production build.
