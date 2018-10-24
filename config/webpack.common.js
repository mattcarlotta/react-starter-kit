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

/* image assets */
const imageLoader = defineMediaRule({
  test: /\.(png|jpg|gif|svg)$/,
  outputPath: imagesFolder,
});

/* font assets */
const fontLoader = defineMediaRule({
  test: /\.(woff2|ttf|woff|eot)$/,
  outputPath: fontsFolder,
});

/* SCSS imports that are component-level or partials */
const localSCSS = defineSCSSRule({
  include: [localCSS],
  exclude: [globalCSS],
  modules: true,
});

/* SCSS imports that are global */
const globalSCSS = defineSCSSRule({ include: [globalCSS] });

// =============================================================== //
// COMMON OPTIONS                                                  //
// =============================================================== //
module.exports = {
  mode: inDevelopment ? 'development' : 'production',
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
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
  },
  plugins: [
    new WebpackBar({
      minimal: false,
      compiledIn: false,
    }),
    new HtmlWebpackPlugin({
      template: templatePath,
      favicon: faviconPath,
    }),
  ],
  devtool: requiresSourceMap ? 'source-map' : '',
};
