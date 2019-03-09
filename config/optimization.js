const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { inDevelopment } = require('./envs');

// =============================================================== //
// WEBPACK OPTIMATIZATIONS                                         //
// =============================================================== //

const cssProcessorOptions = !inDevelopment
  ? { cssProcessorOptions: { map: { inline: false, annotation: true } } }
  : {};

/* webpack compiler optimizations */
let optimization = {};
if (!inDevelopment) {
  optimization = {
    minimizer: [
      /* uglify and compile JS */
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: !inDevelopment,
      }),
      /* compile and optimize SCSS to CSS */
      new OptimizeCSSAssetsPlugin(cssProcessorOptions),
    ],
  };
}

module.exports = optimization;
