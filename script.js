/* ============================================================
   Sesha Gudimella — Portfolio Site
   script.js — All interactivity and behaviour
   ============================================================ */

/* ── Animated counters ── */
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.target, 10);
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / 1600, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(ease * target);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterObs.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(c => counterObs.observe(c));

/* ── Fade-up scroll animations ── */
const fadeObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      fadeObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => fadeObs.observe(el));

/* ── GoatCounter live visitor count ── */
fetch('https://gvlraghava.goatcounter.com/counter/%2F.json')
  .then(r => r.json())
  .then(d => {
    const el = document.getElementById('gc-visit-count');
    if (el && d.count) el.textContent = Number(d.count).toLocaleString();
  })
  .catch(() => {
    const el = document.getElementById('gc-visit-count');
    if (el) el.parentElement.style.display = 'none';
  });

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });
