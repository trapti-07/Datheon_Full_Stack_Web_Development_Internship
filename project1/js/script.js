'use strict';

const PORTFOLIO_CONFIG = {
  authorName: "Trapti Katre",
  email: "traptikatre2006@gmail.com",
  github: "https://github.com/trapti-07",
  linkedin: "https://www.linkedin.com/in/trapti-katre-61a007339?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  resumePath: "assets/TraptiKatre-resume.pdf"
};
const PROJECTS_DATA = {
  helvare: {
    title: "Helvare AI",
    category: "Emergency Assistance Platform",
    badge: "React &bull; JavaScript &bull; Artificial Intelligence",
    repoUrl: "https://github.com/trapti-07/OIST-ACM-AOC-CodeX",
    desc: "An intelligent emergency response and real-time medical incident assistance web platform featuring dispatch tracking, interactive alerts, and automated first-aid guidance.",
    features: [
      "Real-time incident reporting and dispatch interface.",
      "Emergency notification workflow and ambulance tracking views.",
      "Automated first-aid and medical guidance panels."
    ],
    tech: ["React", "JavaScript", "Vite", "Tailwind CSS", "Artificial Intelligence"]
  },

  campus: {
    title: "Campus Event Management System",
    category: "Full-Stack Management Portal",
    badge: "React &bull; Node.js &bull; Express.js",
    repoUrl: null,
    desc: "A role-based event and task management application designed for campus operations, providing administrative oversight, task tracking, and participant coordination dashboards.",
    features: [
      "Role-based administrative and team member dashboards.",
      "Event creation, operational task assignment, and progress tracking.",
      "Modular backend architecture powered by Node.js and Express.js."
    ],
    tech: ["React", "Node.js", "Express.js", "JavaScript", "Tailwind CSS"]
  },

  quizpilot: {
    title: "QuizPilot",
    category: "Smart Revision Assistant",
    badge: "React.js &bull; Node.js &bull; Express.js &bull; MongoDB",
    repoUrl: "https://github.com/trapti-07/QuizPilot",
    desc: "An AI-powered revision and exam preparation assistant that generates practice quizzes, tracks student performance, detects weak topic areas, and delivers structured study plans.",
    features: [
      "Automated quiz generation and revision planning.",
      "Performance evaluation and topic weakness detection.",
      "Full-stack MERN architecture backed by MongoDB document storage."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Artificial Intelligence"]
  },

  zoomclone: {
    title: "Zoom Video Conferencing Clone",
    category: "Real-Time Video Platform",
    badge: "WebRTC &bull; Socket.io &bull; Node.js &bull; Express.js",
    repoUrl: "https://github.com/trapti-07/zoom-clone",
    desc: "A real-time video conferencing web application designed to replicate core Zoom capabilities, enabling seamless multi-participant video and audio meetings, screen sharing, and instant in-meeting messaging.",
    features: [
      "Peer-to-peer real-time video and high-definition audio streaming built on WebRTC and PeerJS.",
      "Dynamic meeting room creation with unique shareable links and room IDs.",
      "Interactive meeting controls including mute/unmute audio, video toggle, screen sharing, and live text chat.",
      "Scalable backend architecture utilizing Socket.io for signaling and room management."
    ],
    tech: ["WebRTC", "Socket.io", "Node.js", "Express.js", "JavaScript", "PeerJS", "CSS3"]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initSkillsFilter();
  initProjectModals();
  initResumeDownload();
  initContactForm();
  initClipboard();
  initBackToTop();
  updateCurrentYear();
  initTypewriter();
  initScrollAnimations();
  initScrollProgressBar();
  initHeroParticles();
  initCard3DTiltAndGlare();
  initButtonRipples();
});

function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = htmlElement.getAttribute('data-theme') || 'dark';
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showToast(`Switched to ${newTheme} mode`, 'success');
    });
  }

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('portfolio-theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}

function applyTheme(theme) {
  const htmlElement = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  htmlElement.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
  
  if (themeToggleBtn) {
    const isDark = theme === 'dark';
    themeToggleBtn.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
    themeToggleBtn.setAttribute('title', `Switch to ${isDark ? 'light' : 'dark'} mode`);
  }
}

function initNavigation() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const menuBackdrop = document.getElementById('menu-backdrop');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMenu(isOpen) {
    const shouldOpen = isOpen !== undefined ? isOpen : !navMenu.classList.contains('is-active');
    
    if (shouldOpen) {
      navMenu.classList.add('is-active');
      menuToggle.classList.add('is-active');
      menuBackdrop.classList.add('is-active');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      navMenu.classList.remove('is-active');
      menuToggle.classList.remove('is-active');
      menuBackdrop.classList.remove('is-active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => toggleMenu());
  }

  if (menuBackdrop) {
    menuBackdrop.addEventListener('click', () => toggleMenu(false));
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          toggleMenu(false);
          const headerHeight = document.getElementById('header')?.offsetHeight || 72;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight + 5;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('is-active')) {
      toggleMenu(false);
    }
  });

  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }

  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });
}

function initSkillsFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      const filterValue = button.getAttribute('data-filter');
      let delay = 0;

      skillCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        const isMatch = filterValue === 'all' || categories.split(' ').includes(filterValue);

        card.classList.remove('is-filtered-in');

        if (isMatch) {
          card.classList.remove('is-filtered-out');
          card.style.animationDelay = `${delay * 0.05}s`;
          // Force reflow to retrigger animation
          void card.offsetWidth;
          card.classList.add('is-filtered-in');
          delay++;
        } else {
          card.classList.add('is-filtered-out');
        }
      });
    });
  });
}

function initProjectModals() {
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalDismissBtn = document.getElementById('modal-dismiss-btn');
  const modalTitle = document.getElementById('modal-project-title');
  const modalBadge = document.getElementById('modal-project-badge');
  const modalDesc = document.getElementById('modal-project-desc');
  const modalFeatures = document.getElementById('modal-project-features');
  const modalTech = document.getElementById('modal-project-tech');
  const modalRepoBtn = document.getElementById('modal-repo-btn');

  function openModal(modal) {
    if (!modal) return;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.btn-details').forEach(button => {
    button.addEventListener('click', () => {
      const projectKey = button.getAttribute('data-project');
      const data = PROJECTS_DATA[projectKey];
      if (!data) return;

      modalTitle.textContent = data.title;
      modalBadge.innerHTML = data.badge;
      modalDesc.textContent = data.desc;

      modalFeatures.innerHTML = '';
      data.features.forEach(feat => {
        const li = document.createElement('li');
        li.textContent = feat;
        modalFeatures.appendChild(li);
      });

      modalTech.innerHTML = '';
      data.tech.forEach(t => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = t;
        modalTech.appendChild(span);
      });

      if (modalRepoBtn) {
        if (data.repoUrl) {
          modalRepoBtn.href = data.repoUrl;
          modalRepoBtn.style.display = 'inline-flex';
        } else {
          modalRepoBtn.style.display = 'none';
        }
      }

      openModal(projectModal);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => closeModal(projectModal));
  }

  if (modalDismissBtn) {
    modalDismissBtn.addEventListener('click', () => closeModal(projectModal));
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeModal(projectModal);
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && !projectModal.hasAttribute('hidden')) {
      closeModal(projectModal);
    }
  });
}

