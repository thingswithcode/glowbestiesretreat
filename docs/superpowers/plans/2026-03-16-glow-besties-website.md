# Glow Besties Retreats Website — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking. Use @frontend-design skill when implementing visual sections.

**Goal:** Build a stunning single-page German-language website for Glow Besties Retreats that makes every woman who sees it want to join.

**Architecture:** Pure HTML/CSS/JS single-page site. One `index.html` with all 10 sections, one `style.css` with CSS custom properties for the design system, one `main.js` for interactions (scroll, nav, animations, parallax), and a separate `mailchimp.js` for form handling. Two additional legal placeholder pages. All images in `/images`.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox, scroll animations), vanilla JavaScript (Intersection Observer, smooth scroll), Google Fonts (Cormorant Garamond + Jost), Mailchimp classic embed.

**Spec:** `docs/superpowers/specs/2026-03-16-glow-besties-website-design.md`

---

## File Structure

| File | Responsibility |
|------|---------------|
| `index.html` | Main page — all 10 sections, semantic HTML, Google Fonts, meta tags |
| `css/style.css` | Design system (custom properties), layout, all section styles, responsive breakpoints |
| `js/main.js` | Navbar scroll behavior, hamburger menu, smooth scroll, parallax, fade-in animations |
| `js/mailchimp.js` | Mailchimp form: validation, AJAX submit, success/error state rendering |
| `images/` | All website images — stock photos + Tanafreida photos, descriptive filenames |
| `impressum.html` | Legal: Impressum placeholder page (same styling as main site) |
| `datenschutz.html` | Legal: Datenschutzerklärung placeholder page (same styling as main site) |

---

## Chunk 1: Foundation — Project Structure, Design System, Navigation

### Task 1: Create project structure and source placeholder images

**Files:**
- Create: `images/` directory
- Create: all placeholder image files (downloaded from Unsplash/Pexels + Tanafreida)

- [ ] **Step 1: Create the images directory**

```bash
mkdir -p images
```

- [ ] **Step 2: Download stock images from Unsplash/Pexels**

Download and save the following images. Use direct Unsplash/Pexels URLs for high-quality, free-to-use photos. Save with descriptive names:

```
images/hero-mountains.jpg        — Alpine panorama (for hero background). Prefer a Tanafreida image from tanafreida.at if available, otherwise a Montafon/Austrian Alps landscape
images/about-women.jpg           — Two women together outdoors, warm/natural (for Über uns arch image)
images/activity-yoga.jpg         — Women doing yoga outdoors in nature
images/activity-journaling.jpg   — Woman journaling with coffee, cozy setting
images/activity-workout.jpg      — Group workout outdoors, women exercising together
images/activity-hiking.jpg       — Alpine hiking / mountain trail (Tanafreida landscape preferred)
images/activity-food.jpg         — Beautiful healthy food bowls, overhead shot
images/activity-community.jpg    — Women laughing together at dinner, candlelit
images/schedule-landscape.jpg    — Tanafreida mountain view (subtle background for schedule section)
images/highlight-women.jpg       — Small circular: women's circle
images/highlight-move.jpg        — Small circular: movement/stretching
images/highlight-nourish.jpg     — Small circular: healthy food close-up
images/highlight-location.jpg    — Small circular: Tanafreida building exterior
images/highlight-connection.jpg  — Small circular: women hugging/connecting
images/highlight-tempo.jpg       — Small circular: woman relaxing in nature
images/tanafreida-main.jpg       — Tanafreida property: main exterior shot (from tanafreida.at)
images/tanafreida-room.jpg       — Tanafreida: apartment interior (from tanafreida.at)
images/tanafreida-terrace.jpg    — Tanafreida: terrace/balcony with mountain view (from tanafreida.at)
images/tanafreida-nature.jpg     — Tanafreida: surrounding nature/meadows (from tanafreida.at)
images/instagram-1.jpg through images/instagram-6.jpg — 6 placeholder images for Instagram grid (wellness/retreat aesthetic)
images/cta-background.jpg        — Women in nature or Tanafreida landscape (for signup section background)
```

Search Unsplash for: "women yoga mountains", "alpine panorama austria", "healthy food bowl", "women hiking alps", "women laughing dinner", "journaling coffee", "group workout outdoors women", "mountain retreat austria". Download at ~1200px width for cards, ~1920px for full-width backgrounds.

For Tanafreida images: download from tanafreida.at (permission granted).

- [ ] **Step 3: Copy the existing logo into images**

```bash
cp "Logo.jpeg" "images/logo.jpeg"
```

- [ ] **Step 4: Verify all images are present**

```bash
ls -la images/
```

Expected: All image files listed, reasonable file sizes (hero ~200-300KB, cards ~80-150KB, highlights ~30-50KB).

---

