// Minimal, dependency-free JS for menu, scroll reveal, active nav, and dark mode

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
      // If opened, move focus to first nav link for keyboard users
      if (nav.classList.contains('is-open')) {
        const firstLink = nav.querySelector('.nav__link');
        firstLink && firstLink.focus();
      }
    });

    // Close nav when a link is clicked (useful for single-page anchors / small screens)
    nav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  // Theme toggle with localStorage
  const themeToggle = document.querySelector('.theme-toggle');
  const htmlEl = document.documentElement;
  const stored = localStorage.getItem('theme');
  if (stored) {
    htmlEl.setAttribute('data-theme', stored);
    // reflect state on the toggle button if present
    if (themeToggle) themeToggle.setAttribute('aria-pressed', stored === 'dark');
  }
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = htmlEl.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', next);
      this.setAttribute('aria-pressed', next === 'dark');
      localStorage.setItem('theme', next);
    });
  }

  // Scroll reveal (IntersectionObserver)
  const reveals = document.querySelectorAll('.is-reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => obs.observe(el));
  } else {
    // fallback
    reveals.forEach(el => el.classList.add('is-revealed'));
  }

  // Active nav link highlighting on scroll
  const sections = document.querySelectorAll('main .section, main .hero, main .projects');
  const navLinks = document.querySelectorAll('.nav__link');
  if ('IntersectionObserver' in window && sections.length) {
    const sectionObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (!id) return;
        const link = document.querySelector(`.nav__link[href$='/${id}/']`);
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('is-active'));
          if (link) link.classList.add('is-active');
        }
      });
    }, { threshold: 0.3 });
    sections.forEach(s => sectionObs.observe(s));
  }

  // Smoothly animate <details> based project accordions
  const projectDetails = document.querySelectorAll('details.project');
  projectDetails.forEach(d => {
    const content = d.querySelector('.project__content');
    if (!content) return;
    // initialize
    if (d.open) {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.opacity = '1';
      content.style.transform = 'none';
    } else {
      content.style.maxHeight = '0px';
      content.style.opacity = '0';
      content.style.transform = 'translateY(-6px)';
    }

    d.addEventListener('toggle', () => {
      if (d.open) {
        // expand
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';
        content.style.transform = 'none';
        // after transition, allow auto height
        setTimeout(() => { content.style.maxHeight = 'none'; }, 300);
      } else {
        // collapse: set to current height then to 0 for smooth effect
        content.style.maxHeight = content.scrollHeight + 'px';
        // force reflow
        void content.offsetHeight;
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
        content.style.transform = 'translateY(-6px)';
      }
    });
  });

});
