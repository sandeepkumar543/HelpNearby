// ==========================================================================
// HelpNearby - Hyperlocal Local Services & Community Support Platform
// ==========================================================================

const CATEGORIES = [
  "Home Repair",
  "Cleaning",
  "Electrical",
  "Plumbing",
  "Carpentry",
  "Gardening",
  "Painting",
  "Appliance Repair",
  "Household",
  "Personal Assistance",
  "Other Services"
];

const CATEGORY_DATA = {
  "Home Repair": {
    icon: "🏠",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600&q=80",
    desc: "Doors, masonry, civil fixtures & general fixes"
  },
  "Cleaning": {
    icon: "🧹",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    desc: "Deep house cleaning, kitchen, sofas & sanitization"
  },
  "Electrical": {
    icon: "💡",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80",
    desc: "Wiring, switchboards, inverters, lights & MCBs"
  },
  "Plumbing": {
    icon: "🔧",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80",
    desc: "Taps, leakages, water tanks, sanitary & blockages"
  },
  "Carpentry": {
    icon: "🪚",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
    desc: "Furniture repair, locks, wooden wardrobes & doors"
  },
  "Gardening": {
    icon: "🌱",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80",
    desc: "Lawn trimming, pruning, plantation & organic care"
  },
  "Painting": {
    icon: "🎨",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
    desc: "Interior, exterior, texture paint & waterproofing"
  },
  "Appliance Repair": {
    icon: "🛠️",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    desc: "AC, washing machines, RO, fridge & microwave"
  },
  "Household": {
    icon: "🛒",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
    desc: "Daily errands, packing, shifting & organizing"
  },
  "Personal Assistance": {
    icon: "🤝",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80",
    desc: "Elder support, grocery pickup & neighbor aid"
  },
  "Other Services": {
    icon: "📦",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    desc: "Custom local tasks & neighborhood assistance"
  }
};

const PRO_AVATARS = [
  "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
];

const sampleWorkers = [
  {
    id: "w1",
    name: "Amit Sharma",
    avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    skill: "Electrical",
    area: "Phagwara",
    experience: "5+ years",
    rate: 450,
    rating: 4.9,
    reviewsCount: 84,
    jobsDone: 142,
    responseTime: "15 mins",
    verified: true,
    badges: ["Top Rated", "Quick Responder"],
    bio: "Government certified master electrician with 7+ years of experience. Specialist in domestic rewiring, short-circuit troubleshooting, inverter/UPS installation, and smart switch fittings.",
    sample: true
  },
  {
    id: "w2",
    name: "Ravi Kumar",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
    skill: "Plumbing",
    area: "Phagwara",
    experience: "3-5 years",
    rate: 400,
    rating: 4.8,
    reviewsCount: 62,
    jobsDone: 98,
    responseTime: "20 mins",
    verified: true,
    badges: ["Top Rated", "Background Checked"],
    bio: "Prompt sanitary and plumbing solutions. Available for emergency tap leaks, pipe fitting, water tank connections, and severe blockage clearing using modern pressure tools.",
    sample: true
  },
  {
    id: "w3",
    name: "Neha Verma",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    skill: "Cleaning",
    area: "Jalandhar",
    experience: "3-5 years",
    rate: 350,
    rating: 5.0,
    reviewsCount: 95,
    jobsDone: 160,
    responseTime: "10 mins",
    verified: true,
    badges: ["Super Pro", "Eco-friendly Clean"],
    bio: "Professional home deep cleaning and organization. Uses medical-grade and pet-friendly disinfectants for kitchens, washrooms, tiles, and sofa fabric sanitization.",
    sample: true
  },
  {
    id: "w4",
    name: "Rahul Singh",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
    skill: "Carpentry",
    area: "Phagwara",
    experience: "5+ years",
    rate: 550,
    rating: 4.9,
    reviewsCount: 51,
    jobsDone: 88,
    responseTime: "30 mins",
    verified: true,
    badges: ["Master Craftsman"],
    bio: "Custom woodwork, hinge repairs, security lock installations, modular kitchen cabinets, and antique furniture restoration with factory-smooth finish.",
    sample: true
  },
  {
    id: "w5",
    name: "Priya Kumari",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    skill: "Gardening",
    area: "Ludhiana",
    experience: "3-5 years",
    rate: 350,
    rating: 4.8,
    reviewsCount: 43,
    jobsDone: 72,
    responseTime: "25 mins",
    verified: true,
    badges: ["Green Thumb", "Organic Expert"],
    bio: "Passionate urban gardener. Lawn mowing, hedge trimming, seasonal flower beds, organic pesticide spraying, and terrace vegetable garden setup.",
    sample: true
  },
  {
    id: "w6",
    name: "Mohit Gupta",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    skill: "Appliance Repair",
    area: "Jalandhar",
    experience: "5+ years",
    rate: 500,
    rating: 4.9,
    reviewsCount: 78,
    jobsDone: 135,
    responseTime: "15 mins",
    verified: true,
    badges: ["Brand Certified"],
    bio: "Specialized service technician for split AC servicing, washing machines, microwaves, refrigerators, RO water purifiers, and instant geysers.",
    sample: true
  },
  {
    id: "w7",
    name: "Sunita Devi",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
    skill: "Personal Assistance",
    area: "Phagwara",
    experience: "3-5 years",
    rate: 300,
    rating: 5.0,
    reviewsCount: 39,
    jobsDone: 64,
    responseTime: "20 mins",
    verified: true,
    badges: ["Community Favorite", "Elder Care"],
    bio: "Warm neighbor assistance, companion for elderly residents, medicine tracking, bank/grocery errand assistance, and cheerful domestic care.",
    sample: true
  },
  {
    id: "w8",
    name: "Vikram Patel",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    skill: "Painting",
    area: "Ludhiana",
    experience: "5+ years",
    rate: 600,
    rating: 4.9,
    reviewsCount: 47,
    jobsDone: 82,
    responseTime: "30 mins",
    verified: true,
    badges: ["Clean Finish Pro"],
    bio: "Interior & exterior wall painting, waterproof primer coating, texture designs, stencil patterns, and neat post-paint clean guarantee.",
    sample: true
  }
];

