# Next.js Custom Framework

This is a [Next.js](https://nextjs.org) 15 starter template with built-in **Tailwind CSS**, **App Router**, multilingual support (**Amharic 🇪🇹 & English 🇺🇸**), theme toggle, and ShadCN-ready UI components — designed to work seamlessly with the [`create-jireh`](https://github.com/jirehgrp-org/create-jireh) CLI.

---

## Quick Start (via CLI)

```bash
npx create-jireh
```

Select:

```
Framework: Next.js
Language:  TypeScript or JavaScript
```

Then:

```bash
cd my-app
npm run dev
```

Your app will be live at **[http://localhost:3000](http://localhost:3000)**.

---

## Manual Setup

If you cloned this template directly:

```bash
npm install
npm run dev
```

---

## Features

* **Next.js 15** + App Router
* **Amharic & English** translation with context + hooks
* **Light/Dark theme** via [`next-themes`](https://github.com/pacocoursey/next-themes)
* **ShadCN-compatible UI setup**
* Preconfigured **Tailwind CSS 4** + ESLint
* Handy utilities: `clsx`, `tailwind-merge`, `lucide-react`, `sonner`
* Custom font loading with [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

---

## Folder Structure

```
templates/nextjs/
├── public/                  # Static assets
├── src/
│   ├── app/                 # App Router pages & layouts
│   ├── components/          # UI components & providers
│   ├── hooks/               # Custom hooks
│   ├── lib/                 # Utilities
│   ├── translations/        # am/en translation files
│   └── types/               # TypeScript types
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Translation Example

```ts
import { useTranslation } from "@/hooks/useTranslation";

const t = useTranslation();
console.log(t.editMessage); // Output changes with selected language
```

---

## Learn More

* [Next.js Documentation](https://nextjs.org/docs)
* [Tailwind CSS Docs](https://tailwindcss.com/docs)
* [ShadCN UI](https://ui.shadcn.dev/)
* [next-themes](https://github.com/pacocoursey/next-themes)
* [Lucide Icons](https://lucide.dev/)

---

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Template Map

**CLI Key:** `nextjs`
**Registry Path:** `jirehgrp-org/jirehgrp-templates/templates/nextjs`

---

**Made with ❤️ by the [JirehGroup](https://jirehgrp.com) Team**