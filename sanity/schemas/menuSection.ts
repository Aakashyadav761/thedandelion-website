// Sanity schema: Menu Section (Dandelion Kitchen)
//
// The kitchen menu lives in Sanity rather than as page constants because it
// carries ~60 prices — the most change-prone content on the site, and
// CLAUDE.md's rule is never to hard-code rates. The kitchen's *static* facts
// (hours, address, directions) stay as page constants in app/kitchen/page.tsx.

export const menuSectionSchema = {
  name: "menuSection",
  title: "Kitchen Menu Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      description: 'e.g. "Appetizers", "Indian Curries — Non-Vegetarian"',
      validation: (rule: { required: () => unknown }) => rule.required(),
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first.",
      validation: (rule: { required: () => unknown }) => rule.required(),
    },
    {
      name: "note",
      title: "Section Note",
      type: "string",
      description: 'Optional line under the section, e.g. "Mutton and seafood on request."',
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          name: "menuItem",
          title: "Menu Item",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (rule: { required: () => unknown }) => rule.required(),
            },
            {
              name: "price",
              title: "Price (INR)",
              type: "number",
              description: "Leave empty to show “on request”.",
            },
            {
              name: "isVeg",
              title: "Vegetarian?",
              type: "boolean",
              initialValue: true,
            },
            {
              name: "isSignature",
              title: "Signature dish?",
              type: "boolean",
              description: "Highlighted on the page. Use sparingly.",
              initialValue: false,
            },
          ],
          preview: {
            select: { title: "name", subtitle: "price" },
          },
        },
      ],
    },
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "order" },
  },
};
