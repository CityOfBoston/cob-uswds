const fs = require("fs");
const path = require("path");
const assert = require("assert");
const slimHeader = require("../index");

const TEMPLATE = fs.readFileSync(
  path.join(__dirname, "/template.html")
).toString();

const SLIM_HEADER = ".cob-slim-header";
const SLIM_HEADER_LOGO_LINK = ".cob-slim-header__logo-link";
const SLIM_HEADER_LOGO = ".cob-slim-header__logo";
const SLIM_HEADER_SEPARATOR = ".cob-slim-header__separator";
const SLIM_HEADER_MAYOR_TEXT = ".cob-slim-header__mayor-text";
const SLIM_HEADER_ADDITIONAL_CONTENT = ".cob-slim-header__additional-content";

describe("cob-slim-header component", () => {
  const { body } = document;

  let header;
  let logoLink;
  let logo;
  let separator;
  let mayorText;
  let additionalContent;

  beforeEach(() => {
    body.innerHTML = TEMPLATE;
    header = body.querySelector(SLIM_HEADER);
    logoLink = body.querySelector(SLIM_HEADER_LOGO_LINK);
    logo = body.querySelector(SLIM_HEADER_LOGO);
    separator = body.querySelector(SLIM_HEADER_SEPARATOR);
    mayorText = body.querySelector(SLIM_HEADER_MAYOR_TEXT);
    additionalContent = body.querySelector(SLIM_HEADER_ADDITIONAL_CONTENT);
  });

  it("should initialize properly", () => {
    assert.ok(header, "Header element exists");
    assert.ok(logoLink, "Logo link element exists");
    assert.ok(logo, "Logo element exists");
    assert.ok(separator, "Separator element exists");
    assert.ok(mayorText, "Mayor text element exists");
    assert.ok(additionalContent, "Additional content element exists");
  });

  it("should have the correct link URL", () => {
    assert.equal(logoLink.getAttribute("href"), "https://www.boston.gov", "Logo link has correct URL");
  });

  it("should have the correct logo alt text", () => {
    assert.equal(logo.getAttribute("alt"), "City of Boston", "Logo has correct alt text");
  });

  it("should have the correct mayor text", () => {
    assert.equal(mayorText.textContent, "Mayor Michelle Wu", "Mayor text is correct");
  });

  it("should have the correct additional content", () => {
    assert.equal(additionalContent.textContent.trim(), "Test additional content", "Additional content is correct");
  });
}); 