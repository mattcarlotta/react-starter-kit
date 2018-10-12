const resolve = require('path').resolve;

module.exports = {
  root: resolve(__dirname, '../'),
  outputPath: resolve(__dirname, '../', 'build'),
  entryPath: resolve(__dirname, '../', 'src/index.js'),
  templatePath: resolve(__dirname, '../', 'public/index.html'),
  faviconPath: resolve(__dirname, '../', 'public/favicon.ico'),
  globalCSS: resolve(__dirname, '../', 'src/styles/globals'),
  imagesFolder: 'media',
  fontsFolder: 'assets',
  cssFolder: 'css',
  jsFolder: 'js',
};
