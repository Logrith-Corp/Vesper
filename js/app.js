/* ==========================================================================
   VESPER — Shared behavior
   ========================================================================== */

/* Mobile nav toggle is now handled centrally in js/layout.js (injectLayout).
   Do not add another burger/panel listener here — it will double-toggle. */

/* ---------- FAQ accordion ---------- */
function initFaqAccordion(root = document) {
  root.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    if (!q) return;
    q.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      root.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
}

/* ---------- Checkout redirect ---------- */
/* Every Buy button on the site calls this. It shows a brief toast
   ("Redirecting to secure checkout...") then opens the seller's
   external checkout link (Gumroad / Payhip / other) in a new tab. */
function goToCheckout(url) {
  showToast("Redirecting to secure checkout…");
  setTimeout(() => {
    window.open(url, "_blank", "noopener");
  }, 450);
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* ---------- Product card renderer ---------- */
function productCardHTML(p, basePath = "") {
  return `
  <a class="card" href="${basePath}product/${p.slug}.html">
    <div class="card-cover">
      <span class="card-cat">${getCategoryBySlug(p.category)?.name || p.category}</span>
      <span class="mono-mark">VESPER / ${p.slug.slice(0, 8).toUpperCase()}</span>
    </div>
    <div class="card-body">
      <h3>${p.title}</h3>
      <p>${p.shortDescription}</p>
      <div class="card-footer">
        <span class="price-tag">$${p.price.toFixed(2)}</span>
        <span class="card-btn">See detail</span>
      </div>
    </div>
  </a>`;
}

function relatedStripItemHTML(p, basePath = "") {
  return `
  <a class="related-strip-item" href="${basePath}product/${p.slug}.html">
    <div class="related-strip-cover"><span class="mono-mark">VESPER</span></div>
    <div class="related-strip-text">
      <h4>${p.title}</h4>
      <p>${p.shortDescription}</p>
    </div>
    <span class="price-tag">$${p.price.toFixed(2)}</span>
  </a>`;
}

/* ---------- Render grids on load (index & listing pages use these hooks) ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initFaqAccordion();
});