### Task 2: Create the HTML skeleton with all 10 sections

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create `index.html` with full semantic structure**

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Glow Besties Retreats — Ein Women-Only Retreat für Bewegung, Achtsamkeit und echte Verbindung. 29.–31. Mai 2026, Tanafreida, Montafon.">
    <title>Glow Besties Retreats — move · nourish · connect</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <!-- Section 1: Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="#" class="nav-logo">
                <img src="images/logo.jpeg" alt="Glow Besties Retreats Logo">
            </a>
            <button class="nav-toggle" aria-label="Menü öffnen" aria-expanded="false">
                <span class="hamburger"></span>
            </button>
            <ul class="nav-links">
                <li><a href="#ueber-uns">Über uns</a></li>
                <li><a href="#was-erwartet">Was dich erwartet</a></li>
                <li><a href="#ablauf">Ablauf</a></li>
                <li><a href="#erlebnis">Das Erlebnis</a></li>
                <li><a href="#tanafreida">Tanafreida</a></li>
                <li><a href="#dabei-sein" class="nav-cta">Dabei sein</a></li>
            </ul>
        </div>
    </nav>

    <main>
        <!-- Section 2: Hero -->
        <section class="hero" id="hero">
            <div class="hero-bg" style="background-image: url('images/hero-mountains.jpg');"></div>
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <span class="hero-label">GLOW BESTIES RETREATS</span>
                <h1 class="hero-title">Reconnect with Yourself</h1>
                <p class="hero-subtitle">Ein Women-Only Retreat für Bewegung, Achtsamkeit und echte Verbindung</p>
                <p class="hero-tagline">move · nourish · connect</p>
                <a href="#dabei-sein" class="btn btn-primary">Sichere dir deinen Platz</a>
            </div>
            <div class="hero-scroll-indicator" aria-hidden="true">
                <span class="chevron"></span>
            </div>
        </section>

        <!-- Section 3: Über uns -->
        <section class="section section-beige" id="ueber-uns">
            <div class="container about-grid">
                <div class="about-text fade-in">
                    <span class="section-label">ÜBER UNS</span>
                    <h2 class="section-title">Zwei Freundinnen. Eine Idee.</h2>
                    <div class="about-body">
                        <p>Wir sind Leonie und Eli — Freundinnen seit fast 15 Jahren.</p>
                        <p>Die Idee für dieses Retreat entstand aus einer einfachen Frage: Warum fühlen sich so viele Retreats irgendwie gleich an?</p>
                        <p>Oft geht es nur um Yoga, strenge Wellness-Programme oder strukturierte Achtsamkeitsroutinen. Schön, aber uns hat etwas gefehlt.</p>
                        <p>Wir wollten ein Retreat, das sich leicht, aktiv und gleichzeitig entspannend anfühlt. Ein Wochenende, das wir selbst sofort buchen würden. Ein Ort, an dem Frauen zusammenkommen, um sich zu bewegen, neue Energie zu tanken und echte Verbindungen zu knüpfen.</p>
                        <p>Bei uns kann der Tag mit Yoga beginnen — aber genauso gut mit einer Wanderung, einem Workout oder einfach guten Gesprächen beim Frühstück. Es geht nicht darum, ein perfektes Programm zu erfüllen. Es geht darum, abzuschalten, Neues auszuprobieren und gemeinsam eine richtig schöne Zeit zu haben.</p>
                        <p>Im Mittelpunkt steht eines: Connection. Zu dir selbst, zur Natur und zu einer Gruppe von Frauen, die für ein Wochenende dem Alltag entfliehen.</p>
                        <p>Wir glauben, dass ein echter Reset nicht immer durch Ruhe entsteht — sondern oft durch Bewegung, gemeinsame Erlebnisse und inspirierende Begegnungen.</p>
                    </div>
                </div>
                <div class="about-image fade-in">
                    <div class="arch-frame">
                        <img src="images/about-women.jpg" alt="Zwei Freundinnen in der Natur" loading="lazy">
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 4: Was dich erwartet -->
        <section class="section section-white" id="was-erwartet">
            <div class="container">
                <span class="section-label section-label-center">WAS DICH ERWARTET</span>
                <h2 class="section-title section-title-center">Dein Retreat-Wochenende</h2>
                <div class="activities-grid">
                    <div class="activity-card fade-in">
                        <div class="arch-frame arch-frame-sm">
                            <img src="images/activity-yoga.jpg" alt="Frauen beim Yoga in der Natur" loading="lazy">
                        </div>
                        <h3 class="activity-title">Yoga & Pilates</h3>
                        <p class="activity-desc">Sanfte Morgenflows und aktivierende Sessions, um Körper und Geist in Einklang zu bringen.</p>
                    </div>
                    <div class="activity-card fade-in">
                        <div class="arch-frame arch-frame-sm">
                            <img src="images/activity-journaling.jpg" alt="Frau beim Journaling mit Kaffee" loading="lazy">
                        </div>
                        <h3 class="activity-title">Journaling & Reflexion</h3>
                        <p class="activity-desc">Zeit für dich — mit geführten Übungen, die dir helfen, innezuhalten und Klarheit zu finden.</p>
                    </div>
                    <div class="activity-card fade-in">
                        <div class="arch-frame arch-frame-sm">
                            <img src="images/activity-workout.jpg" alt="Frauen beim gemeinsamen Workout" loading="lazy">
                        </div>
                        <h3 class="activity-title">Workouts & Bewegung</h3>
                        <p class="activity-desc">Gemeinsame Workouts und Challenges, die Spaß machen und neue Energie geben.</p>
                    </div>
                    <div class="activity-card fade-in">
                        <div class="arch-frame arch-frame-sm">
                            <img src="images/activity-hiking.jpg" alt="Wanderung in den Alpen" loading="lazy">
                        </div>
                        <h3 class="activity-title">Natur & Wandern</h3>
                        <p class="activity-desc">Das Montafon direkt vor der Tür — Wanderungen, frische Bergluft und Ausblicke, die den Kopf frei machen.</p>
                    </div>
                    <div class="activity-card fade-in">
                        <div class="arch-frame arch-frame-sm">
                            <img src="images/activity-food.jpg" alt="Gesunde Bowls und frisches Essen" loading="lazy">
                        </div>
                        <h3 class="activity-title">Healthy Food</h3>
                        <p class="activity-desc">Gemeinsam kochen, gemeinsam genießen. Gesunde Meals, die richtig gut schmecken.</p>
                    </div>
                    <div class="activity-card fade-in">
                        <div class="arch-frame arch-frame-sm">
                            <img src="images/activity-community.jpg" alt="Frauen lachen gemeinsam beim Abendessen" loading="lazy">
                        </div>
                        <h3 class="activity-title">Community & Connection</h3>
                        <p class="activity-desc">Das Herzstück: echte Gespräche, neue Freundschaften und Abende, die man nicht vergisst.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 5: Ablauf -->
        <section class="section section-beige" id="ablauf">
            <div class="container schedule-layout">
                <div class="schedule-content fade-in">
                    <span class="section-label">ABLAUF</span>
                    <h2 class="section-title">Dein Wochenende</h2>

                    <div class="schedule-day">
                        <h3 class="schedule-day-title">Freitag — Arrive & Unwind</h3>
                        <div class="timeline">
                            <div class="timeline-item">
                                <span class="timeline-time">Ab 15:00</span>
                                <div class="timeline-content">
                                    <span class="timeline-name">Soft Arrival</span>
                                    <span class="timeline-desc">Ankommen, Kaffee & Tee</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-time">17:30</span>
                                <div class="timeline-content">
                                    <span class="timeline-tag tag-move">MOVE</span>
                                    <span class="timeline-name">Arrive in Your Body</span>
                                    <span class="timeline-desc">Sanftes Yoga</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-time">18:15</span>
                                <div class="timeline-content">
                                    <span class="timeline-tag tag-connect">CONNECT</span>
                                    <span class="timeline-name">Arrival Journaling</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-time">19:00</span>
                                <div class="timeline-content">
                                    <span class="timeline-tag tag-connect">CONNECT</span>
                                    <span class="timeline-name">Shared Dinner</span>
                                    <span class="timeline-desc">Gemeinsames Kochen und Essen</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-time">20:30</span>
                                <div class="timeline-content">
                                    <span class="timeline-tag tag-connect">CONNECT</span>
                                    <span class="timeline-name">Evening Calm</span>
                                    <span class="timeline-desc">Meditation oder Stretch</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="schedule-day">
                        <h3 class="schedule-day-title">Samstag — Move, Nourish, Connect</h3>
                        <div class="timeline">
                            <div class="timeline-item">
                                <span class="timeline-time">08:00</span>
                                <div class="timeline-content">
                                    <span class="timeline-tag tag-move">MOVE</span>
                                    <span class="timeline-name">Morning Run oder Morning Mobility</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-time">09:00</span>
                                <div class="timeline-content">
                                    <span class="timeline-tag tag-nourish">NOURISH</span>
                                    <span class="timeline-name">Gemeinsames Frühstück</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-time">10:30</span>
                                <div class="timeline-content">
                                    <span class="timeline-tag tag-nourish">NOURISH</span>
                                    <span class="timeline-name">Fuel Your Energy</span>
                                    <span class="timeline-desc">Workshop</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-time">11:30</span>
                                <div class="timeline-content">
                                    <span class="timeline-tag tag-connect">CONNECT</span>
                                    <span class="timeline-name">Exchange</span>
                                    <span class="timeline-desc">Fragen & Austausch</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-time">12:30</span>
                                <div class="timeline-content">
                                    <span class="timeline-name">Lunch & freie Zeit</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-time">14:30</span>
                                <div class="timeline-content">
                                    <span class="timeline-tag tag-move">MOVE</span>
                                    <span class="timeline-name">Strong & Focused</span>
                                    <span class="timeline-desc">Boxing Session</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-time">15:30</span>
                                <div class="timeline-content">
                                    <span class="timeline-name">Free Flow Time</span>
                                    <span class="timeline-desc">Sauna, Natur, Ruhe</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-time">19:00</span>
                                <div class="timeline-content">
                                    <span class="timeline-name">Shared Dinner</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-time">20:15</span>
                                <div class="timeline-content">
                                    <span class="timeline-tag tag-connect">CONNECT</span>
                                    <span class="timeline-name">Reflection Journaling & Breathwork</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="schedule-day">
                        <h3 class="schedule-day-title">Sonntag — Aufladen & Mitnehmen</h3>
                        <div class="timeline">
                            <div class="timeline-item">
                                <span class="timeline-time">08:30</span>
                                <div class="timeline-content">
                                    <span class="timeline-name">Frühstück</span>
                                    <span class="timeline-desc">Sanfter Start</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-time">10:00</span>
                                <div class="timeline-content">
                                    <span class="timeline-tag tag-move">MOVE</span>
                                    <span class="timeline-name">Walk & Talk</span>
                                    <span class="timeline-desc">Gemeinsame Wanderung (ca. 3h)</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-time">14:30</span>
                                <div class="timeline-content">
                                    <span class="timeline-name">Pack & Checkout Prep</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-time">15:00</span>
                                <div class="timeline-content">
                                    <span class="timeline-tag tag-connect">CONNECT</span>
                                    <span class="timeline-name">Closing Journaling</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-time">Ab 16:00</span>
                                <div class="timeline-content">
                                    <span class="timeline-name">Check-Out</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p class="schedule-note">Der Ablauf kann sich je nach Wetter und Gruppe anpassen — Flexibilität gehört dazu.</p>
                </div>
                <div class="schedule-image fade-in">
                    <img src="images/schedule-landscape.jpg" alt="Berglandschaft im Montafon" loading="lazy">
                </div>
            </div>
        </section>

        <!-- Section 6: Retreat Erlebnis -->
        <section class="section section-white" id="erlebnis">
            <div class="container">
                <span class="section-label section-label-center">DAS ERLEBNIS</span>
                <h2 class="section-title section-title-center">Was unser Retreat besonders macht</h2>
                <div class="highlights-grid">
                    <div class="highlight-card fade-in">
                        <div class="highlight-image">
                            <img src="images/highlight-women.jpg" alt="Frauen im Kreis" loading="lazy">
                        </div>
                        <h3 class="highlight-title">Women Only</h3>
                        <p class="highlight-desc">Ein geschützter Raum nur für Frauen. Ohne Erwartungen, ohne Vergleich.</p>
                    </div>
                    <div class="highlight-card fade-in">
                        <div class="highlight-image">
                            <img src="images/highlight-move.jpg" alt="Frau beim Stretching" loading="lazy">
                        </div>
                        <h3 class="highlight-title">Move Your Body</h3>
                        <p class="highlight-desc">Von Yoga über Boxing bis zur Wanderung — Bewegung, die sich gut anfühlt.</p>
                    </div>
                    <div class="highlight-card fade-in">
                        <div class="highlight-image">
                            <img src="images/highlight-nourish.jpg" alt="Gesundes Essen" loading="lazy">
                        </div>
                        <h3 class="highlight-title">Nourish Yourself</h3>
                        <p class="highlight-desc">Gesundes Essen, gemeinsam zubereitet und genossen.</p>
                    </div>
                    <div class="highlight-card fade-in">
                        <div class="highlight-image">
                            <img src="images/highlight-location.jpg" alt="Tanafreida Gebäude" loading="lazy">
                        </div>
                        <h3 class="highlight-title">Tanafreida, Montafon</h3>
                        <p class="highlight-desc">Ein Berg-Refugium hoch über dem Tal, mit Blick auf die Alpen.</p>
                    </div>
                    <div class="highlight-card fade-in">
                        <div class="highlight-image">
                            <img src="images/highlight-connection.jpg" alt="Frauen umarmen sich" loading="lazy">
                        </div>
                        <h3 class="highlight-title">Echte Connection</h3>
                        <p class="highlight-desc">Kleine Gruppe, echte Gespräche, neue Freundschaften.</p>
                    </div>
                    <div class="highlight-card fade-in">
                        <div class="highlight-image">
                            <img src="images/highlight-tempo.jpg" alt="Frau entspannt in der Natur" loading="lazy">
                        </div>
                        <h3 class="highlight-title">Dein Tempo</h3>
                        <p class="highlight-desc">Morning Run oder Ausschlafen — du entscheidest, was dir gut tut.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 7: Tanafreida -->
        <section class="section section-beige" id="tanafreida">
            <div class="container">
                <div class="location-layout">
                    <div class="location-text fade-in">
                        <span class="section-label">DIE LOCATION</span>
                        <h2 class="section-title">Tanafreida — Hoch über dem Montafon</h2>
                        <p class="location-desc">Ein Berg-Refugium auf über 1.000m, umgeben von Natur, frischer Bergluft und Stille. Acht individuell gestaltete Apartments, 40.000m² Wiesen und Wälder, und ein Ausblick, der alles andere vergessen lässt.</p>
                        <a href="https://www.tanafreida.at/" target="_blank" rel="noopener" class="btn btn-outline">Mehr über das Tanafreida</a>
                    </div>
                    <div class="location-gallery fade-in">
                        <div class="gallery-large arch-frame">
                            <img src="images/tanafreida-main.jpg" alt="Tanafreida Berg-Refugium Außenansicht" loading="lazy">
                        </div>
                        <div class="gallery-small">
                            <img src="images/tanafreida-room.jpg" alt="Tanafreida Apartment Innenansicht" loading="lazy">
                        </div>
                        <div class="gallery-small">
                            <img src="images/tanafreida-terrace.jpg" alt="Tanafreida Terrasse mit Bergblick" loading="lazy">
                        </div>
                        <div class="gallery-small">
                            <img src="images/tanafreida-nature.jpg" alt="Natur rund um das Tanafreida" loading="lazy">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 8: Instagram -->
        <section class="section section-white" id="instagram">
            <div class="container instagram-section fade-in">
                <span class="section-label section-label-center">FOLGE UNS</span>
                <h2 class="section-title section-title-center">@theglowbesties</h2>
                <p class="instagram-subtitle">Inspiration, Behind the Scenes und alles rund um unser erstes Retreat.</p>
                <div class="instagram-grid">
                    <a href="https://www.instagram.com/theglowbesties/" target="_blank" rel="noopener" class="instagram-item">
                        <img src="images/instagram-1.jpg" alt="Glow Besties Instagram Post" loading="lazy">
                    </a>
                    <a href="https://www.instagram.com/theglowbesties/" target="_blank" rel="noopener" class="instagram-item">
                        <img src="images/instagram-2.jpg" alt="Glow Besties Instagram Post" loading="lazy">
                    </a>
                    <a href="https://www.instagram.com/theglowbesties/" target="_blank" rel="noopener" class="instagram-item">
                        <img src="images/instagram-3.jpg" alt="Glow Besties Instagram Post" loading="lazy">
                    </a>
                    <a href="https://www.instagram.com/theglowbesties/" target="_blank" rel="noopener" class="instagram-item">
                        <img src="images/instagram-4.jpg" alt="Glow Besties Instagram Post" loading="lazy">
                    </a>
                    <a href="https://www.instagram.com/theglowbesties/" target="_blank" rel="noopener" class="instagram-item">
                        <img src="images/instagram-5.jpg" alt="Glow Besties Instagram Post" loading="lazy">
                    </a>
                    <a href="https://www.instagram.com/theglowbesties/" target="_blank" rel="noopener" class="instagram-item">
                        <img src="images/instagram-6.jpg" alt="Glow Besties Instagram Post" loading="lazy">
                    </a>
                </div>
                <a href="https://www.instagram.com/theglowbesties/" target="_blank" rel="noopener" class="btn btn-primary">Auf Instagram folgen</a>
            </div>
        </section>

        <!-- Section 9: Sichere dir deinen Platz -->
        <section class="section section-cta" id="dabei-sein">
            <div class="cta-bg" style="background-image: url('images/cta-background.jpg');"></div>
            <div class="cta-overlay"></div>
            <div class="container cta-content fade-in">
                <h2 class="cta-title">Bist du dabei?</h2>
                <p class="cta-subtitle">Unser erstes Retreat findet vom 29. – 31. Mai 2026 im Tanafreida, Montafon statt. Sichere dir jetzt deinen Platz.</p>
                <form class="signup-form" id="signup-form" novalidate>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="signup-name" class="sr-only">Name</label>
                            <input type="text" id="signup-name" name="FNAME" placeholder="Dein Name" required>
                        </div>
                        <div class="form-group">
                            <label for="signup-email" class="sr-only">E-Mail</label>
                            <input type="email" id="signup-email" name="EMAIL" placeholder="Deine E-Mail-Adresse" required>
                            <span class="form-error" id="email-error"></span>
                        </div>
                    </div>
                    <div class="form-group form-checkbox">
                        <input type="checkbox" id="signup-consent" name="consent" required>
                        <label for="signup-consent">Ich stimme der Verarbeitung meiner Daten gemäß der <a href="datenschutz.html" target="_blank">Datenschutzerklärung</a> zu.</label>
                    </div>
                    <button type="submit" class="btn btn-primary btn-submit">Platz sichern</button>
                    <p class="form-note">Du erhältst alle Infos und Details per E-Mail.</p>
                </form>
                <div class="signup-success" id="signup-success" hidden>
                    <p class="success-message">Du bist dabei! Wir melden uns bald bei dir.</p>
                </div>
            </div>
        </section>
    </main>

    <!-- Section 10: Footer -->
    <footer class="footer">
        <div class="container footer-content">
            <div class="footer-brand">
                <span class="footer-logo">Glow Besties Retreats</span>
                <span class="footer-tagline">move · nourish · connect</span>
            </div>
            <nav class="footer-nav" aria-label="Footer Navigation">
                <ul class="footer-links">
                    <li><a href="#ueber-uns">Über uns</a></li>
                    <li><a href="#was-erwartet">Was dich erwartet</a></li>
                    <li><a href="#ablauf">Ablauf</a></li>
                    <li><a href="#tanafreida">Tanafreida</a></li>
                    <li><a href="https://www.instagram.com/theglowbesties/" target="_blank" rel="noopener">Instagram</a></li>
                </ul>
            </nav>
            <div class="footer-legal">
                <a href="impressum.html">Impressum</a>
                <a href="datenschutz.html">Datenschutz</a>
            </div>
            <p class="footer-email">
                <a href="mailto:hello@glowbesties.com">hello@glowbesties.com</a>
            </p>
            <div class="footer-social">
                <a href="https://www.instagram.com/theglowbesties/" target="_blank" rel="noopener" aria-label="Instagram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
            </div>
            <p class="footer-copy">&copy; 2026 Glow Besties Retreats</p>
        </div>
    </footer>

    <script src="js/main.js"></script>
    <script src="js/mailchimp.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify the raw HTML renders**

