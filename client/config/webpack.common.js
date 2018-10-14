const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  entryPath,
  imagesFolder,
  faviconPath,
  fontsFolder,
  templatePath,
} = require('./paths');

module.exports = {
  entry: entryPath,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          emitWarning: process.env.NODE_ENV !== 'production',
        },
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: imagesFolder,
            },
          },
        ],
      },
      {
        test: /\.(woff2|ttf|woff|eot|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: fontsFolder,
            },
          },
        ],
      },
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
};
