const { jsFolder, outputPath, publicPath } = require('./paths');
const { inDevelopment } = require('./envs');

const filename = '[name].js';

/* webpack compile output options */
const output = {
  filename: inDevelopment ? filename : `${jsFolder}/[name].[hash].js`,
  path: outputPath,
  chunkFilename: inDevelopment ? filename : '[name].[chunkhash].js',
  publicPath,
};

module.exports = output;
