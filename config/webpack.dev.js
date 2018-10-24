const HotModuleReplacementPlugin = require('webpack')
  .HotModuleReplacementPlugin;
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const { outputPath, publicPath } = require('./paths');
const { PORT } = require('./envs');

// =============================================================== //
// DEVELOPMENT VARIABLES                                           //
// =============================================================== //
/* output file name */
const filename = '[name].js';

/* webpack compile output options */
const output = {
  filename,
  path: outputPath,
  chunkFilename: filename,
  publicPath,
};

/* webpack dev server options */
const devServer = {
  /* where to host */
  host: 'localhost',
  /* current port to host on */
  port: PORT,
  /* suppresses compiled information */
  quiet: true,
  /* allows webpack to fallback to react-router if route isn't found */
  historyApiFallback: true,
  /* shows on-screen errors before reloading */
  inline: true,
  /* allows files to be replaced without refreshing the browser */
  hot: true,
  /* opens the default browser on load */
  open: true,
};

/* webpack dev server options */
const plugins = [
  /* in console error */
  new FriendlyErrorsWebpackPlugin({
    compilationSuccessInfo: {
      messages: [
        `Your application is running on \x1b[1mhttp://localhost:${PORT}\x1b[0m`,
      ],
      notes: [
        `Note that the development build is not optimized.`,
        `To create a staging build, use \x1b[1m\x1b[32mnpm run staging\x1b[0m.`,
        `To create a production build, use \x1b[1m\x1b[32mnpm run build\x1b[0m.\n`,
      ],
    },
    clearConsole: true,
  }),
  /* in browser error overlay */
  new ErrorOverlayPlugin(),
  /* hot-module plugin to update files without refreshing the page */
  new HotModuleReplacementPlugin(),
];

// =============================================================== //
// DEVELOPMENT CONFIG                                              //
// =============================================================== //
module.exports = {
  output,
  devServer,
  plugins,
};
