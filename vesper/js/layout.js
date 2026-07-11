/* ==========================================================================
   VESPER — Shared Layout (Navbar + Footer)
   Edit THIS file to change the navbar or footer across the entire site.
   Every page injects this automatically — no need to touch individual pages.
   ========================================================================== */

function getBasePath() {
  // Pages inside /product/ or /category/ need "../" to reach root assets.
  const path = window.location.pathname;
  return (path.includes("/product/") || path.includes("/category/")) ? "../" : "";
}

function renderNavbar(activePage, navCta) {
  const base = getBasePath();
  const cta = navCta || { href: `${base}products.html`, label: "Explore" };
  const links = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "products.html", label: "Products", key: "products" },
    { href: "categories.html", label: "Categories", key: "categories" },
    { href: "about.html", label: "About", key: "about" },
    { href: "faq.html", label: "FAQ", key: "faq" },
    { href: "contact.html", label: "Contact", key: "contact" },
  ];

  const navLinksHTML = links.map(l =>
    `<a href="${base}${l.href}"${l.key === activePage ? ' class="active"' : ''}>${l.label}</a>`
  ).join("\n      ");

  const mobileLinksHTML = links.map(l =>
    `<a href="${base}${l.href}">${l.label}</a>`
  ).join("\n    ");

  return `
<div class="navbar-wrap">
  <nav class="navbar">
    <a href="${base}index.html" class="nav-logo-link" aria-label="VESPER home">
      <img src="${base}assets/logo/logo.png" alt="VESPER" class="nav-logo-img" />
      <span class="nav-logo-text">vesper</span>
    </a>
    <div class="nav-links">
      ${navLinksHTML}
    </div>
    <div class="nav-actions">
      <button class="nav-search-btn" aria-label="Search" onclick="location.href='${base}products.html'">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </button>
      <a href="${cta.href}" class="nav-cta">${cta.label}</a>
      <button class="nav-burger" aria-label="Open menu" id="nav-burger-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  </nav>
  <div class="nav-mobile-panel" id="nav-mobile-panel">
    ${mobileLinksHTML}
  </div>
</div>`;
}

function renderFooter() {
  const base = getBasePath();
  return `
<footer>
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="${base}index.html" class="nav-logo-link" aria-label="VESPER home">
          <img src="${base}assets/logo/logo.png" alt="VESPER" class="footer-logo-img" />
          <span class="nav-logo-text">vesper</span>
        </a>
        <p>Premium digital products for builders, founders, and creators.</p>
      </div>
      <div class="footer-cols">
        <div class="footer-col">
          <h5>Store</h5>
          <a href="${base}products.html">Products</a>
          <a href="${base}categories.html">Categories</a>
          <a href="${base}about.html">About</a>
        </div>
        <div class="footer-col">
          <h5>Support</h5>
          <a href="${base}faq.html">FAQ</a>
          <a href="${base}contact.html">Contact</a>
        </div>
        <div class="footer-col">
          <h5>Legal</h5>
          <a href="${base}privacy.html">Privacy Policy</a>
          <a href="${base}terms.html">Terms of Service</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 VESPER. All rights reserved.</span>
      <span>getvesper.in</span>
    </div>
  </div>
</footer>`;
}

function injectLayout(activePage, navCta) {
  const navSlot = document.getElementById("site-navbar");
  const footerSlot = document.getElementById("site-footer");
  if (navSlot) navSlot.innerHTML = renderNavbar(activePage, navCta);
  if (footerSlot) footerSlot.innerHTML = renderFooter();

  // Wire up mobile menu toggle AFTER injection (elements now exist in DOM)
  const burger = document.getElementById("nav-burger-btn");
  const panel = document.getElementById("nav-mobile-panel");
  if (burger && panel) {
    burger.addEventListener("click", () => {
      panel.classList.toggle("open");
    });
    // Close menu when a link inside it is tapped
    panel.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => panel.classList.remove("open"));
    });
  }
}
