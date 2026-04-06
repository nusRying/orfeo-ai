# ORFEO AI - Premium AI Agency Landing Page

A modern marketing site built with Next.js, Three.js, and Framer Motion.

## Live Demo

[View Live Site on GitHub Pages](https://nusRying.github.io/orfeo-ai/)

## Features

- 3D animated wave background powered by Three.js and React Three Fiber
- Real-time EST clock in the navigation bar
- Responsive layout for mobile, tablet, and desktop
- GitHub Pages deployment through GitHub Actions
- Env-based site branding and contact configuration

## Tech Stack

- Framework: [Next.js](https://nextjs.org/)
- 3D Graphics: [Three.js](https://threejs.org/) and [@react-three/fiber](https://github.com/pmndrs/react-three-fiber)
- Styling: [Tailwind CSS 4](https://tailwindcss.com/)
- Animations: [Framer Motion](https://www.framer.com/motion/)
- Icons: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/nusRying/orfeo-ai.git
   ```
2. Install dependencies.
   ```bash
   npm install
   ```
3. Copy the env template.
   ```bash
   cp .env.example .env.local
   ```
4. Update the values in `.env.local`.
   - `NEXT_PUBLIC_SITE_LOGO_PATH` should point to a file inside `public/`, for example `/logo/logo-orange.svg`
   - `NEXT_PUBLIC_SITE_ADDRESS` uses `|` to split address lines
5. Run the development server.
   ```bash
   npm run dev
   ```
6. Open [http://localhost:3005](http://localhost:3005).

## Deployment

The project is configured for GitHub Pages.

1. Push your changes to the `main` branch.
2. Add the `NEXT_PUBLIC_*` values from `.env.example` in GitHub under `Settings -> Secrets and variables -> Actions -> Variables` if you want to manage site info from GitHub.
3. Set `NEXT_PUBLIC_SITE_BASE_PATH` when deploying on a subpath such as GitHub Pages.
4. Enable GitHub Actions under `Settings -> Pages`.

Environment values are applied at build time, so any update requires a rebuild and redeploy.
