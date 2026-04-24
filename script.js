const profile = {
  username: "ismail_.7x",
  displayName: "Albasith c.a",
  designs: "24+",
  edits: "12+",
  concepts: "8+",
  website: "www.albasvisuals.com",
  instagram: "ismail_.7x",
  email: "albasith399@gmail.com",
  whatsapp: "+91 7025362767",
  linkedin: "www.linkedin.com/in/albasithismail7x",
  github: "github.com/ismailkkaaa",
  reddit: "reddit.com/u/ismailkkaa/s/VIBTeOeEa7"
};

const profileLinks = [
  {
    title: "GitHub",
    subtitle: profile.github,
    href: `https://${profile.github}`,
    icon: "github"
  },
  {
    title: "Instagram",
    subtitle: `instagram.com/${profile.instagram.replace("@", "")}`,
    href: `https://instagram.com/${profile.instagram.replace("@", "")}`,
    icon: "instagram"
  },
  {
    title: "LinkedIn",
    subtitle: profile.linkedin,
    href: `https://${profile.linkedin}`,
    icon: "globe"
  },
  {
    title: "WhatsApp",
    subtitle: "Chat on WhatsApp",
    href: `https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`,
    icon: "whatsapp"
  },
  {
    title: "Email",
    subtitle: profile.email,
    href: `mailto:${profile.email}`,
    icon: "mail"
  },
  {
    title: "Reddit",
    subtitle: profile.reddit,
    href: `https://${profile.reddit}`,
    icon: "globe"
  }
];

const desktopNav = [
  { label: "Home", icon: "home" },
  { label: "About", icon: "info" },
  { label: "Blog", icon: "blog" },
  { label: "Contact", icon: "mail" },
  { label: "Testimonials", icon: "quote" },
  { label: "About Me", icon: "usercard" }
];

const mobileNav = [
  { icon: "home", page: "home" },
  { icon: "info", page: "about" },
  { icon: "blog", page: "blog" },
  { icon: "mail", page: "contact" },
  { icon: "quote", page: "testimonials" },
  { icon: "usercard", page: "aboutme" }
];

const highlights = [
  { id: "ps", label: "PS", src: "assets/PS.png", fit: "contain", scale: "story-item__image--tight" },
  { id: "pr", label: "PR", src: "assets/PR.png", fit: "contain", scale: "story-item__image--tight" },
  { id: "cc", label: "CC", src: "assets/Cc.webp", fit: "contain", scale: "story-item__image--tight" },
  { id: "cv", label: "CV", src: "assets/CV.png", fit: "contain", scale: "story-item__image--tight" },
  { id: "code", label: "CODE", src: "assets/VS.webp", fit: "contain", scale: "story-item__image--medium" },
  { id: "lr", label: "LR", src: "assets/LR.jpg", fit: "cover", scale: "story-item__image--full" }
];

const defaultPortfolioData = {
  posters: [],
  reels: [],
  projects: []
};

const galleryLabels = {
  posters: "Poster",
  reels: "Reel",
  projects: "Project"
};

const state = {
  activeTab: "posters",
  activePage: "home",
  galleryData: { ...defaultPortfolioData }
};