Open `index.html` in a browser. Expected: unstyled content, all sections visible, all text correct, images attempt to load.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add HTML skeleton with all 10 sections"
```

---

### Task 3: Create the CSS design system and base styles

**Files:**
- Create: `css/style.css`

- [ ] **Step 1: Create `css/style.css` with custom properties and reset**

Use @frontend-design skill principles: distinctive typography (Cormorant Garamond + Jost), cohesive warm palette with dominant coral accent, generous negative space.

```css
/* ============================================
   GLOW BESTIES RETREATS — Design System
   ============================================ */

/* --- Custom Properties --- */
:root {
    /* Colors */
    --color-bg-primary: #FBF8F4;
    --color-bg-beige: #F3EDE4;
    --color-accent: #B5635A;
    --color-accent-hover: #9E524A;
    --color-accent-light: #D4A89A;
    --color-text-heading: #3A3531;
    --color-text-body: #6B6460;
    --color-text-light: #8A8480;
    --color-white: #FFFFFF;
    --color-footer-bg: #3A3531;
    --color-footer-text: #D4CFC9;
    --color-error: #C44B4B;

    /* Typography */
    --font-heading: 'Cormorant Garamond', Georgia, serif;
    --font-body: 'Jost', 'Helvetica Neue', sans-serif;

    /* Spacing */
    --section-padding: 120px;
    --section-padding-mobile: 72px;
    --container-max: 1200px;
    --container-padding: 24px;

    /* Transitions */
    --transition-base: 0.3s ease;
    --transition-slow: 0.6s ease;

    /* Navbar */
    --navbar-height: 80px;
    --navbar-height-mobile: 64px;
}

