---
layout: default
title: Projects
permalink: /projects/
---

<section class="projects is-reveal" id="projects">
  <h2>Projects</h2>
  <p class="text-muted">Selected course and outreach projects demonstrating hands-on learning and community engagement.</p>

  <div class="projects-tabs is-reveal">
    <div class="tabs" role="tablist" aria-label="Projects">
      <button id="tab-hardware" role="tab" aria-selected="true" aria-controls="panel-hardware" class="tab">How does hardware work?</button>
      <button id="tab-hour" role="tab" aria-selected="false" aria-controls="panel-hour" class="tab" tabindex="-1">Hour of Code — SITE 1101 / Hour of AI</button>
    </div>

    <div id="panel-hardware" role="tabpanel" aria-labelledby="tab-hardware" class="tab-panel is-visible" tabindex="0">
      <div class="project-card">
        <div class="project-card__content">
          <p class="text-muted">In this lab-based project, my team and I explored the fundamentals of digital logic by building and testing basic logic gates. We implemented and verified NOT, AND, OR, NOR, and XOR gates, developing circuits and test setups to observe expected truth tables. The work emphasized teamwork and hands-on experience with lab equipment and measurement techniques.</p>

          <ul class="project__tech">
            <li>Digital logic: NOT, AND, OR, NOR, XOR</li>
            <li>Hands-on lab circuits and verification</li>
            <li>Teamwork and collaborative debugging</li>
          </ul>

          <div class="project__links">
            <a class="btn btn--ghost" href="https://youtu.be/jIThCIPn77s" target="_blank" rel="noopener">YouTube demo</a>
            <a class="btn btn--ghost" href="{{ site.repo_url }}" target="_blank" rel="noopener">GitHub repo</a>
          </div>
        </div>

        <aside class="project-card__media">
          <div class="project__media" aria-hidden="false">
            <img class="project__media__img" src="{{ site.baseurl }}/assets/images/project1-hardware.jpg" alt="Hardware project media" />
            <div class="project__media__fallback" aria-hidden="true">Project media will be added here</div>
          </div>
        </aside>
      </div>
    </div>

    <div id="panel-hour" role="tabpanel" aria-labelledby="tab-hour" class="tab-panel" tabindex="0" hidden>
      <div class="project-card">
        <div class="project-card__content">
          <p class="text-muted">As part of the SITE 1101 "Hour of AI" initiative, our team delivered an educational session at Laçın District Secondary School No. 11. The school had no computers, internet access, or projector, so we brought 10 laptops, a projector, and mobile internet to make the session possible. Using Microsoft MakeCode, we taught algorithmic thinking via interactive tasks, issued certificates of completion to participants, and recorded the event with video documentation for future reference.</p>

          <ul class="project__tech">
            <li>Microsoft MakeCode</li>
            <li>Algorithmic thinking and interactive tasks</li>
            <li>Event logistics, outreach, and documentation</li>
          </ul>

          <div class="project__links">
            <a class="btn btn--ghost" href="#" aria-disabled="true">Photos (coming soon)</a>
            <a class="btn btn--ghost" href="{{ site.repo_url }}" target="_blank" rel="noopener">GitHub repo</a>
          </div>
        </div>

        <aside class="project-card__media">
          <div class="project__media" aria-hidden="false">
            <img class="project__media__img" src="{{ site.baseurl }}/assets/images/project2-hour-of-code.jpg" alt="Hour of Code project media" />
            <div class="project__media__fallback" aria-hidden="true">Project media will be added here</div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</section> 