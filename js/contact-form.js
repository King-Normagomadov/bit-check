/* ============================================================
   ITWURZEL — Contact Form Validation & UX
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const successPanel = document.getElementById('form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous errors
    form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(el => {
      el.classList.remove('is-error');
    });

    let isValid = true;

    // Required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        field.classList.add('is-error');
        isValid = false;
      }
    });

    // Email validation
    const emailField = form.querySelector('[type="email"]');
    if (emailField && emailField.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailField.value.trim())) {
        emailField.classList.add('is-error');
        isValid = false;
      }
    }

    if (!isValid) {
      // Focus first error field
      const firstError = form.querySelector('.is-error');
      if (firstError) firstError.focus();
      return;
    }

    // Simulate submission (no backend)
    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = '...';
    }

    // Fake delay for UX
    setTimeout(() => {
      form.style.display = 'none';
      if (successPanel) {
        successPanel.classList.add('is-visible');
      }
    }, 800);
  });

  // Live validation: remove error on input
  form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.remove('is-error');
    });
    field.addEventListener('change', () => {
      field.classList.remove('is-error');
    });
  });
});
