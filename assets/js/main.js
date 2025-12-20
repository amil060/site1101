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

  // Projects tabbed interface (accessible, keyboard-controlled)
  const projectsTabs = document.querySelector('.projects-tabs');
  if (projectsTabs) {
    const tabs = projectsTabs.querySelectorAll('[role="tab"]');
    const panels = projectsTabs.querySelectorAll('[role="tabpanel"]');

    function activateTab(tab) {
      tabs.forEach(t => {
        const selected = t === tab;
        t.setAttribute('aria-selected', selected ? 'true' : 'false');
        t.tabIndex = selected ? 0 : -1;
      });
      panels.forEach(p => {
        const panelId = tab.getAttribute('aria-controls');
        if (p.id === panelId) {
          p.hidden = false;
          p.classList.add('is-visible');
        } else {
          p.hidden = true;
          p.classList.remove('is-visible');
        }
      });
      tab.focus();
    }

    tabs.forEach(t => {
      t.addEventListener('click', () => activateTab(t));
      t.addEventListener('keydown', (e) => {
        const key = e.key;
        const nodeList = Array.prototype.slice.call(tabs);
        const idx = nodeList.indexOf(t);
        if (key === 'ArrowRight' || key === 'ArrowLeft') {
          e.preventDefault();
          const dir = key === 'ArrowRight' ? 1 : -1;
          const next = nodeList[(idx + dir + nodeList.length) % nodeList.length];
          next.focus();
          activateTab(next);
        } else if (key === 'Home') {
          e.preventDefault();
          activateTab(nodeList[0]);
        } else if (key === 'End') {
          e.preventDefault();
          activateTab(nodeList[nodeList.length - 1]);
        } else if (key === 'Enter' || key === ' ') {
          e.preventDefault();
          activateTab(t);
        }
      });
    });

    // initialize: activate first tab or the one marked selected
    const initial = projectsTabs.querySelector('[aria-selected="true"]') || tabs[0];
    activateTab(initial);
  }

});