/* --- Reset & Base --- */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    font-family: var(--font-body);
    font-weight: 300;
    font-size: 17px;
    line-height: 1.7;
    color: var(--color-text-body);
    background-color: var(--color-bg-primary);
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
}

/* --- Typography --- */
h1, h2, h3 {
    font-family: var(--font-heading);
    font-weight: 400;
    color: var(--color-text-heading);
    line-height: 1.2;
}

h1 {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
}

h2 {
    font-size: clamp(2rem, 4vw, 3rem);
}

h3 {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
}

/* --- Layout Utilities --- */
.container {
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--container-padding);
}

.section {
    padding: var(--section-padding) 0;
}

.section-white {
    background-color: var(--color-bg-primary);
}

.section-beige {
    background-color: var(--color-bg-beige);
}

.section-label {
    display: block;
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: 16px;
}

.section-label-center {
    text-align: center;
}

.section-title {
    margin-bottom: 40px;
}

.section-title-center {
    text-align: center;
}

/* --- Buttons --- */
.btn {
    display: inline-block;
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    padding: 16px 40px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: all var(--transition-base);
    text-align: center;
}

.btn-primary {
    background-color: var(--color-accent);
    color: var(--color-white);
}

.btn-primary:hover,
.btn-primary:focus-visible {
    background-color: var(--color-accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(181, 99, 90, 0.3);
}

.btn-outline {
    background-color: transparent;
    color: var(--color-accent);
    border: 1.5px solid var(--color-accent);
}

.btn-outline:hover,
.btn-outline:focus-visible {
    background-color: var(--color-accent);
    color: var(--color-white);
}

/* Focus state for accessibility */
.btn:focus-visible,
a:focus-visible,
input:focus-visible,
button:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
}

/* Screen reader only utility */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

/* --- Mobile section padding --- */
@media (max-width: 768px) {
    .section {
        padding: var(--section-padding-mobile) 0;
    }
}

/* --- Arch Frame (reusable component) --- */
.arch-frame {
    border-radius: 200px 200px 12px 12px;
    overflow: hidden;
}

.arch-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.arch-frame-sm {
    height: 280px;
}
```

- [ ] **Step 2: Open in browser, verify fonts load and base styling applies**

Expected: Cormorant Garamond on headings, Jost on body text. Warm white background, correct text colors, sections alternate beige/white.

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add CSS design system with custom properties, reset, typography, buttons"
```

---

### Task 4: Style the navigation

**Files:**
- Modify: `css/style.css` — append navbar styles
- Create: `js/main.js` — navbar scroll behavior + hamburger menu

- [ ] **Step 1: Append navbar styles to `css/style.css`**

```css
/* ============================================
   NAVIGATION
   ============================================ */

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 0 var(--container-padding);
    height: var(--navbar-height);
    display: flex;
    align-items: center;
    transition: background-color var(--transition-base), box-shadow var(--transition-base);
}

.navbar.scrolled {
    background-color: rgba(251, 248, 244, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 1px 20px rgba(58, 53, 49, 0.06);
}

.nav-container {
    max-width: var(--container-max);
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-logo img {
    height: 40px;
    width: auto;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
}

.nav-links a {
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.04em;
    color: var(--color-white);
    transition: color var(--transition-base);
    position: relative;
}

.navbar.scrolled .nav-links a {
    color: var(--color-text-body);
}

.nav-links a:hover {
    color: var(--color-accent);
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1.5px;
    background-color: var(--color-accent);
    transition: width var(--transition-base);
}

.nav-links a:hover::after {
    width: 100%;
}

.nav-cta {
    padding: 10px 24px;
    border: 1.5px solid var(--color-white);
    border-radius: 50px;
}

.nav-cta::after {
    display: none !important;
}

.navbar.scrolled .nav-cta {
    border-color: var(--color-accent);
    color: var(--color-accent) !important;
}

.navbar.scrolled .nav-cta:hover {
    background-color: var(--color-accent);
    color: var(--color-white) !important;
}

/* Hamburger */
.nav-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    z-index: 1001;
}

.hamburger,
.hamburger::before,
.hamburger::after {
    display: block;
    width: 24px;
    height: 2px;
    background-color: var(--color-white);
    transition: all var(--transition-base);
}

.navbar.scrolled .hamburger,
.navbar.scrolled .hamburger::before,
.navbar.scrolled .hamburger::after {
    background-color: var(--color-text-heading);
}

.hamburger {
    position: relative;
}

.hamburger::before,
.hamburger::after {
    content: '';
    position: absolute;
    left: 0;
}

.hamburger::before {
    top: -7px;
}

.hamburger::after {
    top: 7px;
}

/* Hamburger open state */
.nav-toggle[aria-expanded="true"] .hamburger {
    background-color: transparent;
}

.nav-toggle[aria-expanded="true"] .hamburger::before {
    top: 0;
    transform: rotate(45deg);
    background-color: var(--color-text-heading);
}

.nav-toggle[aria-expanded="true"] .hamburger::after {
    top: 0;
    transform: rotate(-45deg);
    background-color: var(--color-text-heading);
}

/* Mobile nav */
@media (max-width: 768px) {
    .navbar {
        height: var(--navbar-height-mobile);
    }

    .nav-logo img {
        height: 32px;
    }

    .nav-toggle {
        display: block;
    }

    .nav-links {
        position: fixed;
        top: 0;
        right: 0;
        width: 280px;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        gap: 28px;
        background-color: var(--color-bg-primary);
        transform: translateX(100%);
        transition: transform var(--transition-base);
        box-shadow: -10px 0 40px rgba(0, 0, 0, 0.1);
    }

    .nav-links.open {
        transform: translateX(0);
    }

    .nav-links a {
        color: var(--color-text-heading);
        font-size: 1.1rem;
    }

    .nav-cta {
        border-color: var(--color-accent);
        color: var(--color-accent) !important;
    }
}
```

