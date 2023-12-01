// stories/Button.stories.js
// Button will be a Javascript function that accepts variables for the twig template.
import SiteBrandingTwig from './site-branding.twig';
// Import stylesheets, this could be a sass or postcss file too.
import './site-branding.css';
// You may also have JavaScript for the component.
// import './path/to/some/javascript/button.js';
export default {
  title: 'Components/SiteBranding',
  tags: ['autodocs'],
  argTypes: {
    front: {
      control: { type: 'text' },
    },
    site_name: {
      control: { type: 'text' },
    },
    site_slogan: {
      control: { type: 'text' },
    },
  },
  // Just pass along the imported variable.
  component: SiteBrandingTwig,
};
// Set default variables in the story.
export const Default = {
  args: { front: ',', site_name: 'hi', site_slogan: 'yea boy' },
};
