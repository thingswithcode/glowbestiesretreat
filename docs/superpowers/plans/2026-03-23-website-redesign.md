# Glow Besties Website Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. Use the `frontend-design` skill for all HTML/CSS work to achieve high design quality.

**Goal:** Rebuild the Glow Besties website as a clean, editorial, English-first multi-page site with EN/DE language toggle, based on the design spec at `docs/superpowers/specs/2026-03-23-website-redesign-design.md`.

**Architecture:** Full rewrite of HTML/CSS across 3 pages (homepage, about, retreats) sharing a common nav, footer, and design system. Vanilla CSS with custom properties, vanilla JS for interactions and i18n. Mailchimp JSONP integration carried over from existing site.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), vanilla JavaScript, Google Fonts (Cormorant Garamond + Jost), Mailchimp JSONP.

---

## File Structure

```
index.html              — Homepage (full rewrite)
about.html              — About page (new)
retreats.html           — Retreats page (new)
css/style.css           — Design system + all styles (full rewrite)
js/main.js              — Nav, animations, parallax (rewrite)
js/i18n.js              — Language toggle logic (new)
js/mailchimp.js         — Form handler (update: English + i18n)
images/hero-yoga.jpg    — Renamed hero image (from neu_v2)
impressum.html          — Keep as-is
datenschutz.html        — Keep as-is
```

### Image paths (explicit reference)
- **Logo:** `images/Neu/neu_v2/logo.svg` (the newer transparent-background SVG)
- **Hero:** `images/hero-yoga.jpg` (renamed from WhatsApp filename in Task 1)
- **Founders preview (homepage):** `images/LeonieEli.jpeg` (both founders together)
- **Eli solo (about page):** `images/Neu/neu_v2/Eli.jpeg` (used at current path, no rename)
- **Leonie solo (about page):** `images/Neu/neu_v2/Leonie.jpeg` (used at current path, no rename)
- **Tanafreida gallery:** `images/tanafreida-main.jpg`, `images/tanafreida-room.jpg`, `images/tanafreida-terrace.jpg`, `images/tanafreida-nature.jpg`
- **Instagram collage:** `images/instagram-1.jpg`, `images/instagram-2.jpg`, `images/instagram-3.jpg`
- **Image break:** `images/hero-mountains.jpg`
- **CTA background:** `images/cta-background.jpg`

### Global HTML requirements
- All `<img>` tags below the fold must have `loading="lazy"` attribute
- All translatable text elements get `data-i18n="key"` attribute
- Elements with HTML content (e.g., consent label with link) get `data-i18n-html="key"` instead
- ARIA labels on: hamburger button, language toggle, form inputs, Instagram link

---

## Task 1: File Preparation

**Files:**
- Rename: `images/Neu/neu_v2/WhatsApp Image 2026-03-22 at 09.20.55.jpeg` → `images/hero-yoga.jpg`

- [ ] **Step 1: Rename the hero image to avoid spaces in filename**

```bash
cp "images/Neu/neu_v2/WhatsApp Image 2026-03-22 at 09.20.55.jpeg" "images/hero-yoga.jpg"
```

- [ ] **Step 2: Verify the file exists**

```bash
ls -la images/hero-yoga.jpg
```
Expected: File exists, ~200KB+

- [ ] **Step 3: Commit**

```bash
git add images/hero-yoga.jpg
git commit -m "chore: add hero image with clean filename"
```

---

## Task 2: CSS Design System

**Files:**
- Rewrite: `css/style.css`

This is the foundation. Write the full CSS file covering: custom properties, reset, typography, layout utilities, buttons, section styles, nav, hero, all homepage sections, about page, retreats page, footer, animations, and responsive breakpoints.

