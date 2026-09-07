/**
 * VOLT MOTORS - Main Application Logic
 * Clean, modern, accessible, and high-performance interactive automotive showroom
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const AppState = {
    vehicles: [...VEHICLES_DATA],
    filteredVehicles: [...VEHICLES_DATA],
    wishlist: JSON.parse(localStorage.getItem('volt_wishlist') || '[]'),
    compareList: JSON.parse(localStorage.getItem('volt_compare') || '[]'),
    filters: {
      search: '',
      brand: 'all',
      bodyType: 'all',
      fuelType: 'all',
      maxPrice: 350000,
      sortBy: 'featured'
    },
    activeConfig: {
      color: CONFIGURATOR_DATA.colors[0],
      wheel: CONFIGURATOR_DATA.wheels[0],
      interior: CONFIGURATOR_DATA.interiors[0],
      packages: [CONFIGURATOR_DATA.packages[0].id]
    },
    finance: {
      price: 79100,
      downPayment: 15000,
      term: 48,
      rate: 4.9
    }
  };

  // DOM Elements Cache
  const DOM = {
    navbar: document.getElementById('navbar'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileDrawer: document.getElementById('mobileDrawer'),
    mobileCloseBtn: document.getElementById('mobileCloseBtn'),
    
    // Counters
    wishlistBadge: document.getElementById('wishlistBadge'),
    compareBadge: document.getElementById('compareBadge'),
    navWishlistBtn: document.getElementById('navWishlistBtn'),
    navCompareBtn: document.getElementById('navCompareBtn'),
    
    // Performance Section
    statCounters: document.querySelectorAll('.stat-number'),
    
    // Filters & Search
    searchInput: document.getElementById('carSearchInput'),
    brandFilter: document.getElementById('brandFilter'),
    bodyFilter: document.getElementById('bodyFilter'),
    fuelFilter: document.getElementById('fuelFilter'),
    priceSlider: document.getElementById('priceRangeSlider'),
    priceDisplay: document.getElementById('priceRangeDisplay'),
    sortSelect: document.getElementById('sortSelect'),
    resetFilterBtn: document.getElementById('resetFilterBtn'),
    resultsCount: document.getElementById('resultsCount'),
    
    // Grid Containers
    carGrid: document.getElementById('featuredCarGrid'),
    categoryGrid: document.getElementById('categoryGrid'),
    newArrivalsTrack: document.getElementById('newArrivalsTrack'),
    carouselTrackContainer: document.getElementById('carouselTrackContainer'),
    carouselProgressFill: document.getElementById('carouselProgressFill'),
    carouselPrevBtn: document.getElementById('carouselPrevBtn'),
    carouselNextBtn: document.getElementById('carouselNextBtn'),
    
    // Configurator Elements
    configCarImg: document.getElementById('configCarImg'),
    configColorSwatches: document.getElementById('configColorSwatches'),
    configWheelsContainer: document.getElementById('configWheelsContainer'),
    configInteriorsContainer: document.getElementById('configInteriorsContainer'),
    configPackagesContainer: document.getElementById('configPackagesContainer'),
    configTotalPrice: document.getElementById('configTotalPrice'),
    configColorName: document.getElementById('configColorName'),
    saveConfigBtn: document.getElementById('saveConfigBtn'),
    configTestDriveBtn: document.getElementById('configTestDriveBtn'),
    
    // Financing Calculator
    finVehiclePrice: document.getElementById('finVehiclePrice'),
    finPriceVal: document.getElementById('finPriceVal'),
    finDownPayment: document.getElementById('finDownPayment'),
    finDownVal: document.getElementById('finDownVal'),
    finInterestRate: document.getElementById('finInterestRate'),
    finRateVal: document.getElementById('finRateVal'),
    termBtns: document.querySelectorAll('.term-btn'),
    finMonthlyPayment: document.getElementById('finMonthlyPayment'),
    finLoanAmount: document.getElementById('finLoanAmount'),
    finTotalInterest: document.getElementById('finTotalInterest'),
    finTotalCost: document.getElementById('finTotalCost'),
    finGetOptionsBtn: document.getElementById('finGetOptionsBtn'),
    
    // Modals & Drawers
    detailModal: document.getElementById('detailModal'),
    detailModalClose: document.getElementById('detailModalClose'),
    detailContent: document.getElementById('detailModalContent'),
    
    wishlistDrawerBackdrop: document.getElementById('wishlistDrawerBackdrop'),
    wishlistCloseBtn: document.getElementById('wishlistCloseBtn'),
    wishlistItemsList: document.getElementById('wishlistItemsList'),
    
    compareDock: document.getElementById('compareDock'),
    compareDockSlots: document.getElementById('compareDockSlots'),
    compareDockActionBtn: document.getElementById('compareDockActionBtn'),
    compareModal: document.getElementById('compareModal'),
    compareModalClose: document.getElementById('compareModalClose'),
    compareTableBody: document.getElementById('compareTableBody'),
    
    testDriveModal: document.getElementById('testDriveModal'),
    testDriveModalClose: document.getElementById('testDriveModalClose'),
    testDriveForm: document.getElementById('testDriveForm'),
    testDriveVehicleSelect: document.getElementById('testDriveVehicleSelect'),
    
    toastContainer: document.getElementById('toastContainer')
  };

  /* ==========================================================================
     INIT APP
     ========================================================================== */
  function init() {
    initNavbar();
    initStatsObserver();
    initCategoryCards();
    renderCarGrid();
    initNewArrivalsCarousel();
    initSearchAndFilters();
    initConfigurator();
    initFinancingCalculator();
    initWishlist();
    initCompareSystem();
    initTestDriveModal();
    initNewsletter();
  }

  /* ==========================================================================
     TOAST NOTIFICATIONS
     ========================================================================== */
  function showToast(message, icon = '✓') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-cyan-dot"></span>
      <span>${message}</span>
    `;
    DOM.toastContainer.appendChild(toast);
    
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  /* ==========================================================================
     NAVBAR & MOBILE MENU
     ========================================================================== */
  function initNavbar() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        DOM.navbar.classList.add('scrolled');
      } else {
        DOM.navbar.classList.remove('scrolled');
      }
    }, { passive: true });

    if (DOM.mobileMenuBtn && DOM.mobileDrawer) {
      DOM.mobileMenuBtn.addEventListener('click', () => {
        DOM.mobileDrawer.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }

    if (DOM.mobileCloseBtn && DOM.mobileDrawer) {
      DOM.mobileCloseBtn.addEventListener('click', () => {
        DOM.mobileDrawer.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    // Close mobile drawer when clicking a link
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        DOM.mobileDrawer.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* ==========================================================================
     PERFORMANCE SECTION NUMBER COUNTERS
     ========================================================================== */
  function initStatsObserver() {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          DOM.statCounters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const isDecimal = counter.getAttribute('data-decimal') === 'true';
            animateCounter(counter, target, isDecimal, 1600);
          });
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });

    const performanceSection = document.getElementById('performanceSection');
    if (performanceSection) {
      observer.observe(performanceSection);
    }
  }

  function animateCounter(element, target, isDecimal, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOut * target;

      if (isDecimal) {
        element.textContent = currentVal.toFixed(1);
      } else {
        element.textContent = Math.floor(currentVal).toLocaleString();
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        if (isDecimal) {
          element.textContent = target.toFixed(1);
        } else {
          element.textContent = target.toLocaleString();
        }
      }
    }
    requestAnimationFrame(update);
  }

  /* ==========================================================================
     EXPLORE BY CATEGORY CARDS
     ========================================================================== */
  function initCategoryCards() {
    if (!DOM.categoryGrid) return;
    
    DOM.categoryGrid.innerHTML = CATEGORIES_DATA.map(cat => `
      <div class="category-card" data-category="${cat.filterKey}" role="button" tabindex="0" aria-label="Explore ${cat.name} category">
        <img class="category-bg-img" src="${cat.image}" alt="${cat.title}" loading="lazy">
        <div class="category-overlay"></div>
        <div class="category-card-content">
          <h3 class="category-title">${cat.name}</h3>
          <p class="category-count">${cat.count}</p>
          <span class="category-arrow">
            Explore 
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </div>
      </div>
    `).join('');

    DOM.categoryGrid.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const catKey = card.getAttribute('data-category');
        if (DOM.bodyFilter) {
          DOM.bodyFilter.value = catKey;
          AppState.filters.bodyType = catKey;
          applyFilters();
          
          // Scroll to inventory
          const invSection = document.getElementById('inventory');
          if (invSection) {
            invSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  /* ==========================================================================
     SEARCH & FILTER SYSTEM
     ========================================================================== */
  function initSearchAndFilters() {
    // Populate Brand Filter Dropdown dynamically
    const brands = ['all', ...new Set(AppState.vehicles.map(v => v.brand))];
    if (DOM.brandFilter) {
      DOM.brandFilter.innerHTML = brands.map(b => `
        <option value="${b}">${b === 'all' ? 'All Brands' : b}</option>
      `).join('');
    }

    // Search input
    DOM.searchInput?.addEventListener('input', (e) => {
      AppState.filters.search = e.target.value.trim().toLowerCase();
      applyFilters();
    });

    // Brand filter
    DOM.brandFilter?.addEventListener('change', (e) => {
      AppState.filters.brand = e.target.value;
      applyFilters();
    });

    // Body filter
    DOM.bodyFilter?.addEventListener('change', (e) => {
      AppState.filters.bodyType = e.target.value;
      applyFilters();
    });

    // Fuel filter
    DOM.fuelFilter?.addEventListener('change', (e) => {
      AppState.filters.fuelType = e.target.value;
      applyFilters();
    });

    // Price slider
    DOM.priceSlider?.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      AppState.filters.maxPrice = val;
      if (DOM.priceDisplay) {
        DOM.priceDisplay.textContent = `$${val.toLocaleString()}`;
      }
      applyFilters();
    });

    // Sort select
    DOM.sortSelect?.addEventListener('change', (e) => {
      AppState.filters.sortBy = e.target.value;
      applyFilters();
    });

    // Reset filters button
    DOM.resetFilterBtn?.addEventListener('click', () => {
      AppState.filters = {
        search: '',
        brand: 'all',
        bodyType: 'all',
        fuelType: 'all',
        maxPrice: 350000,
        sortBy: 'featured'
      };

      if (DOM.searchInput) DOM.searchInput.value = '';
      if (DOM.brandFilter) DOM.brandFilter.value = 'all';
      if (DOM.bodyFilter) DOM.bodyFilter.value = 'all';
      if (DOM.fuelFilter) DOM.fuelFilter.value = 'all';
      if (DOM.priceSlider) DOM.priceSlider.value = 350000;
      if (DOM.priceDisplay) DOM.priceDisplay.textContent = '$350,000';
      if (DOM.sortSelect) DOM.sortSelect.value = 'featured';

      applyFilters();
      showToast('Filters reset to default');
    });
  }

  function applyFilters() {
    let result = AppState.vehicles.filter(car => {
      // Keyword search
      if (AppState.filters.search) {
        const query = AppState.filters.search;
        const matchTitle = car.fullName.toLowerCase().includes(query);
        const matchBrand = car.brand.toLowerCase().includes(query);
        const matchModel = car.model.toLowerCase().includes(query);
        const matchTag = car.tag?.toLowerCase().includes(query) || false;
        if (!matchTitle && !matchBrand && !matchModel && !matchTag) return false;
      }

      // Brand filter
      if (AppState.filters.brand !== 'all' && car.brand !== AppState.filters.brand) {
        return false;
      }

      // Body Type filter
      if (AppState.filters.bodyType !== 'all' && car.bodyType.toLowerCase() !== AppState.filters.bodyType.toLowerCase()) {
        return false;
      }

      // Fuel Type filter
      if (AppState.filters.fuelType !== 'all' && car.fuelType.toLowerCase() !== AppState.filters.fuelType.toLowerCase()) {
        return false;
      }

      // Max price
      if (car.price > AppState.filters.maxPrice) {
        return false;
      }

      return true;
    });

    // Sorting
    switch (AppState.filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'power-desc':
        result.sort((a, b) => b.hp - a.hp);
        break;
      case 'accel-asc':
        result.sort((a, b) => parseFloat(a.acceleration) - parseFloat(b.acceleration));
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    AppState.filteredVehicles = result;
    renderCarGrid();
  }

  /* ==========================================================================
     RENDER CAR GRID & CAR CARDS
     ========================================================================== */
  function renderCarGrid() {
    if (!DOM.carGrid) return;

    if (DOM.resultsCount) {
      DOM.resultsCount.innerHTML = `Showing <strong>${AppState.filteredVehicles.length}</strong> of ${AppState.vehicles.length} vehicles`;
    }

    if (AppState.filteredVehicles.length === 0) {
      DOM.carGrid.innerHTML = `
        <div class="empty-state-box">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 16px;">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3 style="font-family: var(--font-heading); font-size: 1.4rem; margin-bottom: 8px;">No Vehicles Match Your Criteria</h3>
          <p style="color: var(--color-gray); font-size: 0.9rem; margin-bottom: 20px;">Try adjusting your price range, fuel type, or clearing some filters.</p>
          <button class="btn btn-cyan btn-sm" id="emptyResetBtn">Reset All Filters</button>
        </div>
      `;
      document.getElementById('emptyResetBtn')?.addEventListener('click', () => {
        DOM.resetFilterBtn?.click();
      });
      return;
    }

    DOM.carGrid.innerHTML = AppState.filteredVehicles.map(car => createCarCardHTML(car)).join('');
    attachCarCardEvents(DOM.carGrid);
  }

  function createCarCardHTML(car) {
    const isWishlisted = AppState.wishlist.includes(car.id);
    const isCompared = AppState.compareList.includes(car.id);

    return `
      <article class="car-card" data-id="${car.id}">
        <div class="car-image-box">
          <img class="car-image" src="${car.image}" alt="${car.fullName}" loading="lazy">
          <span class="car-tag-badge">${car.tag || car.bodyType}</span>
          <div class="car-card-actions">
            <button class="action-btn-pill wishlist-toggle-btn ${isWishlisted ? 'active' : ''}" data-id="${car.id}" aria-label="Save to wishlist" title="Save to wishlist">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button class="action-btn-pill compare-toggle-btn ${isCompared ? 'active' : ''}" data-id="${car.id}" aria-label="Compare vehicle" title="Add to compare">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </button>
          </div>
        </div>

        <div class="car-info">
          <div class="car-brand-row">
            <span class="car-brand">${car.brand}</span>
            <span class="car-year">${car.year}</span>
          </div>

          <h3 class="car-title">${car.model}</h3>
          <div class="car-price-tag">$${car.price.toLocaleString()}</div>

          <div class="car-specs-pills">
            <div class="spec-pill-item">
              <span class="spec-pill-label">Power</span>
              <span class="spec-pill-val">${car.hp} HP</span>
            </div>
            <div class="spec-pill-item">
              <span class="spec-pill-label">0-100</span>
              <span class="spec-pill-val">${car.acceleration}</span>
            </div>
            <div class="spec-pill-item">
              <span class="spec-pill-label">Fuel</span>
              <span class="spec-pill-val">${car.fuelType}</span>
            </div>
          </div>

          <div class="car-card-footer">
            <button class="card-cta-link view-details-btn" data-id="${car.id}">
              View Details
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button class="btn btn-outline btn-sm quick-test-drive-btn" data-id="${car.id}">
              Test Drive
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function attachCarCardEvents(container) {
    // View Details Click
    container.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const carId = e.currentTarget.getAttribute('data-id');
        openCarDetailModal(carId);
      });
    });

    // Quick Test Drive Click
    container.querySelectorAll('.quick-test-drive-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const carId = e.currentTarget.getAttribute('data-id');
        openTestDriveModal(carId);
      });
    });

    // Wishlist Toggle
    container.querySelectorAll('.wishlist-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const carId = e.currentTarget.getAttribute('data-id');
        toggleWishlist(carId);
      });
    });

    // Compare Toggle
    container.querySelectorAll('.compare-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const carId = e.currentTarget.getAttribute('data-id');
        toggleCompare(carId);
      });
    });
  }

  /* ==========================================================================
     NEW ARRIVALS CAROUSEL
     ========================================================================== */
  function initNewArrivalsCarousel() {
    if (!DOM.newArrivalsTrack) return;

    const newCars = AppState.vehicles.filter(c => c.isNew);
    DOM.newArrivalsTrack.innerHTML = newCars.map(car => `
      <div class="carousel-card-item">
        ${createCarCardHTML(car)}
      </div>
    `).join('');

    attachCarCardEvents(DOM.newArrivalsTrack);

    // Carousel buttons
    DOM.carouselPrevBtn?.addEventListener('click', () => {
      DOM.carouselTrackContainer.scrollBy({ left: -390, behavior: 'smooth' });
    });

    DOM.carouselNextBtn?.addEventListener('click', () => {
      DOM.carouselTrackContainer.scrollBy({ left: 390, behavior: 'smooth' });
    });

    // Progress bar updater
    DOM.carouselTrackContainer?.addEventListener('scroll', () => {
      const container = DOM.carouselTrackContainer;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll > 0) {
        const scrollPct = (container.scrollLeft / maxScroll) * 100;
        const fillWidth = 25; // % width of bar
        const leftPos = (scrollPct * (100 - fillWidth)) / 100;
        if (DOM.carouselProgressFill) {
          DOM.carouselProgressFill.style.left = `${leftPos}%`;
          DOM.carouselProgressFill.style.width = `${fillWidth}%`;
        }
      }
    }, { passive: true });

    // Drag-to-scroll support for mouse
    let isDown = false;
    let startX;
    let scrollLeft;

    DOM.carouselTrackContainer?.addEventListener('mousedown', (e) => {
      isDown = true;
      DOM.carouselTrackContainer.classList.add('active-dragging');
      startX = e.pageX - DOM.carouselTrackContainer.offsetLeft;
      scrollLeft = DOM.carouselTrackContainer.scrollLeft;
    });

    DOM.carouselTrackContainer?.addEventListener('mouseleave', () => {
      isDown = false;
      DOM.carouselTrackContainer.classList.remove('active-dragging');
    });

    DOM.carouselTrackContainer?.addEventListener('mouseup', () => {
      isDown = false;
      DOM.carouselTrackContainer.classList.remove('active-dragging');
    });

    DOM.carouselTrackContainer?.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - DOM.carouselTrackContainer.offsetLeft;
      const walk = (x - startX) * 1.5;
      DOM.carouselTrackContainer.scrollLeft = scrollLeft - walk;
    });
  }

  /* ==========================================================================
     VEHICLE DETAIL MODAL & GALLERY
     ========================================================================== */
  function openCarDetailModal(carId) {
    const car = AppState.vehicles.find(v => v.id === carId);
    if (!car || !DOM.detailContent) return;

    const isWishlisted = AppState.wishlist.includes(car.id);
    const isCompared = AppState.compareList.includes(car.id);

    DOM.detailContent.innerHTML = `
      <div class="detail-modal-grid">
        <!-- Gallery Panel -->
        <div class="detail-gallery-panel">
          <div class="detail-main-img-box">
            <img class="detail-main-img" id="detailMainImg" src="${car.gallery[0] || car.image}" alt="${car.fullName}">
          </div>
          <div class="detail-thumbnails" id="detailThumbnails">
            ${(car.gallery || [car.image]).map((imgUrl, idx) => `
              <div class="detail-thumb ${idx === 0 ? 'active' : ''}" data-src="${imgUrl}">
                <img src="${imgUrl}" alt="${car.fullName} view ${idx + 1}">
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Info Panel -->
        <div class="detail-info-panel">
          <span class="detail-brand-badge">${car.brand} • ${car.year}</span>
          <h2 class="detail-car-title">${car.fullName}</h2>
          <div class="detail-car-price">$${car.price.toLocaleString()}</div>

          <div class="detail-key-specs-strip">
            <div class="detail-spec-row">
              <span class="detail-spec-key">Output</span>
              <span class="detail-spec-val">${car.hp} Horsepower</span>
            </div>
            <div class="detail-spec-row">
              <span class="detail-spec-key">Acceleration</span>
              <span class="detail-spec-val">${car.acceleration} (0-100)</span>
            </div>
            <div class="detail-spec-row">
              <span class="detail-spec-key">Powertrain</span>
              <span class="detail-spec-val">${car.fuelType} / ${car.drivetrain}</span>
            </div>
            <div class="detail-spec-row">
              <span class="detail-spec-key">Transmission</span>
              <span class="detail-spec-val">${car.transmission}</span>
            </div>
          </div>

          <div class="detail-tabs-header">
            <button class="detail-tab-btn active" data-tab="overview">Overview</button>
            <button class="detail-tab-btn" data-tab="specs">Full Specs</button>
            <button class="detail-tab-btn" data-tab="features">Key Features</button>
          </div>

          <div class="detail-tab-content" id="detailTabContent">
            <p>${car.description}</p>
          </div>

          <div class="detail-actions-group">
            <button class="btn btn-cyan" id="modalBookTestDriveBtn" data-id="${car.id}">
              Book a Test Drive
            </button>
            <div class="detail-secondary-actions">
              <button class="btn btn-outline btn-sm" id="modalToggleWishlistBtn" data-id="${car.id}">
                ${isWishlisted ? '♥ Saved in Wishlist' : '♡ Save to Wishlist'}
              </button>
              <button class="btn btn-outline btn-sm" id="modalToggleCompareBtn" data-id="${car.id}">
                ${isCompared ? '✓ Added to Compare' : '+ Add to Compare'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Modal Image Gallery Switcher
    const mainImg = DOM.detailContent.querySelector('#detailMainImg');
    DOM.detailContent.querySelectorAll('.detail-thumb').forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        DOM.detailContent.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        const newSrc = thumb.getAttribute('data-src');
        
        mainImg.style.opacity = '0.3';
        setTimeout(() => {
          mainImg.src = newSrc;
          mainImg.style.opacity = '1';
        }, 150);
      });
    });

    // Detail Tabs Switcher
    const tabContent = DOM.detailContent.querySelector('#detailTabContent');
    DOM.detailContent.querySelectorAll('.detail-tab-btn').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        DOM.detailContent.querySelectorAll('.detail-tab-btn').forEach(t => t.classList.remove('active'));
        tabBtn.classList.add('active');
        const tabType = tabBtn.getAttribute('data-tab');

        if (tabType === 'overview') {
          tabContent.innerHTML = `<p>${car.description}</p>`;
        } else if (tabType === 'specs') {
          tabContent.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              ${Object.entries(car.specs || {}).map(([key, val]) => `
                <div style="display:flex; justify-content:space-between; padding: 4px 0; border-bottom: 1px solid var(--border-subtle); font-size: 0.82rem;">
                  <span style="color:var(--color-gray); text-transform:capitalize;">${key.replace(/([A-Z])/g, ' $1')}</span>
                  <span style="font-weight:600; color:#fff;">${val}</span>
                </div>
              `).join('')}
            </div>
          `;
        } else if (tabType === 'features') {
          tabContent.innerHTML = `
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.85rem;">
              ${(car.features || []).map(feat => `
                <li style="display: flex; align-items: center; gap: 8px;">
                  <span style="color: var(--color-cyan);">✓</span> ${feat}
                </li>
              `).join('')}
            </ul>
          `;
        }
      });
    });

    // Detail Modal Actions
    DOM.detailContent.querySelector('#modalBookTestDriveBtn')?.addEventListener('click', () => {
      closeCarDetailModal();
      openTestDriveModal(car.id);
    });

    DOM.detailContent.querySelector('#modalToggleWishlistBtn')?.addEventListener('click', (e) => {
      toggleWishlist(car.id);
      const isNowSaved = AppState.wishlist.includes(car.id);
      e.currentTarget.textContent = isNowSaved ? '♥ Saved in Wishlist' : '♡ Save to Wishlist';
    });

    DOM.detailContent.querySelector('#modalToggleCompareBtn')?.addEventListener('click', (e) => {
      toggleCompare(car.id);
      const isNowComp = AppState.compareList.includes(car.id);
      e.currentTarget.textContent = isNowComp ? '✓ Added to Compare' : '+ Add to Compare';
    });

    DOM.detailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCarDetailModal() {
    DOM.detailModal?.classList.remove('active');
    document.body.style.overflow = '';
  }

  DOM.detailModalClose?.addEventListener('click', closeCarDetailModal);
  DOM.detailModal?.addEventListener('click', (e) => {
    if (e.target === DOM.detailModal) closeCarDetailModal();
  });

  /* ==========================================================================
     BUILD YOUR CAR (CUSTOMIZER STUDIO)
     ========================================================================== */
  function initConfigurator() {
    renderConfigColorSwatches();
    renderConfigWheels();
    renderConfigInteriors();
    renderConfigPackages();
    updateConfigSummary();

    DOM.saveConfigBtn?.addEventListener('click', () => {
      showToast('Custom specification saved to your profile!');
    });

    DOM.configTestDriveBtn?.addEventListener('click', () => {
      openTestDriveModal(CONFIGURATOR_DATA.baseCar.id);
    });
  }

  function renderConfigColorSwatches() {
    if (!DOM.configColorSwatches) return;
    DOM.configColorSwatches.innerHTML = CONFIGURATOR_DATA.colors.map(col => `
      <button class="color-swatch-btn ${col.id === AppState.activeConfig.color.id ? 'active' : ''}" 
              data-id="${col.id}" 
              style="background-color: ${col.colorCode};" 
              title="${col.name} ${col.price > 0 ? '(+$' + col.price.toLocaleString() + ')' : ''}" 
              aria-label="${col.name}">
      </button>
    `).join('');

    DOM.configColorSwatches.querySelectorAll('.color-swatch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const colId = btn.getAttribute('data-id');
        const selected = CONFIGURATOR_DATA.colors.find(c => c.id === colId);
        if (selected) {
          AppState.activeConfig.color = selected;
          renderConfigColorSwatches();
          
          if (DOM.configCarImg) {
            DOM.configCarImg.style.opacity = '0.3';
            setTimeout(() => {
              DOM.configCarImg.src = selected.image;
              DOM.configCarImg.style.opacity = '1';
            }, 180);
          }

          if (DOM.configColorName) {
            DOM.configColorName.textContent = selected.name;
          }

          updateConfigSummary();
        }
      });
    });
  }

  function renderConfigWheels() {
    if (!DOM.configWheelsContainer) return;
    DOM.configWheelsContainer.innerHTML = CONFIGURATOR_DATA.wheels.map(w => `
      <button class="config-option-btn ${w.id === AppState.activeConfig.wheel.id ? 'active' : ''}" data-id="${w.id}">
        <div class="config-option-info">
          <span class="config-option-name">${w.name}</span>
          <span class="config-option-desc">${w.desc}</span>
        </div>
        <span class="config-option-price">${w.price === 0 ? 'Standard' : '+$' + w.price.toLocaleString()}</span>
      </button>
    `).join('');

    DOM.configWheelsContainer.querySelectorAll('.config-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const wheelId = btn.getAttribute('data-id');
        const selected = CONFIGURATOR_DATA.wheels.find(w => w.id === wheelId);
        if (selected) {
          AppState.activeConfig.wheel = selected;
          renderConfigWheels();
          updateConfigSummary();
        }
      });
    });
  }

  function renderConfigInteriors() {
    if (!DOM.configInteriorsContainer) return;
    DOM.configInteriorsContainer.innerHTML = CONFIGURATOR_DATA.interiors.map(i => `
      <button class="config-option-btn ${i.id === AppState.activeConfig.interior.id ? 'active' : ''}" data-id="${i.id}">
        <div class="config-option-info">
          <span class="config-option-name">${i.name}</span>
          <span class="config-option-desc">${i.desc}</span>
        </div>
        <span class="config-option-price">${i.price === 0 ? 'Standard' : '+$' + i.price.toLocaleString()}</span>
      </button>
    `).join('');

    DOM.configInteriorsContainer.querySelectorAll('.config-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const intId = btn.getAttribute('data-id');
        const selected = CONFIGURATOR_DATA.interiors.find(i => i.id === intId);
        if (selected) {
          AppState.activeConfig.interior = selected;
          renderConfigInteriors();
          updateConfigSummary();
        }
      });
    });
  }

  function renderConfigPackages() {
    if (!DOM.configPackagesContainer) return;
    DOM.configPackagesContainer.innerHTML = CONFIGURATOR_DATA.packages.map(pkg => {
      const isSelected = AppState.activeConfig.packages.includes(pkg.id);
      return `
        <button class="config-option-btn ${isSelected ? 'active' : ''}" data-id="${pkg.id}">
          <div class="config-option-info">
            <span class="config-option-name">${pkg.name}</span>
            <span class="config-option-desc">${pkg.desc}</span>
          </div>
          <span class="config-option-price">+${pkg.price.toLocaleString()}</span>
        </button>
      `;
    }).join('');

    DOM.configPackagesContainer.querySelectorAll('.config-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pkgId = btn.getAttribute('data-id');
        const idx = AppState.activeConfig.packages.indexOf(pkgId);
        if (idx > -1) {
          AppState.activeConfig.packages.splice(idx, 1);
        } else {
          AppState.activeConfig.packages.push(pkgId);
        }
        renderConfigPackages();
        updateConfigSummary();
      });
    });
  }

  function updateConfigSummary() {
    const base = CONFIGURATOR_DATA.baseCar.basePrice;
    const colPrice = AppState.activeConfig.color.price || 0;
    const wheelPrice = AppState.activeConfig.wheel.price || 0;
    const intPrice = AppState.activeConfig.interior.price || 0;
    const pkgPrice = AppState.activeConfig.packages.reduce((sum, pkgId) => {
      const p = CONFIGURATOR_DATA.packages.find(pkg => pkg.id === pkgId);
      return sum + (p ? p.price : 0);
    }, 0);

    const total = base + colPrice + wheelPrice + intPrice + pkgPrice;
    if (DOM.configTotalPrice) {
      animateNumberChange(DOM.configTotalPrice, total);
    }
  }

  function animateNumberChange(element, targetVal) {
    const current = parseInt(element.textContent.replace(/[^0-9]/g, '') || '0', 10);
    const diff = targetVal - current;
    const steps = 15;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const val = Math.round(current + (diff * (step / steps)));
      element.textContent = `$${val.toLocaleString()}`;
      if (step >= steps) {
        clearInterval(interval);
        element.textContent = `$${targetVal.toLocaleString()}`;
      }
    }, 20);
  }

  /* ==========================================================================
     FINANCING CALCULATOR
     ========================================================================== */
  function initFinancingCalculator() {
    function calculateFinancing() {
      const price = parseFloat(DOM.finVehiclePrice.value);
      const down = parseFloat(DOM.finDownPayment.value);
      const rate = parseFloat(DOM.finInterestRate.value);
      const months = AppState.finance.term;

      DOM.finPriceVal.textContent = `$${price.toLocaleString()}`;
      DOM.finDownVal.textContent = `$${down.toLocaleString()}`;
      DOM.finRateVal.textContent = `${rate.toFixed(1)}%`;

      const loanPrincipal = Math.max(price - down, 0);
      const monthlyRate = (rate / 100) / 12;

      let monthlyPayment = 0;
      if (loanPrincipal > 0) {
        if (monthlyRate > 0) {
          monthlyPayment = (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
        } else {
          monthlyPayment = loanPrincipal / months;
        }
      }

      const totalRepaid = monthlyPayment * months;
      const totalInterest = Math.max(totalRepaid - loanPrincipal, 0);
      const totalCost = down + totalRepaid;

      if (DOM.finMonthlyPayment) {
        DOM.finMonthlyPayment.textContent = `$${Math.round(monthlyPayment).toLocaleString()}`;
      }
      if (DOM.finLoanAmount) {
        DOM.finLoanAmount.textContent = `$${Math.round(loanPrincipal).toLocaleString()}`;
      }
      if (DOM.finTotalInterest) {
        DOM.finTotalInterest.textContent = `$${Math.round(totalInterest).toLocaleString()}`;
      }
      if (DOM.finTotalCost) {
        DOM.finTotalCost.textContent = `$${Math.round(totalCost).toLocaleString()}`;
      }
    }

    DOM.finVehiclePrice?.addEventListener('input', calculateFinancing);
    DOM.finDownPayment?.addEventListener('input', calculateFinancing);
    DOM.finInterestRate?.addEventListener('input', calculateFinancing);

    DOM.termBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        DOM.termBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        AppState.finance.term = parseInt(btn.getAttribute('data-term'), 10);
        calculateFinancing();
      });
    });

    DOM.finGetOptionsBtn?.addEventListener('click', () => {
      showToast('Financing pre-approval request submitted! An advisor will reach out.', '✓');
    });

    calculateFinancing();
  }

  /* ==========================================================================
     WISHLIST SYSTEM
     ========================================================================== */
  function initWishlist() {
    updateWishlistBadges();

    DOM.navWishlistBtn?.addEventListener('click', () => {
      renderWishlistDrawer();
      DOM.wishlistDrawerBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    DOM.wishlistCloseBtn?.addEventListener('click', closeWishlistDrawer);
    DOM.wishlistDrawerBackdrop?.addEventListener('click', (e) => {
      if (e.target === DOM.wishlistDrawerBackdrop) closeWishlistDrawer();
    });
  }

  function closeWishlistDrawer() {
    DOM.wishlistDrawerBackdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }

  function toggleWishlist(carId) {
    const idx = AppState.wishlist.indexOf(carId);
    const car = AppState.vehicles.find(v => v.id === carId);
    if (idx > -1) {
      AppState.wishlist.splice(idx, 1);
      showToast(`Removed ${car?.model || 'vehicle'} from wishlist`);
    } else {
      AppState.wishlist.push(carId);
      showToast(`Saved ${car?.model || 'vehicle'} to wishlist`);
    }

    localStorage.setItem('volt_wishlist', JSON.stringify(AppState.wishlist));
    updateWishlistBadges();
    renderCarGrid();
    renderWishlistDrawer();
  }

  function updateWishlistBadges() {
    const count = AppState.wishlist.length;
    if (DOM.wishlistBadge) {
      DOM.wishlistBadge.textContent = count;
      DOM.wishlistBadge.setAttribute('data-count', count);
    }
  }

  function renderWishlistDrawer() {
    if (!DOM.wishlistItemsList) return;

    if (AppState.wishlist.length === 0) {
      DOM.wishlistItemsList.innerHTML = `
        <div style="text-align: center; padding: 40px 10px; color: var(--color-gray);">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 12px;">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <p>Your wishlist is currently empty.</p>
        </div>
      `;
      return;
    }

    const savedCars = AppState.vehicles.filter(c => AppState.wishlist.includes(c.id));
    DOM.wishlistItemsList.innerHTML = savedCars.map(car => `
      <div class="drawer-item-card">
        <img class="drawer-item-img" src="${car.image}" alt="${car.fullName}">
        <div class="drawer-item-details">
          <span class="drawer-item-name">${car.fullName}</span>
          <span class="drawer-item-price">$${car.price.toLocaleString()}</span>
          <button class="btn btn-cyan btn-sm" style="margin-top: 6px; padding: 4px 10px; font-size: 0.72rem;" onclick="window.voltBookCar('${car.id}')">
            Book Test Drive
          </button>
        </div>
        <button class="drawer-remove-btn" onclick="window.voltToggleWish('${car.id}')" title="Remove from wishlist">✕</button>
      </div>
    `).join('');
  }

  // Global helper for inline events
  window.voltToggleWish = (id) => toggleWishlist(id);
  window.voltBookCar = (id) => {
    closeWishlistDrawer();
    openTestDriveModal(id);
  };

  /* ==========================================================================
     COMPARE SYSTEM
     ========================================================================== */
  function initCompareSystem() {
    updateCompareBadges();
    renderCompareDock();

    DOM.navCompareBtn?.addEventListener('click', () => {
      if (AppState.compareList.length > 0) {
        openCompareModal();
      } else {
        showToast('Please add at least 1 vehicle to compare', 'ℹ');
      }
    });

    DOM.compareDockActionBtn?.addEventListener('click', openCompareModal);
    DOM.compareModalClose?.addEventListener('click', closeCompareModal);
    DOM.compareModal?.addEventListener('click', (e) => {
      if (e.target === DOM.compareModal) closeCompareModal();
    });
  }

  function toggleCompare(carId) {
    const idx = AppState.compareList.indexOf(carId);
    const car = AppState.vehicles.find(v => v.id === carId);

    if (idx > -1) {
      AppState.compareList.splice(idx, 1);
      showToast(`Removed ${car?.model || 'vehicle'} from comparison`);
    } else {
      if (AppState.compareList.length >= 4) {
        showToast('You can compare a maximum of 4 vehicles at once', '!');
        return;
      }
      AppState.compareList.push(carId);
      showToast(`Added ${car?.model || 'vehicle'} to comparison`);
    }

    localStorage.setItem('volt_compare', JSON.stringify(AppState.compareList));
    updateCompareBadges();
    renderCompareDock();
    renderCarGrid();
  }

  function updateCompareBadges() {
    const count = AppState.compareList.length;
    if (DOM.compareBadge) {
      DOM.compareBadge.textContent = count;
      DOM.compareBadge.setAttribute('data-count', count);
    }
  }

  function renderCompareDock() {
    if (!DOM.compareDock || !DOM.compareDockSlots) return;

    if (AppState.compareList.length > 0) {
      DOM.compareDock.classList.add('visible');
    } else {
      DOM.compareDock.classList.remove('visible');
    }

    const cars = AppState.vehicles.filter(c => AppState.compareList.includes(c.id));
    DOM.compareDockSlots.innerHTML = [0, 1, 2, 3].map(i => {
      const car = cars[i];
      if (car) {
        return `
          <div class="dock-slot" title="${car.fullName}">
            <img src="${car.image}" alt="${car.fullName}">
          </div>
        `;
      }
      return `<div class="dock-slot">+</div>`;
    }).join('');

    if (DOM.compareDockActionBtn) {
      DOM.compareDockActionBtn.textContent = `Compare (${AppState.compareList.length})`;
    }
  }

  function openCompareModal() {
    if (AppState.compareList.length === 0) return;
    const cars = AppState.vehicles.filter(c => AppState.compareList.includes(c.id));

    if (!DOM.compareTableBody) return;

    DOM.compareTableBody.innerHTML = `
      <tr>
        <th>Vehicle</th>
        ${cars.map(c => `
          <td class="compare-car-col-header">
            <img class="compare-car-header-img" src="${c.image}" alt="${c.fullName}">
            <h4 style="font-family: var(--font-heading); font-size: 1.1rem;">${c.fullName}</h4>
            <span style="font-family: var(--font-mono); color: var(--color-cyan); font-weight: 700;">$${c.price.toLocaleString()}</span>
          </td>
        `).join('')}
      </tr>
      <tr>
        <th>Horsepower</th>
        ${cars.map(c => `<td><strong>${c.hp} HP</strong></td>`).join('')}
      </tr>
      <tr>
        <th>0-100 km/h</th>
        ${cars.map(c => `<td>${c.acceleration}</td>`).join('')}
      </tr>
      <tr>
        <th>Top Speed</th>
        ${cars.map(c => `<td>${c.topSpeed}</td>`).join('')}
      </tr>
      <tr>
        <th>Fuel / Powertrain</th>
        ${cars.map(c => `<td>${c.fuelType} (${c.drivetrain})</td>`).join('')}
      </tr>
      <tr>
        <th>Transmission</th>
        ${cars.map(c => `<td>${c.transmission}</td>`).join('')}
      </tr>
      <tr>
        <th>Action</th>
        ${cars.map(c => `
          <td>
            <button class="btn btn-cyan btn-sm" onclick="window.voltBookCar('${c.id}')" style="width:100%;">
              Book Drive
            </button>
          </td>
        `).join('')}
      </tr>
    `;

    DOM.compareModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCompareModal() {
    DOM.compareModal?.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ==========================================================================
     TEST DRIVE BOOKING MODAL
     ========================================================================== */
  function initTestDriveModal() {
    // Populate vehicle select dropdown in test drive modal
    if (DOM.testDriveVehicleSelect) {
      DOM.testDriveVehicleSelect.innerHTML = AppState.vehicles.map(v => `
        <option value="${v.id}">${v.fullName} ($${v.price.toLocaleString()})</option>
      `).join('');
    }

    // Direct CTA triggers
    document.querySelectorAll('.trigger-test-drive').forEach(btn => {
      btn.addEventListener('click', () => {
        openTestDriveModal();
      });
    });

    DOM.testDriveModalClose?.addEventListener('click', closeTestDriveModal);
    DOM.testDriveModal?.addEventListener('click', (e) => {
      if (e.target === DOM.testDriveModal) closeTestDriveModal();
    });

    // Form Submission
    DOM.testDriveForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const carId = DOM.testDriveVehicleSelect.value;
      const car = AppState.vehicles.find(v => v.id === carId);
      const name = document.getElementById('driveName')?.value || 'Valued Client';
      const refId = 'VOLT-' + Math.floor(100000 + Math.random() * 900000);

      // Render Confirmation state
      DOM.testDriveForm.innerHTML = `
        <div style="text-align: center; padding: 40px 10px;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--color-cyan-dim); color: var(--color-cyan); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3 style="font-family: var(--font-heading); font-size: 1.8rem; margin-bottom: 8px;">Test Drive Confirmed</h3>
          <p style="color: var(--color-gray); font-size: 0.95rem; margin-bottom: 16px;">
            Thank you, <strong>${name}</strong>. Your appointment for the <strong>${car ? car.fullName : 'vehicle'}</strong> has been scheduled.
          </p>
          <div style="display: inline-block; padding: 10px 20px; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); font-family: var(--font-mono); color: var(--color-cyan); font-size: 0.95rem; margin-bottom: 24px;">
            Confirmation Reference: ${refId}
          </div>
          <p style="color: var(--color-gray-muted); font-size: 0.8rem; margin-bottom: 24px;">
            A showroom concierge will contact you via email with your bespoke itinerary.
          </p>
          <button type="button" class="btn btn-outline" id="finishTestDriveBtn">Close Window</button>
        </div>
      `;

      document.getElementById('finishTestDriveBtn')?.addEventListener('click', closeTestDriveModal);
      showToast(`Test drive appointment booked: ${refId}`);
    });
  }

  function openTestDriveModal(carId = null) {
    if (carId && DOM.testDriveVehicleSelect) {
      DOM.testDriveVehicleSelect.value = carId;
    }
    DOM.testDriveModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeTestDriveModal() {
    DOM.testDriveModal?.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ==========================================================================
     NEWSLETTER FORM
     ========================================================================== */
  function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      if (input && input.value) {
        showToast('Subscribed to VOLT MOTORS private editorial');
        input.value = '';
      }
    });
  }

  // Global ESC Key Listener for all modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCarDetailModal();
      closeCompareModal();
      closeWishlistDrawer();
      closeTestDriveModal();
    }
  });

  // Run app
  init();
});
