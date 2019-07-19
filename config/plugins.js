const CleanWebpackPlugin = require('clean-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');
const { cssFolder, faviconPath, templatePath } = require('./paths');
const { APIPORT, inDevelopment, NODE_ENV, PORT } = require('./envs');

// =============================================================== //
// WEBPACK PLUGINS                                                 //
// =============================================================== //

/* friendly errors console notes */
const notes = inDevelopment
  ? [`Note that the development build is not optimized.`]
  : [
      `Note that this mode is for development and staging purposes only.`,
      `Please use a suitable server-side solution to serve the build folder.`,
    ];

notes.push(
  `To create a production build, use \x1b[1m\x1b[32myarn build\x1b[0m.`,
);

module.exports = () => {
  /* common webpack plugins */
  const plugins = [
    /* shows a compilation bar instead of the default compile message */
    new WebpackBar({
      color: '#268bd2',
      minimal: false,
      compiledIn: false,
    }),
    /* simplifies creation of HTML files to serve your webpack bundles */
    new HtmlWebpackPlugin({
      template: templatePath,
      favicon: faviconPath,
    }),
    /* in console error */
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running on \x1b[1mhttp://localhost:${PORT}\x1b[0m`,
        ],
        notes,
      },
      clearConsole: true,
    }),
    new DefinePlugin({
      'process.env.APIPORT': JSON.stringify(APIPORT),
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'process.env.PORT': JSON.stringify(PORT),
    }),
  ];

  /* development webpack plugins */
  if (inDevelopment) {
    plugins.push(
      /* in browser error overlay */
      new ErrorOverlayPlugin(),
      /* hot-module plugin to update files without refreshing the page */
      new HotModuleReplacementPlugin(),
    );
  } else {
    /* production webpack plugins */
    plugins.push(
      /* compiles SCSS to a single CSS file */
      new MiniCssExtractPlugin({
        filename: `${cssFolder}/[name].[contenthash:8].css`,
        chunkFilename: `[id].[contenthash:8].css`,
      }),
      /* removes old build folder for each new compile */
      new CleanWebpackPlugin({
        dry: !!PORT,
      }),
    );
  }

  return plugins;
};
