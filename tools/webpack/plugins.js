import {
  DefinePlugin,
  EnvironmentPlugin,
  HashedModuleIdsPlugin,
  HotModuleReplacementPlugin
} from "webpack";
import ManifestPlugin from "webpack-manifest-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";
import LodashModuleReplacementPlugin from "lodash-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";
import ImageminPlugin from "imagemin-webpack-plugin";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import WebpackBar from "webpackbar";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { ReactLoadablePlugin } from "react-loadable/webpack";
import { inDevelopment, nodeENV, PORT } from "../../envs";
import { loadableAssets, webpackAssets } from "./paths";

//= =============================================================================//
// PLUGIN SETUP FOR WEBPACK DEVELOPMENT & PRODUCTION CONFIGS                     /
//= =============================================================================//

export default () => {
  // Shared plugins
  const plugins = [
    new ManifestPlugin({
      fileName: webpackAssets,
      filter: file => file.isInitial
    }),
    // Creates client loadable asset chunks
    new ReactLoadablePlugin({
      filename: loadableAssets
    }),
    new MiniCssExtractPlugin({
      // Don't use hash in development, we need the persistent for "renderHtml.js"
      filename: inDevelopment ? "[name].css" : "[name].[contenthash:8].css",
      chunkFilename: inDevelopment
        ? "[id].chunk.css"
        : "[id].[contenthash:8].chunk.css"
    }),
    // Setup enviornment variables for client
    new EnvironmentPlugin({ NODE_ENV: JSON.stringify(nodeENV) }),
    // Displays compilation bar
    new WebpackBar({
      color: "#268bd2",
      minimal: false,
      compiledIn: false
    }),
    // Setup global variables for client
    new DefinePlugin({
      __CLIENT__: true
    })
  ];

  // Development Plugins
  if (inDevelopment) {
    plugins.push(
      // Displays complilation info
      new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: [
            `Your application is running on \x1b[1mhttp://localhost:${PORT}\x1b[0m`
          ],
          notes: [
            "Note that the development build is not optimized.",
            "To create a staging build, use \x1b[1m\x1b[32mnpm run staging\x1b[0m.",
            "To create a production build, use \x1b[1m\x1b[32mnpm run build\x1b[0m.\n"
          ]
        },
        clearConsole: true
      }),
      new HotModuleReplacementPlugin()
    );
  } else {
    // Production Plugins
    plugins.push(
      new HashedModuleIdsPlugin(),
      new CompressionPlugin({
        test: /\.jsx?$|\.css$|\.(scss|sass)$|\.html$/,
        threshold: 10240
      }),
      // Minimizing style for production
      new OptimizeCssAssetsPlugin(),
      // Smaller modular Lodash build
      new LodashModuleReplacementPlugin(),
      // Plugin to compress images with imagemin
      // Check "https://github.com/Klathmon/imagemin-webpack-plugin" for more configurations
      new ImageminPlugin({
        pngquant: { quality: "95-100" }
      }),
      // Visualize all of the webpack bundles
      // Check "https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin"
      // for more configurations
      new BundleAnalyzerPlugin({
        analyzerMode: nodeENV === "analyze" ? "server" : "disabled"
      })
    );
  }

  return plugins;
};
