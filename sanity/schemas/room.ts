// Sanity schema: Room / Accommodation unit
// Requires: npm install sanity next-sanity @sanity/image-url

export const roomSchema = {
  name: "room",
  title: "Accommodation",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule: { required: () => unknown }) => rule.required(),
    },
    {
      name: "unitType",
      title: "Unit Type",
      type: "string",
      options: {
        list: [
          { title: "Huts", value: "Huts" },
          { title: "Cottages", value: "Cottages" },
          { title: "Suites", value: "Suites" },
          { title: "Executive Rooms", value: "Executive Rooms" },
        ],
      },
      validation: (rule: { required: () => unknown }) => rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "rate",
      title: "Rate (₹ per night, incl. GST)",
      type: "number",
      description: "Leave blank to show 'Rates on enquiry'",
    },
    {
      name: "rateIncludes",
      title: "Rate Includes",
      type: "string",
      description: 'e.g. "room + breakfast"',
    },
    {
      name: "maxAdults",
      title: "Maximum Adults",
      type: "number",
      validation: (rule: { required: () => unknown }) => rule.required(),
    },
    {
      name: "extraPersonCharge",
      title: "Extra Person Charge (₹)",
      type: "number",
      description: "Charge per additional adult (if applicable)",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "facilities",
      title: "Facilities & Amenities",
      type: "array",
      of: [{ type: "string" }],
      description: 'Shown as an icon grid, e.g. "King-size bed", "Air Conditioning", "Forest View"',
    },
    {
      name: "isPublished",
      title: "Published",
      type: "boolean",
      description: "Only published units appear on the website",
      initialValue: false,
    },
    {
      name: "whatsappMessage",
      title: "WhatsApp Pre-fill Message",
      type: "string",
      description: 'Base text for the enquiry link, e.g. "I\'d like to enquire about the Cottage."',
    },
  ],
  orderings: [
    {
      title: "Unit Type",
      name: "unitTypeAsc",
      by: [{ field: "unitType", direction: "asc" }],
    },
  ],
};
