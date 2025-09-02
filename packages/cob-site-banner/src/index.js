const behavior = require("../../uswds-core/src/js/utils/behavior");
const select = require("../../uswds-core/src/js/utils/select");
const { CLICK } = require("../../uswds-core/src/js/events");
const toggle = require("../../uswds-core/src/js/utils/toggle");

const BANNER = `.cob-site-banner`;
const HEADER = `.cob-site-banner__header`;
const EXPANDED_CLASS = `cob-site-banner__header--expanded`;
const BANNER_BUTTON = `.cob-site-banner__button[aria-controls]`;
const BANNER_INNER = `.cob-site-banner__inner`;
const BANNER_CONTENT = `.cob-site-banner__content`;

/**
 * Toggle Banner display and class.
 * @param {Event} event
 */
const toggleBanner = function toggleEl(event) {
  // Don't toggle if clicking on a link or button other than the toggle button
  if (
    event.target.closest('a:not(.cob-site-banner__button)') ||
    event.target.closest('button:not(.cob-site-banner__button)') ||
    event.target.closest(BANNER_CONTENT)
  ) {
    return;
  }
  
  event.preventDefault();
  
  // Find the button within this banner
  const header = this.closest(HEADER) || this;
  const button = header.querySelector(BANNER_BUTTON);
  
  if (!button) return;
  
  toggle(button);
  header.classList.toggle(EXPANDED_CLASS);
};

module.exports = behavior(
  {
    [CLICK]: {
      [HEADER]: toggleBanner,
    },
  },
  {
    init(root) {
      select(BANNER_BUTTON, root).forEach((button) => {
        const expanded = button.getAttribute("aria-expanded") === "true";
        toggle(button, expanded);
      });
    },
  },
); 