let revealObserver;
let hasAnimatedStats = false;
let parallaxFrame = 0;
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function iconSvg(type) {
  const paths = {
    home: '<path d="M4.5 10.5 12 4l7.5 6.5V19a1 1 0 0 1-1 1h-4.5v-5h-4v5H5.5a1 1 0 0 1-1-1z"></path>',
    info: '<circle cx="12" cy="12" r="8"></circle><path d="M12 10.2v5.2"></path><circle cx="12" cy="7.3" r="1.1" class="icon__fill"></circle>',
    blog: '<rect x="4.5" y="5" width="15" height="14" rx="2"></rect><path d="M8 9h8M8 12h8M8 15h5"></path>',
    mail: '<path d="M4.5 7h15v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2z"></path><path d="m5 8 7 5 7-5"></path>',
    globe: '<circle cx="12" cy="12" r="8"></circle><path d="M4.7 12h14.6M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16"></path>',
    github: '<path d="M9.2 18.4c-3.2 1-3.2-1.8-4.5-2.3M13.7 20v-2.6c0-.75.08-1.18-.34-1.62 1.46-.17 3-.72 3-3.26a2.55 2.55 0 0 0-.68-1.8 2.37 2.37 0 0 0-.04-1.78s-.55-.17-1.8.68a6.26 6.26 0 0 0-3.28 0c-1.25-.85-1.8-.68-1.8-.68a2.37 2.37 0 0 0-.04 1.78 2.55 2.55 0 0 0-.68 1.8c0 2.53 1.53 3.09 2.99 3.26-.42.44-.42 1.1-.42 1.62V20"></path>',
    instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect><circle cx="12" cy="12" r="4.1"></circle><circle cx="17.4" cy="6.7" r="1.1" class="icon__fill"></circle>',
    whatsapp: '<path d="M12 20a8 8 0 1 0-4.1-1.13L4.5 20l1.2-3.23A8 8 0 0 0 12 20z"></path><path d="M9.15 8.9c.18-.4.37-.4.55-.4h.47c.14 0 .36.05.55.45.18.4.62 1.53.68 1.64.05.12.09.26 0 .4-.09.14-.14.23-.28.37-.14.14-.29.31-.42.41-.14.11-.28.23-.12.46.16.23.72 1.18 1.55 1.9 1.07.92 1.97 1.2 2.25 1.34.28.14.44.12.6-.07.16-.18.69-.8.87-1.07.18-.28.37-.23.62-.14.25.1 1.58.75 1.85.89.28.14.46.21.53.32.07.12.07.66-.16 1.3-.23.64-1.33 1.22-1.84 1.3-.48.08-1.1.11-1.78-.11-.41-.14-.95-.31-1.65-.61-2.9-1.25-4.79-4.33-4.94-4.54-.14-.2-1.18-1.58-1.18-3.01 0-1.43.75-2.14 1.02-2.44"></path>',
    quote: '<path d="M9.2 9.2H6.8a2.3 2.3 0 0 0-2.3 2.3v1.4a2.3 2.3 0 0 0 2.3 2.3h1.8v-1.8H7.4a.7.7 0 0 1-.7-.7v-1.2c0-.39.31-.7.7-.7h1.8z"></path><path d="M17.2 9.2h-2.4a2.3 2.3 0 0 0-2.3 2.3v1.4a2.3 2.3 0 0 0 2.3 2.3h1.8v-1.8h-1.2a.7.7 0 0 1-.7-.7v-1.2c0-.39.31-.7.7-.7h1.8z"></path>',
    usercard: '<rect x="4" y="5" width="16" height="14" rx="2.5"></rect><circle cx="9" cy="10" r="2"></circle><path d="M6.5 15c.7-1.45 1.53-2.17 2.5-2.17.97 0 1.8.72 2.5 2.17"></path><path d="M14 9h3.5M14 12h3.5M14 15h2.2"></path>'
  };

  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[type]}</svg>`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getPosterImagePath(filename) {
  return `poster/${filename}`;
}

function getReelThumbnailPath(filename) {
  return `reels/${filename}`;
}

function getProjectImagePath(filename) {
  return `projects/${filename}`;
}

function normalizePortfolioData(data) {
  return {
    posters: Array.isArray(data?.posters) ? data.posters : [],
    reels: Array.isArray(data?.reels) ? data.reels : [],
    projects: Array.isArray(data?.projects) ? data.projects : []
  };
}

async function loadPortfolioData() {
  try {
    const response = await fetch("./data.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load data.json: ${response.status}`);
    }

    return normalizePortfolioData(await response.json());
  } catch (error) {
    console.error(error);
    return { ...defaultPortfolioData };
  }
}

function getEmbedUrl(link, platform) {
  if (!link) {
    return "";
  }

  if (platform === "Instagram") {
    const cleanLink = link.replace(/\/+$/, "");
    return `${cleanLink}/embed`;
  }

  return link;
}