- [ ] **Step 2: Create `js/main.js` with navbar scroll + hamburger**

```javascript
/* ============================================
   GLOW BESTIES RETREATS — Main JavaScript
   ============================================ */

(function () {
    'use strict';

    // --- Navbar scroll behavior ---
    const navbar = document.getElementById('navbar');

    function handleNavScroll() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavScroll, { passive: true });

    // --- Hamburger menu ---
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function () {
        const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isOpen);
        navLinks.classList.toggle('open');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('open');
        });
    });

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var offset = window.innerWidth < 769 ? 64 : 80;
                var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });

})();
```

- [ ] **Step 3: Verify in browser**

Expected: Transparent navbar over hero, transitions to white with shadow on scroll. Links turn from white to gray-brown. Hamburger works on mobile (resize browser to <768px). Smooth scroll to sections.

- [ ] **Step 4: Commit**

```bash
git add css/style.css js/main.js
git commit -m "feat: add navbar styling with scroll behavior and mobile hamburger menu"
```

---

## Chunk 2: Hero, About, Activities Sections

### Task 5: Style the hero section

**Files:**
- Modify: `css/style.css` — append hero styles
- Modify: `js/main.js` — add parallax effect

- [ ] **Step 1: Append hero styles to `css/style.css`**

```css
/* ============================================
   HERO SECTION
   ============================================ */

.hero {
    position: relative;
    height: 100vh;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    will-change: transform;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to bottom,
        rgba(58, 53, 49, 0.15) 0%,
        rgba(58, 53, 49, 0.35) 60%,
        rgba(58, 53, 49, 0.55) 100%
    );
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 700px;
    padding: 0 var(--container-padding);
}

.hero-label {
    display: block;
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.35em;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 20px;
}

.hero-title {
    color: var(--color-white);
    font-size: clamp(3rem, 7vw, 5rem);
    font-weight: 300;
    margin-bottom: 20px;
    font-style: italic;
}

.hero-subtitle {
    font-family: var(--font-body);
    font-size: clamp(1rem, 2vw, 1.15rem);
    font-weight: 300;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 8px;
    line-height: 1.6;
}

.hero-tagline {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    font-style: italic;
    color: var(--color-accent-light);
    letter-spacing: 0.1em;
    margin-bottom: 36px;
}

.hero .btn-primary {
    font-size: 1rem;
    padding: 18px 48px;
}

/* Scroll indicator */
.hero-scroll-indicator {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
}

.chevron {
    display: block;
    width: 24px;
    height: 24px;
    border-right: 2px solid rgba(255, 255, 255, 0.6);
    border-bottom: 2px solid rgba(255, 255, 255, 0.6);
    transform: rotate(45deg);
    animation: chevronBounce 2s ease-in-out infinite;
}

@keyframes chevronBounce {
    0%, 100% { transform: rotate(45deg) translateY(0); opacity: 0.6; }
    50% { transform: rotate(45deg) translateY(8px); opacity: 1; }
}
```

- [ ] **Step 2: Add parallax effect to `js/main.js`**

Append before the closing `})();`:

```javascript
    // --- Hero parallax ---
    var heroBg = document.querySelector('.hero-bg');

    function handleParallax() {
        if (window.scrollY < window.innerHeight) {
            heroBg.style.transform = 'translateY(' + (window.scrollY * 0.35) + 'px)';
        }
    }

    window.addEventListener('scroll', handleParallax, { passive: true });
```

- [ ] **Step 3: Verify in browser**

Expected: Full-viewport hero with mountain image, dark gradient overlay, centered white text with italic serif headline, coral CTA button, bouncing scroll chevron. Parallax shifts background on scroll. Button hover lifts and glows.

- [ ] **Step 4: Commit**

```bash
git add css/style.css js/main.js
git commit -m "feat: style hero section with parallax and scroll indicator"
```

---

### Task 6: Style the Über uns section

**Files:**
- Modify: `css/style.css` — append about styles

- [ ] **Step 1: Append about styles to `css/style.css`**

```css
/* ============================================
   ÜBER UNS (ABOUT)
   ============================================ */

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.about-body p {
    margin-bottom: 16px;
}

.about-body p:last-child {
    margin-bottom: 0;
}

.about-image .arch-frame {
    height: 520px;
}

@media (max-width: 768px) {
    .about-grid {
        grid-template-columns: 1fr;
        gap: 48px;
    }

    .about-image {
        order: -1;
    }

    .about-image .arch-frame {
        height: 380px;
        max-width: 320px;
        margin: 0 auto;
    }
}
```

- [ ] **Step 2: Verify in browser**

Expected: Beige background. Two columns — story text left, arch-framed image right. Text is warm and readable. On mobile (<768px), image stacks on top, text below.

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: style Über uns section with arch frame image"
```

---

### Task 7: Style the activities section (Was dich erwartet)

**Files:**
- Modify: `css/style.css` — append activities grid styles

- [ ] **Step 1: Append activities styles to `css/style.css`**

```css
/* ============================================
   ACTIVITIES (WAS DICH ERWARTET)
   ============================================ */

.activities-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
}

.activity-card {
    text-align: center;
}

.activity-card .arch-frame-sm {
    margin-bottom: 24px;
}

.activity-title {
    font-family: var(--font-heading);
    font-size: 1.35rem;
    color: var(--color-text-heading);
    margin-bottom: 8px;
}

.activity-desc {
    font-size: 0.95rem;
    color: var(--color-text-body);
    max-width: 300px;
    margin: 0 auto;
}

@media (max-width: 1024px) {
    .activities-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 36px;
    }
}

@media (max-width: 768px) {
    .activities-grid {
        grid-template-columns: 1fr;
        gap: 48px;
        max-width: 360px;
        margin: 0 auto;
    }

    .arch-frame-sm {
        height: 300px;
    }
}
```

- [ ] **Step 2: Verify in browser**

Expected: 3x2 grid of activity cards. Each has an arch-shaped image, serif title below, description text. 2-column on tablet, single-column on mobile. Cards centered.

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: style activities section with arch-frame card grid"
```

---

## Chunk 3: Schedule, Highlights, Location Sections

### Task 8: Style the Ablauf (Schedule) section

**Files:**
- Modify: `css/style.css` — append schedule/timeline styles

- [ ] **Step 1: Append schedule styles to `css/style.css`**

