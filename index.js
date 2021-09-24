/*
const { startCreating, buildSetup } = require("./src/main.js");

(() => {
  buildSetup();
  startCreating();
})();
*/

const { renameFiles } = require("./src/rename.js");

(() => {
  renameFiles();
})();