const sampleJobs = [
  {
    id: "j1",
    title: "Need Master Electrician for Main Distribution Board & Inverter",
    description: "Urgent power trip issue on first floor. Need a skilled electrician to inspect main MCB switchboard, balance load and reconnect inverter wiring securely.",
    category: "Electrical",
    area: "Phagwara",
    budgetType: "paid",
    budget: 850,
    poster: "Ankit Mahajan",
    posterAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    urgency: "Urgent",
    status: "open",
    applications: [],
    sample: true,
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
  },
  {
    id: "j2",
    title: "Seasonal Garden Trimming & Lawn Maintenance",
    description: "Front lawn grass needs neat trimming, flower bushes need deadheading, and compost needs to be applied around fruit trees. All gardening tools provided.",
    category: "Gardening",
    area: "Jalandhar",
    budgetType: "paid",
    budget: 500,
    poster: "Simran Kaur",
    posterAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    urgency: "This Weekend",
    status: "open",
    applications: [],
    sample: true,
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString()
  },
  {
    id: "j3",
    title: "Weekly Grocery & Pharmacy Pickup for Elderly Resident",
    description: "My 78-year-old grandmother lives near Model Town. Looking for a kind local neighbor or volunteer who can help pick up weekly medicines and fresh vegetables.",
    category: "Personal Assistance",
    area: "Phagwara",
    budgetType: "free",
    budget: 0,
    poster: "Community Volunteer Network",
    posterAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    urgency: "Flexible",
    status: "open",
    applications: [],
    sample: true,
    createdAt: new Date(Date.now() - 3600000 * 8).toISOString()
  },
  {
    id: "j4",
    title: "Dining Table Leg Repair & Bedroom Door Latch Fix",
    description: "Solid wood 6-seater dining table has a wobbly corner joint. Also have two interior teak door handles that need realignment and screws tightened.",
    category: "Carpentry",
    area: "Ludhiana",
    budgetType: "paid",
    budget: 950,
    poster: "Karan Johal",
    posterAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
    urgency: "Today",
    status: "open",
    applications: [],
    sample: true,
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString()
  },
  {
    id: "j5",
    title: "Senior Neighbor Needs Help Moving Books to First Floor",
    description: "Retired professor moving small carton boxes of books from car trunk to study room upstairs. About 30 mins task. Free community assistance greatly appreciated!",
    category: "Household",
    area: "Jalandhar",
    budgetType: "free",
    budget: 0,
    poster: "Gurpreet Singh",
    posterAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    urgency: "Tomorrow Morning",
    status: "open",
    applications: [],
    sample: true,
    createdAt: new Date(Date.now() - 3600000 * 20).toISOString()
  },
  {
    id: "j6",
    title: "Emergency Bathroom Drain Unclogging",
    description: "Master bathroom shower drain is running very slowly and causing water accumulation. Need a plumber with proper snake auger or pressure pump.",
    category: "Plumbing",
    area: "Phagwara",
    budgetType: "paid",
    budget: 600,
    poster: "Pooja Batra",
    posterAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    urgency: "Immediate",
    status: "open",
    applications: [],
    sample: true,
    createdAt: new Date(Date.now() - 3600000 * 3).toISOString()
  }
];

// ==========================================================================
// LOCAL STORAGE & SMART MIGRATION
// ==========================================================================

function loadData(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch (error) {
    return fallback;
  }
}

// Ensure existing users get the rich realistic photo profiles
let workers = loadData("hn_workers", null);
if (!workers || !workers.length || !workers[0].avatar) {
  workers = sampleWorkers;
  localStorage.setItem("hn_workers", JSON.stringify(workers));
}

let jobs = loadData("hn_jobs", null);
if (!jobs || !jobs.length || !jobs[0].posterAvatar) {
  jobs = sampleJobs;
  localStorage.setItem("hn_jobs", JSON.stringify(jobs));
}

let currentUser = loadData("hn_user", null);

function saveData() {
  localStorage.setItem("hn_workers", JSON.stringify(workers));
  localStorage.setItem("hn_jobs", JSON.stringify(jobs));
  localStorage.setItem("hn_user", JSON.stringify(currentUser));
}

function makeId(prefix) {
  return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function formatMoney(amount) {
  return "₹" + Number(amount || 0).toLocaleString("en-IN");
}

function initials(name) {
  return String(name || "?")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0].toUpperCase())
    .join("");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// ==========================================================================
// PAGE NAVIGATION
// ==========================================================================

function navigate(page) {
  document.querySelectorAll(".page").forEach(section => {
    section.classList.toggle("active", section.id === page);
  });

  document.querySelectorAll(".nav-link").forEach(button => {
    button.classList.toggle("active", button.dataset.page === page);
  });

  const menuToggle = document.getElementById("menuToggle");
  if (menuToggle) menuToggle.textContent = "☰";
  const navLinks = document.querySelector(".nav-links");
  if (navLinks) navLinks.classList.remove("open");

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (page === "home") renderHome();
  if (page === "workers") renderWorkers();
  if (page === "jobs") renderJobs();
  if (page === "community") renderCommunity();
  if (page === "bookings") renderBookings();
}

document.addEventListener("click", event => {
  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    event.preventDefault();
    const targetPage = pageButton.dataset.page;
    const cat = pageButton.dataset.cat;
    navigate(targetPage);

    if (cat && targetPage === "workers") {
      const catSelect = document.getElementById("workerCategory");
      if (catSelect) {
        catSelect.value = cat;
        renderWorkers();
      }
    }
  }
});

