export default {
  output: "export",
  experimental: {
    turbo: {
      rules: {
        "*.md": [
          {
            loader: "@mdx-js/loader",
            options: {
              format: "md",
            },
          },
        ],
      },
    },
  },
};
