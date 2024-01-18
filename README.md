# a11ytalks-drupal
Drupal version of a11ytalks

## Getting started

- `ddev start`
- `ddev composer install`
- `ddev drush si minimal` - to be replaced with a snapshot later.
- `ddev drush cim` - one day this will work out of the box, but the snapshot will replace it anyway

## Setting up Storybook

- `cp web/sites/example.settings.local.php web/sites/default/settings.local.php`
- `ddev drush cr`
- `ddev yarn install`
- `ddev yarn storybook`
