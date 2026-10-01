/**
 * Seed script — populates the Dandelion Kitchen menu into Sanity.
 * Source: owner-supplied "Menu .pdf" (1 Oct 2026).
 * Run from project root: node scripts/seed-kitchen-menu.mjs
 *
 * Idempotent: uses createOrReplace keyed on stable _ids, so re-runs overwrite
 * rather than duplicate. Editing prices afterwards should be done in Sanity
 * Studio (/studio), NOT here — re-running this script would revert them.
 */

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

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
  console.error("Missing Sanity env vars in .env.local");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2024-01-01", useCdn: false });

// ── Menu data ──────────────────────────────────────────────────────────────
// Transcribed from the owner's menu PDF. Deviations, all agreed 1 Oct 2026:
//   • "Ice Bucket (INR 135)" dropped — sat awkwardly beside "no alcohol served".
//   • "Sandwitches" → "Sandwiches" (typo in source).
//   • "Kuchumbar" → "Kachumber", "Zeera Aloo" → "Jeera Aloo" (the source menu
//     already spells the rice "Jeera", so this is internal consistency).
//   • "Onion ring" → "Onion Rings".
//   • Dandelion Chicken Curry flagged isSignature — the only house-named dish.

const sections = [
  {
    id: "menu-cold-beverages",
    title: "Cold Beverages",
    order: 10,
    note: "All mocktails are non-alcoholic.",
    items: [
      ["Mineral Water Bottle", 45, true],
      ["Chilled Aerated Beverages", 120, true],
      ["Fresh Lime (Soda / Water)", 120, true],
      ["Mojito (Classic / Cucumber / Mint)", 155, true],
      ["Cold Coffee", 155, true],
      ["Cold Coffee with Ice Cream", 195, true],
    ],
  },
  {
    id: "menu-hot-beverages",
    title: "Hot Beverages",
    order: 20,
    items: [
      ["Tea (Classic, Ginger, Black, Lemon)", 55, true],
      ["Coffee", 75, true],
    ],
  },
  {
    id: "menu-breakfast",
    title: "Breakfast",
    order: 30,
    items: [
      ["Choice of Paratha", 125, true],
      ["Poha", 125, true],
      ["Idli & Sambar", 125, true],
      ["Choice of Egg", 125, false],
      ["Sandwiches (Veg)", 125, true],
      ["Bread, Butter & Jam", 125, true],
    ],
  },
  {
    id: "menu-appetizers",
    title: "Appetizers",
    order: 40,
    items: [
      ["Paneer (Salt & Pepper)", 325, true],
      ["Chilli Paneer", 325, true],
      ["Paneer Manchurian", 325, true],
      ["Chilli Potatoes", 275, true],
      ["Onion Rings", 275, true],
      ["Baby Corn & Mushroom (Salt & Pepper)", 355, true],
      ["Mushroom Chilli", 355, true],
      ["Chilli Chicken", 325, false],
      ["Egg Pakora", 275, false],
    ],
  },
  {
    id: "menu-salads",
    title: "Salads",
    order: 50,
    items: [
      ["Green Salad", 125, true],
      ["Kachumber Salad", 135, true],
    ],
  },
  {
    id: "menu-curries-veg",
    title: "Indian Curries — Vegetarian",
    order: 60,
    items: [
      ["Choice of Paneer", 325, true],
      ["Jeera Aloo", 225, true],
      ["Seasonal Vegetable", 295, true],
    ],
  },
  {
    id: "menu-dal",
    title: "Dal",
    order: 70,
    items: [
      ["Dal Makhani", 325, true],
      ["Masala Dal Fry", 275, true],
    ],
  },
  {
    id: "menu-curries-nonveg",
    title: "Indian Curries — Non-Vegetarian",
    order: 80,
    note: "Mutton and seafood on request.",
    items: [
      ["Butter Chicken (With Bone / Boneless)", 425, false],
      ["Kadhai Chicken", 425, false],
      ["Dandelion Chicken Curry", 575, false, true],
      ["Egg Curry", 325, false],
    ],
  },
  {
    id: "menu-rice",
    title: "Rice",
    order: 90,
    items: [
      ["Curd Rice", 215, true],
      ["Jeera Rice", 275, true],
      ["Steamed Rice", 175, true],
    ],
  },
  {
    id: "menu-roti",
    title: "Roti",
    order: 100,
    items: [
      ["Tawa Roti", 25, true],
      ["Tawa Butter Roti", 35, true],
      ["Paratha (Ghee)", 45, true],
      ["Stuffed Paratha (Aloo, Onion, Gobhi)", 125, true],
    ],
  },
  {
    id: "menu-fried-rice",
    title: "Fried Rice",
    order: 110,
    items: [
      ["Chicken & Egg", 325, false],
      ["Egg & Vegetable", 275, false],
      ["Vegetable", 215, true],
    ],
  },
  {
    id: "menu-chowmein",
    title: "Chowmein",
    order: 120,
    items: [
      ["Chicken & Egg", 325, false],
      ["Egg & Vegetable", 275, false],
      ["Vegetable", 215, true],
    ],
  },
  {
    id: "menu-barbeque",
    title: "Barbeque",
    order: 130,
    items: [
      ["Choice of Veg (Marinated)", 295, true],
      ["Chicken (Marinated)", 375, false],
      ["Fish (Marinated)", 425, false],
    ],
  },
  {
    id: "menu-desserts",
    title: "Desserts",
    order: 140,
    items: [
      ["Choice of Ice Cream", 125, true],
      ["Gulab Jamun (2 pc)", 95, true],
      ["Hot Gulab Jamun with Ice Cream", 145, true],
    ],
  },
];

function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

async function run() {
  console.log(`Seeding ${sections.length} menu sections…`);
  for (const section of sections) {
    const doc = {
      _id: section.id,
      _type: "menuSection",
      title: section.title,
      order: section.order,
      ...(section.note ? { note: section.note } : {}),
      items: section.items.map(([name, price, isVeg, isSignature]) => ({
        _type: "menuItem",
        _key: slug(name),
        name,
        price,
        isVeg: Boolean(isVeg),
        ...(isSignature ? { isSignature: true } : {}),
      })),
    };
    await client.createOrReplace(doc);
    console.log(`  ✓ ${section.title} (${section.items.length} items)`);
  }
  const total = sections.reduce((n, s) => n + s.items.length, 0);
  console.log(`Done. ${total} items across ${sections.length} sections.`);
}

run().catch((err) => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
