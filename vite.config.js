import { defineConfig } from "vite"
import twig from 'vite-plugin-twig-drupal';
import { join } from "node:path"
import sass from 'sass';
export default defineConfig({
  plugins: [
    // Other vite plugins.
    twig({
      namespaces: {
        components: join(__dirname, "web/themes/a11ytalks/components"),
        // Other namespaces as required.
      },
      framework: 'react' 
    }),
    // Other vite plugins.
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
