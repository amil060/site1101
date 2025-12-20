// Minimal, dependency-free JS for menu, scroll reveal, active nav, and dark mode

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  navToggle && navToggle.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open');
  });

  // Theme toggle with localStorage
  const themeToggle = document.querySelector('.theme-toggle');
  const htmlEl = document.documentElement;
  const stored = localStorage.getItem('theme');
  if (stored) htmlEl.setAttribute('data-theme', stored);
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

});