function initResumeDownload() {
  const downloadBtn = document.getElementById('resume-download-btn');
  const btnText = document.getElementById('resume-btn-text');
  const statusBadge = document.getElementById('resume-status-badge');
  const heroResumeBtn = document.getElementById('hero-resume-btn');
  const heroResumeText = document.getElementById('hero-resume-text');
  if (!downloadBtn) return;

  const resumeUrl = PORTFOLIO_CONFIG.resumePath; 

  function showDownloadAvailable() {
    downloadBtn.style.display = 'inline-flex';
    downloadBtn.setAttribute('href', resumeUrl);
    downloadBtn.setAttribute('download', 'TraptiKatre-resume.pdf');
    if (btnText) btnText.textContent = 'Download Resume';
    if (statusBadge) statusBadge.style.display = 'none';

    if (heroResumeBtn) {
      heroResumeBtn.setAttribute('href', resumeUrl);
      heroResumeBtn.setAttribute('download', 'TraptiKatre-resume.pdf');
      if (heroResumeText) heroResumeText.textContent = 'Download Resume';
    }
  }

  function showComingSoon() {
    downloadBtn.style.display = 'none';
    if (statusBadge) statusBadge.style.display = 'inline-flex';

    if (heroResumeBtn) {
      heroResumeBtn.setAttribute('href', '#resume');
      heroResumeBtn.removeAttribute('download');
      if (heroResumeText) heroResumeText.textContent = 'Resume Details';
    }
  }

  fetch(resumeUrl, { method: 'HEAD' })
    .then(response => {
      if (response.ok) {
        showDownloadAvailable();
      } else {
        showComingSoon();
      }
    })
    .catch(() => {
      showDownloadAvailable();
    });

  downloadBtn.addEventListener('click', () => {
    showToast('Downloading TraptiKatre-resume.pdf...', 'success');
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameInput.classList.add('is-invalid');
      nameError.classList.add('is-visible');
      isValid = false;
    } else {
      nameInput.classList.remove('is-invalid');
      nameError.classList.remove('is-visible');
    }

    if (!validateEmail(emailInput.value.trim())) {
      emailInput.classList.add('is-invalid');
      emailError.classList.add('is-visible');
      isValid = false;
    } else {
      emailInput.classList.remove('is-invalid');
      emailError.classList.remove('is-visible');
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageInput.classList.add('is-invalid');
      messageError.classList.add('is-visible');
      isValid = false;
    } else {
      messageInput.classList.remove('is-invalid');
      messageError.classList.remove('is-visible');
    }

    if (!isValid) {
      showToast('Please correct the highlighted fields.', 'error');
      return;
    }

    const submitBtn = document.getElementById('form-submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending...</span>`;

    setTimeout(() => {
      showToast('Thank you! Your message has been sent successfully.', 'success');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }, 600);
  });

  [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('is-invalid');
      const err = input.parentElement.querySelector('.error-msg');
      if (err) err.classList.remove('is-visible');
    });
  });
}


function initClipboard() {
  const email = PORTFOLIO_CONFIG.email || "traptikatre2006@gmail.com";

  function copyTextToClipboard(text, notify = true) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => {
          if (notify) showToast(`Email copied to clipboard: ${text}`, 'success');
        })
        .catch(() => {
          fallbackCopy(text, notify);
        });
    } else {
      fallbackCopy(text, notify);
    }
  }

  function fallbackCopy(text, notify = true) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    tempInput.setAttribute('readonly', '');
    tempInput.style.position = 'absolute';
    tempInput.style.left = '-9999px';
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      if (notify) showToast(`Email copied to clipboard: ${text}`, 'success');
    } catch (e) {
      if (notify) showToast(`Email address: ${text}`, 'info');
    }
    document.body.removeChild(tempInput);
  }

  function handleEmailClick(e) {
    if (e) e.preventDefault();

    copyTextToClipboard(email, true);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    const newTab = window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
      setTimeout(() => {
        window.location.href = `mailto:${email}`;
      }, 300);
    }
  }

  const emailTriggers = document.querySelectorAll('.email-action-btn, #hero-email-chip, a[href^="mailto:"]');
  emailTriggers.forEach(el => {
    el.addEventListener('click', handleEmailClick);
  });

  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      copyTextToClipboard(email, true);
    });
  }
}

function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function updateCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}


