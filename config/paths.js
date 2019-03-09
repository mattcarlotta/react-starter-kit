const { resolve } = require('path');
const { currentDirectory } = require('./envs');

module.exports = {
  /* project root directory */
  root: resolve(`${currentDirectory}`),
  /* project publicPath */
  publicPath: '/',
  /* compiled build output path (/build) */
  outputPath: resolve(`${currentDirectory}/build`),
  /* path to public folder (./public) */
  publicFolder: resolve(`${currentDirectory}/public`),
  /* entry point to the application index (./src/index.js) */
  entryPath: resolve(`${currentDirectory}/src/index.js`),
  /* path to index.html (build/index.html) */
  templatePath: resolve(`${currentDirectory}/public/index.html`),
  /* path to favicon.ico (build/favicon.ico) */
  faviconPath: resolve(`${currentDirectory}/public/favicon.ico`),
  /* path to local styles (/src) */
  localCSS: resolve(`${currentDirectory}/src`),
  /* path to the globals.scss file (src/styles/globals/globals.scss) */
  globalCSS: resolve(`${currentDirectory}/src/styles/globals`),
  /* compiled images build path (build/media) */
  imagesFolder: 'media',
  /* compiled fonts build path (build/assets) */
  fontsFolder: 'assets',
  /* compiled CSS build path (build/css) */
  cssFolder: 'css',
  /* compiled JS build path (build/js) */
  jsFolder: 'js',
};
