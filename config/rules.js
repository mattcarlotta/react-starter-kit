const MiniCssExtractPlugin = require("mini-css-extract-plugin").loader;
const { fontsFolder } = require("./paths");
const { inDevelopment, localIdentName } = require("./envs");

// =============================================================== //
// WEBPACK RULES                                                   //
// =============================================================== //

/* defines a javascript rule */
const jsRule = ({ enforce, loader, options }) => ({
  enforce: enforce || "post",
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
      loader: "file-loader",
      options: {
        outputPath,
      },
    },
  ],
});

/* defines a SCSS rule */
const cssRule = ({ include, exclude, modules, sourceMap, test }) => ({
  test,
  include,
  exclude,
  use: [
    inDevelopment ? "style-loader" : MiniCssExtractPlugin,
    {
      loader: "css-loader",
      options: {
        sourceMap: sourceMap || !inDevelopment,
        modules: {
          mode: modules ? "local" : "global",
          localIdentName,
        },
        localsConvention: "camelCase",
      },
    },
    "sass-loader",
  ],
});

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const scssRegex = /\.scss$/;
const scssModuleRegex = /\.module\.scss$/;

/* webpack module rules */
const rules = [
  /* lints JS files on compilation */
  jsRule({
    enforce: "pre",
    loader: "eslint-loader",
    options: {
      emitWarning: inDevelopment,
    },
  }),
  /* handle React JS files */
  jsRule({
    loader: "babel-loader",
    options: {
      cacheDirectory: inDevelopment,
      cacheCompression: false,
    },
  }),
  /* handle font assets */
  mediaRule({
    test: /\.(woff2|ttf|woff|eot|svg|png|jpg|jpeg)$/,
    outputPath: fontsFolder,
  }),
  /* handle css */
  cssRule({
    test: cssRegex,
    exclude: cssModuleRegex,
  }),
  /* handle css modules */
  cssRule({
    test: cssRegex,
    include: [cssModuleRegex],
    modules: true,
  }),
  /* handle scss */
  cssRule({
    test: scssRegex,
    exclude: scssModuleRegex,
  }),
  /* handle scss modules */
  cssRule({
    test: scssRegex,
    include: scssModuleRegex,
    modules: true,
  }),
];

module.exports = rules;
