"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHTML;
function getHTML(_config) {
  var channel = _config.channel;
  var preview = _config.preview;

  var config = { channel: channel, preview: preview };

  return "\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset=\"utf-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n      <title>React Native Storybook</title>\n      <style>\n        /*\n          When resizing panels, the drag event breaks if the cursor\n          moves over the iframe. Add the 'dragging' class to the body\n          at drag start and remove it when the drag ends.\n         */\n        .dragging iframe {\n          pointer-events: none;\n        }\n\n        /* Styling the fuzzy search box placeholders */\n        .searchBox::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n          color: #ddd;\n          font-size: 16px;\n        }\n\n        .searchBox::-moz-placeholder { /* Firefox 19+ */\n          color: #ddd;\n          font-size: 16px;\n        }\n\n        .searchBox:focus{\n          border-color: #EEE !important;\n        }\n\n        .btn:hover{\n          background-color: #eee\n        }\n      </style>\n    </head>\n    <body style=\"margin: 0;\">\n      <div id=\"root\"></div>\n      <script>window.STORYBOOK_CONFIG = JSON.parse(" + JSON.stringify(JSON.stringify(config)) + ");</script>\n      <script src=\"manager.js\"></script>\n    </body>\n  </html>\n  ";
}