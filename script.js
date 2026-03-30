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

function art(palette, glow) {
  return `linear-gradient(150deg, rgba(5,7,12,.24), rgba(5,7,12,.72)), radial-gradient(circle at top right, ${glow} 0%, transparent 42%), ${palette}`;
}

const posts = [
  { id: 1, title: "Onam Offer Poster", label: "Social Media Poster", description: "Festive campaign visual designed to feel bright, local, and mobile-first.", meta: "Photoshop • Promo Design • Social Media", src: "poster/Poster 1.png" },
  { id: 2, title: "Kargil Tribute", label: "Awareness Poster", description: "A bold tribute visual built around contrast, silhouette, and strong typography.", meta: "Photoshop • Tribute Design • Poster", src: "poster/Poster 2.png" },
  { id: 3, title: "We Are Hiring", label: "Brand Promotion Poster", description: "A recruitment visual designed to grab attention quickly and communicate clearly.", meta: "Photoshop • Hiring Creative • Brand Promo", src: "poster/Poster 3.png" },
  { id: 4, title: "Graphic Design Promo", label: "Service Promotion Poster", description: "A personal branding poster created to promote design and editing services.", meta: "Photoshop • Service Promo • Personal Brand", src: "poster/Poster 4.png" },
  { id: 5, title: "Special Offer Visual", label: "Product Promotion Poster", description: "A clean promotional creative made for offers, sales, and product-based campaigns.", meta: "Photoshop • Offer Design • Social Media", src: "poster/Poster 5.png" },
  { id: 6, title: "Missile Man Tribute", label: "Inspirational Poster", description: "A concept poster inspired by vision, ambition, and iconic legacy-driven storytelling.", meta: "Photoshop • Tribute Design • Concept Poster", src: "poster/Poster 6.png" },
  { id: 7, title: "Custom Name Slip Poster", label: "Creative Product Poster", description: "A playful product visual designed for social media promotion and fast engagement.", meta: "Photoshop • Product Promo • Creative Design", src: "poster/Poster 7.png" },
  { id: 8, title: "Olympics Opening Poster", label: "Event Poster", description: "An event-based visual designed around timing, excitement, and announcement clarity.", meta: "Photoshop • Event Design • Social Media", src: "poster/Poster 8.png" },
  { id: 9, title: "Grand Opening Teaser", label: "Launch Promotion Poster", description: "A launch-style teaser poster built to create curiosity and pre-opening attention.", meta: "Photoshop • Launch Promo • Branding", src: "poster/Poster 9.png" },
  { id: 10, title: "Pongal Celebration Poster", label: "Festive Promo Poster", description: "A seasonal celebration poster created with warm tones and a clean festive layout.", meta: "Photoshop • Festival Design • Promo Creative", src: "poster/Poster 10.png" },
  { id: 11, title: "Shape Your Body", label: "Fitness Promotion Poster", description: "A bold fitness poster focused on energy, typography, and quick visual impact.", meta: "Photoshop • Fitness Promo • Social Media", src: "poster/Poster 11.png" },
  { id: 12, title: "Custom Name Slips Ad", label: "Product Promotion Poster", description: "A modern promo visual built for product marketing and audience attention on mobile.", meta: "Photoshop • Product Ad • Social Media", src: "poster/Poster 12.png" },
  { id: 13, title: "Sticker / Print Promo", label: "Print Design Poster", description: "A promotional creative designed to showcase print products in a clean and friendly way.", meta: "Photoshop • Print Promo • Product Design", src: "poster/Poster 13.png" },
  { id: 14, title: "Break the Chain", label: "Awareness Poster", description: "A message-driven awareness poster built around contrast, symbolism, and urgency.", meta: "Photoshop • Awareness Design • Campaign Poster", src: "poster/Poster 14.jpg" },
  { id: 15, title: "TV App Promo Visual", label: "Digital Product Poster", description: "A sleek promotional visual created for a digital entertainment or app-based product.", meta: "Photoshop • Product Promo • Digital Creative", src: "poster/Poster 15.png" }
];

