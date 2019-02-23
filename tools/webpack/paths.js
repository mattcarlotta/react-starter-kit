const { resolve } = require("path");

const { cwd } = process;

//= =============================================================================//
// PATHS FOR WEBPACK DEVELOPMENT & PRODUCTION CONFIGS                            /
//= =============================================================================//

module.exports = {
  /* current working directory */
  currentDirectory: resolve(cwd()),
  /* public assets directory */
  publicAssets: resolve(cwd(), "public/assets"),
  /* loadable assets manifest */
  loadableAssets: "public/loadable-assets.json",
  /* project source directory */
  srcDirectory: resolve(cwd(), "src"),
  /* webpack assets manifest  */
  webpackAssets: resolve(cwd(), "public/webpack-assets.json")
};
