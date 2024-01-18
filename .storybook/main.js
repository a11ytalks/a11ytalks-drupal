
const config = {
  stories: [
    '../web/themes/**/*.stories.mdx',
    '../web/themes/**/*.stories.@(json|yml)',
    '../web/modules/**/*.stories.mdx',
    '../web/modules/**/*.stories.@(json|yml)',
  ],
 
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    '@lullabot/storybook-drupal-addon',
  ],
  framework: {
    name: '@storybook/server-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tags',
  },
};

export default config;
