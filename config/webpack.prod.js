const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {
  cssFolder,
  jsFolder,
  outputPath,
  publicPath,
  root,
} = require('./paths');
const { requiresSourceMap } = require('./envs');

// =============================================================== //
// PRODUCTION/STAGING VARIABLES                                    //
// =============================================================== //
/* hashing file names for compiled CSS */
const hashFilename = '[contenthash:8].css';

/* determines whether or not CSS sourcemaps are needed */
const cssProcessorOptions = requiresSourceMap
  ? { cssProcessorOptions: { map: { inline: false, annotation: true } } }
  : {};

/* uglify and compile JS; compile and optimize SCSS to CSS */
const optimization = {
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: requiresSourceMap,
    }),
    new OptimizeCSSAssetsPlugin(cssProcessorOptions),
  ],
};

/* build output */
const output = {
  filename: `${jsFolder}/[name].[hash].js`,
  path: outputPath,
  chunkFilename: '[name].[chunkhash].js',
  publicPath,
};

/* webpack plugins */
const plugins = [
  /* removes build folder for each new compile session */
  new CleanWebpackPlugin([outputPath.split('/').pop()], {
    root,
  }),
  /* compiles SCSS to a single CSS file */
  new MiniCssExtractPlugin({
    filename: `${cssFolder}/[name].${hashFilename}`,
    chunkFilename: `[id].${hashFilename}`,
  }),
];

// =============================================================== //
// PRODUCTION/STAGING CONFIG                                       //
// =============================================================== //
module.exports = {
  optimization,
  output,
  plugins,
};
