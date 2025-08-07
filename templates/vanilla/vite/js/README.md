# Jireh Vanilla + Vite (JS)

A clean, modern **Vanilla JavaScript starter** powered by [Vite](https://vitejs.dev):

- Vite 5+ for lightning-fast dev/build
- Plain HTML, CSS, and JS (no frameworks)
- Theme toggle (light/dark)
- Language toggle (Amharic 🇪🇹 and English 🇺🇸)
- Live reloading and ES module support
- Entoto font for Ge'ez script (Amharic)

---

## File Structure

```plaintext
jirehgrp-vite-js-vanilla/
│
├── assets/
│   ├── fonts/
│   │   └── entoto.ttf          # Entoto font for Amharic
│   └── favicon.ico             # App favicon
│
├── scripts/
│   ├── lang.js                 # Language switch logic
│   └── theme.js                # Theme toggle logic
│
├── translations/              # Translations folder
│   ├── am.js                  # Amharic texts
│   ├── en.js                  # English texts
│   └── index.js               # Combined translation export
│
├── index.html                 # Main HTML file
├── script.js                  # App logic (e.g. counter)
├── style.css                  # Custom styles
├── vite.config.js             # Vite config
├── package.json               # NPM metadata & scripts
└── README.md                  # This file
```

---

## Getting Started

1. **Install dependencies**:

```bash
npm install
```

2. **Run the local dev server**:

```bash
npm run dev
```

3. **Open in browser**:

```
http://localhost:5173
```

---

## Dependencies

- [`vite`](https://vitejs.dev) – Dev-only, no runtime dependencies

---

## Features

- Theme toggle with `data-theme` and localStorage
- Language toggle (Amharic + English)
- Button click counter using `document.getElementById`
- Custom Entoto font (for Amharic/Ge'ez display)
- Live reloading & ESM support (via Vite)
- Modular and extensible structure
- Perfect base for learning or building micro-frameworks

---

## License

MIT – © 2025 [Jireh Group](https://jirehgrp.com)