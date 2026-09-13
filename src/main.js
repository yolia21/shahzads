import { MENU_CATEGORIES, MENU_ITEMS, SAUCES_LIST, REVIEWS_DATA, LOCATIONS_DATA } from './menuData.js';

// --- APPLICATION STATE ---
const state = {
  currentCategory: 'platters',
  searchQuery: ''
};

// --- DOM ELEMENTS ---
const elements = {
  categoriesContainer: document.getElementById('categories-container'),
  menuGridContainer: document.getElementById('menu-grid-container'),
  categoryTitle: document.getElementById('current-category-title'),
  categorySubtitle: document.getElementById('current-category-subtitle'),
  searchInput: document.getElementById('menu-search-input'),
  saucesGridContainer: document.getElementById('sauces-grid-container'),
  reviewsContainer: document.getElementById('reviews-container'),
  locationsContainer: document.getElementById('locations-container'),
  orderModal: document.getElementById('order-modal'),
  liveStatusText: document.getElementById('live-status-text')
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderMenu();
  renderSaucesSection();
  renderReviews();
  renderLocations();
  setupEventListeners();
  checkStoreStatus();
});

// --- LIVE STORE HOURS CALCULATOR ---
function checkStoreStatus() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeInMinutes = hours * 60 + minutes;
  
  // Open between 10:00 AM (600 mins) and 2:25 AM (145 mins next day)
  const openTime = 10 * 60; // 600
  const closeTime = 2 * 60 + 25; // 145 (next morning)
  
  const isOpen = (timeInMinutes >= openTime) || (timeInMinutes < closeTime);
  
  if (elements.liveStatusText) {
    if (isOpen) {
      elements.liveStatusText.textContent = 'OPEN NOW';
      elements.liveStatusText.style.color = '#4ade80';
    } else {
      elements.liveStatusText.textContent = 'CLOSED (Opens 10 AM)';
      elements.liveStatusText.style.color = '#f87171';
    }
  }
}

// --- RENDER CATEGORY TABS ---
function renderCategories() {
  elements.categoriesContainer.innerHTML = MENU_CATEGORIES.map(cat => `
    <button class="category-tab ${cat.id === state.currentCategory ? 'active' : ''}" data-id="${cat.id}">
      <i class="fa-solid ${cat.icon}"></i>
      <span>${cat.name}</span>
    </button>
  `).join('');
}

