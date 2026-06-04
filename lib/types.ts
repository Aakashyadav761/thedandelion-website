// TypeScript types for all Sanity document types.
// These mirror the Sanity schemas in sanity/schemas/.

export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; height: number; width: number };
  alt?: string;
}

export type UnitType = "Huts" | "Cottages" | "Suites" | "Executive Rooms";

export interface Room {
  _id: string;
  _type: "room";
  name: string;
  unitType: UnitType;
  description?: string;
  rate?: number;
  rateIncludes?: string;
  maxAdults: number;
  extraPersonCharge?: number;
  images: SanityImage[];
  isPublished: boolean;
  whatsappMessage?: string;
}

export type ActivityCategory = "Pool & Water" | "Nature & Wildlife" | "Dining" | "Recreation";

export interface Activity {
  _id: string;
  _type: "activity";
  name: string;
  description: string;
  image?: SanityImage;
  category: ActivityCategory;
  isChargeable?: boolean;
  priceNote?: string;
}

export interface GalleryImage {
  _id: string;
  _type: "galleryImage";
  image: SanityImage;
  caption?: string;
  category?: string;
}

export interface Attraction {
  _id: string;
  _type: "attraction";
  name: string;
  description: string;
  image?: SanityImage;
  distance?: string;
  mapLink?: string;
}

export type JobType = "full-time" | "part-time" | "seasonal";

export interface Job {
  _id: string;
  _type: "job";
  title: string;
  location?: string;
  type: JobType;
  description?: string;
  isOpen: boolean;
}

export interface SiteContent {
  _id: string;
  _type: "siteContent";
  story?: string;
  address?: string;
  phone?: string;
  email?: string;
  instagramUrl?: string;
}
