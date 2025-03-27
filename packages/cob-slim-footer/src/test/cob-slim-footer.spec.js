const fs = require("fs");
const path = require("path");
const assert = require("assert");
const slimFooter = require("../index");

const TEMPLATE = fs.readFileSync(
  path.join(__dirname, "/template.html")
).toString();

const SLIM_FOOTER = ".cob-slim-footer";
const SLIM_FOOTER_ICON = ".cob-slim-footer__icon";
const SLIM_FOOTER_TEXT = ".cob-slim-footer__text";

describe("cob-slim-footer component", () => {
  const { body } = document;

  let footer;
  let icon;
  let text;

  beforeEach(() => {
    body.innerHTML = TEMPLATE;
    footer = body.querySelector(SLIM_FOOTER);
    icon = body.querySelector(SLIM_FOOTER_ICON);
    text = body.querySelector(SLIM_FOOTER_TEXT);
  });

  it("should initialize properly", () => {
    assert.ok(footer, "Footer element exists");
    assert.ok(icon, "Icon element exists");
    assert.ok(text, "Text element exists");
  });

  it("should have the correct icon alt text", () => {
    assert.equal(icon.getAttribute("alt"), "Footer Icon", "Icon has correct alt text");
  });

  it("should have the correct footer text", () => {
    assert.equal(text.textContent, "This is the footer text.", "Footer text is correct");
  });
}); 