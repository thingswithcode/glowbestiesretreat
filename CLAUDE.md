# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing website for **Glow Besties Retreats** (glowbestiesretreats.com). Pure HTML/CSS/vanilla JS — no framework, no build step, no package manager, no test suite. Deployed via **Netlify**, DNS via **Namecheap**, signup form connects to **Mailchimp**.

## Local Development

No build, no install. Just serve the static files:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly in the browser also works for most things, but i18n and relative-path edge cases behave better behind a server.

## Architecture

### Pages (7 standalone HTML files, no templating)
`index.html`, `about.html`, `retreats.html`, `retreat-montafon.html`, `contact.html`, `impressum.html`, `datenschutz.html`

There is **no shared layout** — the `<nav>` and `<footer>` are duplicated by hand across every page. Changes to nav/footer markup must be made in every file.

### Design system (`css/style.css`)
A single stylesheet driven by CSS custom properties on `:root`. Colors, spacing, typography, navbar height, transitions are all tokenized. When changing site-wide visuals, edit the token in `:root` rather than hardcoding values. Aesthetic target: editorial luxury wellness (Cormorant Garamond serif + Jost sans).

CSS link tags use a cache-buster query: `<link rel="stylesheet" href="css/style.css?v=4">`. **When editing `style.css`, bump the `?v=N` number in every HTML file** so visitors get the new CSS instead of the cached one. Recent commits show this is the standard workflow ("bump cache to v3", etc.).

### JavaScript (3 files, IIFE-wrapped vanilla JS)
- **`js/main.js`** — navbar scroll state, smooth scroll, hero parallax, fade-in IntersectionObserver, "Read more" expand on retreat detail page, scroll indicator
- **`js/i18n.js`** — language toggle (see below)
- **`js/mailchimp.js`** — signup form submission via JSONP

All three are plain IIFEs (`(function() { 'use strict'; ... }())`). No modules, no bundler.

### i18n system
English is the source of truth in the HTML. German translations live in a single `translations.de` object inside `js/i18n.js`.

- Translatable text gets `data-i18n="some.key"` (textContent swap)
- Elements containing HTML (e.g., consent label with a link) get `data-i18n-html="some.key"` (innerHTML swap)
- Form placeholders use `data-i18n-placeholder="some.key"`
- On page load, the script captures the original English text into `data-i18n-original` so toggling back to EN restores it
- Language preference persists in `localStorage.lang`

**When adding new translatable text:** add the `data-i18n` attribute in the HTML (with the English text inside the element) AND add the matching key to the `de` object in `js/i18n.js`.

### Mailchimp signup form
Submission happens client-side via JSONP (no server). Configuration is hardcoded in `js/mailchimp.js`:
```js
var MAILCHIMP_URL = 'https://gmail.us12.list-manage.com/subscribe/post';
var MAILCHIMP_U   = 'cc3b82a425357b3fc1bb38910';
var MAILCHIMP_ID  = 'f24cdf1cc1';
```
A hidden honeypot input (`#signup-website`) silently swallows bot submissions. The same form HTML is duplicated on multiple pages.

## Content gotchas

- **The retreat schedule (Friday/Saturday/Sunday timeline) is duplicated** on both `retreats.html` and `retreat-montafon.html`. They must be kept in sync — when updating one, update the other.
- The retreat detail page (`retreat-montafon.html`) uses a "Read more" pattern: a `#retreat-expandable` block is hidden by default and revealed when the user clicks the button. Most page content lives inside this expandable.
- Filename `retreat-montafon.html` is the legacy name — the retreat itself is now branded "The Alpine Reset" but the file path is unchanged (linked from nav, sitemap, and other pages).
- `images/Neu/neu_v2/` is the active image set; older WhatsApp-named files in `images/` root are mostly historical.

## Conventions

- Don't introduce a build step, framework, or package manager unless the user explicitly asks. The "no toolchain" simplicity is intentional.
- Keep JS in plain IIFEs and avoid ES modules — the existing files don't use `<script type="module">`.
- All translatable copy must have a `data-i18n*` attribute; don't hardcode user-facing text without one.
- Bump `css/style.css?v=N` in every HTML file after CSS changes.
- `.agents/` and `node_modules/` are gitignored.

## Reference docs

`docs/superpowers/specs/` and `docs/superpowers/plans/` contain the original design spec and implementation plan from the March 2026 redesign — useful historical context for design decisions, but not authoritative for current code.
