window.bwdsPresent = true; // GLOBAL variable to indicate that the bwds.js has loaded in the DOM.

const bwds = require("./config");

const components = require("./index");

bwds.components = components;

const initComponents = () => {
  const target = document.body;
  Object.keys(components).forEach((key) => {
    const behavior = components[key];
    behavior.on(target);
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initComponents, { once: true });
} else {
  initComponents();
}

exports.default = bwds;
exports.initComponents = initComponents;
