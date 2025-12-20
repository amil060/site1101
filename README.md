[![Jekyll build](https://github.com/USERNAME/site1101/actions/workflows/jekyll.yml/badge.svg)](https://github.com/USERNAME/site1101/actions/workflows/jekyll.yml)

# site1101

A clean, responsive Jekyll portfolio template intended for GitHub Pages — suitable for a tech-student portfolio.

---

## Project
A minimal, accessible portfolio built with Jekyll to showcase projects, academic work, and community outreach.

## Tech Stack
- Jekyll (Liquid templates)
- HTML, CSS, vanilla JavaScript
- GitHub Pages (hosting)

## Features
- Responsive, mobile-first layout
- Dark mode with persisted preference (localStorage)
- Lightweight scroll-reveal and active navigation highlights
- Accessible mobile menu (aria attributes)
- CI build check (GitHub Actions runs `bundle exec jekyll build`)

## Local Development
1. Install Ruby and Bundler.
2. From the project root:

```bash
bundle install
bundle exec jekyll serve --host 0.0.0.0
```

3. Open `http://localhost:4000/site1101/` (or `http://localhost:4000/` if you set `baseurl: ''` in `_config.yml`).

## Deployment
1. Push the repository to GitHub and update `_config.yml` `url`, `baseurl`, and `repo_url` with your settings (replace `USERNAME`).
2. Enable GitHub Pages in repository settings (select branch `main` and folder `/ (root)` or use the Pages builder). The site will be available at `https://USERNAME.github.io/site1101/`.

## Notes
- Replace `USERNAME` in the badge and `_config.yml` with your GitHub username.
- Replace the placeholder image at `assets/images/profile-placeholder.svg` with your photo.

## Suggested commit message
`chore: polish README and add CI badge`

