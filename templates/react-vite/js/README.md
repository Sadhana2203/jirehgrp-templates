# React + Vite (JavaScript)

A full-featured React + Vite starter template with:

- Fast Vite setup
- Light/Dark theme toggle
- Multilingual support (Amharic 🇪🇹 & English 🇺🇸)
- ShadCN UI + Tailwind

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Multilingual Support](#multilingual-support)
- [Theme Toggle](#theme-toggle)
- [Custom Hooks](#custom-hooks)
- [Credits & Inspirations](#credits--inspirations)

---

## Features

- React + Vite  
- Tailwind CSS  
- ShadCN UI  
- Dark/Light theme toggle  
- Amharic and English translations  
- Context API for language and theme  
- Modular folder structure  
- Custom hooks for calendar and translation

---

## Project Structure

```plaintext
react-vite-js-template/
├── public/
│   ├── fonts/
│   └── favicon.ico
├── src/
│   ├── assets/                  # Static assets (icons, logos)
│   ├── components/
│   │   ├── common/              # Header, ThemeToggle, LanguageToggle
│   │   ├── context/             # Theme and Language Contexts
│   │   └── ui/                  # ShadCN UI components
│   ├── hooks/                   # Custom hooks (calendar, translation)
│   ├── lib/                     # Utility functions
│   ├── translations/            # `am.js`, `en.js`, `index.js`
│   ├── App.jsx
│   ├── main.jsx
│   └── styles (css files)
├── vite.config.json             # Vite configuration
├── package.json
└── README.md
```

---

## Getting Started

```bash
npm install
npm run dev
```

> This runs the development server at `http://localhost:5173`.

---

## Multilingual Support

Language is managed via React Context + custom `useTranslation` hook.

- Translations stored in `/translations/am.js` and `/translations/en.js`
- Language preference is saved to `localStorage`
- Accessible via `LanguageContext`

Change language in-app using the toggle UI (`LanguageToggle.jsx`).

---

## Theme Toggle

Dark/Light theme toggling is fully integrated:

- Uses `ThemeContext` and `useState`
- Theme value (`light` or `dark`) is saved in `localStorage`
- Controlled using `data-theme` attribute on `<html>`

Customize UI colors via Tailwind + ShadCN theme config.

---

## Custom Hooks

- `useTranslation.js`: Returns localized strings based on selected language
- `useCalendar.js`: Utility to return Ethiopian and Gregorian dates based on language context

---

## Credits & Inspirations

This template is built with:

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com)
- [ShadCN UI](https://ui.shadcn.dev/)
- [Lucide React](https://lucide.dev)

---

**Made with ❤️ by the JirehGroup Team**