// ==========================================================================
// MODALS LOGIC
// ==========================================================================

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove("hidden");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("hidden");
}

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    closeModal(button.dataset.close);
  });
});

document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) {
      closeModal(backdrop.id);
    }
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal-backdrop").forEach(modal => {
      modal.classList.add("hidden");
    });
  }
});

// ==========================================================================
// CATEGORY OPTIONS POPULATION
// ==========================================================================

function fillCategoryOptions() {
  const options = CATEGORIES.map(category =>
    `<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`
  ).join("");

  ["postCategory", "workerSkillInput"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = options;
  });

  ["workerCategory", "jobCategory"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      // keep the first "All categories" option
      const firstOpt = el.firstElementChild ? el.firstElementChild.outerHTML : '<option value="">All Categories</option>';
      el.innerHTML = firstOpt + options;
    }
  });
}

// ==========================================================================
// AVATAR PRESET PICKER
// ==========================================================================

function initAvatarPicker() {
  const picker = document.getElementById("avatarPicker");
  const hiddenInput = document.getElementById("workerAvatarInput");
  if (!picker || !hiddenInput) return;

  hiddenInput.value = PRO_AVATARS[0];

  picker.innerHTML = PRO_AVATARS.map((url, i) => `
    <img 
      src="${url}" 
      class="avatar-choice ${i === 0 ? "selected" : ""}" 
      data-avatar="${url}" 
      alt="Pro Avatar ${i + 1}"
    >
  `).join("");

  picker.querySelectorAll(".avatar-choice").forEach(img => {
    img.addEventListener("click", () => {
      picker.querySelectorAll(".avatar-choice").forEach(item => item.classList.remove("selected"));
      img.classList.add("selected");
      hiddenInput.value = img.dataset.avatar;
    });
  });
}

// ==========================================================================
// HOME PAGE RENDERING
// ==========================================================================

function renderHome() {
  const categoryContainer = document.getElementById("homeCategories");
  if (categoryContainer) {
    categoryContainer.innerHTML = CATEGORIES.slice(0, 6).map(category => {
      const catMeta = CATEGORY_DATA[category] || {
        icon: "🔧",
        image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600&q=80",
        desc: "Trusted neighborhood service providers"
      };

      return `
        <div class="photo-cat-card" data-category="${escapeHTML(category)}">
          <img src="${catMeta.image}" alt="${escapeHTML(category)}" class="photo-cat-bg" loading="lazy">
          <div class="photo-cat-overlay">
            <div class="photo-cat-icon-badge">${catMeta.icon}</div>
            <div class="photo-cat-title">${escapeHTML(category)}</div>
            <div class="photo-cat-desc">${escapeHTML(catMeta.desc)}</div>
          </div>
        </div>
      `;
    }).join("");

    categoryContainer.querySelectorAll("[data-category]").forEach(button => {
      button.addEventListener("click", () => {
        navigate("workers");
        const catSelect = document.getElementById("workerCategory");
        if (catSelect) {
          catSelect.value = button.dataset.category;
        }
        renderWorkers();
      });
    });
  }

  const homeWorkers = document.getElementById("homeWorkers");
  if (homeWorkers) {
    homeWorkers.innerHTML = workers.slice(0, 3).map(workerCard).join("");
  }
}

// ==========================================================================
// WORKER CARD TEMPLATE
// ==========================================================================

function workerCard(worker) {
  const avatarUrl = worker.avatar || `https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=400&q=80`;
  const coverUrl = worker.cover || (CATEGORY_DATA[worker.skill]?.image || "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80");
  const rating = Number(worker.rating || 4.9).toFixed(1);
  const reviews = worker.reviewsCount || Math.floor(25 + Math.random() * 60);
  const jobsDone = worker.jobsDone || Math.floor(50 + Math.random() * 100);
  const responseTime = worker.responseTime || "15 mins";
  const badgeText = (worker.badges && worker.badges[0]) || "Top Rated Pro";

  return `
    <article class="worker-card-modern">
      <div class="worker-cover-banner">
        <img src="${coverUrl}" alt="${escapeHTML(worker.skill)}" class="worker-cover-img" loading="lazy">
        <div class="worker-badges-floating">
          <span class="badge-top-pro">★ ${escapeHTML(badgeText)}</span>
        </div>
      </div>

      <div class="worker-card-body">
        <div class="worker-avatar-row">
          <div class="worker-avatar-wrapper">
            <img 
              src="${avatarUrl}" 
              alt="${escapeHTML(worker.name)}" 
              class="worker-real-avatar" 
              loading="lazy"
              onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=400&q=80'"
            >
            <div class="verified-pro-shield" title="Verified Background & Identity">✓</div>
          </div>
          <div class="worker-rate-tag">
            <strong>${worker.rate ? formatMoney(worker.rate) : "Negotiable"}</strong>
            <small>starting / visit</small>
          </div>
        </div>

        <div class="worker-identity">
          <h3>${escapeHTML(worker.name)}</h3>
          <div class="worker-trade-title">${escapeHTML(worker.skill)} Specialist</div>
        </div>

        <div class="worker-rating-line">
          <span class="star-icons">★★★★★</span>
          <span class="score-bold">${rating}</span>
          <span class="review-text">(${reviews} reviews · ${jobsDone} jobs)</span>
        </div>

        <p class="worker-summary">${escapeHTML(worker.bio || "Trusted local service provider ready to assist with quality workmanship.")}</p>

        <div class="worker-pills-row">
          <span class="worker-pill">📍 ${escapeHTML(worker.area)}</span>
          <span class="worker-pill">⚡ ${escapeHTML(responseTime)}</span>
          <span class="worker-pill">🛡️ ${escapeHTML(worker.experience || "3-5 years")}</span>
        </div>

        <div class="worker-actions-row">
          <button class="btn btn-outline" data-worker="${escapeHTML(worker.id)}">
            View Profile
          </button>
          <button class="btn btn-primary" data-book-direct="${escapeHTML(worker.id)}">
            Book Service
          </button>
        </div>
      </div>
    </article>
  `;
}

