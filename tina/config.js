import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable

export default defineConfig({
  branch:"main",

  // Get this from tina.io
  clientId:"9ecacd79-23a8-46cb-8198-3bbe6c466ff0",
  // Get this from tina.io
  token:"0859726b0cc7f42a535a7fc58e3121782566cf7e",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
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
            isBody: true,
          },
        ],
      },
    ],
  },
});
