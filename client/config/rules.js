const MiniCssExtractPlugin = require('mini-css-extract-plugin').loader;
const { inDevelopment, localIdentName, requiresSourceMap } = require('./envs');

/* defines a javascript rule */
exports.defineJSRule = ({ enforce, loader, options }) => ({
  enforce: enforce || 'post',
  test: /\.(js|jsx)$/,
  loader,
  exclude: /(node_modules)/,
  options: options || {},
});

/* defines a media (font/image) rule */
exports.defineMediaRule = ({ test, outputPath }) => ({
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
exports.defineSCSSRule = ({ include, exclude, modules, sourceMap }) => ({
  test: /\.s?css$/,
  include,
  exclude,
  use: [
    inDevelopment ? 'style-loader' : MiniCssExtractPlugin,
    {
      loader: 'css-loader',
      options: {
        sourceMap: sourceMap || requiresSourceMap,
        modules: modules || false,
        camelCase: true,
        localIdentName,
      },
    },
    'sass-loader',
  ],
});
