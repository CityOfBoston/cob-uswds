/* eslint-disable no-var */
(function bwdsInit() {
  "use strict";

  var loadingClass = "cob-js-loading";
  var fallback;

  document.documentElement.classList.add(loadingClass);
  function revertClass() {
    document.documentElement.classList.remove(loadingClass);
  }

  fallback = setTimeout(revertClass, 8000);

  function verifyLoaded() {
    if (window.bwdsPresent) {
      clearTimeout(fallback);
      revertClass();
      window.removeEventListener("load", verifyLoaded, true);
    }
  }

  window.addEventListener("load", verifyLoaded, true);
})();
