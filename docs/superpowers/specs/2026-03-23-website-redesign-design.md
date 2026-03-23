# Glow Besties Website Redesign - Design Spec

## Overview

Full redesign of the Glow Besties Retreats website based on co-founder Leonie's feedback. The current single-page German site is too dense, visually busy, and lacks editorial clarity. The redesign transforms it into a clean, editorial, English-first multi-page site inspired by The Glowin', Cal Reiet, Camp Joli, and similar luxury wellness brands.

**Implementation note:** Use the `frontend-design` skill during implementation to achieve high design quality matching the inspo sites.

## Core Principles

- **Less is more** - fewer sections, less text, more whitespace
- **Editorial feel** - reads like a magazine, not a product page
- **Warm & calm** - beige/cream tones, soft imagery, generous spacing
- **Two fonts only** - Cormorant Garamond (serif headings) + Jost (sans-serif body)
- **Terracotta sparingly** - only for buttons and small highlights, not text
- **English default** - with subtle DE/EN language toggle

## Inspiration Sites

- https://theglowin.co/ - minimalist elegance, generous whitespace, transparent nav
- https://casafiguera.com/ - warm earth tones, editorial feel
- https://calreiet.com/m/ - Jost + serif pairing, beige backgrounds, offset Instagram collage
- https://escapehaven.com/ - women's retreat reference
- https://www.camp-joli.com/ - card layouts, testimonials, sticky CTA nav

## Approach

Full rewrite of HTML and CSS. The current site structure is too different from the target to refactor incrementally. Carry over: Mailchimp form logic, color variables (adjusted), font imports, JS animations.

---

## Site Structure

### Pages
1. **Homepage** (`index.html`) - editorial landing page
2. **About** (`about.html`) - founder stories
3. **Retreats** (`retreats.html`) - retreat details, schedule, location, booking
4. **Impressum** (`impressum.html`) - existing, keep as-is
5. **Datenschutz** (`datenschutz.html`) - existing, keep as-is

### Navigation
- **Position:** Sticky top, transparent over hero, solid beige on scroll
- **Left:** Logo (`images/Neu/neu_v2/logo.svg`, transparent background)
- **Center/Right links:** Retreats | About
- **Far right:** DE/EN toggle (very subtle, small text) | "Join the Retreat" button (terracotta, prominent but elegant, rounded)
- **Mobile:** Hamburger menu → full-screen overlay (beige background, centered links, includes Retreats, About, DE/EN toggle, and "Join the Retreat" button). Closes on link click or X button.

---

## Design System

### Colors
```
--color-bg-primary: #FBF8F4     (warm off-white, main background)
--color-bg-beige: #F3EDE4       (beige, alternating sections)
--color-accent: #B5635A         (terracotta, ONLY buttons + small highlights)
--color-accent-hover: #9E524A   (darker terracotta)
--color-text-heading: #3A3531   (near-black, headings)
--color-text-body: #6B6460      (dark gray, body text)
--color-text-light: #8A8480     (medium gray, labels/captions)
--color-white: #FFFFFF
--color-footer-bg: #3A3531      (dark, footer)
```

### Typography
- **Headings:** Cormorant Garamond, weight 400, no italic (less italic per feedback)
- **Body:** Jost, weight 300-400
- **Labels:** Jost, weight 500, uppercase, letter-spacing 0.25em, small (0.75rem)
- **Max 2 fonts.** No wild mixing. Minimal italic - only for the "This is for you if..." list items or occasional emphasis.

### Spacing
- **Section padding:** ~120-140px vertical (desktop), ~80px mobile
- **Container max-width:** 1200px
- **Between sections:** generous, more whitespace than current site
- **Content max-width for text blocks:** ~650px centered

### Buttons
- **Primary (terracotta):** rounded (50px border-radius), Jost 500, letter-spacing, padding 16px 40px
- **Outline:** same shape, transparent with border, dark text
- **No terracotta in text** - only in buttons and small decorative accents

---

## Homepage Sections

### 1. Navigation
See Navigation section above.

### 2. Hero
- **Layout:** Fullscreen (100vh) background image with centered text overlay
- **Image:** Rename `images/Neu/neu_v2/WhatsApp Image 2026-03-22 at 09.20.55.jpeg` → `images/hero-yoga.jpg` during implementation (spaces in filenames are fragile in CSS/HTML). Golden-hour yoga on mountain.
- **Overlay:** Subtle dark gradient for text legibility
- **Content (centered):**
  - Headline (large serif): "Reconnect with yourself - without leaving your ambition behind."
  - Subline (small sans-serif): "A space to slow down and feel like yourself again."
  - Button (terracotta): "Join the Retreat"
