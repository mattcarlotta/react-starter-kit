const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
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
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.s?css$/,
        include: [globalCSS],
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
};
