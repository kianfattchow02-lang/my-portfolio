# Chow Kian Fatt E-Portfolio

## Project structure

```text
e-portfolio/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── documents/
└── README.md
```

## Current technology stack

- HTML5 — page structure and semantic content
- CSS3 — layout, responsive design, variables, gradients, transitions and animations
- Vanilla JavaScript (ES6+) — menu, active navigation, logbook accordion/search, scroll reveal, contact-form demo, CV button and back-to-top behavior
- Google Fonts — DM Sans and Playfair Display
- Browser Web APIs — `IntersectionObserver`, DOM APIs, `window.scrollTo()` and scroll events

## What is NOT currently used

There is no evidence in the supplied `Demo 6.html` of:
- React / Vue / Angular
- Bootstrap / Tailwind CSS
- jQuery
- Node.js / Express
- TypeScript
- a frontend build tool such as Vite or Webpack
- a backend/database connection
- an external JavaScript library

## Notes

1. The original single-file HTML has been split into separate HTML, CSS and JS files.
2. The visual styles are kept in `css/styles.css`.
3. Interactive behavior is kept in `js/main.js`.
4. The CV download action and contact form remain demo placeholders from the original file; they do not send a real message or download a real PDF until configured.
5. Add your real CV under `assets/documents/` when ready.
6. Add profile/project images under `assets/images/` when ready.
