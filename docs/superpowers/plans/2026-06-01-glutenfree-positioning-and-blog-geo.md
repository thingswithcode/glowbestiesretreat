# Gluten-Free Positioning + Bilingual Blog (GEO/SEO) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make "fully gluten-free / celiac-friendly" a visible positioning pillar and add a bilingual (EN + DE) blog engineered for SEO and GEO, targeting the German-speaking (DACH) market.

**Architecture:** Plain hand-authored HTML/CSS/vanilla JS, no build step. Blog articles are real standalone HTML files per language (Approach A) with German text in the source, linked via `hreflang`. SEO/GEO is driven by JSON-LD structured data, FAQ blocks, clean meta tags, robots.txt and an updated sitemap.

**Tech Stack:** HTML5, CSS custom properties (`css/style.css`), vanilla JS IIFE (`js/i18n.js`), JSON-LD, Netlify hosting.

**Verification model (no test suite exists):** "Test" here means: serve locally with `python -m http.server 8000` and open the page; validate JSON-LD at https://validator.schema.org/ and https://search.google.com/test/rich-results; confirm hreflang reciprocity by eye; scan for em dashes; confirm the CSS cache-buster was bumped. There is no unit-test framework and we will not introduce one.

---

## Conventions locked for this plan

- **No em dashes anywhere.** Use commas, parentheses, colons, or hyphens. Scan before every commit.
- **Blog pages use ROOT-RELATIVE paths** (`/css/style.css`, `/index.html`, `/images/...`, `/js/...`) because they live in subfolders. Existing root pages keep their relative paths.
- **CSS cache-buster:** this plan bumps `css/style.css?v=4` to `?v=5` in every HTML file that links the stylesheet. New blog pages link `?v=5` from the start.
- **Nav and footer are duplicated per page.** The "Journal" link must be added to all 7 existing pages and included in all new blog pages.
- **i18n:** new translatable strings on existing root pages get a `data-i18n` attribute (English inside the element) AND a matching key in the `de` object in `js/i18n.js`. Blog article bodies are NOT translated via i18n; they are real per-language files.
- **Canonical domain:** `https://glowbestiesretreats.com/` (no trailing file for the homepage).

## File structure

**Create:**
- `robots.txt`
- `blog.html` (EN blog index, at root)
- `blog/de/index.html` (DE blog index)
- EN articles (root-relative paths, in `/blog/`):
  - `blog/gluten-free-wellness-retreat-alps.html`
  - `blog/traveling-with-celiac-disease.html`
  - `blog/recovery-for-high-performers.html`
  - `blog/montafon-reset.html`
  - `blog/gluten-free-nutrition-retreat.html`
  - `blog/women-only-retreat.html`
- DE articles (in `/blog/de/`):
  - `blog/de/glutenfreies-wellness-retreat-alpen.html`
  - `blog/de/reisen-mit-zoeliakie.html`
  - `blog/de/recovery-fuer-leistungsmenschen.html`
  - `blog/de/montafon-rueckzugsort.html`
  - `blog/de/glutenfrei-geniessen-ernaehrung.html`
  - `blog/de/women-only-retreat.html`

**Modify:**
- `index.html` (gluten-free section, hero line, Journal nav/footer link, JSON-LD, meta/OG, cache bump)
- `retreats.html` (gluten-free quick fact + strengthened food copy, Journal nav/footer link, JSON-LD Event, meta/OG, cache bump)
- `retreat-montafon.html` (Journal nav/footer link, JSON-LD Event, meta/OG, cache bump)
- `about.html`, `contact.html`, `impressum.html`, `datenschutz.html` (Journal nav/footer link, JSON-LD Organization, meta/OG where missing, cache bump)
- `css/style.css` (gluten-free section + badge styles, blog index + article styles)
- `js/i18n.js` (new keys: gluten-free section, hero gluten-free line, retreat food, nav.journal, footer.journal)
- `sitemap.xml` (add blog index + all articles, add hreflang alternates, refresh lastmod)

---

## Task 1: Create feature branch

**Files:** none (git only)

- [ ] **Step 1: Confirm current state**

Run: `git status -sb`
Expected: on `master`, ahead of origin by 1, with the existing modified/untracked files (impressum, style.css, deleted feedback file, new images, sitemap, spec/plan docs).

- [ ] **Step 2: Create and switch to a feature branch**

Run:
```
git checkout -b feature/glutenfree-blog-geo
```
Expected: "Switched to a new branch 'feature/glutenfree-blog-geo'". The existing uncommitted changes (impressum, deleted feedback, etc.) come along on the branch. They will be committed as part of Task 4 / final commit. Do NOT discard them.

- [ ] **Step 3: Commit the approved design docs**

Run:
```
git add "docs/superpowers/specs/2026-06-01-glutenfree-positioning-and-blog-design.md" "docs/superpowers/plans/2026-06-01-glutenfree-positioning-and-blog-geo.md"
git commit -m "docs: spec and plan for gluten-free positioning and bilingual blog"
```
Expected: one commit created.

---

## Task 2: SEO meta + JSON-LD on all existing pages

Adds Organization JSON-LD to every page, Event JSON-LD to the retreat-related pages, and Open Graph tags. The JSON-LD goes immediately before `</head>`.

**Files:**
- Modify: `index.html`, `about.html`, `retreats.html`, `retreat-montafon.html`, `contact.html`, `impressum.html`, `datenschutz.html`

- [ ] **Step 1: Add Organization JSON-LD to every page**

Insert this block immediately before `</head>` in ALL seven pages:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Glow Besties Retreats",
  "url": "https://glowbestiesretreats.com/",
  "logo": "https://glowbestiesretreats.com/images/Neu/neu_v2/logo.svg",
  "description": "Women-only wellness retreats built around movement, recovery and fully gluten-free nourishment.",
  "sameAs": ["https://www.instagram.com/theglowbesties/"]
}
</script>
```

- [ ] **Step 2: Add Open Graph + canonical to every page**

Insert into `<head>` of each page (adjust `og:title`, `og:description`, `og:url`, and `canonical` per page; example shown for `index.html`):

```html
<link rel="canonical" href="https://glowbestiesretreats.com/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Glow Besties Retreats">
<meta property="og:title" content="Glow Besties Retreats | move, nourish, connect">
<meta property="og:description" content="Women-only retreats for movement, recovery, and fully gluten-free nourishment in the Alps.">
<meta property="og:url" content="https://glowbestiesretreats.com/">
<meta property="og:image" content="https://glowbestiesretreats.com/images/hero-homepage.png">
```

Per-page canonical/og:url values:
- `index.html` -> `https://glowbestiesretreats.com/`
- `about.html` -> `https://glowbestiesretreats.com/about.html`
- `retreats.html` -> `https://glowbestiesretreats.com/retreats.html`
- `retreat-montafon.html` -> `https://glowbestiesretreats.com/retreat-montafon.html`
- `contact.html` -> `https://glowbestiesretreats.com/contact.html`
- `impressum.html` -> `https://glowbestiesretreats.com/impressum.html`
- `datenschutz.html` -> `https://glowbestiesretreats.com/datenschutz.html`

