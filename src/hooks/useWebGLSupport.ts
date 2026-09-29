'use client';

import { useSyncExternalStore } from 'react';

let cachedSupport: boolean | undefined;

function detectWebGLSupport() {
  if (cachedSupport !== undefined) {
    return cachedSupport;
  }

  const canvas = document.createElement('canvas');
  const preventContextError = (event: Event) => event.preventDefault();
  canvas.addEventListener('webglcontextcreationerror', preventContextError);

  try {
    const context =
      canvas.getContext('webgl2') ??
      canvas.getContext('webgl');

    cachedSupport = Boolean(context);

    if (context) {
      context.getExtension('WEBGL_lose_context')?.loseContext();
    }
  } catch {
    cachedSupport = false;
  } finally {
    canvas.removeEventListener('webglcontextcreationerror', preventContextError);
  }

  return cachedSupport;
}

const subscribe = () => () => {};
const getServerSnapshot = () => false;

export function useWebGLSupport() {
  return useSyncExternalStore(subscribe, detectWebGLSupport, getServerSnapshot);
}