// ==========================================================================
// WORKERS DIRECTORY PAGE LOGIC
// ==========================================================================

function renderWorkers() {
  const searchInput = document.getElementById("workerSearch");
  const areaInput = document.getElementById("workerLocation");
  const catSelect = document.getElementById("workerCategory");
  const sortSelect = document.getElementById("workerSort");

  const search = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const area = areaInput ? areaInput.value.trim().toLowerCase() : "";
  const category = catSelect ? catSelect.value : "";
  const sortBy = sortSelect ? sortSelect.value : "rating";

  let filtered = workers.filter(worker => {
    const matchesSearch =
      !search ||
      `${worker.name} ${worker.skill} ${worker.bio || ""}`.toLowerCase().includes(search);

    const matchesArea =
      !area || worker.area.toLowerCase().includes(area);

    const matchesCategory =
      !category || worker.skill === category;

    return matchesSearch && matchesArea && matchesCategory;
  });

  // Sorting
  if (sortBy === "rating") {
    filtered.sort((a, b) => (b.rating || 4.8) - (a.rating || 4.8));
  } else if (sortBy === "jobs") {
    filtered.sort((a, b) => (b.jobsDone || 0) - (a.jobsDone || 0));
  } else if (sortBy === "priceAsc") {
    filtered.sort((a, b) => (a.rate || 0) - (b.rate || 0));
  } else if (sortBy === "priceDesc") {
    filtered.sort((a, b) => (b.rate || 0) - (a.rate || 0));
  }

  const allWorkers = document.getElementById("allWorkers");
  if (allWorkers) {
    allWorkers.innerHTML = filtered.map(workerCard).join("");
  }

  const countBadge = document.getElementById("workerCount");
  if (countBadge) {
    countBadge.textContent = `${filtered.length} Verified Pro(s) Available`;
  }

  const emptyState = document.getElementById("workerEmpty");
  if (emptyState) {
    emptyState.classList.toggle("hidden", filtered.length > 0);
  }
}

// Filter listeners
const workerFilterBtn = document.getElementById("workerFilterBtn");
if (workerFilterBtn) workerFilterBtn.addEventListener("click", renderWorkers);

const workerSort = document.getElementById("workerSort");
if (workerSort) workerSort.addEventListener("change", renderWorkers);

const workerCategory = document.getElementById("workerCategory");
if (workerCategory) workerCategory.addEventListener("change", renderWorkers);

["workerSearch", "workerLocation"].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("keydown", event => {
      if (event.key === "Enter") renderWorkers();
    });
  }
});

// Area Shortcut pills
document.querySelectorAll(".area-pill").forEach(pill => {
  pill.addEventListener("click", () => {
    document.querySelectorAll(".area-pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");

    const areaInput = document.getElementById("workerLocation");
    if (areaInput) {
      areaInput.value = pill.dataset.area;
      renderWorkers();
    }
  });
});

const resetWorkerFiltersBtn = document.getElementById("resetWorkerFiltersBtn");
if (resetWorkerFiltersBtn) {
  resetWorkerFiltersBtn.addEventListener("click", () => {
    const searchInput = document.getElementById("workerSearch");
    const areaInput = document.getElementById("workerLocation");
    const catSelect = document.getElementById("workerCategory");
    if (searchInput) searchInput.value = "";
    if (areaInput) areaInput.value = "";
    if (catSelect) catSelect.value = "";
    renderWorkers();
  });
}

// Hero Search Card & Tags
const heroSearchBtn = document.getElementById("heroSearchBtn");
if (heroSearchBtn) {
  heroSearchBtn.addEventListener("click", () => {
    const heroSearchInput = document.getElementById("heroSearchInput");
    const heroLocationSelect = document.getElementById("heroLocationSelect");

    navigate("workers");

    const workerSearch = document.getElementById("workerSearch");
    const workerLocation = document.getElementById("workerLocation");

    if (workerSearch && heroSearchInput) {
      workerSearch.value = heroSearchInput.value;
    }
    if (workerLocation && heroLocationSelect) {
      workerLocation.value = heroLocationSelect.value;
    }

    renderWorkers();
  });
}

document.querySelectorAll(".quick-tag, .hero-tag").forEach(tag => {
  tag.addEventListener("click", () => {
    navigate("workers");
    const catSelect = document.getElementById("workerCategory");
    if (catSelect) {
      catSelect.value = tag.dataset.tag;
    }
    renderWorkers();
  });
});

// ==========================================================================
// WORKER DETAIL MODAL
// ==========================================================================