**IMPORTANT:** Use the `frontend-design` skill when writing CSS. The design must match the editorial, luxury-wellness aesthetic of the inspo sites (The Glowin', Cal Reiet, Camp Joli). Generous whitespace, warm neutrals, clean typography.

- [ ] **Step 1: Write CSS custom properties and reset**

In `css/style.css`, write:
- `:root` block with all color, typography, spacing, and transition variables from the design spec
- CSS reset (box-sizing, margin, padding)
- Base body styles (font-family: Jost, weight 300, color: --color-text-body, bg: --color-bg-primary)
- Base img, a, ul resets
- Typography rules for h1, h2, h3 (Cormorant Garamond, weight 400)

Reference spec section: **Design System**

- [ ] **Step 2: Write layout utilities and button styles**

- `.container` (max-width: 1200px, centered, padding)
- `.section` (padding: 120px vertical desktop, 80px mobile)
- `.section-white`, `.section-beige` backgrounds
- `.section-label` (uppercase, spaced, small, accent color)
- `.section-title`, `.section-title-center`
- `.btn`, `.btn-primary` (terracotta, rounded 50px), `.btn-outline`
- `.sr-only` for accessibility

- [ ] **Step 3: Write navigation styles**

- `.navbar` — sticky, transparent by default, solid beige on `.scrolled`
- `.nav-container` — flex, space-between, centered
- `.nav-logo img` — height constraint
- `.nav-links` — flex, gap
- `.nav-link` — subtle, sans-serif
- `.nav-cta` — terracotta button style, prominent but elegant
- `.nav-lang` — very subtle, small text, far right
- `.nav-toggle` — hamburger icon (CSS-only lines)
- `.nav-links.open` — full-screen overlay on mobile (beige bg, centered links)

- [ ] **Step 4: Write hero section styles**

- `.hero` — 100vh, relative, overflow hidden
- `.hero-bg` — absolute, cover, with subtle parallax support
- `.hero-overlay` — dark gradient overlay
- `.hero-content` — centered, z-index above overlay
- `.hero-title` — large serif, white
- `.hero-subtitle` — small sans-serif, white/light
- `.hero-cta` — terracotta button
- `.hero-scroll-indicator` — bottom chevron, animated

- [ ] **Step 5: Write homepage section styles**

- `.intro-section` — centered text, max-width 650px
- `.philosophy-section` — same but on beige
- `.for-you-section` — centered list, no bullets
- `.for-you-item` — sans-serif, slightly larger, spaced
- `.experience-grid` — 2x3 CSS grid, gap
- `.experience-card` — thin top border, title + text
- `.image-break` — full-width, 50-60vh, object-fit cover, optional overlay text
- `.founders-preview` — two-column grid (45/55 split)
- `.retreat-card-section` — asymmetric layout (60/40)
- `.cta-section` — full-width bg image, dark overlay, centered form
- `.signup-form` — form layout, input styles, error styles
- `.instagram-section` — offset collage layout (2-3 overlapping images)

- [ ] **Step 6: Write about page styles**

- `.about-hero` — beige, generous padding, centered text
- `.founder-section` — two-column, image + text
- `.founder-section--mirrored` — reversed column order
- `.mini-cta` — simple centered block

- [ ] **Step 7: Write retreats page styles**

- `.retreat-hero` — 50vh hero image
- `.retreat-intro` — two-column text + image
- `.location-section` — gallery layout (1 large + 2-3 small)
- `.schedule-section` — clean timeline styling
- `.schedule-day` — day header + timeline items
- `.timeline-item` — time + content layout

- [ ] **Step 8: Write footer styles**

- `.footer` — dark bg (#3A3531), light text
- `.footer-content` — grid or flex layout
- `.footer-brand`, `.footer-nav`, `.footer-legal`, `.footer-social`

- [ ] **Step 9: Write animations and responsive breakpoints**

- `.fade-in` / `.fade-in.visible` — opacity + translateY transition
- Subtle grain texture overlay on sections (carried over)
- Media queries: tablet (~768px), mobile (~480px)
- Responsive adjustments for: nav, hero text size, grids → single column, two-column → stacked, section padding reduction

- [ ] **Step 10: Verify CSS renders correctly with a minimal test page**

Create a temporary `test.html` with a few sections to verify colors, fonts, spacing render correctly. Open in browser. Delete after verification.

- [ ] **Step 11: Commit**

```bash
git add css/style.css
git commit -m "feat: rewrite CSS design system for editorial redesign"
```

---

## Task 3: Homepage (index.html)

**Files:**
- Rewrite: `index.html`

**IMPORTANT:** Use the `frontend-design` skill. Every section must match the editorial aesthetic from the design spec. Reference: `docs/superpowers/specs/2026-03-23-website-redesign-design.md` — Homepage Sections 1-12.

- [ ] **Step 1: Write HTML document head and navigation**

```html
<!DOCTYPE html>
<html lang="en">
```

- `<head>`: charset, viewport, meta description (English), title, Google Fonts preconnect + import (Cormorant Garamond + Jost), link to css/style.css
- `<nav>`: logo (`images/Neu/neu_v2/logo.svg`), links (Retreats → retreats.html, About → about.html), language toggle button (DE/EN), CTA button ("Join the Retreat" → #cta), hamburger button
- Add `data-i18n` attributes on all translatable text elements

- [ ] **Step 2: Write Hero section**

- Full-viewport section with `images/hero-yoga.jpg` as background
- Dark gradient overlay
- Centered content: headline, subline, CTA button
- Scroll indicator chevron at bottom
- All text gets `data-i18n` attributes

Content:
- Headline: "Reconnect with yourself - without leaving your ambition behind."
- Subline: "A space to slow down and feel like yourself again."
- Button: "Join the Retreat"

- [ ] **Step 3: Write Intro/Positioning section**

- White background, centered text block (max 650px)
- Label: "OUR STORY"
- Three paragraphs from spec
- `data-i18n` on all text

- [ ] **Step 4: Write Philosophy section**

- Beige background, centered, no image
- Label: "OUR PHILOSOPHY"
- Headline: "Designed for real life."
- Body text from spec
- `data-i18n` on all text

- [ ] **Step 5: Write "For You" section**

- White background, centered narrow column
- Label: "FOR YOU"
- Headline: "This is for you if..."
- 6 list items, each with `fade-in` class
- `data-i18n` on all text

- [ ] **Step 6: Write "Experience" section**

- Beige background
- Label: "THE EXPERIENCE"
- Headline: "What you'll experience"
- 2x3 grid of 6 experience cards (title + description)
- `data-i18n` on all text

- [ ] **Step 7: Write full-width image break**

- Edge-to-edge image (`images/hero-mountains.jpg` or `images/schedule-landscape.jpg`)
- Optional overlay text: "Step into calm, clarity, and connection."
- `data-i18n` on overlay text

- [ ] **Step 8: Write Founders Preview section**

- White background, two-column layout
- Image: `images/LeonieEli.jpeg`
- Label: "ABOUT US", headline, short text
- Outline button: "Read our story" → about.html
- `data-i18n` on all text

- [ ] **Step 9: Write Retreat Card section**

- Beige background, asymmetric layout
- Image: `images/tanafreida-main.jpg`
- Label: "UPCOMING RETREAT"
- Title: "Montafon Retreat"
- Date: "May 29 - 31, 2026"
- Tags: Movement · Nourishment · Connection
- Button: "View retreat" → retreats.html
- `data-i18n` on all text

- [ ] **Step 10: Write Final CTA section**

- Full-width bg image (`images/cta-background.jpg`), dark overlay
- Headline: "Join us."
- Subline: "Limited spots available."
- Signup form: name input, email input, consent checkbox (link to datenschutz.html), submit button
- Visible note below form: "You'll receive all details via email."
- Success message (hidden by default)
- Use `data-i18n-html` on the consent label (it contains a `<a>` link to datenschutz.html)
- `data-i18n` on all other text including form placeholders, labels, and note

- [ ] **Step 11: Write Instagram section**

- White/beige background
- Offset collage: 2-3 images (`images/instagram-1.jpg`, `images/instagram-2.jpg`, `images/instagram-3.jpg`) overlapping in editorial layout
- Label: "INSTAGRAM"
- Headline: "Join us on Instagram and explore the retreat."
- Handle: @theglowbesties
- Outline button: "View Instagram" → Instagram URL
- `data-i18n` on text

- [ ] **Step 12: Write Footer**

- Dark background
- Logo text, nav links (Retreats, About, Instagram), legal links (Impressum, Datenschutz)
- Email: hello@glowbesties.com
- Instagram icon SVG
- Copyright: 2026 Glow Besties Retreats
- `data-i18n` on translatable text

- [ ] **Step 13: Add script tags**

```html
<script src="js/main.js"></script>
<script src="js/i18n.js"></script>
<script src="js/mailchimp.js"></script>
```

- [ ] **Step 14: Open in browser and verify all sections**

Check: hero fills viewport, text is readable over image, nav is transparent, sections alternate white/beige, spacing feels generous, buttons are terracotta, fonts load correctly, mobile hamburger works.

- [ ] **Step 15: Commit**

```bash
git add index.html
git commit -m "feat: rewrite homepage with editorial design"
```

---

## Task 4: About Page (about.html)

**Files:**
- Create: `about.html`

Reference spec: **About Page** sections 1-4.

- [ ] **Step 1: Write full about.html page**

Same `<head>` as index.html (adjust title + meta description).
Same `<nav>` as index.html (copy exactly).

Sections:
1. **Shared Story** — beige bg, label "ABOUT US", headline "Two friends. One shared reality.", centered text block (4 paragraphs from spec)
2. **Eli** — white bg, two-column (image left: `images/Neu/neu_v2/Eli.jpeg`, text right), headline "Eli", 3 paragraphs from spec
3. **Leonie** — beige bg, two-column mirrored (text left, image right: `images/Neu/neu_v2/Leonie.jpeg`), headline "Leonie", 4 paragraphs from spec
4. **Mini CTA** — white bg, centered, headline "Want to join us?", terracotta button → retreats.html

Same footer as index.html.
Same script tags as index.html.
All text gets `data-i18n` attributes.

- [ ] **Step 2: Open in browser and verify**

Check: layout, images load, founder sections alternate correctly, text is readable, nav links work, responsive stacking on mobile.

- [ ] **Step 3: Commit**

```bash
git add about.html
git commit -m "feat: add about page with founder stories"
```

---

## Task 5: Retreats Page (retreats.html)

**Files:**
- Create: `retreats.html`

Reference spec: **Retreats Page** sections 1-5.

- [ ] **Step 1: Write full retreats.html page**

Same `<head>` (adjust title + meta).
Same `<nav>`.

Sections:
1. **Retreat Header** — 50vh hero image (`images/tanafreida-main.jpg`), overlay with label "RETREATS", headline "Montafon Retreat", subtitle "May 29 - 31, 2026"
2. **About the Retreat** — white bg, two-column (text left, image right), intro copy from spec, tags: Movement · Nourishment · Connection
3. **The Location** — beige bg, label "THE LOCATION", headline "Tanafreida. Above the Montafon.", description text, gallery (1 large `tanafreida-main.jpg` + 3 small: `tanafreida-room.jpg`, `tanafreida-terrace.jpg`, `tanafreida-nature.jpg`), outline button → tanafreida.at
4. **Schedule** — white bg, label "THE SCHEDULE", headline "Your Weekend", 3 days with full timeline from spec (Friday: 5 items, Saturday: 8 items, Sunday: 5 items), note about flexibility
5. **CTA** — same as homepage CTA section 10 (full-width bg image `images/cta-background.jpg`, dark overlay, headline "Join us.", subline "Limited spots available.", signup form, note "You'll receive all details via email.", use `data-i18n-html` on consent label)

Same footer.
Same script tags.
All text gets `data-i18n` attributes.

- [ ] **Step 2: Open in browser and verify**

Check: retreat hero is ~50vh, schedule is readable and well-spaced, gallery images load, location link works, form works, responsive layout.

- [ ] **Step 3: Commit**

```bash
git add retreats.html
git commit -m "feat: add retreats page with schedule and location"
```

---

## Task 6: JavaScript — main.js

**Files:**
- Rewrite: `js/main.js`

- [ ] **Step 1: Rewrite main.js**

Carry over and adapt from existing:
- **Nav scroll** — add/remove `.scrolled` class on scroll (same logic)
- **Hamburger menu** — toggle `.open` on nav-links, prevent body scroll, close on link click, close on Escape. Updated to work with full-screen overlay.
- **Smooth scroll** — for anchor links with navbar offset
- **Hero parallax** — subtle translateY on `.hero-bg` (only on homepage, guard with `if (heroBg)`)
- **Fade-in animations** — IntersectionObserver on `.fade-in` elements, add `.visible` class
- **Scroll indicator** — hide on scroll

No new functionality needed beyond what exists. Just ensure selectors match the new HTML structure.

- [ ] **Step 2: Verify nav behavior**

Open homepage in browser:
- Scroll down → nav becomes solid beige
- Click hamburger on mobile → full-screen overlay opens
- Click link → overlay closes, scrolls to section
- Press Escape → overlay closes

- [ ] **Step 3: Commit**

```bash
git add js/main.js
git commit -m "feat: rewrite main.js for new site structure"
```

---

## Task 7: JavaScript — i18n.js (Language Toggle)

**Files:**
- Create: `js/i18n.js`

- [ ] **Step 1: Write i18n.js**

Structure:
```javascript
(function () {
    'use strict';

    var translations = {
        de: {
            // Nav
            'nav.retreats': 'Retreats',
            'nav.about': 'Über uns',
            'nav.cta': 'Zum Retreat',
            // Hero
            'hero.title': 'Reconnect with yourself - ohne deinen Antrieb zu verlieren.',
            'hero.subtitle': 'Ein Raum, um zur Ruhe zu kommen und dich wieder wie du selbst zu fühlen.',
            'hero.cta': 'Zum Retreat',
            // ... all other translatable strings
        }
    };
```

Logic:
- On load, check `localStorage.getItem('lang')` — default to `'en'`
- `setLanguage(lang)` function: iterate all `[data-i18n]` elements, swap `textContent` (or `placeholder` for inputs) using translations object. For `'en'`, restore original English text (stored on first load).
- Toggle button: swap between 'en' and 'de', update button text, save to localStorage
- On page load: if saved language is 'de', apply translations immediately

Key details:
- Store original English text in a `data-i18n-original` attribute on first load
- For elements with `innerHTML` (like the consent label with a link), use `data-i18n-html` attribute and set `innerHTML` instead of `textContent`
- Update the `<html lang="">` attribute when switching

- [ ] **Step 2: Write all German translations**

Write natural, high-quality German for ALL translatable strings across all 3 pages. This is NOT machine translation. Write it as a native German speaker would. Include:
- All nav items
- All hero content
- All section labels, headlines, and body text
- All button labels
- All form placeholders, error messages, and success messages
- All footer text

- [ ] **Step 3: Verify language toggle**

Open homepage:
- Click DE → all text switches to German, button shows "EN"
- Click EN → all text switches back to English, button shows "DE"
- Refresh page → language preference persists
- Navigate to About page → same language is applied
- Check that form placeholders switch too

- [ ] **Step 4: Commit**

```bash
git add js/i18n.js
git commit -m "feat: add EN/DE language toggle with hand-written translations"
```

---

## Task 8: JavaScript — mailchimp.js Update

**Files:**
- Modify: `js/mailchimp.js`

- [ ] **Step 1: Update mailchimp.js for English + i18n**

Changes from existing:
- Default button text: "Secure your spot" (was "Platz sichern")
- Submitting text: "Sending..." (was "Wird gesendet...")
- Error messages: English defaults (was German)
- Success message: already in HTML, handled by `data-i18n`

**i18n strategy for JS-injected strings:** mailchimp.js must read the current language from `document.documentElement.lang` (set by i18n.js) and use a local translation map for all dynamically injected strings (button text, error messages). This way, errors shown after a form submission respect the current language.

```javascript
var strings = {
    en: {
        sending: 'Sending...',
        submit: 'Secure your spot',
        errorEmail: 'Please enter a valid email address.',
        errorConsent: 'Please agree to the privacy policy.',
        errorConnection: 'Connection failed. Please try again.',
        errorSubscribed: 'You are already subscribed!',
        errorGeneric: 'Something went wrong. Please try again.'
    },
    de: {
        sending: 'Wird gesendet...',
        submit: 'Platz sichern',
        errorEmail: 'Bitte gib eine gültige E-Mail-Adresse ein.',
        errorConsent: 'Bitte stimme der Datenschutzerklärung zu.',
        errorConnection: 'Verbindung fehlgeschlagen. Bitte versuche es erneut.',
        errorSubscribed: 'Du bist bereits angemeldet!',
        errorGeneric: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.'
    }
};

function t(key) {
    var lang = document.documentElement.lang || 'en';
    return (strings[lang] && strings[lang][key]) || strings.en[key];
}
```

Then use `t('sending')`, `t('submit')`, `t('errorEmail')` etc. throughout.

- [ ] **Step 2: Verify form works**

Open homepage, scroll to CTA:
- Submit empty → error message in English
- Submit invalid email → error message
- Submit without consent → error message
- Submit valid → success message (or Mailchimp response)
- Switch to DE → error messages show in German

- [ ] **Step 3: Commit**

```bash
git add js/mailchimp.js
git commit -m "feat: update mailchimp handler to English with i18n support"
```

---

## Task 9: Final Polish and Verification

- [ ] **Step 1: Cross-page navigation check**

Open each page and verify:
- Homepage → click "Retreats" → goes to retreats.html
- Homepage → click "About" → goes to about.html
- Homepage → click "Read our story" → goes to about.html
- Homepage → click "View retreat" → goes to retreats.html
- About → click "Want to join us?" button → goes to retreats.html
- Retreats → click "More about Tanafreida" → opens tanafreida.at in new tab
- All nav links work on all pages
- Logo links back to index.html on all pages
- Footer links work on all pages
- Impressum/Datenschutz links work

- [ ] **Step 2: Mobile responsiveness check**

Open in browser dev tools, test at 375px (iPhone) and 768px (iPad):
- Nav collapses to hamburger
- Hero text is readable and not too large
- Two-column layouts stack to single column
- Experience grid goes to single column
- Instagram collage adapts
- Form is usable on mobile
- All images fit without overflow
- Sections have appropriate padding (reduced)

- [ ] **Step 3: Language toggle check across all pages**

- Switch to DE on homepage → navigate to About → should still be DE
- Switch to EN on Retreats → navigate to Homepage → should still be EN
- All pages respond to the toggle correctly

- [ ] **Step 4: Accessibility audit**

Check all three pages for:
- Hamburger button has `aria-label="Open menu"` and `aria-expanded`
- Language toggle has `aria-label="Switch language"`
- All form inputs have associated `<label>` elements (or `aria-label`)
- All `<img>` tags have descriptive `alt` text
- All external links have `rel="noopener"` and `target="_blank"` where appropriate
- Tab through all interactive elements on each page — focus order should be logical
- Color contrast: verify terracotta buttons have white text (WCAG AA)

- [ ] **Step 5: Clean up temporary files**

Remove `test.html` if created during CSS verification (Task 2, Step 10).
Remove `images/Neu/neu_v2/trace_logo.py` and `images/Neu/neu_v2/logo_small.png` if they still exist.

```bash
rm -f test.html "images/Neu/neu_v2/trace_logo.py" "images/Neu/neu_v2/logo_small.png"
```

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "chore: final polish and cleanup for website redesign"
```
