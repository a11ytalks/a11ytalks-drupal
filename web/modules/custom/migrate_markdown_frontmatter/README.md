## INTRODUCTION

The migrate_markdown_frontmatter module is used to migrate Markdown Frontmatter.

## REQUIREMENTS

league\CommonMark

## INSTALLATION

Install as you would normally install a contributed Drupal module.
See: https://www.drupal.org/node/895232 for further information.

## CONFIGURATION

 * source:
 *   plugin: 'frontmatter'
 *   path: '/path/to/markdown/folder'
 *   ids:
 *     - slug
 *   fields:
 *     0:
 *       name: slug
 *       label: 'Slug of file'
 *     1:
 *       name: title
 *       label: 'Title of event'
 *     2:
 *       name: subtitle
 *       label: 'Presenter name'
 *   get_body: FALSE
 * process:
 *   title: title
 *   type:
 *     plugin: default_value
 *     default_value: event
 * destination:
 *   plugin: entity_node

## MAINTAINERS

Current maintainers for Drupal 10:

- Mark Casias (markie) - https://www.drupal.org/u/markie