function renderDesktopNav(root) {
  if (!root) {
    return;
  }

  root.innerHTML = desktopNav
    .map(
      (item) => `
        <button class="sidebar-link${state.activePage === item.label.toLowerCase().replace(/\s+/g, "") ? " is-active" : ""}" type="button" data-page="${item.label.toLowerCase().replace(/\s+/g, "")}">
          <span class="sidebar-link__icon">${iconSvg(item.icon)}</span>
          <span>${item.label}</span>
        </button>
      `
    )
    .join("");

  Array.from(root.querySelectorAll(".sidebar-link")).forEach((button) => {
    button.addEventListener("click", () => {
      setPage(button.dataset.page);
    });
  });
}

function renderMobileNav(root) {
  if (!root) {
    return;
  }

  root.innerHTML = mobileNav
    .map(
      (item) => `
        <button class="nav-icon${state.activePage === item.page ? " is-active" : ""}" type="button" aria-label="${item.icon}" data-page="${item.page}">
          ${iconSvg(item.icon)}
        </button>
      `
    )
    .join("");

  Array.from(root.querySelectorAll(".nav-icon")).forEach((button) => {
    button.addEventListener("click", () => {
      setPage(button.dataset.page);
    });
  });
}

function renderHighlights(root) {
  if (!root) {
    return;
  }

  root.innerHTML = highlights
    .map(
      (item, index) => `
        <button class="story-item motion-layer reveal-item" style="--stagger:${index}" type="button">
          <div class="story-item__ring">
            <div class="story-item__thumb">
              <img class="story-item__image story-item__image--${item.fit || "contain"} ${item.scale || ""}" src="${item.src}" alt="${item.label} highlight cover" loading="lazy" decoding="async">
            </div>
          </div>
          <span>${item.label}</span>
        </button>
      `
    )
    .join("");

  observeRevealTargets(root.querySelectorAll(".reveal-item"));
}

function renderTabs(buttons) {
  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === state.activeTab);
  });
}

function openModal(overlay, title, subtitle, body) {
  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalBody = document.getElementById("modal-body");

  if (!overlay || !modalTitle || !modalSubtitle || !modalBody) {
    return;
  }

  modalTitle.textContent = title;
  modalSubtitle.textContent = subtitle;
  modalBody.innerHTML = body;
  overlay.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
}

function closeModal(overlay) {
  if (!overlay) {
    return;
  }

  overlay.classList.add("is-hidden");
  document.body.style.overflow = "";
}

function renderLinksPopup() {
  const linksList = document.getElementById("links-list");
  if (!linksList) {
    return;
  }

  linksList.innerHTML = profileLinks
    .map(
      (item) => `
        <a class="link-row" href="${item.href}" target="_blank" rel="noreferrer">
          <span class="link-row__icon">
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${iconSvg(item.icon).replace('<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">', "").replace("</svg>", "")}</svg>
          </span>
          <span>
            <span class="link-row__title">${item.title}</span>
            <span class="link-row__subtitle">${item.subtitle}</span>
          </span>
        </a>
      `
    )
    .join("");
}

function openLinksPopup(overlay) {
  if (!overlay) {
    return;
  }

  renderLinksPopup();
  overlay.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
}

function closeLinksPopup(overlay, modalOverlay) {
  if (!overlay) {
    return;
  }

  overlay.classList.add("is-hidden");
  document.body.style.overflow = modalOverlay && modalOverlay.classList.contains("is-hidden") ? "" : "hidden";
}

function setPage(page) {
  state.activePage = page;

  const storyStrip = document.getElementById("highlights-list");
  const tabStrip = document.querySelector(".tab-strip");
  const galleryRoot = document.getElementById("gallery");
  const contentSections = document.getElementById("content-sections");
  const contentPanels = Array.from(document.querySelectorAll(".content-panel"));
  const isHome = page === "home";

  if (storyStrip) {
    storyStrip.style.display = isHome ? "flex" : "none";
  }

  if (tabStrip) {
    tabStrip.style.display = isHome ? "grid" : "none";
  }

  if (galleryRoot) {
    galleryRoot.style.display = isHome ? "grid" : "none";
  }

  if (contentSections) {
    contentSections.style.display = isHome ? "none" : "block";
  }

  contentPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `section-${page}`);
  });

  renderDesktopNav(document.getElementById("desktop-nav"));
  renderMobileNav(document.getElementById("mobile-nav"));
  observeRevealTargets(document.querySelectorAll(".content-panel.is-active"));
  requestParallaxUpdate();
}

