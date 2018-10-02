const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'src/index.js'),
  templatePath: path.resolve(__dirname, '../', 'public/index.html'),
  faviconPath: path.resolve(__dirname, '../', 'public/favicon.ico'),
  imagesFolder: 'media',
  fontsFolder: 'assets',
  cssFolder: 'css',
  jsFolder: 'js',
};
