<<<<<<< HEAD
# HVP Ventures — agar agar supplier site (Vue 3 + Vite)

Vue port of the "Create Red Ventures Website" Figma Make design.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Structure

- `src/App.vue` — hash router (`#home`, `#products`, `#about`, `#faq`, `#contact`,
  `#food-grade-agar-agar`, `#bacteriological-agar`, `#technical-grade-agar-agar`)
- `src/pages/` — one component per page (the three grade pages share `GradePage.vue`)
- `src/components/` — header, footer, hero, brochure gateway, floating brochure button, quotation band, etc.
- `src/data/content.js` — all copy, products, specs, FAQs and contact details
- `src/styles/main.css` — the design's stylesheet (Google Fonts, base reset, all site styles)
- `public/hvp-ventures-agar-agar-e-brochure-2026.pdf` — downloadable brochure

## Placeholders carried over from the design

- About page: `[City] is our registered base.`, Halal/Kosher certificate fields `[number, issuing body, expiry]`
- FAQ: `[Insert certificate numbers and issuing bodies before publishing.]`
- Contact form only shows a "Preview only" status; it needs a form endpoint wired up.
- Email is spelled `red.venutres26@gmail.com` in the design; confirm whether that's intended.
=======
# hvpventures
hvpventures
>>>>>>> dee4d4e7387af14a9391babf8aac0f33fbc364ee
