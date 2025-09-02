const behavior = require("../../bwds-core/src/js/utils/behavior");
const toggleFormInput = require("../../bwds-core/src/js/utils/toggle-form-input");

const { CLICK } = require("../../bwds-core/src/js/events");
const { prefix: PREFIX } = require("../../bwds-core/src/js/config");

const LINK = `.${PREFIX}-show-password`;

function toggle(event) {
  event.preventDefault();
  toggleFormInput(this);
}

module.exports = behavior({
  [CLICK]: {
    [LINK]: toggle,
  },
});