function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconSvg = type === 'success' 
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

  toast.innerHTML = `
    ${iconSvg}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toast-fade-out 0.3s forwards';
    setTimeout(() => {
      if (container.contains(toast)) {
        container.removeChild(toast);
      }
    }, 300);
  }, 3800);
}


function initTypewriter() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const roles = [
    "Aspiring Web Developer | Java DSA Enthusiast",
    "Full-Stack Web Development",
    "Java Data Structures & Algorithms",
    "Artificial Intelligence Systems"
  ];

  let roleIdx = 0;
  let charIdx = roles[0].length;
  let isDeleting = true;
  let typingSpeed = 90;

  function typeTick() {
    const current = roles[roleIdx];

    if (isDeleting) {
      charIdx--;
      typingElement.textContent = current.substring(0, charIdx);
      typingSpeed = 40;
    } else {
      charIdx++;
      typingElement.textContent = current.substring(0, charIdx);
      typingSpeed = 85;
    }

    if (!isDeleting && charIdx === current.length) {
      isDeleting = true;
      typingSpeed = 2200;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 450;
    }

    setTimeout(typeTick, typingSpeed);
  }

  setTimeout(typeTick, 2400);
}

function initScrollAnimations() {
  const targets = [
    '.section-header',
    '.skill-card',
    '.project-card',
    '.resume-banner-card',
    '.resume-doc-card',
    '.resume-preview-box',
    '.contact-info-card',
    '.contact-form-card',
    '.timeline-item'
  ];

  const elements = document.querySelectorAll(targets.join(', '));
  elements.forEach(el => el.classList.add('reveal'));

  // Specialized entrance directions
  const storyCard = document.querySelector('.about-story-card');
  if (storyCard) storyCard.classList.add('reveal-left');

  const focusCard = document.querySelector('.about-focus-card');
  if (focusCard) focusCard.classList.add('reveal-right');

  document.querySelectorAll('.stat-card').forEach(card => {
    card.classList.add('reveal-zoom');
  });

  const gridContainers = document.querySelectorAll('.skills-grid, .projects-grid, .stats-grid, .about-grid');
  gridContainers.forEach(grid => grid.classList.add('reveal-stagger'));

  const allRevealable = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -35px 0px'
    });

    allRevealable.forEach(el => revealObserver.observe(el));
  } else {
    allRevealable.forEach(el => el.classList.add('is-revealed'));
  }
}

function initScrollProgressBar() {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;

  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();
}

function initHeroParticles() {
  const canvas = document.getElementById('hero-particles');
  const heroSection = document.getElementById('hero');
  if (!canvas || !heroSection) return;

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let isVisible = true;
  let width = 0;
  let height = 0;
  let particles = [];
  const mouse = { x: -1000, y: -1000, radius: 110 };

  function resize() {
    width = canvas.width = heroSection.offsetWidth;
    height = canvas.height = heroSection.offsetHeight;
    createParticles();
  }

  function getColors() {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    return {
      dot: isDark ? 'rgba(99, 102, 241, 0.65)' : 'rgba(79, 70, 229, 0.45)',
      dotAlt: isDark ? 'rgba(6, 182, 212, 0.65)' : 'rgba(8, 145, 178, 0.45)',
      line: isDark ? 'rgba(99, 102, 241, 0.14)' : 'rgba(99, 102, 241, 0.1)'
    };
  }

  function createParticles() {
    particles = [];
    const count = Math.min(45, Math.max(22, Math.floor((width * height) / 25000)));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: Math.random() * 2 + 1.2,
        isAlt: Math.random() > 0.5
      });
    }
  }

  function updateAndDraw() {
    if (!isVisible) return;

    ctx.clearRect(0, 0, width, height);
    const colors = getColors();

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      else if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      else if (p.y > height) p.y = 0;

      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const angle = Math.atan2(dy, dx);
        const force = (mouse.radius - dist) / mouse.radius;
        p.x -= Math.cos(angle) * force * 1.5;
        p.y -= Math.sin(angle) * force * 1.5;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.isAlt ? colors.dotAlt : colors.dot;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const distX = p.x - p2.x;
        const distY = p.y - p2.y;
        const lineDist = Math.sqrt(distX * distX + distY * distY);
        const maxDist = 115;

        if (lineDist < maxDist) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = colors.line;
          ctx.lineWidth = (1 - lineDist / maxDist) * 1.2;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(updateAndDraw);
  }

  heroSection.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  }, { passive: true });

  heroSection.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(updateAndDraw);
        }
      });
    }, { threshold: 0.05 });
    observer.observe(heroSection);
  }

  window.addEventListener('resize', resize);
  resize();
  animationFrameId = requestAnimationFrame(updateAndDraw);
}

function initCard3DTiltAndGlare() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    return;
  }

  const cards = document.querySelectorAll('.project-card, .skill-card, .about-card, .stat-card');

  cards.forEach(card => {
    let glare = card.querySelector('.card-glare');
    if (!glare) {
      glare = document.createElement('div');
      glare.className = 'card-glare';
      card.appendChild(glare);
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5.5;
      const rotateY = ((x - centerX) / centerX) * 5.5;

      card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-5px)`;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

function initButtonRipples() {
  const clickableElements = document.querySelectorAll('.btn, .social-chip, .filter-btn, .btn-icon');

  clickableElements.forEach(element => {
    element.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;

      const ripple = document.createElement('span');
      ripple.className = 'ripple-wave';
      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${e.clientX - rect.left - radius}px`;
      ripple.style.top = `${e.clientY - rect.top - radius}px`;

      const existingRipple = this.querySelector('.ripple-wave');
      if (existingRipple) {
        existingRipple.remove();
      }

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 650);
    });
  });
}
