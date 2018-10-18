const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const { globalCSS, outputPath } = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: outputPath,
    chunkFilename: '[name].js',
    publicPath: '/',
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
        test: /\.s?css$/,
        exclude: [globalCSS],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              camelCase: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.s?css$/,
        include: [globalCSS],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              camelCase: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running on \x1b[1mhttp://localhost:3000\x1b[0m`,
        ],
        notes: [
          `Note that the development build is not optimized.`,
          `To create a production build, use \x1b[1m\x1b[32mnpm run build\x1b[0m.\n`,
        ],
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
