# Anna — Personal Portfolio

An editorial-style personal website for **Yiqian (Anna) Huang** — a multidisciplinary
portfolio spanning UX/UI design, data analysis, and software development.

Built with **Vite + React + TypeScript**, with tasteful, performant interactions
(3D tilt project cards, a custom cursor, a typewriter hero, scroll-reveal, a reading
progress bar, and active-section nav highlighting). All animations respect the
`prefers-reduced-motion` setting.

## Tech stack

- [Vite](https://vitejs.dev/) — dev server & build
- [React 19](https://react.dev/) + TypeScript
- Plain CSS (design tokens + custom properties), Fraunces + Inter via Google Fonts

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build locally
```

## Project structure

```
index.html              # Vite entry (loads /src/main.tsx)
src/
├─ main.tsx             # React root
├─ App.tsx              # Layout + scroll progress, scrollspy, header state
├─ styles.css           # All styling (editorial theme + interactions)
├─ data.ts              # Content: skills, experience, and projects (+ images)
├─ assets/images/       # Project screenshots
├─ hooks/useReveal.ts   # IntersectionObserver scroll-reveal hook
└─ components/
   ├─ Header.tsx        # Sticky nav (mobile menu, active link)
   ├─ Hero.tsx          # Headline + Typewriter
   ├─ About.tsx         # Bio + skills
   ├─ Experience.tsx    # Work history
   ├─ Work.tsx          # Filterable project grid
   ├─ ProjectCard.tsx   # Project card with 3D tilt
   ├─ Contact.tsx
   ├─ Footer.tsx
   ├─ Typewriter.tsx    # Cycling typed text
   ├─ Cursor.tsx        # Custom cursor follower
   └─ Reveal.tsx        # Scroll-reveal wrapper
```

## Editing content

All copy lives in `src/data.ts`:

- **`skills`** — the three skill columns in About.
- **`experiences`** — work history (role, org, date, bullet points).
- **`projects`** — each project's tag, title, description, role, image, and links.
  `category` (`"uiux" | "data" | "dev"`) drives the filter buttons.

To swap a project screenshot, drop a new image in `src/assets/images/` and update
the `import` at the top of `src/data.ts`.

## Deploy

The build is a static site in `dist/` — deploy anywhere:

- **Vercel** — `vercel` (framework preset: Vite), or import the repo.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — `npm run build`, then publish `dist/` (base path is already
  set to `./` in `vite.config.ts`, so it works under a project subpath).
```
