/* ================================================
   VESPER — SHARED JS
   Har page ke bottom mein include karo:
   <script src="../js/shared.js"></script>
   ================================================ */

/* ── ROCKET CURSOR ───────────────────────────── */
(function initCursor() {
  const rocketEl = document.getElementById('rocket-cursor');
  const gRing    = document.getElementById('gravity-ring');
  const gRing2   = document.getElementById('gravity-ring2');
  if (!rocketEl) return;

  let mx=0, my=0, rx=0, ry=0, prevMx=0, prevMy=0;
  let isHovering = false;
  let satEl = null;
  let satAngle = 0;
  let lastAngle = 90;

  document.addEventListener('mousemove', e => {
    prevMx = mx; prevMy = my;
    mx = e.clientX; my = e.clientY;
  });

  (function loop() {
    requestAnimationFrame(loop);
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;

    const dx = mx - prevMx;
    const dy = my - prevMy;
    const speed = Math.sqrt(dx*dx + dy*dy);
    if (speed > 0.5) {
      lastAngle = Math.atan2(dy, dx) * 180 / Math.PI + 90;
    }

    rocketEl.style.left = (rx - 16) + 'px';
    rocketEl.style.top  = (ry - 16) + 'px';
    rocketEl.style.transform = `rotate(${lastAngle}deg) scale(${isHovering ? 1.4 : 1})`;

    gRing.style.left  = rx + 'px'; gRing.style.top  = ry + 'px';
    gRing2.style.left = rx + 'px'; gRing2.style.top = ry + 'px';

    // Flame flicker
    const fl  = document.getElementById('rocket-flame');
    const fl2 = document.getElementById('rocket-flame2');
    if (fl) {
      const f = 0.8 + Math.random() * 0.5;
      fl.setAttribute('ry',  (3.5 * f).toFixed(1));
      fl.setAttribute('cy',  (22 + Math.random() * 2).toFixed(1));
      fl2.setAttribute('ry', (2 * f * 0.6).toFixed(1));
    }

    // Satellite orbit on hover
    if (isHovering && satEl) {
      satAngle += 3;
      const rad = satAngle * Math.PI / 180;
      satEl.style.display = 'block';
      satEl.style.left = (rx + Math.cos(rad) * 46 - 2.5) + 'px';
      satEl.style.top  = (ry + Math.sin(rad) * 46 - 2.5) + 'px';
    }
  })();

  function addHover(selector) {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('mouseenter', () => {
        isHovering = true;
        gRing.classList.add('hovering');
        gRing2.classList.add('hovering');
        if (!satEl) {
          satEl = document.createElement('div');
          satEl.className = 'sat-particle';
          document.body.appendChild(satEl);
        }
      });
      el.addEventListener('mouseleave', () => {
        isHovering = false;
        gRing.classList.remove('hovering');
        gRing2.classList.remove('hovering');
        if (satEl) satEl.style.display = 'none';
      });
    });
  }

  // Default hover targets — add more with data-hover attribute
  addHover('a, button, .feat-card, .privacy-pillar, .faq-item, [data-hover]');
})();

/* ── MARQUEE ─────────────────────────────────── */
function initMarquee(words, trackId) {
  const track = document.getElementById(trackId || 'marquee-track');
  if (!track) return;
  const all = [...words, ...words];
  track.innerHTML = all.map(w =>
    `<span class="marquee-item">${w}<span class="marquee-dot"></span></span>`
  ).join('');
}

/* ── SCROLL REVEAL ───────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 65);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── FAQ TOGGLE ──────────────────────────────── */
function toggleFaq(el) { el.classList.toggle('open'); }

/* ── 3D CARD TILT ────────────────────────────── */
function initTilt(selector, intensity) {
  intensity = intensity || 9;
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = `translateY(-6px) rotateX(${-y*intensity}deg) rotateY(${x*intensity}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ── THREE.JS GLOBE ──────────────────────────── */
/*
  Usage example:
  const g = initGlobe('my-canvas-id', { radius: 1.4, speedY: 0.55 });

  Options:
    radius      — sphere radius (default 1.4)
    camX/Y/Z    — camera position
    speedY/X    — rotation speed (radians per second)
    fov         — field of view
    color       — sphere hex color
    wireColor   — wireframe hex color
    wireOpacity — wireframe opacity
    onFrame(delta, camera, sphere) — optional per-frame callback
*/
function initGlobe(canvasId, options) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || typeof THREE === 'undefined') {
    console.warn('initGlobe: canvas or THREE not found');
    return null;
  }

  const o = Object.assign({
    radius:      1.4,
    camX:       -1.9,
    camY:        0,
    camZ:        5.5,
    speedY:      0.55,
    speedX:      0.10,
    fov:         45,
    color:       0x111111,
    wireColor:   0x404040,
    wireOpacity: 0.28,
    onFrame:     null
  }, options);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(o.fov, 1, 0.1, 100);
  camera.position.set(o.camX, o.camY, o.camZ);

  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(o.radius, 64, 64),
    new THREE.MeshStandardMaterial({ color: o.color, metalness: 0.95, roughness: 0.08 })
  );
  scene.add(sphere);

  const wire = new THREE.Mesh(
    new THREE.SphereGeometry(o.radius * 1.015, 24, 24),
    new THREE.MeshBasicMaterial({ color: o.wireColor, wireframe: true, transparent: true, opacity: o.wireOpacity })
  );
  scene.add(wire);

  scene.add(new THREE.AmbientLight(0xffffff, 0.25));
  const d1 = new THREE.DirectionalLight(0xffffff, 1.4); d1.position.set(3, 4, 5);  scene.add(d1);
  const d2 = new THREE.DirectionalLight(0x888888, 0.3); d2.position.set(-4,-2,-3); scene.add(d2);
  const pt = new THREE.PointLight(0xffffff, 0.6, 12);   pt.position.set(1, 3, 4);  scene.add(pt);

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  // performance.now() — never stops, even in background
  let last = performance.now();
  function animate() {
    requestAnimationFrame(animate);
    const now   = performance.now();
    const delta = Math.min((now - last) / 1000, 0.05);
    last = now;

    sphere.rotation.y += delta * o.speedY;
    sphere.rotation.x += delta * o.speedX;
    wire.rotation.y    = sphere.rotation.y;
    wire.rotation.x    = sphere.rotation.x;

    if (o.onFrame) o.onFrame(delta, camera, sphere);

    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }
  animate();

  return { sphere, wire, camera, renderer, scene };
}

/* ── FOOTER SVG LOGO ─────────────────────────── */
const LOGO_SVG = `<svg width="26" height="26" viewBox="0 0 100 100" fill="none">
  <circle cx="63" cy="33" r="9" fill="white"/>
  <circle cx="28" cy="38" r="11" fill="white"/>
  <circle cx="24" cy="68" r="10" fill="white"/>
  <circle cx="58" cy="54" r="17" fill="white"/>
  <line x1="47" y1="47" x2="36" y2="41" stroke="black" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="59" y1="37" x2="55" y2="45" stroke="black" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="42" y1="60" x2="33" y2="66" stroke="black" stroke-width="3.5" stroke-linecap="round"/>
</svg>`;

/* ── AUTO INIT ON DOM READY ──────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initTilt('.feat-card');
  initTilt('.privacy-pillar', 11);
});
