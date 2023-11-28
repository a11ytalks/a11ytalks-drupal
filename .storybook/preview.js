// .storybook/preview.js
export const parameters = {
  server: {
    // Replace this with your Drupal site URL, or an environment variable.
    url: 'https://a11ytalks-drupal.ddev.site',
  },
  globals: {
    drupalTheme: 'Claro',
    supportedDrupalThemes: {
      a11ytalks: { title: 'A11y Talks'},
      umami: {title: 'Umami'},
      claro: {title: 'Claro'},
    },
  }
};

