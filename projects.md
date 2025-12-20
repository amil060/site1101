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
      <button type="button" id="tab-hardware" role="tab" aria-selected="true" aria-controls="panel-hardware" class="tab">How does hardware work?</button>
      <button type="button" id="tab-hour" role="tab" aria-selected="false" aria-controls="panel-hour" class="tab" tabindex="-1">Hour of Code — SITE 1101 / Hour of AI</button>
    </div>

    <div id="panel-hardware" role="tabpanel" aria-labelledby="tab-hardware" class="tab-panel is-visible" tabindex="0">
      <article class="project-card surface">
        <div class="project-card__grid">
          <div class="project-card__content">
            <h3>How does hardware work?</h3>

            <div class="chips" aria-hidden="false">
              <span class="chip">Digital Logic</span>
              <span class="chip">Breadboard</span>
              <span class="chip">Debugging</span>
            </div>

            <p class="text-muted">A hands-on lab exploring basic digital logic by implementing and verifying common logic gates with practical testing setups.</p>

            <ul class="project__bullets">
              <li>Designed and tested NOT, AND, OR, NOR, XOR circuits</li>
              <li>Built test rigs and measured truth tables</li>
              <li>Collaborative debugging and lab documentation</li>
            </ul>

            <p class="project__outcome"><strong>Outcome:</strong> Developed practical skills in circuit design and verification.</p>

            <div class="project__links">
              <a class="btn btn--primary" href="https://youtu.be/jIThCIPn77s" target="_blank" rel="noopener">YouTube demo</a>
              <a class="btn btn--ghost" href="{{ site.repo_url }}" target="_blank" rel="noopener">GitHub repo</a>
            </div>
          </div>

          <div class="project-card__media">
            <div class="project-media">
              <img class="project-media__img" src="{{ site.baseurl }}/assets/images/project1-hardware.jpg" alt="Hardware project preview" />
              <div class="project-media__fallback" aria-hidden="true">Project media will be added here</div>
              <div class="project-media__caption">Lab setup — logic gates (placeholder)</div>
            </div>
          </div>
        </div>
      </article>
    </div>

    <div id="panel-hour" role="tabpanel" aria-labelledby="tab-hour" class="tab-panel" tabindex="0" hidden>
      <article class="project-card surface">
        <div class="project-card__grid">
          <div class="project-card__content">
            <h3>Hour of AI — SITE 1101</h3>

            <div class="chips" aria-hidden="false">
              <span class="chip">Outreach</span>
              <span class="chip">MakeCode</span>
              <span class="chip">Teaching</span>
            </div>

            <p class="text-muted">An outreach workshop bringing laptops, internet, and interactive lessons to a rural school to teach algorithmic thinking with Microsoft MakeCode.</p>

            <ul class="project__bullets">
              <li>Organized logistics (laptops, internet, projector)</li>
              <li>Delivered interactive MakeCode lessons</li>
              <li>Issued certificates and documented the event</li>
            </ul>

            <p class="project__outcome"><strong>Outcome:</strong> Successfully delivered an inclusive STEM workshop and produced materials for future replication.</p>

            <div class="project__links">
              <span class="btn btn--ghost" aria-disabled="true">Photos (coming soon)</span>
              <a class="btn btn--ghost" href="{{ site.repo_url }}" target="_blank" rel="noopener">GitHub repo</a>
            </div>
          </div>

          <div class="project-card__media">
            <div class="project-media">
              <img class="project-media__img" src="{{ site.baseurl }}/assets/images/project2-hour-of-code.jpg" alt="Hour of Code preview" />
              <div class="project-media__fallback" aria-hidden="true">Project media will be added here</div>
              <div class="project-media__caption">Community workshop — placeholder</div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</section> 