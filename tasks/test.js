const { src } = require("gulp");
const mocha = require("gulp-mocha");

const mochaConfig = {
  config: "packages/bwds-core/src/js/utils/test/.mocharc.json",
};

// Export our tasks.
module.exports = {
  // run unit test.
  unitTests() {
    return src([
      // Component tests.
      "packages/cob-*/**/*.spec.js",
      // Core utils tests.
      "packages/bwds-*/**/*.spec.js",
      // SASS unit tests, run separately.
      "!packages/bwds-core/src/test/sass.spec.js",
    ]).pipe(mocha(mochaConfig));
  },

  sassTests() {
    return src("packages/bwds-core/src/test/sass.spec.js").pipe(mocha());
  },
};
