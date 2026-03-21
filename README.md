# VESPER — Browser Website

Premium dark-themed website for Vesper autonomous browser.

---

## 📁 File Structure

```
vesper/
├── index.html              ← Homepage (main page)
├── css/
│   └── theme.css           ← SHARED styles (import in every page)
├── js/
│   └── shared.js           ← SHARED JS (cursor, globe, reveal, FAQ, marquee)
├── pages/
│   ├── engine.html         ← Engine / Tech page
│   ├── privacy.html        ← Privacy whitepaper page
│   ├── about.html          ← About / Team page
│   └── download.html       ← Download / Pricing page
└── assets/
    └── navbar.html         ← Navbar HTML reference (copy-paste guide)
```

---

## 🚀 Quick Start (No Install Needed)

Just open `index.html` in your browser:

```bash
# Option 1 — Double click index.html in Finder/Explorer

# Option 2 — Open from terminal
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

---

## 💻 Recommended: VS Code Live Server

Best way to develop — auto-refreshes on save:

### Step 1 — Install VS Code
Download from: https://code.visualstudio.com

### Step 2 — Open project in VS Code
```bash
# In terminal, navigate to vesper folder
cd path/to/vesper

# Open VS Code
code .
```

### Step 3 — Install Live Server extension
1. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)
2. Search: `Live Server`
3. Install by **Ritwick Dey**

### Step 4 — Start Live Server
- Right-click `index.html` in the file explorer
- Click **"Open with Live Server"**
- Browser opens at `http://127.0.0.1:5500`

> Every time you save a file, the browser auto-refreshes!

---

## 🌐 Optional: Node.js Local Server

If you have Node.js installed:

```bash
# Install http-server globally (only once)
npm install -g http-server

# Run from inside the vesper folder
cd path/to/vesper
http-server -p 3000

# Open browser at:
# http://localhost:3000
```

---

## ➕ Adding a New Page

1. **Copy** `pages/download.html` as a template
2. **Rename** it (e.g. `pages/blog.html`)
3. **Update** the `<title>` tag
4. **Update** the navbar active link:
   ```html
   <li><a href="blog.html" class="active">Blog</a></li>
   ```
5. **Write** your page content inside `<body>` after the navbar
6. **Keep** the cursor divs, navbar, and `<script src="../js/shared.js">` at the bottom

---

## 🎨 Customization Guide

### Change Colors
Edit `css/theme.css` → `:root` block at the top:

```css
:root {
  --black:  #080808;   /* background */
  --white:  #F5F5F0;   /* text / buttons */
  --grey-1: #161616;   /* card backgrounds */
  --grey-2: #2A2A2A;   /* borders */
  --grey-3: #555555;   /* muted text */
  --grey-4: #888888;   /* body text */
}
```

### Change Fonts
Edit the Google Fonts import at top of `css/theme.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT...');
```
Then update:
```css
--font-d: 'Your Display Font', sans-serif;
--font-b: 'Your Body Font', sans-serif;
```

### Add a Globe to Any Page
```html
<!-- 1. Add Three.js in <head> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<!-- 2. Add canvas in HTML -->
<canvas id="my-globe" style="width:400px;height:400px;display:block;"></canvas>

<!-- 3. Call initGlobe() after shared.js -->
<script src="../js/shared.js"></script>
<script>
initGlobe('my-globe', {
  radius:      1.4,    // sphere size
  camX:        0,      // camera X offset (negative = globe shifts right)
  camY:        0,      // camera Y offset
  camZ:        5,      // camera distance (lower = more zoomed in)
  speedY:      0.5,    // rotation speed Y axis
  speedX:      0.08,   // rotation speed X axis
  wireOpacity: 0.3,    // wireframe visibility
  color:       0x111111 // sphere color hex
});
</script>
```

### Change Marquee Words
In each page's `<script>` block at the bottom:
```js
initMarquee(['Word1', 'Word2', 'Word3', 'Word4']);
```

### Add Scroll Reveal Animation
Add class `reveal` to any element:
```html
<div class="reveal">This fades in on scroll</div>
```

### Make a Card Tilt on Mouse
Add `data-hover` attribute and call `initTilt()`:
```js
initTilt('.my-card-class');
// or with custom intensity (default 9):
initTilt('.my-card-class', 12);
```

---

## 🔤 Available CSS Classes

| Class | What it does |
|-------|-------------|
| `.reveal` | Fade-in on scroll |
| `.btn-primary` | White filled button |
| `.btn-ghost` | Text-only button |
| `.btn-outline` | Bordered button |
| `.feat-card` | 3D hover card with shimmer |
| `.privacy-pillar` | Small stat card |
| `.section-eyebrow` | Small label above heading |
| `.section-eyebrow.center` | Centered version |
| `.gb-dg` | Black → Grey gradient bridge |
| `.gb-gd` | Grey → Black gradient bridge |
| `.marquee-wrap` | Scrolling text band |
| `.faq-item` | Accordion FAQ item |
| `.page-hero` | Inner page hero section |

---

## 📞 Shared JS Functions