```css
/* ============================================
   ABLAUF (SCHEDULE)
   ============================================ */

.schedule-layout {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 60px;
    align-items: start;
}

.schedule-image {
    position: sticky;
    top: calc(var(--navbar-height) + 32px);
    border-radius: 12px;
    overflow: hidden;
    opacity: 0.85;
}

.schedule-image img {
    width: 100%;
    height: 500px;
    object-fit: cover;
}

.schedule-day {
    margin-bottom: 48px;
}

.schedule-day:last-of-type {
    margin-bottom: 32px;
}

.schedule-day-title {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-style: italic;
    color: var(--color-text-heading);
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(181, 99, 90, 0.2);
}

.timeline {
    position: relative;
    padding-left: 24px;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 1px;
    background-color: var(--color-accent-light);
}

.timeline-item {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    position: relative;
}

.timeline-item:last-child {
    margin-bottom: 0;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -28px;
    top: 8px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: var(--color-accent-light);
    border: 2px solid var(--color-bg-beige);
}

.timeline-time {
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--color-text-light);
    min-width: 70px;
    flex-shrink: 0;
}

.timeline-content {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 8px;
}

.timeline-tag {
    font-family: var(--font-body);
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    padding: 2px 10px;
    border-radius: 20px;
    text-transform: uppercase;
}

.tag-move {
    background-color: rgba(181, 99, 90, 0.12);
    color: var(--color-accent);
}

.tag-nourish {
    background-color: rgba(139, 152, 108, 0.15);
    color: #6B7A4A;
}

.tag-connect {
    background-color: rgba(212, 168, 154, 0.2);
    color: #9A7568;
}

.timeline-name {
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 400;
    color: var(--color-text-heading);
}

.timeline-desc {
    font-size: 0.85rem;
    color: var(--color-text-light);
    width: 100%;
}

.schedule-note {
    font-family: var(--font-heading);
    font-style: italic;
    font-size: 1rem;
    color: var(--color-text-light);
    margin-top: 16px;
}

@media (max-width: 1024px) {
    .schedule-layout {
        grid-template-columns: 1fr;
    }

    .schedule-image {
        position: relative;
        top: 0;
        max-height: 300px;
        order: -1;
    }

    .schedule-image img {
        height: 300px;
    }
}

@media (max-width: 768px) {
    .timeline-item {
        flex-direction: column;
        gap: 4px;
    }

    .timeline-time {
        min-width: unset;
    }
}
```

- [ ] **Step 2: Verify in browser**

Expected: Elegant timeline with thin vertical line, colored category tags (MOVE coral, NOURISH green, CONNECT rose), sticky landscape image on the right. Day titles in italic serif. Tags are small rounded pills. Responsive stacking on tablet/mobile.

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: style schedule section with editorial timeline and category tags"
```

---

### Task 9: Style the Retreat Erlebnis (Highlights) section

**Files:**
- Modify: `css/style.css` — append highlights grid styles

- [ ] **Step 1: Append highlights styles to `css/style.css`**

```css
/* ============================================
   RETREAT ERLEBNIS (HIGHLIGHTS)
   ============================================ */

.highlights-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
}

.highlight-card {
    text-align: center;
}

.highlight-image {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 20px;
}

.highlight-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.highlight-title {
    font-family: var(--font-heading);
    font-size: 1.3rem;
    color: var(--color-text-heading);
    margin-bottom: 8px;
    position: relative;
    display: inline-block;
}

.highlight-title::after {
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background-color: var(--color-accent-light);
    margin: 8px auto 0;
}

.highlight-desc {
    font-size: 0.95rem;
    color: var(--color-text-body);
    max-width: 280px;
    margin: 0 auto;
}

@media (max-width: 1024px) {
    .highlights-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }
}

@media (max-width: 768px) {
    .highlights-grid {
        grid-template-columns: 1fr;
        gap: 40px;
        max-width: 320px;
        margin: 0 auto;
    }
}
```

- [ ] **Step 2: Verify in browser**

Expected: 3x2 grid of highlight blocks. Small circular images, serif titles with coral accent line beneath, description text. Clean and minimal.

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: style highlights section with circular images and accent lines"
```

---

### Task 10: Style the Tanafreida (Location) section

**Files:**
- Modify: `css/style.css` — append location gallery styles

- [ ] **Step 1: Append location styles to `css/style.css`**

```css
/* ============================================
   TANAFREIDA (LOCATION)
   ============================================ */

.location-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.location-desc {
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 32px;
}

.location-gallery {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 16px;
}

.gallery-large {
    grid-column: 1 / -1;
    height: 320px;
}

.gallery-large img {
    border-radius: 200px 200px 12px 12px;
}

.gallery-small {
    border-radius: 12px;
    overflow: hidden;
    height: 180px;
}

.gallery-small img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Third small image spans full width on mobile, hidden on desktop grid */
.gallery-small:nth-child(4) {
    grid-column: 1 / -1;
    height: 180px;
}

@media (max-width: 768px) {
    .location-layout {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .gallery-large {
        height: 260px;
    }

    .gallery-small {
        height: 150px;
    }
}
```

- [ ] **Step 2: Verify in browser**

Expected: Text left, staggered image gallery right. Large arch-framed image spanning full gallery width, 2 smaller rectangular images below, third smaller image spanning full width. Link to tanafreida.at styled as outline button.

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: style Tanafreida location section with asymmetric gallery"
```

---

## Chunk 4: Instagram, CTA/Signup, Footer, Legal Pages

### Task 11: Style the Instagram section

**Files:**
- Modify: `css/style.css` — append Instagram styles

- [ ] **Step 1: Append Instagram styles to `css/style.css`**

```css
/* ============================================
   INSTAGRAM
   ============================================ */

.instagram-section {
    text-align: center;
}

.instagram-subtitle {
    font-size: 1rem;
    color: var(--color-text-body);
    margin-bottom: 40px;
}

.instagram-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 40px;
}

.instagram-item {
    aspect-ratio: 1 / 1;
    border-radius: 8px;
    overflow: hidden;
    transition: transform var(--transition-base), opacity var(--transition-base);
}

.instagram-item:hover {
    transform: scale(1.03);
    opacity: 0.9;
}

.instagram-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 768px) {
    .instagram-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

- [ ] **Step 2: Verify in browser**

Expected: Centered heading "@theglowbesties", subtitle, 6 square images in a 3x2 grid on desktop, coral CTA button below. On mobile: 2x3 grid (2 columns, 3 rows). Images have subtle scale hover.

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: style Instagram section with 6-image grid"
```

---

### Task 12: Style the CTA/Signup section

**Files:**
- Modify: `css/style.css` — append CTA and form styles

- [ ] **Step 1: Append CTA/signup styles to `css/style.css`**

```css
/* ============================================
   CTA / SIGNUP SECTION
   ============================================ */

.section-cta {
    position: relative;
    padding: var(--section-padding) 0;
    overflow: hidden;
}

.cta-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
}

.cta-overlay {
    position: absolute;
    inset: 0;
    background: rgba(58, 53, 49, 0.6);
}

.cta-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.cta-title {
    font-family: var(--font-heading);
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    color: var(--color-white);
    margin-bottom: 16px;
    font-style: italic;
}

.cta-subtitle {
    font-size: 1.05rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.7;
    margin-bottom: 40px;
}

.signup-form {
    max-width: 480px;
    margin: 0 auto;
}

.form-row {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
}

.form-group {
    flex: 1;
    position: relative;
}

.signup-form input[type="text"],
.signup-form input[type="email"] {
    width: 100%;
    padding: 14px 20px;
    font-family: var(--font-body);
    font-size: 0.9rem;
    color: var(--color-white);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    outline: none;
    transition: border-color var(--transition-base), background var(--transition-base);
}

.signup-form input[type="text"]::placeholder,
.signup-form input[type="email"]::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.signup-form input[type="text"]:focus,
.signup-form input[type="email"]:focus {
    border-color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.15);
}

.form-error {
    display: block;
    font-size: 0.8rem;
    color: #F4A4A4;
    margin-top: 6px;
    padding-left: 20px;
}

.form-checkbox {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 24px;
    text-align: left;
}

.form-checkbox input[type="checkbox"] {
    margin-top: 4px;
    accent-color: var(--color-accent);
    flex-shrink: 0;
}

.form-checkbox label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
}

.form-checkbox label a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: underline;
}

.btn-submit {
    width: 100%;
    max-width: 280px;
    font-size: 1rem;
    padding: 16px 40px;
}

