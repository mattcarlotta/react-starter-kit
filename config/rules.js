const MiniCssExtractPlugin = require('mini-css-extract-plugin').loader;
const { imagesFolder, fontsFolder, globalCSS, localCSS } = require('./paths');
const { inDevelopment, localIdentName } = require('./envs');

// =============================================================== //
// WEBPACK RULES                                                   //
// =============================================================== //

/* defines a javascript rule */
const jsRule = ({ enforce, loader, options }) => ({
  enforce: enforce || 'post',
  test: /\.(js|jsx)$/,
  loader,
  exclude: /(node_modules)/,
  options: options || {},
});

/* defines a media (font/image) rule */
const mediaRule = ({ test, outputPath }) => ({
  test,
  use: [
    {
      loader: 'file-loader',
      options: {
        outputPath,
      },
    },
  ],
});

/* defines a SCSS rule */
const sassRule = ({ include, exclude, modules, sourceMap }) => ({
  test: /\.s?css$/,
  include,
  exclude,
  use: [
    inDevelopment ? 'style-loader' : MiniCssExtractPlugin,
    {
      loader: 'css-loader',
      options: {
        sourceMap: sourceMap || !inDevelopment,
        modules: modules || false,
        camelCase: true,
        localIdentName,
      },
    },
    'sass-loader',
  ],
});

/* webpack module rules */
const rules = [
  /* lints JS files on compilation */
  jsRule({
    enforce: 'pre',
    loader: 'eslint-loader',
    options: {
      emitWarning: inDevelopment,
    },
  }),
  /* handle React JS files */
  jsRule({
    loader: 'babel-loader',
    options: {
      cacheDirectory: inDevelopment,
      cacheCompression: false,
    },
  }),
  /* handle image assets */
  mediaRule({
    test: /\.(png|jpg|gif|svg)$/,
    outputPath: imagesFolder,
  }),
  /* handle font assets */
  mediaRule({
    test: /\.(woff2|ttf|woff|eot)$/,
    outputPath: fontsFolder,
  }),
  /* handles SCSS imports that are component-level or partials */
  sassRule({
    include: [localCSS],
    exclude: [globalCSS],
    modules: true,
  }),
  /* handles SCSS imports that are global only */
  sassRule({ include: [globalCSS] }),
];

module.exports = rules;
