/**
 * Seed script — populates Sanity with content from resort-content.md.
 * Run from project root: node scripts/seed.mjs
 * Requires SANITY_API_WRITE_TOKEN, NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET in .env.local
 */

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env.local manually (no dotenv dependency needed)
const envPath = resolve(__dirname, "../.env.local");
const envVars = Object.fromEntries(
  readFileSync(envPath, "utf8")
    .split("\n")
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => l.split("=").map((s) => s.trim()))
    .filter(([k, v]) => k && v)
    .map(([k, ...rest]) => [k, rest.join("=")])
);

const projectId = envVars["NEXT_PUBLIC_SANITY_PROJECT_ID"];
const dataset = envVars["NEXT_PUBLIC_SANITY_DATASET"];
const token = envVars["SANITY_API_WRITE_TOKEN"];

if (!projectId || !dataset || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, or SANITY_API_WRITE_TOKEN in .env.local");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2024-01-01", useCdn: false });

// ── Helpers ────────────────────────────────────────────────────────────────

async function upsert(doc) {
  // createOrReplace keyed on _id so re-runs are idempotent
  await client.createOrReplace(doc);
  console.log(`  ✓ ${doc._type}: ${doc.name ?? doc.title ?? doc._id}`);
}

// ── Activities & Facilities (from resort-content.md "In-House Activities") ──

const activities = [
  {
    _id: "activity-jungle-walks",
    _type: "activity",
    name: "Guided Jungle & Nature Walks",
    description:
      "Explore the forest edge with the resort's local guides. Optional coffee at the viewpoint — ₹100 per person.",
    category: "Nature & Wildlife",
    isChargeable: false,
  },
  {
    _id: "activity-birdwatching",
    _type: "activity",
    name: "Birdwatching",
    description:
      "The surrounding forest is rich in birdlife, including the striking hornbill. A rewarding experience at any time of day.",
    category: "Nature & Wildlife",
    isChargeable: false,
  },
  {
    _id: "activity-swimming-pool",
    _type: "activity",
    name: "Swimming Pool",
    description:
      "A full-size swimming pool with a separate baby pool — perfect for a lazy afternoon in the sun.",
    category: "Pool & Water",
    isChargeable: false,
  },
  {
    _id: "activity-jacuzzi-pool",
    _type: "activity",
    name: "Jacuzzi Pool",
    description: "Unwind in the jacuzzi pool, set amidst the greenery.",
    category: "Pool & Water",
    isChargeable: true,
    priceNote: "₹900 per hour",
  },
  {
    _id: "activity-machaan",
    _type: "activity",
    name: "Machaan",
    description:
      "An elevated platform for forest and wildlife viewing — a quiet spot to watch wildlife and take in the canopy.",
    category: "Nature & Wildlife",
    isChargeable: false,
  },
  {
    _id: "activity-barbeque",
    _type: "activity",
    name: "Self-Barbeque Evenings",
    description:
      "Grill your own spread at the on-site barbeque point. Priced by the items ordered for grilling.",
    category: "Recreation",
    isChargeable: true,
    priceNote: "Priced by items ordered",
  },
  {
    _id: "activity-indoor-games",
    _type: "activity",
    name: "Indoor Games",
    description: "A selection of indoor games — ideal for a relaxed evening in.",
    category: "Recreation",
    isChargeable: false,
  },
  {
    _id: "activity-outdoor-games",
    _type: "activity",
    name: "Outdoor Games",
    description: "Badminton, volleyball, and pool games for guests of all ages.",
    category: "Recreation",
    isChargeable: false,
  },
  {
    _id: "activity-dandelion-kitchen",
    _type: "activity",
    name: "Dandelion Kitchen",
    description:
      "The resort's own restaurant, serving à la carte meals. Room rate includes breakfast; all other meals are charged separately.",
    category: "Dining",
    isChargeable: true,
    priceNote: "À la carte",
  },
];

// ── Nearby Attractions (from resort-content.md "Around Us") ─────────────────

const attractions = [
  {
    _id: "attraction-kali-river",
    _type: "attraction",
    name: "River Activities on the Kali River",
    description:
      "White-water rafting, kayaking, coracle and boat rides, and ziplining / river crossing at the river area. Rapids are best from October to March. The resort assists with booking free of cost.",
    distance: "~40–50 min drive",
  },
  {
    _id: "attraction-jungle-safari",
    _type: "attraction",
    name: "Jungle Safari — Dandeli Wildlife Sanctuary",
    description:
      "A safari through the Dandeli Wildlife Sanctuary. Tickets are bought at the counter on site (not pre-booked by the resort). The resort assists with planning free of cost.",
    distance: "~1 hr 20 min drive",
  },
  {
    _id: "attraction-syntheri-rocks",
    _type: "attraction",
    name: "Syntheri Rocks",
    description:
      "A striking natural rock formation — one of the notable landmarks of the Dandeli region.",
    distance: "~1 hr 40 min drive",
  },
  {
    _id: "attraction-hampi",
    _type: "attraction",
    name: "Hampi",
    description:
      "UNESCO World Heritage ruins of the Vijayanagara empire — one of India's most extraordinary historical sites. Suitable as a longer day trip.",
    distance: "Several hours drive",
  },
  {
    _id: "attraction-badami",
    _type: "attraction",
    name: "Badami Caves",
    description:
      "Rock-cut cave temples dating to the Chalukya period — remarkable examples of early Deccan architecture. Suitable as a longer day trip.",
    distance: "Several hours drive",
  },
  {
    _id: "attraction-pattadakal",
    _type: "attraction",
    name: "Pattadakal",
    description:
      "UNESCO World Heritage temple complex featuring a stunning group of 8th-century monuments. Suitable as a longer day trip.",
    distance: "Several hours drive",
  },
];

// ── Jobs (from resort-content.md "Jobs / Careers") ──────────────────────────

const jobs = [
  { _id: "job-manager", title: "Manager", type: "full-time", location: "The Dandelion, Ramnagar", isOpen: true },
  { _id: "job-assistant-manager", title: "Assistant Manager", type: "full-time", location: "The Dandelion, Ramnagar", isOpen: true },
  { _id: "job-chef", title: "Chef", type: "full-time", location: "The Dandelion, Ramnagar", isOpen: true },
  { _id: "job-housekeeping", title: "Housekeeping", type: "full-time", location: "The Dandelion, Ramnagar", isOpen: true },
  { _id: "job-restaurant-staff", title: "Restaurant Staff", type: "full-time", location: "The Dandelion, Ramnagar", isOpen: true },
  { _id: "job-maintenance-staff", title: "Maintenance Staff", type: "full-time", location: "The Dandelion, Ramnagar", isOpen: true },
].map((j) => ({ ...j, _type: "job" }));

// ── Run ──────────────────────────────────────────────────────────────────────

console.log("\nSeeding Activities & Facilities...");
for (const doc of activities) await upsert(doc);

console.log("\nSeeding Nearby Attractions...");
for (const doc of attractions) await upsert(doc);

console.log("\nSeeding Jobs...");
for (const doc of jobs) await upsert(doc);

console.log("\nDone. All documents created/updated in Sanity.\n");
