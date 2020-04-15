const { resolve } = require('path');
const { currentDirectory } = require('./envs');

// =============================================================== //
// WEBPACK PATHS                                                   //
// =============================================================== //

module.exports = {
  /* project root directory */
  root: resolve(`${currentDirectory}`),
  /* project publicPath */
  publicPath: '/',
  /* compiled build output path (/dist) */
  outputPath: resolve(`${currentDirectory}/dist`),
  /* path to public folder (./public) */
  publicFolder: resolve(`${currentDirectory}/public`),
  /* entry point to the application index (./src/index.js) */
  entryPath: resolve(`${currentDirectory}/src/index.js`),
  /* path to index.html (build/index.html) */
  templatePath: resolve(`${currentDirectory}/public/index.html`),
  /* path to favicon.ico (build/favicon.ico) */
  faviconPath: resolve(`${currentDirectory}/public/favicon.ico`),
  /*  path to local styles (/src) */
  localCSS: resolve(`${currentDirectory}/src`),
  /* path to the globals.scss file (src/styles/globals/globals.scss) */
  globalCSS: resolve(`${currentDirectory}/src/styles/globals`),
  /* path to required ant design icons */
  icons: resolve(`${currentDirectory}/src/utils/icons/index.js`),
  /* analyzed client assets (next/analyze/client.html) */
  analyzePath: './analyze/client.html',
  /* compiled fonts build path (build/assets) */
  fontsFolder: 'assets',
  /* compiled CSS build path (build/css) */
  cssFolder: 'css',
  /* compiled JS build path (build/js) */
  jsFolder: 'js',
};
