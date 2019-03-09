const { resolve } = require('path');
const { currentDirectory } = require('./envs');

// =============================================================== //
// WEBPACK PATHS                                                   //
// =============================================================== //

module.exports = {
  root: resolve(`${currentDirectory}`), // project root directory
  publicPath: '/', // project publicPath
  outputPath: resolve(`${currentDirectory}/dist`), // compiled build output path (/dist)
  publicFolder: resolve(`${currentDirectory}/public`), // path to public folder (./public)
  entryPath: resolve(`${currentDirectory}/src/index.js`), // entry point to the application index (./src/index.js)
  templatePath: resolve(`${currentDirectory}/public/index.html`), // path to index.html (build/index.html)
  faviconPath: resolve(`${currentDirectory}/public/favicon.ico`), // path to favicon.ico (build/favicon.ico)
  localCSS: resolve(`${currentDirectory}/src`), //  path to local styles (/src)
  globalCSS: resolve(`${currentDirectory}/src/styles/globals`), // path to the globals.scss file (src/styles/globals/globals.scss)
  imagesFolder: 'media', // compiled images build path (build/media)
  fontsFolder: 'assets', // compiled fonts build path (build/assets)
  cssFolder: 'css', // compiled CSS build path (build/css)
  jsFolder: 'js', // compiled JS build path (build/js)
};
