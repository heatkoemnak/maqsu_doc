// import { defineConfig } from "tinacms";

// // Your hosting provider likely exposes this as an environment variable
// const branch =
//   process.env.GITHUB_BRANCH ||
//   process.env.VERCEL_GIT_COMMIT_REF ||
//   process.env.HEAD ||
//   "main";

// export default defineConfig({
//   branch,

//   // Get this from tina.io
//   clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
//   // Get this from tina.io
//   token: process.env.TINA_TOKEN,

//   build: {
//     outputFolder: "admin",
//     publicFolder: "public",
//   },
//   media: {
//     tina: {
//       mediaRoot: "",
//       publicFolder: "public",
//     },
//   },
//   // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
//   schema: {
//     collections: [
//       {
//         name: "post",
//         label: "Posts",
//         path: "content/posts",
//         fields: [
//           {
//             type: "string",
//             name: "title",
//             label: "Title",
//             isTitle: true,
//             required: true,
//           },
//           {
//             type: "rich-text",
//             name: "body",
//             label: "Body",
//             isBody: true,
//           },
//         ],
//         ui: {
//           // This is an DEMO router. You can remove this to fit your site
//           router: ({ document }) => `/demo/blog/${document._sys.filename}`,
//         },
//       },
//     ],
//   },
// });
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  // branch,

  // // From tina.io (can be empty for local dev)
  // clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  // token: process.env.TINA_TOKEN || "",
 branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  local: true,
  build: {
    outputFolder: "admin",
    publicFolder: "static", // Docusaurus uses `static/` instead of `public/`
  },

  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },

  schema: {
    collections: [
       {
        label: "Page",
        name: "page",
        path: "content/pages",
        fields: [
          {
            type: "string",
            name: "title_en",
            label: "Title (English)",
          },
          {
            type: "string",
            name: "title_kh",
            label: "Title (Khmer)",
          },
          {
            type: "rich-text",
            name: "content_en",
            label: "Content (English)",
          },
          {
            type: "rich-text",
            name: "content_kh",
            label: "Content (Khmer)",
          },
        ],
      }
    ],
  },
});