- [ ] **Step 3: Add Event JSON-LD to retreat pages**

Insert before `</head>` in `index.html`, `retreats.html`, and `retreat-montafon.html` (in addition to the Organization block):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "The Alpine Reset",
  "description": "A three-day, women-only, fully gluten-free wellness retreat focused on movement, nervous-system recovery and real connection.",
  "startDate": "2026-05-29",
  "endDate": "2026-05-31",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Tanafreida, Montafon",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Vorarlberg",
      "addressCountry": "AT"
    }
  },
  "image": "https://glowbestiesretreats.com/images/hero-mountains.jpg",
  "organizer": {
    "@type": "Organization",
    "name": "Glow Besties Retreats",
    "url": "https://glowbestiesretreats.com/"
  }
}
</script>
```

- [ ] **Step 4: Verify JSON-LD validity**

Run: `python -m http.server 8000` (from project root), then paste each page's source into https://validator.schema.org/.
Expected: Organization parses on all 7 pages; Event parses on the 3 retreat pages; zero JSON syntax errors.

- [ ] **Step 5: Em-dash scan + commit**

Run (PowerShell): `Select-String -Path *.html -Pattern ([char]0x2014)`
Expected: no matches.
Then:
```
git add index.html about.html retreats.html retreat-montafon.html contact.html impressum.html datenschutz.html
git commit -m "feat: add Organization/Event JSON-LD, canonical and Open Graph meta to all pages"
```

---

## Task 3: robots.txt

**Files:**
- Create: `robots.txt`

- [ ] **Step 1: Create robots.txt**

```
User-agent: *
Allow: /

Sitemap: https://glowbestiesretreats.com/sitemap.xml
```

- [ ] **Step 2: Verify and commit**

Run: `python -m http.server 8000` then open http://localhost:8000/robots.txt
Expected: file serves as plain text.
```
git add robots.txt
git commit -m "feat: add robots.txt pointing to sitemap"
```

---

## Task 4: Gluten-free positioning on the homepage

Adds a dedicated gluten-free section and a hero trust line, plus matching German i18n keys. Also folds in the already-pending impressum/feedback changes from the working tree into a clean commit.

**Files:**
- Modify: `index.html`, `js/i18n.js`

- [ ] **Step 1: Add the gluten-free section to index.html**

Insert this section in `index.html` immediately AFTER the "What You'll Experience" section (`<section ... id="experience">...</section>`) and BEFORE the Instagram section:

```html
<!-- Section: Gluten-Free Promise -->
<section class="section section-white glutenfree-section" id="gluten-free">
    <div class="container">
        <span class="section-label section-label-center" data-i18n="glutenfree.label">FULLY GLUTEN-FREE</span>
        <h2 class="section-title section-title-center" data-i18n="glutenfree.title">Gluten-free, start to finish.</h2>
        <div class="glutenfree-text fade-in">
            <p data-i18n="glutenfree.p1">Every meal at our retreats is 100% gluten-free. Not as an afterthought or a special request, but by design.</p>
            <p data-i18n="glutenfree.p2">Our co-founder Leonie lives with celiac disease, so we built the whole experience around food that is safe, nourishing, and genuinely good. No cross-contamination worries, no compromises, no feeling left out.</p>
        </div>
        <span class="glutenfree-badge" data-i18n="glutenfree.badge">100% Gluten-Free</span>
    </div>
</section>
```

- [ ] **Step 2: Add a gluten-free line to the hero**

In `index.html`, directly after the `hero-trust` paragraph (line with `data-i18n="hero.trust"`), add:

```html
<p class="hero-glutenfree" data-i18n="hero.glutenfree">100% gluten-free, by design</p>
```

- [ ] **Step 3: Add German keys to js/i18n.js**

Add these keys inside the `de: { ... }` object (place after the `instagram.*` block for grouping):

```js
// ── Gluten-Free Promise (index.html) ──
'glutenfree.label': 'KOMPLETT GLUTENFREI',
'glutenfree.title': 'Glutenfrei, von Anfang bis Ende.',
'glutenfree.p1': 'Jede Mahlzeit bei unseren Retreats ist zu 100% glutenfrei. Nicht als Zusatz oder Sonderwunsch, sondern von Grund auf so gedacht.',
'glutenfree.p2': 'Unsere Mitgründerin Leonie lebt mit Zöliakie, deshalb haben wir das ganze Erlebnis rund um Essen gebaut, das sicher, nährend und richtig gut ist. Keine Sorge vor Spuren, keine Kompromisse, kein Außenvor-Sein.',
'glutenfree.badge': '100% Glutenfrei',
'hero.glutenfree': '100% glutenfrei, von Grund auf',
```

- [ ] **Step 4: Verify in browser (both languages)**

Run: `python -m http.server 8000`, open http://localhost:8000/ .
Expected: the gluten-free section appears with the badge. Set `localStorage.lang='de'` in the console and reload; the section text and badge switch to German.

- [ ] **Step 5: Em-dash scan + commit (include pending impressum/feedback changes)**

Run (PowerShell): `Select-String -Path index.html, js/i18n.js -Pattern ([char]0x2014)`
Expected: no matches.
```
git add index.html js/i18n.js impressum.html
git add -u
git commit -m "feat: add gluten-free promise section and hero line; update impressum address; remove feedback file"
```
Note: `git add -u` stages the already-deleted feedback file and other tracked deletions/modifications from the working tree. Verify with `git status` that no unrelated junk is staged before committing.

---

## Task 5: Gluten-free signal on the retreat page

**Files:**
- Modify: `retreats.html`, `js/i18n.js`

- [ ] **Step 1: Add a gluten-free quick fact**

In `retreats.html`, inside `<div class="retreat-quick-facts">`, add a fourth quick fact after the group-size one:

```html
<div class="quick-fact">
    <span class="quick-fact-label" data-i18n="retreat.facts.food.label">Food</span>
    <span class="quick-fact-value" data-i18n="retreat.facts.food.value">100% Gluten-Free</span>
