# MarPro Services

Premium commercial cleaning, pressure washing, janitorial, and property maintenance website for MarPro Services. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Logo Files

The navbar, hero, and footer expect two files in `/public` that are not included yet:

- `public/logo-mark.png` — compact mark, used in the navbar
- `public/logo-full.png` — full logo, used in the hero and footer

Until those files are added, the site automatically falls back to a clean "MarPro Services" text treatment, so the site works correctly with or without them.

## Deployment

This project deploys to Vercel with zero configuration. Push to a Git repository and import it in Vercel, or run:

```bash
npx vercel
```

## Project Structure

- `app/` — pages, layout, and the `/api/contact` route used by the proposal request form
- `components/` — one component per section (Navbar, Hero, Services, etc.)
- `public/` — static assets, including the logo files described above
