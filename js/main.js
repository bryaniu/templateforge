'use strict';

// ===== TEMPLATE DATA =====
const TEMPLATES = [
  // ── PORTFOLIO ──────────────────────────────────────────────────────────────
  {
    id: 101, name: 'Vanta', category: 'portfolio',
    desc: 'Dark developer portfolio with terminal hero, animated skill bars, project case studies, and a mono-coded aesthetic.',
    price: 39, originalPrice: null, badge: 'new', rating: 4.9, reviews: 148,
    emoji: '⌨', gradient: 'linear-gradient(135deg, #0a0e1a 0%, #0f1525 50%, #151d35 100%)',
    accent: '#00ff88',
    tags: ['HTML/CSS/JS', 'JetBrains Mono'],
    previewUrl: 'templates/portfolio/vanta.html',
  },
  {
    id: 102, name: 'Lumina', category: 'portfolio',
    desc: 'Bold creative designer portfolio with oversized type, a full-bleed work grid, client testimonials, and a punchy contact CTA.',
    price: 49, originalPrice: null, badge: null, rating: 4.8, reviews: 112,
    emoji: '🎨', gradient: 'linear-gradient(135deg, #1a0f00 0%, #2d1a00 40%, #ff4d0022 100%)',
    accent: '#ff4d00',
    tags: ['HTML/CSS/JS', 'Syne Font'],
    previewUrl: 'templates/portfolio/lumina.html',
  },
  {
    id: 103, name: 'Aperture', category: 'portfolio',
    desc: 'Cinematic photographer portfolio with a full-bleed hero, masonry photo gallery, awards section, and italic serif typography.',
    price: 59, originalPrice: 79, badge: 'sale', rating: 5.0, reviews: 87,
    emoji: '📷', gradient: 'linear-gradient(135deg, #080808 0%, #1a1408 50%, #111 100%)',
    accent: '#c9a96e',
    tags: ['HTML/CSS/JS', 'Playfair Display'],
    previewUrl: 'templates/portfolio/aperture.html',
  },
  {
    id: 104, name: 'Drift', category: 'portfolio',
    desc: 'Clean consultant/freelancer portfolio with a stats card hero, service pricing, case study list, and an embedded contact form.',
    price: 0, originalPrice: null, badge: 'free', rating: 4.7, reviews: 234,
    emoji: '◆', gradient: 'linear-gradient(135deg, #f8f7f4 0%, #eeeae4 100%)',
    accent: '#2563eb',
    tags: ['HTML/CSS/JS', 'DM Sans'],
    previewUrl: 'templates/portfolio/drift.html',
  },
  {
    id: 105, name: 'Kinetic', category: 'portfolio',
    desc: 'Dynamic motion & 3D designer portfolio with animated gradient orbs, a horizontal reel, skill bars, and a glowing contact section.',
    price: 69, originalPrice: null, badge: 'new', rating: 4.9, reviews: 63,
    emoji: '◉', gradient: 'linear-gradient(135deg, #050507 0%, #1a0030 50%, #300050 100%)',
    accent: '#7000ff',
    tags: ['HTML/CSS/JS', 'Space Grotesk'],
    previewUrl: 'templates/portfolio/kinetic.html',
  },
  // ── E-COMMERCE ──────────────────────────────────────────────────────────────
  {
    id: 201, name: 'Beacon', category: 'ecommerce',
    desc: 'Luxury fashion store with full-bleed editorial hero, shoppable lookbook grid, and quick-add drawer.',
    price: 59, originalPrice: 79, badge: 'sale', rating: 4.9, reviews: 184,
    emoji: '👗', gradient: 'linear-gradient(135deg, #0a0805 0%, #2d1f0a 50%, #0a0805 100%)',
    accent: '#c9a84c',
    tags: ['HTML/CSS/JS', 'Cormorant Garamond'],
    previewUrl: 'templates/ecommerce/beacon.html',
  },
  {
    id: 202, name: 'Grove', category: 'ecommerce',
    desc: 'Organic & wellness store with earthy palette, category grid, product cards, and newsletter signup.',
    price: 0, originalPrice: null, badge: 'free', rating: 4.8, reviews: 267,
    emoji: '🌿', gradient: 'linear-gradient(135deg, #f7f4ef 0%, #d4e8d8 100%)',
    accent: '#3d6b4f',
    tags: ['HTML/CSS/JS', 'Lora Font'],
    previewUrl: 'templates/ecommerce/grove.html',
  },
  {
    id: 203, name: 'Flux', category: 'ecommerce',
    desc: 'Dark electronics store with glowing product cards, brand strip, spec highlights, and cart button.',
    price: 49, originalPrice: null, badge: 'new', rating: 4.7, reviews: 98,
    emoji: '💻', gradient: 'linear-gradient(135deg, #050508 0%, #0c0c14 50%, #1a1a4e 100%)',
    accent: '#3b82f6',
    tags: ['HTML/CSS/JS', 'Space Grotesk'],
    previewUrl: 'templates/ecommerce/flux.html',
  },
  // ── AGENCY ──────────────────────────────────────────────────────────────────
  {
    id: 301, name: 'Forge', category: 'agency',
    desc: 'Bold creative agency with oversized title, scrolling marquee, case study grid, and services section.',
    price: 59, originalPrice: null, badge: null, rating: 4.8, reviews: 112,
    emoji: '🔥', gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a0800 50%, #0a0a0a 100%)',
    accent: '#ff4500',
    tags: ['HTML/CSS/JS', 'Syne Font'],
    previewUrl: 'templates/agency/forge.html',
  },
  {
    id: 302, name: 'Meridian', category: 'agency',
    desc: 'Digital marketing agency with live metrics dashboard hero, services grid, and results counters.',
    price: 49, originalPrice: null, badge: 'new', rating: 4.9, reviews: 76,
    emoji: '📈', gradient: 'linear-gradient(135deg, #12101f 0%, #1e1b4b 50%, #12101f 100%)',
    accent: '#8b5cf6',
    tags: ['HTML/CSS/JS', 'Plus Jakarta Sans'],
    previewUrl: 'templates/agency/meridian.html',
  },
  {
    id: 303, name: 'Nova Studio', category: 'agency',
    desc: 'Boutique design studio with editorial serif typography, bento work grid, and team showcase.',
    price: 69, originalPrice: null, badge: null, rating: 5.0, reviews: 54,
    emoji: '✦', gradient: 'linear-gradient(135deg, #fffef9 0%, #f5f2e8 100%)',
    accent: '#0d9488',
    tags: ['HTML/CSS/JS', 'Fraunces Font'],
    previewUrl: 'templates/agency/nova.html',
  },
  // ── BLOG ────────────────────────────────────────────────────────────────────
  {
    id: 401, name: 'Ember', category: 'blog',
    desc: 'Clean editorial magazine with hero article, featured grid, numbered list, sidebar tags, and newsletter.',
    price: 0, originalPrice: null, badge: 'free', rating: 4.7, reviews: 312,
    emoji: '✍', gradient: 'linear-gradient(135deg, #1a1208 0%, #2d2010 100%)',
    accent: '#d97706',
    tags: ['HTML/CSS/JS', 'Lora Font'],
    previewUrl: 'templates/blog/ember.html',
  },
  {
    id: 402, name: 'Signal', category: 'blog',
    desc: 'Dark GitHub-style dev blog with trending sidebar, tabbed feed, monospace aesthetics, and weekly newsletter.',
    price: 39, originalPrice: null, badge: 'new', rating: 4.9, reviews: 143,
    emoji: '⌨', gradient: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)',
    accent: '#58a6ff',
    tags: ['HTML/CSS/JS', 'JetBrains Mono'],
    previewUrl: 'templates/blog/signal.html',
  },
  // ── STARTUP ─────────────────────────────────────────────────────────────────
  {
    id: 501, name: 'Pulse', category: 'startup',
    desc: 'SaaS product landing page with animated orbs, email waitlist, feature cards, and 3-tier pricing table.',
    price: 49, originalPrice: null, badge: null, rating: 4.8, reviews: 96,
    emoji: '⚡', gradient: 'linear-gradient(135deg, #07070f 0%, #1e1b4b 50%, #07070f 100%)',
    accent: '#a78bfa',
    tags: ['HTML/CSS/JS', 'Plus Jakarta Sans'],
    previewUrl: 'templates/startup/pulse.html',
  },
  {
    id: 502, name: 'Scout', category: 'startup',
    desc: 'Mobile app landing page with interactive phone mockup, App Store CTAs, feature grid, and screenshot strip.',
    price: 0, originalPrice: null, badge: 'free', rating: 4.7, reviews: 201,
    emoji: '🧭', gradient: 'linear-gradient(135deg, #f9fafb 0%, #eef2ff 100%)',
    accent: '#4f46e5',
    tags: ['HTML/CSS/JS', 'Plus Jakarta Sans'],
    previewUrl: 'templates/startup/scout.html',
  },
  // ── DIGITAL ART ─────────────────────────────────────────────────────────────
  {
    id: 601, name: 'Prism', category: 'digital-art',
    desc: 'Abstract digital art marketplace with glowing orb hero, scrollable gallery, collection packs, and commercial licensing.',
    price: 0, originalPrice: null, badge: 'free', rating: 4.9, reviews: 88,
    emoji: '🔮', gradient: 'linear-gradient(135deg, #060608 0%, #1a0030 40%, #300020 100%)',
    accent: '#8338ec',
    tags: ['HTML/CSS/JS', 'Space Grotesk'],
    previewUrl: 'templates/digital-art/prism.html',
  },
  {
    id: 602, name: 'Canvas', category: 'digital-art',
    desc: 'Stock photography platform with dark hero, keyword search bar, masonry photo grid, and trending tags.',
    price: 49, originalPrice: null, badge: 'new', rating: 4.8, reviews: 64,
    emoji: '📷', gradient: 'linear-gradient(135deg, #1a1a18 0%, #2d2d28 50%, #1a1a18 100%)',
    accent: '#0d9488',
    tags: ['HTML/CSS/JS', 'DM Serif Display'],
    previewUrl: 'templates/digital-art/canvas.html',
  },
  {
    id: 603, name: 'Pixel', category: 'digital-art',
    desc: 'Icon & illustration pack store with live icon preview grid, tabbed packs, and free asset section.',
    price: 39, originalPrice: null, badge: null, rating: 4.7, reviews: 117,
    emoji: '🎨', gradient: 'linear-gradient(135deg, #eef2ff 0%, #dbeafe 100%)',
    accent: '#2563eb',
    tags: ['HTML/CSS/JS', 'Inter Font'],
    previewUrl: 'templates/digital-art/pixel.html',
  },
];

