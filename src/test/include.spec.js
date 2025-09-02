require("sass-embedded");
const path = require("path");
const {
  runGulp,
  distScssPath,
  render,
} = require("../../packages/bwds-core/src/js/utils/test/util");

const includePath = path.resolve(path.join(__dirname, "../"));

describe("include paths", () => {
  it('can be loaded with @import "bwds"', async () => {
    setTimeout(() => {
      render('@import "bwds";', [includePath]);
    }, 20000);
  });
});

describe("standalone dist scss", () => {
  before(() => {
    setTimeout(() => {
      runGulp("copy-dist-sass");
    }, 20000);
  });

  it('can be loaded with @import "bwds"', () => {
    setTimeout(() => {
      render('@import "bwds";', [distScssPath]);
    }, 20000);
  });
});
