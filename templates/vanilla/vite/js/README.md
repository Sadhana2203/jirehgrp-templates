# Jireh Vanilla + Vite (JavaScript)

A clean, modern **Vanilla JavaScript starter** powered by [Vite](https://vitejs.dev):

* Vite 5+ for lightning-fast dev/build
* Plain HTML, CSS, and JS — no frameworks
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
Framework: Vanilla + Vite
Language:  JavaScript
```

---

## Manual Setup

```bash
npm install
npm run dev
```

Visit **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## Folder Structure

```
templates/vanilla-vite/js/
├── assets/
│   ├── fonts/         # Entoto font
│   └── favicon.ico
├── scripts/
│   ├── lang.js        # Language switch logic
│   └── theme.js       # Theme toggle logic
├── translations/      # am.js, en.js, index.js
├── index.html
├── script.js
├── style.css
├── vite.config.js
├── package.json
└── README.md
```

---

## Multilingual Support

* Language files in `/translations`
* Managed by `lang.js`
* Saves preference to `localStorage`

---

## Theme Toggle

* `theme.js` handles dark/light switching
* Saved in `localStorage`
* Applied via `data-theme` on `<html>`

---

## Template Map

**CLI Key:** `vanilla-vite-js`
**Registry Path:** `jirehgrp-org/jirehgrp-templates/templates/vanilla-vite/js`

---

**Made with ❤️ by the [JirehGroup](https://jirehgrp.com) Team**
