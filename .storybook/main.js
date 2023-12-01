/** @type { import('@storybook/server-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../web/themes/**/*.mdx",
    "../web/themes/**/*.stories.js",
    "../web/themes/**/*.stories.json",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  framework: {
    name: '@storybook/react-vite', // 👈 The builder enabled here.
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
