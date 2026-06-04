// Sanity schema: Activity / Facility

export const activitySchema = {
  name: "activity",
  title: "Activity / Facility",
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
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Pool & Water", value: "Pool & Water" },
          { title: "Nature & Wildlife", value: "Nature & Wildlife" },
          { title: "Dining", value: "Dining" },
          { title: "Recreation", value: "Recreation" },
        ],
      },
    },
    {
      name: "isChargeable",
      title: "Chargeable?",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "priceNote",
      title: "Price Note",
      type: "string",
      description: 'e.g. "₹900 / hour" or "as per menu"',
    },
  ],
};
