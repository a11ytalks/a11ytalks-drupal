
const config = {
  stories: [
    '../web/themes/**/*.stories.@(json|yml)',
    '../web/modules/**/*.stories.@(json|yml)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
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
