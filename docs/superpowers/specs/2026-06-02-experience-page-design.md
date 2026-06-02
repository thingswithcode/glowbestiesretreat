# Design: "The Experience" Page (First Alpine Reset recap)

Date: 2026-06-02
Status: Approved (user said "lets go")

## Goal
A new, image-led page that uses the real photos and story of the first Alpine Reset (29-31 May 2026) to show prospective guests what a retreat with Glow Besties feels like. Hybrid framing: a recap that sells the next one.

## Decisions (from brainstorming)
- Framing: hybrid (recap that shows what to expect).
- Placement: new standalone page, linked in main nav + footer.
- Testimonials: yes, founders will provide 2-4 quotes (build with placeholders until supplied).
- Language: bilingual EN + DE.

## Architecture
- New file `experience.html`, following the MAIN-SITE i18n pattern (English in HTML + German keys in `js/i18n.js`, toggled client-side), consistent with about.html / retreats.html. NOT the blog's separate-file pattern, because this is a primary nav page like About/Retreats.
- Reuses the existing design system (Cormorant Garamond + Jost, color tokens, section/container classes, `.fade-in` from main.js). No new JS, no toolchain.
- New CSS appended to `css/style.css` for the day blocks, gallery grid, and testimonials. Bump cache to `?v=6` on every page.

## Page structure (top to bottom)
1. Hero: full-bleed `hero.jpg` + label "THE EXPERIENCE", H1 "The first Alpine Reset", one subline.
2. Story intro: short editorial paragraph, what the weekend was, written so a future guest pictures herself there.
3. A day in the Alps: three soft blocks retelling the Fri/Sat/Sun flow experientially (not a timetable), each with one feature photo:
   - Arrival & first evening (Friday): feature `day-arrival.jpg`
   - Move & reset (Saturday): feature `day-move.jpg`
   - Glow & close (Sunday): feature `day-close.jpg`
4. Gallery: curated responsive grid of ~16 optimized photos.
5. In their words: 2-4 testimonial quotes (placeholders until provided).
6. The feeling that stays: short closing tying back to brand pillars (movement, nourishment, connection, fully gluten-free).
7. CTA: "Be part of the next one" linking to retreats.html#cta.

## Assets and image handling
- Source: `experience fotos/` (untracked, at repo root). 24 usable JPEGs + 4 PNG screenshots (PNGs excluded).
- Optimize with Pillow into `images/experience/`: apply EXIF orientation, STRIP all EXIF (removes GPS), resize (hero long edge ~2200px; gallery/day long edge ~1600px), JPEG quality ~82, progressive.
- Day grouping by EXIF capture date: 05-29 = arrival/evening, 05-30 = hike day, 05-31 = closing morning.
- Curated gallery selection trims near-duplicate landscapes.
- Every image gets descriptive English alt text (accessibility + SEO).
- The large source folder `experience fotos/` is NOT committed; only the optimized `images/experience/` files are.

## Cross-site wiring
- Add nav link + footer link "Experience" (DE "Erlebnis") to all pages that have the full nav/footer (index, about, retreats, retreat-montafon, contact). Add `nav.experience` / `footer.experience` i18n keys.
- Add `experience.html` to `sitemap.xml`.
- Meta: description, canonical, Open Graph (image = a retreat photo). Optional ImageGallery JSON-LD.
- All new copy carries `data-i18n` with matching DE keys in `js/i18n.js`.

## Out of scope (YAGNI)
- No lightbox / click-to-enlarge (keep it simple and fast; can add later).
- No video.
- No per-photo captions (alt text only).

## Open items
- Testimonials text (founders to supply); placeholders until then.
- Final page label "Experience" vs alternative (defaulting to Experience / Erlebnis).
