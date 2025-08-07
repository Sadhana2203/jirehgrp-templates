# React + Vite (TypeScript)

A full-featured React + Vite + TypeScript starter template with:

- Fast Vite setup
- Light/Dark theme toggle
- Multilingual support (Amharic 🇪🇹 & English 🇺🇸)
- ShadCN UI + Tailwind
- Type-safe contexts and hooks

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Multilingual Support](#multilingual-support)
- [Theme Toggle](#theme-toggle)
- [TypeScript & ESLint](#typescript--eslint)
- [Credits & Inspirations](#credits--inspirations)

---

## Features

- React + Vite  
- TypeScript  
- Tailwind CSS  
- ShadCN UI  
- Language Toggle (am/en)  
- Theme Toggle (light/dark)  
- ESLint + tsconfig setup  
- Modular, clean folder structure

---

## Project Structure

```plaintext
react-vite-ts-template/
├── public/
│   ├── fonts/
│   └── favicon.ico
├── src/
│   ├── assets/                      # Static assets
│   ├── components/
│   │   ├── common/                  # Header, ThemeToggle, LanguageToggle
│   │   ├── context/                 # Theme & Language Contexts
│   │   └── ui/                      # ShadCN UI components
│   ├── hooks/                       # Custom hooks (calendar, translation)
│   ├── lib/                         # Utility functions
│   ├── translations/               # Translations for am/en
│   ├── App.tsx
│   ├── main.tsx
│   ├── App.css, index.css
│   └── vite-env.d.ts
├── tsconfig*.json                   # TypeScript configs
├── eslint.config.mjs               # ESLint config
├── vite.config.json
├── index.html
└── package.json
```

---

## Getting Started

```bash
npm install
npm run dev
```

> Launches at `http://localhost:5173`

---

## Multilingual Support

- Translations live in `src/translations/`
- `LanguageContext` manages current locale
- Custom `useTranslation()` hook provides localized strings
- Language is stored in `localStorage` and applied via `document.documentElement.lang`

---

## Theme Toggle

- Uses `ThemeContext` for toggling between `light` and `dark`
- Controlled via `data-theme` attribute on `<html>`
- Theme preference is saved in `localStorage`

---

## TypeScript & ESLint

Project uses strict TS settings + recommended ESLint rules.

ESLint config supports:

- Type-aware linting
- Optional extensions: `eslint-plugin-react-x`, `eslint-plugin-react-dom`

```bash
npm run lint
```

---

## Credits & Inspirations

Powered by:

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com)
- [ShadCN UI](https://ui.shadcn.dev/)
- [Lucide React](https://lucide.dev)

---

**Made with ❤️ by the JirehGroup Team**
