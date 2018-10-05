const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const { outputPath } = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: outputPath,
    chunkFilename: '[name].js',
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    quiet: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'), // eslint-disable-line global-require
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9',
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Your application is running on http://localhost:3000'],
      },
      clearConsole: true,
      additionalFormatters: [],
      additionalTransformers: [],
    }),
    new ErrorOverlayPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
};
