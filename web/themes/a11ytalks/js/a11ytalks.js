/**
 * @file
 * a11ytalks behaviors.
 */
(function (Drupal) {

  'use strict';

  Drupal.behaviors.a11ytalks = {
    attach (context, settings) {

      caches.keys().then(list => list.map(key => caches.delete(key)))

    }
  };

} (Drupal));
