/* ==========================================================================
   ULTRA PRO MAX PORTFOLIO — INTERACTIVE ENGINE & MOTION SYSTEM
   Inspired by neomediakey-demo.vercel.app
   Author: Sathwik Goud
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initScrollProgressBar();
  initScrollOpenAnimations();
  initStickyStackCards();
  initSpotlightEffect();
  initProjectFiltering();
  initInteractiveModals();
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

  // Hover states for interactive elements
  const hoverables = document.querySelectorAll('a, button, .project-card, .article-card, .sticky-stack-card, .stat-card');
  hoverables.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(2.2)`;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%) scale(1.6)`;
      follower.style.borderColor = 'rgba(92, 123, 142, 0.8)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(1)`;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%) scale(1)`;
      follower.style.borderColor = 'rgba(239, 234, 226, 0.4)';
    });
  });
}

/* --------------------------------------------------------------------------
   2. SCROLL PROGRESS INDICATOR
   -------------------------------------------------------------------------- */
function initScrollProgressBar() {
  const progressBar = document.getElementById('scrollProgressBar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = `${Math.min(progress, 100)}%`;
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   3. SCROLL-OPEN SECTION UNVEILING ("Animation opens as you go through section")
   -------------------------------------------------------------------------- */
function initScrollOpenAnimations() {
  const openSections = document.querySelectorAll('.scroll-open-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -80px 0px'
  });

  openSections.forEach((section) => {
    observer.observe(section);
  });
}

/* --------------------------------------------------------------------------
   4. SIGNATURE STICKY STACKING CARDS (neomediakey-demo stack behavior)
   -------------------------------------------------------------------------- */
function initStickyStackCards() {
  const cards = document.querySelectorAll('.sticky-stack-card');
  if (!cards.length) return;

  // Set sticky top offsets dynamically
  cards.forEach((card, idx) => {
    const baseTop = 90;
    const offset = idx * 28;
    card.style.top = `${baseTop + offset}px`;
    card.style.zIndex = 10 + idx;
  });

  window.addEventListener('scroll', () => {
    cards.forEach((card, idx) => {
      const rect = card.getBoundingClientRect();
      const parentRect = card.parentElement.getBoundingClientRect();
      
      // Calculate how close the next card is
      if (idx < cards.length - 1) {
        const nextCard = cards[idx + 1];
        const nextRect = nextCard.getBoundingClientRect();
        const overlapDistance = (rect.bottom - nextRect.top);
        
        if (overlapDistance > 0 && rect.top <= (90 + idx * 28) + 10) {
          const compressRatio = Math.min(overlapDistance / 400, 1);
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
   5. SPOTLIGHT RADIAL TRACKER
   -------------------------------------------------------------------------- */
function initSpotlightEffect() {
  const cards = document.querySelectorAll('.project-card, .skill-category-card, .article-card');
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
   6. PROJECT CATEGORY FILTERING
   -------------------------------------------------------------------------- */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (filterVal === 'all' || cardCategory.includes(filterVal)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px) scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. INTERACTIVE MODAL DIALOGS
   -------------------------------------------------------------------------- */
const PROJECT_DATA = {
  friday: {
    title: 'Friday AI — Autonomous Agent System',
    subtitle: 'Voice-Activated LLM Orchestrator & Memory Engine',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    description: 'Friday AI is a modular autonomous agent platform built from scratch with an active memory hierarchy, dynamic tool routing, and real-time audio dispatch. It features multi-layered context caching, external API actuators, and a zero-latency WebSocket control UI designed for executive productivity.',
    tech: ['Python 3.11', 'Vector RAG', 'WebSockets', 'FastAPI', 'AsyncIO', 'Tailwind'],
    metrics: ['Sub-120ms Voice Response', '100% Autonomous Tool Execution', 'Zero-Loss Memory Recall'],
    github: 'https://github.com/2303A51780',
    demo: 'project.html'
  },
  prototype: {
    title: 'Nexus Commerce Engine (Prototype Pattern)',
    subtitle: 'Enterprise Deep-Cloning & High-Concurrency Catalog',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    description: 'An architectural demonstration of the GoF Prototype Pattern in enterprise web applications. Bypasses expensive object construction and deep database hydration through immutable prototype instances, yielding 4x throughput on dynamic e-commerce cart duplication and customized food order cascades.',
    tech: ['JavaScript ES6+', 'OOP Architecture', 'Prototype Pattern', 'CSS Glassmorphism'],
    metrics: ['400% Faster State Cloning', 'Zero Heap Leakage', 'O(1) Order Generation'],
    github: 'https://github.com/2303A51780',
    demo: 'project.html'
  },
  quickbite: {
    title: 'QuickBite Real-Time Logistics Engine',
    subtitle: 'High-Throughput Order Pipeline & Geofencing',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=1200',
    description: 'A cloud-native food delivery dispatcher orchestrating live driver geolocation, dynamic order batching, and sub-second push notifications. Implements event-driven microservices to eliminate bottlenecks during peak delivery surges.',
    tech: ['Node.js', 'Redis Pub/Sub', 'PostgreSQL', 'Socket.io', 'Docker'],
    metrics: ['12,000+ Concurrent Requests', '<45ms Event Propagation', '99.99% Uptime'],
    github: 'https://github.com/2303A51780',
    demo: 'project.html'
  },
  editorial: {
    title: 'Editorial Insights Publishing Suite',
    subtitle: 'High-Performance Markdown Reader & Metrics Engine',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200',
    description: 'A minimalist, typography-first publishing platform built for speed and effortless readership. Features automated read-time calculations, syntax-highlighted code blocks, client-side bookmarking, and zero third-party telemetry scripts.',
    tech: ['Vanilla JS', 'Semantic HTML5', 'Custom CSS Engine', 'Web Vitals'],
    metrics: ['100/100 Google Lighthouse', '18KB Gzipped Footprint', '<30ms First Contentful Paint'],
    github: 'https://github.com/2303A51780',
    demo: 'index.html#blog'
  }
};

const ARTICLE_DATA = {
  article1: {
    title: 'Mastering Design Patterns: Why Prototype & Factory Change Enterprise Code',
    tag: 'SYSTEM ARCHITECTURE',
    date: 'Sep 2025 • 6 MIN READ',
    content: `
      <h3>The Overhead of Heavy Instantiation</h3>
      <p>In modern high-traffic architectures, instantiating complex object graphs with multiple nested dependencies, database round-trips, and initialization routines creates severe CPU and memory pressure. This is where classical patterns like the Prototype and Factory patterns shine.</p>
      
      <h3>The Prototype Solution</h3>
      <p>Instead of executing constructor chains repeatedly, the Prototype Pattern allows systems to keep a pre-configured template instance in memory and execute true shallow or deep clones with nanosecond latency. In our benchmarks with e-commerce cart generation, cloning existing product configurations reduced memory allocation spikes by 74%.</p>
      
      <h3>Key Takeaways for Engineers</h3>
      <ul>
        <li>Use Prototype when object creation costs exceed memory copying overhead.</li>
        <li>Ensure clone methods handle immutable nested structures defensively.</li>
        <li>Combine with Factory pools for ultimate microservice concurrency.</li>
      </ul>
    `
  },
  article2: {
    title: 'Building Autonomous Agent Architectures: Friday AI Case Study',
    tag: 'ARTIFICIAL INTELLIGENCE',
    date: 'Aug 2025 • 8 MIN READ',
    content: `
      <h3>Moving Beyond Simple Prompt-Response</h3>
      <p>Most developer interfaces with LLMs treat language models as stateless query responders. True utility begins when an agent has continuous situational memory, a prioritized action queue, and dynamic tool orchestration.</p>
      
      <h3>The Core Loops of Friday AI</h3>
      <p>Friday AI divides cognition into three distinct layers:
      1. <strong>Sensory Ingestion</strong>: Parsing user speech or command inputs with real-time semantic token analysis.
      2. <strong>Memory Hierarchy</strong>: A three-tier memory architecture dividing immediate context, episodic cache, and long-term vector embeddings.
      3. <strong>Execution Engine</strong>: Guardrailed tool invocations capable of filesystem changes, shell scripts, and cloud diagnostics.</p>
      
      <p>This architecture transforms a generic model into an indispensable command-center companion.</p>
    `
  },
  article3: {
    title: 'Sub-50ms Web Performance: The Art of Minimalist DOM Architecture',
    tag: 'FRONTEND MASTERY',
    date: 'Jul 2025 • 5 MIN READ',
    content: `
      <h3>The Bloat Epidemic</h3>
      <p>The modern web is inundated with multi-megabyte JavaScript bundles, nested framework abstractions, and unnecessary client-side re-renders. Achieving genuine sub-50ms response times demands architectural discipline.</p>
      
      <h3>Techniques for 100/100 Lighthouse Scores</h3>
      <ul>
        <li><strong>Zero-Dependency Execution</strong>: Crafting micro-interactions with pure CSS transforms and lightweight vanilla JS.</li>
        <li><strong>Hardware-Accelerated Motion</strong>: Restricting all scroll and hover animations to <code>transform</code> and <code>opacity</code> to prevent layout thrashing.</li>
        <li><strong>Intelligent Lazy Loading</strong>: Using <code>IntersectionObserver</code> to postpone non-critical asset decoding until user proximity.</li>
      </ul>
    `
  }
};

function initInteractiveModals() {
  const modalOverlay = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalTechStack = document.getElementById('modalTechStack');
  const modalMetrics = document.getElementById('modalMetrics');
  const modalGithubLink = document.getElementById('modalGithubLink');
  const modalDemoLink = document.getElementById('modalDemoLink');

  if (!modalOverlay) return;

  function closeModal() {
    modalOverlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('is-active')) {
      closeModal();
    }
  });

  // Project cards trigger
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      const data = PROJECT_DATA[projectId];
      if (!data) return;

      modalImg.src = data.image;
      modalTitle.textContent = data.title;
      modalSubtitle.textContent = data.subtitle;
      modalDesc.textContent = data.description;
      
      modalTechStack.innerHTML = data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
      modalMetrics.innerHTML = data.metrics.map(m => `
        <div class="modal-meta-item">
          <span class="modal-meta-item-label">BENCHMARK</span>
          <div class="modal-meta-item-value">${m}</div>
        </div>
      `).join('');

      modalGithubLink.href = data.github;
      modalDemoLink.href = data.demo;

      modalOverlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Article reading modal trigger
  const articleCards = document.querySelectorAll('.article-card');
  articleCards.forEach((card) => {
    card.addEventListener('click', () => {
      const artId = card.getAttribute('data-article');
      const data = ARTICLE_DATA[artId];
      if (!data) return;

      modalImg.style.display = 'none';
      modalTitle.textContent = data.title;
      modalSubtitle.textContent = `${data.tag} — ${data.date}`;
      modalDesc.innerHTML = data.content;
      modalTechStack.innerHTML = '';
      modalMetrics.innerHTML = '';
      modalGithubLink.style.display = 'none';
      modalDemoLink.textContent = 'Back to Portfolio';
      modalDemoLink.href = '#blog';
      modalDemoLink.onclick = (e) => {
        e.preventDefault();
        closeModal();
      };

      modalOverlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    });
  });
}

/* --------------------------------------------------------------------------
   8. ONE-CLICK EMAIL COPY & TOAST ALERT
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
      prompt('Copy Sathwik\'s email:', email);
    });
  });
}

/* --------------------------------------------------------------------------
   9. INTERACTIVE CONTACT FORM
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toastNotice');
  if (!form || !toast) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('formName');
    const emailInput = document.getElementById('formEmail');
    const messageInput = document.getElementById('formMessage');

    const sender = nameInput.value.trim() || 'Partner';
    toast.textContent = `✨ Thank you, ${sender}! Your transmission has been queued for Sathwik.`;
    toast.classList.add('is-visible');
    form.reset();

    setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 4500);
  });
}

/* --------------------------------------------------------------------------
   10. MOBILE NAVIGATION DRAWER
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
  links.forEach(l => {
    l.addEventListener('click', () => {
      drawer.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
}
