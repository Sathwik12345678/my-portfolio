/* ==========================================================================
   PONNAM SATHWIK GOUD — PORTFOLIO INTERACTION ENGINE
   Smooth Capsule Navigation, Typing Animation, Scroll Unfolding & Stacking
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgressBar();
  initActiveNavCapsule();
  initTypingAnimation();
  initScrollOpenSections();
  initStickyStackingCards();
  initHeroPhotoFlow();
  initClipboardAction();
  initContactForm();
  initMobileNav();
});

/* --------------------------------------------------------------------------
   1. SCROLL PROGRESS BAR
   -------------------------------------------------------------------------- */
function initScrollProgressBar() {
  const progressBar = document.getElementById('scrollProgressBar');
  if (!progressBar) return;

  let framePending = false;
  const updateProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.pageYOffset / totalHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(progress, 100)}%`;
    framePending = false;
  };

  window.addEventListener('scroll', () => {
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(updateProgress);
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   2. DYNAMIC CAPSULE NAVIGATION ACTIVE STATE
   -------------------------------------------------------------------------- */
function initActiveNavCapsule() {
  const links = document.querySelectorAll('.nav-capsule-link, .mobile-nav-link');
  const path = window.location.pathname.toLowerCase();

  links.forEach((link) => {
    const href = link.getAttribute('href').toLowerCase();
    
    // Check if link matches current page
    if (path.endsWith(href) || (href === 'index.html' && (path.endsWith('/') || path.endsWith('/my-portfolio/')))) {
      link.classList.add('is-active');
    } else if (href === 'projects.html' && path.includes('projects')) {
      link.classList.add('is-active');
    } else if (href === 'resume.html' && path.includes('resume')) {
      link.classList.add('is-active');
    } else if (href === 'contact.html' && path.includes('contact')) {
      link.classList.add('is-active');
    }
  });
}

/* --------------------------------------------------------------------------
   3. TYPING TEXT ANIMATION (Software Developer)
   -------------------------------------------------------------------------- */
function initTypingAnimation() {
  const typingTarget = document.getElementById('typingRole');
  if (!typingTarget) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    typingTarget.textContent = 'Software Developer';
    return;
  }

  const roles = [
    'Software Developer',
    'Web Developer',
    'React & Node.js Engineer',
    'Computer Science Student @ SRU'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 105;
  const deleteSpeed = 60;
  const pauseTime = 2400;

  function typeStep() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      charIdx--;
      typingTarget.textContent = currentRole.substring(0, charIdx);
      if (charIdx <= 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(typeStep, 350);
        return;
      }
      setTimeout(typeStep, deleteSpeed);
    } else {
      charIdx++;
      typingTarget.textContent = currentRole.substring(0, charIdx);
      if (charIdx === currentRole.length) {
        isDeleting = true;
        setTimeout(typeStep, pauseTime);
        return;
      }
      setTimeout(typeStep, typeSpeed);
    }
  }

  typeStep();
}

/* --------------------------------------------------------------------------
   4. SCROLL-OPEN SECTION SYSTEM
   -------------------------------------------------------------------------- */
function initScrollOpenSections() {
  const sections = document.querySelectorAll('.scroll-open-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  sections.forEach((s) => observer.observe(s));
}

/* --------------------------------------------------------------------------
   5. STICKY STACKING CARDS
   -------------------------------------------------------------------------- */
function initStickyStackingCards() {
  const cards = document.querySelectorAll('.sticky-stack-card');
  if (!cards.length) return;

  cards.forEach((card, idx) => {
    const baseTop = 90;
    const offset = idx * 28;
    card.style.top = `${baseTop + offset}px`;
    card.style.zIndex = 10 + idx;
  });

}

/* --------------------------------------------------------------------------
   6. HERO PHOTO FLOW
   -------------------------------------------------------------------------- */
function initHeroPhotoFlow() {
  const landing = document.querySelector('.home-hero');
  const photo = document.querySelector('.profile-avatar-motion');
  const placeholder = document.querySelector('.hero-photo-placeholder');
  if (!landing || !photo || !placeholder) return;

  let framePending = false;
  let offsetX = 0;
  let offsetY = 0;

  const updatePhotoPosition = () => {
    const scrollY = window.scrollY;
    const photoRect = photo.getBoundingClientRect();
    const photoLeft = photoRect.left - offsetX;
    const photoTop = photoRect.top - offsetY;
    const placeholderRect = placeholder.getBoundingClientRect();
    const landingTop = landing.getBoundingClientRect().top + scrollY;
    const progress = Math.max(0, Math.min(1, (scrollY - landingTop) / landing.offsetHeight));
    const easedProgress = progress * progress * (3 - 2 * progress);
    const sourceX = placeholderRect.left + window.scrollX + placeholderRect.width / 2 - photoRect.width / 2;
    const sourceY = placeholderRect.top + scrollY + placeholderRect.height / 2 - photoRect.height / 2;
    const targetX = photoLeft + window.scrollX;
    const targetY = photoTop + scrollY;

    offsetX = (sourceX + (targetX - sourceX) * easedProgress) - targetX;
    offsetY = (sourceY + (targetY - sourceY) * easedProgress) - targetY;
    photo.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    framePending = false;
  };

  const scheduleUpdate = () => {
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(updatePhotoPosition);
  };

  updatePhotoPosition();
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
}

/* --------------------------------------------------------------------------
   7. CLIPBOARD ACTION & TOAST ALERT
   -------------------------------------------------------------------------- */
function initClipboardAction() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const toast = document.getElementById('toastNotice');
  if (!copyBtn || !toast) return;

  copyBtn.addEventListener('click', () => {
    const email = 'goudsathwik55@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      toast.textContent = `✓ Copied "${email}" to clipboard`;
      toast.classList.add('is-visible');
      setTimeout(() => {
        toast.classList.remove('is-visible');
      }, 3200);
    }).catch(() => {
      prompt('Copy email:', email);
    });
  });
}

/* --------------------------------------------------------------------------
   8. CONTACT FORM SUBMISSION
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toastNotice');
  if (!form || !toast) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('formName');
    const sender = nameInput ? nameInput.value.trim() : 'Friend';

    toast.textContent = `✨ Thank you, ${sender}! Your message has been sent to Sathwik.`;
    toast.classList.add('is-visible');
    form.reset();

    setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 4500);
  });
}

/* --------------------------------------------------------------------------
   9. MOBILE DRAWER NAVIGATION
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const trigger = document.getElementById('mobileMenuTrigger');
  const drawer = document.getElementById('mobileNavDrawer');
  const links = document.querySelectorAll('.mobile-nav-link');
  if (!trigger || !drawer) return;

  function toggleMenu() {
    const isOpen = drawer.classList.contains('is-open');
    if (isOpen) {
      drawer.classList.remove('is-open');
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  }

  trigger.addEventListener('click', toggleMenu);
  links.forEach((l) => {
    l.addEventListener('click', () => {
      drawer.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
}
