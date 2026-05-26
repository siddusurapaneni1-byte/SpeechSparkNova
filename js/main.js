/**
 * main.js — Site-wide utilities (runs on every page)
 */

document.addEventListener('DOMContentLoaded', function () {
  const currentYear = new Date().getFullYear();

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = currentYear;

  document.querySelectorAll('.year-span').forEach(function (el) {
    el.textContent = currentYear;
  });
});