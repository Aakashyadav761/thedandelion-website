// Sanity schema: Site Content singleton (resort story, contact details)

export const siteContentSchema = {
  name: "siteContent",
  title: "Site Content",
  type: "document",
  __experimental_actions: ["update", "publish"],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
  fields: [
    {
      name: "story",
      title: "Resort Story / Ideology",
      type: "text",
      rows: 8,
      description: "Shown on the Contact Us page",
    },
    {
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
    },
    {
      name: "phone",
      title: "Phone / WhatsApp",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    },
  ],
};
