const {
  DefinePlugin,
  HotModuleReplacementPlugin,
  IgnorePlugin,
} = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {
  analyzePath,
  cssFolder,
  faviconPath,
  publicPath,
  templatePath,
} = require('./paths');
const {
  ANALYZE,
  APIPORT,
  inDevelopment,
  inStaging,
  NODE_ENV,
  PORT,
} = require('./envs');

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
  `To create a production build, use \x1b[1m\x1b[32myarn build\x1b[0m.\n`,
);

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
  /* webpack ENV files */
  new DefinePlugin({
    'process.env': {
      APIPORT: JSON.stringify(APIPORT),
      NODE_ENV: JSON.stringify(NODE_ENV),
      PORT: JSON.stringify(PORT),
    },
  }),
  /* generates a manifest for all assets */
  new ManifestPlugin({
    fileName: 'asset-manifest.json',
    publicPath,
    generate: (seed, files) => {
      const manifestFiles = files.reduce(function(manifest, file) {
        manifest[file.name] = file.path;
        return manifest;
      }, seed);

      return {
        files: manifestFiles,
      };
    },
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
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime/]),
    /* removes moment locales */
    new IgnorePlugin(/^\.\/locale$/, /moment$/),
    new MiniCssExtractPlugin({
      filename: `${cssFolder}/[name].[contenthash:8].css`,
      chunkFilename: `${cssFolder}/[id].[contenthash:8].css`,
    }),
    /* copies some files from public to dist on build */
    new CopyWebpackPlugin([
      { from: 'public/robots.txt' },
      { from: 'public/manifest.json' },
      { from: 'public/logo_512.png' },
      { from: 'public/logo_192.png' },
    ]),
    /* runs bundle analyzer if in staging */
    inStaging &&
      ANALYZE &&
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: analyzePath,
      }),
  );
}

module.exports = plugins.filter(Boolean);
