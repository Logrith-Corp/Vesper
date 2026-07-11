# VESPER — Digital Products Store

A static, premium, black/white/grey digital-goods storefront. No build step —
open `index.html` directly in a browser, or upload the whole folder to any
static host (Vercel, Netlify, GitHub Pages, or your `getvesper.in` path).

## Shared Navbar & Footer (edit once, updates everywhere)

The navbar and footer are **not** copy-pasted into every page. They live in
one file: `js/layout.js`. Every page has two empty placeholder divs
(`<div id="site-navbar"></div>` and `<div id="site-footer"></div>`) that get
filled in automatically by `layout.js` when the page loads.

**To change a nav link, the logo, or footer content sitewide — edit
`js/layout.js` only.** All 24 pages update automatically. You never need to
touch navbar/footer HTML in individual page files again.

## What to edit first

### 1. Logo
Drop your logo file at `assets/logo/logo.png` (this is what the navbar and
footer display). No text logo is used anywhere — just this image.

### 2. Favicon set
Drop your icon files into `assets/favicon/` using these exact filenames
(already wired up in every page's `<head>`):
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `apple-touch-icon.png`
- `site.webmanifest` (already included — edit only if you rename icon files)

### 3. Checkout links (most important)
Open `js/data.js`. Every product has a `checkoutLink` field:

```js
checkoutLink: "https://gumroad.com/l/your-product-link",
```

Replace each placeholder with your real Gumroad, Payhip, or other seller
checkout URL.

### 4. Product content
Still in `js/data.js` — edit title, price, descriptions, included items,
FAQ, and category for each product in the `PRODUCTS` array. Add a new
product by copying an existing object and giving it a unique `slug`, then
regenerate its page (see below).

### 5. Domain / canonical tags
Every page has a `<link rel="canonical">` tag pointed at
`https://getvesper.in/...` (root domain, no subpath). If your domain
changes again, find-and-replace `getvesper.in` across all HTML files.

## Structure

```
vesper/
├── index.html          Home
├── products.html        All products (search + filter + sort)
├── categories.html       All categories
├── about.html
├── faq.html
├── contact.html
├── privacy.html
├── terms.html
├── product/[slug].html   One page per product
├── category/[slug].html  One page per category
├── css/style.css         Design system
├── js/data.js             EDIT THIS — products, categories, checkout links
├── js/layout.js           EDIT THIS — navbar + footer (single source of truth)
├── js/app.js              Shared behavior (FAQ accordion, checkout redirect, cards)
└── assets/                 logo, favicon, product images, og images
```

## Notes
- Pure HTML/CSS/JS — no framework, no build tools, no dependencies besides
  Google Fonts (loaded via CDN in `style.css`).
- Fully responsive down to small phones. Mobile hamburger menu opens/closes
  correctly on every page (wired centrally in `layout.js`).
- Buy buttons open checkout in a **new tab** so the user doesn't lose their
  place in your store.
- If you add a brand-new product to `js/data.js`, you'll need a new
  `product/[slug].html` file — copy an existing product page and change the
  `getProductBySlug("...")` slug near the bottom of the file. The navbar/
  footer will work automatically since they're shared.