function getTabItems() {
  return state.galleryData[state.activeTab] || [];
}

function renderGridMedia(item) {
  if (state.activeTab === "posters") {
    return `<img class="grid-card__image" src="${getPosterImagePath(item.image)}" alt="${escapeHtml(item.caption || "Poster")}" loading="lazy">`;
  }

  if (state.activeTab === "reels") {
    return `<img class="grid-card__image" src="${getReelThumbnailPath(item.thumbnail)}" alt="${escapeHtml(item.platform || "Reel")}" loading="lazy">`;
  }

  return `<img class="grid-card__image" src="${getProjectImagePath(item.image)}" alt="${escapeHtml(item.title || "Project")}" loading="lazy">`;
}

function getCardTitle(item) {
  if (state.activeTab === "posters") {
    return item.caption || "Poster";
  }

  if (state.activeTab === "reels") {
    return item.platform || "Reel";
  }

  return item.title || "Project";
}

function getCardLabel(item) {
  if (state.activeTab === "posters") {
    return "Click to view";
  }

  if (state.activeTab === "reels") {
    return item.platform || "Video";
  }

  return item.techStack || "Project";
}

function openGalleryItem(item, overlay) {
  if (state.activeTab === "posters") {
    openModal(
      overlay,
      "Poster Preview",
      "Image and caption",
      `
        <img class="modal-preview-image" src="${getPosterImagePath(item.image)}" alt="${escapeHtml(item.caption || "Poster")}">
        <div class="modal-text">
          <p>${escapeHtml(item.caption)}</p>
        </div>
      `
    );
    return;
  }

  if (state.activeTab === "reels") {
    const embedUrl = getEmbedUrl(item.videoLink, item.platform);
    const iframeMarkup = embedUrl
      ? `<div class="video-frame"><iframe src="${escapeHtml(embedUrl)}" title="${escapeHtml(item.platform || "Reel")}" loading="lazy" allowfullscreen></iframe></div>`
      : `<p class="empty-state">Missing video link.</p>`;

    openModal(
      overlay,
      "Reel Preview",
      item.platform || "Video",
      `
        ${iframeMarkup}
        <div class="modal-text">
          <p>Thumbnail: ${escapeHtml(item.thumbnail)}</p>
          <p>Platform: ${escapeHtml(item.platform)}</p>
        </div>
      `
    );
    return;
  }

  openModal(
    overlay,
    item.title || "Project",
    item.techStack || "Development Project",
    `
      <img class="modal-preview-image" src="${getProjectImagePath(item.image)}" alt="${escapeHtml(item.title || "Project")}">
      <div class="modal-text">
        <p>${escapeHtml(item.description)}</p>
        <p><strong>Tech stack:</strong> ${escapeHtml(item.techStack)}</p>
        <a class="project-link-button" href="${escapeHtml(item.githubLink)}" target="_blank" rel="noreferrer">Open GitHub</a>
      </div>
    `
  );
}

function renderGallery(overlay) {
  const galleryRoot = document.getElementById("gallery");
  if (!galleryRoot) {
    return;
  }

  const items = getTabItems();
  if (!items.length) {
    galleryRoot.innerHTML = `<div class="empty-state empty-state--grid">No ${state.activeTab} in data.json yet.</div>`;
    return;
  }

  galleryRoot.innerHTML = items
    .map(
      (item, index) => `
        <button class="grid-card motion-layer reveal-item${state.activeTab === "posters" ? " grid-card--poster" : ""}" style="--stagger:${index}" type="button" data-index="${index}">
          ${renderGridMedia(item)}
          <div class="grid-card__overlay"></div>
          <div class="grid-card__meta">
            <p class="grid-card__title">${escapeHtml(getCardTitle(item))}</p>
            <p class="grid-card__label">${escapeHtml(getCardLabel(item))}</p>
          </div>
        </button>
      `
    )
    .join("");

  observeRevealTargets(galleryRoot.querySelectorAll(".reveal-item"));

  Array.from(galleryRoot.querySelectorAll(".grid-card")).forEach((button) => {
    button.addEventListener("click", () => {
      const item = items[Number(button.dataset.index)];
      openGalleryItem(item, overlay);
    });
  });
}