// ===== STATE =====
let activeFilter = 'all';
let searchQuery = '';
let sortBy = 'popular';
let visibleCount = 6;
const PAGE_SIZE = 3;

// ===== CART STATE =====
let cart = [];

// ===== DOM REFS =====
const grid = document.getElementById('templatesGrid');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const catCards = document.querySelectorAll('.cat-card');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalPreview = document.getElementById('modalPreview');
const modalInfo = document.getElementById('modalInfo');

// ===== FILTER & SORT =====
function getFiltered() {
  let items = [...TEMPLATES];

  if (activeFilter !== 'all') {
    items = items.filter(t => t.category === activeFilter);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    items = items.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.desc.toLowerCase().includes(q) ||
      t.tags.some(tag => tag.toLowerCase().includes(q))
    );
  }

  switch (sortBy) {
    case 'newest':   items.sort((a, b) => b.id - a.id); break;
    case 'price-low': items.sort((a, b) => a.price - b.price); break;
    case 'price-high': items.sort((a, b) => b.price - a.price); break;
    default:         items.sort((a, b) => b.reviews - a.reviews); break;
  }

  return items;
}

// ===== RENDER =====
function renderCard(t) {
  const priceHTML = t.price === 0
    ? `<div class="template-price">Free</div>`
    : `<div class="template-price">${t.originalPrice ? `<span class="original">$${t.originalPrice}</span>` : ''}$${t.price}</div>`;

  const badgeHTML = t.badge ? `<div class="template-badge ${t.badge}">${t.badge === 'new' ? 'New' : t.badge === 'sale' ? 'Sale' : 'Free'}</div>` : '';

  const tagsHTML = t.tags.map(tag =>
    `<span style="font-size:11px;background:rgba(255,255,255,0.06);padding:3px 8px;border-radius:4px;color:#94a3b8;font-weight:500;">${tag}</span>`
  ).join('');

  const card = document.createElement('div');
  card.className = 'template-card fade-in';
  card.dataset.id = t.id;
  card.innerHTML = `
    <div class="template-preview">
      <div class="template-preview-inner" style="background:${t.gradient};">
        <span style="font-size:56px;filter:drop-shadow(0 0 24px ${t.accent});">${t.emoji}</span>
        <div style="position:absolute;bottom:0;left:0;right:0;height:60%;background:linear-gradient(to top, rgba(0,0,0,0.5),transparent);"></div>
      </div>
      ${badgeHTML}
      <div class="template-overlay">
        <button class="btn btn-primary preview-btn" data-id="${t.id}">Preview</button>
        <button class="btn btn-outline buy-btn" data-id="${t.id}">${t.price === 0 ? 'Download' : 'Add to Cart'}</button>
      </div>
      ${t.previewUrl ? `<div style="position:absolute;bottom:12px;right:12px;background:rgba(0,0,0,0.7);border:1px solid rgba(255,255,255,0.1);padding:4px 10px;border-radius:100px;font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:0.5px;">LIVE PREVIEW</div>` : ''}
    </div>
    <div class="template-body">
      <div class="template-meta">
        <div class="template-name">${t.name}</div>
        <div class="template-cat">${capitalize(t.category)}</div>
      </div>
      <div class="template-desc">${t.desc}</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">${tagsHTML}</div>
      <div class="template-footer">
        ${priceHTML}
        <div class="template-rating">
          <span class="star">★</span>
          <strong style="color:#e2e8f0;">${t.rating}</strong>
          <span>(${t.reviews})</span>
        </div>
      </div>
    </div>
  `;

  return card;
}

