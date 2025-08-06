```plaintext
jirehgrp-templates/
│
├── templates/           # Framework starter templates
│   ├── nextjs/          # Custom Next.js template (TS)
│   ├── react-vite/      # React + Vite (JS or TS)
│   │   ├── js/          # React + Vite (JS)
│   │   └── ts/          # React + Vite (TS)
│   ├── sveltekit-vite/  # SvelteKit (TS)
│   │   ├── js/          # React + Vite (JS)
│   │   └── ts/          # React + Vite (TS)
│   ├── vanilla/         # HTML + (JS or TS)
│   │   ├── js/          # HTML + (JS)
│   │   └── ts/          # HTML + (TS)
│   └── vue3-vite/       # Vue 3 + Vite (JS or TS)
│       ├── js/          # Vue 3 + vite (JS)
│       └── ts/          # Vue 3 + vite (TS)
│
├── .gitignore
├── LICENSE
├── README.md            # Describe CLI usage, flags, frameworks
├── package.json         # "bin": { "create-jireh": "./cli/index.ts" }
├── tsconfig.json        # Support for TS in CLI
└── structure.md         # Internal dev documentation
```