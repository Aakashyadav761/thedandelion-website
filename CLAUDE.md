# CLAUDE.md — The Dandelion Resort Website

> Standing instructions for Claude Code. All details are set — ready for the first build session.

## Project Overview
A showcase website for **The Dandelion – Colonels' Jungle Resort** (referred to casually as "The Dandelion"), a jungle resort on the fringes (northern edge) of Dandeli forest, near Ramnagar town in Belgavi district, Karnataka, India — on the Bangalore–Goa highway near the Goa border. (Note: Dandeli town is a separate area inside the forest; the resort is on the forest's edge near Ramnagar, not in Dandeli town.) Its primary goal is to attract visitors and drive booking enquiries. Bookings in v1 are handled via WhatsApp deep links — there is NO payment processing or live availability engine yet. Use the full official name in page titles and SEO metadata; domain is theDandelion.in.

> **Content source:** All real copy, unit details, facilities, guest guidelines, and directions live in `resort-content.md`. Read it before building or seeding Sanity.

## Build Progress

| Page | Status | Last stable commit |
|------|--------|--------------------|
| Home | ✅ Complete | `c0f685d` |
| Accommodation | ✅ Complete | `c0f685d` |
| Activities & Facilities | ✅ Complete | `fd8daa8` |
| Around Us | ✅ Complete | `2231aad` |
| Jobs | ✅ Complete | `31e3242` |
| Contact Us | ✅ Complete | — (see latest) |
| Galleries | ✅ Complete | — (see latest) |
| Groups & Events | ✅ Complete | `361d679` |
| Corporate Offsites | ✅ Complete | `361d679` |

> **Stable baseline (Home + Accommodation):** commit `c0f685d` — signed off by owner.
> **V1 complete:** commit `9b38df5` — all 7 pages built and mobile-verified. Sanity not yet connected (placeholder credentials).
> **V2 — Sanity connected:** commit `34995fe` — Studio live at `/studio`, all text content (rates, descriptions, activities, attractions, jobs, site content) wired to Sanity. Images still hardcoded from `Pictures/` (to be moved to Sanity in the next pass).
> **V3 — Groups & Corporate pages:** commit `361d679` — Groups & Events and Corporate Offsites pages added; reopening banner, nav/footer updates.
> **Cleanup:** commit `371569b` — removed 105 Playwright screenshot files from root (~39 MB), `.playwright-mcp/` session logs folder (~4.7 MB), and unused default Next.js SVGs from `public/` (file, globe, next, vercel, window).
> **SEO pass:** commits `2254498`–`cee7f11` — Google Analytics 4 (`G-3YSTT1N5GT`) via `@next/third-parties`; Google Search Console verification file in `public/`; `app/sitemap.ts` (8 public pages); `app/robots.ts` (allow all, sitemap pointer); JSON-LD `LodgingBusiness` schema in `<head>`; Open Graph + Twitter Card metadata with OG image (`public/og-image.jpeg`); fixed Groups & Corporate titles to use layout template; curly apostrophe (U+2019) in all "Colonels'" instances in metadata.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **CMS:** Sanity (headless) — all content is editable via Sanity Studio
- **Images:** Always use the Next.js `<Image>` component for optimization
- **Assets:** Real resort photos and the **logo** live in the `Pictures/` folder (project root), organized into subfolders (Logo, Cottage, Hut, Jacuzzi Pool, Swimming pool, Barbeque Point, Restaurant, Reviews, Visiting card, plus Instagram square variants). See the folder→page map in `resort-content.md`. Use the logo in the header/footer, map each photo set to its page, and don't use stock placeholders where a real photo exists.
- **Maps:** Google Maps embed on the Contact Us page. Use this exact iframe (make it responsive — full width, ~450px tall, rounded corners to match the site):
  ```html
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.1035446364936!2d74.5419077!3d15.424961799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf17310991aa99%3A0xeace265f1e5fb716!2sThe%20Dandelion%20-%20Colonels%20Jungle%20Resort!5e0!3m2!1sen!2sin!4v1780556125962!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  ```
- **Forms:** Web3Forms (no backend) for the Jobs application form. Access key: `306cdf2b-c9bd-4015-9d39-b82d4d4c6525` (safe to expose in frontend code; it's an alias for the resort's email). Submissions go to Help@theDandelion.in. Free plan covers 250 submissions/month. File uploads are a Pro feature, so the form is TEXT-ONLY for v1 — see Jobs page below.
- **Analytics:** Google Analytics 4 via `@next/third-parties/google` — measurement ID `G-3YSTT1N5GT`. The `<GoogleAnalytics>` component is placed in `app/layout.tsx` inside `<body>`, after `<Footer />`.

