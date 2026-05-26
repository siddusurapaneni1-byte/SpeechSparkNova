/**
 * camps.js
 * ============================================================
 * Reads CAMPS_DATA and renders camp cards into the page.
 *
 * Targets:
 *   #camps-preview-list  → home page (first PREVIEW_COUNT camps)
 *   #camps-full-list     → camps page (all camps)
 * ============================================================
 */

const PREVIEW_COUNT = 2;

function buildCampCard(camp) {
  const statusLabels = {
    open:     { label: 'Registration Open', css: 'open' },
    full:     { label: 'Camp Full',          css: 'full' },
    upcoming: { label: 'Coming Soon',        css: '' },
    closed:   { label: 'Closed',             css: '' }
  };
  const status = statusLabels[camp.status] || { label: camp.status, css: '' };

  const registerBtn = (camp.status === 'open' && camp.registerUrl && camp.registerUrl !== '#')
    ? `<a href="${camp.registerUrl}" class="btn btn-primary" target="_blank" rel="noopener">Register Now</a>`
    : '';

  return `
    <article class="camp-card" id="${camp.id}">
      <div class="camp-date-block" aria-label="${camp.date}">
        <span class="camp-month">${camp.month}</span>
        <span class="camp-day">${camp.day}</span>
      </div>
      <div class="camp-details">
        <h3>${camp.title}</h3>
        <p class="camp-meta">📅 ${camp.date} &nbsp;·&nbsp; 📍 ${camp.location} &nbsp;·&nbsp; 👤 ${camp.ages}</p>
        <p class="camp-desc">${camp.description}</p>
        <span class="camp-tag ${status.css}">${status.label}</span>
        ${registerBtn}
      </div>
    </article>
  `;
}

function renderCamps(container, camps) {
  if (!container) return;
  if (!camps || camps.length === 0) {
    container.innerHTML = `<p class="no-camps">No camps scheduled yet — check back soon!</p>`;
    return;
  }
  container.innerHTML = camps.map(buildCampCard).join('');
}

document.addEventListener('DOMContentLoaded', function () {
  if (typeof CAMPS_DATA === 'undefined') {
    console.warn('camps.js: CAMPS_DATA not found. Make sure camps-data.js is loaded first.');
    return;
  }

  const previewList = document.getElementById('camps-preview-list');
  if (previewList) renderCamps(previewList, CAMPS_DATA.slice(0, PREVIEW_COUNT));

  const fullList = document.getElementById('camps-full-list');
  if (fullList) renderCamps(fullList, CAMPS_DATA);
});