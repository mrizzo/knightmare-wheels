'use strict';

// ── Nav: scroll shadow + mobile burger ──
const nav    = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
  });
});

// ── Contact form: basic feedback ──
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    // If Formspree ID is still placeholder, prevent submit and alert
    const action = form.getAttribute('action');
    if (action.includes('YOUR_FORM_ID')) {
      e.preventDefault();
      alert('Form not yet connected. Replace YOUR_FORM_ID in index.html with your Formspree endpoint.');
      return;
    }

    // Let Formspree handle the actual submission
    // Optionally swap to fetch-based submission for a nicer UX:
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const res = await fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        form.innerHTML = `
          <div style="text-align:center;padding:3rem 0;">
            <div style="font-size:3rem;margin-bottom:1rem;">⚡</div>
            <h3 style="font-size:1.5rem;margin-bottom:0.5rem;">Got it — thanks!</h3>
            <p style="color:var(--text-muted)">We'll get back to you within 24 hours.</p>
          </div>`;
      } else {
        throw new Error('Network response not ok');
      }
    } catch {
      btn.textContent = 'Send Request';
      btn.disabled = false;
      alert('Something went wrong. Try emailing us directly or reaching out on Instagram.');
    }
  });
}
