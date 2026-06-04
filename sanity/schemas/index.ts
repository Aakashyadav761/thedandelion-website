// Sanity schema registry
// Import into sanity.config.ts once `sanity` package is installed.

import { roomSchema } from "./room";
import { activitySchema } from "./activity";
import { galleryImageSchema } from "./galleryImage";
import { attractionSchema } from "./attraction";
import { jobSchema } from "./job";
import { siteContentSchema } from "./siteContent";

export const schemaTypes = [
  roomSchema,
  activitySchema,
  galleryImageSchema,
  attractionSchema,
  jobSchema,
  siteContentSchema,
];
