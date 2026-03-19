# Glow Besties Retreats — Website Design Spec

## Overview

A single-page, German-language website for **Glow Besties Retreats**, a women-only wellness retreat brand founded by Leonie and Eli (friends for 15 years). The site must feel warm, aspirational, and Instagram-worthy — designed to make every woman who lands on it think: "I need to be part of this."

**First retreat:** 29 – 31 May 2026 at Tanafreida, Montafon (Vorarlberg, Austria).

**Tagline:** move · nourish · connect

## Tech Stack

- **Pure HTML / CSS / JS** — no frameworks, no build tools
- Single-page with smooth scroll navigation
- Hosted on any static host (Netlify, GitHub Pages, etc.)
- **Mailchimp** integration for email signup (free tier, custom-styled embedded form)
- All images easy to swap: clear file naming, centralized in an `/images` folder, simple `src` attributes

## Target Audience

Women aged 25–45 interested in yoga, pilates, journaling, mindfulness, healthy food, personal growth, and meeting like-minded women.

## Design Direction

**Approach:** "Warm & Visual" with selective "Elevated Feminine" elements (arch-shaped image frames for activities and story sections).

**Inspired by:** Escape Haven, Camp Joli, Purusha Wellness (Design Inspo 1), Asana yoga (Design Inspo 2), Alo Yoga, Aesop.

### Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary background | Warm white | `#FBF8F4` |
| Alternate background | Soft beige | `#F3EDE4` |
| Accent (buttons, highlights) | Coral/terracotta | `#B5635A` |
| Heading text | Warm dark | `#3A3531` |
| Body text | Soft gray-brown | `#6B6460` |
| Hover / decorative | Dusty rose | `#D4A89A` |
| Footer background | Warm dark | `#3A3531` |

### Typography