function openMessageModal(overlay) {
  openModal(
    overlay,
    "Direct message",
    `Chat with ${profile.username}`,
    `<div class="chat-bubble">Hey, I want a poster set and a short-form reel package for my brand launch.</div>
     <div class="chat-bubble chat-bubble--reply">Send the brief, references, and deadline. I'll shape the visual direction and delivery plan from there.</div>
     <div class="chat-bubble">Most project replies go out within 24 hours.</div>`
  );
}

function openContactModal(overlay) {
  const links = [
    { label: "WhatsApp", value: profile.whatsapp, href: `https://wa.me/${profile.whatsapp.replace(/\D/g, "")}` },
    { label: "Instagram", value: profile.instagram, href: `https://instagram.com/${profile.instagram.replace("@", "")}` },
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "LinkedIn", value: profile.linkedin, href: `https://${profile.linkedin}` },
    { label: "GitHub", value: profile.github, href: `https://${profile.github}` },
    { label: "Reddit", value: profile.reddit, href: `https://${profile.reddit}` }
  ];

  openModal(
    overlay,
    "Contact",
    "Available for freelance and collabs",
    `<div class="contact-list">
      ${links
        .map(
          (item) => `<a class="contact-link" href="${item.href}" target="_blank" rel="noreferrer">
            <span class="contact-link__label">${item.label}</span>
            <span class="contact-link__value">${item.value}</span>
          </a>`
        )
        .join("")}
    </div>`
  );
}

function parseMetricValue(value) {
  const match = String(value).trim().match(/^([\d,.]+)(.*)$/);
  if (!match) {
    return { target: 0, suffix: String(value) };
  }

  return {
    target: Number(match[1].replace(/,/g, "")),
    suffix: match[2] || ""
  };
}

function easeOutCubic(progress) {
  return 1 - (1 - progress) ** 3;
}

