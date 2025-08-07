# jirehgrp-templates

**Official frontend starter templates for `create-jireh`.** Supports modern frameworks and libraries including Next.js, React, Vue 3, SvelteKit, and Vanilla JS/TS — in both JavaScript and TypeScript variants.

---

## Template Collection

This monorepo includes frontend boilerplates designed for rapid project scaffolding. Each template follows best practices, supports Amharic + English translations, and integrates theme toggling (dark/light mode) by default.

### Available Templates

| Framework      | JavaScript | TypeScript | Multilingual | Theme Toggle |
| -------------- | ---------- | ---------- | ------------ | ------------ |
| Next.js        | ✔️         | ✔️        | ✔️ (am/en)   | ✔️          |
| React + Vite   | ✔️         | ✔️        | ✔️ (am/en)   | ✔️          |
| Vue 3 + Vite   | ✔️         | ✔️        | ❌           | ✔️          |
| SvelteKit      | ✔️         | ✔️        | ❌           | ✔️          |
| Vanilla        | ✔️         | ✔️        | ✔️ (am/en)   | ✔️          |
| Vanilla + Vite | ✔️         | 🚧        | ✔️ (am/en)   | ✔️          |

---

## Folder Structure

```
jirehgrp-templates/
│
├── templates/
│   ├── nextjs/            # Next.js 15 + Tailwind + App Router + i18n
│   ├── react-vite/
│   │   ├── js/             # React + Vite (JS)
│   │   └── ts/             # React + Vite (TS)
│   ├── sveltekit-vite/
│   │   ├── js/             # SvelteKit (JS)
│   │   └── ts/             # SvelteKit (TS)
│   ├── vanilla/
│   │   ├── js/             # Plain HTML/CSS/JS
│   │   └── ts/             # Plain HTML/CSS/TS
│   └── vue3-vite/
│       ├── js/             # Vue 3 + Vite (JS)
│       └── ts/             # Vue 3 + Vite (TS)
```

Each folder contains a `README.md` file with usage instructions and details.

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

All Jireh templates aim to support both English 🇺🇸 and Amharic 🇪🇹, starting with Next.js and Vanilla templates.

* Language toggling is implemented via `localStorage`
* Simple translation files (`translations/en`, `translations/am`) are included

---

## Theme Toggle

Every template (except base Vue/Svelte) includes light/dark mode toggle:

* Uses `data-theme` attribute
* Syncs with localStorage
* Accessible toggle UI in most templates

---

## Credits & License

Templates inspired by best practices from:

* [Next.js](https://nextjs.org)
* [Vite](https://vitejs.dev)
* [ShadCN UI](https://ui.shadcn.dev/)
* [Tailwind CSS](https://tailwindcss.com)
* [Lucide React](https://lucide.dev)

Licensed under MIT © 2025 [Jireh Group](https://jirehgrp.com)

---

**Made with ❤️ by the JirehGroup Team**