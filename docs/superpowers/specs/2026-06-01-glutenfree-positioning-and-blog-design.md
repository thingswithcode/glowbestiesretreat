# Design: Gluten-Free Positioning + Bilingual Blog (GEO/SEO)

Date: 2026-06-01
Status: Approved (pending spec review)

## Goal

Two connected outcomes for the Glow Besties Retreats site:

1. **Make "fully gluten-free / celiac-friendly" a visible positioning pillar**, not a buried detail.
2. **Add a bilingual (EN + DE) blog** built for SEO and GEO (Generative Engine Optimization), targeting the German-speaking market (DACH), so the brand gets found through search engines and AI systems.

Hard constraints (from project conventions):
- No build step, no framework, no package manager. Plain hand-authored HTML/CSS/vanilla JS.
- No em dashes anywhere in copy or code.
- CSS changes require bumping `css/style.css?v=N` in every HTML file.
- Nav and footer are duplicated per page (no shared layout); changes must be replicated.

## Key architectural decision: real per-language pages (Approach A)

The existing i18n system swaps text client-side via JavaScript (`js/i18n.js`); German text is NOT in the HTML source. That is acceptable for nav/footer but unacceptable for a DACH-targeted blog, because search engines and AI crawlers often read only the static HTML and do not execute JS. German blog content injected by JS would be effectively invisible to the exact systems we want to reach.

**Decision:** Each blog article is authored as a real, standalone HTML file per language, with the German text physically present in the source. Articles in EN and DE are linked to each other with `hreflang` tags. The site-wide i18n.js toggle continues to handle nav/footer on these pages.

Rejected alternatives:
- **Approach B (JS toggle for article bodies):** fails the DACH SEO/GEO goal. Rejected.
- **Approach C (Markdown + static-site-generator build):** violates the no-build-step constraint. Rejected.

## Part 1: Gluten-free positioning

### Homepage (`index.html`)
- Add a new calm, single-purpose section dedicated to gluten-free, placed in the existing flow (proposed: after the "What you'll experience" section or near the intro). Content: short editorial statement that the entire retreat is 100% gluten-free, framed as quality and enjoyment rather than restriction, with a discreet visual badge (e.g. "100% Gluten-Free"). Founder credibility hook: Leonie lives with celiac disease.
- Add a gluten-free line to the hero trust area.
- All new copy gets `data-i18n` keys with matching entries in `js/i18n.js`.

### Retreat page (`retreats.html`)
- Add a clear "100% Gluten-Free" signal at the quick-facts / hero level so it is visible before the expandable content.
- Strengthen the existing Nourishment / food section copy: lead with the fully gluten-free promise plus the lived-experience credibility (Leonie / celiac).

### About page (`about.html`)
- Leonie's founder story already covers celiac and the gluten-free promise. Keep, optionally tighten wording. No structural change required.

### Tone
- No "Verzicht" framing. Quality, balance, enjoyment, no compromise. Consistent with current voice.

## Part 2: Blog structure

### Files and URLs
- `blog.html` (English blog index) at site root.
- `blog/de/index.html` (German blog index).
- Article files, one per language. Proposed layout:
  - English: `blog/<slug>.html`
  - German: `blog/de/<slug>.html`
- Slugs are descriptive and keyword-aligned per language.

### Navigation
- Add a nav link labeled **"Journal"** to all 7 existing pages (nav is duplicated per page, so update each). Add matching footer link. Add `data-i18n` key (e.g. `nav.journal`) with DE translation.

### Article template
- Reuse the existing design system (Cormorant Garamond + Jost, the site color tokens, existing section/container classes). New blog-specific CSS added to `css/style.css` (then bump `?v=N` everywhere).
- Template structure per article: hero/title block, meta (date, reading context), body with real semantic headings (h1/h2/h3) and lists, an FAQ block, a closing CTA back to the retreat/waitlist, and a language switch link to the other-language version.

### Bilingual linking
- Every article and index page carries `hreflang` alternate tags pointing to its counterpart, plus a self-referencing canonical.
- A visible language switch on each blog page links to the translated version.

## Part 3: Initial articles (5-6, each EN + DE)

DACH keyword-aligned topics, approved:
1. Gluten-free wellness retreat in the Alps - what to look for. (DE: Glutenfreies Wellness-Retreat in den Alpen - worauf es ankommt)
2. Traveling with celiac disease - how a fully gluten-free retreat works. (DE: Reisen mit Zoeliakie - wie ein komplett glutenfreies Retreat funktioniert)
3. Recovery for high performers - why rest is not a luxury. (DE: Recovery fuer Leistungsmenschen - warum Pausen kein Luxus sind)
4. Montafon as a place to reset - why the Alps work for a real break. (DE: Montafon als Rueckzugsort - warum die Alpen perfekt fuer einen Reset sind)
5. Enjoy gluten-free instead of going without - nutrition at the retreat. (DE: Glutenfrei geniessen statt verzichten - Ernaehrung im Retreat)
6. (optional) Women-only retreat - why it makes a difference. (DE: Women-only Retreat - warum es einen Unterschied macht)

Each article: drafted by Claude, reviewed and approved by the founders before publish. Each is self-contained, factual, well-structured, and includes a short FAQ. Articles cross-link to each other and to the retreat page where natural.

## Part 4: GEO/SEO foundation

Applied site-wide and to the blog. This is what drives discoverability by search engines and AI systems.

### Structured data (JSON-LD)
- `Organization` on all pages (brand, logo, social profiles).
- `Event` for The Alpine Reset (name, date 2026-05-29/31, location Tanafreida/Montafon).
- `BlogPosting` on each article (headline, author, datePublished, inLanguage).
- `FAQPage` for the FAQ blocks (AI systems readily cite Q&A content).

### Meta and crawl
- Clean per-page `meta description`, Open Graph + Twitter card tags for social/AI previews.
- `canonical` + `hreflang` on all bilingual pages.
- `robots.txt` at site root.
- Updated `sitemap.xml` listing all pages including blog index and every article (both languages), with `hreflang` alternates.

### Content quality signals (E-E-A-T)
- Real semantic HTML (headings, lists), no layout-only markup for content.
- Author/expertise framing: Leonie's lived celiac experience as a genuine expertise signal.
- Self-contained, citable statements rather than vague marketing phrasing.

## Out of scope (YAGNI)
- No comments, no search, no tags/categories system, no pagination (revisit when post count is large).
- No CMS or admin UI. New posts are added by hand from the template.
- No automated DE translation pipeline. Translations are authored alongside the EN draft.

## Maintenance note
Because there is no shared layout, every new page duplicates nav/footer by hand, and any nav/footer change must be applied across all pages (now including blog pages). This is the accepted tradeoff of the no-build-step approach. The blog grows by copying the article template.

## Suggested phasing for implementation
1. GEO/SEO foundation + gluten-free positioning on existing pages (fast, high value, no new page type).
2. Blog gerust: nav link, blog CSS, EN + DE index pages, article template.
3. Article content: draft + translate the 5-6 articles, wire structured data, sitemap, hreflang.
4. Cache-bust (`?v=N`), final review, commit, push (so Netlify deploys).
