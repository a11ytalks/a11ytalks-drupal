# a11ytalks-drupal
Drupal version of a11ytalks

## Requirements

- [DDev](https://ddev.com/get-started/) 

## Getting started

- `ddev start`
- `ddev composer install`
- `ddev drush si minimal` - to be replaced with a snapshot later.
- `ddev drush cim` - one day this will work out of the box, but the snapshot will replace it anyway
- Site is available at [https://a11ytalks-drupal.ddev.site](https://a11ytalks-drupal.ddev.site)

## Setting up Storybook

- `cp web/sites/example.settings.local.php web/sites/default/settings.local.php`
- `ddev drush cr`
- `ddev yarn install`
- `ddev yarn storybook`
- Storybook instance is viewable at [https://a11ytalks-drupal.ddev.site:6006](https://a11ytalks-drupal.ddev.site:6006)
