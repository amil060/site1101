---
layout: default
title: Contact
permalink: /contact/
---

<section class="section is-reveal" id="contact">
  <h2>Contact</h2>
  <p class="text-muted">Email: <a href="mailto:you@example.com">you@example.com</a></p>
  <p class="text-muted">Connect on GitHub or Codecademy — links are in the footer.</p>

  <form class="contact-form" onsubmit="alert('This is a front-end demo form — wire up a server or service to handle submissions.');return false;">
    <label>
      Name
      <input type="text" name="name" required>
    </label>
    <label>
      Email
      <input type="email" name="email" required>
    </label>
    <label>
      Message
      <textarea name="message" rows="5" required></textarea>
    </label>
    <div style="margin-top:1rem;"><button class="btn" type="submit">Send</button></div>
  </form>
</section>