---
layout: default
title: Home
---

<section class="hero">
  <div class="profile is-reveal">
    <h1 class="profile__title">Hi — I’m Amil Isgandarov</h1>
    <p class="profile__subtitle">ADA University CS student • Cybersecurity &amp; AI</p>

    <div class="profile__badges" role="list">
      <span role="listitem" class="badge">ICPC Volunteer</span>
      <span role="listitem" class="badge">ABB Hackathon</span>
      <span role="listitem" class="badge">SOCAR Hackathon (4th place)</span>
    </div>

    <div class="cta">
      <a class="btn btn--primary" href="{{ site.baseurl }}/projects/" aria-label="View projects">View projects</a>
      <a class="btn btn--ghost btn--secondary" href="{{ site.baseurl }}/contact/" aria-label="Get in touch">Get in touch</a>
    </div>
  </div>

  <div class="profile__img is-reveal" aria-hidden="true">
    <img class="profile__photo" src="{{ site.baseurl }}/assets/images/profile-placeholder.svg" alt="Profile photo placeholder" width="360" height="360"/>
  </div>
</section>

<section class="about-preview section reveal">
  <div class="container">
    <div class="surface reveal">
      <h2>About (Preview)</h2>
      <p class="text-muted">I’m a CS student at ADA University with interests in cybersecurity and applied AI — I build practical projects and teach/mentor where I can.</p>
      <a class="btn btn--ghost" href="{{ site.baseurl }}/about/">Read more</a>
    </div>
  </div>
</section>

<section class="featured-projects section reveal">
  <div class="container">
    <div class="surface reveal">
      <h2>Featured Projects</h2>
      <div class="featured-grid">
        <article class="featured-card reveal">
          <div class="featured-thumb-wrap">
            <img class="featured-thumb" src="{{ site.baseurl }}/assets/images/project1-hardware.jpg" alt="Hardware thumbnail" />
          </div>
          <div class="featured-card__body">
            <h3>How does hardware work?</h3>
            <p class="text-muted">A hands-on exploration of basic digital logic and lab verification.</p>
            <a class="btn btn--ghost" href="{{ site.baseurl }}/projects/">View project</a>
          </div>
        </article>

        <article class="featured-card reveal">
          <div class="featured-thumb-wrap">
            <img class="featured-thumb" src="{{ site.baseurl }}/assets/images/project2-hour-of-code.jpg" alt="Hour of Code thumbnail" />
          </div>
          <div class="featured-card__body">
            <h3>Hour of AI — SITE 1101</h3>
            <p class="text-muted">An outreach workshop teaching algorithmic thinking using MakeCode.</p>
            <a class="btn btn--ghost" href="{{ site.baseurl }}/projects/">View project</a>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

<section class="cta-strip">
  <div class="container">
    <div class="surface cta-strip__inner">
      <h3>Let’s work together</h3>
      <a class="btn btn--primary" href="{{ site.baseurl }}/contact/">Get in touch</a>
    </div>
  </div>
</section> 