function renderGrid() {
  const items = getFiltered();
  const slice = items.slice(0, visibleCount);

  grid.innerHTML = '';
  if (slice.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:64px 0;color:#94a3b8;">
      <div style="font-size:48px;margin-bottom:16px;">🔍</div>
      <p style="font-size:16px;">No templates found. Try a different search.</p>
    </div>`;
    loadMoreBtn.style.display = 'none';
    return;
  }

  slice.forEach(t => grid.appendChild(renderCard(t)));
  loadMoreBtn.style.display = items.length > visibleCount ? 'inline-flex' : 'none';

  // Trigger fade-in
  requestAnimationFrame(() => {
    document.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  });
}

// ===== MODAL =====
function openModal(id) {
  const t = TEMPLATES.find(x => x.id === id);
  if (!t) return;

  modalPreview.innerHTML = `
    <div style="width:100%;height:100%;background:${t.gradient};display:flex;align-items:center;justify-content:center;min-height:300px;">
      <span style="font-size:80px;filter:drop-shadow(0 0 32px ${t.accent});">${t.emoji}</span>
    </div>
  `;

  const priceLabel = t.price === 0 ? 'Free' : `$${t.price}`;
  const btnLabel = t.price === 0 ? 'Download Free' : 'Add to Cart';

  const previewLink = t.previewUrl
    ? `<a href="${t.previewUrl}" target="_blank" class="btn btn-outline btn-lg">Live Preview ↗</a>`
    : `<span class="btn btn-outline btn-lg" style="opacity:0.4;cursor:default;">Live Preview</span>`;

  modalInfo.innerHTML = `
    <h2>${t.name}</h2>
    <p>${t.desc}</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">
      ${t.tags.map(tag => `<span style="font-size:12px;background:rgba(99,102,241,0.12);color:#818cf8;padding:4px 10px;border-radius:6px;font-weight:600;">${tag}</span>`).join('')}
    </div>
    <div class="modal-actions">
      <div class="modal-price">${priceLabel}</div>
      <a href="#" class="btn btn-primary btn-lg" onclick="handlePurchase(event, ${t.id})">${btnLabel}</a>
      ${previewLink}
    </div>
    <div style="margin-top:16px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;gap:16px;font-size:13px;color:#94a3b8;">
      <span>★ ${t.rating} (${t.reviews} reviews)</span>
      <span>•</span>
      <span>Lifetime updates included</span>
      <span>•</span>
      <span>Commercial license</span>
    </div>
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

window.handlePurchase = function(e, id) {
  e.preventDefault();
  const t = TEMPLATES.find(x => x.id === id);
  if (!t) return;
  if (t.price === 0) {
    showToast(`Downloading ${t.name}...`);
  } else {
    addToCart(id);
    closeModal();
    openCart();
  }
};

// ===== TOAST =====
function showToast(msg) {
  const toast = document.createElement('div');
  toast.textContent = msg;
  Object.assign(toast.style, {
    position: 'fixed', bottom: '28px', left: '50%', transform: 'translateX(-50%) translateY(16px)',
    background: '#1e1e3a', border: '1px solid rgba(99,102,241,0.4)', color: '#e2e8f0',
    padding: '12px 24px', borderRadius: '10px', fontSize: '14px', fontWeight: '600',
    boxShadow: '0 8px 32px rgba(0,0,0,0.5)', zIndex: '300', opacity: '0',
    transition: 'all 0.3s ease', whiteSpace: 'nowrap',
  });
  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(8px)';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ===== PRICING TOGGLE =====
const toggleBtns = document.querySelectorAll('.toggle-btn');
let billingPlan = 'monthly';

toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    billingPlan = btn.dataset.plan;
    toggleBtns.forEach(b => b.classList.toggle('active', b.dataset.plan === billingPlan));
    document.querySelectorAll('.amount').forEach(el => {
      const val = billingPlan === 'yearly' ? el.dataset.yearly : el.dataset.monthly;
      el.textContent = val;
    });
  });
});

