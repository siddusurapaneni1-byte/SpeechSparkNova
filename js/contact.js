/**
 * contact.js — Contact form validation and submission
 *
 * To wire up real email delivery:
 *   1. Sign up at formspree.io
 *   2. Create a form, get your form ID
 *   3. Set USE_FORMSPREE = true
 *   4. Replace XXXXXXX in FORM_ENDPOINT with your ID
 */

const USE_FORMSPREE  = true;
const FORM_ENDPOINT  = 'https://formspree.io/f/maqklewa';

document.addEventListener('DOMContentLoaded', function () {
  const form       = document.getElementById('contact-form');
  if (!form) return;

  const successMsg = document.getElementById('form-success');
  const errorMsg   = document.getElementById('form-error');
  const submitBtn  = document.getElementById('submit-btn');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    successMsg.classList.add('hidden');
    errorMsg.classList.add('hidden');
    if (!validateForm()) return;

    const formData = {
      name:    document.getElementById('contact-name').value.trim(),
      email:   document.getElementById('contact-email').value.trim(),
      subject: document.getElementById('contact-subject').value,
      message: document.getElementById('contact-message').value.trim()
    };

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    if (USE_FORMSPREE) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(formData)
        });
        res.ok ? showSuccess() : showError();
      } catch (err) {
        console.error('Form error:', err);
        showError();
      }
    } else {
      // No backend yet — simulates success. Remove when Formspree is connected.
      setTimeout(function () {
        console.log('Form data (no backend):', formData);
        showSuccess();
      }, 800);
    }
  });

  function validateForm() {
    let valid = true;
    const nameField  = document.getElementById('contact-name');
    const emailField = document.getElementById('contact-email');
    const msgField   = document.getElementById('contact-message');

    if (!nameField.value.trim()) {
      setError(nameField, 'name-error', 'Please enter your name.');
      valid = false;
    } else {
      clearError(nameField, 'name-error');
    }

    if (!emailField.value.trim()) {
      setError(emailField, 'email-error', 'Please enter your email address.');
      valid = false;
    } else if (!isValidEmail(emailField.value.trim())) {
      setError(emailField, 'email-error', 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError(emailField, 'email-error');
    }

    if (!msgField.value.trim()) {
      setError(msgField, 'message-error', 'Please enter a message.');
      valid = false;
    } else {
      clearError(msgField, 'message-error');
    }

    return valid;
  }

  function setError(field, errorId, message) {
    field.classList.add('invalid');
    const el = document.getElementById(errorId);
    if (el) el.textContent = message;
  }

  function clearError(field, errorId) {
    field.classList.remove('invalid');
    const el = document.getElementById(errorId);
    if (el) el.textContent = '';
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showSuccess() {
    form.reset();
    successMsg.classList.remove('hidden');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function showError() {
    errorMsg.classList.remove('hidden');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }
});