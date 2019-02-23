//= =============================================================================//
// SERVER-SIDE MIDDLEWARES FOR CLIENT-SIDE COMPILATION                            /
//= =============================================================================//

module.exports = app => {
  const webpack = require("webpack");
  const webpackConfig = require("../../../tools/webpack/webpack.babel");
  const compiler = webpack(webpackConfig);
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");

  const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    headers: { "Access-Control-Allow-Origin": "*" },
    hot: true,
    quiet: true,
    noInfo: true,
    stats: "errors-only",
    logLevel: "silent",
    serverSideRender: true
  });

  const hotMiddleware = webpackHotMiddleware(compiler, {
    stats: "errors-only",
    logLevel: "silent",
    log: false,
    quiet: true,
    noInfo: true
  });

  app.use(devMiddleware);
  app.use(hotMiddleware);
};
