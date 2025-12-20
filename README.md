# site1101

A clean, simple Jekyll portfolio template ready for GitHub Pages.

---

## What I added

- Jekyll layout and includes: `_layouts/default.html`, `_includes/header.html`, `_includes/footer.html`
- Pages: `index.md`, `about.md`, `projects.md`, `contact.md`
- Assets: `assets/css/style.css`, `assets/js/main.js`, `assets/images/profile-placeholder.svg`
- Features: responsive design, accessible mobile menu, dark mode (persisted via `localStorage`), smooth scroll, scroll reveal animations, active nav highlighting, "View source" GitHub link.

## Run locally

1. (Optional) Install Ruby and Bundler.
2. From the project root run:

```bash
bundle install
bundle exec jekyll serve --host 0.0.0.0
```

3. Open `http://localhost:4000/site1101/` (or `http://localhost:4000/` if you set `baseurl: ''` in `_config.yml`).

## Notes

- Update `_config.yml` `baseurl`, `url`, and `repo_url` with your repo settings (replace `USERNAME`).
- Replace the placeholder profile image at `assets/images/profile-placeholder.svg` with your photo.

## Suggested commit message

`chore: scaffold Jekyll portfolio (layouts, pages, styles, JS)`