document.addEventListener("click", event => {
  const profileBtn = event.target.closest("[data-worker]");
  const bookBtn = event.target.closest("[data-book-direct]");

  if (profileBtn) {
    const worker = workers.find(item => item.id === profileBtn.dataset.worker);
    if (!worker) return;

    const avatarUrl = worker.avatar || `https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=400&q=80`;
    const coverUrl = worker.cover || (CATEGORY_DATA[worker.skill]?.image || "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80");
    const rating = Number(worker.rating || 4.9).toFixed(1);
    const reviews = worker.reviewsCount || 84;
    const jobsDone = worker.jobsDone || 142;
    const responseTime = worker.responseTime || "15 mins";

    const detailContainer = document.getElementById("workerDetail");
    if (detailContainer) {
      detailContainer.innerHTML = `
        <div class="detail-cover">
          <img src="${coverUrl}" alt="${escapeHTML(worker.skill)}">
        </div>
        <div class="detail-content">
          <div class="detail-avatar-row">
            <div class="detail-avatar-wrapper">
              <img src="${avatarUrl}" alt="${escapeHTML(worker.name)}" class="detail-avatar-img">
              <div class="detail-verified-badge" title="Identity Verified">✓</div>
            </div>
            <div class="worker-rate-tag">
              <strong>${worker.rate ? formatMoney(worker.rate) : "Negotiable"}</strong>
              <small>starting service fee</small>
            </div>
          </div>

          <h2>${escapeHTML(worker.name)}</h2>
          <div class="worker-trade-title" style="font-size: 16px;">
            ${escapeHTML(worker.skill)} Specialist · 📍 ${escapeHTML(worker.area)}
          </div>

          <div class="worker-rating-line" style="margin: 8px 0 16px;">
            <span class="star-icons">★★★★★</span>
            <span class="score-bold">${rating}</span>
            <span class="review-text">(${reviews} verified reviews)</span>
          </div>

          <div class="detail-quick-stats">
            <div>
              <strong>${rating} ★</strong>
              <small>Rating</small>
            </div>
            <div>
              <strong>${jobsDone}+</strong>
              <small>Jobs Completed</small>
            </div>
            <div>
              <strong>${escapeHTML(responseTime)}</strong>
              <small>Response Time</small>
            </div>
            <div>
              <strong>${escapeHTML(worker.experience || "3-5 years")}</strong>
              <small>Experience</small>
            </div>
          </div>

          <h4 style="margin-top: 18px; margin-bottom: 6px;">About Professional Services</h4>
          <p style="color: var(--muted); font-size: 14px; line-height: 1.6;">
            ${escapeHTML(worker.bio || "Experienced neighborhood professional dedicated to quality craftsmanship, honest pricing, and prompt on-site attendance.")}
          </p>

          <div style="background: var(--primary-light); border: 1px solid rgba(13, 148, 136, 0.2); border-radius: 12px; padding: 14px 18px; margin: 20px 0;">
            <strong style="color: var(--primary-dark); display: block; font-size: 13.5px;">✓ HelpNearby Safety & Quality Guarantee</strong>
            <small style="color: var(--ink-secondary); font-size: 12.5px;">
              Government ID verified · Background screened · Fair price dispute resolution protection
            </small>
          </div>

          <button class="btn btn-primary btn-full btn-large" id="modalBookWorkerBtn">
            Request Service from ${escapeHTML(worker.name)}
          </button>
        </div>
      `;

      const modalBookBtn = document.getElementById("modalBookWorkerBtn");
      if (modalBookBtn) {
        modalBookBtn.addEventListener("click", () => {
          closeModal("detailModal");
          const postCat = document.getElementById("postCategory");
          if (postCat) postCat.value = worker.skill;
          const jobTitle = document.getElementById("jobTitleInput");
          if (jobTitle) jobTitle.value = `Need ${worker.skill} service for home`;
          openJobModal("paid");
        });
      }

      openModal("detailModal");
    }
  }

  if (bookBtn) {
    const worker = workers.find(item => item.id === bookBtn.dataset.bookDirect);
    if (!worker) return;

    const postCat = document.getElementById("postCategory");
    if (postCat) postCat.value = worker.skill;
    const jobTitle = document.getElementById("jobTitleInput");
    if (jobTitle) jobTitle.value = `Need ${worker.skill} service (${worker.name})`;
    openJobModal("paid");
  }
});

// ==========================================================================
// WORKER REGISTRATION (CREATE PRO PROFILE)
// ==========================================================================

function openWorkerForm() {
  initAvatarPicker();
  openModal("workerModal");
}

const profileBtn = document.getElementById("profileBtn");
if (profileBtn) profileBtn.addEventListener("click", openWorkerForm);

const workerForm = document.getElementById("workerForm");
if (workerForm) {
  workerForm.addEventListener("submit", event => {
    event.preventDefault();

    const avatar = document.getElementById("workerAvatarInput")?.value || PRO_AVATARS[0];
    const skill = document.getElementById("workerSkillInput").value;
    const cover = CATEGORY_DATA[skill]?.image || "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80";

    const worker = {
      id: makeId("w"),
      name: document.getElementById("workerNameInput").value.trim(),
      avatar: avatar,
      cover: cover,
      skill: skill,
      area: document.getElementById("workerAreaInput").value.trim(),
      experience: document.getElementById("workerExperienceInput").value,
      rate: Number(document.getElementById("workerRateInput").value) || 0,
      rating: 5.0,
      reviewsCount: 1,
      jobsDone: 0,
      responseTime: "15 mins",
      verified: true,
      badges: ["Newly Verified Pro"],
      bio: document.getElementById("workerBioInput").value.trim(),
      sample: false
    };

    if (!worker.name || !worker.area) {
      showToast("Please complete the required fields.");
      return;
    }

    workers.unshift(worker);

    currentUser = {
      name: worker.name,
      workerId: worker.id
    };

    saveData();
    event.target.reset();
    closeModal("workerModal");
    renderHome();
    renderWorkers();
    showToast("🎉 Your Verified Pro Profile is live on HelpNearby!");
  });
}

// ==========================================================================
// JOB POSTING MODAL & FLOW
// ==========================================================================

function openJobModal(type = "paid") {
  const budgetType = document.getElementById("budgetType");
  if (budgetType) {
    budgetType.value = type;
  }
  updateBudgetField();
  openModal("jobModal");
}

const postJobNav = document.getElementById("postJobNav");
if (postJobNav) postJobNav.addEventListener("click", () => openJobModal("paid"));

const heroPostBtn = document.getElementById("heroPostBtn");
if (heroPostBtn) heroPostBtn.addEventListener("click", () => openJobModal("paid"));

const needHelpBtn = document.getElementById("needHelpBtn");
if (needHelpBtn) needHelpBtn.addEventListener("click", () => openJobModal("paid"));