const reels = [
  { id: 101, title: "Launch Teaser Cut", label: "Promo Edit", badge: "0:21", accent: art("linear-gradient(135deg, #0a1220, #2149a2 48%, #f97316)", "rgba(249,115,22,.36)") },
  { id: 102, title: "Cinematic Bike Reel", label: "Motion Edit", badge: "0:34", accent: art("linear-gradient(135deg, #081118, #153349 48%, #48b6ff)", "rgba(72,182,255,.32)") },
  { id: 103, title: "Event Recap", label: "Short Video", badge: "0:27", accent: art("linear-gradient(135deg, #120f10, #76431c 46%, #f1c08e)", "rgba(241,192,142,.28)") },
  { id: 104, title: "Restaurant Promo", label: "Social Reel", badge: "0:18", accent: art("linear-gradient(135deg, #0f1510, #14532d 48%, #74d9aa)", "rgba(116,217,170,.28)") },
  { id: 105, title: "Fashion Snippet", label: "Cinematic Edit", badge: "0:15", accent: art("linear-gradient(135deg, #171514, #6b6661 42%, #f0ece8)", "rgba(240,236,232,.26)") },
  { id: 106, title: "Brand Trailer", label: "Motion Reel", badge: "0:29", accent: art("linear-gradient(135deg, #170c20, #5a2fa0 44%, #cab6ff)", "rgba(202,182,255,.28)") }
];

const collabs = [
  { id: 201, title: "Music Cover Drop", label: "With Ayan + Rafi", accent: art("linear-gradient(135deg, #101828, #7c3aed 52%, #f59e0b)", "rgba(245,158,11,.28)") },
  { id: 202, title: "Campus Fest Campaign", label: "Team Visuals", accent: art("linear-gradient(135deg, #0f172a, #be185d 46%, #fb7185)", "rgba(251,113,133,.28)") },
  { id: 203, title: "Street Film Posters", label: "Friend Collab", accent: art("linear-gradient(135deg, #171717, #44403c 45%, #facc15)", "rgba(250,204,21,.26)") },
  { id: 204, title: "Creator Kit", label: "Agency Assist", accent: art("linear-gradient(135deg, #0a0f1d, #2563eb 48%, #22d3ee)", "rgba(34,211,238,.26)") },
  { id: 205, title: "Merch Drop Visuals", label: "Design Pairing", accent: art("linear-gradient(135deg, #180d14, #db2777 48%, #f9a8d4)", "rgba(249,168,212,.26)") },
  { id: 206, title: "Aftermovie Frames", label: "Editor Circle", accent: art("linear-gradient(135deg, #0b1220, #0f766e 48%, #99f6e4)", "rgba(153,246,228,.24)") }
];

const galleryData = { posts, reels, collabs };

let activeTab = "posts";
let activePage = "home";

