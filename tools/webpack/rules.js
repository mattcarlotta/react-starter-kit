import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {
  hashedMediaName,
  inDevelopment,
  localIdentName,
  useCSSModules
} from "../../envs";
import { srcDirectory } from "./paths";

//= =============================================================================//
// RULES SETUP FOR WEBPACK DEVELOPMENT & PRODUCTION CONFIGS                      /
//= =============================================================================//

export default [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: "babel",
    options: { cacheDirectory: inDevelopment }
  },
  {
    test: /\.css$/,
    use: [
      "css-hot",
      MiniCssExtractPlugin.loader,
      {
        loader: "css",
        options: {
          importLoaders: 1,
          modules: useCSSModules,
          localIdentName,
          context: srcDirectory,
          sourceMap: true
        }
      },
      { loader: "postcss", options: { sourceMap: true } }
    ]
  },
  {
    test: /\.(scss|sass)$/,
    use: [
      "css-hot",
      MiniCssExtractPlugin.loader,
      {
        loader: "css",
        options: {
          importLoaders: 2,
          modules: useCSSModules,
          localIdentName,
          context: srcDirectory,
          sourceMap: true
        }
      },
      { loader: "postcss", options: { sourceMap: true } },
      {
        loader: "sass",
        options: {
          outputStyle: "expanded",
          sourceMap: true,
          sourceMapContents: !inDevelopment
        }
      }
    ]
  },
  {
    test: /\.(woff2?|ttf|eot|svg)$/,
    loader: "url",
    options: { limit: 10240, name: hashedMediaName }
  },
  {
    test: /\.(gif|png|jpe?g|webp)$/,
    // Any image below or equal to 10K will be converted to inline base64 instead
    loader: "url",
    options: { limit: 10240, name: hashedMediaName }
  }
];
