// ==========================================================================
// ISMO Portfolio - Vanilla Interaction Logic (TypeScript)
// ==========================================================================

import "./styles/index.css";

import mePhotoUrl from "./assets/me/me.jpg";

// Import all posters in the assets directory dynamically
const posterGlobals = import.meta.glob<string>('/src/assets/posters/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });

// Import all web mockups in the assets directory dynamically
const webGlobals = import.meta.glob<string>('/src/assets/web/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });

// Helper to get matching asset URL by filename suffix
const getWebMockupUrl = (fileName: string) => {
  const match = Object.entries(webGlobals).find(([key]) => key.endsWith(fileName));
  return match ? match[1] : '';
};

document.addEventListener('DOMContentLoaded', () => {
  initProjects();
  initDynamicGallery();
  initSmoothScrolling();
  initIntersectionObservers();
});

/**
 * Maps dynamic web mockup assets to project card image targets and loads the hero portrait
 */
function initProjects() {
  const heroImg = document.getElementById('hero-photo') as HTMLImageElement;
  if (heroImg) heroImg.setAttribute('data-src', mePhotoUrl);

  const dreamsImg = document.getElementById('project-img-dreams') as HTMLImageElement;
  const spotonImg = document.getElementById('project-img-spoton') as HTMLImageElement;
  const downlyImg = document.getElementById('project-img-downly') as HTMLImageElement;
  const chatdeskImg = document.getElementById('project-img-chatdesk') as HTMLImageElement;

  if (dreamsImg) dreamsImg.setAttribute('data-src', getWebMockupUrl('dreams creations.png'));
  if (spotonImg) spotonImg.setAttribute('data-src', getWebMockupUrl('spoton.png'));
  if (downlyImg) downlyImg.setAttribute('data-src', getWebMockupUrl('Downly.png'));
  if (chatdeskImg) chatdeskImg.setAttribute('data-src', getWebMockupUrl('chatdesk.png'));
}

/**
 * Dynamically loads and populates the posters gallery
 */
function initDynamicGallery() {
  const container = document.getElementById('gallery-container');
  if (!container) return;

  // Base rotation patterns to match organic design
  const rotations = [
    { base: '-1.2deg', hover: '-0.2deg' },
    { base: '1.5deg', hover: '2deg' },
    { base: '-0.5deg', hover: '-1.5deg' },
    { base: '1.8deg', hover: '1deg' }
  ];

  // Map entries sorted by filepath so they stay in order
  const sortedPosterEntries = Object.entries(posterGlobals).sort((a, b) => {
    return a[0].localeCompare(b[0], undefined, { numeric: true, sensitivity: 'base' });
  });

  sortedPosterEntries.forEach(([filePath, url], index) => {
    // Get filename for alt text
    const fileName = filePath.substring(filePath.lastIndexOf('/') + 1);
    
    // Distribute rotations patterns
    const rot = rotations[index % rotations.length];

    // Create the gallery item card element
    const card = document.createElement('div');
    card.className = 'gallery-item-card';
    card.style.setProperty('--rotation-base', rot.base);
    card.style.setProperty('--rotation-hover', rot.hover);
    card.style.transform = `rotate(${rot.base})`;
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View poster design: ${fileName}`);

    card.innerHTML = `
      <div class="pin-tack" aria-hidden="true"></div>
      <div class="gallery-item-image-wrapper">
        <img 
          class="lazy-image" 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3C/svg%3E" 
          data-src="${url}" 
          alt="Poster design artwork: ${fileName}" 
        />
      </div>
    `;

    // Click handler to open lightbox
    card.addEventListener('click', () => {
      openLightbox(url as string, fileName, card);
    });

    // Keyboard support: Open on Enter or Space
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(url as string, fileName, card);
      }
    });

    container.appendChild(card);
  });

  // Trigger lazy loading and lightbox event bindings
  initLazyLoading();
  initLightbox();
}

/**
 * Binds click events to CTA buttons to perform smooth scrolling
 */
function initSmoothScrolling() {
  const btnViewWork = document.getElementById('btn-view-work');
  const targetSection = document.getElementById('page-projects');

  if (btnViewWork && targetSection) {
    btnViewWork.addEventListener('click', (e) => {
      e.preventDefault();
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
}

/**
 * Initializes Intersection Observers for fade-ins and SVG path drawing animations
 */
function initIntersectionObservers() {
  // 1. Observer for Notebook Page fade-ins
  const pageObserverOptions = {
    root: null, // Viewport
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of the page is visible
  };

  const pageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Unobserve after showing to avoid repeat animations
        pageObserver.unobserve(entry.target);
      }
    });
  }, pageObserverOptions);

  const pages = document.querySelectorAll('.fade-in-section');
  pages.forEach(page => pageObserver.observe(page));

  // 2. Observer for SVG handwritten drawings & highlighters
  const drawingObserverOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px', // Trigger slightly before it fully crosses the bottom
    threshold: 0.1
  };

  // Pre-calculate path lengths for perfect drawing animations
  const svgPaths = document.querySelectorAll<SVGPathElement>('.draw-path');
  svgPaths.forEach(path => {
    try {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    } catch (e) {
      console.warn('Failed to get SVG path length', e);
    }
  });

  const drawingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('draw-active');
        // Unobserve to run the animation exactly once
        drawingObserver.unobserve(entry.target);
      }
    });
  }, drawingObserverOptions);

  // Targets: SVG wrappers, underlines, and highlighters
  const drawingTargets = document.querySelectorAll(
    '.cover-subtitle-wrapper, .arrow-container, .note-item.note-1, .underline-text, .header-note-wrapper, .highlighter-text, .quote-box-wrapper, .contact-arrow-decoration'
  );
  drawingTargets.forEach(target => drawingObserver.observe(target));
}

/**
 * Implements modern lazy loading with fallbacks for images
 */
function initLazyLoading() {
  const ERROR_IMG_SRC = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

  const lazyImages = document.querySelectorAll<HTMLImageElement>('.lazy-image');

  const lazyImageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.getAttribute('data-src');

        if (src) {
          // Set error handler fallback before loading
          img.addEventListener('error', function handleError() {
            img.src = ERROR_IMG_SRC;
            img.style.objectFit = 'contain';
            img.style.padding = '1rem';
            img.classList.add('loaded');
            img.removeEventListener('error', handleError);
          });

          // Begin loading
          img.src = src;
          img.addEventListener('load', function handleLoad() {
            img.classList.add('loaded');
            img.removeEventListener('load', handleLoad);
          });
        }
        
        lazyImageObserver.unobserve(img);
      }
    });
  }, {
    root: null,
    rootMargin: '100px 0px' // Start loading 100px before entry to feel instant
  });

  lazyImages.forEach(img => lazyImageObserver.observe(img));
}

/**
 * Initializes the lightbox container listeners
 */
let lastFocusedElement: HTMLElement | null = null;

function initLightbox() {
  const lightbox = document.getElementById('gallery-lightbox');
  const closeBtn = document.getElementById('lightbox-close');

  if (!lightbox || !closeBtn) return;

  // Close lightbox on button click
  closeBtn.addEventListener('click', () => {
    closeLightbox();
  });

  // Close lightbox on click outside the image content wrapper
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.getAttribute('aria-hidden') === 'false') {
      closeLightbox();
    }
  });
}

function openLightbox(url: string, fileName: string, triggerElement: HTMLElement) {
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-image') as HTMLImageElement;
  const closeBtn = document.getElementById('lightbox-close');

  if (!lightbox || !lightboxImg || !closeBtn) return;

  // Save trigger for accessible focus return
  lastFocusedElement = triggerElement;

  // Set content
  lightboxImg.src = url;
  lightboxImg.alt = `Enlarged poster design artwork: ${fileName}`;
  lightbox.setAttribute('aria-hidden', 'false');

  // Move focus to close button
  closeBtn.focus();
}

function closeLightbox() {
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-image') as HTMLImageElement;

  if (!lightbox || !lightboxImg) return;

  lightbox.setAttribute('aria-hidden', 'true');
  
  // Clear image source after transition completes to prevent flashing
  setTimeout(() => {
    if (lightbox.getAttribute('aria-hidden') === 'true') {
      lightboxImg.src = '';
    }
  }, 400);

  // Return focus to the original card
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}