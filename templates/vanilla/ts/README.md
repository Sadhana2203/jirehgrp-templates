# Jireh Vanilla (TypeScript)

A clean, modern **Vanilla TypeScript starter** with:

* Plain HTML, CSS, and TypeScript — no frameworks required
* Light/Dark **theme toggle**
* **Language toggle** (English 🇺🇸 & Amharic 🇪🇹)
* Custom Entoto font for Ge'ez script
* Type-safe structure and configs
* Fully supported by the [`create-jireh`](https://github.com/jirehgrp-org/create-jireh) CLI

---

## Quick Start (via CLI)

```bash
npx create-jireh
```

Select:

```
Framework: Vanilla
Language:  TypeScript
```

Compile your TypeScript, then open in a browser.

---

## Manual Setup

1. Compile TypeScript:

```bash
tsc
```

2. Serve locally:

```bash
live-server
# or
python3 -m http.server
```

3. Ensure HTML loads compiled `.js` files:

```html
<script type="module" src="./dist/scripts/lang.js"></script>
```

---

## Folder Structure

```
templates/vanilla/ts/
├── assets/
│   ├── fonts/           # Entoto font
│   └── favicon.ico
├── scripts/
│   ├── lang.ts          # Language switch logic
│   └── theme.ts         # Theme toggle logic
├── translations/        # am.ts, en.ts, index.ts
├── index.html
├── script.ts            # App logic
├── style.css
├── tsconfig.json
└── README.md
```

---

## Multilingual Support

* `lang.ts` + `/translations` folder for am/en
* Language saved in `localStorage`
* Updates DOM dynamically based on selection

---

## Theme Toggle

* `theme.ts` handles dark/light mode
* Saves preference in `localStorage`
* Applied via `data-theme` on `<html>`

---

## TypeScript Config Highlights

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "outDir": "./dist",
    "rootDir": "./",
    "strict": true
  },
  "include": [
    "script.ts",
    "scripts/**/*.ts",
    "translations/**/*.ts"
  ]
}
```

---

## Template Map

**CLI Key:** `vanilla-ts`
**Registry Path:** `jirehgrp-org/jirehgrp-templates/templates/vanilla/ts`

---

**Made with ❤️ by the [JirehGroup](https://jirehgrp.com) Team**
