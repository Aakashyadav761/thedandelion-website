# The Dandelion – Content Reference

> Source content for the website, taken from the official Profile & Factsheet. Claude Code: use this to populate pages and seed Sanity. Treat the write-ups as starting copy (polish for web, don't change facts). Verify items flagged ⚠ with the owner before publishing.

## Property Details
- **Name:** The Dandelion – Colonels' Jungle Resort
- **Address:** Village Chinchewadi, Taluka Khanapur, Dist Belgavi (Belgaum), Karnataka
- **Location:** Near **Ramnagar town**, on the Bangalore–Goa (Hubli) Highway; on the **fringes (northern edge) of Dandeli forest**. NOTE: Dandeli town is a separate area deep inside the forest — the resort sits on the forest's edge near Ramnagar, NOT in Dandeli town. Avoid copy implying the resort is in Dandeli town or inside the reserve.
- **Land area:** 11 acres
- **Staff:** 12 members
- **Units currently operational:** 8 (Cottages ×3, Huts ×5). Suites (×3) and Executive Rooms (×6) are in the pipeline — to be added to the site later.
- **Email:** Help@theDandelion.in
- **Phone / WhatsApp:** +91 7764006404
- **Website:** www.theDandelion.in

## Accommodation
(Page and nav label: **"Accommodation"**, not "Rooms".)

The four room types are: **Huts, Cottages, Suites, Executive Rooms.**

**Check-in: 2:00 PM · Check-out: 11:00 AM** (applies to all units).

### Live now — build into the v1 Accommodation page

**Cottage** — ₹6,600 / night (incl. GST), room with breakfast. Flat rate. Occupancy: 2 adults. Additional person ₹1,000 (extra bed + breakfast).
The heart of the resort, our Cottages are made for those with a romantic connection to nature. Shaped by the season and the space around them, each offers complete privacy and comfort — an open layout with generous seating and plenty of room to spread out and unwind together.

**Hut** — ₹4,500 / night (incl. GST), room with breakfast. Flat rate. Occupancy: 2 adults maximum.
Our Huts are the easygoing choice — relaxed, affordable, and full of character. Thoughtfully crafted to blend rustic charm with modern comfort, each carries a warm, homely calm that makes it easy to slow right down and stay a while.

### Coming soon — add to the site later, NOT in v1
- **Suites** (3) — in pipeline. ⚠ No write-up yet — ask owner for copy.
- **Executive Rooms** (6) — in pipeline. ⚠ No write-up yet — ask owner for copy.

Build the Rooms page and Sanity so new unit types can be added later without rework (data-driven from the `unitType` field).

> ⚠ **Pending content:** Cottage and Hut rates and descriptions are FINALIZED above. Still pending: write-ups for Suites and Executive Rooms (not live yet). Treat rate as optional in the schema for future types — where missing, show "Rates on enquiry" rather than a blank or ₹0. Don't invent rates or write-ups.

## Facilities on Site
- Restaurant — **Dandelion Kitchen** (1)
- Swimming Pool (1, includes a baby pool)
- Additional pools (2)
- Machaan (1) — an elevated forest viewing platform
- Water body (1)
- Barbeque point (1)
- Local guides (2)

## In-House Activities & Facilities page (CONFIRMED)
- **Guided jungle & nature walks** with the resort's local guides. Optional coffee at the viewpoint — ₹100 / person.
- **Birdwatching** — the surrounding forest is rich in birdlife, including hornbills.
- **Swimming pool**, with a separate baby pool.
- **Jacuzzi pool** — chargeable, ₹900 / hour.
- **Machaan** — an elevated platform for forest and wildlife viewing.
- **Self-barbeque evenings** at the on-site barbeque point — chargeable as per menu (priced by the items ordered for grilling).
- **Indoor games.**
- **Outdoor games** — badminton, volleyball, pool games.
- **Dining at Dandelion Kitchen** (restaurant) — chargeable, à la carte.

(Note: room rate includes breakfast; other dining and the items above marked chargeable are extra.)

## Dandelion Kitchen — the restaurant (CONFIRMED 1 Oct 2026)

Dandelion Kitchen is the resort's restaurant and, since 29 Sept 2026, a **separately listed
Google business** (category: Restaurant). It has its own page at `/kitchen`, aimed at drivers
on the Bangalore–Goa highway rather than at holiday researchers.

**Positioning line (keep this in the copy):** *a garden setting rather than a roadside stop.*

### Hours — two different things, both correct
- **Opening hours: 08:00–21:30, seven days, continuous.** This is the blanket window. It is
  what goes on the Google Business Profile and in the `Restaurant` JSON-LD `openingHours`,
  and the two must match.
- **Main serving hours** (full kitchen running): breakfast 08:00–10:00, lunch 12:00–15:30,
  dinner 19:00–21:30. **Page copy only — never structured data.**
- Between services there is always tea, coffee and snacks. Guests typically call ahead or
  simply walk in.
- **Why blanket hours:** listing only the three windows makes the kitchen look *closed* to
  someone checking at 16:30, losing more highway traffic than the precision gains. Deliberate
  — do not "correct" it to the three windows.

### Confirmed facts
- Vegetarian and non-vegetarian, cooked fresh and to order. **À la carte — no price per head.**
- **No alcohol served.** State plainly; for families it reads as reassurance.
- Takeaway available (food can be packed). Walk-ins welcome, no booking. Parking on site.
- Outdoor, open-air setting on the 11 forested acres.
- **Seating capacity is deliberately NOT published** — stating ~30 would cap enquiries from
  larger groups.

### Map pin — deliberately different from the resort's
- Kitchen: **15.425642, 74.542537** (used on `/kitchen`)
- Resort: 15.4249617, 74.5419077 (used in the Contact page Maps embed)
Both are inside the same property. They differ because the Kitchen is its own Google listing.
Not an error — do not reconcile them.

### Menu
The menu lives in **Sanity** (`menuSection` documents), not in this file and not as page
constants — it carries ~60 prices, and CLAUDE.md's rule is never to hard-code rates. Edit it
at `/studio`. Initial data was seeded from the owner's menu PDF by
`scripts/seed-kitchen-menu.mjs` (re-running that script overwrites Studio edits).

Transcription deviations from the owner's PDF, all agreed 1 Oct 2026:
- "Ice Bucket (₹135)" **dropped** — sat awkwardly beside "no alcohol served".
- "Sandwitches" → "Sandwiches" (typo in source).
- "Onion ring" → "Onion Rings"; "Kuchumbar" → "Kachumber"; "Zeera Aloo" → "Jeera Aloo"
  (the source menu already spells the rice "Jeera").
- **Dandelion Chicken Curry (₹575)** flagged `isSignature` — the only house-named dish.

### Still open
- No food photographs yet. The page deliberately uses **real photos of the setting** plus
  **botanical line art** — never stock food imagery, which would set an expectation the plate
  has to meet.
- Drive time from Dandeli town is unverified and omitted from the directions section.
- The Google listing has **no phone number on it** — add +91 7764006404.

## Around Us — Nearby Attractions & Adventure (CONFIRMED)
The resort sits on the edge of Dandeli forest in the Western Ghats, on the Kali River — a well-known nature-and-adventure region. **The resort assists with booking these free of cost**, except the jungle safari (tickets are bought at the counter on site).

- **River-based activities on the Kali River** — white-water rafting, kayaking, coracle / boat rides (and ziplining / river crossing at the river area). ~40–50 min drive. Rapids best Oct–Mar.
- **Jungle safari** in the Dandeli Wildlife Sanctuary — ~1 hr 20 min drive. Tickets bought at the counter (not pre-booked by the resort).
- **Syntheri Rocks** — ~1 hr 40 min drive.
- Birdwatching is also superb across the region (200+ species).

(Additional area spots — viewpoints, Supa Dam, waterfalls — can be added later if the resort wants to feature them.)

### Heritage day trips (farther afield)
Notable North Karnataka heritage sites guests can visit on a longer day trip (drive times to be confirmed — these are several hours away, not "nearby"):
- **Hampi** — UNESCO World Heritage ruins of the Vijayanagara empire.
- **Badami Caves** — rock-cut cave temples.
- **Pattadakal** — UNESCO World Heritage temple complex.

**Images:** For the Around Us / heritage attractions only, photos may be sourced from the internet (use royalty-free / properly licensed images, e.g. Unsplash, Wikimedia Commons). For everything else (rooms, property, activities), use the resort's own photos from `Pictures/`.

## Home Hero Tagline (FINAL)
**"Your quiet corner of the Western Ghats."** — use this as the hero tagline. No secondary tagline line.

## Philosophy / About (for Contact Us "about" + Home intro)
At The Dandelion, we believe the best stays are the ones that feel personal. Tucked on the fringe of Dandeli's forest in the Western Ghats, we offer a natural, unmanicured wilderness where genuine warmth matters as much as the birdsong. From guided jungle walks to slow evenings around the barbeque, everything is looked after personally — so that what begins as a visit becomes a memory you carry home.

## Property Write-up (for Home hero / About)
The Dandelion – Colonels' Jungle Resort is a highly rated jungle resort offering a natural, non-manicured ambience with a richly developed ecosystem. Personalized service and attention to detail ensure an unmatched wilderness experience. Set on the fringe (northern edge) of Dandeli forest near Ramnagar, its lush green environs showcase an abundance of flora and fauna, especially birds. Aloof from civilization, a seasonal river nearby hosts grazing deer, root-digging wild hog, and migrating elephant herds, along with sightings of hornbills.

## Know Before You Go (guest guidelines)
Surface these on the site (a section on Contact Us, or its own small page). Keep the friendly, conservation-minded tone:
- Do not enter the surrounding forest unaccompanied — staff are happy to guide jungle walks.
- Children must be supervised by an adult at all times.
- Use the bins provided; carry non-biodegradable waste back out. Litter takes years to degrade and can harm animals.
- Torches are provided in rooms; staff will escort guests around the property after dark.
- Wear protective shoes and clothing in the jungle and at night.
- First-aid kits are on site, but carry your own required medication and insect repellent.
- No music or loud noise in public/open areas.
- Keep phones on silent/vibrate. Connectivity is limited — only Jio and Airtel get good signal.
- Wi-Fi is available in public areas only; ask Reception.
- Books and games are available at the retreat.

## How to Reach
- **By road:** On the Bangalore–Goa Highway, 7 km from Ramnagar, in Nagargali gram panchayat — 500 m off the highway.
- **Nearest airports:** Belgaum, Hubballi, and Goa.
- **Nearest railhead:** Londa Junction.

## Jobs / Careers page
Current open roles (use these as the role dropdown in the application form):
- Manager
- Assistant Manager
- Chef
- Housekeeping
- Restaurant Staff
- Maintenance Staff

Application form: name, email, phone, role (dropdown above), message. No file upload — line under the form: "Please email your CV to Help@theDandelion.in." Submissions go via Web3Forms to Help@theDandelion.in.

## Galleries page
Gallery will feature selected photos chosen by the owner later. For v1, build the gallery layout + lightbox and leave it ready to populate from `Pictures/` (or Sanity). Categories TBD by owner.

## Image notes (site-wide)
Real photos and the logo live in the `Pictures/` folder, organized into subfolders. Map them to the site as follows:

| Folder | Use on |
|--------|--------|
| `Logo/` | Site header + footer logo |
| `Cottage/` | Cottage cards/detail on Accommodation; galleries |
| `Cottage - Instagram/` | Square-format Cottage images — use where a square/social crop fits |
| `Hut/` | Hut cards/detail on Accommodation; galleries |
| `Hut - Instagram/` | Square-format Hut images — use where a square/social crop fits |
| `Jacuzzi Pool/` | Activities & Facilities (jacuzzi); galleries |
| `Swimming pool/` | Activities & Facilities (pool); galleries |
| `Barbeque Point/` | Activities & Facilities (barbeque); galleries |
| `Restaurant/` | Dandelion Kitchen on Activities; galleries |
| `Reviews/` | **Home "Our Reviews" section** — Google review screenshots (populated; render these) |
| `Visiting card/` | Source of contact details; can also be shown on Contact Us |

- Internet images allowed ONLY for the Around Us / heritage attractions (Hampi, Badami, Pattadakal, etc.) — use royalty-free / licensed sources.
- Where a photo isn't available yet, leave the image blank/placeholder for now — do not invent or substitute unrelated stock.

## Home "Our Reviews" section
- Placement: a dedicated section on the Home page, just **before the footer**.
- Content: screenshots of Google reviews from `Pictures/Reviews/`.
- Display: a clean, responsive grid or simple carousel of the screenshot images, headed "Our Reviews" (or "What Our Guests Say"). Keep it on-brand (sage/earthen/gold, rounded corners).
- The screenshots are in place in `Pictures/Reviews/` — render them. (If the folder is ever empty at build time, hide the section gracefully rather than showing an empty block.)
