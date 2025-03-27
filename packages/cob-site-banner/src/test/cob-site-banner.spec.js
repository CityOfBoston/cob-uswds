const fs = require("fs");
const path = require("path");
const assert = require("assert");
const banner = require("../index");

const TEMPLATE = fs.readFileSync(
  path.join(__dirname, "/template.html")
).toString();

const BANNER = ".cob-site-banner";
const BANNER_TOGGLE = ".cob-site-banner__toggle";
const BANNER_TOGGLE_ICON = ".cob-site-banner__toggle-icon";
const BANNER_DETAILS = ".cob-site-banner__details";

describe("cob-site-banner component", () => {
  const { body } = document;

  let banner;
  let toggleButton;
  let toggleIconButton;
  let details;

  beforeEach(() => {
    body.innerHTML = TEMPLATE;
    banner = body.querySelector(BANNER);
    toggleButton = body.querySelector(BANNER_TOGGLE);
    toggleIconButton = body.querySelector(BANNER_TOGGLE_ICON);
    details = body.querySelector(BANNER_DETAILS);
  });

  it("should initialize with details hidden", () => {
    assert.strictEqual(details.hidden, true);
    assert.strictEqual(toggleButton.getAttribute("aria-expanded"), "false");
    assert.strictEqual(toggleIconButton.getAttribute("aria-expanded"), "false");
  });

  it("should show details when toggle button is clicked", () => {
    toggleButton.click();
    assert.strictEqual(details.hidden, false);
    assert.strictEqual(toggleButton.getAttribute("aria-expanded"), "true");
    assert.strictEqual(toggleIconButton.getAttribute("aria-expanded"), "true");
  });

  it("should hide details when toggle button is clicked again", () => {
    toggleButton.click(); // Show details
    toggleButton.click(); // Hide details
    assert.strictEqual(details.hidden, true);
    assert.strictEqual(toggleButton.getAttribute("aria-expanded"), "false");
    assert.strictEqual(toggleIconButton.getAttribute("aria-expanded"), "false");
  });

  it("should show details when toggle icon button is clicked", () => {
    toggleIconButton.click();
    assert.strictEqual(details.hidden, false);
    assert.strictEqual(toggleButton.getAttribute("aria-expanded"), "true");
    assert.strictEqual(toggleIconButton.getAttribute("aria-expanded"), "true");
  });

  it("should hide details when toggle icon button is clicked again", () => {
    toggleIconButton.click(); // Show details
    toggleIconButton.click(); // Hide details
    assert.strictEqual(details.hidden, true);
    assert.strictEqual(toggleButton.getAttribute("aria-expanded"), "false");
    assert.strictEqual(toggleIconButton.getAttribute("aria-expanded"), "false");
  });
}); 