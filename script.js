/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO SCRIPTS — Siddhartha Gudiwada
   ══════════════════════════════════════════════════════════════ */

// ── CUSTOM CURSOR ──────────────────────────────────────────────
const cursor = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');

if (cursor && cursorTrail) {
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let trailX = 0, trailY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function animateCursor() {
    // Center logic: we apply the coordinates via translate3d
    // and a separate translate(-50%, -50%) to ensure it's centered on point
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

    trailX += (mouseX - trailX) * 0.12;
    trailY += (mouseY - trailY) * 0.12;
    cursorTrail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(animateCursor);
  }
  requestAnimationFrame(animateCursor);
}

// ── NAVBAR SCROLL & ACTIVE LINK ────────────────────────────────
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

// Optimized navbar background toggle (Throttled)
let lastScrollY = 0;
let scrollTicking = false;

window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    window.requestAnimationFrame(() => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      scrollTicking = false;
    });
    scrollTicking = true;
  }
}, { passive: true });

// IntersectionObserver for highly efficient active link tracking
const navObserverOptions = { threshold: 0.5, rootMargin: "-10% 0px -40% 0px" };
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, navObserverOptions);

sections.forEach(section => navObserver.observe(section));

// ── HAMBURGER MENU ─────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── INTERSECTION OBSERVER (AOS) ────────────────────────────────
const aosEls = document.querySelectorAll('[data-aos]');
const aosObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Staggered delay based on sibling index
      const siblings = [...entry.target.parentElement.children]
        .filter(el => el.hasAttribute('data-aos'));
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = (idx * 0.08) + 's';
      entry.target.classList.add('aos-visible');
      aosObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

aosEls.forEach(el => aosObserver.observe(el));

// ── SMOOTH SCROLL ──────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ── CASE STUDY MODAL ───────────────────────────────────────────
const csModal   = document.getElementById('case-study-modal');
const csFrame   = document.getElementById('case-study-frame');
const csClose   = csModal.querySelector('.cs-close');
const csBackdrop = csModal.querySelector('.cs-backdrop');

const projectUrls = {
  'vehicle-bay': 'vehicle-bay-case-study/dist/index.html'
};

function openCaseStudy(projectId) {
  const url = projectUrls[projectId];
  if (!url) return;
  csFrame.src = url;
  csModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  csFrame.onload = () => csFrame.classList.add('loaded');
}

function closeCaseStudy() {
  csModal.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => {
    csFrame.src = '';
    csFrame.classList.remove('loaded');
  }, 400);
}

document.querySelectorAll('.case-study-trigger').forEach(btn => {
  btn.addEventListener('click', () => openCaseStudy(btn.dataset.project));
});

csClose.addEventListener('click', closeCaseStudy);
csBackdrop.addEventListener('click', closeCaseStudy);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && csModal.classList.contains('active')) closeCaseStudy();
});


// ── PROCESS STEPPER ───────────────────────────────────────────
const steps = document.querySelectorAll('.step');
const phases = document.querySelectorAll('.phase-card');
const dots = document.querySelectorAll('.p-dot');
const progress = document.querySelector('.stepper-progress');

if (steps.length > 0) {
  steps.forEach((step, index) => {
    step.addEventListener('click', () => {
      // Update Stepper
      steps.forEach((s, idx) => {
        s.classList.toggle('active', idx === index);
        s.classList.toggle('completed', idx < index);
      });

      // Update Cards
      phases.forEach((p, idx) => {
        p.classList.toggle('active', idx === index);
      });

      // Update Dots
      dots.forEach((d, idx) => {
        d.classList.toggle('active', idx === index);
      });

      // Update Progress Line
      const percent = (index / (steps.length - 1)) * 100;
      progress.style.width = `${percent}%`;
    });
  });
}
