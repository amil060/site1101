---
layout: default
title: Contact
permalink: /contact/
---

<section class="section is-reveal" id="contact">
  <h2>Contact</h2>
  <p class="text-muted">Email available upon request</p>
  <p class="text-muted">Connect on GitHub or Codecademy — links are in the footer.</p>

  <form class="contact-form" onsubmit="alert('This is a front-end demo form — wire up a server or service to handle submissions.');return false;">
    <div class="form-row">
      <label for="name">Name
        <input id="name" type="text" name="name" required>
      </label>

      <label for="email">Email
        <input id="email" type="email" name="email" required>
      </label>
    </div>

    <label for="message">Message
      <textarea id="message" name="message" rows="5" required></textarea>
    </label>

    <div style="margin-top:1rem;"><button class="btn" type="submit">Send</button></div>
  </form>
</section>