# a11ytalks-drupal

Drupal version of a11ytalks

## Requirements

- [DDev](https://ddev.com/get-started/)

## Getting started

- `ddev start`
- `ddev composer install`

### With DB snapshot

Obtain a backup from the Backup migrate module on the live site.

- `ddev import-db --file=PATH_TO_FILE`

### Clean slate

- `ddev drush si minimal` - to be replaced with a snapshot later.
- `ddev drush config-set "system.site" uuid 8e44c643-c302-46ea-a054-c47fd6454ea5` - Updates the site UUID so the config imports without issue.
- `ddev drush cim` - one day this will work out of the box, but the snapshot will replace it anyway

### Enable Stage File Proxy

- `ddev drush en stage_file_proxy`
- `ddev drush config-set stage_file_proxy.settings origin "https://a11ytalks.com"`

### and then

- Site is available at [https://a11ytalks-drupal.ddev.site](https://a11ytalks-drupal.ddev.site)

## Setting up Storybook

- `cp web/sites/example.settings.local.php web/sites/default/settings.local.php`
- `ddev drush cr`
- `ddev yarn install`
- `ddev yarn storybook`
- Storybook instance is viewable at [https://a11ytalks-drupal.ddev.site:6006](https://a11ytalks-drupal.ddev.site:6006)

## Updating Storybook

Storybook is based on the [Storybook](https://www.drupal.org/project/storybook) module. All stories are kept in `web/themes/custom/a11ytalks/stories` in a twig file that needs to be recompiled if you update any of the arguments or add new stories.

- `ddev drush storybook:generate-all-stories`

If you want to have `watch` automatically update any changes run

- `watch --color ddev drush storybook:generate-all-stories`

## Content Types

### Event

Main content of the site.

### Speaker

Attached to the events. We may do more with this in the future.

### Organizer

Team information. This is deprecated in favor of User accounts and will be
removed.
