const behavior = require("../../uswds-core/src/js/utils/behavior");
const select = require("../../uswds-core/src/js/utils/select");

const SLIM_FOOTER = `.cob-slim-footer`;

/**
 * COB Slim Footer component
 */
const slimFooter = behavior({
  /**
   * Initialize the component
   * @param {HTMLElement} root - The root element
   */
  init(root) {
    select(SLIM_FOOTER, root);
  },

  /**
   * Teardown the component
   * @param {HTMLElement} root - The root element
   */
  teardown(root) {
    // No specific teardown needed
  },
});

module.exports = slimFooter; 