const jobsPostBtn = document.getElementById("jobsPostBtn");
if (jobsPostBtn) jobsPostBtn.addEventListener("click", () => openJobModal("paid"));

const communityPostBtn = document.getElementById("communityPostBtn");
if (communityPostBtn) communityPostBtn.addEventListener("click", () => openJobModal("free"));

const communityBannerPostBtn = document.getElementById("communityBannerPostBtn");
if (communityBannerPostBtn) communityBannerPostBtn.addEventListener("click", () => openJobModal("free"));

const firstCommunityPostBtn = document.getElementById("firstCommunityPostBtn");
if (firstCommunityPostBtn) firstCommunityPostBtn.addEventListener("click", () => openJobModal("free"));

const budgetType = document.getElementById("budgetType");
if (budgetType) {
  budgetType.addEventListener("change", updateBudgetField);
}

function updateBudgetField() {
  const isFree = document.getElementById("budgetType").value === "free";
  const budgetField = document.getElementById("budgetField");
  if (budgetField) {
    budgetField.classList.toggle("hidden", isFree);
  }
}

const jobForm = document.getElementById("jobForm");
if (jobForm) {
  jobForm.addEventListener("submit", event => {
    event.preventDefault();

    const type = document.getElementById("budgetType").value;
    const poster = document.getElementById("posterName").value.trim();

    // Default poster avatars
    const randomAvatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80";

    const job = {
      id: makeId("j"),
      title: document.getElementById("jobTitleInput").value.trim(),
      description: document.getElementById("jobDescriptionInput").value.trim(),
      category: document.getElementById("postCategory").value,
      area: document.getElementById("postLocation").value.trim(),
      budgetType: type,
      budget: type === "free"
        ? 0
        : Number(document.getElementById("budgetAmount").value) || 0,
      poster: poster,
      posterAvatar: randomAvatar,
      urgency: "Open",
      ownerId: currentUser?.id || null,
      status: "open",
      applications: [],
      sample: false,
      createdAt: new Date().toISOString()
    };

    if (!job.title || !job.description || !job.poster || !job.area) {
      showToast("Please fill in all required fields.");
      return;
    }

    if (type === "paid" && job.budget <= 0) {
      showToast("Please enter a realistic budget for paid work.");
      return;
    }

    jobs.unshift(job);
    saveData();

    event.target.reset();
    closeModal("jobModal");
    renderHome();
    renderJobs();
    renderCommunity();
    showToast("🎉 Your request has been published to nearby neighbors!");
  });
}

// ==========================================================================
// JOBS & COMMUNITY TEMPLATE & RENDERING
// ==========================================================================

function jobCard(job) {
  const isFree = job.budgetType === "free";
  const posterAvatar = job.posterAvatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80";
  const urgency = job.urgency || "Open";

  return `
    <article class="job-card-modern">
      <div class="job-card-header">
        <div class="job-title-row">
          <img src="${posterAvatar}" alt="${escapeHTML(job.poster)}" class="job-poster-avatar" loading="lazy">
          <div>
            <h3>${escapeHTML(job.title)}</h3>
            <div style="font-size: 12.5px; color: var(--muted); margin-top: 2px;">
              Posted by <strong>${escapeHTML(job.poster)}</strong> · 📍 ${escapeHTML(job.area)}
            </div>
          </div>
        </div>
        <span class="job-type-pill ${isFree ? "free" : "paid"}">
          ${isFree ? "❤️ Free Volunteer Request" : "💼 Paid Work"}
        </span>
      </div>

      <p class="job-description">${escapeHTML(job.description)}</p>

      <div class="job-meta-row">
        <span class="job-meta-tag">🏷️ ${escapeHTML(job.category)}</span>
        <span class="job-meta-tag">⚡ ${escapeHTML(urgency)}</span>
        <span class="job-meta-tag">👥 ${job.applications.length} Applicant(s)</span>
        <span class="job-meta-tag">🟢 Status: ${escapeHTML(job.status)}</span>
      </div>

      <div class="job-footer-row">
        <div class="job-budget-box ${isFree ? "free-box" : ""}">
          ${isFree 
            ? "<strong>Volunteer Helping Hand</strong>" 
            : `<strong>${formatMoney(job.budget)}</strong> <small style='color: var(--muted);'>fixed budget</small>`
          }
        </div>
        <button
          class="btn btn-primary"
          data-apply="${escapeHTML(job.id)}"
          ${job.status !== "open" ? "disabled" : ""}
        >
          ${job.status === "open" ? (isFree ? "Offer Free Help" : "Apply for Job") : "Closed"}
        </button>
      </div>
    </article>
  `;
}

function renderJobs() {
  const search = document.getElementById("jobSearch")?.value.trim().toLowerCase() || "";
  const area = document.getElementById("jobLocation")?.value.trim().toLowerCase() || "";
  const category = document.getElementById("jobCategory")?.value || "";

  const filtered = jobs.filter(job => {
    const matchesSearch =
      !search ||
      `${job.title} ${job.description} ${job.category}`.toLowerCase().includes(search);

    const matchesArea = !area || job.area.toLowerCase().includes(area);
    const matchesCategory = !category || job.category === category;

    return matchesSearch && matchesArea && matchesCategory &&
      job.budgetType === "paid" && job.status === "open";
  });

  const allJobs = document.getElementById("allJobs");
  if (allJobs) {
    allJobs.innerHTML = filtered.map(jobCard).join("");
  }

  const jobCount = document.getElementById("jobCount");
  if (jobCount) {
    jobCount.textContent = `${filtered.length} Open Job(s)`;
  }

  const jobEmpty = document.getElementById("jobEmpty");
  if (jobEmpty) {
    jobEmpty.classList.toggle("hidden", filtered.length > 0);
  }
}

const jobFilterBtn = document.getElementById("jobFilterBtn");
if (jobFilterBtn) jobFilterBtn.addEventListener("click", renderJobs);

