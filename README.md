# Ema John - React + TypeScript E-commerce Frontend

<!-- MIT License -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

<!-- HTML & CSS -->

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

<!-- Styling / PostCSS -->

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/docs/)
[![PostCSS](https://img.shields.io/badge/PostCSS-efefef?logo=postcss&logoColor=black)](https://postcss.org/)
[![daisyUI](https://img.shields.io/badge/daisyUI-5A0EF8?logo=tailwindcss&logoColor=white)](https://daisyui.com/)

<!-- Fonts & Icons -->

[![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?logo=google&logoColor=white)](https://fonts.google.com/)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?logo=fontawesome&logoColor=white)](https://fontawesome.com/)
[![Heroicons](https://img.shields.io/badge/Heroicons-0EA5E9?logo=heroicons&logoColor=white)](https://heroicons.com/)

<!-- Infra & Runtime -->

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)](https://expressjs.com/)

<!-- Languages & Web Standards -->

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![ECMAScript Spec](https://img.shields.io/badge/ECMAScript-262-7A0BC0?logo=ecmascript&logoColor=white)](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/docs/)

<!-- Testing -->

[![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white)](https://jestjs.io/)

<!-- Linting & Formatting -->

[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/docs/latest/)
[![Prettier](https://img.shields.io/badge/Prettier-2B3A42?logo=prettier&logoColor=white)](https://prettier.io/docs/)

Ema John is a polished, production-ready React e-commerce frontend showcasing a modern component architecture, TypeScript support, Tailwind CSS styling, and a static product catalog for demo and integration purposes. This repository is an ideal reference or starter kit for building a performant storefront with clear separation of concerns and ready-to-deploy static build output.

## Key highlights

- TypeScript-first React app built with Create React App.
- Tailwind CSS utility-first styling ([tailwind.config.js](tailwind.config.js)).
- Self-contained product catalog for fast local development ([public/products.json](public/products.json), [src/fakeData/products.json](src/fakeData/products.json), [build/products.json](build/products.json)).
- Ready static production build in [build/](build/index.html) and asset manifest ([build/asset-manifest.json](build/asset-manifest.json)).
- Clean layout and reusable components (e.g. [`Main`](src/layouts/Main.tsx), [`About`](src/components/About/About.tsx)).

## Table Of Contents

- Project status
- Demo and preview
- Tech stack
- Quick start
- Project structure (selected files)
- Data and assets
- Build and deployment
- Contributing
- License and credits

## Project status

- Stable demo frontend with fully populated static product data in the [public](public/products.json) and [build](build/products.json) folders.
- Production-ready build produced by `react-scripts build` is in [build/](build/index.html).

## Demo and preview

- Local dev: run the app with the commands below to preview in your browser.
- Static preview: the production build lives in [build/index.html](build/index.html). Use any static host (GitHub Pages, Netlify, Vercel) to serve [build/].

## Tech stack

- React 18 + TypeScript - core UI and types ([src/index.tsx](src/index.tsx), [src/App.tsx](src/App.tsx)).
- Tailwind CSS - styling and responsive utilities ([tailwind.config.js](tailwind.config.js), [src/index.css](src/index.css)).
- Create React App build and dev tooling (see [package.json](package.json)).

## Quick start

1. **Install dependencies:**

```bash
   npm install
```

2. **Run in development:**

```bash
   npm start
```

- Opens http://localhost:3000 by default (react-scripts)

3. **Run tests:**

---

npm test

---

4. **Create a production build:**

---

npm run build

---

- Output is written to the build/ folder (see build/index.html)

## Selected project structure------> important files

- [package.json](package.json) - scripts, dependencies and project metadata.
- [tailwind.config.js](tailwind.config.js) - Tailwind configuration and theme extension.
- [src/index.tsx](src/index.tsx) - application root and React bootstrap.
- [src/App.tsx](src/App.tsx) - top-level application component and routing.
- [src/layouts/Main.tsx](src/layouts/Main.tsx) - main layout wrapper and router outlet (`Main`).
- [src/components/About/About.tsx](src/components/About/About.tsx) - About page component (`About`).
- [src/index.css](src/index.css) and [src/App.css](src/App.css) - global and app-specific styles.
- [public/index.html](public/index.html) - public HTML template.
- [public/products.json](public/products.json) - primary static product dataset used at runtime.
- [src/fakeData/products.json](src/fakeData/products.json) - local fake dataset used for development.
- [build/index.html](build/index.html) - compiled production HTML.
- [build/asset-manifest.json](build/asset-manifest.json) - build assets map.

### Data and Assets

- The product catalog is stored as JSON for quick local fetching and can be found at:
  - [public/products.json](public/products.json)
  - [src/fakeData/products.json](src/fakeData/products.json)
  - The production build copies live output to [build/products.json](build/products.json).
- Static images and icons are in [public/](public/) and referenced by product records.

### Development notes and tips

- Routing uses React Router. The main layout component is [`Main`](src/layouts/Main.tsx) which mounts a site header and an <Outlet /> for nested routes.
- The About page is implemented as the [`About`](src/components/About/About.tsx) component and demonstrates layout/content patterns and Tailwind utility usage.
- Tailwind is configured to scan source files via [tailwind.config.js](tailwind.config.js). Customize the theme colors and breakpoints there.
- To add or modify product data for local dev, edit [src/fakeData/products.json](src/fakeData/products.json) or [public/products.json](public/products.json). After editing, restart the dev server if necessary.

### Build and Deployment

- Production: `npm run build` creates a static artifact in [build/](build/index.html). Serve it with any static web host.
- Asset manifest: See [build/asset-manifest.json](build/asset-manifest.json) for the generated filenames the app references.
- Example hosting:
  - GitHub Pages - push the contents of build/ to the gh-pages branch or use the Pages UI.
  - Netlify/Vercel - connect the repo and point the publish directory to `build/`.

### Contributing

- Bug fixes, improvements and PRs are welcome. Keep changes focused and include meaningful commit messages.
- For component or style additions, follow the existing TypeScript + Tailwind patterns.
- Run tests and linting locally before submitting PRs.

### License

- This project is licensed under the terms of the **[MIT License](./LICENSE)**.
- You may replace or update the license as needed for client or proprietary projects.

---

### Contact and Maintainer

- **Name:** Md Abu Kayser - Full-Stack Engineer
- **Project:** _ema-john-react-ts_
- **Maintainer:** [md-abu-kayser](https://github.com/md-abu-kayser)
- **GitHub:** [github.com/abu.kayser-official](https://github.com/md-abu-kayser)
- **Email:** [abu.kayser.official@gmail.com](mailto:abu.kayser.official@gmail.com)

---

If you’d like this README tailored for a specific purpose - such as **hiring managers**, **open-source contributors**, or **client deliverables** - feel free to request a custom tone or format.

---

---

## **Thank you for reviewing this project!**

---