## Commands
- `npm run dev` — start dev server (uses Webpack; see note below)
- `npm run build` — production build
- `npm run lint` — lint check
- `npx sanity dev` — run Sanity Studio locally (adjust if Studio is embedded)

## Environment notes (read before running npm or next)

**npm installs — always use `--legacy-peer-deps`.**
`next-sanity` does not yet formally support Next 16, so a plain `npm install` hits an ERESOLVE peer conflict. Always run:
```
npm install <packages> --legacy-peer-deps
```
Do NOT run `npm audit fix --force` — the deprecation warnings and audit findings are expected for a fresh Next/Sanity install and the forced fix will break things.

**Use Webpack, not Turbopack.**
The project root path contains a space (`D Drive/`) which causes Turbopack to mis-detect the workspace root and fail. The dev script is set to `next dev --webpack`. Never change it back to Turbopack or remove `--webpack`. If you need to add options to the dev script, keep `--webpack` in there.

## Site Structure
- **Home** — hero (tagline + logo), brief intro, highlight sections linking to Accommodation / Galleries / Activities / Around Us, and an **"Our Reviews" section just before the footer** showing Google review screenshots from `Pictures/Reviews/` (display them in a tidy responsive grid or carousel; the folder is empty for now, so build the section to populate from those images when added).
- **Accommodation** — v1 shows the two finished unit types only: Cottages (×3) and Huts (×5), pulled from Sanity; each has an "Enquire on WhatsApp" button. Build it data-driven so future types (Suites, Executive Rooms) can be added later without rework. Copy, rates, occupancy, and check-in/out are in `resort-content.md`. (Nav label: "Accommodation", not "Rooms".)
- **Galleries** — photo galleries with a lightbox
- **Activities & Facilities** — in-house offerings, pulled from Sanity
- **Around Us** — nearby local attractions, pulled from Sanity
- **Contact Us** — the resort's story / ideology + contact details + embedded map
- **Jobs** — current openings (pulled from Sanity; roles: Manager, Assistant Manager, Chef, Housekeeping, Restaurant Staff, Maintenance Staff) + a Web3Forms application form. Fields ONLY: name, email, phone, role (dropdown of the roles above), and a message box. No file upload — include a line telling applicants to email their CV to Help@theDandelion.in.

## WhatsApp Enquiry Convention
- WhatsApp number (full international, India): `917764006404`
  - This is the `wa.me` format: country code `91` + `7764006404`, no `+` and no leading `0`.
- Every booking/enquiry button opens a `wa.me` link:
  `https://wa.me/917764006404?text=<encoded message>`
- Pre-fill the message with context (e.g. the room or activity name) so follow-up is fast.
- Example: "Hi, I'd like to enquire about the [Room Name]."

## Content Model (Sanity Schemas)
- **Room (accommodation unit):** name, unitType (Huts / Cottages / Suites / Executive Rooms — live: Cottages, Huts; coming later: Suites, Executive Rooms), description (optional — some pending), rate (optional — some pending; when empty, show "Rates on enquiry"), rateIncludes (e.g. "room + breakfast"), maxAdults, extraPersonCharge (optional), images[], isPublished (only show finished units), whatsappMessage (base text)
- **Activity/Facility:** name, description, image, category
- **GalleryImage:** image, caption, category
- **Attraction (Around Us):** name, description, image, distance, optional mapLink
- **Job:** title (e.g. Manager, Assistant Manager, Chef, Housekeeping, Restaurant Staff, Maintenance Staff), location, type (full-time / part-time / seasonal), description, isOpen
- **SiteContent (singleton):** resort story / ideology, contact details, address, social links

## Brand & Design
- **Vibe:** lush tropical jungle — botanical, organic, immersive. Deep greens, natural textures, and abundant foliage imagery.
- **Fonts:** Headings — Cormorant Garamond (Google Fonts). Body, labels & buttons — Mulish (Google Fonts).
  - Cormorant Garamond is a display serif: use it for headings ONLY, never for body text or long paragraphs.
  - Load both via Google Fonts; include weights Cormorant Garamond 400/500/600 and Mulish 400/500/600.
- Prioritize large, high-quality imagery and fast load times.

### Color Palette
Use these exact values. Color encodes role — roughly a 60/30/10 split (sage / earthen / gold).

| Role | Hex | Use for |
|------|-----|---------|
| Primary — sage | `#7C8A5E` | Nav bar, large surfaces, primary fills (~60%) |
| Secondary — earthen | `#B79A6A` | Section backgrounds, borders, support (~30%) |
| Secondary light tint | `#EDE4D3` | Pale earthen cream for light section backgrounds (text-safe) |
| Accent / headings — gold | `#C9A227` | Headings, "Enquire" buttons, badges (~10%) |

