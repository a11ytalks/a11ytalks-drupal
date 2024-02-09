
const config = {
  stories: [
    '../web/themes/**/*.stories.@(json|yml)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: '@storybook/server-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tags',
  },
};

export default config;
