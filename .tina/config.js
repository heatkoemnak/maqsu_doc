import { defineConfig } from "tinacms";

// Set branch (main by default)
const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default defineConfig({
  branch,

  // Tina Cloud credentials (required if using Tina Cloud)
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  // Build output for Tina Admin
  build: {
    outputFolder: "admin", // Tina admin panel
    publicFolder: "public", // Docusaurus public/static folder
  },

  // Media configuration
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  // Define collections (content types)
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages", // Folder where Markdown/JSON files live
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true, // main content field
          },
        ],
      },
    ],
  },
});