function animateCounter(element, value, duration = 1400) {
  const { target, suffix } = parseMetricValue(value);

  if (!target) {
    element.textContent = value;
    return;
  }

  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const current = Math.round(target * easeOutCubic(progress));
    element.textContent = `${current}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

function startStatCounters(statDesigns, statEdits, statConcepts) {
  if (hasAnimatedStats) {
    return;
  }

  hasAnimatedStats = true;
  animateCounter(statDesigns, profile.designs, 1500);
  setTimeout(() => animateCounter(statEdits, profile.edits, 1250), 120);
  setTimeout(() => animateCounter(statConcepts, profile.concepts, 1100), 220);
}

function initStatCounters() {
  const statDesigns = document.getElementById("stat-designs");
  const statEdits = document.getElementById("stat-edits");
  const statConcepts = document.getElementById("stat-concepts");
  const statsRow = document.querySelector(".stats-row");

  if (!statDesigns || !statEdits || !statConcepts || !statsRow) {
    return;
  }

  [statDesigns, statEdits, statConcepts].forEach((element) => {
    const { suffix } = parseMetricValue(element.dataset.target || "0+");
    element.textContent = `0${suffix}`;
  });

  if (!("IntersectionObserver" in window) || motionQuery.matches) {
    startStatCounters(statDesigns, statEdits, statConcepts);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startStatCounters(statDesigns, statEdits, statConcepts);
          observer.disconnect();
        }
      });
    },
    { threshold: 0.45 }
  );

  observer.observe(statsRow);
}

function observeRevealTargets(targets) {
  if (!targets || !targets.length) {
    return;
  }

  targets.forEach((element) => {
    element.classList.add("motion-layer", "reveal-item");
  });

  if (motionQuery.matches || !("IntersectionObserver" in window)) {
    targets.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
  }

  targets.forEach((element) => {
    if (!element.classList.contains("is-visible")) {
      revealObserver.observe(element);
    }
  });
}

function updateParallax() {
  parallaxFrame = 0;

  const profileHero = document.querySelector(".profile-hero");
  const bioArea = document.querySelector(".bio-area");
  const actionRow = document.querySelector(".action-row");
  const storyStrip = document.getElementById("highlights-list");
  const galleryRoot = document.getElementById("gallery");

  if (motionQuery.matches) {
    [profileHero, bioArea, actionRow, storyStrip, galleryRoot].forEach((element) => {
      if (element) {
        element.style.setProperty("--float-y", "0px");
      }
    });
    return;
  }

  const viewportHeight = window.innerHeight || 1;
  const parallaxTargets = [
    { element: profileHero, range: -24 },
    { element: bioArea, range: -18 },
    { element: actionRow, range: -12 },
    { element: storyStrip, range: -16 },
    { element: galleryRoot, range: -10 }
  ];

  parallaxTargets.forEach(({ element, range }) => {
    if (!element || getComputedStyle(element).display === "none") {
      return;
    }

    const rect = element.getBoundingClientRect();
    const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
    const centered = Math.max(-0.5, Math.min(0.5, progress - 0.5));
    element.style.setProperty("--float-y", `${centered * range}px`);
  });
}

function requestParallaxUpdate() {
  if (parallaxFrame) {
    return;
  }

  parallaxFrame = requestAnimationFrame(updateParallax);
}

function initMotionEffects() {
  const profileHero = document.querySelector(".profile-hero");
  const bioArea = document.querySelector(".bio-area");
  const actionRow = document.querySelector(".action-row");
  const storyStrip = document.getElementById("highlights-list");
  const tabStrip = document.querySelector(".tab-strip");
  const galleryRoot = document.getElementById("gallery");
  const contentPanels = Array.from(document.querySelectorAll(".content-panel"));

  observeRevealTargets(
    [profileHero, bioArea, actionRow, storyStrip, tabStrip, galleryRoot, ...contentPanels].filter(Boolean)
  );

  updateParallax();
  window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
  window.addEventListener("resize", requestParallaxUpdate);
  motionQuery.addEventListener("change", () => {
    requestParallaxUpdate();
    observeRevealTargets(document.querySelectorAll(".motion-layer"));
  });
}

function populateProfile() {
  const statDesigns = document.getElementById("stat-designs");
  const statEdits = document.getElementById("stat-edits");
  const statConcepts = document.getElementById("stat-concepts");
  const displayName = document.getElementById("display-name");
  const websiteLink = document.getElementById("website-link");

  if (statDesigns) {
    statDesigns.dataset.target = profile.designs;
  }

  if (statEdits) {
    statEdits.dataset.target = profile.edits;
  }

  if (statConcepts) {
    statConcepts.dataset.target = profile.concepts;
  }

  if (displayName) {
    displayName.textContent = profile.displayName;
  }

  if (websiteLink) {
    websiteLink.textContent = profile.website;
  }
}

async function initPortfolioPage() {
  state.galleryData = await loadPortfolioData();

  const overlay = document.getElementById("overlay");
  const linksOverlay = document.getElementById("links-overlay");
  const galleryRoot = document.getElementById("gallery");
  const tabButtons = Array.from(document.querySelectorAll(".tab-button"));

  populateProfile();
  renderDesktopNav(document.getElementById("desktop-nav"));
  renderMobileNav(document.getElementById("mobile-nav"));
  renderHighlights(document.getElementById("highlights-list"));
  renderTabs(tabButtons);
  renderGallery(overlay);
  setPage("home");
  initMotionEffects();
  initStatCounters();

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTab = button.dataset.tab;
      renderTabs(tabButtons);
      renderGallery(overlay);
      requestParallaxUpdate();
    });
  });

  const messageTrigger = document.getElementById("message-trigger");
  const contactTrigger = document.getElementById("contact-trigger");
  const linksTrigger = document.getElementById("links-trigger");
  const modalClose = document.getElementById("modal-close");
  const linksClose = document.getElementById("links-close");
  const sidebarToggle = document.getElementById("sidebar-toggle");

  if (messageTrigger) {
    messageTrigger.addEventListener("click", () => openMessageModal(overlay));
  }

  if (contactTrigger) {
    contactTrigger.addEventListener("click", () => openContactModal(overlay));
  }

  if (linksTrigger) {
    linksTrigger.addEventListener("click", () => openLinksPopup(linksOverlay));
  }

  if (modalClose) {
    modalClose.addEventListener("click", () => closeModal(overlay));
  }

  if (linksClose) {
    linksClose.addEventListener("click", () => closeLinksPopup(linksOverlay, overlay));
  }

  if (overlay) {
    overlay.addEventListener("click", (event) => {
      if (event.target.dataset.close === "true") {
        closeModal(overlay);
      }
    });
  }

  if (linksOverlay) {
    linksOverlay.addEventListener("click", (event) => {
      if (event.target.dataset.linksClose === "true") {
        closeLinksPopup(linksOverlay, overlay);
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal(overlay);
      closeLinksPopup(linksOverlay, overlay);
    }
  });

  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
      document.body.classList.toggle("sidebar-collapsed");
      requestParallaxUpdate();
    });
  }

  if (!getTabItems().length && galleryRoot) {
    galleryRoot.innerHTML = `<div class="empty-state empty-state--grid">No ${state.activeTab} in data.json yet.</div>`;
  }
}

function createAdminState(data) {
  return {
    posters: [...data.posters],
    reels: [...data.reels],
    projects: [...data.projects]
  };
}

function formatJson(data) {
  return JSON.stringify(data, null, 2);
}

function renderAdminList(root, items, formatter) {
  if (!root) {
    return;
  }

  if (!items.length) {
    root.innerHTML = `<p class="admin-empty">No entries added yet.</p>`;
    return;
  }

  root.innerHTML = items
    .map(
      (item, index) => `
        <div class="admin-list__item">
          <strong>${index + 1}. ${escapeHtml(formatter.title(item))}</strong>
          <p>${escapeHtml(formatter.meta(item))}</p>
        </div>
      `
    )
    .join("");
}

function initAdminPage() {
  const posterForm = document.getElementById("poster-form");
  const reelForm = document.getElementById("reel-form");
  const projectForm = document.getElementById("project-form");
  const jsonPreview = document.getElementById("json-preview");
  const generateButton = document.getElementById("generate-json");

  if (!posterForm || !reelForm || !projectForm || !jsonPreview || !generateButton) {
    return;
  }

  loadPortfolioData().then((data) => {
    const adminState = createAdminState(data);

    function updatePreview() {
      jsonPreview.textContent = formatJson(adminState);
    }

    function renderLists() {
      renderAdminList(document.getElementById("poster-list"), adminState.posters, {
        title: (item) => item.image,
        meta: (item) => item.caption
      });
      renderAdminList(document.getElementById("reel-list"), adminState.reels, {
        title: (item) => item.thumbnail,
        meta: (item) => `${item.platform} • ${item.videoLink}`
      });
      renderAdminList(document.getElementById("project-list"), adminState.projects, {
        title: (item) => item.title,
        meta: (item) => item.techStack
      });
    }

    posterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(posterForm);
      adminState.posters.push({
        image: String(formData.get("image") || "").trim(),
        caption: String(formData.get("caption") || "").trim()
      });
      posterForm.reset();
      renderLists();
      updatePreview();
    });

    reelForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(reelForm);
      adminState.reels.push({
        thumbnail: String(formData.get("thumbnail") || "").trim(),
        videoLink: String(formData.get("videoLink") || "").trim(),
        platform: String(formData.get("platform") || "").trim()
      });
      reelForm.reset();
      renderLists();
      updatePreview();
    });

    projectForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(projectForm);
      adminState.projects.push({
        image: String(formData.get("image") || "").trim(),
        title: String(formData.get("title") || "").trim(),
        description: String(formData.get("description") || "").trim(),
        techStack: String(formData.get("techStack") || "").trim(),
        githubLink: String(formData.get("githubLink") || "").trim()
      });
      projectForm.reset();
      renderLists();
      updatePreview();
    });

    generateButton.addEventListener("click", updatePreview);

    renderLists();
    updatePreview();
  });
}

if (document.getElementById("gallery")) {
  initPortfolioPage();
}

if (document.getElementById("json-preview")) {
  initAdminPage();
}
