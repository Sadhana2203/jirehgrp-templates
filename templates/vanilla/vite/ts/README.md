# Jireh Vanilla + Vite (TS)

A clean, fast, and modern **Vanilla TypeScript** starter powered by **Vite**.

- Written in TypeScript (no framework)
- Vite 7+ for lightning-fast dev/build
- Live reload (HMR) out of the box
- Plain HTML + CSS — no build complexity
- Language toggle (English + Amharic)
- Theme toggle (Light/Dark)

---

## File Structure

```plaintext
jirehgrp-vite-ts-vanilla/
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
│   └── index.ts               # Combined export
│
├── index.html                 # Main HTML entry point
├── script.ts                  # App logic (e.g. counter)
├── style.css                  # Custom styles
├── vite.config.ts             # Vite config
├── package.json               # NPM metadata & scripts
└── README.md                  # This file
````

---

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open in your browser:

```
http://localhost:5173
```

> Don't import compiled `.js` files in `index.html`. Just import `.ts` directly — Vite handles it.

---

## Built With

* [`vite`](https://vitejs.dev/) – Fast dev server & bundler
* [`typescript`](https://www.typescriptlang.org/) – Type-safe JS
* [`lucide`](https://lucide.dev/) – Icon system via ESM import

---

## Features

* Type-safe DOM interaction
* Theme toggle (dark/light mode)
* Language toggle (Amharic 🇪🇹 / English 🇺🇸)
* Click counter demo
* Amharic Entoto font
* Clean, modular layout for extending or scaffolding

---

## License

MIT – © 2025 [Jireh Group](https://jirehgrp.com)