const desktopNavRoot = document.getElementById("desktop-nav");
const mobileNavRoot = document.getElementById("mobile-nav");
const highlightsRoot = document.getElementById("highlights-list");
const galleryRoot = document.getElementById("gallery");
const tabButtons = Array.from(document.querySelectorAll(".tab-button"));
const storyStrip = document.getElementById("highlights-list");
const tabStrip = document.querySelector(".tab-strip");
const contentSections = document.getElementById("content-sections");
const contentPanels = Array.from(document.querySelectorAll(".content-panel"));
const overlay = document.getElementById("overlay");
const linksOverlay = document.getElementById("links-overlay");
const linksList = document.getElementById("links-list");
const modalTitle = document.getElementById("modal-title");
const modalSubtitle = document.getElementById("modal-subtitle");
const modalBody = document.getElementById("modal-body");
const profileHero = document.querySelector(".profile-hero");
const bioArea = document.querySelector(".bio-area");
const actionRow = document.querySelector(".action-row");
const statsRow = document.querySelector(".stats-row");
const statDesigns = document.getElementById("stat-designs");
const statEdits = document.getElementById("stat-edits");
const statConcepts = document.getElementById("stat-concepts");
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let revealObserver;
let hasAnimatedStats = false;
let parallaxFrame = 0;

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
    plus: '<path d="M12 5v14M5 12h14"></path>',
    chart: '<rect x="4" y="4" width="16" height="16" rx="2"></rect><path d="M8 16V11M12 16V8M16 16V13"></path>',
    usercard: '<rect x="4" y="5" width="16" height="14" rx="2.5"></rect><circle cx="9" cy="10" r="2"></circle><path d="M6.5 15c.7-1.45 1.53-2.17 2.5-2.17.97 0 1.8.72 2.5 2.17"></path><path d="M14 9h3.5M14 12h3.5M14 15h2.2"></path>'
  };

  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[type]}</svg>`;
}

function renderDesktopNav() {
  desktopNavRoot.innerHTML = desktopNav
    .map(
      (item) => `
        <button class="sidebar-link${activePage === item.label.toLowerCase().replace(/\s+/g, "") ? " is-active" : ""}" type="button" data-page="${item.label.toLowerCase().replace(/\s+/g, "")}">
          <span class="sidebar-link__icon">${iconSvg(item.icon)}</span>
          <span>${item.label}</span>
        </button>
      `
    )
    .join("");

  Array.from(desktopNavRoot.querySelectorAll(".sidebar-link")).forEach((button) => {
    button.addEventListener("click", () => {
      setPage(button.dataset.page);
    });
  });
}

function renderMobileNav() {
  mobileNavRoot.innerHTML = mobileNav
    .map(
      (item) => `
        <button class="nav-icon${activePage === item.page ? " is-active" : ""}" type="button" aria-label="${item.icon}" data-page="${item.page}">
          ${item.icon === "profile" ? '<div class="avatar-mini"></div>' : iconSvg(item.icon)}
        </button>
      `
    )
    .join("");

  Array.from(mobileNavRoot.querySelectorAll(".nav-icon")).forEach((button) => {
    button.addEventListener("click", () => {
      setPage(button.dataset.page);
    });
  });
}

function renderHighlights() {
  highlightsRoot.innerHTML = highlights
    .map(
      (item, index) => `
        <button class="story-item motion-layer reveal-item" style="--stagger:${index}" type="button">
          <div class="story-item__ring">
            <div class="story-item__thumb">
              <img class="story-item__image story-item__image--${item.fit || "contain"} ${item.scale || ""}" src="${item.src}" alt="${item.label} highlight cover">
            </div>
          </div>
          <span>${item.label}</span>
        </button>
      `
    )
    .join("");

  observeRevealTargets(highlightsRoot.querySelectorAll(".reveal-item"));
}

function renderTabs() {
  tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === activeTab);
  });
}

function badgeMarkup(mode, item) {
  if (mode === "reels") {
    return `<div class="grid-card__badge"><span class="grid-card__badge-dot"></span><span>${item.badge}</span></div>`;
  }

  if (mode === "collabs") {
    return `<div class="grid-card__badge"><span>Collab</span></div>`;
  }

  return '<div class="grid-card__pin"><svg class="icon icon--tiny" viewBox="0 0 24 24" aria-hidden="true"><path d="m15 4 5 5-9.8 9.8H5.2v-5.01z"></path></svg></div>';
}

function renderGridMedia(item, mode) {
  if (mode === "posts" && item.src) {
    return `<img class="grid-card__image" src="${item.src}" alt="${item.title}" loading="lazy">`;
  }

  return `<div class="grid-card__art" style="background:${item.accent}"></div>`;
}

function openModal(title, subtitle, body) {
  modalTitle.textContent = title;
  modalSubtitle.textContent = subtitle;
  modalBody.innerHTML = body;
  overlay.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.classList.add("is-hidden");
  document.body.style.overflow = "";
}

function renderLinksPopup() {
  linksList.innerHTML = profileLinks
    .map(
      (item) => `
        <a class="link-row" href="${item.href}" target="_blank" rel="noreferrer">
          <span class="link-row__icon">
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${iconSvg(item.icon).replace('<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">', '').replace("</svg>", "")}</svg>
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

function openLinksPopup() {
  renderLinksPopup();
  linksOverlay.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
}

function closeLinksPopup() {
  linksOverlay.classList.add("is-hidden");
  document.body.style.overflow = overlay.classList.contains("is-hidden") ? "" : "hidden";
}

function setPage(page) {
  activePage = page;
  const isHome = page === "home";

  storyStrip.style.display = isHome ? "flex" : "none";
  tabStrip.style.display = isHome ? "grid" : "none";
  galleryRoot.style.display = isHome ? "grid" : "none";
  contentSections.style.display = isHome ? "none" : "block";

  contentPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `section-${page}`);
  });

  renderDesktopNav();
  renderMobileNav();
  observeRevealTargets(document.querySelectorAll(".content-panel.is-active"));
  requestParallaxUpdate();
}