- **Bottom:** Subtle scroll indicator chevron
- **No label, no "Women Only", no "move nourish connect"** - just clean focus

### 3. Intro / Positioning
- **Background:** White (--color-bg-primary)
- **Layout:** Centered text block, max ~650px, generous vertical padding
- **Label:** "OUR STORY" (uppercase, spaced)
- **Content:**
  > Glow Besties is a space for women who are used to performing - in work, in sports, in life.
  >
  > Our retreats are designed to help you slow down, regulate your system, and reconnect with your body, without losing your structure or ambition.
  >
  > Grounded in movement, nourishment, and real recovery, we focus on what actually helps you feel better long-term.
- **No image.** Pure text with breathing room.

### 4. Philosophy
- **Background:** Beige (--color-bg-beige)
- **Layout:** Centered text, no image (Leonie: "kein Bild, clean")
- **Label:** "OUR PHILOSOPHY"
- **Headline (large serif):** "Designed for real life."
- **Content:**
  > This isn't about escaping your life.
  > It's about learning how to feel better within it.
  >
  > We focus on longevity, nervous system balance, and sustainable routines - through movement, nutrition, and intentional pauses.
  >
  > Less pressure. More clarity. A body that actually feels good.
- Visual "breath" of the page - minimal and calm.

### 5. "This is for you if..."
- **Background:** White
- **Label:** "FOR YOU"
- **Headline (serif):** "This is for you if..."
- **Layout:** Centered narrow column, 6 statements stacked vertically
- **Items** (sans-serif, slightly larger than body, subtle fade-in on scroll):
  - you're always "on" and struggle to switch off
  - you push yourself - in your career, workouts, and daily life
  - you want to feel better, not just function
  - you care about your long-term health and energy
  - you enjoy movement and pushing yourself
  - you're looking for real connection and a clear mind
- No bullets, no icons, no cards. Just clean typography.

### 6. "What you'll experience"
- **Background:** Beige
- **Label:** "THE EXPERIENCE"
- **Headline (serif):** "What you'll experience"
- **Layout:** 2x3 grid (desktop), single column (mobile)
- **Per block:** Thin subtle top border or decorative dot, small title (sans-serif caps), 1 sentence below
- **NO images, NO icons** - pure editorial text grid with generous whitespace
- **Blocks:**
  1. **Slow Mornings** - Start your day with stretching, sunlight and calm routines that ground your system.
  2. **Intentional Movement** - Fascia work, mobility, hiking, jogging and Pilates sessions.
  3. **Nervous System Reset** - Breathwork, guided sessions, and slow evenings to bring your body out of constant stress mode.
  4. **Nourishment** - Fully gluten-free, balanced meals focused on protein, nutrients, and stable energy.
  5. **Reflection & Clarity** - Journaling, guided reflections, and space to think clearly again.
  6. **Real Connection** - A small group, honest conversations, and shared experiences.

### 7. Full-width Image Break
- **Layout:** Edge-to-edge image, no container padding, ~50-60vh height
- **Image:** Mountain/nature landscape (e.g., `images/schedule-landscape.jpg` or `images/hero-mountains.jpg`)
- **Overlay text (optional, centered serif):** "Step into calm, clarity, and connection."
- Subtle dark gradient for text legibility
- Acts as visual "pause" between content-heavy sections

### 8. Founders Preview
- **Background:** White
- **Layout:** Two-column - image left (~45%), text right. Stacks on mobile.
- **Image:** Leonie & Eli together (`images/LeonieEli.jpeg`)
- **Label:** "ABOUT US"
- **Headline (serif):** "Two friends. One shared reality."
- **Text (3-4 lines):**
  > We've been best friends for over 15 years - while rarely living in the same place. What connects us is a shared lifestyle: fast-paced careers, high expectations, and the constant feeling of needing to perform.
- **Button (outline):** "Read our story" → about.html

### 9. Retreat Card
- **Background:** Beige
- **Layout:** Asymmetric - large image (~60%) on one side, text card on the other
- **Image:** Tanafreida exterior (`images/tanafreida-main.jpg`)
- **Text side:**
  - Label: "UPCOMING RETREAT"
  - Serif title: "Montafon Retreat"
  - Date: "May 29 - 31, 2026"
  - Tags: Movement · Nourishment · Connection
  - Button (terracotta): "View retreat" → retreats.html

