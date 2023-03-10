import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";
// const branch =
//   process.env.NEXT_PUBLIC_TINA_BRANCH ||
//   process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
//   process.env.HEAD

export default defineConfig({
  token: 'cae1d6a882de8fca4571726e481176e0ed1d846b', // Get this from tina.io
  clientId: '46172bd6-a7e4-4e4c-83f1-fd0761ff91ca', // Get this from tina.io
  branch,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
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
