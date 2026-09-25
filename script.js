/* ==========================================================================
   PONNAM SATHWIK GOUD — PORTFOLIO INTERACTION ENGINE
   Smooth Capsule Navigation, Typing Animation, Scroll Unfolding & Stacking
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initScrollProgressBar();
  initActiveNavCapsule();
  initTypingAnimation();
  initScrollOpenSections();
  initStickyStackingCards();
  initCardSpotlights();
  initClipboardAction();
  initContactForm();
  initMobileNav();
});

/* --------------------------------------------------------------------------
   1. CUSTOM MAGNETIC CURSOR
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  const cursor = document.getElementById('customCursor');
  const follower = document.getElementById('customCursorFollower');
  if (!cursor || !follower) return;

  let mouseX = -100, mouseY = -100;
  let followerX = -100, followerY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  });

  function renderFollower() {
    followerX += (mouseX - followerX) * 0.18;
    followerY += (mouseY - followerY) * 0.18;
    follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderFollower);
  }
  requestAnimationFrame(renderFollower);

  const hoverables = document.querySelectorAll('a, button, .project-item-card, .skill-card, .sticky-stack-card, .contact-card-mini');
  hoverables.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(2.2)`;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%) scale(1.5)`;
      follower.style.borderColor = 'rgba(56, 189, 248, 0.7)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(1)`;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%) scale(1)`;
      follower.style.borderColor = 'rgba(239, 234, 226, 0.4)';
    });
  });
}

/* --------------------------------------------------------------------------
   2. SCROLL PROGRESS BAR
   -------------------------------------------------------------------------- */
function initScrollProgressBar() {
  const progressBar = document.getElementById('scrollProgressBar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.pageYOffset / totalHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(progress, 100)}%`;
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   3. DYNAMIC CAPSULE NAVIGATION ACTIVE STATE
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
   4. TYPING TEXT ANIMATION (Mern Stack Developer)
   -------------------------------------------------------------------------- */
function initTypingAnimation() {
  const typingTarget = document.getElementById('typingRole');
  if (!typingTarget) return;

  const roles = [
    'Mern Stack Developer',
    'Full Stack Web Architect',
    'React & Node.js Engineer',
    'Computer Science Student @ SRU'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 75;
  const deleteSpeed = 40;
  const pauseTime = 1800;

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
   5. SCROLL-OPEN SECTION SYSTEM (Unfolding 3D motion as you scroll)
   -------------------------------------------------------------------------- */
function initScrollOpenSections() {
  const sections = document.querySelectorAll('.scroll-open-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  sections.forEach((s) => observer.observe(s));
}

/* --------------------------------------------------------------------------
   6. SIGNATURE STICKY STACKING CARDS (neomediakey-demo feature)
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

  window.addEventListener('scroll', () => {
    cards.forEach((card, idx) => {
      const rect = card.getBoundingClientRect();
      if (idx < cards.length - 1) {
        const nextCard = cards[idx + 1];
        const nextRect = nextCard.getBoundingClientRect();
        const overlapDistance = (rect.bottom - nextRect.top);

        if (overlapDistance > 0 && rect.top <= (90 + idx * 28) + 10) {
          const compressRatio = Math.min(overlapDistance / 380, 1);
          const scale = 1 - (compressRatio * 0.04);
          const brightness = 1 - (compressRatio * 0.15);
          card.style.transform = `scale(${scale})`;
          card.style.filter = `brightness(${brightness})`;
        } else {
          card.style.transform = 'scale(1)';
          card.style.filter = 'brightness(1)';
        }
      }
    });
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   7. CARD SPOTLIGHT GRADIENTS
   -------------------------------------------------------------------------- */
function initCardSpotlights() {
  const cards = document.querySelectorAll('.project-item-card, .skill-card, .hero-bio-card, .contact-card-mini');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--spotlight-x', `${x}px`);
      card.style.setProperty('--spotlight-y', `${y}px`);
    });
  });
}

/* --------------------------------------------------------------------------
   8. CLIPBOARD ACTION & TOAST ALERT
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
   9. CONTACT FORM SUBMISSION
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
   10. MOBILE DRAWER NAVIGATION
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