</div>
```

- [ ] **Step 2: Strengthen the food section copy**

In `retreats.html`, replace the `food-desc` paragraph text (keep the `data-i18n="retreat.food.desc"` attribute) with:

```html
<p class="food-desc fade-in" data-i18n="retreat.food.desc">Every meal is 100% gluten-free. Our co-founder Leonie lives with celiac disease, so safe, gluten-free food is not an add-on here, it is the foundation. We adapt to every dietary need (vegan, vegetarian, pescatarian, or omnivore) with no restrictions and no compromises, just nourishing meals made for you.</p>
```

- [ ] **Step 3: Add German keys to js/i18n.js**

Add inside the `de` object, near the existing `retreat.facts.*` and `retreat.food.*` keys:

```js
'retreat.facts.food.label': 'Essen',
'retreat.facts.food.value': '100% Glutenfrei',
```
And REPLACE the existing `'retreat.food.desc'` value with:
```js
'retreat.food.desc': 'Jede Mahlzeit ist zu 100% glutenfrei. Unsere Mitgründerin Leonie lebt mit Zöliakie, deshalb ist sicheres, glutenfreies Essen hier kein Zusatz, sondern die Grundlage. Wir passen uns jedem Ernährungsbedürfnis an (vegan, vegetarisch, pescetarisch oder omnivor) - ohne Einschränkungen und ohne Kompromisse, nur nährende Mahlzeiten, gemacht für dich.',
```

- [ ] **Step 4: Verify in browser (both languages)**

Run: `python -m http.server 8000`, open http://localhost:8000/retreats.html .
Expected: a fourth quick fact "Food / 100% Gluten-Free" shows; the food section reads the strengthened copy; German toggle works.

- [ ] **Step 5: Em-dash scan + commit**

Run (PowerShell): `Select-String -Path retreats.html, js/i18n.js -Pattern ([char]0x2014)`
Expected: no matches.
```
git add retreats.html js/i18n.js
git commit -m "feat: surface 100% gluten-free on retreat page with founder credibility"
```

---

## Task 6: CSS for gluten-free section + badge, bump cache to v=5

**Files:**
- Modify: `css/style.css`, all 7 existing HTML pages (cache buster)

- [ ] **Step 1: Append gluten-free styles to css/style.css**

Append at the end of `css/style.css` (uses existing tokens; adjust token names only if the actual `:root` differs, otherwise these fall back gracefully):

```css
/* ── Gluten-Free Promise ── */
.glutenfree-section { text-align: center; }
.glutenfree-text { max-width: 640px; margin: 0 auto; }
.glutenfree-badge {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.6rem 1.4rem;
    border: 1px solid var(--color-terracotta, #c47b5a);
    border-radius: 999px;
    color: var(--color-terracotta, #c47b5a);
    font-family: var(--font-sans, 'Jost', sans-serif);
    font-size: 0.8rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}
.hero-glutenfree {
    margin-top: 0.5rem;
    font-family: var(--font-sans, 'Jost', sans-serif);
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    opacity: 0.85;
}
```

- [ ] **Step 2: Bump cache buster in all 7 pages**

In `index.html`, `about.html`, `retreats.html`, `retreat-montafon.html`, `contact.html`, `impressum.html`, `datenschutz.html`, change `href="css/style.css?v=4"` to `href="css/style.css?v=5"`. (Note: `impressum.html` and `datenschutz.html` may currently link `css/style.css` with no version; give them `?v=5` too.)

- [ ] **Step 3: Verify**

Run: `python -m http.server 8000`, hard-reload http://localhost:8000/ .
Expected: badge is pill-shaped with terracotta outline; hero gluten-free line shows under the trust line; no layout breakage.

- [ ] **Step 4: Commit**

```
git add css/style.css index.html about.html retreats.html retreat-montafon.html contact.html impressum.html datenschutz.html
git commit -m "style: gluten-free section and badge styles; bump CSS cache to v5"
```

---

## Task 7: Blog CSS (index + article)

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Append blog styles**

Append at the end of `css/style.css`:

```css
/* ── Blog Index ── */
.blog-hero { text-align: center; padding-top: calc(var(--navbar-height, 80px) + 4rem); padding-bottom: 2rem; }
.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}
.blog-card { display: flex; flex-direction: column; text-align: left; }
.blog-card-tag {
    font-family: var(--font-sans, 'Jost', sans-serif);
    font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--color-terracotta, #c47b5a); margin-bottom: 0.5rem;
}
.blog-card-title { font-family: var(--font-serif, 'Cormorant Garamond', serif); font-size: 1.5rem; line-height: 1.2; margin: 0 0 0.5rem; }
.blog-card-excerpt { font-size: 0.95rem; opacity: 0.85; margin-bottom: 0.75rem; }
.blog-card a.blog-card-link { font-family: var(--font-sans,'Jost',sans-serif); font-size: 0.85rem; letter-spacing: 0.06em; text-transform: uppercase; }

/* ── Blog Article ── */
.article-body { max-width: 720px; margin: 0 auto; }
.article-hero { text-align: center; padding-top: calc(var(--navbar-height, 80px) + 4rem); padding-bottom: 1rem; }
.article-meta { font-family: var(--font-sans,'Jost',sans-serif); font-size: 0.8rem; letter-spacing: 0.08em; opacity: 0.7; text-transform: uppercase; }
.article-body h2 { font-family: var(--font-serif,'Cormorant Garamond',serif); font-size: 1.9rem; margin-top: 2.5rem; }
.article-body p, .article-body li { font-size: 1.05rem; line-height: 1.7; }
.article-lang-switch { display: inline-block; margin-top: 1rem; font-size: 0.8rem; letter-spacing: 0.06em; text-transform: uppercase; }
.article-faq { margin-top: 3rem; border-top: 1px solid rgba(0,0,0,0.1); padding-top: 2rem; }
.article-faq h3 { font-family: var(--font-serif,'Cormorant Garamond',serif); font-size: 1.4rem; margin-bottom: 0.25rem; }
.article-faq .faq-item { margin-bottom: 1.5rem; }
```

- [ ] **Step 2: Note cache buster**

The cache buster is already at `?v=5` from Task 6; the new blog pages will link `?v=5`. No further bump needed unless CSS changes again after this.

- [ ] **Step 3: Commit**

```
git add css/style.css
git commit -m "style: add blog index and article styles"
```

---

## Task 8: Add "Journal" nav and footer link to all existing pages

**Files:**
- Modify: `index.html`, `about.html`, `retreats.html`, `retreat-montafon.html`, `contact.html`, `impressum.html`, `datenschutz.html`, `js/i18n.js`

Note: `impressum.html` uses a minimal nav (just a "back to home" button) and a minimal footer; for those two pages add the Journal link only to the footer if a footer nav list exists, otherwise skip the nav there. Pages with the full `<ul class="nav-links">` get the nav link.

- [ ] **Step 1: Add nav link**

In each page that has `<ul class="nav-links">`, add this `<li>` immediately before the Contact `<li>`:

```html
<li><a href="blog.html" data-i18n="nav.journal">Journal</a></li>
```

- [ ] **Step 2: Add footer link**

In each page that has `<ul class="footer-links">`, add immediately after the About `<li>`:

```html
<li><a href="blog.html" data-i18n="footer.journal">Journal</a></li>
```

- [ ] **Step 3: Add i18n keys**

In `js/i18n.js` `de` object, add to the navigation block and footer block:

```js
'nav.journal': 'Journal',
'footer.journal': 'Journal',
```

- [ ] **Step 4: Verify**

Run: `python -m http.server 8000`, open several pages.
Expected: "Journal" appears in nav and footer; links resolve to `/blog.html` (will 404 until Task 9; that is fine for now).

- [ ] **Step 5: Commit**

```
git add index.html about.html retreats.html retreat-montafon.html contact.html impressum.html datenschutz.html js/i18n.js
git commit -m "feat: add Journal nav and footer links across site"
```

---

## Task 9: English blog index (blog.html)

**Files:**
- Create: `blog.html`

- [ ] **Step 1: Create blog.html**

Root-relative paths throughout. Nav/footer mirror the existing site (copy from `index.html`) but with root-relative `href`s. Card list links to the 6 EN articles (created in later tasks; links 404 until then).

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="The Glow Besties Journal: gluten-free travel, celiac-friendly retreats, recovery for high performers, and life in the Alps.">
    <title>Journal | Glow Besties Retreats</title>
    <link rel="canonical" href="https://glowbestiesretreats.com/blog.html">
    <link rel="alternate" hreflang="en" href="https://glowbestiesretreats.com/blog.html">
    <link rel="alternate" hreflang="de" href="https://glowbestiesretreats.com/blog/de/index.html">
    <link rel="alternate" hreflang="x-default" href="https://glowbestiesretreats.com/blog.html">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Journal | Glow Besties Retreats">
    <meta property="og:description" content="Gluten-free travel, celiac-friendly retreats, and recovery for high performers.">
    <meta property="og:url" content="https://glowbestiesretreats.com/blog.html">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/style.css?v=5">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Glow Besties Journal",
      "url": "https://glowbestiesretreats.com/blog.html",
      "inLanguage": "en",
      "publisher": { "@type": "Organization", "name": "Glow Besties Retreats", "url": "https://glowbestiesretreats.com/" }
    }
    </script>
</head>
<body>
    <nav class="navbar navbar-light" id="navbar">
        <div class="nav-container">
            <a href="/index.html" class="nav-logo"><img src="/images/Neu/neu_v2/logo.svg" alt="Glow Besties Retreats Logo"></a>
            <ul class="nav-links">
                <li><a href="/retreats.html">Retreats</a></li>
                <li><a href="/about.html">About</a></li>
                <li><a href="/blog.html">Journal</a></li>
                <li><a href="/contact.html">Contact</a></li>
                <li><a href="/retreats.html#cta" class="nav-cta">Book Now</a></li>
            </ul>
        </div>
    </nav>

    <main>
        <section class="section section-white blog-hero">
            <div class="container">
                <span class="section-label section-label-center">JOURNAL</span>
                <h1 class="section-title section-title-center">Notes on slowing down, gluten-free.</h1>
                <p><a class="article-lang-switch" href="/blog/de/index.html">Auf Deutsch lesen</a></p>
            </div>
        </section>

        <section class="section section-white">
            <div class="container">
                <div class="blog-grid">
                    <!-- One card per EN article. Repeat this block per article. -->
                    <article class="blog-card">
                        <span class="blog-card-tag">Gluten-Free</span>
                        <h2 class="blog-card-title"><a href="/blog/gluten-free-wellness-retreat-alps.html">Gluten-Free Wellness Retreat in the Alps: What to Look For</a></h2>
                        <p class="blog-card-excerpt">How to tell a truly 100% gluten-free retreat from a "we can accommodate" one, and why it matters for celiacs.</p>
                        <a class="blog-card-link" href="/blog/gluten-free-wellness-retreat-alps.html">Read</a>
                    </article>
                    <article class="blog-card">
                        <span class="blog-card-tag">Celiac</span>
                        <h2 class="blog-card-title"><a href="/blog/traveling-with-celiac-disease.html">Traveling With Celiac Disease: How a Fully Gluten-Free Retreat Works</a></h2>
                        <p class="blog-card-excerpt">What changes when the whole kitchen is gluten-free, and how to travel without the constant food anxiety.</p>
                        <a class="blog-card-link" href="/blog/traveling-with-celiac-disease.html">Read</a>
                    </article>
                    <article class="blog-card">
                        <span class="blog-card-tag">Recovery</span>
                        <h2 class="blog-card-title"><a href="/blog/recovery-for-high-performers.html">Recovery for High Performers: Why Rest Is Not a Luxury</a></h2>
                        <p class="blog-card-excerpt">Nervous-system recovery for women who are always on, and how a weekend reset actually helps.</p>
                        <a class="blog-card-link" href="/blog/recovery-for-high-performers.html">Read</a>
                    </article>
                    <article class="blog-card">
                        <span class="blog-card-tag">Montafon</span>
                        <h2 class="blog-card-title"><a href="/blog/montafon-reset.html">Montafon as a Place to Reset: Why the Alps Work for a Real Break</a></h2>
                        <p class="blog-card-excerpt">Altitude, silence, and screen-free nature: why the Montafon valley is built for a reset.</p>
                        <a class="blog-card-link" href="/blog/montafon-reset.html">Read</a>
                    </article>
                    <article class="blog-card">
                        <span class="blog-card-tag">Nutrition</span>
                        <h2 class="blog-card-title"><a href="/blog/gluten-free-nutrition-retreat.html">Enjoy Gluten-Free Instead of Going Without: Nutrition at the Retreat</a></h2>
                        <p class="blog-card-excerpt">Gluten-free is not restriction. What we cook, and how we keep energy and enjoyment high.</p>
                        <a class="blog-card-link" href="/blog/gluten-free-nutrition-retreat.html">Read</a>
                    </article>
                    <article class="blog-card">
                        <span class="blog-card-tag">Women Only</span>
                        <h2 class="blog-card-title"><a href="/blog/women-only-retreat.html">Women-Only Retreat: Why It Makes a Difference</a></h2>
                        <p class="blog-card-excerpt">What a small, women-only group changes about openness, safety, and real connection.</p>
                        <a class="blog-card-link" href="/blog/women-only-retreat.html">Read</a>
                    </article>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container footer-content">
            <div class="footer-brand">
                <span class="footer-logo">Glow Besties Retreats</span>
                <span class="footer-tagline">move &middot; nourish &middot; connect</span>
            </div>
            <nav class="footer-nav" aria-label="Footer Navigation">
                <ul class="footer-links">
                    <li><a href="/retreats.html">Retreats</a></li>
                    <li><a href="/about.html">About</a></li>
                    <li><a href="/blog.html">Journal</a></li>
                    <li><a href="https://www.instagram.com/theglowbesties/" target="_blank" rel="noopener">Instagram</a></li>
                </ul>
            </nav>
            <div class="footer-legal">
                <a href="/impressum.html">Impressum</a>
                <a href="/datenschutz.html">Datenschutz</a>
            </div>
            <p class="footer-copy">&copy; 2026 Glow Besties Retreats</p>
        </div>
    </footer>
    <script src="/js/main.js"></script>
    <script src="/js/i18n.js"></script>
</body>
</html>
```

Note: blog pages intentionally omit `data-i18n` on nav/footer (they are language-specific pages). The shared `i18n.js` will still run harmlessly.

- [ ] **Step 2: Verify**

Run: `python -m http.server 8000`, open http://localhost:8000/blog.html .
Expected: index renders with 6 cards, "Auf Deutsch lesen" link present (404s until Task 10), styles applied.

- [ ] **Step 3: Validate JSON-LD + em-dash scan + commit**

Validate at https://validator.schema.org/ (Blog parses).
Run (PowerShell): `Select-String -Path blog.html -Pattern ([char]0x2014)` -> no matches.
```
git add blog.html
git commit -m "feat: add English blog index"
```

---

## Task 10: German blog index (blog/de/index.html)

**Files:**
- Create: `blog/de/index.html`

- [ ] **Step 1: Create blog/de/index.html**

Same structure as Task 9 but German UI text, `lang="de"`, `inLanguage": "de"`, canonical `/blog/de/index.html`, hreflang reciprocal, cards link to the 6 DE article slugs, and the language switch points to `/blog.html`. Card titles/excerpts in German:

- Gluten-Free -> "Glutenfreies Wellness-Retreat in den Alpen: Worauf es ankommt" -> `/blog/de/glutenfreies-wellness-retreat-alpen.html`
- Celiac -> "Reisen mit Zöliakie: Wie ein komplett glutenfreies Retreat funktioniert" -> `/blog/de/reisen-mit-zoeliakie.html`
- Recovery -> "Recovery für Leistungsmenschen: Warum Pausen kein Luxus sind" -> `/blog/de/recovery-fuer-leistungsmenschen.html`
- Montafon -> "Montafon als Rückzugsort: Warum die Alpen perfekt für einen Reset sind" -> `/blog/de/montafon-rueckzugsort.html`
- Nutrition -> "Glutenfrei genießen statt verzichten: Ernährung im Retreat" -> `/blog/de/glutenfrei-geniessen-ernaehrung.html`
- Women Only -> "Women-only Retreat: Warum es einen Unterschied macht" -> `/blog/de/women-only-retreat.html`

Use proper German characters (ä a-umlaut, ö o-umlaut, ü u-umlaut, ß eszett) in the actual HTML (UTF-8). Page H1: "Notizen übersLangsamerwerden, glutenfrei." -> use a natural phrasing: "Gedanken übersRunterfahren, glutenfrei." Hero label: "JOURNAL". Language switch label: "Read in English" linking `/blog.html`.

- [ ] **Step 2: Verify, validate, em-dash scan, commit**

Run: `python -m http.server 8000`, open http://localhost:8000/blog/de/index.html .
Expected: renders in German; "Read in English" link works; styles applied; JSON-LD `Blog` (inLanguage de) parses.
Run (PowerShell): `Select-String -Path blog/de/index.html -Pattern ([char]0x2014)` -> no matches.
```
git add blog/de/index.html
git commit -m "feat: add German blog index"
```

---

## Task 11: Article template (canonical reference)

This is the reusable unit for Tasks 12 to 17. It is written once here; each article task fills in the content fields and adjusts paths/hreflang. The EN version lives in `/blog/` (root-relative paths unchanged); the DE version lives in `/blog/de/` (root-relative paths are identical because they start with `/`).

**Files:** none created in this task (template reference only).

- [ ] **Step 1: Record the template**

```html
<!DOCTYPE html>
<html lang="LANG">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="META_DESCRIPTION">
    <title>ARTICLE_TITLE | Glow Besties Retreats</title>
    <link rel="canonical" href="CANONICAL_URL">
    <link rel="alternate" hreflang="en" href="EN_URL">
    <link rel="alternate" hreflang="de" href="DE_URL">
    <link rel="alternate" hreflang="x-default" href="EN_URL">
    <meta property="og:type" content="article">
    <meta property="og:title" content="ARTICLE_TITLE">
    <meta property="og:description" content="META_DESCRIPTION">
    <meta property="og:url" content="CANONICAL_URL">
    <meta property="og:image" content="OG_IMAGE_URL">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/style.css?v=5">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "ARTICLE_TITLE",
      "description": "META_DESCRIPTION",
      "inLanguage": "LANG",
      "datePublished": "2026-06-01",
      "dateModified": "2026-06-01",
      "image": "OG_IMAGE_URL",
      "mainEntityOfPage": "CANONICAL_URL",
      "author": { "@type": "Organization", "name": "Glow Besties Retreats" },
      "publisher": {
        "@type": "Organization",
        "name": "Glow Besties Retreats",
        "logo": { "@type": "ImageObject", "url": "https://glowbestiesretreats.com/images/Neu/neu_v2/logo.svg" }
      }
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "FAQ_Q1", "acceptedAnswer": { "@type": "Answer", "text": "FAQ_A1" } },
        { "@type": "Question", "name": "FAQ_Q2", "acceptedAnswer": { "@type": "Answer", "text": "FAQ_A2" } },
        { "@type": "Question", "name": "FAQ_Q3", "acceptedAnswer": { "@type": "Answer", "text": "FAQ_A3" } }
      ]
    }
    </script>
</head>
<body>
    <nav class="navbar navbar-light" id="navbar">
        <div class="nav-container">
            <a href="/index.html" class="nav-logo"><img src="/images/Neu/neu_v2/logo.svg" alt="Glow Besties Retreats Logo"></a>
            <ul class="nav-links">
                <li><a href="/retreats.html">NAV_RETREATS</a></li>
                <li><a href="/about.html">NAV_ABOUT</a></li>
                <li><a href="BLOG_INDEX_URL">Journal</a></li>
                <li><a href="/contact.html">NAV_CONTACT</a></li>
                <li><a href="/retreats.html#cta" class="nav-cta">NAV_CTA</a></li>
            </ul>
        </div>
    </nav>

    <main>
        <article>
            <header class="section section-white article-hero">
                <div class="container article-body">
                    <span class="article-meta">JOURNAL &middot; PUBLISH_DATE_DISPLAY</span>
                    <h1>ARTICLE_TITLE</h1>
                    <a class="article-lang-switch" href="OTHER_LANG_URL">LANG_SWITCH_LABEL</a>
                </div>
            </header>

            <section class="section section-white">
                <div class="container article-body">
                    <!-- BODY: real H2/H3 headings, paragraphs, and lists. See per-article outline. -->
                    <p>INTRO_PARAGRAPH</p>
                    <h2>SECTION_HEADING</h2>
                    <p>SECTION_PARAGRAPH</p>
                    <!-- ...more sections... -->

                    <div class="article-faq">
                        <h2>FAQ_HEADING</h2>
                        <div class="faq-item"><h3>FAQ_Q1</h3><p>FAQ_A1</p></div>
                        <div class="faq-item"><h3>FAQ_Q2</h3><p>FAQ_A2</p></div>
                        <div class="faq-item"><h3>FAQ_Q3</h3><p>FAQ_A3</p></div>
                    </div>

                    <p style="margin-top:2.5rem;"><a class="btn btn-primary" href="/retreats.html#cta">CTA_LABEL</a></p>
                </div>
            </section>
        </article>
    </main>

    <footer class="footer">
        <div class="container footer-content">
            <div class="footer-brand">
                <span class="footer-logo">Glow Besties Retreats</span>
                <span class="footer-tagline">move &middot; nourish &middot; connect</span>
            </div>
            <nav class="footer-nav" aria-label="Footer Navigation">
                <ul class="footer-links">
                    <li><a href="/retreats.html">NAV_RETREATS</a></li>
                    <li><a href="/about.html">NAV_ABOUT</a></li>
                    <li><a href="BLOG_INDEX_URL">Journal</a></li>
                    <li><a href="https://www.instagram.com/theglowbesties/" target="_blank" rel="noopener">Instagram</a></li>
                </ul>
            </nav>
            <div class="footer-legal">
                <a href="/impressum.html">Impressum</a>
                <a href="/datenschutz.html">Datenschutz</a>
            </div>
            <p class="footer-copy">&copy; 2026 Glow Besties Retreats</p>
        </div>
    </footer>
    <script src="/js/main.js"></script>
    <script src="/js/i18n.js"></script>
</body>
</html>
```

Field reference:
- `LANG` = `en` or `de`.
- EN nav labels: Retreats / About / Contact / Book Now. DE nav labels: Retreats / Über uns / Kontakt / Jetzt buchen.
- `BLOG_INDEX_URL` = `/blog.html` (EN) or `/blog/de/index.html` (DE).
- `LANG_SWITCH_LABEL` = "Auf Deutsch lesen" on EN pages (links to DE), "Read in English" on DE pages (links to EN).
- `OTHER_LANG_URL` = the counterpart article URL.
- `CTA_LABEL` = "Join the waitlist" (EN) / "Auf die Warteliste" (DE).
- `FAQ_HEADING` = "FAQ" / "Häufige Fragen".
- IMPORTANT: the FAQPage JSON-LD `name`/`text` MUST match the visible FAQ questions/answers verbatim.

- [ ] **Step 2: No commit (reference only).** Proceed to article tasks.

---

## Tasks 12 to 17: Write the six article pairs (EN + DE)

For each task below: copy the Task 11 template into the EN file and the DE file, fill all fields, write the body following the outline (roughly 500 to 900 words, real headings and at least one list, factual and self-contained for GEO), and write the 3 FAQ pairs in BOTH the visible HTML and the FAQPage JSON-LD. Draft is written by Claude and held for founder review before the final push (Task 20). After each pair: serve locally and open both pages, validate both JSON-LD blocks (BlogPosting + FAQPage) at https://validator.schema.org/, confirm hreflang points both ways, scan for em dashes, then commit.

Common per-article values: `datePublished`/`dateModified` = `2026-06-01`, `PUBLISH_DATE_DISPLAY` = "June 2026" (EN) / "Juni 2026" (DE), `OG_IMAGE_URL` chosen from existing images (default `https://glowbestiesretreats.com/images/hero-mountains.jpg` unless a more fitting one exists).

### Task 12: Article 1 - Gluten-free wellness retreat in the Alps
- **Files:** Create `blog/gluten-free-wellness-retreat-alps.html`, `blog/de/glutenfreies-wellness-retreat-alpen.html`
- **EN title:** Gluten-Free Wellness Retreat in the Alps: What to Look For
- **DE title:** Glutenfreies Wellness-Retreat in den Alpen: Worauf es ankommt
- **EN meta:** A practical guide to choosing a truly 100% gluten-free wellness retreat in the Alps, and why it matters if you have celiac disease.
- **DE meta:** Ein praktischer Leitfaden, um ein wirklich 100% glutenfreies Wellness-Retreat in den Alpen zu finden, und warum das bei Zöliakie wichtig ist.
- **Keyword focus (DACH):** glutenfreies Retreat, Wellness Retreat Alpen, glutenfrei reisen Alpen
- **Outline (H2s):** Why "gluten-free friendly" is not enough; What 100% gluten-free actually means (cross-contamination, shared kitchens); How to vet a retreat before you book; Why the alpine setting helps; How Glow Besties does it.
- **FAQ:** (1) Is the entire retreat really 100% gluten-free? (2) How do you prevent cross-contamination? (3) Can you also handle vegan or vegetarian needs?
- **Commit:** `feat: add article - gluten-free wellness retreat in the Alps (EN+DE)`

### Task 13: Article 2 - Traveling with celiac disease
- **Files:** Create `blog/traveling-with-celiac-disease.html`, `blog/de/reisen-mit-zoeliakie.html`
- **EN title:** Traveling With Celiac Disease: How a Fully Gluten-Free Retreat Works
- **DE title:** Reisen mit Zöliakie: Wie ein komplett glutenfreies Retreat funktioniert
- **EN meta:** Traveling with celiac disease is stressful. Here is how a fully gluten-free retreat removes the food anxiety, from one celiac to another.
- **DE meta:** Reisen mit Zöliakie ist stressig. So nimmt ein komplett glutenfreies Retreat die ständige Essenssorge - von einer Betroffenen zur nächsten.
- **Keyword focus:** Zöliakie Urlaub, reisen mit Zöliakie, glutenfrei Urlaub
- **Outline (H2s):** The hidden stress of eating out with celiac; Why a closed gluten-free environment changes everything; Leonie's story (lived experience); Practical tips for celiac travel; What to expect at a fully gluten-free retreat.
- **FAQ:** (1) Is the food certified gluten-free? (2) What about cross-contact in a shared kitchen? (3) Should I bring my own food just in case?
- **Commit:** `feat: add article - traveling with celiac disease (EN+DE)`

### Task 14: Article 3 - Recovery for high performers
- **Files:** Create `blog/recovery-for-high-performers.html`, `blog/de/recovery-fuer-leistungsmenschen.html`
- **EN title:** Recovery for High Performers: Why Rest Is Not a Luxury
- **DE title:** Recovery für Leistungsmenschen: Warum Pausen kein Luxus sind
- **EN meta:** For women who are always on: what nervous-system recovery actually is, and why a structured reset is performance, not indulgence.
- **DE meta:** Für Frauen, die ständig funktionieren: Was Nervensystem-Recovery wirklich ist und warum ein strukturierter Reset Leistung ist, kein Luxus.
- **Keyword focus:** Recovery Retreat, Nervensystem regulieren, Auszeit für Frauen
- **Outline (H2s):** The real cost of always being on; What recovery actually means (the nervous system); Movement and rest are not opposites; Building routines that survive your normal week; What a reset weekend gives you.
- **FAQ:** (1) How is this different from a spa weekend? (2) Do I need to be fit to join? (3) Will a weekend really change anything?
- **Commit:** `feat: add article - recovery for high performers (EN+DE)`

### Task 15: Article 4 - Montafon as a place to reset
- **Files:** Create `blog/montafon-reset.html`, `blog/de/montafon-rueckzugsort.html`
- **EN title:** Montafon as a Place to Reset: Why the Alps Work for a Real Break
- **DE title:** Montafon als Rückzugsort: Warum die Alpen perfekt für einen Reset sind
- **EN meta:** Why the Montafon valley and Tanafreida above it are built for a real reset: altitude, silence, nature, and distance from the screen.
- **DE meta:** Warum das Montafon und Tanafreida darüber perfekt für einen echten Reset sind: Höhenlage, Stille, Natur und Abstand vom Bildschirm.
- **Keyword focus:** Retreat Montafon, Wellness Montafon, Auszeit Berge Vorarlberg
- **Outline (H2s):** Where is the Montafon and Tanafreida; Why altitude and air help you downshift; Nature as a screen detox; What you can do there; Getting there.
- **FAQ:** (1) Where exactly is the retreat? (2) How do I get to the Montafon? (3) What is the best time of year to visit?
- **Commit:** `feat: add article - Montafon as a place to reset (EN+DE)`

### Task 16: Article 5 - Enjoy gluten-free instead of going without
- **Files:** Create `blog/gluten-free-nutrition-retreat.html`, `blog/de/glutenfrei-geniessen-ernaehrung.html`
- **EN title:** Enjoy Gluten-Free Instead of Going Without: Nutrition at the Retreat
- **DE title:** Glutenfrei genießen statt verzichten: Ernährung im Retreat
- **EN meta:** Gluten-free is not about restriction. How we build balanced, protein-rich, genuinely enjoyable gluten-free meals at the retreat.
- **DE meta:** Glutenfrei heißt nicht Verzicht. Wie wir ausgewogene, proteinreiche und richtig gute glutenfreie Mahlzeiten im Retreat gestalten.
- **Keyword focus:** glutenfrei genießen, glutenfreie Ernährung, glutenfrei kochen Retreat
- **Outline (H2s):** Gluten-free is not a punishment; What we actually cook; Protein and stable energy; Adapting to vegan, vegetarian, pescatarian; The social side of shared meals.
- **FAQ:** (1) What do meals look like? (2) Can you handle other intolerances too? (3) Can I take recipes home?
- **Commit:** `feat: add article - enjoy gluten-free nutrition (EN+DE)`

### Task 17: Article 6 - Women-only retreat
- **Files:** Create `blog/women-only-retreat.html`, `blog/de/women-only-retreat.html`
- **EN title:** Women-Only Retreat: Why It Makes a Difference
- **DE title:** Women-only Retreat: Warum es einen Unterschied macht
- **EN meta:** Why a small, women-only group changes the openness, safety, and depth of connection at a retreat, and who it is for.
- **DE meta:** Warum eine kleine Frauengruppe Offenheit, Sicherheit und echte Verbindung im Retreat verändert - und für wen es gemacht ist.
- **Keyword focus:** Frauen Retreat, women only retreat, Retreat nur für Frauen
- **Outline (H2s):** What women-only actually changes; Safety and openness; The power of a small group; A shared reality; Who this is for.
- **FAQ:** (1) Who usually attends? (2) How big is the group? (3) Do I need to come with someone I know?
- **Commit:** `feat: add article - women-only retreat (EN+DE)`

---

## Task 18: Update sitemap.xml

**Files:**
- Modify: `sitemap.xml`

- [ ] **Step 1: Rewrite sitemap.xml with all pages, hreflang alternates, refreshed lastmod**

Replace the file contents with (uses the xhtml hreflang extension; lastmod 2026-06-01 for new/changed pages):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url><loc>https://glowbestiesretreats.com/</loc><lastmod>2026-06-01</lastmod><priority>1.0</priority></url>
  <url><loc>https://glowbestiesretreats.com/about.html</loc><lastmod>2026-06-01</lastmod><priority>0.8</priority></url>
  <url><loc>https://glowbestiesretreats.com/retreats.html</loc><lastmod>2026-06-01</lastmod><priority>0.9</priority></url>
  <url><loc>https://glowbestiesretreats.com/retreat-montafon.html</loc><lastmod>2026-06-01</lastmod><priority>0.9</priority></url>
  <url><loc>https://glowbestiesretreats.com/contact.html</loc><lastmod>2026-06-01</lastmod><priority>0.7</priority></url>
  <url><loc>https://glowbestiesretreats.com/impressum.html</loc><lastmod>2026-06-01</lastmod><priority>0.3</priority></url>
  <url><loc>https://glowbestiesretreats.com/datenschutz.html</loc><lastmod>2026-06-01</lastmod><priority>0.3</priority></url>

  <url>
    <loc>https://glowbestiesretreats.com/blog.html</loc><lastmod>2026-06-01</lastmod><priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://glowbestiesretreats.com/blog.html"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://glowbestiesretreats.com/blog/de/index.html"/>
  </url>
  <url>
    <loc>https://glowbestiesretreats.com/blog/de/index.html</loc><lastmod>2026-06-01</lastmod><priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://glowbestiesretreats.com/blog.html"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://glowbestiesretreats.com/blog/de/index.html"/>
  </url>

  <!-- Article pairs: one <url> per language, each with both hreflang alternates -->
  <url>
    <loc>https://glowbestiesretreats.com/blog/gluten-free-wellness-retreat-alps.html</loc><lastmod>2026-06-01</lastmod><priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://glowbestiesretreats.com/blog/gluten-free-wellness-retreat-alps.html"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://glowbestiesretreats.com/blog/de/glutenfreies-wellness-retreat-alpen.html"/>
  </url>
  <url>
    <loc>https://glowbestiesretreats.com/blog/de/glutenfreies-wellness-retreat-alpen.html</loc><lastmod>2026-06-01</lastmod><priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://glowbestiesretreats.com/blog/gluten-free-wellness-retreat-alps.html"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://glowbestiesretreats.com/blog/de/glutenfreies-wellness-retreat-alpen.html"/>
  </url>
  <url>
    <loc>https://glowbestiesretreats.com/blog/traveling-with-celiac-disease.html</loc><lastmod>2026-06-01</lastmod><priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://glowbestiesretreats.com/blog/traveling-with-celiac-disease.html"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://glowbestiesretreats.com/blog/de/reisen-mit-zoeliakie.html"/>
  </url>
  <url>
    <loc>https://glowbestiesretreats.com/blog/de/reisen-mit-zoeliakie.html</loc><lastmod>2026-06-01</lastmod><priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://glowbestiesretreats.com/blog/traveling-with-celiac-disease.html"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://glowbestiesretreats.com/blog/de/reisen-mit-zoeliakie.html"/>
  </url>
  <url>
    <loc>https://glowbestiesretreats.com/blog/recovery-for-high-performers.html</loc><lastmod>2026-06-01</lastmod><priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://glowbestiesretreats.com/blog/recovery-for-high-performers.html"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://glowbestiesretreats.com/blog/de/recovery-fuer-leistungsmenschen.html"/>
  </url>
  <url>
    <loc>https://glowbestiesretreats.com/blog/de/recovery-fuer-leistungsmenschen.html</loc><lastmod>2026-06-01</lastmod><priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://glowbestiesretreats.com/blog/recovery-for-high-performers.html"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://glowbestiesretreats.com/blog/de/recovery-fuer-leistungsmenschen.html"/>
  </url>
  <url>
    <loc>https://glowbestiesretreats.com/blog/montafon-reset.html</loc><lastmod>2026-06-01</lastmod><priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://glowbestiesretreats.com/blog/montafon-reset.html"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://glowbestiesretreats.com/blog/de/montafon-rueckzugsort.html"/>
  </url>
  <url>
    <loc>https://glowbestiesretreats.com/blog/de/montafon-rueckzugsort.html</loc><lastmod>2026-06-01</lastmod><priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://glowbestiesretreats.com/blog/montafon-reset.html"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://glowbestiesretreats.com/blog/de/montafon-rueckzugsort.html"/>
  </url>
  <url>
    <loc>https://glowbestiesretreats.com/blog/gluten-free-nutrition-retreat.html</loc><lastmod>2026-06-01</lastmod><priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://glowbestiesretreats.com/blog/gluten-free-nutrition-retreat.html"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://glowbestiesretreats.com/blog/de/glutenfrei-geniessen-ernaehrung.html"/>
  </url>
  <url>
    <loc>https://glowbestiesretreats.com/blog/de/glutenfrei-geniessen-ernaehrung.html</loc><lastmod>2026-06-01</lastmod><priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://glowbestiesretreats.com/blog/gluten-free-nutrition-retreat.html"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://glowbestiesretreats.com/blog/de/glutenfrei-geniessen-ernaehrung.html"/>
  </url>
  <url>
    <loc>https://glowbestiesretreats.com/blog/women-only-retreat.html</loc><lastmod>2026-06-01</lastmod><priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://glowbestiesretreats.com/blog/women-only-retreat.html"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://glowbestiesretreats.com/blog/de/women-only-retreat.html"/>
  </url>
  <url>
    <loc>https://glowbestiesretreats.com/blog/de/women-only-retreat.html</loc><lastmod>2026-06-01</lastmod><priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://glowbestiesretreats.com/blog/women-only-retreat.html"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://glowbestiesretreats.com/blog/de/women-only-retreat.html"/>
  </url>
</urlset>
```

- [ ] **Step 2: Verify and commit**

Run: `python -m http.server 8000`, open http://localhost:8000/sitemap.xml .
Expected: well-formed XML, no parser error in the browser, all 21 URLs present.
```
git add sitemap.xml
git commit -m "feat: extend sitemap with blog pages and hreflang alternates"
```

---

## Task 19: Final QA pass

**Files:** none (verification only)

- [ ] **Step 1: Full em-dash scan across the repo**

Run (PowerShell): `Get-ChildItem -Recurse -Include *.html,*.xml,*.css,*.js | Select-String -Pattern ([char]0x2014)`
Expected: no matches. If any found, replace with comma/hyphen/parentheses and re-commit the affected file.

- [ ] **Step 2: Link + render check**

Run: `python -m http.server 8000`. Click through: home -> Journal -> each article -> language switch -> retreat CTA. Confirm no 404s, nav/footer consistent, blog styles applied, German pages render German in the source (View Source shows German text, not English + JS).

- [ ] **Step 3: Structured-data spot check**

Paste the homepage, the retreat page, and two articles into https://search.google.com/test/rich-results .
Expected: Organization, Event, BlogPosting, and FAQPage detected with no errors.

- [ ] **Step 4: Confirm cache buster**

Run (PowerShell): `Select-String -Path *.html -Pattern "style.css\?v="`
Expected: every root HTML page shows `?v=5`.

---

## Task 20: Founder review, then ship

**Files:** none (review + git)

- [ ] **Step 1: Hand the drafted articles to the founders for review**

Articles were drafted by Claude. Before publishing, the founders read the 6 EN + 6 DE articles and the new gluten-free copy and approve or request edits. Apply any edits and re-commit per affected file. Do not push unreviewed article prose.

- [ ] **Step 2: Decide integration and push**

Once approved, merge the feature branch and push so Netlify deploys. Recommended:
```
git checkout master
git merge --no-ff feature/glutenfree-blog-geo
git push origin master
```
This also pushes the previously unpushed commit `05d1745` (The Alpine Reset), finally taking the whole backlog live. (Use the superpowers:finishing-a-development-branch skill to choose merge vs PR if preferred.)

- [ ] **Step 3: Post-deploy verification**

After Netlify finishes: open https://glowbestiesretreats.com/blog.html , one EN article, and its DE counterpart. Confirm they are live and the German source contains German text. Submit the updated sitemap in Google Search Console (the property TXT verification was added 2026-03-28 per project notes; confirm it is verified, then use "Sitemaps" to (re)submit `sitemap.xml`).

---

## Self-review notes (author check)

- **Spec coverage:** Part 1 gluten-free (Tasks 4, 5, 6) covered; Part 2 blog structure (Tasks 7-11) covered; Part 3 articles (Tasks 12-17) covered; Part 4 GEO/SEO foundation: JSON-LD (Task 2, 9, 10, template 11), robots.txt (Task 3), sitemap+hreflang (Task 18), meta/OG/canonical (Task 2, blog heads). All spec sections map to tasks.
- **Approach A:** enforced via real per-language files and root-relative paths; German text physically in source is verified in Task 19 Step 2 and Task 20 Step 3.
- **No-em-dash rule:** scanned in every content task and again repo-wide in Task 19.
- **Cache buster:** bumped to v5 in Task 6, verified in Task 19 Step 4.
- **Known caveat:** the global `.nav-lang` toggle referenced by `js/i18n.js` is absent from the current nav markup; out of scope here. Blog language switching uses explicit per-page links, which is also the SEO-correct approach.
- **Content prose** is intentionally drafted during execution (Tasks 12-17) and gated on founder review (Task 20), not pre-written in this plan, because it is reviewable marketing copy rather than code. Titles, slugs, metas, outlines, and FAQ topics are fully specified.