```js
// Rocket cursor + gravity rings + satellite — auto-inits
// (just have the cursor divs in HTML)

// Marquee — call with your words array
initMarquee(['Word1', 'Word2', 'Word3']);

// Scroll reveal — auto-inits for all .reveal elements
// (called automatically on DOMContentLoaded)

// FAQ toggle — add onclick to .faq-item
onclick="toggleFaq(this)"

// 3D card tilt — auto-inits for .feat-card and .privacy-pillar
// Call manually for custom selectors:
initTilt('.my-class', 9);

// Globe — call manually with canvas ID
initGlobe('canvas-id', { ...options });
```

---

## 📋 Page Template

Copy this for every new page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Page Name — Vesper</title>
<link rel="stylesheet" href="../css/theme.css"/>
<!-- Add Three.js only if using globe -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script> -->
<style>
/* Page-specific styles here */
</style>
</head>
<body>

<!-- CURSOR (required) -->
<div id="rocket-cursor"><svg viewBox="0 0 32 32" fill="none"><path d="M16 3 C16 3 22 8 22 16 L16 21 L10 16 C10 8 16 3 16 3Z" fill="#F5F5F0" opacity="0.95"/><circle cx="16" cy="13" r="2.5" fill="#080808" stroke="#F5F5F0" stroke-width="0.8"/><path d="M10 16 L7 21 L12 19Z" fill="#AAAAAA" opacity="0.8"/><path d="M22 16 L25 21 L20 19Z" fill="#AAAAAA" opacity="0.8"/><ellipse cx="16" cy="23" rx="2.5" ry="3.5" fill="rgba(255,255,255,0.25)" id="rocket-flame"/><ellipse cx="16" cy="24" rx="1.2" ry="2" fill="rgba(255,255,255,0.5)" id="rocket-flame2"/></svg></div>
<div id="gravity-ring"></div>
<div id="gravity-ring2"></div>

<!-- NAVBAR (required) -->
<nav>
  <a href="../index.html" class="nav-logo">
    <svg class="nav-logo-icon" viewBox="0 0 100 100" fill="none"><circle cx="63" cy="33" r="9" fill="white"/><circle cx="28" cy="38" r="11" fill="white"/><circle cx="24" cy="68" r="10" fill="white"/><circle cx="58" cy="54" r="17" fill="white"/><line x1="47" y1="47" x2="36" y2="41" stroke="black" stroke-width="3.5" stroke-linecap="round"/><line x1="59" y1="37" x2="55" y2="45" stroke="black" stroke-width="3.5" stroke-linecap="round"/><line x1="42" y1="60" x2="33" y2="66" stroke="black" stroke-width="3.5" stroke-linecap="round"/></svg>
    <span class="nav-logo-text">VESPER</span>
  </a>
  <ul class="nav-links">
    <li><a href="../index.html">Home</a></li>
    <li><a href="engine.html">Engine</a></li>
    <li><a href="privacy.html">Privacy</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="download.html">Download</a></li>
  </ul>
  <a href="download.html" class="nav-cta">Get Vesper</a>
</nav>

<!-- YOUR CONTENT HERE -->
<section style="padding:100px 56px;">
  <h1 style="font-family:var(--font-d);font-size:60px;font-weight:700;">Hello World</h1>
</section>

<!-- FOOTER -->
<footer>
  <div><div class="footer-logo"><svg width="26" height="26" viewBox="0 0 100 100" fill="none"><circle cx="63" cy="33" r="9" fill="white"/><circle cx="28" cy="38" r="11" fill="white"/><circle cx="24" cy="68" r="10" fill="white"/><circle cx="58" cy="54" r="17" fill="white"/><line x1="47" y1="47" x2="36" y2="41" stroke="black" stroke-width="3.5" stroke-linecap="round"/><line x1="59" y1="37" x2="55" y2="45" stroke="black" stroke-width="3.5" stroke-linecap="round"/><line x1="42" y1="60" x2="33" y2="66" stroke="black" stroke-width="3.5" stroke-linecap="round"/></svg><span class="footer-logo-text">VESPER</span></div><p class="footer-tagline">The autonomous browser for people who think faster than they can click.</p></div>
  <div><div class="footer-col-title">Product</div><ul class="footer-links"><li><a href="download.html">Download</a></li><li><a href="engine.html">Engine</a></li><li><a href="privacy.html">Privacy</a></li></ul></div>
  <div><div class="footer-col-title">Company</div><ul class="footer-links"><li><a href="about.html">About</a></li><li><a href="#">Blog</a></li><li><a href="#">Careers</a></li></ul></div>
  <div><div class="footer-col-title">Legal</div><ul class="footer-links"><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms</a></li></ul></div>
</footer>
<div class="footer-bottom"><span>© 2026 Vesper Inc.</span><span>Your tagline here.</span></div>

<!-- SHARED JS (always last, required) -->
<script src="../js/shared.js"></script>
<script>
// Page-specific JS here
initMarquee(['Your', 'Words', 'Here']);
</script>
</body>
</html>
```

---

Built with ❤️ — Customize freely.
