/* ============================================================
   BitCheck — Main JS
   Navigation, scroll effects, reveal animations.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initFaqAccordion();
  initContactForm();
  initCookieConsent();
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
        const errData = await response.json();
        console.error('Backend Error Details:', errData);
        throw new Error(errData.error || 'Server error');
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

/* ── Cookie Consent Banner ── */
function initCookieConsent() {
  const GA_ID = 'G-ZXWVKF9WDD';
  const consentState = localStorage.getItem('bitcheck_cookie_consent');

  if (consentState === 'accepted') {
    loadGA();
  } else if (!consentState) {
    showBanner();
  }

  function loadGA() {
    if (document.getElementById('ga-script')) return;
    
    // GTAG JS
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    // GTAG Init
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag; // Make it globally available
    gtag('js', new Date());
    gtag('config', GA_ID, { 'anonymize_ip': true });
  }

  function showBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    // Using inline styles matching the design system
    banner.innerHTML = `
      <div style="position:fixed; bottom:0; left:0; right:0; background:var(--color-paper-white); padding:var(--spacing-16); box-shadow:0 -4px 24px rgba(0,0,0,0.08); z-index:9999; border-top:1px solid var(--color-cloud-gray);">
        <div style="max-width:var(--page-max-width); margin:0 auto; display:flex; flex-direction:column; gap:var(--spacing-16); align-items:center; text-align:center;">
          <div>
            <p style="margin:0; font-size:14px; color:var(--color-true-black); line-height:1.5;">Wir nutzen Cookies, um unsere Website für Sie optimal zu gestalten und fortlaufend zu verbessern. Neben essenziellen Cookies verwenden wir auch Google Analytics zur statistischen Auswertung. <a href="datenschutz.html" style="color:var(--color-mint-green); text-decoration:underline;">Weitere Informationen</a></p>
          </div>
          <div style="display:flex; gap:var(--spacing-12); flex-wrap:wrap; justify-content:center;">
            <button id="cookie-accept" class="btn btn--primary btn--sm" style="cursor:pointer;">Alle akzeptieren</button>
            <button id="cookie-decline" class="btn btn--secondary btn--sm" style="cursor:pointer; background:transparent; border:1px solid var(--color-ink-black); color:var(--color-ink-black);">Nur essenzielle</button>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(banner);

    // Some simple media queries via JS to make it flex-row on desktop
    const innerContainer = banner.querySelector('div > div');
    const updateLayout = () => {
      if (window.innerWidth > 768) {
        innerContainer.style.flexDirection = 'row';
        innerContainer.style.textAlign = 'left';
        innerContainer.style.justifyContent = 'space-between';
      } else {
        innerContainer.style.flexDirection = 'column';
        innerContainer.style.textAlign = 'center';
        innerContainer.style.justifyContent = 'center';
      }
    };
    updateLayout();
    window.addEventListener('resize', updateLayout);

    document.getElementById('cookie-accept').addEventListener('click', () => {
      localStorage.setItem('bitcheck_cookie_consent', 'accepted');
      loadGA();
      banner.remove();
      window.removeEventListener('resize', updateLayout);
    });

    document.getElementById('cookie-decline').addEventListener('click', () => {
      localStorage.setItem('bitcheck_cookie_consent', 'declined');
      banner.remove();
      window.removeEventListener('resize', updateLayout);
    });
  }
}
