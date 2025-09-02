const keymap = require("receptor/keymap");
const behavior = require("../../bwds-core/src/js/utils/behavior");

const ANCHOR_BUTTON = `a[class*="cob-button"]`;

const toggleButton = (event) => {
  event.preventDefault();
  event.target.click();
};

const anchorButton = behavior({
  keydown: {
    [ANCHOR_BUTTON]: keymap({
      " ": toggleButton,
    }),
  },
});

module.exports = anchorButton;