.form-note {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 12px;
}

.signup-success {
    padding: 20px;
}

.success-message {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-style: italic;
    color: var(--color-white);
}

@media (max-width: 768px) {
    .form-row {
        flex-direction: column;
    }
}
```

- [ ] **Step 2: Verify in browser**

Expected: Full-width background image with dark overlay. White centered text, italic serif headline "Bist du dabei?", two inline form fields (name + email), GDPR checkbox, coral submit button. On mobile: fields stack.

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: style CTA signup section with custom Mailchimp form"
```

---

### Task 13: Style the footer

**Files:**
- Modify: `css/style.css` — append footer styles

- [ ] **Step 1: Append footer styles to `css/style.css`**

```css
/* ============================================
   FOOTER
   ============================================ */

.footer {
    background-color: var(--color-footer-bg);
    padding: 64px 0 32px;
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;
}

.footer-logo {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--color-white);
    display: block;
}

.footer-tagline {
    font-family: var(--font-heading);
    font-style: italic;
    font-size: 0.9rem;
    color: var(--color-accent-light);
    display: block;
    margin-top: 4px;
}

.footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
}

.footer-links a {
    font-size: 0.85rem;
    color: var(--color-footer-text);
    transition: color var(--transition-base);
}

.footer-links a:hover {
    color: var(--color-white);
}

.footer-legal {
    display: flex;
    gap: 20px;
}

.footer-legal a {
    font-size: 0.8rem;
    color: var(--color-text-light);
    transition: color var(--transition-base);
}

.footer-legal a:hover {
    color: var(--color-footer-text);
}

.footer-email a {
    font-size: 0.9rem;
    color: var(--color-footer-text);
    transition: color var(--transition-base);
}

.footer-email a:hover {
    color: var(--color-white);
}

.footer-social a {
    color: var(--color-footer-text);
    transition: color var(--transition-base);
}

.footer-social a:hover {
    color: var(--color-white);
}

.footer-copy {
    font-size: 0.75rem;
    color: var(--color-text-light);
    margin-top: 8px;
}
```

- [ ] **Step 2: Verify in browser**

Expected: Dark warm footer with centered layout. Logo text, tagline in italic coral, navigation links, legal links (Impressum/Datenschutz), Instagram icon, copyright.

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: style footer with branding and navigation"
```

---

### Task 14: Create Impressum and Datenschutz placeholder pages

**Files:**
- Create: `impressum.html`
- Create: `datenschutz.html`

- [ ] **Step 1: Create `impressum.html`**

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Impressum — Glow Besties Retreats</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <nav class="navbar scrolled" id="navbar">
        <div class="nav-container">
            <a href="index.html" class="nav-logo">
                <img src="images/logo.jpeg" alt="Glow Besties Retreats Logo">
            </a>
            <a href="index.html" class="btn btn-outline" style="font-size: 0.85rem; padding: 10px 24px;">Zurück zur Startseite</a>
        </div>
    </nav>

    <main>
        <section class="section section-white" style="padding-top: calc(var(--navbar-height) + 60px);">
            <div class="container" style="max-width: 700px;">
                <h1 style="font-size: 2.5rem; margin-bottom: 40px;">Impressum</h1>

                <h3 style="margin-bottom: 8px;">Angaben gemäß § 5 TMG / § 25 MedienG</h3>
                <p style="margin-bottom: 24px;">
                    [Name einfügen]<br>
                    [Straße und Hausnummer]<br>
                    [PLZ Ort]<br>
                    [Land]
                </p>

                <h3 style="margin-bottom: 8px;">Kontakt</h3>
                <p style="margin-bottom: 24px;">
                    E-Mail: [E-Mail-Adresse einfügen]
                </p>

                <h3 style="margin-bottom: 8px;">Verantwortlich für den Inhalt</h3>
                <p style="margin-bottom: 24px;">
                    [Name einfügen]<br>
                    [Adresse einfügen]
                </p>

                <p style="color: var(--color-text-light); font-size: 0.85rem; margin-top: 48px;">
                    Bitte vor Veröffentlichung mit echten Daten ausfüllen.
                </p>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container footer-content">
            <p class="footer-copy">&copy; 2026 Glow Besties Retreats</p>
        </div>
    </footer>
</body>
</html>
```

- [ ] **Step 2: Create `datenschutz.html`**

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datenschutzerklärung — Glow Besties Retreats</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <nav class="navbar scrolled" id="navbar">
        <div class="nav-container">
            <a href="index.html" class="nav-logo">
                <img src="images/logo.jpeg" alt="Glow Besties Retreats Logo">
            </a>
            <a href="index.html" class="btn btn-outline" style="font-size: 0.85rem; padding: 10px 24px;">Zurück zur Startseite</a>
        </div>
    </nav>

    <main>
        <section class="section section-white" style="padding-top: calc(var(--navbar-height) + 60px);">
            <div class="container" style="max-width: 700px;">
                <h1 style="font-size: 2.5rem; margin-bottom: 40px;">Datenschutzerklärung</h1>

                <h3 style="margin-bottom: 8px;">1. Verantwortliche Stelle</h3>
                <p style="margin-bottom: 24px;">
                    [Name und Kontaktdaten einfügen]
                </p>

                <h3 style="margin-bottom: 8px;">2. Erhebung und Verarbeitung personenbezogener Daten</h3>
                <p style="margin-bottom: 24px;">
                    Auf unserer Website erheben wir personenbezogene Daten (Name, E-Mail-Adresse) ausschließlich im Rahmen der Anmeldung für unseren Newsletter und die Retreat-Warteliste. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                </p>

                <h3 style="margin-bottom: 8px;">3. Newsletter (Mailchimp)</h3>
                <p style="margin-bottom: 24px;">
                    Für den Versand unseres Newsletters nutzen wir den Dienst Mailchimp (The Rocket Science Group LLC, 675 Ponce de Leon Ave NE, Suite 5000, Atlanta, GA 30308, USA). Ihre Daten werden auf Servern von Mailchimp in den USA gespeichert. Mailchimp verfügt über eine Zertifizierung nach dem EU-US Data Privacy Framework. Weitere Informationen finden Sie in der Datenschutzerklärung von Mailchimp.
                </p>

                <h3 style="margin-bottom: 8px;">4. Ihre Rechte</h3>
                <p style="margin-bottom: 24px;">
                    Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Sie können Ihre Einwilligung jederzeit widerrufen. Bitte kontaktieren Sie uns unter [E-Mail-Adresse einfügen].
                </p>

                <h3 style="margin-bottom: 8px;">5. Cookies</h3>
                <p style="margin-bottom: 24px;">
                    Diese Website verwendet keine Cookies.
                </p>

                <h3 style="margin-bottom: 8px;">6. Hosting</h3>
                <p style="margin-bottom: 24px;">
                    [Hosting-Anbieter und Details einfügen]
                </p>

                <p style="color: var(--color-text-light); font-size: 0.85rem; margin-top: 48px;">
                    Bitte vor Veröffentlichung prüfen und mit echten Daten ergänzen.
                </p>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container footer-content">
            <p class="footer-copy">&copy; 2026 Glow Besties Retreats</p>
        </div>
    </footer>
</body>
</html>
```

- [ ] **Step 3: Verify both pages open in browser**

Expected: Clean, styled pages with same fonts/colors as main site. Placeholder text clearly marked. "Zurück zur Startseite" button links back to index.html.

- [ ] **Step 4: Commit**

```bash
git add impressum.html datenschutz.html
git commit -m "feat: add Impressum and Datenschutz placeholder pages"
```

---

## Chunk 5: Mailchimp Integration, Scroll Animations, Final Polish

### Task 15: Create Mailchimp form handler

**Files:**
- Create: `js/mailchimp.js`

- [ ] **Step 1: Create `js/mailchimp.js`**

This handles client-side validation and submits to Mailchimp's classic form endpoint via JSONP (no CORS issues). The Mailchimp form action URL and hidden fields will need to be replaced with the actual values from the user's Mailchimp account.

```javascript
/* ============================================
   MAILCHIMP FORM HANDLER
   ============================================ */