// --- RENDER DIGITAL MENU BOARD CARDS ---
function renderMenu() {
  let filtered = MENU_ITEMS;

  // Filter by category
  if (state.currentCategory !== 'all') {
    filtered = filtered.filter(item => item.category === state.currentCategory);
  }

  // Filter by search query
  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase();
    filtered = MENU_ITEMS.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.description.toLowerCase().includes(q) ||
      (item.tags && item.tags.some(t => t.toLowerCase().includes(q)))
    );
  }

  // Update Section Headers
  const catObj = MENU_CATEGORIES.find(c => c.id === state.currentCategory) || { name: 'Full Menu', icon: 'fa-utensils' };
  elements.categoryTitle.innerHTML = `<i class="fa-solid ${catObj.icon} text-red"></i> ${catObj.name}`;

  if (filtered.length === 0) {
    elements.menuGridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--color-text-muted);">
        <i class="fa-solid fa-utensils" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
        <h3 style="font-family: var(--font-street); font-size: 1.8rem;">No items found matching "${state.searchQuery}"</h3>
        <p>Try searching for burgers, gyros, chicken over rice, or wings!</p>
      </div>
    `;
    return;
  }

  elements.menuGridContainer.innerHTML = filtered.map(item => createDigitalBoardCardHTML(item)).join('');
}

// --- DIGITAL BOARD CARD HTML (TEXT-DRIVEN BOARD) ---
function createDigitalBoardCardHTML(item) {
  return `
    <div class="menu-board-card">
      <div>
        <div class="board-card-header">
          <h3 class="board-card-title">${item.name}</h3>
          <span class="board-card-price">$${item.price.toFixed(2)}</span>
        </div>

        ${item.tags ? `
          <div class="board-card-tags">
            ${item.tags.map(t => `<span class="board-tag">${t}</span>`).join('')}
          </div>
        ` : ''}

        <p class="board-card-desc">${item.description}</p>
      </div>

      <div class="board-card-footer">
        ${item.hasCombo ? `
          <div class="combo-price-badge">
            <span><i class="fa-solid fa-burger text-gold"></i> Combo (Fries & Soda):</span>
            <strong style="font-family: var(--font-street); font-size: 1.2rem;">$${item.comboPrice.toFixed(2)}</strong>
          </div>
        ` : ''}

        ${item.sizesText ? `
          <div class="combo-price-badge" style="color: var(--color-text-main); font-size: 0.8rem;">
            <span><i class="fa-solid fa-tags text-red"></i> ${item.sizesText}</span>
          </div>
        ` : ''}

        <button class="btn-order-item" onclick="openOrderModal()">
          <i class="fa-solid fa-motorcycle"></i> ORDER ONLINE
        </button>
      </div>
    </div>
  `;
}

// --- ORDER MODAL GLOBALS ---
window.openOrderModal = () => {
  if (elements.orderModal) elements.orderModal.classList.add('open');
};

window.closeOrderModal = () => {
  if (elements.orderModal) elements.orderModal.classList.remove('open');
};

// --- RENDER SAUCES SHOWCASE ---
function renderSaucesSection() {
  elements.saucesGridContainer.innerHTML = SAUCES_LIST.map(s => {
    let iconClass = 'white';
    if (s.id === 'hot') iconClass = 'hot';
    if (s.id === 'green') iconClass = 'green';
    if (s.id === 'bbq') iconClass = 'bbq';

    return `
      <div class="sauce-card">
        <div class="sauce-icon-wrap ${iconClass}">
          <i class="fa-solid fa-bottle-droplet"></i>
        </div>
        <div>
          <h4 style="font-family: var(--font-street); font-size: 1.3rem; letter-spacing: 0.04em; color: #fff;">${s.name}</h4>
          <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 0.2rem;">${s.desc}</p>
          <span style="font-size: 0.75rem; color: var(--color-gold); font-weight: 700; display: inline-block; margin-top: 0.4rem;">
            Included with platters & gyros • $0.75 extra cup
          </span>
        </div>
      </div>
    `;
  }).join('');
}

// --- RENDER REVIEWS ---
function renderReviews() {
  elements.reviewsContainer.innerHTML = REVIEWS_DATA.map(r => `
    <div class="review-card">
      <div class="review-author-header">
        <div class="avatar-circle">${r.author.charAt(0).toUpperCase()}</div>
        <div>
          <strong style="color: #fff; font-size: 1rem; display: block;">${r.author}</strong>
          <span style="color: var(--color-text-muted); font-size: 0.75rem;">${r.stats} • ${r.time}</span>
        </div>
      </div>
      
      <div class="stars-row">
        ${'<i class="fa-solid fa-star"></i>'.repeat(r.rating)}
      </div>

      <p class="review-text">"${r.text}"</p>

      ${r.ownerResponse ? `
        <div class="owner-response-box">
          <strong>Owner Response:</strong> ${r.ownerResponse}
        </div>
      ` : ''}
    </div>
  `).join('');
}

// --- RENDER LOCATIONS ---
function renderLocations() {
  elements.locationsContainer.innerHTML = LOCATIONS_DATA.map(loc => `
    <div class="location-card ${loc.isPrimary ? 'primary' : ''}">
      <img src="${loc.image}" class="location-img" alt="${loc.name}">
      <div class="location-body">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <h3>${loc.name}</h3>
          ${loc.isPrimary ? '<span class="badge-halal" style="font-size: 0.75rem;">Flagship HQ</span>' : ''}
        </div>
        
        <div class="info-line">
          <i class="fa-solid fa-location-dot"></i>
          <span>${loc.address}</span>
        </div>

        <div class="info-line">
          <i class="fa-solid fa-phone"></i>
          <a href="tel:${loc.phoneRaw}" style="color: var(--color-gold); font-weight: 700;">${loc.phone}</a>
        </div>

        <div class="info-line" style="flex-direction: column; align-items: flex-start; gap: 0.3rem;">
          <div style="display: flex; align-items: center; gap: 0.8rem; font-weight: 700; color: #fff;">
            <i class="fa-solid fa-clock text-gold"></i>
            <span>Operating Hours:</span>
          </div>
          <div style="width: 100%; background: rgba(255,255,255,0.04); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.6rem 0.8rem; font-size: 0.85rem; display: flex; flex-direction: column; gap: 0.3rem; margin-top: 0.2rem;">
            ${loc.hoursList.map(h => `
              <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed rgba(255,255,255,0.08); padding-bottom: 0.2rem;">
                <span style="color: var(--color-text-muted); font-weight: 600;">${h.day}:</span>
                <strong style="color: var(--color-gold); font-family: var(--font-street); font-size: 1.05rem; letter-spacing: 0.04em;">${h.time}</strong>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; gap: 0.6rem; margin-top: 0.8rem;">
          <a href="${loc.mapLink}" target="_blank" class="btn-secondary" style="flex: 1; font-size: 0.9rem; text-align: center;">
            <i class="fa-solid fa-directions"></i> Map
          </a>
          <button onclick="openOrderModal()" class="order-btn-primary" style="flex: 1.5; font-size: 1rem;">
            <i class="fa-solid fa-motorcycle"></i> Order Now
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // Category Tab Click
  elements.categoriesContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.category-tab');
    if (btn) {
      state.currentCategory = btn.dataset.id;
      renderCategories();
      renderMenu();
    }
  });

  // Search Input
  elements.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderMenu();
  });
}
