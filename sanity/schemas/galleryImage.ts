// Sanity schema: Gallery Image

export const galleryImageSchema = {
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule: { required: () => unknown }) => rule.required(),
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      description: "e.g. Cottages, Huts, Pool, Restaurant, Nature",
    },
  ],
};