function renderGallery() {
  galleryRoot.innerHTML = galleryData[activeTab]
    .map(
      (item, index) => `
        <button class="grid-card motion-layer reveal-item${activeTab === "posts" ? " grid-card--poster" : ""}" style="--stagger:${index}" type="button" data-id="${item.id}">
          ${activeTab === "posts" ? "" : badgeMarkup(activeTab, item)}
          ${renderGridMedia(item, activeTab)}
          <div class="grid-card__overlay"></div>
          <div class="grid-card__meta">
            <p class="grid-card__title">${item.title}</p>
            <p class="grid-card__label">${item.label}</p>
          </div>
        </button>
      `
    )
    .join("");

  observeRevealTargets(galleryRoot.querySelectorAll(".reveal-item"));

  Array.from(galleryRoot.querySelectorAll(".grid-card")).forEach((button) => {
    button.addEventListener("click", () => {
      const item = galleryData[activeTab].find((entry) => String(entry.id) === button.dataset.id);
      const preview = item.src
        ? `<img class="modal-preview-image" src="${item.src}" alt="${item.title}">`
        : `<div class="modal-preview" style="background:${item.accent}"></div>`;
      openModal(
        item.title,
        item.label,
        `${preview}
         <div class="modal-text">
           <p>${item.description || "Built as a portfolio piece inside an Instagram-style profile layout."}</p>
           ${item.meta ? `<p>${item.meta}</p>` : ""}
         </div>`
      );
    });
  });
}

function openMessageModal() {
  openModal(
    "Direct message",
    `Chat with ${profile.username}`,
    `<div class="chat-bubble">Hey, I want a poster set and a short-form reel package for my brand launch.</div>
     <div class="chat-bubble chat-bubble--reply">Send the brief, references, and deadline. I'll shape the visual direction and delivery plan from there.</div>
     <div class="chat-bubble">Most project replies go out within 24 hours.</div>`
  );
}

function openContactModal() {
  const links = [
    { label: "WhatsApp", value: profile.whatsapp, href: `https://wa.me/${profile.whatsapp.replace(/\D/g, "")}` },
    { label: "Instagram", value: profile.instagram, href: `https://instagram.com/${profile.instagram.replace("@", "")}` },
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "LinkedIn", value: profile.linkedin, href: `https://${profile.linkedin}` },
    { label: "GitHub", value: profile.github, href: `https://${profile.github}` },
    { label: "Reddit", value: profile.reddit, href: `https://${profile.reddit}` }
  ];

  openModal(
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

function startStatCounters() {
  if (hasAnimatedStats) {
    return;
  }

  hasAnimatedStats = true;
  animateCounter(statDesigns, profile.designs, 1500);
  setTimeout(() => animateCounter(statEdits, profile.edits, 1250), 120);
  setTimeout(() => animateCounter(statConcepts, profile.concepts, 1100), 220);
}

function initStatCounters() {
  [statDesigns, statEdits, statConcepts].forEach((element) => {
    const { suffix } = parseMetricValue(element.dataset.target || "0+");
    element.textContent = `0${suffix}`;
  });

  if (!("IntersectionObserver" in window) || motionQuery.matches || !statsRow) {
    startStatCounters();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startStatCounters();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.45 }
  );

  observer.observe(statsRow);
}

function observeRevealTargets(targets) {
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

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeTab = button.dataset.tab;
    renderTabs();
    renderGallery();
  });
});

document.getElementById("message-trigger").addEventListener("click", openMessageModal);
document.getElementById("contact-trigger").addEventListener("click", openContactModal);
document.getElementById("links-trigger").addEventListener("click", openLinksPopup);
document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("links-close").addEventListener("click", closeLinksPopup);
overlay.addEventListener("click", (event) => {
  if (event.target.dataset.close === "true") {
    closeModal();
  }
});
linksOverlay.addEventListener("click", (event) => {
  if (event.target.dataset.linksClose === "true") {
    closeLinksPopup();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
    closeLinksPopup();
  }
});

statDesigns.dataset.target = profile.designs;
statEdits.dataset.target = profile.edits;
statConcepts.dataset.target = profile.concepts;
document.getElementById("display-name").textContent = profile.displayName;
document.getElementById("website-link").textContent = profile.website;

renderDesktopNav();
renderMobileNav();
renderHighlights();
renderTabs();
renderGallery();
setPage("home");
initMotionEffects();
initStatCounters();

document.getElementById("sidebar-toggle").addEventListener("click", () => {
  document.body.classList.toggle("sidebar-collapsed");
  requestParallaxUpdate();
});
