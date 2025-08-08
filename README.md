# jirehgrp-templates

**Official frontend starter templates for `create-jireh`.** Supports modern frameworks and libraries including Next.js, React, Vue 3, SvelteKit, and Vanilla JS/TS — in both JavaScript and TypeScript variants.

---

## Table of Contents

- [Template Collection](#template-collection)
- [Folder Structure](#folder-structure)
- [Quick Usage](#quick-usage)
- [Multilingual Support](#multilingual-support)
- [Theme Toggle](#theme-toggle)
- [Theme & Language Toggle Comparison](#theme--language-toggle-comparison)
- [Credits & License](#credits--license)

---

## Template Collection

This monorepo includes frontend boilerplates designed for rapid project scaffolding. Each template follows best practices, supports Amharic + English translations, and integrates theme toggling (dark/light mode) by default.

### Available Templates

| Framework      | JavaScript | TypeScript | Multilingual     | Theme Toggle        |
| -------------- | ---------- | ---------- | ---------------- | ------------------- |
| Next.js        | ✔️         | ✔️         | ✔️ (am/en)       | ✔️                  |
| React + Vite   | ✔️         | ✔️         | ✔️ (am/en)       | ✔️                  |
| Vue 3 + Vite   | ✔️         | ✔️         | 🛠️ Under Construction | ✔️              |
| SvelteKit      | ✔️         | ✔️         | 🛠️ Under Construction | ✔️              |
| Vanilla        | ✔️         | ✔️         | ✔️ (am/en)       | ✔️                  |
| Vanilla + Vite | ✔️         | ✔️         | ✔️ (am/en)       | ✔️                  |

---

## Folder Structure

```plaintext
jirehgrp-templates/
│
├── .changeset/
├── .github/
│   └── workflow
├── templates/
│   ├── nextjs/                  # Next.js 15 + Tailwind + App Router + i18n
│   ├── react-vite/
│   │   ├── js/                  # React + Vite (JavaScript)
│   │   └── ts/                  # React + Vite (TypeScript)
│   ├── sveltekit-vite/
│   │   ├── js/                  # SvelteKit + Vite (JavaScript)
│   │   └── ts/                  # SvelteKit + Vite (TypeScript)
│   ├── vanilla/
│   │   ├── js/                  # Vanilla (Plain HTML/CSS/JavaScript)
│   │   ├── ts/                  # Vanilla (Plain HTML/CSS/TypeScript)
│   │   └── vite/
│   │       ├── js/              # Vanilla + Vite (JavaScript)
│   │       └── ts/              # Vanilla + Vite (TypeScript)
│   └── vue3-vite/
│       ├── js/                  # Vue 3 + Vite (JavaScript)
│       └── ts/                  # Vue 3 + Vite (TypeScript)
│
├── .gitignore
├── .versionrc
├── LICENSE
├── package.json
├── README.md
└── update-next.yml
```

Each folder contains a `README.md` file with usage instructions and details.

---

## Templates

```
templates/
    nextjs/
    react-vite/js/
    react-vite/ts/
    sveltekit-vite/js/ <!-- under-construction -->
    sveltekit-vite/ts/ <!-- under-construction -->
    vanilla/js/
    vanilla/ts/
    vanilla/vite/js/
    vanilla/vite/ts/
    vue-vite/js/ <!-- under-construction -->
    vue-vite/ts/ <!-- under-construction -->
```

---

## Quick Usage

To use these templates with `create-jireh` CLI:

```bash
npx create-jireh
```

Follow the prompts to select your framework and language variant.

> Alternatively, clone this repo and copy the desired template manually.

---

## Multilingual Support

All Jireh templates aim to support both Amharic 🇪🇹 and English 🇺🇸, starting with Next.js and Vanilla templates.

- Language toggling is implemented via `localStorage`
- Simple translation files (`translations/en`, `translations/am`) are included

---

## Theme Toggle

Every template (except base Vue/Svelte) includes light/dark mode toggle:

- Uses `data-theme` attribute
- Syncs with `localStorage`
- Accessible toggle UI in most templates

---

## Theme & Language Toggle Comparison

| Framework        | Language Context & Hook                             | Theme Context                          | Toggle UI Component                    | Persistence Method                                      |
|------------------|-----------------------------------------------------|----------------------------------------|----------------------------------------|---------------------------------------------------------|
| **Next.js**      | `LanguageContext.tsx` + `useTranslation.ts`         | `ThemeContext.tsx`                     | `LanguageToggle.tsx`, `ThemeToggle.tsx`| `localStorage`, `document.documentElement.lang`, `data-theme` |
| **React + Vite** | `LanguageContext.ts[x]` + `useTranslation.ts[x]`    | `ThemeContext.ts[x]`                   | `LanguageToggle.ts[x]`, `ThemeToggle.ts[x]`| Same as above                                      |
| **Vanilla**      | `scripts/lang.ts` + `translations/`                 | `scripts/theme.ts`                     | DOM buttons with `id="theme-toggle"`   | `localStorage`, `document.documentElement.lang`, `data-theme` |
| **Vue / Svelte** | 🛠️ Under Construction                                | 🛠️ Under Construction                  | 🛠️ Under Construction                  | 🛠️ Under Construction                                     |

---

## Credits & License

Templates inspired by best practices from:

- [Next.js](https://nextjs.org)
- [Vite](https://vitejs.dev)
- [ShadCN UI](https://ui.shadcn.dev/)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide React](https://lucide.dev)

Licensed under MIT © 2025 [JirehGroup](https://jirehgrp.com)

---

**Made with ❤️ by the [JirehGroup](https://jirehgrp.com) Team**
