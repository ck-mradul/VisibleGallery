import { renderGallery } from "./src/App";

(function () {
  function loadScript(url, callback) {
    var script = document.createElement("script");
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
  }

  // Load the React bundle and your render function
  loadScript("https://yourcdn.com/react-bundle.js", function () {
    loadScript("https://yourcdn.com/renderGallery.js", function () {
      // Render the gallery once the scripts are loaded
      if (typeof renderGallery === "function") {
        renderGallery(".box", "23648726487");
      } else {
        console.error("renderGallery function is not available");
      }
    });
  });
})();
