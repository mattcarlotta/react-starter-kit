const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { cssFolder, globalCSS, jsFolder, outputPath, root } = require('./paths');

const hashFilename = '[contenthash:8].css';

module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: { map: { inline: false, annotation: true } },
      }),
    ],
  },
  mode: 'production',
  output: {
    filename: `${jsFolder}/[name].[hash].js`,
    path: outputPath,
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: [globalCSS],
        use: [
          MiniCssExtractPlugin.loader,
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
          MiniCssExtractPlugin.loader,
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
    new CleanWebpackPlugin([outputPath.split('/').pop()], {
      root,
    }),
    new MiniCssExtractPlugin({
      filename: `${cssFolder}/[name].${hashFilename}`,
      chunkFilename: `[id].${hashFilename}`,
    }),
  ],
  devtool: 'source-map',
};
