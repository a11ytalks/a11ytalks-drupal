/** @type { import('@storybook/server-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../web/modules/**/*.mdx",
    "../web/modules/**/*.stories.json",
    "../web/themes/**/*.mdx",
    "../web/themes/**/*.stories.json",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@lullabot/storybook-drupal-addon'
  ],
  framework: {
    name: "@storybook/server-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
