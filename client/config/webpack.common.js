const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { defineJSRule, defineMediaRule, defineSCSSRule } = require('./rules');
const {
  entryPath,
  imagesFolder,
  faviconPath,
  fontsFolder,
  globalCSS,
  localCSS,
  templatePath,
} = require('./paths');
const { inDevelopment, requiresSourceMap } = require('./envs');

// =============================================================== //
// COMMON RULES                                                    //
// =============================================================== //
/* lints JS files on compilation */
const eslintLoader = defineJSRule({
  enforce: 'pre',
  loader: 'eslint-loader',
  options: {
    emitWarning: inDevelopment,
  },
});

/* handle React JS files */
const babelLoader = defineJSRule({ loader: 'babel-loader' });

/* handle image assets */
const imageLoader = defineMediaRule({
  test: /\.(png|jpg|gif|svg)$/,
  outputPath: imagesFolder,
});

/* handle font assets */
const fontLoader = defineMediaRule({
  test: /\.(woff2|ttf|woff|eot)$/,
  outputPath: fontsFolder,
});

/* handles SCSS imports that are component-level or partials */
const localSCSS = defineSCSSRule({
  include: [localCSS],
  exclude: [globalCSS],
  modules: true,
});

/* handles SCSS imports that are global only */
const globalSCSS = defineSCSSRule({ include: [globalCSS] });

/* utilizes source mapping */
const devtool = requiresSourceMap ? 'source-map' : '';

/* current webpack environment */
const mode = inDevelopment ? 'development' : 'production';

/* resolves component/module imports with extensions */
const resolve = {
  modules: ['src', 'node_modules'],
  extensions: ['*', '.js', '.jsx', '.css', '.scss'],
};

/* webpack plugins */
const plugins = [
  /* shows a compilation bar instead of the default compile message */
  new WebpackBar({
    minimal: false,
    compiledIn: false,
  }),
  /* simplifies creation of HTML files to serve your webpack bundles */
  new HtmlWebpackPlugin({
    template: templatePath,
    favicon: faviconPath,
  }),
];

// =============================================================== //
// COMMON OPTIONS                                                  //
// =============================================================== //
module.exports = {
  devtool,
  mode,
  entry: entryPath,
  module: {
    rules: [
      eslintLoader,
      babelLoader,
      imageLoader,
      fontLoader,
      localSCSS,
      globalSCSS,
    ],
  },
  resolve,
  plugins,
};
