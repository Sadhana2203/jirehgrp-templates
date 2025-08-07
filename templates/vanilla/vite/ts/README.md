# Jireh Vanilla + Vite (TS)

Minimal starter template using:

- Vanilla TypeScript (no framework)
- Vite 7+ for fast dev/build
- Native ES modules and HMR
- Plain HTML + CSS

---

## File Structure

```plaintext
jirehgrp-vite-js-vanilla/
│
├── assets/
│   ├── fonts/
│   │   └── entoto.ttf          # Entoto font for Amharic
│   └── favicon.ico             # App favicon
│
├── scripts/
│   ├── lang.ts                 # Language switch logic
│   └── theme.ts                # Theme toggle logic
│
├── translations/              # Translations folder
│   ├── am.ts                  # Amharic texts
│   ├── en.ts                  # English texts
│   └── index.ts               # Combined translation export
│
├── index.html                 # Main HTML file
├── script.ts                  # App logic (e.g. counter)
├── style.css                  # Custom styles
├── vite.config.ts             # Vite config
├── package.json               # NPM metadata & scripts
└── README.md                  # This file
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