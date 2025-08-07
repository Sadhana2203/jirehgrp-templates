# Jireh Vanilla (JavaScript)

A clean, modern **Vanilla JavaScript starter** with:

* Plain HTML, CSS, and JS — no frameworks or bundlers
* Light/Dark **theme toggle**
* **Language toggle** (English 🇺🇸 & Amharic 🇪🇹)
* Custom Entoto font for Ge'ez script
* Perfect for learning, prototyping, or building a micro-framework
* Fully supported by the [`create-jireh`](https://github.com/jirehgrp-org/create-jireh) CLI

---

## Quick Start (via CLI)

```bash
npx create-jireh
```

Select:

```
Framework: Vanilla
Language:  JavaScript
```

Then simply open `index.html` in your browser, or serve locally.

---

## Manual Setup

```bash
# Open directly
index.html

# OR run a local server
live-server
# or
python3 -m http.server
```

> No npm, no build step — just open and go.

---

## Folder Structure

```
templates/vanilla/js/
├── assets/
│   ├── fonts/           # Entoto font for Amharic
│   └── favicon.ico
├── scripts/
│   ├── lang.js          # Language switch logic
│   └── theme.js         # Theme toggle logic
├── translations/        # am.js, en.js, index.js
├── index.html
├── script.js            # App logic (e.g., counter)
├── style.css
└── README.md
```

---

## Multilingual Support

* `lang.js` + `/translations` folder for am/en
* Language preference saved in `localStorage`
* Updates text dynamically based on selected language

---

## Theme Toggle

* `theme.js` handles light/dark mode switching
* Saves preference to `localStorage`
* Applies via `data-theme` on `<html>`

---

## Template Map

**CLI Key:** `vanilla-js`
**Registry Path:** `jirehgrp-org/jirehgrp-templates/templates/vanilla/js`

---

**Made with ❤️ by the [JirehGroup](https://jirehgrp.com) Team**