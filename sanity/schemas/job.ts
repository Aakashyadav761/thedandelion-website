// Sanity schema: Job Opening

export const jobSchema = {
  name: "job",
  title: "Job Opening",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Job Title",
      type: "string",
      options: {
        list: [
          "Manager",
          "Assistant Manager",
          "Chef",
          "Housekeeping",
          "Restaurant Staff",
          "Maintenance Staff",
        ],
      },
      validation: (rule: { required: () => unknown }) => rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "Ramnagar, Belgavi, Karnataka",
    },
    {
      name: "type",
      title: "Employment Type",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "full-time" },
          { title: "Part-time", value: "part-time" },
          { title: "Seasonal", value: "seasonal" },
        ],
      },
    },
    {
      name: "description",
      title: "Job Description",
      type: "text",
      rows: 5,
    },
    {
      name: "isOpen",
      title: "Currently Hiring?",
      type: "boolean",
      initialValue: true,
    },
  ],
};
