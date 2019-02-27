const sass = require("node-sass");
const AssetModuleHook = require("asset-require-hook");
const CSSModuleHook = require("css-modules-require-hook");
const postcssConfig = require("../../postcss.config");
const { srcDirectory } = require("./paths");
const {
  hashedMediaName,
  inDevelopment,
  localIdentName
} = require("../../envs");

//= =============================================================================//
// HOOKS FOR WEBPACK DEVELOPMENT & PRODUCTION CONFIGS                            /
//= =============================================================================//

// CSS modules
CSSModuleHook({
  // Must use the same pattern with your webpack config
  generateScopedName: localIdentName,
  extensions: [".css", ".scss", ".sass"],
  prepend: [...postcssConfig.plugins],
  preprocessCss: (data, filename) =>
    sass.renderSync({
      data,
      file: filename
    }).css,
  rootDir: srcDirectory,
  devMode: inDevelopment
});
// Images
AssetModuleHook({
  // Must use the same option with webpack's configuration
  extensions: ["gif", "jpg", "jpeg", "png", "webp"],
  publicPath: "/assets/",
  limit: 10240,
  name: hashedMediaName
});
// Fonts
AssetModuleHook({
  // Must use the same option with webpack's configuration
  extensions: ["woff", "woff2", "ttf", "eot", "svg"],
  publicPath: "/assets/",
  limit: 10240,
  name: hashedMediaName
});