// ===== NAV SCROLL =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// ===== CATEGORIES =====
catCards.forEach(card => {
  card.addEventListener('click', () => {
    catCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    activeFilter = card.dataset.filter;
    visibleCount = 6;
    renderGrid();
  });
});

// ===== SEARCH =====
let searchTimer;
searchInput.addEventListener('input', e => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    searchQuery = e.target.value.trim();
    visibleCount = 6;
    renderGrid();
  }, 250);
});

// ===== SORT =====
sortSelect.addEventListener('change', e => {
  sortBy = e.target.value;
  visibleCount = 6;
  renderGrid();
});

// ===== LOAD MORE =====
loadMoreBtn.addEventListener('click', () => {
  visibleCount += PAGE_SIZE;
  renderGrid();
});

// ===== MODAL EVENTS =====
grid.addEventListener('click', e => {
  const previewBtn = e.target.closest('.preview-btn');
  const buyBtn = e.target.closest('.buy-btn');
  const card = e.target.closest('.template-card');

  if (previewBtn) {
    e.stopPropagation();
    const tid = +previewBtn.dataset.id;
    const tpl = TEMPLATES.find(x => x.id === tid);
    if (tpl && tpl.previewUrl) {
      window.open(tpl.previewUrl, '_blank');
    } else {
      openModal(tid);
    }
  } else if (buyBtn) {
    e.stopPropagation();
    const t = TEMPLATES.find(x => x.id === +buyBtn.dataset.id);
    if (!t) return;
    if (t.price === 0) {
      showToast(`Downloading ${t.name}...`);
    } else {
      addToCart(t.id);
      openCart();
    }
  } else if (card) {
    openModal(+card.dataset.id);
  }
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ===== INTERSECTION OBSERVER FOR FADE-IN =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      mobileMenu.classList.remove('open');
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== PORTFOLIO SHOWCASE =====
function renderPortfolioShowcase() {
  const showcase = document.getElementById('portfolioShowcase');
  if (!showcase) return;

  const portfolioTemplates = TEMPLATES.filter(t => t.category === 'portfolio');

  portfolioTemplates.forEach(t => {
    const priceLabel = t.price === 0 ? 'Free' : `$${t.price}`;
    const badgeHTML = t.badge === 'sale'
      ? `<span style="position:absolute;top:12px;left:12px;background:rgba(239,68,68,0.85);color:#fff;font-size:10px;font-weight:700;padding:3px 8px;border-radius:100px;text-transform:uppercase;">Sale</span>`
      : t.badge === 'new'
      ? `<span style="position:absolute;top:12px;left:12px;background:rgba(16,185,129,0.85);color:#fff;font-size:10px;font-weight:700;padding:3px 8px;border-radius:100px;text-transform:uppercase;">New</span>`
      : '';

    const card = document.createElement('div');
    card.className = 'pf-card fade-in';
    card.innerHTML = `
      <div class="pf-thumb" style="background:${t.gradient};">
        <span style="font-size:52px;filter:drop-shadow(0 0 20px ${t.accent});position:relative;z-index:1;">${t.emoji}</span>
        <div class="pf-thumb-overlay"></div>
        ${badgeHTML}
        <div class="pf-price-tag">${priceLabel}</div>
        <div class="pf-thumb-content">
          <div class="pf-name">${t.name}</div>
          <div class="pf-style">${t.tags[0]}</div>
        </div>
        <div class="pf-actions">
          ${t.previewUrl ? `<a href="${t.previewUrl}" target="_blank" class="btn btn-primary" onclick="event.stopPropagation()">Preview ↗</a>` : ''}
          <button class="btn btn-outline buy-btn" data-id="${t.id}" onclick="event.stopPropagation()">${t.price === 0 ? 'Download' : 'Buy'}</button>
        </div>
      </div>
    `;
    card.addEventListener('click', () => {
      if (t.previewUrl) window.open(t.previewUrl, '_blank');
      else openModal(t.id);
    });
    showcase.appendChild(card);
  });

  // Trigger fade-in
  requestAnimationFrame(() => {
    showcase.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  });
}

// "Browse All" button filters to portfolio category
document.getElementById('browseAllBtn')?.addEventListener('click', (e) => {
  e.preventDefault();
  catCards.forEach(c => {
    if (c.dataset.filter === 'portfolio') {
      c.click();
    }
  });
  document.getElementById('templates').scrollIntoView({ behavior: 'smooth' });
});

// ===== INIT =====
renderPortfolioShowcase();
renderGrid();

// ===== HELPER =====
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ===== CART LOGIC =====
const cartDrawer   = document.getElementById('cartDrawer');
const cartOverlay  = document.getElementById('cartOverlay');
const cartBadge    = document.getElementById('cartBadge');
const cartBody     = document.getElementById('cartBody');
const cartFooter   = document.getElementById('cartFooter');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal    = document.getElementById('cartTotal');
const cartView     = document.getElementById('cartView');
const checkoutView = document.getElementById('checkoutView');
const successView  = document.getElementById('successView');

function openCart() {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  showCartView();
}

function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function showCartView() {
  cartView.style.display = 'flex';
  checkoutView.style.display = 'none';
  successView.style.display = 'none';
  renderCartBody();
}

async function showCheckoutView() {
  cartView.style.display = 'none';
  checkoutView.style.display = 'flex';
  successView.style.display = 'none';
  renderCheckoutSummary();
  await initStripe();
  await mountStripePaymentElement();
}

function showSuccessView() {
  cartView.style.display = 'none';
  checkoutView.style.display = 'none';
  successView.style.display = 'flex';
  renderSuccessItems();
}

function addToCart(id) {
  const t = TEMPLATES.find(x => x.id === id);
  if (!t || t.price === 0) return;
  if (!cart.find(c => c.id === id)) {
    cart.push({ id });
    updateCartBadge();
    showToast(`${t.name} added to cart!`);
  } else {
    showToast(`${t.name} is already in your cart`);
  }
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartBadge();
  renderCartBody();
}

function updateCartBadge() {
  const count = cart.length;
  cartBadge.textContent = count;
  cartBadge.style.display = count > 0 ? 'flex' : 'none';
}

function getCartTotal() {
  return cart.reduce((sum, c) => {
    const t = TEMPLATES.find(x => x.id === c.id);
    return sum + (t ? t.price : 0);
  }, 0);
}

function renderCartBody() {
  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Browse templates and add ones you love to your cart.</p>
      </div>`;
    cartFooter.style.display = 'none';
    return;
  }

  cartBody.innerHTML = cart.map(c => {
    const t = TEMPLATES.find(x => x.id === c.id);
    if (!t) return '';
    return `
      <div class="cart-item">
        <div class="cart-item-thumb" style="background:${t.gradient};">
          <span style="filter:drop-shadow(0 0 8px ${t.accent});">${t.emoji}</span>
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${t.name}</div>
          <div class="cart-item-cat">${capitalize(t.category)}</div>
        </div>
        <div class="cart-item-price">$${t.price}</div>
        <button class="cart-item-remove" data-remove="${t.id}" title="Remove">✕</button>
      </div>`;
  }).join('');

  const total = getCartTotal();
  cartSubtotal.textContent = `$${total}`;
  cartTotal.textContent = `$${total}`;
  cartFooter.style.display = 'block';

  cartBody.querySelectorAll('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(+btn.dataset.remove));
  });
}

function renderCheckoutSummary() {
  const summaryEl = document.getElementById('checkoutSummary');
  const totalDue  = document.getElementById('checkoutTotalDue');
  summaryEl.innerHTML = cart.map(c => {
    const t = TEMPLATES.find(x => x.id === c.id);
    if (!t) return '';
    return `<div class="checkout-order-item"><strong>${t.name}</strong><span>$${t.price}</span></div>`;
  }).join('');
  totalDue.textContent = `$${getCartTotal()}`;
}

function renderSuccessItems() {
  const el = document.getElementById('successItems');
  el.innerHTML = cart.map(c => {
    const t = TEMPLATES.find(x => x.id === c.id);
    return t ? `<div class="success-item"><strong>${t.name}</strong><span>$${t.price}</span></div>` : '';
  }).join('');
}

// ===== STRIPE PAYMENT ELEMENT =====
let stripeInstance  = null;
let stripeElements  = null;

async function initStripe() {
  if (stripeInstance) return;
  try {
    const res = await fetch('/api/config');
    if (!res.ok) throw new Error('Could not load Stripe config.');
    const { publishableKey } = await res.json();
    stripeInstance = Stripe(publishableKey);
  } catch (err) {
    console.warn('Stripe init failed (running without backend?):', err.message);
  }
}

async function mountStripePaymentElement() {
  const loader = document.getElementById('payment-element-loader');
  const errEl  = document.getElementById('payment-errors');
  errEl.textContent = '';

  if (!stripeInstance) {
    // No backend available — show friendly message
    if (loader) loader.classList.add('hidden');
    document.getElementById('payment-element').innerHTML =
      `<p style="font-size:13px;color:var(--text-muted);padding:12px 0;">
        Payment processing requires the backend server. See setup instructions.
      </p>`;
    return;
  }

  // Build items array from current cart
  const items = cart.map(c => {
    const t = TEMPLATES.find(x => x.id === c.id);
    return { id: t.id, name: t.name, price: t.price };
  });

  try {
    const res = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error);

    const appearance = {
      theme: 'night',
      variables: {
        colorPrimary:      '#6366f1',
        colorBackground:   '#16162a',
        colorText:         '#e2e8f0',
        colorTextSecondary:'#94a3b8',
        colorDanger:       '#f87171',
        borderRadius:      '8px',
        fontFamily:        'Inter, sans-serif',
      },
    };

    stripeElements = stripeInstance.elements({ appearance, clientSecret: data.clientSecret });
    const paymentEl = stripeElements.create('payment');
    paymentEl.mount('#payment-element');
    paymentEl.on('ready', () => { if (loader) loader.classList.add('hidden'); });
  } catch (err) {
    if (loader) loader.classList.add('hidden');
    errEl.textContent = err.message;
  }
}

// Checkout form submit
document.getElementById('checkoutForm')?.addEventListener('submit', async function(e) {
  e.preventDefault();

  const errEl = document.getElementById('payment-errors');
  errEl.textContent = '';

  // Validate contact fields
  const contactInputs = [
    this.querySelector('[name="firstName"]'),
    this.querySelector('[name="email"]'),
  ];
  let valid = true;
  contactInputs.forEach(input => {
    input.classList.remove('error');
    if (!input.value.trim()) { input.classList.add('error'); valid = false; }
  });
  if (!valid) return;

  const btn = document.getElementById('placeOrderBtn');
  btn.textContent = 'Processing…';
  btn.disabled = true;

  // If no Stripe (dev/static preview), simulate success
  if (!stripeInstance || !stripeElements) {
    setTimeout(() => {
      showSuccessView();
      cart = [];
      updateCartBadge();
      btn.textContent = 'Complete Purchase';
      btn.disabled = false;
    }, 1000);
    return;
  }

  const email = this.querySelector('[name="email"]').value;

  const { error } = await stripeInstance.confirmPayment({
    elements: stripeElements,
    confirmParams: {
      return_url:    window.location.origin + '/',
      receipt_email: email,
    },
    redirect: 'if_required',
  });

  if (error) {
    errEl.textContent = error.message;
    btn.textContent = 'Complete Purchase';
    btn.disabled = false;
  } else {
    showSuccessView();
    cart = [];
    updateCartBadge();
    btn.textContent = 'Complete Purchase';
    btn.disabled = false;
  }
});

// Cart event listeners
document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
document.getElementById('checkoutClose').addEventListener('click', closeCart);
document.getElementById('successClose').addEventListener('click', closeCart);
document.getElementById('cartBack').addEventListener('click', showCartView);
document.getElementById('checkoutBtn').addEventListener('click', showCheckoutView);
document.getElementById('continueShopping').addEventListener('click', () => {
  closeCart();
  showCartView();
});
cartOverlay.addEventListener('click', closeCart);