const jobCategory = document.getElementById("jobCategory");
if (jobCategory) jobCategory.addEventListener("change", renderJobs);

["jobSearch", "jobLocation"].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("keydown", event => {
      if (event.key === "Enter") renderJobs();
    });
  }
});

function renderCommunity() {
  const freeJobs = jobs.filter(job =>
    job.budgetType === "free" && job.status === "open"
  );

  const communityJobs = document.getElementById("communityJobs");
  if (communityJobs) {
    communityJobs.innerHTML = freeJobs.map(jobCard).join("");
  }

  const communityCount = document.getElementById("communityCount");
  if (communityCount) {
    communityCount.textContent = `${freeJobs.length} Volunteer Request(s)`;
  }

  const communityEmpty = document.getElementById("communityEmpty");
  if (communityEmpty) {
    communityEmpty.classList.toggle("hidden", freeJobs.length > 0);
  }
}

// ==========================================================================
// APPLY FOR A JOB FLOW
// ==========================================================================

document.addEventListener("click", event => {
  const button = event.target.closest("[data-apply]");
  if (!button) return;

  const job = jobs.find(item => item.id === button.dataset.apply);
  if (!job || job.status !== "open") return;

  document.getElementById("applyJobId").value = job.id;

  if (currentUser?.name) {
    const applicantName = document.getElementById("applicantName");
    if (applicantName) applicantName.value = currentUser.name;
  }

  if (currentUser?.workerId) {
    const worker = workers.find(item => item.id === currentUser.workerId);
    if (worker) {
      const applicantSkill = document.getElementById("applicantSkill");
      if (applicantSkill) applicantSkill.value = worker.skill;
    }
  }

  openModal("applyModal");
});

const applyForm = document.getElementById("applyForm");
if (applyForm) {
  applyForm.addEventListener("submit", event => {
    event.preventDefault();

    const jobId = document.getElementById("applyJobId").value;
    const job = jobs.find(item => item.id === jobId);

    if (!job || job.status !== "open") {
      showToast("This task is no longer available.");
      closeModal("applyModal");
      return;
    }

    const name = document.getElementById("applicantName").value.trim();
    const skill = document.getElementById("applicantSkill").value.trim();
    const message = document.getElementById("applicantMessage").value.trim();

    if (!name || !skill || !message) {
      showToast("Please complete all application fields.");
      return;
    }

    const alreadyApplied = job.applications.some(app =>
      app.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyApplied) {
      showToast("You have already sent an application for this task.");
      return;
    }

    job.applications.push({
      id: makeId("a"),
      name,
      skill,
      message,
      status: "pending",
      createdAt: new Date().toISOString()
    });

    currentUser = {
      ...(currentUser || {}),
      name
    };

    saveData();
    event.target.reset();
    closeModal("applyModal");
    renderJobs();
    renderCommunity();
    showToast("🎉 Your proposal has been delivered to the client!");
  });
}

// ==========================================================================
// BOOKINGS & ACTIVITY MANAGEMENT
// ==========================================================================

document.querySelectorAll(".booking-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".booking-tab").forEach(item => {
      item.classList.remove("active");
    });

    tab.classList.add("active");

    document.querySelectorAll(".booking-content").forEach(content => {
      content.classList.add("hidden");
    });

    const target = {
      posted: "postedBookings",
      applied: "appliedBookings",
      worker: "workerProfileContent"
    }[tab.dataset.booking];

    const targetEl = document.getElementById(target);
    if (targetEl) targetEl.classList.remove("hidden");
    renderBookings();
  });
});

