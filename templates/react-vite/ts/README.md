# React + Vite (TypeScript)

A full-featured [React](https://react.dev/) + [Vite](https://vitejs.dev/) + TypeScript starter template with:

* Fast Vite setup
* Light/Dark theme toggle
* Multilingual support (Amharic 🇪🇹 & English 🇺🇸)
* ShadCN UI + Tailwind CSS
* Type-safe contexts and hooks
* Fully integrated with [`create-jireh`](https://github.com/jirehgrp-org/create-jireh) CLI

---

## Quick Start (via CLI)

```bash
npx create-jireh
```

Select:

```
Framework: React + Vite
Language:  TypeScript
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
* TypeScript with strict mode
* Tailwind CSS 4 + ShadCN UI
* Amharic & English translations
* Theme + Language Context API
* ESLint + tsconfig ready
* Custom hooks for translation & Ethiopian calendar

---

## Folder Structure

```
templates/react-vite/ts/
├── public/
├── src/
│   ├── assets/                      # Static assets
│   ├── components/
│   │   ├── common/                  # Header, toggles
│   │   ├── context/                 # Theme & language contexts
│   │   └── ui/                      # ShadCN UI components
│   ├── hooks/                       # Custom hooks
│   ├── lib/                         # Utilities
│   ├── translations/                # am.ts, en.ts, index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── tsconfig*.json
├── eslint.config.mjs
├── vite.config.ts
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

* `ThemeContext` for light/dark
* Saved in `localStorage`
* Applied via `data-theme` on `<html>`

---

## Template Map

**CLI Key:** `react-vite-ts`
**Registry Path:** `jirehgrp-org/jirehgrp-templates/templates/react-vite/ts`

---

**Made with ❤️ by the [JirehGroup](https://jirehgrp.com) Team**