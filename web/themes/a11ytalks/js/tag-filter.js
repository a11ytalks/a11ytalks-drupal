/**
 * @file
 * Tag filter page behavior.
 *
 * Filters the event list on /tags when a tag button is clicked, without
 * a page reload. Manages ARIA pressed states and announces results to
 * screen readers via an aria-live region.
 */
(function (Drupal) {

  'use strict';

  Drupal.behaviors.tagFilter = {
    attach(context) {
      // Support once() pattern without the once module – skip if already done.
      const filterPage = context.querySelector
        ? context.querySelector('[data-tag-filter]')
        : null;

      // Also check if context itself is the filter page container.
      const page = filterPage ||
        (context.dataset && context.dataset.tagFilter !== undefined ? context : null);

      if (!page || page.dataset.tagFilterAttached) {
        return;
      }
      page.dataset.tagFilterAttached = 'true';

      const buttons = page.querySelectorAll('.tag-filter-btn[data-filter]');
      const eventsContainer = page.querySelector('.tag-filter-page__events');
      const statusEl = page.querySelector('.tag-filter-page__status');

      if (!buttons.length || !eventsContainer) {
        return;
      }

      /**
       * Returns all event items in the events container.
       * Uses a live query so items added later are included.
       */
      function getEvents() {
        return eventsContainer.querySelectorAll('[data-tags]');
      }

      /**
       * Filters the event list to show only events matching the given tag ID.
       *
       * @param {string} filter - Taxonomy term ID, or "all" to show everything.
       * @param {string} label  - Human-readable label for the announcement.
       */
      function filterEvents(filter, label) {
        const events = getEvents();
        let visible = 0;

        events.forEach(function (event) {
          // data-tags is a space-separated list of taxonomy term IDs.
          const tagIds = event.dataset.tags
            ? event.dataset.tags.split(' ').filter(Boolean)
            : [];

          const show = (filter === 'all') || tagIds.includes(String(filter));

          if (show) {
            event.removeAttribute('hidden');
            visible++;
          } else {
            event.setAttribute('hidden', '');
          }
        });

        // Announce result count to screen readers.
        if (statusEl) {
          const noun = visible === 1 ? Drupal.t('talk') : Drupal.t('talks');
          if (filter === 'all') {
            statusEl.textContent = Drupal.t(
              'Showing all @count @noun.',
              { '@count': visible, '@noun': noun }
            );
          } else {
            statusEl.textContent = Drupal.t(
              'Showing @count @noun tagged "@tag".',
              { '@count': visible, '@noun': noun, '@tag': label }
            );
          }
        }
      }

      // Attach click listeners to all filter buttons.
      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          const filter = btn.dataset.filter;
          // Strip count suffix "(N)" from button text to get clean label.
          const label = btn.textContent.replace(/\s*\(\d+\)\s*$/, '').trim();

          // Update ARIA pressed states.
          buttons.forEach(function (b) {
            b.classList.remove('tag-filter-btn--active');
            b.setAttribute('aria-pressed', 'false');
          });
          btn.classList.add('tag-filter-btn--active');
          btn.setAttribute('aria-pressed', 'true');

          filterEvents(filter, label);
        });
      });
    }
  };

}(Drupal));
