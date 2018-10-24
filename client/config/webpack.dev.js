const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const { outputPath, publicPath } = require('./paths');
const { PORT } = require('./envs');

// =============================================================== //
// DEVELOPMENT VARIABLES                                           //
// =============================================================== //
/* output file name */
const filename = '[name].js';

// =============================================================== //
// DEVELOPMENT CONFIG                                              //
// =============================================================== //
module.exports = {
  output: {
    filename,
    path: outputPath,
    chunkFilename: filename,
    publicPath,
  },
  devServer: {
    host: 'localhost',
    port: PORT,
    quiet: true,
    historyApiFallback: true,
    inline: true,
    open: true,
  },
  plugins: [
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
    new ErrorOverlayPlugin(),
  ],
};
