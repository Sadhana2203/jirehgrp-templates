# Jireh Vanilla (TS)

A clean, modern **Vanilla TypeScript starter** with:

- Plain HTML, CSS, and TypeScript (no frameworks)
- Light/Dark **theme toggle**
- **Language toggle** (English 🇺🇸 & Amharic 🇪🇹)
- No build tools or bundlers needed
- Custom Entoto font for Ge'ez script
- Ideal for learning, prototyping, or building your own micro-framework

---

## 📁 File Structure

```plaintext
jirehgrp-ts-vanilla/
│
├── assets/
│   ├── fonts/
│   │   └── entoto.ttf          # Entoto font for Amharic
│   └── favicon.ico             # App favicon
│
├── scripts/
│   ├── lang.ts                 # Language switch logic
│   └── theme.ts                # Theme toggle logic
│
├── translations/              # Translations folder
│   ├── am.ts                  # Amharic texts
│   ├── en.ts                  # English texts
│   └── index.ts               # Combined translation export
│
├── index.html                 # Main HTML file
├── script.ts                  # App logic (e.g. counter)
├── style.css                  # Custom styles
├── tsconfig.json              # TypeScript config
└── README.md                  # This file
```

---

## Getting Started

1. **Compile TypeScript:**

```bash
tsc
```

2. **Run locally in a browser:**

```bash
# Using live-server (VSCode extension or globally installed)
live-server

# Or with Python
python3 -m http.server
```

3. **Make sure HTML loads `.js` files:**

Your `index.html` should reference the compiled `.js` files (not `.ts`):

```html
<script type="module" src="./dist/scripts/lang.js"></script>
```

---

## Features

* **Theme toggle** (light/dark mode)
* **Language toggle** (Amharic 🇪🇹 and English 🇺🇸)
* **Button counter** using DOM updates
* **Entoto font** support for Amharic script
* Modular, typed file structure
* Easy to extend — a great starting point for micro-frameworks or native UI toolkits

---

## TypeScript Config Highlights

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "moduleResolution": "Node",
    "outDir": "./dist",
    "rootDir": "./",
    "strict": true,
    "esModuleInterop": true
  },
  "include": [
    "script.ts",
    "scripts/**/*.ts",
    "translations/**/*.ts"
  ]
}
```

---

## License

MIT – © 2025 Jireh Group
