# Jireh Vanilla + Vite (TS)

Minimal starter template using:

- Vanilla TypeScript (no framework)
- Vite 7+ for fast dev/build
- Native ES modules and HMR
- Plain HTML + CSS

---

## File Structure

```plaintext
jirehgrp-vite-ts-vanilla/
│
├── index.html         # App entry point
├── script.ts          # TypeScript logic (compiled by Vite)
├── style.css          # Global styles
├── vite.config.ts     # Vite configuration (TS-compatible)
├── tsconfig.json      # TypeScript config
├── package.json       # Scripts & dev dependencies
├── README.md          # This file
└── STRUCTURE.md       # Optional internal notes
```

---

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the app in your browser:

```
http://localhost:5173
```

---

## Dependencies

- [`vite`](https://vitejs.dev/) – development/build tooling
- [`typescript`](https://www.typescriptlang.org/) – for type-safe JavaScript

---

## Features

- Type-safe DOM interaction using `document.getElementById`
- Button click counter with live updates
- Clean, readable CSS
- Fast HMR during development
- No framework or build complexity — just Vite + TS

---

## License

MIT – © 2025 Jireh Group