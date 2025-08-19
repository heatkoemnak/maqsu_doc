import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable

export default defineConfig({
  branch:"main",

  // Get this from tina.io
  clientId: "0859726b0cc7f42a535a7fc58e3121782566cf7e",
  // Get this from tina.io
  token: "d6e89ea80e755997ca39de1218752c952cd68181",

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
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
    ],
  },
});
