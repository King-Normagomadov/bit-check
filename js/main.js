/* ============================================================
   BitCheck — Main JS
   Navigation, scroll effects, reveal animations.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initFaqAccordion();
  initContactForm();
});

/* ── Navbar ── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.navbar__hamburger');
  const menu = document.querySelector('.navbar__menu');
  const overlay = document.querySelector('.navbar__overlay');
  const links = document.querySelectorAll('.navbar__link');

  if (!navbar) return;

  // Scroll state
  let lastScroll = 0;
  const scrollThreshold = 40;
  const hero = document.querySelector('.hero');

  function updateNavbar() {
    const scrollY = window.scrollY;
    navbar.classList.toggle('is-scrolled', scrollY > scrollThreshold);

    // Transparent nav over hero
    if (hero) {
      const heroBottom = hero.offsetHeight - 80;
      navbar.classList.toggle('is-hero-visible', scrollY < heroBottom);
    }

    lastScroll = scrollY;
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  // Mobile menu toggle
  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      const isOpen = menu.classList.contains('is-open');
      toggleMobileMenu(!isOpen);
    });

    if (overlay) {
      overlay.addEventListener('click', () => toggleMobileMenu(false));
    }

    // Close on link click
    links.forEach(link => {
      link.addEventListener('click', () => toggleMobileMenu(false));
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        toggleMobileMenu(false);
      }
    });
  }

  function toggleMobileMenu(open) {
    if (!hamburger || !menu) return;
    hamburger.classList.toggle('is-open', open);
    menu.classList.toggle('is-open', open);
    if (overlay) overlay.classList.toggle('is-visible', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  // Active link highlight based on current page
  const currentPath = window.location.pathname;
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Normalize paths for comparison
    const linkPath = href.replace(/^\.?\/?/, '/').replace(/index\.html$/, '');
    const pagePath = currentPath.replace(/index\.html$/, '');

    if (linkPath === pagePath ||
      (linkPath !== '/' && pagePath.startsWith(linkPath))) {
      link.classList.add('is-active');
    }
  });
}

/* ── Scroll Reveal ── */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ── FAQ Accordion ── */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all others
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('is-open');
      });

      // Toggle current
      item.classList.toggle('is-open', !isOpen);
    });
  });
}

/* ── Contact Form Handler ── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit-btn');
  const messageBox = document.getElementById('contact-form-message');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Check honeypot
    const formData = new FormData(form);
    if (formData.get('_gotcha')) {
      // Bot detected, silently pretend success
      window.location.href = 'danke.html';
      return;
    }

    // Convert FormData to JSON
    const data = Object.fromEntries(formData.entries());

    // Update button state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Wird gesendet...';
    submitBtn.disabled = true;
    messageBox.style.display = 'none';

    try {
      // NOTE: Replace this URL with your actual Vercel API deployment URL
      // since the frontend is on GitHub Pages and backend is on Vercel.
      const API_URL = 'https://bit-check-email-handler.vercel.app/api/contact';

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        window.location.href = 'danke.html';
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      console.error(err);
      messageBox.style.display = 'block';
      messageBox.style.backgroundColor = '#fee2e2';
      messageBox.style.color = '#991b1b';
      messageBox.textContent = 'Es gab ein Problem beim Senden. Bitte versuchen Sie es später erneut oder rufen Sie uns an.';

      // Reset button
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}
