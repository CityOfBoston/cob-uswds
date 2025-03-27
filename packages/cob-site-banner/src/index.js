const behavior = require("../../uswds-core/src/js/utils/behavior");
const select = require("../../uswds-core/src/js/utils/select");
const { CLICK } = require("../../uswds-core/src/js/events");

const BANNER = `.cob-site-banner`;
const BANNER_TOGGLE = `.cob-site-banner__toggle, .cob-site-banner__toggle-icon`;
const BANNER_DETAILS = `.cob-site-banner__details`;
const BANNER_CONTENT = `.cob-site-banner__content`;

/**
 * Toggle banner details visibility
 * @param {Event} event - The click event
 */
const toggleBanner = function toggleBanner(event) {
  // Only handle clicks on toggle buttons
  const toggleButton = event.target.closest(BANNER_TOGGLE);
  if (!toggleButton) return;
  
  const banner = toggleButton.closest(BANNER);
  if (!banner) return;
  
  const detailsElement = banner.querySelector(BANNER_DETAILS);
  const contentElement = banner.querySelector(BANNER_CONTENT);
  if (!detailsElement || !contentElement) return;
  
  const isCurrentlyHidden = detailsElement.hasAttribute('hidden');
  
  // Toggle visibility
  if (isCurrentlyHidden) {
    detailsElement.removeAttribute('hidden');
  } else {
    detailsElement.setAttribute('hidden', '');
  }
  
  // Update aria-expanded states and content class
  banner.querySelectorAll(BANNER_TOGGLE).forEach(btn => {
    btn.setAttribute("aria-expanded", isCurrentlyHidden);
  });
  contentElement.classList.toggle("is-expanded", isCurrentlyHidden);
};

// Create the behavior instance
const bannerBehavior = behavior(
  {
    [CLICK]: {
      [BANNER_TOGGLE]: toggleBanner, // Changed to only listen on toggle elements
    },
  },
  {
    init(root) {
      select(BANNER, root).forEach((banner) => {
        const toggleButtons = banner.querySelectorAll(BANNER_TOGGLE);
        const detailsElement = banner.querySelector(BANNER_DETAILS);
        
        if (!detailsElement) return;
        
        const detailsId = detailsElement.id || `cob-site-banner-details-${Math.floor(Math.random() * 1000000)}`;
        detailsElement.id = detailsId;
        
        toggleButtons.forEach((button) => {
          button.setAttribute("aria-controls", detailsId);
        });
      });
    },
  }
);

// Auto-initialize when loaded
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    bannerBehavior.off(document);
    bannerBehavior.on(document);
  });
}

module.exports = bannerBehavior; 