function renderBookings() {
  const posted = jobs.filter(job =>
    (currentUser?.id && job.ownerId === currentUser.id) ||
    (currentUser?.name && job.poster.toLowerCase() === currentUser.name.toLowerCase()) ||
    !job.sample
  );

  const postedContainer = document.getElementById("postedBookings");
  if (postedContainer) {
    postedContainer.innerHTML = posted.length
      ? posted.map(job => `
        <article class="booking-item">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
              <h3>${escapeHTML(job.title)}</h3>
              <p style="color: var(--muted); font-size: 13.5px; margin-top: 3px;">
                📍 ${escapeHTML(job.area)} · ${escapeHTML(job.category)}
              </p>
            </div>
            <span class="job-type-pill ${job.budgetType === "free" ? "free" : "paid"}">
              ${job.budgetType === "free" ? "Free Help" : formatMoney(job.budget)}
            </span>
          </div>

          <div style="margin-top: 10px; font-size: 13.5px;">
            Status: <strong style="color: var(--primary);">${escapeHTML(job.status)}</strong>
          </div>

          <div class="booking-actions">
            <button class="small-btn" data-view-apps="${escapeHTML(job.id)}">
              View Proposals (${job.applications.length})
            </button>
            ${job.status === "open" ? `
              <button class="small-btn success" data-complete="${escapeHTML(job.id)}">
                Mark Completed
              </button>` : ""}
            <button class="small-btn danger" data-delete="${escapeHTML(job.id)}">
              Delete Task
            </button>
          </div>

          <div id="apps-${escapeHTML(job.id)}" class="hidden" style="margin-top: 16px; border-top: 1px solid var(--border); padding-top: 14px;">
            ${job.applications.length
              ? job.applications.map(app => `
                <div class="application-row">
                  <strong>${escapeHTML(app.name)}</strong>
                  <span style="color: var(--muted);"> · ${escapeHTML(app.skill)}</span>
                  <p style="margin: 6px 0; font-size: 13.5px;">"${escapeHTML(app.message)}"</p>
                  <p style="font-size: 12px;">Status: <strong>${escapeHTML(app.status)}</strong></p>
                  ${app.status === "pending" ? `
                    <button class="small-btn success" style="margin-top: 8px;" data-accept="${escapeHTML(job.id)}" data-app="${escapeHTML(app.id)}">
                      Accept & Hire This Pro
                    </button>
                  ` : ""}
                </div>
              `).join("")
              : "<p style='color: var(--muted); font-size: 13px;'>No applications received yet.</p>"}
          </div>
        </article>
      `).join("")
      : `<div class="empty-state"><div class="empty-icon">📌</div><h3>No posted jobs yet</h3><p>Your published requests will appear here with incoming applicant quotes.</p></div>`;
  }

  const applications = [];
  jobs.forEach(job => {
    job.applications.forEach(app => {
      if (
        currentUser?.name &&
        app.name.toLowerCase() === currentUser.name.toLowerCase()
      ) {
        applications.push({ job, app });
      }
    });
  });

  const appliedContainer = document.getElementById("appliedBookings");
  if (appliedContainer) {
    appliedContainer.innerHTML = applications.length
      ? applications.map(({ job, app }) => `
        <article class="booking-item">
          <h3>${escapeHTML(job.title)}</h3>
          <p style="color: var(--muted); font-size: 13.5px;">📍 ${escapeHTML(job.area)} · ${escapeHTML(job.category)}</p>
          <p style="margin: 8px 0;">Request Type: <strong>${job.budgetType === "free" ? "Free Help" : formatMoney(job.budget)}</strong></p>
          <p style="font-size: 13px;">Your Proposal Status: <strong style="color: var(--primary);">${escapeHTML(app.status)}</strong></p>
        </article>
      `).join("")
      : `<div class="empty-state"><div class="empty-icon">🧰</div><h3>No active proposals</h3><p>Apply for open jobs or offer free community help to see tracking here.</p></div>`;
  }

  const myWorker = currentUser?.workerId
    ? workers.find(worker => worker.id === currentUser.workerId)
    : null;

  const workerProfileEl = document.getElementById("workerProfileContent");
  if (workerProfileEl) {
    workerProfileEl.innerHTML = myWorker
      ? `
        <article class="booking-item">
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 16px;">
            <img src="${myWorker.avatar || PRO_AVATARS[0]}" style="width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 3px solid var(--primary);">
            <div>
              <h3>${escapeHTML(myWorker.name)} <span class="badge-verified-check">✓</span></h3>
              <p style="color: var(--primary); font-weight: 600;">${escapeHTML(myWorker.skill)} Specialist</p>
              <small style="color: var(--muted);">📍 ${escapeHTML(myWorker.area)} · ${escapeHTML(myWorker.experience)}</small>
            </div>
          </div>
          <p style="font-size: 14px; margin-bottom: 12px;"><strong>Starting Visiting Rate:</strong> ${myWorker.rate ? formatMoney(myWorker.rate) : "Negotiable"}</p>
          <p style="color: var(--muted); font-size: 14px; line-height: 1.6;">${escapeHTML(myWorker.bio)}</p>
          <div style="margin-top: 16px;">
            <span class="worker-pill">🟢 Active on Directory</span>
            <span class="worker-pill">🛡️ Verified Identity</span>
          </div>
        </article>
      `
      : `
        <div class="empty-state">
          <div class="empty-icon">👤</div>
          <h3>You don't have a Pro Profile yet</h3>
          <p>Join over 1,400+ local professionals and get direct inquiries from neighbors.</p>
          <button class="btn btn-primary" id="createProfileFromBookings">Create Pro Profile</button>
        </div>
      `;

    const createButton = document.getElementById("createProfileFromBookings");
    if (createButton) {
      createButton.addEventListener("click", openWorkerForm);
    }
  }
}

// Booking Actions
document.addEventListener("click", event => {
  const completeButton = event.target.closest("[data-complete]");
  if (completeButton) {
    const job = jobs.find(item => item.id === completeButton.dataset.complete);
    if (!job) return;

    job.status = "completed";
    saveData();
    renderBookings();
    renderJobs();
    renderCommunity();
    showToast("🎉 Task marked as successfully completed!");
  }

  const deleteButton = event.target.closest("[data-delete]");
  if (deleteButton) {
    const jobId = deleteButton.dataset.delete;
    const job = jobs.find(item => item.id === jobId);
    if (!job) return;

    if (!confirm("Are you sure you want to delete this task request?")) return;

    jobs = jobs.filter(item => item.id !== jobId);
    saveData();
    renderBookings();
    renderJobs();
    renderCommunity();
    showToast("Task request removed.");
  }

  const viewButton = event.target.closest("[data-view-apps]");
  if (viewButton) {
    const jobId = viewButton.dataset.viewApps;
    const panel = document.getElementById(`apps-${jobId}`);
    if (panel) panel.classList.toggle("hidden");
  }

  const acceptButton = event.target.closest("[data-accept]");
  if (acceptButton) {
    const job = jobs.find(item => item.id === acceptButton.dataset.accept);
    if (!job) return;

    const app = job.applications.find(item => item.id === acceptButton.dataset.app);
    if (!app) return;

    app.status = "accepted";
    job.status = "assigned";

    job.applications.forEach(item => {
      if (item.id !== app.id && item.status === "pending") {
        item.status = "not selected";
      }
    });

    saveData();
    renderBookings();
    renderJobs();
    renderCommunity();
    showToast(`🎉 Accepted ${app.name}'s proposal! You can now coordinate details.`);
  }
});

// ==========================================================================
// MOBILE MENU TOGGLE
// ==========================================================================

const menuToggle = document.getElementById("menuToggle");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const nav = document.querySelector(".nav-links");
    if (nav) {
      nav.classList.toggle("open");
      menuToggle.textContent = nav.classList.contains("open") ? "×" : "☰";
    }
  });
}

// ==========================================================================
// INITIAL SETUP ON PAGE LOAD
// ==========================================================================

fillCategoryOptions();
renderHome();
renderWorkers();
renderJobs();
renderCommunity();
renderBookings();
