const { jsFolder, outputPath, publicPath } = require('./paths');
const { inDevelopment } = require('./envs');

// =============================================================== //
// WEBPACK COMPILATION OUTPUT                                      //
// =============================================================== //

/* webpack compile output options */
module.exports = {
  filename: inDevelopment ? '[name].js' : `${jsFolder}/[name].[hash].js`,
  path: outputPath,
  chunkFilename: inDevelopment ? '[name].js' : '[name].[chunkhash].js',
  publicPath,
};
