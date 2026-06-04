// Sanity schema: Nearby Attraction (Around Us page)

export const attractionSchema = {
  name: "attraction",
  title: "Nearby Attraction",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule: { required: () => unknown }) => rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "distance",
      title: "Distance / Drive Time",
      type: "string",
      description: 'e.g. "~1 hr 40 min drive"',
    },
    {
      name: "mapLink",
      title: "Google Maps Link",
      type: "url",
    },
  ],
};
