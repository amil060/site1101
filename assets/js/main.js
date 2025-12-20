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

  // Theme toggle with localStorage + small icon button
  const themeToggle = document.querySelector('.theme-toggle');
  const htmlEl = document.documentElement;
  const stored = localStorage.getItem('theme');
  const svgMoon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"/></svg>';
  const svgSun = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.76 4.84l-1.8-1.79L3.17 4.83l1.79 1.8 1.8-1.79zM1 13h3v-2H1v2zm10 8h2v-3h-2v3zM6.76 19.16l1.79 1.79 1.79-1.79-1.79-1.8-1.79 1.8zM20 11v2h3v-2h-3zM11 1h2v3h-2V1zm8.83 3.17l-1.79 1.79 1.79 1.8 1.8-1.79-1.8-1.8zM16.24 19.16l1.79-1.8-1.79-1.79-1.8 1.79 1.8 1.8zM12 7a5 5 0 100 10 5 5 0 000-10z" fill="currentColor"/></svg>';

  if (stored) {
    htmlEl.setAttribute('data-theme', stored);
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', stored === 'dark');
      themeToggle.innerHTML = stored === 'dark' ? svgSun : svgMoon;
    }
  } else {
    // default icon
    if (themeToggle) themeToggle.innerHTML = svgMoon;
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = htmlEl.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', next);
      this.setAttribute('aria-pressed', next === 'dark');
      this.innerHTML = next === 'dark' ? svgSun : svgMoon;
      localStorage.setItem('theme', next);
    });
  }

  // Scroll reveal (IntersectionObserver) for .is-reveal (legacy)
  const revealsLegacy = document.querySelectorAll('.is-reveal');
  if ('IntersectionObserver' in window && revealsLegacy.length) {
    const obsLegacy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obsLegacy.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealsLegacy.forEach(el => obsLegacy.observe(el));
  } else {
    // fallback
    revealsLegacy.forEach(el => el.classList.add('is-revealed'));
  }

  // Lightweight reveal for .reveal elements (new)
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window){
    const toReveal = document.querySelectorAll('.reveal');
    if (toReveal.length){
      const rObs = new IntersectionObserver((entries)=>{
        entries.forEach(e=>{
          if (e.isIntersecting){
            e.target.classList.add('revealed');
            rObs.unobserve(e.target);
          }
        })
      },{threshold:0.12});
      toReveal.forEach(el=>rObs.observe(el));
    }
  } else {
    // If reduced motion, reveal immediately without animation
    document.querySelectorAll('.reveal').forEach(el=>el.classList.add('revealed'));
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
        const shouldShow = p.id === panelId;
        p.hidden = !shouldShow;
        p.setAttribute('aria-hidden', (!shouldShow).toString());
        if (shouldShow) p.classList.add('is-visible'); else p.classList.remove('is-visible');
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

  // Project media: show image if it loads, otherwise show subtle fallback
  const mediaImgs = document.querySelectorAll('.project__media__img, .project-media__img');
  mediaImgs.forEach(img => {
    const container = img.closest('.project__media') || img.closest('.project-media');
    const fallback = container && container.querySelector('.project__media__fallback, .project-media__fallback');

    function showFallback(){
      if (img) img.style.display = 'none';
      if (fallback){ fallback.style.display = ''; fallback.setAttribute('aria-hidden', 'false'); }
      if (container) container.classList.remove('has-media');
    }

    function showImage(){
      if (container) container.classList.add('has-media');
      if (fallback){ fallback.style.display = 'none'; fallback.setAttribute('aria-hidden', 'true'); }
      if (img){ img.style.display = 'block'; }
    }

    // if the image is already loaded or cached
    if (img.complete && img.naturalWidth > 0){
      showImage();
      return;
    }

    // pre-load
    const tester = new Image();
    tester.onload = () => { showImage(); };
    tester.onerror = () => { showFallback(); };
    tester.src = img.src;

    // safety: if the image element fails to render, ensure fallback shows
    img.addEventListener('error', showFallback);
  });

});