### 10. Final CTA
- **Layout:** Full-width background image with dark overlay
- **Image:** `images/cta-background.jpg`
- **Content (centered):**
  - Serif headline: "Join us."
  - Subline: "Limited spots available."
  - Signup form: name + email + consent checkbox (Mailchimp integration, carried over from current site)
  - Submit button (terracotta): "Secure your spot"
  - Note: "You'll receive all details via email."

### 11. Instagram
- **Background:** White/beige
- **Inspired by Cal Reiet:** offset collage layout
- **Layout:** 2-3 images from existing set (`images/instagram-1.jpg`, `images/instagram-2.jpg`, `images/instagram-3.jpg`), overlapping slightly in editorial offset arrangement (not a flat grid)
- **Label (uppercase, spaced):** "INSTAGRAM"
- **Headline (large serif):** "Join us on Instagram and explore the retreat."
- **Handle:** @theglowbesties
- **Button (outline):** "View Instagram" → Instagram link

### 12. Footer
- **Background:** Dark (#3A3531)
- **Content:** Logo text, nav links (Retreats, About, Instagram), legal links (Impressum, Datenschutz), email (hello@glowbesties.com), Instagram icon
- **Copyright:** 2026 Glow Besties Retreats
- Clean and compact

---

## About Page

Shares nav and footer with homepage.

### Section 1: Shared Story
- **Background:** Beige, generous padding
- **Label:** "ABOUT US"
- **Headline (serif):** "Two friends. One shared reality."
- **Centered text block:**
  > We've been best friends for over 15 years - while rarely living in the same place.
  >
  > What connects us is a shared lifestyle: fast-paced careers, high expectations, and the constant feeling of needing to perform.
  >
  > We both work in consulting, we both push ourselves - in work, in sports, in life. And we both know how hard it is to actually slow down.
  >
  > Glow Besties was created to bring both worlds together: performance and recovery.

### Section 2: Eli
- **Background:** White
- **Layout:** Two-column - image left, text right
- **Image:** `images/Neu/neu_v2/Eli.jpeg`
- **Headline (serif):** "Eli"
- **Text:**
  > I've always been a variety person. In fitness, in life, in everything. For me it's never just been about the physical. Moving my body is how I find mental balance and actually recharge.
  >
  > Outside of that, what matters most to me is genuine human connection. I work in a fast-paced world where so much happens through screens. Which makes real, in-person time with real people feel like the most precious thing.
  >
  > That's what we built Glow Besties for.

### Section 3: Leonie
- **Background:** Beige
- **Layout:** Two-column - text left, image right (mirrored for visual rhythm)
- **Image:** `images/Neu/neu_v2/Leonie.jpeg`
- **Headline (serif):** "Leonie"
- **Text:**
  > I've always been driven by performance - in my career and in sports.
  >
  > At the same time, I live with celiac disease. For a long time, this made everyday life feel complicated, especially socially.
  >
  > Today, I've found a way to combine structure, health, and ease again.
  >
  > That's why all our retreats are fully gluten-free - without restriction, but with quality, balance, and enjoyment. Because feeling good should never feel limiting.

### Section 4: Mini CTA
- Simple centered block, white background
- Serif headline: "Want to join us?"
- Button (terracotta) → retreats.html

---

## Retreats Page

Shares nav and footer with homepage.

### Section 1: Retreat Header
- **Layout:** Full-width image, shorter hero (~50vh)
- **Image:** Tanafreida exterior or mountain landscape
- **Overlay text (centered):**
  - Label: "RETREATS"
  - Headline (serif): "Montafon Retreat"
  - Subtitle: "May 29 - 31, 2026"

### Section 2: About the Retreat
- **Background:** White
- **Layout:** Two-column - text left, image right
- **Content:**
  > Three days in the Austrian Alps - designed to help you slow down, move your body, and reconnect with yourself.
  >
  > This retreat combines intentional movement, nervous system recovery, and nourishing gluten-free meals in a small, intimate group of women. No rigid schedules, no pressure - just space to feel like yourself again.
- **Tags:** Movement · Nourishment · Connection

### Section 3: The Location
- **Background:** Beige
- **Label:** "THE LOCATION"
- **Headline (serif):** "Tanafreida. Above the Montafon."
- **Description:** Mountain refuge at 1,000m+, surrounded by nature, fresh mountain air and silence. Eight individually designed apartments, 40,000m2 meadows and forests, and views that make everything else fade away.
- **Gallery:** 1 large + 2-3 smaller Tanafreida images (existing: tanafreida-main.jpg, tanafreida-room.jpg, tanafreida-terrace.jpg, tanafreida-nature.jpg)
- **Link (outline button):** "More about Tanafreida" → https://www.tanafreida.at/

### Section 4: Schedule
- **Background:** White
- **Label:** "THE SCHEDULE"
- **Headline (serif):** "Your Weekend"
- **Detailed day-by-day timeline** (translated to English from current `index.html` lines 135-274):

  **Friday - Arrive & Unwind**
  - From 15:00 — Soft Arrival (Protein drink & matcha)
  - 17:30 — Arrive in Your Body (Gentle yoga)
  - 18:15 — Guided Journaling
  - 19:00 — Welcome Dinner (Cook & enjoy together)
  - 20:30 — Guided Meditation

  **Saturday - Explore & Connect**
  - 07:30 — Morning Mobility & Gua Sha Routine
  - 09:00 — Breakfast together
  - 10:00 — Mountain Hike
  - 12:30 — Mountain Picnic (Lunch with a view)
  - 14:30 — Free Flow Time (Sauna, walk, or just talk)
  - 19:00 — Shared Dinner
  - 20:30 — Breathwork Session
  - 21:30 — Girls' Night (Games, good conversations & a glass of wine)

  **Sunday - Reflect & Recharge**
  - 08:00 — Pilates or Morning Run (You choose)
  - 09:00 — Breakfast together
  - 10:30 — Longevity Talk (Guest speaker)
  - 11:30 — Closing Journaling
  - 12:30 — Lunch together & Checkout

- **Note:** "The schedule may adapt based on weather and the group. Flexibility is part of it."
- Editorial styling - clean timeline, not cramped

### Section 5: CTA
- Same layout and copy as Homepage Section 10 (full-width background image `images/cta-background.jpg` with dark overlay)
- Serif headline: "Join us."
- Subline: "Limited spots available."
- Signup form (same Mailchimp integration)
- Submit button (terracotta): "Secure your spot"
- Note: "You'll receive all details via email."

---

## Language Toggle (EN/DE)

- **Approach:** Simple JS toggle, no build tools
- **Implementation:** German translations stored in a JS object, keyed by `data-i18n` attributes on translatable elements
- **Toggle button:** Tiny "DE" / "EN" text in nav far-right, very subtle
- **Behavior:** Clicking swaps all text content, stores preference in localStorage
- **German translations:** Hand-written, natural German (not machine translated)
- **Scope:** All three pages (homepage, about, retreats)
- **Alt text:** English-only (not translated). Only visible text content is toggled.

---

## Technical Notes

### Files to Create/Modify
- `index.html` - full rewrite
- `css/style.css` - full rewrite
- `about.html` - new page
- `retreats.html` - new page
- `js/main.js` - update (nav, animations, scroll effects)
- `js/i18n.js` - new file (language toggle logic)
- `js/mailchimp.js` - keep existing, minor adjustments if needed

### Files to Keep As-Is
- `impressum.html` - existing
- `datenschutz.html` - existing
- All images (existing + new uploads)

### CSS Architecture
- CSS custom properties for theming (carried over, adjusted)
- Mobile-first responsive design
- Smooth scroll behavior
- Fade-in animations on scroll (IntersectionObserver)
- No CSS framework - vanilla CSS

### Image Handling
- Use existing images where they fit
- Hero: rename `images/Neu/neu_v2/WhatsApp Image 2026-03-22 at 09.20.55.jpeg` → `images/hero-yoga.jpg`
- Founder photos: `images/Neu/neu_v2/Eli.jpeg`, `images/Neu/neu_v2/Leonie.jpeg`
- Logo: `images/Neu/neu_v2/logo.svg`
- Location: existing Tanafreida photos
- Lazy loading on all images below the fold
- `object-fit: cover` for consistent framing

### Accessibility
- Semantic HTML (nav, main, section, footer)
- ARIA labels on interactive elements
- Alt text on all images
- Keyboard-navigable
- Color contrast meeting WCAG AA