(function () {
    'use strict';

    var form = document.getElementById('signup-form');
    var successEl = document.getElementById('signup-success');
    var emailError = document.getElementById('email-error');

    if (!form) return;

    // ==============================================
    // MAILCHIMP CONFIGURATION
    // Replace these values with your actual Mailchimp details.
    // To find them: Mailchimp > Audience > Signup forms > Embedded forms
    // Copy the form action URL and extract the values.
    // ==============================================
    var MAILCHIMP_URL = 'https://YOUR_ACCOUNT.us00.list-manage.com/subscribe/post-json';
    var MAILCHIMP_U = 'YOUR_U_VALUE';
    var MAILCHIMP_ID = 'YOUR_LIST_ID';

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showError(message) {
        emailError.textContent = message;
    }

    function clearError() {
        emailError.textContent = '';
    }

    function showSuccess() {
        form.hidden = true;
        successEl.hidden = false;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearError();

        var name = form.querySelector('#signup-name').value.trim();
        var email = form.querySelector('#signup-email').value.trim();
        var consent = form.querySelector('#signup-consent').checked;

        // Validation
        if (!email) {
            showError('Bitte gib eine gültige E-Mail-Adresse ein.');
            return;
        }

        if (!isValidEmail(email)) {
            showError('Bitte gib eine gültige E-Mail-Adresse ein.');
            return;
        }

        if (!consent) {
            showError('Bitte stimme der Datenschutzerklärung zu.');
            return;
        }

        // Submit to Mailchimp via JSONP
        var callbackName = 'mailchimpCallback_' + Date.now();
        var url = MAILCHIMP_URL
            + '?u=' + encodeURIComponent(MAILCHIMP_U)
            + '&id=' + encodeURIComponent(MAILCHIMP_ID)
            + '&EMAIL=' + encodeURIComponent(email)
            + '&FNAME=' + encodeURIComponent(name)
            + '&c=' + callbackName;

        window[callbackName] = function (data) {
            if (data.result === 'success') {
                showSuccess();
            } else if (data.msg && data.msg.indexOf('already subscribed') !== -1) {
                showError('Du bist bereits angemeldet!');
            } else {
                showError('Etwas ist schiefgelaufen. Bitte versuche es erneut.');
            }

            // Cleanup
            delete window[callbackName];
            var script = document.getElementById(callbackName);
            if (script) script.remove();
        };

        var script = document.createElement('script');
        script.id = callbackName;
        script.src = url;
        document.body.appendChild(script);
    });

})();
```

- [ ] **Step 2: Verify form validation works in browser**

Test: submit with empty email → error shows. Submit with invalid email → error shows. Submit without checkbox → error shows. (Mailchimp submission won't work until real credentials are added — that's expected.)

- [ ] **Step 3: Commit**

```bash
git add js/mailchimp.js
git commit -m "feat: add Mailchimp form handler with validation and JSONP submit"
```

---

### Task 16: Add scroll animations (fade-in on scroll)

**Files:**
- Modify: `css/style.css` — append animation styles
- Modify: `js/main.js` — add Intersection Observer for fade-in

- [ ] **Step 1: Append animation styles to `css/style.css`**

```css
/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Staggered delay for activity cards */
.activity-card:nth-child(1) { transition-delay: 0s; }
.activity-card:nth-child(2) { transition-delay: 0.1s; }
.activity-card:nth-child(3) { transition-delay: 0.2s; }
.activity-card:nth-child(4) { transition-delay: 0.3s; }
.activity-card:nth-child(5) { transition-delay: 0.4s; }
.activity-card:nth-child(6) { transition-delay: 0.5s; }

/* Staggered delay for highlight cards */
.highlight-card:nth-child(1) { transition-delay: 0s; }
.highlight-card:nth-child(2) { transition-delay: 0.1s; }
.highlight-card:nth-child(3) { transition-delay: 0.15s; }
.highlight-card:nth-child(4) { transition-delay: 0.2s; }
.highlight-card:nth-child(5) { transition-delay: 0.25s; }
.highlight-card:nth-child(6) { transition-delay: 0.3s; }

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
    .fade-in {
        opacity: 1;
        transform: none;
        transition: none;
    }
}
```

- [ ] **Step 2: Add Intersection Observer to `js/main.js`**

Append before the closing `})();`:

```javascript
    // --- Scroll fade-in animations ---
    // fade-in classes are added directly in HTML markup to avoid FOUC.
    // JS only observes and adds 'visible' class on scroll.
    var fadeElements = document.querySelectorAll('.fade-in');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(function (el) {
        observer.observe(el);
    });
```

- [ ] **Step 3: Verify in browser**

Expected: Elements fade in and slide up as you scroll. Activity cards stagger. Highlight cards stagger. Respects prefers-reduced-motion.

- [ ] **Step 4: Commit**

```bash
git add css/style.css js/main.js
git commit -m "feat: add scroll fade-in animations with Intersection Observer"
```

---

### Task 17: Final responsive polish and cross-browser check

**Files:**
- Modify: `css/style.css` — append any final responsive tweaks

- [ ] **Step 1: Review entire site at desktop (1440px), tablet (768px), and mobile (375px)**

Open browser dev tools and check each breakpoint. Look for:
- Text overflow or awkward wrapping
- Images not fitting their containers
- Touch targets too small on mobile (min 44px)
- Spacing that feels too tight or too loose
- Navbar hamburger working correctly
- Form fields usable on mobile

- [ ] **Step 2: Fix any issues found during responsive review**

Add tweaks to `css/style.css` as needed. Common fixes might include:
- Font size adjustments for very small screens
- Grid gap reductions on mobile
- Image height adjustments

- [ ] **Step 3: Verify smooth scroll works with navbar offset on all sections**

Click each nav link and verify the section scrolls to the correct position, offset by the navbar height.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: final responsive polish and cross-browser fixes"
```

---

### Task 18: Initialize git repository and create initial commit with all files

**Files:**
- All project files

Note: This task should run FIRST before all other commits if no git repo exists yet.

- [ ] **Step 1: Initialize git repo**

```bash
git init
```

- [ ] **Step 2: Create `.gitignore`**

```
.DS_Store
Thumbs.db
*.log
node_modules/
```

- [ ] **Step 3: Verify project structure**

```bash
ls -la
ls -la css/
ls -la js/
ls -la images/
```

Expected directory structure:
```
index.html
impressum.html
datenschutz.html
css/style.css
js/main.js
js/mailchimp.js
images/ (all stock + Tanafreida images)
docs/superpowers/specs/2026-03-16-glow-besties-website-design.md
docs/superpowers/plans/2026-03-16-glow-besties-website.md
.gitignore
```

- [ ] **Step 4: Stage and commit**

```bash
git add .gitignore
git commit -m "chore: add .gitignore"
```

---

## Task Execution Order

Since Task 18 (git init) must come first, and Task 1 (images) must come before visual verification of other tasks, the recommended order is:

1. **Task 18** — Initialize git repo
2. **Task 1** — Source images
3. **Task 2** — HTML skeleton
4. **Task 3** — CSS design system
5. **Task 4** — Navigation
6. **Task 5** — Hero section
7. **Task 6** — Über uns
8. **Task 7** — Activities
9. **Task 8** — Schedule
10. **Task 9** — Highlights
11. **Task 10** — Location
12. **Task 11** — Instagram
13. **Task 12** — CTA/Signup
14. **Task 13** — Footer
15. **Task 14** — Legal pages
16. **Task 15** — Mailchimp handler
17. **Task 16** — Scroll animations
18. **Task 17** — Final polish

**Parallelizable tasks (for subagent execution):**
- Tasks 6 + 7 can run in parallel (independent CSS sections)
- Tasks 8 + 9 can run in parallel (independent CSS sections)
- Tasks 11 + 13 + 14 can run in parallel (independent sections)
- Task 15 is independent of CSS tasks (JS only)
