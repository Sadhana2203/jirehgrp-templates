# Jireh Vanilla (TS)

A clean, modern **Vanilla TypeScript starter** with:

- Plain HTML, CSS, and TypeScript (no frameworks)
- Light/Dark **theme toggle**
- **Language toggle** (English 🇺🇸 & Amharic 🇪🇹)
- No bundlers or build tools required
- Custom Entoto font for Ge'ez script
- Ideal for learning, prototyping, or building your own micro-framework

---

## File Structure

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
├── translations/
│   ├── am.ts                  # Amharic texts
│   ├── en.ts                  # English texts
│   └── index.ts               # Combined translation export
│
├── index.html                 # Main HTML file (uses compiled .js)
├── script.ts                  # App logic (e.g. counter)
├── style.css                  # Custom styles
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
````

---

## Getting Started

1. **Install TypeScript globally (if not already):**

```bash
npm install -g typescript
```

2. **Compile all `.ts` files to `.js`:**

```bash
tsc
```

3. **Run locally in a browser:**

```bash
# Option 1: Live Server (VSCode extension)
live-server

# Option 2: Python HTTP server
python3 -m http.server
```

4. **Ensure HTML uses compiled `.js` files:**

Your `<script>` tags in `index.html` should point to `.js` files in the `dist/` folder (e.g.):

```html
<script type="module" src="./dist/scripts/lang.js"></script>
```

---

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "moduleResolution": "Node",
    "outDir": "./dist",
    "rootDir": "./",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "script.ts",
    "scripts/**/*.ts",
    "translations/**/*.ts"
  ]
}
```

---

## Features

* **Theme toggle** (light/dark)
* **Language toggle** (Amharic 🇪🇹 / English 🇺🇸)
* **Counter button** demo
* **Entoto font** for Amharic script
* **Type-safe DOM access**
* Great starting point for custom vanilla JS/TS frameworks

---

## License

MIT – © 2025 [Jireh Group](https://jirehgrp.com)