| Role | Font | Style |
|------|------|-------|
| Headings | Cormorant Garamond | Serif, elegant (aligns with Tanafreida's own font) |
| Body | Jost | Sans-serif, clean, modern |
| Tagline / quotes | Cormorant Garamond Italic | Decorative accent |

### General Design Principles

- Generous whitespace throughout
- Smooth scroll between sections
- Subtle fade-in animations on scroll (CSS or lightweight JS, no heavy libraries)
- Soft rounded corners on images
- Arch-shaped image frames for activity cards and story section
- No harsh lines or heavy box shadows
- Fully responsive: desktop, tablet, mobile
- Mobile-first hamburger menu

## Sections

### 1. Navigation

- **Fixed/sticky** navbar, transparent over hero, soft white background on scroll
- **Logo** left: Use `Logo.jpeg` from project directory. Display at ~40px height on desktop, ~32px on mobile. On scroll (when navbar gets white background), logo remains the same size.
- **Links** right: Über uns · Was dich erwartet · Ablauf · Das Erlebnis · Tanafreida · Dabei sein
- **Nav anchor mapping:** Über uns → §3, Was dich erwartet → §4, Ablauf → §5, Das Erlebnis → §6, Tanafreida → §7, Dabei sein → §9
- **Mobile:** hamburger menu with smooth slide-in

### 2. Hero Section

- **Full viewport height** background image: Alpine panorama from Tanafreida
- Soft dark gradient overlay (bottom-heavy) for text legibility
- Gentle parallax scroll effect on background
- **Content (centered):**
  - Small tracking text: `GLOW BESTIES RETREATS`
  - Headline (large serif): **Reconnect with Yourself**
  - Subheadline (light sans-serif): *Ein Women-Only Retreat für Bewegung, Achtsamkeit und echte Verbindung*
  - Tagline: *move · nourish · connect*
  - CTA button (coral): **Sichere dir deinen Platz** → scrolls to signup section
- Animated scroll-down chevron at bottom
- Mobile: same content, smaller type, portrait-optimized image crop

### 3. Über uns (Our Story)

- **Background:** Soft beige `#F3EDE4`
- **Layout:** Two-column on desktop (text left, arch-shaped image right), stacks on mobile
- **Image:** Arch-shaped frame — photo of two women together or warm Tanafreida nature shot
- **Content:**
  - Label: `ÜBER UNS`
  - Headline (serif): **Zwei Freundinnen. Eine Idee.**
  - Body text:

> Wir sind Leonie und Eli — Freundinnen seit fast 15 Jahren.
>
> Die Idee für dieses Retreat entstand aus einer einfachen Frage: Warum fühlen sich so viele Retreats irgendwie gleich an?
>
> Oft geht es nur um Yoga, strenge Wellness-Programme oder strukturierte Achtsamkeitsroutinen. Schön, aber uns hat etwas gefehlt.
>
> Wir wollten ein Retreat, das sich leicht, aktiv und gleichzeitig entspannend anfühlt. Ein Wochenende, das wir selbst sofort buchen würden. Ein Ort, an dem Frauen zusammenkommen, um sich zu bewegen, neue Energie zu tanken und echte Verbindungen zu knüpfen.
>
> Bei uns kann der Tag mit Yoga beginnen — aber genauso gut mit einer Wanderung, einem Workout oder einfach guten Gesprächen beim Frühstück. Es geht nicht darum, ein perfektes Programm zu erfüllen. Es geht darum, abzuschalten, Neues auszuprobieren und gemeinsam eine richtig schöne Zeit zu haben.
>
> Im Mittelpunkt steht eines: Connection. Zu dir selbst, zur Natur und zu einer Gruppe von Frauen, die für ein Wochenende dem Alltag entfliehen.
>
> Wir glauben, dass ein echter Reset nicht immer durch Ruhe entsteht — sondern oft durch Bewegung, gemeinsame Erlebnisse und inspirierende Begegnungen.

### 4. Was dich erwartet (What Awaits You)

- **Background:** Warm white `#FBF8F4`
- **Layout:** 3x2 grid on desktop, 2-column tablet, single-column mobile
- **Cards:** Each has an arch-shaped image, activity name (serif), and 1-2 line description
- Subtle stagger fade-in animation on scroll

| Card | Title | Description | Image Direction |
|------|-------|-------------|-----------------|
| 1 | Yoga & Pilates | Sanfte Morgenflows und aktivierende Sessions, um Körper und Geist in Einklang zu bringen. | Women doing yoga outdoors |
| 2 | Journaling & Reflexion | Zeit für dich — mit geführten Übungen, die dir helfen, innezuhalten und Klarheit zu finden. | Woman journaling with coffee |
| 3 | Workouts & Bewegung | Gemeinsame Workouts und Challenges, die Spaß machen und neue Energie geben. | Group workout outdoors |
| 4 | Natur & Wandern | Das Montafon direkt vor der Tür — Wanderungen, frische Bergluft und Ausblicke, die den Kopf frei machen. | Alpine hiking / Tanafreida landscape |
| 5 | Healthy Food | Gemeinsam kochen, gemeinsam genießen. Gesunde Meals, die richtig gut schmecken. | Beautiful healthy bowls |
| 6 | Community & Connection | Das Herzstück: echte Gespräche, neue Freundschaften und Abende, die man nicht vergisst. | Women laughing together at dinner |

### 5. Ablauf (Sample Retreat Schedule)

- **Background:** Soft beige `#F3EDE4`
- **Layout:** Elegant editorial timeline (not a table). Left: time/period, right: activity. Thin vertical line or subtle dots connecting entries.
- **Categories** from the real plan woven in as visual tags: `MOVE` / `NOURISH` / `CONNECT`
- A single Tanafreida landscape photo beside/behind the schedule, slightly faded
- Simplified version of the real 3-day plan:

**Freitag — Arrive & Unwind**
- Ab 15:00 · Soft Arrival — Ankommen, Kaffee & Tee
- 17:30 · MOVE · Arrive in Your Body — Sanftes Yoga
- 18:15 · CONNECT · Arrival Journaling
- 19:00 · CONNECT · Shared Dinner — Gemeinsames Kochen und Essen
- 20:30 · CONNECT · Evening Calm — Meditation oder Stretch

**Samstag — Move, Nourish, Connect**
- 08:00 · MOVE · Morning Run oder Morning Mobility
- 09:00 · NOURISH · Gemeinsames Frühstück
- 10:30 · NOURISH · Fuel Your Energy — Workshop
- 11:30 · CONNECT · Exchange — Fragen & Austausch
- 12:30 · Lunch & freie Zeit
- 14:30 · MOVE · Strong & Focused — Boxing Session
- 15:30 · Free Flow Time — Sauna, Natur, Ruhe
- 19:00 · Shared Dinner
- 20:15 · CONNECT · Reflection Journaling & Breathwork

**Sonntag — Aufladen & Mitnehmen**
- 08:30 · Frühstück — Sanfter Start
- 10:00 · MOVE · Walk & Talk — Gemeinsame Wanderung (ca. 3h)
- 14:30 · Pack & Checkout Prep
- 15:00 · CONNECT · Closing Journaling
- Ab 16:00 · Check-Out

- **Note beneath** (italic): *Der Ablauf kann sich je nach Wetter und Gruppe anpassen — Flexibilität gehört dazu.*

### 6. Retreat Erlebnis (What Makes It Special)

- **Background:** Warm white `#FBF8F4`
- **Layout:** 3x2 grid of highlight blocks on desktop, vertical stack on mobile
- Each block: subtle icon or small circular image, bold headline, one line of text
- Soft coral accent line under each headline

| Highlight | Headline | Text |
|-----------|----------|------|
| 1 | Women Only | Ein geschützter Raum nur für Frauen. Ohne Erwartungen, ohne Vergleich. |
| 2 | Move Your Body | Von Yoga über Boxing bis zur Wanderung — Bewegung, die sich gut anfühlt. |
| 3 | Nourish Yourself | Gesundes Essen, gemeinsam zubereitet und genossen. |
| 4 | Tanafreida, Montafon | Ein Berg-Refugium hoch über dem Tal, mit Blick auf die Alpen. |
| 5 | Echte Connection | Kleine Gruppe, echte Gespräche, neue Freundschaften. |
| 6 | Dein Tempo | Morning Run oder Ausschlafen — du entscheidest, was dir gut tut. |

### 7. Tanafreida / Location

- **Background:** Soft beige `#F3EDE4`
- **Layout:** Asymmetric staggered image gallery — 1 large image + 2-3 smaller ones. Mix of arch-shaped and rectangular frames.
- **Content:**
  - Label: `DIE LOCATION`
  - Headline (serif): **Tanafreida — Hoch über dem Montafon**
  - Text: *Ein Berg-Refugium auf über 1.000m, umgeben von Natur, frischer Bergluft und Stille. Acht individuell gestaltete Apartments, 40.000m² Wiesen und Wälder, und ein Ausblick, der alles andere vergessen lässt.*
  - Link button: *Mehr über das Tanafreida* → tanafreida.at
- **Images:** Pulled from tanafreida.at (permission granted) — property exterior, rooms, terrace, mountain views

### 8. Instagram

- **Background:** Warm white `#FBF8F4`
- **Layout:** Centered content with image grid below
- **Content:**
  - Label: `FOLGE UNS`
  - Headline (serif): **@theglowbesties**
  - Subline: *Inspiration, Behind the Scenes und alles rund um unser erstes Retreat.*
  - Grid of 6 static curated images (3x2 on desktop, 2x3 on mobile; manually updated, linking to Instagram posts)
  - CTA button (coral): **Auf Instagram folgen** → instagram.com/theglowbesties
- **Image approach:** Static curated images (not live API feed) — full control over aesthetic, easy to update

### 9. Sichere dir deinen Platz (CTA + Signup)

- **Background:** Full-width image (women in nature or Tanafreida landscape), dark overlay
- **Content (centered, white text):**
  - Headline (serif): **Bist du dabei?**
  - Subline: *Unser erstes Retreat findet vom 29. – 31. Mai 2026 im Tanafreida, Montafon statt. Sichere dir jetzt deinen Platz.*
  - **Mailchimp form:** Name + Email fields, custom-styled (minimal, white/transparent fields with soft borders). Coral submit button: **Platz sichern**
  - Small note: *Du erhältst alle Infos und Details per E-Mail.*
- **Mailchimp integration:** Embedded form (classic embed code), fully custom-styled to match site aesthetic. No default Mailchimp branding.
- **Form states:**
  - **Success:** Inline message replacing the form: *"Du bist dabei! Wir melden uns bald bei dir."* styled in white text, keeping the same section look.
  - **Error (invalid email):** Subtle red text below the email field: *"Bitte gib eine gültige E-Mail-Adresse ein."*
  - **Error (already subscribed):** *"Du bist bereits angemeldet!"* as a friendly inline message.

### 10. Footer

- **Background:** Warm dark `#3A3531`, light text
- **Content:**
  - Logo/wordmark: "Glow Besties Retreats" + *move · nourish · connect*
  - Quick links: Über uns · Was dich erwartet · Ablauf · Tanafreida · Instagram
  - Legal links: Impressum · Datenschutz (open as separate pages)
  - Contact email (to be provided by founders before launch)
  - Instagram icon → @theglowbesties
  - Copyright: *© 2026 Glow Besties Retreats*
- Minimal, no clutter — the signup section above is the real closer

## Images Strategy

- **Stock photos:** Curated from Unsplash/Pexels matching the warm, feminine, outdoor wellness aesthetic
- **Tanafreida photos:** Used with permission from tanafreida.at for location section, hero background, and schedule section
- **File structure:** All images in `/images` folder with descriptive names (e.g., `hero-mountains.jpg`, `activity-yoga.jpg`, `tanafreida-terrace.jpg`)
- **Easy swapping:** All images referenced via simple `<img src="images/filename.jpg">` — no embedded base64, no complex asset pipeline
- **Performance:** Use `loading="lazy"` on all images below the fold. Compress images to reasonable web sizes (hero ~300KB max, cards ~100KB). Use JPEG for photos.

## Interactions & Animations

- Smooth scroll to sections on nav click
- Navbar: transparent → white background transition on scroll
- Hero: gentle parallax on background image
- Content sections: subtle fade-in on scroll (CSS `@keyframes` + Intersection Observer)
- Activity cards: staggered fade-in
- Buttons: soft hover glow / color shift
- No heavy animation libraries — CSS transitions + minimal vanilla JS

## Responsive Behavior

- **Desktop (1200px+):** Full layouts as described, max-width container ~1200px
- **Tablet (768-1199px):** 2-column grids, slightly reduced spacing
- **Mobile (<768px):** Single column, hamburger nav, stacked sections, touch-friendly tap targets
- All images responsive with `object-fit: cover` for consistent framing
- Font sizes scale down proportionally on smaller screens

## External Dependencies

- **Google Fonts:** Cormorant Garamond + Jost
- **Mailchimp:** Embedded signup form (free tier, up to 500 contacts). Use **classic** embedded form code for maximum CSS control.
- **No other dependencies** — no jQuery, no Bootstrap, no frameworks

## Legal Requirements

Since this is a German-language site collecting email data from EU users:

- **Impressum** — legally required. Create a placeholder page (`impressum.html`) with standard structure (names, address, contact email). Founders will fill in the exact details before launch.
- **Datenschutzerklärung (Privacy Policy)** — required for Mailchimp data collection. Create a placeholder page (`datenschutz.html`) with standard German privacy policy structure. Founders will finalize content before launch.
- Both linked from the footer, opening as separate pages (not inline sections on the single page).
- Mailchimp form includes a checkbox: *Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.*

## Accessibility

- All images have descriptive `alt` text
- Color contrast verified: body text `#6B6460` on `#FBF8F4` and `#F3EDE4` backgrounds must meet WCAG AA (4.5:1 ratio)
- Focus states on all interactive elements (buttons, form fields, links)
- Semantic HTML: proper heading hierarchy, landmark elements (`<nav>`, `<main>`, `<section>`, `<footer>`)
- Form fields have associated `<label>` elements