### Text Color Rules
- **On gold** (buttons/badges): use dark brown `#412402` — NEVER white, gold is too light for white text.
- **Body & secondary text** (on cream/light backgrounds): deep earthen brown `#6E5B3A`, not pure black — reads more naturally with this warm palette.
- **Gold headings on a light background**: use the darker gold `#8A6D12`, since bright `#C9A227` is hard to read at small sizes.
- Aim for WCAG AA contrast on all text. When in doubt, darken the text color.

### Button Convention
- Primary call-to-action ("Enquire now") = gold `#C9A227` background, `#412402` text.
- If gold is reserved for headings only, fall back to solid sage `#7C8A5E` buttons with white text.

## Conventions
- TypeScript, strict mode, no `any`
- Server components by default
- Keep all editable content in Sanity — never hard-code rates, room details, jobs, or attractions
- Mobile-first and responsive
- SEO: meaningful page titles, meta descriptions, and alt text on every image
- Define the palette and fonts as Tailwind theme tokens (e.g. `bg-sage`, `text-gold`, `font-heading`) rather than scattering raw hex values

## Design Workflow
- **Reference site (primary inspiration):** **The Machan**, Lonavala — https://www.themachan.com — a nature-immersive eco-luxury resort. At the start of the build, use Playwright MCP to open it and take screenshots for visual reference. Emulate the *qualities*, not the literal design (don't copy their layout, colors, fonts, or content):
  - Photo-forward, immersive imagery — large, often full-bleed nature photos that carry each section.
  - Calm, unhurried pacing — generous whitespace, plenty of breathing room, nothing cramped.
  - "Designing with nature" feel — warm, organic, premium-but-rustic; natural materials and textures.
  - Storytelling tone — lead with experience and place, not hard-sell.
  - Each accommodation type given its own distinct, characterful treatment.
  - Apply all of this through The Dandelion's OWN identity: sage/earthen/gold palette, Cormorant Garamond + Mulish, and the real `Pictures/` photos.
- **Real assets:** Resort photos and the logo are in `Pictures/` (project root). These are the actual images for the site — use them, not stock placeholders.
- **Reference images (optional):** If a `design-references/` folder exists, it holds extra visual inspiration — look at these for mood, spacing, and density. Don't confuse these with the real photos in `Pictures/`.
- **Screenshot and iterate:** After building or changing any page, view the rendered result (via Playwright MCP) and self-correct — check spacing, alignment, that the gold accent stands out, and that headings use Cormorant Garamond. Don't consider a page "done" from code alone.
- **Check both modes:** Verify layouts at mobile and desktop widths, and confirm text contrast meets WCAG AA against the warm palette.

## SEO Setup
All SEO infrastructure is in place. Do not duplicate or override these in individual pages unless adding page-specific overrides.

- **Canonical domain:** `https://www.thedandelion.in` — `metadataBase` in `app/layout.tsx` is set to this.
- **Title template:** `"%s | The Dandelion – Colonels’ Jungle Resort"` — all pages must export a short `title` string (e.g. `"Accommodation"`) and the suffix is appended automatically. Never set a full standalone title on a page.
- **Sitemap:** `app/sitemap.ts` — includes 8 public pages (`/`, `/accommodation`, `/activities`, `/around-us`, `/galleries`, `/contact`, `/groups`, `/corporate`). Excludes `/jobs`, `/privacy-policy`, `/terms-and-conditions`.
- **Robots:** `app/robots.ts` — allows all crawlers, sitemap at `https://www.thedandelion.in/sitemap.xml`.
- **Open Graph + Twitter Card:** Defined in root layout metadata. OG image at `public/og-image.jpeg` (1200×630), served from `https://www.thedandelion.in/og-image.jpeg`.
- **JSON-LD:** `LodgingBusiness` schema injected via `<script type="application/ld+json">` in `<head>` in `app/layout.tsx`.
- **Google Search Console:** Verification file at `public/googleaae50644923b21c4.html`.
- **Apostrophe convention:** All instances of "Colonels'" in metadata use the Unicode right single quotation mark `’` (not a straight apostrophe `'`) to avoid HTML entity encoding in social previews.
- **Reference doc:** `SEO.md` in the project root lists every page's current title and description.

## Out of Scope for v1
- Online payments
- Live availability / calendar booking
- User accounts / login
- Custom backend — the Jobs application form uses a third-party form service instead
