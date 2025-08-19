import { defineConfig } from "tinacms";

// Set branch (main by default)
const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default defineConfig({
  branch,

  // Tina Cloud credentials (required if using Tina Cloud)
  clientId:"9ecacd79-23a8-46cb-8198-3bbe6c466ff0",
  token:"d6e89ea80e755997ca39de1218752c952cd68181",

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
      {
        name: "post",
        label: "Posts",
        path: "content/posts", // Folder where Markdown/JSON files live
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
