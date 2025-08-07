# React + Vite (JavaScript)

A full-featured [React](https://react.dev/) + [Vite](https://vitejs.dev/) starter template with:

* Fast Vite setup
* Light/Dark theme toggle
* Multilingual support (Amharic 🇪🇹 & English 🇺🇸)
* ShadCN UI + Tailwind CSS
* Ready for [`create-jireh`](https://github.com/jirehgrp-org/create-jireh) CLI

---

## Quick Start (via CLI)

```bash
npx create-jireh
```

Select:

```
Framework: React + Vite
Language:  JavaScript
```

Then:

```bash
cd my-app
npm run dev
```

App runs at **[http://localhost:5173](http://localhost:5173)**.

---

## Manual Setup

```bash
npm install
npm run dev
```

---

## Features

* React 18 + Vite
* Tailwind CSS 4 + ShadCN UI
* Dark/Light theme toggle
* Amharic & English translations with `LanguageContext`
* Context API for language + theme
* Modular, clean folder structure
* Custom hooks for translation & Ethiopian calendar

---

## Folder Structure

```
templates/react-vite/js/
├── public/
├── src/
│   ├── assets/                  # Static assets
│   ├── components/
│   │   ├── common/              # Header, toggles
│   │   ├── context/             # Theme & language contexts
│   │   └── ui/                  # ShadCN UI components
│   ├── hooks/                   # Custom hooks
│   ├── lib/                     # Utilities
│   ├── translations/            # am.js, en.js, index.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/                  # CSS files
├── vite.config.js
└── package.json
```

---

## Multilingual Support

* `LanguageContext` + `useTranslation()` hook
* Translations in `/translations`
* Language saved in `localStorage`
* Applied via `document.documentElement.lang`

---

## Theme Toggle

* `ThemeContext` for light/dark modes
* Saved in `localStorage`
* Applied via `data-theme` on `<html>`

---

## Template Map

**CLI Key:** `react-vite-js`
**Registry Path:** `jirehgrp-org/jirehgrp-templates/templates/react-vite/js`

---

**Made with ❤️ by the [JirehGroup](https://jirehgrp.com) Team**