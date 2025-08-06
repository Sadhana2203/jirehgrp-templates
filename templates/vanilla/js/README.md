# Jireh Vanilla (JS)

A clean, modern **Vanilla JavaScript starter** with:

- Plain HTML, CSS, and JS (no frameworks)
- Light/Dark **theme toggle**
- **Language toggle** (English & Amharic)
- No build tools or bundlers
- Custom Entoto font for Ge'ez script
- Ideal for learning, prototyping, or building your own micro-framework

---

## File Structure

```plaintext
jirehgrp-js-vanilla/
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
└── README.md                  # This file
```

---

## Getting Started

Open `index.html` directly in your browser, or run a local server:

```bash
# Using live-server (VSCode extension or globally installed)
live-server

# Or with Python
python3 -m http.server
```

> No build step. No NPM. Just open and go.

---

## Features

* 🌓 **Theme toggle** (light/dark mode)
* 🌐 **Language toggle** (Amharic 🇪🇹 and English 🇺🇸)
* 🧮 **Counter button** with DOM updates
* 🖋️ **Entoto font** for Amharic display
* 🧩 Modular file structure
* 🔧 Easy to extend — great base for personal micro-frameworks

---

## License

MIT – © 2025 Jireh Group