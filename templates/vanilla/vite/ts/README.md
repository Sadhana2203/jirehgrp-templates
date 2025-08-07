# Jireh Vanilla (TypeScript)

A clean, modern **Vanilla TypeScript starter** with:

* Plain HTML, CSS, and TypeScript — no frameworks
* Light/Dark **theme toggle**
* **Language toggle** (English 🇺🇸 & Amharic 🇪🇹)
* Entoto font for Ge'ez script
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

3. Ensure HTML loads compiled `.js`:

```html
<script type="module" src="./dist/scripts/lang.js"></script>
```

---

## Folder Structure

```
templates/vanilla/ts/
├── assets/
│   ├── fonts/         # Entoto font
│   └── favicon.ico
├── scripts/
│   ├── lang.ts        # Language switch logic
│   └── theme.ts       # Theme toggle logic
├── translations/      # am.ts, en.ts, index.ts
├── index.html
├── script.ts
├── style.css
├── tsconfig.json
└── README.md
```

---

## Multilingual Support

* `lang.ts` + `/translations`
* Language preference stored in `localStorage`
* DOM updated dynamically

---

## 🌓 Theme Toggle

* `theme.ts` handles theme switching
* Preference stored in `localStorage`
* Applied via `data-theme` on `<html>`

---

## 🏷 Template Map

**CLI Key:** `vanilla-ts`
**Registry Path:** `jirehgrp-org/jirehgrp-templates/templates/vanilla/ts`

---

**Made with ❤️ by the [JirehGroup](https://jirehgrp.com) Team**
